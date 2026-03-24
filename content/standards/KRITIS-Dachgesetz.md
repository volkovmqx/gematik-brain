---
title: KRITIS-Dachgesetz
audience: [technical, non-technical]
tags: [standards, recht, gesetz, kritis, sicherheit, krankenhaus]
aliases: [KRITIS-DachG, Kritis-Dachgesetz, CER-Richtlinie Umsetzungsgesetz]
maturity: wachsend
relevance:
  sectors: [krankenhaus, ti-infrastruktur, it-dienstleister, regulierung]
  interests: [compliance, technik]
---

# KRITIS-Dachgesetz

Das **KRITIS-Dachgesetz** (offiziell: KRITIS-Dachgesetz, Gesetz zur Umsetzung der CER-Richtlinie) ist das deutsche Bundesgesetz zur Umsetzung der EU-CER-Richtlinie (EU 2022/2557) über die Resilienz kritischer Einrichtungen. Es schafft erstmals einheitliche Mindeststandards für den physischen Schutz kritischer Infrastrukturen in Deutschland.

## Erklärt für Einsteiger

Stell dir vor, ein Krankenhaus wird von einem Hochwasser überflutet oder ein Stromausfall legt die gesamte IT lahm. Bisher gab es in Deutschland keine einheitlichen Regeln, wie Krankenhäuser und andere wichtige Einrichtungen sich gegen solche Bedrohungen schützen müssen. Das KRITIS-Dachgesetz ändert das: Es legt fest, dass alle kritischen Einrichtungen ihre Risiken analysieren, Schutzpläne erstellen und sich registrieren müssen. Krankenhäuser gehören ausdrücklich dazu.

## Überblick

Das KRITIS-Dachgesetz wurde vom **Bundestag am 29. Januar 2026** verabschiedet. Der **Bundesrat stimmte am 6. März 2026** zu. Es setzt die europäische **CER-Richtlinie** (Critical Entities Resilience Directive, EU 2022/2557) in deutsches Recht um. Die CER-Richtlinie ist das physische Gegenstück zur [[NIS-2]]-Richtlinie (Cybersicherheit) und verlangt von den Mitgliedstaaten, kritische Einrichtungen auch gegen physische Bedrohungen zu schützen.

Das Gesetz schafft einen einheitlichen Rahmen für den physischen Schutz kritischer Infrastrukturen, der bislang fragmentiert auf verschiedene Sektorgesetze verteilt war. Das [[BSI]] erhält eine koordinierende Rolle für den Bereich Cybersicherheit in Verbindung mit dem Bundesamt für Bevölkerungsschutz und Katastrophenhilfe (BBK) für den physischen Schutz.

### Zeitplan

- **29. Januar 2026**: Verabschiedung durch den Bundestag
- **6. März 2026**: Zustimmung des Bundesrats
- **17. Juli 2026**: Registrierungspflicht tritt in Kraft (Stichtag für Erstregistrierung betroffener Betreiber)

## Technische Details

### Geltungsbereich: Sektoren und Schwellenwerte

Das KRITIS-Dachgesetz gilt für Betreiber kritischer Anlagen in folgenden Sektoren:

- Energie (Strom, Gas, Öl, Fernwärme)
- Verkehr und Transport
- Bankwesen und Finanzinfrastrukturen
- Trinkwasser und Abwasser
- **Gesundheit** (Krankenhäuser, Labore, Arzneimittelhersteller, medizinische Geräte)
- Digitale Infrastruktur
- Weltraum
- Öffentliche Verwaltung

Im **Gesundheitssektor** fallen insbesondere folgende Einrichtungen in den Geltungsbereich:

- Krankenhäuser ab einem definierten Schwellenwert (laut Gesetz orientiert an Bettenzahl oder Fallzahlen, Einzelheiten werden per Rechtsverordnung festgelegt)
- Labore, die systemrelevante diagnostische Leistungen erbringen
- Hersteller kritischer Arzneimittel und Medizinprodukte
- Betreiber zentraler Gesundheits-IT-Infrastrukturen (relevant für TI-Betreiber)

### Pflichten betroffener Betreiber

Betreiber kritischer Anlagen nach KRITIS-Dachgesetz müssen:

1. **Registrierung**: Ab dem **17. Juli 2026** müssen sich betroffene Betreiber bei der zuständigen Behörde registrieren.
2. **Risikoanalyse**: Identifikation physischer Bedrohungen (Naturkatastrophen, Sabotage, Terrorismus) und Abhängigkeiten von anderen kritischen Infrastrukturen.
3. **Resilienzplan**: Maßnahmen zur Prävention, Reaktion und Wiederherstellung bei Störungen. Der Plan muss regelmäßig aktualisiert werden.
4. **Sicherheitsbeauftragte**: Benennung eines Ansprechpartners für KRITIS-Sicherheitsfragen.
5. **Meldepflichten**: Erhebliche Sicherheitsvorfälle müssen gemeldet werden.

> [!frist-warnung] Frist-Warnung: Registrierungspflicht bis 17. Juli 2026 und Folgefristen
> **Rechtsgrundlage:** KRITIS-Dachgesetz (BGBl. 2026 I Nr. 65), Umsetzung der CER-Richtlinie (EU 2022/2557); §§ 8, 9, 10 KRITIS-DachG (Registrierung, Risikoanalyse, Resilienzplan)
> **Fristen:**
> - **17. Juli 2026**: Erstregistrierung bei der gemeinsamen Registrierstelle von BBK und BSI (Bundesamt für Bevölkerungsschutz und Katastrophenhilfe / Bundesamt für Sicherheit in der Informationstechnik)
> - **Innerhalb von 9 Monaten** nach Registrierung: Risikoanalyse der physischen Bedrohungslagen abzuschließen
> - **Innerhalb von 10 Monaten** nach Registrierung: Resilienzplan zu erstellen und der Behörde vorzulegen
> - **Dauerhaft**: Erhebliche Sicherheitsvorfälle sind unverzüglich zu melden
> **Handlungsbedarf:** Die verantwortliche Stelle hat zunächst zu prüfen, ob die Einrichtung den Schwellenwert für kritische Anlagen im Gesundheitssektor überschreitet (Konkretisierung per Rechtsverordnung erwartet, orientiert an Versorgungsrelevanz für mindestens 500.000 Personen). Bereits jetzt sind ISO-22301-konforme Business-Continuity-Analysen und ISMS-Dokumentation als Vorarbeit für den Resilienzplan sinnvoll. Ein KRITIS-Sicherheitsbeauftragter ist zu benennen.
> **Bei Nichtbeachtung:** Bußgelder bis zu 1.000.000 Euro je Verstoß; persönliche Haftung der Geschäftsleitung ist vorgesehen.

> [!interesse-compliance]
> **Frist: 17. Juli 2026** für die Erstregistrierung beim Bundesamt für Bevölkerungsschutz und Katastrophenhilfe (BBK). Krankenhäuser, die in den Geltungsbereich fallen (Schwellenwert wird per Rechtsverordnung konkretisiert), müssen zusätzlich zum bestehenden BSI-Gesetz-Regime nun auch einen physischen Resilienzplan vorlegen. Bei Verstößen drohen Bußgelder bis zu 2 Prozent des globalen Jahresumsatzes. Empfehlung: Prüfen Sie jetzt, ob Ihr Haus den Schwellenwert überschreitet, und beauftragen Sie ggf. eine KRITIS-Risikoanalyse parallel zur ohnehin erforderlichen ISMS-Zertifizierung.

> [!klinik-integration] Klinik-Integration: KRITIS-Resilienzplan und KIS-Infrastruktur
> **KIS-Kontext:** Das KIS ist die kritischste IT-Komponente im Krankenhaus. Im Resilienzplan nach KRITIS-Dachgesetz muss das KIS explizit als kritisches System ausgewiesen werden mit Angaben zu: RTO (Recovery Time Objective), RPO (Recovery Point Objective), Backup-Konzept und Ausweichbetrieb. Systeme wie SAP ISH, Dedalus ORBIS, iMedOne haben unterschiedliche HA-Optionen (Cluster, Hot-Standby, Cloud-DR): Dokumentieren Sie die gewählte Lösung und testen Sie sie mindestens einmal jährlich.
> **Workflow-Bezug:** Ein physischer Ausfall (Stromausfall, Brand) muss nicht automatisch zum KIS-Ausfall führen. Planen Sie USV-Versorgung für Server-Racks (mindestens 15 Minuten Überbrückung bis Netzersatzanlage anspringt), georedundante Datenreplikation und einen Notbetrieb mit Papier-Fallback für Stationsarbeitsplätze. Das Notfallkonzept muss dem Pflegepersonal und den Ärzten bekannt sein.
> **Registrierung:** Beauftragen Sie Ihre IT-Abteilung oder einen externen KRITIS-Berater jetzt mit der Schwellenwert-Analyse. Die Rechtsverordnung zur Konkretisierung der Bettenzahl-Schwellenwerte ist abzuwarten, aber vorbereitende KRITIS-Risikoanalysen können bereits auf Basis ISO 22301 (Business Continuity) begonnen werden.

