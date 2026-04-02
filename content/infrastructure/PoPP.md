---
title: PoPP
audience: [technical, non-technical]
tags: [infrastruktur, sicherheit, epa, egk, praesenznachweis, ti-2.0]
aliases: [Proof of Patient Presence, PoPP-Dienst, PoPP-Service]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, pflege, hersteller, ti-infrastruktur, it-dienstleister, kasse]
  interests: [technik, compliance]
maturity: wachsend
---

# PoPP

Der **PoPP-Dienst (Proof of Patient Presence)** ist ein kryptografischer Nachweis, der bestätigt, dass ein Versicherter bei einem bestimmten Leistungserbringer physisch anwesend ist oder aktiv online eingewilligt hat, bevor auf seine [[ePA]] zugegriffen werden darf.

## Erklärt für Einsteiger

Stell dir vor, jemand könnte sich in der Arztpraxis als du ausgeben und deine Patientenakte öffnen. Das war theoretisch möglich, bevor PoPP existierte. PoPP ist wie eine Türkontrolle: Bevor ein Arzt deine Akte öffnen darf, muss dein Ausweis (die Gesundheitskarte) am Einlass gescannt werden und ein kryptografischer Nachweis wird ausgestellt. Erst mit diesem Nachweis wird die Akte freigegeben. Kein gefälschter Ausweis, keine unbefugten Zugriffe.

## Überblick

PoPP entstand als direkte Reaktion auf eine Sicherheitslücke, die der Chaos Computer Club (CCC) Ende 2024 in der [[ePA]] aufdeckte. Über gefälschte [[SMC-B]]-Karten wäre theoretisch ein Massenzugriff auf Patientenakten möglich gewesen. [[gematik]] und [[BSI]] bestätigten, dass kein Missbrauch stattgefunden hatte, leiteten aber Sofortmaßnahmen ein.

Die dauerhafte Lösung ist PoPP: ein Dienst, der kryptografisch sicherstellt, dass der Zugriff auf die ePA eines Versicherten nur dann möglich ist, wenn der Versicherte physisch anwesend ist (in der Praxis oder beim Hausbesuch) oder aktiv online eingewilligt hat. Damit wird das bisherige VSDM++-Verfahren abgelöst.

Die [[gematik]] vergab den Implementierungsauftrag für Stufe 1 an **RISE GmbH**. Die Spezifikation V1.0.0 wurde am **3. März 2026** veröffentlicht. Am **25. März 2026** erschien der Pre-Release **Draft_PoPP1_26_1** mit Stufe-1-Aktualisierungen (Bestandsdatenlieferung, Telemetriedaten, Testdokumentation).

### Stufen der Einführung

PoPP wird in zwei Stufen eingeführt:

**Stufe 1 (Produktivstart: Mitte 2026)**

Stufe 1 deckt den eGK-basierten Präsenznachweis in Praxen, bei Hausbesuchen und in stationären Einrichtungen ab. Die [[eGK]] des Versicherten wird am [[Kartenterminal]] gelesen; der PoPP-Service stellt daraufhin einen kryptografisch signierten Token aus. Dieser Token bestätigt, dass ein bestimmter Versicherter bei einem bestimmten Leistungserbringer anwesend ist.

> [!klinik-integration] Klinik-Integration: PoPP im stationären Aufnahmeprozess
> **Aufnahme-Workflow:** Der PoPP-Client im KIS muss den ADT-Aufnahmeprozess (HL7 ADT^A01) verknüpfen. Bei stationärer Aufnahme liest das Kartenterminal die eGK; das KIS fordert automatisch den PoPP-Token an, der anschließend als Voraussetzung für jeden ePA-Zugriff während des Aufenthalts gespeichert wird.
>
> **KIS-Anbindung:** SAP ISH, Orbis/Dedalus, iMedOne und NEXUS KIS müssen den PoPP-Client als bestätigtes Modul integrieren. Handlungsbedarf jetzt: Klären Sie mit Ihrem KIS-Hersteller, ob das PoPP-Client-Modul für Produktivstart Mitte 2026 verfügbar und gematik-bestätigt ist. Ohne dieses Modul ist kein ePA-Zugriff aus dem KIS möglich.
>
> **Notaufnahme:** Erstversorgung hat Vorrang vor dem PoPP-Nachweis. Das KIS muss den Nachholprozess abbilden können: PoPP-Token wird angefordert, sobald die eGK des Patienten verfügbar ist. Dokumentieren Sie diesen Sonderfall im Aufnahmeprozess.
>
> **Kapazitätsplanung:** Bei hohem Aufnahmeaufkommen (über 100 stationäre Aufnahmen/Tag) mehrere Kartenterminals an der Aufnahmetheke einplanen. Jede Aufnahme löst einen synchronen PoPP-Token-Request aus.

