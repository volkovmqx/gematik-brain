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
relevance:
  sectors: [<2-6 from: arztpraxis, krankenhaus, zahnarzt, psychotherapie, apotheke, pflege, therapie, hebamme, hersteller, ti-infrastruktur, it-dienstleister, startup, kasse, regulierung, verband, forschung, patient, arbeitgeber>]
  interests: [<1-3 from: compliance, technik, business, patient>]
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

## Interesse callouts

Use `[!interesse-X]` callouts to add perspective-specific content within articles. These callouts are automatically expanded for readers whose profile matches, and collapsed (but visible) for others.

Available types:
- `[!interesse-compliance]` — blue, deadlines and legal requirements
- `[!interesse-technik]` — green, APIs, specs, developer references
- `[!interesse-business]` — orange, market data, vendor landscape
- `[!interesse-patient]` — purple, patient rights, data access, privacy

Rules:
- Only add where there's genuinely distinct perspective-specific content
- Place contextually within the relevant section
- Supplement the main text, don't replace it
- Most articles need 1-3 callouts, not all 4
- See `content/technologies/ePA.md` for a fully worked example

## Voice callouts

Audience-adapted callout blocks added by voice agents. These auto-expand/collapse based on the reader's profile (sectors/interests).

| Callout | Color | Auto-expands when | Purpose |
|---------|-------|-------------------|---------|
| `[!praxis-tipp]` | teal | sectors ∩ {arztpraxis, zahnarzt, apotheke, pflege, therapie, hebamme} | Practice workflow advice, checklists |
| `[!dev-quickstart]` | dark green | interests ∩ {technik} | API examples, curl commands, code snippets |
| `[!frist-warnung]` | red | interests ∩ {compliance} | Legal deadlines, § references, Handlungsbedarf |
| `[!patientenrecht]` | purple | interests ∩ {patient} | Patient rights, opt-out steps, simple language |
| `[!klinik-integration]` | steel blue | sectors ∩ {krankenhaus} | KIS integration, HL7, hospital workflows |
| `[!checkliste]` | gray | any matching sector | Step-by-step action lists (any audience) |

Rules:
- Voice callouts are **additive only**: they never replace or modify existing text
- Placed contextually within the relevant section (not bunched at top/bottom)
- Max 2 voice callouts of the same type per article
- Must pass the "So what?" test: every paragraph answers why this reader cares

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

## Newsroom system

The knowledge base is autonomously expanded by a newsroom of Claude Code agents with editorial oversight:

### Roles

| Role | Agent | File | Responsibility |
|------|-------|------|----------------|
| **Chefredakteur** | orchestrator | `.claude/agents/orchestrator.md` | Editorial decisions, dispatches agents, review gates |
| **Beat Editor** | explorer | `.claude/agents/explorer.md` | Scans coverage gaps, writes `scripts/queue.json` |
| **Reporter** | researcher | `.claude/agents/researcher.md` | Writes new articles, integrates news, fixes quality issues |
| **Wire Desk** | news-scout | `.claude/agents/news-scout.md` | Scans recent news, writes `scripts/news-findings.json` |
| **Fact-Checker** | fact-checker | `.claude/agents/fact-checker.md` | Verifies facts, validates URLs (Playwright MCP), writes `scripts/quality-report.json` |
| **Voice Desk** | 5 voice agents | `.claude/agents/voice-*.md` | Adds audience-adapted callout blocks to articles |
| **Copy Desk** | grammar-fixer | `.claude/agents/grammar-fixer.md` | Fixes umlauts, spelling, and grammar |
| **Style Guide Bot** | — | `scripts/test.sh` | Deterministic structural checks (no LLM), writes `scripts/test-report.json` |

Voice Desk agents:
- `voice-praxis` — Praxis-Redakteur, adds `[!praxis-tipp]` callouts for medical practices
- `voice-technik` — Technik-Redakteur, adds `[!dev-quickstart]` callouts for developers
- `voice-compliance` — Compliance-Redakteur, adds `[!frist-warnung]` callouts for compliance officers
- `voice-patient` — Verständlichkeits-Redakteur, adds `[!patientenrecht]` callouts for patients
- `voice-krankenhaus` — Krankenhaus-Redakteur, adds `[!klinik-integration]` callouts for hospital IT

### Editorial workflow (one cycle)

```
1. Chefredakteur reads quality-report.json + news-findings.json + test-report.json
2. Dispatches Beat Editor + Wire Desk (parallel)
3. Builds assignment list (priority: fixes > news > new articles)
4. Dispatches Reporter with assignments
5. Dispatches Fact-Checker → review gate (max 1 revision round)
6. Dispatches Voice Desk (5 voice agents in parallel on matching articles)
7. Dispatches Copy Desk
8. Runs test.sh final check
```

### Running the newsroom

```bash
# Full editorial cycle (used by cron)
./scripts/expand.sh

# Run just the style guide checks
bash scripts/test.sh

# Manual test run
claude --agent orchestrator -p "Run a small editorial cycle: explore gaps, write 2 articles, review, fix grammar."
```

### Tuning parameters

These thresholds live in `.claude/agents/orchestrator.md` and should be adjusted over time as the knowledge base matures:

| Parameter | Current value | Location | Notes |
|-----------|--------------|----------|-------|
| Quality threshold (fix-first mode) | 70% | orchestrator.md, Phase 2 Priority A | Below this, the Chefredakteur prioritizes fixing existing articles over writing new ones. Increase as baseline quality improves. |
| Max quality fixes per cycle | 5 | orchestrator.md, Phase 2 | How many articles to fix in one cycle. |
| Max news updates per cycle | 5 | orchestrator.md, Phase 2 | How many news findings to integrate per cycle. |
| Max new articles per cycle | 5 | orchestrator.md, Phase 2 | How many new articles to write per cycle. |
| Revision rounds | 1 | orchestrator.md, Phase 4 | Max fact-checker → reporter loops before proceeding. |

Start with these defaults and raise the quality threshold over time (e.g., 70 → 75 → 80) as the backlog of structural issues shrinks.

### Data files

- `scripts/queue.json` — Pending terms and completed articles (Beat Editor output)
- `scripts/news-findings.json` — Recent news findings (Wire Desk output)
- `scripts/quality-report.json` — Per-article quality verdicts (Fact-Checker output, tracked in git)
- `scripts/test-report.json` — Structural check results (Style Guide Bot output)
