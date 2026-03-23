---
title: Kartenherausgeber
audience: [technical, non-technical]
tags: [infrastruktur, smartcard, hba, smc-b, zulassung, pki]
aliases: [Kartenherausgabe, Herausgeber, Ausgabestelle]
relevance:
  sectors: [arztpraxis, zahnarzt, apotheke, pflege, therapie, hebamme, ti-infrastruktur, regulierung]
  interests: [compliance, technik]
maturity: wachsend
---

# Kartenherausgeber

Ein **Kartenherausgeber** (auch: Herausgeber) ist eine von der [[gematik]] zugelassene Organisation, die [[HBA]]s oder [[SMC-B]]s an berechtigte Personen oder Einrichtungen ausgibt und dabei die Identitätsprüfung und Zertifizierung verantwortet.

## Erklärt für Einsteiger

Der Heilberufsausweis (HBA) ist wie ein amtlicher Ausweis für Ärzte und Apotheker. Genau wie beim Personalausweis gibt es eine Behörde, die prüft, wer einen solchen Ausweis bekommen darf. Für den HBA ist das die jeweilige Ärztekammer oder Apothekerkammer. Die Kammer prüft die Zulassung und beauftragt dann einen Hersteller, die Karte zu produzieren. Der Arzt beantragt den Ausweis bei seiner zuständigen Kammer, nicht bei der gematik direkt.

## Überblick

In der [[Telematikinfrastruktur]] gibt es zwei Kartentypen, für die Kartenherausgeber benötigt werden:

- **[[HBA]] (Elektronischer Heilberufsausweis)**: Persönlicher Ausweis für Leistungserbringer
- **[[SMC-B]] (Security Module Card Typ B)**: Institutionskarte für Einrichtungen

Die [[gematik]] legt die Anforderungen an Kartenherausgeber fest und lässt sie zu. Jeder Herausgeber muss nachweisen, dass er die Identität der Antragsteller zuverlässig prüft und die Karten sicher ausgibt. Die gematik betreibt dabei selbst die Wurzelzertifizierungsstelle (Root-CA) der [[PKI|TI-PKI]] und stellt sicher, dass alle Herausgeber-Zertifikate in der Vertrauenshierarchie verankert sind.

### Herausgeber nach Kartentyp

#### HBA-Herausgeber

Der HBA wird von den jeweils zuständigen Kammern der Heilberufe ausgegeben:

| Berufsgruppe | Kartenherausgeber |
|---|---|
| Ärzte | Zuständige [[Landesaerztekammer|Landesärztekammer]] |
| Zahnärzte | Zuständige Landeszahnärztekammer ([[BZÄK|BZÄK-Mitglied]]) |
| Apotheker | Zuständige Landesapothekerkammer |
| Psychotherapeuten | Zuständige Landeskammer der Psychotherapeuten |
| Berufsgruppen ohne eigene Kammer | gematik |

Für EU-Versandapotheken und Berufsgruppen ohne eigene Kammer agiert die [[gematik]] direkt als Herausgeber.

#### SMC-B-Herausgeber

Die SMC-B wird je nach Einrichtungstyp von verschiedenen Stellen ausgegeben:

| Einrichtungstyp | Kartenherausgeber |
|---|---|
| Vertragsarztpraxen, [[MVZ]] | [[Kassenaerztliche-Vereinigung|Kassenärztliche Vereinigung (KV)]] |
| Vertragszahnarztpraxen | [[KZBV|Kassenzahnärztliche Vereinigung (KZV)]] |
| Apotheken | Landesapothekerkammer oder Rechenzentren |
| Krankenhäuser | [[gematik]] |
| DiGA-Hersteller | [[gematik]] |
| Weitere (Kammern, KIM-Anbieter) | [[gematik]] (SMC-B ORG) |

> [!praxis-tipp] Praxis-Tipp: HBA und SMC-B rechtzeitig beantragen
> **HBA beantragen (Ärzte, Zahnärzte, Apotheker):**
> 1. Zuständige Kammer im eigenen Bundesland aufrufen (nicht gematik, nicht KV)
> 2. Online-Antrag ausfüllen, Identitätsprüfung per POSTIDENT durchführen
> 3. Karte kommt per Post, Lieferzeit: ca. 4-8 Wochen (bei Engpässen länger)
>
> **SMC-B beantragen (Vertragsarztpraxis):**
> 1. Antrag über die zuständige KV stellen
> 2. Mindestens ein gültiger HBA muss bereits vorliegen
> 3. Lieferzeit einplanen: mindestens 4 Wochen
>
> **Wichtige Frist:** RSA-Karten (HBA und SMC-B) sind noch bis 30. Juni 2026 gültig. Neue ECC-Karten jetzt beantragen. Aktuelle Lieferprobleme bei einzelnen Herstellern machen frühzeitige Bestellung besonders wichtig.

