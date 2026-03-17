---
title: SGB V
audience: [technical, non-technical]
tags: [standards, recht, gesetz, krankenversicherung, telematikinfrastruktur]
aliases: [Fünftes Sozialgesetzbuch, SGB 5, Sozialgesetzbuch V]
---

# SGB V

Das Fünfte Buch Sozialgesetzbuch (SGB V) ist das zentrale Gesetz der gesetzlichen Krankenversicherung in Deutschland und die rechtliche Grundlage für alle Anwendungen und Komponenten der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Das SGB V ist das wichtigste Gesetz für das deutsche Gesundheitssystem. Es legt fest, wer versicherungspflichtig ist, welche Leistungen die Krankenkasse bezahlen muss und wie Ärzte, Apotheken und Krankenhäuser mit den Kassen abrechnen. Fast alles, was in der digitalen Gesundheitsversorgung passiert, steht irgendwo in diesem Gesetz: Das E-Rezept, die elektronische Patientenakte, die digitale Krankschreibung und die Telematikinfrastruktur selbst.

## Überblick

Das SGB V wurde 1989 als Artikel 1 des Gesundheits-Reformgesetzes verabschiedet und trat zum 1. Januar 1989 in Kraft. Es löste die bis dahin in der Reichsversicherungsordnung (RVO) verankerten Regelungen zur Krankenversicherung ab. Seitdem wird es durch zahlreiche Gesundheitsreformen laufend aktualisiert.

Das SGB V besteht aus mehr als 400 Paragrafen, die in zwölf Kapitel (Bücher) unterteilt sind. Es regelt unter anderem den Versichertenkreis, die Beitragsbemessung, die Leistungen der GKV, die Vergütung der Leistungserbringer und die Organisation der Krankenkassen.

Für die Telematikinfrastruktur sind die Kapitel 11 (Datentransparenz), 12 (Informationsdienstleistungen) und das Elfte Kapitel (Telematikinfrastruktur, §§ 306 bis 395) besonders relevant.

Wichtige Reformgesetze, die das SGB V in Bezug auf die TI ergänzt haben:

- **E-Health-Gesetz (2015)**: Führte Zeitpläne für eGK-Anwendungen ein
- **Digitale-Versorgung-Gesetz ([[DVG]], 2019)**: Einführung der [[DiGA]], verpflichtende [[ePA]]
- **Patientendaten-Schutz-Gesetz (PDSG, 2020)**: Konkrete Regelungen zur [[ePA]] und zu [[VSDM]]
- **Digital-Gesetz (DigiG, 2024)**: Opt-out-Modell für die [[ePA]], Beschleunigung der TI

## Technische Details

### Relevante Paragrafen für die TI

Die folgenden Paragrafen des SGB V sind für die Telematikinfrastruktur besonders relevant:

#### §291 SGB V: Elektronische Gesundheitskarte

Regelt die [[eGK]] als Ausweis für GKV-Versicherte. Die Karte enthält Versichertenstammdaten und dient als Zugangsmittel zur TI. Der Absatz legt fest, welche Daten verpflichtend und welche freiwillig auf der Karte gespeichert werden.

#### §§ 306 bis 309 SGB V: Telematikinfrastruktur

Definieren die TI als "interoperable und kompatible Informations-, Kommunikations- und Sicherheitsinfrastruktur". §306 regelt den Aufbau, §307 die zugelassenen Teilnehmer, §308 den Betrieb und §309 die Finanzierung der TI durch die [[GKV]].

#### §311 SGB V: Aufgaben der gematik

Bestimmt den gesetzlichen Auftrag der [[gematik]] GmbH: Entwicklung und Pflege der technischen Spezifikationen, Zulassung von TI-Komponenten, Betrieb zentraler Dienste und Sicherstellung der Interoperabilität. Dieser Paragraf ist die Existenzgrundlage der gematik.

#### §§ 334 bis 355 SGB V: Elektronische Patientenakte

Regeln die [[ePA]] vollständig: §334 beschreibt Inhalt und Zweck, §336 die Pflicht der Krankenkassen zur Bereitstellung, §337 die Zugriffsrechte der Versicherten, §341 die technischen Anforderungen und §353 die besonderen Schutzmaßnahmen für sensible Kategorien (z. B. psychische Gesundheit, Sucht).

