---
title: ISiK
audience: [technical]
tags: [standards, FHIR, krankenhaus, interoperabilität, KIS]
aliases: [Informationstechnische Systeme im Krankenhaus, Informationstechnische Systeme in Krankenhäusern]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister]
  interests: [technik, compliance]
maturity: wachsend
---

# ISiK

Verbindlicher [[FHIR]]-basierter Interoperabilitätsstandard von [[gematik]] für den Datenaustausch zwischen IT-Systemen in Krankenhäusern, gesetzlich vorgeschrieben nach § 373 [[SGB-V]].

## Erklärt für Einsteiger

In einem Krankenhaus gibt es viele verschiedene Computersysteme: Eines für die Patientenverwaltung, eines für die Apotheke, eines für das Labor. ISiK legt fest, wie diese Systeme miteinander reden müssen. So können zum Beispiel mobile Geräte am Patientenbett dieselben Daten lesen wie das Stationssystem, weil alle dieselbe Sprache sprechen.

## Überblick

ISiK (Informationstechnische Systeme in Krankenhäusern) ist ein von [[gematik]] entwickelter verbindlicher Standard für den Datenaustausch zwischen IT-Systemen in Krankenhäusern. Rechtsgrundlage ist § 373 [[SGB-V]], der gematik beauftragt, eine standardisierte Schnittstelle für Krankenhaus-Informationssysteme zu definieren.

Das Ziel von ISiK ist Interoperabilität: Relevante Patientendaten sollen sektorenübergreifend aktuell und strukturiert verfügbar sein. Vor ISiK kommunizierten Krankenhaussysteme häufig über proprietäre Schnittstellen, die wartungsintensiv und nicht erweiterbar waren.

ISiK betrifft primär Krankenhäuser, die Fördermittel nach dem Krankenhausfinanzierungsgesetz (KHG) erhalten. Die Konformität mit ISiK ist seit Stufe 3 (01.07.2025) Voraussetzung für bestimmte Fördermaßnahmen nach § 21 Abs. 2 KHSFV. Hersteller von [[KIS|Krankenhausinformationssystemen (KIS)]] und anderen primären Systemen müssen ihre Produkte durch [[gematik]] bestätigen lassen.

Das Krankenhausaufnahmegesetz (KHAG) verstärkt den Druck zur ISiK-Umsetzung: Es legt digitale Mindestanforderungen für Krankenhäuser fest und verweist auf das [[Interoperabilitaetsverzeichnis|Interoperabilitätsverzeichnis]] (§ 385 SGB V) als verbindliche Grundlage. Ab September 2026 müssen Krankenhäuser die dort verankerten Interoperabilitätsstandards erfüllen, zu denen ISiK zählt.

ISiK ergänzt bestehende Standards wie [[HL7]] FHIR, [[IHE]] und KBV-Profile. Es ist kein eigenständiges System, sondern ein Set von Spezifikationen und Bestätigungsanforderungen.

## Technische Details

### Architektur

ISiK definiert REST-basierte [[FHIR]]-Schnittstellen (FHIR R4). Primärsysteme stellen FHIR-Ressourcen über eine RESTful API bereit. Clients können diese Ressourcen lesen, suchen und in manchen Modulen auch schreiben.

Das Basismodul (`spec-ISiK-Basismodul`) enthält anwendungsfallagnostische Funktionalitäten und bildet die Grundlage für alle weiteren Module.

### Modulstruktur

ISiK ist modular aufgebaut. Jedes Modul adressiert einen fachlichen Bereich:

| Modul | Inhalt |
|---|---|
| Basis | Patienten, Aufnahmen, Diagnosen, Prozeduren, Versicherung |
| Dokumentenaustausch | Klinische Dokumente, Arztbriefe |
| Medikation | Medikationspläne, Verordnungen, Verabreichungen |
| Sicherheit | Authentifizierung, Autorisierung, Audit |
| Terminplanung | Termine, Kalender, Ressourcen |
| Vitalparameter und Körpermaße | Vitalzeichen, Messwerte |

### Stufen (Stufen-Modell)

ISiK verwendet ein versioniertes Stufen-Modell mit verbindlichen Einführungsdaten:

- **Stufe 1**: Lesezugriff (REST Read und Search) auf grundlegende Ressourcen wie Patientendaten
- **Stufe 2**: Erweiterter Datenaustausch, veröffentlicht Juli 2022
- **Stufe 3**: Verbindlich ab 01.07.2025, gültig bis 30.06.2026
- **Stufe 5**: Veröffentlicht 01.07.2025, Pflichtdatum noch offen

Ältere Stufen (1, 2, 4) wurden mit festgelegten Ablaufdaten außer Betrieb genommen. Stufe 5 fasst alle ISiK-Module zusammen, die zuvor in einzelnen Repositories gepflegt wurden.

### FHIR-Profile

ISiK-Profile sind auf Simplifier.net veröffentlicht und können dort eingesehen werden. Jedes Profil basiert auf einer FHIR-R4-Basisressource und schränkt deren Verwendung ein oder erweitert sie mit Must-Support-Feldern und deutschen Terminologien.

Beispiel für Basis-Ressourcen:
- `ISiKPatient` (basiert auf FHIR Patient)
- `ISiKKontaktGesundheitseinrichtung` (basiert auf FHIR Encounter)
- `ISiKDiagnose` (basiert auf FHIR Condition, mit [[ICD-10-GM]]-Kodierung)
- `ISiKProzedur` (basiert auf FHIR Procedure, mit [[OPS]]-Kodierung)

### Bestätigungsverfahren

Hersteller müssen die Konformität ihrer Produkte über das Bestätigungsverfahren von gematik nachweisen. Die Liste bestätigter Systeme ist auf Simplifier.net öffentlich zugänglich. Nur bestätigte Systeme erfüllen die Fördervoraussetzungen.

### Verhältnis zur ePA

ISiK und [[ePA]] sind komplementär: ISiK regelt den Datenaustausch innerhalb des Krankenhauses und zwischen Krankenhaussystemen. Die ePA speichert Dokumente und Daten über die gesamte Behandlungshistorie eines Patienten, einrichtungsübergreifend. ISiK-Daten können als Quelle für ePA-Dokumente dienen.

## Verknüpfungen

- [[FHIR]]: Technische Basis aller ISiK-Profile
- [[gematik]]: Herausgeber und Betreiber des Bestätigungsverfahrens
- [[Telematikinfrastruktur]]: Infrastrukturrahmen, der ISiK ergänzt
- [[ePA]]: Einrichtungsübergreifende Patientenakte, komplementär zu ISiK
- [[IHE]]: Weitere Interoperabilitätsstandards, die ISiK ergänzen
- [[KIM]]: Sicherer Nachrichtendienst, über den ISiK-Dokumente übertragen werden können

## Quellen

- [gematik Fachportal: ISiK – Interoperabilität dank ISiK](https://fachportal.gematik.de/informationen-fuer/isik)
- [gematik: ISiK Anwendungsseite](https://www.gematik.de/anwendungen/isik)
- [GitHub: gematik/spec-ISiK-Basismodul](https://github.com/gematik/spec-ISiK-Basismodul)
- [INA: Informationstechnische Systeme im Krankenhaus](https://www.ina.gematik.de/themenbereiche/informationstechniche-systeme-im-krankenhaus)
