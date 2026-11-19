#!/usr/bin/env python3
"""Sample a continuous editorial camera for After Effects and Three.js."""

import argparse
import json
import math
from pathlib import Path


def sample(config):
    fps = config["fps"]
    duration = config["durationFrames"]
    step = config.get("sampleEvery", 2)
    cues = config["cues"]
    if not isinstance(fps, (int, float)) or not math.isfinite(fps) or fps <= 0:
        raise ValueError("fps must be positive and finite")
    if type(duration) is not int or duration < 2 or type(step) is not int or step < 1:
        raise ValueError("durationFrames must be at least 2; sampleEvery must be a positive integer")
    if len(cues) < 2:
        raise ValueError("Add at least two cues")
    frames = [cue["frame"] for cue in cues]
    poses = [cue["pose"] for cue in cues]
    if any(type(frame) is not int for frame in frames):
        raise ValueError("Cue frames must be integers")
    if frames[0] != 0 or frames[-1] != duration - 1:
        raise ValueError("Cues must cover frame zero through the last frame")
    if any(len(p) != 7 or not all(isinstance(v, (int, float)) and math.isfinite(v) for v in p)
           or p[6] <= 0 for p in poses):
        raise ValueError("Each pose must contain seven finite numbers and a positive zoom")
    gaps = [b - a for a, b in zip(frames, frames[1:])]
    if any(gap <= 0 for gap in gaps):
        raise ValueError("Cue frames must increase strictly")
    speeds = [(b[0] - a[0]) / gap for a, b, gap in zip(poses, poses[1:], gaps)]
    if any(speed < 0 for speed in speeds):
        raise ValueError("Camera X must be nondecreasing")
    # A monotone cubic preserves reading drift while smoothing speed at the cue joins.
    slopes = [speeds[0]]
    for index, (left, right) in enumerate(zip(speeds, speeds[1:])):
        before, after = gaps[index:index + 2]
        a, b = 2 * after + before, after + 2 * before
        slopes.append((a + b) / (a / left + b / right) if left and right else 0)
    slopes.append(speeds[-1])

    result = []
    segment = 0
    for frame in sorted(set(range(0, duration, step)).union(frames)):
        while frame > frames[segment + 1]:
            segment += 1
        gap = gaps[segment]
        t = (frame - frames[segment]) / gap
        eased = t * t * (3 - 2 * t)
        pose = [a + (b - a) * eased for a, b in zip(poses[segment], poses[segment + 1])]
        pose[0] += gap * (t * (1 - t) ** 2 * slopes[segment] - t * t * (1 - t) * slopes[segment + 1])
        result.append({"frame": frame, "time": frame / fps, "pose": pose})
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    try:
        config = json.loads(args.source.read_text(encoding="utf-8"))
        samples = sample(config)
        args.output.write_text(json.dumps({"fps": config["fps"], "samples": samples}, indent=2) + "\n")
    except (OSError, KeyError, TypeError, ValueError) as error:
        parser.exit(2, f"Camera sample error: {error}\n")


if __name__ == "__main__":
    main()
