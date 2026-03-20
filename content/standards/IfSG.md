---
title: IfSG - Infektionsschutzgesetz
audience: [technical, non-technical]
tags: [standards, recht, meldewesen, infektionsschutz, demis]
aliases: [IfSG, Infektionsschutzgesetz, Infektionsschutz-Gesetz]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, pflege, apotheke, hersteller, it-dienstleister]
  interests: [compliance, technik]
maturity: wachsend
---

# IfSG - Infektionsschutzgesetz

Das **IfSG (Infektionsschutzgesetz)** ist das zentrale deutsche Bundesgesetz zum Schutz vor Infektionskrankheiten und die Rechtsgrundlage für die Meldepflicht und das digitale Meldesystem [[DEMIS]].

## Erklärt für Einsteiger

Wenn ein Arzt bei einem Patienten eine gefährliche ansteckende Krankheit feststellt, muss er das dem [[OeGD|Gesundheitsamt]] melden. Das ist gesetzlich vorgeschrieben. Das IfSG ist das Gesetz, das diese Pflicht festlegt: Wer muss was melden, an wen, und wie schnell. Mit [[DEMIS]] wird diese Meldung heute digital abgewickelt, statt per Fax oder Brief.

## Überblick

Das Infektionsschutzgesetz trat am 1. Januar 2001 in Kraft und ersetzte das Bundesseuchengesetz. Es regelt alle Maßnahmen zum Schutz der Bevölkerung vor Infektionskrankheiten in Deutschland. Das Gesetz umfasst Meldepflichten, Surveillance, Verhütungsmaßnahmen und Bekämpfungsmaßnahmen.

Das IfSG ist die zentrale Rechtsgrundlage für [[DEMIS]], das Deutsche Elektronische Melde- und Informationssystem für den Infektionsschutz. [[DEMIS]] wurde auf Basis des IfSG entwickelt, um die gesetzlich vorgeschriebene Meldekette zu digitalisieren.

Das Gesetz weist dem [[RKI|Robert Koch-Institut (RKI)]] die koordinierende Rolle für die nationale Krankheitsüberwachung (Surveillance) zu. Das RKI betreibt [[DEMIS]] und ist verantwortlich für die Auswertung und Veröffentlichung der Meldedaten.

Während der COVID-19-Pandemie wurde das IfSG mehrfach geändert und erweitert. Das [[PDSG|Patientendaten-Schutz-Gesetz (PDSG)]] von 2020 schuf zusätzliche Grundlagen für die Digitalisierung des Meldewesens.

## Technische Details

### Zentrale Paragraphen für das Meldewesen

Der dritte Abschnitt des IfSG (§§ 6 bis 15a) regelt das Meldewesen:

| Paragraph | Inhalt |
|---|---|
| **§ 6** | Meldepflichtige Krankheiten: Liste der Erkrankungen, bei denen Ärzte namentlich melden müssen (z.B. Masern, Tuberkulose, Cholera, COVID-19) |
| **§ 7** | Meldepflichtige Nachweise von Krankheitserregern: Liste der Erreger, bei denen Labore namentlich oder nichtnamentlich melden müssen |
| **§ 8** | Meldepflichtige Personen: Ärzte, Labore, Krankenhäuser, Pflegeeinrichtungen, Schulen u.a. |
| **§ 9** | Namentliche Meldung an das Gesundheitsamt, Fristen (in der Regel 24 Stunden) |
| **§ 10** | Nichtnamentliche Meldung (für bestimmte Erreger zum Schutz der Privatsphäre) |
| **§ 11** | Übermittlung der Meldedaten vom Gesundheitsamt an die Landesbehörde und das RKI |
| **§ 13** | Epidemiologische Krankheitsüberwachung, Surveillance |
| **§ 14** | Elektronisches Melde- und Informationssystem: explizite Rechtsgrundlage für [[DEMIS]] |
| **§ 14a** | Interoperabilitätsanforderungen für elektronische Systeme |
| **§ 4** | Aufgaben des [[RKI]]: koordinierende Funktion für nationale Surveillance |

