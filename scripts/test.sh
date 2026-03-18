#!/bin/bash
# Style Guide Bot — deterministic quality checks for gematik Brain articles.
# No LLM needed. Outputs scripts/test-report.json.
set -uo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CONTENT_DIR="$REPO_DIR/content"
REPORT="$REPO_DIR/scripts/test-report.json"

# Collect all issues as JSON array entries
ISSUES=()
TOTAL=0
PASSED=0
FAILED_SET=()

# Required frontmatter fields
REQUIRED_FM=("title" "audience" "tags" "aliases")

# Required sections (exact heading text)
REQUIRED_SECTIONS=("Erklärt für Einsteiger" "Überblick" "Technische Details" "Verknüpfungen" "Quellen")

# --- Build wiki-link resolution map ---
# Maps lowercase target → 1 if resolvable (via filename stem or alias)
declare -A LINK_TARGETS

# Normalize a string for link matching: lowercase, collapse spaces/dashes/underscores
normalize() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[-_ ]//g'
}

build_link_map() {
  for f in "$CONTENT_DIR"/**/*.md; do
    [ -f "$f" ] || continue
    # Filename stem (without .md, without path)
    local stem
    stem="$(basename "$f" .md)"
    # Store both the exact lowercase and the normalized form
    LINK_TARGETS["${stem,,}"]=1
    LINK_TARGETS["$(normalize "$stem")"]=1

    # Extract aliases from frontmatter
    local in_frontmatter=false
    local aliases_line=""
    while IFS= read -r line; do
      if [[ "$line" == "---" ]]; then
        if $in_frontmatter; then
          break
        else
          in_frontmatter=true
          continue
        fi
      fi
      if $in_frontmatter && [[ "$line" =~ ^aliases: ]]; then
        aliases_line="$line"
        break
      fi
    done < "$f"

    if [[ -n "$aliases_line" ]]; then
      # Parse aliases: [Foo, Bar, Baz] — strip brackets, split on comma
      local inner
      inner="${aliases_line#*\[}"
      inner="${inner%\]*}"
      IFS=',' read -ra parts <<< "$inner"
      for alias in "${parts[@]}"; do
        # Trim whitespace
        alias="$(echo "$alias" | sed 's/^ *//;s/ *$//')"
        if [[ -n "$alias" ]]; then
          LINK_TARGETS["${alias,,}"]=1
          LINK_TARGETS["$(normalize "$alias")"]=1
        fi
      done
    fi
  done
}

add_issue() {
  local file="$1" type="$2" severity="$3" message="$4"
  # Make path relative to repo
  local rel="${file#$REPO_DIR/}"
  ISSUES+=("{\"file\":\"$rel\",\"type\":\"$type\",\"severity\":\"$severity\",\"message\":\"$message\"}")
}

mark_failed() {
  local file="$1"
  local rel="${file#$REPO_DIR/}"
  local already=false
  for f in "${FAILED_SET[@]+"${FAILED_SET[@]}"}"; do
    [[ "$f" == "$rel" ]] && already=true && break
  done
  $already || FAILED_SET+=("$rel")
}

