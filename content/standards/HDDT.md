---
title: HDDT
audience: [technical]
tags: [standards, medizinprodukte, diga, fhir, interoperabilität]
aliases: [Health Device Data Transfer, Gerätedatenschnittstelle]
relevance:
  sectors: [hersteller, krankenhaus, arztpraxis, kasse, ti-infrastruktur, it-dienstleister]
  interests: [technik, compliance]
maturity: immergruen
---

# HDDT

Die **HDDT (Health Device Data Transfer)** ist die gematik-Spezifikation für die standardisierte Datenübertragung zwischen Medizinprodukten (persönliche Gesundheitsgeräte) und digitalen Gesundheitsanwendungen ([[DiGA]]).

## Erklärt für Einsteiger

Stell dir vor, du trägst ein Gerät, das deinen Blutzucker misst oder deine Lungenfunktion überwacht. Bisher gab es kein einheitliches Format, um diese Messwerte direkt an eine Gesundheits-App weiterzugeben. Die HDDT-Spezifikation legt fest, wie diese Geräte ihre Daten digital übergeben müssen, sodass jede zugelassene App die Daten lesen kann, egal von welchem Hersteller das Gerät stammt.

## Überblick

Die HDDT-Spezifikation wurde von der [[gematik]] auf Grundlage von **§ 374a [[SGB-V]]** entwickelt. Der Paragraph verpflichtet Hersteller von Medizinprodukten, die auf Kosten der gesetzlichen Krankenversicherung an Patienten abgegeben werden, ihre Gerätedaten über standardisierte Schnittstellen bereitzustellen.

Ziel ist die vollständige Datenhoheit der Patienten: Messwerte von Insulinpumpen, Herzmonitoren, Spirometern und anderen persönlichen Gesundheitsgeräten sollen direkt und maschinenlesbar an vom Patienten gewählte [[DiGA]]s oder andere autorisierte Anwendungen übermittelt werden können.

Die erste Release-Candidate-Version (Draft v26_1) wurde am 10. März 2026 veröffentlicht. Die öffentliche Kommentierungsphase lief bis zum 1. April 2026. Das Verzeichnis für interoperable Schnittstellen von Medizinprodukten (HIIS-VZ) und das HIIS-Antragsportal sollen ab Juli 2026 online verfügbar sein.

> [!interesse-compliance]
> Rechtsgrundlage ist § 374a [[SGB-V]]. Medizinprodukte (Hilfsmittel und Implantate), die auf GKV-Kosten abgegeben werden und Patientendaten elektronisch übermitteln, müssen die HDDT-Schnittstelle implementieren. Das HIIS-Antragsportal zur Registrierung ist ab Juli 2026 verfügbar. Hersteller sollten die Kommentierungsphase der Spezifikation verfolgen: https://gemspec.gematik.de/ig/fhir/hddt/latest.

## Technische Details

### FHIR R4-Grundlage

Die HDDT-Spezifikation basiert auf **[[FHIR]] R4** (HL7 Fast Healthcare Interoperability Resources). Die gematik definiert FHIR-Profile, die festlegen, wie Messwerte, Gerätekonfigurationen und Geräteidentifikationen strukturiert werden müssen.

Die Spezifikation schreibt verbindliche Codesysteme vor:

- **[[LOINC]]**: Für Messwert-Codes (z.B. Blutzucker, Blutdruck, Lungenfunktion)
- **UCUM** (Unified Code for Units of Measure): Für Einheiten der Messwerte

### Unterstützte klinische Domänen (Draft v26_1)

Die erste Version umfasst:

- **Diabetes-Selbstmanagement**: Blutzuckermessgeräte, kontinuierliche Glukosesensoren (CGM)
- **Lungenfunktion**: Spirometer, Peak-Flow-Meter
- **Blutdruckmessung**: Ambulante Blutdruckmessgeräte

Weitere Domänen sollen in späteren Versionen folgen.

### Architektur

Das Gerät (Personal Health Device) überträgt seine Messdaten als FHIR-Ressourcen an eine autorisierte [[DiGA]] oder eine andere empfangsberechtigte Anwendung. Die vollständige Rückverfolgbarkeit zwischen Messwert, Gerätekonfiguration und Geräteidentifikation ist Pflicht.

```
Medizinprodukt (z.B. Insulinpumpe)
    → HDDT-Schnittstelle (FHIR R4)
        → DiGA oder andere autorisierte Anwendung
            → ggf. Weiterleitung in die ePA
```

> [!interesse-technik]
> Implementation Guide: https://gemspec.gematik.de/ig/fhir/hddt/latest. Draft v26_1 (März 2026) auf dem gematik gemspec-Portal: https://gemspec.gematik.de/prereleases/Draft_HDDT_26_1/index.html. Verbindliche Codesysteme: [[LOINC]] für Messwertcodes, UCUM für Einheiten. Vollständige Rückverfolgbarkeit Messwert-Gerätekonfiguration-Gerät ist Pflichtanforderung.

### Abgrenzung zu anderen Schnittstellen

| Schnittstelle | Zweck | Rechtsgrundlage |
|---|---|---|
| HDDT | Gerät zu DiGA / App | § 374a SGB V |
| [[ISiK]] | KIS zu Patientenportal / DiGA | § 373 SGB V |
| [[ePA]]-Schnittstelle | Leistungserbringer zu ePA | § 341 ff. SGB V |

## Verknüpfungen

- [[DiGA]] (Empfänger der Gerätedaten nach HDDT)
- [[FHIR]] (technisches Datenformat der HDDT-Spezifikation)
- [[SGB-V]] (§ 374a: Rechtsgrundlage für HDDT)
- [[gematik]] (Herausgeberin der HDDT-Spezifikation)
- [[LOINC]] (Pflichtcodesystem für Messwert-Codes in HDDT)
- [[ePA]] (Zieldestination für Gerätedaten nach Übertragung)
- [[ISiK]] (verwandter Interoperabilitätsstandard für Krankenhäuser)
- [[BfArM]] (betreibt das DiGA-Verzeichnis; Schnittstelle zu HDDT)
- [[MIO]] (Medizinische Informationsobjekte; verwandtes Konzept strukturierter Gesundheitsdaten)

## Quellen

- [gematik: HDDT Draft v26_1 Spezifikation](https://gemspec.gematik.de/prereleases/Draft_HDDT_26_1/index.html)
- [gematik: HDDT Implementation Guide (aktuell)](https://gemspec.gematik.de/ig/fhir/hddt/latest)
- [quickbirdmedical: Guide to § 374a SGB V](https://quickbirdmedical.com/en/374a-sgb-v-interoperabilitaet-diga-hilfsmittel/)
