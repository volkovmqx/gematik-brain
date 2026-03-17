---
title: eMP - Elektronischer Medikationsplan
audience: [technical, non-technical]
tags: [prozess, medikation, amts, epa, fhir]
aliases: [eMP, Elektronischer Medikationsplan, e-Medikationsplan]
---

# eMP - Elektronischer Medikationsplan

Der **eMP (elektronischer Medikationsplan)** ist die digitale Übersicht aller Medikamente, die ein Patient aktuell einnimmt, und das zentrale Instrument der digitalen [[AMTS]]-Unterstützung in Deutschland.

## Erklärt für Einsteiger

Stell dir vor, du nimmst fünf verschiedene Medikamente von drei verschiedenen Ärzten. Kein Arzt weiß, was die anderen verschrieben haben. Der eMP ist wie eine gemeinsame Liste, auf der alle Medikamente stehen. Jeder Arzt und jede Apotheke, die du besuchst, kann diese Liste einsehen und sofort sehen, ob ein neues Medikament gefährlich mit einem bestehenden zusammenwirkt. Er ersetzt den früheren Papiermedikationsplan.

## Überblick

Der eMP enthält eine strukturierte Übersicht aller Medikamente eines Patienten: Wirkstoff, Handelsname, Stärke, Dosierungsform und Einnahmehinweise. Er wurde eingeführt, um Arzneimittelwechselwirkungen und Doppelverordnungen zu verhindern.

Patienten mit drei oder mehr verordneten Medikamenten haben gesetzlichen Anspruch auf einen Medikationsplan gemäß § 31a [[SGB V]]. Der eMP ist die digitale Umsetzung dieses Anspruchs.

Vor dem eMP gab es den **Bundeseinheitlichen Medikationsplan (BMP)** als Papierausdruck mit maschinenlesbarem QR-Code auf einem DIN-A4-Blatt. Der BMP konnte auch auf der [[eGK]] gespeichert werden. Der eMP löst den BMP ab und ist seit März 2026 in die [[ePA]] integriert. Die gematik-Spezifikation `gemInfo_Überführung_BMP_in_eMP` beschreibt die Migration bestehender BMP-Daten.

Der eMP ist eng mit der **elektronischen Medikationsliste (eML)** verknüpft. Während die eML alle verordneten und abgegebenen Medikamente automatisch aus [[E-Rezept]]-Daten zusammenstellt, enthält der eMP eine kuratierte, arztgeführte Übersicht der aktuellen Dauermedikation inklusive Selbstmedikation und klinischer Hinweise.

### Rollout

Ab März 2026 können Versicherte den eMP in der [[ePA]] speichern lassen. Der flächendeckende Rollout als Pflichtteil der ePA ist für Oktober 2026 geplant, mit einer Pilotphase ab Juli 2026.

## Technische Details

### FHIR-Datenmodell

Der eMP in der [[ePA]] basiert auf [[FHIR]] R4. Der Medication Service ist ein eigenständiger FHIR-Datendienst innerhalb des ePA-Aktensystems. Die zentralen Ressourcentypen sind:

- `MedicationRequest`: Verordnung durch den Arzt
- `MedicationStatement`: Dokumentierter Medikamenteneinsatz (auch Selbstmedikation)
- `MedicationDispense`: Abgabe durch die Apotheke, automatisch aus [[E-Rezept]]-Daten
- `Medication`: Beschreibung des Arzneimittels (Wirkstoff, Form, Stärke)
- `Provenance` und `AuditEvent`: Protokollierung aller Änderungen

Die [[KBV]] definiert spezifische [[FHIR]]-Profile für den Medikationsplan als [[MIO]] (Medizinische Informationsobjekte). Diese Profile standardisieren die Darstellung von Medikationsdaten in der TI.

### Verarbeitungsprinzip im Medication Service

Extern angelieferte FHIR-Instanzen werden nicht direkt gespeichert, sondern dienen als Data Transfer Objects (DTOs). Der Dienst speichert ausschließlich Elemente, die als "Must Support" markiert sind. `Resource.id` und Versionierung werden intern durch den Dienst vergeben.

### AMTS-relevante Zusatzinformationen

Mit ePA 3.1.3 werden **AMTS-rZI (AMTS-relevante Zusatzinformationen)** eingeführt. Das sind strukturierte klinische Hinweise, die an einzelne Medikationsdatensätze angehängt werden und die Therapiesicherheit unterstützen, zum Beispiel Allergiehinweise oder Kontraindikationen.

### Zugriff und Authentisierung

Zugriff auf den eMP haben Ärzte, Zahnärzte, Psychotherapeuten, Krankenhäuser und Apotheken über ihr Primärsystem ([[PVS]], [[KIS]], AVS) und den [[Fachdienst|ePA-Fachdienst]]. Versicherte selbst haben Zugriff über die ePA-App. Der Zugriff ist an die Einwilligung des Patienten gebunden und wird in der [[ePA]] protokolliert.

Die eigentliche Interaktionsprüfung (Wechselwirkungscheck) findet nicht im ePA-Fachdienst statt, sondern in den Primärsystemen, die Datenbanken wie [[ABDA]] oder MMI-Pharmindex einbinden.

## Verknüpfungen

- [[AMTS]] (der eMP ist das zentrale Instrument der digitalen AMTS-Unterstützung)
- [[ePA]] (Speicherort und Plattform des eMP seit März 2026)
- [[E-Rezept]] (Verordnungs- und Abgabedaten fließen automatisch in die eML ein)
- [[FHIR]] (technisches Datenformat aller Medikationsressourcen)
- [[MIO]] (KBV-Profile für den Medikationsplan)
- [[KBV]] (definiert die FHIR-Profile für den eMP)
- [[SGB V]] (§ 31a: gesetzlicher Anspruch auf Medikationsplan)
- [[Fachdienst]] (ePA-Fachdienst stellt den Medication Service bereit)
- [[eGK]] (Speicherort des alten BMP)

## Quellen

- [Elektronischer Medikationsplan - gematik Fachportal](https://fachportal.gematik.de/anwendungen/elektronischer-medikationsplan)
- [ePA Medication Service Implementation Guide v1.3.0 - gemspec.gematik.de](https://gemspec.gematik.de/ig/fhir/epa-medication/1.3.0/index.html)
- [ePA für alle - gematik Fachportal](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [KBV: Medikationsplan](https://www.kbv.de/html/medikationsplan.php)
