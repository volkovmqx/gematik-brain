---
title: eML - Elektronische Medikationsliste
audience: [technical, non-technical]
tags: [prozesse, medikation, epa, e-rezept, dgmp]
aliases: [Elektronische Medikationsliste, eML, Medikationsliste]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, zahnarzt, psychotherapie, pflege, patient, kasse, hersteller]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# eML - Elektronische Medikationsliste

Die **elektronische Medikationsliste (eML)** ist eine automatisch geführte, chronologische Aufstellung aller verordneten und in der Apotheke abgegebenen Medikamente eines GKV-Versicherten in der [[ePA]].

## Erklärt für Einsteiger

Stell dir vor, jedes Mal, wenn du ein Rezept einlöst, wird das Medikament automatisch in einem digitalen Notizbuch eingetragen. Das Notizbuch liegt in deiner Patientenakte. Ärzte und Apotheken können es einsehen, wenn du es erlaubst. So sieht jeder sofort, welche Medikamente du gerade nimmst, und du selbst behältst den Überblick.

## Überblick

Die eML ist eine der zentralen Komponenten des [[dgMP|digital gestützten Medikationsprozesses (dgMP)]]. Sie wurde im Januar 2025 als Teil des bundesweiten ePA-Rollouts eingeführt. Seitdem werden [[E-Rezept|E-Rezept]]-Dispensierdaten beim Einlösen in der Apotheke automatisch in die eML kopiert.

Im Gegensatz zum [[eMP|elektronischen Medikationsplan (eMP)]] ist die eML kein kuratiertes Dokument, das ein Arzt aktiv pflegt. Sie ist ein automatisches, laufendes Protokoll aller Verordnungen und Abgaben. Dieser Unterschied ist zentral:

| | eML | eMP |
|---|---|---|
| Befüllung | Automatisch aus E-Rezept-Daten | Manuell vom Arzt geführt |
| Inhalt | Alle verordneten/abgegebenen Medikamente | Aktuelle Dauermedikation, kuratiert |
| Dosierung | Nicht zwingend vollständig | Explizite Dosierungsangaben |
| Selbstmedikation | Nein (nur verschreibungspflichtig) | Möglich |

> [!frist-warnung] Frist-Warnung: ePA-Nutzungspflicht und Abrechnungsabschlag
> **Rechtsgrundlage:** § 347 Abs. 1 SGB V i.V.m. § 346 Abs. 2 SGB V (Digital-Gesetz, BGBl. I 2023 Nr. 37)
> **Frist:** Seit **1. Oktober 2025** sind Vertragsärzte und Vertragspsychotherapeuten verpflichtet, die ePA aktiv zu nutzen. Apotheken sind seit demselben Datum verpflichtet, Versicherte bei der Verarbeitung arzneimittelbezogener Daten in der ePA zu unterstützen (§ 346 Abs. 2 SGB V).
> **Handlungsbedarf:** Prüfen Sie, ob Ihr PVS bzw. AVS mit einem zertifizierten ePA-Modul ausgestattet ist und ob SMC-B sowie HBA gültig sind. Apotheken mussten bis **31. Dezember 2025** gegenüber dem Nacht- und Notdienstfonds nachweisen, dass sie über die gesetzlich vorgeschriebenen TI-Anwendungen verfügen.
> **Bei Nichtbeachtung:** Praxen ohne aktive ePA-Nutzung erhalten ab 2026 einen Honorarabschlag von **1 Prozent** sowie eine Halbierung der TI-Pauschale.

Seit **März 2026** können Ärzte zusätzlich Medikamente ohne vorliegendes E-Rezept manuell nachtragen ("Nachtragen"). Ebenfalls seit März 2026 können Apotheken und Arztpraxen bestehende Einträge korrigieren oder löschen, etwa wenn ein Medikament irrtümlich eingetragen wurde.

