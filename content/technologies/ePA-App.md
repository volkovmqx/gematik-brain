---
title: ePA-App
audience: [technical, non-technical]
tags: [technologie, epa, app, patient, authentisierung]
aliases: [ePA-App, Frontend des Versicherten, ePA-FdV, ePA App]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, patient, kasse, hersteller]
  interests: [technik, patient]
maturity: wachsend
---

# ePA-App

Die **ePA-App** ist die kassenspezifische Smartphone-Anwendung, über die Versicherte ihre [[ePA|elektronische Patientenakte]] verwalten, Dokumente einsehen und Zugriffsrechte steuern.

## Erklärt für Einsteiger

Stell dir vor, du hast eine digitale Mappe für alle deine Arztbriefe, Befunde und Medikamente. Die ePA-App ist die Tür zu dieser Mappe auf deinem Smartphone. Jede Krankenkasse bietet ihre eigene Version dieser App an, aber alle greifen auf dieselbe Patientenakte zu. Du entscheidest, welcher Arzt hineinschauen darf und welche Dokumente sichtbar sind.

## Überblick

Die ePA-App ist das **Frontend des Versicherten (ePA-FdV)**: die Schnittstelle zwischen Versicherten und dem zentralen [[ePA]]-Aktensystem. Jede gesetzliche Krankenkasse ist verpflichtet, ihren Versicherten eine ePA-App bereitzustellen oder über einen IT-Dienstleister bereitzustellen.

Die App ermöglicht es Versicherten:

- Dokumente hochzuladen (PDF, XML, FHIR-Ressourcen) und zu löschen
- Einrichtungen den Zugriff auf die ePA zu erlauben oder zu entziehen
- Die elektronische Medikationsliste ([[eML]]) einzusehen, die automatisch aus eingelösten [[E-Rezept|E-Rezepten]] befüllt wird
- Den [[eMP|elektronischen Medikationsplan]] einzusehen und Apothekenzugriffe zu verwalten
- Bis zu fünf Vertreter zu benennen, die im Namen des Versicherten handeln dürfen
- Protokolle einzusehen, wer auf die ePA zugegriffen hat (seit März 2026 per Push-Nachricht)
- Den [[Opt-Out-ePA|Opt-Out]] zu erklären und die ePA zu schließen

Wer keine App nutzen möchte oder kann, hat Anspruch auf eine Alternativlösung über die Krankenkasse (z.B. Webportal oder persönliche Beratung).

> [!praxis-tipp] Praxis-Tipp: Häufige Patientenfragen zur ePA-App vorbereiten
> Patienten fragen in der Praxis oft: "Welche App muss ich herunterladen?" Antwort: Die App ihrer Krankenkasse. Name und Download-Link stehen auf der Kassenseite.
>
> Typische Fragen und Antworten für Ihr Team:
> 1. "Ich habe kein Smartphone" - Hinweis auf das Webportal der Kasse geben
> 2. "Wer kann meine Akte sehen?" - Nur Praxen mit aktivem Zugriffsrecht; das steuert der Patient selbst in der App
> 3. "Kann ich Dokumente verstecken?" - Ja, einzelne Dokumente können in der App ausgeblendet werden
> 4. "Ich will keine ePA" - Widerspruch (Opt-Out) bei der Krankenkasse erklären
>
> Legen Sie einen Aushang im Wartezimmer aus. Vorlagen stellt die KBV kostenlos bereit.

### Anbieter und Zulassung

Die ePA-FdV-Anwendung muss von der [[gematik]] zugelassen sein. Mit Stand 2026 sind unter anderem folgende Apps zugelassen:

- **IBM Deutschland** (für mehrere Kassen, darunter BARMER)
- **BITMARCK** (für AOK-Kassen und viele Betriebskrankenkassen, stellt 80 Prozent der GKV-Versicherten)
- **RISE** (Research Industrial Systems Engineering)
- **Techniker Krankenkasse** (eigene App)
- **DAK-Gesundheit** (eigene App)
- **HEK** (Hanseatische Krankenkasse)

