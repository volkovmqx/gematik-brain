---
title: RIS
audience: [technical]
tags: [infrastruktur, radiologie, krankenhaus, software, bildgebung]
aliases: [Radiologie-Informationssystem, Radiologieinformationssystem]
---

# RIS

Ein **RIS** (Radiologie-Informationssystem) ist ein Softwaresystem, das die administrativen und klinischen Abläufe einer radiologischen Abteilung verwaltet: Auftragsannahme, Terminplanung, Befunderstellung und Archivierungssteuerung.

## Erklärt für Einsteiger

Wenn ein Arzt im Krankenhaus ein Röntgenbild anordnet, muss das irgendwo koordiniert werden: Wer macht die Aufnahme? Wann? Wer schreibt den Befund? Wer bekommt das Ergebnis? Das RIS ist das Verwaltungssystem hinter der Radiologie. Es empfängt den Auftrag vom Krankenhaussystem, koordiniert die Bildaufnahme und schickt den fertigen Befund zurück an den behandelnden Arzt. Ohne das RIS würde in einem modernen Krankenhaus die Bildgebung nicht reibungslos funktionieren.

## Überblick

Das RIS ist eines der wichtigsten Subsysteme im [[KIS]] (Krankenhausinformationssystem). Es deckt den vollständigen radiologischen Workflow ab:

1. Empfang eines Bildgebungsauftrags vom KIS (z.B. CT-Thorax für Patient XY)
2. Terminplanung und Ressourcenzuteilung (welches Gerät, wann)
3. Übermittlung der Patientendaten und des Auftrags an das bildgebende Gerät via DICOM-Worklist
4. Empfang der fertigen Bilder und Weiterleitung an das PACS (Picture Archiving and Communication System)
5. Befundung durch den Radiologen (direkt im RIS oder über ein separates Befundsystem)
6. Rückübertragung des Befunds an das KIS und den verordnenden Arzt

Das RIS ist damit die organisatorische Klammer zwischen dem medizinischen Auftragswesen (KIS), der Bildgebung selbst (Modalitäten wie CT, MRT, Röntgen) und dem Bildarchiv (PACS).

### Markt und Anbieter

Im deutschen Markt sind RIS-Systeme häufig in bestehende KIS-Lösungen integriert oder als eigenständige Module erhältlich. Führende Anbieter sind unter anderem Dedalus (ORBIS RIS), Siemens Healthineers (Syngo), Sectra und AGFA Healthcare. Viele RIS sind eng mit dem PACS desselben Herstellers gekoppelt.

## Technische Details

### Schnittstellen und Protokolle

Das RIS kommuniziert über zwei Hauptprotokolle mit anderen Systemen:

#### HL7 v2 (Auftragsmanagement)

Die Kommunikation zwischen [[KIS]] und RIS erfolgt über [[HL7]] v2-Nachrichten (in Deutschland meist HL7 v2.x). Relevante Nachrichtentypen:

- **ORM (Order Message)**: KIS sendet Bildgebungsauftrag an das RIS
- **ORR (Order Response)**: RIS bestätigt Empfang und Terminierung
- **ORU (Observation Result)**: RIS sendet fertigen Befund zurück ans KIS

Neuere Integrationen nutzen zunehmend [[FHIR]] R4 (ServiceRequest und DiagnosticReport) als standardisierteres Format, insbesondere im Kontext von [[ISiK]] (Interoperabler Datenaustausch im Krankenhaus).

#### DICOM (Bildgebungsintegration)

Die Anbindung an bildgebende Geräte (Modalitäten) erfolgt über [[DICOM]]-Dienste:

- **Modality Worklist (MWL)**: Das RIS stellt der Modalität eine Arbeitsliste bereit. Das Gerät ruft die Liste ab und übernimmt Patientendaten automatisch, ohne manuelle Eingabe am Gerät.
- **Modality Performed Procedure Step (MPPS)**: Die Modalität meldet dem RIS, wann eine Aufnahme begonnen und beendet wurde.
- **DICOM Storage (C-STORE)**: Fertige Bilder werden vom Gerät an den PACS-Server gesendet.
- **DICOM Query/Retrieve (C-FIND, C-MOVE)**: RIS und Befundstationen können Bilder aus dem PACS abrufen.

### Befundsystem und Diktierlösung

Radiologen erstellen Befunde entweder direkt im RIS oder über separate Diktier- und Spracherkennungssysteme (z.B. Nuance Dragon Medical). Die fertigen Befunddokumente werden als strukturierter Text oder als DICOM Structured Report (SR) gespeichert.

### Integration in die Telematikinfrastruktur

Das RIS ist kein direkter Teilnehmer der [[Telematikinfrastruktur]], kommuniziert aber über das übergeordnete [[KIS]] mit ihr. Relevante Schnittstellen:

- [[ePA]]: Befunde und Bildgebungsberichte können über das KIS in die ePA des Patienten eingestellt werden (FHIR-basiert).
- [[ISiK]]: ISiK Stufe 3 definiert FHIR-Profile für diagnostische Berichte und ermöglicht standardisierten Befundaustausch zwischen RIS und anderen Systemen.
- [[DICOM]]: Bilddaten aus dem PACS können perspektivisch in die ePA eingebettet werden (Spezifikation in Vorbereitung).

## Verknüpfungen

- [[KIS]] (übergeordnetes System; sendet Aufträge an das RIS)
- [[DICOM]] (Bildübertragungsstandard; Basis für Worklist und Bildspeicherung)
- PACS (Picture Archiving and Communication System; Bildarchiv; eng mit RIS gekoppelt)
- [[HL7]] (Nachrichtenstandard für Auftrags- und Befundkommunikation mit KIS)
- [[FHIR]] (modernes Interoperabilitätsformat, zunehmend für RIS-KIS-Kommunikation)
- [[ISiK]] (FHIR-basierter Standard für diagnostische Befunde im Krankenhaus)
- [[ePA]] (Befunde aus dem RIS können über KIS in die ePA eingestellt werden)

## Quellen

- [IHE Radiology Integration Profiles](https://www.ihe.net/resources/technical_frameworks/#radiology)
- [HL7 v2.x: Order Management (ORM/ORR/ORU)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185)
- [DICOM Standard (NEMA PS3)](https://www.dicomstandard.org/current)
- [ISiK Stufe 3 – DiagnosticReport | gematik Simplifier](https://simplifier.net/isik)
