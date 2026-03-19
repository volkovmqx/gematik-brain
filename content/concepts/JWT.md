---
title: JWT
audience: [technical]
tags: [konzepte, sicherheit, token, authentifizierung, protokoll]
aliases: [JSON Web Token, JSON Web Tokens, JWT-Token]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, startup]
  interests: [technik]
maturity: immergruen
---

# JWT

Ein **JSON Web Token (JWT)** ist ein kompaktes, URL-sicheres Format zum Übertragen von signierten oder verschlüsselten Informationen zwischen zwei Parteien.

## Erklärt für Einsteiger

Stell dir vor, du gehst in einen Freizeitpark und bekommst beim Eingang ein Armband. Das Armband zeigt: Du hast bezahlt, du bist heute dabei, und du darfst in die Hochbahnattraktionen. Du musst nicht jedes Mal neu bezahlen oder deinen Ausweis zeigen. Das Armband ist dein Beweis. Ein JWT funktioniert ähnlich: Es ist ein digitales Päckchen, das kompakt verpackt enthält, wer du bist und was du darfst. Der Computer, der dich aufnimmt, prüft nicht erst eine Datenbank, sondern liest einfach das Päckchen, dessen Echtheit durch eine digitale Unterschrift gesichert ist.

## Überblick

JWT (ausgesprochen "dschot") ist in RFC 7519 definiert und ist seit seiner Einführung 2015 zum Standard-Tokenformat im Web geworden. Der JWT-Standard gehört zur JOSE-Familie (JSON Object Signing and Encryption, RFC 7515-7520).

In der [[Telematikinfrastruktur]] sind JWTs allgegenwärtig. Der [[IDP]]-Dienst der gematik stellt alle Tokens als JWTs aus: das ID Token (wer ist der Nutzer), das Access Token (was darf er) und das SSO Token (Einmalanmeldung). Auch in der [[TI-Federation]] werden Entity Statements als JWTs übertragen. Der [[PoPP]]-Dienst (Proof of Patient Presence) nutzt JWTs als kryptografisch gesicherter Anwesenheitsnachweis.

JWTs sind zustandslos: Der Server, der ein JWT erhält, muss keine Datenbank abfragen, um es zu validieren. Er prüft nur die kryptografische Signatur und die Metadaten des Tokens (Ablaufzeit, Aussteller, Zielgruppe). Das macht JWTs hochskalierbar für verteilte Systeme wie die TI.

## Technische Details

### Struktur

Ein JWT besteht aus drei Base64url-kodierten Teilen, getrennt durch Punkte:

```
<Header>.<Payload>.<Signature>
```

Beispiel (gekürzt):

