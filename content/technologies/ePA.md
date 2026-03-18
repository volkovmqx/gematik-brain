---
title: ePA - Elektronische Patientenakte
audience: [technical, non-technical]
tags: [anwendung, epa, patientenakte]
aliases: [Elektronische Patientenakte, Patientenakte]
---

# ePA - Elektronische Patientenakte

Die **elektronische Patientenakte (ePA)** ist die zentrale digitale Akte für Versicherte in der gesetzlichen Krankenversicherung. Sie speichert Medikationsinformationen, Arztbriefe und Befunde an einem Ort.

## Erklärt für Einsteiger

Stell dir vor, du gehst zum Arzt und der weiß nicht, welche Medikamente dir ein anderer Arzt verschrieben hat. Bisher musste man Befunde als Papier mitbringen oder hoffen, dass der Arztbrief angekommen ist. Die ePA ist wie ein digitaler Ordner, in dem alle deine Gesundheitsdaten gesammelt werden. Jeder Arzt, den du besuchst, kann reinschauen (wenn du es erlaubst) und sieht sofort, was bisher passiert ist. Du selbst kannst über eine App deiner Krankenkasse alles einsehen.

## Überblick

Seit dem **15. Januar 2025** wird die ePA automatisch für alle gesetzlich Versicherten angelegt. Man muss aktiv widersprechen, wenn man keine haben will (Opt-out). Seit dem **1. Oktober 2025** ist die ePA in allen medizinischen Einrichtungen Pflicht.

Ab **April 2026** müssen [[KIS|Krankenhausinformationssysteme (KIS)]] ein zertifiziertes ePA-Modul enthalten. Krankenhäuser, deren KIS diese Anforderung nicht erfüllt, riskieren finanzielle Sanktionen.

Über 150 Krankenkassen betreiben zugelassene Aktensysteme. Die technischen Implementierungen stammen von IBM und RISE/BITMARCK.

### Aktuelle Nutzung (Stand März 2026)

Stand März 2026 haben über **130.000 von ca. 160.000 Einrichtungen (81 Prozent)** mindestens eine ePA geöffnet. Mehr als **700 Millionen Datensätze** wurden verarbeitet, darunter über **37 Millionen hochgeladene Dokumente**.

Seit **1. Januar 2026** sind Abrechnungsdaten in der ePA nur noch für Versicherte selbst sichtbar. Ärzte und andere Leistungserbringer können Abrechnungsdaten nicht ohne explizite Freigabe durch den Versicherten einsehen. Grundlage ist das **BEEP-Gesetz** (Gesetz zur Befugniserweiterung und Entbürokratisierung in der Pflege).

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

Die ePA nutzt die [[Telematikinfrastruktur]] als sicheres Netzwerk. Der Zugriff für Leistungserbringer läuft über [[Konnektoren]] und das jeweilige Primärsystem ([[PVS]], [[KIS]], [[AVS]]).

### Versionen

- ePA 3.0.5: Basis-Release
- ePA 3.1.3: Spezifikation für erweitertes Medikationsmanagement ([[AMTS]]-relevante Zusatzinformationen); bundesweiter eMedikationsplan-Rollout verschoben auf Oktober 2026 (Pilotphase ab Juli 2026)

## Technische Details

### Datenformate und Dokumentenverwaltung

Die ePA verwendet [[FHIR]] R4 als primäres Datenformat. Deutsche FHIR-Profile für die ePA sind von der [[gematik]] spezifiziert und auf Simplifier.net veröffentlicht. Für die Dokumentenverwaltung kommt [[XDS]] (Cross-Enterprise Document Sharing) zum Einsatz: Dokumente werden in einem Document Registry registriert und in einem Document Repository gespeichert.

### Medikationsdienst

Der Medikationsdienst ist ein eigener FHIR-basierter Service innerhalb der ePA. Er verwaltet die Medikationsinformationen strukturiert nach dem eMedikationsplan-Format. Ab Oktober 2026 sollen Apotheken Schreibzugriff auf den Medikationsdienst erhalten, um dispensierte Arzneimittel direkt einzutragen. Die [[AMTS]]-Prüfung (Arzneimitteltherapiesicherheit) wird dadurch unterstützt. Außerdem sollen strukturierte Dosierungsangaben eingeführt werden.

### Vertrauenswürdige Ausführungsumgebung (VAU)

Die [[VAU|Vertrauenswürdige Ausführungsumgebung (VAU)]] ist eine zentrale Sicherheitskomponente der ePA. Sie sorgt dafür, dass Patientendaten auch für den Aktenbetreiber selbst verschlüsselt bleiben. Zugriffe auf Patientendaten finden innerhalb der VAU statt, wo die Daten temporär entschlüsselt werden können, ohne dass der Betreiber dauerhaft Einsicht hat.

### Authentisierungsmethoden

Versicherte authentisieren sich bei der ePA über zwei Wege:

- **[[eGK]]**: Kontaktlose Nutzung am Kartenterminal in der Praxis (VSDM-Verfahren)
- **[[Gesundheits-ID]]** (al.vi): App-basierte Authentisierung über den Identitätsdienst der Krankenkasse

Leistungserbringer authentisieren sich über [[SMC-B]] (Einrichtung) und [[HBA]] (Person). Arztbriefe erfordern eine qualifizierte elektronische Signatur ([[QES]]) über den [[HBA]].

### Geplante 2026-Erweiterungen

- **Volltextsuche**: Suche in gespeicherten Dokumenten der ePA
- **Strukturierte Dosierungsangaben**: Im eMedikationsplan, mit Schreibzugriff für Apotheken
- **MIO-Integration**: Einbindung der Medizinischen Informationsobjekte ([[MIO]]) Mutterpass, Impfausweis, Kinderuntersuchungsheft und Zahnärztliches Bonusheft

### Sicherheitsvorfälle und PoPP

Ende 2024 entdeckte der Chaos Computer Club (CCC) eine Sicherheitslücke in der ePA: Durch den Einsatz gefälschter [[SMC-B]]-Karten wäre theoretisch ein Massenzugriff auf Patientenakten möglich gewesen. Die [[gematik]] und das [[BSI]] bestätigten, dass kein Missbrauch dieser Art stattgefunden hatte. Sofortmaßnahmen wurden eingeleitet.

Die dauerhafte Lösung kommt über den **[[PoPP]]-Dienst** (Proof of Patient Presence). PoPP stellt kryptografisch sicher, dass der Zugriff auf die ePA eines Versicherten nur dann möglich ist, wenn der Versicherte physisch anwesend ist oder aktiv online eingewilligt hat. Die PoPP-Spezifikation V1.0.0 wurde am 3. März 2026 veröffentlicht. Stufe 1 (eGK-basierter Präsenznachweis) soll Mitte 2026 produktiv gehen.

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
