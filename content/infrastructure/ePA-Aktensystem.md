---
title: ePA-Aktensystem
audience: [technical]
tags: [infrastruktur, epa, aktensystem, fhir, vau]
aliases: [Aktensystem ePA, ePA-Aktensystemanbieter, ePA Backend]
relevance:
  sectors: [kasse, hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, arztpraxis]
  interests: [technik, business]
maturity: immergruen
---

# ePA-Aktensystem

Das **ePA-Aktensystem** ist die technische Plattform, auf der die [[ePA|elektronische Patientenakte (ePA)]] betrieben wird. Es stellt FHIR-basierte APIs für Dokumentenverwaltung, Medikationsdienst und Zugriffssteuerung bereit und wird von zugelassenen Aktensystembetreibern im Auftrag der Krankenkassen betrieben.

## Erklärt für Einsteiger

Die ePA ist wie ein digitaler Ordner für Gesundheitsdaten. Aber irgendjemand muss diesen Ordner auch physisch speichern und bereitstellen. Das erledigt das ePA-Aktensystem. Es ist der Server im Hintergrund, auf dem die Akte liegt, auf den Ärzte zugreifen können und der sicherstellt, dass nur autorisierte Personen Einsicht haben. Betrieben wird es von spezialisierten IT-Unternehmen im Auftrag der Krankenkassen.

## Überblick

Die [[gematik]] legt die technischen Anforderungen an das ePA-Aktensystem fest. Krankenkassen beauftragen zugelassene Aktensystembetreiber mit dem Betrieb. Stand März 2026 gibt es zwei dominante Betreiber:

- **RISE GmbH / BITMARCK**: Betreibt Aktensysteme für rund 87 Krankenkassen (ca. 72 Prozent der GKV-Versicherten)
- **IBM Deutschland GmbH**: Betreibt Aktensysteme für rund 16 Krankenkassen

Beide Betreiber sind von der [[gematik]] zugelassen und müssen regelmäßige Konformitätsprüfungen bestehen. Die Zulassung ist zeitlich begrenzt (bis 2028 für aktuelle Versionen).

> [!interesse-business]
> Der Markt für ePA-Aktensysteme ist hochkonzentriert: Zwei Anbieter versorgen nahezu alle rund 100 GKV-Kassen. Diese Konzentration schafft Klumpenrisiken, wie der IBM-IDP-Ausfall vom 10. Februar 2026 zeigte. Die [[gematik]] hat Interesse daran, weitere Anbieter zu gewinnen. Für Startups und IT-Dienstleister bietet die ePA-Aktensystembetreiber-Zulassung theoretisch einen Markteinstieg, ist aber mit erheblichen Anforderungen an Betriebssicherheit, Datenschutz und TI-Compliance verbunden.

### Verhältnis zur ePA-App

Das Aktensystem ist das Backend. Die **[[ePA-App]]** (Krankenkassen-App) ist das Frontend für Versicherte. Das Aktensystem ist auch für Primärsysteme ([[PVS]], [[KIS]], [[AVS]]) über standardisierte FHIR-Schnittstellen erreichbar.

## Technische Details

### Spezifikationsgrundlage

Das ePA-Aktensystem wird durch folgende gematik-Dokumente spezifiziert:

- **gemProdT_Aktensystem_ePA**: Produkttypsteckbrief mit funktionalen Anforderungen
- **gemAnbT_Aktensystem_ePA**: Anbietertypsteckbrief mit Betriebsanforderungen
- **FHIR Implementation Guides**: IG ePA Basisfunktionalitäten, IG ePA Medication Service, IG ePA MHD Service

Aktuelles Release (Stand März 2026): ePA 3.1.3. Davor: ePA 3.1.2 (Mai 2025), ePA 3.0.5 (Basis).

### API-Struktur

Das Aktensystem stellt mehrere FHIR-basierte Schnittstellen bereit:

**Dokumentendienst (basierend auf [[XDS]] / MHD)**:
- Dokumente hochladen (ITI-65 Provide Document Bundle)
- Dokumente suchen (ITI-67 Find Document References)
- Dokumente abrufen (ITI-68 Retrieve Document)

