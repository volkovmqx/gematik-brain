---
title: HL7
audience: [technical]
tags: [standards, interoperabilität, nachrichten, fhir, hl7v2, hl7v3, cda]
aliases: [Health Level Seven, HL7 International, Health Level 7]
---

# HL7

HL7 (Health Level Seven International) ist eine gemeinnützige Standardisierungsorganisation, die Interoperabilitätsstandards für den Austausch klinischer und administrativer Gesundheitsdaten entwickelt.

## Erklärt für Einsteiger

Wenn ein Krankenhaus und eine Arztpraxis Patientendaten austauschen wollen, müssen beide dasselbe Format verwenden. HL7 legt diese Formate fest, so wie es Normen für Steckdosen gibt, damit jedes Gerät in jeder Steckdose funktioniert. Der Name "Level Seven" bezieht sich auf die siebte Schicht des OSI-Netzwerkmodells, die Anwendungsschicht, also genau die Ebene, auf der Gesundheitsdaten verarbeitet werden.

## Überblick

HL7 International wurde 1987 in den USA gegründet. Die Organisation hat ihren Sitz in Ann Arbor, Michigan, und zählt über 1.600 Mitglieder in mehr als 50 Ländern. In Deutschland ist HL7 Deutschland e.V. die nationale Mitgliedsorganisation.

Die Kernaufgabe von HL7 ist die Entwicklung und Pflege von Standards für den elektronischen Austausch von Gesundheitsdaten. Dabei unterscheidet HL7 zwischen Nachrichtenstandards (für den Datenaustausch in Echtzeit), Dokumentenstandards (für strukturierte klinische Dokumente) und Modellierungsstandards (für die Beschreibung von Domänenobjekten).

HL7-Standards werden weltweit eingesetzt, in Krankenhäusern, Laboren, Radiologieeinheiten und nationalen Gesundheitsinfrastrukturen. In Deutschland bilden HL7-Standards, insbesondere [[FHIR]] R4, die technische Grundlage der [[Telematikinfrastruktur]].

## Technische Details

### HL7 Version 2 (HL7 v2)

HL7 v2 ist der älteste und weltweit am weitesten verbreitete HL7-Standard. Er wurde 1987 veröffentlicht und seither kontinuierlich weiterentwickelt. Die aktuelle Version ist 2.9.

HL7 v2 basiert auf einem Pipe-Delimited-Textformat. Eine Nachricht besteht aus Segmenten, die durch einen dreistelligen Code identifiziert werden. Beispiele:

- **MSH**: Message Header (Metadaten zur Nachricht)
- **PID**: Patient Identification
- **PV1**: Patient Visit
- **OBR**: Observation Request
- **OBX**: Observation/Result

Typische Anwendungsfälle:
- **ADT-Nachrichten** (Admit, Discharge, Transfer): Aufnahme, Entlassung, Verlegung von Patienten
- **ORM/ORU-Nachrichten**: Laboraufträge und -ergebnisse
- **MDM-Nachrichten**: Medizinische Dokumente

HL7 v2 ist in [[KIS|Krankenhausinformationssystemen (KIS)]] und [[PVS|Praxisverwaltungssystemen (PVS)]] weit verbreitet, obwohl es kein zentrales Datenschema erzwingt und Implementierungen deshalb häufig divergieren.

### HL7 Version 3 (HL7 v3)

HL7 v3 wurde Anfang der 2000er Jahre entwickelt, um die Inkonsistenzen von v2 zu beheben. Es basiert auf einem formalen Referenzinformationsmodell (RIM, Reference Information Model) und verwendet XML als Datenformat.

HL7 v3 war technisch konsistenter als v2, aber in der Praxis deutlich komplexer zu implementieren. Die Adoption blieb begrenzt. Der Standard ist nicht abwärtskompatibel zu v2, was Migrationen erschwerte.

### Clinical Document Architecture (CDA)

CDA (Clinical Document Architecture) ist ein Dokumentenstandard, der auf HL7 v3 basiert. Er definiert die Struktur und Semantik klinischer Dokumente wie Arztbriefe, Entlassberichte und Laborbefunde.

CDA-Dokumente sind XML-Dateien mit einem definierten Header (Metadaten) und einem Body (Inhalt). Der Body kann unstrukturierten Text, tabellarische Daten oder vollständig codierte Entries enthalten (Level 1, 2, 3).

In der [[Telematikinfrastruktur]] wird CDA im Kontext der [[ePA]] und des [[KIM]]-Nachrichtenformats für Arztbriefe eingesetzt.

### FHIR (Fast Healthcare Interoperability Resources)

[[FHIR]] ist der neueste und aktuell wichtigste HL7-Standard. Er wurde 2011 als Reaktion auf die Komplexität von HL7 v3 entwickelt. FHIR R4 wurde 2019 als erste normative Version veröffentlicht.

FHIR kombiniert Elemente aus v2 und v3, nutzt aber moderne Webstandards: REST-APIs, JSON und XML. Es ist deutlich einfacher zu implementieren als v3 und hat weltweit rasche Verbreitung gefunden.

Die [[gematik]] setzt [[FHIR]] R4 als Grundlage für alle neuen TI-Anwendungen ein: [[ePA]], [[E-Rezept]], [[VZD]]-FHIR-Directory, [[ISiK]] und [[DEMIS]].

### Übersicht der HL7-Standards

| Standard | Veröffentlicht | Format | Hauptanwendung |
|---|---|---|---|
| HL7 v2 | 1987 | Pipe-Delimited Text | Klinische Messaging, ADT, Labor |
| HL7 v3 | 2000er | XML/RIM | Begrenzte Nutzung |
| CDA | 2005 | XML (v3-basiert) | Klinische Dokumente, Arztbriefe |
| [[FHIR]] R4 | 2019 | JSON/XML/REST | Alle neuen Interoperabilitätsprojekte |

### HL7 Deutschland e.V.

HL7 Deutschland e.V. ist die nationale Mitgliedsorganisation von HL7 International in Deutschland. Sie koordiniert die Entwicklung und Pflege nationaler HL7-Implementierungsleitfäden, die von der [[gematik]], der [[KBV]] und anderen Stakeholdern genutzt werden. Die deutschen Basisprofile für [[FHIR]] werden in enger Abstimmung mit HL7 Deutschland entwickelt.

## Verknüpfungen

- [[FHIR]]: Aktueller HL7-Standard, technische Basis der deutschen Telematikinfrastruktur
- [[IHE]]: Erstellt Integrationsprofile auf Basis von HL7-Standards
- [[KIS]]: Implementiert HL7 v2 und zunehmend FHIR
- [[ePA]]: Nutzt FHIR R4 und CDA-Dokumente
- [[ISiK]]: FHIR-basierter Interoperabilitätsstandard für Krankenhäuser
- [[MIO]]: Medizinische Informationsobjekte auf Basis von FHIR R4
- [[XDS]]: Dokumentenmanagement-Profil, teils auf HL7 v3 basierend
- [[gematik]]: Setzt HL7 FHIR als Basis der TI-Datenformate ein

## Quellen

- [HL7 International: Offizielle Website](https://www.hl7.org/)
- [HL7 Deutschland e.V.](https://www.hl7.de/)
- [HL7 FHIR R4 Spezifikation](https://www.hl7.org/fhir/R4/)
- [Wikipedia: Health Level 7](https://en.wikipedia.org/wiki/Health_Level_7)
