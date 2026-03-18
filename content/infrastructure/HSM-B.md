---
title: HSM-B
audience: [technical]
tags: [infrastruktur, sicherheit, identitaet, smcb, konnektor]
aliases: [Hardware Security Module Typ B]
---

# HSM-B

Das **HSM-B** (Hardware Security Module Typ B) ist der digitale Nachfolger der physischen [[SMC-B]]-Karte. Es speichert die institutionelle Identität einer Einrichtung direkt im [[Highspeed-Konnektor]] (HSK) und macht damit die Chipkarte überflüssig.

## Erklärt für Einsteiger

Bisher brauchte jede Arztpraxis und jedes Krankenhaus eine Plastikkarte (die SMC-B), die dauerhaft in ein Lesegerät gesteckt werden musste. Das war umständlich, besonders in großen Krankenhäusern. Das HSM-B ersetzt diese Karte durch einen sicheren digitalen Chip, der direkt im zentralen Netzwerkgerät des Krankenhauses eingebaut ist. Das Ergebnis: Keine Karte mehr, kein Lesegerät, kein PIN-Eintippen, und trotzdem ist die Identität des Krankenhauses sicher gespeichert.

## Überblick

Im März 2026 startete die [[gematik]] gemeinsam mit **RHÖN-KLINIKUM AG**, **D-Trust GmbH**, **DKTIG GmbH** und **RISE GmbH** einen Friendly-User-Test (FUT) für das HSM-B. Das Pilotprojekt findet ausschließlich bei RHÖN-KLINIKUM statt und hat keine Auswirkungen auf andere Einrichtungen oder den allgemeinen TI-Betrieb.

Das HSM-B löst das zentrale Problem großer Einrichtungen: Dort muss die [[SMC-B]] dauerhaft in einem Kartenterminal stecken und ist physisch gebunden. Mit dem HSM-B entfällt diese Anforderung. Die institutionelle Identität ist sicher im [[Highspeed-Konnektor]] hinterlegt und steht permanent zur Verfügung.

### Vorteile gegenüber SMC-B

- Kein physisches Kartenterminal für die Institutionsidentität erforderlich
- Kein PIN-Eintippen für Einrichtungsauthentisierungen
- Unterstützung mobiler Szenarien (z.B. Hausbesuche, ausgelagerte Standorte)
- Einfacheres Schlüsselmanagement (zentral im HSK statt auf einer Karte)
- Redundanzfähig (Institutionsidentität kann auf mehreren HSKs vorgehalten werden)

### Pilotpartner und Rollen

| Partner | Rolle |
|---|---|
| RHÖN-KLINIKUM AG | Testbetrieb (Leistungserbringer) |
| D-Trust GmbH | Zertifikaterstellung (Trustcenter) |
| DKTIG GmbH | Prozesskoordination |
| RISE GmbH | HSK-Herstellung und technische Umsetzung |

## Technische Details

### Sicherheitsarchitektur

Das HSM-B ist ein Hardware Security Module, das physisch innerhalb des [[Highspeed-Konnektor|Highspeed-Konnektors (HSK)]] verbaut ist. Es entspricht den Sicherheitsanforderungen der [[gematik]] an kryptografische Module in der TI:

- Speicherung privater Schlüssel in manipulationssicherem Hardware-Modul (tamper-resistant)
- Gleiche Zertifikatsstruktur wie die physische [[SMC-B]] (X.509-Zertifikate der TI-[[PKI]])
- Sicherheitsklasse vergleichbar mit Common Criteria EAL4+ (Anforderungen laut gematik-Spezifikation)
- Schlüsselerzeugung im HSM, keine Extraktion privater Schlüssel möglich

### Parallelbetrieb mit SMC-B

Der HSK kann während der Migrationsphase HSM-B und [[SMC-B]] **parallel betreiben**. Das ermöglicht eine schrittweise Migration: Einrichtungen können zunächst das HSM-B testen, während die SMC-B als Fallback erhalten bleibt.

### Funktionsumfang

Das HSM-B übernimmt dieselben kryptografischen Funktionen wie die [[SMC-B]]:

- Authentisierung der Einrichtung gegenüber TI-Diensten (C.HCI.AUT-Zertifikat)
- Organisationssignatur für [[KIM]]-Nachrichten
- Einrichtungsauthentisierung gegenüber der [[ePA]]
- Ver- und Entschlüsselung im TI-Kontext

### Abgrenzung zu HBA und SMC-B

Das HSM-B ersetzt ausschließlich die **institutionelle** Identität ([[SMC-B]]). Den **persönlichen** [[HBA]] des Arztes für die qualifizierte elektronische Signatur ([[QES]]) ersetzt es nicht. Für Arztbriefe, [[E-Rezept]] und [[eAU]] bleibt der HBA weiterhin erforderlich.

### Migrationsweg von SMC-B zu HSM-B

1. Einrichtung beantragt HSM-B-Zertifikate beim Trustcenter (D-Trust oder anderen zugelassenen Trustcentern)
2. Trustcenter erzeugt Zertifikate und übergibt sie sicher an den HSK-Hersteller
3. HSK wird mit HSM-B konfiguriert und in der Einrichtung in Betrieb genommen
4. Parallelbetrieb mit SMC-B in der Übergangsphase möglich
5. Nach erfolgreicher Produktivnahme kann die SMC-B deaktiviert werden

Der produktive Einsatz des HSM-B über den Piloten hinaus ist für **2026** geplant, nach Abschluss des Friendly-User-Tests und Abnahme durch die gematik.

## Verknüpfungen

- [[SMC-B]] (physische Karte, die das HSM-B ablöst)
- [[Highspeed-Konnektor]] (technischer Host des HSM-B)
- [[PKI]] (TI-PKI stellt Zertifikate für das HSM-B aus)
- [[HBA]] (persönlicher Heilberufsausweis; wird durch HSM-B nicht ersetzt)
- [[KIM]] (Signatur über HSM-B statt SMC-B)
- [[ePA]] (Einrichtungsauthentisierung über HSM-B)
- [[gematik]] (Spezifizierungsbehörde und Pilotprojektinitiator)
- [[Konnektoren]] (Standard-Konnektor unterstützt kein HSM-B; nur HSK)

## Quellen

- [gematik: Pilotprojekt zur kartenlosen Institutionsidentität (HSM-B, März 2026)](https://www.gematik.de/newsroom/news-detail/gemeinsames-pilotprojekt-zur-kartenlosen-institutions-identitaet-hsm-b-im-highspeed-konnektor)
- [gematik: SMC-B und Institutionskarten – Fachportal](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti)
- [SMC-B Spezifikation – gemSpec_SMC-B_OCI](https://gemspec.gematik.de/docs/gemSpec/gemSpec_SMC-B_OCI/)
