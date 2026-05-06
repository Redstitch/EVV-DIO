#!/usr/bin/env python3
"""
Replace every 3rd bg-eggshell with bg-blue-subtle for more blue throughout.
This gives a pattern of: ivory → eggshell → ivory → blue-subtle → ivory → eggshell etc.
"""
import os, glob

APP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "app")

changed = 0
for filepath in sorted(glob.glob(os.path.join(APP_DIR, "**", "page.tsx"), recursive=True)):
    if "[slug]" in filepath:
        continue

    with open(filepath, 'r') as f:
        content = f.read()

    # Count bg-eggshell occurrences
    count = content.count('bg-eggshell')
    if count < 2:
        continue

    # Replace the LAST bg-eggshell with bg-blue-subtle on pages with 2+ eggshell sections
    original = content
    # Find all occurrences and replace the last one
    idx = content.rfind('bg-eggshell')
    if idx != -1:
        content = content[:idx] + 'bg-blue-subtle' + content[idx + len('bg-eggshell'):]

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        changed += 1
        rel = os.path.relpath(filepath, APP_DIR)
        print(f"  {rel}: last eggshell → blue-subtle")

print(f"\nDone: {changed} files modified")