```
eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9
.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiaHR0cHM6Ly9pZHAuZ2VtYXRpay5kZSIsImV4cCI6MTcwMDAwMDAwMH0
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

#### Header

Der Header ist ein JSON-Objekt mit mindestens:

```json
{
  "alg": "ES256",
  "typ": "JWT"
}
```

- `alg`: Signaturalgorithmus. In der TI: `ES256` (ECDSA mit P-256), `BP256R1` (ECDSA mit brainpoolP256r1) oder `ES384`.
- `typ`: Tokentyp, meist `JWT`.
- `kid`: Key Identifier, verweist auf den öffentlichen Schlüssel im JWKS des Ausstellers.

#### Payload (Claims)

Der Payload enthält Claims: Name-Wert-Paare mit Informationen über den Nutzer und das Token. RFC 7519 definiert registrierte Claims:

| Claim | Name | Bedeutung |
|---|---|---|
| `iss` | Issuer | URL des Token-Ausstellers |
| `sub` | Subject | Eindeutige ID des Nutzers beim Aussteller |
| `aud` | Audience | Für wen das Token bestimmt ist |
| `exp` | Expiration | Unix-Timestamp: Token ungültig nach diesem Zeitpunkt |
| `nbf` | Not Before | Token ist erst ab diesem Zeitpunkt gültig |
| `iat` | Issued At | Ausstellungszeitpunkt |
| `jti` | JWT ID | Eindeutige ID des Tokens (verhindert Replay-Angriffe) |

TI-spezifische Claims im IDP-Access-Token (Beispiel):

```json
{
  "iss": "https://idp.gematik.de",
  "sub": "Q27z4Fs...",
  "aud": "https://rezeps.gematik.de",
  "exp": 1700000300,
  "iat": 1700000000,
  "idNummer": "X123456789",
  "professionOID": "1.2.276.0.76.4.30",
  "organizationName": "Praxis Dr. Muster"
}
```

#### Signatur

Die Signatur sichert die Integrität des Tokens:

```
Signatur = ECDSA(Base64url(Header) + "." + Base64url(Payload), PrivateKey)
```

Der Empfänger prüft die Signatur mit dem öffentlichen Schlüssel des Ausstellers. Dieser wird über den JWKS-Endpunkt des Ausstellers bezogen. Nur wenn die Signatur gültig ist, darf dem Token vertraut werden.

### JWS und JWE

RFC 7515 (JWS: JSON Web Signature) und RFC 7516 (JWE: JSON Web Encryption) sind die Unterstandards:

- **JWS**: Signiertes JWT. Die Payload ist lesbar (nur Base64url-kodiert), aber die Signatur sichert die Integrität. Standardfall in der TI.
- **JWE**: Verschlüsseltes JWT. Die Payload ist für Dritte nicht lesbar. In der TI bei bestimmten Zwischentokens eingesetzt, um Claims vor Intermediären zu verbergen.

### Verwendung in der TI

Der [[IDP]]-Dienst der gematik stellt drei JWT-Typen aus:

| Token | Typ | Lebensdauer | Inhalt |
|---|---|---|---|
| Authorization Code | kurzlebig, einmalig | 1-2 Minuten | Einlösecode für Token-Endpunkt |
| Access Token | [[OIDC]]-kompatibel | 5-10 Minuten | Berechtigung für Fachdienste |
| ID Token | [[OIDC]]-kompatibel | 5-10 Minuten | Identitätsattribute des Nutzers |

Der [[PoPP]]-Dienst erzeugt ein **PoPP-Token** als JWT: Es belegt kryptografisch, dass ein Patient zu einem bestimmten Zeitpunkt bei einem Leistungserbringer anwesend war (basierend auf einer Challenge der [[eGK]] oder [[Gesundheits-ID]]).

In der [[TI-Federation]] sind **Entity Statements** JWTs: Sie enthalten die Metadaten und öffentlichen Schlüssel eines sektoralen IDPs und werden von der gematik als Trust Anchor signiert.

### Validierung

Ein Empfänger muss folgende Prüfungen durchführen:

1. **Signatur**: Gültig mit dem öffentlichen Schlüssel des Ausstellers (aus JWKS)?
2. **Aussteller** (`iss`): Vertrauenswürdiger OpenID Provider?
3. **Zielgruppe** (`aud`): Ist dieser Dienst als Empfänger eingetragen?
4. **Ablaufzeit** (`exp`): Ist das Token noch gültig?
5. **Ausstellungszeit** (`iat`): Nicht in der Zukunft?
6. **Nonce** (bei ID Tokens): Stimmt mit der vom Client gesendeten überein?

> [!interesse-technik]
> Wichtige RFCs: JWT (RFC 7519), JWS (RFC 7515), JWE (RFC 7516), JWK (RFC 7517). TI-Algorithmen: `ES256` (ECDSA P-256), `BP256R1` (brainpoolP256r1, BSI-empfohlen). JWKS-Endpunkte: im OpenID-Discovery-Dokument unter `jwks_uri`. Bibliotheken: java-jwt (Auth0), python-jose, nimbus-jose-jwt (Java). Zur Fehlersuche: jwt.io dekodiert JWTs im Browser.

## Verknüpfungen

- [[OAuth-2.0]] (verwendet JWTs als Access Tokens und Refresh Tokens)
- [[OIDC]] (definiert ID Token als speziellen JWT)
- [[IDP]] (gematik IDP stellt alle Tokens als JWTs aus)
- [[Sektoraler-IDP]] (sektorale IDPs stellen OIDC-konforme JWTs aus)
- [[TI-Federation]] (Entity Statements sind JWTs)
- [[PoPP]] (PoPP-Token ist ein JWT mit kryptografischem Anwesenheitsnachweis)
- [[PKI]] (stellt die Schlüssel bereit, mit denen JWTs signiert werden)
- [[ZETA]] (Zero-Trust-Architektur nutzt JWTs als zentrale Autorisierungstokens)
- [[KVNR]] (wird als Claim im JWT des IDP-Access-Tokens geführt)
- [[Telematik-ID]] (Identitätsmerkmal für Leistungserbringer in JWT-Claims)

## Quellen

- [RFC 7519: JSON Web Token (JWT)](https://www.rfc-editor.org/rfc/rfc7519)
- [RFC 7515: JSON Web Signature (JWS)](https://www.rfc-editor.org/rfc/rfc7515)
- [OpenID Connect Core 1.0: ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)
- [gematik: gemSpec_IDP_Dienst – Token-Spezifikation](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Dienst/latest/)
