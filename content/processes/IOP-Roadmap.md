---
title: IOP-Roadmap
audience: [technical, non-technical]
tags: [prozesse, interoperabilitaet, gematik, kig, standards, governance]
aliases: [Interoperabilitäts-Roadmap, IOP Roadmap, Interop-Roadmap, gematik Interoperabilitätsroadmap]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, regulierung]
  interests: [technik, business]
maturity: wachsend
---

# IOP-Roadmap

Die **IOP-Roadmap** (Interoperabilitäts-Roadmap) ist das jährlich vom [[KIG|gematik Interop Council (KIG)]] veröffentlichte Planungsdokument, das für die kommenden zwei Jahre priorisierte Interoperabilitätsthemen und konkrete Umsetzungsmaßnahmen für das deutsche Gesundheitswesen festlegt.

## Erklärt für Einsteiger

Stell dir vor, viele verschiedene Software-Systeme im Krankenhaus, in der Arztpraxis und in der Apotheke sollen miteinander reden können. Dafür braucht es gemeinsame Regeln. Die IOP-Roadmap ist der Fahrplan, der festlegt, welche dieser gemeinsamen Regeln in den nächsten Jahren entwickelt, vereinheitlicht oder verbindlich gemacht werden. Wer mitredet: Krankenhäuser, Software-Hersteller, Ärzte, Krankenkassen und Fachleute aus über 260 Organisationen. Was herauskommt: ein verbindlicher Plan, auf den sich alle einstellen können.

## Überblick

Die IOP-Roadmap entsteht im Rahmen des **[[KIG|Kompetenzzentrums für Interoperabilität im Gesundheitswesen (KIG)]]** der [[gematik]]. Seit dem [[DigiG|Digitalgesetz (DigiG, 2024)]] hat die gematik den gesetzlichen Auftrag, Interoperabilität im deutschen Gesundheitswesen zu koordinieren und verbindliche Standards zu setzen.

Die Roadmap wird gemeinsam vom **Interop Council** und dem **IOP-Expertenzirkel** erarbeitet. Der Interop Council ist ein interdisziplinäres Gremium aus Vertretern aller Versorgungsbereiche: Krankenhäuser, Arztpraxen, Krankenkassen, Software-Hersteller, Pflegeeinrichtungen und Patientenorganisationen. Der Expertenzirkel besteht aus über 260 Fachleuten, die in thematischen Arbeitsgruppen die inhaltlichen Grundlagen erarbeiten.

### Entstehung und Rhythmus

Die IOP-Roadmap folgt einem festen Jahresrhythmus:

1. **Herbst**: Themeneinreichung und Priorisierungsworkshops im Expertenzirkel
2. **Winter**: Konsolidierung der Themen durch den Interop Council, Abstimmung mit dem BMG
3. **Frühjahr**: Veröffentlichung der Roadmap für das laufende und das Folgejahr
4. **Laufend**: Umsetzungsmonitoring und Anpassungen

Die Roadmap deckt einen rollierenden Zweijahreshorizont ab. Themen werden in drei Kategorien eingeteilt: Themen in der **Erarbeitung** (Standards werden entwickelt), in der **Umsetzung** (Standards werden implementiert) und **abgeschlossene** Themen.

### Rechtliche Verbindlichkeit

Die gematik kann auf Basis der IOP-Roadmap über das **[[Interoperabilitaetsverzeichnis|Interoperabilitätsverzeichnis]]** bestimmte Standards für verbindlich erklären. Verpflichtende Standards müssen von Herstellern in zertifizierten Primärsystemen ([[PVS]], [[KIS]], [[AVS]]) implementiert werden. Die Verbindlichkeit wird über die [[ISiK]]-Zertifizierung oder über gesonderte Festlegungen der gematik nach § 385 [[SGB-V|SGB V]] durchgesetzt.

> [!interesse-business]
> Die IOP-Roadmap ist für Software-Hersteller das wichtigste Planungsdokument für ihre Entwicklungs-Roadmaps. Themen, die auf der IOP-Roadmap stehen, werden in der Regel innerhalb von 12 bis 24 Monaten verbindlich. Hersteller, die frühzeitig implementieren, können Interoperabilitätstest-Events (Connectathons) nutzen, um ihre Implementierungen zu validieren. Die Roadmap 2026/2027 fokussiert auf FHIR-Reifegrad-Erhöhung, Terminologieserver-Integration und grenzüberschreitenden Datenaustausch ([[EHDS]]-Vorbereitung).

## Technische Details

### Thematische Schwerpunkte der IOP-Roadmap 2026/2027

Die aktuelle Roadmap (Stand 2026) priorisiert folgende Themenblöcke:

| Themenbereich | Kerninhalt | Beteiligte Standards |
|---|---|---|
| FHIR-Reifegrad | Übergang von IHE-XDS zu MHD/FHIR für alle Dokumentenaustauschprozesse | [[FHIR]], [[IHE]], [[XDS]] |
| Terminologieserver | Verbindliche Nutzung des nationalen [[Terminologieserver|Terminologieservers]] für Codes und Valueset | [[SNOMED-CT]], [[LOINC]], [[ICD-10-GM]] |
| [[ISiK]]-Weiterentwicklung | ISiK Stufe 4 (Medikationsprozesse, Terminplanung) | [[FHIR]] R4 |
| [[EHDS]]-Readiness | Technische Vorbereitung für den Europäischen Gesundheitsdatenraum | [[MyHealthAtEU]], Patient Summary |
| DiGA/[[ePA]] Integration | Standardisierte Datentransferprofile für DiGA in die ePA | [[MIO]], [[FHIR]] |
| Labordaten | Verbindliches FHIR-Profil für Laborergebnisse (Vernetzung LIS-KIS-ePA) | [[LDT]], [[FHIR]], [[LOINC]] |

