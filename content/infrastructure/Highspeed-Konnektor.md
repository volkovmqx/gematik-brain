---
title: Highspeed-Konnektor
audience: [technical]
tags: [infrastruktur, konnektor, hardware, krankenhaus, mvz]
aliases: [HSK]
---

# Highspeed-Konnektor

Der **Highspeed-Konnektor (HSK)** ist eine skalierbare Variante des [[Konnektoren|Konnektors]] für größere Einrichtungen wie Krankenhäuser und [[MVZ]]. Er unterstützt höhere Durchsatzraten, mehr gleichzeitige Kartenterminals und bildet die technische Basis für das [[HSM-B]]-Pilotprojekt.

## Erklärt für Einsteiger

Ein normaler Konnektor ist wie ein WLAN-Router für eine Wohnung: Er verbindet ein paar Geräte mit dem Internet. Ein Highspeed-Konnektor ist wie ein industrieller Router für ein Bürogebäude mit hundert Mitarbeitern. Im Krankenhaus gibt es nicht zwei oder drei Ärzte, sondern Hunderte. Alle brauchen gleichzeitig Zugang zum sicheren Gesundheitsnetz. Der Highspeed-Konnektor kann das leisten, weil er deutlich leistungsfähiger und für den Dauerbetrieb ausgelegt ist.

## Überblick

Für kleine Einrichtungen (Einzelpraxen, Apotheken) reicht ein Standard-Konnektor. Ab einer bestimmten Größe, insbesondere für Krankenhäuser und größere [[MVZ]], ist der HSK die wirtschaftlichere und technisch passendere Wahl.

Der HSK ermöglicht:
- Anbindung vieler Arztarbeitsplätze und Kartenterminals an einem zentralen Zugang
- Höhere Verfügbarkeit durch redundante Konfigurationsmöglichkeiten
- Hosting von [[HSM-B]] (Hardware Security Module Typ B) als digitaler Ersatz für die physische [[SMC-B]]-Karte
- Unterstützung von mehr gleichzeitigen TI-Transaktionen als ein Standard-Konnektor

Hersteller des HSK ist im Produktivbetrieb **RISE GmbH** (im Auftrag der gematik). Der HSK ist nach der Produkttyp-Version (PTV) **2.1.1** zugelassen und muss wie alle Konnektoren von der [[gematik]] zertifiziert sein.

### Abgrenzung zum Standard-Konnektor

| Merkmal | Standard-Konnektor | Highspeed-Konnektor |
|---|---|---|
| Zielgruppe | Einzelpraxis, Apotheke | Krankenhaus, MVZ, Pflegeeinrichtung |
| Gleichzeitige Terminals | begrenzt (ca. 5) | viele (skalierbar) |
| HSM-B-Unterstützung | nein | ja (Pilotbetrieb) |
| Form | Desktop/Tischgerät | Server-Rack-Einheit |
| Betriebsmodell | On-Premise | On-Premise oder cloud-gehostet |

## Technische Details

### Architektur

Der HSK ist als zentraler TI-Zugangspunkt für die gesamte Einrichtung konzipiert. Er integriert die Funktion mehrerer Standard-Konnektoren in einem einzigen, hochverfügbaren System:

- Zentraler VPN-Tunnel zur [[Telematikinfrastruktur]] (über [[VPN-Zugangsdienst]])
- Verwaltung mehrerer gleichzeitiger Kartenterminal-Sessions
- SOAP-Webservice-Schnittstelle für Primärsysteme ([[KIS]], [[PVS]])
- Unterstützung von gRPC für TI-2.0-Anwendungen

### HSM-B-Integration

Der HSK ist die einzige Konnektor-Variante, die das [[HSM-B]] (Hardware Security Module Typ B) hosten kann. Dabei wird die institutionelle Identität (bisher auf der physischen [[SMC-B]]-Karte) direkt im HSK als kryptografisches Modul hinterlegt. Der HSK kann HSM-B und [[SMC-B]] **parallel betreiben**, was eine schrittweise Migration ohne Betriebsunterbrechung ermöglicht.

### Cloud-Hosting-Modell

Im Gegensatz zum Standard-Konnektor, der immer On-Premise betrieben werden muss, kann der HSK auch als cloud-gehostete Lösung betrieben werden. Das ermöglicht größeren Einrichtungen mit mehreren Standorten (z.B. Krankenhausverbünde, überregionale MVZ) einen zentralisierten TI-Zugang.

Das Cloud-Hosting-Modell des HSK bildet eine konzeptionelle Brücke zum [[TI-Gateway]]: Beide Ansätze entkoppeln den TI-Zugang von der lokalen Hardware. Der Unterschied liegt im Zertifizierungsweg und in der Zielgruppe.

### PTV 2.1.1

Der Produkttyp-Version (PTV) 2.1.1 ist die aktuelle Zulassungsstufe des HSK. PTV-Versionen definieren den Funktionsumfang, den Sicherheitsanforderungen und die Kompatibilitätsstufe eines Konnektors in der TI. Die [[gematik]] veröffentlicht PTV-Anforderungen als Teil der Konnektor-Spezifikation (gemSpec_Kon).

## Verknüpfungen

- [[Konnektoren]] (Standard-Konnektor als Basis; HSK ist dessen skalierbare Variante)
- [[HSM-B]] (Hardware Security Module Typ B; wird im HSK gehostet)
- [[SMC-B]] (physische Karte, die vom HSM-B im HSK abgelöst werden soll)
- [[TI-Gateway]] (cloud-native Alternative; konzeptionell verwandt mit cloud-gehostetem HSK)
- [[MVZ]] (Hauptanwendungsfall für den HSK neben Krankenhäusern)
- [[KIS]] (Primärsystem im Krankenhaus, das über HSK auf die TI zugreift)
- [[Telematikinfrastruktur]] (Netz, zu dem der HSK den Zugang herstellt)
- [[gematik]] (Zulassungsbehörde für den HSK)

## Quellen

- [gematik: HSM-B Pilotprojekt im Highspeed-Konnektor (März 2026)](https://www.gematik.de/newsroom/news-detail/gemeinsames-pilotprojekt-zur-kartenlosen-institutions-identitaet-hsm-b-im-highspeed-konnektor)
- [Konnektor-Zulassung – gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [gemSpec_Kon: Konnektor-Spezifikation – gematik](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/)
