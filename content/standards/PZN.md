---
title: PZN
audience: [technical, non-technical]
tags: [standard, pzn, arzneimittel, identifikator]
aliases: [Pharmazentralnummer]
---

# PZN

Die **Pharmazentralnummer (PZN)** ist eine achtstellige Ziffernfolge, die jedes in Deutschland zugelassene Arzneimittel eindeutig identifiziert.

## Erklärt für Einsteiger

Jede Packung eines Medikaments in der Apotheke hat einen Barcode. Der Code dahinter ist die PZN. Sie sagt der Apotheke genau, welches Medikament, welche Stärke und welche Packungsgröße gemeint ist. Wenn der Arzt ein [[E-Rezept]] ausstellt, steht darin die PZN, und die Apotheke weiß sofort, was sie aushändigen soll.

## Überblick

Die PZN wird von der **IFA GmbH** (Informationsstelle für Arzneispezialitäten GmbH) vergeben, einer gemeinsamen Einrichtung von [[ABDA]], dem Bundesverband der Pharmazeutischen Industrie (BPI) und dem Pharmagroßhandel (PHAGRO). Hersteller und Importeure beantragen die PZN für jedes neue Produkt vor der Markteinführung.

Jede PZN bezieht sich auf genau eine Artikel-Einheit: Ein Medikament mit zwei Packungsgrößen (50 Tabletten und 100 Tabletten) hat zwei verschiedene PZNs. Gleiches gilt für unterschiedliche Stärken oder Darreichungsformen.

Die PZN ist in Deutschland der zentrale Identifikator im Apothekenbereich. Sie erscheint auf der Verpackung als Barcode (Data Matrix oder Code 128), im Lieferschein, in der Abrechnung und in elektronischen Verordnungen.

## Technische Details

### Format und Aufbau

Die PZN besteht aus acht Stellen (bis 2012 waren es sieben Stellen):

- Sieben Informationsstellen (Nutzerdaten)
- Eine Prüfziffer (letzte Stelle, nach Modulo-11-Verfahren berechnet)

Die PZN wird in der Regel mit dem Präfix "PZN" oder "PZN-" geschrieben, gefolgt von der achtstelligen Zahl (z.B. PZN-12345678).

### PZN im E-Rezept (FHIR MedicationRequest)

Im [[E-Rezept]] wird die PZN als Pflichtfeld im [[FHIR]] MedicationRequest-Profil der [[KBV]] codiert. Das Profil schreibt vor:

```json
{
  "resourceType": "Medication",
  "code": {
    "coding": [
      {
        "system": "http://fhir.de/CodeSystem/ifa/pzn",
        "code": "12345678"
      }
    ]
  }
}
```

Das CodeSystem `http://fhir.de/CodeSystem/ifa/pzn` ist das offizielle FHIR-Codesystem für PZNs in Deutschland. Es wird von HL7 Deutschland und [[KBV]] gepflegt.

### Abrechnung in der Apotheke

Apotheken übertragen beim Einlösen eines [[E-Rezept]]s die PZN an die Apothekenrechenzentren, die die Abrechnung mit der [[GKV]] durchführen. Das Abrechnungsformat (TA1 nach § 300 [[SGB-V]]) enthält die PZN als Pflichtelement.

Im [[AVS|Apothekenverwaltungssystem (AVS)]] ist die PZN der primäre Schlüssel für den Warenbestand. Die PZN ermöglicht den automatischen Abgleich zwischen verordnetem und dispensiertem Arzneimittel.

### AMTS und PZN

In der [[AMTS|Arzneimitteltherapiesicherheit]] wird die PZN verwendet, um Wechselwirkungen und Kontraindikationen zu prüfen. Datenbanken wie die ABDA-Datenbank und die Interaktionsdatenbank ABDA ordnen PZNs ihren Wirkstoffen zu, um eine pharmakologische Analyse zu ermöglichen.

### Abgrenzung: PZN vs. andere Identifikatoren

| Identifikator | Beschreibung |
|---|---|
| PZN | Deutsches Produkt-ID-System für Arzneimittel |
| ATC-Code | WHO-Klassifikation nach Wirkstoff und Indikation |
| EAN/GTIN | Internationaler Barcode-Standard (kann PZN enthalten) |
| Zulassungsnummer | Behördliche Zulassung durch [[BfArM]] oder EMA |

## Verknüpfungen

- [[E-Rezept]] (enthält PZN als Pflichtfeld in der FHIR-MedicationRequest-Ressource)
- [[FHIR]] (Datenformat für E-Rezepte; PZN ist als FHIR-CodeSystem definiert)
- [[AVS]] (Apothekenverwaltungssystem, das PZN als Warenbestandsschlüssel nutzt)
- [[AMTS]] (Arzneimitteltherapiesicherheit; PZN-basierte Wirkstoffanalyse)
- [[BfArM]] (Bundesinstitut für Arzneimittel und Medizinprodukte; koordiniert Arzneimittelidentifikatoren)
- [[KBV]] (definiert FHIR-Profile für E-Rezepte mit PZN)
- [[GKV]] (Abrechnungsgrundlage für Apotheken; PZN im TA1-Format)

## Quellen

- [IFA GmbH: Pharmazentralnummer (PZN)](https://www.ifa-gmbh.de/pzn.html)
- [IFA GmbH: Über die IFA GmbH](https://www.ifaffm.de/de/ifa-gmbh.html)
- [KBV FHIR-Profile für das E-Rezept](https://simplifier.net/evdga)
- [Wikipedia: Pharmazentralnummer](https://de.wikipedia.org/wiki/Pharmazentralnummer)
