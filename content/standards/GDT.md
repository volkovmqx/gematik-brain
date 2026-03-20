---
title: GDT
audience: [technical]
tags: [standards, datenaustausch, pvs, medizingeräte, xdt]
aliases: [Gerätedatentransfer, GDT 3.1, Geräte-Datentransfer]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, hersteller, it-dienstleister]
  interests: [technik, compliance, business]
maturity: setzling
---

# GDT

**GDT (Gerätedatentransfer)** ist ein Dateiformat der [[xDT]]-Familie, das den standardisierten Datenaustausch zwischen [[PVS|Praxisverwaltungssystemen]] und medizinischen Geräten (EKG, Spirometer, Ultraschall, Blutdruckmessgerät) in ambulanten Praxen regelt.

## Erklärt für Einsteiger

Wenn der Arzt am EKG-Gerät auf "Messung starten" drückt, muss das Gerät wissen: Wer ist der Patient? Und wenn die Messung fertig ist, soll das Ergebnis automatisch in der Patientenakte landen. GDT ist der Standard, der das ermöglicht. Das Praxissystem schreibt eine kleine Datei mit den Patientendaten, das Gerät liest sie, führt die Messung durch und schreibt eine Ergebnisdatei zurück. Das Praxissystem liest diese Datei und speichert das Ergebnis. Alles ohne manuelles Abtippen.

## Überblick

GDT wurde von der [[KBV]] (Kassenärztliche Bundesvereinigung) in Zusammenarbeit mit dem Qualitätsring Medizinische Software (QMS) entwickelt und ist seit den 1990er Jahren Standard für die Gerätekommunikation in deutschen Arztpraxen.

Die aktuelle Version ist **GDT 3.1**, die Mitte der 2010er Jahre verabschiedet wurde. Sie unterstützt neben numerischen Messwerten auch PDF- und Bildanhänge, was ältere Versionen (GDT 2.x) nicht konnten.

GDT ist trotz seines Alters noch weit verbreitet. Praktisch alle [[PVS|Praxisverwaltungssysteme]] unterstützen GDT, und die meisten Hersteller von ambulanten Medizingeräten bieten GDT-Schnittstellen an. Die KBV-Datenbank der GDT-zertifizierten Geräte umfasst Tausende von Produkten.

GDT ist Teil der [[xDT]]-Familie und teilt deren zeilenbasiertes Textformat. Es ist eine parallele Entwicklung zu [[KVDT]] (Abrechnung), [[LDT]] (Laborbefunde) und BDT (Behandlungsdatenübergabe).

> [!interesse-compliance]
> GDT ist kein gesetzlicher Pflichtstandard, aber faktisch Marktstandard. Praxissoftware (PVS) muss GDT unterstützen, um KBV-zertifiziert zu sein. Geräte ohne GDT-Schnittstelle können nicht in das PVS integriert werden und erfordern manuelle Dateneingabe. Die aktuelle GDT-Spezifikation ist kostenlos über die KBV verfügbar.

> [!praxis-tipp] Praxis-Tipp: Neues Gerät anschließen
> Bevor Sie ein Medizingerät kaufen, prüfen Sie: Ist eine GDT-Schnittstelle im Lieferumfang enthalten oder kostenpflichtig? Manche Hersteller verlangen 200-500 Euro Aufpreis für das GDT-Modul.
>
> Checkliste vor dem Kauf:
> 1. KBV-Geräteliste prüfen: Ist das Gerät GDT-zertifiziert? (Liste unter update.kbv.de)
> 2. Ihr PVS-Anbieter fragen: Welche GDT-Version wird unterstützt? (2.1 oder 3.x?)
> 3. Freischaltkosten klären: Manche PVS verlangen 80-400 Euro für das GDT-Modul.
> 4. Einrichtungsaufwand einplanen: ca. 1-2 Stunden für Konfiguration und Testlauf.
>
> Häufiger Fehler: Import- und Export-Verzeichnis im PVS und Gerät sind nicht identisch. Lösung: Beide Seiten auf denselben Netzwerkpfad zeigen lassen.

