---
title: Bundesmantelvertrag
audience: [technical, non-technical]
tags: [standards, vertragsrecht, kbv, gkv, ambulant]
aliases: [BMV-Ä, Bundesmantelvertrag Ärzte, BMV-Z, Bundesmantelvertrag Zahnärzte]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, kasse, regulierung, verband]
  interests: [compliance, business]
maturity: wachsend
---

# Bundesmantelvertrag

Der **Bundesmantelvertrag (BMV-Ä)** ist der zentrale Rahmenvertrag zwischen der [[KBV]] (Kassenärztlichen Bundesvereinigung) und dem [[GKV-Spitzenverband]], der die Grundsätze der ambulanten vertragsärztlichen Versorgung in Deutschland bundeseinheitlich regelt.

## Erklärt für Einsteiger

Wenn ein Kassenarzt Patienten behandelt, gelten für ihn bestimmte Spielregeln: Wie er abrechnet, wann er einen Überweisungsschein ausstellen muss, und unter welchen Bedingungen er Patienten per Videoanruf behandeln darf. Diese Spielregeln stehen im Bundesmantelvertrag. Er ist wie ein Arbeitsvertrag zwischen den niedergelassenen Ärzten und den Krankenkassen, aber für ganz Deutschland gültig.

## Überblick

Der Bundesmantelvertrag-Ärzte (BMV-Ä) ist ein Kollektivvertrag nach **§ 87 Abs. 1 [[SGB-V]]**. Er gilt seit dem 1. Oktober 2013 einheitlich für alle Kassenarten (gesetzliche Krankenversicherung), nachdem zuvor getrennte Verträge für Primär- und Ersatzkassen existierten. Die aktuelle Fassung trat am 1. April 2025 in Kraft.

Vertragsparteien sind:
- **[[KBV]]** (Kassenärztliche Bundesvereinigung): Vertritt die niedergelassenen Kassenärzte und Psychotherapeuten
- **[[GKV-Spitzenverband]]**: Vertritt alle gesetzlichen Krankenkassen

Der BMV-Ä ist bindend für alle [[GKV]]-Krankenkassen und alle Vertragsärzte in Deutschland. Er bildet die Basis, auf der die regionalen Kassenärztlichen Vereinigungen ([[Kassenaerztliche-Vereinigung|KVen]]) und Krankenkassen weitere Verträge aufbauen können.

### Regelungsbereiche

Der Bundesmantelvertrag gliedert sich in 36 Anlagen und regelt drei Kernbereiche:

1. **Organisation der vertragsärztlichen Versorgung**: Zulassungsvoraussetzungen, Öffnungszeiten, Vertretungsregeln, Praxisgemeinschaften, [[MVZ|Medizinische Versorgungszentren (MVZ)]]
2. **Persönliche Leistungserbringung**: Wann der Arzt persönlich tätig sein muss, Delegationsregeln an nichtärztliches Personal
3. **Überweisungen und Verordnungen**: Formvorschriften für Überweisungsscheine, Rezepte, Heilmittelverordnungen und Krankenhauseinweisungen

> [!interesse-compliance]
> Der Bundesmantelvertrag ist für alle Vertragsärzte, Vertragspsychotherapeuten und GKV-Krankenkassen bindend. Praxen, die gegen BMV-Regelungen verstoßen, riskieren Retaxationen und disziplinarische Maßnahmen durch die [[Kassenaerztliche-Vereinigung|KV]]. Für Videosprechstunden gelten die Anforderungen aus Anlage 31b des BMV-Ä. Die aktuelle Fassung (April 2025) ist auf kbv.de und gkv-spitzenverband.de abrufbar.

### Relevanz für die Digitalisierung

Der Bundesmantelvertrag enthält mehrere Anlagen zur digitalen Versorgung:

- **Anlage 31b (Videosprechstunde)**: Regelt die technischen und organisatorischen Anforderungen an Videokonsultationen. Ärzte benötigen eine zugelassene Videoplattform und müssen bestimmte Datenschutzanforderungen erfüllen. Relevant im Kontext von [[Telemedizin]].
- **Anlage zu DiGA**: Regelungen zur Verordnung von [[DiGA|digitalen Gesundheitsanwendungen]].
- **TI-Pauschale**: Refinanzierung der [[Telematikinfrastruktur]]-Kosten für Praxen über Anlage 32.
- **Vordrucke**: Anlage 2 definiert die amtlichen Vordrucke (z.B. Muster 1 Überweisungsschein, Muster 10 Krankenhauseinweisung).

