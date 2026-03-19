---
title: Sektoraler IDP
audience: [technical]
tags: [infrastruktur, identität, authentifizierung, ti-2-0, idp, federation]
aliases: [Sektoraler Identity Provider, sektoraler IDP, GKV-IDP, Krankenkassen-IDP]
relevance:
  sectors: [kasse, hersteller, it-dienstleister, ti-infrastruktur, startup]
  interests: [technik, compliance, business]
maturity: wachsend
---

# Sektoraler IDP

Ein **sektoraler IDP (Identity Provider)** ist ein von einer Krankenkasse oder einem anderen zugelassenen Träger betriebener Authentifizierungsdienst, der Versicherten eine digitale Identität für die [[Telematikinfrastruktur]] bereitstellt.

## Erklärt für Einsteiger

In der TI gibt es nicht mehr nur einen zentralen Türsteher, der alle prüft. Stattdessen darf jede Krankenkasse einen eigenen Türsteher betreiben. Diese Türsteher heißen sektorale IDPs. Wenn du dich über die App deiner Krankenkasse bei der elektronischen Patientenakte anmeldest, macht das dein Krankenkassen-Türsteher. Er bestätigt: "Ja, das ist wirklich unser Versicherter." Alle anderen Dienste in der TI vertrauen diesem Türsteher, weil er nach den Regeln der gematik arbeitet und zertifiziert ist.

## Überblick

Der sektorale IDP ist ein zentrales Element der TI-Föderationsarchitektur. Mit der Einführung der [[TI-Federation]] und der [[Gesundheits-ID]] wurde das bis dahin zentrale IDP-Modell der gematik um dezentrale sektorale IDPs erweitert.

Jede gesetzliche Krankenkasse ist seit dem 1. Januar 2024 verpflichtet, ihren Versicherten eine [[Gesundheits-ID]] anzubieten. Die technische Grundlage dafür ist der sektorale IDP der Krankenkasse. Versicherte können sich damit kartenlos über ihre Krankenkassen-App bei TI-Diensten wie der [[ePA]], dem [[E-Rezept]] oder dem [[TI-Messenger]] anmelden.

Sektorale IDPs sind nicht nur für Versicherte denkbar. Die TI-Federation-Architektur erlaubt auch sektorale IDPs für Leistungserbringer (Ärzte, Apotheker, Physiotherapeuten), die sich ohne physische Chipkarte ([[HBA]], [[SMC-B]]) authentisieren möchten. Entsprechende Konzepte befinden sich Stand 2026 in der Entwicklung.

### Zulassung

Sektorale IDPs müssen von der [[gematik]] zugelassen werden. Die Anforderungen sind in der Spezifikation gemSpec_IDP_Sek festgelegt. Die gematik prüft Sicherheitsarchitektur, Datenschutz und technische Interoperabilität. Ein zugelassener sektoraler IDP erhält ein Zertifikat der TI-[[PKI]] und wird in der [[TI-Federation]] registriert.

In der Praxis betreiben viele Krankenkassen ihre sektoralen IDPs nicht selbst, sondern beauftragen spezialisierte Dienstleister. So betreibt beispielsweise IBM Deutschland GmbH einen sektoralen IDP für mehrere Kassen (AOK-Verbund, weitere).

## Technische Details

### Protokollbasis

Der sektorale IDP basiert vollständig auf offenen Standards:

- **[[OIDC]]** (OpenID Connect 1.0): Authentifizierungsprotokoll
- **[[OAuth-2.0]]** (RFC 6749): Autorisierungsframework
- **[[JWT]]** (RFC 7519): Tokenformat für alle ausgestellten Tokens
- **OpenID Federation 1.0**: Vertrauensrahmen für die TI-Federation

### Ablauf der Authentifizierung

1. Versicherter öffnet die App seiner Krankenkasse oder eine TI-Anwendung
2. Die Anwendung leitet zur Authentifizierung an den sektoralen IDP der Kasse weiter
3. Versicherter authentisiert sich beim sektoralen IDP (Biometrie, PIN, Secure Element)
4. Sektoraler IDP prüft die Identität des Versicherten anhand seiner Registrierungsdaten
5. Sektoraler IDP stellt ein signiertes [[OIDC]]-Authentifizierungstoken aus
6. Das Token wird an den zentralen [[IDP]]-Dienst der gematik übermittelt (**Token Exchange**, RFC 8693)
7. Zentraler IDP prüft die Vertrauensstellung des sektoralen IDPs über die [[TI-Federation]]
8. Zentraler IDP stellt ein TI-weites Access Token aus
9. Die Anwendung nutzt das Access Token für den Zugriff auf TI-Fachdienste

### Token-Inhalte

Das vom sektoralen IDP ausgestellte Token enthält:

```json
{
  "iss": "https://idp.krankenkasse.de",
  "sub": "pseudonymisierte-nutzer-id",
  "aud": "https://idp.gematik.de",
  "exp": 1700000300,
  "iat": 1700000000,
  "idNummer": "X123456789",
  "given_name": "Erika",
  "family_name": "Mustermann",
  "organizationName": "Beispielkasse GmbH"
}
```