> [!interesse-compliance]
> Leistungserbringer beantragen den HBA bei der für sie zuständigen Kammer, nicht bei der gematik direkt. Welche Kammer zuständig ist, hängt vom Berufsrecht des jeweiligen Bundeslandes ab. SMC-B für Vertragsärzte und Zahnärzte werden über die zuständige [[Kassenaerztliche-Vereinigung|KV]] oder [[KZBV|KZV]] beantragt. Für Krankenhäuser ist die gematik zumeist direkter Ansprechpartner.

## Technische Details

### Zulassung als Kartenherausgeber

Die [[gematik]] schreibt in der **gemRL_HBA_Herausgabe** (Richtlinie zur Herausgabe des elektronischen Heilberufsausweises) fest, was ein zugelassener Herausgeber leisten muss:

1. **Identitätsprüfung**: Nachweis der Berufszulassung des Antragstellers (Approbation, Zulassung als Leistungserbringer)
2. **Zertifikatserstellung**: Der Herausgeber stellt für jede Karte zwei Zertifikate aus: ein Authentifizierungszertifikat (AUT) und ein Signaturzertifikat (SIG) für die [[QES]]
3. **Einbindung in die TI-PKI**: Herausgeber betreiben eine Sub-CA (Certification Authority), die von der gematik Root-CA zertifiziert ist
4. **Sperrdienst**: Herausgeber müssen gesperrte Zertifikate zeitnah in die [[CRL]] eintragen und am [[OCSP]]-Dienst der TI teilnehmen
5. **Schlüsselwechsel und Verlängerung**: Herausgeber verwalten die Lebensdauer der Zertifikate (typisch: 5 Jahre für HBA)

> [!frist-warnung] Frist-Warnung: ECC-Pflichtmigration eHBA und gSMC-KT
> **Rechtsgrundlage:** gematik-Festlegungen gemRL_HBA_Herausgabe, gemSpec_PKI; § 291 SGB V (TI-Anbindungsvoraussetzung)
> **Fristen:**
> - **eHBA G2.0 (RSA-only):** Spätestens bis zum **30. Juni 2026** müssen alle noch im Einsatz befindlichen eHBA G2.0 ohne ECC-Zertifikate ausgetauscht sein. Ab dem 1. Januar 2026 dürfen Kartenherausgeber ausschließlich ECC-fähige Karten (G2.1) produzieren und ausgeben.
> - **gSMC-KT G2.0:** Kartenterminals mit gSMC-KT der Generation 2.0 müssen bis spätestens **31. Dezember 2026** durch gSMC-KT G2.1 ersetzt sein.
> **Handlungsbedarf für Kartenherausgeber:** Stellen Sie sicher, dass Ihre Sub-CA ausschließlich ECC-Zertifikate ausstellt. Informieren Sie Antragsteller mit noch gültigen RSA-only Karten aktiv über den Austauschbedarf. Planen Sie Produktions- und Versandkapazitäten für die verbleibende Laufzeit ein, da Lieferprobleme bei Herstellern dokumentiert sind.
> **Bei Nichtbeachtung:** RSA-only eHBA werden nach dem 30. Juni 2026 von der TI abgelehnt. Leistungserbringer können dann keine qualifizierte elektronische Signatur (QES) für E-Rezept, eAU und ePA mehr ausstellen.

### Verhältnis zu Herstellern

Kartenherausgeber und Kartenhersteller sind verschiedene Rollen:

- **Kartenherausgeber** (issuer): Prüft Identität, beantragt Zertifikate, gibt Karten aus. Beispiele: Landesärztekammern, KVen.
- **Kartenhersteller** (manufacturer): Produziert die physischen Chipkarten. Beispiele: [[D-Trust]] (Bundesdruckerei-Tochter), T-Systems, Giesecke+Devrient.

