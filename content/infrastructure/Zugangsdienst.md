---
title: Zugangsdienst
audience: [technical, non-technical]
tags: [infrastruktur, vpn, ti-zugang, ti-gateway, netzwerk]
aliases: [TI-Zugangsdienst, VPN-Zugangsdienst, TI-Zugang, Zugangsdienstanbieter]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, pflege, hersteller, ti-infrastruktur, it-dienstleister]
  interests: [technik, compliance]
maturity: setzling
---

# Zugangsdienst

Der **Zugangsdienst** ist der Oberbegriff für alle zugelassenen Dienste, die eine gesicherte Verbindung zur [[Telematikinfrastruktur]] herstellen. Er umfasst den klassischen **VPN-Zugangsdienst** (für [[Konnektoren]]) und das neuere **[[TI-Gateway]]** (cloudbasierter Zugang für TI 2.0).

## Erklärt für Einsteiger

Die Telematikinfrastruktur ist kein öffentliches Netz, das man einfach so betreten kann. Man braucht einen sicheren Eingang. Der Zugangsdienst ist dieser Eingang. Früher war es wie ein gesichertes Firmengebäude mit einem Wachmann am Eingang (der Konnektor in der Praxis). Heute gibt es auch einen modernen Zugang über das Internet, wie ein VPN für zuhause: Das ist das TI-Gateway. Beide führen ins selbe sichere Netz.

## Überblick

Jede Einrichtung, die an der [[Telematikinfrastruktur]] teilnimmt (Arztpraxen, Apotheken, Krankenhäuser, Pflegeeinrichtungen), braucht einen zugelassenen Zugangsdienst. Die [[gematik]] lässt diese Dienste zu und überwacht ihre Qualität.

### Typen von Zugangsdiensten

**VPN-Zugangsdienst (klassisch)**
Der VPN-Zugangsdienst stellt einen verschlüsselten Tunnel zwischen dem lokalen [[Konnektoren|Konnektor]] in der Einrichtung und dem TI-Netz her. Der Konnektor baut automatisch eine VPN-Verbindung zum zugewiesenen VPN-Konzentrator auf. Über 19 zugelassene VPN-Zugangsdienst-Anbieter sind am Markt aktiv, darunter Deutsche Telekom, T-Systems, Arvato Systems und weitere.

**TI-Gateway (TI 2.0)**
Das [[TI-Gateway]] ist ein cloudbasierter Zugangsdienst ohne Hardware-Konnektor in der Praxis. Die Einrichtung verbindet sich per mTLS (Mutual TLS) direkt über das Internet mit dem TI-Gateway des Anbieters. Das Gateway übernimmt die Funktion des Konnektors. Der Zugangsdienst ist hier integraler Bestandteil des TI-Gateway-Produkts.

| Merkmal | VPN-Zugangsdienst | TI-Gateway |
|---|---|---|
| Hardware in Praxis | Konnektor erforderlich | Nicht erforderlich |
| Verbindungstyp | IPSec-VPN | mTLS über Internet |
| Architektur | TI 1.x | TI 2.0 / Zero-Trust |
| Verfügbar seit | 2019 (Rollout) | 2023 (Zulassungen) |

> [!interesse-compliance]
> Die Nutzung eines zugelassenen Zugangsdiensts ist Pflicht für alle TI-Teilnehmer. Eine eigene VPN-Lösung außerhalb der zugelassenen Dienste ist nicht zulässig. Der Zugangsdienst muss ununterbrochen verfügbar sein: Fällt er aus, sind alle TI-Anwendungen (E-Rezept, ePA, KIM, eAU) nicht mehr nutzbar. Die [[TI-Pauschale]] deckt anteilig die Kosten des Zugangsdienstes. Bei Wechsel des VPN-Zugangsdienst-Anbieters muss der Konnektor neu konfiguriert werden.

### Zugelassene Anbieter

Die [[gematik]] führt eine öffentliche Liste zugelassener Zugangsdienst-Anbieter auf dem Fachportal. Anbieter müssen regelmäßige Rezertifizierungen durchlaufen. Bekannte Anbieter:

- **Arvato Systems** (T-Systems-Beteiligungsunternehmen)
- **Deutsche Telekom / T-Systems**
- **KV-SafeNet** (spezialisiert auf KV-Abrechnungsnetze)
- **Bitmarck** (für Kassen-seitige Verbindungen)
- **RISE GmbH** (TI-Gateway-Anbieter)

