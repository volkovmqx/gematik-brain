---
title: NIS-2
audience: [technical, non-technical]
tags: [standards, sicherheit, regulierung, eu, nis2, kritis, cybersicherheit]
aliases: [NIS2, NIS-2-Richtlinie, Network and Information Security Directive 2, Richtlinie 2022/2555]
relevance:
  sectors: [krankenhaus, hersteller, ti-infrastruktur, it-dienstleister, kasse, regulierung, arztpraxis]
  interests: [compliance, technik]
maturity: setzling
---

# NIS-2

Die **NIS-2-Richtlinie** (EU 2022/2555) ist die EU-Richtlinie zur Netzwerk- und Informationssicherheit, die ab Oktober 2024 den Cybersicherheitsrahmen für kritische und wichtige Einrichtungen in der EU verschärft und für das deutsche Gesundheitswesen weitreichende Pflichten zur Informationssicherheit begründet.

## Erklärt für Einsteiger

Stell dir vor, die EU entscheidet: Alle wichtigen Einrichtungen, also Krankenhäuser, Energieversorger und Behörden, müssen ihre Computer und Netzwerke besser schützen. Wer das nicht tut, muss hohe Geldstrafen zahlen. NIS-2 ist das Gesetz, das diese Anforderungen aufstellt. Es gibt vor, welche Sicherheitsmaßnahmen Minimum sind und wer das überwacht. Deutschland setzt NIS-2 in nationales Recht um, hauptsächlich durch das NIS2UmsuCG (NIS-2-Umsetzungsgesetz).

## Überblick

Die NIS-2-Richtlinie (Richtlinie (EU) 2022/2555) trat am 16. Januar 2023 in Kraft. Die Umsetzungsfrist für EU-Mitgliedstaaten war der **17. Oktober 2024**. Deutschland hat diese Frist nicht eingehalten. Das **NIS-2-Umsetzungs- und Cybersicherheitsstärkungsgesetz (NIS2UmsuCG)** trat erst am **6. Dezember 2025** in Kraft, über 13 Monate nach Ablauf der EU-Frist. Es novelliert im Wesentlichen das BSI-Gesetz (BSIG).

NIS-2 ersetzt die ursprüngliche NIS-Richtlinie (2016/1148) und erweitert den Anwendungsbereich erheblich. Während NIS 1 nur bestimmte Betreiber wesentlicher Dienste erfasste, gilt NIS-2 für eine deutlich größere Zahl von Einrichtungen in 18 Sektoren.

> [!frist-warnung] Frist-Warnung: BSI-Registrierungspflicht nach § 33 BSIG
> **Rechtsgrundlage:** § 33 BSIG n.F. (NIS-2-Umsetzungs- und Cybersicherheitsstärkungsgesetz, NIS2UmsuCG, BGBl. 2025 I Nr. 289, in Kraft seit 6. Dezember 2025)
> **Frist:** Betroffene Einrichtungen, die seit Inkrafttreten des NIS2UmsuCG am 6. Dezember 2025 unter die Pflicht fallen, mussten sich bis zum 6. März 2026 beim BSI registrieren (drei Monate ab Inkrafttreten, § 33 Abs. 1 BSIG). Das BSI-Registrierungsportal ist seit 6. Januar 2026 aktiv.
> **Handlungsbedarf:** Krankenhäuser, Gesundheitsdienstleister, Labore und IT-Dienstleister für Gesundheitseinrichtungen ab 50 Mitarbeitern oder 10 Millionen Euro Jahresumsatz müssen prüfen, ob sie als wesentliche oder wichtige Einrichtung einzustufen sind, und sich unverzüglich beim BSI unter bsi.bund.de/nis2 registrieren. Gleichzeitig ist ein 24/7-erreichbarer NIS-2-Kontaktpunkt zu benennen.
> **Bei Nichtbeachtung:** Das BSI prüft seit März 2026 aktiv, welche Einrichtungen sich nicht registriert haben. Sanktionen: bis zu 10 Millionen Euro oder 2 % des weltweiten Jahresumsatzes für wesentliche Einrichtungen; bis zu 7 Millionen Euro oder 1,4 % für wichtige Einrichtungen.

### Relevanz für das Gesundheitswesen

Im Gesundheitssektor erfasst NIS-2 unter anderem:

