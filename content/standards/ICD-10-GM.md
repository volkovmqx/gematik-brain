---
title: ICD-10-GM
audience: [technical]
tags: [standards, kodierung, diagnosen, bfarm, interoperabilität]
aliases: [ICD-10, Internationale Klassifikation der Krankheiten, International Classification of Diseases]
relevance:
  sectors: [krankenhaus, arztpraxis, zahnarzt, psychotherapie, kasse, hersteller, it-dienstleister, regulierung]
  interests: [technik, compliance, business]
maturity: wachsend
---

# ICD-10-GM

ICD-10-GM (Internationale Klassifikation der Krankheiten, 10. Revision, German Modification) ist das offizielle Diagnoseklassifikationssystem für die ambulante und stationäre Versorgung in Deutschland, gepflegt vom [[BfArM]].

## Erklärt für Einsteiger

Damit Ärzte in ganz Deutschland über Krankheiten einheitlich sprechen können, gibt es ein Verzeichnis, das jeder Krankheit einen eindeutigen Code zuweist. Grippe ist zum Beispiel J11, ein Knochenbruch am Unterschenkel ist S82. Dieses Verzeichnis heißt ICD-10-GM. Es sorgt dafür, dass eine Diagnose aus München von einem System in Hamburg genauso verstanden wird. Außerdem brauchen Krankenhäuser und Arztpraxen diese Codes, um abrechnen zu können.

## Überblick

Die ICD (International Classification of Diseases) ist ein Klassifikationssystem der Weltgesundheitsorganisation (WHO). Deutschland nutzt eine eigene nationale Modifikation, die ICD-10-GM, die vom [[BfArM]] im Auftrag des [[BMG]] gepflegt und jährlich aktualisiert wird.

Die ICD-10-GM ist die offizielle Grundlage für die Diagnosecodierung in der ambulanten und stationären Versorgung. Sie ist verpflichtend für die Abrechnung gegenüber gesetzlichen Krankenkassen ([[GKV]]) und für die stationäre Abrechnung nach dem [[DRG|G-DRG-System]] (German Diagnosis Related Groups). Auch die Morbiditätsadjustierung im Risikostrukturausgleich zwischen den Krankenkassen basiert auf ICD-10-GM-Diagnosen.

ICD-10-GM wird außerdem als Terminologiesystem in der deutschen [[Telematikinfrastruktur]] eingesetzt: in [[FHIR]]-Profilen für [[ISiK]], in [[MIO|Medizinischen Informationsobjekten (MIO)]] der [[KBV]] und in [[DEMIS]]-Meldungen des [[RKI]].

## Technische Details

### Struktur

ICD-10-GM ist hierarchisch aufgebaut:

- **21 Kapitel**: Breite Krankheitskategorien (z.B. Kapitel IX: Krankheiten des Kreislaufsystems)
- **Gruppen**: Verwandte Erkrankungen innerhalb eines Kapitels (z.B. I10-I15: Hypertonie)
- **Kategorien**: Dreistellige Codes für spezifische Diagnosen (z.B. I10: Essentielle Hypertonie)
- **Subkategorien**: Vier- bis fünfstellige Codes mit weiterer Differenzierung (z.B. I10.00: Benigne essentielle Hypertonie ohne Angabe einer hypertensiven Krise)

Daneben enthält die ICD-10-GM ein alphabetisches Verzeichnis, das gebräuchliche Diagnosebegriffe auf die systematischen Codes abbildet.

> [!interesse-compliance]
> ICD-10-GM ist Pflicht für die Abrechnung gegenüber GKV-Kassen im ambulanten und stationären Bereich. Die aktuelle Version (ICD-10-GM 2026) gilt ab **1. Januar 2026**. [[PVS]]- und [[KIS]]-Systeme müssen die neue Version jeweils zum Jahreswechsel eingespielt haben. Diagnosen in Abrechnungsdatensätzen (§ 295 SGB V) und [[DRG]]-Kodierung müssen aus der aktuellen GM-Version stammen. Falsche oder fehlende ICD-Codes führen zur Rechnungskürzung durch Krankenkassen oder den Medizinischen Dienst.

### Jährlicher Aktualisierungsprozess

Das [[BfArM]] veröffentlicht jährlich eine neue Version der ICD-10-GM, die jeweils zum 1. Januar in Kraft tritt. Interessierte Parteien (Fachgesellschaften, Kliniken, Kassen) können Änderungsvorschläge einreichen. Das BfArM prüft und konsolidiert diese Vorschläge. Ab Version 2026 gilt ein auf drei Jahre gestreckter Proposalzyklus.

Die aktuelle Version ist ICD-10-GM 2026. Alle Versionen sind kostenlos auf der BfArM-Klassifikationsplattform verfügbar.

### Alpha-ID