> [!frist-warnung] Frist-Warnung: Doppeltes Pflichtenprogramm für Krankenhäuser (KRITIS-DachG + NIS-2)
> **Rechtsgrundlage:** KRITIS-Dachgesetz §§ 8-10 (physische Resilienz), § 8b BSI-Gesetz (IT-Sicherheit für KRITIS), NIS-2-Umsetzungsgesetz (NIS2UmsuCG, BGBl. 2024 I Nr. 269) Art. 1 (Änderung BSIG), insbesondere § 30 BSIG n.F. (Sicherheitsmaßnahmen wesentliche Einrichtungen)
> **Pflichten:**
> - Nach **BSI-Gesetz / NIS-2** (bereits wirksam): IT-Sicherheitsmaßnahmen, Registrierung beim BSI, Meldung erheblicher Cybersicherheitsvorfälle innerhalb von 24 Stunden (Erstmeldung) und 72 Stunden (Folgemeldung)
> - Nach **KRITIS-DachG** (ab 17. Juli 2026): Physische Resilienzpflichten zusätzlich zu den IT-Pflichten
> **Handlungsbedarf:** Krankenhäuser, die bereits als KRITIS nach BSI-Gesetz registriert sind, müssen sich zusätzlich für das KRITIS-Dachgesetz-Regime prüfen und ggf. beim BBK registrieren. Bestehende ISMS-Dokumentation (ISO 27001, BSI IT-Grundschutz) kann als Grundlage für den KRITIS-DachG-Resilienzplan genutzt werden, deckt aber die neu geforderten physischen Bedrohungsszenarien (Überschwemmung, Stromausfall, Sabotage) noch nicht vollständig ab.
> **Bei Nichtbeachtung:** Beide Regime sehen unabhängige Sanktionen vor. Die NIS-2-Meldepflicht für Cybervorfälle gilt bereits; die KRITIS-DachG-Bußgelder kommen ab Juli 2026 hinzu.

### Abgrenzung zu IT-Sicherheit und BSI-Gesetz

Das KRITIS-Dachgesetz ergänzt, ersetzt aber nicht die bestehenden IT-Sicherheitsanforderungen:

- **KRITIS-Dachgesetz**: Physischer Schutz (Gebäudesicherheit, Zugangskontrolle, Redundanz kritischer Systeme, Schutz vor Naturkatastrophen)
- **BSI-Gesetz / [[NIS-2]]**: Cybersicherheit und IT-Sicherheit

Für viele Betreiber greifen beide Regelwerke gleichzeitig. Krankenhäuser müssen damit sowohl nach BSI-Gesetz ihre IT absichern als auch nach KRITIS-Dachgesetz ihre physische Infrastruktur schützen.

### Sanktionen

Bei Verstößen gegen die Registrierungs- und Resilienzpflichten sind empfindliche Bußgelder vorgesehen. Die Höhe orientiert sich am Umsatz des Betreibers und kann laut Gesetz bis zu 2 Prozent des globalen Jahresumsatzes betragen.

### Bedeutung für Krankenhäuser und TI

Krankenhäuser standen bereits unter IT-Sicherheitsauflagen (BSI-Gesetz, [[ISMS]]-Anforderungen). Das KRITIS-Dachgesetz ergänzt diese um physische Schutzpflichten. Konkrete Auswirkungen:

> [!interesse-technik]
> Für IT-Dienstleister und TI-Infrastrukturbetreiber bedeutet das KRITIS-Dachgesetz: Physische Sicherheitskonzepte (Rechenzentrumsschutz, Zugangskontrolle, Notstromanlagen, georedundante Standorte) müssen dokumentiert und auditierbar sein. Das BBK koordiniert die Prüfung, arbeitet aber mit dem BSI zusammen. Wer als TI-Betreiber bereits nach ISO 27001 oder BSI IT-Grundschutz zertifiziert ist, kann vorhandene Dokumentation weitgehend nutzen. Neu ist die Pflicht, auch physische Bedrohungsszenarien (Überschwemmung, Stromausfall, Brandschutz) formal in einer Risikoanalyse abzubilden und in einem Resilienzplan zu adressieren.

- Einführung oder Ausbau von Notfallplänen für physische Störungen (Stromausfall, Brand, Überschwemmung)
- Dokumentierte Redundanzmaßnahmen für kritische medizinische Systeme ([[KIS]], Laborinfrastruktur, Beatmungsgeräte)
- Registrierungspflicht ab 17. Juli 2026 bei der zuständigen Aufsichtsbehörde

