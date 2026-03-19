---
title: DiPaG
audience: [technical, non-technical]
tags: [technologies, abrechnung, rechnung, patient, pkv]
aliases: [Digitale Patientenrechnung, Digitale Patientenabrechnung, Digital Patient Invoice]
maturity: wachsend
---

# DiPaG

Die **DiPaG (Digitale Patientenrechnung)** ist eine neue TI-Anwendung, die Abrechnungsrechnungen von Leistungserbringern digital über die [[Telematikinfrastruktur]] an Patienten übermittelt und die Einreichung bei Kostenträgern vereinfacht.

## Erklärt für Einsteiger

Wenn du privat versichert bist oder als GKV-Versicherter Selbstzahlerleistungen in Anspruch nimmst, bekommst du heutzutage eine Papierrechnung zugeschickt. Diese musst du eintippen, scannen oder fotografieren und dann bei deiner Krankenversicherung einreichen. DiPaG ersetzt diesen Papierweg: Der Arzt schickt die Rechnung digital über ein sicheres Netz direkt an dein Smartphone oder deine digitale Akte. Du kannst sie mit einem Klick an deine Versicherung weiterleiten.

## Überblick

DiPaG ist eine der neuen TI-Anwendungen in der Aufbauphase. Die Spezifikation wurde von der [[gematik]] erarbeitet und im Mai 2025 als Release **DiPag_25_1** auf gemspec.gematik.de veröffentlicht. Die Einführung in den Produktivbetrieb ist für Ende 2026 geplant.

DiPaG adressiert ein konkretes Problem: Die privatärztliche und Selbstzahler-Abrechnung läuft heute überwiegend papierbasiert. Ärzte schicken Rechnungen per Post. Patienten reichen sie manuell bei PKV oder Beihilfe ein. Das kostet Zeit, führt zu Fehlern und verzögert die Erstattung.

DiPaG standardisiert diesen Prozess digital und bindet ihn in die TI ein. Damit wird die Abrechnung zwischen Leistungserbringer, Patient und Kostenträger vollständig digital.

### Abgrenzung zur GKV-Abrechnung

Die GKV-Abrechnung läuft über [[TA1]] und [[Apothekenrechenzentrum|Apothekenrechenzentren]] (für Apotheken) bzw. über die Kassenärztlichen Vereinigungen (für Arztpraxen). DiPaG adressiert primär die **privatärztliche Abrechnung ([[GOÄ]]/[[GOZ]])** und Selbstzahlerleistungen, bei denen eine Rechnung direkt an den Patienten geht.

## Technische Details

### Architektur

DiPaG besteht aus einem zentralen **Fachdienst** in der [[Telematikinfrastruktur]]. Die Spezifikation definiert:

- **gemSpec_DiPag_FD**: Spezifikation des DiPaG-Fachdienstes (Backend-Komponente)
- **gemAnbT_DiPag_FD_ATV**: Anbietertypsteckbrief für zugelassene Fachdienst-Betreiber
- **gemProdT_DiPag_FD_PTV**: Produkttypsteckbrief

Das System sieht folgende Akteure vor:

| Akteur | Rolle |
|---|---|
| Leistungserbringer (Arzt, Krankenhaus) | Erstellt und sendet die digitale Rechnung |
| Patient (Versicherter) | Empfängt und verwaltet Rechnungen, leitet sie weiter |
| Kostenträger (PKV, Beihilfestelle) | Empfängt die Rechnung vom Patienten und erstattet |
| Abrechnungsdienstleister | Kann im Auftrag des Leistungserbringers agieren |

### Rechnungsformat und Standards

Digitale Rechnungen nach DiPaG sollen maschinenlesbar sein und auf etablierten Standards basieren. Für die technische Integration ist die Nutzung von [[FHIR]]-basierten Dokumentenformaten vorgesehen, die eine maschinelle Verarbeitung durch PKV-Systeme ermöglichen.

### Sicherheit und Authentisierung

Wie alle TI-Anwendungen setzt DiPaG auf die Sicherheitsarchitektur der TI: Authentisierung der Leistungserbringer über [[SMC-B]] (Institutionskarte) und des Patienten über [[Gesundheits-ID]] oder [[eGK]]. Die Übertragung erfolgt verschlüsselt innerhalb der TI.

### Integration mit der ePA

DiPaG ist auf Integration mit der [[ePA]] ausgelegt. Rechnungen können potenziell in der Patientenakte abgelegt werden, sodass Patienten eine vollständige digitale Dokumentation ihrer Gesundheitsausgaben haben. Details der ePA-Integration werden in nachfolgenden Spezifikationsversionen konkretisiert.

### Stand der Einführung

Der Spezifikationsrelease DiPag_25_1 (22. Mai 2025) enthält die Basisspezifikation. Der Produktivstart ist für Ende 2026 geplant. Erste zugelassene Fachdienst-Betreiber werden im Laufe von 2026 erwartet. Das Zulassungsverfahren der [[gematik]] ist vergleichbar mit anderen TI-Fachdiensten.

## Verknüpfungen

- [[gematik]] (entwickelt die DiPaG-Spezifikation und lässt Fachdienste zu)
- [[Telematikinfrastruktur]] (Rahmeninfrastruktur)
- [[ePA]] (Ablage von Rechnungen in der Patientenakte geplant)
- [[FHIR]] (Datenformat für maschinenlesbare Rechnungen)
- [[SMC-B]] (Authentisierung der Leistungserbringer)
- [[Gesundheits-ID]] (Authentisierung der Patienten)
- [[TA1]] (Vergleich: GKV-Abrechnungsformat für Apotheken)
- [[PKV]] (Zielgruppe: Privatversicherte als Empfänger der Erstattung)
- [[GOÄ]] (Gebührenordnung für Ärzte, die mit DiPaG abgerechnet wird)

## Quellen

- [gemspec.gematik.de: DiPag_25_1 Release (22.05.2025)](https://gemspec.gematik.de/releases/DiPag_25_1/)
- [gematik: Feature Digitale Patientenrechnung (gemF_DiPag)](https://gemspec.gematik.de/docs/gemF/gemF_DiPag/latest/)
- [gematik.de: Telematikinfrastruktur Anwendungen](https://www.gematik.de/telematikinfrastruktur/ti-anwendungen)