## Technische Details

### Kommunikationsablauf

GDT arbeitet nach dem Request-Response-Prinzip mit Dateien:

1. Das [[PVS]] erzeugt eine **GDT-Auftragsdatei** (Satztyp 6301 "Auftragsanforderung") mit Patientenstammdaten und dem angeforderten Untersuchungstyp.
2. Das Gerät liest die Auftragsdatei aus einem konfigurierten Verzeichnis (GDT-Import-Ordner).
3. Das Gerät führt die Untersuchung durch.
4. Das Gerät erzeugt eine **GDT-Ergebnisdatei** (Satztyp 6302 "Untersuchungsergebnis") und legt sie in das GDT-Export-Verzeichnis.
5. Das PVS liest die Ergebnisdatei und importiert die Werte in die Patientenakte.

Die Kommunikation erfolgt asynchron über das Dateisystem. Es gibt keine direkte Netzwerkverbindung zwischen PVS und Gerät im GDT-Standard selbst; ein gemeinsam zugängliches Verzeichnis (Shared Folder, lokales Laufwerk oder Netzwerkpfad) ist ausreichend.

### Dateiformat

GDT-Dateien sind textbasierte, zeilenstrukturierte Dateien. Jede Zeile folgt dem Schema:

```
LLLFFFFContent
```

Dabei ist:
- `LLL` die dreistellige Gesamtlänge der Zeile (inklusive Feldnummer und Zeilenende `\r\n`)
- `FFFF` die vierstellige Feldnummer
- `Content` der Inhalt des Feldes

Beispiel einer minimalen GDT-Auftragsdatei (Satztyp 6301):

```
013810002.10
0178315GDT
0158316PRAXIS
01683170001
0168318EMPF
01683190001
023830120260320
0178000Mustermann
0148001Max
01080030101
0098019M
01492770
```

Erläuterung der wichtigsten Feldnummern im Auftrag:

| Feldnummer | Bedeutung | Inhalt im Beispiel |
|---|---|---|
| 8315 | GDT-Version | `2.10` |
| 8316 | Absender | `PRAXIS` |
| 8317 | Satznummer | `0001` |
| 8318 | Empfänger | `EMPF` |
| 8319 | Satznummer Empfänger | `0001` |
| 3010 | Auftragsdatum | `20260320` |
| 8000 | Patientenname | `Mustermann` |
| 8001 | Vorname | `Max` |
| 3103 | Geburtsdatum | `01011980` |
| 8019 | Geschlecht | `M` |
| 9277 | Untersuchungsart | Gerätespezifisch |

### Satztypen

GDT 3.1 definiert folgende relevante Satztypen:

| Satztyp | Bezeichnung | Richtung |
|---|---|---|
| **6301** | Auftragsanforderung | PVS → Gerät |
| **6302** | Untersuchungsergebnis | Gerät → PVS |
| **6303** | Stammdaten-Anforderung | PVS → Gerät |
| **6310** | Objekt-Anforderung (z.B. Kurve, PDF) | PVS → Gerät |
| **6311** | Objekt-Übertragung | Gerät → PVS |

