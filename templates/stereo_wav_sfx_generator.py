"""
Reusable 48kHz 16-bit Stereo WAV Procedural Sound Effects (SFX) Synthesizer for After Effects Motion Graphics.
"""
import math
import struct
import wave

SAMPLE_RATE = 48000

def write_stereo_wav(filepath, left_samples, right_samples):
    n = min(len(left_samples), len(right_samples))
    with wave.open(str(filepath), 'w') as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        buf = bytearray()
        for i in range(n):
            l_val = max(-1.0, min(1.0, left_samples[i]))
            r_val = max(-1.0, min(1.0, right_samples[i]))
            buf.extend(struct.pack('<hh', int(l_val * 32767), int(r_val * 32767)))
        wf.writeframes(bytes(buf))