> [!praxis-tipp] Praxis-Tipp: eML im Praxisalltag nutzen
> In Ihrer Praxis bedeutet das: Die eML befüllt sich automatisch, sobald ein Patient ein E-Rezept in der Apotheke einlöst. Sie müssen nichts extra tun.
>
> Was Sie seit März 2026 aktiv tun können:
> 1. BtM-Rezepte und [[T-Rezept|T-Rezepte]] manuell in die eML nachtragen (Ihr PVS bietet diese Funktion im ePA-Modul).
> 2. Fehlerhafte Einträge korrigieren oder löschen, z. B. wenn ein Medikament irrtümlich doppelt erscheint.
> 3. Medikamente nachtragen, die Patienten von anderen Praxen ohne E-Rezept erhalten haben.
>
> Häufiger Fehler: Das ePA-Modul im PVS ist vorhanden, aber nicht konfiguriert. Prüfen Sie, ob Ihre SMC-B im Konnektor aktiv und nicht abgelaufen ist. Ohne gültige SMC-B kein ePA-Zugriff.

> [!interesse-compliance]
> Die eML ist seit **1. Januar 2025** für alle GKV-Versicherten mit ePA aktiv. Arztpraxen und Apotheken müssen keine eigene Aktion vornehmen: Die E-Rezept-Dispensierdaten fließen automatisch in die eML. Ab **Oktober 2026** erhalten Apotheken Schreibzugriff auf den Medikationsdienst und können auch OTC-Medikamente (rezeptfreie Arzneimittel) eintragen.

> [!interesse-patient]
> In Ihrer Patientenakte wird automatisch festgehalten, welche Medikamente Sie auf Rezept bekommen und in der Apotheke abgeholt haben. Das nennt sich Medikationsliste. Ihr Arzt und die Apotheke können die Liste einsehen, aber nur wenn Sie das erlauben. Sie können in der App Ihrer Krankenkasse selbst nachschauen, was eingetragen ist. Wenn etwas falsch oder veraltet ist, können Sie Ihren Arzt oder die Apotheke bitten, den Eintrag zu korrigieren.

> [!patientenrecht] Patientenrecht: Medikationsliste einsehen und kontrollieren
> Ihre Krankenkasse führt automatisch eine Liste der Medikamente, die Sie auf Rezept bekommen haben. Das passiert ohne Ihr aktives Zutun.
>
> **Sie haben das Recht:**
> - Die Liste jederzeit in der App Ihrer Krankenkasse einzusehen.
> - Die Liste zu verbergen: Ärzte und Apotheken sehen sie dann nicht mehr. Nur Sie selbst können sie noch lesen.
> - Falsche Einträge korrigieren zu lassen: Sprechen Sie Ihren Arzt oder Ihre Apotheke an. Seit März 2026 können beide Fehler in der Liste löschen oder korrigieren.
>
> **Sie möchten nicht, dass Ärzte und Apotheken die Liste sehen?**
> 1. Öffnen Sie die App Ihrer Krankenkasse.
> 2. Gehen Sie in den Bereich der Patientenakte (ePA).
> 3. Wählen Sie die Option, die Medikationsliste zu verbergen.
> 4. Alternativ: Wenden Sie sich an die Ombudsstelle Ihrer Krankenkasse.
>
> **Wichtig:** Der Widerspruch gilt immer für die gesamte Liste. Einzelne Einträge können nur Ärzte oder Apotheken entfernen, nicht Sie selbst.

## Technische Details

### Datenquellen

Die eML bezieht ihre Daten aus dem E-Rezept-Fachdienst der [[gematik]]. Der Datenfluss:

1. Arzt erstellt ein [[E-Rezept]] im [[PVS]] (FHIR MedicationRequest nach KBV-Profil).
2. Apotheke löst das E-Rezept ein und erzeugt eine Dispensierinformation (FHIR MedicationDispense).
3. Dispensierdaten werden automatisch in den Medikationsdienst der [[ePA]] übertragen.
4. Die eML aggregiert alle Einträge chronologisch.

### FHIR-Datenmodell

Die eML basiert auf [[FHIR]] R4. Die relevanten Ressourcen sind:

- **MedicationRequest**: Die Verordnung (aus dem E-Rezept)
- **MedicationDispense**: Die Abgabe (aus der Apotheke)
- **List**: Aggregation der Einträge in der eML