Der Ausfall eines großen Anbieters kann viele Einrichtungen gleichzeitig treffen. Dies zeigte sich am 10. Februar 2026: Ein Rauchmelder-Alarm im Frankfurter IBM-Rechenzentrum löste eine automatische Systemabschaltung aus. Diese eine Ursache führte zu mehreren nachgelagerten Ausfällen: Der sektorale Identitätsprovider (IDP) von IBM war nicht erreichbar, und auch über T-Systems angebundene Einrichtungen verloren ihren TI-Zugang. Betroffene Dienste waren ePA, E-Rezept, KIM und VSDM. Die Störung dauerte von ca. 3:05 Uhr bis etwa 11:00 Uhr.

## Technische Details

### VPN-Zugangsdienst: Funktionsweise

Der VPN-Zugangsdienst basiert auf IPSec-VPN-Tunneln:

1. Der [[Konnektoren|Konnektor]] in der Einrichtung baut beim Start automatisch eine IPSec-Verbindung zum VPN-Konzentrator des Zugangsdienst-Anbieters auf.
2. Der VPN-Konzentrator terminiert den Tunnel und verbindet die Einrichtung mit dem TI-Netz.
3. Der Konnektor erhält eine interne TI-IP-Adresse und kann damit TI-Fachdienste erreichen.

Technische Parameter:
- **Protokoll**: IPSec (IKEv2)
- **Verschlüsselung**: AES-256-GCM (seit 2026 obligatorisch; ECC-basierte Zertifikate)
- **MTU**: IPv4: 1500, IPv6 Dual-Stack-Lite: 1400 (empfohlen)
- **Authentifizierung**: Konnektorzertifikat aus der TI-[[PKI]]

> [!interesse-technik]
> Entwickler und Administratoren: Der VPN-Zugangsdienst ist für Primärsysteme transparent. Die Primärsystem-Konfiguration zeigt nur die lokale Konnektor-IP (typisch: 10.x.x.x) als Endpunkt. TI-Dienste wie der E-Rezept-Fachdienst sind nur über TI-DNS-Namen erreichbar (z.B. `erp.zentral.erp.splitdns.ti-dienste.de`), die ausschließlich aus dem TI-Netz auflösbar sind. Bei TI-Gateway: Das Primärsystem kommuniziert direkt per mTLS mit dem Gateway-Endpunkt; die Konnektorzertifikate werden durch Softwarezertifikate ersetzt. Vollständige technische Spezifikation: gemSpec_Net_TI (Netzwerkspezifikation) und gemSpec_VPN_Zugangsdienst.

### TI-Gateway: Zero-Trust-Architektur

Das [[TI-Gateway]] implementiert das Zero-Trust-Prinzip (ZETA-Architektur der TI 2.0). Jede Verbindung wird individuell authentifiziert:

- Primärsystem und TI-Gateway authentifizieren sich gegenseitig per mTLS
- Zertifikate werden aus der TI-PKI ausgestellt
- Keine dauerhafte VPN-Verbindung: Jede Session wird neu aufgebaut
- Skalierbarkeit: Kein Single Point of Failure durch Hardware-Konnektor

Zugelassene TI-Gateway-Produkte sind auf dem gematik-Fachportal gelistet. RISE GmbH und weitere Anbieter haben Zulassungen erhalten.

### Netzwerkadressen und DNS

Das TI-Netz nutzt einen eigenen DNS-Resolverbereich (`*.ti-dienste.de`). Diese Namen sind im öffentlichen Internet nicht auflösbar. Beim VPN-Zugangsdienst übernimmt der Konnektor die DNS-Anfragen für TI-interne Namen. Beim TI-Gateway übernimmt der Gateway-Proxy die Namensauflösung.

CRL-Endpunkt für Zertifikatsabfragen: `download.crl.ti-dienste.de` (IP: 84.17.168.212) ist auch ohne TI-Verbindung erreichbar.

## Verknüpfungen

- [[Telematikinfrastruktur]] (das Netz, zu dem der Zugangsdienst Zugang verschafft)
- [[Konnektoren]] (Hardware-Endpunkt des klassischen VPN-Zugangsdiensts)
- [[TI-Gateway]] (cloudbasierter Zugangsdienst für TI 2.0)
- [[PKI]] (stellt die Zertifikate für VPN-Verbindungen aus)
- [[Zero-Trust]] (Architekturprinzip des TI-Gateways)
- [[mTLS]] (Verschlüsselungsprotokoll beim TI-Gateway)
- [[TI-Pauschale]] (vergütet Kosten des Zugangsdienstes für Arztpraxen)
- [[gematik]] (lässt Zugangsdienste zu und überwacht sie)

## Quellen

- [gematik Fachportal: TI-Zugang (zugelassene Anbieter)](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [gematik: TI 2.0 und TI-Gateway](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [gemSpec_VPN_Zugangsdienst – Spezifikation](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VPN_Zugangsdienst/latest/)
- [gemSpec_Net_TI – Netzwerkspezifikation](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Net_TI/latest/)
