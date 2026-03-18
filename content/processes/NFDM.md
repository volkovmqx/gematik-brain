---
title: NFDM - Notfalldatenmanagement
audience: [technical, non-technical]
tags: [prozess, nfdm, notfalldaten]
aliases: [Notfalldatenmanagement, NFD, Notfalldatensatz]
---

# NFDM - Notfalldatenmanagement

**NFDM** ermöglicht die Speicherung und den Abruf von Notfalldaten auf der [[eGK]]. Im Notfall können Rettungskräfte und Ärzte schnell auf wichtige medizinische Informationen zugreifen.

## Erklärt für Einsteiger

Stell dir vor, du bist bewusstlos und der Rettungsdienst kommt. Die wissen nicht, ob du Allergien hast, welche Medikamente du nimmst oder ob du einen Herzschrittmacher hast. Mit NFDM sind diese Infos auf deiner Gesundheitskarte gespeichert. Der Rettungssanitäter steckt die Karte ins Lesegerät und sieht sofort, worauf er achten muss. Das ist freiwillig: Dein Hausarzt trägt die Daten auf Wunsch ein.

## Überblick

NFDM ist eine freiwillige Anwendung. Versicherte können bei ihrem Arzt Notfalldaten auf der [[eGK]] speichern lassen.

### Gespeicherte Daten
- Vorerkrankungen und Diagnosen
- Aktuelle Medikation
- Allergien und Unverträglichkeiten
- Kontaktdaten behandelnder Ärzte
- Notfallkontakt (Angehörige)
- Hinweis auf Patientenverfügung, Organspende-Erklärung, Vorsorgevollmacht (in einem separaten Datensatz "Persönliche Erklärungen")

### Wer darf zugreifen?
- Ärzte, Zahnärzte und deren Personal
- Rettungskräfte (im Notfall)
- Apotheker und Psychotherapeuten (mit Einwilligung, außerhalb von Notfällen)

## Ablauf

1. Versicherter bittet seinen Arzt (meistens den Hausarzt) um die Erfassung
2. Arzt benötigt: [[eGK]] im [[Kartenterminal]], eigenen [[HBA]], Primärsystem, TI-Zugang
3. Arzt erstellt standardisierten Datensatz im Primärsystem
4. Daten werden auf der [[eGK]] gespeichert und mit [[QES|qualifizierter elektronischer Signatur]] signiert
5. Versicherter kann den Zugriff optional mit einer PIN schützen

## Technische Details

- Speicherort: [[eGK]] (lokaler Speicher auf der Chipkarte)
- Zugriff: Über [[Konnektoren|Konnektor]] und [[Kartenterminal]]
- Berechtigung: Arzt mit [[HBA]]
- Datenformat: XML nach gematik-Spezifikation
- Offline-fähig: Keine TI-Verbindung für Lesezugriff nötig (die Daten liegen direkt auf der Karte)

## Verknüpfungen

- Daten auf der [[eGK]] gespeichert
- Zugriff über [[Konnektoren]]
- Notfalldaten können auch in die [[ePA]] fließen
- Teil der [[Telematikinfrastruktur]]-Anwendungen

## Quellen

- [Notfalldaten-Management - Fachportal](https://fachportal.gematik.de/anwendungen/notfalldaten-management)
- [gematik: Notfalldaten - Fachportal](https://fachportal.gematik.de/anwendungen/notfalldaten)