Der Herausgeber beauftragt den Hersteller mit der Kartenproduktion und dem Versand. D-Trust übernimmt für viele Herausgeber die Produktion und den Versand im Auftrag.

### Telematik-ID und Zertifikate

Jede ausgegebene Karte erhält eine eindeutige [[Telematik-ID]]. Diese ID wird vom Herausgeber vergeben und im [[VZD]] (Verzeichnisdienst der TI) registriert. Über die Telematik-ID kann die Karte im Netz adressiert werden, z.B. für [[KIM]]-Adressen oder das Auffinden im [[VZD]].

> [!interesse-technik]
> Die gematik führt eine öffentlich einsehbare Liste aller zugelassenen Herausgeber (Herausgeber-Verzeichnis) auf dem Fachportal. Technische Spezifikationen für Herausgeber: gemSpec_PKI (TI-PKI), gemRL_HBA_Herausgabe (Richtlinie HBA-Herausgabe), gemRL_SMC-B_Herausgabe (Richtlinie SMC-B-Herausgabe). Die Zertifikatshierarchie: gematik Root-CA → Herausgeber Sub-CA → Endentitätszertifikat auf der Karte.

> [!dev-quickstart] Dev Quickstart: TI-PKI Zertifikatsprüfung (OCSP)
> OCSP-Abfrage gegen den TI-OCSP-Responder gemäß gemSpec_PKI TUC_PKI_006:
> ```bash
> # OCSP-Status eines HBA/SMC-B Zertifikats prüfen
> openssl ocsp \
>   -issuer issuer-sub-ca.pem \
>   -cert card-cert.pem \
>   -url https://ocsp.ti-dienste.de/ocsp \
>   -nonce -text
> ```
> - Zertifikatshierarchie: gematik Root-CA → Herausgeber Sub-CA → Endentität auf Karte
> - CRL-Verteilpunkt steht im Zertifikat unter `cRLDistributionPoints`-Extension (DER-kodiert)
> - Algorithmus: ECDSA mit brainpoolP256r1 (BSI-Vorgabe für TI-Zertifikate)
> - Java-Referenzimplementierung (TUC_PKI_018): [gematik/ref-GemLibPki](https://github.com/gematik/ref-GemLibPki)
> - PKI-Testsuite für Zulassungstests: [gematik/app-PkiTestsuite](https://github.com/gematik/app-PkiTestsuite)
> - Spec: [gemSpec_PKI V2.26.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PKI/gemSpec_PKI_V2.26.0/index.html)

## Verknüpfungen

- [[HBA]] (Elektronischer Heilberufsausweis: wichtigster von Kartenherausgebern ausgegebener Kartentyp)
- [[SMC-B]] (Institutionskarte: zweiter Kartentyp mit eigenen Herausgebern)
- [[gematik]] (definiert Anforderungen und lässt Kartenherausgeber zu)
- [[PKI]] (TI-PKI: Vertrauenshierarchie, in die Herausgeber eingebunden sind)
- [[Telematik-ID]] (wird vom Herausgeber vergeben und im VZD registriert)
- [[D-Trust]] (Bundesdruckerei-Tochter: Kartenhersteller und Produzent für viele Herausgeber)
- [[Landesaerztekammer]] (Herausgeber des HBA für Ärzte)
- [[BZÄK]] (Koordiniert Herausgabe für Zahnärzte über Landeszahnärztekammern)
- [[KZBV]] (Koordiniert SMC-B-Herausgabe für Vertragszahnärzte)
- [[CRL]] (Sperrliste: Herausgeber tragen gesperrte Zertifikate ein)
- [[OCSP]] (Online-Zertifikatsstatus: Herausgeber betreiben OCSP-Responder)
- [[VZD]] (Verzeichnisdienst: registriert alle Telematik-IDs)

## Quellen

- [gematik Fachportal: Identitäts- und Kartenherausgabe](https://fachportal.gematik.de/schnelleinstieg/identitaets-und-kartenherausgabe)
- [gematik Fachportal: Identitäts- und Kartenherausgabe](https://fachportal.gematik.de/telematikinfrastruktur/identitaets-und-kartenherausgabe)
- [gematik.de: HBA – Zugang zur Telematikinfrastruktur](https://www.gematik.de/telematikinfrastruktur/hba)
- [Landesärztekammer Baden-Württemberg: Arztausweis und eHBA](https://www.aerztekammer-bw.de/ehba)
