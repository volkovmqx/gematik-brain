---
title: KIG
audience: [technical, non-technical]
tags: [organisation, interoperabilitaet, fhir, gematik, standards]
aliases: [Kompetenzzentrum Interoperabilität im Gesundheitswesen, Kompetenzzentrum für Interoperabilität im Gesundheitswesen]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, regulierung, kasse]
  interests: [technik, compliance]
maturity: setzling
---

# KIG

Das **KIG** (Kompetenzzentrum für Interoperabilität im Gesundheitswesen) ist eine bei der [[gematik]] angesiedelte Stelle, die verbindliche technische Standards, [[FHIR]]-Profile und Interoperabilitätsvorgaben für das deutsche Gesundheitswesen koordiniert und dem Bundesministerium für Gesundheit zur verbindlichen Festsetzung empfiehlt.

## Erklärt für Einsteiger

Stell dir vor, in einem großen Unternehmen kommunizieren alle Abteilungen auf unterschiedlichen Wegen: die einen per E-Mail, die anderen per Fax, wieder andere per Telefon. Damit die Kommunikation funktioniert, braucht es einheitliche Regeln. Das KIG macht genau das für das Gesundheitswesen: Es legt fest, wie Krankenhäuser, Arztpraxen, Apotheken und Krankenversicherungen digital miteinander kommunizieren sollen, damit alle Systeme dieselbe Sprache sprechen.

## Überblick

Das KIG wurde auf Basis des [[DigiG|Digitalgesetzes (DigiG)]] von 2024 gegründet und ist bei der [[gematik]] angesiedelt. Die Rechtsgrundlage bildet § 385 [[SGB-V]]. Das KIG löste die frühere Koordinierungsstelle Interoperabilität (KOS) ab und hat gegenüber dieser deutlich erweiterte Kompetenzen: Es kann dem [[BMG]] die verbindliche Festsetzung von Standards vorschlagen, die dann für alle Marktteilnehmer im Gesundheitswesen gelten.

Das KIG arbeitet eng mit dem **Interop Council** zusammen. Der Interop Council ist ein beratendes Gremium aus Vertretern der Selbstverwaltung, Industrie, Wissenschaft und Zivilgesellschaft, das Empfehlungen für die Priorisierung von Interoperabilitätsthemen gibt. Das KIG setzt diese Empfehlungen in konkrete Spezifikationsarbeit um.

Die Ergebnisse der KIG-Arbeit werden im **[[Interoperabilitaetsverzeichnis|Interoperabilitätsverzeichnis (INA)]]** veröffentlicht. INA ist ein öffentlich zugänglicher Katalog aller von KIG und Interop Council priorisierten Spezifikationen, Profile und Leitfäden.

Im März 2026 veröffentlichte das KIG gemeinsam mit dem Interop Council die IOP-Roadmap für 2026 und 2027. Über 50 Themeneinreichungen wurden per Scoring priorisiert. Aktive Arbeitsgruppen bestehen zu Themen wie Patientenportale, medizinische Register und Notfallversorgung.

> [!interesse-compliance]
> Welche Standards das KIG dem [[BMG]] zur verbindlichen Festsetzung empfiehlt, können für Hersteller von Primärsystemen, KIS, AVS und DiGA zu Pflichtanforderungen werden. Hersteller sollten die IOP-Roadmap und das [[Interoperabilitaetsverzeichnis]] regelmäßig prüfen. Verbindlich festgesetzte Standards müssen in Produkte innerhalb der gesetzten Fristen implementiert werden.

## Technische Details

### Aufgaben des KIG

Das KIG hat folgende Kernaufgaben (§ 385 SGB V):

