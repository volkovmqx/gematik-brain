---
title: Gesundheits-ID
audience: [technical, non-technical]
tags: [infrastructure, identität, authentifizierung, ti-2-0]
aliases: [GesundheitsID, digitale Identität, al.vi]
maturity: wachsend
relevance:
  sectors: [arztpraxis, zahnarzt, apotheke, krankenhaus, patient, kasse, hersteller, ti-infrastruktur]
  interests: [technik, compliance, patient]
---

# Gesundheits-ID

Die Gesundheits-ID ist die digitale Identität für Versicherte in der deutschen [[Telematikinfrastruktur]], die eine kartenlose Anmeldung an TI-Diensten per Smartphone ermöglicht.

## Erklärt für Einsteiger

Stell dir vor, du brauchst normalerweise einen Bibliotheksausweis aus Plastik, um Bücher auszuleihen. Die Gesundheits-ID ist wie eine digitale Version dieses Ausweises auf deinem Handy. Statt die Krankenkassenkarte beim Arzt vorzuzeigen, kannst du dich mit deinem Smartphone ausweisen. Die Krankenkasse stellt diese digitale Identität aus und bestätigt damit: "Ja, diese Person ist bei uns versichert."

## Überblick

Die Gesundheits-ID erlaubt es Versicherten, sich ohne physische [[eGK]] an TI-Anwendungen anzumelden. Nutzbar ist sie etwa für die [[ePA]], das [[E-Rezept]] oder den [[TI-Messenger]]. Die gesetzliche Grundlage verpflichtet die Krankenkassen seit dem 1. Januar 2024, ihren Versicherten auf Wunsch eine Gesundheits-ID bereitzustellen.

> [!frist-warnung] Frist-Warnung: Bereitstellungspflicht und Akzeptanzpflicht GesundheitsID
> **Rechtsgrundlage:** § 291 Abs. 8 SGB V (Bereitstellungspflicht der Krankenkassen) i.V.m. § 15 Abs. 2 SGB V (Akzeptanzpflicht der Leistungserbringer)
> **Fristen:**
> - Seit **1. Januar 2024**: Krankenkassen sind verpflichtet, ihren Versicherten auf Wunsch eine Gesundheits-ID bereitzustellen.
> - Seit **1. Januar 2026**: Leistungserbringer (Arztpraxen, Zahnarztpraxen, Apotheken) sind verpflichtet, die GesundheitsID als digitalen Versicherungsnachweis zu akzeptieren.
> **Handlungsbedarf für Krankenkassen:** Prüfen Sie, ob der sektorale IDP betriebsbereit und für alle Versicherten erreichbar ist. Dokumentieren Sie die Opt-in-Rate und stellen Sie den Registrierungsprozess in der Krankenkassen-App sicher.
> **Handlungsbedarf für Leistungserbringer:** Das PVS muss die GesundheitsID-basierte Authentifizierung unterstützen. Wenden Sie sich an Ihren PVS-Hersteller, falls das Modul noch nicht installiert ist. Die Ablehnung der GesundheitsID als Versicherungsnachweis ist seit 1. Januar 2026 nicht mehr zulässig.

> [!interesse-compliance]
> Seit **1. Januar 2024** sind Krankenkassen verpflichtet, ihren Versicherten auf Wunsch eine Gesundheits-ID bereitzustellen. Seit **1. Januar 2026** ist sie offiziell als digitaler Versicherungsnachweis beim Arztbesuch nutzbar. Praxen müssen die GesundheitsID als Nachweis akzeptieren. Ab **2027** soll sie als vollwertiger eGK-Ersatz für die TI-Nutzung beim Arztbesuch gelten. Stand Anfang 2026: rund 4,4 Millionen registrierte Versicherte.

Seit **1. Januar 2026** kann die GesundheitsID als digitaler Versicherungsnachweis gegenüber Leistungserbringern genutzt werden. Stand Anfang 2026 haben sich laut Branchenberichten rund **4,4 Millionen Versicherte** registriert.

