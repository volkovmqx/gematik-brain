---
title: DiPAV
audience: [technical, non-technical]
tags: [standards, gesetzgebung, dipa, pflege, bfarm]
aliases: [Digitale Pflegeanwendungen-Verordnung, DiPA-Verordnung]
---

# DiPAV

Die **DiPAV (Digitale Pflegeanwendungen-Verordnung)** ist die Ausführungsverordnung des Bundesministeriums für Gesundheit zum [[DVPMG]], die das Prüf- und Zulassungsverfahren für [[DiPA]] beim [[BfArM]] im Detail regelt.

## Erklärt für Einsteiger

Das [[DVPMG]] hat gesagt: Es soll digitale Helfer-Apps für Pflegebedürftige geben, und die Pflegekasse übernimmt die Kosten. Aber ein Gesetz allein reicht nicht. Jemand muss festlegen: Wie genau wird geprüft, ob eine App gut genug ist? Was muss ein Hersteller nachweisen? Die DiPAV ist dieses Regelwerk. Sie legt fest, nach welchen Kriterien das BfArM entscheidet, und ist für DiPA das, was die [[DiGAV]] für [[DiGA]] ist.

## Überblick

Die DiPAV (Verordnung zur Prüfung der Erstattungsfähigkeit digitaler Pflegeanwendungen nach dem Elften Buch Sozialgesetzbuch) wurde am 29. September 2022 erlassen und trat am 7. Oktober 2022 in Kraft. Rechtsgrundlage ist § 78a [[SGB-XI|SGB XI]], der durch das [[DVPMG]] neu eingefügt wurde.

Wie die [[DiGAV]] für [[DiGA]] schließt die DiPAV die Lücke zwischen gesetzlicher Anforderung und praktischem Prüfablauf. Das [[BfArM]] stützt sich bei der Bewertung von DiPA-Anträgen auf die in der DiPAV definierten Kriterien und Nachweispflichten.

Im Vergleich zur [[DiGAV]] gibt es einige strukturelle Unterschiede. DiPA sind nicht auf ärztliche Verordnung angewiesen. Pflegebedürftige stellen den Antrag selbst bei der Pflegekasse. Der Erstattungsbetrag ist gedeckelt: bis zu 50 Euro monatlich für die DiPA und ergänzende Unterstützungsleistungen (ab 2026 aufgeteilt in 40 Euro für die DiPA nach § 40a SGB XI und 30 Euro für ambulante Unterstützung nach § 39a SGB XI). Die Prüfbehörde ist in beiden Fällen das [[BfArM]].

## Technische Details

### Aufbau der Verordnung

Die DiPAV gliedert sich in mehrere inhaltliche Abschnitte:

**Antragsprozess (§§ 1-2):** Hersteller stellen elektronische Anträge beim [[BfArM]]. Der Antrag muss Herstellerangaben, Zweckbestimmung, Gebrauchsanweisung und Nutzennachweise enthalten sowie einen kostenfreien Testzugang zur Anwendung.

**Sicherheits- und Funktionsanforderungen (§§ 3-4):** Für Nicht-Medizinprodukte schreibt Anlage 1 DiPAV ein Qualitätsmanagementsystem, Risikomanagement und Produktüberwachung vor. Für Medizinprodukte gilt die CE-Kennzeichnung nach [[MDR]] grundsätzlich als Nachweis.

**Datenschutz und Datensicherheit (§ 5):** Personenbezogene Daten dürfen nur mit expliziter Einwilligung verarbeitet werden. Datenverarbeitung muss innerhalb der EU oder in gleichgestellten Ländern stattfinden. Die Verordnung verweist auf Anforderungen des [[BSI]].

**Qualitätsanforderungen (§ 6, Anlage 2):** Die DiPAV schreibt vor:
- Technische, syntaktische und semantische Interoperabilität
- Robustheit gegen Störungen und Bedienungsfehler
- Barrierefreiheit und altersgerechte Bedienbarkeit
- Werbefreiheit innerhalb der Anwendung
- Fachlich aktuelle und qualitätsgesicherte Inhalte

