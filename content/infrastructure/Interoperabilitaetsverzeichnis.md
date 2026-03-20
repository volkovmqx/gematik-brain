---
title: Interoperabilitätsverzeichnis
audience: [technical, non-technical]
tags: [infrastruktur, interoperabilität, standards, gematik, sgb-v]
aliases: [Interoperabilitätsverzeichnis, IOP-Verzeichnis, Interoperabilitäts-Verzeichnis]
relevance:
  sectors: [hersteller, krankenhaus, arztpraxis, it-dienstleister, regulierung, ti-infrastruktur]
  interests: [compliance, technik, business]
maturity: wachsend
---

# Interoperabilitätsverzeichnis

Das **Interoperabilitätsverzeichnis** ist das vom Bundesministerium für Gesundheit ([[BMG]]) und der [[gematik]] geführte öffentliche Verzeichnis der verbindlichen Interoperabilitätsstandards im deutschen Gesundheitswesen nach § 385 [[SGB-V]].

## Erklärt für Einsteiger

Im deutschen Gesundheitswesen gibt es viele verschiedene Computersysteme: Praxissoftware, Krankenhaussoftware, Apothekensysteme, Laborsysteme. Damit diese Systeme miteinander reden können, brauchen sie gemeinsame Sprachen und Regeln. Das Interoperabilitätsverzeichnis ist die offizielle Liste dieser Regeln: Hier steht, welche Standards alle nutzen müssen, damit Daten korrekt ausgetauscht werden können. Wie bei einem Baukastensystem: Nur wenn alle dasselbe System nutzen, passen die Teile zusammen.

## Überblick

Das Interoperabilitätsverzeichnis wurde mit dem [[E-Health-Gesetz]] (2015) erstmals gesetzlich verankert. Die ursprüngliche Fassung verpflichtete die [[gematik]], ein öffentliches Verzeichnis der in der [[Telematikinfrastruktur]] genutzten Standards zu erstellen.

Mit dem [[DigiG]] (2024) und der Einführung von § 385 [[SGB-V]] wurde das Verzeichnis grundlegend reformiert und seine Rechtswirkung gestärkt. Das Interoperabilitätsverzeichnis ist seitdem nicht mehr nur eine Informationssammlung, sondern ein verbindliches Regelwerk: Standards, die dort aufgeführt sind, müssen von betroffenen Systemen und Einrichtungen umgesetzt werden.

### Rechtsgrundlage

§ 385 SGB V beauftragt das [[BMG]] und die [[gematik]], gemeinsam das Interoperabilitätsverzeichnis zu führen. Es enthält:

- Verbindliche Interoperabilitätsstandards für bestimmte Anwendungsfälle
- Festlegungen zu Fristen und Geltungsbereichen
- Technische Normen, Kommunikationsstandards und Datenformate

Das Verzeichnis wird öffentlich zugänglich gemacht. Hersteller von [[Primärsystem|Primärsystemen]] ([[PVS]], [[KIS]], [[AVS]]) können anhand des Verzeichnisses prüfen, welche Standards sie implementieren müssen.

### Verhältnis zu ISiK und anderen Spezifikationen

Das Interoperabilitätsverzeichnis ist übergeordnet: Es benennt, welche Standards verbindlich sind. Die konkreten technischen Details sind dann in den jeweiligen Spezifikationen festgelegt, z.B. in der [[ISiK]]-Spezifikation für Krankenhäuser oder in den [[FHIR]]-Profilen der [[gematik]] für die TI.

Das [[KHAG|Krankenhausreformanpassungsgesetz (KHAG, 2026)]] verweist explizit auf das Interoperabilitätsverzeichnis als Grundlage für die digitalen Mindestanforderungen für Krankenhäuser. Ab September 2026 müssen Krankenhäuser die dort verankerten Interoperabilitätsstandards nachweislich erfüllen.

## Technische Details

### Inhalt und Struktur

Das Interoperabilitätsverzeichnis ist nach Anwendungsbereichen strukturiert. Typische Einträge enthalten:

- **Anwendungsfall**: z.B. "Datenaustausch zwischen KIS und Patientenportal"
- **Verbindlicher Standard**: z.B. "ISiK Stufe 3, FHIR R4"
- **Geltungsbereich**: Welche Einrichtungen oder Systemtypen betroffen sind
- **Inkrafttreten**: Ab wann der Standard verbindlich gilt
- **Verweis**: Link zur Spezifikation oder Norm

### Kompetenzzentrum Interoperabilität (KIG)

