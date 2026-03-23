---
title: KRITIS
audience: [technical, non-technical]
tags: [konzept, sicherheit, bsi, recht, infrastruktur]
aliases: [Kritische Infrastrukturen, KRITIS-DachG, Kritische Infrastruktur]
maturity: wachsend
relevance:
  sectors: [krankenhaus, ti-infrastruktur, it-dienstleister, regulierung]
  interests: [compliance, technik]
---

# KRITIS

**KRITIS** (Kritische Infrastrukturen) bezeichnet Einrichtungen und Systeme, deren Ausfall oder Beeinträchtigung erhebliche Auswirkungen auf die öffentliche Sicherheit, Versorgung oder Gesundheit hätte. Die Betreiber unterliegen besonderen gesetzlichen Sicherheitspflichten.

## Erklärt für Einsteiger

Stell dir vor, das Stromnetz fällt aus, Krankenhäuser können keine Patienten mehr versorgen und Trinkwasser kommt nicht mehr aus dem Hahn. Solche Einrichtungen nennt man Kritische Infrastrukturen. Der Staat legt fest, welche Unternehmen so wichtig sind, dass sie besondere Sicherheitsmaßnahmen treffen müssen. Wenn ein Angriff oder ein Unfall diese Einrichtungen lahmlegt, wären Millionen Menschen betroffen. Deshalb müssen sie sich besser schützen als normale Unternehmen.

## Überblick

KRITIS-Betreiber unterliegen in Deutschland zwei gesetzlichen Rahmenwerken: dem **BSI-Gesetz (BSIG)** für digitale Sicherheit und dem neueren **[[KRITIS-Dachgesetz]] (KRITIS-DachG)** für die physische Resilienz.

Zehn Sektoren gelten als kritisch: Energie, Transport und Verkehr, Bankwesen, Finanzmarktinfrastrukturen, Gesundheit, Trinkwasser, Abwasser, Digitale Infrastruktur, Weltraum und Lebensmittel. Diese Sektoren orientieren sich am Anhang der EU-CER-Richtlinie (EU 2022/2557), weichen aber in Details ab.

Im **Gesundheitssektor** fallen folgende Einrichtungen in den KRITIS-Scope:
- Krankenhäuser ab **30.000 stationären Fällen** pro Jahr
- Labore und Apotheken ab bestimmten Versorgungsschwellen
- Einrichtungen der pharmazeutischen Produktion
- Betreiber der [[Telematikinfrastruktur]], darunter die [[gematik]]

> [!interesse-compliance]
> Krankenhäuser mit über 30.000 stationären Fällen pro Jahr gelten als KRITIS-Betreiber. Sie müssen sich voraussichtlich ab Mitte 2026 beim BSI registrieren, eine Risikoanalyse vorlegen und ein ISMS nach ISO 27001 oder BSI IT-Grundschutz betreiben. Sicherheitsvorfälle müssen unverzüglich gemeldet werden. Betreiber der Telematikinfrastruktur (TI-Gateway-Anbieter, VPN-Zugangsdienst-Anbieter) unterliegen bereits jetzt den KRITIS-Anforderungen nach BSIG.

### KRITIS-DachG

Das **[[KRITIS-Dachgesetz]]** wurde am **29. Januar 2026** vom Bundestag und am **6. März 2026** vom Bundesrat verabschiedet. Es setzt die EU-Richtlinie **CER (Critical Entities Resilience Directive, EU 2022/2557)** in deutsches Recht um und ergänzt das bisherige digitale KRITIS-Recht um Anforderungen an die physische Widerstandsfähigkeit.

Kernanforderungen des KRITIS-DachG:
- **Registrierung**: KRITIS-Betreiber müssen sich voraussichtlich ab Mitte 2026 beim [[BSI]] registrieren.
- **Risikoanalyse**: Betreiber müssen kritische Abhängigkeiten und Risiken dokumentieren.
- **Resilienzmaßnahmen**: Physische Schutzmaßnahmen (Zutrittskontrollen, Redundanzen) sind nachzuweisen.
- **Meldepflicht**: Sicherheitsvorfälle, die den Betrieb erheblich beeinträchtigen, müssen gemeldet werden.

