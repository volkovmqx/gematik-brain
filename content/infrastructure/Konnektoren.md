---
title: Konnektoren
audience: [technical, non-technical]
tags: [infrastruktur, konnektor, hardware]
aliases: [Konnektor, TI-Konnektor, Health Connector]
---

# Konnektoren

**Konnektoren** sind die zentralen Zugangsgeräte zur [[Telematikinfrastruktur]]. Sie stellen den sicheren VPN-Tunnel her und übernehmen kryptografische Operationen.

## Erklärt für Einsteiger

Der Konnektor ist eine kleine Box, die in jeder Arztpraxis, Apotheke und jedem Krankenhaus steht. Er ist wie ein spezieller Router, der die Praxis mit dem sicheren Gesundheitsnetz (der TI) verbindet. Ohne dieses Gerät kann die Praxis keine Rezepte digital verschicken, keine Patientenakten öffnen und keine sicheren E-Mails über [[KIM]] senden. Der Konnektor liest auch die Chipkarten ([[eGK]], [[SMC-B]], [[HBA]]) und prüft, ob alles korrekt ist.

## Überblick

Jede Einrichtung im Gesundheitswesen braucht entweder einen Konnektor oder die neue [[TI-Gateway]]-Lösung, um an der TI teilzunehmen.

### Funktionen

- VPN-Verbindung zur TI
- Signatur-Erstellung ([[QES]]) mit [[HBA]] und [[SMC-B]]
- Ver- und Entschlüsselung für [[KIM]]
- Kartenterminal-Management ([[eGK]], [[HBA]], [[SMC-B]])
- Zertifikatsprüfung ([[OCSP]])

## Architektur

### Komponenten

- **Konnektor-Hardware**: Zertifiziertes Gerät (z.B. von secunet, RISE)
- **Kartenterminals**: eHealth-KT zum Lesen der Chipkarten
- **Primärsystem**: Praxis-/Apothekensoftware ([[PVS]], [[AVS]], [[KIS]])

### Netzwerk

- ECC 256 Verschlüsselung (seit 1. Januar 2026 Pflicht; RSA-only-Konnektoren haben keinen TI-Zugang mehr)
- IPv4 mit Standard-MTU von 1500 (konfigurierbar)
- IPv6 mit Dual-Stack-Lite und reduzierter MTU von 1400
- Größere Einrichtungen nutzen Highspeed-Konnektoren für Skalierbarkeit

## Technische Details

### SOAP-Webservices

Das Primärsystem kommuniziert mit dem Konnektor über SOAP-Webservices. Diese Schnittstelle ist in der gemSpec_Kon (Konnektor-Spezifikation) der [[gematik]] definiert. Die wichtigsten Dienste:

- **SignaturDienst**: Erstellt und prüft qualifizierte elektronische Signaturen ([[QES]]) via [[HBA]]
- **VerschlüsselungsDienst**: Ver- und Entschlüsselung von Nachrichten (für [[KIM]])
- **ZertifikatsDienst**: Liest Zertifikate von Smartcards und prüft deren Gültigkeit via [[OCSP]]
- **EventDienst**: Benachrichtigt das Primärsystem über Kartenereignisse (z.B. Karte eingesteckt)
- **KartendiensteKomfort**: Bietet vereinfachte Kartenadministration

Die SOAP-Schnittstelle ist abwärtskompatibel gehalten, damit bestehende Primärsysteme ohne Anpassung weitergenutzt werden können.

### gRPC für TI 2.0

Mit der Einführung von TI 2.0 werden neben SOAP auch **gRPC**-basierte APIs eingeführt. gRPC ist effizienter als SOAP, binärbasiert und besser für moderne Anwendungsarchitekturen geeignet. Neue Primärsysteme und Fachdienste können damit direkt integriert werden.

### ECC 256 Migration

Seit 1. Januar 2026 ist ECC 256 (Elliptic Curve Cryptography) für alle Konnektoren Pflicht. RSA-only-Konnektoren verlieren seither den TI-Zugang. Hintergrund: RSA gilt langfristig als weniger sicher gegenüber Quantencomputer-Angriffen, und ECC ermöglicht bei gleichem Sicherheitsniveau kürzere Schlüssel und schnellere Operationen.

### Netzwerkkonfiguration

- **IPv4**: Standard-MTU 1500 Byte; der VPN-Overhead reduziert die effektive Nutzlast leicht
- **IPv6**: Dual-Stack-Lite mit MTU 1400 Byte; ermöglicht parallelen Betrieb beider Protokollversionen
- Die VPN-Verbindung läuft zu einem der über 19 zugelassenen [[VPN-Zugangsdienst|VPN-Zugangsdienstanbieter]]

### Highspeed-Konnektor (HSK) und HSM-B

Für größere Einrichtungen (Krankenhäuser, [[MVZ]]) gibt es den **[[Highspeed-Konnektor]] (HSK)**. Er unterstützt höhere Durchsatzraten und kann mehrere Kartenterminals gleichzeitig verwalten.

Im März 2026 startete die [[gematik]] einen Friendly-User-Test für das **[[HSM-B]]** (Hardware Security Module Typ B) im HSK-Kontext. Beim HSM-B wird die institutionelle Identität (bisher auf der physischen [[SMC-B]]-Karte) direkt im HSK gespeichert. Beteiligte Pilotpartner: RHÖN-KLINIKUM, D-Trust, DKTIG, RISE. HSK kann HSM-B und [[SMC-B]] parallel betreiben, was eine schrittweise Migration ermöglicht.

## TI 2.0: Ablösung durch TI-Gateway

Mit der TI 2.0 wird der Hardware-Konnektor schrittweise durch das **[[TI-Gateway]]** ersetzt:

- Virtuelle Konnektor-Funktionalität (vKON) als Cloud-Service
- Eingebauter [[VPN-Zugangsdienst]]
- Unterstützung bestehender Primärsystem-Schnittstellen
- [[mTLS]]-Konfiguration im Primärsystem erforderlich
- Ziel: Weniger Hardware, geringere Kosten, einfachere Wartung

## Verknüpfungen

- Pflichtkomponente für [[ePA]], [[E-Rezept]], [[KIM]], [[eAU]]
- Verarbeitet [[eGK]] und [[SMC-B]]
- Verbindet mit der [[Telematikinfrastruktur]]
- Wird von [[VSDM]] für den Stammdatenabgleich genutzt

## Quellen

- [TI-Zugang - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
