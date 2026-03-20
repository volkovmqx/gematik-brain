---
title: xDT
audience: [technical]
tags: [standards, datenaustausch, interoperabilität, historisch, kvdt, gdt, ldt, bdt]
aliases: [xDT-Formate, KVDT, GDT, LDT, BDT, Gerätedatentransfer]
maturity: immergruen
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, hersteller, it-dienstleister]
  interests: [technik, compliance, business]
---

# xDT

**xDT** ist der Sammelbegriff für eine Familie älterer deutscher Datenaustauschformate im ambulanten Gesundheitswesen: KVDT, GDT, LDT und BDT.

## Erklärt für Einsteiger

Lange bevor es FHIR und moderne Webschnittstellen gab, mussten Arztpraxissysteme, Labore und Abrechnungsstellen Daten austauschen. Dafür entwickelten die Kassenärztlichen Vereinigungen eigene Formate mit strengen Regeln: jedes Feld hat eine feste Nummer, jede Zeile eine feste Struktur. Das ist wie ein sehr alter Datei-Standard, bei dem man genau wissen muss, in welchem "Fach" welche Information steckt. Diese Formate heißen gemeinsam xDT. Viele Praxissysteme nutzen sie noch heute, weil die Umstellung auf modernere Standards Zeit kostet.

## Überblick

Die xDT-Formate wurden seit den 1980er und 1990er Jahren von der [[KBV]] (Kassenärztliche Bundesvereinigung) und den Kassenärztlichen Vereinigungen entwickelt und standardisiert. Sie dienten als technische Basis für den elektronischen Datenaustausch im ambulanten Sektor, lange bevor internationale Standards wie [[HL7]] oder [[FHIR]] im deutschen Markt verbreitet waren.

Trotz ihres Alters sind xDT-Formate noch weit verbreitet: Viele [[PVS]] (Praxisverwaltungssysteme) unterstützen sie als primäre Schnittstelle zu Laborgeräten und Abrechnungssystemen.

> [!interesse-compliance]
> Für die GKV-Abrechnung ist [[KVDT]] (Teil der xDT-Familie) Pflicht. Alle zugelassenen PVS-Systeme müssen die aktuelle KVDT-Spezifikation umsetzen. GDT-Schnittstellen sind de-facto-Standard für die Anbindung medizinischer Geräte. Ohne GDT-Schnittstelle können viele Geräte (EKG, Spirometer, Blutdruckmessgeräte) nicht in das PVS integriert werden.

### Die xDT-Familie

| Format | Langname | Zweck |
|--------|----------|-------|
| **[[KVDT]]** | Abrechnungsdatenträger | Abrechnungsdaten von Praxen an die Kassenärztliche Vereinigung |
| **[[GDT]]** | Gerätedatentransfer | Datenaustausch zwischen Praxissystemen und Medizingeräten (EKG, Laborgeräte, Spirometer) |
| **[[LDT]]** | Labor-Datentransfer | Übermittlung von Laborbefunden vom Labor an die Arztpraxis |
| **BDT** | Behandlungsdatenträger | Übertragung von Behandlungsdaten zwischen Praxen (z.B. bei Praxisübergabe) |

## Technische Details

### Aufbau und Format

xDT-Dateien sind textbasierte, zeilenstrukturierte Dateien. Jede Zeile folgt dem Schema:

```
LängeFeldnummerInhalt
```

Zum Beispiel:

```
0148000Max Mustermann
```

Dabei ist:
- `014` die Länge der Zeile (3 Stellen, inklusive Feldnummer und Zeilenende)
- `8000` die Feldnummer (4 Stellen)
- `Max Mustermann` der Inhalt

Die Feldnummern sind in der jeweiligen xDT-Spezifikation definiert und beschreiben den semantischen Inhalt (z.B. Patientenname, Geburtsdatum, Diagnose). Das Format ist nicht selbstbeschreibend: Ohne die Spezifikation ist eine Datei nicht interpretierbar.

### GDT im Detail

