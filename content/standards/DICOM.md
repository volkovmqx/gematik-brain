---
title: DICOM
audience: [technical]
tags: [standards, bildgebung, medizin, interoperabilitaet, krankenhaus]
aliases: [Digital Imaging and Communications in Medicine, DICOM-Standard]
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, it-dienstleister, ti-infrastruktur, forschung]
  interests: [technik, business]
maturity: wachsend
---

# DICOM

**DICOM** (Digital Imaging and Communications in Medicine) ist der internationale Standard für die Speicherung, Übertragung und Verwaltung medizinischer Bilddaten wie Röntgenaufnahmen, CT- und MRT-Scans.

## Erklärt für Einsteiger

Wenn du eine Röntgenaufnahme im Krankenhaus machst, wird das Bild nicht einfach als JPEG gespeichert. Es steckt viel mehr drin: dein Name, das Datum, das Gerät, die Strahlendosis, der Name des Arztes. DICOM ist das Format, das all diese Informationen zusammen mit dem Bild speichert. Dank DICOM kann ein Radiologe in München ein Bild öffnen, das in Hamburg aufgenommen wurde, und bekommt alle nötigen Informationen direkt angezeigt.

## Überblick

DICOM wurde in den 1980er-Jahren von der amerikanischen Radiologiegesellschaft (ACR) und dem Elektronikindustrieverband (NEMA) entwickelt. Die erste Version erschien 1985 unter dem Namen ACR-NEMA. Der aktuelle Standard heißt DICOM und ist als NEMA-Standard PS3 sowie als ISO-Norm 12052:2017 normiert.

DICOM ist heute in nahezu jeder bildgebenden Einrichtung im Einsatz: Krankenhäuser, Radiologiepraxen, Kardiologiezentren und nuklearmedizinische Institute. Alle modernen bildgebenden Geräte (Röntgen, CT, MRT, Ultraschall, PET, Mammografie) exportieren ihre Bilddaten im DICOM-Format.

Im deutschen Krankenhaus-IT-Kontext ist DICOM die Basis für:

- **[[PACS]]** (Picture Archiving and Communication System): Das Archiv, in dem DICOM-Bilder langfristig gespeichert werden.
- **[[RIS]]** (Radiologie-Informationssystem): Verwaltet Aufträge und Befunde und kommuniziert über DICOM-Worklists mit den Modalitäten.
- **[[Teleradiologie]]**: DICOM-Bilder können über standardisierte Schnittstellen an externe Befunder übertragen werden.

> [!klinik-integration] Klinik-Integration: KIS-PACS-RIS-Anbindung über HL7 und DICOM
> **HL7-Schnittstellen im Bildgebungs-Workflow:** Das KIS schickt bei einem Radiologieauftrag eine HL7 v2 ORM-Nachricht (Order Message) an das RIS. Das RIS trägt den Auftrag in die DICOM Modality Worklist ein. Die Modalität (CT, MRT, Röntgen) ruft die Workliste ab und übernimmt Patientendaten ohne manuelle Eingabe. Nach der Befundung schickt das RIS eine HL7 ORU-Nachricht (Observation Result) mit dem Befundtext zurück ans KIS. Fehler in dieser Kette (falsche AE-Title-Konfiguration, HL7-Mapping-Fehler) führen zu Doppeldokumentationen oder fehlenden Befunden.
>
> **Deployment und Hochverfügbarkeit:** Der PACS-Server ist für den 24/7-Klinikbetrieb ein kritisches System. Ausfallzeiten blockieren Notaufnahme, OP-Planung und Stationsvisiten. Anforderungen: RAID-gesicherter Storage mit mindestens N+1-Redundanz, PACS-Cluster für Zero-Downtime-Updates, Netzwerksegmentierung (DICOM-Geräte in separatem VLAN). Typische PACS-Ports (TCP 104, 11112) sind in der Firewall explizit freizuschalten und auf autorisierte AE-Titles zu beschränken.
>
> **DICOM-Datenschutz:** DICOM-Dateien enthalten Patientenidentifikatoren als Klartextattribute. Für Teleradiologie-Versendungen und Forschungsexporte ist De-Identifikation nach DICOM PS3.15 Annex E Pflicht. Im PACS-Backup darauf achten, dass verschlüsselte Speicherung aktiviert ist.