> [!interesse-compliance]
> **Wichtig für Stufe 1:** VER-Smartphone-Szenarien (Versicherter per Smartphone, ohne physische eGK) sind in PoPP Stufe 1 ausdrücklich **nicht** enthalten. Dies wurde mit dem Pre-Release Draft_PoPP1_26_1 vom 25. März 2026 klargestellt. Der vollständige Smartphone-basierte Zugang kommt erst mit Stufe 2 (Q4/2026).

**Stufe 2 (Geplant: Q4/2026)**

Stufe 2 erweitert PoPP um:
- Smartphone-basierte Szenarien (VER-Smartphone): Versicherter nutzt Smartphone statt physischer eGK
- [[Gesundheits-ID]] als alternative Identitätsgrundlage
- Telemedizin- und Online-Szenarien (kein Präsenzbesuch erforderlich)
- Mobile Anwendungsfälle für häusliche Pflege

| Merkmal | Stufe 1 | Stufe 2 |
|---|---|---|
| Physische eGK | Ja | Optional |
| Smartphone (VER) | Nein | Ja |
| [[Gesundheits-ID]] | Nein | Ja |
| Telemedizin | Nein | Ja |
| Produktivstart | Mitte 2026 | Q4/2026 |

> [!frist-warnung] Frist-Warnung: PoPP-Produktivstart und Primärsystem-Pflicht
> **Rechtsgrundlage:** § 291b Abs. 1 SGB V i.V.m. gematik-Festlegung gemäß § 385 SGB V (Übergangsfrist VSDM1); gemSpec_PoPP_Service V1.0.0
> **Frist:** Produktivstart PoPP Stufe 1 ist für Mitte 2026 festgelegt. Der VSDM1-Dienst wurde zum 31. März 2026 abgeschaltet.
> **Handlungsbedarf:** Die verantwortliche Stelle muss sicherstellen, dass das eingesetzte Primärsystem (PVS, KIS, AVS) eine PoPP-fähige Zulassung der gematik besitzt und den PoPP-Client implementiert hat, bevor der obligatorische Einsatz beginnt. Hersteller sind verpflichtet, ihre Produkte rechtzeitig zu aktualisieren und erneut zulassen zu lassen.
> **Bei Nichtbeachtung:** Ohne PoPP-fähiges Primärsystem ist der gesetzeskonforme ePA-Zugriff ab Mitte 2026 nicht mehr gewährleistet. Ein nicht zugelassenes System kann die Abrechnungsfähigkeit erbrachter Leistungen gefährden.

## Technische Details

### Architektur

Der PoPP-Dienst besteht aus drei Komponenten:

1. **PoPP-Service**: Serverseitiger Plattformdienst, betrieben von [[gematik]] (über RISE). Läuft in einer [[VAU|Vertrauenswürdigen Ausführungsumgebung (VAU)]] und ist durch [[ZETA]]-Guard gesichert.
2. **PoPP-Client**: Implementierung im [[Primärsystem]] ([[PVS]], [[KIS]], [[AVS]]). Sendet die eGK-Daten an den PoPP-Service und empfängt den Token.
3. **PoPP-Module**: Für spätere mobile Szenarien in Stufe 2.

### Ablauf (Stufe 1, eGK-basiert)

