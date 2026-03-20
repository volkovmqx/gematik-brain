---
title: LDT
audience: [technical]
tags: [standards, datenaustausch, labor, pvs, xdt]
aliases: [Labor-Datentransfer, Labordatenkommunikation, LDT 3.2, LDT2, LDT3]
relevance:
  sectors: [arztpraxis, zahnarzt, krankenhaus, hersteller, it-dienstleister]
  interests: [technik, compliance]
maturity: setzling
---

# LDT

**LDT (Labor-Datentransfer)** ist das standardisierte Dateiformat der [[xDT]]-Familie für die elektronische Übermittlung von Laborbefunden vom Labor an die beauftragenden Arztpraxen.

## Erklärt für Einsteiger

Wenn ein Arzt Blut abnimmt und ins Labor schickt, kommt irgendwann ein Befundbericht zurück. Früher kam der per Post oder Fax. Heute schickt das Labor eine LDT-Datei, die das Praxissystem direkt einliest und die Werte automatisch in die Patientenakte überträgt. Kein Abtippen, keine Übertragungsfehler. LDT ist der vereinbarte Zettelformat-Standard, der sicherstellt, dass jedes Labor und jedes Praxissystem dieselbe Sprache sprechen.

## Überblick

LDT wurde von der [[KBV]] (Kassenärztliche Bundesvereinigung) zusammen mit den Kassenärztlichen Vereinigungen entwickelt und gehört zur [[xDT]]-Formatfamilie. Es standardisiert die Befundkommunikation zwischen Laboren und ambulanten Arztpraxen im deutschen Gesundheitswesen.

Die aktuelle Hauptversion ist **LDT 3.2.19** (Stand Mai 2025, oft kurz: LDT3). Die Version 3.x wurde Mitte der 2010er Jahre eingeführt und löst LDT 2.x ab. LDT 3 ist strukturell reicher als seine Vorgänger: Es unterstützt internationale Terminologien ([[LOINC]] für Laborparameter), mehrsprachige Kommentare und eine flexiblere Hierarchie für Befundgruppen.

LDT wird von praktisch allen [[LIS|Laborinformationssystemen]] (LIS) und [[PVS|Praxisverwaltungssystemen]] in Deutschland unterstützt. Es ist die Standardschnittstelle für:

- Einsenderlabore (Arztpraxis sendet Probe, Labor liefert Befund per LDT)
- Krankenhauslabore mit ambulanter Anbindung
- Point-of-Care-Geräte in der Praxis (Schnelltests, Koagulationsgeräte)

> [!interesse-compliance]
> LDT ist kein gesetzlicher Pflichtstandard, aber faktischer Marktstandard. [[PVS]]-Hersteller müssen LDT-Import für die KBV-Zertifizierung unterstützen. LIS-Hersteller implementieren LDT als Standardexport. Die aktuelle LDT-Spezifikation (Version 3.x) ist über das [[KBV]] ITA-Update-Portal unter update.kbv.de verfügbar.

## Technische Details

### Dateiformat

LDT-Dateien sind textbasierte, zeilenstrukturierte Dateien. Sie folgen dem gleichen Grundschema wie alle [[xDT]]-Formate:

```
LLLFFFFContent
```

Dabei ist:
- `LLL` die dreistellige Gesamtlänge der Zeile (inklusive Zeilenende `\r\n`)
- `FFFF` die vierstellige Feldnummer
- `Content` der Feldinhalt

Encoding: Windows-1252 (Latin-1). Keine UTF-8-Kodierung.

### Struktur eines LDT-Befunds

Ein LDT-3-Befund ist hierarchisch strukturiert:

```
Satz Obj_Kopfdaten (Satztyp 8000)
  ├── Absenderkennung (Labor)
  ├── Empfängerkennung (Arztpraxis)
  └── Versionsnummer
Satz Obj_Patient (Satztyp 8200)
  ├── Patientenstammdaten (Name, Geburtsdatum, KVNR)
Satz Obj_Untersuchungsanforderung (Satztyp 8310)
  ├── Anforderungs-ID
  ├── Einsendedatum
  └── Entnahmedatum
Satz Obj_Laborbefund (Satztyp 8320)
  ├── Einzelparameter (Satztyp 8410)
  │   ├── LOINC-Code (optional)
  │   ├── Parameterbezeichnung (Freitext oder kodiert)
  │   ├── Ergebniswert und Einheit
  │   ├── Referenzbereich
  │   └── Bewertung (normal/pathologisch/kritisch)
  └── Freitext-Kommentar
```

### Wichtige Feldnummern

| Feldnummer | Bedeutung |
|---|---|
| 8000 | Satztyp (z.B. 8220 = Patientensatz) |
| 3000 | Patientenname |
| 3001 | Vorname |
| 3103 | Geburtsdatum |
| 8402 | LOINC-Code des Laborparameters |
| 8410 | Ergebniswert |
| 8411 | Einheit |
| 8421 | Referenzbereich |
| 8428 | Pathologie-Kennzeichen |