> [!interesse-technik] Entwickler-Einstieg: DICOMweb und FHIR-Integration
> Moderne Systeme nutzen **DICOMweb** statt klassischem DICOM-Netzwerkprotokoll. Die drei RESTful-Endpunkte sind WADO-RS (Abruf), STOW-RS (Speichern) und QIDO-RS (Suche). Mit der FHIR-Ressource `ImagingStudy` können DICOM-Serien in FHIR-Workflows referenziert werden, ohne die Bilddaten selbst im FHIR-Server zu speichern. Für die Integration in [[ePA]]-fähige Systeme ist perspektivisch der [[IHE]]-Workflow IHE RAD XDS-I.b relevant. Toolkits: dcm4chee (Open Source DICOM-Server), fo-dicom (.NET), pydicom (Python).

### Relevanz für die Telematikinfrastruktur

In der zweiten Ausbaustufe von [[MyHealth@EU]] (Wave 2) sollen medizinische Bilddaten im DICOM-Format grenzüberschreitend ausgetauscht werden können. Das [[KIS]] kommuniziert über [[HL7]]-Nachrichten und DICOM-Schnittstellen mit dem PACS. Die [[ePA]] sieht in zukünftigen Versionen die Einbindung von DICOM-Objekten vor.

> [!praxis-tipp] Praxis-Tipp: Bilddaten und ePA: Was heute schon funktioniert
> In Ihrer Praxis bedeutet das: Die ePA unterstützt aktuell noch keine nativen DICOM-Dateien. Was Sie heute tun können:
> - Befundberichte zu Röntgen- und MRT-Untersuchungen als PDF in die ePA des Patienten stellen
> - Für die Weitergabe von Bilddaten: Das Patientenportal Ihres PACS-Anbieters nutzen (z.B. mediDOK). Bilder werden per QR-Code oder Link bereitgestellt.
> - Wenn Sie einen Vorbefund aus einem anderen Haus benötigen: Direkt beim dortigen PACS-Betreiber den Bildexport im DICOM-Format anfragen.
>
> Sobald die ePA-Bildintegration verfügbar ist, wird Ihr PVS-Hersteller ein entsprechendes Update bereitstellen. Handlungsbedarf besteht jetzt noch nicht.

## Technische Details

### DICOM-Objekte und SOP-Klassen

DICOM definiert sogenannte **SOP-Klassen** (Service-Object Pair Classes). Jede SOP-Klasse beschreibt eine Kombination aus:

- einem **Informationsobjekt** (z.B. CT-Bild, MRT-Bild, SR-Dokument)
- einem oder mehreren **DIMSE-Diensten** (DICOM Message Service Element), z.B. C-STORE (Speichern), C-FIND (Suchen), C-MOVE (Abrufen)

Jede SOP-Klasse hat eine eindeutige **UID** (Unique Identifier) nach dem Schema 1.2.840.10008.x.x.x.

### DICOM-Dateiformat

Eine DICOM-Datei besteht aus:

1. **Header**: 128 Byte Präambel und 4-Byte-Kenner "DICM"
2. **Data Set**: Sequenz von Datenelementen (Attributen) mit je Tag, VR (Value Representation), Länge und Wert
3. **Pixel Data Element** (7FE0,0010): Die eigentlichen Bilddaten, komprimiert (JPEG, JPEG 2000, RLE) oder unkomprimiert

Tags sind hexadezimale Zahlenpaare: (0010,0010) ist der Patientenname, (0008,0060) die Modalität. DICOM definiert über 4.000 standardisierte Tags.

### Netzwerkkommunikation

DICOM-Geräte kommunizieren über **DICOM Application Entities (AE)**. Verbindungen werden als **DICOM Associations** über TCP/IP aufgebaut. Typische Ports: 104 (Standard), 11112 (alternativer Port).

Wichtige Netzwerkdienste:

| Dienst | Funktion |
|---|---|
| C-STORE | Bild an PACS übertragen |
| C-FIND | In PACS oder Worklist suchen |
| C-MOVE | Bild von PACS an Workstation anfordern |
| C-GET | Bild direkt abrufen |
| DICOM Worklist | Auftragsliste vom RIS an Modalität |

### DICOM und Web: DICOMweb

Neuere Systeme implementieren **DICOMweb** (DICOM over HTTP), das drei RESTful-Dienste definiert:

