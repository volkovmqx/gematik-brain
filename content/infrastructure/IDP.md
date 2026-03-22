---
title: IDP - Identity Provider
audience: [technical, non-technical]
tags: [infrastruktur, authentisierung, oauth, idp]
aliases: [IDP, IDP-Dienst, Identity Provider, sektoraler IDP, TI-Federation]
maturity: wachsend
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, kasse, hersteller, ti-infrastruktur, it-dienstleister, startup]
  interests: [technik, compliance]
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

> [!interesse-technik] IDP-Integration für Entwickler
> Spezifikation: [gemSpec_IDP_Dienst](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Dienst/latest/). Der IDP folgt OAuth 2.0 Authorization Code Grant mit PKCE (RFC 7636). Discovery-Endpunkt: `https://idp.zentral.idp.splitdns.ti-dienste.de/.well-known/openid-configuration`. Token-Signatur: ECDSA mit brainpoolP256r1. Sektorale IDPs sind über die [[TI-Federation]]-Discovery auffindbar. Für die Integration müssen Fachdienste ihre Client-ID bei der gematik registrieren.

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

> [!dev-quickstart] Dev Quickstart: IDP Token-Endpunkt (zentraler IDP)
> **Discovery:**
> ```bash
> curl https://idp.zentral.idp.splitdns.ti-dienste.de/.well-known/openid-configuration
> # Nur aus TI erreichbar. Liefert authorization_endpoint, token_endpoint, scopes_supported.
> ```
> **Authorization Request (PKCE, Schritt 1):**
> ```
> GET <authorization_endpoint>
>   ?client_id=<registrierte-client-id>
>   &response_type=code
>   &redirect_uri=<redirect-uri>
>   &scope=openid+e-rezept    # oder: openid+epa
>   &state=<random>
>   &nonce=<random>
>   &code_challenge=<S256-hash>
>   &code_challenge_method=S256
> ```
> **Token Exchange (Schritt 2):**
> ```bash
> curl -X POST <token_endpoint> \
>   -H "Content-Type: application/x-www-form-urlencoded" \
>   -d "grant_type=authorization_code" \
>   -d "code=<auth-code>" \
>   -d "redirect_uri=<redirect-uri>" \
>   -d "client_id=<client-id>" \
>   -d "code_verifier=<verifier>"
> ```
> Access Token gültig: 300 Sekunden. Signatur: ECDSA brainpoolP256r1.
> - Scopes: `openid`, `e-rezept`, `epa`, `pairing` (je nach Fachdienst-Registrierung)
> - Spec: [gemSpec_IDP_Dienst](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Dienst/latest/)
> - E-Rezept Auth-Flow Beispiel: [github.com/gematik/api-erp](https://github.com/gematik/api-erp/blob/master/docs/authentisieren.adoc)
> - Referenz-IDP (Testsystem): [github.com/gematik/ref-idp-server](https://gematik.github.io/ref-idp-server/tokenFlowPs.html)

### Token-Typen

Der IDP stellt drei Token-Typen aus:

- **ID_TOKEN**: OpenID Connect Token. Enthält Identitätsattribute aus dem X.509-Zertifikat der Chipkarte (Name, [[Telematik-ID]], Berufsbezeichnung).
- **ACCESS_TOKEN**: OAuth 2.0 Token. Berechtigt den Zugriff auf konkrete Fachdienste (z.B. ePA-Aktensystem, E-Rezept-Fachdienst). Zeitlich begrenzt.
- **SSO_TOKEN**: Session-Token gemäß RFC 7519. Ermöglicht Einmalanmeldung ohne erneute Karteninteraktion.

### Alternative Authentisierung (Pairing)

Über den **Pairing-Endpunkt** können Nutzer alternative Authentisierungsmethoden registrieren. So ist es möglich, sich nach einmaliger Chipkarten-Registrierung künftig per Biometrie (Fingerabdruck, Face ID) oder PIN zu authentisieren, ohne die Karte erneut einzustecken.

### TI-Federation und sektorale IDPs

> [!interesse-compliance] Authentisierungsanforderungen
> Alle TI-Fachdienste, die auf personenbezogene Gesundheitsdaten zugreifen, müssen den IDP-Dienst der gematik nutzen. Eigenentwickelte Authentisierungslösungen sind nicht zulässig. Krankenkassen, die einen sektoralen IDP betreiben wollen, benötigen eine gematik-Zulassung nach den gemSpec_IDP_Sek-Anforderungen. Ab 2026 müssen alle neuen TI-Anwendungen die [[TI-Federation]] unterstützen.

> [!frist-warnung] Frist-Warnung: GesundheitsID-Bereitstellungspflicht für Krankenkassen
> **Rechtsgrundlage:** § 291 Abs. 8 SGB V i.d.F. des DigiG (Digitalisierungsgesetz, BGBl. I 2024, Nr. 40); gemSpec_IDP_Sek (gematik-Zulassungsanforderungen für sektorale IDPs)
> **Frist:** Seit 1. Januar 2024 sind alle gesetzlichen Krankenkassen verpflichtet, ihren Versicherten auf Verlangen eine sichere digitale Identität (GesundheitsID) bereitzustellen. Ab 1. Januar 2026 gilt die GesundheitsID gleichwertig zur [[eGK]] für die Authentifizierung in der TI und als Versicherungsnachweis nach § 291a Abs. 1 SGB V.
> **Handlungsbedarf:** Krankenkassen, die noch keinen eigenen sektoralen IDP betreiben, müssen einen zugelassenen sektoralen IDP-Anbieter beauftragen oder eine gematik-Zulassung gemäß gemSpec_IDP_Sek beantragen. Die GesundheitsID-Funktion muss in der Krankenkassen-App implementiert und für alle Versicherten aktivierbar sein.
> **Bei Nichtbeachtung:** Krankenkassen ohne GesundheitsID-Angebot verstoßen gegen § 291 Abs. 8 SGB V. Die Aufsichtsbehörden (BVA für bundesunmittelbare Kassen, Landesbehörden für landesunmittelbare Kassen) können Beanstandungen und Anordnungen aussprechen.

Mit der [[TI-Federation]] wird die Authentisierung dezentralisiert. Sektorale IDPs sind eigenständige Identity Provider, die:

- Auf denselben Standards (OIDC, OAuth 2.0, JWT) basieren
- Konsistente Identitätsattribute (Scopes, Claims) liefern
- Über einen Discovery-Mechanismus auffindbar sind
- Eigene Vertrauensbeziehungen zu TI-Fachdiensten pflegen

Dies ermöglicht, dass Krankenkassen über ihre eigenen IDPs die [[Gesundheits-ID]] für Versicherte ausstellen. Versicherte können sich damit bei TI-Diensten anmelden, ohne die [[eGK]] physisch verwenden zu müssen.

### Zertifikate und Kryptografie

Der IDP prüft bei jeder Authentisierung Gültigkeit, Integrität und Signatur des vorgelegten X.509-Zertifikats. Dabei gilt:

- RSA 2048 bit: gültig bis Ende 2025, seit 2026 abgelöst durch ECDSA
- ECDSA (brainpoolP256r1 oder P-256): aktuell verpflichtend, gültig bis mindestens 2029

> [!frist-warnung] Frist-Warnung: ECDSA-Pflicht für IDP und TI-Komponenten ab 2026
> **Rechtsgrundlage:** gematik-Spezifikation gemSpec_Krypt (Kryptographievorgaben der gematik); BSI TR-02102-1 (Kryptographische Mechanismen); § 291b Abs. 2 SGB V (Vorgaben für die technische Ausstattung der TI)
> **Frist:** Seit 1. Januar 2026 sind RSA-2048-Zertifikate für die Authentisierung in der TI nicht mehr zugelassen. Alle IDP-Tokens und X.509-Zertifikate müssen auf ECDSA (brainpoolP256r1 oder NIST P-256) basieren. Komponenten, die noch RSA-2048-Zertifikate ausstellen oder akzeptieren, sind nicht mehr konform.
> **Handlungsbedarf:** Betreiber sektoraler IDPs und Hersteller von TI-Komponenten (Konnektoren, eGK-Firmware) müssen sicherstellen, dass alle ausgestellten und akzeptierten Zertifikate ECDSA nutzen. Komponentenzertifikate auf RSA-Basis müssen spätestens zum 31. Dezember 2025 erneuert worden sein.
> **Bei Nichtbeachtung:** TI-Komponenten mit abgelaufenen RSA-Zertifikaten werden vom IDP abgewiesen. Betriebsstörungen, die auf veraltete Kryptografie zurückzuführen sind, liegen im Verantwortungsbereich des Betreibers der jeweiligen Komponente.

### Abhängigkeitsrisiken: Ausfall sektoraler IDPs

Die TI-Federation verteilt die Authentisierung auf mehrere sektorale IDPs. Das schafft Redundanz in der Theorie, birgt aber Konzentrationsrisiken in der Praxis: Wenn ein sektoraler IDP, der für viele Kassen zuständig ist, ausfällt, sind alle über ihn angebundenen Leistungserbringer nicht mehr authentisierbar.

Am **10. Februar 2026** kam es zu zwei voneinander unabhängigen Störungen:

1. **IBM sektoraler IDP**: Der sektorale IDP der IBM Deutschland GmbH fiel ab ca. 3:05 Uhr aus. Vermutliche Ursache war ein Rauchmelder-Problem in einem Frankfurter Rechenzentrum, das zu einem automatischen Shutdown führte. Behebung gegen 11:00 Uhr. Dauer: ca. 8 Stunden. Betroffen waren **Versicherte**, die sich über die [[Gesundheits-ID]] via diesen sektoralen IDP authentisierten. Für sie war der Zugang zu TI-Diensten wie [[ePA]] während des Ausfalls nicht möglich.

2. **T-Systems VPN-Zugangsdienst**: Parallel fiel der VPN-Zugangsdienst von T-Systems aus, der für die Netzwerkkonnektivität von Leistungserbringern in die TI zuständig ist. Betroffen waren Arztpraxen und andere Einrichtungen, die über diesen Zugangsdienst mit der TI verbunden sind. Die beiden Vorfälle waren technisch unabhängig voneinander, trafen die TI jedoch am selben Tag.

Am **12. Februar 2026** folgte ein weiterer Ausfall: Der **sektorale IDP von T-Systems** fiel aus und traf Versicherte der **Barmer** und der **AOK**, die ihre [[Gesundheits-ID]] über den T-Systems-IDP nutzen. Für diese Versicherten war während des Ausfalls keine kartenlose Authentifizierung an TI-Diensten möglich. Der Vorfall trat nur zwei Tage nach dem IBM-Ausfall auf und verdeutlicht, dass in einer kurzen Woche gleich drei unabhängige TI-Infrastrukturkomponenten ausfielen.

Die Vorfälle Mitte Februar 2026 verdeutlichen die Abhängigkeit kritischer TI-Anwendungen von einzelnen Infrastrukturanbietern. Die Konzentration vieler Versicherter auf wenige sektorale IDP-Betreiber schafft Klumpenrisiken: Ein Ausfall bei IBM oder T-Systems trifft gleichzeitig mehrere große Krankenkassen und deren Versicherte.

> [!klinik-integration] Klinik-Integration: IDP-Authentifizierung im Krankenhaus
> **KIS-Kontext:** Krankenhäuser authentifizieren sich gegenüber TI-Diensten primär über die [[SMC-B]]-Karte der Einrichtung, nicht über sektorale IDPs. Der Ausfall eines sektoralen IDPs betrifft daher direkt die Patienten (kein Zugang zur [[ePA]] per [[Gesundheits-ID]]), aber nicht die Authentifizierung des Krankenhauses selbst.
>
> **GesundheitsID und Patientenaufnahme:** Ab 2026 gilt die GesundheitsID gleichwertig zur eGK. Im Krankenhaus bedeutet das: Patienten können sich bei stationärer Aufnahme ohne physische eGK über die App ihrer Krankenkasse identifizieren. Das KIS muss diesen Fall im Aufnahme-Workflow unterstützen. Klären Sie mit dem KIS-Hersteller, ob die Aufnahme mit GesundheitsID-Verifikation bereits implementiert ist.
>
> **Ausfallszenario 24/7-Betrieb:** Fällt ein sektoraler IDP aus, können betroffene Patienten nicht auf ihre ePA zugreifen. Das Krankenhaus kann klinische Daten dennoch weiter in die ePA einstellen, wenn die eigene SMC-B-basierte Verbindung intakt ist. Dokumentieren Sie IDP-Ausfälle im IT-Notfallprotokoll. Die Behandlung läuft unabhängig von IDP-Verfügbarkeit weiter. ePA-Abrufe bei Aufnahme sollten als "Best Effort" und nicht als Voraussetzung für die Behandlung eingestuft werden.
>
> **Redundanz:** Wenn das Krankenhaus eigene TI-Verbindungen über mehrere Zugangsprovider betreibt (z.B. T-Systems und einen zweiten Anbieter), reduziert sich das Risiko eines vollständigen TI-Ausfalls. Prüfen Sie, ob ein redundanter TI-VPN-Zugangspfad für Ihre Einrichtung wirtschaftlich vertretbar ist.

> [!praxis-tipp] Praxis-Tipp: Wenn der IDP ausfällt, was dann?
> Ein IDP-Ausfall betrifft in Ihrer Praxis hauptsächlich Patienten, die ihre [[Gesundheits-ID]] (kartenlos) nutzen. Für diese Patienten funktioniert die Authentifizierung an [[ePA]] und [[E-Rezept]]-App nicht. Was noch funktioniert und was nicht:
>
> **Was weiter funktioniert:**
> - E-Rezept über die [[eGK]] einlösen: Der Weg über die physische Karte ist vom IDP-Ausfall nicht betroffen. Patienten können E-Rezepte mit der eGK in der Apotheke einlösen.
> - E-Rezept per Ausdruck: Drucken Sie den 2D-Code auf Wunsch aus. Das ist auch bei TI-Störungen möglich.
> - Kassenärztliche Versorgung allgemein: Behandlung und Abrechnung laufen weiter. Der IDP-Ausfall betrifft den Zugang zu TI-Diensten, nicht die Behandlung.
>
> **Was nicht funktioniert:**
> - [[ePA]]-Zugriff über Gesundheits-ID: Kein Zugang für betroffene Versicherte bis zur Behebung.
> - eArztbrief versenden und empfangen über KIM: Prüfen Sie, ob [[KIM]] eigenständig läuft oder von der TI-Verbindung abhängt (bei TI-Netzwerkausfall auch betroffen).
>
> Informieren Sie Ihr Team: Hängen Sie bei Störungen kurz eine Mitteilung ins Wartezimmer. Patienten mit Gesundheits-ID können die Behandlung mit eGK fortführen. Stören Sie sich nicht, wenn die ePA-App am Empfang nicht reagiert. Das ist ein Infrastrukturproblem, kein Fehler Ihres Systems.

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