1. Patient steckt [[eGK]] ins [[Kartenterminal]] der Praxis.
2. Das Primärsystem liest die eGK-Daten aus und sendet sie über den [[Konnektoren|Konnektor]] oder das [[TI-Gateway]] an den PoPP-Service.
3. Der PoPP-Service prüft die eGK gegen eine eGK-Hash-Datenbank (verhindert Verwendung gefälschter oder gesperrter Karten).
4. Bei erfolgreicher Prüfung stellt der PoPP-Service einen **kryptografisch signierten PoPP-Token** aus. Dieser Token bestätigt: "Versicherter X ist bei Leistungserbringer Y anwesend."
5. Das Primärsystem nutzt den PoPP-Token als Zugangsberechtigung für den Zugriff auf die [[ePA]] des Versicherten.

> [!praxis-tipp] Praxis-Tipp: PoPP-Einführung ab Mitte 2026
> In Ihrer Praxis ändert sich der tägliche Ablauf zunächst kaum. Patienten stecken die eGK wie gewohnt ins Kartenterminal. Ihr PVS übernimmt den PoPP-Token-Austausch automatisch im Hintergrund.
>
> Was Sie vorbereiten sollten:
> 1. PVS-Update abwarten, das den PoPP-Client enthält. Fragen Sie Ihren PVS-Hersteller, ab wann das Update verfügbar ist.
> 2. Kartenterminals prüfen: Für Stufe 1 reicht das bestehende Terminal, solange es eGK-kompatibel ist.
> 3. Hausbesuche: PoPP Stufe 1 unterstützt auch mobile Szenarien. Klären Sie mit Ihrem IT-Dienstleister, ob Ihr mobiles Kartenterminal kompatibel ist.
>
> Wichtig: Smartphone-basierte Patientenidentifikation kommt erst mit Stufe 2 (Q4/2026). Bis dahin bleibt die physische eGK Pflicht.

> [!interesse-technik]
> **Spezifikation:** gemSpec_PoPP_Service V1.0.0 (3. März 2026): https://gemspec.gematik.de/docs/gemSpec/gemSpec_PoPP_Service/gemSpec_PoPP_Service_V1.0.0/index.html
> **Pre-Release:** Draft_PoPP1_26_1 (25. März 2026): https://gemspec.gematik.de/prereleases/Draft_PoPP1_26_1/index.html
> Der PoPP-Token enthält: Versicherten-Pseudonym, Leistungserbringer-ID (aus [[SMC-B]]), Zeitstempel, kryptografische Signatur.
> Sicherheitskomponenten: [[VAU]], [[ZETA]]-Guard, HSM, X.509-Zertifikate aus der TI-[[PKI]].

