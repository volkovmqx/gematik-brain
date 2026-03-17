#!/bin/bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

echo "=== gematik Brain: Agent Swarm Expansion ==="
echo "$(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# 1. Pull latest
echo "--- Pulling latest changes ---"
git pull --rebase origin main || echo "Warning: pull failed, continuing with local state"

# 2. Run orchestrator agent
echo ""
echo "--- Running orchestrator agent ---"
claude --agent orchestrator \
  -p "Run expansion cycle. Write 5-8 new articles." \
  --verbose \
  --allowedTools 'Read,Write,Edit,Glob,Grep,WebSearch,WebFetch,Bash(npx quartz build),Agent(explorer,researcher,news-scout,grammar-fixer)'

# 3. Final build verification outside agent
echo ""
echo "--- Final build verification ---"
npx quartz build

# 4. Commit and push
echo ""
echo "--- Committing changes ---"
git add content/ scripts/queue.json scripts/news-findings.json

CHANGES=$(git diff --cached --name-only content/ | wc -l)
if [ "$CHANGES" -gt 0 ]; then
  git commit -m "expand: ${CHANGES} articles added/updated

Automated expansion by gematik Brain agent swarm.
$(date '+%Y-%m-%d %H:%M')"
  echo ""
  echo "--- Pushing to origin ---"
  git push origin main
  echo ""
  echo "=== Done: ${CHANGES} articles added/updated ==="
else
  echo ""
  echo "=== No new articles to commit ==="
fi
