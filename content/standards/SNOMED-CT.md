---
title: SNOMED CT
audience: [technical]
tags: [standards, terminologie, kodierung, interoperabilität, semantik]
aliases: [Systematisierte Nomenklatur der Medizin, SNOMED, SNOMED CT International]
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, it-dienstleister, forschung]
  interests: [technik, compliance]
maturity: wachsend
---

# SNOMED CT

SNOMED CT (Systematized Nomenclature of Medicine – Clinical Terms) ist die umfangreichste internationale klinische Terminologie, die medizinische Konzepte einheitlich beschreibt und in Deutschland vom [[BfArM]] als National Release Center verwaltet wird.

## Erklärt für Einsteiger

Stell dir vor, ein Arzt in Berlin und ein Arzt in München verwenden unterschiedliche Begriffe für dieselbe Krankheit. Wenn ihre Computersysteme miteinander reden sollen, entstehen Missverständnisse. SNOMED CT ist ein riesiges Wörterbuch für medizinische Begriffe: Jede Krankheit, jede Körperstelle, jede Maßnahme bekommt eine eindeutige Nummer. So ist klar, dass Code 22298006 immer "Herzinfarkt" bedeutet, unabhängig davon, welcher Begriff im jeweiligen System steht.

## Überblick

SNOMED CT wird von SNOMED International verwaltet, einer Non-Profit-Organisation mit Sitz in London. Mitgliedsländer erwerben eine Nationallizenz, die ihren Bürgern und Organisationen die Nutzung erlaubt. Deutschland ist seit 2021 Mitglied. Das [[BfArM]] übernimmt laut § 355 Abs. 7 [[SGB-V]] die Funktion des National Release Centers (NRC) für Deutschland.

Das NRC beim [[BfArM]] koordiniert die deutschen Interessen gegenüber SNOMED International, erstellt und pflegt eine deutsche Übersetzung der Begriffe und bearbeitet Anfragen für neue oder geänderte Konzepte. Eine länderübergreifende Arbeitsgruppe aus Deutschland, Österreich, der Schweiz und Luxemburg (DACH-L) entwickelt gemeinsam abgestimmte deutschsprachige Referenzübersetzungen.

Im deutschen Gesundheitswesen nimmt SNOMED CT eine zunehmend zentrale Rolle ein. Es ergänzt die klassifikationsbasierten Systeme [[ICD-10-GM]] (Diagnosen) und [[OPS]] (Prozeduren) um eine differenziertere, ontologiebasierte Beschreibungsebene.

## Technische Details

### Grundstruktur von SNOMED CT

SNOMED CT besteht aus drei Hauptkomponenten:

**Konzepte (Concepts):** Jedes medizinische Konzept hat eine eindeutige numerische ID (Concept ID). Beispiel: `22298006` steht für Myocardial infarction (Herzinfarkt). Konzepte sind hierarchisch in Kategorien gegliedert, etwa Clinical finding, Procedure, Body structure, Substance oder Organism.

**Beschreibungen (Descriptions):** Zu jedem Konzept gibt es bevorzugte Bezeichnungen (Fully Specified Name, FSN) und Synonyme in mehreren Sprachen. Die deutsche Übersetzung ist als German Language Reference Set verfügbar.

**Beziehungen (Relationships):** Konzepte sind durch typisierte Beziehungen miteinander verknüpft, zum Beispiel "Is a" (Hierarchie) oder "Finding site" (betroffene Körperstelle). Diese Beziehungen ermöglichen semantische Abfragen.

### Technisches Format

SNOMED CT wird als RF2 (Release Format 2) verteilt. RF2 ist ein Satz von CSV-Tabellen, die Konzepte, Beschreibungen und Beziehungen enthalten. Das Format erlaubt inkrementelle Updates (Delta-Releases) und vollständige Snapshots.

SNOMED International veröffentlicht halbjährliche internationale Releases (Januar und Juli). Das [[BfArM]] gibt daraufhin nationale Extensions für Deutschland heraus, die zusätzliche deutsche Begriffe und Übersetzungen enthalten.

### FHIR-Integration

Im [[FHIR]]-Standard wird SNOMED CT als CodeSystem mit der kanonischen URL `http://snomed.info/sct` referenziert. Konzepte werden in Coding-Elementen angegeben:

```json
{
  "coding": [{
    "system": "http://snomed.info/sct",
    "code": "22298006",
    "display": "Myocardial infarction"
  }]
}
```

Der FHIR-[[Terminologieserver]] des [[BfArM]] (ontoserver.bfarm.de) stellt SNOMED CT als FHIR-konformen Dienst bereit. Über `$lookup` und `$validate-code` Operationen können Konzepte abgefragt und validiert werden.

