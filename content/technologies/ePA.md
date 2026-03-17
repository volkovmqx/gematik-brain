---
title: ePA - Elektronische Patientenakte
audience: [technical, non-technical]
tags: [anwendung, epa, patientenakte]
---

# ePA - Elektronische Patientenakte

Die **elektronische Patientenakte (ePA)** ist die zentrale digitale Akte fur Versicherte in der gesetzlichen Krankenversicherung. Sie speichert Medikationsinformationen, Arztbriefe und Befunde an einem Ort.

## Erklart fur Einsteiger

Stell dir vor, du gehst zum Arzt und der weiss nicht, welche Medikamente dir ein anderer Arzt verschrieben hat. Bisher musste man Befunde als Papier mitbringen oder hoffen, dass der Arztbrief angekommen ist. Die ePA ist wie ein digitaler Ordner, in dem alle deine Gesundheitsdaten gesammelt werden. Jeder Arzt, den du besuchst, kann reinschauen (wenn du es erlaubst) und sieht sofort, was bisher passiert ist. Du selbst kannst uber eine App deiner Krankenkasse alles einsehen.

## Uberblick

Seit dem **15. Januar 2025** wird die ePA automatisch fur alle gesetzlich Versicherten angelegt. Man muss aktiv widersprechen, wenn man keine haben will (Opt-out). Seit dem **1. Oktober 2025** ist die ePA in allen medizinischen Einrichtungen Pflicht.

Uber 150 Krankenkassen betreiben zugelassene Aktensysteme. Die technischen Implementierungen stammen von IBM und RISE/BITMARCK.

### Was wird gespeichert?
- Medikationsinformationen
- Arztbriefe und Befunde
- Laborergebnisse
- Daten vom [[E-Rezept]]

### Wer hat Zugriff?
- **Versicherte**: Uber die ePA-App der eigenen Krankenkasse
- **Leistungserbringer**: Uber ihr Praxissystem, mit Einwilligung
- **Krankenkassen**: Uber das Aktensystem (Backend)

## Architektur

Die ePA nutzt die [[Telematikinfrastruktur]] als sicheres Netzwerk. Der Zugriff fur Leistungserbringer lauft uber [[Konnektoren]] und das jeweilige Primarsystem (PVS, KIS, AVS).

### Technische Basis
- Datenformat: [[FHIR]] R4 Profile
- Dokumentenverwaltung: XDS Document Management
- Medikationsdienst: Eigener FHIR-basierter Service
- Authentisierung: [[eGK]] oder Gesundheits-ID (al.vi)
- Sicherheit: Vertrauenswurdige Ausfuhrungsumgebung (VAU)
- Arztbriefe erfordern eine qualifizierte elektronische Signatur (QES) uber den HBA

### Versionen
- ePA 3.0.5: Basis-Release
- ePA 3.1.3: Erweitertes Medikationsmanagement (Stand Dezember 2025)

## Verknupfungen

- Nutzt [[VSDM]] fur Versichertenstammdaten
- Enthalt [[NFDM|Notfalldaten]]
- Empfangt Daten vom [[E-Rezept]]
- Kommunikation uber [[KIM]] und [[TI-Messenger]]
- Zugang uber [[Konnektoren]] und [[eGK]]

## Quellen

- [ePA fur alle - Fachportal](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [ePA Spezifikationen](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
- [ePA Wiki](https://wiki.gematik.de/pages/viewpage.action?pageId=588640498)
- [ePA PoC Collection - GitHub](https://github.com/gematik/epa-poc-collection)
