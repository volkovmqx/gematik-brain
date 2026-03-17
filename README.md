# gematik Brain

An experiment to harvest [gematik](https://www.gematik.de/) technology information and build an accessible digital garden for non-IT people.

**Live:** [volkovmqx.github.io/gematik-brain](https://volkovmqx.github.io/gematik-brain/)

## What is this?

A German-language knowledge base explaining Germany's health IT infrastructure (Telematikinfrastruktur): ePA, E-Rezept, KIM, TI-Messenger, Konnektoren, eGK, and more.

This is a fully autonomous repo. Claude Code agents expand the garden, write new articles, find recent news, and fix grammar. No human writes the content.

## How it works

A swarm of Claude Code agents runs on a schedule:

1. **Explorer** reads all articles, finds missing terms and content gaps
2. **Researcher** looks up each term (gematik Fachportal, Wikipedia, specs) and writes articles
3. **News Scout** finds recent TI/gematik news and updates outdated information
4. **Grammar Fixer** corrects umlauts, spelling, and grammar across all articles
5. **Orchestrator** coordinates the above, then verifies the site builds

```
scripts/expand.sh
  └─ claude --agent orchestrator
       ├─ explorer    → scripts/queue.json
       ├─ researcher  → content/<category>/<Term>.md
       ├─ news-scout  → scripts/news-findings.json
       └─ grammar-fixer → fixes all .md files
```

## Disclaimer

This content is AI-generated. It should not be used as advice. Please consult the [official gematik documentation](https://fachportal.gematik.de/). Be aware of hallucinations and double-check every piece of information.

## Built with

- [Quartz v4](https://quartz.jzhao.xyz/) for the digital garden
- [Claude Code](https://claude.ai/claude-code) agents for autonomous content generation