1. **Bedarfsidentifikation**: Ermittlung des Standardisierungsbedarfs im Gesundheitswesen
2. **Empfehlung**: Empfehlung technischer, semantischer und syntaktischer Standards, Profile, Leitfäden, Informationsmodelle und Referenzarchitekturen
3. **Verbindlichkeitsvorschlag**: Vorschlag an das [[BMG]], bestimmte Standards verbindlich festzusetzen
4. **Konformitätsbewertung**: Prüfung, ob Systeme die empfohlenen Standards korrekt umsetzen
5. **IOP-Roadmap**: Jährliche Veröffentlichung einer Roadmap der priorisierten Interoperabilitätsthemen

### Governance-Struktur

Das KIG arbeitet in einem mehrstufigen Prozess:

- **Themeneinreichungen**: Interessierte Parteien (Verbände, Hersteller, Kassen) können Interoperabilitätsbedarfe einreichen
- **Scoring und Priorisierung**: Interop Council bewertet Einreichungen nach Kriterien wie Dringlichkeit, Nutzen und Machbarkeit
- **Arbeitskreise**: Für priorisierte Themen werden Arbeitskreise eingerichtet, die Spezifikationen erarbeiten
- **Veröffentlichung**: Spezifikationen werden im INA-Portal veröffentlicht

