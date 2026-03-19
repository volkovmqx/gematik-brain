---
title: IDP - Identity Provider
audience: [technical, non-technical]
tags: [infrastruktur, authentisierung, oauth, idp]
aliases: [IDP, IDP-Dienst, Identity Provider, sektoraler IDP, TI-Federation]
maturity: wachsend
---

# IDP - Identity Provider

Der **IDP-Dienst (Identity Provider)** ist der zentrale Authentisierungsdienst der [[Telematikinfrastruktur]]. Er prüft die Identität von Nutzern und Einrichtungen und stellt Tokens aus, mit denen TI-Dienste zugänglich werden.

## Erklärt für Einsteiger

Wenn du dich bei einer App anmeldest und dabei "Mit Google anmelden" klickst, dann übernimmt Google in dem Moment die Aufgabe zu prüfen, ob du wirklich du bist. Google ist dann ein Identity Provider. Der IDP-Dienst der TI macht dasselbe für das Gesundheitswesen: Wenn ein Arzt auf die [[ePA]] zugreift oder eine App das [[E-Rezept]] abruft, fragt das System zuerst beim IDP nach, ob die Person wirklich die ist, die sie vorgibt zu sein. Erst wenn das bestätigt ist, bekommt die Person Zugang.

## Überblick

Der IDP-Dienst ist eine zentrale Infrastrukturkomponente, die von der [[gematik]] betrieben und spezifiziert wird. Er erfüllt zwei Kernaufgaben:

1. **Authentisierung**: Er prüft die Identität von Nutzern anhand ihrer Chipkarten ([[eGK]], [[HBA]], [[SMC-B]]) oder biometrischer Alternativen.
2. **Autorisierung**: Er stellt zeitbegrenzte Tokens aus, mit denen TI-Dienste (Fachdienste) aufgerufen werden können.

Ursprünglich gab es einen zentralen IDP-Dienst der gematik. Mit TI 2.0 wird dieses Modell durch die **[[TI-Federation]]** erweitert: Mehrere zugelassene **[[Sektoraler-IDP|sektorale IDPs]]** ergänzen den zentralen Dienst. Jeder sektorale IDP ist für eine bestimmte Nutzergruppe zuständig, zum Beispiel Krankenkassen für ihre Versicherten.

Der IDP ist für alle TI-Anwendungen relevant, die eine gesicherte Nutzeridentität benötigen, insbesondere [[ePA]], [[E-Rezept]], [[TI-Messenger]] und [[Gesundheits-ID]].

## Technische Details

### Standards

Der IDP-Dienst basiert auf anerkannten offenen Standards:

- **[[OAuth 2.0]]**: Autorisierungsframework (RFC 6749)
- **OpenID Connect (OIDC)**: Identitätsschicht über OAuth 2.0
- **JSON Web Token (JWT)**: Tokenformat für alle ausgestellten Tokens
- **PKCE** (Proof Key for Code Exchange): Schutzmechanismus gegen Code-Interception-Angriffe

### Authentisierungsfluss

Der Standardfluss folgt dem OAuth 2.0 Authorization Code Grant mit PKCE:

1. Die Anwendung (Client) sendet einen Autorisierungsantrag an den IDP.
2. Der IDP fordert den Nutzer auf, sich mit seiner Chipkarte zu authentisieren (Challenge-Response).
3. Der IDP prüft das X.509-Zertifikat der Karte (C.CH.AUT für eGK, C.HP.AUT für HBA, C.HCI.AUT für SMC-B).
4. Bei Erfolg stellt der IDP einen Autorisierungscode aus.
5. Die Anwendung tauscht den Code gegen Tokens ein.

### Token-Typen

Der IDP stellt drei Token-Typen aus:

- **ID_TOKEN**: OpenID Connect Token. Enthält Identitätsattribute aus dem X.509-Zertifikat der Chipkarte (Name, [[Telematik-ID]], Berufsbezeichnung).
- **ACCESS_TOKEN**: OAuth 2.0 Token. Berechtigt den Zugriff auf konkrete Fachdienste (z.B. ePA-Aktensystem, E-Rezept-Fachdienst). Zeitlich begrenzt.
- **SSO_TOKEN**: Session-Token gemäß RFC 7519. Ermöglicht Einmalanmeldung ohne erneute Karteninteraktion.

