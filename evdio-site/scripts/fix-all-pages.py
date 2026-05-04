#!/usr/bin/env python3
"""
Fix all pages in one pass:
1. Add bg-eggshell to every other page-content section
2. Convert page-content section-navy CTAs to section-band section-navy
3. Remove stale section-cream, section-warm, section-teal classes
4. Fix left-aligned headings that should be centered
"""

import os, re, glob

APP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "app")

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original = content

    # 1. Remove stale section-cream, section-warm, section-teal from page-content
    content = content.replace('className="page-content section-cream"', 'className="page-content"')
    content = content.replace('className="page-content section-warm"', 'className="page-content"')
    content = content.replace('className="page-content section-teal"', 'className="page-content"')
    # Also with style attrs
    content = re.sub(r'className="page-content section-cream"(\s+style=)', r'className="page-content"\1', content)
    content = re.sub(r'className="page-content section-warm"(\s+style=)', r'className="page-content"\1', content)

    # 2. Convert page-content section-navy to section-band section-navy (CTAs)
    content = content.replace(
        'className="page-content section-navy"',
        'className="section-band section-navy"'
    )

    # 3. Remove inline background styles that were for old alternation
    content = re.sub(r'\s*style=\{\{ background: "var\(--cream-lt\)" \}\}', '', content)

    # 4. Now add bg-eggshell to alternating sections
    # Find all <section className="page-content"> and add bg-eggshell to every other one
    sections = list(re.finditer(r'<section\s+className="page-content"', content))

    # Add bg-eggshell to even-indexed sections (0-based, so 1st, 3rd, 5th... which are 2nd, 4th, 6th visually)
    offset = 0
    for i, match in enumerate(sections):
        if i % 2 == 1:  # every other section (visually: 2nd, 4th, 6th)
            pos = match.start() + offset
            old = 'className="page-content"'
            new = 'className="page-content bg-eggshell"'
            content = content[:pos] + content[pos:].replace(old, new, 1)
            offset += len(new) - len(old)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

# Process all page.tsx files
changed = 0
total = 0
for filepath in glob.glob(os.path.join(APP_DIR, "**", "page.tsx"), recursive=True):
    # Skip dynamic routes and the homepage
    if "[slug]" in filepath:
        continue
    if filepath.endswith("src/app/page.tsx"):
        continue

    total += 1
    if fix_file(filepath):
        changed += 1
        rel = os.path.relpath(filepath, APP_DIR)
        print(f"  Fixed: {rel}")

print(f"\nDone: {changed}/{total} files modified")
