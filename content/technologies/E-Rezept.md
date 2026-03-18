---
title: E-Rezept
audience: [technical, non-technical]
tags: [anwendung, e-rezept, verordnung]
aliases: [Elektronisches Rezept, eRezept]
maturity: wachsend
---

# E-Rezept

Das **E-Rezept** ist die digitale Form der ärztlichen Verordnung. Seit dem **1. Januar 2024** ist es für verschreibungspflichtige Arzneimittel in der gesetzlichen Krankenversicherung verpflichtend.

## Erklärt für Einsteiger

Früher hat der Arzt ein Rezept auf einen rosa Zettel geschrieben, und du hast den Zettel zur Apotheke gebracht. Jetzt macht der Arzt das digital: Er erstellt das Rezept am Computer, unterschreibt es elektronisch, und es wird auf einen sicheren Server geschickt. In der Apotheke steckst du einfach deine Gesundheitskarte ein, und die Apotheke kann dein Rezept abrufen. Oder du nutzt die E-Rezept-App auf deinem Handy.

## Überblick

Laut dem **TI-Atlas 2025** (gematik / IGES Institut, veröffentlicht 24. November 2025, Befragung von über 6.600 Einrichtungen und 1.400 Bürgerinnen und Bürgern) halten **90 Prozent der GKV-Versicherten das E-Rezept für sinnvoll**, und **87 Prozent sind damit zufrieden**.

Das E-Rezept wird digital erstellt, signiert und kann auf drei Wegen eingelöst werden:

1. **[[eGK]] einstecken** in der Apotheke
2. **E-Rezept-App** von gematik auf dem Smartphone (braucht NFC-fähiges Handy und Gesundheitskarten-PIN)
3. **Papierausdruck** mit Sammelcode (Datamatrix-Code)

### Gültigkeit
- 28 Tage für Erstattung durch die Krankenkasse
- Danach noch als Selbstzahler-Rezept einlösbar (bis zu 3 Monate nach Ausstellung)
- Eingelöste Rezepte werden nach 100 Tagen automatisch gelöscht
- Nicht eingelöste Rezepte werden 10 Tage nach Ablauf gelöscht

### Was ist schon live?
- Verschreibungspflichtige Arzneimittel (Pflicht)
- Selbstzahler-Rezepte
- Zytostatika-Zuweisungen an Apotheken
- Rezepte für Privatversicherte
- [[DiGA]]-Verordnungen (Digitale Gesundheitsanwendungen, seit Oktober 2025)

### Was kommt noch?
- **Wave-10-Anschluss an MyHealth@EU (2026)**: Deutschland plant die grenzüberschreitende E-Rezept-Einlösung im EU-Ausland über den [[NCPeH]]. Technische Grundlage ist die Spezifikation gemF_eRp_EU V1.0.0 (NCPeH_24_2, März 2025). Der Zugangsmechanismus für ausländische Leistungserbringer nutzt einen 6-stelligen alphanumerischen Code zusammen mit der Versicherten-ID.
- E-Rezept-Anforderung und Übermittlung via [[KIM]]
- T-Rezepte (teratogene Stoffe, z.B. Lenalidomid): Spezifikation seit August 2025 veröffentlicht, Rollout-Start Mitte Q4/2026
- Häusliche Krankenpflege und außerklinische Intensivpflege: Pflicht ab 1. Juli 2026
- Hilfsmittelverordnungen (Orthesen, Rollstühle etc.): Pflicht ab 1. Juli 2027
- Heilmittelverordnungen ([[eVO]], Physiotherapie, Ergotherapie, Logopädie): Verordner müssen ab 1. Januar 2027 elektronische Heilmittelverordnungen ausstellen. Die TI-Anbindungspflicht für Heilmittelerbringer (Physiotherapeuten, Ergotherapeuten, Logopäden etc.) wurde vom 1. Januar 2026 auf den **1. Oktober 2027** verschoben. Begründung: Die elektronische Heilmittelverordnung (eVO) ist noch nicht verfügbar. Pflicht zur Einlösung ab 2028.
- E-BtM-Rezept (Betäubungsmittel): Pilotstart frühestens Q4/2026, verpflichtende Einführung voraussichtlich 2027
- Grenzüberschreitende Einlösung in der EU

## Architektur

Der [[Fachdienst|E-Rezept-Fachdienst]] ist ein zentraler Dienst in der [[Telematikinfrastruktur]].

### Ablauf
1. Arzt erstellt Verordnung im [[PVS|Praxisverwaltungssystem (PVS)]]
2. Verordnung wird mit qualifizierter elektronischer Signatur ([[QES]]) via [[HBA]]/[[SMC-B]] signiert
3. Verordnung wird über die TI an den E-Rezept-Fachdienst übertragen
4. Versicherter weist Verordnung der Apotheke zu (per App, eGK oder Ausdruck)
5. Apotheke ruft Verordnung ab und gibt das Medikament aus

## Technische Details
- Datenformat: [[FHIR]] R4 ([[KBV]]-Profile)
- Transport: HTTPS über [[Telematikinfrastruktur]]
- Signatur: [[QES|Qualifizierte elektronische Signatur]], geprüft bei der Abgabe
- Zulassung: Hersteller müssen die Tiger-Testsuite bestehen und Ergebnisse über das Titus-Portal einreichen

## Sicherheit

Jedes E-Rezept trägt eine qualifizierte elektronische Signatur. Apotheken prüfen diese bei der Abgabe. Ein Rezept kann nur einmal eingelöst werden, was Fälschungssicherheit gewährleistet.

## Betriebsstabilität und Kritik

Im März 2026 forderte ABDA-Geschäftsführerin Claudia Korf in einem Schreiben an die [[gematik]] eine deutlich höhere Ausfallsicherheit der [[Telematikinfrastruktur]]. Hintergrund waren mehrere TI-Ausfälle Anfang März 2026, die E-Rezept, [[ePA]] und [[KIM]] für viele Apotheken und Praxen zeitweise unnutzbar machten. Apotheken, die mangels Offline-Fallback Patienten abweisen mussten, bezifferten den wirtschaftlichen Schaden als erheblich. Der Ausfall gilt als Mitauslöser für den bundesweiten Apothekenstreiktag am 23. März 2026, den die ABDA-Mitgliederversammlung am 25. Februar 2026 beschlossen hatte. Die gematik verwies in ihrer Antwort auf die OneRoadmap mit PoPP und VSDM 2.0 als geplante Stabilitätsverbesserungen.

## Verknüpfungen

- Verordnungsdaten fließen in die [[ePA]]
- Nutzt [[Konnektoren]] für die TI-Anbindung
- Benachrichtigungen via [[KIM]]
- Einlösung über [[eGK]]
- Einlösung bei Online-Apotheken via [[CardLink]]
- Signatur über [[SMC-B]] und [[HBA]]
- Grenzüberschreitende Nutzung via [[NCPeH]] (MyHealth@EU)

## Quellen

- [E-Rezept - Fachportal](https://fachportal.gematik.de/anwendungen/elektronisches-rezept)
- [E-Rezept - gematik.de](https://www.gematik.de/anwendungen/e-rezept)
- [TI-Atlas 2025 | gematik](https://www.gematik.de/newsroom/news-detail/meldung-ti-atlas)