> [!frist-warnung] Frist-Warnung: NIS-2-Registrierungspflicht und KRITIS-DachG-Fristen
> **Rechtsgrundlage:** § 33 BSIG (NIS2UmsuCG, in Kraft seit 6. Dezember 2025) für die NIS-2-Registrierung; KRITIS-DachG (verabschiedet 6. März 2026) für die physische Resilienz
> **Fristen:**
> - **NIS-2-Registrierung:** Die Registrierung beim BSI nach dem NIS2UmsuCG war bis zum **6. März 2026** zu erbringen. Einrichtungen im Gesundheitssektor, die als wesentliche oder wichtige Einrichtungen eingestuft sind, müssen ihre Registrierung unverzüglich nachholen, sofern noch nicht erfolgt.
> - **KRITIS-DachG-Registrierung:** KRITIS-Betreiber nach dem neuen KRITIS-DachG müssen sich beim BSI voraussichtlich ab **17. Juli 2026** registrieren (Umsetzungsfrist aus der CER-Richtlinie). Die genaue Frist wird durch die noch ausstehende Rechtsverordnung konkretisiert.
> **Handlungsbedarf:** Prüfen Sie, ob Ihre Einrichtung als wesentliche oder wichtige Einrichtung nach NIS-2 gilt (Krankenhäuser mit mehr als 50 Mitarbeitern oder mehr als 10 Mio. Euro Jahresumsatz im Gesundheitssektor). Nutzen Sie das BSI-Registrierungsportal. Bereiten Sie die KRITIS-DachG-Risikoanalyse und Resilienzmaßnahmen vor.
> **Bei Nichtbeachtung:** Bußgelder nach § 60 BSIG bis zu 10 Millionen Euro oder 2 % des weltweiten Jahresumsatzes bei wesentlichen Einrichtungen.

### NIS-2-Richtlinie und BSIG

Parallel dazu gilt die **[[NIS-2]]-Richtlinie (Network and Information Security)**, die durch eine Novelle des BSI-Gesetzes umgesetzt wurde. NIS-2 erweitert den Kreis der verpflichteten Einrichtungen erheblich: Auch mittlere und große Unternehmen in kritischen Sektoren, darunter viele Gesundheitsdienstleister, fallen nun unter die Anforderungen. NIS-2 unterscheidet zwischen **wesentlichen Einrichtungen** (essential entities, höhere Anforderungen) und **wichtigen Einrichtungen** (important entities).

## Technische Details

### Anforderungen nach BSIG

Klassische KRITIS-Betreiber nach BSIG müssen:

1. **Technische und organisatorische Maßnahmen (TOMs)** zum Schutz ihrer IT-Systeme und Kommunikationsinfrastruktur umsetzen (§ 8a BSIG).
2. Alle **zwei Jahre** den Nachweis der umgesetzten Maßnahmen gegenüber dem [[BSI]] erbringen, durch Audits, Prüfungen oder Zertifizierungen.
3. **Sicherheitsvorfälle** erheblicher Wirkung unverzüglich dem [[BSI]] melden (§ 8b BSIG).
4. Ein **[[ISMS]]** (Informationssicherheits-Managementsystem) betreiben, häufig zertifiziert nach [[ISO-27001|ISO 27001]] oder [[BSI-IT-Grundschutz|BSI IT-Grundschutz]].

> [!interesse-technik]
> KRITIS-Betreiber im TI-Umfeld müssen technische und organisatorische Maßnahmen (TOMs) nach § 8a BSIG umsetzen. Konkret: ISMS-Betrieb (ISO 27001 oder BSI IT-Grundschutz), regelmäßige Audits (alle 2 Jahre beim BSI nachweisen), Meldung erheblicher Sicherheitsvorfälle über das BSI-Portal, und für TI-Gateway-Betreiber zusätzlich die gematik-spezifischen Sicherheitsanforderungen aus gemSpec_Net_TI.