GDT ist die bekannteste xDT-Variante und wird bis heute aktiv genutzt. Es verbindet Arztpraxissysteme mit Medizingeräten:

1. Das [[PVS]] sendet eine GDT-Datei mit Patientenstammdaten an das Gerät (z.B. EKG, Spirometer, Ultraschall).
2. Das Gerät führt die Messung durch und erzeugt eine GDT-Antwortdatei mit den Messergebnissen.
3. Das PVS liest die Antwortdatei und übernimmt die Werte in die Patientenakte.

Die aktuelle GDT-Version ist GDT 3.1, die Mitte der 2010er Jahre vom Qualitätsring Medizinische Software (QMS) standardisiert und von der [[KBV]] verabschiedet wurde. GDT 3.1 unterstützt auch den Austausch von Bild- und PDF-Anhängen.

> [!praxis-tipp] Praxis-Tipp: GDT-Schnittstelle bei neuen Geräten prüfen
> Kaufen Sie ein neues Medizingerät (EKG, Spirometer, Ultraschall, Blutdruckmessgerät)? Dann prüfen Sie vor dem Kauf die GDT-Kompatibilität.
>
> Checkliste vor dem Gerätekauf:
> 1. Unterstützt das Gerät GDT 3.1? (Wichtig: Nicht GDT 2.1 oder ältere Versionen, es sei denn Ihr PVS verlangt das.)
> 2. Welcher PVS-Anbieter ist freigegeben? Fragen Sie den Gerätehersteller nach der Kompatibilitätsliste für Ihr PVS.
> 3. Wer konfiguriert die GDT-Schnittstelle? Klären Sie im Vorfeld, ob PVS-Anbieter oder IT-Dienstleister das Setup übernimmt.
>
> Häufiger Fehler: Gerät wird geliefert, aber die GDT-Verbindung ist nicht eingerichtet. Befunde landen nicht automatisch in der Patientenakte. Zeitaufwand für die Einrichtung: ca. 1-2 Stunden durch einen IT-Dienstleister.

### LDT im Detail

[[LDT]] ist der Standard für die Übermittlung von Laborbefunden. Labore senden LDT-Dateien an die beauftragenden Arztpraxen. Die aktuell verbreitete Version ist LDT 3.0, die eine reichere Struktur als Vorgängerversionen bietet und auch LOINC-Codes für Laborparameter unterstützt.

LDT-Dateien können als Einzelsatzdateien oder als Batchdateien mit mehreren Befunden geliefert werden.

### KVDT und Abrechnung

KVDT ist das Format für die Quartalsabrechnung der niedergelassenen Ärzte mit der Kassenärztlichen Vereinigung ([[Kassenaerztliche-Vereinigung]]). Jede Praxis übermittelt nach Quartalsende ihre Abrechnungsdaten im KVDT-Format an die zuständige KV. Die KV prüft die Daten und überweist die Vergütung.

### Migrationspfad zu FHIR

Die [[KBV]] und die [[gematik]] treiben die Ablösung der xDT-Formate durch [[FHIR]] R4 voran:

- Das **E-Rezept** nutzt FHIR statt KVDT-Strukturen.
- Die **[[ePA]]** speichert Dokumente im FHIR-Format.
- **[[ISiK]]** definiert FHIR-basierte Schnittstellen für den stationären Bereich.
- GDT soll langfristig durch FHIR-basierte Geräteschnittstellen ersetzt werden. Ein konkreter Migrationspfad ist noch nicht vollständig definiert.

In vielen PVS-Systemen koexistieren xDT und FHIR: xDT für Altschnittstellen (Laborgeräte, KV-Abrechnung), FHIR für neue TI-Anwendungen.