> [!dev-quickstart] Dev Quickstart: KRITIS-Meldepflicht technisch umsetzen
> Sicherheitsvorfälle müssen innerhalb von 24 Stunden (Erstmeldung) und 72 Stunden (Detailbericht) an die gemeinsame BBK/BSI-Meldeplattform übermittelt werden.
> Meldung via BSI-Meldeportal (SOAP/REST):
> ```bash
> # Erstmeldung per REST an das BSI-Meldeverfahren (KRITIS-Meldung)
> POST https://meldeportal.bsi.bund.de/api/v1/incidents
> Content-Type: application/json
> Authorization: Bearer <API-Token aus Registrierung>
>
> {
>   "incidentType": "PHYSICAL",
>   "sector": "health",
>   "severity": "significant",
>   "affectedServices": ["patient-care", "emergency"],
>   "occurredAt": "2026-07-18T08:15:00Z",
>   "description": "Stromausfall Serverraum Ost, KIS nicht erreichbar"
> }
> ```
> Resilienzplan-Dokumentation: Das BBK stellt Vorlagen im Format ISO 22301 (Business Continuity) bereit.
> - BSI IT-Grundschutz-Kompendium (Bausteine für physische Sicherheit): [bsi.bund.de/grundschutz](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html)
> - BBK KRITIS-Portal (Registrierung): [bbk.bund.de/KRITIS](https://www.bbk.bund.de/DE/Themen/Kritische-Infrastrukturen/kritische-infrastrukturen_node.html)
> - BSI KRITIS-Anforderungen: [bsi.bund.de/KRITIS](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/KRITIS-und-regulierte-Unternehmen_node.html)

> [!klinik-integration] Klinik-Integration: Doppelregime BSI-Gesetz und KRITIS-Dachgesetz
> **Synergie nutzen:** Krankenhäuser, die bereits ein [[ISMS]] nach ISO 27001 oder BSI IT-Grundschutz betreiben, können die vorhandene Dokumentation als Basis für den KRITIS-Resilienzplan verwenden. Der wesentliche Unterschied: Das ISMS deckt Cyber-Risiken ab; der Resilienzplan nach KRITIS-Dachgesetz muss zusätzlich physische Bedrohungen (Überschwemmung, Stromausfall, Sabotage) adressieren.
> **Sicherheitsbeauftragter:** Das Gesetz verlangt die Benennung eines KRITIS-Sicherheitsbeauftragten. In den meisten Krankenhäusern bietet sich der bestehende IT-Sicherheitsbeauftragte (oder CISO) für diese Rolle an. Achten Sie darauf, dass die Kontaktdaten des Beauftragten beim BBK registriert sind.
> **Meldepflicht:** Erhebliche Vorfälle (physische Störungen mit Auswirkung auf die Versorgungsfähigkeit) sind dem BBK zu melden. Definieren Sie intern Schwellenwerte, ab wann ein Vorfall als meldepflichtig gilt, und integrieren Sie dies in Ihr bestehendes IT-Vorfallmanagement-Prozess.

## Verknüpfungen

- [[KRITIS]] (KRITIS-Konzept als Grundlage; BSI-Gesetz als bestehendes IT-Sicherheitsgesetz)
- [[BSI]] (koordinierende Rolle bei Cybersicherheitsaspekten)
- [[ISMS]] (Informationssicherheitsmanagementsystem; ergänzende Anforderung für Krankenhäuser)
- [[KIS]] (Krankenhausinformationssysteme; Betreiber sind von KRITIS-Dachgesetz betroffen)
- [[Telematikinfrastruktur]] (TI-Betreiber können als kritische Infrastruktur eingestuft sein)
- [[gematik]] (als Betreiber zentraler Gesundheits-IT-Infrastruktur relevant)

## Quellen

- [Bundestag: KRITIS-Dachgesetz – Beschlusstext (Drucksache 20/10292)](https://dip.bundestag.de/vorgang/gesetz-zur-umsetzung-der-cer-richtlinie/314046)
- [BMI: KRITIS-Dachgesetz – Überblick](https://www.bmi.bund.de/DE/themen/bevoelkerungsschutz/kritis-und-sicherheitsforschung/kritis/kritis-dachgesetz-node.html)
- [EU-CER-Richtlinie 2022/2557](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022L2557)
- [BSI: Kritische Infrastrukturen – Anforderungen](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/KRITIS-und-regulierte-Unternehmen_node.html)
