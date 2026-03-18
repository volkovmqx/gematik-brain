# gematik Brain

An experiment to harvest [gematik](https://www.gematik.de/) technology information and build an accessible digital garden for non-IT people.

**Live:** [volkovmqx.github.io/gematik-brain](https://volkovmqx.github.io/gematik-brain/)

## What is this?

A German-language knowledge base explaining Germany's health IT infrastructure (Telematikinfrastruktur): ePA, E-Rezept, KIM, TI-Messenger, Konnektoren, eGK, and more.

This is a fully autonomous repo. Claude Code agents expand the garden, write new articles, find recent news, and fix grammar. No human writes the content.

## Architecture

A newsroom of six Claude Code agents runs daily via cron. Each agent has a specific editorial role:

```
┌─────────────────────────────────────────────────────────┐
│                    cron (daily, 06:00)                   │
│                    scripts/expand.sh                     │
│                      (lock file)                         │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              Chefredakteur (orchestrator)                │
│       Reads reports, sets priorities, dispatches         │
└──┬──────────┬──────────┬──────────┬──────────┬──────────┘
   │          │          │          │          │
   ▼          ▼          │          │          │
┌──────┐ ┌──────────┐   │          │          │
│Beat  │ │Wire Desk │   │          │          │
│Editor│ │(news-    │   │          │          │
│(exp- │ │scout)    │   │          │          │
│lorer)│ │          │   │          │          │
└──┬───┘ └────┬─────┘   │          │          │
   │          │          │          │          │
   ▼          ▼          ▼          │          │
┌─────────────────────────────┐    │          │
│    Reporter (researcher)    │    │          │
│  Writes articles, applies   │    │          │
│  news updates, fixes issues │    │          │
└─────────────┬───────────────┘    │          │
              │                    ▼          │
              │    ┌─────────────────────┐    │
              │    │Fact-Checker         │    │
              │    │Verifies facts,      │    │
              │    │quality gate         │    │
              │    └──────────┬──────────┘    │
              │               │               ▼
              │               │    ┌──────────────────┐
              │               │    │Copy Desk         │
              │               │    │(grammar-fixer)   │
              │               │    │Umlauts, spelling │
              │               │    └────────┬─────────┘
              │               │             │
              ▼               ▼             ▼
┌─────────────────────────────────────────────────────────┐
│                    test.sh (final check)                 │
│                    quartz build                          │
│                    git commit + push                     │
└─────────────────────────────────────────────────────────┘
```

### Agent roles

| Role | Agent | Responsibility |
|------|-------|----------------|
| Chefredakteur | `orchestrator` | Reads quality reports, sets editorial priorities, dispatches agents, runs review gates |
| Beat Editor | `explorer` | Scans all articles for missing terms, broken links, coverage gaps |
| Wire Desk | `news-scout` | Searches for recent gematik/TI news, spec updates, regulatory changes |
| Reporter | `researcher` | Writes new articles, integrates news updates, applies quality fixes |
| Fact-Checker | `fact-checker` | Verifies facts, checks cross-article consistency, produces quality scores |
| Copy Desk | `grammar-fixer` | Fixes umlauts, spelling, and grammar across all articles |
| Style Guide Bot | `test.sh` | Deterministic structural checks (no LLM) |

### Editorial cycle

1. **Briefing**: Orchestrator reads `quality-report.json`, `news-findings.json`, `test-report.json`
2. **Intelligence**: Beat Editor + Wire Desk run in parallel
3. **Prioritization**: Fixes > News > New articles (quality threshold: 70%)
4. **Writing**: Reporter executes assignments
5. **Review gate**: Fact-Checker verifies output (max 1 revision round)
6. **Polish**: Copy Desk fixes grammar
7. **Publish**: `test.sh` final check, quartz build, git commit + push

### Automation

The cycle can be automated via cron. A lock file (`/tmp/gematik-brain-expand.lock`) prevents overlapping runs, so it's safe to schedule frequently.

```bash
# Manual run
./scripts/expand.sh

# Run just the structural checks
bash scripts/test.sh
```

### Data files

| File | Purpose | Written by |
|------|---------|------------|
| `scripts/queue.json` | Pending terms and coverage gaps | Beat Editor |
| `scripts/news-findings.json` | Recent news findings | Wire Desk |
| `scripts/quality-report.json` | Per-article quality verdicts | Fact-Checker |
| `scripts/test-report.json` | Structural check results | Style Guide Bot |

## Disclaimer

This content is AI-generated. It should not be used as advice. Please consult the [official gematik documentation](https://fachportal.gematik.de/). Be aware of hallucinations and double-check every piece of information.

## Built with

- [Quartz v4](https://quartz.jzhao.xyz/) for the digital garden
- [Claude Code](https://claude.ai/claude-code) agents for autonomous content generation
