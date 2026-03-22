---
title: CRL
audience: [technical]
tags: [konzepte, pki, kryptographie, zertifikate, sicherheit, rfc5280]
aliases: [Certificate Revocation List, Zertifikatssperrliste, Sperrliste]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister]
  interests: [technik]
maturity: immergruen
---

# CRL

Eine **CRL** (Certificate Revocation List) ist eine signierte Liste gesperrter [[X.509]]-Zertifikate, die von einer Zertifizierungsstelle periodisch veröffentlicht wird. Sie ermöglicht Clients, ohne Online-Verbindung zum Aussteller zu prüfen, ob ein Zertifikat zurückgezogen wurde.

## Erklärt für Einsteiger

Stell dir vor, ein Arzt verliert seinen Berufsausweis. Die Kammer muss alle anderen Arztpraxen informieren, dass dieser Ausweis nicht mehr gültig ist. Eine Möglichkeit: Die Kammer veröffentlicht monatlich eine aktualisierte Liste aller gesperrten Ausweise, die jede Praxis herunterladen und lokal aufbewahren kann. Wenn jemand einen Ausweis zeigt, schaut die Praxis in ihrer Liste nach. Das ist das Prinzip der CRL. Der Nachteil: Die Liste kann veraltet sein, wenn seit dem letzten Download neue Ausweise gesperrt wurden.

## Überblick

CRLs sind in RFC 5280 (Internet X.509 Public Key Infrastructure: Certificate and CRL Profile) standardisiert und in RFC 6818 ergänzt. Sie sind ein grundlegender Bestandteil der [[PKI]]-Architektur und existieren seit den frühesten PKI-Implementierungen.

In der [[Telematikinfrastruktur]] veröffentlichen alle [[TSP|Trust Service Provider (TSP)]] CRLs für die von ihnen ausgestellten Zertifikate. Die CRL-Distribution Points (CDP) sind in jedem [[X.509]]-Zertifikat im gleichnamigen Extension-Feld hinterlegt, so dass ein Prüfsystem die zugehörige CRL automatisch abrufen kann.

### CRL vs. OCSP

Die CRL und das Online Certificate Status Protocol ([[OCSP]]) sind komplementäre Mechanismen für die Zertifikatssperrprüfung:

| Merkmal | CRL | [[OCSP]] |
|---|---|---|
| Verbindung | Kein Online-Zugang nötig (nach Download) | Permanente Online-Verbindung nötig |
| Aktualität | Periodisch (stundlich bis täglich) | Echtzeit |
| Datenmenge | Gesamte Sperrliste (kann groß werden) | Einzelabfrage pro Zertifikat |
| Latenz | Gering nach erstem Download | Netzwerk-Roundtrip bei jeder Prüfung |
| Offline-Nutzung | Möglich (bis zum Ablauf der CRL) | Nicht möglich ohne Verbindung |
| TI-Nutzung | Fallback, Offline-Szenarien | Primärprotokoll in der TI |

In der TI ist [[OCSP]] das primäre Protokoll für die Online-Zertifikatsprüfung. CRLs dienen als Rückfallmechanismus und für Offline-Szenarien, in denen kein OCSP-Responder erreichbar ist.

### Einsatz in der TI-PKI

Jeder akkreditierte [[TSP]] in der TI ist nach gematik-Vorgaben (gemKPT_PKI_TIP) verpflichtet, regelmäßig CRLs zu veröffentlichen. Die CRL-URL ist in den ausgestellten Zertifikaten im Feld `cRLDistributionPoints` eingetragen. [[Konnektoren]] und andere TI-Komponenten können CRLs herunterladen und lokal cachen, um Zertifikatsprüfungen auch bei vorübergehend fehlender OCSP-Erreichbarkeit durchführen zu können.

Die [[TSL]] (Trust Service List) referenziert für jeden TSP auch die CRL-Endpunkte, sodass alle TI-Komponenten stets aktuelle Sperrinformationen abrufen können.

