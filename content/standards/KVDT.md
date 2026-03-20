---
title: KVDT - Kassenärztlicher Datentransfer
audience: [technical]
tags: [standards, abrechnung, xdt, kvabrechnung, pvs, ambulant]
aliases: [KVDT, Kassenärztlicher Datentransfer, Abrechnungsdatenträger, KV-Abrechnung]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, hersteller, it-dienstleister, regulierung]
  interests: [technik, compliance, business]
maturity: wachsend
---

# KVDT - Kassenärztlicher Datentransfer

**KVDT (Kassenärztlicher Datentransfer)** ist das standardisierte Dateiformat für die elektronische Übermittlung von Abrechnungsdaten aus dem [[PVS|Praxisverwaltungssystem]] an die [[Kassenaerztliche-Vereinigung|Kassenärztliche Vereinigung (KV)]] nach jedem Quartal.

## Erklärt für Einsteiger

Jeder Arzt rechnet am Ende des Quartals ab: Was habe ich für welche Patienten getan, und was bin ich dafür von der Krankenkasse wert? Diese Informationen schickt die Praxissoftware automatisch an die Kassenärztliche Vereinigung. Das Format, in dem das passiert, heißt KVDT. Es ist wie ein standardisiertes Formular: Jede Information hat eine feste Nummer und einen festen Platz. Die KV kann damit alle Abrechnungen aus Tausenden Praxen maschinell prüfen und vergüten.

## Überblick

KVDT ist Teil der [[xDT]]-Formatfamilie, die von der [[KBV]] (Kassenärztliche Bundesvereinigung) in Zusammenarbeit mit den [[Kassenaerztliche-Vereinigung|Kassenärztlichen Vereinigungen (KVen)]] entwickelt und gepflegt wird. Neben KVDT gehören zur xDT-Familie: GDT (Gerätedatentransfer), LDT (Labor-Datentransfer) und BDT (Behandlungsdatenträger).

Die Quartalsabrechnung ist für niedergelassene Vertragsärzte und Vertragspsychotherapeuten Pflicht. Das KVDT-Format stellt sicher, dass alle 17 regionalen KVen dieselben Datenstrukturen empfangen und maschinell verarbeiten können.

### Abrechnungsworkflow

Der typische Ablauf einer KVDT-Abrechnung:

1. Arzt oder Praxismitarbeiter erfasst Behandlungsfall (Schein) im [[PVS]] mit Diagnosen ([[ICD-10-GM]]) und EBM-Leistungen.
2. Am Quartalsende generiert das PVS eine KVDT-Datei, die alle Behandlungsscheine des Quartals enthält.
3. Die Datei wird online an die KV übermittelt, in der Regel über ein KV-spezifisches Onlineportal oder [[KV-SafeNet]].
4. Die KV prüft die Datei sachlich und rechnerisch (Plausibilitätsprüfung).
5. Bei Fehlern sendet die KV eine Fehlerrückmeldung, ebenfalls im KVDT-Format.
6. Nach erfolgreicher Prüfung vergütet die KV auf Basis des [[EBM|Einheitlichen Bewertungsmaßstabs (EBM)]].

> [!frist-warnung] Frist-Warnung: Quartalsabrechnungspflicht und KVDT-Spezifikationsfristen
> **Rechtsgrundlage:** § 295 Abs. 4 SGB V i.V.m. der KBV-Richtlinie für den Einsatz von IT-Systemen in der Arztpraxis zum Zweck der Abrechnung
> **Fristen:** Vertragsärzte und Vertragspsychotherapeuten sind verpflichtet, Abrechnungsdaten elektronisch im KVDT-Format an ihre KV zu übermitteln. Die Abgabefrist beträgt in der Regel bis zum **10. Kalendertag des ersten Monats nach Quartalsende** (KV-spezifische Abweichungen möglich: KV Bayern bis 15. Tag; Frist bei der eigenen KV prüfen). Neue KVDT-Spezifikationsversion **6.02** (Stand: 9. März 2026) tritt zum **1. April 2026** für die Abrechnung des entsprechenden Quartals in Kraft.
> **Handlungsbedarf:** PVS-Hersteller sind verpflichtet, die aktuelle KVDT-Spezifikation umzusetzen. Praxen müssen sicherstellen, dass ihr PVS eine aktuelle Zertifizierungsnummer der KBV trägt. Nicht zertifizierte Praxissoftware darf nicht für die GKV-Abrechnung eingesetzt werden.
> **Bei Nichtbeachtung:** Verspätete oder nicht konforme Abrechnungen können zur Ablehnung des gesamten Quartalshonorars durch die KV führen.

