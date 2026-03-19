---
title: TA1
audience: [technical]
tags: [standards, abrechnung, apotheke, gkv, datenaustausch]
aliases: [Technische Anlage 1, TA 1, Apothekenabrechnung, ARZ-Format]
maturity: setzling
relevance:
  sectors: [apotheke, kasse, hersteller, it-dienstleister]
  interests: [technik, compliance]
---

# TA1

Die **Technische Anlage 1 (TA1)** ist das standardisierte Datenformat für die elektronische Abrechnungskommunikation zwischen Apotheken, Apothekenrechenzentren und GKV-Krankenkassen.

## Erklärt für Einsteiger

Wenn eine Apotheke ein Rezept einlöst, muss sie am Ende des Monats der Krankenkasse sagen: "Ich habe diese Medikamente an diesen Versicherten abgegeben, bitte überweise mir das Geld." Das funktioniert digital und nach einem festen Format. Die TA1 legt genau fest, wie diese Datei aussehen muss: welches Feld wo steht, wie Fehlercodes aussehen und wie die Abrechnung geprüft wird. Ohne TA1 könnten Apothekenrechenzentren und Kassen nicht automatisch mit den Millionen von Abrechnungssätzen umgehen.

## Überblick

Die TA1 wird gemeinsam vom **GKV-Spitzenverband** und dem **[[DAV|Deutschen Apothekerverband (DAV)]]** herausgegeben. Sie ist als Anlage des **Rahmenvertrages nach § 129 SGB V** verbindlich.

Die TA1 definiert:

- Das Dateiformat für die Rezeptabrechnungsdaten (Struktur, Feldlängen, Codierungen)
- Die Prüfregeln, die [[Apothekenrechenzentrum|Apothekenrechenzentren (ARZ)]] bei der Eingangsprüfung anwenden
- Die Fehlercodeliste für zurückgewiesene Abrechnungssätze
- Die Kommunikationsabläufe zwischen Apotheke, ARZ und Krankenkasse

### Beteiligte im Abrechnungsfluss

```
Apotheke → Apothekenrechenzentrum (ARZ) → Krankenkasse
```

1. Die Apotheke erfasst Rezeptdaten in ihrem [[AVS]] (Apothekenverwaltungssystem).
2. Das AVS erzeugt nach Monatsabschluss eine TA1-konforme Datei.
3. Das ARZ prüft die Datei auf TA1-Konformität und rechnet gegenüber den Kassen ab.
4. Die Krankenkasse zahlt auf Basis der geprüften TA1-Daten.

### Bedeutung im E-Rezept-Kontext

Mit der Einführung des [[E-Rezept]]s blieb die TA1 als Abrechnungsformat erhalten. Das E-Rezept liefert strukturierte Verordnungsdaten im [[FHIR]]-Format, aber die Abrechnung gegenüber der Krankenkasse läuft weiterhin über den TA1-Datenfluss. Die Apothekenrechenzentren haben ihre Systeme so angepasst, dass sie FHIR-Dispensierdaten aus dem E-Rezept-Fachdienst entgegennehmen und für die TA1-Abrechnung aufbereiten.

## Technische Details

### Dateistruktur

> [!interesse-technik]
> Die TA1 ist eine zeichenbasierte Textdatei mit fixen Feldpositionen und -längen. Verbindliche Spezifikation: Rahmenvertrag nach § 129 [[SGB-V]] zwischen [[GKV-Spitzenverband]] und [[DAV]]. Die langfristige Migration auf [[FHIR]] ist geplant, ein verbindlicher Termin steht (Stand 2026) noch nicht fest.

Die TA1-Datei ist eine zeichenbasierte Textdatei mit fester Satzstruktur. Sie besteht aus mehreren Satzarten:

- **Vorsatz (VS)**: Dateikopf mit Absender (ARZ), Empfänger (Krankenkasse), Erstellungsdatum und Version
- **Nutzabrechnungssatz (NA)**: Ein Satz je abgerechnetem Arzneimittel oder Hilfsmittel, enthält PZN, Menge, Preis, Skonti, Zuzahlung, Verordnungsdatum, Arztinformationen
- **Nachsatz (NS)**: Dateiabschluss mit Prüfsummen

Die Feldlängen und Positionen sind fix definiert. Jedes Feld hat eine festgelegte Zeichenlänge und einen definierten Inhalt (z.B. [[KVNR]] des Versicherten, [[PZN]], Apothekenidentifikationsnummer).

### Prüfregeln und Retaxation

Das ARZ führt bei Eingang der TA1-Datei automatisierte Prüfungen durch:

- Formale Prüfungen (Pflichtfelder vorhanden, Feldlängen korrekt, Prüfziffern valide)
- Inhaltliche Plausibilitätsprüfungen (z.B. [[PZN]] bekannt, Preis korrekt laut Lauertaxe)
- Versichertenprüfung über die [[KVNR]]

