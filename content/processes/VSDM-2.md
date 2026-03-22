---
title: VSDM 2
audience: [technical, non-technical]
tags: [prozesse, vsdm, ti-2-0, zero-trust, gesundheits-id, versichertenstammdaten]
aliases: [VSDM 2.0, Versichertenstammdatenmanagement 2.0, VSDM2]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, pflege, hersteller, kasse, ti-infrastruktur, it-dienstleister]
  interests: [compliance, technik]
maturity: setzling
---

# VSDM 2

**VSDM 2** (Versichertenstammdatenmanagement 2) ist die erste TI-2.0-Anwendung der [[Telematikinfrastruktur]] und löst das kartenbasierte [[VSDM]] 1.0 ab. Die Versichertendaten werden nicht mehr von der [[eGK]] gelesen, sondern direkt bei der Krankenkasse abgerufen.

## Erklärt für Einsteiger

Bisher musste der Arzt beim ersten Besuch eines Patienten die Gesundheitskarte in ein Lesegerät stecken, um zu prüfen, ob der Patient versichert ist. Mit VSDM 2 funktioniert das anders: Der Computer in der Praxis fragt direkt bei der Krankenkasse nach. So klappt das auch, wenn der Patient seine Karte vergessen hat, weil er zum Beispiel die [[Gesundheits-ID]] auf dem Smartphone nutzt. Außerdem ist der Abruf schneller und moderner abgesichert.

## Überblick

VSDM 2 ist die erste produktive Anwendung der neuen [[TI-2.0]]-Architektur der gematik. Sie demonstriert, wie die Transformation von der hardwaregebundenen TI 1.x zu einem cloudbasierten, Zero-Trust-basierten System in der Praxis aussieht.

Das klassische [[VSDM]] 1.0 liest die Versichertenstammdaten (VSD) von der physischen [[eGK]] über einen [[Konnektoren|Konnektor]] und ein Kartenterminal. Jede Praxis benötigt dafür Hardware vor Ort. VSDM 2 bricht dieses Modell auf: Der [[Fachdienst]] der Krankenkasse stellt die VSD direkt über das Internet bereit. Das Primärsystem der Einrichtung fragt die Daten über eine gesicherte Verbindung ab, ohne dass eine Karte im Terminal stecken muss.

### Rollout-Zeitplan

- **30. Juni 2026**: Parallelbetrieb beginnt. VSDM 2 geht produktiv, während VSDM 1.0 weiterläuft.
- **Februar 2027**: Vollständiger Rollout von VSDM 2 abgeschlossen.
- **Mitte 2027**: Abschaltung von VSDM 1.0 geplant.

> [!praxis-tipp] Praxis-Tipp: Jetzt PVS-Update für VSDM 2 planen
> Ab 30. Juni 2026 läuft VSDM 2 parallel zu VSDM 1.0. In Ihrer Praxis bedeutet das: Ihr PVS muss VSDM 2 unterstützen, bevor VSDM 1.0 Mitte 2027 abgeschaltet wird.
>
> So gehen Sie vor:
> 1. Fragen Sie Ihren PVS-Hersteller jetzt: "Wann kommt das Update für VSDM 2?"
> 2. Planen Sie das Update außerhalb der Sprechstunde ein (Zeitaufwand: ca. 1-2 Stunden).
> 3. Prüfen Sie nach dem Update: Wird die Versichertenpflicht im PVS ohne Karte abgerufen?
>
> Gute Nachricht für Hausbesuche und Telemedizin: Wenn ein Patient die [[Gesundheits-ID]] auf dem Smartphone nutzt, können Sie den Versicherungsnachweis auch ohne physische Karte erbringen. Das erleichtert Hausbesuche erheblich.
>
> Typischer Fehler: Das PVS-Update eingespielt, aber das kartenterminale Stecken als Gewohnheit beibehalten. Testen Sie gezielt den VSDM-2-Abruf ohne eingelegte Karte.

> [!interesse-compliance] Anbindungspflicht ab 30. Juni 2026
> Ab dem 30. Juni 2026 müssen Primärsysteme (PVS, KIS, AVS) VSDM 2 unterstützen. Der Parallelbetrieb mit VSDM 1.0 gibt Einrichtungen Zeit für die Migration. PVS-Hersteller müssen rechtzeitig Software-Updates bereitstellen. Während des Parallelbetriebs können Einrichtungen zwischen VSDM 1.0 und VSDM 2 wechseln. Die vollständige Pflicht zur VSDM-2-Nutzung tritt mit der VSDM-1.0-Abschaltung Mitte 2027 in Kraft.