Das zugehörige FHIR Implementation Guide ist der **IG ePA Medication Service** (Versionen auf Simplifier.net der gematik). Dieser definiert die spezifischen deutschen Profile und Extensions für die Medikationsliste.

### Schreibzugriff und Korrekturen

> [!praxis-tipp] Praxis-Tipp: Vorbereitung auf Oktober 2026
> Ab Oktober 2026 kommen zwei Änderungen, die Ihre Praxis betreffen:
> 1. Apotheken dürfen OTC-Medikamente (rezeptfreie Mittel) in die eML eintragen. Ihre Patienten werden dann fragen, warum plötzlich mehr Einträge in der Liste stehen.
> 2. Krankenhäuser können stationäre Medikation nachtragen. Die eML Ihrer Patienten wird vollständiger, aber auch länger.
>
> Was Sie jetzt prüfen sollten: Unterstützt Ihr PVS bereits die manuelle Nachtrage-Funktion? Fragen Sie Ihren PVS-Anbieter nach dem Update-Stand für den ePA-Medikationsdienst (ePA 3.1.x). Planen Sie eine kurze Teamsitzung: Welche MFA ist zuständig, wenn Patienten Fragen zur eML stellen?

Ab Oktober 2026 können folgende Akteure in die eML schreiben:

| Akteur | Aktion | Voraussetzung |
|---|---|---|
| Arztpraxis (PVS) | Manuelles Nachtragen, Korrigieren | SMC-B + HBA, ePA-Modul |
| Apotheke (AVS) | Dispensierungen, OTC-Einträge (ab Okt. 2026) | SMC-B, ePA-Modul |
| Krankenhaus (KIS) | Stationäre Medikation nachtragen | SMC-B, KIS-ePA-Modul (ab Apr. 2026) |

Technisch läuft der Schreibzugriff über den ePA-Medikationsdienst, der über den E-Rezept-Fachdienst oder direkt über die ePA-Schnittstelle angesprochen werden kann.

> [!klinik-integration] Klinik-Integration: Stationäre Medikation in die eML eintragen
> Ab **April 2026** können KIS-Systeme stationäre Medikation in den ePA-Medikationsdienst schreiben. Das KIS-ePA-Modul muss vom Hersteller bereitgestellt und zertifiziert sein.
>
> **Workflow-Bezug:** Aufnahmemedikation (Mitbring-Medikamente des Patienten) und stationäre Verordnungen ohne E-Rezept (Stationsbestellungen, Parenteralia) müssen manuell nachgetragen werden. Bei Entlassung: Abgleich zwischen stationärer Medikation und eML-Einträgen verhindert Diskrepanzen im Arztbrief und verbessert die ambulante Weiterversorgung.
>
> **FHIR-Schnittstellen:** Das KIS übermittelt `MedicationRequest`- und `MedicationStatement`-Ressourcen an den ePA-Medikationsdienst. Ab **ISiK Stufe 3** (Pflicht bis 30. Juni 2026) müssen KIS-Systeme das ISiK-Modul Medikation (Simplifier.net) unterstützen. Die eML-Schreibschnittstelle ist davon logisch getrennt, erfordert aber kompatible FHIR-Profile. KIS-Hersteller wie Dedalus (ORBIS), NEXUS und Meierhofer haben ISiK-Stufe-3-Zertifizierungen; ePA-Modul-Verfügbarkeit beim jeweiligen Hersteller prüfen.
>
> **Deployment:** TI-Anbindung via Konnektor oder TI-Gateway erforderlich. Für Häuser mit mehreren Standorten oder Stationen: Hochverfügbarkeits-Setup planen, da ein Ausfall die eML-Befüllung unterbricht. Authentisierung erfordert gültige SMC-B (Einrichtungszertifikat).

