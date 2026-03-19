---
title: ATC-Code
audience: [technical, non-technical]
tags: [standards, arzneimittel, klassifikation, who, codierung]
aliases: [ATC, Anatomisch-Therapeutisch-Chemische Klassifikation, ATC-Klassifikation]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, kasse, hersteller, forschung]
  interests: [technik, compliance]
maturity: setzling
---

# ATC-Code

Der **ATC-Code (Anatomisch-Therapeutisch-Chemische Klassifikation)** ist das internationale Klassifikationssystem der Weltgesundheitsorganisation (WHO) für Arzneimittel nach Organ, therapeutischer Indikation und chemischer Struktur.

## Erklärt für Einsteiger

Wenn du in einer Apotheke ein Medikament kaufst, gehört es zu einer Wirkstoffgruppe: Blutverdünner, Antibiotika, Blutdruckmittel. Der ATC-Code ist wie ein präziser Adresscode für jeden Wirkstoff. Der Code "C09AA01" bedeutet zum Beispiel: C = Herz-Kreislauf-System, 09 = Mittel, die das Renin-Angiotensin-System beeinflussen, AA = ACE-Hemmer, 01 = Captopril. Mit diesem System können Ärzte, Apotheker, Forscher und Krankenkassen weltweit über dasselbe Medikament sprechen, egal in welcher Sprache sie kommunizieren.

## Überblick

Das ATC-Klassifikationssystem hat seinen Ursprung in der Klassifikation der European Pharmaceutical Market Research Association (EPhMRA), die 1971 gegründet wurde. Norwegische Forscher entwickelten daraus in den frühen 1970er Jahren das ATC/DDD-System, das 1976 in den nordischen Ländern eingeführt wurde. Das WHO Collaborating Centre for Drug Statistics Methodology wurde 1982 in Oslo eingerichtet und pflegt das System seither. Im Jahr 1996 empfahl die WHO das ATC/DDD-System als internationalen Standard für Arzneimittelverbrauchsstudien.

In Deutschland gibt das **[[BfArM]]** (Bundesinstitut für Arzneimittel und Medizinprodukte) jährlich eine amtliche deutsche Fassung der ATC-Klassifikation heraus, angepasst an die deutschen Versorgungsbesonderheiten (z.B. pflanzliche Arzneimittel). Diese Fassung tritt jeweils zum 1. Januar des Folgejahres in Kraft. Die Rechtsgrundlage für die deutschen Anpassungen liegt in § 73 [[SGB-V]].

### Relevanz für die TI

Im Kontext der [[Telematikinfrastruktur]] und der digitalen Gesundheitsversorgung in Deutschland ist der ATC-Code in mehreren Anwendungen zentral:

- **[[E-Rezept]]**: FHIR-Ressourcen für Verordnungen enthalten ATC-Codes zur eindeutigen Wirkstoffidentifikation.
- **[[eMP]]** (elektronischer Medikationsplan): Jeder Wirkstoff im Medikationsplan ist per ATC-Code klassifiziert.
- **[[ePA]]** (Medikationsdaten): Medikationsdokumente in der elektronischen Patientenakte verwenden ATC-Codes.
- **[[AMTS]]** (Arzneimitteltherapiesicherheit): Interaktionsprüfungen basieren auf ATC-Code-Gruppen.
- **[[AMNOG]]-Nutzenbewertung**: Der G-BA nutzt ATC-Codes zur Definition der Vergleichstherapie.
- **GKV-Abrechnungsdaten**: Das [[TA1]]-Abrechnungsformat und die [[PZN|PZN-Stammdaten]] enthalten ATC-Codes für Abrechnungs- und Erstattungszwecke.

## Technische Details

### Struktur des ATC-Codes

Der ATC-Code ist fünfstufig aufgebaut:

```
C  09  A  A  01
│   │  │  │  └─ 5. Ebene: Chemische Substanz (zweistellig)
│   │  │  └──── 4. Ebene: Chemische Untergruppe (ein Buchstabe)
│   │  └─────── 3. Ebene: Pharmakologische Untergruppe (ein Buchstabe)
│   └────────── 2. Ebene: Therapeutische Untergruppe (zweistellig)
└────────────── 1. Ebene: Anatomische Hauptgruppe (ein Buchstabe)
```

