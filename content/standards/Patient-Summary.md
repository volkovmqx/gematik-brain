---
title: Patient Summary
audience: [technical, non-technical]
tags: [standards, interoperabilität, europa, myhealth-eu, fhir, ips]
aliases: [Patientenzusammenfassung, ePS, europäische Patientenkurzakte, International Patient Summary, IPS]
maturity: wachsend
---

# Patient Summary

Der **Patient Summary** (Patientenzusammenfassung, auch: ePS) ist ein europäisch standardisiertes Format für eine Kurzakte mit den wichtigsten Gesundheitsdaten eines Patienten, das für den grenzüberschreitenden Datenaustausch über [[MyHealth@EU]] genutzt wird.

## Erklärt für Einsteiger

Stell dir vor, du fährst im Urlaub nach Spanien und wirst krank. Der spanische Arzt kann kein Deutsch und hat keinen Zugriff auf deine deutschen Gesundheitsakten. Der Patient Summary löst dieses Problem: Er enthält auf wenigen Seiten die wichtigsten Informationen über dich, auf Englisch und maschinenlesbar, zum Beispiel welche Medikamente du einnimmst, welche Allergien du hast und welche chronischen Krankheiten du hast. Der spanische Arzt kann diese Kurzakte aus dem europäischen System abrufen und sofort die wesentlichen Fakten sehen.

## Überblick

Der Patient Summary ist ein zentrales Dokument im europäischen Gesundheitsdatenaustausch. Er wird im Rahmen von **[[MyHealth@EU]]** (dem European Health Data Space auf Infrastrukturebene) zwischen Mitgliedstaaten ausgetauscht. Rechtlich ist der Patient Summary Teil des [[EHDS]] (European Health Data Space), der seit März 2025 in Kraft ist.

Der Inhalt eines Patient Summary umfasst:

- **Aktive Diagnosen** (chronische und relevante Erkrankungen)
- **Dauermedikation** (Arzneimittel mit Dosierung)
- **Allergien und Unverträglichkeiten** (Medikamente, Nahrungsmittel, Substanzen)
- **Impfungen** (relevante Impfhistorie)
- **Chirurgische Eingriffe** (vergangene Operationen)
- **Medizinische Geräte und Implantate**

Damit enthält der Patient Summary keine vollständige Krankengeschichte, sondern nur die für die Akutversorgung kritischen Informationen.

### Deutschland und der Patient Summary

Deutschland plant, den Patient Summary als Teil der [[ePA]] ab **2029** für den EU-weiten Abruf bereitzustellen. Das [[NCPeH]] (Nationales Kontaktpunkt eHealth) ist das deutsche Gateway, das den Austausch zwischen der deutschen TI und der europäischen MyHealth@EU-Infrastruktur ermöglicht.

## Technische Details

### Format: HL7 IPS (FHIR R4)

Der Patient Summary basiert auf dem **HL7 International Patient Summary (IPS)** Standard. IPS ist als [[FHIR]] R4 Implementation Guide spezifiziert (HL7 FHIR IG IPS) und als ISO 27269:2021 / EN ISO 27269 normiert.

Ein IPS-Dokument ist ein FHIR Bundle vom Typ `document`. Es enthält:

- **Composition**: Metadaten (Patient, Autor, Datum, Sprache)
- **Pflichtabschnitte**: Allergien und Unverträglichkeiten, Medikation, Diagnosen
- **Empfohlene Abschnitte**: Impfungen, Eingriffe, Implantate, Ergebnisse
- **Optionale Abschnitte**: Vorsorgeplanung, Anamnese, Familienanamnese

Die Terminologie nutzt international anerkannte Codesysteme: [[SNOMED CT]] für Diagnosen und klinische Konzepte, ATC-Codes für Medikamente sowie EDQM-Codes für Verabreichungswege.

### Sprachneutrale Darstellung

Ein wichtiges Designprinzip des IPS ist die **Sprachneutralität**: Neben menschenlesbaren Texten (in der Sprache des Erstellers) enthält der IPS maschinenlesbare Codes, die unabhängig von der Sprache eindeutig interpretierbar sind. Ein spanischer Arzt kann daher den IPS eines deutschen Patienten klinisch verwerten, auch ohne Deutsch zu sprechen.

### Austausch über MyHealth@EU / NCPeH

Der Austausch des Patient Summary zwischen Ländern folgt diesem Ablauf:

1. Behandelnder Arzt im Ausland fordert Patient Summary an (mit Einwilligung des Patienten)
2. Nationaler Kontaktpunkt (NCP) des behandelnden Landes sendet Anfrage
3. **[[NCPeH]]** (Deutschland) empfängt die Anfrage und prüft die Identität des Patienten
4. NCPeH ruft Patient-Summary-Daten aus dem deutschen System ab (ab 2029 aus der [[ePA]])
5. Daten werden in das IPS-Format konvertiert und über die europäische Infrastruktur übermittelt

Für den Abruf muss der Patient über seine **[[Gesundheits-ID]]** (digitale Identität) identifiziert werden.

### Unterschied zu ePA und medizinischer Akte

Der Patient Summary ist kein Ersatz für eine vollständige Patientenakte:

| Aspekt | ePA | Patient Summary |
|---|---|---|
| Umfang | Vollständige Dokumentation | Kurzübersicht (kritische Daten) |
| Zielgruppe | Behandelnde in Deutschland | Behandelnde EU-weit |
| Format | FHIR R4, CDA, XDS | HL7 IPS (FHIR R4) |
| Zweck | Langzeitdokumentation | Akute Notfall-/Primärversorgung |

### Rollout-Zeitplan für Deutschland

- **2025**: EHDS-Verordnung in Kraft (März 2025). NCPeH-Aufbau läuft.
- **2026**: Deutschland plant Teilnahme am E-Rezept-Austausch über MyHealth@EU (Wave 10).
- **2029**: Bereitstellung des Patient Summary aus der deutschen ePA für EU-Austausch geplant.
- **2031**: EU-weite Pflicht für alle Mitgliedstaaten zur Umsetzung des Patient Summary.

## Verknüpfungen

- [[MyHealth@EU]] (europäische Infrastruktur für den Datenaustausch)
- [[NCPeH]] (deutsches Gateway für MyHealth@EU)
- [[EHDS]] (European Health Data Space; regulatorischer Rahmen)
- [[ePA]] (Datenquelle für den deutschen Patient Summary ab 2029)
- [[FHIR]] (technisches Format: HL7 IPS auf FHIR R4-Basis)
- [[SNOMED CT]] (Terminologie für Diagnosen und klinische Konzepte im IPS)
- [[Gesundheits-ID]] (Identifikation des Patienten beim grenzüberschreitenden Abruf)
- [[DVKA]] (Deutsche Verbindungsstelle Krankenversicherung Ausland; organisatorisch zuständig)

## Quellen

- [HL7 FHIR: International Patient Summary Implementation Guide](https://hl7.org/fhir/uv/ips/)
- [European Commission: Patient Summary](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-health-records/patient-summary_en)
- [gematik: NCPeH und grenzüberschreitender Datenaustausch](https://www.gematik.de/anwendungen/ncpeh)
- [ISO 27269:2021 – Health Informatics: International Patient Summary](https://www.iso.org/standard/79491.html)