> [!interesse-technik] CRL in der TI-PKI
> CRL-URL: In jedem TI-Zertifikat im Feld `cRLDistributionPoints` (OID 2.5.29.31). Format: DER-kodiertes ASN.1, Content-Type `application/pkix-crl`. CRL-Prüfung über gematik Referenzbibliothek: [github.com/gematik/ref-GemLibPki](https://github.com/gematik/ref-GemLibPki). ECC-Migration ab 1. Januar 2026: Neue TI-Zertifikate nutzen brainpoolP256r1; CRLs werden entsprechend mit ECDSA signiert. Sperrgrund (reasonCode)-Extension in der CRL: `keyCompromise` (Code 1), `affiliationChanged` (Code 3), `superseded` (Code 4), `cessationOfOperation` (Code 5). Delta-CRL-Support (RFC 5280 §5.2.4): reduziert Downloadgröße.

## Technische Details

### Aufbau einer CRL (ASN.1)

Eine CRL besteht nach RFC 5280 aus drei Teilen:

```
CertificateList  ::=  SEQUENCE  {
     tbsCertList          TBSCertList,
     signatureAlgorithm   AlgorithmIdentifier,
     signatureValue       BIT STRING
}
```

Der inhaltliche Kern ist `tbsCertList` (to-be-signed CertList):

```
TBSCertList  ::=  SEQUENCE  {
     version                 Version OPTIONAL (v2 = 1),
     signature               AlgorithmIdentifier,
     issuer                  Name,
     thisUpdate              Time,
     nextUpdate              Time OPTIONAL,
     revokedCertificates     SEQUENCE OF SEQUENCE {
          userCertificate    CertificateSerialNumber,
          revocationDate     Time,
          crlEntryExtensions Extensions OPTIONAL
     } OPTIONAL,
     crlExtensions      [0]  EXPLICIT Extensions OPTIONAL
}
```

Wichtige Felder:

| Feld | Bedeutung |
|---|---|
| `issuer` | Distinguished Name der ausstellenden CA |
| `thisUpdate` | Zeitpunkt der CRL-Erstellung |
| `nextUpdate` | Zeitpunkt der nächsten planmäßigen CRL-Aktualisierung |
| `userCertificate` | Seriennummer des gesperrten Zertifikats |
| `revocationDate` | Zeitpunkt der Sperrung |

### CRL-Erweiterungen (Extensions)

CRL-Version 2 (RFC 5280) unterstützt Extensions auf zwei Ebenen:

**CRL-Erweiterungen** (betreffen die gesamte CRL):
- `authorityKeyIdentifier`: Schlüsselkennzeichnung der ausstellenden CA
- `cRLNumber`: Monoton wachsende Sequenznummer der CRL
- `issuingDistributionPoint`: Einschränkung auf bestimmte Zertifikatstypen oder Verteilpunkte
- `deltaCRLIndicator`: Markiert eine Delta-CRL (enthält nur Änderungen seit der letzten vollständigen CRL)

**CRL-Entry-Erweiterungen** (betreffen einzelne gesperrte Zertifikate):
- `reasonCode`: Grund der Sperrung (keyCompromise, affiliationChanged, superseded, cessationOfOperation, privilegeWithdrawn, aACompromise)
- `invalidityDate`: Zeitpunkt, ab dem das Zertifikat als kompromittiert gilt (kann vor `revocationDate` liegen)
- `certificateIssuer`: Aussteller des gesperrten Zertifikats (nur bei indirekten CRLs)

### Delta-CRLs

Delta-CRLs (RFC 5280 §5.2.4) enthalten nur die Änderungen seit der letzten vollständigen Base-CRL. Ein Client muss die letzte Base-CRL plus alle Delta-CRLs kombinieren, um den aktuellen Stand zu erhalten. Dies reduziert die Download-Last bei großen CRLs erheblich.

Der `deltaCRLIndicator`-Extension in einer Delta-CRL enthält die `cRLNumber` der zugehörigen Base-CRL.

### Sperrgründe (reasonCode)

RFC 5280 §5.3.1 definiert folgende Sperrgründe:

| Code | Name | Bedeutung in der TI |
|---|---|---|
| 0 | unspecified | Kein spezifischer Grund |
| 1 | keyCompromise | Privater Schlüssel der Karte wurde kompromittiert |
| 3 | affiliationChanged | Arzt hat Zulassung gewechselt |
| 4 | superseded | Zertifikat durch neues ersetzt (z.B. Kartentausch) |
| 5 | cessationOfOperation | Praxis geschlossen, Gerät außer Betrieb |
| 6 | certificateHold | Vorläufige Sperrung (in TI-PKI selten genutzt) |
| 9 | privilegeWithdrawn | Berufsrechtliche Sanktion |

### Einschränkungen der CRL

Die CRL hat strukturelle Nachteile, die in der TI-PKI durch [[OCSP]] kompensiert werden:

- **Veralterungsrisiko**: Zwischen zwei CRL-Veröffentlichungen (z.B. 24 Stunden) bleibt ein Fenster, in dem gesperrte Zertifikate als gültig erscheinen.
- **Größenwachstum**: CRLs wachsen mit der Anzahl gesperrter Zertifikate. Große TSPs mit vielen Zertifikaten (z.B. für [[SMC-B]] oder [[eGK]]) produzieren umfangreiche CRLs.
- **Overhead**: Jeder Client muss die gesamte CRL herunterladen, auch wenn er nur ein einziges Zertifikat prüfen will.

Für die meisten TI-Prüfszenarien ist [[OCSP]] deshalb das primäre Protokoll. CRLs bleiben als Fallback und für auditrechtliche Zwecke (unveränderliche Sperrliste als Protokoll) relevant.

> [!dev-quickstart] Dev Quickstart: CRL-Prüfung mit OpenSSL (TI-Zertifikate)
> **CDP-URL aus Zertifikat auslesen:**
> ```bash
> openssl x509 -in zertifikat.pem -noout -text | grep -A 4 "CRL Distribution"
> # Ausgabe: URI:http://crl.tsp-example.de/crl/tsp-root.crl
> ```
> **CRL herunterladen und inspizieren:**
> ```bash
> curl -o tsp.crl "http://crl.tsp-example.de/crl/tsp-root.crl"
> openssl crl -inform DER -in tsp.crl -text -noout | head -40
> # Zeigt thisUpdate, nextUpdate, Sperreinträge mit serialNumber und reasonCode
> ```
> **Zertifikat gegen CRL prüfen (automatischer CDP-Download):**
> ```bash
> openssl verify -crl_check -crl_download -CAfile ti-ca-chain.pem zertifikat.pem
> ```
> **CRL-Signatur mit CA-Zertifikat verifizieren:**
> ```bash
> openssl crl -inform DER -in tsp.crl -CAfile tsp-ca.pem -noout
> ```
> - Format: DER-kodiertes ASN.1, Content-Type `application/pkix-crl`
> - gematik Referenzbibliothek (Java): [github.com/gematik/ref-GemLibPki](https://github.com/gematik/ref-GemLibPki)
> - TSL mit allen CDP-Endpunkten der TI-TSPs: [download.tsl.telematik.de](https://download.tsl.telematik.de/)
> - Spec: gemKPT_PKI_TIP, Abschnitt CRL-Anforderungen

## Verknüpfungen

- [[PKI]] (Gesamtinfrastruktur, in der CRLs eingesetzt werden)
- [[OCSP]] (alternatives, online-basiertes Protokoll zur Zertifikatssperrprüfung)
- [[X.509]] (Zertifikatsstandard, für den CRLs spezifiziert sind)
- [[TSL]] (Trust Service List: referenziert CRL-Endpunkte der TSPs)
- [[TSP]] (Trust Service Provider: veröffentlicht CRLs für ausgestellte Zertifikate)
- [[Telematikinfrastruktur]] (Anwendungskontext für TI-PKI und CRL-Mechanismus)
- [[SMC-B]] (Institutionskarte; Sperrstatus wird über CRL oder OCSP geprüft)
- [[HBA]] (Heilberufsausweis; Zertifikatsprüfung via OCSP mit CRL-Fallback)
- [[eGK]] (elektronische Gesundheitskarte; Zertifikatssperrprüfung in der TI)

## Quellen

- [RFC 5280: Internet X.509 PKI Certificate and CRL Profile (IETF)](https://datatracker.ietf.org/doc/html/rfc5280)
- [RFC 6818: Updates to the Internet X.509 PKI (IETF)](https://datatracker.ietf.org/doc/html/rfc6818)
- [gematik: gemKPT_PKI_TIP – PKI-Konzept Telematikinfrastruktur](https://fachportal.gematik.de/spezifikationen/basis-der-ti)
- [gematik: ref-GemLibPki (GitHub)](https://github.com/gematik/ref-GemLibPki)
