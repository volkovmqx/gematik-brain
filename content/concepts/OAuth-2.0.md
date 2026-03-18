---
title: OAuth 2.0
audience: [technical]
tags: [konzept, sicherheit, authentifizierung, protokoll, ti-2-0, idp]
aliases: [OAuth2, OpenID Connect, OIDC, OAuth 2.0 / OpenID Connect]
---

# OAuth 2.0

**OAuth 2.0** ist ein offenes Autorisierungsframework und zusammen mit **OpenID Connect (OIDC)** die technische Grundlage für die Token-basierte Authentifizierung und Autorisierung in der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Wenn du dich bei einer neuen App mit deinem Google-Konto anmeldest, statt ein neues Passwort anzulegen, nutzt du OAuth 2.0. Die App fragt nicht nach deinem Google-Passwort, sondern leitet dich zu Google weiter, wo du dich anmeldest. Google gibt der App dann einen Ausweis (ein "Token"), der bestätigt: Diese Person ist angemeldet. Die App bekommt dein Passwort nie zu sehen. Genauso funktioniert es in der TI: Der Arzt meldet sich beim IDP der gematik an, und der IDP gibt seiner Praxissoftware ein Token, mit dem sie auf TI-Dienste wie das E-Rezept zugreifen kann.

## Überblick

OAuth 2.0 (RFC 6749) ist ein Autorisierungsframework, das es Anwendungen erlaubt, in begrenztem Umfang auf Ressourcen in fremden Systemen zuzugreifen, ohne dass Passwörter weitergegeben werden müssen. **OpenID Connect (OIDC)** ist eine Identitätsschicht auf OAuth 2.0, die Authentifizierung ermöglicht: Es stellt klar, wer eine Person ist, nicht nur was sie darf.

In der [[Telematikinfrastruktur]] sind OAuth 2.0 und OIDC die Basisprotokolle für:

- Den **[[IDP]]-Dienst** (Identity Provider) der gematik: Alle TI-Fachdienste wie [[E-Rezept]] und [[ePA]] nutzen IDP-Token zur Zugangsprüfung.
- Den **sektoralen IDP** der Gesundheits-ID: Krankenkassen betreiben eigene IDPs, die über die [[TI-Federation]] mit dem gematik-IDP föderiert sind.
- Den **[[VZD|VZD-FHIR-Directory]]**: Verzeichnisdienst-Anfragen werden über OAuth-2.0-Tokens autorisiert.
- Die **[[ZETA]]-Architektur** (Zero-Trust Extended Token Architecture): ZETA verwendet OAuth-2.0-Tokens als zentralen Autorisierungsmechanismus in TI 2.0.

## Technische Details

### OAuth 2.0: Rollen und Flows

OAuth 2.0 definiert vier Rollen:

| Rolle | Beschreibung | Beispiel in der TI |
|---|---|---|
| Resource Owner | Der Nutzer, der Zugriff erteilt | Arzt oder Versicherter |
| Client | Die Anwendung, die Zugriff anfordert | PVS, ePA-App |
| Authorization Server | Stellt Tokens aus | gematik IDP |
| Resource Server | Schützt die Ressource mit Tokens | E-Rezept-Fachdienst |

Der in der TI verwendete **Authorization Code Flow** (mit PKCE nach RFC 7636) läuft so ab:

1. Client leitet den Nutzer zum Authorization Server (IDP) weiter
2. Nutzer authentisiert sich am IDP (z.B. mit [[HBA]] oder [[Gesundheits-ID]])
3. IDP gibt einen kurzlebigen Authorization Code zurück
4. Client tauscht den Code gegen Tokens am Token-Endpunkt
5. Client sendet das Access Token bei API-Anfragen an den Resource Server

### Tokentypen

OAuth 2.0 kennt drei Tokentypen, die in der TI alle eine Rolle spielen:

- **Access Token**: Kurzlebig (Minuten bis Stunden). Berechtigt zum Zugriff auf eine Ressource. In der TI als signiertes **JSON Web Token (JWT)** nach RFC 7519 realisiert.
- **Refresh Token**: Langlebig. Ermöglicht das Erneuern von Access Tokens ohne erneute Nutzerauthentifizierung.
- **ID Token**: OIDC-spezifisch. Enthält Informationen über die Identität des Nutzers (Name, [[KVNR]], [[Telematik-ID]]).

