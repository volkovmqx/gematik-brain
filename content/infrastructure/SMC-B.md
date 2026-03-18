---
title: SMC-B - Institutionskarte
audience: [technical]
tags: [infrastruktur, smcb, karte, identitaet]
aliases: [Institutionskarte, Security Module Card Typ B]
---

# SMC-B - Security Module Card Typ B

Die **SMC-B** (Institutionskarte) identifiziert eine Einrichtung (Praxis, Apotheke, Krankenhaus) in der [[Telematikinfrastruktur]]. Sie ist das Gegenstück zum [[HBA]] (Heilberufsausweis), der einzelne Personen identifiziert.

## Erklärt für Einsteiger

Jede Arztpraxis oder Apotheke braucht eine Art "Ausweis" für das Gesundheitsnetz. So wie du deine [[eGK]] hast, hat die Praxis die SMC-B. Damit beweist die Praxis: "Wir sind eine echte, zugelassene Einrichtung." Ohne diese Karte kann die Praxis keine sicheren Nachrichten verschicken, keine Rezepte signieren und nicht an der TI teilnehmen.

## Überblick

Die SMC-B ist die institutionelle Identitätskarte der [[Telematikinfrastruktur]]. Jede Einrichtung, die an der TI teilnimmt, benötigt eine SMC-B. Das betrifft Arztpraxen, Zahnarztpraxen, Apotheken, Krankenhäuser, Pflegeeinrichtungen und weitere Leistungserbringer.

Die Karte wird von der [[gematik]] herausgegeben. Sie enthält kryptografische Schlüsselpaare und X.509-Zertifikate, die die Einrichtung gegenüber den TI-Diensten authentisieren. Ohne eine gültige SMC-B kann keine der zentralen TI-Anwendungen genutzt werden: weder [[E-Rezept]], noch [[KIM]], noch [[ePA]].

Im Gegensatz zum [[HBA]], der an eine Einzelperson gebunden ist und eine qualifizierte elektronische Signatur ermöglicht, dient die SMC-B ausschließlich der Identifikation der Institution. Sie steckt dauerhaft im Kartenterminal des [[Konnektoren|Konnektors]] und muss nicht für jede Transaktion manuell bedient werden.

### Funktionen

- Authentisierung der Einrichtung gegenüber der TI
- Signatur-Erstellung für [[KIM]]-Nachrichten
- Zugriff auf die [[ePA]] im Kontext der Einrichtung
- Ver- und Entschlüsselung

## Technische Details

- Smartcard mit kryptografischem Prozessor
- X.509-Zertifikate der [[PKI|TI-PKI]]
- RSA- und ECC-Schlüsselpaare
- Wird im Kartenterminal gesteckt, das vom [[Konnektoren|Konnektor]] verwaltet wird
- Gerätespezifisches Sicherheitsmodul (weniger mechanische Belastung als [[eGK]])

### Zertifikate

- **C.HCI.AUT**: Authentisierungszertifikat
- **C.HCI.ENC**: Verschlüsselungszertifikat
- **C.HCI.OSIG**: Organisationssignatur

### Kartengenerationen und ECC-Migration

Die aktuelle Pflichtgeneration ist die **G2.1**. Sie unterstützt ECC-basierte Schlüsselpaare und entspricht den aktuellen kryptografischen Anforderungen der TI-[[PKI]].

Die Vorgängergeneration **G2.0** unterstützte ausschließlich RSA. Einrichtungen, die noch eine SMC-B G2.0 betreiben, müssen diese bis zum **30. Juni 2026** durch eine ECC-fähige G2.1 ersetzen. Ab diesem Datum verliert die RSA-only-Generation den TI-Zugang.

### HSM-B: Digitale Nachfolgetechnologie

Neben der physischen SMC-B-Karte entwickelt die [[gematik]] das **[[HSM-B]]** (Hardware Security Module Typ B) als Pilotprojekt für eine kartenlose institutionelle Identität. Beim HSM-B wird die digitale Institutionsidentität direkt im **[[Highspeed-Konnektor]] (HSK)** gespeichert, anstatt auf einer physischen Karte zu liegen.

Im März 2026 startete die [[gematik]] einen Friendly-User-Test mit dem HSM-B. Beteiligte Partner sind RHÖN-KLINIKUM, D-Trust, DKTIG und RISE. Vorteile des HSM-B gegenüber der physischen SMC-B:

- Keine physischen Kartenterminals für die institutionelle Authentisierung notwendig
- Keine PIN-Eingabe erforderlich
- Mobile Szenarien (z.B. Hausbesuche) werden erleichtert
- HSK kann HSM-B und SMC-B parallel betreiben, was eine schrittweise Migration ermöglicht

## Verknüpfungen

- Steckt im Kartenterminal des [[Konnektoren|Konnektors]]
- Identifiziert Einrichtung bei [[E-Rezept]], [[KIM]], [[ePA]]
- Wird für den [[TI-Messenger]] zur Identitätsprüfung genutzt
- Teil der [[PKI]] der [[Telematikinfrastruktur]]

## Quellen

- [Smartcards - Fachportal gematik](https://fachportal.gematik.de/telematikinfrastruktur/smartcards)
- [SMC-B Spezifikation - gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_SMC-B/)
