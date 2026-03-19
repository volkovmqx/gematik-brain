---
title: eImpfpass
audience: [technical, non-technical]
tags: [technologies, mio, impfung, epa, kbv, fhir, ifsg]
aliases: [Elektronischer Impfausweis, Impfpass MIO, elektronischer Impfpass]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, patient, kasse, hersteller, it-dienstleister]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# eImpfpass

Der **eImpfpass** ist ein [[MIO]] (Medizinisches Informationsobjekt), das den bisherigen gelben Papier-Impfausweis digital abbildet und strukturiert in der [[ePA]] speichert.

## Erklärt für Einsteiger

Den gelben Impfpass aus Papier kennt jeder: Er dokumentiert, welche Impfungen man wann bekommen hat. Leider geht er oft verloren oder wird vergessen, wenn man zur Ärztin oder in die Apotheke geht. Der eImpfpass ist die digitale Version davon. Er liegt sicher in der elektronischen Patientenakte und ist über die App der Krankenkasse jederzeit abrufbar. Welche behandelnden Fachleute auf deinen Impfstatus zugreifen dürfen, kannst du selbst entscheiden.

## Überblick

Der eImpfpass war das **erste MIO**, das die [[KBV]] (Kassenärztliche Bundesvereinigung) spezifiziert hat. Er ist Teil der sogenannten Start-MIOs, die gemeinsam mit dem [[Mutterpass]], dem [[Kinderuntersuchungsheft]] und dem zahnärztlichen Bonusheft die erste MIO-Welle bilden.

Die rechtliche Grundlage für die Impfdokumentation liegt in § 22 [[IfSG]] (Infektionsschutzgesetz). Impfungen gegen bestimmte Krankheiten müssen vom Arzt dokumentiert werden. Der eImpfpass digitalisiert diese Pflicht und macht die Daten für alle behandelnden Stellen zugänglich.

Nach § 342 Abs. 2c [[SGB-V]], eingefügt durch das [[DigiG]] (2024), müssen Krankenkassen Start-MIOs in der [[ePA]] unterstützen, sobald die primären IT-Systeme sie verarbeiten können. Ein verbindlicher Starttermin für den Rollout liegt noch nicht vor (Stand März 2026). Die technische Umsetzung in [[PVS]]-Systemen ist noch nicht flächendeckend abgeschlossen.

### Inhalt des eImpfpasses

Der eImpfpass dokumentiert:

- Impfungen mit Datum, Impfstoff, Chargenbezeichnung und Lotnummer
- Verabreichender Arzt oder andere impfende Stelle
- Indikation (Pflichtimpfung, Reiseimpfung, Risikogruppe)
- Impfreaktionen und Unverträglichkeiten
- Immunisierungsstatus (Grundimmunisierung, Auffrischung)
- Titer-Untersuchungen (Antikörpernachweise)

### Beteiligte Leistungserbringer

Impfungen können eingetragen werden von:

- Ärztinnen und Ärzten (Praxis, Krankenhaus, Betriebsarzt)
- Apotheken (bei bestimmten Impfungen, z.B. Grippeimpfung)
- Öffentlichem Gesundheitsdienst ([[ÖGD]])

> [!interesse-patient] Ihr digitaler Impfausweis
> Über die App Ihrer Krankenkasse können Sie Ihren aktuellen Impfstatus einsehen. Der eImpfpass zeigt auch, welche Impfungen nach den Empfehlungen der [[STIKO]] (Ständigen Impfkommission) fällig wären. Impflücken können so schneller erkannt werden. Bei Reisen ins Ausland oder im Notfall ist der Impfstatus sofort verfügbar, ohne dass Sie den Papierpass mitbringen müssen.

## Technische Details

### MIO-Struktur und FHIR-Profile

Der eImpfpass ist als [[MIO]]-Profil auf Basis von [[FHIR]] R4 spezifiziert. Die aktuelle Version ist 1.1.0. Das Bundle `KBV_PR_MIO_IM_Bundle` ist die einzige Ressource, die direkt in der [[ePA]] abgelegt wird.

Zentrale FHIR-Ressourcentypen:

- `KBV_PR_MIO_IM_Immunization`: Einzelner Impfeintrag mit Datum, Impfstoff, Lot
- `KBV_PR_MIO_IM_Patient`: Geimpfte Person
- `KBV_PR_MIO_IM_Practitioner`: Impfende Person
- `KBV_PR_MIO_IM_Organization`: Impfende Einrichtung
- `KBV_PR_MIO_IM_Condition`: Dokumentierte Impfreaktionen

Für Impfstoffe werden standardisierte Kodiersysteme verwendet: [[ATC-Code]] (Wirkstoffklassifikation) und Pharmazentralnummer ([[PZN]]) für den konkreten Impfstoff.

> [!interesse-technik] Entwickler-Referenz
> FHIR-Profile Impfpass 1.1.0: [hub.kbv.de – Impfpass 1.1.0](https://hub.kbv.de/display/IM1X1X0/Impfpass+1.1.0). Bundle: `KBV_PR_MIO_IM_Bundle`. Basis: [[FHIR]] R4. Terminologien: [[SNOMED-CT]], [[ATC-Code]], [[PZN]], ASK (Arzneistoffkatalog). Ablage in der [[ePA]] über den Dokumentendienst der [[gematik]].

### Automatische Vorausfüllung

Ein Vorteil des eImpfpasses gegenüber dem Papier: Viele Felder können aus dem [[PVS]] automatisch vorausgefüllt werden. Patientenstammdaten, Impfstoffname und Chargennummer liegen dem [[AVS]] oder [[PVS]] bereits vor und müssen nicht manuell eingetragen werden.

### Integration in die ePA

Das Impfpass-Bundle wird über den [[ePA]]-Dokumentendienst gespeichert und mit einem [[XDS]]-Metadatensatz registriert. Damit ist es über den ePA-Dokumentenindex auffindbar und kann von allen berechtigten Leistungserbringern abgerufen werden.

## Verknüpfungen

- [[MIO]] (Medizinisches Informationsobjekt; Impfpass ist das erste MIO)
- [[ePA]] (Speicherort des eImpfpasses)
- [[KBV]] (Herausgeber der Impfpass-Spezifikation)
- [[FHIR]] (Technisches Format des MIOs)
- [[IfSG]] (§ 22 IfSG: gesetzliche Impfdokumentationspflicht)
- [[DigiG]] (§ 342 Abs. 2c SGB V: gesetzliche Grundlage für Start-MIOs)
- [[SGB-V]] (Rechtsgrundlage für MIOs in der ePA)
- [[Mutterpass]] (weiteres Start-MIO)
- [[Kinderuntersuchungsheft]] (weiteres Start-MIO)
- [[ATC-Code]] (Kodierung der Impfstoffe)
- [[PZN]] (Pharmazentralnummer des Impfstoffs)
- [[SNOMED-CT]] (Terminologie in der MIO-Spezifikation)
- [[PVS]] (Primärsystem, das den eImpfpass befüllt)

## Quellen

- [KBV: Impfpass 1.1.0 – MIO-Dokumentation](https://hub.kbv.de/display/IM1X1X0/Impfpass+1.1.0)
- [gematik Interoperabilitätsverzeichnis: MIO-Übersicht](https://www.ina.gematik.de/themenbereiche/medizinische-informationsobjekte)
- [Wikipedia: Impfausweis](https://de.wikipedia.org/wiki/Impfausweis)
