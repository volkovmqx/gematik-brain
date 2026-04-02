---
title: Root-CA
audience: [technical]
tags: [infrastruktur, pki, zertifikate, vertrauen, sicherheit]
aliases: [Wurzel-CA, Wurzelzertifizierungsstelle, Root-Zertifizierungsstelle, TI-Root-CA]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister]
  interests: [technik]
maturity: setzling
---

# Root-CA

Die **Root-CA (Wurzelzertifizierungsstelle)** der Telematikinfrastruktur ist der oberste Vertrauensanker der [[PKI|TI-PKI]], betrieben von der [[gematik]], dem alle anderen Zertifizierungsstellen und damit alle Zertifikate in der TI vertrauen.

## Erklärt für Einsteiger

Im Alltag gibst du beim Online-Banking deinen Benutzernamen und dein Passwort ein und vertraust darauf, dass die Website echt ist. Dieses Vertrauen kommt von einem Zertifikat. Aber wem vertraut das Zertifikat? Es gibt eine Kette: Das Bankzertifikat wurde von einer Zwischenstelle unterschrieben, die wiederum von einer Wurzelstelle unterschrieben wurde. Diese Wurzelstelle nennt sich Root-CA. In der Telematikinfrastruktur betreibt gematik diese Wurzelstelle selbst. Alle Karten, Konnektoren und Dienste in der TI vertrauen letztlich diesem einen Wurzelzertifikat.

## Überblick

Die Root-CA ist der Ausgangspunkt der gesamten Vertrauenshierarchie der Telematikinfrastruktur. Ohne die Root-CA würde kein Gerät, keine Karte und kein Dienst der TI als vertrauenswürdig anerkannt. Die Root-CA wird von der [[gematik]] betrieben und ist nicht öffentlich im Internet zugänglich (Offline-Root-CA-Prinzip).

Die Root-CA stellt keine Zertifikate direkt an Endgeräte aus. Stattdessen unterschreibt sie die Zertifikate nachgeordneter Zertifizierungsstellen (Sub-CAs), die ihrerseits die Zertifikate für die eigentlichen TI-Komponenten ausstellen. Diese Hierarchie heißt Public Key Infrastructure ([[PKI]]).

### Aufgaben der Root-CA

- **Zertifizierung von Sub-CAs**: Die Root-CA stellt Zertifikate für die nachgeordneten Sub-CAs aus, die dann Endentitätszertifikate für Karten, Konnektoren und Dienste ausstellen.
- **Vertrauensanker**: Das Zertifikat der Root-CA ist in allen TI-Komponenten fest hinterlegt (Trust Anchor). Jede Zertifikatsprüfung endet an der Root-CA.
- **Verwaltung der TSL**: Die [[TSL|TI-Vertrauensliste (TSL)]] listet alle zugelassenen Sub-CAs. Die Root-CA ist der Ursprung dieser Vertrauensliste.

## Technische Details

### PKI-Hierarchie der TI

Die TI-PKI ist als dreistufige Hierarchie aufgebaut:

```
Root-CA (gematik, Offline)
    └── Sub-CA / Komponenten-CA (TSP, Online)
            └── Endentitäts-Zertifikate (eGK, HBA, SMC-B, gSMC-K, gSMC-KT, TI-Dienste)
```

**Ebene 1: Root-CA**
Offline-betrieben. Das Root-Zertifikat wird nur für die Signatur von Sub-CA-Zertifikaten verwendet und ist sonst vom Netz getrennt. Dieser Offline-Betrieb schützt vor Kompromittierung.

**Ebene 2: Sub-CAs / Komponenten-CAs**
Online-betrieben durch zugelassene [[TSP|Trust Service Provider (TSPs)]]. Sub-CAs stellen die eigentlichen Karten- und Gerätezertifikate aus. Jeder TSP betreibt eine oder mehrere Sub-CAs für unterschiedliche Kartentypen ([[HBA]], [[SMC-B]], [[gSMC-K]], [[gSMC-KT]], [[eGK]]).

**Ebene 3: Endentitäts-Zertifikate**
Die eigentlichen Zertifikate auf den Karten und in den Geräten. Sie werden vom [[VPN-Zugangsdienst]], [[OCSP]]-Diensten und TI-Fachdiensten geprüft.

### Zertifikatsformat und Algorithmen

Alle TI-Zertifikate basieren auf dem Standard [[X.509]] v3. Im Zuge der [[ECC-Migration]] wurden die kryptografischen Verfahren von RSA (bis G2.0) auf ECC (ab G2.1) umgestellt:

- **Alt (G2.0)**: RSA-2048, SHA-256
- **Neu (G2.1)**: ECC P-256 oder brainpoolP256r1, SHA-256

Die zulässigen Algorithmen sind in der [[BSI]]-Technischen Richtlinie BSI TR-03116 festgelegt.