Eng mit dem Interoperabilitätsverzeichnis verbunden ist das **Kompetenzzentrum Interoperabilität im Gesundheitswesen (KIG)**, das bei der [[gematik]] angesiedelt ist. Das KIG:

- Koordiniert die inhaltliche Entwicklung des Verzeichnisses
- Betreibt den **Interop Council**: ein Gremium aus Vertretern von Herstellern, Leistungserbringern und Kostenträgern
- Veröffentlicht eine jährliche IOP-Roadmap mit Themen für kommende Standardisierungsarbeiten
- Führt offene Konsultationen zu neuen Standards durch

Im März 2026 veröffentlichte das KIG die IOP-Roadmap 2026-2027. Priorisierte Themen: Patientenportale, Medizinische Register und Notfallversorgung.

### Verbindlichkeit und Sanktionen

Standards im Interoperabilitätsverzeichnis haben nach ihrer Aufnahme Verbindlichkeitscharakter. Die Durchsetzung erfolgt über verschiedene Mechanismen:

- **Fördervoraussetzungen**: Systeme, die nicht dem Verzeichnis entsprechen, können von staatlichen Förderprogrammen (z.B. KHZG, KHSFV) ausgeschlossen werden.
- **Zulassungsvoraussetzungen**: Für TI-Dienste und -Komponenten ist die Übereinstimmung mit dem Verzeichnis Voraussetzung für die gematik-Zulassung.
- **Abrechnungsvoraussetzungen**: Nicht-konforme Systeme können zu Abrechnungskürzungen führen (z.B. DRG-Abschläge für Krankenhäuser nach KHAG).

> [!interesse-compliance]
> § 385 SGB V: Verbindliches Interoperabilitätsverzeichnis. KHAG (2026): Krankenhäuser müssen Interoperabilitätsstandards aus dem Verzeichnis bis September 2026 erfüllen. ISiK Stufe 3: verbindlich bis 30.06.2026. Systeme ohne Verzeichnis-Konformität riskieren Ausschluss von Förderprogrammen und Zulassungsverlust.

> [!interesse-technik]
> Das Verzeichnis ist öffentlich einsehbar über das gematik-Fachportal. Technische Basis der meisten enthaltenen Standards: [[FHIR]] R4. Neue Standards werden über das KIG und den Interop Council entwickelt. IOP-Roadmap für 2026/2027 auf gematik.de veröffentlicht (März 2026).

> [!interesse-business]
> Das Interoperabilitätsverzeichnis schafft Planungssicherheit für Hersteller: Wer die dort gelisteten Standards implementiert, erfüllt die gesetzlichen Anforderungen. Die IOP-Roadmap signalisiert, welche Standards in den nächsten 1-2 Jahren verbindlich werden. Frühzeitige Implementierung kann Wettbewerbsvorteile schaffen.

## Verknüpfungen

- [[gematik]] (führt das Verzeichnis gemeinsam mit dem BMG)
- [[BMG]] (gemeinsam mit gematik verantwortlich für das Verzeichnis)
- [[SGB-V]] (§ 385: Rechtsgrundlage für das Interoperabilitätsverzeichnis)
- [[ISiK]] (zentraler KIS-Standard; im Interoperabilitätsverzeichnis gelistet)
- [[FHIR]] (technische Basis der meisten Interoperabilitätsstandards im Verzeichnis)
- [[E-Health-Gesetz]] (erste gesetzliche Verankerung eines Interoperabilitätsverzeichnisses, 2015)
- [[DigiG]] (reformierte das Verzeichnis 2024 grundlegend)
- [[KIS]] (Krankenhaussysteme müssen Verzeichnis-Standards erfüllen)
- [[PVS]] (Praxissoftware; Standards aus dem Verzeichnis für ambulanten Bereich)
- [[HL7]] (HL7-FHIR als Basis vieler enthaltener Standards)
- [[IHE]] (IHE-Integrationsprofile können im Verzeichnis gelistet sein)

## Quellen

- [gematik: Interoperabilitätsverzeichnis](https://www.gematik.de/telematikinfrastruktur/iop)
- [§ 385 SGB V: Interoperabilitätsverzeichnis – gesetze-im-internet.de](https://www.gesetze-im-internet.de/sgb_5/__385.html)
- [gematik: IOP-Roadmap 2026-2027](https://www.gematik.de/newsroom/news-detail/iop-roadmap-legt-themen-der-naechsten-zwei-jahre-fest)
- [gematik: Kompetenzzentrum Interoperabilität (KIG)](https://www.gematik.de/telematikinfrastruktur/interoperabilitaet)
