---
title: X.509
audience: [technical]
tags: [konzepte, kryptographie, zertifikate, pki, sicherheit]
aliases: [X.509-Zertifikat, X.509-Standard, digitales Zertifikat, ITU-T X.509]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, regulierung]
  interests: [technik, compliance]
maturity: immergruen
---

# X.509

**X.509** ist ein internationaler Standard des ITU-T für das Format digitaler Zertifikate und die Struktur einer Public Key Infrastructure (PKI).

## Erklärt für Einsteiger

Stell dir vor, du möchtest wissen, ob eine Webseite wirklich die ist, die sie vorgibt zu sein. Ein digitales Zertifikat ist wie ein offizieller Ausweis für eine Webseite oder ein Computerprogramm: Es enthält den Namen des Inhabers, einen öffentlichen Schlüssel und die Unterschrift einer vertrauenswürdigen Stelle, die bestätigt: "Ja, das ist echt." X.509 ist der Standard, der festlegt, wie dieser Ausweis aussehen muss, damit ihn alle Computer weltweit lesen und prüfen können.

## Überblick

X.509 wurde ursprünglich 1988 als Teil des X.500-Verzeichnisdienst-Standards der ITU-T veröffentlicht und seitdem mehrfach überarbeitet. Die aktuelle Version X.509v3 (RFC 5280) ist der Industriestandard für digitale Zertifikate und wird in nahezu allen TLS-Verbindungen, E-Mail-Verschlüsselungen und digitalen Signaturen eingesetzt.

In der [[Telematikinfrastruktur]] sind X.509-Zertifikate die Grundlage der gesamten [[PKI]]. Jede Komponente, die an der TI teilnimmt, besitzt mindestens ein X.509-Zertifikat: [[SMC-B]]-Karten, [[HBA]]-Ausweise, [[eGK|elektronische Gesundheitskarten]], [[Konnektoren]] und alle Fachdienste der gematik.

Die [[gematik]] betreibt die Root-CA der TI-PKI. Sie stellt die Vertrauensgrundlage für alle nonQES-Zertifikate bereit. Kein X.509-Zertifikat ist in der TI gültig, das nicht von dieser Root-CA abstammt oder von einer von ihr akkreditierten Sub-CA ausgestellt wurde.

## Technische Details

### Aufbau eines X.509v3-Zertifikats

Ein X.509-Zertifikat enthält folgende Pflichtfelder:

| Feld | Inhalt |
|---|---|
| Version | Version des Standards (heute: v3) |
| Seriennummer | Eindeutige Nummer beim ausstellenden CA |
| Signaturalgorithmus | z.B. `ecdsa-with-SHA256`, `sha256WithRSAEncryption` |
| Aussteller (Issuer) | Distinguished Name der ausstellenden CA |
| Gültigkeitszeitraum | `notBefore` und `notAfter` |
| Inhaber (Subject) | Distinguished Name des Zertifikatsinhabers |
| Öffentlicher Schlüssel | Schlüssel und Algorithmus (RSA, ECC) |
| Erweiterungen (Extensions) | V3-Erweiterungen (siehe unten) |
| Signatur | Digitale Signatur der ausstellenden CA |

Das Feld **Subject** verwendet X.500-Distinguished Names (DN): eine strukturierte Abfolge von Attributen wie `CN` (Common Name), `O` (Organisation), `C` (Country). In der TI enthält das Subject-Feld bei HBA und SMC-B die [[Telematik-ID]] als eindeutigen Bezeichner.

### X.509v3-Erweiterungen

Version 3 führte Erweiterungen ein, die für die TI zentral sind:

- **Key Usage**: Legt fest, wofür der Schlüssel verwendet werden darf (Signatur, Verschlüsselung, Zertifizierung). In der TI gibt es strikte Trennung: Authentisierungszertifikate, Verschlüsselungszertifikate und Signaturzertifikate sind separate Zertifikate auf derselben Karte.
- **Extended Key Usage (EKU)**: Präzisiert die Verwendung weiter (z.B. TLS-Client-Authentifizierung, TLS-Server-Authentifizierung).
- **Subject Alternative Name (SAN)**: Enthält alternative Bezeichner, z.B. DNS-Namen für Server-Zertifikate oder E-Mail-Adressen.
- **Authority Key Identifier (AKI)**: Identifiziert den öffentlichen Schlüssel der ausstellenden CA und ermöglicht die Kettenverifizierung.
- **Subject Key Identifier (SKI)**: Eindeutiger Fingerabdruck des enthaltenen öffentlichen Schlüssels.
- **CRL Distribution Points**: URLs, unter denen Certificate Revocation Lists abgerufen werden können.
- **Authority Information Access (AIA)**: Enthält den [[OCSP]]-Responder-URL für Echtzeit-Zertifikatsprüfung.
- **Certificate Policies**: Verweist auf die Certificate Policy (CP) und das Certificate Practice Statement (CPS) der ausstellenden CA.

### Zertifikatskette und Vertrauensverankerung

X.509 definiert eine hierarchische Vertrauensstruktur. Eine Zertifikatskette besteht aus:

```
Root-CA (selbst-signiert, Vertrauensanker)
  └── Sub-CA (signiert von Root-CA)
        └── End-Entity-Zertifikat (signiert von Sub-CA)
```

Ein Prüfer akzeptiert ein End-Entity-Zertifikat, wenn er die vollständige Kette bis zu einem vertrauenswürdigen Root-CA-Zertifikat aufbauen kann. In der TI ist der einzige Vertrauensanker für nonQES-Zertifikate die **gematik Root-CA**. Deren öffentliches Schlüsselmaterial ist in alle TI-Komponenten einprogrammiert.