### JWT-Struktur

Ein JWT besteht aus drei Base64url-kodierten Teilen, getrennt durch Punkte:

```
header.payload.signature
```

- **Header**: Algorithmus (z.B. `ES256` für ECDSA mit P-256) und Tokentyp
- **Payload**: Claims: Nutzeridentität, Ablaufzeitpunkt (`exp`), Aussteller (`iss`), Zielgruppe (`aud`)
- **Signature**: Digitale Signatur des IDP mit seinem privaten Schlüssel (ECDSA)

In der TI werden Schlüssel aus der brainpoolP256r1-Kurve verwendet, wie vom [[BSI]] für die TI vorgeschrieben.

### OpenID Connect in der TI

OIDC ergänzt OAuth 2.0 um:

- **Discovery**: Unter `/.well-known/openid-configuration` stellt der IDP seine Endpunkte und Schlüssel maschinenlesbar bereit.
- **UserInfo-Endpunkt**: Gibt Profilinformationen des Nutzers zurück (Name, [[KVNR]] oder [[Telematik-ID]]).
- **ID Token**: Enthält in der TI für Leistungserbringer die [[Telematik-ID]] und für Versicherte die [[KVNR]] als standardisierte Claims.

### TI-Federation und föderierte IDPs

Die [[TI-Federation]] verbindet den zentralen gematik-IDP mit den sektoralen IDPs der Krankenkassen. Technisch basiert sie auf dem **OpenID Federation**-Standard (OpenID Foundation). Jeder sektorale IDP registriert sich an der Federation und erhält ein signiertes Entity Statement, das ihn als vertrauenswürdiges Mitglied ausweist.

Der zentrale IDP nimmt Authentifizierungsanfragen an, delegiert bei [[Gesundheits-ID]]-Nutzern an den jeweiligen sektoralen IDP der Krankenkasse und stellt ein einheitliches Access Token für TI-Fachdienste aus.

### PKCE und Sicherheit

Moderne TI-Clients nutzen **PKCE** (Proof Key for Code Exchange, RFC 7636), um den Authorization Code Flow gegen Abfangangriffe abzusichern. Der Client erzeugt einen zufälligen Code Verifier, leitet daraus einen Code Challenge ab und schickt beides in unterschiedlichen Schritten, sodass ein Angreifer, der den Code abfängt, ihn nicht einlösen kann.

## Verknüpfungen

- [[IDP]] (gematik Identity Provider, implementiert OAuth 2.0 und OIDC für die TI)
- [[Gesundheits-ID]] (nutzt OIDC-basierte sektorale IDPs für Versicherte)
- [[TI-Federation]] (föderiert alle sektoralen IDPs über OpenID Federation)
- [[VZD]] (VZD-FHIR-Directory nutzt OAuth-2.0-Tokens für Autorisierung)
- [[ZETA]] (Zero-Trust-Architektur TI 2.0: OAuth-2.0-Tokens als Autorisierungsmechanismus)
- [[E-Rezept]] (Fachdienst prüft IDP-Tokens bei jedem Zugriff)
- [[ePA]] (Aktensystem nutzt IDP-Tokens für Authentifizierung)
- [[PKI]] (TI-PKI stellt die Schlüssel bereit, mit denen IDP-Tokens signiert werden)
- [[mTLS]] (ergänzt Token-basierte Autorisierung um gegenseitige Zertifikatsauthentifizierung)

## Quellen

- [RFC 6749: The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749)
- [OpenID Connect Core 1.0 – OpenID Foundation](https://openid.net/specs/openid-connect-core-1_0.html)
- [gematik: IDP-Dienst Spezifikation – gemSpec_IDP_Dienst](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Dienst/)
- [gematik: Sektoraler IDP – gemSpec_IDP_Sek](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_IDP_Sek/gemSpec_IDP_Sek_V1.0.0.html)