Scheitert eine Prüfung, wird der Satz mit einem Fehlercode (Retaxationscode) an die Apotheke zurückgegeben. Die Apotheke muss den Fehler korrigieren oder akzeptieren, dass der Satz nicht vergütet wird. Dieses Verfahren wird als **Retaxation** bezeichnet und ist ein häufiger Streitpunkt zwischen Apotheken und Krankenkassen.

### Apothekenrechenzentren (ARZ)

Die wichtigsten Apothekenrechenzentren in Deutschland:

- **NOVENTI**: Marktführer (nach Branchenschätzungen ca. 50 % der GKV-Rezepte), entstanden aus der Fusion von VSA (München), ALG (Datteln) und SARZ (Schwerin) zwischen 2016 und 2018. Kooperationspartner von ARZ Darmstadt seit 2018.
- **ARZ Darmstadt**: eigenständiges, apothekergetragenes Rechenzentrum; kooperiert seit 2018 mit NOVENTI bei bestimmten Softwareprojekten, ist aber rechtlich und operativ unabhängig.
- **AvP** (insolvent 2020; Teile des Geschäftsbetriebs wurden von RZH, einer Tochter der ARZ-Haan-Gruppe, übernommen)
- **DAD** (Deutsches Apothekenrechenzentrum der ABDA)
- **ARZ Haan**
- **GRZ** (Gesundheitsrechenzentrum)

ARZs sind nicht nur Abrechnungsdienstleister: Sie prüfen auf Retaxationsrisiken und bieten Apotheken Beratung zu korrekter Rezepterfassung an.

### Verhältnis zur FHIR-basierten E-Rezept-Abrechnung

Das [[E-Rezept]] überträgt die Verordnung und Dispensierung im FHIR-Format über den E-Rezept-Fachdienst der [[gematik]]. Die TA1-Abrechnung ist davon konzeptionell getrennt:

1. Apotheke ruft E-Rezept-Token per FHIR vom Fachdienst ab
2. Apotheke dispensiert und erfasst Dispensierdaten im [[AVS]]
3. AVS erzeugt TA1-konforme Abrechnungssätze für das ARZ
4. ARZ rechnet gegenüber den Krankenkassen nach TA1 ab

Die [[gematik]] und der [[GKV-Spitzenverband]] arbeiten an einer langfristigen Modernisierung des Abrechnungsformats, bei der FHIR die TA1 schrittweise ablösen soll. Ein konkreter Migrationspfad ist zum Stand 2026 noch nicht festgelegt.

### Abgrenzung: TA7 und andere Technische Anlagen

Neben der TA1 gibt es weitere Technische Anlagen:

- **TA7**: Datenformat für die Abrechnung von Hilfsmitteln durch Leistungserbringer (nicht Apotheken)
- **TA2**: Abrechnungsdaten für Verbandmittel und Kompressionsmittel

Die TA1 ist die mengenmäßig bedeutsamste, da sie alle GKV-Arzneimittelrezepte abdeckt.

## Verknüpfungen

- [[Apothekenrechenzentrum]] (ARZ; prüft und übermittelt die TA1-Abrechnungsdaten an die Krankenkassen)
- [[AVS]] (Apothekenverwaltungssystem; erzeugt die TA1-Abrechnungsdaten)
- [[E-Rezept]] (Verordnungsformat; Dispensierdaten fließen in die TA1-Abrechnung ein)
- [[PZN]] (Pharmazentralnummer; Pflichtfeld in jedem TA1-Abrechnungssatz)
- [[KVNR]] (Krankenversichertennummer; identifiziert den Versicherten in der TA1)
- [[GKV-Spitzenverband]] (Ko-Herausgeber der TA1 gemeinsam mit dem DAV)
- [[ABDA]] (Deutscher Apothekerverband; Ko-Herausgeber der TA1)
- [[gematik]] (betreibt den E-Rezept-Fachdienst, dessen Daten in die TA1-Abrechnung einfließen)
- [[FHIR]] (modernes Datenformat des E-Rezepts; langfristiger Migrationspfad von TA1)

## Quellen

- [Rahmenvertrag nach § 129 SGB V – DAV/GKV-Spitzenverband](https://www.gkv-spitzenverband.de/krankenversicherung/arzneimittel/abgabe_von_arzneimitteln_in_apotheken/abgabe_von_arzneimitteln.jsp)
- [ABDA: Technische Informationen zur Apothekenabrechnung](https://www.abda.de/fuer-apotheker/apothekenbetrieb/arzneimittelversorgung/)
- [gematik: E-Rezept Fachdienst – Abrechnungsfluss](https://fachportal.gematik.de/anwendungen/e-rezept)
- [NOVENTI: Apothekenabrechnung und TA1](https://www.noventi.de/apotheke/abrechnung/)
