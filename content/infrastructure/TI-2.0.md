---
title: TI 2.0
audience: [technical, non-technical]
tags: [infrastruktur, architektur, ti-2-0, zero-trust, migration]
aliases: [TI2.0, Telematikinfrastruktur 2.0, TI-Transformation]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister, arztpraxis, krankenhaus, apotheke, startup]
  interests: [technik, compliance, business]
maturity: immergruen
---

# TI 2.0

**TI 2.0** ist das Architekturprogramm der [[gematik]] zum Umbau der [[Telematikinfrastruktur]] von einer VPN-basierten, hardwaregebundenen Infrastruktur hin zu einer [[Zero-Trust]]-Architektur mit cloud-basierten Zugängen.

## Erklärt für Einsteiger

Die bisherige Telematikinfrastruktur (TI 1.0) funktioniert wie ein abgeschlossenes Firmennetz: Jede Arztpraxis hat eine spezielle Sicherheitsbox (den [[Konnektoren|Konnektor]]) angeschlossen, die einen verschlüsselten Tunnel ins Netz aufbaut. Wer drin ist, gilt als vertrauenswürdig. TI 2.0 denkt das anders: Jeder Zugriff muss sich einzeln ausweisen, egal ob von innen oder außen. Statt der Hardware-Box kann die Praxis künftig einen Dienst in der Cloud nutzen. Das Ziel: weniger Aufwand, mehr Flexibilität, bessere Sicherheit.

## Überblick

Die TI 1.0 basiert auf dem Konnektor als dezentraler Hardware-Sicherheitskomponente. Der Konnektor baut einen VPN-Tunnel zur zentralen TI-Infrastruktur auf. Dieses Modell funktionierte gut für stationäre Praxisumgebungen, stößt aber bei mobilen Szenarien, Cloud-Anwendungen und heterogenen Betriebsumgebungen an Grenzen.

TI 2.0 löst dieses Modell durch drei zentrale Veränderungen ab:

1. **[[Zero-Trust]]-Architektur**: Kein implizites Vertrauen mehr aufgrund der Netzwerkposition. Jeder Zugriff wird explizit per Identität und Kontext geprüft.
2. **[[TI-Gateway]] statt Konnektor**: Cloud-basierter Dienst ersetzt die Hardware-Box. Einrichtungen verbinden sich über das Internet mit zugelassenen TI-Gateways.
3. **Föderierte Identitäten**: Die [[Gesundheits-ID]] (GesundheitsID) ermöglicht Versicherten den Zugang ohne physische Karte; Leistungserbringer authentifizieren sich über [[mTLS]]-Zertifikate.

> [!interesse-compliance]
> TI-2.0-Meilensteine: VSDM 2.0 Parallelbetrieb ab **30. Juni 2026**. Konnektor-Ausstieg: schrittweise bis **2029**. ECC-Migration ([[HBA]]/[[SMC-B]] G2.1): Frist **30. Juni 2026**. Praxen und Kliniken, die den Wechsel zum TI-Gateway planen, müssen Kompatibilität ihrer [[Primärsystem|Primärsysteme]] mit [[mTLS]] sicherstellen. Förderung: Wechselkosten können über die TI-Pauschale der KV abgerechnet werden.

### Hintergrund

> [!praxis-tipp] Praxis-Tipp: Konnektor oder TI-Gateway?
> Ihr Konnektor läuft ab oder Sie wollen TI 2.0 nutzen? Das sind Ihre Optionen:
>
> **Option A: Neuen Konnektor kaufen** (TI 1.0, übergangsweise bis 2029)
> - Einmalige Kosten: ca. 1.500 bis 2.500 Euro je nach Anbieter
> - Aufwand vor Ort: ca. 2 bis 3 Stunden für Installation und Konfiguration
> - Förderfähig über KV-TI-Pauschale
>
> **Option B: TI-Gateway (TI 2.0)**
> - Kein eigenes Gerät nötig. Verbindung läuft über das Internet zu einem Rechenzentrum.
> - Zugelassene Anbieter (Stand März 2026): RISE, Arvato Systems, Akquinet, Telekom
> - Monatliche Gebühr, Ferninstallation möglich. Zusatzkosten über TI-Pauschale nicht voll abgedeckt.
>
> Häufiger Fehler: Wer einen Konnektor vor 2019 hat, findet keinen Ersatz mehr. Für diese Praxen ist das TI-Gateway die einzige Option.

Die gematik startete das TI-2.0-Programm als Reaktion auf mehrere Faktoren:

