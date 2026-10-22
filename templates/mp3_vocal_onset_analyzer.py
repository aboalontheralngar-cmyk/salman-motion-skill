"""
Acoustic MP3/WAV Vocal-Onset Analyzer (250Hz - 3400Hz Bandpass Filter) for Style D
(Spiritual Nasheed & Poetic Kinetic Typography Montage).
Extracts breath pauses and millisecond-accurate onset windows for Arabic verses and words.
"""
import subprocess
import wave
import struct
import math

def extract_vocal_envelope(audio_path, sr=16000, hop_sec=0.02):
    """
    Uses ffmpeg bandpass (250Hz-3400Hz) to isolate human vocals and returns RMS energy envelope.
    """
    tmp_wav = "/tmp/_vocal_bandpass.wav"
    subprocess.run([
        "ffmpeg", "-y", "-i", str(audio_path),
        "-af", "highpass=f=250,lowpass=f=3400",
        "-ac", "1", "-ar", str(sr), tmp_wav
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    with wave.open(tmp_wav, "rb") as wf:
        n_frames = wf.getnframes()
        raw = wf.readframes(n_frames)
        samples = struct.unpack(f"<{n_frames}h", raw)

    hop = int(sr * hop_sec)
    env = []
    for start in range(0, len(samples) - hop, hop):
        chunk = samples[start:start + hop]
        rms = math.sqrt(sum(s * s for s in chunk) / float(hop)) / 32768.0
        env.append((round(start / float(sr), 3), rms))
    return env