Die Gesundheits-ID ist ein zentraler Baustein der TI 2.0-Strategie. Das Ziel: Die [[Telematikinfrastruktur]] soll nicht mehr zwingend Hardware wie [[eGK]] oder [[Konnektoren]] voraussetzen, sondern softwarebasiert und geräteunabhängig werden. Ab 2027 sollen Versicherte die Gesundheits-ID als vollwertigen Ersatz für die [[eGK]] auch beim Arztbesuch verwenden können.

Technisch basiert die Gesundheits-ID auf dem [[IDP]]-System der TI. Jede Krankenkasse betreibt einen eigenen sektoralen Identity Provider (sektoraler IDP), der über die [[TI-Federation]] mit dem zentralen [[IDP]] verbunden ist. Versicherte authentifizieren sich über die App ihrer Krankenkasse und erhalten dort ein Token, das von TI-Diensten akzeptiert wird.

Die Abhängigkeit vom sektoralen IDP der eigenen Krankenkasse ist ein strukturelles Ausfallrisiko: Fällt der IDP-Betreiber aus, ist die kartenlose Authentifizierung für alle betroffenen Versicherten nicht mehr möglich. Im Februar 2026 wurden innerhalb weniger Tage gleich zwei solcher Ausfälle dokumentiert: Am 10. Februar 2026 fiel der IBM-sektorale IDP aus, am 12. Februar 2026 der T-Systems-sektorale IDP, der unter anderem Barmer- und AOK-Versicherte traf. In beiden Fällen konnten Versicherte während der Ausfallzeit nicht per Gesundheits-ID auf TI-Dienste zugreifen. Die physische [[eGK]] blieb in diesen Situationen weiterhin nutzbar.

## Technische Details

### Registrierung

Bei der Erstregistrierung muss die Identität des Versicherten zweifelsfrei festgestellt werden. Dafür gibt es drei Wege:
- [[eID]]-Funktion des Personalausweises (Online-Ausweisen)
- [[eGK]] mit PIN
- Persönliche Identifizierung über die Krankenkasse

Nach erfolgreicher Einmalidentifikation wird das Smartphone-Gerät registriert und erhält einen kryptografischen Schlüssel.

### Authentifizierungsablauf

1. Versicherter öffnet die Krankenkassen-App und initiiert die Anmeldung
2. Die App kommuniziert mit dem sektoralen IDP der Krankenkasse
3. Der sektorale IDP stellt ein signiertes Token aus (OpenID Connect / OAuth 2.0)
4. Das Token enthält die [[KVNR|Krankenversicherungsnummer (KVNR)]] und Versicherungsdaten
5. Der TI-Dienst (z.B. ePA-Aktensystem) prüft das Token über die TI-Federation
6. Bei erfolgreicher Prüfung erhält der Versicherte Zugriff

Zur Sicherheit ist eine Zwei-Faktor-Authentifizierung vorgesehen. Geräte mit einem zertifizierten Secure Element (z.B. bestimmte Samsung-Modelle) können dieses als zweiten Faktor nutzen. Ohne Secure Element ist periodisch eine erneute Identifizierung mit [[eGK]] oder Personalausweis erforderlich.

> [!interesse-patient]
> Die Gesundheits-ID ist die digitale Alternative zur Krankenkassenkarte auf Ihrem Smartphone. Sie können damit beim Arzt nachweisen, dass Sie versichert sind, ohne die Karte einzustecken. Die Gesundheits-ID funktioniert über die App Ihrer Krankenkasse. Die Einrichtung der Gesundheits-ID ist freiwillig: Ihre normale Gesundheitskarte bleibt weiterhin gültig.

### Tokenformat und Protokolle

- Protokoll: OpenID Connect (OIDC) über OAuth 2.0
- Token: JSON Web Token (JWT) mit [[KVNR]] und Versicherungsattributen
- Signing: ECDSA mit brainpoolP256r1
- Infrastruktur: [[TI-Federation]] verbindet alle sektoralen IDPs mit dem zentralen [[IDP]]

