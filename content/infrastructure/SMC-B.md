---
title: SMC-B - Institutionskarte
audience: [technical]
tags: [infrastruktur, smcb, karte, identitaet]
---

# SMC-B - Security Module Card Typ B

Die **SMC-B** (Institutionskarte) identifiziert eine Einrichtung (Praxis, Apotheke, Krankenhaus) in der [[Telematikinfrastruktur]]. Sie ist das Gegenstück zum [[HBA]] (Heilberufsausweis), der einzelne Personen identifiziert.

## Erklärt für Einsteiger

Jede Arztpraxis oder Apotheke braucht eine Art "Ausweis" für das Gesundheitsnetz. So wie du deine [[eGK]] hast, hat die Praxis die SMC-B. Damit beweist die Praxis: "Wir sind eine echte, zugelassene Einrichtung." Ohne diese Karte kann die Praxis keine sicheren Nachrichten verschicken, keine Rezepte signieren und nicht an der TI teilnehmen.

## Funktionen

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

## Verknüpfungen

- Steckt im Kartenterminal des [[Konnektoren|Konnektors]]
- Identifiziert Einrichtung bei [[E-Rezept]], [[KIM]], [[ePA]]
- Wird für den [[TI-Messenger]] zur Identitätsprüfung genutzt
- Teil der [[PKI]] der [[Telematikinfrastruktur]]

## Quellen

- [Smartcards - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/smartcards)
