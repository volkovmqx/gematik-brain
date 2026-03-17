---
title: Konnektoren
audience: [technical, non-technical]
tags: [infrastruktur, konnektor, hardware]
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

### Schnittstellen
- SOAP-Webservices: Signatur, Verschlüsselung, Kartendienste
- gRPC: Neuere APIs (TI 2.0)
- LDAP: Verzeichnisdienstabfragen

### Netzwerk
- ECC 256 Verschlüsselung (seit 1. Januar 2026 Pflicht; RSA-only-Konnektoren haben keinen TI-Zugang mehr)
- IPv4 mit Standard-MTU von 1500 (konfigurierbar)
- IPv6 mit Dual-Stack-Lite und reduzierter MTU von 1400
- Größere Einrichtungen nutzen Highspeed-Konnektoren für Skalierbarkeit

## TI 2.0: Ablösung durch TI-Gateway

Mit der TI 2.0 wird der Hardware-Konnektor schrittweise durch das **[[TI-Gateway]]** ersetzt:

- Virtuelle Konnektor-Funktionalität (vKON) als Cloud-Service
- Eingebauter VPN-Zugangsdienst
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
