---
title: PKI - Public Key Infrastructure
audience: [technical]
tags: [konzepte, pki, kryptographie, zertifikate, sicherheit]
aliases: [PKI, TI-PKI, Public Key Infrastructure, Zertifikatsinfrastruktur]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister]
  interests: [technik, compliance]
maturity: wachsend
---

# PKI - Public Key Infrastructure

Die **PKI** (Public Key Infrastructure) der [[Telematikinfrastruktur]] ist die Gesamtheit aller Zertifizierungsstellen, Zertifikate und Vertrauensregeln, die sicherstellen, dass alle Teilnehmer der TI eindeutig identifiziert und authentisiert werden können.

## Erklärt für Einsteiger

Wenn du eine E-Mail von deinem Arzt bekommst, wie weißt du, dass sie wirklich von ihm stammt? In der digitalen Welt löst die PKI dieses Problem. Jede Karte, jeder Konnektor und jeder Dienst in der TI hat ein digitales Zertifikat, ähnlich einem Personalausweis. Eine zentrale Stelle, die gematik, überprüft alle diese Ausweise und bürgt dafür, dass sie echt sind. Wenn alle der gleichen Stelle vertrauen, können alle untereinander vertrauen.

## Überblick

Die TI-PKI ist die Vertrauensbasis der gesamten [[Telematikinfrastruktur]]. Ohne funktionierende PKI könnten [[Konnektoren]] keine vertrauenswürdigen Verbindungen aufbauen, [[SMC-B]]-Karten nicht authentisiert werden und [[QES]]-Signaturen nicht geprüft werden.

Die PKI der TI gliedert sich in zwei Bereiche:

1. **X.509-PKI (nonQES)**: Für Authentisierung, Verschlüsselung und Organisationssignaturen. Die [[gematik]] ist hier die Policy Authority und betreibt die Root-CA.
2. **QES-PKI**: Für qualifizierte elektronische Signaturen nach [[eIDAS]]-Verordnung. Hier agieren zugelassene Vertrauensdiensteanbieter (VDA) unter Aufsicht der [[Bundesnetzagentur]].

### Zertifikatshierarchie

Die TI-PKI ist dreistufig aufgebaut:

```
gematik Root-CA (Vertrauensanker)
    └── Sub-CA (zweite Ebene, je TSP)
            └── End-Entity-Zertifikate (Karten, Komponenten, Dienste)
```

Die **gematik Root-CA** ist der einzige Vertrauensanker für alle nonQES-Zertifikate in der TI. Kein Zertifikat ist in der TI gültig, das nicht von dieser Root-CA abstammt.

## Technische Details

### Trust Service Provider (TSP)

Zertifikatsaussteller in der TI heißen [[TSP|Trust Service Provider (TSP)]]. Jeder TSP muss von der gematik akkreditiert werden. Nach erfolgreicher Akkreditierung stellt die gematik Root-CA dem TSP eine Sub-CA aus. Der TSP nutzt diese Sub-CA, um End-Entity-Zertifikate für Karten und Komponenten auszustellen.

### Trust Service List (TSL)

Die **[[TSL]]** (Trust Service List) ist eine signierte Whitelist aller zugelassenen Zertifikatsaussteller. Sie enthält:

- X.509-CA-Zertifikate aller akkreditierten TSPs
- OCSP-Responder-Adressen für die Zertifikatsprüfung
- CVC-Root-CA-Zertifikate (für Kartenzugangskontrolle)
- DNSSEC Trust Anchor der TI
- Bundesnetzagentur-Zertifikate (für QES-Prüfung)

Jede TI-Komponente lädt die TSL regelmäßig herunter und prüft damit eingehende Zertifikate. Nur Zertifikate, deren ausstellende CA in der TSL steht, werden als vertrauenswürdig anerkannt.

### Zertifikatstypen