> [!dev-quickstart] Dev Quickstart: PoPP-Token anfordern (Stufe 1)
> ```bash
> # 1. Access Token vom PoPP Authorization Server holen (Client Credentials via SMC-B-JWT)
> POST https://popp-service.ti-dienste.de/auth/token
> Content-Type: application/x-www-form-urlencoded
>
> grant_type=client_credentials
> &client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
> &client_assertion=<SMC-B-signiertes-JWT>
>
> # 2. PoPP-Token für eGK-Präsenz anfordern
> POST https://popp-service.ti-dienste.de/v1/popp-token
> Authorization: Bearer <Access-Token>
> Content-Type: application/json
>
> {
>   "egkData": "<Base64-kodierte-eGK-Daten-vom-Kartenterminal>",
>   "leistungserbringerId": "<Telematik-ID-aus-SMC-B>"
> }
> ```
> Response: signierter PoPP-Token (JWT) mit Versicherten-Pseudonym, Leistungserbringer-ID, Zeitstempel.
> - Sample-Code: [gematik/popp-sample-code](https://github.com/gematik/popp-sample-code)
> - Spec V1.0.0: [gemSpec_PoPP_Service](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PoPP_Service/gemSpec_PoPP_Service_V1.0.0/index.html)
> - Konzept: [gemKPT_PoPP V1.0.0](https://gemspec.gematik.de/docs/gemKPT/gemKPT_PoPP/gemKPT_PoPP_V1.0.0/)

### Einbettung in TI 2.0

> [!klinik-integration] Klinik-Integration: PoPP-Deployment im Krankenhaus
> **Konnektor vs. TI-Gateway:** Krankenhäuser können den PoPP-Client über den bestehenden Highspeed-Konnektor oder direkt über das TI-Gateway betreiben. Das TI-Gateway-Modell (ohne physischen Konnektor vor Ort) eignet sich besonders für Häuser mit mehreren Standorten oder Zentralisierungsstrategie. Planen Sie dies mit Ihrem TI-Dienstleister ab.
>
> **Hochverfügbarkeit:** Der PoPP-Token-Request ist für jeden ePA-Zugriff erforderlich. Ein Ausfall des TI-Zugangspfads blockiert damit auch die ePA-Nutzung im KIS. Empfehlung: redundante Konnektor-Konfiguration oder dual-path TI-Gateway für 24/7-Betrieb.
>
> **Stufe 2 (Q4/2026) und Telemedizin:** Mit Stufe 2 können Patienten PoPP auch online über die Gesundheits-ID bestätigen. Das eröffnet im Krankenhaus neue Szenarien: Vorab-Einwilligung für ePA-Zugriff vor stationärer Aufnahme oder für telemedizinische Konsiliarleistungen.

> [!praxis-tipp] Praxis-Tipp: PoPP und Telemedizin
> In Ihrer Praxis bedeutet das: Für Videosprechstunden und Telemedizin-Angebote bringt PoPP ab Q4/2026 (Stufe 2) erstmals einen standardisierten Online-Präsenznachweis. Bis dahin gelten die bisherigen Regelungen für Telemedizin weiter.
>
> Für Pflegeeinrichtungen und ambulante Pflegedienste: Stufe 2 unterstützt explizit mobile Anwendungsfälle in der häuslichen Pflege. Planen Sie Ihre IT-Ausstattung (Tablet, mobiles Kartenterminal) entsprechend.

PoPP ist Teil der [[TI 2.0]]-Architektur und implementiert das [[Zero-Trust]]-Prinzip: Kein Zugriff ohne verifizierten Nachweis, jede Session wird neu authentisiert. Die eGK-Hash-Datenbank verhindert, dass gestohlene oder gefälschte Karten verwendet werden. PoPP ersetzt perspektivisch das VSDM++-Verfahren, das bisher die Patientenpräsenz implizit über das Kartenlesen annahm.

### Verhältnis zu CardLink

[[CardLink]] (eGK-basiertes E-Rezept-Einlösen per App ohne PIN) läuft bis **31. Januar 2027** im Parallelbetrieb mit PoPP. Ab Mitte 2026 übernimmt PoPP schrittweise den Präsenznachweis. Ab August 2026 laufen CardLink, VSDM 1.0 und PoPP parallel.

## Verknüpfungen

- [[ePA]] (schützt den Zugriff auf die Patientenakte)
- [[eGK]] (Grundlage des Präsenznachweises in Stufe 1)
- [[Gesundheits-ID]] (alternative Identitätsgrundlage in Stufe 2)
- [[SMC-B]] (Identifikation des Leistungserbringers)
- [[VSDM]] (bisheriges Verfahren, das PoPP ablöst)
- [[CardLink]] (läuft bis Januar 2027 parallel zu PoPP)
- [[VAU]] (Vertrauenswürdige Ausführungsumgebung; Betriebsumgebung des PoPP-Service)
- [[ZETA]] (Zero-Trust-Sicherheitsarchitektur; PoPP nutzt ZETA-Guard)
- [[TI 2.0]] (Architekturrahmen, in dem PoPP eingebettet ist)
- [[Zero-Trust]] (Sicherheitsprinzip: kein Vertrauen ohne Nachweis)
- [[PKI]] (stellt Zertifikate für PoPP-Komponenten aus)
- [[Kartenterminal]] (liest die eGK für den Präsenznachweis)

## Quellen

- [gematik: PoPP-Dienst startet mit Umsetzungsstufe 1, Zuschlag an RISE](https://www.gematik.de/newsroom/news-detail/popp-dienst-startet-mit-umsetzungsstufe-1-zuschlag-geht-an-rise)
- [gemSpec_PoPP_Service V1.0.0 (3. März 2026)](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PoPP_Service/gemSpec_PoPP_Service_V1.0.0/index.html)
- [Pre-Release Draft_PoPP1_26_1 (25. März 2026)](https://gemspec.gematik.de/prereleases/Draft_PoPP1_26_1/index.html)
- [gematik Fachportal: ePA für alle](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