> [!frist-warnung] Frist-Warnung: VSDM-2-Anbindungspflicht und Abschaltung VSDM 1.0
> **Rechtsgrundlage:** § 291 Abs. 2b SGB V i.V.m. § 291b SGB V; gematik-Rolloutplanung TI 2.0 (Fachportal gematik, Spezifikationsrelease VSDM2_25_3, 02.02.2026)
>
> **Fristen:**
> - **30. Juni 2026**: Produktivstart VSDM 2. Primärsysteme (PVS, KIS, AVS) müssen VSDM-2-fähig sein oder ein terminiertes Herstellerupdate vorliegen haben.
> - **Februar 2027**: Vollständiger Rollout-Abschluss. Alle Leistungserbringer müssen VSDM 2 aktiv nutzen können.
> - **Mitte 2027 (geplant)**: Abschaltung von VSDM 1.0. Einrichtungen ohne VSDM-2-fähiges Primärsystem können die gesetzlich vorgeschriebene Versichertenprüfung nach § 291 Abs. 2b SGB V nicht mehr erfüllen.
>
> **Handlungsbedarf:** Leistungserbringer sind verpflichtet, bei ihrem PVS- oder KIS-Hersteller den Updatetermin für VSDM 2 zu erfragen und das Update vor dem 30. Juni 2026 einzuspielen. PVS-Hersteller benötigen eine gematik-Zulassung für VSDM 2; Einrichtungen sollten die Zulassung ihres Herstellers aktiv einfordern.
>
> **Bei Nichtbeachtung:** Praxen und Einrichtungen, die die VSDM-Prüfpflicht nicht erfüllen, riskieren Honorarkürzungen von 2,5 Prozent gemäß der Sanktionssystematik nach § 291 Abs. 2b SGB V. Nach Abschaltung von VSDM 1.0 ist die vertragsärztliche Abrechnung ohne VSDM-2-fähiges Primärsystem nicht mehr möglich.

## Technische Details

### Architektur: Zero Trust und ZETA

VSDM 2 implementiert die [[Zero-Trust]]-Architektur der gematik, die auch als [[ZETA]] (Zero Trust Architecture) bezeichnet wird. Das Kernprinzip: Kein implizites Vertrauen aufgrund von Netzwerkposition. Jeder Zugriff wird unabhängig vom Standort geprüft.

Technische Bausteine:

- **[[mTLS]] (Mutual TLS)**: Das Primärsystem und der VSDM-2-Fachdienst authentisieren sich gegenseitig mit Zertifikaten. Kein einseitiger Vertrauensaufbau.
- **[[ZETA]]-Client im Primärsystem**: Das PVS oder KIS enthält einen ZETA-Client, der die Verbindung zum Fachdienst absichert. Gematik hat die ZETA-Kernkomponenten als Open Source auf GitHub veröffentlicht (Dezember 2025).
- **Kein Konnektor erforderlich**: VSDM 2 benötigt keinen Hardware-[[Konnektoren|Konnektor]]. Der Zugang erfolgt direkt über das öffentliche Internet mit ZETA-Sicherung.

### Identifizierung: eGK und Gesundheits-ID

VSDM 2 unterstützt zwei Authentifizierungswege für den Versicherten:

1. **Elektronische Gesundheitskarte ([[eGK]])**: Die eGK bleibt weiterhin nutzbar. Statt die Karte im Terminal zu lesen, wird die auf der Karte gespeicherte Versicherten-ID ([[KVNR]]) zur Abfrage beim Fachdienst verwendet.
2. **[[Gesundheits-ID]]**: Der Versicherte legitimiert sich per Smartphone-App. Dies ermöglicht den VSD-Abruf ohne physische Karte. Mobile Szenarien wie Hausbesuche oder Telemedizin werden damit erheblich vereinfacht.

> [!praxis-tipp] Praxis-Tipp: Patienten ohne Karte korrekt aufnehmen
> Mit VSDM 2 müssen Patienten die eGK nicht mehr physisch vorlegen, wenn sie eine [[Gesundheits-ID]] nutzen. Das ändert den Ablauf an der Anmeldung.
>
> In Ihrer Praxis bedeutet das:
> - Schulen Sie Ihr Team: "Karte vergessen" ist mit VSDM 2 kein Problem mehr, wenn der Patient eine Gesundheits-ID-App auf dem Smartphone hat.
> - Fragen Sie beim Einschreiben: "Haben Sie Ihre Gesundheitskarte dabei oder nutzen Sie die Gesundheits-ID-App Ihrer Krankenkasse?"
> - Patienten ohne beides können Sie über VSDM 1.0 wie bisher aufnehmen, bis die Abschaltung Mitte 2027 erfolgt.
>
> Häufiger Fehler: MFAs schicken Patienten ohne Karte nach Hause, obwohl der Versicherungsnachweis per App möglich wäre. Das kostet unnötig Zeit und frustriert Patienten.