- **Krankenhäuser und Kliniken** ab einer bestimmten Größe
- **Gesundheitsdienstleister** mit digitaler Infrastruktur (Labore, Bildgebungseinrichtungen)
- **Hersteller von Medizinprodukten** mit Kritikalitätsrelevanz
- **IT-Dienstleister** für Gesundheitseinrichtungen
- **Pharmazeutische Industrie** (in Deutschland weitgehend über [[KRITIS-Dachgesetz]] geregelt)

NIS-2 greift eng mit dem deutschen [[KRITIS-Dachgesetz]] ineinander, das am 29. Januar 2026 vom Bundestag und am 6. März 2026 vom Bundesrat beschlossen wurde und die physische Resilienz kritischer Infrastrukturen regelt. Für Gesundheitseinrichtungen, die unter beide Regelwerke fallen, bilden NIS-2 und das KRITIS-Dachgesetz zusammen den vollständigen regulatorischen Rahmen.

> [!klinik-integration] Klinik-Integration: NIS-2-Schwellenwerte für Krankenhäuser
> **Wer ist betroffen:** Krankenhäuser gelten in Deutschland grundsätzlich als wesentliche Einrichtungen im Sinne von NIS-2 und unterliegen dem NIS2UmsuCG. Als Faustregel gilt: Krankenhäuser mit mindestens 30.000 stationären Behandlungsfällen pro Jahr waren bereits nach dem alten KRITIS-Recht erfasst. Das neue BSIG weitet den Kreis aus: Einrichtungen ab 50 Mitarbeitern oder 10 Millionen Euro Jahresumsatz im Gesundheitssektor fallen jetzt unter "wichtige Einrichtungen". Das betrifft auch kleinere Fachkliniken und Reha-Einrichtungen.
>
> **Registrierungspflicht:** Die Registrierung beim BSI musste bis spätestens 6. März 2026 erfolgen (drei Monate nach Inkrafttreten des NIS2UmsuCG am 6. Dezember 2025). Wer noch nicht registriert ist, sollte dies unverzüglich nachholen. Das BSI prüft seit März 2026 aktiv auf fehlende Registrierungen.
>
> **Verhältnis zum [[KHZG]]:** Krankenhäuser, die KHZG-Förderung für IT-Sicherheit (Fördertatbestand 10) erhalten haben, sind gut aufgestellt: Die geforderten ISMS-Maßnahmen decken viele NIS-2-Anforderungen bereits ab. Lücken bestehen typischerweise bei der formalisierten Lieferkettensicherheit und den BSI-Meldeprozessen.

> [!interesse-compliance] Wer ist betroffen und was muss getan werden?
> NIS-2 unterscheidet zwischen **wesentlichen Einrichtungen** (essential entities) und **wichtigen Einrichtungen** (important entities). Im Gesundheitssektor gelten Krankenhäuser als wesentliche Einrichtungen. Die Pflichten:
> - Risikomanagement für Cybersicherheit einführen und dokumentieren
> - Sicherheitsvorfälle innerhalb von **24 Stunden** an das [[BSI]] melden (Erstmeldung), innerhalb von **72 Stunden** Folgebericht
> - Abschlussbericht binnen eines Monats
> - Geschäftsleitungen haften persönlich bei schwerwiegenden Verstößen
> - Mindestmaßnahmen aus Art. 21 NIS-2: Risikobewertung, Lieferkettensicherheit, Zugriffskontrolle, Verschlüsselung, Incident Response, Business Continuity
> - Registrierungspflicht beim BSI: Das BSI-Meldeportal ist seit 6. Januar 2026 aktiv; betroffene Einrichtungen müssen sich dort registrieren
>
> Sanktionen: Wesentliche Einrichtungen bis 10 Millionen Euro oder 2 % des weltweiten Jahresumsatzes.

### Abgrenzung zu ISO 27001 und KRITIS

NIS-2 schreibt keine spezifischen Standards vor, akzeptiert aber [[ISO-27001]] als Nachweis für die Erfüllung der Risikomanagementanforderungen. Viele Einrichtungen kombinieren:

- **ISO 27001**: Informationssicherheitsmanagementsystem (ISMS) als Grundlage
- **NIS-2**: Gesetzliche Mindestanforderungen und Meldepflichten
- **[[KRITIS-Dachgesetz]]**: Physische und organisatorische Resilienz