### Verwandte Verträge

Neben dem BMV-Ä existiert der **Bundesmantelvertrag-Zahnärzte (BMV-Z)** zwischen der [[KZBV]] (Kassenzahnärztlichen Bundesvereinigung) und dem [[GKV-Spitzenverband]] für die vertragszahnärztliche Versorgung.

## Technische Details

### Relevanz für Abrechnungsdatenformate

Der BMV-Ä verweist auf technische Anlagen, die für die digitale Abrechnung relevant sind. Die KBV definiert auf dieser Grundlage das **KVDT-Format** (Kassenärztliche Vereinigung Datentransfer), das von [[PVS|Praxisverwaltungssystemen]] für die Quartalsabrechnung gegenüber den [[Kassenaerztliche-Vereinigung|KVen]] verwendet wird.

Formvorschriften im BMV-Ä bestimmen auch, welche Pflichtfelder Verordnungen enthalten müssen, was direkt in die FHIR-Profile für das [[E-Rezept]] eingeflossen ist.

### Verhältnis zu SGB V und anderen Normen

Der BMV-Ä setzt die gesetzlichen Vorgaben des [[SGB-V]] in konkrete Vertragsregelungen um:

| SGB-V-Paragraf | Regelungsbereich | BMV-Relevanz |
|---|---|---|
| § 87 Abs. 1 | Mantelvertrag als Instrument | Rechtsgrundlage des BMV-Ä |
| § 73 | Kassenärztliche Versorgung | Inhaltliche Grundlage |
| § 291a | Elektronische Gesundheitskarte | Verweis auf [[eGK]]-Einsatz |
| § 291g | Videosprechstunden | Anlage 31b des BMV-Ä |

> [!interesse-business]
> Der Bundesmantelvertrag ist der meistgelesene Vertrag im deutschen Gesundheitswesen. Er regelt die Grundbedingungen für über 150.000 niedergelassene Ärzte und Psychotherapeuten. Jede Änderung des BMV-Ä betrifft alle PVS-Hersteller, da Vordruckmuster, Formvorschriften und Abrechnungsregeln in die Softwareanforderungen der KBV einfließen. Aktuelle Fassung (April 2025) auf dem GKV-Spitzenverband-Portal verfügbar.

## Verknüpfungen

- [[KBV]] (Vertragspartei des BMV-Ä; vertritt die Vertragsärzte)
- [[GKV-Spitzenverband]] (Vertragspartei; vertritt die Krankenkassen)
- [[SGB-V]] (§ 87 Abs. 1: Rechtsgrundlage des BMV-Ä)
- [[GKV]] (Kassenarten, für die der BMV-Ä gilt)
- [[Kassenaerztliche-Vereinigung]] (KV; setzt den BMV-Ä regional um)
- [[PVS]] (Praxisverwaltungssysteme; müssen Formvorschriften des BMV-Ä umsetzen)
- [[E-Rezept]] (FHIR-Pflichtfelder basieren auf BMV-Ä-Formvorschriften)
- [[Telemedizin]] (Anlage 31b: Videosprechstunden-Regelungen)
- [[DiGA]] (Anlage zu DiGA im BMV-Ä)
- [[eGK]] (Einsatz und Vordrucke im BMV-Ä geregelt)
- [[MVZ]] (Medizinische Versorgungszentren; Organisationsregeln im BMV-Ä)
- [[KZBV]] (schließt den analogen BMV-Z für Zahnärzte)

## Quellen

- [KBV: Bundesmantelvertrag](https://www.kbv.de/infothek/rechtsquellen/bundesmantelvertrag)
- [GKV-Spitzenverband: Bundesmantelvertrag – Ärzte](https://www.gkv-spitzenverband.de/krankenversicherung/aerztliche_versorgung/bundesmantelvertrag/bundesmantelvertrag.jsp)
- [GKV-Spitzenverband: Bundesmantelvertrag-Ärzte (Volltext, ab 1. April 2025)](https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/aerztliche_versorgung/bundesmantelvertrag_1/2025-04-01_BMV-Aerzte.pdf)
