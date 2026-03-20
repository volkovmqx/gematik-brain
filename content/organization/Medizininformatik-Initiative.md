---
title: Medizininformatik-Initiative
audience: [technical, non-technical]
tags: [organisation, forschung, bmbf, daten, universitätsklinikum, fhir]
aliases: [MII, Medical Informatics Initiative]
relevance:
  sectors: [krankenhaus, forschung, it-dienstleister, hersteller, regulierung, kasse]
  interests: [technik, business, compliance]
maturity: wachsend
---

# Medizininformatik-Initiative

Die **Medizininformatik-Initiative (MII)** ist ein vom [[BMBF]] (Bundesministerium für Bildung und Forschung) geförderter Verbund aller deutschen Universitätsklinika, der eine föderierte Forschungsdateninfrastruktur für die medizinische Forschung aufbaut.

## Erklärt für Einsteiger

In deutschen Universitätskrankenhäusern entstehen täglich riesige Mengen an medizinischen Daten: Diagnosen, Laborwerte, Bildgebungen, Behandlungsverläufe. Bisher waren diese Daten in jedem Krankenhaus separat gespeichert und für die Forschung kaum zugänglich. Die Medizininformatik-Initiative bringt all diese Häuser zusammen und schafft eine gemeinsame technische Plattform, damit Forscherinnen und Forscher mit Einwilligung der Patienten auf diese Daten zugreifen und neue Erkenntnisse über Krankheiten gewinnen können.

## Überblick

Die MII wurde 2016 vom [[BMBF]] gestartet und läuft bis mindestens 2027. Sie feiert 2026 ihr zehnjähriges Bestehen. An der Initiative beteiligen sich alle Universitätskliniken Deutschlands an über 30 Standorten.

Die MII hat vier Konsortien, in denen die Universitätskliniken zusammenarbeiten:

- **DIFUTURE**: München-Tübingen-Allianz (Decision Support in Translational and Personalized Medicine)
- **HiGHmed**: Heidelberg-Göttingen-Hamburg-München-Hannover (High-Grade Medical Data Cooperation)
- **MIRACUM**: Konsortium aus über 10 Standorten (Medical Informatics in Research and Care in University Medicine)
- **SMITH**: Aachen, Jena, Leipzig, Halle (Smart Medical Information Technology for Healthcare)

### Datenintegrationszentren (DIZ)

An jedem Standort betreibt die MII ein **Datenintegrationszentrum (DIZ)**. Das DIZ ist die lokale technische Infrastruktur, die Behandlungsdaten aus [[KIS]], Laborsystemen ([[LIS]]) und anderen Quellen zusammenführt, in ein einheitliches Format (FHIR) transformiert und für Forschungsanfragen bereitstellt.

Die 29 Datenintegrationszentren sind miteinander vernetzt. Forschende können über das zentrale **Forschungsdatenportal für Gesundheit (FDPG)** Datenzugang für wissenschaftliche Studien beantragen.

### Verhältnis zum FDZ Gesundheit

Das [[Forschungsdatenzentrum-Gesundheit]] (FDZ) und die MII sind verwandte, aber getrennte Infrastrukturen:

- Das **FDZ Gesundheit** (beim [[BfArM]]) verarbeitet GKV-Abrechnungsdaten aller 73 Millionen Versicherter und [[ePA]]-Daten. Es hat eine gesamtgesellschaftliche Reichweite.
- Die **MII/FDPG** verarbeitet Behandlungsdaten aus Universitätskliniken. Sie ist tiefer (mehr Detaildaten je Patient), aber schmaler (nur Uniklinikpatienten).

Beide Infrastrukturen arbeiten zusammen und nutzen teilweise dieselben technischen Standards ([[FHIR]], [[SNOMED-CT]], [[LOINC]]).

> [!interesse-business] Marktrelevanz der MII
> Die MII ist der größte strukturierte Abnehmer für Health-IT-Infrastruktur im deutschen Universitätsklinikbereich. Die DIZ-Implementierungen (FHIR-Server, ETL-Pipelines, Data-Science-Plattformen) haben eine Nachfrage nach spezialisierten Dienstleistungen und Produkten geschaffen. Das FDPG als zentrales Portal ist ein Modell für andere Forschungsdatenzugangssysteme in Europa.

