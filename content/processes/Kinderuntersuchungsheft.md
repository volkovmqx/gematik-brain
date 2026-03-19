---
title: Kinderuntersuchungsheft
audience: [technical, non-technical]
tags: [processes, mio, kinderheilkunde, epa, kbv, fhir, vorsorge]
aliases: [U-Heft, Elektronisches U-Heft, Kinderheft, MIO U-Heft]
relevance:
  sectors: [arztpraxis, krankenhaus, hersteller, it-dienstleister, patient, kasse]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# Kinderuntersuchungsheft

Das **elektronische Kinderuntersuchungsheft (U-Heft)** ist ein [[MIO]] (Medizinisches Informationsobjekt), das die Vorsorgeuntersuchungen U1 bis U9 und die Jugendgesundheitsuntersuchung J1 strukturiert in der [[ePA]] dokumentiert.

## Erklärt für Einsteiger

Das gelbe Heft, in dem alle Untersuchungen beim Kinderarzt eingetragen werden, kennen Eltern gut. Von der U1 kurz nach der Geburt bis zur U9 im Schulalter wird dort festgehalten, ob ein Kind sich normal entwickelt. Das digitale U-Heft ist die elektronische Version: Es liegt sicher in der Patientenakte des Kindes und kann von Eltern über die App der Krankenkasse jederzeit angeschaut werden. Wenn das Kind den Kinderarzt wechselt oder ins Krankenhaus kommt, sind alle Untersuchungen sofort verfügbar.

## Überblick

Das Kinderuntersuchungsheft ist eines der sogenannten **Start-MIOs**, die gemeinsam mit dem [[Mutterpass]], dem [[eImpfpass]] und dem zahnärztlichen Bonusheft die erste MIO-Welle in der [[ePA]] bilden. Die aktuelle Version 1.0.1 ist von der [[KBV]] (Kassenärztliche Bundesvereinigung) spezifiziert.

Die inhaltliche Grundlage des elektronischen U-Hefts ist die **Kinder-Richtlinie** des [[G-BA]] (Gemeinsamer Bundesausschuss). Diese Richtlinie legt fest, welche Untersuchungen zu welchem Alter Pflichtbestandteil der Früherkennungsuntersuchungen sind.

Nach § 342 Abs. 2c [[SGB-V]], eingefügt durch das [[DigiG]] (2024), müssen Krankenkassen Start-MIOs in der [[ePA]] unterstützen, sobald die primären IT-Systeme sie verarbeiten können. Ein verbindlicher Rollout-Termin wurde noch nicht festgelegt (Stand März 2026).

### Die Vorsorgeuntersuchungen

Das U-Heft dokumentiert folgende Untersuchungen:

| Untersuchung | Alter | Inhalt |
|---|---|---|
| U1 | Unmittelbar nach Geburt | Erstuntersuchung, Vitalzeichen, Apgar-Score |
| U2 | 3.-10. Lebenstag | Neugeborenenscreening, körperlicher Befund |
| U3 | 4.-5. Lebenswoche | Entwicklung, Hüfte, Reflexe |
| U4 | 3.-4. Lebensmonat | Motorik, Hören, Sehen |
| U5 | 6.-7. Lebensmonat | Sitzen, Greifen, Sprache |
| U6 | 10.-12. Lebensmonat | Stehen, erste Worte |
| U7 | 21.-24. Lebensmonat | Sprache, Feinmotorik |
| U7a | 34.-36. Lebensmonat | Soziale Entwicklung |
| U8 | 46.-48. Lebensmonat | Sprache, Kindergartenreife |
| U9 | 60.-64. Lebensmonat | Schulreife, Sehen, Hören |
| J1 | 12.-14. Lebensjahr | Jugendgesundheit, Pubertät |

> [!interesse-patient] Das digitale U-Heft für Eltern
> Über die App Ihrer Krankenkasse können Sie jederzeit die Untersuchungsergebnisse Ihres Kindes einsehen. Erinnerungen an bevorstehende Vorsorgeuntersuchungen können automatisch versendet werden. Bei einem Arztwechsel oder im Krankenhaus stehen alle Daten sofort zur Verfügung, ohne dass Sie das Papierheft mitbringen müssen. Freigaben für bestimmte Ärzte erteilen Sie als Elternteil in der App.

