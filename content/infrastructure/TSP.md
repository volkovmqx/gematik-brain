---
title: TSP - Trust Service Provider
audience: [technical]
tags: [infrastruktur, pki, zertifikate, sicherheit, vertrauensdienste]
aliases: [TSP, Trust Service Provider, Zertifikatsaussteller, Vertrauensdiensteanbieter]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, hersteller, ti-infrastruktur]
  interests: [technik, compliance]
maturity: wachsend
---

# TSP - Trust Service Provider

Ein **Trust Service Provider (TSP)** ist ein von der [[gematik]] akkreditierter Zertifikatsaussteller, der innerhalb der [[PKI|TI-PKI]] Zertifikate für Karten, Komponenten und Dienste der [[Telematikinfrastruktur]] ausstellt und verwaltet.

## Erklärt für Einsteiger

Stell dir vor, jeder Arzt, jede Klinik und jede Karte im Gesundheitsnetz braucht einen digitalen Ausweis. Jemand muss diese Ausweise ausstellen und dafür bürgen, dass sie echt sind. Das ist der TSP: eine geprüfte, zugelassene Stelle, die solche digitalen Ausweise (Zertifikate) erstellt. Die gematik hat vorher geprüft, ob der TSP vertrauenswürdig ist und die nötigen Sicherheitsanforderungen erfüllt.

## Überblick

Die TI-[[PKI]] ist eine dreistufige Zertifikatshierarchie. An der Spitze steht die **gematik Root-CA** als einziger Vertrauensanker. Darunter operieren die TSPs mit ihren **Sub-CAs** (Untergeordneten Zertifizierungsstellen). Die TSPs stellen ihrerseits **End-Entity-Zertifikate** für [[eGK]], [[HBA]], [[SMC-B]], [[Konnektoren]] und Fachdienste aus.

Ohne akkreditierte TSPs könnten keine gültigen Zertifikate für die TI ausgestellt werden. Kein Zertifikat ist in der TI gültig, das nicht von einer Sub-CA eines akkreditierten TSP stammt, welche wiederum von der gematik Root-CA zertifiziert wurde.

TSPs in der TI sind nicht identisch mit Vertrauensdiensteanbietern (VDA) nach der [[eIDAS]]-Verordnung, obwohl der Begriff ähnlich klingt. VDAs nach eIDAS stellen [[QES]]-Zertifikate aus und unterliegen der Aufsicht der [[Bundesnetzagentur]]. TSPs im TI-Kontext beziehen sich speziell auf Anbieter im nonQES-Bereich der gematik-PKI.

> [!interesse-compliance]
> Hersteller von TI-Komponenten (Konnektoren, TI-Gateway-Software, Fachdienste) müssen sicherstellen, dass ihre Produkte ausschließlich Zertifikate von akkreditierten TSPs akzeptieren. Nicht-akkreditierte CAs werden von TI-Komponenten automatisch abgewiesen. Für QES-Zertifikate auf dem [[HBA]] (C.HP.QES) gilt zusätzlich die [[eIDAS]]-Akkreditierung durch die [[Bundesnetzagentur]]. Die Liste der akkreditierten TSPs ist über die [[TSL]] abrufbar und wird von der [[gematik]] gepflegt.

## Technische Details

### Akkreditierungsprozess

Jeder TSP muss von der gematik akkreditiert werden, bevor er Zertifikate für die TI ausstellen darf. Das Verfahren ist in der gematik-Spezifikation **gemKPT_PKI_TIP** (Konzept PKI der TI-Plattform) geregelt.

Das Akkreditierungsverfahren umfasst zwei Pfade:

1. **X.509-TSP-Aufnahme in die TSL**: Der TSP wird in die Trust Service List aufgenommen. Voraussetzung ist der Nachweis, dass der TSP die Sicherheitsanforderungen der gematik erfüllt (Audit, Zertifizierung nach ISO/IEC 27001 oder BSI IT-Grundschutz, technische Prüfungen).
2. **CVC-CA-Aufnahme**: Für Zertifikate auf Gesundheitskarten (Card Verifiable Certificates, CVC), die den physischen Kartenzugang kontrollieren.

Nach erfolgreicher Akkreditierung stellt die gematik Root-CA dem TSP ein Sub-CA-Zertifikat aus. Mit dieser Sub-CA kann der TSP End-Entity-Zertifikate ausstellen.

### Trust Service List (TSL)

Die **[[TSL]]** (Trust Service List) ist das zentrale Verzeichnis aller zugelassenen TSPs. Sie enthält:

- X.509-CA-Zertifikate aller akkreditierten TSPs
- [[OCSP]]-Responder-Adressen für die Zertifikatsprüfung
- CVC-Root-CA-Zertifikate
- DNSSEC Trust Anchor der TI
- Zertifikate der [[Bundesnetzagentur]] (für QES-Prüfung)

Die TSL ist kryptografisch signiert und wird regelmäßig aktualisiert. Jede TI-Komponente lädt die TSL herunter und prüft damit eingehende Zertifikate. Nur Zertifikate von TSPs, die in der TSL stehen, werden anerkannt.

### Zertifikatstypen je TSP-Bereich

TSPs in der TI sind nach Aufgabenbereichen spezialisiert:

| Bereich | Ausgestellte Zertifikate | Kartentyp |
|---|---|---|
| Kartenherausgabe (eGK) | C.CH.AUT, C.CH.ENC | [[eGK]] |
| Kartenherausgabe (HBA) | C.HP.AUT, C.HP.ENC, C.HP.QES | [[HBA]] |
| Kartenherausgabe (SMC-B) | C.HCI.AUT, C.HCI.ENC, C.HCI.OSIG | [[SMC-B]] |
| Komponentenzertifikate | C.NK.*, C.FD.* | [[Konnektoren]], [[Fachdienst]] |

### OCSP-Betrieb

Jeder TSP muss einen **OCSP-Responder** betreiben, über den der Sperrstatus seiner ausgestellten Zertifikate abgefragt werden kann. Die URL des OCSP-Responders ist in jedem Zertifikat im Feld `AuthorityInfoAccess` eingetragen. [[Konnektoren]] und andere TI-Komponenten fragen vor jeder sicherheitsrelevanten Kommunikation den OCSP-Responder des zuständigen TSP ab.

> [!interesse-technik]
> TSP-Zertifikate lassen sich über die [[TSL]] validieren: Download der aktuellen TSL von `https://download.tsl.ti-dienste.de/TSL.xml`, Signaturprüfung gegen den gematik Root-CA-Public-Key (im Konnektor/TI-Gateway fest verankert). OCSP-Responder-URLs sind im Zertifikat im Feld `AuthorityInfoAccess` (OID 1.3.6.1.5.5.7.48.1) eingetragen. Für die ECC-Migration: TSPs stellen Zertifikate für beide Schlüsseltypen (RSA-2048 und ECC-BP256) aus, solange die Übergangsfrist bis Ende 2026 läuft. Spezifikation: gemKPT_PKI_TIP auf gemspec.gematik.de.

### Abgrenzung nonQES und QES

- **nonQES-TSPs**: Von der gematik akkreditiert. Stellen Zertifikate für Authentisierung und Verschlüsselung aus. Die gematik ist Policy Authority.
- **QES-TSPs (VDA)**: Von der [[Bundesnetzagentur]] beaufsichtigt nach [[eIDAS]]-Verordnung. Stellen qualifizierte Zertifikate (C.HP.QES) auf dem [[HBA]] aus. Diese unterliegen der EU-Regulierung für qualifizierte Vertrauensdienste.

## Verknüpfungen

- [[PKI]]: Die TI-PKI, in der TSPs als Sub-CAs operieren
- [[gematik]]: Betreibt die Root-CA und akkreditiert TSPs
- [[OCSP]]: Protokoll für Echtzeit-Zertifikatsprüfung, das TSPs betreiben müssen
- [[Telematikinfrastruktur]]: Nutzt TSP-Zertifikate als Vertrauensbasis
- [[eGK]], [[HBA]], [[SMC-B]]: Karten, deren Zertifikate von TSPs ausgestellt werden
- [[Konnektoren]]: Prüfen TSP-Zertifikate bei jeder TI-Kommunikation
- [[QES]]: Qualifizierte Signaturen, für die speziell akkreditierte VDAs zuständig sind
- [[eIDAS]]: EU-Verordnung für qualifizierte Vertrauensdienste (QES-Bereich)
- [[Bundesnetzagentur]]: Aufsicht über QES-VDAs nach eIDAS

## Quellen

- [gemKPT_PKI_TIP – Konzept PKI der TI-Plattform (gematik)](https://gemspec.gematik.de/docs/gemKPT/gemKPT_PKI_TIP/gemKPT_PKI_TIP_V2.14.0/index.html)
- [gemSpec TSL – Trust Service List (gematik)](https://gemspec.gematik.de/docs/gemSpec/gemSpec_TSL/latest/index.html)
- [gematik Fachportal: Sicherheitsinfrastruktur PKI](https://fachportal.gematik.de/telematikinfrastruktur/sicherheitsinfrastruktur)
