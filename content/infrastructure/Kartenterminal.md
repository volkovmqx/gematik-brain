---
title: Kartenterminal
audience: [technical, non-technical]
tags: [infrastruktur, kartenterminal, hardware, ehealth-kt]
aliases: [eHealth-Kartenterminal, eHealth-KT, Kartenlesegerät]
---

# Kartenterminal

Das **eHealth-Kartenterminal (eHealth-KT)** ist das Kartenlesegerät in Arztpraxen und anderen Gesundheitseinrichtungen, das die Chipkarten ([[eGK]], [[HBA]], [[SMC-B]]) mit dem [[Konnektoren|Konnektor]] oder dem [[TI-Gateway]] verbindet.

## Erklärt für Einsteiger

Stell dir vor, ein Arzt steckt deine Gesundheitskarte in ein Lesegerät auf dem Schreibtisch. Dieses Gerät ist das Kartenterminal. Es liest die Daten von der Karte und leitet sie sicher an den Computer der Praxis weiter. Ohne dieses Gerät kann der Arzt nicht auf die [[Telematikinfrastruktur]] zugreifen. Es ist so etwas wie der Türsteher zwischen deiner Karte und dem digitalen Gesundheitsnetz.

## Überblick

Das eHealth-Kartenterminal ist ein zugelassenes Hardwaregerät, das in jeder Arztpraxis, Zahnarztpraxis, Apotheke und Klinik vorhanden sein muss, die an die [[Telematikinfrastruktur]] angebunden ist. Es bildet die physische Schnittstelle zwischen den Chipkarten und der TI-Infrastruktur der Einrichtung.

Es gibt zwei Varianten:

- **Stationäres Terminal**: Fest installiertes Gerät am Empfang oder Behandlungsraum. Für Standard-Praxen die häufigste Form.
- **Mobiles Terminal**: Für Hausbesuche oder flexible Einsatzorte. Kommuniziert drahtlos mit dem Konnektor.

Kartenterminals sind zulassungspflichtig. Die [[gematik]] prüft und zertifiziert jedes Gerät. Nur zugelassene Terminals dürfen in der TI eingesetzt werden. Für die Aufnahme in die TI-Pauschale muss die Praxis die Anzahl der installierten Kartenterminals nachweisen.

## Technische Details

### Schnittstellen

Das Kartenterminal verfügt über zwei Chipkarten-Schnittstellen:

- **Kontaktbehaftet (ISO 7816)**: Physische Kontakte für [[eGK]], [[HBA]] und [[SMC-B]]
- **Kontaktlos (NFC, ISO 14443)**: Für die kontaktlose [[eGK]]-Nutzung (z.B. für VSDM-Online-Abgleich ohne Einstecken)

Die Verbindung zum [[Konnektoren|Konnektor]] oder [[TI-Gateway]] erfolgt über das lokale Netzwerk (LAN/WLAN) per TCP/IP. Das Protokoll zwischen Kartenterminal und Konnektor ist in der gematik-Spezifikation gemSpec_KT definiert.

### gSMC-KT (Sicherheitsmodul)

Jedes zugelassene eHealth-Kartenterminal enthält ein eigenes Sicherheitsmodul: die **gSMC-KT** (gerätespezifische Security Module Card für Kartenterminals). Diese Karte stellt die TI-Identität des Terminals bereit und ermöglicht eine verschlüsselte, authentisierte Verbindung zum Konnektor. Ohne gSMC-KT kann kein Terminal in der TI betrieben werden.

Im Zuge der ECC-Migration (Umstellung von RSA auf ECC) müssen alle gSMC-KT bis 31. Dezember 2026 auf ECC-fähige Nachfolger umgestellt sein.

### Kartensteckplätze

Ein Standard-Kartenterminal hat typischerweise zwei bis vier Kartensteckplätze:

- Slot 1: [[eGK]] des Patienten
- Slot 2: [[SMC-B]] der Einrichtung
- Slot 3/4: [[HBA]] des Arztes oder weiterer Nutzer

Im [[Konnektoren|Konnektor]] sind üblicherweise mehrere Kartenterminals gleichzeitig registriert (primäres und weitere Terminals für Behandlungsräume).

### Zulassungsverfahren

Die [[gematik]] vergibt Zulassungen für Kartenterminal-Produkte nach Prüfung gemäß Produkttypsteckbrief (gemProdT KT). Zugelassene Geräte sind im gematik-Produktkatalog gelistet. Hersteller sind unter anderem Cherry, Ingenico und Worldline.

## Verknüpfungen

- [[eGK]] (Versichertenkarte, wird im Terminal gelesen)
- [[HBA]] (Heilberufsausweis des Arztes, wird im Terminal gesteckt)
- [[SMC-B]] (Institutionskarte der Praxis, permanent im Terminal)
- [[Konnektoren]] (Gegenstelle des Kartenterminals im Netzwerk)
- [[TI-Gateway]] (Alternative zum Konnektor für TI 2.0)
- [[VSDM]] (Stammdatenabgleich via eGK und Terminal)
- [[NFDM]] (Notfalldaten werden über Terminal und Konnektor gelesen)
- [[gematik]] (Zulassungsbehörde für Kartenterminals)
- [[Telematikinfrastruktur]] (Gesamtsystem, in das das Terminal eingebunden ist)

## Quellen

- [Kartenterminals - gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/zugangsdienste/kartenterminals)
- [Smartcards und Kartenterminals - gematik.de](https://www.gematik.de/telematikinfrastruktur/ti-komponenten/kartenterminals)
- [gemSpec_KT - gematik Spezifikation](https://gemspec.gematik.de)