#### §360 SGB V: Elektronische Verordnungen (E-Rezept)

Regelt das [[E-Rezept]] als Pflichtformat für Arzneimittelverordnungen in der GKV. Seit dem 1. Januar 2024 sind alle vertragsärztlichen Verordnungen verschreibungspflichtiger Arzneimittel als E-Rezept auszustellen.

#### §371 SGB V: Informationstechnische Systeme in der Krankenhausversorgung (ISiK)

Verpflichtet Krankenhäuser, ihre informationstechnischen Systeme so zu gestalten, dass sie Daten nach definierten Standards bereitstellen können. Diese Verpflichtung ist die gesetzliche Grundlage für den [[ISiK]]-Standard.

#### §33a SGB V: Digitale Gesundheitsanwendungen

Begründet den Anspruch GKV-Versicherter auf [[DiGA]] als Kassenleistung. Dieser Paragraf wurde durch das [[DVG]] 2019 eingefügt.

#### §§ 375 ff. SGB V: Verarbeitung von Sozialdaten

Regeln den Datenschutz beim Umgang mit Sozialdaten im GKV-System, einschließlich der Anforderungen an die [[VAU]] (Vertrauenswürdige Ausführungsumgebung) für ePA-Zugriffsoperationen.

### Verhältnis zu anderen Rechtsquellen

Das SGB V steht in einem engen Verhältnis zu weiteren Rechtsquellen:

- **Bundesmantelvertrag-Ärzte (BMV-Ä)**: Konkretisiert SGB-V-Regelungen für den Vertragsarztbereich
- **DSGVO und BDSG**: Überlagerung der SGB-V-Datenschutzregelungen durch europäisches Datenschutzrecht
- **MDR (EU Medizinprodukteverordnung)**: Gilt ergänzend für DiGA neben dem SGB V
- **[[DiGAV]]**: Durchführungsverordnung zu §33a SGB V

### Änderungshistorie (TI-relevant)

| Jahr | Gesetz | Änderung |
|---|---|---|
| 2015 | E-Health-Gesetz | Zeitpläne für TI-Einführung, eGK-Anwendungen |
| 2019 | DVG | §33a DiGA, §341 ePA-Pflicht für Krankenkassen |
| 2020 | PDSG | Datenschutzrahmen für ePA, VSDM-Regelungen |
| 2024 | DigiG | Opt-out-ePA, Beschleunigung, neue ISiK-Stufen |

## Verknüpfungen

- [[GKV]] (das Versicherungssystem, das SGB V regelt)
- [[gematik]] (§311 SGB V ist ihre Rechtsgrundlage)
- [[Telematikinfrastruktur]] (§§ 306 ff. SGB V)
- [[eGK]] (§291 SGB V)
- [[ePA]] (§§ 334 ff. SGB V)
- [[E-Rezept]] (§360 SGB V)
- [[ISiK]] (§371 SGB V)
- [[DiGA]] (§33a SGB V)
- [[DVG]] (Änderungsgesetz zum SGB V)
- [[VAU]] (Datenschutztechnologie für ePA nach SGB V)
- [[VSDM]] (Stammdatenmanagement nach SGB V)
- [[KBV]] (Normgeber für Vertragsarztrecht unter SGB V)
- [[BfArM]] (Zulassungsbehörde für DiGA nach §33a SGB V)

## Quellen

- [SGB V auf gesetze-im-internet.de](https://www.gesetze-im-internet.de/sgb_5/)
- [sozialgesetzbuch-sgb.de: §306 SGB V](https://www.sozialgesetzbuch-sgb.de/sgbv/306.html)
- [Bundesgesundheitsministerium: Digital-Gesetz FAQ](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/digig/faq-digital-gesetz.html)
- [Bundesamt für Soziale Sicherung: ePA nach §343 SGB V](https://www.bundesamtsozialesicherung.de/de/themen/digitalausschuss/elektronische-gesundheitsakten-und-telematikinfrastruktur/elektronische-patientenakte-epa-nach-343-sgb-v/)