### PoPP-Integration

[[PoPP]] (Proof of Patient Presence) ist ein ergänzender Dienst, der kryptografisch nachweist, dass ein Versicherter tatsächlich beim Leistungserbringer anwesend ist. VSDM 2 und PoPP werden parallel eingeführt und sind aufeinander abgestimmt. PoPP löst die bisherige VSDM++-Logik ab und ist Voraussetzung für bestimmte Abrechnungsszenarien, die den physischen Patientenkontakt belegen müssen.

> [!frist-warnung] Frist-Warnung: PoPP-Pflicht für Abrechnungsszenarien
> **Rechtsgrundlage:** § 291 Abs. 2b SGB V i.V.m. gematik-Festlegung PoPP (Rollout parallel zu VSDM 2, Fachportal gematik, Stand 2026); Bundesmantelvertrag Ärzte (BMV-Ä), Anlage 4a
>
> **Frist:** PoPP wird parallel zum VSDM-2-Produktivstart ab 30. Juni 2026 eingeführt. Für Abrechnungsszenarien, die den Nachweis des physischen Patientenkontakts erfordern (z.B. bestimmte Behandlungspauschalen), ist PoPP ab dem vollständigen Rollout Voraussetzung. Ohne PoPP-Token kann der Patientenkontakt in diesen Fällen nicht nachgewiesen werden.
>
> **Handlungsbedarf:** Primärsystemhersteller müssen die PoPP-Integration bis zum VSDM-2-Produktivstart implementieren. Leistungserbringer prüfen, ob ihr PVS oder KIS den PoPP-Dienst unterstützt, bevor sie betroffene Abrechnungspositionen geltend machen.
>
> **Bei Nichtbeachtung:** Abrechnungspositionen, die PoPP voraussetzen, können bei fehlender PoPP-Unterstützung im Primärsystem von der Krankenkasse beanstandet und als sachlich-rechnerische Berichtigung zurückgefordert werden.

### Unterschiede zu VSDM 1.0

| Merkmal | VSDM 1.0 | VSDM 2 |
|---|---|---|
| Datenquelle | eGK (physische Karte) | Fachdienst der Krankenkasse |
| Hardware | Konnektor + Kartenterminal | Kein Konnektor nötig |
| Authentisierung Versicherter | eGK-PIN-Eingabe (optional) | eGK oder Gesundheits-ID |
| Sicherheitsarchitektur | VPN-Perimeter | Zero Trust (ZETA, mTLS) |
| Mobilfähigkeit | Eingeschränkt | Vollständig (Hausbesuche, Telemedizin) |
| TI-Version | TI 1.x | TI 2.0 |

> [!klinik-integration] Klinik-Integration: VSDM 2 im KIS-Aufnahmeprozess
> **Aufnahme:** Die VSDM-2-Abfrage löst den bisherigen eGK-Einzug am stationären Empfang ab. Im KIS wird der ADT-Prozess so konfiguriert, dass HL7-ADT^A01 (Aufnahme) den VSDM-2-Abruf triggert. Rückmeldung der aktuellen Versichertenstammdaten erfolgt über ADT^A08 (Stammdaten-Update).
>
> **KIS-Anbindung:** Der gematik-Implementierungsleitfaden für VSDM 2 richtet sich explizit an KIS-Primärsystemhersteller. KIS-Systeme (Dedalus/Orbis, Nexus, iMedOne und Nachfolger von SAP IS-H) müssen einen ZETA-Client integrieren. Fragen Sie Ihren KIS-Hersteller jetzt nach dem geplanten Release-Termin für das VSDM-2-Update. Pflicht-Deadline: 30. Juni 2026.
>
> **Deployment:** Der ZETA-Client läuft als Softwarekomponente ohne Hardware-Konnektor. Für Hochverfügbarkeit im 24/7-Betrieb: redundante Auslegung des ZETA-Clients einplanen (aktiv/passiv). Notaufnahme-Sonderfall: Bei Erstversorgung hat die Behandlung Vorrang. Die VSDM-2-Abfrage kann nachgeholt werden. VSDM 1.0 läuft als Fallback bis Mitte 2027 parallel.

