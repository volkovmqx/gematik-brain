---
title: NIS2UmsuCG
audience: [technical, non-technical]
tags: [standards, gesetzgebung, cybersicherheit, nis2, bsig, kritis]
aliases: [NIS-2-Umsetzungsgesetz, NIS-2-Cybersicherheitsstärkungsgesetz, NIS2-Umsetzungsgesetz]
relevance:
  sectors: [krankenhaus, ti-infrastruktur, it-dienstleister, hersteller, regulierung]
  interests: [compliance, technik]
maturity: wachsend
---

# NIS2UmsuCG

Das **NIS2UmsuCG (NIS-2-Umsetzungs- und Cybersicherheitsstärkungsgesetz)** ist das deutsche Bundesgesetz zur Umsetzung der EU-Richtlinie NIS-2 (Network and Information Security Directive 2), das am **6. Dezember 2025** in Kraft getreten ist und das BSI-Gesetz (BSIG) grundlegend novelliert.

## Erklärt für Einsteiger

Die EU hat beschlossen, dass alle wichtigen Unternehmen und Einrichtungen in Europa ihre IT-Sicherheit verbessern müssen. NIS-2 ist diese EU-Richtlinie, und das NIS2UmsuCG ist das deutsche Gesetz, das diese Vorgaben umsetzt. Für Krankenhäuser, Rechenzentren, Softwarehersteller und viele andere Unternehmen bedeutet das: Sie müssen sich beim BSI registrieren, ihre Cybersicherheit stärken und Angriffe melden. Das Besondere: Der Kreis der verpflichteten Unternehmen ist durch NIS-2 deutlich größer geworden als zuvor.

## Überblick

Das NIS2UmsuCG wurde am 13. November 2025 vom Bundestag und am 21. November 2025 vom Bundesrat beschlossen. Es wurde am 5. Dezember 2025 im Bundesgesetzblatt (BGBl. 2025 I Nr. 289) verkündet und trat am **6. Dezember 2025** in Kraft. Es setzt die EU-Richtlinie NIS-2 (Richtlinie (EU) 2022/2555) in deutsches Recht um, die Deutschland eigentlich bis zum **17. Oktober 2024** hätte umsetzen müssen.

Das Gesetz novelliert primär das **BSI-Gesetz (BSIG)** umfassend und schafft ein neues Regime der Cybersicherheitsregulierung in Deutschland.

### Einrichtungsklassen

Das NIS2UmsuCG unterscheidet zwei Kategorien verpflichteter Einrichtungen:

| Kategorie | Anforderungen | Beispiele im Gesundheitssektor |
|---|---|---|
| **Wesentliche Einrichtungen** | Höchste Anforderungen, proaktive Aufsicht | Krankenhäuser ab 250 Mitarbeitern oder 50 Mio. Euro Umsatz; TI-Betreiber |
| **Wichtige Einrichtungen** | Erhöhte Anforderungen, reaktive Aufsicht | Mittelgroße Krankenhäuser, Labore, Medizintechnik-Hersteller |

Die Einstufung basiert auf Unternehmensgröße (Mitarbeiterzahl, Umsatz) und Sektor. Im Gesundheitssektor gelten:
- Krankenhäuser als **wesentliche Einrichtungen**, wenn sie mehr als 249 Mitarbeiter oder mehr als 50 Millionen Euro Jahresumsatz haben
- Einrichtungen der Herstellung und des Vertriebs von Arzneimitteln und Medizinprodukten können als wichtige Einrichtungen eingestuft sein

### Pflichten

Alle verpflichteten Einrichtungen müssen:

1. **Registrierung beim BSI**: Jede Einrichtung muss sich beim BSI registrieren und eine 24/7-erreichbare Kontaktstelle benennen. Die Registrierungspflicht bestand nominell seit dem 17. Oktober 2024 (EU-Frist); da das deutsche Gesetz erst im Dezember 2025 in Kraft trat, läuft die Registrierung seit Ende 2025.
2. **Risikomanagement**: Technische und organisatorische Maßnahmen (TOMs) zum Management von Cybersicherheitsrisiken, einschließlich eines [[ISMS|Informationssicherheits-Managementsystems]].
3. **Meldepflicht**: Erhebliche Sicherheitsvorfälle müssen unverzüglich (erste Meldung: 24 Stunden), dann mit Details (72 Stunden) und abschließend mit Abschlussbericht (innerhalb von 1 Monat) dem [[BSI]] gemeldet werden.
4. **Lieferkettenmanagement**: Sicherheitsanforderungen an Lieferanten und Dienstleister müssen vertraglich verankert sein.
5. **Geschäftsleitungsverantwortung**: Die Geschäftsleitung haftet persönlich für die Umsetzung der NIS-2-Anforderungen und muss an Schulungen teilnehmen.

