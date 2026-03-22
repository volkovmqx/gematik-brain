---
title: MIO
audience: [technical, non-technical]
tags: [standards, fhir, epa, kbv, interoperabilität]
aliases: [Medizinische Informationsobjekte, MIOs, MIO42]
relevance:
  sectors: [arztpraxis, zahnarzt, hebamme, hersteller, it-dienstleister, patient]
  interests: [technik, compliance, patient]
---

# MIO

Medizinische Informationsobjekte (MIOs) sind standardisierte [[FHIR]]-Profile der [[KBV]], die definieren, in welcher einheitlichen Struktur klinische Dokumente in der [[ePA]] gespeichert werden.

## Erklärt für Einsteiger

Stell dir die [[ePA]] als einen Aktenschrank vor. Damit alle Ärzte und Systeme denselben Schrank nutzen können, braucht es genaue Baupläne für jede Schublade. Ein MIO ist so ein Bauplan. Es legt fest, wie zum Beispiel ein Impfpass oder ein Mutterpass digital strukturiert sein muss: welche Felder es gibt, welche Codes verwendet werden und wie alles beschriftet ist. Mit diesen einheitlichen Plänen kann jedes Krankenhaus und jede Arztpraxis dieselben Daten verstehen, egal mit welcher Software sie arbeiten.

## Überblick

Das Konzept der MIOs wurde von der [[KBV]] entwickelt. Die KBV ist die Kassenärztliche Bundesvereinigung und damit die Normgeberin für Vertragsärzte in Deutschland. Die technische Umsetzung erfolgt durch die Tochtergesellschaft **mio42 GmbH**, die 2019 gegründet wurde und die MIO-Spezifikationen entwickelt und pflegt.

MIOs sind [[FHIR]]-basierte Profile, die bestehende internationale Ressourcen des [[HL7]]-Standards auf den deutschen Versorgungskontext zuschneiden. Sie definieren: welche Felder eines Datensatzes verpflichtend sind, welche Terminologien (z. B. [[SNOMED-CT|SNOMED CT]], [[LOINC]], [[ICD-10-GM]]) zu verwenden sind und wie Verweise zwischen Ressourcen strukturiert werden.