Die Apps sind für Android und iOS verfügbar. Für Versicherte ohne Smartphone können Kassen eine webbasierte Alternative anbieten.

> [!interesse-patient]
> Du musst nichts aktiv tun, um eine ePA zu haben. Seit April 2025 wird für alle GKV-Versicherten automatisch eine ePA angelegt, sofern kein Widerspruch (Opt-Out) eingelegt wurde. Die App deiner Krankenkasse kannst du im App Store oder Google Play herunterladen. Darin kannst du sehen, welche Dokumente gespeichert sind und wer darauf zugegriffen hat. Wenn du nicht möchtest, dass ein bestimmtes Dokument sichtbar ist, kannst du es in der App ausblenden oder löschen.

## Technische Details

### Authentisierung: sektoraler IDP und Gesundheits-ID

Der Zugriff auf die ePA über die App erfordert eine starke Authentisierung. Dafür sind zwei Verfahren vorgesehen:

1. **[[Sektoraler-IDP|Sektoraler IDP]]**: Jede Krankenkasse betreibt oder beauftragt einen sektoralen Identity Provider. Versicherte melden sich mit ihren Kassen-Zugangsdaten an; der sektorale IDP stellt ein Token aus, das den Zugriff auf den [[ePA]]-[[Fachdienst]] ermöglicht. Der sektorale IDP nutzt [[OIDC]] (OpenID Connect) und [[OAuth-2.0]].

2. **[[Gesundheits-ID]]**: Ab 2026 können Versicherte sich alternativ mit ihrer Gesundheits-ID (digitale Identität) am App anmelden. Die Gesundheits-ID basiert auf dem [[eID]]-Verfahren und ermöglicht eine kassenunabhängige Authentisierung.

> [!klinik-integration] Klinik-Integration: ePA-App im stationären Workflow
> **Aufnahme:** Beim stationären Aufnahme-Prozess ruft das KIS die ePA des Patienten ab: Medikationsliste ([[eML]]), Allergien, Vorbefunde. Der Zugriff läuft über das KIS-seitige ePA-Modul, nicht über die Patienten-App.
> **Station/Entlassung:** Befunde, Operationsberichte und Entlassbriefe werden via KIS-Schnittstelle als FHIR-Dokumente (IHE MHD/XDS-Profil) ins Aktensystem übertragen.
>
> **KIS-Anbindung:** Verbreitete Systeme (SAP ISH, Orbis/Dedalus, iMedOne, CGM ORBIS) bieten ePA-Module oder FHIR-Konnektoren an. Klären Sie beim Hersteller, ob das Modul für ePA 3.x (ab 2025) bereits zertifiziert ist.
> **SMC-B:** Der Krankenhausausweis (SMC-B) muss korrekt in der TI registriert sein, damit alle Abteilungszugriffe einer Institution korrekt protokolliert werden.
> **Verfügbarkeit:** Die ePA-Verbindung läuft über den Klinik-Konnektor (Highspeed-Konnektor empfohlen). Bei Konnektor-Ausfall muss ein Notfallprozess für die manuelle Patientenanamnese definiert sein.

### Kommunikation mit dem ePA-Aktensystem

Die ePA-App kommuniziert über die [[VAU|Vertrauenswürdige Ausführungsumgebung (VAU)]]. Der VAU-Kanal stellt sicher, dass auch der Betreiber des ePA-Aktensystems die übertragenen Daten nicht im Klartext lesen kann. Technisch läuft die Kommunikation über HTTPS/TLS mit einem verschlüsselten Inner-HTTP-Tunnel direkt zur VAU.