Einrichtungen, die bereits ein ISMS nach ISO 27001 betreiben, erfüllen viele NIS-2-Anforderungen bereits. Zusätzlich kommen spezifische NIS-2-Pflichten wie die Meldefristen und die Lieferkettensicherheit hinzu.

## Technische Details

### Mindestmaßnahmen nach Art. 21 NIS-2

Art. 21 der NIS-2-Richtlinie schreibt konkrete technische und organisatorische Maßnahmen vor:

1. **Risikoanalyse und Sicherheit für Informationssysteme** (Risikobasierter Ansatz)
2. **Bewältigung von Sicherheitsvorfällen** (Incident Response)
3. **Business Continuity** und Krisenmanagement
4. **Lieferkettensicherheit**: Prüfung von Lieferanten und Dienstleistern
5. **Sicherheit beim Erwerb, Entwicklung und Wartung** von Netz- und Informationssystemen
6. **Risikobewertungsmaßnahmen** für das Zugangsmanagement
7. **Kryptografie und Verschlüsselung** als Standardmaßnahme
8. **Personalsicherheit** und Zugriffskontrolle
9. **Multi-Faktor-Authentifizierung** (MFA) und gesicherte Kommunikation
10. **Schulung und Sensibilisierung** der Mitarbeiter

> [!klinik-integration] Klinik-Integration: NIS-2-Maßnahmen im Krankenhaus-IT-Betrieb
> **Besondere Herausforderung Krankenhaus:** NIS-2 fordert Business Continuity (Punkt 3) und Incident Response (Punkt 2) für einen 24/7-Betrieb. Im Krankenhaus bedeutet das: Ein Ransomware-Angriff auf das KIS darf den Klinikbetrieb nicht zum Stillstand bringen. Planen Sie explizite Downtime-Prozeduren (Papierformulare, Notfallzugänge zu Medikamentenlisten) und testen Sie diese mindestens einmal jährlich.
>
> **Lieferkettensicherheit (Punkt 4) im KIS-Kontext:** Alle KIS-Hersteller, RIS-Anbieter, PACS-Betreiber und externe IT-Dienstleister müssen als Lieferanten bewertet werden. Fordern Sie von Ihren Anbietern schriftliche Nachweise über deren eigene NIS-2-Konformität oder ISO-27001-Zertifizierung. Integrieren Sie diese Anforderung in neue Vertragsverhandlungen und laufende Verträge bei der nächsten Verlängerung.
>
> **MFA und TI-Zugang (Punkt 9):** Die Telematikinfrastruktur setzt für den ePA- und E-Rezept-Zugang bereits auf HBA und SMC-B als Hardware-Token. Das erfüllt die MFA-Anforderung für TI-Anwendungen. Für den allgemeinen KIS-Zugang (Stationsarbeitsplätze, VPN-Zugang) muss MFA separat konfiguriert werden.

### Meldesystem

Das NIS-2-Meldesystem in Deutschland ist beim [[BSI]] angesiedelt. Meldepflichten:

- **Frühwarnung innerhalb 24 Stunden**: Verdacht auf erheblichen Sicherheitsvorfall
- **Meldung innerhalb 72 Stunden**: Bewertung, ob ein Sicherheitsvorfall vorliegt
- **Abschlussbericht binnen 1 Monat**: Analyse, Ursachen, Gegenmaßnahmen

Ein Sicherheitsvorfall ist erheblich, wenn er erhebliche Auswirkungen auf die Bereitstellung der Dienste hat oder hätte haben können.

### NIS-2 und die Telematikinfrastruktur

Für die [[Telematikinfrastruktur]] gilt: Die [[gematik]] und die Betreiber von TI-Diensten (Fachdienste, Aktensysteme) fallen unter NIS-2 als Anbieter von IKT-Diensten. TI-Konnektor- und TI-Gateway-Hersteller sind als wichtige Einrichtungen im Sektor "Informations- und Kommunikationstechnologien" erfasst.

