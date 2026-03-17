---
title: NFDM - Notfalldatenmanagement
audience: [technical, non-technical]
tags: [prozess, nfdm, notfalldaten]
---

# NFDM - Notfalldatenmanagement

**NFDM** ermoglicht die Speicherung und den Abruf von Notfalldaten auf der [[eGK]]. Im Notfall konnen Rettungskrafte und Arzte schnell auf wichtige medizinische Informationen zugreifen.

## Erklart fur Einsteiger

Stell dir vor, du bist bewusstlos und der Rettungsdienst kommt. Die wissen nicht, ob du Allergien hast, welche Medikamente du nimmst oder ob du einen Herzschrittmacher hast. Mit NFDM sind diese Infos auf deiner Gesundheitskarte gespeichert. Der Rettungssanitater steckt die Karte ins Lesegerat und sieht sofort, worauf er achten muss. Das ist freiwillig: Dein Hausarzt tragt die Daten auf Wunsch ein.

## Uberblick

NFDM ist eine freiwillige Anwendung. Versicherte konnen bei ihrem Arzt Notfalldaten auf der [[eGK]] speichern lassen.

### Gespeicherte Daten
- Vorerkrankungen und Diagnosen
- Aktuelle Medikation
- Allergien und Unvertraglichkeiten
- Kontaktdaten behandelnder Arzte
- Notfallkontakt (Angehörige)
- Hinweis auf Patientenverfugung, Organspende-Erklarung, Vorsorgevollmacht (in einem separaten Datensatz "Personliche Erklarungen")

### Wer darf zugreifen?
- Arzte, Zahnarzte und deren Personal
- Rettungskrafte (im Notfall)
- Apotheker und Psychotherapeuten (mit Einwilligung, ausserhalb von Notfallen)

## Ablauf

1. Versicherter bittet seinen Arzt (meistens den Hausarzt) um die Erfassung
2. Arzt benotigt: [[eGK]] im Kartenterminal, eigenen HBA, Primarsystem, TI-Zugang
3. Arzt erstellt standardisierten Datensatz im Primarsystem
4. Daten werden auf der [[eGK]] gespeichert und mit qualifizierter elektronischer Signatur signiert
5. Versicherter kann den Zugriff optional mit einer PIN schutzen

## Technische Details

- Speicherort: [[eGK]] (lokaler Speicher auf der Chipkarte)
- Zugriff: Uber [[Konnektoren|Konnektor]] und Kartenterminal
- Berechtigung: Arzt mit HBA
- Datenformat: XML nach gematik-Spezifikation
- Offline-fahig: Keine TI-Verbindung fur Lesezugriff notig (die Daten liegen direkt auf der Karte)

## Verknupfungen

- Daten auf der [[eGK]] gespeichert
- Zugriff uber [[Konnektoren]]
- Notfalldaten konnen auch in die [[ePA]] fliessen
- Teil der [[Telematikinfrastruktur]]-Anwendungen

## Quellen

- [Notfalldaten-Management - Fachportal](https://fachportal.gematik.de/anwendungen/notfalldaten-management)
