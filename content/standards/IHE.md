---
title: IHE
audience: [technical]
tags: [standards, interoperabilität, dokumentenaustausch, IHE]
aliases: [Integrating the Healthcare Enterprise, IHE International, IHE-D]
relevance:
  sectors: [krankenhaus, hersteller, ti-infrastruktur]
  interests: [technik]
maturity: immergruen
---

# IHE

IHE (Integrating the Healthcare Enterprise) ist eine internationale Initiative, die konkrete Implementierungsprofile für etablierte Standards entwickelt, damit Gesundheitssysteme interoperabel miteinander kommunizieren können.

## Erklärt für Einsteiger

Stell dir vor, viele verschiedene Länder sprechen Englisch, aber jedes Land nutzt andere Redewendungen und Abkürzungen. IHE ist wie ein gemeinsames Wörterbuch für Computersysteme im Gesundheitswesen. Es legt nicht neue Regeln fest, sondern erklärt genau, wie bestehende Regeln richtig angewendet werden sollen. So können ein Krankenhaus in München und eine Praxis in Hamburg dieselben Dokumente austauschen, ohne sich vorher absprechen zu müssen.

## Überblick

IHE wurde 1998 gemeinsam von der RSNA (Radiological Society of North America) und der HIMSS (Healthcare Information and Management Systems Society) gegründet. Ziel war es, die Fragmentierung im Bereich der medizinischen Bildgebung zu überwinden. Heute ist IHE International eine globale Organisation mit nationalen Mitgliedsorganisationen in über zwanzig Ländern.

IHE entwickelt keine neuen Standards, sondern veröffentlicht sogenannte Integrationsprofile. Ein Integrationsprofil beschreibt, wie bestehende Standards wie [[FHIR]], [[HL7|HL7]] v2, HL7 v3 oder [[DICOM]] in einem konkreten klinischen Anwendungsfall zusammenspielen. Jedes Profil definiert Akteure, Transaktionen und Anforderungen.

Die Arbeit ist in Domänen gegliedert: IT Infrastructure (ITI), Radiology, Pathology and Laboratory, Cardiology und weitere. Die technischen Spezifikationen werden im sogenannten Technical Framework veröffentlicht.

In Deutschland ist IHE Deutschland e.V. (IHE-D) die nationale Mitgliedsorganisation, mit Sitz in Berlin. IHE-D koordiniert die Umsetzung von IHE-Profilen im deutschen Gesundheitswesen und beteiligt sich an der Entwicklung von Implementierungsleitfäden. Die [[ePA]] und verwandte Dienste der [[Telematikinfrastruktur]] nutzen IHE-Konzepte, insbesondere aus dem Bereich IT Infrastructure.

Die Qualitätssicherung erfolgt über sogenannte Connectathons: herstellerübergreifende Testveranstaltungen, bei denen Systeme verschiedener Anbieter ihre Interoperabilität live unter Beweis stellen.

## Technische Details

### Integrationsprofile (Auswahl)

IHE IT Infrastructure definiert die meisten Profile, die im deutschen Kontext relevant sind:

| Profil | Kürzel | Zweck |
|---|---|---|
| Cross-Enterprise Document Sharing | [[XDS]] | Einrichtungsübergreifendes Dokumentenmanagement |
| Cross-Community Access | XCA | Dokumentenaustausch zwischen IHE-Affinity-Domains |
| Mobile Access to Health Documents | MHD | FHIR-basierter Dokumentenabruf für mobile Geräte |
| Patient Identifier Cross-referencing | PIX/PIXm | Abgleich von Patienten-IDs über Systemgrenzen |
| Patient Demographics Query | PDQ/PDQm | Suche nach Patienten über demografische Merkmale |
| Cross-Enterprise User Authentication | XUA | Nutzeridentität über Systemgrenzen mit SAML |
| Audit Trail and Node Authentication | ATNA | Audit-Protokollierung und Knotenidentität |
| Healthcare Provider Directory | HPD | Verzeichnis von Leistungserbringern |
| Mobile Care Services Discovery | mCSD | FHIR-basiertes Verzeichnis von Einrichtungen und Diensten |

### Technical Framework

Der IHE Technical Framework gliedert sich in Volumes:

- **Volume 1**: Integrationsprofil-Beschreibung (Akteure, klinischer Kontext)
- **Volume 2**: Transaktionsdefinitionen (Nachrichten, Protokolle, Inhalte)
- **Volume 3**: Inhalts-Profile (Dokumentenformate, Metadaten)

Alle Spezifikationen sind frei zugänglich unter `profiles.ihe.net`.

### Akteure und Transaktionen

Jedes IHE-Profil besteht aus Akteuren und Transaktionen zwischen ihnen. Beispiel für [[XDS]]:

- **Document Source** stellt Dokumente bereit (sendet ITI-41)
- **Document Registry** verwaltet Metadaten (empfängt ITI-42)
- **Document Consumer** ruft Dokumente ab (sendet ITI-18, ITI-43)

Hersteller deklarieren, welche Akteure ihr Produkt implementiert. Das ermöglicht standardisierte Integrationstests.

