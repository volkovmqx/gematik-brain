---
title: Patientenportal
audience: [technical, non-technical]
tags: [technologies, krankenhaus, khzg, isik, digitalisierung]
aliases: [Patientenportale, digitales Patientenportal, Krankenhausportal]
maturity: wachsend
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, patient, kasse]
  interests: [compliance, technik, patient]
---

# Patientenportal

Ein **Patientenportal** ist ein digitaler Zugangskanal, über den Krankenhauspatienten administrative und klinische Prozesse online erledigen können: Aufnahme, Terminbuchung und Kommunikation mit der Einrichtung.

## Erklärt für Einsteiger

Wenn du ins Krankenhaus musst, hast du bisher oft stundenlang am Schalter gewartet, Zettel ausgefüllt und Formulare unterschrieben. Ein Patientenportal ist wie ein Online-Check-in beim Fliegen: Du gibst deine Daten schon vorher am Smartphone oder Computer ein, unterschreibst Dokumente digital und bekommst alle Informationen zu deinem Aufenthalt. Wenn du ankommst, laufen die Abläufe schneller und das Personal hat weniger Papierkram.

## Überblick

Patientenportale sind im deutschen Krankenhaus der zentrale Digitalisierungsschritt im Bereich Patientenkommunikation. Sie werden über das **[[KHZG]] (Krankenhauszukunftsgesetz)** staatlich gefördert. Das Patientenportal entspricht **Fördertatbestand 2** des KHZG (digitales Aufnahme- und Entlassmanagement), der für Krankenhäuser bei Nichterfüllung zu DRG-Abschlägen führt.

### Kernfunktionen

- **Digitale Aufnahme**: Patienten füllen Aufnahmebögen, Einwilligungen und Anamnesefragebögen online aus, bevor sie ins Krankenhaus kommen.
- **Terminbuchung**: Online-Terminvereinbarung für elektive Eingriffe, Ambulanzen und Sprechstunden.
- **Dokumentenbereitstellung**: Digitale Bereitstellung von Entlassbriefen, Befunden und Behandlungsplänen.
- **Kommunikation**: Direkte Nachrichtenfunktion zwischen Patient und Einrichtung, perspektivisch über den [[TI-Messenger]].
- **[[Entlassmanagement]]**: Koordination der nachstationären Versorgung (Reha, Pflege, Folgebehandlung).

### Regulatorischer Kontext

Die technische Anbindung von Patientenportalen an das [[KIS]] (Krankenhausinformationssystem) erfolgt über den **[[ISiK]]-Standard** (Informationstechnische Systeme in Krankenhäusern). ISiK definiert FHIR-basierte Schnittstellen, über die Patientenportale Daten mit dem KIS austauschen können: Patientenstammdaten, Termine, Diagnosen und Dokumente.

Ab **April 2026** müssen zertifizierte [[KIS]]-Systeme ISiK Stufe 3 unterstützen. Patientenportale, die auf ISiK-Schnittstellen setzen, sind damit in der gesamten deutschen Krankenhauslandschaft integrierbar.

Die **[[DKG]] (Deutsche Krankenhausgesellschaft)** und das Bundesamt für Soziale Sicherung (BAS) überwachen die KHZG-Umsetzung. Krankenhäuser, die Fördertatbestand 2 bis Ende 2026 nicht nachweislich umgesetzt haben, erhalten DRG-Abschläge von 0,5 Prozent auf ihre Fallpauschalen.

> [!interesse-compliance]
> KHZG Fördertatbestand 2 (digitales Aufnahme- und Entlassmanagement) ist Pflicht. Krankenhäuser, die den Nachweis bis Ende 2026 nicht erbringen, erhalten einen DRG-Abschlag von 0,5 Prozent. Zertifizierte [[KIS]]-Systeme müssen ab April 2026 ISiK Stufe 3 unterstützen.

## Technische Details

### ISiK-Anbindung

Patientenportale kommunizieren über [[FHIR]]-konforme REST-APIs mit dem [[KIS]]. Die relevanten ISiK-Ressourcen sind:

