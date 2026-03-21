---
title: OPS
audience: [technical, non-technical]
tags: [standards, kodierung, krankenhaus, abrechnung, prozeduren]
aliases: [Operationen- und Prozedurenschlüssel, Prozedurenklassifikation]
relevance:
  sectors: [krankenhaus, hersteller, kasse, it-dienstleister]
  interests: [compliance, technik]
maturity: wachsend
---

# OPS

Der OPS (Operationen- und Prozedurenschlüssel) ist das offizielle deutsche Klassifikationssystem für medizinische Prozeduren und Operationen, das vom [[BfArM]] gepflegt wird und in der stationären Abrechnung nach dem [[DRG|G-DRG-System]] verpflichtend anzuwenden ist.

## Erklärt für Einsteiger

Wenn ein Arzt im Krankenhaus eine Operation durchführt, muss er genau dokumentieren, was er gemacht hat. Dafür gibt es einen einheitlichen Zahlencode, ähnlich wie eine Artikelnummer im Supermarkt. Der OPS ist dieses Codebuch für Operationen und medizinische Maßnahmen. Jeder Eingriff, ob eine Knieoperation, eine Bluttransfusion oder ein CT-Scan, hat einen eindeutigen Code. Diese Codes sind die Grundlage für die Abrechnung des Krankenhauses mit den Krankenkassen.

## Überblick

Der OPS entstand aus der deutschen Adaptation der International Classification of Procedures in Medicine (ICPM) der Weltgesundheitsorganisation. Das [[BfArM]] pflegt und aktualisiert den OPS jährlich. Jede neue Version tritt zum 1. Januar des Folgejahres in Kraft.

Der OPS ist neben dem [[ICD-10-GM]] das zweite zentrale Kodierungssystem im deutschen Gesundheitswesen. Während [[ICD-10-GM]] Diagnosen klassifiziert, erfasst der OPS durchgeführte Maßnahmen. Beide Systeme werden gemeinsam für die stationäre Abrechnung benötigt.

Im [[DRG|G-DRG-System]] (German Diagnosis Related Groups) bestimmen die kodierten OPS-Prozeduren gemeinsam mit ICD-10-Diagnosen die Fallpauschale, nach der ein Krankenhaus vergütet wird. Fehlerhafte oder unvollständige OPS-Kodierung wirkt sich direkt auf die Erlöse des Krankenhauses aus.

> [!interesse-compliance]
> Die korrekte OPS-Kodierung ist Pflicht für alle stationären Einrichtungen. Das [[InEK]] prüft Abrechnungsdaten über den MD. Fehler in der OPS-Kodierung können zu Rückforderungen führen. Das [[BfArM]] veröffentlicht jährlich verbindliche Korrekturen und Übergangslösungen. Die aktuell gültige Version ist jeweils ab 1. Januar des laufenden Jahres verpflichtend anzuwenden.

Außer im stationären Bereich kommt der OPS im ambulanten Operieren (§ 115b SGB V) und in der spezialärztlichen Ambulanzversorgung zum Einsatz.

## Technische Details

### Struktur und Kapitel

Der OPS ist hierarchisch aufgebaut. Codes haben das Format: Kapitel-Dreistelliger Kode mit Nachkommastellen. Ein Beispiel: `5-470.11` steht für eine laparoskopische Appendektomie.

Der OPS gliedert sich in sechs Kapitel:

| Kapitel | Bereich |
|---------|---------|
| 1 | Diagnostische Maßnahmen |
| 3 | Bildgebende Diagnostik |
| 5 | Operationen |
| 6 | Medikamente |
| 8 | Nichtoperative therapeutische Maßnahmen |
| 9 | Ergänzende Maßnahmen |

Kapitel 5 (Operationen) ist das umfangreichste und untergliedert sich nach Organsystemen und Operationstypen.

### Kodierstruktur

Ein OPS-Code besteht aus:
- Einem Kapitelzeichen (1, 3, 5, 6, 8 oder 9)
- Einem Bindestrich
- Einer dreistelligen Grundkategorie
- Einem Punkt und weiteren Stellen für die genaue Spezifikation

Beispiel: `8-800.c0` bedeutet: Kapitel 8 (therapeutische Maßnahmen), Grundkategorie 800 (Transfusion), Spezifikation c0 (Vollblut, autolog).

### Versionen und Jahresaktualität

