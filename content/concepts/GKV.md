---
title: GKV
audience: [technical, non-technical]
tags: [konzepte, krankenversicherung, finanzierung, solidarprinzip]
aliases: [Gesetzliche Krankenversicherung, GKV-System, Krankenkasse]
---

# GKV

Die Gesetzliche Krankenversicherung (GKV) ist das beitragsfinanzierte, solidarische Krankenversicherungssystem Deutschlands, dem rund 73 Millionen Versicherte angehören und das den rechtlichen und finanziellen Rahmen für die Telematikinfrastruktur bildet.

## Erklärt für Einsteiger

Die GKV funktioniert wie eine große Solidargemeinschaft: Alle zahlen gemeinsam in einen Topf ein, und wer krank wird, bekommt aus diesem Topf die Behandlung bezahlt. Wer mehr verdient, zahlt mehr ein, bekommt aber dieselben Leistungen wie jemand mit wenig Einkommen. Deutschland hat über 90 verschiedene Krankenkassen, aber alle spielen nach denselben Regeln, die der Gesetzgeber im [[SGB-V]] festgelegt hat.

## Überblick

Die GKV ist das Rückgrat des deutschen Gesundheitssystems. Rund 73 Millionen Menschen in Deutschland sind gesetzlich versichert, das entspricht etwa 88 Prozent der Bevölkerung. Die restlichen rund 12 Prozent sind privat versichert (PKV).

Das Grundprinzip der GKV ist das Solidarprinzip: Beiträge richten sich nach dem Einkommen, nicht nach dem individuellen Krankheitsrisiko. Arbeitnehmer zahlen ihren Beitrag je zur Hälfte selbst und zur Hälfte über den Arbeitgeber. Kinder und nicht erwerbstätige Ehepartner sind beitragsfrei mitversichert.

Die GKV ist gesetzlich im [[SGB-V]] geregelt. Wichtige Durchführungsvorschriften für die digitale Infrastruktur finden sich in den §§ 291 bis 395 SGB V.

Der **GKV-Spitzenverband** ist der Dachverband aller gesetzlichen Krankenkassen in Deutschland. Er hält 22,05 Prozent der Anteile an der [[gematik]] GmbH und finanziert deren Betrieb zu 93 Prozent (1,50 Euro pro Versichertem und Jahr). Die größten Krankenkassen sind AOK, Barmer, Techniker Krankenkasse (TK), DAK-Gesundheit und KNAPPSCHAFT.

## Technische Details

### Rechtliche Grundlage für die TI

Die GKV ist der primäre Auftraggeber und Financier der [[Telematikinfrastruktur]]. Die rechtliche Grundlage für die TI innerhalb des GKV-Systems bilden insbesondere:

- **§ 291 SGB V**: Regelt die [[eGK]] (Elektronische Gesundheitskarte) als Trägermedium für Versichertenstammdaten
- **§ 291a SGB V (alt, jetzt §§ 306 ff. SGB V)**: Definierte die Telematikinfrastruktur und ihre Anwendungen
- **§ 311 SGB V**: Regelt die Aufgaben der [[gematik]] als nationaler TI-Betreiber
- **§§ 334, 341 SGB V**: Regeln die [[ePA]] als Pflichtleistung der gesetzlichen Krankenkassen
- **§ 360 SGB V**: Verpflichtet zur Nutzung des [[E-Rezept]]s

### Finanzierung der TI

Die Finanzierung der TI erfolgt aus Beitragsmitteln der GKV. Der GKV-Spitzenverband handelt Finanzierungsvereinbarungen mit den Leistungserbringern aus. Diese legen fest, welche Einmalzahlungen und laufenden Betriebskostenpauschalen die Krankenkassen für Konnektoren, Kartenterminals und weitere TI-Komponenten in Arztpraxen, Apotheken und Krankenhäusern übernehmen.

Leistungserbringer, die nicht an der TI teilnehmen, erhalten Abschläge auf ihre Vergütung. Für Krankenhäuser galt ab dem 1. Januar 2022 ein Abschlag von 1 Prozent je stationären und ambulanten Fall bei fehlender TI-Anbindung.

### Relevanz für TI-Anwendungen

Alle zentralen TI-Anwendungen richten sich primär an GKV-Versicherte:

- **[[ePA]]**: Jede gesetzliche Krankenkasse ist verpflichtet, ihren Versicherten ab 2025 eine elektronische Patientenakte bereitzustellen
- **[[E-Rezept]]**: Seit Januar 2024 Pflicht für alle GKV-verordneten verschreibungspflichtigen Arzneimittel
- **[[VSDM]]**: Versichertenstammdatenmanagement liest und aktualisiert GKV-Stammdaten von der [[eGK]]
- **[[DiGA]]**: Digitale Gesundheitsanwendungen sind Pflichtleistung der GKV nach [[SGB-V]] §33a
- **[[eAU]]**: Elektronische Arbeitsunfähigkeitsbescheinigung wird direkt an die Krankenkasse übermittelt

### KVNR als Identifikator

Jeder GKV-Versicherte erhält eine lebenslange, krankenkassenübergreifende Krankenversicherungsnummer ([[KVNR]]). Sie dient als eindeutiger Identifikator in der TI, unter anderem als Claim in [[IDP]]-Token und als Schlüssel für die [[ePA]].

## Verknüpfungen

- [[SGB-V]] (gesetzliche Grundlage der GKV)
- [[gematik]] (GKV-Spitzenverband hält 22 % der Anteile)
- [[Telematikinfrastruktur]] (von der GKV finanziert und mandatiert)
- [[eGK]] (Versichertenausweis der GKV-Versicherten)
- [[ePA]] (Pflichtleistung der gesetzlichen Krankenkassen)
- [[E-Rezept]] (für GKV-verordnete Arzneimittel verpflichtend)
- [[VSDM]] (Stammdaten der GKV-Versicherten)
- [[DiGA]] (App auf Rezept als GKV-Leistung)
- [[eAU]] (digitale Krankmeldung an die Krankenkasse)
- [[KVNR]] (eindeutiger Identifikator jedes GKV-Versicherten)
- [[KBV]] (Interessenvertretung der Vertragsärzte im GKV-System)
- [[BfArM]] (reguliert DiGA als GKV-Leistung)

## Quellen

- [GKV-Spitzenverband: Telematikinfrastruktur](https://www.gkv-spitzenverband.de/krankenversicherung/digitalisierung/telematikinfrastruktur/ti.jsp)
- [Bundesgesundheitsministerium: Gesetzliche Krankenversicherung](https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/gesetzliche-krankenversicherung.html)
- [sozialgesetzbuch-sgb.de: §306 SGB V Telematikinfrastruktur](https://www.sozialgesetzbuch-sgb.de/sgbv/306.html)
- [Gematik: gematik GmbH Gesellschafter](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
