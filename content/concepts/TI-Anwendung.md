---
title: TI-Anwendung
audience: [technical, non-technical]
tags: [konzept, telematikinfrastruktur, übersicht, taxonomie, anwendungen]
aliases: [TI-Dienst, Telematik-Anwendung, TI-Fachdienst, Anwendung der TI]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, pflege, hersteller, ti-infrastruktur, kasse, regulierung]
  interests: [compliance, technik, business]
maturity: wachsend
---

# TI-Anwendung

Eine **TI-Anwendung** ist ein digitaler Dienst oder ein Anwendungsfall, der über die [[Telematikinfrastruktur]] betrieben wird und für Leistungserbringer, Versicherte oder Kostenträger im deutschen Gesundheitswesen nutzbar ist.

## Erklärt für Einsteiger

Die Telematikinfrastruktur ist die Autobahn des deutschen Gesundheitswesens. TI-Anwendungen sind die Fahrzeuge, die auf dieser Autobahn fahren: das E-Rezept, die elektronische Patientenakte, der sichere Arztbrief. Einige davon muss jeder nutzen (Pflicht), andere kann man zusätzlich nutzen (freiwillig). Die TI ist der Unterbau, die Anwendungen sind das, was man damit tatsächlich im Alltag macht.

## Überblick

Die [[gematik]] unterscheidet TI-Anwendungen nach ihrem gesetzlichen Status in drei Kategorien: Pflichtanwendungen, freiwillige Anwendungen und Zusatzanwendungen.

Alle TI-Anwendungen setzen auf denselben Infrastrukturkomponenten auf: [[Konnektoren]] oder [[TI-Gateway]] für den Netzzugang, [[SMC-B]] und [[HBA]] für die Authentisierung, und die TI-[[PKI]] für Vertrauen und Verschlüsselung. Dieser gemeinsame Unterbau macht es möglich, neue Anwendungen einzuführen, ohne die gesamte Infrastruktur neu aufzubauen.

### Pflichtanwendungen

Pflichtanwendungen müssen von allen zugelassenen Leistungserbringern einer bestimmten Gruppe genutzt werden. Die Pflicht ist gesetzlich im [[SGB-V]] verankert. Wer die Pflicht nicht erfüllt, riskiert Vergütungsabzüge.

| Anwendung | Zuständig | Pflicht seit |
|---|---|---|
| [[VSDM]] (Versichertenstammdatenmanagement) | Praxen, Kliniken, Apotheken | 2019 |
| [[KIM]] (Kommunikation im Medizinwesen) | Praxen, Kliniken | 2021 |
| [[eAU]] (elektronische Arbeitsunfähigkeitsbescheinigung) | Praxen | 2022 |
| [[E-Rezept]] | Praxen, Kliniken, Apotheken | 2024 |
| [[ePA]] (elektronische Patientenakte) | Praxen, Kliniken | 2025 |
| [[NFDM]] (Notfalldatenmanagement) | Praxen (Befüllung) | Laufend |

> [!klinik-integration] Klinik-Integration: Pflichtanwendungen im KIS-Betrieb
> **Status-Check für Krankenhäuser:** VSDM, KIM, E-Rezept und ePA sind für Kliniken Pflicht. Prüfen Sie je Anwendung, ob Ihr KIS das entsprechende Modul in einer gematik-bestätigten Version einsetzt. Nicht bestätigte Module gefährden die Abrechenbarkeit erbrachter Leistungen.
>
> **ISiK als Parallelbaustelle:** Neben den TI-Pflichtanwendungen sind Krankenhäuser nach § 373 SGB V verpflichtet, FHIR-Schnittstellen gemäß [[ISiK]] bereitzustellen. ISiK Basis Stufe 3 ist seit 2025 verbindlich. SAP ISH, Orbis/Dedalus, NEXUS KIS und iMedOne verfügen über ISiK-Bestätigungen, jedoch in unterschiedlichen Modulkombinationen. Klären Sie mit Ihrem KIS-Hersteller, welche ISiK-Module (Basis, Medikation, Terminplanung, Vitalparameter) bestätigt sind.
>
> **KIM im Krankenhaus:** KIM-Adressen für Kliniken werden über die [[SMC-B]] der Einrichtung ausgestellt. Für Häuser mit mehreren Fachabteilungen empfiehlt sich eine Adressstruktur pro Fachabteilung, um eingehende Dokumente zielgerichtet ins KIS zu routen.