> [!interesse-technik] NIS-2-Compliance für TI-Anbieter
> TI-Anbieter, die unter NIS-2 fallen, müssen:
> - ISMS aufbauen (ISO 27001 als bewährte Grundlage)
> - BSI-Registrierungsportal nutzen: [bsi.bund.de/nis2](https://www.bsi.bund.de)
> - Technische Maßnahmen aus Art. 21 dokumentieren (Risikobewertung, Patch-Management, MFA, Verschlüsselung)
> - Lieferantensicherheit nachweisen: Zulieferer von sicherheitsrelevanten Komponenten müssen bewertet werden
> - Vorfallsmeldungen über das BSI-Meldeportal einrichten
>
> Empfohlene Standards als Nachweis: ISO 27001:2022, BSI IT-Grundschutz, [[BSI-C5]] (für Cloud-Dienste).

> [!dev-quickstart] Dev Quickstart: NIS-2-Compliance technisch umsetzen
> Betroffene TI-Anbieter und Hersteller müssen Art. 21 NIS-2 (§ 30 BSIG) technisch implementieren.
>
> Registrierung beim BSI (Pflicht bis 06.03.2026): [mein.bsi.bund.de](https://mein.bsi.bund.de)
>
> Technische Mindestmaßnahmen für Softwareprodukte (Art. 21 Abs. 2 NIS-2):
> - **MFA**: Alle Administratorzugänge und privilegierten Konten absichern
> - **Verschlüsselung**: TLS 1.2+ für alle Verbindungen, AES-256 für Daten at rest
> - **Patch-Management**: CVE-Monitoring, definierte Patch-Fristen (kritisch: 24–72 h)
> - **Logging**: Sicherheitsrelevante Ereignisse aufzeichnen, min. 12 Monate aufbewahren
> - **Lieferkette**: SBOM (Software Bill of Materials) für eingesetzte Bibliotheken führen
>
> Incident-Response-Meldung (§ 32 BSIG):
> - Frühwarnung: innerhalb 24 h an BSI via [mein.bsi.bund.de](https://mein.bsi.bund.de)
> - Folgebericht: innerhalb 72 h
> - Abschlussbericht: innerhalb 1 Monat
>
> Anerkannte Nachweise: ISO 27001:2022, BSI IT-Grundschutz, BSI-C5 (Cloud)
> BSI IT-Grundschutz-Kompendium: [bsi.bund.de/grundschutz](https://www.bsi.bund.de/grundschutz)

### Verhältnis zum nationalen Recht

Deutschland hat NIS-2 mit dem NIS2UmsuCG in Recht umgesetzt, das das BSI-Gesetz (BSIG) grundlegend novelliert. Das neue BSIG enthält:

- Definierte Schwellenwerte für wesentliche und wichtige Einrichtungen
- Registrierungspflichten beim BSI
- Meldepflichten und Mindestmaßnahmen nach Art. 21 NIS-2
- Verschärfte Sanktionen und persönliche Haftung der Geschäftsführung

## Verknüpfungen

- [[KRITIS]] (deutsches Recht für kritische Infrastrukturen; NIS-2 ist EU-rechtliche Entsprechung)
- [[KRITIS-Dachgesetz]] (komplementäres deutsches Gesetz zur physischen Resilienz)
- [[ISO-27001]] (ISMS-Standard; gilt als Nachweis für NIS-2-Anforderungen)
- [[BSI]] (nationale Behörde für Cybersicherheit; zuständig für NIS-2-Aufsicht und Meldungen)
- [[BSI-C5]] (Cloud-Sicherheitsrahmen; baut auf ISO 27001 und NIS-2 auf)
- [[gematik]] (TI-Betreiber; fällt als wesentliche Einrichtung unter NIS-2)
- [[Telematikinfrastruktur]] (TI-Anbieter unterliegen NIS-2-Pflichten)
- [[ePA]] (Aktensystembetreiber unterliegen NIS-2 und weiteren Sicherheitsanforderungen)
- [[KHZG]] (KHZG-Empfänger müssen ISMS betreiben; NIS-2 ergänzt diese Pflicht)

## Quellen

- [EU: Richtlinie 2022/2555 (NIS-2) - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022L2555)
- [BSI: NIS-2-Umsetzung in Deutschland](https://www.bsi.bund.de/DE/Themen/Regulierung-und-Zertifizierung/NIS2-Umsetzung/nis2-umsetzung_node.html)
- [Wikipedia: NIS-2-Richtlinie](https://de.wikipedia.org/wiki/NIS-2-Richtlinie)
- [OpenKRITIS: NIS-2 Richtlinie](https://www.openkritis.de/recht/nis2-richtlinie.html)
