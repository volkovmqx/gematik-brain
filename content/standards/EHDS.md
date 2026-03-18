---
title: EHDS
audience: [technical, non-technical]
tags: [standard, eu, datenschutz, interoperabilitaet, recht]
aliases: [European Health Data Space, Europäischer Gesundheitsdatenraum, EU 2025/327]
---

# EHDS

Der **European Health Data Space (EHDS)** ist eine EU-Verordnung (EU 2025/327), die den grenzüberschreitenden Austausch und die Sekundärnutzung von Gesundheitsdaten in der EU regelt.

## Erklärt für Einsteiger

Stell dir vor, du reist nach Frankreich und brauchst dort dringend eine Behandlung. Mit dem EHDS kann der französische Arzt deine Krankenakte abrufen, sofern du zugestimmt hast. Der EHDS ist das EU-Gesetz, das sicherstellt, dass alle EU-Länder ihre Gesundheitssysteme nach einheitlichen Regeln vernetzen. Gleichzeitig dürfen Forscher Gesundheitsdaten nutzen, um neue Behandlungen zu entwickeln. Aber nur unter strengen Auflagen und ohne Rückschluss auf einzelne Personen.

## Überblick

Der EHDS trat im März 2025 in Kraft. Er ist in zwei Hauptbereiche gegliedert:

### Primärnutzung: Patientenversorgung

Der EHDS verpflichtet die EU-Mitgliedstaaten, digitale Gesundheitsdaten über die Infrastruktur **[[MyHealthAtEU|MyHealth@EU]]** grenzüberschreitend zugänglich zu machen. Versicherte erhalten das Recht auf Zugang zu ihren eigenen Gesundheitsdaten in einem interoperablen, maschinenlesbaren Format.

Konkrete Dienste im Aufbau:
- **ePrescription / eDispensation**: Elektronische Rezepte, die EU-weit eingelöst werden können
- **Patient Summary**: Zusammenfassung der wichtigsten Gesundheitsdaten (Diagnosen, Medikamente, Allergien)

Deutschland plant die Teilnahme an MyHealth@EU ab **Wave 10 (2026)** über den deutschen [[NCPeH]].

### Sekundärnutzung: Forschung und Innovation

Der EHDS schafft einen rechtlichen Rahmen für die Nutzung von Gesundheitsdaten zu wissenschaftlichen, statistischen und regulatorischen Zwecken. Die Daten werden über nationale **Gesundheitsdaten-Zugangsstellen** (Health Data Access Bodies, HDAB) bereitgestellt. In Deutschland ist das Forschungsdatenzentrum Gesundheit die zuständige Stelle.

Die Grundlagen für die Sekundärnutzung in Deutschland liegen im [[GDNG|Gesundheitsdatennutzungsgesetz (GDNG)]] von 2024, das den EHDS-Anforderungen entspricht.

### Zeitplan der Umsetzung

| Meilenstein | Datum |
|---|---|
| EHDS in Kraft | März 2025 |
| Durchführungsrechtsakte der Kommission (technische Anforderungen) | März 2027 |
| Anwendung Primär- und Sekundärnutzungsregeln (erste Gruppe) | März 2029 |
| Vollständige Teilnahme aller Mitgliedstaaten | März 2031 |

Die Frist **März 2027** bezeichnet den Termin, bis zu dem die Europäische Kommission Durchführungsrechtsakte (Implementing Acts) zu den technischen Anforderungen der Primär- und Sekundärnutzung erlassen muss. Die **Pflicht zum tatsächlichen grenzüberschreitenden Datenaustausch** gilt für die Mitgliedstaaten erst ab März 2029 (vier Jahre nach Inkrafttreten). Die vollständige Teilnahme aller Mitgliedstaaten ist bis März 2031 (sechs Jahre nach Inkrafttreten) gefordert.

## Technische Details

### Architektur: MyHealth@EU

MyHealth@EU (früher eHealth Digital Service Infrastructure, eHDSI) ist die Infrastruktur für den primären Datenaustausch. Die technische Architektur besteht aus:

- **Nationalen Kontaktpunkten (NCPeH)**: Jedes EU-Land betreibt einen [[NCPeH]], der als nationaler Gateway zur MyHealth@EU-Infrastruktur dient.
- **Zentrales Infrastruktur-Gateway**: Verbindet die nationalen Kontaktpunkte der Mitgliedstaaten.
- **Gemeinsames Datenschema**: Auf Basis von **[[FHIR]]** R4 und [[IHE]]-Profilen für einheitliche Datenformate.

### Interoperabilitätsvorgaben

Der EHDS verpflichtet Mitgliedstaaten und Hersteller von Gesundheits-IT zur technischen Interoperabilität. Konkret:

- Elektronische Patientenakten-Systeme (EHR-Systeme) müssen die Interoperabilitätsvorgaben gemäß den Durchführungsrechtsakten der Kommission (erwartet bis 2027) umsetzen. Die Pflicht zur tatsächlichen grenzüberschreitenden Bereitstellung gilt ab März 2029.
- Das Format basiert auf dem **European Electronic Health Record Exchange Format (EEHRxF)**, der auf [[HL7]] [[FHIR]] und internationalen Terminologien ([[SNOMED CT]], [[LOINC]]) aufbaut.

### Datenschutz

Der EHDS steht im Einklang mit der [[DSGVO]] und dem [[BDSG]]. Für Gesundheitsdaten als besondere Kategorie nach Art. 9 DSGVO gelten besondere Schutzmaßnahmen:

- Für die Primärnutzung: Einwilligung des Versicherten oder gesetzliche Erlaubnis
- Für die Sekundärnutzung: Genehmigung durch die HDAB; keine direkte Identifizierbarkeit der Patienten
- Opt-out-Recht: Versicherte können der Nutzung ihrer Daten für Forschungszwecke widersprechen

### Bezug zur deutschen TI

Der [[NCPeH]] ist Deutschlands technischer Zugangspunkt zum EHDS-Ökosystem. Die [[gematik]] ist für Spezifikation und Produkttypzulassung des NCPeH zuständig; die DVKA (Deutsche Verbindungsstelle Krankenversicherung Ausland) betreibt ihn. Die [[ePA]] dient als Quelle für die exportierbaren Patientendaten.

## Verknüpfungen

- [[NCPeH]] (Deutschlands Zugangspunkt zur MyHealth@EU-Infrastruktur)
- [[ePA]] (Quelle der exportierten Patientendaten im EHDS-Kontext)
- [[E-Rezept]] (erster Dienst für den grenzüberschreitenden Austausch, ab Wave 10)
- [[GDNG]] (deutsches Pendant des EHDS für Sekundärnutzung)
- [[FHIR]] (technisches Datenformat für den EHDS-Austausch)
- [[DSGVO]] (Datenschutzrahmen, in den der EHDS eingebettet ist)
- [[IHE]] (Interoperabilitätsprofile für den grenzüberschreitenden Austausch)
- [[gematik]] (Spezifikation des deutschen NCPeH)

## Quellen

- [Europäische Kommission: European Health Data Space](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en)
- [Verordnung (EU) 2025/327 – EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32025R0327)
- [gematik: Grenzüberschreitende Nutzung (NCPeH)](https://www.gematik.de/anwendungen/ncpeh)