- Hohe Kosten der Konnektor-Infrastruktur (Kauf, Wartung, Austausch alle 5 Jahre)
- Sicherheitslücken in der konnektor-basierten Architektur (u.a. CCC-Befunde zur ePA 2024)
- Bedarf nach mobilen Szenarien: Hausbesuche, Telemedizin, Pflegedienste
- Wachsende Zahl cloud-nativer TI-Anwendungen, die keine lokale Hardware benötigen

## Technische Details

### ZETA: Das Zero-Trust-Framework

Die konkrete Umsetzung von Zero Trust in TI 2.0 erfolgt über das **[[ZETA]]**-Framework (Zero Trust Architecture). Die [[gematik]] veröffentlichte am 15. Dezember 2025 die ersten ZETA-Kernkomponenten als Open Source:

- **ZETA-Client-SDK**: Bibliothek für die Integration in [[Primärsystem|Primärsysteme]] und Fachdienste
- **ZETA-Guard**: Enforcer-Komponente, die Zero-Trust-Richtlinien durchsetzt

Die Implementierung und Wartung der ZETA-Komponenten wurde an EY Strategy and Transactions GmbH vergeben. Der erste produktive ZETA-Einsatz ist für Juli 2026 mit [[VSDM]] 2.0 geplant.

> [!interesse-technik]
> ZETA Open Source: github.com/gematik/zeta (ZETA-Client-SDK, ZETA-Guard). Protokoll: [[mTLS]] für alle Verbindungen. Token-Flows: OAuth 2.0 / OpenID Connect über [[IDP]]. VSDM 2.0 Spezifikation: gemspec.gematik.de/releases/VSDM2_25_3/. TI-Gateway ATV: 1.2.6, PTV: 1.4.1 (Stand TI-Zugang_25_3, Januar 2026).

