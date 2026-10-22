#!/usr/bin/env python3
"""Sample an encoded local video into timestamped contact sheets. No quality score or AE execution."""
import argparse
from fractions import Fraction
import io
import json
import math
from pathlib import Path
import subprocess
from PIL import Image, ImageDraw, ImageFont


def run(args):
    return subprocess.run(args, check=True, capture_output=True, timeout=90).stdout


def timing_events(path):
    raw = path.read_text(encoding="utf-8-sig").strip().rstrip(";").strip()
    if raw.startswith("(") and raw.endswith(")"):
        raw = raw[1:-1]
    data = json.loads(raw)
    result = []
    for scene in data.get("scenes", []):
        for entry in [scene] + scene.get("cues", []):
            for key in ("start", "end"):
                t = entry.get(key)
                if isinstance(t, (int, float)) and not isinstance(t, bool) and math.isfinite(t):
                    result.append(t)
    return result


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("video", type=Path)
    p.add_argument("--out", required=True, type=Path, help="New directory, never overwritten.")
    p.add_argument("--interval", type=float, default=2.0)
    p.add_argument("--start", type=float, default=0)
    p.add_argument("--end", type=float)
    p.add_argument("--timing", type=Path, help="Optional unshifted JSON timeline; sample around boundaries too.")
    a = p.parse_args()
    if not math.isfinite(a.interval) or a.interval < 0.05:
        p.error("interval must be finite and >= 0.05 seconds")
    if a.out.exists():
        p.error("output directory exists; choose a new version")
    meta = json.loads(run(["ffprobe", "-v", "error", "-show_format", "-show_streams", "-of", "json", str(a.video.resolve())]))
    video = next((x for x in meta["streams"] if x.get("codec_type") == "video"), None)
    if not video:
        p.error("no video stream")
    duration = float(video.get("duration") or meta["format"].get("duration", 0))
    try:
        fps = float(Fraction(video.get("avg_frame_rate", "0/1")))
    except (ValueError, ZeroDivisionError):
        fps = 0
    if not math.isfinite(duration) or duration <= 0 or not math.isfinite(fps) or fps <= 0:
        p.error("positive duration and average fps required")
    end = duration if a.end is None else a.end
    if not math.isfinite(a.start) or not math.isfinite(end) or not 0 <= a.start < end <= duration:
        p.error("range must satisfy 0 <= start < end <= duration")
    last = max(a.start, end - 1 / fps)
    count = math.ceil((end - a.start) / a.interval)
    if count > 600:
        p.error("more than 600 samples; review smaller time ranges or increase interval")
    times = {a.start, last}
    times.update(min(last, a.start + i * a.interval) for i in range(count))
    if a.timing:
        for t in timing_events(a.timing):
            for delta in (-1 / fps, 0, 1 / fps):
                at = t + delta
                if a.start <= at <= last:
                    times.add(at)
    times = sorted({round(t, 6) for t in times})
    if len(times) > 600:
        p.error("more than 600 event samples; review smaller time ranges")
    a.out.mkdir(parents=True)
    cell_w, cell_h, columns, per_page = 326, 210, 4, 24
    try:
        font = ImageFont.truetype("DejaVuSans.ttf", 14)
    except OSError:
        font = ImageFont.load_default()
    pages = []
    for page_start in range(0, len(times), per_page):
        selected = times[page_start:page_start + per_page]
        rows = math.ceil(len(selected) / columns)
        sheet = Image.new("RGB", (columns * cell_w, rows * cell_h), "#202020")
        draw = ImageDraw.Draw(sheet)
        for i, t in enumerate(selected):
            image = Image.open(io.BytesIO(run(["ffmpeg", "-v", "error", "-ss", str(t), "-i", str(a.video.resolve()),
                "-map", "0:v:0", "-frames:v", "1", "-vf", "scale=640:360:force_original_aspect_ratio=decrease", "-f", "image2pipe", "-c:v", "png", "-"]))).convert("RGB")
            image.thumbnail((cell_w - 8, cell_h - 30))
            x, y = (i % columns) * cell_w, (i // columns) * cell_h
            sheet.paste(image, (x + (cell_w - image.width) // 2, y + 4))
            draw.text((x + 6, y + cell_h - 23), f"requested t={t:.3f}s", font=font, fill="white")
        target = a.out / f"sheet_{len(pages) + 1:03}.jpg"
        sheet.save(target, quality=92)
        pages.append(target.name)
    report = {"scope": "Human review samples only; no audio alignment, quality score or After Effects execution.",
        "video": str(a.video.resolve()), "width": video.get("width"), "height": video.get("height"),
        "duration": duration, "avg_fps": fps, "codec": video.get("codec_name"), "pixel_format": video.get("pix_fmt"),
        "audio": [{"codec": x.get("codec_name"), "sample_rate": x.get("sample_rate"), "channels": x.get("channels")}
                  for x in meta["streams"] if x.get("codec_type") == "audio"],
        "range": [a.start, end], "requested_times": times, "sheets": pages,
        "limitations": "Labels show requested seek times, not decoded PTS. VFR/rotation require separate inspection; inspect playback and full-resolution text too."}
    (a.out / "review_report.json").write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps({"sheets": len(pages), "samples": len(times), "report": str(a.out / "review_report.json")}))


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, KeyError, subprocess.SubprocessError) as exc:
        raise SystemExit("Review failed: " + str(exc))