MIOs werden über das öffentliche Portal [mio.kbv.de](https://mio.kbv.de) veröffentlicht. Alle Spezifikationen sind frei zugänglich. Das Portal enthält auch den MIO Viewer, ein Werkzeug zur menschenlesbaren Darstellung von MIO-Instanzen im Browser.

## Technische Details

### Technische Grundlagen

MIOs basieren auf **[[FHIR]] R4** (Fast Healthcare Interoperability Resources, Version 4). FHIR-Ressourcen werden als JSON oder XML kodiert. Jedes MIO definiert ein oder mehrere **[[FHIR-Profil|FHIR-Profile]]** (StructureDefinition), die die Basis-FHIR-Ressourcen einschränken und erweitern.

Die verwendeten Terminologien:
- **SNOMED CT**: Klinische Konzepte (Diagnosen, Prozeduren, Befunde)
- **[[LOINC]]**: Laborparameter und Beobachtungen
- **[[ICD-10-GM]]**: Diagnosecodierung nach deutschem Standard ([[BfArM]] pflegt die deutsche Modifikation)
- **[[ATC-Code|ATC]]**: Arzneimittelklassifikation

MIOs sind als npm-Pakete veröffentlicht und können in [[FHIR]]-Validatoren direkt eingebunden werden.

### Verfügbare MIOs

#### Fertiggestellte MIOs

| MIO | Version | Beschreibung |
|---|---|---|
| [[eImpfpass|Impfpass]] | 1.1.0 | Digitale Dokumentation von Impfungen, Impfreaktionen und Immunstatus |
| Zahnärztliches Bonusheft | 1.1.0 | Dokumentation von Prophylaxe- und Zahnbehandlungsleistungen |
| [[Mutterpass]] | 1.1.0 | Schwangerschaftsdokumentation gemäß Mutterschafts-Richtlinien |
| [[Kinderuntersuchungsheft|U-Heft]] | 1.0.1 | Kinderuntersuchungen (U1 bis U9) nach Kinder-Richtlinien |

#### MIOs in Entwicklung

| MIO | Version | Beschreibung |
|---|---|---|
| KH-Entlassbrief | 1.0.0 | Arztbrief bei Krankenhausentlassung |
| Telemedizinisches Monitoring | 1.0.0 | Vitaldaten aus Remote-Patient-Monitoring |
| Überleitungsbogen | 1.0.0 | Pflegeüberleitung zwischen Einrichtungen |
| [[Patientenkurzakte]] | 1.0.0 | Zusammenfassung relevanter Gesundheitsdaten |
| DiGA Toolkit | 1.0.0 | Exportformat für [[DiGA]]-Daten (Grundlage der [[DiGAV]] Anlage 2) |

### Das MIO DiGA Toolkit

Das MIO DiGA Toolkit ist ein spezielles MIO für den Datenexport aus [[DiGA]]. Es ist in der [[DiGAV]] (Anlage 2) als Referenzformat für interoperable DiGA-Datenexporte vorgeschrieben. Das Toolkit definiert generische FHIR-Ressourcen, die DiGA-Hersteller für ihre spezifischen Datensätze nutzen können, ohne für jede Anwendung ein eigenes MIO entwickeln zu müssen.

Das [[BfArM]] stellt im DiGA-Antragsportal einen [[FHIR]]-Validator bereit, der die Konformität von DiGA-Exporten mit dem MIO DiGA Toolkit prüft.

### Entwicklungsprozess

Jedes MIO durchläuft fünf Phasen:

1. **Initiierung**: Anforderungsanalyse mit Fachexperten und Leistungserbringern
2. **Erstellung**: Technische Umsetzung als FHIR-Profile durch mio42 GmbH
3. **Öffentliche Kommentierungsphase**: Typisch 6 Wochen; jedermann kann Stellungnahmen einreichen
4. **Konsentierung**: Stakeholder-Abstimmung zur Beseitigung offener Punkte
5. **Verabschiedung**: Formale Freigabe durch den KBV-Vorstand

### Einbindung in die ePA

MIOs werden als strukturierte Dokumente in der [[ePA]] gespeichert. Die [[ePA]]-Architektur sieht vor, dass Leistungserbringer MIO-konforme FHIR-Ressourcen direkt in die Patientenakte schreiben. Versicherte können die Inhalte über den MIO Viewer oder ihre Krankenkassen-App visualisieren.

Die [[ISiK]]-Spezifikation ([[KBV]] und [[gematik]] gemeinsam) greift ebenfalls auf MIO-Konzepte zurück, um einheitliche FHIR-Profile für den Datenaustausch mit Krankenhäusern zu definieren.

## Verknüpfungen

- [[FHIR]] (technischer Standard, auf dem MIOs basieren)
- [[ePA]] (Speicherort für MIO-konforme Dokumente)
- [[KBV]] (Herausgeber der MIO-Spezifikationen)
- [[DiGA]] (nutzen das MIO DiGA Toolkit für Datenexporte)
- [[DiGAV]] (schreibt MIO DiGA Toolkit als Exportformat vor)
- [[ISiK]] (nutzt ähnliche FHIR-Profile für Krankenhäuser)
- [[AMTS]] (elektronischer Medikationsplan als MIO in der ePA)
- [[BfArM]] (pflegt [[ICD-10-GM]], eine der MIO-Terminologien)

## Quellen

- [MIO-Portal der KBV: mio.kbv.de](https://mio.kbv.de/site/mio)
- [gematik INA: Medizinische Informationsobjekte](https://www.ina.gematik.de/themenbereiche/medizinische-informationsobjekte)
- [KBV: MIO-Überblick](https://www.kbv.de/praxis/digitalisierung/anwendungen/elektronische-patientenakte/mio)
- [mio42 GmbH: Über uns](https://mio42.de/ueber-uns/)
