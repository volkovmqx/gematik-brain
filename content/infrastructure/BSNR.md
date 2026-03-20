---
title: BSNR
audience: [technical, non-technical]
tags: [infrastructure, identifikation, abrechnung, kv, ambulant]
aliases: [Betriebsstättennummer, Betriebsstätten-Nummer]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, apotheke, hersteller, it-dienstleister]
  interests: [technik, compliance]
maturity: immergruen
---

# BSNR

Die **BSNR (Betriebsstättennummer)** ist eine neunstellige Kennzahl der Kassenärztlichen Vereinigungen, die jede Arztpraxis oder Einrichtung im ambulanten Versorgungsbereich eindeutig identifiziert.

## Erklärt für Einsteiger

Jede Arztpraxis in Deutschland bekommt von der Kassenärztlichen Vereinigung eine eigene Nummer: die Betriebsstättennummer. Sie ist so etwas wie die Hausnummer der Praxis im deutschen Gesundheitssystem. Wenn ein Arzt eine Rechnung einreicht oder ein Dokument ausstellt, wird damit klar: Diese Leistung kam aus dieser Praxis, in diesem Ort, in diesem KV-Bezirk.

## Überblick

Die BSNR wird von der zuständigen [[Kassenaerztliche-Vereinigung|Kassenärztlichen Vereinigung (KV)]] vergeben und ist an die Betriebsstätte gebunden, nicht an den einzelnen Arzt. Zieht eine Praxis um oder ändert sich die Praxisstruktur wesentlich, kann eine neue BSNR vergeben werden.

Die BSNR erscheint in allen abrechnungsrelevanten Vorgängen der ambulanten Versorgung. Sie ist fester Bestandteil der [[KVDT]]-Abrechnungsdatensätze und wird in Arztbriefen, eÜberweisungen, [[E-Rezept|E-Rezepten]] und im [[eReferral]]-Kontext verwendet.

Jede Praxis hat genau eine BSNR pro Standort. Bei Praxen mit mehreren Standorten (z.B. [[MVZ]] mit Nebenbetriebsstätten) können mehrere BSNRs vergeben werden.

## Technische Details

### Aufbau der BSNR

Die BSNR ist neunstellig und folgt einer definierten Struktur:

```
XX XXXXXXX
│  └── 7-stellige Praxis-Identifikation (durchnummeriert innerhalb des KV-Bezirks)
└── 2-stelliger KV-Regionscode
```

Die ersten zwei Stellen kodieren den KV-Bezirk:

| Code | Kassenärztliche Vereinigung |
|------|-----------------------------|
| 01 | KV Schleswig-Holstein |
| 02 | KV Hamburg |
| 03 | KV Bremen |
| 17 | KV Berlin |
| 22 | KV Bayern |
| 38 | KV Nordrhein |
| 39 | KV Westfalen-Lippe |
| ... | (weitere KV-Bezirke) |

### BSNR und LANR: das ambulante Identifikationspaar

Die BSNR identifiziert die Praxis; die [[LANR]] identifiziert den einzelnen Arzt. Gemeinsam bilden sie das Identifikationspaar für alle ambulanten Abrechnungsvorgänge. Ein Arzt (eine LANR) kann in mehreren Praxen tätig sein (mehrere BSNRs). Jede Leistung wird mit der BSNR der Praxis und der LANR des behandelnden Arztes dokumentiert.

### BSNR in der Telematikinfrastruktur

In der [[Telematikinfrastruktur]] erscheint die BSNR in verschiedenen Kontexten:

- **[[VZD]] (Verzeichnisdienst)**: Jede Praxis ist im VZD mit ihrer BSNR eingetragen. Andere Leistungserbringer können die BSNR nutzen, um eine Praxis im VZD zu suchen und ihre [[KIM]]-Adresse zu ermitteln.
- **[[KVDT]]-Abrechnung**: Die Quartalsabrechnung enthält die BSNR in jedem Abrechnungsdatensatz.
- **[[E-Rezept]]**: Das E-Rezept enthält BSNR und LANR des ausstellenden Arztes als strukturierte FHIR-Daten (`PractitionerRole.identifier`).
- **[[eReferral]]**: Überweisungen enthalten die BSNR der überweisenden Praxis.
- **[[Entlassmanagement]]**: Bei der Entlassung aus dem Krankenhaus in die ambulante Versorgung wird die BSNR der weiterbehandelnden Praxis benötigt.

