---
title: KRITIS-Dachgesetz
audience: [technical, non-technical]
tags: [standards, recht, gesetz, kritis, sicherheit, krankenhaus]
aliases: [KRITIS-DachG, Kritis-Dachgesetz, CER-Richtlinie Umsetzungsgesetz]
maturity: wachsend
---

# KRITIS-Dachgesetz

Das **KRITIS-Dachgesetz** (offiziell: KRITIS-Dachgesetz, Gesetz zur Umsetzung der CER-Richtlinie) ist das deutsche Bundesgesetz zur Umsetzung der EU-CER-Richtlinie (EU 2022/2557) über die Resilienz kritischer Einrichtungen. Es schafft erstmals einheitliche Mindeststandards für den physischen Schutz kritischer Infrastrukturen in Deutschland.

## Erklärt für Einsteiger

Stell dir vor, ein Krankenhaus wird von einem Hochwasser überflutet oder ein Stromausfall legt die gesamte IT lahm. Bisher gab es in Deutschland keine einheitlichen Regeln, wie Krankenhäuser und andere wichtige Einrichtungen sich gegen solche Bedrohungen schützen müssen. Das KRITIS-Dachgesetz ändert das: Es legt fest, dass alle kritischen Einrichtungen ihre Risiken analysieren, Schutzpläne erstellen und sich registrieren müssen. Krankenhäuser gehören ausdrücklich dazu.

## Überblick

Das KRITIS-Dachgesetz wurde vom **Bundestag am 29. Januar 2026** verabschiedet. Der **Bundesrat stimmte am 6. März 2026** zu. Es setzt die europäische **CER-Richtlinie** (Critical Entities Resilience Directive, EU 2022/2557) in deutsches Recht um. Die CER-Richtlinie ist das physische Gegenstück zur [[NIS-2]]-Richtlinie (Cybersicherheit) und verlangt von den Mitgliedstaaten, kritische Einrichtungen auch gegen physische Bedrohungen zu schützen.

Das Gesetz schafft einen einheitlichen Rahmen für den physischen Schutz kritischer Infrastrukturen, der bislang fragmentiert auf verschiedene Sektorgesetze verteilt war. Das [[BSI]] erhält eine koordinierende Rolle für den Bereich Cybersicherheit in Verbindung mit dem Bundesamt für Bevölkerungsschutz und Katastrophenhilfe (BBK) für den physischen Schutz.

### Zeitplan

- **29. Januar 2026**: Verabschiedung durch den Bundestag
- **6. März 2026**: Zustimmung des Bundesrats
- **17. Juli 2026**: Registrierungspflicht tritt in Kraft (Stichtag für Erstregistrierung betroffener Betreiber)

## Technische Details

### Geltungsbereich: Sektoren und Schwellenwerte

Das KRITIS-Dachgesetz gilt für Betreiber kritischer Anlagen in folgenden Sektoren:

- Energie (Strom, Gas, Öl, Fernwärme)
- Verkehr und Transport
- Bankwesen und Finanzinfrastrukturen
- Trinkwasser und Abwasser
- **Gesundheit** (Krankenhäuser, Labore, Arzneimittelhersteller, medizinische Geräte)
- Digitale Infrastruktur
- Weltraum
- Öffentliche Verwaltung

Im **Gesundheitssektor** fallen insbesondere folgende Einrichtungen in den Geltungsbereich:

- Krankenhäuser ab einem definierten Schwellenwert (laut Gesetz orientiert an Bettenzahl oder Fallzahlen, Einzelheiten werden per Rechtsverordnung festgelegt)
- Labore, die systemrelevante diagnostische Leistungen erbringen
- Hersteller kritischer Arzneimittel und Medizinprodukte
- Betreiber zentraler Gesundheits-IT-Infrastrukturen (relevant für TI-Betreiber)

### Pflichten betroffener Betreiber

Betreiber kritischer Anlagen nach KRITIS-Dachgesetz müssen:

