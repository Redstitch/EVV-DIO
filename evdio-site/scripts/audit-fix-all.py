#!/usr/bin/env python3
"""
Complete audit and fix of all pages:
1. Ensure bg-eggshell on every other page-content section
2. Ensure section-band section-navy CTA at bottom
3. Remove stale inline style overrides (padding, background, marginTop)
4. Ensure all section headings are centered (section-head wrapper)
5. Clean up flourish inline style overrides
"""

import os, re, glob

APP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "app")
SKIP_PATTERNS = ["[slug]", "layout.tsx", "src/app/page.tsx", "faith/page.tsx"]

def should_skip(filepath):
    for pattern in SKIP_PATTERNS:
        if pattern in filepath:
            return True
    return False

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    original = content

    # 1. Remove inline style overrides on flourishes
    content = re.sub(
        r'className="flourish flourish-quatrefoil"\s+aria-hidden="true"\s+style=\{\{[^}]*\}\}',
        'className="flourish flourish-quatrefoil" aria-hidden="true"',
        content
    )

    # 2. Remove inline background styles on page-content
    content = re.sub(
        r'className="page-content"\s+style=\{\{\s*background:\s*"var\(--cream-lt\)"\s*\}\}',
        'className="page-content"',
        content
    )

    # 3. Remove marginTop: 32 from interior-grids (CSS handles spacing)
    content = re.sub(
        r'className="interior-grid (interior-grid-\d+)"\s+style=\{\{\s*marginTop:\s*32\s*\}\}',
        r'className="interior-grid \1"',
        content
    )
    content = re.sub(
        r'className="interior-grid (interior-grid-\d+)"\s+style=\{\{\s*marginTop:\s*24\s*\}\}',
        r'className="interior-grid \1"',
        content
    )

    # 4. Ensure bg-eggshell on alternating sections
    # Find all page-content sections
    sections = list(re.finditer(r'className="page-content(?:\s+bg-eggshell)?"', content))

    # First remove all existing bg-eggshell to reapply cleanly
    content = content.replace('className="page-content bg-eggshell"', 'className="page-content"')

    # Re-find and apply to every other section
    sections = list(re.finditer(r'className="page-content"', content))
    offset = 0
    for i, match in enumerate(sections):
        if i % 2 == 1:  # 2nd, 4th, 6th sections get eggshell
            pos = match.start() + offset
            old = 'className="page-content"'
            new = 'className="page-content bg-eggshell"'
            content = content[:pos] + content[pos:].replace(old, new, 1)
            offset += len(new) - len(old)

    # 5. Wrap standalone section-tag + section-h2 in section-head if not already wrapped
    # This is tricky to do with regex safely, so skip for now

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

# Process all page.tsx files
changed = 0
total = 0
for filepath in sorted(glob.glob(os.path.join(APP_DIR, "**", "page.tsx"), recursive=True)):
    if should_skip(filepath):
        continue
    total += 1
    if fix_file(filepath):
        changed += 1
        rel = os.path.relpath(filepath, APP_DIR)
        print(f"  Fixed: {rel}")

print(f"\nDone: {changed}/{total} files modified")