> [!dev-quickstart] Dev Quickstart: ePA-FdV Authentisierung via sektoralem IDP
> Auth-Flow: OIDC Authorization Code Flow (RFC 6749 + OpenID Connect Core 1.0)
>
> ```bash
> # 1. Discovery-Dokument des sektoralen IDP abrufen
> curl -s "https://<sek-idp-host>/.well-known/openid-configuration" \
>   -H "Accept: application/json"
>
> # 2. Authorization Request (Browser/WebView-Redirect)
> # GET https://<sek-idp-host>/auth
> #   ?response_type=code
> #   &client_id=<client_id>
> #   &redirect_uri=<redirect_uri>
> #   &scope=openid+epa
> #   &state=<random>
> #   &nonce=<random>
>
> # 3. Token Request (nach Redirect mit code)
> curl -X POST "https://<sek-idp-host>/token" \
>   -H "Content-Type: application/x-www-form-urlencoded" \
>   -d "grant_type=authorization_code&code=<auth_code>&redirect_uri=<redirect_uri>&client_id=<client_id>"
> ```
>
> - Token-Format: JWT, signiert mit ES256 (brainpoolP256r1 oder P-256)
> - Das `access_token` wird im VAU-Kanal als Inner-HTTP-Header übergeben, nicht direkt als Bearer gegen den Fachdienst
> - Referenzimplementierung sektoraler IDP: [gematik/app-gemSekIdp](https://github.com/gematik/app-gemSekIdp)
> - FdV-Modul (Java/Android): [gematik/ref-ePA-FdV-Modul](https://github.com/gematik/ref-ePA-FdV-Modul)
> - FdV-ModulKit: [gematik/ref-ePA-FdV-ModulKit](https://github.com/gematik/ref-ePA-FdV-ModulKit)
> - Spec: gemSpec_IDP_Sek, gemSpec_IDP_FD

### Berechtigungsmanagement

> [!praxis-tipp] Praxis-Tipp: ePA-Zugriff in der Praxis aktivieren
> Ihre Praxis kann nur auf die ePA zugreifen, wenn der Patient aktiv zugestimmt hat. Das Zugriffsrecht wird entweder in der App des Patienten erteilt oder über die Ombudsstelle der Krankenkasse.
>
> In Ihrer Praxis bedeutet das:
> - Steckt der Patient die eGK, wird ab Mitte 2026 automatisch ein PoPP-Token erzeugt. Ihr PVS baut dann den ePA-Zugriff auf.
> - Hat der Patient kein Zugriffsrecht erteilt: Zeigen Sie ihm, wie er in seiner App die Praxis freischaltet. Das dauert ca. 1 Minute.
> - Häufiger Fehler: Praxis sieht "kein Zugriff", obwohl der Patient zustimmt. Ursache ist oft ein abgelaufenes PVS-Update. Prüfen Sie, ob Ihr PVS die aktuelle ePA-Version unterstützt.

Versicherte können in der App granulare Zugriffsrechte vergeben:

- Zugriff für einzelne Einrichtungen freigeben oder sperren
- Zugriff auf bestimmte Dokumententypen einschränken
- Zeitlich begrenzte Zugriffsberechtigungen erteilen

Das Berechtigungsmodell basiert auf dem im [[SGB-V]] (§ 341ff.) definierten Einwilligungs- und Widerspruchsrecht.

> [!klinik-integration] Klinik-Integration: Berechtigungssteuerung im Klinikbetrieb
> Im Unterschied zur ambulanten Praxis erhält ein stationäres Krankenhaus als Institution ein einheitliches Zugriffsrecht auf die ePA des Patienten. Das ist für den 24/7-Betrieb relevant: Ärztlicher Dienst, Pflegedienst und Nachtdienst greifen über dasselbe institutionelle Zugriffsrecht zu.
>
> **Prozesshinweis Aufnahme:** Erklärt ein aufgenommener Patient den Opt-Out oder schränkt die Berechtigung ein, muss das KIS dies im Patientendatensatz vermerken. Fallback: manuelle Anamnese dokumentieren.
> **Datenschutz:** Protokollpflicht nach § 309 SGB V. Das KIS muss alle ePA-Zugriffe revisionssicher speichern. Prüfen Sie, ob Ihr KIS die gematik-Vorgaben zur Zugriffsprotokollierung vollständig umsetzt.

> [!patientenrecht] Patientenrecht: Zugriffsrechte selbst steuern
> Sie entscheiden, wer Ihre ePA lesen darf. Keine Praxis und keine Apotheke kann ohne Ihre Erlaubnis auf Ihre Akte zugreifen.
>
> **So verwalten Sie den Zugriff in der App:**
> 1. Öffnen Sie die ePA-App Ihrer Krankenkasse
> 2. Tippen Sie auf "Zugriffsrechte" oder "Einrichtungen"
> 3. Sie sehen, welche Praxen und Apotheken gerade Zugriff haben
> 4. Tippen Sie auf eine Einrichtung, um den Zugriff zu entziehen
> 5. Einzelne Dokumente können Sie ausblenden oder dauerhaft löschen
>
> **Protokoll einsehen:** Unter "Zugriffe" sehen Sie, wer Ihre Akte wann gelesen hat. Seit März 2026 erhalten Sie eine Push-Nachricht, wenn jemand auf Ihre ePA zugreift.
>
> Ihre Krankenkasse hat **keinen Zugriff** auf Ihre medizinischen Dokumente.

### Pseudonymisierung und Datenschutz

Die [[Pseudonymisierung]] der Versicherten-ID stellt sicher, dass das ePA-System keine Klartextidentitäten speichert. Die ePA-App selbst enthält keine Patientendaten, sondern stellt nur den gesicherten Zugang zum Aktensystem bereit.

> [!interesse-technik]
> Die ePA-FdV-Spezifikation ist Teil des gemSpec-Ökosystems der [[gematik]]. Authentisierung: OIDC Authorization Code Flow mit [[Sektoraler-IDP|sektoralem IDP]] (gemSpec_IDP_Sek). App-zu-VAU-Kommunikation: VAU-Kanal nach gemSpec_VAU_ePA. FHIR-basierte Dokumentverwaltung: IHE MHD (Mobile Access to Health Documents). Zugelassene Apps sind im gematik-Zulassungsverzeichnis gelistet: [fachportal.gematik.de/zulassung](https://fachportal.gematik.de/zulassung).

## Verknüpfungen

- [[ePA]] (das Aktensystem, auf das die App zugreift)
- [[Sektoraler-IDP]] (Identity Provider für die App-Authentisierung)
- [[Gesundheits-ID]] (alternative Authentisierung ab 2026)
- [[VAU]] (gesicherter Kommunikationskanal zwischen App und Aktensystem)
- [[eML]] (elektronische Medikationsliste, in der App einsehbar)
- [[eMP]] (elektronischer Medikationsplan, in der App einsehbar)
- [[Opt-Out-ePA]] (Widerspruch gegen die ePA, über die App oder bei der Kasse möglich)
- [[OIDC]] (Protokoll für die Authentisierung)
- [[OAuth-2.0]] (Autorisierungsprotokoll)
- [[Pseudonymisierung]] (Datenschutzmechanismus im ePA-System)
- [[GFF]] (Gesellschaft für Freiheitsrechte; kritisch zur Datenschutzarchitektur der ePA)
- [[VZD]] (Verzeichnisdienst; für Auffindbarkeit von Leistungserbringern in der App)

## Quellen

- [ePA für alle - Fachportal gematik](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [Zulassungsübersicht ePA-FdV - Fachportal gematik](https://fachportal.gematik.de/zulassung)
- [gematik: ePA für alle – Versicherte](https://www.gematik.de/anwendungen/epa)
- [DigiG (Digital-Gesetz) - Bundesgesetzblatt 2023](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/digitale-versorgungsgesetz.html)