> [!dev-quickstart] Dev Quickstart: ZETA Guard und ZETA-SDK einbinden
> ZETA-SDK (Kotlin Multiplatform) via Maven Central:
> ```xml
> <dependency>
>   <groupId>de.gematik.zeta</groupId>
>   <artifactId>zeta-sdk</artifactId>
>   <version>0.2.12</version>
> </dependency>
> ```
> ZETA Guard als Policy-Enforcement-Point lokal deployen (Helm):
> ```bash
> helm repo add gematik https://gematik.github.io/zeta-guard-helm
> helm install zeta-guard gematik/zeta-guard
> ```
> Alle Verbindungen laufen über mTLS. Zertifikat-Anforderungen: SMC-B G2.1 (ECC), ausgestellt von TI-zugelassener TSP.
> - Spezifikation: [gemSpec_ZETA V1.0.0](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_ZETA/gemSpec_ZETA_V1.0.0.pdf)
> - Repos: [gematik/ZETA](https://github.com/gematik/ZETA) | [gematik/zeta-sdk](https://github.com/gematik/zeta-sdk) | [gematik/zeta-guard-helm](https://github.com/gematik/zeta-guard-helm)
> - Testumgebung: [gematik/ti2.0-testhub](https://github.com/gematik/ti2.0-testhub)

### TI-Gateway

Das [[TI-Gateway]] ist die zentrale Zugangskomponente für TI 2.0. Es ersetzt den Hardware-Konnektor und implementiert alle Sicherheitsanforderungen als Cloud-Dienst. Zugelassene Anbieter (Stand März 2026): RISE, Arvato Systems, Akquinet, Telekom (TI-Connect). Das TI-Gateway implementiert [[mTLS]] und ist die Grundlage für den ZETA-basierten Zugang.

### VSDM 2.0: Erste TI-2.0-Anwendung

[[VSDM]] 2.0 (Versichertenstammdatenmanagement 2.0) ist die erste produktive TI-2.0-Anwendung. Wesentliche Unterschiede zu VSDM 1.0:

| Merkmal | VSDM 1.0 | VSDM 2.0 |
|---|---|---|
| Architektur | VPN + Konnektor | Zero Trust + TI-Gateway |
| Datenspeicher | [[eGK]] | Fachdienst der Krankenkasse |
| Mobile Szenarien | Nein | Ja (GesundheitsID) |
| Parallelbetrieb | ab 30. Juni 2026 | Produktivstart |
| Vollmigration | — | Februar 2027 |
> [!klinik-integration] Klinik-Integration: VSDM 2.0 im Klinikbetrieb
> **Aufnahme und eGK-Prüfung:** Krankenhäuser prüfen Versichertenstammdaten bisher bei jeder stationären Aufnahme am Kartenterminal (VSDM 1.0). Ab VSDM 2.0 ist dies auch ohne physische eGK möglich, wenn der Patient die GesundheitsID nutzt. Für Notaufnahmen und bewusstlose Patienten bleibt die eGK das Standardmittel.
>
> **Hoher Durchsatz:** Bei mehr als 500 Aufnahmen pro Tag mehrere redundante TI-Verbindungskomponenten einplanen. Ein einzelner ausgefallener Konnektor oder ein TI-Gateway-Ausfall kann die gesamte Aufnahme blockieren. Empfehlung: aktiv-aktiv-Cluster für TI-Gateway oder min. zwei Konnektoren je Standort.
>
> **KIS-Update erforderlich:** Das KIS muss bis **30. Juni 2026** VSDM 2.0 unterstützen. Fragen Sie Ihren KIS-Hersteller (Dedalus ORBIS, iMedOne, Meierhofer M-KIS, IS-H-Nachfolger) nach einem verbindlichen Updatetermin. Das KIS-Update ist Voraussetzung für den reibungslosen Übergang zum Parallelbetrieb ab Juli 2026.


> [!dev-quickstart] Dev Quickstart: VSDM 2.0 FHIR-Fachdienst
> Endpunkt (nach ZETA-Authentifizierung über TI-Gateway):
> ```bash
> GET /vsdm2/v1/coverage-status/<KVNR>
> Authorization: Bearer <ZETA-Token>
> Accept: application/fhir+json
> ```
> OpenAPI-Spezifikation: [vsdm2.yaml](https://github.com/gematik/spec-VSDM2/blob/main/src/openapi/vsdm2.yaml)
> FHIR-Profile (v1.0.0-rc7): [simplifier.net/vsdm2](https://simplifier.net/vsdm2) | NPM-Package: `de.gematik.vsdm2`
> Spezifikation: [gemSpec_VSDM_2 V1.0.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VSDM_2/) | Repo: [gematik/spec-VSDM2](https://github.com/gematik/spec-VSDM2)
> Parallelbetrieb VSDM 1.0 + 2.0 ab 30. Juni 2026; Vollmigration Februar 2027.

### PoPP: Nachweis der Patientenpräsenz

In TI 2.0 übernimmt der **[[PoPP]]**-Dienst (Proof of Patient Presence) den kryptografisch gesicherten Nachweis, dass ein Patient tatsächlich beim Leistungserbringer erschienen ist. PoPP ersetzt das bisherige VSDM++-Verfahren. Stufe 1 (eGK-basierter Präsenznachweis) startet Mitte 2026.

> [!praxis-tipp] Praxis-Tipp: VSDM 2.0 ab Juli 2026
> Ab **30. Juni 2026** läuft VSDM 2.0 parallel zum bisherigen Verfahren. Das bedeutet für Ihre Praxis:
> - Versichertenstammdaten können künftig auch ohne eGK abgeglichen werden, wenn der Patient seine GesundheitsID nutzt.
> - Ihr PVS muss bis dahin VSDM 2.0 unterstützen. Fragen Sie Ihren PVS-Anbieter nach einem konkreten Update-Termin.
> - Konnektor-Praxen müssen nichts sofort ändern: Der Parallelbetrieb läuft bis Februar 2027.
>
> In Ihrer Praxis bedeutet das: kein akuter Handlungsdruck bis Mitte 2026, aber PVS-Update rechtzeitig einplanen.

### Migrationspfad bis 2029

Die Migration der gesamten TI auf TI 2.0 erfolgt schrittweise:

| Phase | Zeitraum | Inhalt |
|---|---|---|
| Pilotbetrieb | 2025–2026 | TI-Gateway verfügbar, VSDM 2.0 Pilot |
| Parallelbetrieb | 2026–2027 | Konnektoren und TI-Gateway koexistieren |
| Migration | 2027–2029 | Schrittweise Abschaltung der Konnektoren |
| Vollmigration | 2029 | Vollständiger Abschluss der TI-2.0-Transformation |

> [!frist-warnung] Frist-Warnung: ECC-Migration und VSDM-2.0-Parallelbetrieb
> **Rechtsgrundlage:** § 311 Abs. 1 SGB V i.V.m. gematik-Festlegungen zur RSA-zu-ECC-Migration; gematik-Gesellschafterbeschluss zum TI-2.0-Rollout (gemäß § 291a SGB V)
> **Fristen:**
> - **30. Juni 2026**: Alle [[HBA]] G2.0 und [[SMC-B]] G2.0 (RSA-only) müssen getauscht sein. [[Konnektoren]] ohne ECC-Unterstützung sind nicht mehr TI-fähig.
> - **30. Juni 2026**: VSDM 2.0 Parallelbetrieb startet. [[Primärsystem|Primärsysteme]] müssen VSDM 2.0 über [[TI-Gateway]] oder aktualisierte Konnektoren unterstützen.
> - **Februar 2027**: Vollmigration auf VSDM 2.0. VSDM 1.0 wird abgeschaltet.
> **Handlungsbedarf:** IT-Verantwortliche müssen bis Juni 2026 sicherstellen, dass Konnektoren ECC-fähig sind (Firmware-Update oder Austausch), HBA/SMC-B der Generation G2.1 beschafft wurden, und Primärsysteme VSDM 2.0 unterstützen. Wer auf das [[TI-Gateway]] wechselt, muss [[mTLS]] im Primärsystem aktivieren.
> **Bei Nichtbeachtung:** Ohne ECC-fähige Komponenten ist nach dem 30. Juni 2026 keine TI-Anbindung möglich. Ab Februar 2027 ist VSDM 1.0 nicht mehr verfügbar.

### Auswirkungen auf Primärsysteme

[[Primärsystem|Primärsysteme]] (PVS, KIS, AVS) müssen für TI 2.0:

- [[mTLS]] implementieren (beidseitige Zertifikatsauthentifizierung)
- Das [[ZETA]]-Client-SDK integrieren
- Kompatibilität mit ECC-Zertifikaten sicherstellen
- FHIR-Schnittstellen aktualisieren (neue Versionen mit Zero-Trust-Anforderungen)
> [!klinik-integration] Klinik-Integration: TI 2.0 Migration im Krankenhaus
> **Komplexere IT-Landschaft als in der Praxis:** Im Krankenhaus nutzen KIS, Subsysteme (RIS, LIS, PACS) und Medizingeräte-Schnittstellen gemeinsam die TI-Verbindung. Jede Komponente muss bei einer mTLS-Migration separat geprüft werden. Erstellen Sie eine vollständige Abhängigkeitsmatrix vor der Umstellung.
>
> **ECC-Karten und SMC-B im Mehrbetrieb:** Krankenhäuser haben oft mehrere SMC-B-Karten (eine je Abteilung oder Standort). Prüfen Sie, welche Karten auf G2.1 (ECC) gewechselt werden müssen und planen Sie den Kartentausch außerhalb des Betriebs. Frist: 30. Juni 2026.
>
> **TI-Gateway als Alternative zum Konnektor:** Für Häuser mit mehreren Standorten oder dezentralen Ambulanzen bietet das TI-Gateway Vorteile: zentrale Verwaltung, kein physischer Gerätewechsel. Zugelassene Anbieter (Stand März 2026): RISE, Arvato Systems, Akquinet, Telekom. Stellen Sie bei der Ausschreibung SLA-Anforderungen für 24/7-Betrieb sicher.


## Verknüpfungen

- [[Telematikinfrastruktur]] (TI 1.0: der Vorgänger)
- [[Zero-Trust]] (das Architekturprinzip hinter TI 2.0)
- [[ZETA]] (Zero-Trust-Framework für die TI)
- [[TI-Gateway]] (Cloud-Komponente, die den Konnektor ersetzt)
- [[Konnektoren]] (wird schrittweise durch TI-Gateway abgelöst)
- [[mTLS]] (Mutual TLS: technisches Fundament der Zero-Trust-Verbindungen)
- [[VSDM]] (erste produktive TI-2.0-Anwendung)
- [[PoPP]] (Patientenpräsenz-Nachweis in TI 2.0)
- [[IDP]] (Identitätsdienst für alle TI-2.0-Zugriffe)
- [[Gesundheits-ID]] (digitales Identitätsmittel für Versicherte in TI 2.0)
- [[Primärsystem]] (Clients, die auf TI 2.0 migrieren müssen)
- [[gematik]] (betreibt und spezifiziert TI 2.0)

## Quellen

- [gematik: TI 2.0](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [gematik: ZETA Open Source (GitHub)](https://github.com/gematik/zeta)
- [gematik: Newsroom – ZETA-Kernkomponenten veröffentlicht (Dezember 2025)](https://www.gematik.de/newsroom/news-detail/neuer-sicherheitsstandard-fuer-die-telematikinfrastruktur-ti-20-erste-version-von-zero-trust-kernkomponenten-veroeffentlicht)
- [gemspec.gematik.de: TI-Zugang_25_3 (Januar 2026)](https://gemspec.gematik.de/releases/TI-Zugang_25_3/index.html)
