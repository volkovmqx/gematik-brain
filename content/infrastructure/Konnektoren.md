---
title: Konnektoren
audience: [technical, non-technical]
tags: [infrastruktur, konnektor, hardware]
---

# Konnektoren

**Konnektoren** sind die zentralen Zugangsgeräte zur [[Telematikinfrastruktur]]. Sie stellen den sicheren VPN-Tunnel her und ubernehmen kryptografische Operationen.

## Erklart fur Einsteiger

Der Konnektor ist eine kleine Box, die in jeder Arztpraxis, Apotheke und jedem Krankenhaus steht. Er ist wie ein spezieller Router, der die Praxis mit dem sicheren Gesundheitsnetz (der TI) verbindet. Ohne dieses Gerat kann die Praxis keine Rezepte digital verschicken, keine Patientenakten offnen und keine sicheren E-Mails uber [[KIM]] senden. Der Konnektor liest auch die Chipkarten ([[eGK]], [[SMC-B]], HBA) und pruft, ob alles korrekt ist.

## Uberblick

Jede Einrichtung im Gesundheitswesen braucht entweder einen Konnektor oder die neue TI-Gateway-Losung, um an der TI teilzunehmen.

### Funktionen
- VPN-Verbindung zur TI
- Signatur-Erstellung (QES) mit HBA und [[SMC-B]]
- Ver- und Entschlusselung fur [[KIM]]
- Kartenterminal-Management ([[eGK]], HBA, [[SMC-B]])
- Zertifikatsprufung (OCSP)

## Architektur

### Komponenten
- **Konnektor-Hardware**: Zertifiziertes Gerat (z.B. von secunet, RISE)
- **Kartenterminals**: eHealth-KT zum Lesen der Chipkarten
- **Primarsystem**: Praxis-/Apothekensoftware (PVS, AVS, KIS)

### Schnittstellen
- SOAP-Webservices: Signatur, Verschlusselung, Kartendienste
- gRPC: Neuere APIs (TI 2.0)
- LDAP: Verzeichnisdienstabfragen

### Netzwerk
- RSA 2048 Verschlusselung (bis Ende 2025), danach ECC
- IPv4 mit Standard-MTU von 1500 (konfigurierbar)
- IPv6 mit Dual-Stack-Lite und reduzierter MTU von 1400
- Grossere Einrichtungen nutzen Highspeed-Konnektoren fur Skalierbarkeit

## TI 2.0: Ablosung durch TI-Gateway

Mit der TI 2.0 wird der Hardware-Konnektor schrittweise durch das **TI-Gateway** ersetzt:

- Virtuelle Konnektor-Funktionalitat (vKON) als Cloud-Service
- Eingebauter VPN-Zugangsdienst
- Unterstutzung bestehender Primarsystem-Schnittstellen
- mTLS-Konfiguration im Primarsystem erforderlich
- Ziel: Weniger Hardware, geringere Kosten, einfachere Wartung

## Verknupfungen

- Pflichtkomponente fur [[ePA]], [[E-Rezept]], [[KIM]], [[eAU]]
- Verarbeitet [[eGK]] und [[SMC-B]]
- Verbindet mit der [[Telematikinfrastruktur]]
- Wird von [[VSDM]] fur den Stammdatenabgleich genutzt

## Quellen

- [TI-Zugang - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
