---
title: LIS
audience: [technical]
tags: [infrastruktur, labor, krankenhaus, interoperabilität, hl7]
aliases: [Labor-Informationssystem, Laborinformationssystem, Laboratory Information System]
maturity: immergruen
---

# LIS

Ein **LIS** (Labor-Informationssystem) ist eine spezialisierte Software zur Verwaltung aller Laborprozesse: Auftragsannahme, Probenverfolgung, Analyseergebnisse und Qualitätskontrolle.

## Erklärt für Einsteiger

Wenn ein Arzt eine Blutprobe ins Labor schickt, muss vieles koordiniert werden: Welche Tests sollen gemacht werden? Welche Probe gehört zu welchem Patienten? Was ist das Ergebnis, und wann geht es zurück zum Arzt? Das LIS ist die Software, die das alles verwaltet. Es ist wie das Betriebssystem des Labors: Es nimmt Aufträge entgegen, verteilt sie an die Messgeräte, sammelt die Ergebnisse und schickt einen fertigen Befund zurück an die Arztpraxis oder das Krankenhaus.

## Überblick

Ein LIS deckt den gesamten Laborprozess ab:

- **Auftragsmanagement**: Entgegennahme von Laboraufträgen aus [[KIS]] (Krankenhäuser) oder [[PVS]] (Praxen)
- **Probenverfolgung**: Barcodebasierte Nachverfolgung jeder Probe durch alle Analyseschritte
- **Geräteanbindung**: Kommunikation mit Analysatoren (Hämatologie, Klinische Chemie, Mikrobiologie, Immunologie)
- **Ergebnisverwaltung**: Erfassung, Plausibilitätsprüfung und Freigabe von Messwerten
- **Befundkommunikation**: Rückübermittlung der Befunde an auftraggebende Einrichtungen
- **Qualitätskontrolle**: Ringversuchsverwaltung, Referenzbereichsmanagement, interne Qualitätssicherung

LIS-Systeme werden sowohl in Krankenhauslaboren (integriert in das [[KIS]]) als auch in selbständigen Einsenderlaboren (niedergelassene Laborärzte) eingesetzt.

### Markt und Anbieter

Wichtige LIS-Anbieter im deutschen Markt:

- **Swisslab** (Roche Diagnostics): Eines der verbreitetsten LIS-Systeme in Deutschland, insbesondere in Krankenhäusern
- **NEXUS Labor**: Verbreitet bei mittleren und großen Laboren, mit Fokus auf Interoperabilität
- **Dorner Health IT**: Bekannt für DEMIS-Integration und Mikrobiologie-Funktionalität
- **Meierhofer / Lauris**: LIS-Komponente des M-KIS-Systems
- **CGM LABDAQ** (CompuGroup Medical): Einsatz in niedergelassenen Laboren
- **Telepath (GLP Systems / Roper Technologies)**: Verbreitet in Pathologielaboren

## Technische Details

### Schnittstellen und Kommunikationsstandards

Das LIS kommuniziert über standardisierte Schnittstellen mit anderen Systemen:

#### HL7 v2 (Laborschnittstellen)

Die wichtigste Schnittstelle für die Labor-KIS-Kommunikation ist **[[HL7]] v2**:

- **OML^O21** (Order Message): Das KIS oder PVS sendet einen Laborauftrag an das LIS (Patient, angeforderte Parameter, Probenmaterial)
- **OUL^R22 / ORU^R01** (Observation Result): Das LIS schickt die Ergebnisse zurück an den Auftraggeber
- **ACK** (Acknowledgement): Bestätigung des Empfangs von Nachrichten

Diese Nachrichten folgen dem HL7-v2-Nachrichtenformat mit Segmenten (MSH, PID, ORC, OBR, OBX). Die Feldtrennzeichen und Kodierung sind standardisiert, aber in der Praxis gibt es viele lokale Varianten.

#### LDT (Labor-Datentransfer)

Für den Datenaustausch zwischen Einsenderlaboren und niedergelassenen Arztpraxen ist das **[[xDT]]-Format LDT** verbreitet. LDT 3.0 ist die aktuelle Version und unterstützt [[LOINC]]-Codes für Laborparameter. Das LIS erzeugt LDT-Dateien, die das PVS der Praxis importiert.

#### LOINC

[[LOINC]] (Logical Observation Identifiers Names and Codes) ist die Standardterminologie für Laborparameter. Ein LIS ordnet jedem Labortest einen LOINC-Code zu. Das ermöglicht die systemübergreifende Auswertung von Laborergebnissen. LOINC-Codes sind auch in den [[FHIR]]-Ressourcen für Laborwerte (Observation) vorgeschrieben.

