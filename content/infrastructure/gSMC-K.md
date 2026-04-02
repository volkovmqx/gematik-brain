---
title: gSMC-K
audience: [technical]
tags: [infrastruktur, karte, konnektor, sicherheit, pki, ecc-migration]
aliases: [Gerätekarte Konnektor, Security Module Card Konnektor, gSMC-K]
relevance:
  sectors: [arztpraxis, zahnarzt, krankenhaus, apotheke, hersteller, ti-infrastruktur, it-dienstleister]
  interests: [technik, compliance]
maturity: setzling
---

# gSMC-K

Die **gSMC-K (gematik Security Module Card für Konnektoren)** ist die Gerätekarte, die im [[Konnektoren|Konnektor]] verbaut ist und dessen Identität gegenüber der [[Telematikinfrastruktur]] kryptografisch nachweist.

## Erklärt für Einsteiger

Der Konnektor in einer Arztpraxis ist das Tor zur digitalen Gesundheitsinfrastruktur. Aber woher weiß das TI-Netz, dass dieser Konnektor wirklich ein zugelassenes Gerät ist und nicht ein gefälschtes? Die gSMC-K ist der eingebaute Ausweis des Konnektors. Ohne diese Karte kann der Konnektor keine Verbindung zur Telematikinfrastruktur aufbauen. Der Chip ist fest im Gerät verbaut und kann nicht einfach herausgenommen und woanders eingesetzt werden.

## Überblick

Jeder zugelassene Konnektor enthält eine gSMC-K als Pflichtbestandteil. Die Karte enthält kryptografische Schlüsselpaare und Zertifikate der [[PKI|TI-PKI]], mit denen der Konnektor seine Identität gegenüber den TI-Zugangsdiensten und Fachdiensten nachweist.

Die gSMC-K ist das Pendant zur [[SMC-B]] für Institutionen und zum [[HBA]] für Personen, aber für Geräte. Sie ist damit das dritte Standbein der TI-Identitätsinfrastruktur auf Hardware-Ebene.

| Karte | Für | Zweck |
|---|---|---|
| [[eGK]] | Versicherter | Versicherungsnachweis, Patientenidentität |
| [[HBA]] | Heilberufler | Persönliche Signatur, Arztidentität |
| [[SMC-B]] | Institution | Institutionsidentität |
| [[gSMC-KT]] | Kartenterminal | Geräteauthentisierung des Terminals |
| gSMC-K | Konnektor | Geräteauthentisierung des Konnektors |

Die gSMC-K wird bei der Herstellung des Konnektors eingebaut. Sie ist nicht austauschbar, ohne den Konnektor zu ersetzen. Das verhindert, dass eine gültige Karte aus einem alten oder gestohlenen Konnektor in einem nicht zugelassenen Gerät verwendet wird.

### Kartenherausgeber

Die gSMC-K wird vom [[Kartenherausgeber]] im Auftrag der [[gematik]] produziert und vorpersonalisiert. Konnektorhersteller erhalten die Karten für den Einbau in ihre Geräte. Die Zertifikate auf der gSMC-K werden von einer zugelassenen Zertifizierungsstelle ([[TSP]]) der TI-[[PKI]] ausgestellt.

## Technische Details

### Zertifikate der gSMC-K

Die gSMC-K enthält mehrere Zertifikate für unterschiedliche Aufgaben:

- **C.NK.VPN**: VPN-Authentisierungszertifikat. Wird beim Aufbau des IPSec-Tunnels zum [[VPN-Zugangsdienst]] verwendet. Authentisiert den Konnektor gegenüber dem VPN-Konzentrator.
- **C.NK.CS**: Zertifikat für die Netzwerkkonnektivität und interne TI-Kommunikation.
- **C.SAK.AUT**: Signaturzertifikat für komfortsignatur-relevante Operationen (soweit relevant).