> [!interesse-technik] Technischer Einstieg: VSDM 2 implementieren
> Die VSDM-2-Spezifikation ist auf dem gematik Fachportal und GitHub verfügbar. Aktueller Release: VSDM2_25_3 (2. Februar 2026, 5 Dokumente). ZETA-Client-SDK als Open Source: [github.com/gematik/zeta](https://github.com/gematik/zeta). Anforderungen an PVS-Hersteller: ZETA-Client-Integration, mTLS-Konfiguration, KVNR-basierte Abfrage beim VSDM-2-Fachdienst. Die gematik veranstaltet Informationsveranstaltungen für Primärsystemhersteller (Fachportal: Infoveranstaltung VSDM 2.0 mit Zero Trust und PoPP). Implementierungsleitfaden: [gemspec.gematik.de](https://gemspec.gematik.de).

> [!dev-quickstart] Dev Quickstart: VSDM-2-Fachdienst abfragen
> Der VSDM-2-Fachdienst exposes eine FHIR-REST-API. Das Primärsystem kommuniziert per mTLS mit dem ZETA-Guard-Endpoint. Der ZETA-Guard ergänzt intern die Header `ZETA-User-Info`, `ZETA-PoPP-Token-Content` und `ZETA-Client-Data` in Richtung Fachdienst. Das PVS sendet diese nicht selbst.
>
> **Repos und Spezifikation:**
> - OpenAPI + FHIR-Profile: [github.com/gematik/spec-VSDM2](https://github.com/gematik/spec-VSDM2)
> - Prototyp-Server (PoC): [github.com/gematik/poc-VSDM2](https://github.com/gematik/poc-VSDM2)
> - ZETA-SDK (Kotlin Multiplatform): [github.com/gematik/zeta-sdk](https://github.com/gematik/zeta-sdk)
> - PoPP-Token-Generator (Testdaten): [github.com/gematik/popp-token-generator](https://github.com/gematik/popp-token-generator)
> - Gemspec: `gemSpec_VSDM_2` auf [gemspec.gematik.de](https://gemspec.gematik.de)
>
> **VSD-Abruf (Primärsystem gegen ZETA-Guard-Endpoint):**
> ```bash
> curl --cert client.crt --key client.key --cacert ti-ca-chain.pem \
>   -H "Authorization: Bearer $ZETA_ACCESS_TOKEN" \
>   -H "X-PoPP-Token: $POPP_JWT" \
>   -H "Accept: application/fhir+json" \
>   "https://<zeta-guard-endpoint>/vsdm/v1/fhir/Patient?identifier=X123456789"
> ```
> - `client.crt` / `client.key`: SMC-B- oder zugelassenes PS-Zertifikat (TI-PKI)
> - `$ZETA_ACCESS_TOKEN`: vom ZETA-Guard ausgestelltes Access-Token (OAuth2 Client Credentials Flow)
> - `$POPP_JWT`: PoPP-Token vom PoPP-Dienst (JWT, belegt Patientenpräsenz)
> - KVNR (`X123456789`): aus eGK ausgelesen oder per Gesundheits-ID übermittelt

## Verknüpfungen

- [[VSDM]] (Vorgänger: kartenbasiertes Versichertenstammdatenmanagement 1.0)
- [[TI-2.0]] (übergeordnete TI-Architektur, erste produktive Anwendung ist VSDM 2)
- [[Zero-Trust]] (Sicherheitsarchitektur, auf der VSDM 2 aufbaut)
- [[ZETA]] (gematik-Implementierung der Zero-Trust-Architektur)
- [[mTLS]] (Mutual TLS: Authentisierungsprotokoll für VSDM-2-Verbindungen)
- [[Gesundheits-ID]] (digitale Identität als Alternative zur eGK bei VSDM 2)
- [[eGK]] (weiterhin unterstützter Authentisierungsweg bei VSDM 2)
- [[PoPP]] (ergänzender Dienst für den Nachweis der Patientenpräsenz)
- [[KVNR]] (Versicherten-ID, die bei VSDM 2 für den Fachdienst-Abruf genutzt wird)
- [[TI-Gateway]] (Cloud-Zugangsdienst der TI 2.0, komplementär zu VSDM 2)
- [[Konnektoren]] (Hardware-Zugangsdienst, wird durch VSDM 2 nicht mehr benötigt)
- [[Fachdienst]] (VSDM-2-Fachdienst bei der Krankenkasse als Datenquelle)

## Quellen

- [gematik Fachportal: Versichertenstammdaten-Management (VSDM)](https://fachportal.gematik.de/anwendungen/versichertenstammdaten-management)
- [gematik: TI 2.0 – Zukunft der digitalen Gesundheitsanwendungen](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [gemspec: VSDM2_25_3 Spezifikationsrelease (02.02.2026)](https://gemspec.gematik.de/releases/VSDM2_25_3/index.html)
- [gematik: Erste Version der ZETA-Kernkomponenten veröffentlicht (15.12.2025)](https://www.gematik.de/newsroom/news-detail/neuer-sicherheitsstandard-fuer-die-telematikinfrastruktur-ti-20-erste-version-von-zero-trust-kernkomponenten-veroeffentlicht)
