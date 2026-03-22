---
title: KHZG
audience: [technical, non-technical]
tags: [standards, recht, krankenhaus, digitalisierung, förderung, KIS]
aliases: [Krankenhauszukunftsgesetz, Krankenhaus-Zukunfts-Gesetz, KHZF]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, kasse]
  interests: [compliance, business]
maturity: wachsend
---

# KHZG

Das Krankenhauszukunftsgesetz (KHZG) ist ein deutsches Bundesgesetz aus dem Jahr 2020, das über den Krankenhauszukunftsfonds (KHZF) 4,3 Milliarden Euro für die Digitalisierung und Modernisierung von Krankenhäusern bereitstellt.

## Erklärt für Einsteiger

Viele Krankenhäuser in Deutschland arbeiteten bis 2020 noch mit veralteten Computersystemen, Papierdokumentation und fehlenden digitalen Prozessen. Das KHZG ist ein staatliches Förderprogramm, das Krankenhäusern Geld gibt, damit sie sich modernisieren können. Ähnlich wie ein Renovierungszuschuss für alte Häuser half das KHZG Krankenhäusern, in digitale Systeme zu investieren, die Patienten, Personal und Kommunikation verbessern.

## Überblick

Das KHZG trat am 29. Oktober 2020 in Kraft. Der Bund stellte 3 Milliarden Euro aus der Liquiditätsreserve des Gesundheitsfonds bereit. Länder und Krankenhausträger mussten mindestens 30 Prozent der jeweiligen Projektkosten selbst tragen, wodurch das Gesamtvolumen auf bis zu 4,3 Milliarden Euro anstieg.

Krankenhäuser beantragten Fördermittel bei den zuständigen Landesbehörden. Anträge mussten bis zum 31. Dezember 2021 gestellt werden. Nicht abgerufene Bundesmittel verfielen Ende 2023.

Die Förderung zielte auf elf Fördertatbestände (FTB), die im Wesentlichen in zwei Bereiche fallen: Digitalisierung von Patientenprozessen und IT-Sicherheit.

> [!interesse-compliance]
> Krankenhäuser, die KHZG-Mittel erhielten, sind verpflichtet, ab dem 1. Januar 2025 ein [[ISMS|ISMS nach ISO 27001 oder BSI-Grundschutz]] zu betreiben. Diese Pflicht gilt unabhängig von der Unternehmensgröße. Außerdem ist die ISiK-Stufe 3 (Pflichttermin 01.07.2025) Voraussetzung für bestimmte [[KHSFV]]-Fördermaßnahmen. Nicht umgesetzte Anforderungen können zur Rückforderung von Fördermitteln führen.

## Technische Details

### Fördertatbestände

Das KHZG und die zugehörige Krankenhauszukunftsfonds-Verordnung (KHZFV) definierten elf Fördertatbestände:

| Nr. | Fördertatbestand |
|-----|-----------------|
| 1 | [[Patientenportal|Patientenportale]] (Online-Aufnahme, digitale Patientenkommunikation) |
| 2 | Klinische Entscheidungsunterstützungssysteme |
| 3 | Automatisierung von Krankenhausprozessen |
| 4 | Digitale Pflege- und Behandlungsdokumentation |
| 5 | Digitales Medikationsmanagement |
| 6 | Digitale Leistungsanforderung und -rückmeldung (z.B. Labore, Radiologie) |
| 7 | Digitale Infrastruktur (WLAN, Vernetzung) |
| 8 | IT-Sicherheit |
| 9 | Telemedizin-Netzwerke |
| 10 | Digitale Notaufnahme |
| 11 | Robotik in Pflege und Versorgung |

Mindestens 15 Prozent der Fördermittel mussten für IT-Sicherheitsmaßnahmen (FTB 8) verwendet werden.

> [!klinik-integration] Klinik-Integration: Welche Fördertatbestände welche KIS-Module betreffen
> Die elf Fördertatbestände haben unterschiedliche KIS- und Infrastrukturanforderungen. Für IT-Leiter relevante Übersicht:
>
> **FTB 1 (Patientenportal):** Erfordert ISiK-Stufe-1-Bestätigung für das KIS-Aufnahmesystem. Schnittstellen: HL7 FHIR (Patient, Encounter, Appointment). Anbindung des Portals ans KIS via REST-API.
> **FTB 4 (Pflegedokumentation) und FTB 5 (Medikationsmanagement):** ISiK-Stufe-2- bzw. -Stufe-3-Bestätigung erforderlich. FHIR-Ressourcen: MedicationStatement, Condition, Observation. Prüfen Sie, ob Pflegedokumentationssystem und KIS über ISiK-konforme Schnittstellen kommunizieren.
> **FTB 6 (Leistungsanforderung):** Labor-LIS und Radiologie-RIS müssen ISiK-Module für Anforderung und Rückmeldung bereitstellen. Nachricht: HL7 v2 ORU^R01 (Laborbefund) oder FHIR DiagnosticReport je nach KIS-Generation.
> **FTB 10 (Digitale Notaufnahme):** KIS-Anbindung der Notaufnahme mit ADT-Nachrichtenfluss (HL7 ADT^A01/A08) und ISiK-Encounter. Besonderheit: Auch ohne VSDM-Prüfung muss die Notaufnahme systemseitig dokumentieren können. Ausfallkonzept für TI-Ausfall vorsehen.

