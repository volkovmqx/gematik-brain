---
title: SMART on FHIR
audience: [technical]
tags: [standards, fhir, oauth, authentifizierung, api, interoperabilität]
aliases: [SMART App Launch, Substitutable Medical Applications Reusable Technologies]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, startup, kasse]
  interests: [technik, business]
maturity: wachsend
---

# SMART on FHIR

**SMART on FHIR** (Substitutable Medical Applications, Reusable Technologies) ist ein offener Standard für den sicheren Zugriff von Drittanwendungen auf [[FHIR]]-APIs über [[OAuth 2.0]] und [[OIDC]], der einen einheitlichen Launch-Kontext für klinische Apps definiert.

## Erklärt für Einsteiger

Stell dir vor, du möchtest eine neue App auf deinem Smartphone installieren, die deine Bankdaten lesen soll. Du willst aber nicht, dass die App dein Bankpasswort kennt. Stattdessen gibst du der App nur eine begrenzte Erlaubnis, zum Beispiel "nur Kontostand lesen". SMART on FHIR funktioniert genauso, aber für Gesundheits-Apps: Eine spezialisierte App für Diabetiker kann mit SMART on FHIR aus dem Arztprogramm heraus gestartet werden und bekommt automatisch Zugriff auf genau die Patientendaten, die sie braucht, ohne das ganze System sehen zu müssen.

## Überblick

SMART on FHIR ist heute ein HL7-Standard (HL7 SMART App Launch Framework). Die Geschichte beginnt 2009/2010: Harvard Medical School und Boston Children's Hospital starteten das SMART-Projekt (Substitutable Medical Applications, Reusable Technologies) mit dem Ziel, eine App-Plattform für Gesundheits-IT zu schaffen. Ab Ende 2013 wurde SMART mit FHIR kombiniert, dem damals entstehenden HL7-Standard für den Datenaustausch. Die resultierende Plattform heißt seitdem "SMART on FHIR" und wurde im Februar 2014 auf der HIMSS-Konferenz öffentlich vorgestellt. Er kombiniert zwei Konzepte:

1. **App Launch**: Ein standardisierter Startmechanismus für klinische Apps aus einem EHR-System heraus (Launch-Kontext)
2. **Authorization**: Sichere Delegierung des Zugriffs auf [[FHIR]]-Ressourcen über [[OAuth 2.0]] Authorization Code Flow

Ohne SMART on FHIR war der Zugriff von Drittanwendungen auf Patientendaten aus EHR-Systemen proprietär: Jeder Hersteller hatte ein eigenes Integrationsmodell. SMART on FHIR standardisiert diesen Zugriff, so dass eine App, die SMART implementiert, prinzipiell mit jedem SMART-konformen EHR-System zusammenarbeiten kann.

### Anwendungsfälle in der deutschen Gesundheits-IT

Im deutschen Kontext wird SMART on FHIR zunehmend relevant:

- **[[ISiK]]-Kontext**: Die ISiK-Spezifikationen (Sicherheitsmodul) referenzieren SMART App Launch als Autorisierungsframework für Drittanwendungen, die auf [[KIS]]-Daten zugreifen.
- **[[KHAG]]**: Das Krankenhausreformanpassungsgesetz betont die Notwendigkeit offener, standardisierter Schnittstellen im Krankenhaus. SMART on FHIR wird als bevorzugtes Autorisierungsmodell für IS-H- und KIS-Integrationen diskutiert.
- **DiGA-Integrationen**: [[DiGA]]-Hersteller, die auf ePA- oder KIS-Daten zugreifen wollen, können SMART on FHIR als Autorisierungsprotokoll nutzen.

