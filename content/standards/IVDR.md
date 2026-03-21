---
title: IVDR
audience: [technical, non-technical]
tags: [standards, eu, medizinprodukte, labordiagnostik, regulierung]
aliases: [In-vitro-Diagnostika-Verordnung, Verordnung EU 2017/746, IVD-Regulation]
maturity: wachsend
---

# IVDR

Die **IVDR (Verordnung (EU) 2017/746 über In-vitro-Diagnostika)** ist die EU-Verordnung, die Sicherheit, Leistung und Zertifizierung von Labordiagnostika und Testsystemen regelt: von Bluttests über Schwangerschaftstests bis hin zu PCR-Diagnosesystemen.

## Erklärt für Einsteiger

Wenn ein Arzt Blut abnimmt und das Labor prüft, ob du Hepatitis hast, dann benutzt das Labor ein Testsystem. Die IVDR ist das EU-Gesetz, das sagt, wie solche Testsysteme entwickelt, geprüft und zugelassen sein müssen, bevor sie in Krankenhäuser und Labore geliefert werden dürfen. Ohne IVDR-Zulassung darf ein Hersteller seinen Test in der EU nicht verkaufen.

## Überblick

Die IVDR wurde am **5. April 2017** verabschiedet und trat am **25. Mai 2017** in Kraft. Sie ist die Nachfolgeregulierung der alten EU-Richtlinie über In-vitro-Diagnostika (98/79/EG). Die IVDR gilt unmittelbar in allen EU-Mitgliedstaaten, ohne nationale Umsetzungsgesetze.

Die **[[MDR]] (Medical Device Regulation, EU 2017/745)** ist die Schwesternverordnung für aktive und nicht aktive Medizinprodukte (Implantate, Operationsgeräte etc.). IVDR und MDR bilden zusammen den neuen EU-Rechtsrahmen für Medizinprodukte.

### Geltungsbereich

Die IVDR gilt für alle **In-vitro-Diagnostika (IVD)**: Reagenzien, Instrumente und Systeme, die ausschließlich oder hauptsächlich zur Untersuchung von menschlichem Probenmaterial (Blut, Urin, Gewebe) vorgesehen sind, um Informationen über physiologische Zustände, Gesundheitszustand oder Krankheiten zu liefern.

Beispiele: PCR-Tests, Blutgruppenbestimmung, HIV-Schnelltests, Blutzuckermessgeräte, Schwangerschaftstests, Gendiagnostik.

### Risikoklassen

Die IVDR definiert vier Risikoklassen statt der bisherigen Listen A/B:

| Klasse | Risiko | Beispiele | Übergangsende |
|---|---|---|---|
| D | Höchstes Risiko | HIV-Tests, Hepatitis-Tests | 26. Mai 2025 |
| C | Hohes Risiko | Influenza-Tests, Genotypisierung | 26. Mai 2026 |
| B | Mittleres Risiko | Urintests, Glukosemessung | 26. Mai 2027 |
| A | Niedrigstes Risiko | Probenentnahme, nicht messend | 26. Mai 2027 |

Produkte der Klassen B, C und D benötigen eine Prüfung durch eine **Benannte Stelle** (Notified Body), z.B. TÜV SÜD oder BSI-zertifizierte Stellen.

### Vergleich mit der Vorgängerrichtlinie

Die alte IVD-Richtlinie 98/79/EG war weniger streng: Rund 80 Prozent aller IVDs konnten sich selbst zertifizieren (CE-Kennzeichnung ohne Benannte Stelle). Die IVDR erhöht die Anforderungen erheblich: Mehr Produkte brauchen nun externe Zertifizierung, Benannte Stellen sind knapp, Übergangsfristen wurden mehrfach verlängert.

## Technische Details

### Konformitätsbewertungsverfahren

Hersteller müssen vor dem Inverkehrbringen ein Konformitätsbewertungsverfahren durchlaufen:

1. **Technische Dokumentation**: Vollständige Dokumentation von Design, Herstellungsprozess, Risikomanagement und klinischem Nachweis.
2. **Klinische Leistungsstudie / klinische Nachweise**: Für Klassen C und D sind eigene Leistungsstudien erforderlich, die den diagnostischen Nutzen belegen.
3. **Prüfung durch Benannte Stelle**: Bewertung der Dokumentation und ggf. Produktmuster.
4. **CE-Kennzeichnung**: Nach positivem Bescheid erhält das Produkt die CE-Kennzeichnung.
5. **[[EUDAMED]]-Registrierung**: Hersteller und Produkte müssen in der europäischen Datenbank für Medizinprodukte (EUDAMED) registriert werden.

### Relevanz für deutsche Health-IT

In der deutschen Gesundheits-IT berührt die IVDR mehrere Bereiche:

- **[[DEMIS]]**: Das Deutsche Elektronische Melde- und Informationssystem für den Infektionsschutz empfängt Labormeldungen aus [[LIS]]-Systemen (Laborinformationssystemen). Die gemeldeten Diagnoseverfahren (PCR, Antigen) unterliegen der IVDR-Zulassung. Die IVDR-Klassifizierung bestimmt, welche Qualitätsnachweise bei DEMIS-Labormeldungen implizit vorausgesetzt werden.
- **[[LIS]] (Laborinformationssysteme)**: LIS verwalten Analyseaufträge und Ergebnisse. Sie dokumentieren, welcher IVDR-zertifizierte Test angewendet wurde, und müssen Testergebnisse FHIR-konform an DEMIS oder die [[ePA]] übermitteln.
- **[[DiGA]] im Laborkontext**: DiGAs, die Laborwerte auswerten (z.B. Diabetesmanagement-Apps mit Blutzuckerwertauswertung), können vom IVDR-Geltungsbereich berührt sein, wenn sie diagnostische Aussagen treffen.

### Verhältnis zur Medizinprodukteverordnung (MDR)

IVDR und [[MDR]] teilen viele Strukturmerkmale (Risikoklassen, Benannte Stellen, EUDAMED, Vigilanzsystem). Wesentliche Unterschiede:

- **MDR** gilt für Medizinprodukte allgemein (implantierbar, aktiv, passiv).
- **IVDR** gilt ausschließlich für In-vitro-Diagnostika (externe Untersuchung von Körperproben).
- Beide haben unterschiedliche Risikoklassen-Schemata und Übergangsfristen.
- Für Kombinationsprodukte (IVD + Medizinprodukt) gilt die Verordnung, die den primären Verwendungszweck abdeckt.

### UDI-System

Die IVDR schreibt ein **Unique Device Identification (UDI)**-System für IVDs vor: Jedes Produkt erhält einen eindeutigen Identifikator, der in EUDAMED registriert ist und auf Verpackungen erscheint. Das UDI-System ermöglicht Rückverfolgbarkeit im Falle von Sicherheitsrückrufen.

## Verknüpfungen

- [[MDR]] (Schwesternverordnung für Medizinprodukte; teilt den EU-Rechtsrahmen)
- [[DEMIS]] (Labormeldesystem; nutzt IVDR-zertifizierte Tests)
- [[LIS]] (Laborinformationssystem; verwaltet IVDR-konforme Testergebnisse)
- [[DiGA]] (einige DiGAs berühren IVDR-Geltungsbereich)

## Quellen

- [EUR-Lex: Verordnung (EU) 2017/746 über In-vitro-Diagnostika](https://eur-lex.europa.eu/legal-content/de/ALL/?uri=CELEX:32017R0746)
- [Wikipedia: Verordnung (EU) 2017/746 über In-vitro-Diagnostika](https://de.wikipedia.org/wiki/Verordnung_(EU)_2017/746_%C3%BCber_In-vitro-Diagnostika)
- [TÜV SÜD: IVDR Überblick und Übergangsfristen](https://www.tuvsud.com/de-de/branchen/gesundheit-und-medizintechnik/marktzulassung-und-zertifizierung-von-medizinprodukten/ivdr-in-vitro-diagnostika-verordnung)
- [Johner Institut: IVDR kompakt](https://www.johner-institut.de/blog/regulatory-affairs/ivdr-in-vitro-diagnostic-device-regulation/)