### Alternative Authentisierung (Pairing)

Über den **Pairing-Endpunkt** können Nutzer alternative Authentisierungsmethoden registrieren. So ist es möglich, sich nach einmaliger Chipkarten-Registrierung künftig per Biometrie (Fingerabdruck, Face ID) oder PIN zu authentisieren, ohne die Karte erneut einzustecken.

### TI-Federation und sektorale IDPs

Mit der [[TI-Federation]] wird die Authentisierung dezentralisiert. Sektorale IDPs sind eigenständige Identity Provider, die:

- Auf denselben Standards (OIDC, OAuth 2.0, JWT) basieren
- Konsistente Identitätsattribute (Scopes, Claims) liefern
- Über einen Discovery-Mechanismus auffindbar sind
- Eigene Vertrauensbeziehungen zu TI-Fachdiensten pflegen

Dies ermöglicht, dass Krankenkassen über ihre eigenen IDPs die [[Gesundheits-ID]] für Versicherte ausstellen. Versicherte können sich damit bei TI-Diensten anmelden, ohne die [[eGK]] physisch verwenden zu müssen.

### Zertifikate und Kryptografie

Der IDP prüft bei jeder Authentisierung Gültigkeit, Integrität und Signatur des vorgelegten X.509-Zertifikats. Dabei gilt:

- RSA 2048 bit: gültig bis Ende 2025
- ECDSA (brainpoolP256r1 oder P-256): gültig bis mindestens 2029

### Abhängigkeitsrisiken: Ausfall sektoraler IDPs

Die TI-Federation verteilt die Authentisierung auf mehrere sektorale IDPs. Das schafft Redundanz in der Theorie, birgt aber Konzentrationsrisiken in der Praxis: Wenn ein sektoraler IDP, der für viele Kassen zuständig ist, ausfällt, sind alle über ihn angebundenen Leistungserbringer nicht mehr authentisierbar.

Am **10. Februar 2026** kam es zu zwei voneinander unabhängigen Störungen:

1. **IBM sektoraler IDP**: Der sektorale IDP der IBM Deutschland GmbH fiel ab ca. 3:05 Uhr aus. Vermutliche Ursache war ein Rauchmelder-Problem in einem Frankfurter Rechenzentrum, das zu einem automatischen Shutdown führte. Behebung gegen 11:00 Uhr. Dauer: ca. 8 Stunden. Betroffen waren **Versicherte**, die sich über die [[Gesundheits-ID]] via diesen sektoralen IDP authentisierten. Für sie war der Zugang zu TI-Diensten wie [[ePA]] während des Ausfalls nicht möglich.

2. **T-Systems VPN-Zugangsdienst**: Parallel fiel der VPN-Zugangsdienst von T-Systems aus, der für die Netzwerkkonnektivität von Leistungserbringern in die TI zuständig ist. Betroffen waren Arztpraxen und andere Einrichtungen, die über diesen Zugangsdienst mit der TI verbunden sind. Die beiden Vorfälle waren technisch unabhängig voneinander, trafen die TI jedoch am selben Tag.

Das Ereignis verdeutlicht die Abhängigkeit kritischer TI-Anwendungen von einzelnen Infrastrukturanbietern.

## Verknüpfungen

- Stellt Tokens für [[ePA]], [[E-Rezept]], [[TI-Messenger]] aus
- Authentisiert Inhaber von [[eGK]], [[HBA]] und [[SMC-B]]
- Ermöglicht [[Gesundheits-ID]] als digitale Identität für Versicherte
- Nutzt die [[PKI]] der [[Telematikinfrastruktur]] zur Zertifikatsprüfung
- Ergänzt durch sektorale IDPs im Rahmen der [[TI-Federation]]

## Quellen

- [gemSpec_IDP_Dienst - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Dienst/latest/)
- [gemSpec_IDP_Sek - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/)
- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
