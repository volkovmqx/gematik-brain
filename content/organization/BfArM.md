---
title: BfArM
audience: [technical, non-technical]
tags: [organisation, regulierung, arzneimittel, medizinprodukte, diga]
aliases: [Bundesinstitut für Arzneimittel und Medizinprodukte, Bundesopiumstelle]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, startup, hersteller, regulierung, kasse, patient]
  interests: [compliance, business, technik]
maturity: wachsend
---

# BfArM

Das BfArM (Bundesinstitut für Arzneimittel und Medizinprodukte) ist die deutsche Bundesoberbehörde für die Zulassung und Überwachung von Arzneimitteln und Medizinprodukten, einschließlich digitaler Gesundheitsanwendungen.

## Erklärt für Einsteiger

Bevor eine Pille oder eine App auf Rezept verkauft werden darf, prüft das BfArM, ob sie sicher und wirksam ist. Stell dir das BfArM wie den TÜV für Medikamente und medizinische Apps vor. Es stellt sicher, dass nur Produkte auf den Markt kommen, die nachweislich funktionieren und keine Schäden verursachen. Ohne diese Prüfung könnte jeder beliebige Tabletten oder Apps verkaufen und behaupten, sie heilen Krankheiten.

## Überblick

Das BfArM ist eine selbstständige Bundesoberbehörde im Geschäftsbereich des Bundesministeriums für Gesundheit ([[BMG]]). Es hat seinen Hauptsitz in Bonn, mit einer Außenstelle in Köln, und beschäftigt rund 1.350 Mitarbeiter.

Die Kernaufgaben des BfArM umfassen die Zulassung und Überwachung von Arzneimitteln, die Bewertung von Medizinprodukten, die Regulierung von Betäubungsmitteln und Grundstoffen sowie die Pflege medizinischer Klassifikationssysteme.

Das BfArM gilt als Europas größte Arzneimittelzulassungsbehörde im nationalen Bereich. Es ist Mitglied der Europäischen Arzneimittel-Agentur (EMA) und beteiligt sich an deren wissenschaftlichen Ausschüssen. Damit trägt das BfArM zur europaweiten Arzneimittelsicherheit bei.

Im Bereich der digitalen Gesundheitsversorgung hat das BfArM eine besondere Rolle übernommen: Es ist die zuständige Behörde für die Zulassung digitaler Gesundheitsanwendungen ([[DiGA]]) und digitaler Pflegeanwendungen ([[DiPA]]).

## Technische Details

### Arzneimittelzulassung

Das BfArM prüft Zulassungsanträge für Arzneimittel nach nationalen, dezentralisierten und Mutual-Recognition-Verfahren. Es bewertet klinische Studien, Qualitätsdaten und toxikologische Gutachten. Nach der Zulassung überwacht es die Marktpräsenz über Pharmakovigilanz: Nebenwirkungsmeldungen aus der Praxis werden systematisch ausgewertet.

> [!interesse-compliance]
> Das BfArM ist die Zulassungsbehörde für [[DiGA]] und [[DiPA]]. DiGA-Hersteller müssen die Aufnahme ins DiGA-Verzeichnis (§ 139e SGB V) beim BfArM beantragen. Das Fast-Track-Verfahren dauert maximal 3 Monate. Wird nach vorläufiger Aufnahme kein positiver Versorgungseffekt innerhalb von 12 Monaten nachgewiesen, wird die DiGA aus dem Verzeichnis gestrichen. Arzneimittel und Medizinprodukte benötigen vor dem Marktzutritt eine BfArM-Zulassung oder CE-Kennzeichnung nach MDR.

### DiGA-Fast-Track-Verfahren

Das BfArM ist gemäß § 139e [[SGB-V]] die zuständige Behörde für die Aufnahme von [[DiGA]] in das DiGA-Verzeichnis. Das [[DiGA-Fast-Track|Fast-Track-Verfahren]] läuft in maximal drei Monaten ab und prüft vier Kriterien:

1. **Sicherheit und Funktionstüchtigkeit**: Entsprechend der europäischen Medizinprodukteverordnung ([[MDR]])
2. **Datenschutz**: Datenverarbeitung muss in Deutschland erfolgen; strenge Datensparsamkeitsanforderungen
3. **Interoperabilität**: Export in interoperable Formate auf Basis von [[FHIR]] R4 (MIO DiGA Toolkit)
4. **Positiver Versorgungseffekt**: Entweder sofortiger Nutzennachweis oder vorläufige Aufnahme mit 12-monatiger Frist zur Nachweiserbringung