> [!interesse-technik]
> **Root-CA-Zertifikat:** Das Root-CA-Zertifikat der TI ist auf dem gematik-Fachportal veröffentlicht und kann dort heruntergeladen werden. Für Hersteller und Betreiber von TI-Komponenten ist es der Ausgangspunkt für die Zertifikatsprüfung. Technische Spezifikation: gemSpec_PKI. Der OCSP-Dienst für TI-Zertifikate ist unter `ocsp.pki.telematik-test.de` (RU) und `ocsp.pki.telematik.de` (PU) erreichbar.

> [!dev-quickstart] Dev Quickstart: TI Root-CA Trust Store einrichten
> ```bash
> # Root-CA-Zertifikat der TI herunterladen (Produktivumgebung)
> curl -O https://download.tsl.telematik.de/GEM.RCA4_TEST-ONLY.pem
>
> # Zertifikat inspizieren
> openssl x509 -in GEM.RCA4_TEST-ONLY.pem -noout -text | grep -E "Subject:|Issuer:|Not"
>
> # OCSP-Status einer Sub-CA prüfen
> openssl ocsp \
>   -issuer GEM.RCA4_TEST-ONLY.pem \
>   -cert sub-ca.pem \
>   -url https://ocsp.pki.telematik-test.de \
>   -resp_text
> ```
> - **PU OCSP**: `https://ocsp.pki.telematik.de`
> - **RU OCSP**: `https://ocsp.pki.telematik-test.de`
> - **Zertifikatsformat**: X.509 v3, G2.1: ECC P-256 oder brainpoolP256r1, SHA-256
> - Root-CA-Download: [gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/komponenten-dienste/gematik-root-ca)
> - Spec: [gemSpec_PKI V2.26.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PKI/gemSpec_PKI_V2.26.0/index.html)

### TI-Vertrauensliste (TSL)

Die [[TSL]] ist ein signiertes XML-Dokument, das alle zugelassenen Sub-CAs und ihre Zertifikate auflistet. Konnektoren und andere TI-Komponenten laden die TSL regelmäßig herunter und prüfen alle eingehenden Zertifikate gegen diese Liste.

Die TSL selbst ist mit dem Root-CA-Zertifikat signiert. Damit ist die Vertrauenskette geschlossen: Root-CA → TSL-Signatur → Sub-CA-Liste → Endentitäts-Zertifikate.

### ECC-Migration und Root-CA

Im Zuge der [[ECC-Migration]] wurde neben den Sub-CAs auch die Root-CA auf ECC-Schlüssel umgestellt. Dies erforderte eine sorgfältige Koordination: Alle TI-Komponenten mussten das neue ECC-Root-Zertifikat erhalten, bevor die alten RSA-Sub-CAs und -Zertifikate abliefen. Die Umstellung war eine der komplexesten Phasen der gesamten ECC-Migration.

### Abgrenzung zu anderen CAs

Die TI-Root-CA ist nicht identisch mit der deutschen Verwurzelungsinstanz für öffentliche Zertifikate (Bundesnetzagentur). Sie existiert ausschließlich für die Telematikinfrastruktur. Öffentliche TLS-Zertifikate für Webseiten verwenden separate Zertifikatshierarchien, die nicht von der TI-Root-CA abhängen.

## Verknüpfungen

- [[PKI]] (Gesamtkonzept der Public Key Infrastructure; Root-CA ist Ausgangspunkt)
- [[TSL]] (TI-Vertrauensliste; wird von der Root-CA signiert)
- [[TSP]] (Trust Service Provider; betreiben die Sub-CAs unter der Root-CA)
- [[X.509]] (Zertifikatsformat für alle TI-Zertifikate)
- [[OCSP]] (Online-Zertifikatsstatus-Prüfung)
- [[CRL]] (Zertifikatssperrliste als Alternative zu OCSP)
- [[ECC-Migration]] (Umstellung der Root-CA und Sub-CAs auf ECC)
- [[gematik]] (betreibt die Root-CA)
- [[gSMC-K]] (Konnektorzertifikate, ausgestellt durch Sub-CA unter Root-CA)
- [[SMC-B]] (Institutionszertifikate, ausgestellt durch Sub-CA unter Root-CA)
- [[HBA]] (Heilberufsausweis-Zertifikate, ausgestellt durch Sub-CA unter Root-CA)
- [[eGK]] (Gesundheitskarten-Zertifikate, ausgestellt durch Sub-CA unter Root-CA)
- BSI TR-03116 (BSI-Technische Richtlinie; legt Algorithmen und Schlüssellängen fest)

## Quellen

- [gematik Fachportal: gematik Root-CA](https://fachportal.gematik.de/telematikinfrastruktur/komponenten-dienste/gematik-root-ca)
- [gemSpec_PKI – Spezifikation der TI-PKI](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PKI/latest/)
- [Wikipedia: Zertifizierungsstelle (PKI)](https://de.wikipedia.org/wiki/Zertifizierungsstelle)
- [BSI: Technische Richtlinie TR-03116](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03116/TR-03116_node.html)