> [!interesse-technik] SMART on FHIR für Entwickler
> Spezifikation: [hl7.org/fhir/smart-app-launch](https://hl7.org/fhir/smart-app-launch/). Discovery-Endpunkt: `.well-known/smart-configuration` (exponiert supported_scopes, authorize_endpoint, token_endpoint). Authorization Code Flow mit PKCE (RFC 7636). Scopes nach SMART v2: `patient/Observation.rs`, `user/Encounter.rs`, `system/Patient.cruds`. Context-Parameter: `launch`, `patient`, `encounter`. Token Response enthält neben access_token auch `patient`, `encounter` und `need_patient_banner`.

## Technische Details

### Protokollarchitektur

SMART on FHIR besteht aus drei Komponenten:

1. **FHIR Server**: Stellt die Patientendaten als FHIR R4 API bereit
2. **Authorization Server**: Implementiert den OAuth 2.0 / OIDC Endpunkt; in vielen Implementierungen ist er in den FHIR-Server integriert
3. **SMART App**: Drittanwendung, die sich über den Standard authentisiert und autorisiert

### Launch-Typen

SMART definiert zwei Startvarianten:

| Launch-Typ | Beschreibung |
|---|---|
| **EHR Launch** | Die App wird aus dem EHR-System heraus gestartet (z.B. Button in der KIS-Oberfläche). Der EHR übergibt einen `launch`-Parameter, der Kontext enthält (welcher Patient ist ausgewählt). |
| **Standalone Launch** | Die App startet eigenständig und muss sich den Patientenkontext selbst holen. Typisch für Patienten-Apps oder backend-Dienste. |

### OAuth 2.0 Authorization Code Flow (PKCE)

SMART nutzt den [[OAuth 2.0]] Authorization Code Grant mit PKCE (Proof Key for Code Exchange, RFC 7636). Der Ablauf:

1. App registriert sich beim Authorization Server (bei öffentlichen Apps: dynamic client registration)
2. App generiert Code Verifier und Code Challenge (PKCE)
3. Redirect-basierter Autorisierungsfluss: Nutzer gibt Zustimmung im Browser
4. App erhält Autorisierungscode und tauscht ihn gegen Access Token + (optional) Refresh Token
5. App nutzt Access Token als Bearer Token für FHIR API-Anfragen

### Scopes

SMART verwendet ein strukturiertes Scope-Modell:

```
<context>/<ResourceType>.<interaction>
```

Beispiele:
- `patient/Observation.rs` (read + search für Observations des aktuellen Patienten)
- `user/Encounter.cruds` (full CRUD für Encounters im Kontext des angemeldeten Nutzers)
- `system/Patient.read` (Systemzugriff ohne Nutzerbindung, für Backend Services)
- `launch/patient` (App erhält `patient`-Kontext im Token)

### SMART Backend Services

SMART Backend Services ermöglicht Headless-Anwendungen (Daemons, ETL-Pipelines) ohne direkten Nutzerdialog. Statt eines Nutzers authentisiert sich die Anwendung mit einem privaten Schlüssel (asymmetrisches JWT, RFC 7523) direkt am Token-Endpunkt:

```
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
client_assertion=<signiertes JWT>
grant_type=client_credentials
```

Dies ist relevant für automatisierte FHIR-Datenexporte, wie z.B. Forschungsdaten aus KIS-Systemen.

> [!dev-quickstart] Dev Quickstart: SMART Backend Services (Client Credentials + JWT)
> Headless-Authentisierung ohne Nutzerdialog (RFC 7523). Client authentisiert sich mit privatem Schlüssel:
> ```bash
> curl -X POST <token_endpoint> \
>   -H "Content-Type: application/x-www-form-urlencoded" \
>   -d "grant_type=client_credentials" \
>   -d "client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer" \
>   -d "client_assertion=<signiertes-JWT>" \
>   -d "scope=system/Patient.read+system/Observation.read"
> ```
> Das `client_assertion` JWT muss enthalten: `iss` (client_id), `sub` (client_id), `aud` (token_endpoint), `jti` (UUID), `exp`.
> Signing: RS384 oder ES384. Public Key muss beim Server als JWKS registriert sein.
> - Spec: [hl7.org/fhir/smart-app-launch/backend-services.html](https://hl7.org/fhir/smart-app-launch/backend-services.html)
> - RFC 7523: [datatracker.ietf.org/doc/html/rfc7523](https://datatracker.ietf.org/doc/html/rfc7523)

### Discovery

SMART-konforme Server publizieren ihre Capabilities unter:

```
GET [FHIR-Base]/.well-known/smart-configuration
```

Die Antwort enthält u.a.:
- `authorization_endpoint` und `token_endpoint`
- `scopes_supported`: alle unterstützten Scopes
- `capabilities`: SMART-Features wie `launch-ehr`, `client-public`, `sso-openid-connect`

### Verbindung zu OpenID Connect (OIDC)

SMART on FHIR kann optional [[OIDC]]-Tokens (ID Token) verwenden, um die Identität des angemeldeten Nutzers zu übermitteln. Das ID Token enthält Claims wie `sub` (Nutzeridentifikator), `fhirUser` (Link auf FHIR Practitioner/Patient-Ressource) und Standard-OIDC-Claims.

> [!dev-quickstart] Dev Quickstart: SMART App Launch Authorization Code Flow
> **Schritt 1: Discovery**
> ```bash
> GET https://<fhir-server>/.well-known/smart-configuration
> # Antwort enthält authorization_endpoint, token_endpoint, scopes_supported
> ```
> **Schritt 2: Authorization Request (PKCE, S256)**
> ```
> GET <authorization_endpoint>
>   ?response_type=code
>   &client_id=<client_id>
>   &redirect_uri=https%3A%2F%2Fapp.example.com%2Fcallback
>   &scope=launch%2Fpatient+patient%2FObservation.rs+openid+fhirUser
>   &state=<random-state>
>   &code_challenge=<S256-challenge>
>   &code_challenge_method=S256
>   &aud=<fhir-server-base>
> ```
> **Schritt 3: Token Exchange**
> ```bash
> curl -X POST <token_endpoint> \
>   -H "Content-Type: application/x-www-form-urlencoded" \
>   -d "grant_type=authorization_code" \
>   -d "code=<authorization_code>" \
>   -d "redirect_uri=https://app.example.com/callback" \
>   -d "client_id=<client_id>" \
>   -d "code_verifier=<code_verifier>"
> ```
> Token-Response enthält neben `access_token` auch `patient`, `encounter` und `need_patient_banner`.
> - SMART App Launch v2.2.0: [hl7.org/fhir/smart-app-launch](https://hl7.org/fhir/smart-app-launch/)
> - RFC 7636 PKCE: [datatracker.ietf.org/doc/html/rfc7636](https://datatracker.ietf.org/doc/html/rfc7636)
> - ISiK Sicherheitsmodul (SMART-Referenz): [simplifier.net/isik-sicherheit](https://simplifier.net/isik-sicherheit)

### SMART on FHIR in ISiK

Das ISiK-Sicherheitsmodul (ab Stufe 3) referenziert SMART App Launch als bevorzugtes Autorisierungsprotokoll. KIS-Hersteller, die Drittanwendungen über ISiK-Schnittstellen integrieren wollen, implementieren einen SMART-konformen Authorization Server. Dies ermöglicht beispielsweise, dass eine spezialisierte Befundauswertungs-App aus dem KIS heraus gestartet wird und direkt den richtigen Patienten im Kontext hat.

> [!klinik-integration] Klinik-Integration: SMART App Launch im KIS
> **KIS-Kontext:** Das ISiK-Sicherheitsmodul (Stufe 3, verpflichtend ab 01.07.2025) schreibt SMART App Launch als Autorisierungsprotokoll für Drittanwendungen vor. Ihr KIS muss einen SMART-konformen Authorization Server betreiben. Prüfen Sie mit dem KIS-Hersteller, ob dieser im ISiK-Bestätigungsverfahren enthalten ist.
>
> **Workflow-Bezug:** Beim EHR Launch startet eine Drittanwendung direkt aus der KIS-Oberfläche. Der `launch`-Parameter übergibt automatisch Patienten- und Fallkontext, ohne dass der Kliniker die App neu konfigurieren muss. Typische Anwendungsfälle im Krankenhaus: klinische Entscheidungsunterstützung, DiGA-Anbindung, Befundauswertungs-Apps, abteilungsspezifische Spezialanwendungen.
>
> **Deployment:** Der Authorization Server des KIS muss intern hochverfügbar sein. Ein Ausfall unterbricht alle SMART-App-Starts im laufenden Klinikbetrieb. TLS-Zertifikat und Firewall-Regeln für den OIDC-Discovery-Endpunkt sind zu konfigurieren. Tokenlebensdauer und Refresh-Token-Richtlinien sollten an klinische Schichtlängen (8-12 Stunden) angepasst werden.
>
> **Zukünftige Entwicklung:** Mit dem ISiK-Connect-Modul (aktuell in Entwicklung ab Stufe 4) ist eine Ausweitung in Richtung KIS-App-Marktplatz geplant. Krankenhäuser sollten die gematik-Roadmap beobachten, um Drittanwendungen rechtzeitig zertifizieren zu lassen.

## Verknüpfungen

- [[FHIR]] (Datenaustauschstandard, auf dem SMART on FHIR aufbaut)
- [[OAuth 2.0]] (Autorisierungsframework, das SMART on FHIR verwendet)
- [[OIDC]] (Identitätsprotokoll, das SMART on FHIR optional integriert)
- [[ISiK]] (ISiK-Sicherheitsmodul referenziert SMART App Launch)
- [[KIS]] (Krankenhausinformationssystem: primäre SMART-Integrationsplattform in Deutschland)
- [[IDP]] (Identity Provider der TI; Abgrenzung: SMART nutzt eigene Authorization Server)
- [[DiGA]] (DiGA-Hersteller können SMART für KIS/ePA-Integration nutzen)
- [[ePA]] (zukünftiger Anwendungsfall: SMART-Zugriff auf ePA-Daten)

## Quellen

- [HL7: SMART App Launch Framework 2.2.0](https://hl7.org/fhir/smart-app-launch/)
- [SMART Health IT: Projektseite](https://smarthealthit.org/)
- [gematik Fachportal: ISiK Sicherheitsmodul](https://fachportal.gematik.de/informationen-fuer/isik)
- [RFC 7636: Proof Key for Code Exchange (PKCE)](https://datatracker.ietf.org/doc/html/rfc7636)
- [RFC 7523: JWT Bearer Token Grant](https://datatracker.ietf.org/doc/html/rfc7523)