> [!frist-warnung] Frist-Warnung: BSI-Registrierungsfrist und laufende Meldepflichten
> **Rechtsgrundlage:** § 33 BSIG (Registrierungspflicht) i.V.m. § 32 BSIG (Meldepflichten), BGBl. 2025 I Nr. 289.
> **Registrierungsfrist:** Die Erstregistrierung beim BSI war bis zum **6. März 2026** (drei Monate nach Inkrafttreten) zu erbringen. Einrichtungen, die diese Frist versäumt haben, sind umgehend nachzuregistrieren. Das BSI-Portal (mein.bsi.bund.de) ist seit dem 6. Januar 2026 freigeschaltet. Das BSI hat angekündigt, ab 2026 aktiv auf Verstöße zu prüfen.
> **Meldepflicht im laufenden Betrieb:** Erhebliche Sicherheitsvorfälle sind dreistufig zu melden: Erstmeldung innerhalb von **24 Stunden** nach Kenntniserlangung, Detailmeldung innerhalb von **72 Stunden**, Abschlussbericht innerhalb von **1 Monat**. Diese Fristen gelten für jedes einzelne Ereignis neu.
> **Handlungsbedarf:** Benennen Sie schriftlich eine 24/7-erreichbare Kontaktstelle beim BSI. Richten Sie einen Incident-Response-Prozess ein, der die Meldekette (Erkennung, interne Eskalation, BSI-Meldung) innerhalb von 24 Stunden auslöst. Schulen Sie die Geschäftsleitung gemäß § 38 BSIG, da persönliche Haftung gilt.
> **Bei Nichtbeachtung:** Bußgelder bis zu 10 Mio. Euro oder 2 % des weltweiten Jahresumsatzes (wesentliche Einrichtungen); 7 Mio. Euro oder 1,4 % (wichtige Einrichtungen).

> [!interesse-compliance]
> Wesentliche Einrichtungen im Gesundheitssektor (Krankenhäuser ab 250 Mitarbeitern) unterliegen proaktiver BSI-Aufsicht: Das BSI kann Sicherheitsaudits anordnen, Prüfungen durchführen und bei Verstößen Bußgelder verhängen. Die Registrierung beim BSI ist seit dem 6. Dezember 2025 verpflichtend. Nicht registrierte Einrichtungen riskieren Bußgelder bis zu 10 Millionen Euro oder 2 % des weltweiten Jahresumsatzes (wesentliche Einrichtungen) bzw. 7 Millionen Euro oder 1,4 % (wichtige Einrichtungen). Prüfen Sie, ob Ihre Einrichtung unter das NIS2UmsuCG fällt und ob die Registrierung beim BSI abgeschlossen ist.

> [!klinik-integration] Klinik-Integration: NIS-2-Pflichten operativ umsetzen
> Für Krankenhaus-IT-Abteilungen bedeutet das NIS2UmsuCG konkrete operative Schritte, die über die Registrierung hinausgehen.
>
> **Registrierung (sofort):** Seit dem 6. Dezember 2025 sind Krankenhäuser zur Registrierung beim BSI verpflichtet. Das BSI-Portal (MIP) ist seit März 2026 aktiv. Die IT-Leitung muss eine 24/7-erreichbare Kontaktstelle benennen. Klären Sie, ob Ihr Haus als "wesentliche" oder "wichtige" Einrichtung eingestuft ist.
> **Meldeprozess für KIS-Vorfälle:** Ein Ransomware-Angriff auf das KIS oder ein unautorisierter Zugriff auf Patientendaten ist ein meldepflichtiger Vorfall. Die Erstmeldung muss innerhalb von 24 Stunden beim BSI eingehen. Richten Sie dafür einen vorbereiteten Meldeprozess ein: Wer meldet? Welche Informationen werden benötigt? Wo ist das BSI-Meldeformular hinterlegt? Die IT-Abteilung sollte den Ablauf jährlich üben.
> **Lieferantenmanagement:** KIS-Hersteller, Dienstleister mit Fernzugang und Cloud-Anbieter sind Teil der Lieferkette. NIS-2 verlangt vertragliche Sicherheitsanforderungen. Prüfen Sie bestehende KIS-Wartungsverträge auf NIS-2-konforme Klauseln zu Incident-Response, Patch-Pflichten und Zugriffslogging.