Alle Zertifikate enthalten die Seriennummer des Konnektors, den öffentlichen Schlüssel und werden von einer in der [[TSL|TI-Vertrauensliste (TSL)]] gelisteten CA ausgestellt.

### Einbindung in die TI-PKI

Die gSMC-K-Zertifikate sind Teil der [[PKI|TI-PKI]]-Hierarchie. Der VPN-Zugangsdienst prüft bei der Verbindungsaufnahme:

1. Ist das Zertifikat der gSMC-K von einer in der [[TSL]] gelisteten CA ausgestellt?
2. Ist das Zertifikat noch gültig (Ablaufdatum)?
3. Ist das Zertifikat nicht gesperrt ([[OCSP]]-Prüfung)?

Nur wenn alle drei Prüfungen positiv sind, wird der Konnektor als vertrauenswürdiger TI-Teilnehmer akzeptiert.

> [!klinik-integration] Klinik-Integration: Konnektor-Infrastruktur im Krankenhaus planen
> **Mehrere Konnektoren, eine SMC-B:** Große Krankenhäuser mit mehr als 25 eHealth-Kartenterminals betreiben mehrere Konnektoren. Gemäß gematik-Vorgaben (gemInfo_Anschluss_KH_TI V1.4.2) können diese Konnektoren dieselbe Telematik-ID der [[SMC-B]] verwenden, benötigen aber jeweils eine eigene gSMC-K mit eigenem C.NK.VPN-Zertifikat. Planen Sie die Konnektor-Anzahl anhand der Kartenterminal-Topologie und der erwarteten TI-Last (VSDM-Prüfungen, ePA-Zugriffe, PoPP-Token-Requests).
>
> **Netzwerksegmentierung:** Jeder Konnektor baut einen eigenen IPSec-Tunnel zum VPN-Zugangsdienst auf. Stellen Sie sicher, dass das Krankenhaus-Netzwerk (VLAN, Firewall) ausgehende UDP/ESP-Pakete für jeden Konnektor-Cluster zulässt. Ausgehende Ports: UDP 500 (IKEv2), UDP 4500 (NAT-T), IP-Protokoll 50 (ESP).

### ECC-Migration: Kritisch für gSMC-K

> [!dev-quickstart] Dev Quickstart: gSMC-K Zertifikat prüfen (OCSP)
> ```bash
> # OCSP-Prüfung eines gSMC-K C.NK.VPN-Zertifikats (Produktivumgebung)
> openssl ocsp \
>   -issuer sub-ca.pem \
>   -cert gnsmck-cert.pem \
>   -url https://ocsp.pki.telematik.de \
>   -resp_text
>
> # Referenzumgebung (RU):
> # -url https://ocsp.pki.telematik-test.de
> ```
> - **Algorithmus G2.1**: ECC P-256 (NIST) oder brainpoolP256r1, SHA-256
> - **IPSec/IKEv2**: Authentisierung via X.509, Key Exchange via IKEv2 [RFC 7296]
> - **Zertifikatsfeld**: `Subject Alternative Name` enthält Konnektor-Seriennummer (OID-basiert)
> - Spec: [gemSpec_Krypt aktuell](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Krypt/latest/), Abschnitte zu `C.NK.VPN` und IPSec-Profil
> - Spec: [gemSpec_VPN_Zugangsdienst](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VPN_Zugangsdienst/latest/)

> [!interesse-compliance]
> **ECC-Migrationsfrist:** Konnektoren mit gSMC-K G2.0 (RSA-only) durften nach dem **31. Dezember 2025** keine neuen VPN-Verbindungen mehr aufbauen. Die Frist für den Konnektortausch war damit eine der ersten harten Fristen der [[ECC-Migration]]. Praxen ohne ECC-fähigen Konnektor (G2.1 oder Highspeed-Konnektor) verloren ab 2026 die TI-Anbindung.

Die [[ECC-Migration]] betrifft die gSMC-K in besonderem Maß:

- **Generation G2.0**: RSA-basierte Schlüsselverfahren, nicht mehr zulässig ab 2026.
- **Generation G2.1**: ECC-basierte Schlüsselverfahren (P-256 / brainpoolP256r1), konform mit den Vorgaben der [[BSI]]-Technischen Richtlinie BSI TR-03116.

Da die gSMC-K nicht separat ausgetauscht werden kann, bedeutet ein Generationswechsel der Karte immer auch einen Gerätewechsel des gesamten Konnektors. Das machte den Konnektor-Rollout zu einer der aufwendigsten Aufgaben der ECC-Migration.

> [!frist-warnung] Frist-Warnung: ECC-Migration gSMC-K und gSMC-KT
> **Rechtsgrundlage:** BSI TR-03116-1 (Kryptografische Vorgaben für TI-Komponenten); gematik-Festlegung gemäß § 385 SGB V; Anlage 1 der Anlage 32 zum Bundesmantelvertrag-Ärzte
> **Abgelaufene Frist (Konnektor/gSMC-K G2.0):** Konnektoren mit gSMC-K Generation G2.0 durften ab dem 1. Januar 2026 keine neuen VPN-Verbindungen zur TI mehr aufbauen. Diese Frist ist abgelaufen.
> **Laufende Frist (gSMC-KT G2.0):** Die Gerätekarten der Kartenterminals (gSMC-KT) Generation G2.0 müssen bis spätestens 31. Dezember 2026 durch G2.1-Karten ersetzt werden.
> **Handlungsbedarf:** Leistungserbringer sind verpflichtet zu prüfen, ob die eingesetzten Kartenterminals bereits eine gSMC-KT G2.1 enthalten. IT-Dienstleister sind entsprechend zu beauftragen. Ersatzkosten werden weitgehend über die TI-Pauschale refinanziert.
> **Bei Nichtbeachtung:** Kartenterminals ohne gSMC-KT G2.1 verlieren zum 1. Januar 2027 die Zulassung als TI-Komponente; die TI-Anbindung der Praxis ist gefährdet.

> [!praxis-tipp] Praxis-Tipp: ECC-Migration abgeschlossen?
> Wenn Ihr Konnektor seit dem 1. Januar 2026 normal läuft, ist die Frist erfüllt. Ihr Gerät ist dann bereits G2.1-konform.
>
> Unsicher? So prüfen Sie es selbst:
> 1. IP-Adresse des Konnektors im Browser aufrufen (steht in Ihren IT-Unterlagen).
> 2. Unter "Geräteinformationen" oder "Zertifikate" die gSMC-K-Generation prüfen.
> 3. G2.1 angezeigt: alles in Ordnung. G2.0 angezeigt: sofort IT-Dienstleister kontaktieren.
>
> Häufiger Fehler: Konnektor getauscht, Kartenterminal vergessen. Kartenterminals brauchen ebenfalls eine neue gSMC-KT G2.1-Karte. Frist dafür: Ende 2026.
> Kosten: Tausch wird weitgehend über die monatliche TI-Pauschale refinanziert. Fragen Sie Ihre KV.

> [!interesse-technik]
> **Spezifikation:** gemSpec_Krypt legt die kryptografischen Anforderungen für TI-Karten fest, darunter Schlüssellängen und erlaubte Kurven. Für gSMC-K G2.1 gelten: ECC P-256 (NIST) oder brainpoolP256r1 für Authentisierungszertifikate. Die VPN-Nutzung des C.NK.VPN-Zertifikats ist in gemSpec_Net_TI und gemSpec_VPN_Zugangsdienst spezifiziert. Herstellerspezifische Implementierungsdetails liegen bei den Konnektorherstellern (RISE, CGM, Secunet u.a.).

### Lebenszyklus

