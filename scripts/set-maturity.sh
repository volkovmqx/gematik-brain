#!/bin/bash
# Sets maturity frontmatter in articles based on quality-report.json scores
# score < 80 → setzling, 80-89 → wachsend, >= 90 → immergruen
set -uo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
QUALITY_REPORT="$REPO_DIR/scripts/quality-report.json"

if [ ! -f "$QUALITY_REPORT" ]; then
  echo "No quality-report.json found, skipping maturity assignment"
  exit 0
fi

# Extract articles and scores, set maturity in frontmatter
python3 -c "
import json, re, sys, os

report = json.load(open('$QUALITY_REPORT'))
articles = report.get('articles', [])

for article in articles:
    filepath = os.path.join('$REPO_DIR', article['file'])
    score = article.get('score', 0)

    if score < 80:
        maturity = 'setzling'
    elif score < 90:
        maturity = 'wachsend'
    else:
        maturity = 'immergruen'

    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r') as f:
        content = f.read()

    # Check if frontmatter exists
    if not content.startswith('---'):
        continue

    end = content.index('---', 3)
    frontmatter = content[3:end]
    body = content[end:]

    # Update or add maturity field
    if 'maturity:' in frontmatter:
        frontmatter = re.sub(r'maturity:.*', f'maturity: {maturity}', frontmatter)
    else:
        frontmatter = frontmatter.rstrip() + f'\nmaturity: {maturity}\n'

    with open(filepath, 'w') as f:
        f.write('---' + frontmatter + body)

    print(f'{maturity}: {article[\"file\"]} (score: {score})')
"

echo "Maturity assignment complete"