Das [[BfArM]] veröffentlicht jährlich eine neue OPS-Version. Die aktuelle Version wird online und als Download bereitgestellt, einschließlich:
- Systematisches Verzeichnis (hierarchische Liste aller Kodes)
- Alphabetisches Verzeichnis (Stichwortsuche)
- Anwendungshinweise und Kodierrichtlinien

Die Deutschen Kodierrichtlinien (DKR) des [[InEK]] (Institut für das Entgeltsystem im Krankenhaus) ergänzen den OPS mit verbindlichen Anwendungsregeln für die DRG-Abrechnung.

### FHIR-Repräsentation

Im deutschen [[FHIR]]-Ökosystem wird der OPS als CodeSystem mit der kanonischen URL `http://fhir.de/CodeSystem/bfarm/ops` referenziert. Die Versionsangabe erfolgt über den Parameter `version` (z.B. `2024`).

In [[ISiK]]-Profilen wird der OPS in der Ressource `ISiKProzedur` (basiert auf FHIR Procedure) verwendet. Das `code`-Element enthält OPS-Kodes zur Beschreibung der durchgeführten Maßnahme:

```json
{
  "resourceType": "Procedure",
  "code": {
    "coding": [{
      "system": "http://fhir.de/CodeSystem/bfarm/ops",
      "version": "2024",
      "code": "5-470.11",
      "display": "Appendektomie: Laparoskopisch"
    }]
  }
}
```

Das FHIR-Profil verlangt die Angabe des Systemjahrs (`version`), da OPS-Codes sich zwischen Versionen ändern können.

> [!interesse-technik]
> OPS als FHIR CodeSystem: `http://fhir.de/CodeSystem/bfarm/ops`. Immer mit `version`-Parameter (z.B. `2024`) verwenden. BfArM-Download: Systematisches Verzeichnis, Alphabetisches Verzeichnis und Anwendungshinweise als ZIP unter [bfarm.de/OPS](https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/OPS/_node.html). Für ISiK-konforme Systeme: FHIR-Profil `ISiKProzedur` (Ressource `Procedure`) mit OPS im `code`-Element nutzen. Validierungsserver: [ontoserver.bfarm.de](https://terminologien.bfarm.de/).

### Abgrenzung zum ICD-10-GM

| Merkmal | OPS | [[ICD-10-GM]] |
|---------|-----|------|
| Zweck | Prozedurenkodierung | Diagnosekodierung |
| Herausgeber | [[BfArM]] | [[BfArM]] |
| Aktualisierung | Jährlich | Jährlich |
| Pflichtig in | G-DRG, § 115b SGB V | G-DRG, ambulant/stationär |
| FHIR-Ressource | Procedure | Condition |

### Nutzung in KIS-Systemen

[[KIS|Krankenhausinformationssysteme (KIS)]] enthalten Module für die Prozedurendokumentation. Ärzte und medizinisches Codierpersonal kodieren OPS-Prozeduren direkt im KIS. Viele KIS bieten automatische Kodevorschläge auf Basis von Freitext-OP-Berichten an. Die OPS-Daten fließen in den DRG-Grouper des KIS ein, der die Fallpauschale berechnet.

## Verknüpfungen

- [[BfArM]]: Herausgeber und Pfleger des OPS
- [[ICD-10-GM]]: Pendant für Diagnosekodierung, gemeinsam mit OPS für G-DRG-Abrechnung
- [[KIS]]: Dokumentiert OPS-Prozeduren im klinischen Workflow
- [[ISiK]]: Nutzt OPS in der Ressource ISiKProzedur für Krankenhausinteroperabilität
- [[FHIR]]: Technisches Format für die OPS-Übermittlung in digitalen Systemen
- [[ePA]]: Prozedurenkodierungen können in der Patientenakte gespeichert werden
- [[MIO]]: MIO-Profile nutzen OPS für strukturierte Prozedurenbeschreibungen

## Quellen

- [BfArM: Kodiersysteme – OPS](https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/OPS/_node.html)
- [InEK: G-DRG-System und Kodierrichtlinien](https://www.g-drg.de/G-DRG-System)
- [gematik: ISiK Prozedur-Profil](https://simplifier.net/guide/isik-basismodul-stufe4/Prozedur)
- [HL7 Deutschland: Basisprofile OPS CodeSystem](https://simplifier.net/packages/de.basisprofil.r4)