### ePass als ergänzendes Identifikationsverfahren

Seit dem **25. März 2026** steht mit **[[ePass]]** ein weiteres Identifikationsverfahren für TI-Dienste zur Verfügung. ePass nutzt den NFC-Chip eines deutschen Personalausweises oder Reisepasses, um die Identität per Smartphone zu prüfen. Das Verfahren wurde von der Nect GmbH entwickelt und von BITMARCK für rund 80 Prozent der GKV-Kassen bereitgestellt. Rechtsgrundlage ist das BEEP-Gesetz (in Kraft 1. Januar 2026).

ePass und Gesundheits-ID sind komplementäre Verfahren, keine Konkurrenten. Beide ermöglichen den Zugang zu TI-Diensten wie der [[ePA]] ohne physische eGK und ohne Praxisbesuch. Der Unterschied: Die Gesundheits-ID leitet sich aus der Versichertenidentität bei der Krankenkasse ab; ePass nutzt ein staatliches hoheitliches Ausweisdokument als Vertrauensanker.

### Abgrenzung zur eGK

| Merkmal | [[eGK]] | Gesundheits-ID |
|---|---|---|
| Form | Chipkarte | App auf Smartphone |
| Lesegerät erforderlich | Ja | Nein |
| Herausgeber | [[gematik]] | Krankenkasse |
| Nutzung beim Arzt | Ja (seit 1995) | Ab 2027 geplant |

## Integration in die EUDI-Wallet

> [!patientenrecht] Patientenrecht: Gesundheits-ID einrichten und nutzen
> Seit dem 1. Januar 2024 muss Ihre Krankenkasse Ihnen eine Gesundheits-ID anbieten. Sie müssen sie aber nicht nutzen.
>
> **Was kann ich tun?**
> 1. Laden Sie die App Ihrer Krankenkasse herunter (z.B. TK-App, AOK-App)
> 2. Tippen Sie auf "Gesundheits-ID einrichten"
> 3. Identifizieren Sie sich einmalig: mit Ihrem Personalausweis (Online-Funktion) oder mit Ihrer Gesundheitskarte und PIN
> 4. Danach können Sie Ihre Gesundheits-ID zum Einloggen in die ePA oder beim Arzt nutzen
>
> **Ihre Rechte:**
> - Die Einrichtung ist freiwillig. Ihre normale Gesundheitskarte bleibt gültig.
> - Kein Arzt kann Sie zwingen, die Gesundheits-ID zu nutzen.
> - Sie können die Gesundheits-ID jederzeit deaktivieren. Wenden Sie sich dafür an Ihre Krankenkasse.

Das [[BMG]] plant, die Gesundheits-ID als Electronic Attestation of Attributes (EAA) in die [[EUDI-Wallet]] zu integrieren. Damit soll die GesundheitsID als standardisierter Gesundheitsnachweis im europäischen Rahmen nutzbar werden.

Der geplante Zeitplan laut BMG:

- **November 2026**: EU-Deadline für die Bereitstellung der EUDI-Wallet in allen Mitgliedstaaten. Deutschland stellt laut BMDS eine funktionierende Wallet-Infrastruktur bereit.
- **Anfang 2027**: Geplanter Produktivstart der deutschen EUDI-Wallet für die breite Öffentlichkeit. Die GesundheitsID soll als erstes Gesundheits-Credential in die Wallet integriert werden.
- **Credential-Aussteller**: Die gesetzlichen Krankenkassen (über ihre sektoralen IDPs) fungieren als Credential-Aussteller der GesundheitsID in der EUDI-Wallet-Infrastruktur. Sie stellen die EAA nach OID4VCI-Protokoll aus.

Die [[gematik]] koordiniert die technische Integration zwischen TI-Infrastruktur und EUDI-Wallet-Architektur. Ziel ist eine Lösung, bei der Versicherte dieselbe App für TI-Dienste und die europäische Identitätsinfrastruktur nutzen können.