### Nutzung in MIO-Profilen

[[MIO|Medizinische Informationsobjekte (MIOs)]] der [[KBV]] setzen SNOMED CT für klinische Konzepte ein, die über [[ICD-10-GM]] und [[OPS]] hinausgehen. Beispiele:

- Impfpass: SNOMED CT für Impfstoffe und Immunstatus
- Mutterpass: SNOMED CT für klinische Befunde in der Schwangerschaft
- U-Heft: SNOMED CT für Untersuchungsbefunde bei Kindern

Das MIO DiGA Toolkit referenziert SNOMED CT für generische klinische Konzepte in [[DiGA]]-Datenexporten.

### Nutzung in ISiK

[[ISiK]]-Profile nutzen SNOMED CT als ergänzendes Terminologiesystem. Während Diagnosen primär mit [[ICD-10-GM]] kodiert werden, sind SNOMED-CT-Kodierungen in bestimmten Ressourcen als zusätzliche Beschreibungsebene vorgesehen, etwa für klinische Befunde, Körperstrukturen und Prozedurbeschreibungen.

### Lizenzierung in Deutschland

Da das [[BfArM]] die Nationallizenz hält, können Organisationen mit Sitz in Deutschland SNOMED CT kostenlos über den MLDS-Dienst (Member Licensing and Distribution Service) von SNOMED International lizenzieren. Für kommerzielle Produkte gelten gesonderte Bedingungen.

> [!interesse-technik]
> FHIR CodeSystem URI: `http://snomed.info/sct`. Terminologieserver des BfArM: [terminologien.bfarm.de](https://terminologien.bfarm.de/) (FHIR `$lookup`, `$validate-code`). Lizenzregistrierung (MLDS): [mlds.ihtsdotools.org](https://mlds.ihtsdotools.org/). Halbjährliche Releases: Januar und Juli. Deutsche Extension: [releases.ihtsdotools.org/de](https://releases.ihtsdotools.org/).

> [!interesse-compliance]
> § 355 Abs. 7 SGB V verpflichtet das [[BfArM]] zur Verwaltung von SNOMED CT in Deutschland. Die Nationallizenz gilt seit 2021. Für MIO-konforme Software und ISiK-zertifizierte KIS sind SNOMED-CT-Kodierungen in bestimmten Ressourcen verpflichtend. Hersteller von DiGA müssen SNOMED CT für klinische Konzepte im Datenexport nach §374a SGB V nutzen.

### Abgrenzung zu anderen Terminologien

| System | Zweck | Art |
|--------|-------|-----|
| SNOMED CT | Klinische Konzepte (Diagnosen, Befunde, Prozeduren, Substanzen) | Terminologie/Ontologie |
| [[ICD-10-GM]] | Diagnoseklassifikation für Abrechnung | Klassifikation |
| [[OPS]] | Prozedurenklassifikation für Abrechnung | Klassifikation |
| [[LOINC]] | Laborparameter und klinische Beobachtungen | Terminologie |

Klassifikationen gruppieren Sachverhalte für Abrechnungs- und Statistikzwecke. SNOMED CT beschreibt Sachverhalte so präzise wie möglich und erlaubt komplexe semantische Abfragen.

## Verknüpfungen

- [[BfArM]]: National Release Center für SNOMED CT in Deutschland seit 2021
- [[ICD-10-GM]]: Ergänzendes Klassifikationssystem für Diagnosen
- [[OPS]]: Ergänzendes Klassifikationssystem für Prozeduren
- [[MIO]]: Nutzt SNOMED CT als Terminologiesystem in KBV-FHIR-Profilen
- [[ISiK]]: Referenziert SNOMED CT in Krankenhausinteroperabilitätsprofilen
- [[FHIR]]: Technisches Format für SNOMED-CT-Referenzen in Gesundheitsdaten
- [[ePA]]: Gesundheitsakte, deren Inhalte auf SNOMED-CT-Terminologien beruhen
- [[SGB-V]]: § 355 Abs. 7 SGB V beauftragt das BfArM mit der SNOMED-CT-Verwaltung

## Quellen

- [BfArM: SNOMED CT – National Release Center Deutschland](https://www.bfarm.de/DE/Kodiersysteme/Terminologien/SNOMED-CT/_node.html)
- [SNOMED International: Mitgliedschaft Deutschland](https://www.snomed.org/snomed-ct/get-snomed)
- [BfArM: Terminologieserver](https://terminologien.bfarm.de/)
- [§ 355 SGB V: Informationstechnische Infrastruktur](https://www.gesetze-im-internet.de/sgb_5/__355.html)
