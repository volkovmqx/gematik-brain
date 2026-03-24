---
title: ZETA
audience: [technical]
tags: [konzept, sicherheit, zero-trust, ti-2-0, open-source]
aliases: [Zero Trust Enforcement and Trust Architecture, ZETA-Guard, ZETA-Client-SDK]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister]
  interests: [technik]
maturity: wachsend
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

> [!interesse-technik]
> Das ZETA-Client-SDK ist Open Source und auf GitHub verfügbar: [github.com/gematik/zeta](https://github.com/gematik/zeta). Es ist in Java implementiert und bietet Bindings für weitere Sprachen. Primärsysteme, die VSDM 2.0 (Produktivstart Juli 2026) nutzen wollen, müssen das SDK integrieren. Kernanforderungen: mTLS mit TI-Zertifikaten (aus eGK, HBA oder SMC-B), Token-Anforderung via OIDC am IDP-Dienst, automatische Token-Erneuerung. Die ZETA-Guard-Komponente steht als Docker-Image bereit und kann als Sidecar-Container vor jeden FHIR-Fachdienst gesetzt werden. Technische Doku: gemSpec_ZETA (in Vorbereitung) und GitHub-README im zeta-Repository.

### ZETA-Client-SDK

Das SDK stellt Entwicklern fertige Implementierungen für:

- mTLS-Verbindungsaufbau mit TI-Zertifikaten
- Token-Anforderung und -Verwaltung am [[IDP]]-Dienst
- Automatische Token-Erneuerung vor Ablauf
- Fehlerbehandlung bei Authentifizierungsfehlern

Das SDK ist als Open-Source-Bibliothek verfügbar und kann in Java und über Bindings in weiteren Sprachen genutzt werden.

> [!dev-quickstart] Dev Quickstart: ZETA-Client-SDK einbinden (Kotlin/JVM)
> Gradle-Dependency (JVM-Target):
> ```kotlin
> // build.gradle.kts
> dependencies {
>     implementation("de.gematik.zeta:zeta-sdk-jvm:<aktuelle-version>")
> }
> ```
> SMC-B-Zertifikat (AUT_E256) aus `.p12`-Datei laden und SDK initialisieren:
> ```kotlin
> val zetaClient = ZetaClient.Builder()
>     .withCertificate(smcbCert)       // X.509 aus SMC-B (AUT_E256)
>     .withPrivateKey(smcbPrivateKey)
>     .withTokenEndpoint("https://<idp-dienst>/token")
>     .build()
>
> // Access-Token für VSDM 2.0 anfordern
> val token = zetaClient.requestAccessToken(
>     scope = "vsdm2:read",
>     resource = "https://vsdm2.ti-dienste.de"
> )
> ```
> - Repo: [gematik/zeta-sdk](https://github.com/gematik/zeta-sdk) (Kotlin Multiplatform: JVM, Android, iOS)
> - Releases und Changelogs: [gematik/zeta-sdk/releases](https://github.com/gematik/zeta-sdk/releases)
> - VSDM 2.0 FHIR-Profil und OpenAPI: [gematik/spec-VSDM2](https://github.com/gematik/spec-VSDM2)
> - Technische Spezifikation: [gemSpec_ZETA v1.0](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_ZETA/gemSpec_ZETA_V1.0.0.pdf)

### ZETA-Guard

Der ZETA-Guard ist die serverseitige Komponente, die als Reverse Proxy vor einem Fachdienst sitzt. Er:

- Prüft eingehende [[mTLS]]-Zertifikate gegen die Telematik-PKI
- Validiert das Bearer-Token (JWT) aus dem Authorization-Header
- Leitet gültige Anfragen an den Fachdienst weiter
- Gibt standardisierte Fehlerantworten zurück (OAuth 2.0 Error Responses)
- Schreibt strukturierte Audit-Logs für jeden Zugriff

> [!dev-quickstart] Dev Quickstart: ZETA-Guard als Docker-Sidecar deployen
> ZETA-Guard steht als Helm-Chart für Kubernetes-Deployments bereit:
> ```bash
> helm repo add gematik-zeta https://gematik.github.io/zeta-guard-helm
> helm install zeta-guard gematik-zeta/zeta-guard \
>   --set backend.url=http://mein-fachdienst:8080 \
>   --set tls.certFile=/certs/smcb.crt \
>   --set tls.keyFile=/certs/smcb.key \
>   --set policy.pdpEndpoint=http://pdp-service:8181
> ```
> Eingehende Anfrage (nach erfolgreicher mTLS-Handshake + Token-Validierung):
> ```
> GET /fhir/Patient/123
> Authorization: Bearer <ZETA-Access-Token>
> X-Request-Id: <uuid>
> ```
> Fehlerantwort bei ungültigem Token (OAuth 2.0 RFC 6750):
> ```json
> HTTP/1.1 401 Unauthorized
> WWW-Authenticate: Bearer error="invalid_token",
>                   error_description="Token expired"
> ```
> - Helm-Charts: [gematik/zeta-guard-helm](https://github.com/gematik/zeta-guard-helm)
> - Vollständige Architektur und Kubernetes-Manifeste: [gematik/zeta](https://github.com/gematik/ZETA) (Ordner `docs/user-manual/`)
> - Zero-Trust-Schnittstellenspezifikation: [gematik/spec-t20r](https://github.com/gematik/spec-t20r)

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
