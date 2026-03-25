---
title: ePass
audience: [technical, non-technical]
tags: [technologies, authentisierung, epa, nfc, identifikation]
aliases: [ePass-Verfahren, Nect ePass, NFC-Identifikation ePA]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, patient, kasse, hersteller]
  interests: [compliance, patient, technik]
maturity: wachsend
---

# ePass

Der **ePass** ist ein NFC-basiertes Identifikationsverfahren für TI-Dienste, das den NFC-Chip eines deutschen Personalausweises oder Reisepasses per Smartphone ausliest und damit den Zugang zur [[ePA]] und anderen TI-Diensten ermöglicht.

## Erklärt für Einsteiger

Bisher musstest du, um deine elektronische Patientenakte zu nutzen, entweder in die Arztpraxis gehen, deine Gesundheitskarte und PIN parat haben oder einen Video-Ident-Anruf machen. Der ePass macht das einfacher: Du hältst deinen Personalausweis an die Rückseite deines Smartphones, nimmst ein kurzes Selfie-Video auf, und schon bist du identifiziert. Kein Anruf, kein Behördengang, kein Wartezimmer.

## Überblick

Der ePass wurde von der **Nect GmbH** (Hamburg) entwickelt und ist seit dem **25. März 2026** verfügbar. Der Dienst wird über **BITMARCK** bereitgestellt und steht damit den Versicherten von rund **80 Prozent der gesetzlichen Krankenkassen** zur Verfügung.

Der ePass ist der dritte Authentifizierungsweg für TI-Dienste neben der [[eGK]] (Gesundheitskarte mit Kartenterminal) und der [[Gesundheits-ID]] (al.vi, app-basierte Identität der Krankenkasse). Er ersetzt diese Verfahren nicht, sondern ergänzt sie als niedrigschwellige Alternative.

### Rechtsgrundlage

Rechtsgrundlage ist das **[[BEEP-Gesetz]]** (Gesetz zur Befugniserweiterung und Entbürokratisierung in der Pflege), das am **1. Januar 2026** in Kraft getreten ist. Das BEEP-Gesetz erweitert die zulässigen Identifikationsverfahren für den Zugang zu TI-Diensten und ermöglicht damit das ePass-Verfahren.

### Einordnung im TI-Authentifizierungssystem

| Verfahren | Voraussetzung | Kanal |
|---|---|---|
| [[eGK]] + PIN | Gesundheitskarte, Kartenterminal | Praxis |
| [[Gesundheits-ID]] | Smartphone, Krankenkassen-App | App |
| ePass | Smartphone mit NFC, Personalausweis/Reisepass | App |

## Technische Details

### Ablauf des Identifikationsverfahrens

Das ePass-Verfahren läuft in zwei Stufen ab:

1. **NFC-Auslesen**: Das Smartphone liest den NFC-Chip des Ausweisdokuments kontaktlos aus. Dabei werden die auf dem Chip gespeicherten Daten (biometrisches Foto, Personalien) gelesen. Unterstützt werden: Personalausweise ab Ausstellungsdatum August 2021 und Reisepässe ab 2005, die über ein ePass-Symbol (goldener Chip) auf der Vorderseite verfügen.
2. **Biometrischer Abgleich**: Der Nutzer nimmt ein kurzes Selfie-Video auf. Die Nect-Software gleicht das Gesichtsbild des Videos mit dem biometrischen Foto auf dem Chip ab (Liveness-Prüfung). Das Ergebnis ist ein kryptografisch gesicherter Identitätsnachweis.

### Technische Grundlagen

- **ICAO Doc 9303**: Internationaler Standard für maschinenlesbare Reisedokumente (MRTDs), auf dem die NFC-Chips von Ausweisdokumenten basieren.
- **Basic Access Control (BAC) / Password Authenticated Connection Establishment (PACE)**: Kryptografische Protokolle, die sicherstellen, dass der Chip nur nach optischem Auslesen des Ausweises per Kamera entsperrt wird (gegen unbefugtes Auslesen).
- **Active Authentication**: Signaturprüfung des Chips, verhindert Klonen des Ausweisdokuments.

### Zusammenspiel mit eID

Der **[[eID]]**-Dienst (Online-Ausweisfunktion des Personalausweises, §18 PAuswG) und der ePass sind verwandte, aber unterschiedliche Verfahren:
- **[[eID]]** nutzt den Chip ebenfalls, erfordert aber die sechsstellige PIN des Personalausweises und ein zugelassenes eID-Lesegerät oder eine AusweisApp.
- **ePass** (Nect-Verfahren) benötigt keine PIN. Es kombiniert NFC-Chip-Auslesen mit einem biometrischen Selfie-Video. Das Verfahren gilt als "eingeschränkte" elektronische Identifikation ohne PIN-Nachweis.

Der ePass ist ein ergänzender Identifikationsweg, der für mehr Nutzer zugänglich ist. Für höchste Sicherheitsanforderungen (z.B. qualifizierte elektronische Signatur) bleibt [[eID]] oder [[QES]] maßgeblich.

### Datenschutz

Nect verarbeitet biometrische Daten (Gesichtsbild). Diese Daten werden laut Nect nach erfolgreicher Identifikation nicht dauerhaft gespeichert. Die Verarbeitung unterliegt der [[DSGVO]] und dem BDSG. Nect ist als Dienstleister nach Art. 28 DSGVO gebunden.

## Verknüpfungen

- [[ePA]] (primärer Anwendungsfall: Zugang zur elektronischen Patientenakte)
- [[Gesundheits-ID]] (al.vi; paralleler Authentifizierungsweg für TI-Dienste)
- [[eGK]] (klassischer Authentifizierungsweg; ePass ergänzt, ersetzt nicht)
- [[BEEP-Gesetz]] (gesetzliche Grundlage des ePass-Verfahrens)
- [[eID]] (Online-Ausweisfunktion; verwandtes, PIN-basiertes Verfahren)
- [[DSGVO]] (Datenschutzrahmen für biometrische Datenverarbeitung)

## Quellen

- [gematik Fachportal: Identifikationsverfahren mit Bestätigung der sicherheitstechnischen Eignung (inkl. Nect ePass)](https://fachportal.gematik.de/fileadmin/Fachportal/Identitaeten/Identifikationsverfahren_mit_sicherheitstechnischer_Eignung.pdf)
- [Presseportal: BITMARCK - Neues Identifizierungsverfahren ePass (März 2026)](https://www.presseportal.de/pm/181613/6237230)
- [healthcare-digital.de: ePass vereinfacht Zugang zur ePA](https://www.healthcare-digital.de/epass-vereinfacht-zugang-zur-epa-a-4cf2ce59ce59e9c10231ef31660b3ca5/)
- [Startbase: Offizieller Startschuss für Nect Ident mit ePass](https://www.startbase.com/news/offizieller-startschuss-fuer-nect-ident-mit-epass/)
- [Deutsches Ärzteblatt: Erstes Verfahren zum vereinfachten ePA-Zugang kommt auf den Markt](https://www.aerzteblatt.de/news/erstes-verfahren-zum-vereinfachten-epa-zugang-kommt-auf-den-markt-34d29523-9376-4f55-8d27-60ce8b1a9521)