> [!praxis-tipp] Praxis-Tipp: Pflichtanwendungen im Blick behalten
> In Ihrer Praxis bedeutet das: Fehlt eine Pflichtanwendung, riskieren Sie Honorarkürzungen. Fehlen zwei oder mehr, wird die TI-Pauschale komplett gestrichen.
>
> Schnellcheck für Ihre Praxis (Stand 2026):
> 1. VSDM: Stecken Patienten die eGK ein und wird sie eingelesen? Dann aktiv.
> 2. KIM: Haben Sie eine KIM-Adresse im VZD eingetragen? Empfangen Sie AU-Bescheinigungen und Arztbriefe digital?
> 3. eAU: Werden Arbeitsunfähigkeitsbescheinigungen elektronisch übermittelt?
> 4. E-Rezept: Werden Rezepte als E-Rezept ausgestellt?
> 5. ePA: Ist das ePA-Modul in Ihrem PVS aktiv (ePA 3.0 ab April 2025 Pflicht)?
>
> Tipp: Ihre KV führt eine Übersicht, welche Anwendungen für Ihre Fachgruppe verpflichtend sind. Fragen Sie dort nach, wenn Sie unsicher sind.

> [!interesse-compliance]
> **Konsequenzen bei Nicht-Erfüllung:** Wer eine Pflichtanwendung nicht nutzt, riskiert Vergütungsabzüge (z.B. 1 Prozent bei VSDM-Ausfall, Sanktionen bei ePA-Pflicht ab Oktober 2025). Die konkrete Sanktionshöhe ist in [[SGB-V]] § 291 (VSDM) und weiteren Paragraphen geregelt. Übersicht aller Pflichttermine: [[TI-Anbindungspflicht]].

> [!frist-warnung] Frist-Warnung: ePA-Nutzungspflicht und Honorarsanktionen ab 1. Januar 2026
> **Rechtsgrundlage:** § 341 Abs. 6 SGB V (Honorarkürzung); § 347 SGB V (Befüllungspflicht); eingeführt durch das Digitalgesetz (DigiG) vom 22. März 2024 (BGBl. I Nr. 101)
> **Frist:** Seit dem 1. Oktober 2025 sind alle zugelassenen Vertragsärzte, Psychotherapeuten und Krankenhäuser verpflichtet, die ePA zu unterstützen. Ab dem 1. Januar 2026 werden Honorarsanktionen vollständig durchgesetzt.
> **Handlungsbedarf:** Die verantwortliche Stelle muss sicherstellen, dass (1) das eingesetzte PVS oder KIS ein zertifiziertes ePA-Modul enthält, (2) alle erforderlichen TI-Komponenten (Konnektor oder TI-Gateway, SMC-B) betriebsbereit sind und (3) die Quartalsabrechnung den Nachweis der ePA-Nutzungsfähigkeit enthält.
> **Bei Nichtbeachtung:** Gemäß § 341 Abs. 6 SGB V wird das Honorar pauschal um 1 Prozent gekürzt bis der Nachweis erbracht ist. Zusätzlich wird die TI-Pauschale auf die Hälfte reduziert. Beide Maßnahmen gelten kumulativ.

### Freiwillige Anwendungen

Freiwillige Anwendungen stehen allen zugelassenen Teilnehmern offen, sind aber nicht vorgeschrieben. Sie erweitern den Funktionsumfang der TI.

| Anwendung | Beschreibung |
|---|---|
| [[TI-Messenger]] | Sicheres Messaging zwischen allen TI-Teilnehmern (Matrix-Protokoll) |
| [[eImpfpass]] | Digitaler Impfausweis in der ePA |
| [[Mutterpass]] (digital) | Digitaler Mutterpass als MIO in der ePA |
| [[Kinderuntersuchungsheft]] (digital) | Digitales U-Heft als MIO in der ePA |
| [[eReferral]] | Elektronische Überweisung (in Planung) |
| [[Videosprechstunde]] | TI-basierte Telemedizin (ergänzend zu bestehenden Diensten) |

