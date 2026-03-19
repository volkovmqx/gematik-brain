---
title: OIDC
audience: [technical]
tags: [konzepte, authentifizierung, protokoll, oauth, idp, ti-2-0]
aliases: [OpenID Connect, OpenID Connect 1.0, OIDC-Protokoll]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, startup, kasse]
  interests: [technik, business]
maturity: wachsend
---

# OIDC

**OpenID Connect (OIDC)** ist ein Authentifizierungsprotokoll, das als Identitätsschicht auf [[OAuth-2.0]] aufgesetzt ist und standardisiert beschreibt, wie ein Client feststellt, wer ein Nutzer ist.

## Erklärt für Einsteiger

Viele Webseiten bieten die Möglichkeit, sich mit einem bestehenden Konto anzumelden: "Mit Google anmelden" oder "Mit Apple anmelden". Dabei passiert im Hintergrund OpenID Connect. Die Webseite fragt nicht nach deinem Passwort, sondern leitet dich zu Google weiter. Google prüft deine Identität und schickt der Webseite eine Art digitalen Ausweis zurück, auf dem steht: "Diese Person heißt so-und-so, hat diese E-Mail-Adresse und ist tatsächlich bei Google angemeldet." Im deutschen Gesundheitswesen übernimmt diese Rolle der [[IDP]]-Dienst der gematik zusammen mit den sektoralen IDPs der Krankenkassen.

## Überblick

OpenID Connect 1.0 wurde 2014 von der OpenID Foundation veröffentlicht und ist heute der Industriestandard für Authentifizierung im Web. Es baut auf [[OAuth-2.0]] (RFC 6749) auf: Während OAuth 2.0 ursprünglich nur Autorisierung beschreibt (was darf eine Anwendung), ergänzt OIDC die Frage der Authentifizierung (wer ist der Nutzer).

In der [[Telematikinfrastruktur]] ist OIDC das Protokoll, das hinter der [[Gesundheits-ID]] steckt. Wenn sich ein Versicherter über die App seiner Krankenkasse bei der [[ePA]] anmeldet, läuft dieser Prozess über OIDC. Auch alle Leistungserbringer, die sich mit dem [[IDP]]-Dienst der gematik authentisieren, nutzen OIDC.

Der Unterschied zwischen OAuth 2.0 und OIDC: OAuth 2.0 stellt Access Tokens aus, die Zugriff auf Ressourcen erlauben. OIDC fügt das **ID Token** hinzu, das die Identität des Nutzers kryptografisch belegt. Erst mit OIDC weiß ein System nicht nur "jemand hat Zugriff", sondern auch "dieser jemand ist Dr. Müller, Arzt mit der Telematik-ID 1-2abc3d4e5...".

## Technische Details

### Kernkomponenten

OIDC definiert drei Rollen:

| Rolle | Beschreibung | Beispiel TI |
|---|---|---|
| End User | Der Nutzer, dessen Identität geprüft wird | Arzt, Versicherter |
| Relying Party (RP) | Anwendung, die OIDC nutzt | [[PVS]], ePA-App |
| OpenID Provider (OP) | Stellt Identität bereit | [[IDP]]-Dienst, sektoraler IDP |

### Flows

OIDC kennt drei Flows, die je nach Kontext eingesetzt werden. In der TI wird ausschließlich der **Authorization Code Flow** (mit PKCE, RFC 7636) verwendet:

1. Relying Party leitet Nutzer zum OpenID Provider (OP) mit `response_type=code`
2. Nutzer authentisiert sich beim OP (z.B. per [[eGK]], [[HBA]] oder Gesundheits-ID)
3. OP gibt einen kurzlebigen Authorization Code zurück
4. Relying Party tauscht den Code am Token-Endpunkt gegen Tokens ein
5. OP stellt **ID Token** und **Access Token** aus
6. Relying Party validiert das ID Token

### ID Token

Das ID Token ist das zentrale OIDC-Konzept. Es ist ein [[JWT]] (JSON Web Token) mit standardisierten Claims:

| Claim | Bedeutung | TI-Kontext |
|---|---|---|
| `iss` (Issuer) | URL des OpenID Providers | `https://idp.gematik.de` |
| `sub` (Subject) | Eindeutige Nutzer-ID beim OP | pseudonymisierter Bezeichner |
| `aud` (Audience) | Für wen das Token bestimmt ist | Client-ID der Relying Party |
| `exp` (Expiration) | Ablaufzeitpunkt (Unix-Timestamp) | typisch: 5 Minuten |
| `iat` (Issued At) | Ausstellungszeitpunkt | |
| `nonce` | Einmalwert zur Replay-Prävention | vom Client vorgegeben |

In der TI kommen TI-spezifische Claims hinzu:

- `idNummer`: Enthält die [[KVNR]] bei Versicherten oder die [[Telematik-ID]] bei Leistungserbringern
- `professionOID`: Berufsbezeichnung (z.B. `1.2.276.0.76.4.30` für Arzt)
- `organizationName`: Name der Institution