Die [[TSL]] (Trust Service List) der gematik enthält alle zugelassenen Sub-CAs. [[Konnektoren]] und andere TI-Komponenten laden die TSL regelmäßig und prüfen damit, ob ein vorgelegtes Zertifikat von einer akkreditierten CA ausgestellt wurde.

### Zertifikatsprüfung: OCSP und CRL

X.509 definiert zwei Mechanismen zur Prüfung, ob ein Zertifikat gesperrt wurde:

- **CRL (Certificate Revocation List)**: Periodisch veröffentlichte signierte Liste gesperrter Seriennummern. Nachteil: Kann veraltet sein.
- **[[OCSP]] (Online Certificate Status Protocol)**: Echtzeit-Anfrage an den OCSP-Responder der CA. Antwort: `good`, `revoked` oder `unknown`. Die TI nutzt OCSP als primären Prüfmechanismus.

**OCSP Stapling** (in der TI bei Server-Zertifikaten eingesetzt): Der Server holt sich die OCSP-Antwort selbst beim Responder ab und liefert sie im TLS-Handshake mit aus. Das reduziert Latenz und entlastet den OCSP-Responder.

### Kryptografische Algorithmen

X.509 ist algorithmusunabhängig, legt aber fest, wie Algorithmen in Zertifikaten bezeichnet werden. In der TI gilt:

- **ECC (Elliptic Curve Cryptography)**: Seit 2026 ausschließlicher Standard in der TI. Verwendete Kurven: `brainpoolP256r1` und `brainpoolP384r1` (BSI-empfohlen gemäß TR-03116).
- **RSA 2048**: War bis Ende 2025 zugelassen. Für neue Ausstellungen nicht mehr erlaubt.
- **Signaturalgorithmus**: `ecdsa-with-SHA256` (brainpoolP256r1) bzw. `ecdsa-with-SHA384` (brainpoolP384r1).

### X.509 und mTLS

[[mTLS]] (mutual TLS) nutzt X.509-Zertifikate für die gegenseitige Authentifizierung im TLS-Handshake. Beide Kommunikationspartner präsentieren ihr X.509-Zertifikat und verifizieren das des anderen. In der TI ist mTLS das Standardverfahren für alle Verbindungen zwischen Komponenten: Konnektor zu Fachdienst, Fachdienst zu Fachdienst. Es stellt sicher, dass nicht nur der Server, sondern auch der Client zertifiziert ist.

> [!interesse-technik]
> TI-Zertifikatsspezifikation: gemSpec_PKI (fachportal.gematik.de). Algorithmus-Anforderungen: BSI TR-03116-4 und TR-02102-1. OCSP-Responder-URLs stehen in der [[TSL]]. Zertifikatsformat: DER (Distinguished Encoding Rules) nach ASN.1. Für [[QES]]-Zertifikate auf dem [[HBA]] gelten zusätzlich die Anforderungen der [[eIDAS]]-Verordnung (EU) Nr. 910/2014.

> [!interesse-compliance]
> Seit 1. Januar 2026 dürfen in der TI nur noch ECC-Zertifikate (brainpoolP256r1/P384r1) neu ausgestellt werden. RSA-Zertifikate der Generation G2.0 auf [[HBA]] und [[SMC-B]] müssen bis 30.06.2026 gegen ECC-Karten (G2.1) getauscht werden. Bestandszertifikate auf [[gSMC-KT]]-Terminals bis 31.12.2026.

## Verknüpfungen

- [[PKI]] (Gesamtinfrastruktur, die X.509-Zertifikate ausstellt und verwaltet)
- [[TSL]] (Trust Service List: vertrauenswürdige CAs der TI)
- [[OCSP]] (Echtzeit-Prüfung von X.509-Zertifikaten)
- [[mTLS]] (gegenseitige TLS-Authentifizierung auf Basis von X.509)
- [[QES]] (qualifizierte elektronische Signaturen mit X.509-Zertifikaten nach eIDAS)
- [[HBA]] (Heilberufsausweis: trägt mehrere X.509-Zertifikate)
- [[SMC-B]] (Institutionskarte: trägt X.509-Zertifikate für Authentisierung und Verschlüsselung)
- [[eGK]] (elektronische Gesundheitskarte: trägt X.509-Authentisierungszertifikat)
- [[Konnektoren]] (prüfen X.509-Zertifikate bei TI-Verbindungen)
- [[VZD]] (Verzeichnisdienst: speichert öffentliche X.509-Zertifikate der Leistungserbringer)
- [[TSP]] (Trust Service Provider: akkreditierte Sub-CAs, stellen X.509-Zertifikate aus)
- [[eIDAS]] (EU-Verordnung für qualifizierte Zertifikate und Vertrauensdienste)
- [[BSI]] (gibt Algorithmus-Anforderungen für TI-Zertifikate vor)

## Quellen

- [RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280)
- [ITU-T X.509: Information technology – The Directory – Public-key and attribute certificate frameworks](https://www.itu.int/rec/T-REC-X.509/en)
- [BSI TR-03116-4: Kryptographische Vorgaben für die Telematikinfrastruktur](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03116/TR-03116_node.html)
- [gematik: PKI-Konzept der TI (gemKPT_PKI_TIP)](https://gemspec.gematik.de/downloads/gemKPT/gemKPT_PKI_TIP/gemKPT_PKI_TIP_V2.14.0.pdf)