### LOINC-Integration in LDT 3

LDT 3 unterstützt die Kodierung von Laborparametern mit [[LOINC]]-Codes (Logical Observation Identifiers Names and Codes). Feld 8402 nimmt den LOINC-Code auf. Die LOINC-Kodierung ist optional, aber empfohlen für die semantische Interoperabilität. Viele größere Labore kodieren ihre Standardparameter bereits mit LOINC.

### LDT-Kommunikationsweg

Der Befundtransport erfolgt asynchron:

1. Das [[LIS]] erzeugt nach Befundfreigabe eine LDT-Datei.
2. Die Datei wird per gesicherter E-Mail (häufig [[KIM]] für TI-Labore) oder per SFTP an das Praxissystem übermittelt.
3. Das [[PVS]] importiert die Datei automatisch und ordnet den Befund dem Patienten zu.

> [!praxis-tipp] Praxis-Tipp: Wenn der LDT-Import fehlschlägt
> Zwei häufige Fehlerursachen und ihre Lösung:
>
> **Befund wird nicht zugeordnet:** Das Labor verwendet eine andere Schreibweise des Patientennamens als Ihr PVS. Lösung: Auftragsnummer beim Einsenden immer mitgeben. Viele PVS können Befunde auch manuell nachträglich zuordnen.
>
> **Datei kommt gar nicht an:** Prüfen Sie, ob Ihr Labor per [[KIM]] liefert und Ihr KIM-Postfach aktiv ist. Ältere Labore senden noch per SFTP oder E-Mail. Fragen Sie Ihr Labor, welchen Weg es nutzt.
>
> Tipp für den Alltag: Richten Sie im PVS eine Wiedervorlage ein, wenn ein erwarteter Laborbefund nach 48 Stunden nicht eingegangen ist.

Für Laborgeräte in der Praxis selbst (Point-of-Care) erfolgt die Übertragung oft über das Dateisystem (Shared-Folder-Modell), analog zu [[GDT]].

### Abgrenzung zu GDT

LDT und [[GDT]] sind verwandte, aber unterschiedliche Standards:

| Merkmal | LDT | GDT |
|---|---|---|
| Richtung | Labor → Praxis | Praxis ↔ Gerät |
| Einsatz | Laborbefunde | Gerätedaten (EKG, Spirometer) |
| Hierarchie | Befundstruktur mit Gruppen | Flache Satzstruktur |
| LOINC-Support | Ja (ab LDT 3) | Nein |
| Transport | E-Mail, SFTP, KIM | Dateisystem |

> [!praxis-tipp] Praxis-Tipp: Point-of-Care-Geräte in der Praxis einbinden
> Haben Sie eigene Laborgeräte in der Praxis (z.B. HbA1c-Gerät, Urinanalysator, Koagulationsgerät)? Diese nutzen meist [[GDT]], nicht LDT. Aber manche Geräte können auch LDT-Dateien erzeugen.
>
> Checkliste für neue Praxisgeräte:
> 1. Beim Hersteller nachfragen: Welche Schnittstelle unterstützt das Gerät? (GDT, LDT, oder proprietär?)
> 2. PVS-Hersteller informieren, bevor das Gerät angeschafft wird. Nicht jedes PVS unterstützt alle Geräteschnittstellen.
> 3. Shared-Folder-Pfad im PVS konfigurieren, damit Befunde automatisch eingelesen werden.
>
> Einrichtungsaufwand: ca. 1-2 Stunden mit dem PVS-Support.

### Migrationsperspektive

Die [[KBV]] und [[gematik]] treiben die Ablösung von LDT durch [[FHIR]]-basierte Schnittstellen voran. Für die [[ePA]] sollen Laborbefunde als FHIR-Observation-Ressourcen gespeichert werden. Bestehende LDT-Implementierungen in [[LIS]] und [[PVS]] werden durch FHIR-Adapter ergänzt, nicht kurzfristig ersetzt.

> [!frist-warnung] Frist-Warnung: MIO Laborbefund als FHIR-Pflichtformat für die ePA
> **Rechtsgrundlage:** § 347 SGB V (Befüllungspflicht für Leistungserbringer ab 1. Oktober 2025); KBV-Festlegung MIO Laborbefund 1.0 auf Basis von [[FHIR]] R4.
> **Frist:** Die verbindliche Umsetzung des MIO Laborbefunds (strukturierter FHIR-Laborbefund) für [[LIS]]- und [[PVS]]-Hersteller wird voraussichtlich im Herbst 2026 durch die KBV verpflichtend festgelegt. Die Spezifikation ist bereits veröffentlicht (mio.kbv.de). Labore und PVS-Hersteller, die Laborbefunde in die ePA einstellen, müssen das MIO-Format ab dann unterstützen.
> **Handlungsbedarf:** LIS-Hersteller und Labore sollten die KBV-Festlegung im Herbst 2026 beobachten und ihre Roadmap zur FHIR-Befundübermittlung jetzt einplanen. Praxen müssen sicherstellen, dass ihr PVS die MIO-Laborbefund-Schnittstelle zeitgerecht unterstützt. Ab dem Abrechnungsjahr 2026 drohen Honorarkürzungen von 1 % und Halbierung der TI-Pauschale bei fehlender aktiver ePA-Nutzung (§ 341 Abs. 6 SGB V).