> [!dev-quickstart] Dev Quickstart: eML abrufen ($medication-list)
> ```bash
> # Medikationsliste eines Versicherten abrufen (FHIR Operation)
> GET /epa/medication/api/v1/fhir/$medication-list?date=ge2025-01-01&_count=50
> Authorization: Bearer <VAU-verschlüsseltes-IDP-Token>
> x-insurantid: X123456789
> Accept: application/fhir+json
> ```
> Antwort: FHIR `Bundle` (type: `searchset`) mit `MedicationRequest`, `MedicationDispense`, `Patient`
> - Auth: OAuth 2.0 + mTLS über VAU-Kanal; Zertifikat SMC-B via Konnektor oder TI-Gateway
> - Schreiben: FHIR `$provide-medication-list` Operation (POST), erfordert HBA für manuelle Nachtragungen
> - Profil ab ePA 3.1.x: `MedicationDispense` referenziert `Medication` separat (nicht mehr contained, ab Profil v1.4)
>
> FHIR-IG: `de.gematik.epa.medication` v1.3.0: [gemspec IG ePA Medication Service](https://www.gematik.de/fhir/epa-medication/1.3.0/op-get-medication-list.html)
> GitHub: [gematik/ePA-Medication (Branch ePA-3.1.3)](https://github.com/gematik/ePA-Medication/tree/ePA-3.1.3)
> Deployment-Stack (lokal): [gematik/epa-deployment](https://github.com/gematik/epa-deployment)

### Abgrenzung zum dgMP

Die eML ist Bestandteil des übergreifenden [[dgMP|digital gestützten Medikationsprozesses (dgMP)]]. Dieser umfasst seit März 2026 zwei Komponenten:

- **eML**: Automatisches Abgabeprotokoll
- **eMP**: Strukturierter, arztgeführter Medikationsplan (Pilotphase Juli 2026, bundesweiter Rollout Oktober 2026)

> [!interesse-technik]
> **FHIR-Profil**: IG ePA Medication Service (Simplifier.net, gematik-Organisation)
> **Spezifikation**: gemSpec ePA 3.1.x, Abschnitt Medikationsdienst. Letzter Release: ePA_3_1_3-1 (26. Januar 2026, 14 Dokumente).
> **Schreibzugriff**: REST-API über TI-Verbindung (Konnektor oder TI-Gateway). Authentisierung via SMC-B (Einrichtung) und HBA (Person, für QES).
> **GitHub PoC**: [github.com/gematik/epa-poc-collection](https://github.com/gematik/epa-poc-collection)

## Verknüpfungen

- [[ePA]] (die eML ist Teil der elektronischen Patientenakte)
- [[eMP]] (kuratierter Medikationsplan als ergänzendes Instrument)
- [[dgMP]] (übergeordneter Prozess, der eML und eMP zusammenfasst)
- [[E-Rezept]] (liefert automatisch Dispensierdaten für die eML)
- [[AMTS]] (Arzneimitteltherapiesicherheit: eML ist Datenbasis für AMTS-Prüfungen)
- [[PVS]] (Arztpraxissystem, das eML befüllt und korrigiert)
- [[AVS]] (Apothekensystem, das Dispensierungen einträgt)
- [[KIS]] (Krankenhausinformationssystem, das stationäre Medikation nachtragen kann)
- [[FHIR]] (Datenformat der eML-Ressourcen)
- [[gematik]] (betreibt den E-Rezept-Fachdienst und definiert die eML-Spezifikation)

## Quellen

- [gematik: Gesellschafter beschließen Funktionserweiterung der ePA für alle, inkl. dgMP und eMP (10. September 2025)](https://www.gematik.de/newsroom/news-detail/gesellschafter-beschliessen-funktionserweiterung-der-epa-fuer-alle)
- [gematik: Überblick neue ePA-Funktionen (ePA 3.0.5, Juli 2025)](https://www.gematik.de/newsroom/news-detail/aktuelles-ueberblick-das-sind-die-neuen-funktionen-der-epa-fuer-alle)
- [gematik Fachportal: ePA für alle](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [gematik gemspec: ePA 3.1.3-1 Spezifikationsrelease](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
- [Simplifier.net: IG ePA Medication Service](https://simplifier.net/organization/gematik)
