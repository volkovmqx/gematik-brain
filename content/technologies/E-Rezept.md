---
title: E-Rezept
audience: [technical, non-technical]
tags: [anwendung, e-rezept, verordnung]
---

# E-Rezept

Das **E-Rezept** ist die digitale Form der arztlichen Verordnung. Seit dem **1. Januar 2024** ist es fur verschreibungspflichtige Arzneimittel in der gesetzlichen Krankenversicherung verpflichtend.

## Erklart fur Einsteiger

Fruher hat der Arzt ein Rezept auf einen rosa Zettel geschrieben, und du hast den Zettel zur Apotheke gebracht. Jetzt macht der Arzt das digital: Er erstellt das Rezept am Computer, unterschreibt es elektronisch, und es wird auf einen sicheren Server geschickt. In der Apotheke steckst du einfach deine Gesundheitskarte ein, und die Apotheke kann dein Rezept abrufen. Oder du nutzt die E-Rezept-App auf deinem Handy.

## Uberblick

Das E-Rezept wird digital erstellt, signiert und kann auf drei Wegen eingelost werden:

1. **[[eGK]] einstecken** in der Apotheke
2. **E-Rezept-App** von gematik auf dem Smartphone (braucht NFC-fahiges Handy und Gesundheitskarten-PIN)
3. **Papierausdruck** mit Sammelcode (Datamatrix-Code)

### Gultigkeit
- 28 Tage fur Erstattung durch die Krankenkasse
- Danach noch als Selbstzahler-Rezept einlosbar (bis zu 3 Monate nach Ausstellung)
- Eingeloste Rezepte werden nach 100 Tagen automatisch geloscht
- Nicht eingeloste Rezepte werden 10 Tage nach Ablauf geloscht

### Was ist schon live?
- Verschreibungspflichtige Arzneimittel (Pflicht)
- Selbstzahler-Rezepte
- Zytostatika-Zuweisungen an Apotheken
- Rezepte fur Privatversicherte

### Was kommt noch?
- DiGA-Verordnungen (Digitale Gesundheitsanwendungen)
- E-Rezept-Anforderung und Ubermittlung via [[KIM]]
- T-Rezepte (teratogene Stoffe)
- Betaubungsmittel-Rezepte (BtM)
- Grenzuberschreitende Einlosung in der EU
- Haufige Pflegevertragung
- Heil- und Hilfsmittelverordnungen

## Architektur

Der E-Rezept-Fachdienst ist ein zentraler Dienst in der [[Telematikinfrastruktur]].

### Ablauf
1. Arzt erstellt Verordnung im Praxisverwaltungssystem (PVS)
2. Verordnung wird mit qualifizierter elektronischer Signatur (QES) via HBA/[[SMC-B]] signiert
3. Verordnung wird uber die TI an den E-Rezept-Fachdienst ubertragen
4. Versicherter weist Verordnung der Apotheke zu (per App, eGK oder Ausdruck)
5. Apotheke ruft Verordnung ab und gibt das Medikament aus

### Technische Details
- Datenformat: [[FHIR]] R4 (KBV-Profile)
- Transport: HTTPS uber [[Telematikinfrastruktur]]
- Signatur: Qualifizierte elektronische Signatur, gepruft bei der Abgabe
- Zulassung: Hersteller mussen die Tiger-Testsuite bestehen und Ergebnisse uber das Titus-Portal einreichen

## Sicherheit

Jedes E-Rezept tragt eine qualifizierte elektronische Signatur. Apotheken prufen diese bei der Abgabe. Ein Rezept kann nur einmal eingelost werden, was Falschungssicherheit gewahrleistet.

## Verknupfungen

- Verordnungsdaten fliessen in die [[ePA]]
- Nutzt [[Konnektoren]] fur die TI-Anbindung
- Benachrichtigungen via [[KIM]]
- Einlosung uber [[eGK]]
- Signatur uber [[SMC-B]] und HBA

## Quellen

- [E-Rezept - Fachportal](https://fachportal.gematik.de/anwendungen/elektronisches-rezept)
- [E-Rezept - gematik.de](https://www.gematik.de/anwendungen/e-rezept)
