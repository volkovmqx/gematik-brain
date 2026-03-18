#!/bin/bash
set -uo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

# Lock file to prevent overlapping runs (mkdir is atomic)
LOCKFILE="/tmp/gematik-brain-expand.lock"
if ! mkdir "$LOCKFILE" 2>/dev/null; then
  echo "Another expansion cycle is already running. Exiting."
  exit 0
fi
trap 'rmdir "$LOCKFILE"' EXIT

MAX_RETRIES=3
RETRY_DELAY=30

echo "=== gematik Brain: Newsroom Expansion Cycle ==="
echo "$(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# 1. Pull latest
echo "--- Pulling latest changes ---"
git pull --rebase origin main || echo "Warning: pull failed, continuing with local state"

# 2. Baseline quality check
echo ""
echo "--- Baseline quality check ---"
BASELINE_SCORE="?"
if NO_BUILD=1 bash scripts/test.sh; then
  BASELINE_PASSED=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['passed'])" 2>/dev/null || echo "?")
  BASELINE_TOTAL=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['totalArticles'])" 2>/dev/null || echo "?")
  BASELINE_SCORE="${BASELINE_PASSED}/${BASELINE_TOTAL}"
  echo "Baseline: $BASELINE_SCORE articles passing"
else
  echo "Warning: baseline test.sh failed (expected if first run or issues exist)"
  BASELINE_PASSED=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['passed'])" 2>/dev/null || echo "?")
  BASELINE_TOTAL=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['totalArticles'])" 2>/dev/null || echo "?")
  BASELINE_SCORE="${BASELINE_PASSED}/${BASELINE_TOTAL}"
  echo "Baseline: $BASELINE_SCORE articles passing"
fi

# 3. Run Chefredakteur (orchestrator) with retry
echo ""
echo "--- Running Chefredakteur (orchestrator) ---"
AGENT_SUCCESS=false
for attempt in $(seq 1 "$MAX_RETRIES"); do
  echo "Attempt $attempt/$MAX_RETRIES"
  if claude --agent orchestrator \
    -p "Run editorial cycle. Read quality reports, decide priorities, dispatch agents, review output." \
    --verbose \
    --output-format stream-json \
    --allowedTools 'Read,Write,Edit,Glob,Grep,Bash(*),WebSearch,WebFetch,Agent(explorer),Agent(researcher),Agent(news-scout),Agent(grammar-fixer),Agent(fact-checker)'; then
    AGENT_SUCCESS=true
    break
  else
    echo "Warning: Chefredakteur exited with error (attempt $attempt/$MAX_RETRIES)"
    if [ "$attempt" -lt "$MAX_RETRIES" ]; then
      echo "Retrying in ${RETRY_DELAY}s..."
      sleep "$RETRY_DELAY"
    fi
  fi
done

if [ "$AGENT_SUCCESS" = false ]; then
  echo "Warning: Chefredakteur failed after $MAX_RETRIES attempts, committing any partial work"
fi

# 4. Final quality check
echo ""
echo "--- Final quality check ---"
FINAL_SCORE="?"
if NO_BUILD=1 bash scripts/test.sh; then
  FINAL_PASSED=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['passed'])" 2>/dev/null || echo "?")
  FINAL_TOTAL=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['totalArticles'])" 2>/dev/null || echo "?")
  FINAL_SCORE="${FINAL_PASSED}/${FINAL_TOTAL}"
  echo "Final: $FINAL_SCORE articles passing"
else
  FINAL_PASSED=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['passed'])" 2>/dev/null || echo "?")
  FINAL_TOTAL=$(python3 -c "import json; r=json.load(open('scripts/test-report.json')); print(r['totalArticles'])" 2>/dev/null || echo "?")
  FINAL_SCORE="${FINAL_PASSED}/${FINAL_TOTAL}"
  echo "Final: $FINAL_SCORE articles passing"
fi

# 5. Get quality score from quality-report.json if available
QUALITY_SCORE=""
if [ -f "scripts/quality-report.json" ]; then
  QUALITY_SCORE=$(python3 -c "import json; r=json.load(open('scripts/quality-report.json')); print(r.get('overallScore', '?'))" 2>/dev/null || echo "")
fi

# 6. Set maturity stages based on quality scores
echo ""
echo "--- Setting maturity stages ---"
bash scripts/set-maturity.sh || echo "Warning: maturity assignment failed"

# 7. Build verification
echo ""
echo "--- Final build verification ---"
if npx quartz build; then
  echo "Build OK"
else
  echo "Warning: build failed, committing content anyway"
fi

# 8. Commit and push
echo ""
echo "--- Committing changes ---"
git add content/ scripts/queue.json scripts/news-findings.json scripts/quality-report.json scripts/test-report.json

CHANGES=$(git diff --cached --name-only content/ | wc -l)
if [ "$CHANGES" -gt 0 ]; then
  local_status="partial"
  [ "$AGENT_SUCCESS" = true ] && local_status="full"

  # Build commit message with quality info
  QUALITY_INFO=""
  if [ -n "$QUALITY_SCORE" ]; then
    QUALITY_INFO=" (quality: ${QUALITY_SCORE}%)"
  fi
  SCORE_INFO=""
  if [ "$BASELINE_SCORE" != "?" ] && [ "$FINAL_SCORE" != "?" ]; then
    SCORE_INFO=" (checks: ${BASELINE_SCORE} → ${FINAL_SCORE})"
  fi

  git commit -m "expand: ${CHANGES} articles added/updated${QUALITY_INFO}${SCORE_INFO}

Automated expansion by gematik Brain newsroom ($local_status).
$(date '+%Y-%m-%d %H:%M')"
  echo ""
  echo "--- Pushing to origin ---"
  git push origin main
  echo ""
  echo "=== Done: ${CHANGES} articles added/updated ($local_status) ==="
  echo "Quality: ${BASELINE_SCORE} → ${FINAL_SCORE}${QUALITY_INFO:+ | Score: ${QUALITY_SCORE}%}"
else
  echo ""
  echo "=== No new articles to commit ==="
fi
