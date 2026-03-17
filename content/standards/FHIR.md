---
title: FHIR - Fast Healthcare Interoperability Resources
aliases: [FHIR, HL7 FHIR]
audience: [technical]
tags: [standard, fhir, interoperabilitaet]
---

# FHIR - Fast Healthcare Interoperability Resources

**FHIR** (ausgesprochen "fire") ist der internationale Standard fur den Austausch von Gesundheitsdaten, entwickelt von HL7 International. Die gematik nutzt FHIR als Grundlage fur die Datenformate der [[Telematikinfrastruktur]].

## Erklart fur Einsteiger

Wenn ein Arzt deine Daten an ein Krankenhaus schicken will, mussen beide Systeme die gleiche "Sprache" sprechen. FHIR ist diese Sprache. Es legt fest, wie Daten uber Patienten, Medikamente, Befunde und Arzte strukturiert werden. Ohne FHIR wurde jedes System seine eigene Struktur nutzen, und nichts wurde zusammenpassen. FHIR ist kein deutsches Ding, sondern ein weltweiter Standard, den Deutschland an seine Bedurfnisse anpasst.

## Uberblick

FHIR definiert **Ressourcen** (z.B. Patient, Medication, Observation) und **Profile** (Anpassungen an nationale Anforderungen). Deutschland nutzt FHIR R4 mit deutschen Basisprofilen.

### Einsatz bei gematik
- [[ePA]]: Medizinische Dokumente als FHIR-Bundles, Medikationsdienst
- [[E-Rezept]]: Verordnungsdaten als FHIR MedicationRequest (KBV-Profile)
- [[TI-Messenger]]: VZD-FHIR-Directory fur das Adressbuch
- ISiK (Informationstechnische Systeme im Krankenhaus)

## Technische Details

### Ressourcen-Typen
- **Patient**: Demografische Daten des Versicherten
- **MedicationRequest**: Verordnung ([[E-Rezept]])
- **DocumentReference**: Dokument-Metadaten ([[ePA]])
- **Practitioner**: Leistungserbringer-Daten
- **Organization**: Daten zur Einrichtung

### Deutsche Profile
- **KBV-Profile**: Fur [[E-Rezept]], [[eAU]]
- **gematik-Profile**: Fur [[ePA]], Dispensierinformationen
- **Deutsche Basisprofile**: Grundlegende Anpassungen (z.B. Versichertennummer als Identifier)

### Interaktionsmuster
- RESTful API (CRUD-Operationen uber HTTP)
- FHIR-Bundles (Sammlungen von Ressourcen in einer Nachricht)
- FHIR Operations (z.B. $everything, $validate)

## Verknupfungen

- Datenformat fur [[ePA]] und [[E-Rezept]]
- VZD-FHIR-Directory fur [[TI-Messenger]]
- Grundlage der Dateninteroperabilitat der [[Telematikinfrastruktur]]

## Quellen

- [Fachportal - Anwendungen](https://fachportal.gematik.de/anwendungen) (FHIR-Nutzung in allen Anwendungen dokumentiert)
- [Normative Spezifikationen](https://gemspec.gematik.de)
- [HL7 FHIR](https://www.hl7.org/fhir/) (internationaler Standard)