### Abgrenzung zu [[KRITIS]]

Das NIS2UmsuCG ersetzt nicht das klassische KRITIS-Regime nach §§ 8a ff. BSIG (Meldeschwelle: 30.000 stationäre Fälle für Krankenhäuser). Es ergänzt es:

- **KRITIS (§ 8a BSIG alt, jetzt integriert)**: Gilt für große Krankenhäuser ab 30.000 stationären Fällen. Strengste Pflichten.
- **NIS-2 (wesentliche Einrichtungen)**: Gilt für Krankenhäuser ab 250 Mitarbeitern oder 50 Mio. Euro Umsatz. Mittlere Pflichten.
- **NIS-2 (wichtige Einrichtungen)**: Gilt für Krankenhäuser und Gesundheitsdienstleister ab 50 Mitarbeitern oder 10 Mio. Euro Umsatz. Grundpflichten.

Viele Krankenhäuser fallen gleichzeitig unter KRITIS und NIS-2. In diesem Fall gelten die strengeren KRITIS-Anforderungen.

## Technische Details

### Sicherheitsmaßnahmen (Art. 21 NIS-2-Richtlinie)

Das NIS2UmsuCG schreibt keine einzelnen Technologien vor, sondern Maßnahmenkategorien. Diese entsprechen den Anforderungen aus Art. 21 der NIS-2-Richtlinie:

- **Risikoanalyse und Sicherheitskonzepte**
- **Incident Response und Business Continuity**
- **Supply Chain Security**
- **Sicherheit bei der Entwicklung und Beschaffung von IT-Systemen**
- **Wirksamkeit von Cybersicherheitsmaßnahmen (Metriken)**
- **Schulungen und Cyberhygiene**
- **Kryptografie und Verschlüsselung**
- **Zugangskontrolle und Multifaktorauthentifizierung**
- **Kommunikationssicherheit**

Für den Nachweis der Umsetzung können die Einrichtungen [[ISO-27001|ISO-27001-Zertifizierungen]], [[BSI-IT-Grundschutz|BSI-IT-Grundschutz-Audits]] oder branchenspezifische Standards wie den [[B3S-Krankenhaus|B3S Medizinische Versorgung]] verwenden.

> [!interesse-technik]
> Das NIS2UmsuCG integriert sich in den §§ 30–38 des neuen BSIG. Die technischen Anforderungen werden durch BSI-Technische Richtlinien konkretisiert. Für TI-Betreiber relevant: § 30 BSIG (Risikomanagementmaßnahmen), § 32 BSIG (Meldepflichten), § 33 BSIG (Registrierungspflicht). BSI-Meldeportal für Sicherheitsvorfälle: bsi.bund.de/meldestelle. Für die Telematikinfrastruktur relevant: TI-Gateway-Betreiber, VPN-Zugangsdienst-Anbieter und gematik-zugelassene Dienste fallen als wesentliche Einrichtungen unter das NIS2UmsuCG.