> [!frist-warnung] Frist-Warnung: EUDI-Wallet-Bereitstellung bis Ende 2026
> **Rechtsgrundlage:** Verordnung (EU) 2024/1183 (eIDAS 2.0), Art. 5a Abs. 1: Mitgliedstaaten müssen EU Digital Identity Wallets innerhalb von 24 Monaten nach Annahme der Durchführungsakte bereitstellen. Die Kommission hat die Durchführungsakte am 28. November 2024 angenommen. Daraus ergibt sich eine Bereitstellungspflicht bis Ende November 2026.
> **Frist:** Bis spätestens Ende November 2026 müssen alle EU-Mitgliedstaaten ihren Bürgerinnen und Bürgern eine funktionsfähige EUDI-Wallet zur Verfügung stellen.
> **Handlungsbedarf für gesetzliche Krankenkassen:** Die sektoralen IDPs der Krankenkassen müssen perspektivisch als Credential-Aussteller nach dem OID4VCI-Protokoll (OpenID for Verifiable Credential Issuance) zertifiziert werden, um die GesundheitsID als Electronic Attestation of Attributes (EAA) in die EUDI-Wallet ausstellen zu können. Klären Sie mit der gematik und Ihrem IDP-Dienstleister den Zertifizierungszeitplan. Anforderungen aus Art. 45e eIDAS 2.0 (EU 2024/1183) zur Wallet-Interoperabilität gelten.
> **Bei Nichtbeachtung:** Deutschland als Mitgliedstaat haftet bei Fristversäumnis gegenüber der EU-Kommission. Für Krankenkassen als Credential-Aussteller können fehlende Zertifizierungen dazu führen, dass die GesundheitsID nicht in europäischen Gesundheitsdiensten (EHDS) akzeptiert wird.

> [!interesse-compliance]
> **Frist: November 2026** (EU-Bereitstellungspflicht für EUDI-Wallet). Für Krankenkassen bedeutet das: Die sektoralen IDPs müssen perspektivisch als Credential-Aussteller nach OID4VCI zertifiziert werden. Anforderungen aus eIDAS 2.0 (EU 2024/1183) gelten. Konkrete Umsetzungsfristen für GKVen als Credential-Aussteller werden im Rahmen des [[GDVG]] erwartet.

## Verknüpfungen

- [[eGK]] (physische Karte, die die Gesundheits-ID langfristig ablöst)
- [[IDP]] (zentraler Identity Provider der TI, mit dem sektorale IDPs föderiert sind)
- [[ePA]] (nutzt Gesundheits-ID zur Authentifizierung)
- [[E-Rezept]] (zugänglich per Gesundheits-ID)
- [[VSDM]] (Versicherungsstammdaten, VSDM 2.0 integriert Gesundheits-ID)
- [[Telematikinfrastruktur]] (Gesamtsystem, in das die Gesundheits-ID eingebettet ist)
- [[TI-Gateway]] (TI-2.0-Zugang, kompatibel mit Gesundheits-ID)
- [[eID]] (Online-Ausweisfunktion des Personalausweises, einer der Registrierungswege für die Gesundheits-ID)
- [[EUDI-Wallet]] (perspektivische EU-weite Integration der Gesundheits-ID)

## Quellen

- [GesundheitsID: Digitale Identitäten im Gesundheitswesen | gematik](https://www.gematik.de/anwendungen/gesundheitsid)
- [Identitäten in der TI | gematik Fachportal](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti/identitaeten)
- [Gesundheits-ID als Versicherungsnachweis ab 2026 | gematik Newsroom](https://www.gematik.de/newsroom)
- [Nutzungszahlen GesundheitsID | datenschutz-notizen.de (Branchenblog)](https://www.datenschutz-notizen.de/die-gesundheitsid-als-alternative-zur-gesundheitskarte-4646083/)
