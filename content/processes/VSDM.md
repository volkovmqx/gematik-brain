---
title: VSDM - Versichertenstammdatenmanagement
audience: [technical, non-technical]
tags: [prozess, vsdm, stammdaten]
aliases: [Versichertenstammdatenmanagement, Versichertenstammdaten-Management]
---

# VSDM - Versichertenstammdatenmanagement

**VSDM** ist der Online-Abgleich der Versichertenstammdaten. Bei jedem Arztbesuch werden die Daten auf der [[eGK]] mit den Daten der Krankenkasse verglichen und bei Bedarf aktualisiert.

## Erklärt für Einsteiger

Wenn du zum Arzt gehst und deine Gesundheitskarte einsteckst, passiert im Hintergrund ein Abgleich: Stimmt dein Name noch? Bist du noch bei der gleichen Krankenkasse versichert? Hat sich deine Adresse geändert? Das ist VSDM. Es stellt sicher, dass die Daten auf deiner Karte aktuell sind, ohne dass die Krankenkasse dir jedes Mal eine neue Karte schicken muss.

## Überblick

VSDM ist eine gesetzlich vorgeschriebene Anwendung. Beim ersten Kontakt pro Quartal muss das Primärsystem die Stammdaten online prüfen.

### Welche Daten?
- Name, Geburtsdatum, Adresse, Geschlecht
- Versicherungsdaten
- Erstattungs- und Leistungsinformationen

### Ablauf (VSDM 1.0)
1. [[eGK]] wird im Kartenterminal gelesen
2. [[Konnektoren|Konnektor]] baut Verbindung zum [[Fachdienst|VSDM-Fachdienst]] auf
3. Stammdaten werden mit Krankenkassen-Daten abgeglichen
4. Bei Abweichung: Update auf der [[eGK]]
5. Prüfnachweis wird erstellt

### Einschränkung
Aktuell nur für gesetzlich Versicherte verfügbar.

## VSDM 2.0

VSDM 2.0 ist die **erste TI-2.0-Anwendung** mit [[Zero-Trust]]-Architektur. Wichtige Änderungen:

- Daten werden direkt vom Fachdienst der Krankenkasse abgerufen (nicht mehr von der [[eGK]])
- Mobile Szenarien ohne physische Karte möglich
- Integration mit der [[Gesundheits-ID]]

### Zeitplan
- **30. Juni 2026**: Parallelbetrieb VSDM 1.0 und 2.0 beginnt
- **Februar 2027**: Vollständiger Rollout VSDM 2.0
- **Mitte 2027**: Ende des Parallelbetriebs, VSDM 1.0 wird abgeschaltet

## Technische Details

- Transport: HTTPS über [[Telematikinfrastruktur]]
- Authentisierung: [[eGK]] + [[Konnektoren|Konnektor]] + [[SMC-B]]
- Daten: Stammdaten-Container (XML-Format)
- Prüfnachweis: Signiertes Token des Fachdienstes

## Verknüpfungen

- Liest und aktualisiert [[eGK]]
- Läuft über [[Konnektoren]]
- Prüfnachweis relevant für [[ePA]] und [[E-Rezept]]
- Dienst auf der [[Telematikinfrastruktur]]
- VSDM 2.0 ist Vorreiter für die TI-2.0-Architektur
- [[PoPP]]: Ablöser des VSDM++-Präsenznachweises

## Quellen

- [VSDM - Fachportal](https://fachportal.gematik.de/anwendungen/versichertenstammdaten-management)
- [TI 2.0 – gematik](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
