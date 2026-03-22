---
title: TI-Federation
audience: [technical]
tags: [infrastruktur, identität, authentisierung, ti-2-0, federation, idp]
aliases: [TI-Federation, TI-Föderation, Föderierung, Identitätsföderation]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister, kasse, startup]
  interests: [technik]
maturity: wachsend
---

# TI-Federation

Die **TI-Federation** ist das Vertrauensrahmenwerk der [[Telematikinfrastruktur]] 2.0, das mehrere unabhängige Identity Provider (sektorale IDPs) zu einem föderalen Authentisierungssystem verbindet.

## Erklärt für Einsteiger

Früher gab es in der TI genau einen Türsteher, der alle überprüft hat. Mit der TI-Federation gibt es mehrere Türsteher: jede Krankenkasse kann einen eigenen betreiben. Damit das funktioniert, müssen sich alle Türsteher gegenseitig vertrauen und denselben Regeln folgen. Die TI-Federation ist das Regelwerk, das dieses Vertrauen organisiert. Wenn eine Krankenkasse bestätigt "diese Person ist bei uns versichert", akzeptieren alle anderen Dienste diese Bestätigung, ohne selbst nachzufragen.

## Überblick

Ursprünglich gab es in der TI nur einen zentralen [[IDP]]-Dienst, betrieben von der [[gematik]]. Alle TI-Anwendungen mussten sich an diesen einen Dienst wenden, um Nutzeridentitäten zu prüfen.

Mit der TI 2.0 wird dieses Modell aufgebrochen. Die TI-Federation erlaubt es, dass mehrere **[[Sektoraler-IDP|sektorale IDPs]]** gleichberechtigt neben dem zentralen IDP operieren. Jeder sektorale IDP ist für seine eigene Nutzergruppe zuständig:

- Krankenkassen betreiben sektorale IDPs für ihre Versicherten (Grundlage für die [[Gesundheits-ID]])
- Andere sektorale IDPs können für Leistungserbringer (Ärzte, Apotheken) entstehen

Ein TI-Fachdienst wie das ePA-Aktensystem muss nicht für jeden neuen IDP einzeln konfiguriert werden. Stattdessen vertraut er der TI-Federation als Ganzes. Wenn ein sektoraler IDP korrekt in der Federation registriert ist und den Standards entspricht, akzeptiert der Fachdienst seine Tokens.

### Zweck der Federation

Die TI-Federation verfolgt mehrere Ziele:

- **Dezentralisierung**: Keine einzelne Stelle kontrolliert alle Identitäten
- **Skalierbarkeit**: Neue IDPs können ohne zentrale Konfiguration aller Dienste hinzukommen
- **Wettbewerb**: Mehrere Anbieter können IDP-Dienste anbieten
- **[[Gesundheits-ID]]**: Versicherte können sich per App ihrer Krankenkasse statt mit der physischen [[eGK]] authentisieren

## Technische Details