> [!interesse-technik]
> Alle IHE-Spezifikationen sind frei zugänglich unter [profiles.ihe.net](https://profiles.ihe.net). Für die ePA sind besonders relevant: XDS.b (ITI-41, ITI-18, ITI-43), MHD (ITI-65, ITI-66, ITI-67, ITI-68) und ATNA (ITI-20). Connectathons als Interoperabilitätstests finden jährlich statt, organisiert von IHE-D für den deutschsprachigen Raum.

> [!klinik-integration] Klinik-Integration: IHE-Profile im KIS-Betrieb
> IHE-Profile sind für Krankenhäuser nicht nur durch die ePA relevant, sondern auch durch [[ISiK]] (Informationstechnische Systeme in Krankenhäusern), das gematik-Mandat für KIS-Interoperabilität nach § 373 SGB V.
>
> **XDS im Krankenhaus:** Große Kliniken und Klinikverbünde setzen XDS.b für das einrichtungsinterne oder -übergreifende Dokumentenmanagement ein. Das [[KIS]] agiert dabei als Document Source (ITI-41) und Document Consumer (ITI-18, ITI-43). Fragen Sie bei Ihrem KIS-Hersteller, ob eine zertifizierte XDS.b-Implementierung vorliegt.
> **PIX/PDQ für Patientenidentifikation:** Krankenhäuser mit mehreren Systemen (KIS, RIS, LIS, PDMS) benötigen einen Patienten-Master-Index (EMPI). PIX (ITI-8/ITI-44) verknüpft Patienten-IDs über Systemgrenzen, PDQ (ITI-21) ermöglicht demographische Suchanfragen. Diese Profile sind besonders relevant bei Fusionen und Verbundstrukturen.
> **ISiK und ATNA:** ISiK Stufe 3 schreibt die Audit-Protokollierung nach ATNA vor. Das bedeutet, Ihre [[KIS]]-Schnittstelle muss Zugriffsprotokoll-Ereignisse (ITI-20) an einen zentralen Audit-Repository-Server senden. Das ist gleichzeitig eine Anforderung aus dem KRITIS-ISMS-Rahmen.

> [!dev-quickstart] Dev Quickstart: IHE MHD Dokument hochladen und abrufen
> **ITI-65 Provide Document Bundle** (Dokument einstellen, FHIR R4):
> ```bash
> POST https://epa-hcpo.example.ti-dienste.de/epa/basic/api/v1/fhir
> Authorization: Bearer <IDP-Access-Token>
> Content-Type: application/fhir+json
>
> # Body: FHIR Bundle vom Typ "transaction" mit DocumentReference + Binary
> # Profil: IHE MHD ITI-65, Minimal Metadata Option
> ```
> **ITI-68 Retrieve Document** (Dokument abrufen per URL aus DocumentReference):
> ```bash
> GET <DocumentReference.content.attachment.url>
> Authorization: Bearer <IDP-Access-Token>
> Accept: application/pdf   # oder application/fhir+json je nach Dokumenttyp
> ```
> - MHD-Spezifikation v4.2.3: [profiles.ihe.net/ITI/MHD](https://profiles.ihe.net/ITI/MHD/)
> - Alle IHE ITI-Profile: [profiles.ihe.net/ITI](https://profiles.ihe.net/ITI/)
> - GitHub: [IHE/ITI.MHD](https://github.com/IHE/ITI.MHD)
> - IHE-D Connectathon (jährlich, deutschsprachiger Raum): [ihe-d.de](https://www.ihe-d.de/)

### IHE in der deutschen Telematikinfrastruktur

Die [[ePA]] nutzt XDS.b als Dokumentenverwaltungsgrundlage. Konkret verwendet die ePA die Transaktionen ITI-41 (Provide and Register), ITI-18 (Registry Stored Query) und ITI-43 (Retrieve Document Set). Metadaten folgen dem XDS-Datenmodell mit ebXML-Kodierung.

Das MHD-Profil wird für FHIR-basierte Zugriffe auf Dokumente eingesetzt, insbesondere in Szenarien, in denen mobile Apps oder Primärsysteme ohne vollständigen XDS-Stack auf Dokumente zugreifen.

Das ATNA-Profil ist in der [[ePA]] verpflichtend für Audit-Protokollierung.

## Verknüpfungen

- [[XDS]]: Das wichtigste IHE-Profil für das deutsche Dokumentenmanagement
- [[ePA]]: Nutzt IHE-Profile (XDS, MHD, ATNA) als technische Basis
- [[FHIR]]: Technische Grundlage für neuere IHE-Profile (MHD, PDQm, PIXm)
- [[ISiK]]: Ergänzt IHE-Interoperabilitätsstandards im Krankenhausbereich
- [[Telematikinfrastruktur]]: Eingebettete Infrastruktur, die IHE-Konzepte nutzt
- [[PKI]]: Sicherheitsinfrastruktur für ATNA-Anforderungen

## Quellen

- [IHE IT Infrastructure Technical Framework](https://profiles.ihe.net/ITI/)
- [IHE International – Über IHE](https://www.ihe.net/)
- [IHE Deutschland e.V.](https://www.ihe-d.de/)
- [IHE Profile Publikationen](https://profiles.ihe.net/)
