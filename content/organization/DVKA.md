---
title: DVKA
audience: [technical, non-technical]
tags: [organisation, eu, grenzüberschreitend, ncpeh, ehds]
aliases: [Deutsche Verbindungsstelle Krankenversicherung Ausland, DVKA]
maturity: immergruen
---

# DVKA

Die **DVKA (Deutsche Verbindungsstelle Krankenversicherung Ausland)** ist die zentrale deutsche Behörde für grenzüberschreitende Krankenversicherungsleistungen in der EU und betreibt den deutschen [[NCPeH]] (National Contact Point for eHealth).

## Erklärt für Einsteiger

Wenn du als Deutscher im EU-Ausland krank wirst, muss jemand sicherstellen, dass das ausländische Krankenhaus weiß, dass du versichert bist, und dass die Kostenerstattung korrekt läuft. Die DVKA ist die Stelle, die das für Deutschland koordiniert. Sie ist aber auch für die Zukunft wichtig: Sie stellt sicher, dass ein Arzt in Spanien irgendwann deine deutschen Medikamentendaten digital abrufen kann, wenn du das erlaubst.

## Überblick

Die DVKA ist eine Verbindungsstelle nach der **EU-Verordnung 883/2004 zur Koordinierung der sozialen Sicherheit**. Sie ist eine Abteilung des [[GKV-Spitzenverband]]es (seit 1. Juli 2008).

Die DVKA erfüllt folgende Kernaufgaben:

- **Verwaltungszusammenarbeit**: Koordiniert die Kommunikation zwischen deutschen Krankenkassen und ausländischen Sozialversicherungsträgern (elektronisch über EESSI: Electronic Exchange of Social Security Information)
- **Europäische Krankenversicherungskarte (EHIC)**: Koordiniert die Ausstellung und Prüfung der Europäischen Krankenversicherungskarte für ins Ausland reisende GKV-Versicherte
- **Rechnungsabrechnung**: Stellt sicher, dass Behandlungskosten EU-konform zwischen Ländern abgerechnet werden
- **NCPeH-Betrieb**: Betreibt den deutschen National Contact Point for eHealth als technischen Gateway für den grenzüberschreitenden Gesundheitsdatenaustausch

### Bedeutung für das europäische Gesundheitsdatennetz

Im Kontext des **[[EHDS]]** (European Health Data Space) und von **[[MyHealthAtEU|MyHealth@EU]]** ist die DVKA die zentrale operative Stelle für die deutsche Beteiligung an der europäischen eHealth-Infrastruktur.

## Technische Details

### NCPeH: National Contact Point for eHealth

Der [[NCPeH]] ist der technische Knotenpunkt, über den Deutschland am grenzüberschreitenden Gesundheitsdatenaustausch in der EU teilnimmt. Die DVKA betreibt diesen Knotenpunkt.

Der NCPeH verbindet zwei Welten:

- **National**: Zugang zur deutschen [[Telematikinfrastruktur]], insbesondere zur [[ePA]] und zum [[E-Rezept]]
- **International**: Verbindung zur europäischen MyHealth@EU-Infrastruktur

Technisch basiert der NCPeH auf den **eHDSI-Spezifikationen** (eHealth Digital Service Infrastructure) der Europäischen Kommission. Die Kommunikation zwischen NCPeHs verschiedener Länder erfolgt über standardisierte Web-Services.

### MyHealth@EU und Datenaustausch

[[MyHealthAtEU|MyHealth@EU]] ist die europäische Infrastruktur für grenzüberschreitende Gesundheitsdaten. Sie umfasst aktuell zwei Anwendungsfälle:

1. **Patient Summary**: Eine strukturierte Patientenzusammenfassung (Diagnosen, Allergien, aktuelle Medikamente) im CDA-Format (HL7 CDA Level 3). Wird beim Arztbesuch im EU-Ausland übermittelt, wenn der Patient zustimmt.
2. **ePrescription**: Grenzüberschreitendes Einlösen von E-Rezepten in anderen EU-Ländern. Deutschland plant die Teilnahme an MyHealth@EU für das [[E-Rezept]] für Wave 10 in 2026.

Die Datenschutzkontrolle liegt beim Versicherten: Er muss aktiv zustimmen, bevor sein Arzt im Ausland auf die Daten zugreifen kann.

### EESSI: Elektronischer Datenaustausch zur sozialen Sicherheit

Neben dem eHealth-Datenaustausch koordiniert die DVKA den **EESSI** (Electronic Exchange of Social Security Information). Das ist das EU-System für den administrativen Datenaustausch zwischen Sozialversicherungsträgern (z.B. Übermittlung von Versicherungszeiten für die Rentenberechnung, Nachweis der Krankenversicherung im Ausland).

EESSI läuft über strukturierte XML-Nachrichten (Structured Electronic Documents, SEDs) und ist von der eHealth-Infrastruktur technisch getrennt.

### EHDS und Weiterentwicklung

Die **EHDS-Verordnung** (EU 2025/327, in Kraft seit März 2025) baut auf MyHealth@EU auf und weitet den Datenaustausch deutlich aus. Ab 2029 sollen EU-Bürger ihre Gesundheitsdaten (Patientenzusammenfassung, E-Rezepte, Labordaten, Bildgebungsdaten) EU-weit verfügbar machen können. Die DVKA wird als Betreiberin des NCPeH eine zentrale Rolle bei der deutschen EHDS-Implementierung spielen.

Außerdem enthält der EHDS Regelungen zur **Sekundärnutzung** von Gesundheitsdaten für Forschungszwecke über sogenannte "Health Data Access Bodies". Für Deutschland wird das [[BfArM]] voraussichtlich diese Rolle übernehmen.

## Verknüpfungen

- [[NCPeH]] (National Contact Point for eHealth; von der DVKA betrieben)
- [[MyHealthAtEU]] (europäische Infrastruktur für grenzüberschreitende Gesundheitsdaten)
- [[EHDS]] (EU-Rechtsrahmen für Gesundheitsdaten; DVKA ist zentrale Umsetzungsstelle)
- [[GKV-Spitzenverband]] (Auftraggeber der DVKA)
- [[ePA]] (Datenquelle für den grenzüberschreitenden Datenaustausch über NCPeH)
- [[E-Rezept]] (geplante Nutzung im grenzüberschreitenden Kontext ab 2026)
- [[Telematikinfrastruktur]] (nationale Infrastruktur, mit der der NCPeH verbunden ist)
- [[BfArM]] (wird voraussichtlich Health Data Access Body unter dem EHDS)

## Quellen

- [DVKA: Über uns (GKV-Spitzenverband)](https://www.gkv-spitzenverband.de/krankenversicherung/auslandsreisen_und_eu/dvka/dvka.jsp)
- [gematik: NCPeH – Nationaler Kontaktpunkt für eHealth](https://fachportal.gematik.de/anwendungen/ncpeh)
- [Europäische Kommission: eHealth Digital Service Infrastructure](https://health.ec.europa.eu/ehealth-digital-health-and-care/ehealth-and-digital-health_en)
- [EHDS-Verordnung (EU) 2025/327](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32025R0327)
