---
title: PACS
audience: [technical]
tags: [infrastruktur, radiologie, krankenhaus, bildgebung, dicom]
aliases: [Picture Archiving and Communication System, Bildarchiv]
maturity: wachsend
---

# PACS

Ein **PACS** (Picture Archiving and Communication System) ist ein digitales Bildarchiv-System, das medizinische Bilder (Röntgen, CT, MRT, Ultraschall) zentral speichert, verwaltet und für autorisierte Benutzer bereitstellt.

## Erklärt für Einsteiger

Stell dir vor, ein Krankenhaus macht täglich hunderte Röntgen- und CT-Aufnahmen. Früher lagen diese als Röntgenfolien in physischen Archiven und mussten mühsam herausgesucht werden. Das PACS ist wie eine riesige digitale Bilderbibliothek: Alle Aufnahmen werden sofort nach der Entstehung digital gespeichert und können von jedem Bildschirm im Krankenhaus abgerufen werden. Ein Arzt kann ein Bild von vor zwei Jahren und das aktuelle Bild gleichzeitig nebeneinander betrachten, ohne die Folie suchen zu müssen.

## Überblick

Das PACS ist ein zentrales Infrastrukturelement in Krankenhäusern und radiologischen Praxen. Es nimmt Bilder von Modalitäten (CT-Geräte, MRT-Scanner, Röntgenanlagen, Ultraschallgeräte) entgegen, speichert sie dauerhaft und stellt sie für die Befundung und klinische Nutzung bereit.

Das PACS arbeitet eng mit dem [[RIS]] (Radiologie-Informationssystem) zusammen: Das RIS verwaltet den administrativen Workflow (Aufträge, Termine, Befunde), das PACS übernimmt die eigentliche Bildspeicherung und -bereitstellung. Beide Systeme sind in der Regel eng miteinander integriert, oft vom gleichen Hersteller.

Im stationären Kontext ist das PACS Teil des übergeordneten [[KIS]] (Krankenhausinformationssystem) oder eng daran angebunden. Radiologen befunden direkt an speziellen PACS-Arbeitsstationen (Diagnostik-Workstations) mit hochauflösenden Monitoren, die für die medizinische Bildgebung zertifiziert sind.

### Markt und Anbieter

Im deutschen Markt sind die führenden PACS-Anbieter Agfa HealthCare (Enterprise Imaging), Dedalus (ORBIS), Sectra, Siemens Healthineers (Syngo.via), Fujifilm (Synapse) und Visus (JiveX). Viele Anbieter liefern RIS und PACS als kombiniertes Produkt. Neuere Cloud-basierte PACS-Lösungen (Vendor Neutral Archive, VNA) erlauben die herstellerunabhängige Speicherung über mehrere Standorte hinweg.

## Technische Details

### DICOM als Basis

Das PACS basiert vollständig auf dem [[DICOM]]-Standard (Digital Imaging and Communications in Medicine). Alle Bilder werden im DICOM-Format gespeichert. Jedes Bild trägt einen DICOM-Header mit Patientendaten, Aufnahmedatum, Modalitätstyp und technischen Aufnahmeparametern.

Die Kommunikation zwischen PACS und anderen Systemen erfolgt über DICOM-Dienste:

- **C-STORE**: Modalitäten (CT, MRT) übertragen fertige Bilder per C-STORE an den PACS-Server.
- **C-FIND**: Klinische Systeme (RIS, Befundstationen) suchen nach Bildern oder Serien.
- **C-MOVE**: Bilder werden von einem PACS-Server auf eine Befundstation oder ein anderes System übertragen.
- **C-GET**: Direkter Abruf von Bildobjekten ohne separaten Speicherserver.
- **WADO (Web Access to DICOM Objects)**: HTTP-basierter Zugriff auf DICOM-Objekte. Wird für Web-Viewer und moderne Integrationen genutzt. Standard ist WADO-RS (RESTful) aus DICOMweb.

### Speicherarchitektur

PACS-Systeme nutzen typischerweise ein mehrstufiges Speicherkonzept:

- **Online-Speicher (Tier 1)**: Schnelle Festplatten oder SSDs für aktuelle und häufig genutzte Bilder. Zugriffszeit unter einer Sekunde.
- **Near-line-Speicher (Tier 2)**: Günstigere Massenspeicher für ältere Bilder. Zugriffszeit von Sekunden bis Minuten.
- **Archiv (Tier 3)**: Langzeitarchivierung auf Bandsystemen oder Cloud-Speicher. Zugriff in Minuten bis Stunden.

Die Aufbewahrungspflicht für medizinische Bilder beträgt in Deutschland nach § 85 Strahlenschutzgesetz (StrlSchG) mindestens 10 Jahre (bei Minderjährigen bis zum 28. Lebensjahr).

### Vendor Neutral Archive (VNA)

Ein VNA ist ein herstellerneutrales Bildarchiv, das DICOM-Bilder verschiedener Quellen und Formate zentral speichert. Ein VNA entkoppelt die Langzeitspeicherung von den RIS/PACS-Systemen einzelner Abteilungen. Das ermöglicht Migration zu neuen PACS-Lösungen, ohne das Bildarchiv zu verlieren.

### Integration in die Telematikinfrastruktur

Das PACS ist kein direkter Teilnehmer der [[Telematikinfrastruktur]], aber über das [[KIS]] mit ihr verbunden:

- **[[ePA]]**: Bildgebungsberichte und perspektivisch auch DICOM-Bilder können über das KIS in die ePA des Patienten eingestellt werden. Eine direkte PACS-zu-ePA-Integration ist in Spezifikation.
- **[[ISiK]]**: ISiK Stufe 3 definiert FHIR-Profile für diagnostische Berichte (DiagnosticReport), die Metadaten zu Bildgebungsstudien aus dem PACS enthalten können.
- **IHE-Profile**: Das PACS kann über IHE-konforme Schnittstellen (XDS-I für Bildgebungsdokumente) in übergreifende Architekturkonzepte integriert werden.

## Verknüpfungen

- [[RIS]] (Radiologie-Informationssystem; sendet Bilder ans PACS, ruft Bilder zur Befundung ab)
- [[DICOM]] (Bildformat und Kommunikationsprotokoll; technische Basis des PACS)
- [[KIS]] (Krankenhausinformationssystem; übergeordnetes System; PACS ist Subsystem oder eng angebunden)
- [[ePA]] (Befunde und perspektivisch Bilddaten können in die ePA eingestellt werden)
- [[ISiK]] (FHIR-basierter Standard für diagnostische Berichte im Krankenhaus)
- [[IHE]] (IHE-Radiology-Profile für PACS-Integration in übergreifende Architekturen)

## Quellen

- [DICOM Standard (NEMA PS3)](https://www.dicomstandard.org/current)
- [IHE Radiology Technical Framework](https://www.ihe.net/resources/technical_frameworks/#radiology)
- [Wikipedia: Picture Archiving and Communication System](https://de.wikipedia.org/wiki/Picture_Archiving_and_Communication_System)
- [ISiK Stufe 3 – DiagnosticReport | gematik Simplifier](https://simplifier.net/isik)