> [!dev-quickstart] Dev Quickstart: GDT-Datei lesen und schreiben (Python)
> GDT-Zeilenformat: `LLL` (3-stellige Gesamtlänge) + `FFFF` (4-stellige Feldnummer) + Inhalt + `\r\n`
> ```python
> # GDT-Datei parsen (Encoding: Windows-1252, nicht UTF-8!)
> def parse_gdt(filepath):
>     fields = {}
>     with open(filepath, encoding="cp1252") as f:
>         for line in f:
>             line = line.rstrip("\r\n")
>             if len(line) < 7:
>                 continue
>             field_num = line[3:7]
>             content   = line[7:]
>             fields[field_num] = content
>     return fields
>
> # GDT-Auftragsdatei (Satztyp 6301) erzeugen
> def write_gdt_order(filepath, patient_name, vorname, geburtsdatum, geschlecht="M"):
>     def gdt_line(field_id, value):
>         content = f"{field_id}{value}"
>         length  = len(content) + 5  # 3 (Länge) + 2 (CRLF)
>         return f"{length:03d}{content}\r\n"
>
>     lines = [
>         gdt_line("8000", "6301"),        # Satztyp: Auftragsanforderung
>         gdt_line("9218", "GDT"),          # GDT-Kennzeichen
>         gdt_line("8315", "2.10"),         # GDT-Version
>         gdt_line("8316", "PRAXIS"),       # Absender
>         gdt_line("8318", "GERAET"),       # Empfänger
>         gdt_line("3000", patient_name),   # Patientenname
>         gdt_line("3001", vorname),        # Vorname
>         gdt_line("3103", geburtsdatum),   # Geburtsdatum TTMMJJJJ
>         gdt_line("3110", geschlecht),     # Geschlecht (M/W/X)
>     ]
>     with open(filepath, "w", encoding="cp1252") as f:
>         f.writelines(lines)
> ```
> - Encoding: **Windows-1252** (`cp1252`). UTF-8 bricht Umlaute im PVS.
> - Satztyp steht in Feld **8000** (nicht im Dateinamen).
> - Wichtige Feldnummern: `3000` Name, `3001` Vorname, `3103` Geburtsdatum, `3110` Geschlecht, `9277` Untersuchungsart
> - Spezifikation (kostenlos nach Registrierung): [QMS GDT-Schnittstelle](https://www.qms-standards.de/standards/gdt-schnittstelle/)

### GDT 3.1: Anhänge (Binärdaten)

GDT 3.1 führt die Möglichkeit ein, Binärdaten (PDFs, EKG-Kurven, Bilder) als Base64-kodierte Anhänge in die GDT-Datei einzubetten. Feldnummer 6303 enthält das Anhangformat (z.B. `PDF`, `BMP`), Feldnummer 6302 den Base64-kodierten Inhalt. Ältere GDT-Versionen (2.x) konnten nur strukturierte Messwerte übertragen.

### Integration in den PVS-Workflow

In der Praxissoftware ist GDT typischerweise über eine Geräteverwaltung konfiguriert. Für jedes angeschlossene Gerät wird festgelegt:

- Pfad für Import- und Export-Verzeichnisse
- Gerätetyp (EKG, Spirometer, Ultraschall usw.)
- Polling-Intervall (wie oft das PVS nach neuen Ergebnisdateien prüft)
- Feldmapping (welche GDT-Felder in welche PVS-Felder übernommen werden)

> [!praxis-tipp] Praxis-Tipp: GDT-Verbindung testen
> Nach der Einrichtung immer einen Testlauf durchführen, bevor das erste echte Patientendatum übertragen wird.
>
> Testschritte:
> 1. Testpatienten im PVS anlegen (Name: "GDT Test", Geburtsdatum: beliebig).
> 2. Untersuchungsauftrag aus dem PVS an das Gerät schicken.
> 3. Prüfen: Hat das Gerät die Patientendaten korrekt übernommen? Umlaute (ä, ö, ü) korrekt?
> 4. Testmessung am Gerät durchführen und Ergebnis zurückschicken.
> 5. Prüfen: Erscheint das Ergebnis automatisch in der Patientenakte?
>
> Häufiger Fehler: Umlaute erscheinen als Fragezeichen oder Zeichensalat. Ursache: Das Gerät erwartet Windows-1252-Kodierung, nicht UTF-8. Ihr PVS-Anbieter oder der Gerätehersteller kann die Kodierung korrigieren.

> [!interesse-technik]
> GDT-Testdateien und Spezifikationen: [QMS GDT-Schnittstelle (ab Version 3.5)](https://www.qms-standards.de/standards/gdt-schnittstelle/). Feldnummernliste und Satzaufbau sind in der Spezifikation vollständig dokumentiert. Für Hersteller bietet die KBV ein GDT-Prüfprogramm an. Hinweis: GDT-Dateien müssen in Windows-1252-Kodierung (Latin-1) geschrieben werden, nicht UTF-8. Umlaute und ß müssen daher als Windows-1252-Bytes vorliegen. Ein häufiger Implementierungsfehler ist die versehentliche UTF-8-Kodierung, die zu Anzeigefehlern für deutsche Sonderzeichen führt.

### Typische Geräteklassen mit GDT-Schnittstelle

| Geräteklasse | Typischer Untersuchungsauftrag | Ergebnistyp |
|---|---|---|
| EKG | Ruhe-EKG, Langzeit-EKG, Belastungs-EKG | Messwerte, EKG-Kurve (PDF oder proprietär) |
| Spirometer | Spirometrie, Peak-Flow-Messung | Messwerte (FEV1, FVC, PEF) |
| Ultraschall | Sono-Abdomen, Echo-Kardiographie | Messwerte, Bilder ([[DICOM]] oder JPEG) |
| Blutdruckmessgerät | 24h-RR-Messung | Messwertprofile |
| Augendruck (Tonometer) | Intraokulärdruck | Messwert in mmHg |
| Audiometer | Tonschwellenaudiometrie | Audiogramm (Messwerte) |
| Waage/Körperanalyse | BMI, Körperfettanteil | Messwerte |

### Verhältnis zu FHIR und Ablöseperspektive

GDT hat keinen festgelegten Ablösezeitpunkt. Die [[KBV]] hat bislang keinen offiziellen Migrationspfad von GDT auf [[FHIR]] veröffentlicht. Im Rahmen der [[HDDT]]-Initiative (Health Device Data Transfer, § 374a SGB V) soll ein FHIR-basierter Standard für die Gerätedatenübertragung an [[DiGA]] und die [[ePA]] entwickelt werden. HDDT und GDT haben jedoch unterschiedliche Anwendungsfälle: HDDT für mobile Geräte und Heimmonitoring, GDT für stationäre Praxisgeräte.

> [!interesse-business]
> GDT-Schnittstellen sind ein relevanter Kaufentscheidungsfaktor für Praxissoftware und Medizingeräte. Die KBV-Datenbank listet GDT-zertifizierte Geräte; eine Listung gilt als Gütemerkmal. Hersteller von Integrationsplattformen zwischen GDT und FHIR (für HDDT-Migration) adressieren einen wachsenden Nischenmarkt.

## Verknüpfungen

- [[xDT]] (Formatfamilie, zu der GDT gehört)
- [[PVS]] (Praxisverwaltungssystem, das GDT-Aufträge sendet und -Ergebnisse empfängt)
- [[KVDT]] (Schwesterformat für die Quartalsabrechnung)
- [[LDT]] (Laborformat, ebenfalls Teil der xDT-Familie)
- [[KBV]] (veröffentlicht und pflegt die GDT-Spezifikation)
- [[FHIR]] (moderner Nachfolgestandard; Migrationspfad noch nicht definiert)
- [[HDDT]] (FHIR-basierter Standard für Gerätedaten an DiGA, parallele Entwicklung)
- [[DiGA]] (digitale Gesundheitsanwendungen; HDDT ermöglicht Gerätedaten-Upload)
- [[ePA]] (Ziel für Gerätedaten über HDDT-Integration)

## Quellen

- [QMS: GDT-Schnittstelle (Qualitätsring Medizinische Software)](https://www.qms-standards.de/standards/gdt-schnittstelle/)
- [Wikipedia: Gerätedatentransfer (GDT)](https://de.wikipedia.org/wiki/Ger%C3%A4tedatentransfer)
- [KBV ITA-Update Portal: KVDT und xDT-Spezifikationen](https://update.kbv.de/ita-update/Abrechnung/)
- [gematik: HDDT-Spezifikation Release Candidate](https://fachportal.gematik.de/anwendungen/hddt)