- **WADO-RS** (Web Access to DICOM Objects via RESTful Services): Abruf von Bildern per HTTP GET
- **STOW-RS** (Store Over the Web): Speichern von Bildern per HTTP POST
- **QIDO-RS** (Query based on ID for DICOM Objects): Suche per HTTP GET

DICOMweb ermöglicht die Integration von DICOM-Bildern in Webapplikationen und [[FHIR]]-basierte Systeme. Der [[IHE]]-Profil **IHE RAD: AIW-I** beschreibt die Integration von DICOMweb in Arbeitsabläufe der bildgebenden Diagnostik.

> [!dev-quickstart] Dev Quickstart: DICOMweb QIDO-RS, WADO-RS und STOW-RS
> Basis-URL des DICOMweb-Servers (Beispiel dcm4chee): `http://pacs.example.de:8080/dcm4chee-arc/aets/DCM4CHEE/rs`
> ```bash
> # QIDO-RS: Studien nach Patient ID suchen
> curl -X GET "http://pacs.example.de:8080/dcm4chee-arc/aets/DCM4CHEE/rs/studies?PatientID=12345" \
>   -H "Accept: application/dicom+json"
>
> # WADO-RS: Alle Instanzen einer Serie abrufen (gibt multipart/related DICOM zurück)
> curl -X GET "http://pacs.example.de:8080/dcm4chee-arc/aets/DCM4CHEE/rs/studies/<StudyUID>/series/<SeriesUID>/instances" \
>   -H "Accept: multipart/related; type=application/dicom"
>
> # STOW-RS: DICOM-Datei in PACS speichern
> curl -X POST "http://pacs.example.de:8080/dcm4chee-arc/aets/DCM4CHEE/rs/studies" \
>   -H "Content-Type: multipart/related; type=application/dicom" \
>   --data-binary @image.dcm
>
> # FHIR ImagingStudy: DICOM-Studie per FHIR referenzieren (StudyUID als Identifier)
> # GET [fhir-base]/ImagingStudy?identifier=urn:dicom:uid:1.2.840.10008.5.1.4.1.1.2.<StudyUID>
> ```
> - Content-Type für Metadaten: `application/dicom+json` (JSON) oder `application/dicom+xml` (XML)
> - Open Source PACS-Server: [dcm4chee-arc](https://github.com/dcm4che/dcm4chee-arc-light)
> - Python-Client: [dicomweb-client](https://dicomweb-client.readthedocs.io/)
> - DICOM Standard PS3.18 (DICOMweb): [dicomstandard.org](https://www.dicomstandard.org/using/dicomweb)

### Datenschutz und De-Identifikation

DICOM-Dateien enthalten direkte Patientenidentifikatoren (Name, Geburtsdatum, Patientennummer). Für Forschungsdaten und externe Teleradiologie sind sie zu de-identifizieren. DICOM PS3.15 Annex E definiert einen Profil-basierten Ansatz zur De-Identifikation, bei dem eine Liste von Tags entfernt oder pseudonymisiert wird.

## Verknüpfungen

- [[KIS]] (integriert PACS und RIS über DICOM-Schnittstellen)
- [[IHE]] (Integrationsprofile für DICOM in klinischen Workflows, z.B. IHE RAD, IHE XDS-I)
- [[HL7]] (HL7 v2 ORM-Nachrichten triggern DICOM-Worklist-Einträge)
- [[FHIR]] (ImagingStudy-Ressource referenziert DICOM-Objekte per UID)
- [[MyHealth@EU]] (Plant DICOM-Bildaustausch in Wave 2)
- [[ePA]] (Langfristig: Einbindung von DICOM-Objekten)
- [[MIO]] (Medizinische Informationsobjekte, perspektivisch Bildintegration)
- [[Telemedizin]] ([[Teleradiologie]] nutzt DICOM für Fernbefundung)

## Quellen

- [DICOM Standard – dicomstandard.org](https://www.dicomstandard.org/about)
- [DICOM PS3.1: Introduction and Overview – NEMA](https://dicom.nema.org/medical/dicom/current/output/html/part01.html)
- [Wikipedia: DICOM](https://de.wikipedia.org/wiki/DICOM)
- [IHE Radiology Technical Framework – IHE International](https://www.ihe.net/resources/technical_frameworks/#radiology)