`idNummer` enthält die [[KVNR]] des Versicherten. Das Token ist mit dem privaten Schlüssel des sektoralen IDPs signiert (ECDSA, brainpoolP256r1).

### Registrierung des Versicherten

Vor der ersten Nutzung muss sich der Versicherte beim sektoralen IDP einmalig registrieren. Dies dient der Identifizierung. Zugelassene Verfahren:

- **[[eID]]** (Online-Ausweisfunktion des Personalausweises): Hohe Vertrauensstufe
- **[[eGK]] mit PIN**: Bestehende TI-Identität als Vertrauensanker
- **[[ePass]]** (NFC-Identifikation per Personalausweis, seit März 2026)
- **Postkunden-Identifizierung** (VideoIdent, Post-Ident)

Nach der Erstregistrierung ist für die tägliche Nutzung nur noch eine einfachere Authentifizierung nötig (Biometrie, PIN). Periodisch muss die starke Authentifizierung wiederholt werden.

### Sicherheitsstufen

Die gematik unterscheidet zwei Sicherheitsstufen für sektorale IDPs:

- **Stufe 1 (Smartphone ohne Secure Element)**: Authentifizierung über Software-Schlüssel. Regelmäßige Wiederholung der starken Identifizierung erforderlich.
- **Stufe 2 (Smartphone mit zertifiziertem Secure Element)**: Schlüssel ist im Hardware-Chip des Geräts gesichert. Höhere Sicherheit, weniger häufige Wiederholung.

Geräte der Stufe 2 sind z.B. bestimmte Samsung Galaxy-Modelle mit zertifiziertem Samsung Knox-Chip.

### Integration in die TI-Federation

Der sektorale IDP ist in der [[TI-Federation]] als Entity registriert. Er veröffentlicht eine **Entity Configuration** unter `/.well-known/openid-federation`. Die gematik als Trust Anchor stellt ein **Subordinate Statement** aus, das den sektoralen IDP als vertrauenswürdiges Mitglied der Federation ausweist.

TI-Fachdienste, die der Federation vertrauen, akzeptieren automatisch Tokens aller in der Federation registrierten sektoralen IDPs. Neue Kassen müssen daher nicht für jeden Fachdienst einzeln konfiguriert werden.

> [!interesse-technik]
> Spezifikation: gemSpec_IDP_Sek (gematik Fachportal). Protokoll: OIDC + OAuth 2.0 + OpenID Federation 1.0. Token-Exchange: RFC 8693. Discovery: `/.well-known/openid-federation`. JWKS-Rotation: öffentliche Schlüssel unter `/.well-known/openid-configuration`, Attribut `jwks_uri`. Algorithmus: ECDSA mit brainpoolP256r1 (BSI TR-03116-4).

> [!interesse-compliance]
> Gesetzliche Pflicht für Krankenkassen: sektoralen IDP für [[Gesundheits-ID]] seit 01.01.2024 anbieten (§ 291a SGB V). Zulassung durch gematik erforderlich (gemSpec_IDP_Sek). Registrierungsverfahren für Versicherte müssen eine der zugelassenen Identifizierungsmethoden nutzen. Sicherheitsanforderungen nach BSI TR-03116-4.

> [!interesse-business]
> Marktlage 2026: Nicht alle Kassen betreiben eigene sektorale IDPs. IBM Deutschland GmbH und weitere Dienstleister bieten White-Label-Lösungen an. Ausfall des IBM-sektoralen IDP am 10. Februar 2026 (ca. 8 Stunden) verdeutlichte Konzentrationsrisiken. Ca. 4,4 Millionen Versicherte hatten Stand Anfang 2026 eine Gesundheits-ID registriert.

## Verknüpfungen

- [[IDP]] (zentraler gematik IDP; sektorale IDPs sind Ergänzung, keine Ablösung)
- [[TI-Federation]] (Vertrauensrahmen, in dem sektorale IDPs operieren)
- [[Gesundheits-ID]] (digitale Versichertenidentität, basiert auf sektoralem IDP)
- [[OIDC]] (Protokollbasis des sektoralen IDP)
- [[OAuth-2.0]] (Autorisierungsrahmen)
- [[JWT]] (Tokenformat für alle ausgestellten Tokens)
- [[PKI]] (stellt Schlüsselmaterial für sektorale IDPs bereit)
- [[ePA]] (nutzt sektorale IDPs zur Versichertenauthentifizierung)
- [[E-Rezept]] (kartenlose Verordnung mit sektoralem IDP)
- [[eGK]] (wird durch sektoralen IDP für Versicherte teilweise abgelöst)
- [[eID]] (Registrierungsverfahren beim sektoralen IDP)
- [[KVNR]] (Versichertenidentifikator im Token)

## Quellen

- [gematik: gemSpec_IDP_Sek – Sektoraler IDP der TI](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/)
- [gematik: Gesundheits-ID – Informationen für Kassen](https://fachportal.gematik.de/informationen-fuer/kranken-pflegekassen/gesundheits-id)
- [gematik: TI-Federation – Überblick](https://fachportal.gematik.de/telematikinfrastruktur/ti-2-0/ti-federation)
- [Wikipedia: Föderiertes Identitätsmanagement](https://de.wikipedia.org/wiki/F%C3%B6deriertes_Identit%C3%A4tsmanagement)