### Meldewege und Fristen

Das IfSG unterscheidet zwei Meldetypen:

- **Namentliche Meldung**: Enthält Name, Adresse und Geburtsdatum der betroffenen Person. Gilt für schwerwiegende oder epidemiologisch relevante Erkrankungen.
- **Nichtnamentliche Meldung**: Pseudonymisiert. Wird für bestimmte Erreger eingesetzt, bei denen der Datenschutz besonders gewichtet wird.

Die Meldefrist beträgt in der Regel 24 Stunden nach Diagnosestellung. Bei besonderen Gefahren können kürzere Fristen gelten.

### Sanktionen

Wer der Meldepflicht nach §§ 6 und 7 IfSG nicht, nicht richtig, nicht vollständig oder nicht rechtzeitig nachkommt, begeht eine Ordnungswidrigkeit. Das Bußgeld beträgt bis zu 25.000 Euro.

> [!interesse-compliance]
> Ärzte, Labore und Krankenhäuser sind nach §§ 6-8 IfSG persönlich meldepflichtig. Meldefrist: in der Regel 24 Stunden nach Diagnosestellung. Seit dem 1. Januar 2024 ist die elektronische Meldung über [[DEMIS]] Pflicht für Labore (§ 7 IfSG). Für Ärzte und Krankenhäuser läuft die Umstellungsfrist. Bußgeld bei Verstößen: bis zu 25.000 Euro. Die Liste der meldepflichtigen Krankheiten und Erreger wird regelmäßig durch das BMG aktualisiert.

### Verbindung zu DEMIS

> [!interesse-technik]
> DEMIS implementiert § 14 IfSG als FHIR R4-basiertes Meldesystem. Meldungen werden als FHIR-Bundle (Composition + Observation-Ressourcen) per HTTPS POST an den DEMIS-Endpunkt des [[RKI]] übermittelt. FHIR-Profile: [simplifier.net/demis](https://simplifier.net/demis). Primärsystem-Integration: KIS- und LIS-Systeme können DEMIS-Meldungen direkt generieren. Das RKI stellt eine Testumgebung und einen FHIR-Validator bereit. Pflichtnutzung für Labore seit 1. Januar 2024 (§ 7 IfSG).

[[DEMIS]] ist die technische Umsetzung der gesetzlichen Anforderungen aus § 14 IfSG. Das System digitalisiert die Meldekette vom meldepflichtigen Arzt oder Labor über das Gesundheitsamt bis zum [[RKI]]. Meldungen werden als [[FHIR]]-Bundle über eine HTTPS-REST-API übermittelt. Die genauen meldepflichtigen Krankheiten und Erreger sind in den §§ 6 und 7 IfSG sowie in der RKI-Falldefinition festgelegt.

## Verknüpfungen

- [[DEMIS]] (digitales Meldesystem, das auf § 14 IfSG basiert)
- [[RKI]] (koordiniert die Surveillance nach § 4 IfSG und betreibt DEMIS)
- [[FHIR]] (technisches Format der elektronischen Meldungen in DEMIS)
- [[Telematikinfrastruktur]] (parallele Infrastruktur; DEMIS ist technisch unabhängig, teilt aber Standards)
- [[KIS]] (Krankenhausinformationssysteme, die DEMIS-Meldungen generieren können)

## Quellen

- [Infektionsschutzgesetz (IfSG) - gesetze-im-internet.de](https://www.gesetze-im-internet.de/ifsg/)
- [RKI: DEMIS - Rechtliche Grundlagen](https://www.rki.de/DE/Content/Infekt/DEMIS/DEMIS_node.html)
- [§ 6 IfSG Meldepflichtige Krankheiten - dejure.org](https://dejure.org/gesetze/IfSG/6.html)
- [Bundesgesundheitsministerium: Elektronische Infektionsmeldung](https://www.bundesgesundheitsministerium.de/themen/digitalisierung/elektronische-infektionsmeldung.html)