> [!interesse-technik] Spezifikationen und Implementierungsreferenzen
> Die TI-Federation basiert auf OpenID Federation 1.0. Spezifikation des sektoralen IDP: `gemSpec_IDP_Sek` auf [gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/). Trust Anchor: gematik (Entity Configuration unter `https://idp.ti.de/.well-known/openid-federation`). Discovery-Endpunkt für sektorale IDPs: wird von der gematik betrieben und listet alle registrierten IDPs mit Sektorzuordnung. Token-Format: JWT (ES256/brainpoolP256r1). Relevante OpenID-Spezifikationen: [openid.net/specs/openid-federation-1_0.html](https://openid.net/specs/openid-federation-1_0.html).

### Grundlagen: OpenID Federation

Die TI-Federation basiert auf dem **OpenID Federation 1.0**-Standard. OpenID Federation definiert, wie eine Menge von Organisationen gegenseitiges Vertrauen auf kryptografischer Basis aufbauen kann, ohne für jede Beziehung bilateral Konfigurationen auszutauschen.

Die Kernkonzepte:

- **Entity Statement**: Ein signiertes JSON Web Token (JWT), das eine Organisation über sich selbst oder eine andere Organisation aussagt
- **Entity Configuration**: Das Entity Statement, das eine Organisation über sich selbst veröffentlicht (unter `/.well-known/openid-federation`)
- **Subordinate Statement**: Ein Entity Statement, das eine übergeordnete Stelle über eine untergeordnete ausstellt
- **Trust Chain**: Eine Kette von Entity Statements von einer Leaf-Entity bis zum Trust Anchor
- **Trust Anchor**: Die vertrauenswürdige Wurzel der Federation. In der TI-Federation ist dies die [[gematik]]

### Ablauf: Wie ein Fachdienst einem sektoralen IDP vertraut

1. Ein Versicherter authentisiert sich beim sektoralen IDP seiner Krankenkasse
2. Der sektorale IDP stellt ein OpenID Connect ID Token und einen Access Token aus
3. Der Versicherte ruft mit dem Access Token einen Fachdienst auf
4. Der Fachdienst kennt den sektoralen IDP möglicherweise nicht direkt
5. Der Fachdienst löst die Trust Chain auf: Er ruft die Entity Configuration des sektoralen IDPs ab
6. Er verfolgt die Kette bis zum Trust Anchor (gematik) und prüft die Subordinate Statements
7. Ist die Trust Chain gültig, akzeptiert der Fachdienst den Token des sektoralen IDPs

### Anforderungen an sektorale IDPs

Sektorale IDPs müssen laut gematik-Spezifikation (`gemSpec_IDP_Sek`) folgende Anforderungen erfüllen:

- Basierung auf [[OAuth 2.0]] und OpenID Connect (OIDC)
- Unterstützung von Pushed Authorization Requests (PAR)
- Standardisierte Claims: [[KVNR]] (Krankenversicherungsnummer), Versicherungsattribute
- Einheitliche Scopes für Nutzergruppen
- Registrierung beim Trust Anchor (gematik) über ein Subordinate Statement
- Nutzung von JSON Web Keys (JWK) statt klassischer TLS-PKI für die Federation

> [!dev-quickstart] Dev Quickstart: TI-Federation OAuth/OIDC-Flow implementieren
> Spezifikation: `gemSpec_IDP_Sek` v3.2.0 — [gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/)
> gematik Referenz-IDP (Open Source): [github.com/gematik/app-gemSekIdp](https://github.com/gematik/app-gemSekIdp)
>
> ```bash
> # 1. Entity Configuration des Trust Anchors abrufen
> curl https://idp.ti.de/.well-known/openid-federation
>
> # 2. Alle registrierten sektoralen IDPs auflesen (Federation Master)
> curl https://idp.ti.de/federation_master/idp_list
>
> # 3. Entity Configuration eines sektoralen IDP abrufen
> curl https://<sek-idp-host>/.well-known/openid-federation
>
> # 4. Pushed Authorization Request (PAR) an sektoralen IDP
> curl -X POST https://<sek-idp-host>/as/par \
>   -d "client_id=<client_id>&response_type=code&scope=openid+kvnr" \
>   -d "redirect_uri=<uri>&code_challenge=<pkce-challenge>&code_challenge_method=S256"
> ```
>
> Token-Format: JWT, signiert mit ES256 (brainpoolP256r1)
> Pflicht-Claims im ID-Token: `kvnr`, `given_name`, `family_name`, `iss`, `sub`, `aud`, `exp`
> IDP-Wissensdatenbank (gematik Confluence): [wiki.gematik.de/display/IDPKB](https://wiki.gematik.de/display/IDPKB)

### IDP-Discovery

Damit Clients den richtigen sektoralen IDP für eine Nutzergruppe finden können, gibt es einen **IDP-Discovery-Endpunkt**. Dieser Endpunkt, betrieben von der gematik, listet alle registrierten sektoralen IDPs mit ihren Metadaten und zuständigen Sektoren auf.

### Vertrauensniveaus

Die TI-Federation legt einheitliche Vertrauensniveaus fest. Je nachdem, wie stark die initiale Identitätsprüfung bei der Registrierung war, erhält ein Token ein bestimmtes Vertrauensniveau (entsprechend [[eIDAS]]-Stufen). Dienste können konfigurieren, welches Mindest-Vertrauensniveau sie akzeptieren.

### Abgrenzung zum zentralen IDP

Der zentrale [[IDP]] der gematik bleibt weiterhin bestehen. Er ist der Fallback für Authentisierungsszenarien, die kein sektoraler IDP abdeckt. In der Federation-Architektur ist der zentrale IDP selbst auch ein Teilnehmer der Federation, technisch auf derselben Ebene wie sektorale IDPs.

## Verknüpfungen

- [[IDP]] (zentraler IDP der gematik; TI-Federation erweitert dieses Modell)
- [[Gesundheits-ID]] (wird über sektorale IDPs in der TI-Federation ausgestellt)
- [[ePA]] (akzeptiert Tokens aus der TI-Federation)
- [[E-Rezept]] (nutzt TI-Federation für Versicherten-Authentisierung)
- [[Telematikinfrastruktur]] (TI 2.0 baut auf TI-Federation als Identitätsbasis)
- [[Fachdienst]] (Fachdienste vertrauen der TI-Federation statt einzelnen IDPs)
- [[PKI]] (TI-PKI bleibt für Komponentenzertifikate relevant, TI-Federation nutzt eigene JWK-Infrastruktur)
- [[mTLS]] (komplementärer Mechanismus für Verbindungsauthentisierung in TI 2.0)

## Quellen

- [gemSpec_IDP_Sek - sektoraler IDP Spezifikation](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/)
- [OpenID Federation 1.0 Spezifikation](https://openid.net/specs/openid-federation-1_0.html)
- [Identitäten in der TI - gematik Fachportal](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti/identitaeten)
- [GesundheitsID - gematik.de](https://www.gematik.de/anwendungen/gesundheitsid)