### Zusatzanwendungen

Zusatzanwendungen sind Dienste, die auf der TI-Infrastruktur aufbauen, aber über den gesetzlichen Mindestumfang hinausgehen. Teils werden sie von Dritten entwickelt und über die offenen TI-Schnittstellen ([[SMART on FHIR]], [[ISiK]]) angeboten.

| Anwendung | Beschreibung |
|---|---|
| [[DiGA]] | Digitale Gesundheitsanwendungen; werden über [[E-Rezept]] verordnet |
| [[DiPA]] | Digitale Pflegeanwendungen; über Pflegekasse erstattet |
| Spezialapps der Kassen | z.B. AOK-Gesundheitscoach, TK-Coach; nutzen TI-Identitäten |
| KI-basierte Assistenzsysteme | Nutzung von TI-Daten für klinische Entscheidungsunterstützung (EHDS-Kontext) |

## Technische Details

### Lebenszyklus einer TI-Anwendung

Eine neue TI-Anwendung durchläuft folgende Phasen:

1. **Spezifikation**: [[gematik]] veröffentlicht eine Spezifikation (gemSpec) für die Anwendung.
2. **Zulassung von Produkten**: Hersteller von Primärsystemen ([[PVS]], [[KIS]], [[AVS]]) integrieren die Anwendung und lassen ihre Produkte durch gematik zulassen ([[Zulassungsverfahren]]) oder bestätigen ([[Bestaetigungsverfahren|Bestätigungsverfahren]]).
3. **Rollout**: Die Anwendung wird in den Produktivbetrieb überführt. Oft gibt es zunächst Modellregionen, dann bundesweiter Rollout.
4. **Pflichttermin (soweit gesetzlich)**: Ab einem bestimmten Datum müssen alle Leistungserbringer die Anwendung nutzen.
5. **Weiterentwicklung**: Spezifikation wird in neuen Versionen fortgeschrieben.

### TI 2.0 und neue Anwendungsarchitektur

Mit [[TI 2.0]] ändert sich die Art, wie TI-Anwendungen aufgebaut werden:

- **Alt (TI 1.x)**: Anwendungen kommunizieren über den lokalen Konnektor mit TI-Fachdiensten. Feste IP-Adressen, proprietäre Protokolle.
- **Neu (TI 2.0)**: Anwendungen kommunizieren über das [[TI-Gateway]] oder direkt per mTLS. [[FHIR]]-basierte Schnittstellen, standardisierte REST-APIs. Das [[Zero-Trust]]-Prinzip gilt für jede Verbindung.

> [!klinik-integration] Klinik-Integration: TI 2.0 und KIS-Architektur
> **TI-Gateway statt Konnektor:** Für Krankenhäuser bietet das TI-Gateway-Modell erhebliche Vorteile gegenüber dezentralen Konnektoren. Ein zentraler TI-Gateway-Dienst im Rechenzentrum ersetzt mehrere physische Konnektoren auf den Stationen. Das senkt den Hardware-Wartungsaufwand und vereinfacht das Zertifikatsmanagement erheblich.
>
> **FHIR-Schnittstellen und KIS-Integration:** TI 2.0-Anwendungen nutzen standardisierte FHIR-REST-APIs. Diese lassen sich direkt mit der ISiK-Schnittstelle des KIS verbinden. Krankenhäuser, die ISiK bereits implementiert haben, haben damit eine technische Brücke zwischen TI-Fachdiensten und KIS-internen Datenflüssen.
>
> **Deployment-Planung:** Planen Sie die Migration von Konnektor auf TI-Gateway als strategisches Projekt. Relevante Fragen: Welche TI-Anwendungen Ihres KIS-Herstellers unterstützen bereits das TI-Gateway-Modell? Gibt es eine Roadmap für die Konnektor-Ablösung? Für 24/7-Betrieb: Redundante TI-Gateway-Anbindung (dual-path) vorsehen.