- **Patient**: Patientenstammdaten (Name, Geburtsdatum, [[KVNR]])
- **Encounter**: Aufnahmefälle und Termine
- **Appointment / Schedule**: Terminbuchung
- **DocumentReference / Binary**: Digitale Dokumente und Befunde
- **Consent**: Einwilligungserklärungen

Der ISiK-Standard wird von der [[gematik]] im gesetzlichen Auftrag (§ 373 [[SGB-V]]) entwickelt und veröffentlicht. Grundlage ist [[FHIR]] R4.

> [!interesse-technik]
> ISiK-Spezifikationen und FHIR-Profile sind auf dem [[gematik]]-Fachportal verfügbar: https://fachportal.gematik.de/informationen-fuer/isik. Relevante Ressourcen: Patient, Encounter, Appointment, DocumentReference, Consent (alle FHIR R4). ISiK Stufe 3 ist ab April 2026 Pflicht für zertifizierte KIS-Systeme.

### Integration in die TI

Patientenportale sind perspektivisch Teil des TI-Ökosystems:

- **[[ePA]]-Anbindung**: Befunde und Entlassbriefe können direkt in die ePA des Patienten übermittelt werden (vorausgesetzt, der Patient hat eine ePA und hat zugestimmt).
- **[[TI-Messenger]] Connect**: Die geplante Variante TI-Messenger Connect (ab Ende 2026) ermöglicht, dass Patientenportale als Einstiegspunkt für den TI-Messenger genutzt werden. Patienten können über das Portal direkt mit Leistungserbringern chatten.
- **[[DiGA]]-Integration**: Digitale Gesundheitsanwendungen können über das Portal empfohlen oder verordnet werden.

### Identifikation und Authentisierung

Da Patientenportale Gesundheitsdaten verarbeiten, müssen Nutzer sicher identifiziert werden. Eingesetzte Verfahren:

- **NKPK-Konformität** (Nationales Kontaktstellen-Konzept): Portale müssen die Identität von Patienten nach dem Vier-Augen-Prinzip oder durch eID-Verfahren sicherstellen.
- **eID** (Online-Ausweisfunktion des Personalausweises) und **[[ePass]]** (NFC-basierte Identifizierung) können als Registrierungsverfahren dienen.
- **eGK**: Die [[eGK]] kann als Identitätsnachweis beim Erstkontakt genutzt werden.

## Verknüpfungen

- [[KIS]] (Krankenhausinformationssystem; Datendrehscheibe; ISiK-Anbindung)
- [[KHZG]] (Förderrahmen für Patientenportale; Fördertatbestand 2)
- [[ISiK]] (Schnittstellenstandard für KIS-Anbindung)
- [[TI-Messenger]] (Kommunikationskanal; TI-Messenger Connect)
- [[DiGA]] (Digitale Gesundheitsanwendungen; Integration möglich)
- [[DKG]] (Deutsche Krankenhausgesellschaft; Branchenvertreter)
- [[ePA]] (Empfänger von Krankenhausdokumenten)
- [[FHIR]] (Datenformat für ISiK-Schnittstellen)
- [[ePass]] (Identifizierungsverfahren für Portal-Registrierung)

## Quellen

- [BMG: Krankenhauszukunftsgesetz (KHZG)](https://www.bundesgesundheitsministerium.de/krankenhauszukunftsgesetz)
- [BAS: Förderrichtlinie KHZG nach § 21 KHSFV](https://www.bundesamtsozialesicherung.de/fileadmin/redaktion/Krankenhauszukunftsfonds/20240906Foerderrichtlinie.pdf)
- [KMA Online: Krankenhäuser und ihr Dilemma mit dem Patientenportal (KHZG FTB 2)](https://www.kma-online.de/aktuelles/it-digital-health/detail/krankenhaeuser-und-ihr-dilemma-mit-dem-patientenportal-51342)
- [gematik Fachportal: ISiK – Informationstechnische Systeme in Krankenhäusern](https://fachportal.gematik.de/informationen-fuer/isik)