**Pflegerischer Nutzen (§§ 9-12):** Ein pflegerischer Nutzen liegt vor, wenn die Anwendung Beeinträchtigungen in Bereichen wie Mobilität, kognitive Fähigkeiten, Selbstversorgung oder soziale Teilhabe mindert oder stabilisiert. Der Nachweis erfolgt durch quantitative vergleichende Studien.

**DiPA-Verzeichnis (§§ 16-18):** Das öffentliche Verzeichnis beim [[BfArM]] listet zugelassene DiPA mit nachgewiesenen Nutzeffekten, Studienresultaten und Vergütungsbeträgen.

**Gebühren (§§ 20-29):** Aufnahmegebühren 3.000 bis 9.900 Euro, Änderungsanzeigen 300 bis 4.900 Euro, Beratungen 250 bis 5.000 Euro.

### Interoperabilitätsanforderungen

Die DiPAV verpflichtet Hersteller zur Umsetzung technischer, syntaktischer und semantischer Interoperabilität. Interoperable Formate sind offene, international anerkannte Standards sowie herstellerspezifische Profile auf Basis solcher Standards. Exportierte Nutzerdaten müssen in maschinenlesbaren und dokumentierten Formaten bereitgestellt werden.

### Abgrenzung zur DiGAV

| Merkmal | [[DiGAV]] | DiPAV |
|---|---|---|
| Rechtsgrundlage | § 139e SGB V | § 78a SGB XI |
| Einführendes Gesetz | [[DVG]] 2019 | [[DVPMG]] 2021 |
| In Kraft | April 2020 | Oktober 2022 |
| Prüfbehörde | [[BfArM]] | [[BfArM]] |
| Zielgruppe | GKV-Versicherte | Pflegebedürftige Pflegegrade 1-5 |
| Zugang | Ärztliche Verordnung | Eigenantrag bei der Pflegekasse |

### Vorläufige Aufnahme

Wie bei DiGA sieht die DiPAV eine vorläufige Aufnahme ins Verzeichnis vor, wenn der Nutzennachweis noch nicht vollständig erbracht ist. In diesem Fall erhält der Hersteller zwölf Monate Zeit, um die ausstehenden Studien nachzuliefern.

## Verknüpfungen

- [[DiPA]]: Die Anwendungsklasse, deren Prüfverfahren die DiPAV regelt
- [[DVPMG]]: Ermächtigungsgesetz, das § 78a SGB XI schuf und die DiPAV ermöglichte
- [[DiGAV]]: Strukturell analoges Regelwerk für DiGA in der gesetzlichen Krankenversicherung
- [[DiGA]]: Schwesterkonzept, für das die DiGAV gilt
- [[BfArM]]: Prüfbehörde und Betreiber des DiPA-Verzeichnisses
- [[BSI]]: Sicherheitsanforderungen werden durch DiPAV auf BSI-Standards verwiesen
- [[MDR]]: CE-Kennzeichnung nach MDR ersetzt Teile des Sicherheitsnachweises für Medizinprodukte
- [[DVG]]: Vorläufer-Gesetz, das das DiGA-System schuf, das die DiPAV als Vorbild nutzt
- [[FHIR]]: Internationaler Standard, der als interoperables Format im Sinne der DiPAV gilt

## Quellen

- [Gesetze im Internet: DiPAV](https://www.gesetze-im-internet.de/dipav/BJNR156800022.html)
- [BfArM: Wissenswertes zu DiPA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/Wissenswertes/_artikel.html)
- [BfArM: DiPA-Leitfaden (PDF)](https://www.bfarm.de/SharedDocs/Downloads/DE/Medizinprodukte/dipa_leitfaden.pdf?__blob=publicationFile)
- [Ärztezeitung: DiPAV in Kraft getreten](https://www.aerztezeitung.de/Wirtschaft/Digitale-Pflege-Helfer-Verordnung-fuer-Digitale-Pflegeanwendungen-in-Kraft-getreten--433072.html)
