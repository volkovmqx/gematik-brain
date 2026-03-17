---
title: E-Rezept
audience: [technical, non-technical]
tags: [anwendung, e-rezept, verordnung]
---

# E-Rezept

Das **E-Rezept** ist die digitale Form der ärztlichen Verordnung. Seit dem **1. Januar 2024** ist es für verschreibungspflichtige Arzneimittel in der gesetzlichen Krankenversicherung verpflichtend.

## Erklärt für Einsteiger

Früher hat der Arzt ein Rezept auf einen rosa Zettel geschrieben, und du hast den Zettel zur Apotheke gebracht. Jetzt macht der Arzt das digital: Er erstellt das Rezept am Computer, unterschreibt es elektronisch, und es wird auf einen sicheren Server geschickt. In der Apotheke steckst du einfach deine Gesundheitskarte ein, und die Apotheke kann dein Rezept abrufen. Oder du nutzt die E-Rezept-App auf deinem Handy.

## Überblick

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

### Was kommt noch?
- [[DiGA]]-Verordnungen (Digitale Gesundheitsanwendungen): ab Januar 2026
- E-Rezept-Anforderung und Übermittlung via [[KIM]]
- T-Rezepte (teratogene Stoffe): Spezifikation seit August 2025 veröffentlicht, Einführung 2026 geplant
- Betäubungsmittel-Rezepte (BtM)
- Grenzüberschreitende Einlösung in der EU
- Häusliche Krankenpflege und außerklinische Intensivpflege: Pflicht ab 1. Juli 2026
- Hilfsmittelverordnungen (Orthesen, Rollstühle etc.): Pflicht ab 1. Juli 2026
- Heilmittelverordnungen (Physiotherapie, Ergotherapie, Logopädie): Pflicht ab 1. Januar 2027

## Architektur

Der [[Fachdienst|E-Rezept-Fachdienst]] ist ein zentraler Dienst in der [[Telematikinfrastruktur]].

### Ablauf
1. Arzt erstellt Verordnung im Praxisverwaltungssystem (PVS)
2. Verordnung wird mit qualifizierter elektronischer Signatur ([[QES]]) via [[HBA]]/[[SMC-B]] signiert
3. Verordnung wird über die TI an den E-Rezept-Fachdienst übertragen
4. Versicherter weist Verordnung der Apotheke zu (per App, eGK oder Ausdruck)
5. Apotheke ruft Verordnung ab und gibt das Medikament aus

### Technische Details
- Datenformat: [[FHIR]] R4 ([[KBV]]-Profile)
- Transport: HTTPS über [[Telematikinfrastruktur]]
- Signatur: [[QES|Qualifizierte elektronische Signatur]], geprüft bei der Abgabe
- Zulassung: Hersteller müssen die Tiger-Testsuite bestehen und Ergebnisse über das Titus-Portal einreichen

## Sicherheit

Jedes E-Rezept trägt eine qualifizierte elektronische Signatur. Apotheken prüfen diese bei der Abgabe. Ein Rezept kann nur einmal eingelöst werden, was Fälschungssicherheit gewährleistet.

## Verknüpfungen

- Verordnungsdaten fließen in die [[ePA]]
- Nutzt [[Konnektoren]] für die TI-Anbindung
- Benachrichtigungen via [[KIM]]
- Einlösung über [[eGK]]
- Signatur über [[SMC-B]] und [[HBA]]

## Quellen

- [E-Rezept - Fachportal](https://fachportal.gematik.de/anwendungen/elektronisches-rezept)
- [E-Rezept - gematik.de](https://www.gematik.de/anwendungen/e-rezept)
