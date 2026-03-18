---
title: XDS
audience: [technical]
tags: [standards, IHE, dokumentenmanagement, ePA]
aliases: [Cross-Enterprise Document Sharing, XDS.b, IHE XDS]
---

# XDS

IHE-Integrationsprofil für die einrichtungsübergreifende Verwaltung medizinischer Dokumente über ein zentrales Register und verteilte Ablagespeicher.

## Erklärt für Einsteiger

Stell dir vor, du willst einen Arztbrief von deiner Hausärztin mit dem Krankenhaus teilen. XDS ist das System, das sicherstellt, dass jedes Krankenhaus und jede Arztpraxis Dokumente nach denselben Regeln ablegen und wieder finden kann. Es gibt ein zentrales Register, das weiß, wo welche Dokumente liegen, und separate Speicher, die die eigentlichen Dateien halten.

## Überblick

XDS steht für Cross-Enterprise Document Sharing und ist ein Integrationsprofil von [[IHE]] (Integrating the Healthcare Enterprise). Es definiert, wie Gesundheitseinrichtungen medizinische Dokumente über Organisationsgrenzen hinweg speichern, registrieren und abrufen. Das Profil gehört zum IHE IT-Infrastructure (ITI) Technical Framework.

In Deutschland wird XDS als Grundlage für das Dokumentenmanagement der [[ePA]] (elektronische Patientenakte) genutzt. Die Schnittstellen der ePA basieren auf IHE-Spezifikationen, insbesondere auf dem XDS-Konzept für die Ablage und den Abruf medizinischer Dokumente. Das zugehörige Datenmodell-Dokument gemSpec_DM_ePA legt fest, welche XDS-Metadatenattribute auf Ebene von Submission Set, Document Entry und Folder zu verwenden sind.

XDS ist dokumenteninhaltsneutral: Es unterstützt beliebige Dateiformate wie [[FHIR]]-Dokumente, [[CDA]], DICOM, PDF oder Plaintext. Die Organisation erfolgt ausschließlich über Metadaten.

## Technische Details

### Akteure

XDS definiert sechs Akteure mit klar abgegrenzten Rollen:

- **Document Source**: Erzeugt Dokumente und lädt sie in ein Repository hoch. Liefert Dokument und Metadaten für die Registrierung.
- **Document Consumer**: Stellt Anfragen an das Registry und ruft Dokumente aus dem Repository ab.
- **Document Registry**: Speichert Metadaten über registrierte Dokumente als Document Entries. Beantwortet Suchanfragen und prüft Registrierungsregeln.
- **Document Repository**: Speichert Dokumente dauerhaft als binäre Objekte und vergibt eindeutige Identifikatoren.
- **Patient Identity Source**: Stellt autoritative Patienten-IDs und demografische Daten für die XDS-Affinity-Domain bereit.
- **Integrated Document Source/Repository**: Kombiniert Document Source und Repository in einem Akteur.

### Transaktionen

Die zentralen Transaktionen in XDS.b:

| Transaktion | Kennung | Beschreibung |
|---|---|---|
| Patient Identity Feed | ITI-8 (HL7v2) / ITI-44 (HL7v3) | Übermittlung von Patienten-IDs |
| Registry Stored Query | ITI-18 | Suchanfrage an das Registry |
| Provide and Register Document Set-b | ITI-41 | Hochladen von Dokument und Metadaten |
| Register Document Set-b | ITI-42 | Registrierung im Registry durch Repository |
| Retrieve Document Set | ITI-43 | Abruf von Dokumenten per eindeutiger ID |

### Metadatenstruktur

Das Registry verwendet **ebXML**-Kodierung für Metadaten. Ein Document Entry enthält unter anderem:

- Patienten-ID
- Dokument-Klassen-Code und Typ-Code
- Erstellungszeitpunkt und Gültigkeitszeitraum
- Einrichtungstyp und Fachrichtung
- Availability Status (approved, deprecated)
- Eindeutiger Dokument-Identifikator (UUID)

Ein **Submission Set** gruppiert zusammengehörige Dokumente einer Einreichung als atomare Transaktion. **Folder** erlauben logische Gruppierungen über mehrere Quellen hinweg.

### Dokumentenlebenszyklus

Neu registrierte Dokumente erhalten den Status `approved`. Wird ein Dokument durch ein neues ersetzt (Replacement-Beziehung), wechselt das alte auf `deprecated`, bleibt aber abfragbar. Die vollständige Löschung liegt außerhalb des XDS-Transaktionsrahmens.

### XDS.b vs. XDS.a

XDS.b ist die aktuelle Version und löst XDS.a ab. Wesentliche Neuerungen: MTOM/XOP für den Dateitransport, Submission-Set-Konzept, formale Dokumentenbeziehungen (Replacement, Addendum, Transformation) und Unterstützung für On-Demand Documents.

### Sicherheitsanforderungen

Alle Akteure müssen mit dem [[IHE]]-Profil ATNA (Audit Trail and Node Authentication) kombiniert werden. Das Consistent-Time-Profil (CT) ist ebenfalls Pflicht für die Synchronisation der Zeitstempel.

### XDS in der ePA

Die [[ePA]]-Komponenten nutzen XDS.b über SOAP-basierte Webservices. Das gematik-GitHub-Repository `ePA-XDS-Document` enthält die konkreten Ressourcen für den XDS Document Service. Für grenzüberschreitende Szenarien (ePA 3.x) wird die Transaktion `CrossGatewayDocumentProvide` verwendet.

## Verknüpfungen

- [[ePA]]: Nutzt XDS als Dokumentenverwaltungsstandard
- [[IHE]]: Herausgeber des XDS-Integrationsprofils
- [[FHIR]]: Wird in der ePA parallel zu XDS für strukturierte Daten eingesetzt
- [[Telematikinfrastruktur]]: Technische Grundlage, in der XDS eingebettet ist
- [[PKI]]: Sicherheitsinfrastruktur für die ATNA-Anforderungen
- [[VAU]]: Vertrauenswürdige Ausführungsumgebung, die Dokumente in der ePA schützt

## Quellen

- [IHE ITI Technical Framework Volume 1, Chapter 10: XDS.b](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html)
- [IHE Wiki: Cross-Enterprise Document Sharing](https://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing)
- [gematik GitHub: ePA-XDS-Document](https://github.com/gematik/ePA-XDS-Document)
- [gemSpec_DM_ePA: XDS-Metadaten für die ePA](https://gemspec.gematik.de/docs/gemSpec/gemSpec_DM_ePA/gemSpec_DM_ePA_V1.53.0/)
