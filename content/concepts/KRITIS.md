---
title: KRITIS
audience: [technical, non-technical]
tags: [konzept, sicherheit, bsi, recht, infrastruktur]
aliases: [Kritische Infrastrukturen, KRITIS-DachG, Kritische Infrastruktur]
maturity: wachsend
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

### KRITIS-DachG

Das **[[KRITIS-Dachgesetz]]** wurde am **29. Januar 2026** vom Bundestag und am **6. März 2026** vom Bundesrat verabschiedet. Es setzt die EU-Richtlinie **CER (Critical Entities Resilience Directive, EU 2022/2557)** in deutsches Recht um und ergänzt das bisherige digitale KRITIS-Recht um Anforderungen an die physische Widerstandsfähigkeit.

Kernanforderungen des KRITIS-DachG:
- **Registrierung**: KRITIS-Betreiber müssen sich voraussichtlich ab Mitte 2026 beim [[BSI]] registrieren.
- **Risikoanalyse**: Betreiber müssen kritische Abhängigkeiten und Risiken dokumentieren.
- **Resilienzmaßnahmen**: Physische Schutzmaßnahmen (Zutrittskontrollen, Redundanzen) sind nachzuweisen.
- **Meldepflicht**: Sicherheitsvorfälle, die den Betrieb erheblich beeinträchtigen, müssen gemeldet werden.

### NIS-2-Richtlinie und BSIG

Parallel dazu gilt die **NIS-2-Richtlinie (Network and Information Security)**, die durch eine Novelle des BSI-Gesetzes umgesetzt wurde. NIS-2 erweitert den Kreis der verpflichteten Einrichtungen erheblich: Auch mittlere und große Unternehmen in kritischen Sektoren, darunter viele Gesundheitsdienstleister, fallen nun unter die Anforderungen. NIS-2 unterscheidet zwischen **wesentlichen Einrichtungen** (essential entities, höhere Anforderungen) und **wichtigen Einrichtungen** (important entities).

## Technische Details

### Anforderungen nach BSIG

Klassische KRITIS-Betreiber nach BSIG müssen:

1. **Technische und organisatorische Maßnahmen (TOMs)** zum Schutz ihrer IT-Systeme und Kommunikationsinfrastruktur umsetzen (§ 8a BSIG).
2. Alle **zwei Jahre** den Nachweis der umgesetzten Maßnahmen gegenüber dem [[BSI]] erbringen, durch Audits, Prüfungen oder Zertifizierungen.
3. **Sicherheitsvorfälle** erheblicher Wirkung unverzüglich dem [[BSI]] melden (§ 8b BSIG).
4. Ein **[[ISMS]]** (Informationssicherheits-Managementsystem) betreiben, häufig zertifiziert nach [[ISO-27001|ISO 27001]] oder [[BSI-IT-Grundschutz|BSI IT-Grundschutz]].

### Relevanz für die Telematikinfrastruktur

Die [[Telematikinfrastruktur]] ist als kritische Infrastruktur eingestuft. Die [[gematik]] als Betreiberin der zentralen TI-Dienste und zugelassene Anbieter von TI-Diensten (z.B. [[TI-Gateway]]-Betreiber, [[VPN-Zugangsdienst]]-Anbieter) unterliegen den KRITIS-Anforderungen. Konkret bedeutet das:

- Pflicht zur BSI-Registrierung und regelmäßigen Sicherheitsaudits
- Meldung von Sicherheitsvorfällen, die den TI-Betrieb beeinträchtigen (z.B. Ausfälle wie der RISE-Ausfall vom März 2026)
- ISMS-Pflicht für Betreiber zentraler TI-Dienste

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
- [KRITIS-Dachgesetz (KRITIS-DachG) – Bundesrat](https://www.bundesrat.de/DE/plenum/bundesrat-sitzungen/2026/1099/tagesordnung/to_node.html)
- [BSI-KRITIS-Verordnung](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KRITIS/BSI-KritisV.html)
- [Wikipedia: Kritische Infrastruktur](https://de.wikipedia.org/wiki/Kritische_Infrastruktur)
