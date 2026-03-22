---
title: CDA
audience: [technical]
tags: [standard, cda, hl7, dokumente]
aliases: [Clinical Document Architecture, HL7 CDA]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, arztpraxis]
  interests: [technik]
maturity: wachsend
---

# CDA

Die **Clinical Document Architecture (CDA)** ist ein XML-basierter [[HL7]]-Standard für strukturierte klinische Dokumente wie Arztbriefe, Entlassberichte und Befunde.

## Erklärt für Einsteiger

Wenn ein Krankenhaus einen Arztbrief in eine andere Klinik schickt, muss der Brief in einem Format sein, das das dortige System versteht. CDA ist wie ein internationales Formular für medizinische Dokumente: Es legt fest, wo Name und Geburtsdatum stehen, wie Diagnosen codiert werden und welche Abschnitte ein Dokument haben muss. Inzwischen wird CDA schrittweise durch den neueren [[FHIR]]-Standard ersetzt.

## Überblick

CDA wurde von [[HL7]] International entwickelt und ist in zwei wesentlichen Versionen erschienen. CDA Release 2 (CDA R2) ist der in Deutschland und weltweit am weitesten verbreitete Standard. Er wurde in den 2000er Jahren eingeführt und ist noch in vielen [[KIS|Krankenhausinformationssystemen]] und [[PVS|Praxissystemen]] im Einsatz.

In Deutschland hat die [[KBV]] CDA-Implementierungsleitfäden für verschiedene Dokumenttypen veröffentlicht. Für den Arztbrief (elektronischer Arztbrief, [[eArztbrief]]) gab es einen eigenen deutschen CDA-Leitfaden, der über [[KIM]] versendet wurde.

CDA-Dokumente bestehen aus zwei Teilen:

- **Header**: Enthält Metadaten wie Patient, Autor, Einrichtung, Datum und Dokumenttyp.
- **Body**: Enthält den eigentlichen Dokumentinhalt. Dieser kann als unstrukturierter Text (Level 1), als XML-Struktur mit lesbarem Text (Level 2) oder als vollständig codierter XML-Inhalt mit maschinenlesbaren Codes (Level 3) vorliegen.

## Technische Details

### XML-Struktur

CDA-Dokumente sind valide XML-Dokumente gegen die CDA-Schema-Definition. Die Namespace-URI ist `urn:hl7-org:v3`. Ein einfaches CDA-Dokument enthält:

```xml
<ClinicalDocument xmlns="urn:hl7-org:v3">
  <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
  <templateId root="..."/>
  <id root="..." extension="..."/>
  <code code="34133-9" codeSystem="2.16.840.1.113883.6.1" displayName="Summarization of Episode Note"/>
  ...
</ClinicalDocument>
```

Codes in CDA-Dokumenten stammen aus Terminologien wie [[ICD-10-GM]], [[SNOMED CT]], LOINC und [[OPS]]. Der Header verwendet HL7 V3 RIM-Klassen (Patient, Author, Custodian usw.).

### CDA in der deutschen TI

In der deutschen [[Telematikinfrastruktur]] spielte CDA eine wichtige Rolle:

- **Elektronischer Arztbrief**: Arztbriefe im CDA-Format wurden über [[KIM]] zwischen Einrichtungen ausgetauscht. Der "eArztbrief Basis 2.0" (KBV-Leitfaden) definierte das Format.
- **[[XDS]]-Dokumente**: Im [[XDS|XDS-Framework]] (Cross-Enterprise Document Sharing) der [[ePA]] wurden CDA-Dokumente als eines der unterstützten Formate registriert.
- **ePA-Übergang**: Mit der Einführung der [[ePA]] für alle (ab 2025) und dem Wechsel auf [[FHIR]] R4 als primäres Format verliert CDA an Bedeutung. Die ePA akzeptiert CDA-Dokumente weiterhin im [[XDS]]-Kontext, aber neue Dienste wie der Medikationsdienst und MIOs basieren auf [[FHIR]].

### Abgrenzung CDA vs. FHIR

| Merkmal | CDA R2 | FHIR R4 |
|---|---|---|
| Format | XML (fest) | JSON oder XML |
| Granularität | Dokument-orientiert | Ressourcen-orientiert |
| Verbreitung Deutschland | Alt-Systeme, KIS | Neue TI-Dienste (ePA, E-Rezept) |
| API-Anbindung | Schwierig | RESTful API-nativ |
| Migration | CDA-Dokumente können in FHIR-DocumentReference gewrappt werden | |

### Migrationspfad

Die [[gematik]] und [[KBV]] empfehlen die Migration auf [[FHIR]]-basierte Formate. CDA-Dokumente können als Binary-Ressourcen in [[FHIR]] eingebettet oder per Mapping in FHIR-Strukturen überführt werden. Der HL7 Deutschland e.V. koordiniert den Migrationsprozess.

> [!interesse-technik] Technischer Einstieg: CDA-zu-FHIR-Migration
> CDA R2-Dokumente können in FHIR als `DocumentReference` (mit Binary-Anhang) gewrappt werden. Für strukturierte Umwandlung existiert das HL7-Projekt CDA-to-FHIR Mapping. Namespace der CDA-Dokumente: `urn:hl7-org:v3`. Für neue Implementierungen in der TI ist FHIR R4 der empfohlene Standard. KIS-Hersteller, die noch CDA-Arztbriefe erzeugen, können diese für die [[ePA]] weiterhin im [[XDS]]-Kontext registrieren. Das ISiK-Modul Dokumentenaustausch (Stufe 3) fordert FHIR-native Dokumente, akzeptiert aber auch CDA als Binary-Anhang in einer `DocumentReference`.

## Verknüpfungen

- [[HL7]] (übergeordneter Standard, in dem CDA eingebettet ist)
- [[FHIR]] (Nachfolger von CDA für neue Anwendungen in der TI)
- [[XDS]] (Dokumentenaustauschframework, in dem CDA-Dokumente registriert werden)
- [[KIS]] (Krankenhausinformationssystem, das CDA für Arztbriefe und Entlassberichte einsetzt)
- [[ePA]] (nutzt XDS und FHIR; CDA-Dokumente können in der ePA gespeichert werden)
- [[KIM]] (Transportweg für eArztbriefe im CDA-Format)
- [[KBV]] (hat deutsche CDA-Implementierungsleitfäden veröffentlicht)
- [[ICD-10-GM]] (Diagnosecode-System, das in CDA-Dokumenten genutzt wird)
- [[SNOMED CT]] (Terminologie für CDA-Codes)

## Quellen

- [HL7 CDA Release 2 - HL7 International](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=7)
- [Wikipedia: Clinical Document Architecture](https://de.wikipedia.org/wiki/Clinical_Document_Architecture)
- [HL7 Deutschland: CDA-Implementierungsleitfäden](https://www.hl7.de/leistungen/fhir-cda.html)