## Technische Details

### Kerndatensatz (KDS)

Die MII hat einen **Kerndatensatz (KDS)** definiert: ein einheitliches FHIR-Datenprofil, das alle Standorte implementieren müssen. Dieser Kerndatensatz enthält:

- **Modul Person**: Patientenstammdaten (pseudonymisiert)
- **Modul Fall**: Krankenhausaufenthalte, Diagnosen ([[ICD-10-GM]]), Prozeduren ([[OPS]])
- **Modul Labor**: Laborergebnisse ([[LOINC]]-kodiert)
- **Modul Medikation**: Arzneimittel ([[ATC-Code]])
- **Modul Bildgebung**: Radiologiebefunde ([[DICOM]]-Referenzen)
- **Modul Diagnose**: Strukturierte Diagnosen nach [[ICD-10-GM]]

Alle KDS-Module sind als FHIR R4-Profile auf Simplifier.net veröffentlicht und werden kontinuierlich weiterentwickelt.

> [!interesse-technik] Technische Referenz
> KDS-FHIR-Profile: [simplifier.net/MedizinInformatikInitiative](https://simplifier.net/organization/koordinationsstellemii). FDPG: [forschen-fuer-gesundheit.de](https://www.forschen-fuer-gesundheit.de/). Implementierungsleitfaden: [github.com/medizininformatik-initiative](https://github.com/medizininformatik-initiative). Alle Profile basieren auf [[FHIR]] R4, nutzen [[SNOMED-CT]] und [[LOINC]] als Terminologien und sind mit den deutschen Basisprofilen (HL7 Deutschland) kompatibel.

### Pseudonymisierungskonzept

Behandlungsdaten in der MII werden vor der Übertragung an das FDPG pseudonymisiert. Jeder Patient erhält an jedem Standort eine standortspezifische Pseudonym-ID. Für standortübergreifende Studien gibt es ein Record-Linkage-Verfahren, das Daten derselben Person über Standorte hinweg zusammenführen kann, ohne den Klarnamen zu übermitteln. Das Pseudonymisierungskonzept ist ein Kernthema der MII-Datenschutzarbeit und wird laufend mit dem [[BfDI]] und den Landesdatenschutzbehörden abgestimmt.

### Broad Consent

Patienten an MII-Standorten werden gebeten, einen **[[Broad-Consent|Broad Consent]]** zu unterzeichnen. Damit willigen sie ein, dass ihre pseudonymisierten Behandlungsdaten für eine Vielzahl zukünftiger Forschungszwecke verwendet werden dürfen. Der Broad Consent ist keine Blankovollmacht: Die Einwilligung kann widerrufen werden, und besonders sensible Daten (z.B. psychische Erkrankungen) erfordern eine gesonderte Einwilligung.

## Verknüpfungen

- [[FHIR]] (technisches Datenaustauschformat des MII-Kerndatensatzes)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ; komplementäre Forschungsinfrastruktur)
- [[ePA]] (Datenquelle für das FDZ; inhaltlich verwandt mit MII-Daten)
- [[KIS]] (Quellsystem für DIZ-Daten in den Universitätskliniken)
- [[LIS]] (Laborsystem; liefert Laborwerte in die DIZ)
- [[ICD-10-GM]] (Diagnoseklassifikation im KDS)
- [[OPS]] (Prozedurenklassifikation im KDS)
- [[LOINC]] (Terminologie für Laborwerte im KDS)
- [[SNOMED-CT]] (Terminologie im KDS)
- [[ATC-Code]] (Medikamentenkodierung im KDS)
- [[DICOM]] (Bildgebungsreferenzen im KDS)
- [[BfArM]] (betreibt das FDZ Gesundheit; kooperiert mit MII)
- [[GDNG]] (Gesundheitsdatennutzungsgesetz; Rechtsrahmen für Sekundärnutzung)

## Quellen

- [Medizininformatik-Initiative: Offizielle Website](https://www.medizininformatik-initiative.de/)
- [Springer/PMC: Die MII im Überblick (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11166846/)
- [TMF: MII schafft Forschungsdateninfrastruktur an Unikliniken](https://www.tmf-ev.de/news/mii-schafft-forschungsdateninfrastruktur)