> [!praxis-tipp] Praxis-Tipp: Quartalsabrechnung fehlerfrei einreichen
> Die Abrechnungsfrist für Q1/2026 endet am 10. April 2026. Verspätete Abgabe kann zum Verlust des gesamten Quartalshonorars führen, auch wenn die Frist nur um einen Tag überschritten wird.
>
> Checkliste vor der Abgabe:
> 1. KVDT-Datei im PVS erzeugen lassen.
> 2. Datei mit dem aktuellen KBV-Prüfmodul prüfen (kostenfrei unter update.kbv.de verfügbar). Keine Fehler im Prüfprotokoll? Erst dann einreichen.
> 3. Mit dem KBV-Kryptomodul verschlüsseln.
> 4. Über das KV-Portal Ihrer KV oder per KIM einreichen.
>
> Häufiger Fehler: Diagnose "UUU" (unklare Diagnose) als Dauerdiagnose eingetragen. Das führt zu Fehlern im Prüfprotokoll. Prüfen Sie vor Quartalsende alle offenen Scheine auf korrekte ICD-Codierung.

> [!interesse-compliance]
> Alle zugelassenen [[PVS]]-Systeme (zertifiziert nach § 73 SGB V / KBV-Richtlinie für Praxissoftware) müssen KVDT unterstützen. Ohne KVDT-konforme Software kann eine Praxis die Quartalsabrechnung nicht einreichen. Die KBV veröffentlicht regelmäßig aktualisierte KVDT-Spezifikationen, die PVS-Hersteller umsetzen müssen. Relevante Fristen: Abrechnungsabgabe jeweils bis ca. 10 Tage nach Quartalsende, KV-spezifische Fristen variieren.

## Technische Details

### Dateiformat

KVDT-Dateien sind textbasierte, zeilenstrukturierte Dateien. Jede Zeile folgt dem Schema:

```
LängeFieldkennzeichenInhalt
```

Beispiel:

```
0148000Max Mustermann
```

- `014` ist die Gesamtlänge der Zeile in Zeichen (3-stellig)
- `8000` ist das Feldkennzeichen (4-stellig), das den Dateninhalt semantisch beschreibt
- `Max Mustermann` ist der Inhalt

Das Format ist **nicht selbstbeschreibend**: Ohne die zugehörige KBV-Spezifikation ist eine KVDT-Datei nicht interpretierbar. Die Feldkennzeichen sind in der KVDT-Spezifikation definiert und decken alle abrechnungsrelevanten Informationen ab: Patientenstammdaten, Behandlungsanlässe, Diagnosen, EBM-Ziffern, Betriebs- und Arztnummern.

### Strukturebenen einer KVDT-Datei

Eine KVDT-Datei enthält mehrere hierarchische Ebenen:

| Ebene | Inhalt |
|---|---|
| Dateiheader | Absender (BSNR, LANR), Abrechnungsquartal, KV-Kennung |
| Abrechnungsfall (Schein) | Versichertendaten (eGK-Daten), Behandlungsdatum, Scheinart |
| Leistungszeile | EBM-Ziffer, Anzahl, Diagnosenbezug |
| Diagnosezeile | ICD-10-GM-Code, Diagnosesicherheit (G/V/A/Z) |
| Dateiende | Prüfsummen und Satzabschluss |

### Scheinarten

Das KVDT-Format unterscheidet verschiedene Scheinarten (codiert im Feldkennzeichen 4239):

- **Krankenschein (AM)**: Abrechnung für GKV-Versicherte
- **Überweisungsschein (UE)**: Abrechnung für Überweisungsbehandlung
- **Präventionsschein (P)**: Vorsorgeuntersuchungen
- **BG-Schein (BG)**: Behandlung nach Arbeitsunfall (Berufsgenossenschaft)

### BSNR und LANR

Jede KVDT-Datei enthält zwei für die Abrechnung zentrale Identifikatoren:

- **BSNR (Betriebsstättennummer)**: 9-stellige Nummer der Praxis, vergeben von der KV
- **LANR (Lebenslange Arztnummer)**: 9-stellige Nummer des Arztes, lebenslang gültig

Beide werden als Feldkennzeichen in der KVDT-Datei geführt. Arztpraxen mit mehreren Ärzten übergeben eine KVDT-Datei je LANR.

### Übermittlungsweg

KVDT-Dateien werden nicht mehr auf physischen Datenträgern eingereicht, sondern online. Der verbreitete Weg ist:

- **KV-Online-Portal**: Jede der 17 regionalen KVen betreibt ein eigenes Online-Portal für den Datenaustausch mit Praxen. Über dieses Portal werden KVDT-Abrechnungsdateien eingereicht und Rückmeldungen abgerufen.
- **[[KV-SafeNet]]**: Ein von mehreren KVen genutztes VPN-basiertes Sicherheitsnetz, über das KVDT-Dateien übertragen werden können.
- **[[KIM]]**: Zunehmend nutzen KVen den TI-Kommunikationsdienst KIM für die Übertragung von Abrechnungsdaten und -rückmeldungen.