> [!interesse-technik]
> Alle KIG-Spezifikationen werden im INA-Portal der gematik veröffentlicht: [ina.gematik.de](https://www.ina.gematik.de/). FHIR-Profile aus KIG-Arbeitsgruppen erscheinen auf [Simplifier.net/gematik](https://simplifier.net/organization/gematik). Das KIG und der Interop Council haben entschieden, dass eine Migration von FHIR R4 auf R5 für Deutschland nicht erforderlich ist. Die aktuell gültige Basisversion bleibt FHIR R4 (4.0.1).

> [!dev-quickstart] Dev Quickstart: KIG-Spezifikationen abrufen und validieren
> **INA-Portal:** [ina.gematik.de](https://www.ina.gematik.de/): Katalog aller KIG/Interop-Council-priorisierten Spezifikationen.
> **FHIR-Profile auf Simplifier:**
> ```
> GET https://simplifier.net/api/fhir/ImplementationGuide?publisher=gematik
> Accept: application/fhir+json
> ```
> **Konformitätsprüfung mit dem HAPI FHIR Validator:**
> ```bash
> java -jar validator_cli.jar resource.json \
>   -ig de.gematik.isik-basismodul \
>   -version 4.0.1
> ```
> - Aktive KIG-Arbeitsgruppen und ihre FHIR-IGs: [ina.gematik.de/kig/konformitaetsbewertung](https://www.ina.gematik.de/kig/konformitaetsbewertung)
> - FHIR-Basisversion Deutschland: R4 (4.0.1), Migration zu R5 nicht geplant
> - gematik GitHub (alle API-Repos): [github.com/gematik](https://github.com/orgs/gematik/repositories)

### Verbindliche Standards und das Interoperabilitätsverzeichnis

Empfehlungen des KIG, die das [[BMG]] verbindlich festsetzt, werden im [[Interoperabilitaetsverzeichnis]] veröffentlicht. Sie gelten dann für alle betroffenen Systeme im deutschen Gesundheitswesen. Bislang sind die meisten veröffentlichten Standards auf "empfohlen" gesetzt; die Anzahl verbindlicher Standards soll schrittweise zunehmen.

> [!frist-warnung] Frist-Warnung: Verbindliche IOP-Standards nach GIGV
> **Rechtsgrundlage:** § 385 Abs. 1 SGB V i.V.m. § 13 Abs. 1 GIGV (Gesundheits-IT-Interoperabilitäts-Governance-Verordnung, in Kraft seit 14. September 2024, BGBl. I Nr. 253/2024)
> **Mechanismus:** Das KIG empfiehlt dem [[BMG]] Standards zur verbindlichen Festsetzung. Das BMG nimmt diese in Anlage 1 der GIGV auf und legt dabei einen individuellen Stichtag für die Pflichtimplementierung fest. Mit Aufnahme in Anlage 1 beginnt die Implementierungsfrist, unabhängig von einer gesonderten Herstellerkommunikation.
> **Handlungsbedarf:** Hersteller und Betreiber von PVS, KIS, AVS und DiGA sind verpflichtet, Anlage 1 der GIGV sowie das [[Interoperabilitaetsverzeichnis]] (INA unter [ina.gematik.de](https://www.ina.gematik.de/)) fortlaufend zu überwachen und erkannte Implementierungsbedarfe in die Produkt-Roadmap aufzunehmen.
> **Bei Nichtbeachtung:** Systeme, die verbindliche Standards nicht fristgerecht umsetzen, bestehen die Konformitätsbewertung nach GIGV nicht. Dies kann die Zulassung und die Abrechnungsfähigkeit des Produkts gefährden.

> [!klinik-integration] Klinik-Integration: ISiK und KIG-Verbindlichkeit im KIS-Betrieb
> **ISiK als unmittelbare KIG-Konsequenz:** Der [[ISiK]]-Standard (Informationstechnische Systeme im Krankenhaus) ist der wichtigste vom KIG begleitete Standard für Krankenhäuser. ISiK verpflichtet alle KIS-Systeme zu FHIR R4-basierten REST-Schnittstellen. ISiK-Stufe 1 war bis Sommer 2023 umzusetzen, weitere Stufen folgen im Jahrestakt mit je 24 Monaten Übergangsfrist.
>
> **KIS-Anbindung:** Verbreitete Systeme (SAP ISH, Orbis/Dedalus, iMedOne, Nexus) bieten ISiK-konforme Module an. Prüfen Sie beim Hersteller den aktuellen ISiK-Stufenstand und ob ausstehende Updates im Wartungsvertrag enthalten sind.
>
> **Vorausschauende Planung:** Die IOP-Roadmap 2026/2027 nennt Notfallversorgung und Patientenportale als aktive Arbeitsgruppen. Standards aus diesen Gruppen können nach BMG-Festsetzung in Fristen von 12 bis 24 Monaten zur KIS-Pflicht werden. IT-Leitungen sollten das INA-Portal ([ina.gematik.de](https://www.ina.gematik.de/)) halbjährlich auf neue verbindliche Standards prüfen und KIS-Vertragsklauseln zur Update-Pflicht absichern.

### Abgrenzung zu anderen Gremien

| Gremium | Funktion |
|---------|---------|
| **KIG** | Koordinierung, Spezifikationsarbeit, Verbindlichkeitsvorschläge |
| **Interop Council** | Beratung, Priorisierung von Themen |
| **[[KBV]]** | FHIR-Profile für Vertragsarztbereich (z.B. MIO) |
| **[[gematik]]** | TI-Spezifikationen, Betrieb der TI |
| **HL7 Deutschland** | FHIR-Basisprofile für Deutschland |

## Verknüpfungen

- [[gematik]] (Trägerorganisation des KIG)
- [[Interoperabilitaetsverzeichnis]] (INA: Veröffentlichungsplattform für KIG-Standards)
- [[FHIR]] (primäres technisches Format für KIG-Spezifikationen)
- [[DigiG]] (Rechtsgrundlage für die Einrichtung des KIG)
- [[SGB-V]] (§ 385: gesetzliche Grundlage des KIG)
- [[ISiK]] (Krankenhausinteroperabilitätsstandard, vom KIG begleitet)
- [[KBV]] (Kooperationspartner für MIO-Profile)
- [[BMG]] (Adressat der KIG-Verbindlichkeitsempfehlungen)

## Quellen

- [gematik: Interoperabilität im Gesundheitswesen (KIG)](https://www.gematik.de/telematikinfrastruktur/iop)
- [gematik: IOP-Roadmap 2026-2027 (News)](https://www.gematik.de/newsroom/news-detail/iop-roadmap-legt-themen-der-naechsten-zwei-jahre-fest)
- [§ 385 SGB V (Gesetze im Internet)](https://www.gesetze-im-internet.de/sgb_5/__385.html)
