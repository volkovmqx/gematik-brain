---
title: ePA - Elektronische Patientenakte
audience: [technical, non-technical]
tags: [anwendung, epa, patientenakte]
---

# ePA - Elektronische Patientenakte

Die **elektronische Patientenakte (ePA)** ist die zentrale digitale Akte für Versicherte in der gesetzlichen Krankenversicherung. Sie speichert Medikationsinformationen, Arztbriefe und Befunde an einem Ort.

## Erklärt für Einsteiger

Stell dir vor, du gehst zum Arzt und der weiß nicht, welche Medikamente dir ein anderer Arzt verschrieben hat. Bisher musste man Befunde als Papier mitbringen oder hoffen, dass der Arztbrief angekommen ist. Die ePA ist wie ein digitaler Ordner, in dem alle deine Gesundheitsdaten gesammelt werden. Jeder Arzt, den du besuchst, kann reinschauen (wenn du es erlaubst) und sieht sofort, was bisher passiert ist. Du selbst kannst über eine App deiner Krankenkasse alles einsehen.

## Überblick

Seit dem **15. Januar 2025** wird die ePA automatisch für alle gesetzlich Versicherten angelegt. Man muss aktiv widersprechen, wenn man keine haben will (Opt-out). Seit dem **1. Oktober 2025** ist die ePA in allen medizinischen Einrichtungen Pflicht.

Über 150 Krankenkassen betreiben zugelassene Aktensysteme. Die technischen Implementierungen stammen von IBM und RISE/BITMARCK.

### Was wird gespeichert?
- Medikationsinformationen
- Arztbriefe und Befunde
- Laborergebnisse
- Daten vom [[E-Rezept]]

### Wer hat Zugriff?
- **Versicherte**: Über die ePA-App der eigenen Krankenkasse
- **Leistungserbringer**: Über ihr Praxissystem, mit Einwilligung
- **Krankenkassen**: Über das Aktensystem (Backend)

### Transparenz und Kontrolle
Seit März 2026 erhalten Versicherte Push-Benachrichtigungen über die Krankenkassen-App, wenn jemand auf ihre ePA zugreift oder Änderungen vornimmt.

## Architektur

Die ePA nutzt die [[Telematikinfrastruktur]] als sicheres Netzwerk. Der Zugriff für Leistungserbringer läuft über [[Konnektoren]] und das jeweilige Primärsystem (PVS, KIS, AVS).

### Technische Basis
- Datenformat: [[FHIR]] R4 Profile
- Dokumentenverwaltung: [[XDS]] Document Management
- Medikationsdienst: Eigener FHIR-basierter Service
- Authentisierung: [[eGK]] oder [[Gesundheits-ID]] (al.vi)
- Sicherheit: [[VAU|Vertrauenswürdige Ausführungsumgebung (VAU)]]
- Arztbriefe erfordern eine qualifizierte elektronische Signatur ([[QES]]) über den [[HBA]]

### Versionen
- ePA 3.0.5: Basis-Release
- ePA 3.1.3: Spezifikation für erweitertes Medikationsmanagement ([[AMTS]]-relevante Zusatzinformationen); bundesweiter eMedikationsplan-Rollout verschoben auf Oktober 2026 (Pilotphase ab Juli 2026)

## Verknüpfungen

- Nutzt [[VSDM]] für Versichertenstammdaten
- Enthält [[NFDM|Notfalldaten]]
- Empfängt Daten vom [[E-Rezept]]
- Kommunikation über [[KIM]] und [[TI-Messenger]]
- Zugang über [[Konnektoren]] und [[eGK]]

## Quellen

- [ePA für alle - Fachportal](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [ePA Spezifikationen](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
- [ePA Wiki](https://wiki.gematik.de/pages/viewpage.action?pageId=588640498)
- [ePA PoC Collection - GitHub](https://github.com/gematik/epa-poc-collection)