> [!interesse-technik]
> **Spezifikation**: Die KVDT-Spezifikation wird von der KBV zusammen mit dem Qualitätsring Medizinische Software (QMS) gepflegt. Aktuelle Version: KVDT 6.02 (Stand: 9. März 2026). Download unter: [update.kbv.de](https://update.kbv.de/ita-update/Abrechnung/KBV_ITA_VGEX_Datensatzbeschreibung_KVDT.pdf) (KBV ITA Datensatzbeschreibung KVDT).
> **Testumgebung**: Die KBV stellt für PVS-Hersteller eine Testumgebung bereit, über die KVDT-Dateien gegen die Spezifikation validiert werden können.
> **Fehlerrückmeldung**: Die KV antwortet auf eine KVDT-Abrechnungsdatei mit einer strukturierten Rückmeldedatei im KVDT-Format (Feldkennzeichen für Fehlercodes und Erläuterungen).
> **FHIR-Migration**: Eine FHIR-basierte Ablösung des KVDT-Formats ist noch nicht terminiert. Die KBV-FHIR-Roadmap fokussiert bislang auf E-Rezept und ePA; das Abrechnungsformat gilt als technisch komplex zu migrieren.

> [!dev-quickstart] Dev Quickstart: KVDT-Datei parsen und validieren
> ```python
> # KVDT-Zeile parsen (Python) – Format: LLLFFFFContent
> def parse_kvdt_line(line: str) -> dict:
>     length = int(line[0:3])      # 3-stellige Gesamtlänge
>     field_id = line[3:7]         # 4-stelliges Feldkennzeichen
>     content = line[7:length]     # Inhalt bis Zeilenende
>     return {"field": field_id, "value": content}
>
> # Beispiel-Zeile: "0148000Max Mustermann"
> # → {"field": "8000", "value": "Max Mustermann"}
>
> # Wichtige Feldkennzeichen:
> # 8000 = Patientenname, 3000 = BSNR, 0101 = Abrechnungsquartal
> # 4239 = Scheinart (AM/UE/P/BG), 5001 = ICD-10-Code
> # 5005 = Diagnosesicherheit (G/V/A/Z), 5009 = EBM-Ziffer
> ```
> - Spezifikation KVDT 6.02 (9. März 2026): [update.kbv.de PDF](https://update.kbv.de/ita-update/Abrechnung/KBV_ITA_VGEX_Datensatzbeschreibung_KVDT.pdf)
> - Prüfpaket für Hersteller: [update.kbv.de Prüfpaket KVDT](https://update.kbv.de/ita-update/Abrechnung/Pruefverfahren/KBV_ITA_AHEX_Pruefpaket_KVDT.pdf) (v3.7, Stand März 2025)
> - Python-Parser: [github.com/maatini/py_kvdt](https://github.com/maatini/py_kvdt)
> - Syntax-Highlighting (vim): [github.com/Tanikai/vim-xdt-syntax](https://github.com/Tanikai/vim-xdt-syntax)
> - Änderungen ab Q2/2026 (wirksam ab 1. April 2026) in der KVDT-6.02-Spec dokumentiert

### Abgrenzung zu anderen xDT-Formaten

| Format | Zweck | Datenfluss |
|---|---|---|
| **KVDT** | Quartalsabrechnung | PVS → KV |
| **GDT** | Gerätekommunikation | PVS ↔ Medizingerät |
| **LDT** | Laborbefunde | Labor → PVS |
| **BDT** | Behandlungsdaten | PVS → PVS (Übergabe) |

### KVDT und die Telematikinfrastruktur

KVDT ist kein Bestandteil der [[Telematikinfrastruktur]]. Das Format existiert unabhängig von der TI und wird weiterhin parallel genutzt. Die TI betrifft die Praxen über separate Anwendungen: [[eAU]], [[E-Rezept]], [[ePA]] und [[KIM]].

Mittel- bis langfristig werden Teile des Abrechnungsprozesses über TI-Kommunikationswege modernisiert. Die KBV erprobt die Nutzung von [[KIM]] für den Versand von Abrechnungsbestätigungen und Fehlerrückmeldungen.

## Verknüpfungen

- [[xDT]] (Formatfamilie, zu der KVDT gehört, neben GDT, LDT, BDT)
- [[PVS]] (Praxisverwaltungssystem, das die KVDT-Datei erstellt und versendet)
- [[Kassenaerztliche-Vereinigung]] (Empfänger der KVDT-Abrechnungsdaten)
- [[KBV]] (standardisiert und pflegt die KVDT-Spezifikation)
- [[EBM]] (Einheitlicher Bewertungsmaßstab, Grundlage der abgerechneten Leistungen)
- [[ICD-10-GM]] (Diagnoseschlüssel, der in KVDT-Abrechnungsscheinen verwendet wird)
- [[KV-SafeNet]] (Übertragungsweg für KVDT-Dateien)
- [[KIM]] (TI-Kommunikationsdienst, zunehmend für KV-Datenaustausch genutzt)
- [[eAU]] (TI-Anwendung für AU-Bescheinigungen, komplementär zur KVDT-Abrechnung)

## Quellen

- [Wikipedia: Abrechnungsdatenträger (KVDT)](https://de.wikipedia.org/wiki/Abrechnungsdatentr%C3%A4ger)
- [KBV: Kassenärztliche Bundesvereinigung – Abrechnung](https://www.kbv.de/html/abrechnung.php)
- [KBV ITA: KVDT-Datensatzbeschreibung und Prüfmaterial](https://update.kbv.de/ita-update/Abrechnung/)