### Verbindlichkeitsgrade

Die IOP-Roadmap verwendet drei Verbindlichkeitsstufen:

1. **Empfehlung**: Nutzung wird empfohlen, keine Pflicht
2. **Soll-Anforderung**: Umsetzung erwartet, Abweichungen bedürfen Begründung
3. **Muss-Anforderung**: Verpflichtend, Nachweis über Zertifizierung

> [!interesse-technik]
> Die IOP-Roadmap und Arbeitsergebnisse des Interop Councils werden auf dem gematik GitHub und im [[Interoperabilitaetsverzeichnis|gematik Interoperabilitätsverzeichnis]] (registry.gematik.de) veröffentlicht. FHIR-Implementierungsleitfäden aus IOP-Roadmap-Projekten erscheinen auf simplifier.net unter dem Publisher "gematik" oder "KBV". Aktuelle Roadmap-Dokumente: gematik.de/anwendungen/interoperabilitaet. IOP-Expertenzirkel-Teilnahme: offener Bewerbungsprozess über gematik.de.

> [!dev-quickstart] Dev Quickstart: IOP-FHIR-Pakete laden und INA-Testevents nutzen
> FHIR-Implementierungsleitfäden aus IOP-Roadmap-Projekten per npm-kompatibler FHIR-Paket-Registry laden:
> ```bash
> # FHIR-Paket eines IOP-Roadmap-Projekts installieren (Beispiel: ISiK Basismodul v4)
> fhir install de.gematik.isik-basismodul 4.0.0 --registry https://packages.simplifier.net
>
> # Alle gematik-publizierten Pakete auf Simplifier auflisten
> curl -s "https://packages.simplifier.net/catalog?publisher=gematik" | jq '.[].name'
>
> # Ressource gegen IOP-Roadmap-Profil validieren (HAPI CLI)
> java -jar validator_cli.jar resource.json \
>   -version 4.0.1 \
>   -ig de.gematik.isik-basismodul#4.0.0
> ```
> IOP-Testevents:
> - gematik INA (Interoperabilitäts-Navigator): [ina.gematik.de](https://www.ina.gematik.de) - Working Groups und Connectathon-Termine
> - IHE Europe Connectathon (jährlich): Testen von MHD, XDS, FHIR-Profilen gegen andere Implementierungen
> - Anmeldung IOP-Expertenzirkel: [gematik.de/anwendungen/interoperabilitaet](https://www.gematik.de/anwendungen/interoperabilitaet)
> - Simplifier gematik-Publisher: [simplifier.net/organization/gematik](https://simplifier.net/organization/gematik)

### Governance-Prozess

Der Interop Council trifft Entscheidungen nach dem Konsensprinzip. Strittige Fragen werden durch Abstimmung mit qualifizierter Mehrheit entschieden. Die gematik moderiert den Prozess und hat ein Vetorecht bei Themen, die gesetzliche Pflichten betreffen.

Das Verfahren ist transparent: Alle Einreichungen, Priorisierungsentscheide und Abstimmungsergebnisse werden dokumentiert und veröffentlicht. Stakeholder, die nicht im Interop Council vertreten sind, können über den Expertenzirkel oder öffentliche Kommentierungsrunden Einfluss nehmen.

## Verknüpfungen

- [[KIG]] (Kompetenzzentrum für Interoperabilität der gematik: organisiert die IOP-Roadmap)
- [[Interoperabilitaetsverzeichnis]] (Verzeichnis verbindlicher Interoperabilitätsstandards)
- [[gematik]] (herausgebende und koordinierende Organisation)
- [[DigiG]] (gesetzliche Grundlage für den gematik-Interoperabilitätsauftrag)
- [[ISiK]] (technischer Rahmen für KIS-Interoperabilität, durch IOP-Roadmap gesteuert)
- [[FHIR]] (Kerntechnologie der IOP-Roadmap-Themen)
- [[EHDS]] (europäischer Rahmen, für den IOP-Roadmap Readiness schafft)
- [[Terminologieserver]] (IOP-Roadmap-Thema: verbindliche Terminologie-Governance)
- [[IHE]] (internationale Profile, die in der IOP-Roadmap referenziert werden)
- [[KHAG]] (Krankenhausgesetz-Anforderungen, die IOP-Roadmap-Themen definieren)

## Quellen

- [gematik: Interoperabilität und IOP-Roadmap](https://www.gematik.de/telematikinfrastruktur/interoperabilitaet)
- [gematik: Interop Council und KIG](https://www.gematik.de/anwendungen/interoperabilitaet/interop-council)
- [Gesetze im Internet: § 385 SGB V (gematik-Aufgaben Interoperabilität)](https://www.gesetze-im-internet.de/sgb_5/__385.html)
- [Wikipedia: Interoperabilität im Gesundheitswesen](https://de.wikipedia.org/wiki/Interoperabilit%C3%A4t_(Gesundheitswesen))
