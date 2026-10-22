#!/usr/bin/env python3
"""Validate PNG chunks and full pixel streams before packaging AE assets."""
import argparse
import json
import struct
import zlib
from pathlib import Path


def validate(path):
    data = path.read_bytes()
    if data[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('invalid PNG signature')
    offset, header, ended, image_data = 8, None, False, []
    while offset < len(data):
        if offset + 12 > len(data):
            raise ValueError('truncated chunk header')
        size = struct.unpack_from('>I', data, offset)[0]
        end = offset + 12 + size
        if end > len(data):
            raise ValueError('truncated PNG chunk')
        kind = data[offset + 4:offset + 8]
        body = data[offset + 8:offset + 8 + size]
        actual = zlib.crc32(kind + body) & 0xffffffff
        expected = struct.unpack_from('>I', data, offset + 8 + size)[0]
        if actual != expected:
            raise ValueError('CRC mismatch: ' + kind.decode('ascii', errors='replace'))
        if kind == b'IHDR':
            if header is not None or size != 13 or offset != 8:
                raise ValueError('invalid IHDR')
            header = struct.unpack('>IIBBBBB', body)
        if kind == b'IDAT':
            image_data.append(body)
        offset = end
        if kind == b'IEND':
            if size != 0:
                raise ValueError('invalid IEND')
            ended = True
            break
    if not ended or offset != len(data) or not header or not image_data:
        raise ValueError('missing IEND/IHDR/IDAT or trailing bytes')
    width, height, bits, color, compression, filtering, interlace = header
    if not width or not height or compression or filtering:
        raise ValueError('invalid dimensions or PNG methods')
    inflater = zlib.decompressobj()
    pixels = inflater.decompress(b''.join(image_data)) + inflater.flush()
    if not inflater.eof or inflater.unused_data:
        raise ValueError('incomplete or trailing zlib stream')
    channels = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}.get(color)
    if channels is None:
        raise ValueError('invalid color type')
    if interlace == 0:
        row_size = (width * channels * bits + 7) // 8 + 1
        if len(pixels) != height * row_size:
            raise ValueError('pixel stream length mismatch')
        if any(pixels[row * row_size] > 4 for row in range(height)):
            raise ValueError('invalid PNG row filter')
    elif interlace != 1:
        raise ValueError('invalid interlace method')
    try:
        from PIL import Image
    except ImportError:
        if interlace:
            raise ValueError('Pillow required for full interlaced decode')
        decoded = 'CRC, zlib and row stream; Pillow unavailable'
    else:
        with Image.open(path) as image:
            image.load()
            if image.size != (width, height):
                raise ValueError('decoded size mismatch')
        decoded = 'full pixel decode'
    return {'file': str(path), 'width': width, 'height': height, 'verification': decoded}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('paths', nargs='+', type=Path)
    args = parser.parse_args()
    files = []
    for path in args.paths:
        files.extend(sorted(path.rglob('*.png')) if path.is_dir() else [path])
    results = []
    for path in files:
        try:
            result = validate(path)
            result['ok'] = True
        except Exception as error:
            result = {'file': str(path), 'ok': False, 'error': str(error)}
        results.append(result)
    ok = bool(results) and all(result['ok'] for result in results)
    print(json.dumps({'ok': ok, 'files': results}, ensure_ascii=False, indent=2))
    return 0 if ok else 1


if __name__ == '__main__':
    raise SystemExit(main())
