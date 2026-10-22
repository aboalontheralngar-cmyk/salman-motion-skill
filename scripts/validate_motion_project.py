#!/usr/bin/env python3
"""Check timeline data and JSX syntax; does not emulate or render After Effects."""
import argparse
import json
import math
from pathlib import Path
import re
import shutil
import subprocess
import sys


def finite(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def validate_timing(path, errors, offset=0.0):
    raw = path.read_text(encoding="utf-8-sig").strip().rstrip(";").strip()
    if raw.startswith("(") and raw.endswith(")"):
        raw = raw[1:-1].strip()
    data = json.loads(raw)  # Never execute supplied JSX data.
    if not isinstance(data, dict):
        errors.append("Timeline root must be an object.")
        return {}
    duration, fps = data.get("duration"), data.get("fps", 30)
    if not finite(duration) or duration <= 0:
        errors.append("duration must be a positive finite number.")
    if not finite(fps) or fps <= 0:
        errors.append("fps must be a positive finite number.")
        fps = 30
    tolerance = 1 / fps + 1e-6
    scenes = data.get("scenes")
    if not isinstance(scenes, list) or not scenes:
        errors.append("scenes must be a nonempty list.")
        return {}
    seen_ids = set()
    previous_end = 0.0
    cue_count = 0
    for index, scene in enumerate(scenes):
        label = "scene[%d]" % index
        if not isinstance(scene, dict):
            errors.append(label + " must be an object.")
            continue
        number = scene.get("scene")
        if not isinstance(number, int) or isinstance(number, bool) or number <= 0:
            errors.append(label + ".scene must be a positive asset number.")
        layout = scene.get("layout")
        if layout is not None:
            if layout not in ("CENTER_ONLY", "TEXT_LEFT", "TEXT_RIGHT", "TEXT_TOP", "TEXT_BOTTOM"):
                errors.append(label + ".layout is invalid.")
        elif scene.get("side") not in ("LEFT", "RIGHT"):
            errors.append(label + " needs layout or LEFT/RIGHT text side.")
        if "id" in scene:
            sid = scene["id"]
            if not isinstance(sid, str) or not sid.strip():
                errors.append(label + ".id must be a nonempty string.")
            elif sid in seen_ids:
                errors.append(label + ".id is duplicated.")
            else:
                seen_ids.add(sid)
        start, end = scene.get("start"), scene.get("end")
        valid_bounds = finite(start) and finite(end) and 0 <= start < end
        if not valid_bounds:
            errors.append(label + " needs finite bounds 0 <= start < end.")
        else:
            if abs(start - previous_end) > tolerance:
                errors.append(label + " has a gap/overlap greater than one frame.")
            if finite(duration) and end > duration + tolerance:
                errors.append(label + " exceeds duration.")
            previous_end = end
        cues = scene.get("cues", [])
        if not isinstance(cues, list):
            errors.append(label + ".cues must be a list.")
            continue
        last_cue_end = start if valid_bounds else 0
        for ci, cue in enumerate(cues):
            clabel = label + ".cues[%d]" % ci
            cue_count += 1
            if not isinstance(cue, dict):
                errors.append(clabel + " must be an object.")
                continue
            if not isinstance(cue.get("text"), str) or not cue["text"].strip():
                errors.append(clabel + " requires nonempty text.")
            cs, ce = cue.get("start"), cue.get("end")
            if "fixedTiming" in cue and not isinstance(cue["fixedTiming"], bool):
                errors.append(clabel + ".fixedTiming must be boolean.")
            if finite(cs) and finite(ce) and not cue.get("fixedTiming", False):
                cs, ce = cs + offset, ce + offset
            if not (finite(cs) and finite(ce) and 0 <= cs < ce):
                errors.append(clabel + " has invalid time bounds.")
                continue
            if valid_bounds and (cs < start - 1e-6 or ce > end + 1e-6):
                errors.append(clabel + " falls outside its scene.")
            if cs < last_cue_end - 1e-6:
                errors.append(clabel + " overlaps the previous cue.")
            last_cue_end = ce
    if finite(duration) and abs(previous_end - duration) > tolerance:
        errors.append("Last scene must cover duration within one frame.")
    return {"scenes": len(scenes), "cues": cue_count, "duration": duration, "fps": fps}


def validate_jsx(path, errors, warnings):
    source = path.read_text(encoding="utf-8-sig")
    if re.search(r'\.property\(\s*[\"\']ADBE Point of Interest[\"\']\s*\)', source):
        errors.append("Invalid camera matchName: use ADBE Anchor Point in Transform.")
    # Conservative hint only: arbitrary variable/property names cannot be resolved statically.
    if re.search(r'Softness[^\n]{0,100}(?:setValue\(|,\s*)\s*35(?:\D|$)', source):
        warnings.append("Review Spectrum Softness: its normalized value may need 0.35.")
    node = shutil.which("node")
    if not node:
        warnings.append("Node unavailable: JSX JavaScript syntax check skipped.")
        return "skipped"
    # AE preprocessor directives are not JavaScript. Check remaining source only.
    filtered = "\n".join("" if re.match(r"\s*#(?:target|include|includepath)\b", line) else line
                         for line in source.splitlines())
    result = subprocess.run([node, "--check"], input=filtered, text=True,
                            capture_output=True, timeout=30)
    if result.returncode:
        errors.append("JSX syntax check failed: " + result.stderr.strip())
        return "failed"
    return "passed (directives excluded; no AE execution or ES3 guarantee)"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--timing", required=True, type=Path)
    parser.add_argument("--jsx", type=Path)
    parser.add_argument("--offset", type=float, default=0, help="Effective lyric shift in seconds; fixedTiming cues are exempt.")
    args = parser.parse_args()
    errors, warnings = [], []
    report = {"scope": "Static timeline/syntax checks only; no audio alignment or native AE rendering."}
    try:
        if not math.isfinite(args.offset) or abs(args.offset) > 5:
            raise ValueError("offset must be finite and within -5..5 seconds")
        report["offset"] = args.offset
        report["timing"] = validate_timing(args.timing, errors, args.offset)
        if args.jsx:
            report["jsx"] = validate_jsx(args.jsx, errors, warnings)
    except (OSError, ValueError, subprocess.SubprocessError) as exc:
        errors.append(str(exc))
    report.update(ok=not errors, errors=errors, warnings=warnings)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