Die Gültigkeitsdauer der gSMC-K-Zertifikate ist begrenzt. Ein Konnektor muss entweder ausgetauscht oder die Zertifikate müssen vor Ablauf erneuert werden. Der Prozess der Zertifikatserneuerung ist als sogenanntes "Card-Management" in den Konnektorspezifikationen geregelt. Über den [[VPN-Zugangsdienst]] können Konnektoren Updates und neue Zertifikate empfangen, solange das bisherige Zertifikat noch gültig ist.

> [!klinik-integration] Klinik-Integration: gSMC-K-Lebenszyklus im Krankenhausbetrieb
> **Zertifikatsablauf proaktiv überwachen:** Im Krankenhaus laufen typischerweise mehrere Konnektoren parallel (je Gebäudeteil, Ambulanz, Funktionseinheit). Legen Sie im Monitoring-System Alarme für das Ablaufdatum jedes gSMC-K-Zertifikats an. Ein abgelaufenes Zertifikat unterbricht die TI-Anbindung des betroffenen Konnektors sofort.
>
> **Ausfallplanung (24/7-Betrieb):** Da die gSMC-K nicht separat tauschbar ist, bedeutet ein Zertifikatsablauf immer Gerätewechsel. Halten Sie für jeden produktiven Konnektor-Cluster mindestens einen Reserve-Konnektor mit gültigem Zertifikat bereit. Gemäß gematik-Dokument "Anschluss von Krankenhäusern an die TI" (gemInfo_Anschluss_KH_TI V1.4.2) wird für Häuser mit über 25 Kartenterminals der Betrieb mehrerer Konnektoren empfohlen, die dieselbe Telematik-ID der [[SMC-B]] teilen.
>
> **HSK-Ausblick:** Der Highspeed-Konnektor (HSK) ersetzt die physische gSMC-K durch eine virtuelle Gerätekarte in einem Hardware Security Module (HSM). Das ermöglicht zentrale Zertifikatsverwaltung und Hochverfügbarkeit aus dem Krankenhaus-Rechenzentrum heraus. Für Häuser, die TI-Gateway-Modelle planen, entfällt die physische gSMC-K gänzlich.

## Verknüpfungen

- [[Konnektoren]] (das Gerät, das die gSMC-K enthält)
- [[PKI]] (TI-PKI-Hierarchie; gSMC-K-Zertifikate sind Teil der TI-PKI)
- [[TSL]] (Vertrauensliste; die ausstellende CA muss hier gelistet sein)
- [[VPN-Zugangsdienst]] (prüft das gSMC-K-Zertifikat beim VPN-Tunnelaufbau)
- [[SMC-B]] (institutionelle Karte; Pendant für Einrichtungen)
- [[HBA]] (persönliche Karte; Pendant für Heilberufler)
- [[gSMC-KT]] (Gerätekarte für Kartenterminals; analoges Konzept)
- [[ECC-Migration]] (Generationswechsel der gSMC-K von G2.0 auf G2.1)
- [[OCSP]] (Zertifikatsstatus-Prüfung der gSMC-K)
- [[TSP]] (Trust Service Provider; stellt Zertifikate für gSMC-K aus)
- [[Kartenherausgeber]] (produziert und personalisiert die gSMC-K)
- BSI TR-03116 (BSI-Technische Richtlinie; legt kryptografische Anforderungen fest)

## Quellen

- [gematik Fachportal: Smartcards in der TI](https://fachportal.gematik.de/telematikinfrastruktur/smartcards)
- [gematik Fachportal: Gerätespezifische Sicherheitsmodulkarte Typ K](https://fachportal.gematik.de/telematikinfrastruktur/smartcards/geraetespezifische-sicherheitsmodulkarte-typ-k)
- [gemSpec_Krypt – Kryptografische Vorgaben für TI-Karten](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Krypt/latest/)
- [gemSpec_VPN_Zugangsdienst – Spezifikation VPN-Zugangsdienst](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VPN_Zugangsdienst/latest/)