### IT-Sicherheitspflicht

Krankenhäuser, die KHZG-Mittel erhielten, sind verpflichtet, ab dem 1. Januar 2025 ein [[ISMS|Information Security Management System (ISMS)]] nach anerkannten Standards ([[ISO-27001|ISO 27001]] oder BSI-Grundschutz) zu betreiben. Diese Pflicht gilt unabhängig von der Unternehmensgröße und betrifft auch Häuser, die keine [[KRITIS]]-Einrichtungen sind. Das [[BSI]] spielt dabei eine beratende Rolle.

> [!frist-warnung] Frist-Warnung: ISMS-Pflicht seit 1. Januar 2025 für KHZG-Empfänger
> **Rechtsgrundlage:** § 75c SGB V i.d.F. des KHZG (BGBl. I 2020 Nr. 46) i.V.m. § 14a Abs. 2 KHG
> **Frist:** Seit 1. Januar 2025 sind alle Krankenhäuser, die KHZG-Fördermittel erhalten haben, verpflichtet, ein ISMS nach ISO 27001 oder dem branchenspezifischen Sicherheitsstandard B3S (DKG) zu betreiben.
> **Handlungsbedarf:** Die verantwortliche Stelle muss den Betrieb eines ISMS gegenüber der zuständigen Landesbehörde und dem Bundesamt für Soziale Sicherung (BAS) nachweisen können. Zertifizierungsnachweise oder Eigenerklärungen nach B3S sind aufzubewahren. BSI-Grundschutz-Bausteine SYS.1.1 (Server), NET.1.1 (Netzarchitektur) und ORP.4 (Identitätsmanagement) sind für Krankenhäuser besonders relevant.
> **Bei Nichtbeachtung:** Rückforderung ausgezahlter KHZG-Fördermittel durch das BAS möglich. Bis zu 2% Digitalisierungsabschlag auf DRG-Erlöse bei nachgewiesenen Mängeln.

### Zusammenhang mit ISiK

Das KHZG schuf einen Förderrahmen, der eng mit dem [[ISiK]]-Standard verzahnt ist. Viele geförderte Digitalisierungsvorhaben betreffen die Schnittstellen zwischen [[KIS|Krankenhausinformationssystemen (KIS)]] und anderen Subsystemen. [[ISiK]] definiert, wie diese Systeme interoperabel kommunizieren müssen.

Konkret: Krankenhäuser, die KHZG-Mittel für [[Patientenportal|Patientenportale]], digitale Dokumentation oder Medikationsmanagement einsetzen, mussten ISiK-konforme Schnittstellen bereitstellen. Die ISiK-Stufe 3 (Pflichttermin 01.07.2025) ist als Nachweis für die Interoperabilität der geförderten Systeme relevant.

> [!klinik-integration] Klinik-Integration: ISiK-Module im KIS aktivieren und betreiben
> ISiK Stufe 3 definiert verpflichtende FHIR R4-Schnittstellen für folgende KIS-Funktionen: Patientenstammdaten, Encounter (Aufnahme/Entlassung), Diagnosen (ICD-10-GM), Prozeduren (OPS), Medikation, Laborbefunde, Terminplanung und Pflegedokumentation.
>
> **KIS-seitige Umsetzung:** Die meisten großen KIS-Hersteller (SAP ISH, Orbis/Dedalus, iMedOne, Nexus) haben ISiK-Stufe-1- und -Stufe-2-Bestätigungen erhalten. Für Stufe 3 (Pflichttermin 01.07.2025) stehen Updates bereit oder wurden bereits ausgerollt. Prüfen Sie die aktuelle Bestätigung Ihres KIS im gematik-Bestätigungsverfahren und planen Sie das Update in Ihren Change-Management-Prozess ein.
> **Betrieb:** FHIR-REST-APIs laufen typischerweise auf dedizierten KIS-Application-Servern (Port 443, TLS). Stellen Sie sicher, dass die ISiK-Endpunkte in Ihr Verfügbarkeitsmonitoring eingebunden sind. Für den Produktivbetrieb wird ein redundantes Setup empfohlen, da Ausfälle der FHIR-Schnittstelle Patientenportal und Subsysteme beeinträchtigen.
> **Sicherheit:** ISiK-Endpunkte dürfen nur authentifizierten internen Systemen zugänglich sein. Kein direkter Internetzugang. Zugriffskontrolle über OAuth 2.0 oder SMART on FHIR gemäß ISiK-Spezifikation.