> [!interesse-technik]
> **Schnittstellen für Entwickler:** TI-Anwendungen sind über mehrere Zugangsschichten erreichbar:
> - **Primärsystemschnittstelle** (lokal): Konnektor-API (SOAP-basiert, spezifiziert in gemSpec_Kon)
> - **TI-Gateway-Schnittstelle** (mTLS): Direkter HTTPS-Zugang ohne Konnektor
> - **FHIR-APIs**: Für ePA, E-Rezept-Fachdienst, TI-Messenger
> - **SMART on FHIR**: Standardisierter App-Zugang für Dritthersteller
> Einstieg: [gematik API-Dokumentation](https://fachportal.gematik.de/hersteller-anbieter)

> [!dev-quickstart] Dev Quickstart: TI-Anwendungen per API ansprechen
> **Konnektor (SOAP, TI 1.x):**
> ```xml
> POST http://<konnektor-ip>/service/v2.5/signatureservice
> Content-Type: text/xml; charset=utf-8
> SOAPAction: "urn:gematik:ws:signatureservice:v7.5#SignDocument"
> ```
> - Konnektor-Endpunkt lokal erreichbar: `http://konnektor.local/service/...`
> - Schnittstellenspezifikation: [gemSpec_Kon](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/latest/)
>
> **E-Rezept-Fachdienst (FHIR REST, TI 2.x):**
> ```bash
> GET https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<id>
> Authorization: Bearer <IDP-Access-Token>
> Accept: application/fhir+json
> ```
> - API-Repos: [gematik/api-erp](https://github.com/gematik/api-erp), [gematik/api-ePA](https://github.com/gematik/api-ePA)
> - Alle gematik GitHub-Repos: [github.com/gematik](https://github.com/gematik)
> - API-Übersicht: [gematik CODE](https://gematik.github.io/universal/specifications.html)

### Fachdienste vs. Basisdienste

TI-Anwendungen lassen sich auch nach ihrer technischen Rolle unterscheiden:

**Basisdienste** (Infrastruktur für alle Anwendungen):
- [[VPN-Zugangsdienst]] / [[TI-Gateway]] (Netzzugang)
- [[PKI]] (Zertifikate und Vertrauen)
- [[TSL]] (Vertrauensliste)
- [[OCSP]] / [[CRL]] (Zertifikatsstatus)
- [[VZD]] (Verzeichnisdienst)

**Fachdienste** (die eigentlichen Anwendungen):
- [[E-Rezept-Fachdienst]] (E-Rezept-Backend)
- [[ePA-Aktensystem]] (elektronische Patientenakte)
- [[KIM]] (sicheres E-Mail-System)
- [[TI-Messenger]]-Dienst (Instant Messaging)

## Verknüpfungen

- [[Telematikinfrastruktur]] (Unterbau für alle TI-Anwendungen)
- [[gematik]] (spezifiziert und lässt zu)
- [[TI-Anbindungspflicht]] (Übersicht der Pflichttermine)
- [[SGB-V]] (gesetzliche Grundlage für Pflichtanwendungen)
- [[ePA]] (zentralste Pflichtanwendung)
- [[E-Rezept]] (meistgenutzte Pflichtanwendung)
- [[KIM]] (sichere Kommunikation als Pflichtanwendung)
- [[TI-Messenger]] (neue freiwillige Kommunikationsanwendung)
- [[DiGA]] (freiwillige Zusatzanwendung)
- [[TI 2.0]] (nächste Generation der TI-Architektur für Anwendungen)
- [[Zulassungsverfahren]] (Prozess für TI-Infrastrukturkomponenten)
- [[Bestaetigungsverfahren]] (Prozess für Primärsysteme)
- [[FHIR]] (Datenstandard der modernen TI-Anwendungen)

## Quellen

- [gematik: Anwendungen der Telematikinfrastruktur](https://fachportal.gematik.de/anwendungen)
- [gematik: TI 2.0 – Überblick](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [SGB V § 291 ff. – Gesetzliche Grundlage der TI-Anwendungen](https://www.gesetze-im-internet.de/sgb_5/__291.html)
- [Wikipedia: Telematikinfrastruktur](https://de.wikipedia.org/wiki/Telematikinfrastruktur)
