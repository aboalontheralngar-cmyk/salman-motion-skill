"""
Reusable SVG Path (M, L, H, V, C, c, Z) to After Effects Bezier Shape Parser.
Converts SVG vector paths into centered AE vertices, inTangents, and outTangents.
"""
import re

def parse_svg_path_to_ae_subpaths(d_str, center_x=0.0, center_y=0.0, scale=1.0):
    tokens = re.findall(r'[MLHVCSQTAZmlhvcsqtaz]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?', d_str)
    idx = 0
    subpaths = []
    cur_verts, cur_in, cur_out = [], [], []
    cx, cy = 0.0, 0.0
    sx, sy = 0.0, 0.0
    cmd = None

    def to_ae_pt(px, py):
        return [round((px - center_x) * scale, 2), round((py - center_y) * scale, 2)]

    while idx < len(tokens):
        t = tokens[idx]
        if re.match(r'^[MLHVCSQTAZmlhvcsqtaz]$', t):
            cmd = t
            idx += 1
            if cmd in ('Z', 'z'):
                if cur_verts:
                    subpaths.append({"closed": True, "v": cur_verts, "i": cur_in, "o": cur_out})
                    cur_verts, cur_in, cur_out = [], [], []
                cx, cy = sx, sy
                continue
        if cmd == 'M':
            if cur_verts:
                subpaths.append({"closed": False, "v": cur_verts, "i": cur_in, "o": cur_out})
                cur_verts, cur_in, cur_out = [], [], []
            cx, cy = float(tokens[idx]), float(tokens[idx+1])
            sx, sy = cx, cy
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
            cmd = 'L'
        elif cmd == 'm':
            if cur_verts:
                subpaths.append({"closed": False, "v": cur_verts, "i": cur_in, "o": cur_out})
                cur_verts, cur_in, cur_out = [], [], []
            cx += float(tokens[idx])
            cy += float(tokens[idx+1])
            sx, sy = cx, cy
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
            cmd = 'l'
        elif cmd == 'L':
            cx, cy = float(tokens[idx]), float(tokens[idx+1])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
        elif cmd == 'l':
            cx += float(tokens[idx])
            cy += float(tokens[idx+1])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 2
        elif cmd == 'H':
            cx = float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'h':
            cx += float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'V':
            cy = float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'v':
            cy += float(tokens[idx])
            cur_verts.append(to_ae_pt(cx, cy))
            cur_in.append([0.0, 0.0])
            cur_out.append([0.0, 0.0])
            idx += 1
        elif cmd == 'C':
            x1, y1 = float(tokens[idx]), float(tokens[idx+1])
            x2, y2 = float(tokens[idx+2]), float(tokens[idx+3])
            x3, y3 = float(tokens[idx+4]), float(tokens[idx+5])
            cur_out[-1] = [round((x1 - cx) * scale, 2), round((y1 - cy) * scale, 2)]
            cur_verts.append(to_ae_pt(x3, y3))
            cur_in.append([round((x2 - x3) * scale, 2), round((y2 - y3) * scale, 2)])
            cur_out.append([0.0, 0.0])
            cx, cy = x3, y3
            idx += 6
        elif cmd == 'c':
            dx1, dy1 = float(tokens[idx]), float(tokens[idx+1])
            dx2, dy2 = float(tokens[idx+2]), float(tokens[idx+3])
            dx3, dy3 = float(tokens[idx+4]), float(tokens[idx+5])
            cur_out[-1] = [round(dx1 * scale, 2), round(dy1 * scale, 2)]
            x3, y3 = cx + dx3, cy + dy3
            cur_verts.append(to_ae_pt(x3, y3))
            cur_in.append([round((dx2 - dx3) * scale, 2), round((dy2 - dy3) * scale, 2)])
            cur_out.append([0.0, 0.0])
            cx, cy = x3, y3
            idx += 6
        else:
            idx += 1
    if cur_verts:
        subpaths.append({"closed": False, "v": cur_verts, "i": cur_in, "o": cur_out})
    return subpaths
