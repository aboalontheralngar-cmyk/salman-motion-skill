#!/usr/bin/env python3
"""Build a portable, deterministic copy of the complete textual motion skill."""
import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'ALL_IN_ONE.md'


def sources():
    yield ROOT / 'SKILL.md'
    for directory, suffixes in [
        ('references', {'.md'}),
        ('templates', {'.py', '.js', '.jsx'}),
        ('scripts', {'.py', '.js', '.jsx'}),
    ]:
        yield from sorted(p for p in (ROOT / directory).rglob('*') if p.suffix in suffixes)


def build():
    files = list(sources())
    if not files[0].is_file():
        raise ValueError('SKILL.md is missing')
    skill = files[0].read_text(encoding='utf-8')
    version = re.search(r'Salman Motion (V\d+)', skill)
    if version is None:
        raise ValueError('Could not identify skill version')
    chunks = [
        '# مهارة سلمان للموشن جرافيك - النسخة الموحّدة ' + version.group(1),
        '\nهذا الملف مولّد من ملفات المصدر في المستودع. اقرأ التعليمات الأساسية أولًا، '
        'ثم المراجع والقوالب المناسبة للمشروع. يتضمن الكود النصي كاملًا، '
        'ولا يتضمن أصولًا ثنائية أو مشاريع خاصة أو إثباتًا لتشغيل After Effects.',
        '\n## فهرس الملفات\n',
    ]
    for index, path in enumerate(files, 1):
        rel = path.relative_to(ROOT).as_posix()
        chunks.append(f'{index}. [{rel}](#{"file-" + str(index)})')
    for index, path in enumerate(files, 1):
        rel = path.relative_to(ROOT).as_posix()
        content = path.read_text(encoding='utf-8').rstrip()
        chunks.append(f'\n---\n\n<a id="file-{index}"></a>\n\n## {rel}\n')
        if path.suffix == '.md':
            chunks.append(content)
        else:
            fences = re.findall(r'`+', content)
            fence = '`' * max(3, max(map(len, fences), default=0) + 1)
            language = 'python' if path.suffix == '.py' else 'javascript'
            chunks.append(f'{fence}{language}\n{content}\n{fence}')
    return '\n'.join(chunks) + '\n', len(files)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    content, count = build()
    if args.check:
        if not OUTPUT.is_file() or OUTPUT.read_text(encoding='utf-8') != content:
            raise SystemExit('ALL_IN_ONE.md is missing or outdated; run tools/build_bundle.py')
        print(f'OK: {count} complete source files; bundle is current.')
    else:
        OUTPUT.write_text(content, encoding='utf-8')
        print(f'Built {OUTPUT.name}: {count} files, {len(content.encode("utf-8"))} bytes.')


if __name__ == '__main__':
    main()