Ergänzend zur ICD-10-GM pflegt das BfArM die Alpha-ID, ein Verzeichnis deutschsprachiger Diagnosebegriffe mit einer eindeutigen, versionsübergreifenden Kennung. Alpha-ID ermöglicht es, Diagnosen über verschiedene ICD-Versionen hinweg konsistent zu verfolgen, auch wenn sich Codes ändern. Die Alpha-ID wird vor allem in Primärsystemen ([[KIS]], [[PVS]]) eingesetzt.

> [!interesse-technik]
> **FHIR URI**: `http://fhir.de/CodeSystem/bfarm/icd-10-gm` (kanonisch, versioniert per `version`-Parameter, z.B. `"2026"`)
> **ISiKDiagnose**: FHIR-Profil `ISiKDiagnose` (Condition) mit ICD-10-GM-Code plus Diagnosesicherheit (G/V/Z/A) und Seitenlokalisation (L/R/B) als Extensions.
> **Classifier Download**: Alle Versionen kostenlos auf [klassifikationen.bfarm.de](https://klassifikationen.bfarm.de).
> **DEMIS**: Diagnosen in DEMIS-FHIR-Ressourcen referenzieren denselben URI.
> **Alpha-ID**: Versionsstabile Diagnosebegriff-Kennung für PVS/KIS-Suchsysteme; separater Download via BfArM-Klassifikationsplattform.

### Verwendung in FHIR-Profilen

ICD-10-GM ist als offizielles Codesystem in deutschen [[FHIR]]-Profilen registriert. Der kanonische URI lautet:

```
http://fhir.de/CodeSystem/bfarm/icd-10-gm
```

Dieser URI wird in ISiKDiagnose, MIO-Profilen und DEMIS-Profilen verwendet. Ein Code wird typischerweise mit Versionsjahr angegeben (z.B. `version: "2026"`).

### ISiKDiagnose

Das ISiK-Basisprofil `ISiKDiagnose` (basiert auf FHIR Condition) verwendet ICD-10-GM als primäres Codesystem für Diagnosen. Neben dem Code können Zusatzkennzeichen angegeben werden:

- **G, V, Z, A**: Gesichert, Verdacht, Zustand nach, Ausschluss
- **L, R, B**: Lokalisation (Links, Rechts, Beidseitig)

### DEMIS-Meldungen

Im [[DEMIS]]-System werden Diagnosen der Patienten als ICD-10-GM-Codes in der FHIR-Ressource `Condition` übermittelt. Das RKI hat eigene FHIR-Profile für DEMIS-Meldungen entwickelt, die auf BfArMs ICD-10-GM-Codesystem referenzieren.

### Abgrenzung: ICD-10-GM und ICD-11

Die WHO hat 2022 ICD-11 eingeführt. Deutschland plant eine schrittweise Migration von ICD-10-GM zu ICD-11-GM, die mehrjährige Vorbereitungsarbeiten erfordert. Bis zur vollständigen Migration bleibt ICD-10-GM der verbindliche Standard in Deutschland.

### Verwandte Klassifikationssysteme

Das BfArM pflegt neben ICD-10-GM weitere Kodiersysteme:

- **[[OPS]]** (Operationen- und Prozedurenschlüssel): Prozedurenkodierung, Pendant zu ICD für Eingriffe
- **[[SNOMED-CT|SNOMED CT]]**: Klinische Terminologie, zunehmend in MIO-Profilen genutzt
- **Alpha-ID-SE**: Seltenheitsindex für seltene Erkrankungen

## Verknüpfungen

- [[BfArM]]: Pflegt und veröffentlicht ICD-10-GM im Auftrag des BMG
- [[BMG]]: Auftraggeber für die Pflege der ICD-10-GM
- [[FHIR]]: ICD-10-GM als Codesystem in deutschen FHIR-Profilen
- [[ISiK]]: ISiKDiagnose-Profil verwendet ICD-10-GM obligatorisch
- [[DEMIS]]: Diagnosen in DEMIS-Meldungen werden als ICD-10-GM-Codes kodiert
- [[MIO]]: Medizinische Informationsobjekte nutzen ICD-10-GM für Diagnosefelder
- [[KIS]]: Krankenhausinformationssysteme kodieren Diagnosen nach ICD-10-GM
- [[GKV]]: Abrechnungsgrundlage und Morbiditätserfassung nach ICD-10-GM

## Quellen

- [BfArM: ICD-10-GM](https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/ICD/ICD-10-GM/_node.html)
- [BfArM: ICD-10-GM 2026 Endgültige Fassung](https://www.bfarm.de/DE/Kodiersysteme/News/ICD-10-GM_2026_BfArM_veroeffentlicht_endgueltige_Fassung.html)
- [Klassifikationsplattform BfArM: ICD-10-GM 2025](https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2025/index.htm)
- [Reimbursement Institute: ICD-10-GM Glossar](https://reimbursement.institute/glossar/icd-10/)
