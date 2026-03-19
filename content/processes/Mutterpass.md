---
title: Mutterpass
audience: [technical, non-technical]
tags: [processes, mio, schwangerschaft, epa, kbv, fhir]
aliases: [Elektronischer Mutterpass, eMutterpass, MIO Mutterpass]
relevance:
  sectors: [arztpraxis, hebamme, krankenhaus, hersteller, it-dienstleister, patient, kasse]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# Mutterpass

Der **elektronische Mutterpass** ist ein [[MIO]] (Medizinisches Informationsobjekt), das Schwangerschaftsdaten, Vorsorgeuntersuchungen und Geburtsvorbereitungsinformationen strukturiert in der [[ePA]] speichert.

## Erklärt für Einsteiger

Der gelbe Mutterpass aus Papier, den schwangere Frauen zu jedem Arzttermin mitbringen müssen, kennt fast jeder. Wenn er verloren geht oder vergessen wird, fehlen wichtige Informationen. Der elektronische Mutterpass funktioniert genauso, liegt aber sicher in der digitalen Patientenakte. Jede Ärztin, jeder Arzt und jede Hebamme, die du aufsuchst, kann mit deiner Zustimmung die bisherigen Untersuchungsergebnisse einsehen, ohne dass du einen Zettel mitbringen musst.

## Überblick

Der Mutterpass ist eines der ersten [[MIO]]s, die von der [[KBV]] (Kassenärztliche Bundesvereinigung) spezifiziert wurden. Die aktuelle Version 1.1.0 ist seit dem 1. April 2022 final. Der Mutterpass bildet den gesamten Inhalt des bisherigen Papier-Mutterpasses digital ab, einschließlich aller Vorsorgeuntersuchungen, Laborbefunde, Ultraschallbefunde und der Geburtsanamnese.

Nach § 342 Abs. 2c [[SGB-V]], eingefügt durch das [[DigiG]] (2024), müssen Krankenkassen die sogenannten Start-MIOs in der [[ePA]] unterstützen, sobald die primären IT-Systeme (Praxisverwaltungssysteme, Hebammensoftware) sie technisch verarbeiten können. Ein verbindlicher Starttermin wurde durch das [[BMG]] noch nicht festgelegt (Stand März 2026). Die praktische Implementierung in [[PVS]] und Hebammensoftware ist noch nicht flächendeckend abgeschlossen.

### Inhalt des Mutterpasses

Der elektronische Mutterpass dokumentiert:

- Stammdaten der Schwangeren und Anamnese (Vorerkrankungen, Vorgeburten)
- Allgemeine und spezielle Schwangerschaftsuntersuchungen
- Laboruntersuchungen (Blutgruppe, Antikörpersuchtest, Hämoglobin, Rötelnschutz)
- Ultraschallbefunde (I., II., III. Trimester-Screening)
- Vorsorgeuntersuchungstermine mit Befundergebnissen
- Besondere Befunde und Risikokatalog
- Entbindungsanamnese und Wochenbettdaten

### Beteiligte Leistungserbringer

Folgende Berufsgruppen tragen Daten in den Mutterpass ein:

- Frauenärztinnen und -ärzte (Hauptanwender)
- Hebammen und Entbindungspfleger
- Kliniken (Geburtskliniken, Perinatalzentren)

> [!interesse-patient] Ihre Daten im elektronischen Mutterpass
> Der elektronische Mutterpass liegt sicher in Ihrer [[ePA]]. Sie können ihn über die App Ihrer Krankenkasse einsehen. Alle eingetragenen Fachleute (Ärztin, Hebamme, Klinik) sehen nur die Daten, für die Sie die Freigabe erteilt haben. Der digitale Mutterpass kann nicht verloren gehen und ist auch im Auslandsurlaub über die App zugänglich.

## Technische Details

### MIO-Struktur und FHIR-Profile

Der Mutterpass ist als [[MIO]]-Profil auf Basis von [[FHIR]] R4 spezifiziert. Das zentrale Datenelement ist der `KBV_PR_MIO_MR_Bundle`, der als einzige Ressource direkt in der [[ePA]] abgelegt wird. Er enthält alle Unterressourcen als eingebettete Einträge.

Die Spezifikation definiert folgende FHIR-Ressourcentypen:

- `KBV_PR_MIO_MR_Patient_Mother`: Stammdaten der Mutter
- `KBV_PR_MIO_MR_Encounter_General`: Allgemeine Vorsorgeuntersuchung
- `KBV_PR_MIO_MR_Observation_*`: Einzelne Befunde (Labor, Ultraschall, klinische Untersuchung)
- `KBV_PR_MIO_MR_Practitioner`: Eintragende Person (Arzt, Hebamme)
- `KBV_PR_MIO_MR_Organization`: Einrichtung

> [!interesse-technik] Entwickler-Referenz
> FHIR-Profile: [mio.kbv.de – Mutterpass 1.1.0](https://hub.kbv.de/display/MP1X1X0/Mutterpass+1.1.0). Zentrales Bundle: `KBV_PR_MIO_MR_Bundle`. Basis: [[FHIR]] R4. Terminologien: [[SNOMED-CT]], LOINC, KBV-eigene CodeSystems. Das Bundle wird über die [[ePA]]-Schnittstelle der [[gematik]] abgelegt (FHIR `PUT` auf den Dokumentendienst).

### Integration in die ePA

Das Mutterpass-Bundle wird über den [[ePA]]-Dokumentendienst gespeichert und über einen [[XDS]]-Metadatensatz registriert. Die technische Ablage erfolgt identisch wie bei anderen [[MIO]]s: als FHIR-Bundle mit zugehörigem XDS-Metadatenset (Dokumentenklasse, Dokumententyp, Erstellungsdatum).

## Verknüpfungen

- [[MIO]] (Medizinisches Informationsobjekt; Mutterpass ist eines der ersten MIOs)
- [[ePA]] (Speicherort des elektronischen Mutterpasses)
- [[KBV]] (Herausgeber der Mutterpass-Spezifikation)
- [[FHIR]] (Technisches Format des MIOs)
- [[DigiG]] (§ 342 Abs. 2c SGB V: gesetzliche Grundlage für Start-MIOs)
- [[SGB-V]] (Rechtsgrundlage für MIOs in der ePA)
- [[eImpfpass]] (weiteres Start-MIO in der ePA)
- [[Kinderuntersuchungsheft]] (weiteres Start-MIO in der ePA)
- [[SNOMED-CT]] (Terminologie in der Mutterpass-Spezifikation)
- [[PVS]] (Primärsystem, das den Mutterpass befüllt und überträgt)

## Quellen

- [KBV: Mutterpass 1.1.0 – MIO-Dokumentation](https://hub.kbv.de/display/MP1X1X0/Mutterpass+1.1.0)
- [KBV: Pressemitteilung – Mutterpass und U-Heft digitalisiert](https://www.kbv.de/html/2020_49733.php)
- [gematik Interoperabilitätsverzeichnis: MIO-Übersicht](https://www.ina.gematik.de/themenbereiche/medizinische-informationsobjekte)
