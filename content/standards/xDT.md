---
title: xDT
audience: [technical]
tags: [standards, datenaustausch, interoperabilität, historisch, kvdt, gdt, ldt, bdt]
aliases: [xDT-Formate, KVDT, GDT, LDT, BDT, Gerätedatentransfer]
maturity: wachsend
---

# xDT

**xDT** ist der Sammelbegriff für eine Familie älterer deutscher Datenaustauschformate im ambulanten Gesundheitswesen: KVDT, GDT, LDT und BDT.

## Erklärt für Einsteiger

Lange bevor es FHIR und moderne Webschnittstellen gab, mussten Arztpraxissysteme, Labore und Abrechnungsstellen Daten austauschen. Dafür entwickelten die Kassenärztlichen Vereinigungen eigene Formate mit strengen Regeln: jedes Feld hat eine feste Nummer, jede Zeile eine feste Struktur. Das ist wie ein sehr alter Datei-Standard, bei dem man genau wissen muss, in welchem "Fach" welche Information steckt. Diese Formate heißen gemeinsam xDT. Viele Praxissysteme nutzen sie noch heute, weil die Umstellung auf modernere Standards Zeit kostet.

## Überblick

Die xDT-Formate wurden seit den 1980er und 1990er Jahren von der [[KBV]] (Kassenärztliche Bundesvereinigung) und den Kassenärztlichen Vereinigungen entwickelt und standardisiert. Sie dienten als technische Basis für den elektronischen Datenaustausch im ambulanten Sektor, lange bevor internationale Standards wie [[HL7]] oder [[FHIR]] im deutschen Markt verbreitet waren.

Trotz ihres Alters sind xDT-Formate noch weit verbreitet: Viele [[PVS]] (Praxisverwaltungssysteme) unterstützen sie als primäre Schnittstelle zu Laborgeräten und Abrechnungssystemen.

### Die xDT-Familie

| Format | Langname | Zweck |
|--------|----------|-------|
| **KVDT** | Abrechnungsdatenträger | Abrechnungsdaten von Praxen an die Kassenärztliche Vereinigung |
| **GDT** | Gerätedatentransfer | Datenaustausch zwischen Praxissystemen und Medizingeräten (EKG, Laborgeräte, Spirometer) |
| **LDT** | Labor-Datentransfer | Übermittlung von Laborbefunden vom Labor an die Arztpraxis |
| **BDT** | Behandlungsdatenträger | Übertragung von Behandlungsdaten zwischen Praxen (z.B. bei Praxisübergabe) |

## Technische Details

### Aufbau und Format

xDT-Dateien sind textbasierte, zeilenstrukturierte Dateien. Jede Zeile folgt dem Schema:

```
LängeFieldnummerInhalt
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
2. Das Gerät führt die Messung durch und erzeugt eine GDT-Antwortsatei mit den Messergebnissen.
3. Das PVS liest die Antwortdatei und übernimmt die Werte in die Patientenakte.

Die aktuelle GDT-Version ist GDT 3.1, die Mitte der 2010er Jahre vom Qualitätsring Medizinische Software (QMS) standardisiert und von der [[KBV]] verabschiedet wurde. GDT 3.1 unterstützt auch den Austausch von Bild- und PDF-Anhängen.

### LDT im Detail

LDT ist der Standard für die Übermittlung von Laborbefunden. Labore senden LDT-Dateien an die beauftragenden Arztpraxen. Die aktuell verbreitete Version ist LDT 3.0, die eine reichere Struktur als Vorgängerversionen bietet und auch LOINC-Codes für Laborparameter unterstützt.

LDT-Dateien können als Einzelsatzdateien oder als Batchdateien mit mehreren Befunden geliefert werden.

### KVDT und Abrechnung

KVDT ist das Format für die Quartalsabrechnung der niedergelassenen Ärzte mit der Kassenärztlichen Vereinigung ([[Kassenärztliche-Vereinigung]]). Jede Praxis übermittelt nach Quartalsende ihre Abrechnungsdaten im KVDT-Format an die zuständige KV. Die KV prüft die Daten und überweist die Vergütung.

### Migrationspfad zu FHIR

Die [[KBV]] und die [[gematik]] treiben die Ablösung der xDT-Formate durch [[FHIR]] R4 voran:

- Das **E-Rezept** nutzt FHIR statt KVDT-Strukturen.
- Die **[[ePA]]** speichert Dokumente im FHIR-Format.
- **[[ISiK]]** definiert FHIR-basierte Schnittstellen für den stationären Bereich.
- GDT soll langfristig durch FHIR-basierte Geräteschnittstellen ersetzt werden. Ein konkreter Migrationspfad ist noch nicht vollständig definiert.

In vielen PVS-Systemen koexistieren xDT und FHIR: xDT für Altschnittstellen (Laborgeräte, KV-Abrechnung), FHIR für neue TI-Anwendungen.

## Verknüpfungen

- [[PVS]] (Praxisverwaltungssysteme; primäre Nutzer der xDT-Formate)
- [[KBV]] (entwickelt und pflegt die xDT-Spezifikationen)
- [[Kassenärztliche-Vereinigung]] (Empfänger von KVDT-Abrechnungsdaten)
- [[FHIR]] (moderner Nachfolgestandard; löst xDT schrittweise ab)
- [[HL7]] (internationale Standardfamilie, zu der FHIR gehört)
- [[LOINC]] (Terminologie für Laborparameter; in LDT 3.0 integriert)

## Quellen

- [KBV: xDT-Spezifikationen](https://www.kbv.de/html/xdt.php)
- [KBV: GDT 3.1 Spezifikation](https://www.kbv.de/html/2016_27222.php)
- [Wikipedia: Gerätedatentransfer (GDT)](https://de.wikipedia.org/wiki/Ger%C3%A4tedatentransfer)
- [KBV: LDT 3.0](https://www.kbv.de/html/ldt.php)
