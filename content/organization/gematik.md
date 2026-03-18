---
title: gematik
audience: [technical, non-technical]
tags: [organisation, gematik, ti, regulierung]
aliases: [gematik GmbH, Nationale Agentur für Digitale Medizin]
maturity: wachsend
---

# gematik

Die **gematik GmbH** ist die nationale Agentur für digitale Medizin in Deutschland. Sie entwickelt, betreibt und reguliert die [[Telematikinfrastruktur]] des deutschen Gesundheitswesens.

## Erklärt für Einsteiger

Stell dir das digitale Gesundheitsnetz Deutschlands wie ein großes Straßennetz vor. Die gematik ist die Behörde, die dieses Netz baut, die Regeln aufstellt und dafür sorgt, dass alle Teilnehmer die gleichen Standards einhalten. Sie entscheidet, welche Software zugelassen wird, welche Sicherheitsanforderungen gelten und wer mitmachen darf. Ohne die gematik gäbe es kein [[E-Rezept]], keine [[ePA]] und keinen sicheren Datenaustausch zwischen Arzt und Apotheke.

## Überblick

Die gematik wurde im Jahr **2005** gegründet und hat ihren Sitz in Berlin (Rosenthaler Straße 30, 10178 Berlin). Sie ist als GmbH organisiert, also als Gesellschaft mit beschränkter Haftung. Der gesetzliche Auftrag ergibt sich aus dem Fünften Buch Sozialgesetzbuch ([[SGB-V]]).

### Gesellschafter

Die gematik hat neun Gesellschafter. Das Bundesministerium für Gesundheit ([[BMG]]) hält die Mehrheit.

| Gesellschafter | Anteil |
|---|---|
| Bundesministerium für Gesundheit (BMG) | 51 % |
| [[GKV-Spitzenverband]] | 22,05 % |
| [[PKV\|Verband der Privaten Krankenversicherung (PKV)]] | 7 % |
| [[Bundesaerztekammer|Bundesärztekammer (BÄK)]] | je anteilig |
| Bundeszahnärztekammer (BZÄK) | je anteilig |
| Deutscher Apothekerverband (DAV) | je anteilig |
| Deutsche Krankenhausgesellschaft (DKG) | je anteilig |
| Kassenärztliche Bundesvereinigung (KBV) | je anteilig |
| Kassenzahnärztliche Bundesvereinigung (KZBV) | je anteilig |

Die restlichen 19,95 % verteilen sich auf die sechs Verbände aus dem Gesundheitswesen. Die Finanzierung erfolgt zu 93 % durch den GKV-Spitzenverband (1,50 Euro pro gesetzlich Versichertem) und zu 7 % durch den [[PKV]]-Verband.

### Governance

Die höchste Entscheidungsinstanz ist die **Gesellschafterversammlung**. Für Beschlüsse ist eine einfache Mehrheit (51 %) erforderlich, was dem BMG faktisch ein Vetorecht gibt. Daneben gibt es eine **Schlichtungsstelle**, einen **Beirat** (Länder, Patienten, Wissenschaft) und einen **Digitalbeirat**.

## Technische Details

### Aufgaben der gematik

Die gematik erfüllt laut SGB V mehrere zentrale Aufgaben:

1. **Spezifikation**: Sie definiert die technischen Standards und Schnittstellen für alle Komponenten der TI.
2. **Zulassung**: Kein Produkt darf in der TI eingesetzt werden, ohne von der gematik zugelassen zu sein. Das gilt für [[Konnektoren]], Kartenterminals, die [[SMC-B]], den [[HBA]] und alle Fachdienste.
3. **Betrieb**: Zentrale Dienste wie der [[IDP]]-Dienst, die [[PKI]]-Infrastruktur und die Root-CA werden von der gematik betrieben oder beauftragt.
4. **Kartenherausgabe**: Die gematik ist Herausgeber des [[HBA]] für bestimmte Berufsgruppen sowie der [[SMC-B]] für Institutionen.
5. **Interoperabilität**: Als Kompetenzzentrum für Interoperabilität definiert sie [[FHIR]]-Profile und Datenaustauschformate.

### Verhältnis zu anderen Institutionen

Die gematik arbeitet eng mit dem [[BSI]] (Bundesamt für Sicherheit in der Informationstechnik) zusammen. Das [[BSI]] genehmigt kryptografische Verfahren, die in der TI eingesetzt werden. Das **[[BfArM]]** (Bundesinstitut für Arzneimittel und Medizinprodukte) reguliert [[DiGA]] (Digitale Gesundheitsanwendungen).

### Normative Spezifikationen

Alle technischen Anforderungen werden in gemSpec-Dokumenten veröffentlicht. Diese sind öffentlich zugänglich unter [gemspec.gematik.de](https://gemspec.gematik.de). Die Spezifikationen umfassen Architekturkonzepte (gemKPT), Produkttypsteckbriefe (gemProdT) und Schnittstellenbeschreibungen (gemSpec).

## Aktuelle Entwicklungen

### GDAG gescheitert

Das **GDAG (Gesundheits-Digitalagentur-Gesetz)** sollte die gematik zu einer modernen Bundesagentur umstrukturieren. Der Gesetzentwurf scheiterte in der Legislaturperiode 2021-2025 mit dem Ende der Ampel-Koalition: Die zweite und dritte Lesung im Bundestag fanden aufgrund der vorzeitigen Neuwahl nicht mehr statt. Der Koalitionsvertrag von CDU/CSU und SPD (2025) sieht eine gematik-Modernisierung ohne GDAG vor. Das [[BMG]] plant als Nachfolge das **GDVG (Gesetz für digitale Versorgung und den Gesundheitsdatenraum)**, das Elemente der gematik-Transformation mit dem Ausbau des Gesundheitsdatenraums verbinden soll. Es ersetzt das gescheiterte GDAG. Der Referentenentwurf wird für H1/2026 erwartet. Ziel ist die Umgestaltung der gematik zu einer modernen Digitalagentur.

### Strategische Leitsätze 2026

Am **15. Januar 2026** veröffentlichte gematik-CEO Dr. Florian Fuhrmann sieben strategische Leitsätze für die Weiterentwicklung der gematik. Kernaussagen:

- Digitalisierung im Gesundheitswesen ist keine Option, sondern Pflicht
- Betriebsstabilität hat höchste Priorität: Bestehende Dienste müssen zuverlässig funktionieren
- Komplexität muss reduziert werden, nicht erhöht
- Vernetztes Denken über Sektorengrenzen hinweg ist notwendig
- Schnelle Umsetzung ist wichtiger als perfekte Planung

## Verknüpfungen

- Verantwortet die [[Telematikinfrastruktur]]
- Betreibt die TI-[[PKI]] (Root-CA)
- Herausgeber von [[HBA]] und [[SMC-B]]
- Definiert Standards für [[FHIR]], [[KIM]], [[E-Rezept]], [[ePA]]
- Arbeitet mit [[BSI]] für Kryptografiestandards zusammen
- Reguliert den Zugang für [[Konnektoren]] und alle TI-Komponenten

## Quellen

- [gematik - Über uns](https://www.gematik.de/ueber-uns)
- [Gremien und Gesellschafter - gematik.de](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
- [Wikipedia: Gematik](https://de.wikipedia.org/wiki/Gematik)