> [!dev-quickstart] Dev Quickstart: xDT-Datei parsen und GDT-Schnittstelle testen
> xDT-Zeilenformat: `LLLFFFFInhalt\r\n` (3-stellige Länge + 4-stellige Feldnummer + Inhalt)
> ```python
> # xDT-Parser (Python) - Grundstruktur
> def parse_xdt_line(line: bytes) -> dict:
>     length = int(line[0:3])
>     field_id = line[3:7].decode("latin-1")
>     content = line[7:length - 2].decode("latin-1")  # ohne CR+LF
>     return {"field": field_id, "value": content}
>
> # GDT-Datei einlesen (typisch: shared folder oder COM-Port)
> with open("/pfad/zu/messung.gdt", "rb") as f:
>     for raw_line in f:
>         record = parse_xdt_line(raw_line)
>         print(f"{record['field']}: {record['value']}")
> # Wichtige GDT-Feldnummern:
> # 8000 = Satzart, 3000 = Patienten-ID, 3102 = Name, 6200 = Messwert
> ```
> GDT-Schnittstelle in PVS: Shared-Folder-Modell (Verzeichnis für Aufträge + Ergebnisse).
> - KVDT-Spezifikation: [update.kbv.de/ita-update/Abrechnung](https://update.kbv.de/ita-update/Abrechnung/)
> - GDT-Spezifikation (v3.1): [qms-standards.de](https://www.qms-standards.de/standards/gdt-schnittstelle/)
> - LDT 3.0 Spezifikation: [update.kbv.de/ita-update/Labor](https://update.kbv.de/ita-update/Labor/Labordatenkommunikation/)

> [!interesse-technik]
> xDT-Dateien sind zeilenbasierte Textdateien: Format LLLFFFFContent (3-stellige Länge + 4-stellige Feldnummer + Inhalt). Keine XML/JSON-Struktur, kein Schema-Autodiscovery. Parser müssen gegen die KBV-Spezifikation implementiert werden. GDT-Schnittstelle in PVS läuft typischerweise über lokales Dateisystem (Shared-Folder-Modell) oder COM-Port. KVDT-Spezifikation: [update.kbv.de](https://update.kbv.de/ita-update/Abrechnung/). GDT-Spezifikation (ab Version 3.5): [qms-standards.de](https://www.qms-standards.de/standards/gdt-schnittstelle/). Migration zu FHIR: Kein KVDT-Migrationsdatum gesetzt; GDT-Migration noch in Konzeptphase.

> [!interesse-business]
> Der xDT-Markt ist wartungsgetrieben: Kein Neuentwicklungsboom, aber hoher Bedarf an Interoperabilitäts-Middleware zwischen alten xDT-Geräten und neuen FHIR-Systemen. Hersteller, die FHIR-zu-GDT-Adapter oder PVS-Integrationsplattformen anbieten, profitieren von der langen Übergangsdauer. Schätzung: Die vollständige xDT-Ablösung dauert noch 10-15 Jahre.

## Verknüpfungen

- [[PVS]] (Praxisverwaltungssysteme; primäre Nutzer der xDT-Formate)
- [[KBV]] (entwickelt und pflegt die xDT-Spezifikationen)
- [[KVDT]] (eigenständige Seite zur Quartalsabrechnung)
- [[GDT]] (eigenständige Seite zum Gerätedatentransfer)
- [[LDT]] (eigenständige Seite zur Laborbefundübermittlung)
- [[Kassenaerztliche-Vereinigung]] (Empfänger von KVDT-Abrechnungsdaten)
- [[FHIR]] (moderner Nachfolgestandard; löst xDT schrittweise ab)
- [[HL7]] (internationale Standardfamilie, zu der FHIR gehört)
- [[LOINC]] (Terminologie für Laborparameter; in LDT 3.0 integriert)

## Quellen

- [KBV ITA-Update Portal: KVDT-Spezifikationen](https://update.kbv.de/ita-update/Abrechnung/)
- [QMS: GDT-Schnittstelle (Qualitätsring Medizinische Software)](https://www.qms-standards.de/standards/gdt-schnittstelle/)
- [Wikipedia: Gerätedatentransfer (GDT)](https://de.wikipedia.org/wiki/Ger%C3%A4tedatentransfer)
- [KBV ITA-Update Portal: LDT Labordatenkommunikation](https://update.kbv.de/ita-update/Labor/Labordatenkommunikation/)