> [!dev-quickstart] Dev Quickstart: BSNR im FHIR-Kontext
> BSNR als FHIR `Organization.identifier` (KBV-Profil):
> ```json
> {
>   "resourceType": "Organization",
>   "identifier": [
>     {
>       "system": "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR",
>       "value": "380212345"
>     }
>   ],
>   "name": "Praxis Dr. Musterarzt"
> }
> ```
> VZD FHIR-API: Praxis per BSNR suchen:
> ```bash
> curl -s "https://fhir.vzd.ti-dienste.de/search/Organization?identifier=https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR|380212345" \
>   -H "Accept: application/fhir+json" \
>   -H "Authorization: Bearer <vzd-access-token>"
> ```
> - KBV NamingSystem: `https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR`
> - KBV-FHIR-Profil: [KBV_PR_Base_Organization](https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Organization)
> - VZD-API: [github.com/gematik/api-vzd](https://github.com/gematik/api-vzd)

> [!interesse-technik]
> Im FHIR-Kontext (E-Rezept, ePA) wird die BSNR als `identifier` in der `Organization`-Ressource kodiert: System `https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR`. In [[KVDT]]-Dateien (xDT-Format) erscheint die BSNR als Feldnummer 0201. Im [[VZD]] ist die BSNR als `telematikID`-Attribut der Praxis-Einträge hinterlegt. KBV-FHIR-Profil: [KBV_PR_Base_Organization](https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Organization).

### Vergabe und Verwaltung

Die BSNR wird automatisch vergeben, wenn ein Vertragsarzt seine Praxis bei der zuständigen KV anmeldet. Eine Praxis kann ihre BSNR nicht selbst wählen. Bei Praxisübergaben oder -umwandlungen (z.B. Umwandlung Einzelpraxis zu [[MVZ]]) muss die BSNR-Situation mit der KV geklärt werden.

> [!praxis-tipp] Praxis-Tipp: BSNR kennen und richtig verwenden
> Ihre BSNR steht auf dem Arztpraxisstempel und in Ihrem PVS hinterlegt. Sie benötigen sie täglich.
>
> Wo Ihre BSNR auftaucht:
> - Auf jedem E-Rezept, das aus Ihrer Praxis ausgestellt wird
> - In jeder Quartalsabrechnung an die KV
> - Im VZD: Über Ihre BSNR finden andere Praxen Ihre KIM-Adresse
> - Auf Überweisungsscheinen und Arztbriefen
>
> Häufiger Fehler bei Zweigpraxen: Jede Betriebsstätte hat eine eigene BSNR. Prüfen Sie im PVS, ob für den richtigen Standort abgerechnet wird. Falsche BSNR in der Abrechnung führt zur Rückweisung durch die KV.

## Verknüpfungen

- [[LANR]] (Lebenslange Arztnummer; Pendant zur BSNR auf Arztebene)
- [[KVDT]] (Abrechnungsformat; enthält BSNR in jedem Datensatz)
- [[Kassenaerztliche-Vereinigung]] (vergibt und verwaltet die BSNR)
- [[VZD]] (Verzeichnisdienst; enthält BSNRs aller zugelassenen Praxen)
- [[E-Rezept]] (enthält BSNR des Ausstellers als FHIR-Identifier)
- [[eReferral]] (Überweisungen enthalten die BSNR der überweisenden Praxis)
- [[MVZ]] (medizinische Versorgungszentren können mehrere BSNRs haben)
- [[KIM]] (Praxis-KIM-Adresse ist im VZD mit der BSNR verknüpft)

## Quellen

- [KBV: FHIR-Profil KBV_PR_Base_Organization (BSNR-Identifier)](https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Organization)
- [KBV ITA-Update Portal: KVDT-Spezifikation](https://update.kbv.de/ita-update/Abrechnung/)
- [Wikipedia: Betriebsstättennummer](https://de.wikipedia.org/wiki/Betriebsst%C3%A4ttennummer)