> [!dev-quickstart] Dev Quickstart: BSI IT-Grundschutz++ Automatisierung (OSCAL/JSON)
> BSI IT-Grundschutz++ (ab 2026) stellt Anforderungen als maschinenlesbare JSON-Objekte bereit.
> Community-Repository auf GitHub (BSI):
> ```bash
> # Grundschutz++-Bausteine als JSON abrufen (GitHub, BSI)
> curl -s https://api.github.com/repos/BSI-Grundschutz/it-grundschutz/releases/latest \
>   | jq '.assets[] | select(.name | endswith(".json")) | .browser_download_url'
> ```
> - Format: OSCAL-kompatibles JSON (automatische Integration in CI/CD-Pipelines möglich)
> - BSI-Meldung von Sicherheitsvorfällen: [BSI-Portal Meldestelle](https://www.bsi.bund.de/meldestelle)
> - ISMS-Tooling (zertifiziert für BSI IT-Grundschutz): HiScout, Verinice, fuentis Suite
> - BSI IT-Grundschutz-Kompendium 2023 (PDF): [BSI-GS-Kompendium Edition 2023](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/IT_Grundschutz_Kompendium_Edition2023.pdf)
> - BSI KRITIS-Regulierung: [bsi.bund.de/kritis](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/Kritische-Infrastrukturen/kritis_node.html)

### Relevanz für die Telematikinfrastruktur

Die [[Telematikinfrastruktur]] ist als kritische Infrastruktur eingestuft. Die [[gematik]] als Betreiberin der zentralen TI-Dienste und zugelassene Anbieter von TI-Diensten (z.B. [[TI-Gateway]]-Betreiber, [[VPN-Zugangsdienst]]-Anbieter) unterliegen den KRITIS-Anforderungen. Konkret bedeutet das:

- Pflicht zur BSI-Registrierung und regelmäßigen Sicherheitsaudits
- Meldung von Sicherheitsvorfällen, die den TI-Betrieb beeinträchtigen (z.B. Ausfälle wie der RISE-Ausfall vom März 2026)
- ISMS-Pflicht für Betreiber zentraler TI-Dienste

> [!klinik-integration] Klinik-Integration: KRITIS-Pflichten im Krankenhaus-IT-Betrieb
> Krankenhäuser ab 30.000 vollstationären Fällen pro Jahr sind seit 2019 als KRITIS-Betreiber eingestuft. Mit dem KRITIS-DachG (in Kraft seit März 2026) kommen zusätzliche Pflichten zur physischen Resilienz hinzu.
>
> **Registrierung und Kontaktstelle:** Registrierung beim BSI verpflichtend (voraussichtlich ab Mitte 2026). Das Krankenhaus muss eine Kontaktstelle beim BSI benennen, die für Meldungen und Rückfragen erreichbar ist. Verantwortlich ist üblicherweise der IT-Leiter oder ein dedizierter CISO.
> **ISMS-Pflicht:** Betrieb eines Informationssicherheits-Managementsystems nach ISO 27001 oder BSI IT-Grundschutz. Der branchenspezifische Sicherheitsstandard B3S Medizinische Versorgung (Version 1.3.1, Stand Januar 2026) ist der anerkannte Umsetzungsrahmen für Krankenhäuser. Alle zwei Jahre ist ein Nachweis der umgesetzten Maßnahmen gegenüber dem BSI zu erbringen (Audit oder Zertifizierung).
> **TI-relevante Systeme im ISMS-Scope:** Der [[Highspeed-Konnektor]] oder das [[TI-Gateway]], der [[KIM]]-Client im [[KIS]] und die ePA-Anbindung sind als kritische IT-Systeme im ISMS zu dokumentieren. Ausfälle dieser Systeme, die den Klinikbetrieb erheblich beeinträchtigen, sind meldepflichtig.
> **NIS-2-Erweiterung:** Krankenhäuser unterhalb der KRITIS-Schwelle (unter 30.000 Fälle) können trotzdem als "wichtige Einrichtungen" nach NIS-2 verpflichtet sein, sofern sie die Größenschwellen (ab 50 Mitarbeiter oder 10 Mio. Euro Umsatz) überschreiten.

Krankenhäuser, die die Schwelle von 30.000 stationären Fällen überschreiten, müssen neben den TI-Sicherheitsanforderungen auch die KRITIS-Auflagen erfüllen. Das [[KHZG]] förderte Investitionen in IT-Sicherheit, die teilweise auch KRITIS-Anforderungen adressieren.

### Sektorschwellen im Gesundheitsbereich

Die genauen Schwellenwerte für den Gesundheitssektor sind in der **BSI-KritisV (KRITIS-Verordnung)** festgelegt:

| Einrichtungstyp | Schwellenwert |
|---|---|
| Krankenhäuser | ab 30.000 vollstationäre Fälle/Jahr |
| Labore | ab bestimmten Untersuchungsvolumina |
| Arzneimittelgroßhandel | ab definierten Versorgungsanteilen |
| TI-Betreiber | gesondert durch BSIG geregelt |

## Verknüpfungen

- [[BSI]] (Bundesamt für Sicherheit in der Informationstechnik; nimmt Meldungen entgegen, erteilt Zulassungen)
- [[Telematikinfrastruktur]] (als KRITIS eingestufte Infrastruktur)
- [[gematik]] (Betreiberin der TI; unterliegt KRITIS-Anforderungen)
- [[TI-Gateway]] (TI-Gateway-Betreiber unterliegen KRITIS-Pflichten)
- [[KHZG]] (förderte IT-Sicherheitsinvestitionen in Krankenhäusern)
- [[DSGVO]] (Datenschutz-Anforderungen ergänzen KRITIS-Sicherheitsanforderungen)

## Quellen

- [BSI: KRITIS-Regulierung](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/Kritische-Infrastrukturen/kritis_node.html)
- [KRITIS-Dachgesetz (KRITIS-DachG) – Bundesrat](https://www.bundesrat.de/DE/plenum/bundesrat-kompakt/26/1062/1062-node.html)
- [BSI-KRITIS-Verordnung](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KRITIS/BSI-KritisV.html)
- [Wikipedia: Kritische Infrastruktur](https://de.wikipedia.org/wiki/Kritische_Infrastruktur)