> [!dev-quickstart] Dev Quickstart: NIS-2-Meldepflicht technisch umsetzen
> Meldepflichtige Sicherheitsvorfälle werden über das BSI-Portal gemeldet (seit 6. Januar 2026 produktiv).
> Portal-URL: [mein.bsi.bund.de](https://mein.bsi.bund.de) (zweistufig: erst "Mein Unternehmenskonto" (MUK), dann BSI-Portal)
>
> Drei-Stufen-Meldeprozess nach § 32 BSIG / Art. 23 NIS-2-Richtlinie:
> ```
> Stufe 1: Erstmeldung       →  innerhalb 24 Stunden nach Kenntnis
>   Inhalt: Art des Vorfalls, betroffene Dienste, geschätztes Ausmaß
>
> Stufe 2: Detailmeldung     →  innerhalb 72 Stunden
>   Inhalt: technische Details, initiale Ursachenanalyse, Eindämmungsmaßnahmen
>
> Stufe 3: Abschlussbericht  →  innerhalb 1 Monat
>   Inhalt: Root-Cause-Analyse, vollständige Maßnahmenliste, Wiederholungsschutz
> ```
> Technisch relevante Vorbereitungen:
> - Incident-Response-Playbook mit definierten Meldeverantwortlichen (24/7-Erreichbarkeit verpflichtend)
> - SIEM-Alerting so konfigurieren, dass "erhebliche Vorfälle" (§ 32 Abs. 1 BSIG) automatisch eskaliert werden
> - Erheblichkeitskriterien: Ausfall kritischer Dienste, unautorisierter Zugriff auf Patientendaten, Ransomware
> - BSI-Meldeportal: [mein.bsi.bund.de](https://mein.bsi.bund.de)
> - NIS-2-Meldepflicht BSI-Infoseite: [bsi.bund.de NIS-2-Meldepflicht](https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-Infopakete/NIS-2-Meldepflicht/NIS-2-Meldepflicht_node.html)

> [!klinik-integration] Klinik-Integration: NIS-2-ISMS und technische Maßnahmen im Krankenhaus
> Das NIS2UmsuCG schreibt keine konkreten Produkte vor, aber die Maßnahmenkategorien aus Art. 21 NIS-2 lassen sich direkt auf den Krankenhausbetrieb übersetzen.
>
> **Zugangskontrolle und MFA:** Privilegierte Zugänge zum KIS (Datenbankadministratoren, Remote-Wartung des KIS-Herstellers) müssen durch Multifaktorauthentifizierung geschützt sein. Prüfen Sie, ob Ihr KIS-Hersteller MFA für administrative Zugänge unterstützt.
> **Kryptografie:** Interne HL7-v2-Kommunikation zwischen KIS und LIS/RIS/PACS läuft oft unverschlüsselt über das interne Krankenhausnetz. Unter NIS-2 muss die Übertragung sensibler Patientendaten verschlüsselt sein oder durch Netzwerksegmentierung und Monitoring kompensiert werden.
> **Geschäftsleitungshaftung:** Die Geschäftsführung haftet persönlich für die NIS-2-Umsetzung und muss Schulungen nachweisen. Bereiten Sie für die Geschäftsführung eine kompakte Lagebeschreibung vor: Welche Systeme sind im NIS-2-Scope, welche Maßnahmen sind offen, welche Fristen laufen?

### Relevanz für die Telematikinfrastruktur

Die [[gematik]] und von ihr zugelassene TI-Dienst-Betreiber ([[TI-Gateway]], [[VPN-Zugangsdienst]], Fachdienst-Betreiber) gelten als wesentliche Einrichtungen im Bereich "Digitale Infrastruktur". Sie unterliegen damit dem höchsten NIS-2-Pflichtenrahmen und müssen:
- Sicherheitsvorfälle in der TI innerhalb von 24 Stunden beim BSI melden
- Regelmäßige Sicherheitsaudits durch akkreditierte Prüfer durchführen
- Lieferkettensicherheit für Software und Drittdienste nachweisen

## Verknüpfungen

- [[NIS-2]] (EU-Richtlinie, die das NIS2UmsuCG in deutsches Recht umsetzt)
- [[KRITIS]] (parallel geltendes KRITIS-Regime für die größten Einrichtungen)
- [[KRITIS-Dachgesetz]] (physische Resilienz, ergänzt das NIS2UmsuCG)
- [[BSI]] (Aufsichtsbehörde, nimmt Registrierungen und Meldungen entgegen)
- [[ISMS]] (Informationssicherheitsmanagementsystem: Kernanforderung)
- [[ISO-27001]] (anerkannter Nachweis für NIS-2-Compliance)
- [[BSI-IT-Grundschutz]] (BSI-eigener Standard als Nachweisoption)
- [[B3S-Krankenhaus]] (branchenspezifischer Standard für KRITIS-Krankenhäuser)
- [[Telematikinfrastruktur]] (TI-Betreiber sind wesentliche Einrichtungen nach NIS-2)
- [[gematik]] (unterliegt als TI-Betreiberin den NIS-2-Pflichten)

## Quellen

- [BSI: NIS-2-Umsetzung in Deutschland](https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/nis-2-regulierte-unternehmen_node.html)
- [EU-Richtlinie NIS-2 (2022/2555)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32022L2555)
- [NIS2UmsuCG / BSIG 2025 – Gesetze im Internet](https://www.gesetze-im-internet.de/bsig_2025/)
- [Wikipedia: NIS-2-Richtlinie](https://de.wikipedia.org/wiki/NIS-2-Richtlinie)