check_article() {
  local file="$1"
  local rel="${file#$REPO_DIR/}"
  local has_error=false

  # Skip index.md
  [[ "$(basename "$file")" == "index.md" ]] && return

  TOTAL=$((TOTAL + 1))
  local content
  content="$(cat "$file")"

  # --- Frontmatter check ---
  if [[ "$content" != ---* ]]; then
    add_issue "$file" "missing_frontmatter" "error" "No YAML frontmatter found"
    has_error=true
  else
    for field in "${REQUIRED_FM[@]}"; do
      # Check within frontmatter block (between first two ---)
      local fm
      fm="$(echo "$content" | sed -n '/^---$/,/^---$/p' | head -n -1 | tail -n +2)"
      if ! echo "$fm" | grep -q "^${field}:"; then
        add_issue "$file" "missing_frontmatter_field" "error" "Missing frontmatter field: $field"
        has_error=true
      fi
    done
  fi

  # --- Section completeness ---
  for section in "${REQUIRED_SECTIONS[@]}"; do
    if ! echo "$content" | grep -q "^## ${section}"; then
      add_issue "$file" "missing_section" "error" "Missing required section: ## $section"
      has_error=true
    fi
  done

  # --- Source count (under ## Quellen) ---
  local quellen_content
  quellen_content="$(echo "$content" | sed -n '/^## Quellen/,/^## /p' | tail -n +2)"
  if [[ -z "$quellen_content" ]]; then
    # Quellen is the last section, grab everything after it
    quellen_content="$(echo "$content" | sed -n '/^## Quellen/,$p' | tail -n +2)"
  fi
  local source_count
  source_count="$(echo "$quellen_content" | grep -cE '^\s*-\s' || true)"
  if [[ "$source_count" -lt 2 ]]; then
    add_issue "$file" "insufficient_sources" "warning" "Only $source_count source(s) under Quellen (minimum 2)"
    has_error=true
  fi

  # --- Wiki-link integrity ---
  # Extract all [[Target]] and [[Target|Display]] links
  local links
  links="$(echo "$content" | grep -oP '\[\[[^\]]+\]\]' || true)"
  local link_count=0
  if [[ -n "$links" ]]; then
    while IFS= read -r link; do
      # Strip [[ and ]]
      local target="${link#\[\[}"
      target="${target%\]\]}"
      # Handle escaped pipes in markdown tables: [[Target\|Display]] or [[Target|Display]]
      target="${target%%\\|*}"
      target="${target%%|*}"
      # Strip trailing backslashes (from table escaping)
      target="${target%\\}"
      # Trim whitespace
      target="$(echo "$target" | sed 's/^ *//;s/ *$//')"
      [[ -z "$target" ]] && continue
      link_count=$((link_count + 1))

      # Check both exact lowercase and normalized forms
      local target_lower="${target,,}"
      local target_norm
      target_norm="$(normalize "$target")"
      if [[ -z "${LINK_TARGETS[$target_lower]+x}" ]] && [[ -z "${LINK_TARGETS[$target_norm]+x}" ]]; then
        add_issue "$file" "broken_link" "error" "Broken wiki-link: [[$target]] — no matching file or alias"
        has_error=true
      fi
    done <<< "$links"
  fi

  # --- Wiki-link density ---
  if [[ "$link_count" -lt 3 ]]; then
    add_issue "$file" "low_link_density" "warning" "Only $link_count wiki-link(s) (recommend at least 3)"
  fi

  # --- Track pass/fail ---
  if $has_error; then
    mark_failed "$file"
  else
    PASSED=$((PASSED + 1))
  fi
}

# --- Main ---
echo "=== gematik Brain: Style Guide Bot ==="
echo "Building wiki-link resolution map..."
build_link_map
echo "Resolved ${#LINK_TARGETS[@]} link targets (filenames + aliases)"
echo ""

echo "Checking articles..."
for f in "$CONTENT_DIR"/**/*.md; do
  [ -f "$f" ] || continue
  check_article "$f"
done

FAILED=${#FAILED_SET[@]}

echo ""
echo "Checked $TOTAL articles: $PASSED passed, $FAILED failed"
echo "${#ISSUES[@]} issues found"

# --- Build report ---
TIMESTAMP="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Build issues JSON array
ISSUES_JSON="["
for i in "${!ISSUES[@]}"; do
  [[ $i -gt 0 ]] && ISSUES_JSON+=","
  ISSUES_JSON+="${ISSUES[$i]}"
done
ISSUES_JSON+="]"

# Write report
cat > "$REPORT" <<ENDJSON
{
  "timestamp": "$TIMESTAMP",
  "totalArticles": $TOTAL,
  "passed": $PASSED,
  "failed": $FAILED,
  "issues": $ISSUES_JSON
}
ENDJSON

echo ""
echo "Report written to scripts/test-report.json"

# --- Build check (optional, skip if NO_BUILD is set) ---
if [[ -z "${NO_BUILD:-}" ]]; then
  echo ""
  echo "--- Build verification ---"
  if (cd "$REPO_DIR" && npx quartz build 2>&1 | tail -5); then
    echo "Build: OK"
  else
    add_issue "project" "build_failed" "error" "npx quartz build failed"
    echo "Build: FAILED"
  fi
fi

# Exit with error if any errors found
[[ $FAILED -gt 0 ]] && exit 1
exit 0