Das ID Token wird vom OpenID Provider mit dessen privatem Schlüssel signiert (ECDSA, brainpoolP256r1). Die Relying Party prüft die Signatur mit dem öffentlichen Schlüssel des OP, den sie über den Discovery-Endpunkt bezieht.

### Discovery

Jeder OpenID Provider muss einen Discovery-Endpunkt bereitstellen:

```
GET /.well-known/openid-configuration
```

Die Antwort ist ein JSON-Dokument mit allen relevanten Endpunkten und Konfigurationen: Authorization-Endpunkt, Token-Endpunkt, JWKS-URI (öffentliche Schlüssel), unterstützte Algorithmen, Claims und Scopes. Die Relying Party kann sich damit automatisch konfigurieren, ohne hardcodierte URLs zu benötigen.

### JWKS (JSON Web Key Set)

Der OP veröffentlicht seine öffentlichen Schlüssel als JWKS am `jwks_uri`. Eine Relying Party lädt diesen Schlüsselsatz und verifiziert damit die Signaturen der ID Tokens. In der TI werden die Schlüssel regelmäßig rotiert. Relying Parties müssen daher den JWKS-Endpunkt zuverlässig abfragen können.

### Scopes und Claims

OIDC strukturiert den Zugriff auf Nutzerdaten über Scopes. Standard-Scopes:

- `openid`: Pflicht-Scope; aktiviert OIDC
- `profile`: Name, Profilbild, Geschlecht
- `email`: E-Mail-Adresse
- `address`: Adressdaten

In der TI gibt es TI-spezifische Scopes, z.B. `e-rezept` oder `ePA`. Sie steuern, welche Claims und Berechtigungen das ausgestellte Access Token enthält.

### OIDC und TI-Federation

Die [[TI-Federation]] erweitert das klassische OIDC-Modell auf eine föderale Architektur mit mehreren OpenID Providern. Technische Grundlage ist der **OpenID Federation 1.0**-Standard. Jeder [[Sektoraler-IDP|sektorale IDP]] ist ein OpenID Provider, der sich bei der TI-Federation registriert und ein signiertes Entity Statement erhält. TI-Fachdienste (Relying Parties) vertrauen dem Federation Trust Anchor ([[gematik]]) und akzeptieren automatisch alle korrekt registrierten sektoralen IDPs.

Das Zusammenspiel: Wenn ein Versicherter sich über die App seiner Krankenkasse (sektoraler IDP) bei der [[ePA]] anmeldet, läuft der OIDC-Flow über den sektoralen IDP. Das resultierende Access Token wird anschließend beim zentralen IDP-Dienst der gematik gegen ein TI-weites Access Token ausgetauscht (**Token Exchange**, RFC 8693).

> [!interesse-technik]
> OIDC-Spezifikation: [openid.net/specs/openid-connect-core-1_0.html](https://openid.net/specs/openid-connect-core-1_0.html). TI-Spezifikation des IDP: gemSpec_IDP_Dienst auf fachportal.gematik.de. Discovery-Endpunkt des gematik-IDP: `https://idp.gematik.de/.well-known/openid-configuration`. TI-Federation: gemSpec_IDP_Sek. Token-Format: [[JWT]] (RFC 7519). PKCE: RFC 7636. OpenID Federation: [openid.net/specs/openid-federation-1_0.html](https://openid.net/specs/openid-federation-1_0.html).

## Verknüpfungen

- [[OAuth-2.0]] (Basis-Autorisierungsframework, auf dem OIDC aufbaut)
- [[JWT]] (Tokenformat für ID Token, Access Token)
- [[IDP]] (gematik Identity Provider, implementiert OIDC für die TI)
- [[Sektoraler-IDP]] (sektorale IDPs der Krankenkassen, OIDC-basiert)
- [[TI-Federation]] (föderale OIDC-Architektur der TI 2.0)
- [[Gesundheits-ID]] (digitale Identität für Versicherte auf OIDC-Basis)
- [[PKI]] (stellt Schlüsselmaterial für OIDC-Tokensignaturen bereit)
- [[ePA]] (nutzt OIDC-Tokens zur Zugangskontrolle)
- [[E-Rezept]] (Fachdienst prüft OIDC-basierte Access Tokens)
- [[KVNR]] (wird als Claim im ID Token für Versicherte geführt)
- [[Telematik-ID]] (wird als Claim im ID Token für Leistungserbringer geführt)
- [[ZETA]] (Zero-Trust-Architektur TI 2.0 nutzt OIDC-Token-Flows)

## Quellen

- [OpenID Connect Core 1.0 – OpenID Foundation](https://openid.net/specs/openid-connect-core-1_0.html)
- [RFC 6749: The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749)
- [gematik: gemSpec_IDP_Dienst – IDP-Dienst der TI](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Dienst/latest/)
- [gematik: Gemspec IDP Sektoraler IDP](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/)
