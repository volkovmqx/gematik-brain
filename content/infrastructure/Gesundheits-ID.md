---
title: Gesundheits-ID
audience: [technical, non-technical]
tags: [infrastructure, identität, authentifizierung, ti-2-0]
aliases: [GesundheitsID, digitale Identität, al.vi]
maturity: wachsend
---

# Gesundheits-ID

Die Gesundheits-ID ist die digitale Identität für Versicherte in der deutschen [[Telematikinfrastruktur]], die eine kartenlose Anmeldung an TI-Diensten per Smartphone ermöglicht.

## Erklärt für Einsteiger

Stell dir vor, du brauchst normalerweise einen Bibliotheksausweis aus Plastik, um Bücher auszuleihen. Die Gesundheits-ID ist wie eine digitale Version dieses Ausweises auf deinem Handy. Statt die Krankenkassenkarte beim Arzt vorzuzeigen, kannst du dich mit deinem Smartphone ausweisen. Die Krankenkasse stellt diese digitale Identität aus und bestätigt damit: "Ja, diese Person ist bei uns versichert."

## Überblick

Die Gesundheits-ID erlaubt es Versicherten, sich ohne physische [[eGK]] an TI-Anwendungen anzumelden. Nutzbar ist sie etwa für die [[ePA]], das [[E-Rezept]] oder den [[TI-Messenger]]. Die gesetzliche Grundlage verpflichtet die Krankenkassen seit dem 1. Januar 2024, ihren Versicherten auf Wunsch eine Gesundheits-ID bereitzustellen.

Seit **1. Januar 2026** kann die GesundheitsID als digitaler Versicherungsnachweis gegenüber Leistungserbringern genutzt werden. Stand Anfang 2026 haben sich laut Branchenberichten rund **4,4 Millionen Versicherte** registriert.

Die Gesundheits-ID ist ein zentraler Baustein der TI 2.0-Strategie. Das Ziel: Die [[Telematikinfrastruktur]] soll nicht mehr zwingend Hardware wie [[eGK]] oder [[Konnektoren]] voraussetzen, sondern softwarebasiert und geräteunabhängig werden. Ab 2027 sollen Versicherte die Gesundheits-ID als vollwertigen Ersatz für die [[eGK]] auch beim Arztbesuch verwenden können.

Technisch basiert die Gesundheits-ID auf dem [[IDP]]-System der TI. Jede Krankenkasse betreibt einen eigenen sektoralen Identity Provider (sektoraler IDP), der über die [[TI-Federation]] mit dem zentralen [[IDP]] verbunden ist. Versicherte authentifizieren sich über die App ihrer Krankenkasse und erhalten dort ein Token, das von TI-Diensten akzeptiert wird.

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

### Tokenformat und Protokolle

- Protokoll: OpenID Connect (OIDC) über OAuth 2.0
- Token: JSON Web Token (JWT) mit [[KVNR]] und Versicherungsattributen
- Signing: ECDSA mit brainpoolP256r1
- Infrastruktur: [[TI-Federation]] verbindet alle sektoralen IDPs mit dem zentralen [[IDP]]

### ePass als ergänzendes Identifikationsverfahren

Seit dem **25. März 2026** steht mit **ePass** ein weiteres Identifikationsverfahren für TI-Dienste zur Verfügung. ePass nutzt den NFC-Chip eines deutschen Personalausweises oder Reisepasses, um die Identität per Smartphone zu prüfen. Das Verfahren wurde von der Nect GmbH entwickelt und von BITMARCK für rund 80 Prozent der GKV-Kassen bereitgestellt. Rechtsgrundlage ist das BEEP-Gesetz (in Kraft 1. Januar 2026).

ePass und Gesundheits-ID sind komplementäre Verfahren, keine Konkurrenten. Beide ermöglichen den Zugang zu TI-Diensten wie der [[ePA]] ohne physische eGK und ohne Praxisbesuch. Der Unterschied: Die Gesundheits-ID leitet sich aus der Versichertenidentität bei der Krankenkasse ab; ePass nutzt ein staatliches hoheitliches Ausweisdokument als Vertrauensanker.

### Abgrenzung zur eGK

| Merkmal | [[eGK]] | Gesundheits-ID |
|---|---|---|
| Form | Chipkarte | App auf Smartphone |
| Lesegerät erforderlich | Ja | Nein |
| Herausgeber | [[gematik]] | Krankenkasse |
| Nutzung beim Arzt | Ja (seit 1995) | Ab 2027 geplant |

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