## Technische Details

### MIO-Struktur und FHIR-Profile

Das Kinderuntersuchungsheft ist als [[MIO]]-Profil auf Basis von [[FHIR]] R4 spezifiziert. Das zentrale Datenelement ist das `KBV_PR_MIO_UH_Bundle`, das als einzige Ressource direkt in der [[ePA]] abgelegt wird.

Die Spezifikation definiert folgende FHIR-Ressourcentypen:

- `KBV_PR_MIO_UH_Patient_Child`: Stammdaten des Kindes
- `KBV_PR_MIO_UH_Encounter_GeneralExamination`: Vorsorgeuntersuchung (Encounter)
- `KBV_PR_MIO_UH_Observation_*`: Einzelne Befunde (Körpermaße, Reflexe, Entwicklungsschritte)
- `KBV_PR_MIO_UH_Practitioner`: Untersuchende Person (Kinderärztin, -arzt)
- `KBV_PR_MIO_UH_Organization`: Untersuchende Einrichtung

Die Untersuchungstermine werden mit Ober- und Untergrenzen des empfohlenen Untersuchungsalters codiert. Abweichungen können dokumentiert werden.

> [!interesse-technik] Entwickler-Referenz
> FHIR-Profile U-Heft 1.0.1: [mio.kbv.de – U-Heft 1.0.1](https://mio.kbv.de/display/UH1X0X1/U-Heft+1.0.1). Bundle: `KBV_PR_MIO_UH_Bundle`. Basis: [[FHIR]] R4. Terminologien: [[SNOMED-CT]], LOINC, KBV-eigene CodeSystems. Ablage in der [[ePA]] über den Dokumentendienst der [[gematik]] (identisch wie bei [[Mutterpass]] und [[eImpfpass]]).

### Integration in die ePA

Das U-Heft-Bundle wird über den [[ePA]]-Dokumentendienst gespeichert und mit einem [[XDS]]-Metadatensatz registriert. Eltern erteilen die Zugriffsfreigabe für behandelnde Ärzte über die App ihrer Krankenkasse. Für minderjährige Kinder handeln die Erziehungsberechtigten als datenschutzrechtliche Vertreter.

### Datenschutz bei minderjährigen Patienten

Da es sich um Daten Minderjähriger handelt, gelten besondere datenschutzrechtliche Anforderungen. Die Erziehungsberechtigten entscheiden über Freigaben, bis das Kind die Einwilligungsfähigkeit erreicht hat. Die genaue Altersgrenze für Einwilligungsfähigkeit im ePA-Kontext orientiert sich an der allgemeinen Rechtslage (ca. 14-16 Jahre, je nach Reifegrad).

## Verknüpfungen

- [[MIO]] (Medizinisches Informationsobjekt; U-Heft ist ein Start-MIO)
- [[ePA]] (Speicherort des elektronischen U-Hefts)
- [[KBV]] (Herausgeber der U-Heft-Spezifikation)
- [[G-BA]] (Kinder-Richtlinie als inhaltliche Grundlage)
- [[FHIR]] (Technisches Format des MIOs)
- [[DigiG]] (§ 342 Abs. 2c SGB V: gesetzliche Grundlage für Start-MIOs)
- [[SGB-V]] (Rechtsgrundlage für MIOs in der ePA)
- [[Mutterpass]] (verwandtes Start-MIO; Vorläufer in der Schwangerschaft)
- [[eImpfpass]] (verwandtes Start-MIO)
- [[SNOMED-CT]] (Terminologie in der MIO-Spezifikation)
- [[PVS]] (Kinderarztsoftware, die das U-Heft befüllt)
- [[XDS]] (Dokumentenregistrierung in der ePA)

## Quellen

- [KBV: U-Heft 1.0.1 – MIO-Dokumentation](https://mio.kbv.de/display/UH1X0X1/U-Heft+1.0.1)
- [KBV: Pressemitteilung – Mutterpass und U-Heft digitalisiert](https://www.kbv.de/html/2020_49733.php)
- [gematik Interoperabilitätsverzeichnis: MIO-Übersicht](https://www.ina.gematik.de/themenbereiche/medizinische-informationsobjekte)
- [G-BA: Kinder-Richtlinie](https://www.g-ba.de/richtlinien/15/)