1. **Registrierung**: Ab dem **17. Juli 2026** müssen sich betroffene Betreiber bei der zuständigen Behörde registrieren.
2. **Risikoanalyse**: Identifikation physischer Bedrohungen (Naturkatastrophen, Sabotage, Terrorismus) und Abhängigkeiten von anderen kritischen Infrastrukturen.
3. **Resilienzplan**: Maßnahmen zur Prävention, Reaktion und Wiederherstellung bei Störungen. Der Plan muss regelmäßig aktualisiert werden.
4. **Sicherheitsbeauftragte**: Benennung eines Ansprechpartners für KRITIS-Sicherheitsfragen.
5. **Meldepflichten**: Erhebliche Sicherheitsvorfälle müssen gemeldet werden.

### Abgrenzung zu IT-Sicherheit und BSI-Gesetz

Das KRITIS-Dachgesetz ergänzt, ersetzt aber nicht die bestehenden IT-Sicherheitsanforderungen:

- **KRITIS-Dachgesetz**: Physischer Schutz (Gebäudesicherheit, Zugangskontrolle, Redundanz kritischer Systeme, Schutz vor Naturkatastrophen)
- **BSI-Gesetz / [[NIS-2]]**: Cybersicherheit und IT-Sicherheit

Für viele Betreiber greifen beide Regelwerke gleichzeitig. Krankenhäuser müssen damit sowohl nach BSI-Gesetz ihre IT absichern als auch nach KRITIS-Dachgesetz ihre physische Infrastruktur schützen.

### Sanktionen

Bei Verstößen gegen die Registrierungs- und Resilienzpflichten sind empfindliche Bußgelder vorgesehen. Die Höhe orientiert sich am Umsatz des Betreibers und kann laut Gesetz bis zu 2 Prozent des globalen Jahresumsatzes betragen.

### Bedeutung für Krankenhäuser und TI

Krankenhäuser standen bereits unter IT-Sicherheitsauflagen (BSI-Gesetz, [[ISMS]]-Anforderungen). Das KRITIS-Dachgesetz ergänzt diese um physische Schutzpflichten. Konkrete Auswirkungen:

- Einführung oder Ausbau von Notfallplänen für physische Störungen (Stromausfall, Brand, Überschwemmung)
- Dokumentierte Redundanzmaßnahmen für kritische medizinische Systeme ([[KIS]], Laborinfrastruktur, Beatmungsgeräte)
- Registrierungspflicht ab 17. Juli 2026 bei der zuständigen Aufsichtsbehörde

## Verknüpfungen

- [[KRITIS]] (KRITIS-Konzept als Grundlage; BSI-Gesetz als bestehendes IT-Sicherheitsgesetz)
- [[BSI]] (koordinierende Rolle bei Cybersicherheitsaspekten)
- [[ISMS]] (Informationssicherheitsmanagementsystem; ergänzende Anforderung für Krankenhäuser)
- [[KIS]] (Krankenhausinformationssysteme; Betreiber sind von KRITIS-Dachgesetz betroffen)
- [[Telematikinfrastruktur]] (TI-Betreiber können als kritische Infrastruktur eingestuft sein)
- [[gematik]] (als Betreiber zentraler Gesundheits-IT-Infrastruktur relevant)

## Quellen

- [Bundestag: KRITIS-Dachgesetz – Beschlusstext (Drucksache 20/10292)](https://dip.bundestag.de/vorgang/gesetz-zur-umsetzung-der-cer-richtlinie/314046)
- [BMI: KRITIS-Dachgesetz – Überblick](https://www.bmi.bund.de/DE/themen/bevoelkerungsschutz/kritis-und-sicherheitsforschung/kritis/kritis-dachgesetz-node.html)
- [EU-CER-Richtlinie 2022/2557](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022L2557)
- [BSI: Kritische Infrastrukturen – Anforderungen](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/KRITIS-und-regulierte-Unternehmen_node.html)
