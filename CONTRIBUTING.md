# Mitmachen

gematik Brain ist ein Open-Source-Wissensgraph zur deutschen Gesundheits-IT-Infrastruktur (Telematikinfrastruktur). Beiträge sind willkommen.

> **Hinweis:** Die meisten Artikel werden von KI-Agenten geschrieben und automatisch erweitert. Menschliche Beiträge sind besonders wertvoll für Qualität, Korrektheit und Praxiserfahrung.

## Wie kann ich mitmachen?

Es gibt drei Wege:

1. **Issue erstellen** - Artikel vorschlagen, Fehler melden, Verbesserungen anregen
2. **Pull Request** - Selbst Artikel schreiben oder bestehende korrigieren
3. **Feedback** - Im Issue-Bereich allgemeine Rückmeldungen geben

## Artikel vorschlagen

Nutze das Issue-Template **"Artikel vorschlagen"**. Beschreibe kurz, welcher Begriff fehlt und warum er wichtig ist. Die KI-Agenten oder ein menschlicher Beiträger können den Artikel dann erstellen.

## Artikel schreiben

1. Repository forken
2. Neuen Artikel im passenden Ordner erstellen (siehe Dateiorganisation unten)
3. Template aus [CLAUDE.md](CLAUDE.md) befolgen (Frontmatter, alle Abschnitte)
4. Pull Request erstellen

### Dateiorganisation

| Ordner | Inhalt |
|--------|--------|
| `content/technologies/` | Anwendungen: ePA, E-Rezept, KIM, TI-Messenger |
| `content/infrastructure/` | Netzwerk & Hardware: TI, Konnektoren, eGK, SMC-B |
| `content/standards/` | Datenformate & Protokolle: FHIR, HL7, IHE |
| `content/processes/` | Workflows: VSDM, NFDM |
| `content/concepts/` | Kryptographie, Sicherheit, allgemeine IT-Konzepte |
| `content/organization/` | Institutionen: gematik, BSI, BfArM |

### Wichtige Regeln

- **Sprache:** Deutsch. Klares Deutsch ohne Marketing-Sprech.
- **Umlaute:** ae/oe/ue ist nicht akzeptabel. Immer ä, ö, ü, ß verwenden.
- **Wiki-Links:** Jeder Fachbegriff muss als `[[Wiki-Link]]` verknüpft sein.
- **Quellen:** Mindestens 2 Quellen pro Artikel (gematik Fachportal, Spezifikationen, Gesetzestexte).
- **Kein Slop:** Keine Phrasen wie "in der heutigen digitalen Welt", "nahtlos", "ganzheitlich".

## Fehler melden

Nutze das Issue-Template **"Fehler in einem Artikel"**. Gib an, welcher Artikel betroffen ist, was falsch ist, und verlinke eine Quelle für die korrekte Information.

## Lokale Entwicklung

```bash
git clone https://github.com/volkovmqx/gematik-brain.git
cd gematik-brain
npm install
npx quartz build --serve   # Lokale Vorschau auf localhost:8080
```

## Strukturelle Checks

```bash
bash scripts/test.sh       # Prüft Artikelstruktur, Frontmatter, Links
npx quartz build            # Prüft ob die Seite fehlerfrei baut
```
