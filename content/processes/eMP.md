---
title: eMP - Elektronischer Medikationsplan
audience: [technical, non-technical]
tags: [prozess, medikation, amts, epa, fhir]
aliases: [eMP, Elektronischer Medikationsplan, e-Medikationsplan]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, zahnarzt, psychotherapie, patient]
  interests: [technik, patient, compliance]
maturity: wachsend
---

# eMP - Elektronischer Medikationsplan

Der **eMP (elektronischer Medikationsplan)** ist die digitale Übersicht aller Medikamente, die ein Patient aktuell einnimmt, und das zentrale Instrument der digitalen [[AMTS]]-Unterstützung in Deutschland.

## Erklärt für Einsteiger

Stell dir vor, du nimmst fünf verschiedene Medikamente von drei verschiedenen Ärzten. Kein Arzt weiß, was die anderen verschrieben haben. Der eMP ist wie eine gemeinsame Liste, auf der alle Medikamente stehen. Jeder Arzt und jede Apotheke, die du besuchst, kann diese Liste einsehen und sofort sehen, ob ein neues Medikament gefährlich mit einem bestehenden zusammenwirkt. Er ersetzt den früheren Papiermedikationsplan.

## Überblick

Der eMP enthält eine strukturierte Übersicht aller Medikamente eines Patienten: Wirkstoff, Handelsname, Stärke, Dosierungsform und Einnahmehinweise. Er wurde eingeführt, um Arzneimittelwechselwirkungen und Doppelverordnungen zu verhindern.

Patienten mit drei oder mehr verordneten Medikamenten haben gesetzlichen Anspruch auf einen Medikationsplan gemäß § 31a [[SGB V]]. Der eMP ist die digitale Umsetzung dieses Anspruchs.

Vor dem eMP gab es den **[[BMP|Bundeseinheitlichen Medikationsplan (BMP)]]** als Papierausdruck mit maschinenlesbarem QR-Code auf einem DIN-A4-Blatt. Der BMP konnte auch auf der [[eGK]] gespeichert werden. Der eMP löst den BMP ab und ist seit März 2026 in die [[ePA]] integriert. Die gematik-Spezifikation `gemInfo_Überführung_BMP_in_eMP` beschreibt die Migration bestehender BMP-Daten.

Der eMP ist eng mit der **[[eML|elektronischen Medikationsliste (eML)]]** verknüpft. Während die eML alle verordneten und abgegebenen Medikamente automatisch aus [[E-Rezept]]-Daten zusammenstellt, enthält der eMP eine kuratierte, arztgeführte Übersicht der aktuellen Dauermedikation inklusive Selbstmedikation und klinischer Hinweise.

### Rollout

Ab März 2026 können Versicherte den eMP in der [[ePA]] speichern lassen. Der flächendeckende Rollout als Pflichtteil der ePA ist für Oktober 2026 geplant, mit einer Pilotphase ab Juli 2026.

> [!interesse-compliance] Fristen und Pflichten für Leistungserbringer
> - **März 2026**: eMP freiwillig in der ePA nutzbar
> - **Juli 2026**: Pilotstart eMedikationsplan in ausgewählten Regionen
> - **Oktober 2026**: Bundesweiter Rollout; [[PVS]]-, [[KIS]]- und [[AVS]]-Hersteller müssen das eMP-Modul bis dahin zertifiziert haben
> - Gesetzlicher Anspruch auf Medikationsplan für Patienten mit drei oder mehr Medikamenten: § 31a [[SGB V]]
> - Praxen sind verpflichtet, den eMP auf Anforderung des Patienten zu erstellen und in die ePA einzustellen

## Technische Details

> [!interesse-patient] Was der eMP für Patienten bedeutet
> Der eMP ist Ihre persönliche Medikamentenliste in der [[ePA]]. Sie enthält alle Dauermedikamente, Dosierungsanweisungen und klinische Hinweise. Jeder Arzt, der auf Ihre ePA zugreift, sieht diese Liste und kann prüfen, ob ein neues Medikament gefährliche Wechselwirkungen hat. Sie selbst können den eMP über die App Ihrer Krankenkasse einsehen. Einträge können nur Ärzte und Apotheken vornehmen, nicht Sie selbst, aber Sie haben das Recht, einzelne Einträge löschen zu lassen.

### FHIR-Datenmodell

Der eMP in der [[ePA]] basiert auf [[FHIR]] R4. Der Medication Service ist ein eigenständiger FHIR-Datendienst innerhalb des ePA-Aktensystems. Die zentralen Ressourcentypen sind:

- `MedicationRequest`: Verordnung durch den Arzt
- `MedicationStatement`: Dokumentierter Medikamenteneinsatz (auch Selbstmedikation)
- `MedicationDispense`: Abgabe durch die Apotheke, automatisch aus [[E-Rezept]]-Daten
- `Medication`: Beschreibung des Arzneimittels (Wirkstoff, Form, Stärke)
- `Provenance` und `AuditEvent`: Protokollierung aller Änderungen

Die [[KBV]] definiert spezifische [[FHIR]]-Profile für den Medikationsplan als [[MIO]] (Medizinische Informationsobjekte). Diese Profile standardisieren die Darstellung von Medikationsdaten in der TI.

> [!interesse-technik] FHIR-Profil und API-Zugang
> Der eMP-Medication-Service ist ein eigenständiger FHIR-Datendienst im ePA-Aktensystem. Zugang über die ePA-Schnittstelle (VAU-verschlüsselt). Spezifikation: [gemspec.gematik.de/ig/fhir/epa-medication](https://gemspec.gematik.de/ig/fhir/epa-medication/1.3.0/index.html). FHIR-Profile für den Medikationsplan: [[MIO]] Medikationsplan auf [mio.kbv.de](https://mio.kbv.de). Wichtig: Extern übertragene FHIR-Instanzen sind Data Transfer Objects, keine Speicherobjekte. Der Dienst vergibt interne IDs und speichert nur "Must Support"-Elemente.

### Verarbeitungsprinzip im Medication Service

Extern angelieferte FHIR-Instanzen werden nicht direkt gespeichert, sondern dienen als Data Transfer Objects (DTOs). Der Dienst speichert ausschließlich Elemente, die als "Must Support" markiert sind. `Resource.id` und Versionierung werden intern durch den Dienst vergeben.

### AMTS-relevante Zusatzinformationen

Mit ePA 3.1.3 werden **AMTS-rZI (AMTS-relevante Zusatzinformationen)** eingeführt. Das sind strukturierte klinische Hinweise, die an einzelne Medikationsdatensätze angehängt werden und die Therapiesicherheit unterstützen, zum Beispiel Allergiehinweise oder Kontraindikationen.

### Zugriff und Authentisierung

Zugriff auf den eMP haben Ärzte, Zahnärzte, Psychotherapeuten, Krankenhäuser und Apotheken über ihr Primärsystem ([[PVS]], [[KIS]], AVS) und den [[Fachdienst|ePA-Fachdienst]]. Versicherte selbst haben Zugriff über die [[ePA-App]]. Der Zugriff ist an die Einwilligung des Patienten gebunden und wird in der [[ePA]] protokolliert.

Die eigentliche Interaktionsprüfung (Wechselwirkungscheck) findet nicht im ePA-Fachdienst statt, sondern in den Primärsystemen, die Datenbanken wie [[ABDA]] oder [[MMI-Pharmindex]] einbinden.

> [!patientenrecht] Patientenrecht: Ihr Medikationsplan gehört Ihnen
> Sie haben einen gesetzlichen Anspruch auf einen Medikationsplan, wenn Sie drei oder mehr Medikamente einnehmen (§ 31a SGB V). Ihr Arzt muss diesen Plan auf Anfrage erstellen und in Ihre ePA einstellen.
>
> **Was können Sie selbst tun?**
> - Sie können Ihren Medikationsplan jederzeit in der ePA-App Ihrer Krankenkasse einsehen.
> - Sie können den gesamten eMP aus Ihrer ePA widersprechen. Sprechen Sie dazu Ihre Krankenkasse an oder nutzen Sie die Kassen-App.
> - Sie können einzelne Einträge löschen lassen. Bitten Sie Ihren Arzt oder Ihre Apotheke darum.
>
> **Wichtig:** Selbst ändern können Sie den eMP nicht direkt. Nur Ärzte und Apotheken dürfen Einträge vornehmen. Wenn Sie einen Fehler bemerken, sprechen Sie Ihren Arzt darauf an.
>
> **Widerspruch gegen den eMP:**
> 1. Wenden Sie sich an Ihre Krankenkasse (Telefon oder App).
> 2. Sagen Sie, dass Sie dem elektronischen Medikationsplan in der ePA widersprechen möchten.
> 3. Ihre Medikamentendaten werden dann nicht mehr automatisch dort gespeichert.

## Verknüpfungen

- [[AMTS]] (der eMP ist das zentrale Instrument der digitalen AMTS-Unterstützung)
- [[ePA]] (Speicherort und Plattform des eMP seit März 2026)
- [[eML]] (automatische Medikationsliste, die den eMP mit Verordnungsdaten ergänzt)
- [[dgMP]] (übergeordneter Prozessrahmen, der eML und eMP zusammenfasst)
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