#### FHIR-Schnittstellen

Moderne LIS-Systeme implementieren zunehmend [[FHIR]] R4. Im [[ISiK]]-Kontext werden Laborergebnisse als FHIR-Observation-Ressourcen bereitgestellt. Die ISiK-Profile für Laborwerte schreiben LOINC-Codes und spezifische Wertcodierungen vor.

#### DEMIS-Anbindung

Das LIS ist das primäre Quellsystem für Infektionsschutzmeldungen nach [[IfSG]]. Laboratorien sind gesetzlich verpflichtet, meldepflichtige Nachweise (z.B. SARS-CoV-2, Salmonellen, Tuberkulose) an das [[DEMIS]]-Meldeportal des [[RKI]] zu übermitteln. Moderne LIS-Systeme integrieren DEMIS direkt: Der Befund löst automatisch eine FHIR-basierte Meldung an DEMIS aus (FHIR Bundle mit DiagnosticReport und Composition).

Die DEMIS-Stammdaten (Meldetatbestände, LOINC-Codes für meldepflichtige Erreger) müssen im LIS aktuell gehalten werden. Ab April 2026 können nur Labore mit korrekt aktualisierten DEMIS-Stammdaten weiterhin Meldungen versenden.

### Probenidentifikation und Barcode

Jede Probe erhält beim Eingang ins Labor einen eindeutigen Barcode (meist Code-128 oder DataMatrix). Der Barcode-Scanner am Analysator liest die Proben-ID automatisch ein, ordnet sie dem Auftrag zu und übermittelt das Ergebnis direkt ins LIS ohne manuelle Eingabe. Das reduziert Fehler und beschleunigt den Prozess.

### Qualitätskontrolle und Akkreditierung

Labore müssen akkreditiert sein (DIN EN ISO 15189 für medizinische Laboratorien). Das LIS unterstützt die Qualitätssicherung durch:

- Verwaltung von Referenzbereichen (alter- und geschlechtsabhängige Normwerte)
- Automatische Delta-Check-Funktionen (Vergleich aktueller mit früheren Werten desselben Patienten)
- Ringversuchsverwaltung (INSTAND e.V., RfB)
- Audit-Trail für alle Wertänderungen und Freigaben

### Integration in die Telematikinfrastruktur

Das LIS ist kein direkter Teilnehmer der [[Telematikinfrastruktur]], aber über das [[KIS]] mit ihr verbunden:

- Laborergebnisse können über das KIS in die [[ePA]] des Patienten eingestellt werden
- [[KIM]]-Nachrichten können Laborbefunde im PDF- oder LDT-Format übertragen
- DEMIS-Meldungen laufen über das DEMIS-Meldeportal, das selbst FHIR-basiert ist

## Verknüpfungen

- [[KIS]] (übergeordnetes Krankenhausinformationssystem; sendet Laboraufträge ans LIS)
- [[PVS]] (Praxisverwaltungssystem; empfängt Laborbefunde per LDT vom LIS)
- [[HL7]] (Kommunikationsstandard für OML/OUL-Nachrichten zwischen KIS und LIS)
- [[FHIR]] (moderner Standard für Laborwerte als Observation-Ressourcen in ISiK)
- [[LOINC]] (Terminologie für Laborparameter; in LDT 3.0 und FHIR integriert)
- [[DEMIS]] (Meldeportal des RKI; LIS ist primäres Quellsystem für Labormeldungen)
- [[xDT]] (LDT-Format für Laborbefunde an Arztpraxen)
- [[ISiK]] (FHIR-basierter Interoperabilitätsstandard für Laborwerte im Krankenhaus)
- [[RKI]] (Empfänger der DEMIS-Labormeldungen)
- [[IfSG]] (Infektionsschutzgesetz; Rechtsgrundlage für Labormeldepflichten)

## Quellen

- [HL7 Version 2.x Messaging Standard – OML/OUL (HL7.org)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185)
- [LOINC: Logical Observation Identifiers Names and Codes](https://loinc.org/)
- [DEMIS-Dokumentation für Labore (RKI)](https://www.rki.de/DE/Content/Infekt/IfSG/DEMIS/DEMIS_node.html)
- [DIN EN ISO 15189: Medizinische Laboratorien (Beuth)](https://www.beuth.de/de/norm/din-en-iso-15189/354458573)
- [ISiK Modul Labor – gematik Simplifier](https://simplifier.net/isik)
