---
title: ZETA
audience: [technical]
tags: [konzept, sicherheit, zero-trust, ti-2-0, open-source]
aliases: [Zero Trust Enforcement and Trust Architecture, ZETA-Guard, ZETA-Client-SDK]
---

# ZETA

**ZETA** (Zero Trust Enforcement and Trust Architecture) ist das [[gematik]]-Framework zur technischen Umsetzung von [[Zero-Trust]]-Sicherheitsarchitektur in der [[Telematikinfrastruktur]] 2.0.

## Erklärt für Einsteiger

In der alten Telematikinfrastruktur war ein Konnektor in der Arztpraxis wie ein Schlüssel: Wer ihn hatte, war drin. ZETA ändert das. Jetzt muss jede Software, die auf TI-Dienste zugreift, sich bei jeder Anfrage neu ausweisen. Und das passiert automatisch im Hintergrund. ZETA ist die technische Werkzeugkiste, mit der Entwickler diese neuen Sicherheitsregeln in ihre Systeme einbauen können. Die gematik hat diesen Werkzeugkasten im Dezember 2025 kostenlos für alle veröffentlicht.

## Überblick

ZETA wurde von der [[gematik]] als technische Implementierung der [[Zero-Trust|Zero-Trust-Architektur]] für TI 2.0 entwickelt. Am **15. Dezember 2025** veröffentlichte gematik die ersten ZETA-Komponenten als Open Source auf GitHub (github.com/gematik/zeta).

Das Framework besteht aus zwei Kernkomponenten:

- **ZETA-Client-SDK**: Bibliothek, die Primärsysteme und Fachdienste in die Lage versetzt, Zero-Trust-konforme Verbindungen zur TI aufzubauen.
- **ZETA-Guard**: Enforcer-Komponente, die Zero-Trust-Richtlinien auf der Serverseite durchsetzt und jede Anfrage validiert.

**EY Strategy and Transactions GmbH** erhielt den Auftrag zur Entwicklung und Wartung der zentralen ZETA-Softwarekomponenten für TI 2.0.

### Zeitplan

| Meilenstein | Datum |
|---|---|
| ZETA-Kernkomponenten als Open Source veröffentlicht | 15. Dezember 2025 |
| Erster produktiver Einsatz mit [[VSDM]] 2.0 | Juli 2026 |
| Weitere TI-Anwendungen auf ZETA | Ab 2027 |
| Vollständige TI-Migration auf ZETA | 2029 |

## Technische Details

### Architektur

ZETA implementiert die Zero-Trust-Prinzipien für die TI-Umgebung. Es ersetzt die bisherige VPN-basierte Vertrauensarchitektur ([[VPN-Zugangsdienst]]) durch eine identitätszentrierte Sicherheitsschicht.

Die Kernelemente:

1. **Identitätsverifikation**: Jede Entität (Primärsystem, Fachdienst, Versicherter) muss eine verifizierte digitale Identität vorweisen. Grundlage ist die Telematik-[[PKI]].
2. **[[mTLS]]-Verbindungen**: Jede Verbindung zwischen Client und Dienst erfordert beidseitige Zertifikatsauthentifizierung. Kein unilaterales Vertrauen.
3. **Token-basierte Autorisierung**: Nach der Authentifizierung erhält der Client ein kurzlebiges Access-Token (OAuth 2.0 / OpenID Connect via [[IDP]]). Das Token enthält den genehmigten Scope und verfällt nach kurzer Zeit.
4. **Policy Decision Point (PDP) / Policy Enforcement Point (PEP)**: ZETA-Guard fungiert als PEP: Er prüft bei jeder Anfrage das Token und die angeforderte Ressource gegen die aktuellen Richtlinien.

### ZETA-Client-SDK

Das SDK stellt Entwicklern fertige Implementierungen für:

- mTLS-Verbindungsaufbau mit TI-Zertifikaten
- Token-Anforderung und -Verwaltung am [[IDP]]-Dienst
- Automatische Token-Erneuerung vor Ablauf
- Fehlerbehandlung bei Authentifizierungsfehlern

Das SDK ist als Open-Source-Bibliothek verfügbar und kann in Java und über Bindings in weiteren Sprachen genutzt werden.

### ZETA-Guard

Der ZETA-Guard ist die serverseitige Komponente, die als Reverse Proxy vor einem Fachdienst sitzt. Er:

- Prüft eingehende [[mTLS]]-Zertifikate gegen die Telematik-PKI
- Validiert das Bearer-Token (JWT) aus dem Authorization-Header
- Leitet gültige Anfragen an den Fachdienst weiter
- Gibt standardisierte Fehlerantworten zurück (OAuth 2.0 Error Responses)
- Schreibt strukturierte Audit-Logs für jeden Zugriff

### Verhältnis zum TI-Gateway

Das [[TI-Gateway]] ist die Zugangskomponente, über die Primärsysteme die TI 2.0 erreichen. ZETA ist die Sicherheitsschicht, die im TI-Gateway und in den Fachdiensten implementiert ist. Das TI-Gateway setzt ZETA ein, um eingehende Verbindungen zu prüfen. Die Trennung erlaubt es, ZETA-Komponenten in verschiedenen TI-Diensten unabhängig einzusetzen.

### Erster Produktiveinsatz: VSDM 2.0

[[VSDM]] 2.0 ist die erste TI-Anwendung, die vollständig auf ZETA läuft. Mit dem Produktivstart im Juli 2026 prüft der VSDM-Fachdienst alle eingehenden Anfragen über ZETA-Guard. Primärsysteme, die VSDM 2.0 nutzen wollen, müssen das ZETA-Client-SDK integrieren.

## Verknüpfungen

- [[Zero-Trust]] (Sicherheitsarchitekturprinzip, das ZETA umsetzt)
- [[TI-Gateway]] (Zugangskomponente; nutzt ZETA für die Sicherheitsschicht)
- [[VSDM]] (erste produktive Anwendung mit ZETA, ab Juli 2026)
- [[mTLS]] (Transportprotokoll, das ZETA für beidseitige Authentifizierung einsetzt)
- [[IDP]] (Identitätsdienst; stellt die Tokens aus, die ZETA-Guard prüft)
- [[PKI]] (Zertifikatsinfrastruktur als Vertrauensanker für ZETA)
- [[gematik]] (Entwickler und Herausgeber des ZETA-Frameworks)
- [[Telematikinfrastruktur]] (Zielinfrastruktur, für die ZETA entwickelt wurde)

## Quellen

- [gematik: ZETA Open-Source-Veröffentlichung (Dezember 2025)](https://www.gematik.de/newsroom/news-detail/neuer-sicherheitsstandard-fuer-die-telematikinfrastruktur-ti-20-erste-version-von-zero-trust-kernkomponenten-veroeffentlicht)
- [gematik: Zero Trust Auftrag an EY Strategy and Transactions (November 2025)](https://www.gematik.de/newsroom/news-detail/zero-trust-als-sicherheitsstandard-fuer-die-ti-20-zuschlag-erteilt)
- [gematik: TI 2.0](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [GitHub: gematik/zeta (github.com/gematik/zeta)](https://github.com/gematik/zeta)