Die 14 anatomischen Hauptgruppen (1. Ebene):

| Code | Gruppe |
|---|---|
| A | Alimentäres System und Stoffwechsel |
| B | Blut und blutbildende Organe |
| C | Kardiovaskuläres System |
| D | Dermatika |
| G | Urogenitalsystem und Sexualhormone |
| H | Systemische Hormonpräparate (außer Sexualhormone) |
| J | Antiinfektiva zur systemischen Anwendung |
| L | Antineoplastika und Immunmodulatoren |
| M | Muskel- und Skelettsystem |
| N | Nervensystem |
| P | Antiparasitäre Mittel |
| R | Respirationstrakt |
| S | Sinnesorgane |
| V | Varia |

### DDD (Defined Daily Dose)

Jedem ATC-Code ist eine **DDD (Defined Daily Dose, definierte Tagesdosis)** zugeordnet. Die DDD ist die angenommene mittlere tägliche Erhaltungsdosis des Wirkstoffs für seine Hauptindikation bei Erwachsenen. Sie dient nicht als Dosierungsempfehlung, sondern als statistisches Maß für Vergleiche.

DDD-Beispiel: Metformin (A10BA02) hat eine DDD von 2 g oral. Die GKV und das [[IQWiG]] nutzen DDD-Angaben für Verbrauchsanalysen und Wirtschaftlichkeitsvergleiche.

### Verwendung in FHIR

Im Kontext der deutschen TI und des [[E-Rezept]]s wird der ATC-Code als `coding`-Element in FHIR `Medication`-Ressourcen verwendet:

```json
{
  "resourceType": "Medication",
  "code": {
    "coding": [
      {
        "system": "http://fhir.de/CodeSystem/bfarm/atc",
        "code": "A10BA02",
        "display": "Metformin"
      }
    ]
  }
}
```

Das CodeSystem für den deutschen ATC ist: `http://fhir.de/CodeSystem/bfarm/atc`.

> [!interesse-technik]
> FHIR CodeSystem für deutschen ATC: `http://fhir.de/CodeSystem/bfarm/atc`. Jährliche Aktualisierung durch das [[BfArM]], gültig ab 1. Januar des Folgejahres. Verwendet in: [[E-Rezept]] (KBV-FHIR-Profile), [[eMP]], [[ePA]]-Medikationsdaten, [[AMTS]]-Interaktionsprüfungen, [[MIO]] Medikamentenliste. [[PZN]]-Stammdaten (Lauer-Taxe, IfA GmbH) enthalten den ATC-Code als Pflichtfeld.

## Verknüpfungen

- [[BfArM]] (gibt die amtliche deutsche ATC-Fassung heraus)
- [[E-Rezept]] (ATC-Code in FHIR-Verordnungsressourcen)
- [[eMP]] (elektronischer Medikationsplan; ATC-Code je Wirkstoff)
- [[ePA]] (Medikationsdaten in der Patientenakte)
- [[AMTS]] (Arzneimitteltherapiesicherheit; Interaktionsprüfung auf ATC-Basis)
- [[AMNOG]] (frühe Nutzenbewertung; ATC-Code definiert Vergleichstherapie)
- [[PZN]] (Pharmazentralnummer; Stammdaten enthalten ATC-Code)
- [[IQWiG]] (nutzt DDD-Angaben für Verbrauchsanalysen)
- [[GKV]] (Abrechnungs- und Erstattungsanalysen auf ATC-Basis)
- [[MIO]] (medizinische Informationsobjekte; Arzneimitteldaten mit ATC-Code)
- [[TA1]] (Apothekenabrechnung; enthält ATC-Code je Abrechnungssatz)
- [[Patient-Summary]] (europäischer Patientensummary; ATC-Codes für Medikation)
- [[SGB-V]] (§ 73: Rechtsgrundlage für die deutsche ATC-Anpassung)

## Quellen

- [BfArM: ATC-Klassifikation](https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/ATC/_node.html)
- [Wikipedia: Anatomisch-Therapeutisch-Chemisches Klassifikationssystem](https://de.wikipedia.org/wiki/Anatomisch-Therapeutisch-Chemisches_Klassifikationssystem)
- [WHO Collaborating Centre for Drug Statistics Methodology: ATC/DDD Index](https://atcddd.fhi.no/atc_ddd_index/)