> [!klinik-integration] Klinik-Integration: LDT im Krankenhaus-Labor
> **LIS-KIS-Kopplung im Haus:** Im stationären Betrieb läuft die Befundübermittlung zwischen internem [[LIS]] und [[KIS]] typischerweise über HL7 v2 (Nachrichtentyp ORU^R01), nicht über LDT. LDT ist primär für externe Befundkommunikation relevant: an angeschlossene Einsenderpraxen, Ermächtigungsambulanzen und Kooperationspartner.
>
> **ISiK Stufe 3 (2025):** Krankenhäuser müssen Laborwerte als FHIR-Observation über ISiK-konforme Schnittstellen bereitstellen (§ 373 SGB V). Das ersetzt die interne HL7-v2-Strecke nicht, ergänzt sie aber durch eine FHIR-Fassade. Prüfen Sie beim LIS-Hersteller (z.B. Swisslab, Lauris, Nexus) die Roadmap für das ISiK-Modul "Laborbefunde".
>
> **Hochverfügbarkeit:** LIS-Betrieb ist 24/7-kritisch (Notaufnahme, OP, Intensivstation). Empfehlung: redundante HL7-Interface-Engine mit Failover und Monitoring der Nachrichtenwarteschlangen.

> [!dev-quickstart] Dev Quickstart: LDT 3 parsen und nach FHIR mappen
> LDT 3 ist Windows-1252-kodiert, zeilenorientiert. Schema pro Zeile: `LLLFFFFContent` (3 Bytes Länge, 4 Bytes Feldnummer, Rest Inhalt).
> ```python
> # Minimaler LDT3-Parser (Python)
> with open("befund.ldt", encoding="cp1252") as f:
>     for line in f:
>         field = line[3:7]
>         value = line[7:].rstrip("\r\n")
>         if field == "8402":
>             print(f"LOINC: {value}")   # z.B. "2345-7" (Serumglukose)
>         elif field == "8410":
>             print(f"Wert:  {value}")   # z.B. "5.4"
>         elif field == "8411":
>             print(f"Einheit: {value}") # z.B. "mmol/l"
> ```
> FHIR-Äquivalent für ePA: `Observation.code.coding.system = "http://loinc.org"`, `valueQuantity.value` + `valueQuantity.unit`.
> - Spezifikation: [update.kbv.de Labordatenkommunikation](https://update.kbv.de/ita-update/Labor/Labordatenkommunikation/)
> - Basisprofil DE R4 (Observation): [simplifier.net/basisprofil-de-r4](https://simplifier.net/basisprofil-de-r4)

> [!interesse-technik]
> **LDT-Spezifikation:** [update.kbv.de/ita-update/Labor/Labordatenkommunikation/](https://update.kbv.de/ita-update/Labor/Labordatenkommunikation/)
>
> **Encoding:** Windows-1252. UTF-8 bricht Umlaute in älteren LIS/PVS.
>
> **FHIR-Äquivalent für Laborwerte:** `Observation`-Ressource mit `code.coding.system = "http://loinc.org"` und `valueQuantity`.
>
> **Referenzbereich im FHIR-Profil:** `referenceRange.low` / `referenceRange.high` als `Quantity`.

## Verknüpfungen

- [[xDT]] (Formatfamilie, zu der LDT gehört)
- [[LIS]] (Laborinformationssystem, das LDT-Befunde erzeugt)
- [[PVS]] (Praxisverwaltungssystem, das LDT-Befunde empfängt und einliest)
- [[GDT]] (Schwesterformat für Praxisgerätedaten)
- [[KVDT]] (Schwesterformat für Quartalsabrechnung)
- [[LOINC]] (Terminologie für Laborparameter; in LDT 3 integriert)
- [[KBV]] (veröffentlicht und pflegt die LDT-Spezifikation)
- [[FHIR]] (Nachfolgestandard; Laborbefunde in ePA als FHIR-Observation)
- [[KIM]] (sicherer Übertragungsweg für LDT-Befunde via TI)
- [[ePA]] (Ziel für strukturierte Laborbefunde)

## Quellen

- [KBV ITA-Update Portal: LDT Labordatenkommunikation](https://update.kbv.de/ita-update/Labor/Labordatenkommunikation/)
- [Wikipedia: Labordatentransfer (LDT)](https://de.wikipedia.org/wiki/LDT_(Labordatentransfer))
- [LOINC: Logical Observation Identifiers Names and Codes](https://loinc.org/)