### Digitalisierungsreife-Messung

Das KHZG schrieb eine Evaluierung der Digitalisierungsreife der geförderten Krankenhäuser vor:
- Zum 30. Juni 2021 (Ausgangsmessung)
- Zum 30. Juni 2024 (Abschlussmessung)

Das EMRAM-Modell (Electronic Medical Record Adoption Model) des HIMSS-Instituts diente als verbreitetes Referenzmodell für die Bewertung. Krankenhäuser, die keine Fortschritte nachwiesen, riskierten Rückforderungen.

> [!frist-warnung] Frist-Warnung: KHZG-Schlussnachweise bis 31. August 2026 an das BAS
> **Rechtsgrundlage:** § 14a Abs. 5 KHG i.V.m. § 19 KHSFV (Nachweispflichten gegenüber dem Bundesamt für Soziale Sicherung)
> **Frist:** Bis 31. August 2026 müssen mindestens 75% der geförderten Projekte vollständig umgesetzt und die Schlussnachweise durch die Bundesländer beim Bundesamt für Soziale Sicherung (BAS) eingereicht sein. Länderspezifische Vorlauffristen (z.B. Bayern: 1. Dezember 2025) sind zu beachten.
> **Handlungsbedarf:** Krankenhäuser müssen die Schlussnachweise für abgeschlossene KHZG-Projekte fristgerecht bei der zuständigen Landesbehörde einreichen. Dazu gehören Verwendungsnachweise, Rechnungsbelege und Nachweise zur Digitalisierungsreife (EMRAM-Messung) sowie zur ISMS-Implementierung.
> **Bei Nichtbeachtung:** Nicht fristgerecht nachgewiesene Projekte können als nicht umgesetzt gewertet werden; eine Rückforderung der Bundesmittel durch das BAS ist möglich.

### Abgrenzung zum KHSFV

Das KHZG schuf den Förderfonds (KHZF). Die [[KHSFV|Krankenhaus-Strukturfonds-Verfahrensverordnung (KHSFV)]] regelt Folgeanforderungen an Interoperabilität im Kontext des regulären [[KHG|Krankenhausstrukturgesetzes (KHG)]]. ISiK-Bestätigungen sind seit Stufe 3 Voraussetzung für bestimmte KHSFV-Fördermaßnahmen nach § 21 Abs. 2 KHSFV.

> [!interesse-business]
> Das KHZG mobilisierte mit 4,3 Milliarden Euro das größte Digitalisierungsprogramm in der Geschichte der deutschen Krankenhausversorgung. Für Hersteller von KIS, Patientenportalen, Medikationssystemen und IT-Sicherheitslösungen entstand dadurch ab 2021 ein massiver Nachfrageschub. Auch nach Abschluss der Förderphase bleiben die durch KHZG eingeführten ISiK-Pflichten und ISMS-Anforderungen dauerhaft bestehen und bilden eine wiederkehrende Nachfrage nach Wartung, Updates und Zertifizierungsdienstleistungen.

### Nachfolgegesetzgebung

Das KHZG war ein einmaliges Investitionsprogramm. Die nachfolgende Krankenhausreform ([[KHVVG|Krankenhausversorgungsverbesserungsgesetz, KHVVG]], 2024) setzt auf strukturelle Veränderungen der Vergütung statt auf direkte Investitionsförderung. Die durch KHZG angestoßene Digitalisierungspflicht bleibt als dauerhafte Anforderung erhalten.

## Verknüpfungen

- [[KIS]]: Hauptempfänger der KHZG-Fördermittel für Digitalisierung
- [[ISiK]]: Interoperabilitätsstandard, der eng mit KHZG-Anforderungen verknüpft ist
- [[ePA]]: Krankenhäuser müssen ePA-Schnittstellen aufbauen, teils KHZG-gefördert
- [[FHIR]]: Technische Grundlage für die ISiK-Interoperabilität aus dem KHZG-Kontext
- [[BSI]]: Beratende Rolle bei der ISMS-Pflicht nach KHZG
- [[SGB-V]]: Krankenhausfinanzierung und ISiK-Anforderungen nach § 373 SGB V
- [[gematik]]: Führt ISiK-Bestätigungen durch, die mit KHZG-Vorhaben verknüpft sind
- [[KHVVG]]: Nachfolgegesetz mit strukturellen Vergütungsreformen

## Quellen

- [Bundesgesundheitsministerium: Krankenhauszukunftsgesetz](https://www.bundesgesundheitsministerium.de/krankenhauszukunftsgesetz)
- [Bundesgesundheitsministerium: KHZG – Fördertatbestände](https://www.bundesgesundheitsministerium.de/themen/krankenhaus/khzg)
- [Gesetze im Internet: KHZG](https://www.gesetze-im-internet.de/khzg/)
- [gematik: ISiK und KHZG-Zusammenhang](https://www.gematik.de/anwendungen/isik)