**Medikationsdienst (ePA 3.1.2+)**:
- [[eML|Elektronische Medikationsliste (eML)]] verwalten
- FHIR-Profil: `IG ePA Medication Service`
- Schreibzugriff für Arztpraxen und Apotheken

**Berechtigungsdienst**:
- Zugriffsrechte für Leistungserbringer verwalten
- Einrichtungsbezogene eML-Sperrung (granulare Kontrolle ab März 2026)

> [!interesse-technik]
> Primärsysteme greifen auf das Aktensystem über den **ePA-Frontend-Modul**-Proxy zu (im Konnektor oder TI-Gateway integriert). Der direkte REST/FHIR-Zugriff läuft gegen den Endpunkt des jeweiligen Aktensystems. Authentifizierung: [[IDP]]-Token (Scope `epa`) für Leistungserbringer (via [[SMC-B]]). Die VAU-Verschlüsselung des Aktensystems erfordert einen zusätzlichen kryptografischen Handshake (ECIES mit brainpoolP256r1). Spezifikation des VAU-Protokolls: gemSpec_Krypt, Kapitel ePA-VAU. GitHub: [github.com/gematik/epa-poc-collection](https://github.com/gematik/epa-poc-collection).

### Vertrauenswürdige Ausführungsumgebung (VAU)

Das Aktensystem verarbeitet Patientendaten ausschließlich innerhalb einer **[[VAU|Vertrauenswürdigen Ausführungsumgebung (VAU)]]**. Das bedeutet:

- Patientendaten werden verschlüsselt gespeichert (AES-256-GCM)
- Innerhalb der VAU werden sie temporär entschlüsselt für Verarbeitung
- Der Betreiber des Aktensystems (RISE, IBM) hat keinen Klartextzugriff
- Die VAU ist durch den [[BSI]]-Schutzmechanismus gegen Insider-Angriffe gesichert

### Hochverfügbarkeit und Betrieb

Das Aktensystem muss laut gematik-Anforderungen eine Verfügbarkeit von mindestens **99,5 Prozent** in der Produktionsumgebung (PU) garantieren. Geplante Wartungsfenster sind zulässig. Die Ausfälle vom 10. Februar 2026 (IBM-sektoraler IDP) und März 2026 (RISE-TI-Gateway) haben gezeigt, dass auch bei Einhaltung des SLA einzelne Störungen erhebliche Auswirkungen haben können.

### Datenmigration zwischen Aktensystemen

Wenn ein Versicherter die Krankenkasse wechselt, muss das Aktensystem die ePA-Daten an den neuen Aktensystembetreiber übertragen. Dieser Prozess ist als **Health Record Relocation** spezifiziert (GitHub: [gematik/epa-health-record-relocation](https://github.com/gematik/epa-health-record-relocation)) und muss innerhalb von 60 Tagen nach Kassenwechsel abgeschlossen sein.

## Verknüpfungen

- [[ePA]] (die Anwendung, für die das Aktensystem die Backend-Plattform bildet)
- [[VAU]] (Sicherheitskomponente für den Datenschutz im Aktensystem)
- [[FHIR]] (Datenformat der Aktensystem-APIs)
- [[XDS]] (Dokumentenverwaltungsstandard im Aktensystem)
- [[eML]] (Elektronische Medikationsliste: eine der Kernfunktionen des Aktensystems)
- [[IDP]] (Authentifizierungsdienst für Zugriffe auf das Aktensystem)
- [[SMC-B]] (Einrichtungsauthentisierung beim Aktensystem-Zugriff)
- [[gematik]] (legt Anforderungen an das Aktensystem fest und erteilt Zulassungen)
- [[KIS]] (Krankenhausinformationssysteme greifen ab April 2026 pflichtmäßig auf das Aktensystem zu)
- [[PVS]] (Praxisverwaltungssysteme nutzen das Aktensystem für ePA-Funktionen)
- [[ePA-App]] (Frontend für Versicherte, kommuniziert mit dem Aktensystem-Backend)

## Quellen

- [gematik Fachportal: ePA für alle (Aktensystem-Übersicht)](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [gematik: ePA PoC Collection (GitHub)](https://github.com/gematik/epa-poc-collection)
- [gematik: ePA Health Record Relocation (GitHub)](https://github.com/gematik/epa-health-record-relocation)
- [gemSpec ePA 3.1.3 – Spezifikationsrelease](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
