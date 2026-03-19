---
title: PEPP
audience: [technical, non-technical]
tags: [concepts, psychiatrie, psychosomatik, vergütung, krankenhaus]
aliases: [Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik, Psych-Entgeltsystem]
maturity: wachsend
---

# PEPP

Das **PEPP (Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik)** ist das verbindliche, leistungsorientierte Vergütungssystem für stationäre und teilstationäre Behandlungen in psychiatrischen und psychosomatischen Einrichtungen in Deutschland.

## Erklärt für Einsteiger

In normalen Krankenhäusern wird jede Behandlung nach festen Pauschalen abgerechnet, egal wie lange der Patient liegt (das nennt sich [[DRG]]). In der Psychiatrie ist das schwieriger, weil psychische Erkrankungen sehr unterschiedlich verlaufen. PEPP ist ein ähnliches System, aber speziell für psychiatrische Kliniken entwickelt: Die Abrechnung richtet sich nach der Art der Behandlung und der Anzahl der Tage. So bekommt das Krankenhaus für jeden Behandlungstag einen bestimmten Tagessatz, der je nach Diagnose und Leistung unterschiedlich hoch ist.

## Überblick

Das PEPP wurde auf Grundlage von § 17d des Krankenhausfinanzierungsgesetzes ([[KHG]]) entwickelt. Nach einer mehrjährigen Erprobungsphase (2013-2017) ist das System seit dem 1. Januar 2018 verbindlich für alle psychiatrischen und psychosomatischen Krankenhäuser und Abteilungen anzuwenden.

Das System gilt für:
- Psychiatrische Fachkrankenhäuser
- Psychiatrische Abteilungen in Allgemeinkrankenhäusern
- Psychosomatische Fachkliniken
- Kinder- und Jugendpsychiatrische Einrichtungen

Somatische Krankenhäuser ohne psychiatrische Abteilungen fallen nicht unter PEPP, sondern unter das [[DRG]]-System.

### Abgrenzung zum G-DRG

| Merkmal | G-DRG | PEPP |
|---|---|---|
| Geltungsbereich | Somatische Krankenhäuser | Psychiatrie und Psychosomatik |
| Vergütungslogik | Fallpauschale (pro Fall) | Tagespauschale (pro Behandlungstag) |
| Rechtsgrundlage | § 17b KHG | § 17d KHG |
| Katalogentwickler | [[InEK]] | [[InEK]] |

Ein wesentlicher Unterschied: Beim G-DRG spielt die Verweildauer nach einer bestimmten Grenze kaum eine Rolle, beim PEPP wird täglich neu abgerechnet. Damit soll die psychiatrische Versorgung, die häufig langwierig und individuell ist, angemessen vergütet werden.

## Technische Details

### Katalogstruktur

Das [[InEK]] entwickelt und pflegt den PEPP-Katalog jährlich. Der Katalog definiert PEPP-Kodes, die sich aus Diagnose ([[ICD-10-GM]]) und Prozedur ([[OPS]]) ergeben. Jeder PEPP-Kode hat einen Relativgewicht, das mit der krankenhausindividuellen Baserate multipliziert wird.

Die Abrechnung je Behandlungstag ergibt sich aus:

```
Tagessatz = Relativgewicht × Bezugsgröße (Basisentgeltwert)
```

Die bundesweit geltende Bezugsgröße betrug:
- 2024: 277,14 Euro
- 2025: 353,24 Euro (erstmalige Neukalkulierung auf Basis aktueller Kostendaten)
- 2026: System bleibt weitgehend stabil; PEPP-Version 2024/2026 gilt mit ICD-10-GM 2024 und OPS 2024

### Vereinbarungsparteien

Die jährliche PEPP-Vereinbarung wird zwischen dem [[GKV-Spitzenverband]], dem Verband der Privaten Krankenversicherungen und der [[DKG]] (Deutsche Krankenhausgesellschaft) geschlossen. Das [[InEK]] stellt Definitionshandbuch, Kodierrichtlinien und Abrechnungsbestimmungen zur Verfügung.

### Klinische Kodierung

Die Kodierung erfolgt wie im DRG-System durch medizinisches Dokumentationspersonal in den Krankenhäusern. Grundlage sind die deutschen Kodierrichtlinien für Psychiatrie und Psychosomatik (DKRP). Die kodierten Diagnosen und Prozeduren bestimmen den PEPP-Kode und damit den Vergütungsanspruch.

### Integration in KIS-Systeme

Das [[KIS]] (Krankenhausinformationssystem) muss PEPP-Anforderungen unterstützen: Erfassung der Tageskodierungen, Abbildung der Behandlungsstufen, Übermittlung der Abrechnungsdaten an die Kostenträger. Spezielle psychiatrische KIS-Module oder eigenständige psychiatrische IT-Systeme (wie CGM Systema oder Nexus CLINICAL) bilden die PEPP-Logik ab.

## Verknüpfungen

- [[DRG]] (G-DRG: Parallelsystem für die Somatik)
- [[KHG]] (§ 17d KHG: Rechtsgrundlage für PEPP)
- [[InEK]] (entwickelt und pflegt den PEPP-Katalog)
- [[ICD-10-GM]] (Diagnoseklassifikation für PEPP-Kodierung)
- [[OPS]] (Prozedurenklassifikation für PEPP-Kodierung)
- [[GKV-Spitzenverband]] (Vereinbarungspartner der PEPP-Vereinbarung)
- [[DKG]] (Vereinbarungspartner der PEPP-Vereinbarung)
- [[KIS]] (setzt PEPP-Abrechnungslogik um)
- [[KHVVG]] (Krankenhausversorgungsverbesserungsgesetz: beeinflusst Krankenhausvergütung)

## Quellen

- [GKV-Spitzenverband: PEPP-Entgeltsystem 2025](https://www.gkv-spitzenverband.de/krankenversicherung/krankenhaeuser/psychiatrie/pepp_entgeltsystem_2025/pepp_3.jsp)
- [AOK Gesundheitspartner: PEPP-Vereinbarung und -Katalog 2026](https://www.aok.de/gp/krankenhaus/verguetung-psychiatrie/fallpauschalen/vereinbarung-und-katalog)
- [DocCheck Flexikon: PEPP](https://flexikon.doccheck.com/de/PEPP)
- [InEK: PEPP-Definitionshandbuch Version 2024/2026](https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/krankenhaeuser/psychiatrie/pepp/pepp_2026/2025_10_14_PEPP_Definitionshandbuch_Version_2024-2026.pdf)
