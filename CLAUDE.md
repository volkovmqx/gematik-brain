# gematik Brain - Style Guide & Project Instructions

## What is this?

A Quartz v4 digital garden explaining the German health IT infrastructure (Telematikinfrastruktur). Target audience: developers, product managers, and newcomers who need to understand gematik's ecosystem.

## Language

All articles are written in **German**. Use plain, clear German. Avoid marketing speak and buzzwords.

**Umlauts are mandatory.** All German text must use proper umlauts (ä, ö, ü, Ä, Ö, Ü) and ß. Never write "Uberblick" when you mean "Überblick". Never write "fur" when you mean "für".

## Writing rules

- **No em dashes** (---). Use commas, periods, or colons instead.
- **No slop**: No "in der heutigen digitalen Welt", no "nahtlos", no "ganzheitlich", no "revolutionär".
- **Every technical term** in an article must be a `[[wiki-link]]` if it has (or could have) its own page.
- Keep sentences short. One idea per sentence.
- Use analogies from everyday life in the "Erklärt für Einsteiger" section.
- The `audience` frontmatter field controls visibility: `[technical]` or `[technical, non-technical]`.

## Article template

Every new page MUST follow this structure:

```markdown
---
title: <Name>
audience: [technical] or [technical, non-technical]
tags: [<category>, <relevant-tags>]
aliases: [<alternative names, acronyms>]
---

# <Name>

<One-line plain definition. One sentence. No filler.>

## Erklärt für Einsteiger

<2-4 sentences. No jargon. Use analogies from everyday life. A 15-year-old should understand this.>

## Überblick

<What it is, why it exists, where it's used in the TI or beyond. 2-5 paragraphs.>

## Technische Details

<How it works technically. Only for audience:[technical] or [technical, non-technical] pages. Include protocols, data formats, architecture. Use subsections as needed.>

## Verknüpfungen

<Bullet list of [[wiki-links]] to all related concepts in the knowledge base.>

## Quellen

<Links to official docs, RFCs, gematik Fachportal, Wikipedia. Minimum 2 sources.>
```

## File organization

- `content/technologies/` - Applications: ePA, E-Rezept, KIM, TI-Messenger, eAU
- `content/infrastructure/` - Network & hardware: TI, Konnektoren, eGK, SMC-B
- `content/standards/` - Data formats & protocols: FHIR, HL7, IHE, XDS
- `content/processes/` - Workflows: VSDM, NFDM
- `content/concepts/` - Cryptography, security, general IT concepts
- `content/organization/` - Institutions: gematik, BSI, BfArM

Use kebab-case for filenames with spaces, PascalCase or the official name for acronyms/proper nouns (e.g., `ePA.md`, `SMC-B.md`, `E-Rezept.md`).

## Build & verify

```bash
npx quartz build        # Build the site
npx quartz build --serve  # Local preview on localhost:8080
```

## Agent swarm system

The knowledge base is autonomously expanded by a swarm of Claude Code agents:

- **Orchestrator** (`.claude/agents/orchestrator.md`): Main agent, runs via `claude --agent orchestrator`. Spawns and coordinates all subagents.
- **Explorer** (`.claude/agents/explorer.md`): Reads all content, identifies missing terms and content gaps semantically. Writes to `scripts/queue.json`.
- **Researcher** (`.claude/agents/researcher.md`): Researches terms via WebSearch/WebFetch and writes articles following the template. Handles 3-5 terms per batch.
- **News Scout** (`.claude/agents/news-scout.md`): Finds recent gematik/TI news and regulatory changes. Writes to `scripts/news-findings.json`.
- **Grammar Fixer** (`.claude/agents/grammar-fixer.md`): Fixes umlauts, spelling, and grammar across all articles.

### Running the swarm

```bash
# Full expansion cycle (used by cron)
./scripts/expand.sh

# Manual test run
claude --agent orchestrator -p "Run a small test: explore gaps, write 2 articles, fix grammar."
```

### Queue files

- `scripts/queue.json` - Tracks pending terms and completed articles
- `scripts/news-findings.json` - Recent news findings from the news scout