Das BfArM führt das öffentliche DiGA-Verzeichnis unter `diga.bfarm.de`. Dort sind alle zugelassenen und vorläufig zugelassenen DiGA mit Indikation, Evidenzlage und Erstattungsbetrag aufgeführt.

### DiPA-Verfahren

Seit 2022 betreibt das BfArM auch das Fast-Track-Verfahren für [[DiPA|digitale Pflegeanwendungen (DiPA)]] nach § 40a [[SGB-XI|SGB XI]]. DiPA werden durch die Pflegeversicherung erstattet. Das Prüfverfahren ist analog zu DiGA aufgebaut.

### Medizinproduktebewertung

Das BfArM bewertet Risiken von Medizinprodukten, koordiniert Rückrufe und betreibt ein Vorkommnis-Melde- und Informationssystem. Klinische Prüfungen von Medizinprodukten werden durch das BfArM genehmigt.

> [!interesse-technik]
> **DiGA-Verzeichnis**: [diga.bfarm.de](https://diga.bfarm.de/de): maschinenlesbare Liste aller zugelassenen DiGA mit Indikation, Evidenzlage, Erstattungsbetrag.
> **Klassifikationssysteme**: ICD-10-GM, OPS und SNOMED CT sind als FHIR CodeSystem unter `http://fhir.de/CodeSystem/bfarm/` registriert.
> **AbEM-Daten**: Seit 1. Januar 2026 veröffentlicht das BfArM Ergebnisse der anwendungsbegleitenden Erfolgsmessung (AbEM) im DiGA-Verzeichnis halbjährlich.

### Medizinische Klassifikationssysteme

Das BfArM pflegt und übersetzt internationale Klassifikationssysteme für den deutschen Gesundheitsmarkt:

- **[[ICD-10-GM]]**: Internationale Klassifikation der Krankheiten, German Modification
- **[[OPS]]**: Operationen- und Prozedurenschlüssel
- **[[SNOMED-CT|SNOMED CT]]**: Systematisierte Nomenklatur der Medizin (deutsche Übersetzung)

Diese Klassifikationssysteme sind Grundlage für [[FHIR]]-Profile in der [[Telematikinfrastruktur]], insbesondere in [[ISiK]]-Profilen.

### Bundesopiumstelle

Die Bundesopiumstelle ist eine Abteilung des BfArM und reguliert Betäubungsmittel, psychotrope Stoffe, Grundstoffe und seit 2023 auch den regulierten Umgang mit Cannabis. Sie vergibt Erlaubnisse und überwacht die Lieferkette von der Produktion bis zur Abgabe.

### Zusammenwirken mit gematik und E-Rezept

Das [[E-Rezept]]-Ökosystem betrifft das BfArM indirekt über die Arzneimittelzulassung: Nur zugelassene Arzneimittel dürfen verordnet werden. Die Verordnungsdaten im [[E-Rezept]] (FHIR MedicationRequest nach [[KBV]]-Profil) enthalten [[PZN|PZN-Nummern (Pharmazentralnummern)]], die sich auf das Arzneimittelstammsortiment beziehen.

## Verknüpfungen

- [[DiGA]]: Das BfArM führt das Fast-Track-Verfahren und das DiGA-Verzeichnis
- [[E-Rezept]]: Verordnete Arzneimittel müssen BfArM-zugelassen sein
- [[FHIR]]: DiGA-Interoperabilitätsanforderungen basieren auf FHIR R4
- [[gematik]]: Zusammenarbeit bei digitalen Gesundheitsanwendungen und TI-Anwendungen
- [[Telematikinfrastruktur]]: Rahmeninfrastruktur, in die DiGA zunehmend integriert werden
- [[BSI]]: Zusammenarbeit bei Datenschutz- und Sicherheitsanforderungen für DiGA

## Quellen

- [BfArM: Über das BfArM](https://www.bfarm.de/DE/Das-BfArM/_node.html)
- [BfArM: DiGA und DiPA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/_node.html)
- [DiGA-Verzeichnis](https://diga.bfarm.de/de)
- [§ 139e SGB V: Verzeichnis digitaler Gesundheitsanwendungen](https://www.gesetze-im-internet.de/sgb_5/__139e.html)