| Zertifikat | Inhaber | Zweck |
|---|---|---|
| C.HCI.AUT | [[SMC-B]] | Authentisierung Einrichtung |
| C.HCI.ENC | [[SMC-B]] | Verschlüsselung |
| C.HCI.OSIG | [[SMC-B]] | Organisationssignatur |
| C.HP.AUT | [[HBA]] | Authentisierung Person |
| C.HP.ENC | [[HBA]] | Verschlüsselung |
| C.HP.QES | [[HBA]] | Qualifizierte Signatur (eIDAS) |
| C.CH.AUT | [[eGK]] | Authentisierung Versicherter |
| C.FD.* | Fachdienste | Authentisierung Dienste |
| C.NK.* | [[Konnektoren]] | Netzwerkkomponenten |

### Zertifikatsprüfung

Für die Prüfung der Zertifikatsgültigkeit nutzt die TI zwei Mechanismen:

- **[[OCSP]]** (Online Certificate Status Protocol): Echtzeit-Abfrage beim OCSP-Responder des TSP
- **CRL** (Certificate Revocation List): Liste gesperrter Zertifikate

[[Konnektoren]] führen diese Prüfungen durch und verwerfen Verbindungen mit gesperrten oder abgelaufenen Zertifikaten.

### Kryptografische Algorithmen

Laut gematik-Spezifikation gilt:

- **RSA 2048**: War bis Ende 2025 zugelassen
- **ECC (brainpoolP256r1, brainpoolP384r1)**: Aktueller Standard seit 2026
- **SHA-256 / SHA-384**: Hashfunktionen
- Anforderungen folgen den [[BSI]]-Technischen Richtlinien (TR-03116, TR-02102)

> [!interesse-compliance]
> Seit 1. Januar 2026 sind RSA-Zertifikate in der TI nicht mehr zulässig. Alle neu ausgestellten Zertifikate für [[SMC-B]], [[HBA]] und Konnektoren müssen ECC (brainpoolP256r1 oder brainpoolP384r1) verwenden. Fristen für den Kartentausch: eHBA G2.0 bis 30. Juni 2026, gSMC-KT bis 31. Dezember 2026. [[TSP|Trust Service Provider]] müssen ihre CA-Infrastruktur auf ECC umgestellt haben.

> [!interesse-technik]
> Zertifikatsprüfung läuft über [[OCSP]] (Online Certificate Status Protocol) und CRL. Die [[TSL]] (Trust Service List) enthält alle akkreditierten Sub-CAs und OCSP-Responder-Adressen. Spezifikation: gemKPT_PKI_TIP. Zertifikatshierarchie: gematik Root-CA → Sub-CA (je TSP) → End-Entity-Zertifikate. QES-Zertifikate auf dem [[HBA]] (C.HP.QES) unterliegen der eIDAS-Verordnung und werden von der [[Bundesnetzagentur]] beaufsichtigt.

### QES-PKI

Für [[QES]]-Zertifikate gilt ein separates Regelwerk nach der eIDAS-Verordnung (EU) Nr. 910/2014. Die ausstellenden VDAs werden nicht von der gematik, sondern von der **[[Bundesnetzagentur]]** beaufsichtigt. Die QES-Zertifikate auf dem [[HBA]] (C.HP.QES) stammen von solchen qualifizierten VDAs.

## Verknüpfungen

- Vertrauensanker betrieben von [[gematik]] (Root-CA)
- Zertifikate auf [[HBA]], [[SMC-B]], [[eGK]]
- Geprüft von [[Konnektoren]] über OCSP/CRL
- Basis für [[QES]] (qualifizierte Signaturen)
- Eingebunden in die [[Telematikinfrastruktur]]
- Kryptografische Anforderungen vom [[BSI]] (TR-03116)

## Quellen

- [gematik Root-CA - Fachportal](https://fachportal.gematik.de/hersteller-anbieter/komponenten-dienste/gematik-root-ca)
- [gemSpec TSL (Trust Service List) - gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_TSL/latest/index.html)
- [Konzept PKI der TI-Plattform (gemKPT_PKI_TIP) - gemspec.gematik.de](https://gemspec.gematik.de/downloads/gemKPT/gemKPT_PKI_TIP/gemKPT_PKI_TIP_V2.14.0.pdf)
