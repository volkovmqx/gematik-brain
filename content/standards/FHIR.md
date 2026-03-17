---
title: FHIR - Fast Healthcare Interoperability Resources
aliases: [FHIR, HL7 FHIR]
audience: [technical]
tags: [standard, fhir, interoperabilitaet]
---

# FHIR - Fast Healthcare Interoperability Resources

**FHIR** (ausgesprochen "fire") ist der internationale Standard für den Austausch von Gesundheitsdaten, entwickelt von HL7 International. Die [[gematik]] nutzt FHIR als Grundlage für die Datenformate der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Wenn ein Arzt deine Daten an ein Krankenhaus schicken will, müssen beide Systeme die gleiche "Sprache" sprechen. FHIR ist diese Sprache. Es legt fest, wie Daten über Patienten, Medikamente, Befunde und Ärzte strukturiert werden. Ohne FHIR würde jedes System seine eigene Struktur nutzen, und nichts würde zusammenpassen. FHIR ist kein deutsches Ding, sondern ein weltweiter Standard, den Deutschland an seine Bedürfnisse anpasst.

## Überblick

FHIR definiert **Ressourcen** (z.B. Patient, Medication, Observation) und **Profile** (Anpassungen an nationale Anforderungen). Deutschland nutzt FHIR R4 mit deutschen Basisprofilen.

### Einsatz bei gematik
- [[ePA]]: Medizinische Dokumente als FHIR-Bundles, Medikationsdienst
- [[E-Rezept]]: Verordnungsdaten als FHIR MedicationRequest ([[KBV]]-Profile)
- [[TI-Messenger]]: [[VZD|VZD-FHIR-Directory]] für das Adressbuch
- [[ISiK]] (Informationstechnische Systeme im Krankenhaus)

## Technische Details

### Ressourcen-Typen
- **Patient**: Demografische Daten des Versicherten
- **MedicationRequest**: Verordnung ([[E-Rezept]])
- **DocumentReference**: Dokument-Metadaten ([[ePA]])
- **Practitioner**: Leistungserbringer-Daten
- **Organization**: Daten zur Einrichtung

### Deutsche Profile
- **[[KBV]]-Profile**: Für [[E-Rezept]], [[eAU]]
- **gematik-Profile**: Für [[ePA]], Dispensierinformationen
- **Deutsche Basisprofile**: Grundlegende Anpassungen (z.B. Versichertennummer als Identifier)

### Interaktionsmuster
- RESTful API (CRUD-Operationen über HTTP)
- FHIR-Bundles (Sammlungen von Ressourcen in einer Nachricht)
- FHIR Operations (z.B. $everything, $validate)

## Verknüpfungen

- Datenformat für [[ePA]] und [[E-Rezept]]
- [[VZD|VZD-FHIR-Directory]] für [[TI-Messenger]]
- Grundlage der Dateninteroperabilität der [[Telematikinfrastruktur]]

## Quellen

- [Fachportal - Anwendungen](https://fachportal.gematik.de/anwendungen) (FHIR-Nutzung in allen Anwendungen dokumentiert)
- [Normative Spezifikationen](https://gemspec.gematik.de)
- [HL7 FHIR](https://www.hl7.org/fhir/) (internationaler Standard)
