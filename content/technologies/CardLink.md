---
title: CardLink
audience: [technical, non-technical]
tags: [anwendung, erezept, egk, apotheke, nfc]
aliases: [eGK CardLink, Card Link]
relevance:
  sectors: [apotheke, startup, hersteller, patient]
  interests: [compliance, business, technik]
---

# CardLink

**CardLink** ist ein Verfahren, mit dem Versicherte ihr [[E-Rezept]] per NFC-Tap ihrer [[eGK]] auf dem Smartphone bei Online-Apotheken einlösen können, ohne eine PIN eingeben zu müssen.

## Erklärt für Einsteiger

Normalerweise muss man zum Einlösen eines Rezepts entweder zur Apotheke gehen oder sich digital ausweisen. Mit CardLink geht das einfacher: Man hält seine Krankenkassenkarte (die [[eGK]]) kurz an die Rückseite des Smartphones. Das Telefon liest die Karte per NFC aus, und schon kann man das Rezept in der App der Online-Apotheke einlösen. Keine PIN, keine weitere App nötig. Es ist wie das kontaktlose Bezahlen mit der Bankkarte, aber für Rezepte.

## Überblick

CardLink wurde eingeführt, um die Lücke zwischen dem [[E-Rezept]]-System und der Nutzung bei Online-Apotheken zu schließen. Bis eine breite Nutzung der [[Gesundheits-ID]] oder des [[PoPP]]-Dienstes etabliert ist, bietet CardLink einen zugänglichen Übergangsweg für Versicherte.

Das Verfahren wurde zunächst für ausgewählte Anbieter erprobt. Die Zulassung für **DocMorris** und **Redcare** (zwei der größten europäischen Online-Apotheken) ist laut Branchenberichten voraussichtlich bis Ende Januar 2027 verlängert. Ein abschließend bestätigter Abschalttermin durch die [[gematik]] lag zum Zeitpunkt der Recherche nicht vor.

### Parallelphase und Ablösung durch PoPP

Von **August 2026 bis Januar 2027** laufen CardLink, [[VSDM]] 1.0 und [[PoPP]] parallel. Ab **Juli 2026** ersetzt [[PoPP]] CardLink schrittweise als primäres Verfahren für die E-Rezept-Einlösung bei Online-Apotheken. Die [[Gesundheits-ID]] ermöglicht ab 2026 einen PoPP-basierten Zugang ohne physische Karte.

Die [[gematik]] plant, die kontaktlose eGK-Nutzung ohne PIN auch im [[PoPP]]-Kontext bis Ende 2026 zu ermöglichen. CardLink bildet damit technisch eine Brücke zwischen dem aktuellen E-Rezept-Einlöseweg und der künftigen PoPP-basierten Authentisierung.

## Technische Details

### NFC-basiertes Kartenauslesen

CardLink nutzt die NFC-Schnittstelle (Near Field Communication) der [[eGK]] und des Smartphones. Die eGK enthält einen NFC-Chip nach ISO/IEC 14443. Beim Tap wird eine kryptografische Challenge-Response-Authentisierung durchgeführt, ohne dass eine PIN-Eingabe nötig ist. Die Authentisierung beweist die physische Präsenz der Karte, jedoch nicht zwingend die Einwilligung des Karteninhabers durch PIN.

### Ablauf einer E-Rezept-Einlösung

1. Der Versicherte öffnet die App der Online-Apotheke
2. Die App startet den CardLink-Prozess und fordert den NFC-Tap auf
3. Der Versicherte hält die [[eGK]] an das NFC-fähige Smartphone
4. Die App liest die notwendigen Authentisierungsdaten von der Karte
5. Die App sendet die Daten an den CardLink-Dienst des Apothekers
6. Der CardLink-Dienst authentisiert den Versicherten gegenüber dem [[E-Rezept]]-Fachdienst
7. Das [[E-Rezept]] wird abgerufen und die Apotheke beginnt die Bearbeitung

### Abgrenzung zu anderen Verfahren

| Verfahren | Authentisierungsmittel | PIN erforderlich | Szenario |
|---|---|---|---|
| CardLink | NFC-Tap eGK | Nein | Online-Apotheke via App |
| GesundheitsID | App-basiert | Nein (biometrisch) | Verschiedene TI-Dienste |
| [[PoPP]] Stufe 1 | eGK am Kartenterminal | Nein | Praxis, Krankenhaus |
| [[PoPP]] Stufe 2 | eGK kontaktlos | Nein | Telemedizin, Online |

### Sicherheitsüberlegungen

Da CardLink ohne PIN auskommt, ist die Sicherheit geringer als bei PIN-gesicherter eGK-Nutzung. Wer die physische Karte eines anderen in Besitz hat, könnte dessen Rezepte einlösen. Die [[gematik]] hat diese Abwägung bewusst zugunsten der Nutzbarkeit getroffen, solange CardLink als Übergangsverfahren gilt. Mit dem Rollout von [[PoPP]] Stufe 2 wird kontaktlose eGK-Nutzung in einem sichereren Gesamtkontext möglich.

## Verknüpfungen

- [[E-Rezept]]: Der Anwendungsfall, für den CardLink entwickelt wurde
- [[eGK]]: Die Karte, die per NFC ausgelesen wird
- [[Telematikinfrastruktur]]: Infrastruktur, über die die E-Rezept-Einlösung läuft
- [[PoPP]]: Nachfolgetechnologie, die CardLink prospektiv ablöst

## Quellen

- [CardLink - gematik Fachportal](https://fachportal.gematik.de/anwendungen/e-rezept/cardlink)
- [gematik: E-Rezept für Online-Apotheken](https://www.gematik.de/anwendungen/e-rezept)
- [Apotheke Adhoc: Nach CardLink - so geht's 2026 weiter](https://www.apotheke-adhoc.de/nachrichten/detail/e-health/nach-cardlink-so-gehts-2026-weiter/)
