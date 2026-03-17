---
title: DiPA
audience: [technical, non-technical]
tags: [technologies, digitale-pflege, medizinprodukt, bfarm, sgb-xi]
aliases: [Digitale Pflegeanwendungen, DiPA]
---

# DiPA

Digitale Pflegeanwendungen (DiPA) sind vom [[BfArM]] zugelassene digitale Anwendungen für Pflegebedürftige, die von der gesetzlichen Pflegeversicherung nach [[SGB-XI|SGB XI]] erstattet werden.

## Erklärt für Einsteiger

Ähnlich wie ein Arzt eine App auf Rezept verschreiben kann, gibt es seit 2022 auch für Pflegebedürftige solche digitalen Helfer. Eine DiPA ist eine App oder ein digitales Programm, das Pflegebedürftigen hilft, ihren Alltag besser zu bewältigen oder ihre Selbstständigkeit zu erhalten. Die Pflegekasse übernimmt die Kosten, wenn die App vom BfArM geprüft und zugelassen wurde. Es ist das Pendant zu [[DiGA]] in der Pflegeversicherung statt in der Krankenversicherung.

## Überblick

DiPA wurden mit dem Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz ([[DVPMG]]) vom 9. Juni 2021 eingeführt. Die rechtliche Grundlage findet sich in den §§ 40a und 40b des Elften Buches Sozialgesetzbuch ([[SGB-XI|SGB XI]]). Die zugehörige Ausführungsverordnung ist die [[DiPAV|Digitale Pflegeanwendungen-Verordnung (DiPAV)]] vom Oktober 2022.

Das [[BfArM]] führt das Prüfverfahren durch und betreibt das DiPA-Verzeichnis. Nur DiPA, die in diesem Verzeichnis aufgeführt sind, können von den Pflegekassen erstattet werden. Pflegebedürftige der Pflegegrade 1 bis 5 in häuslicher Pflege haben Anspruch auf Versorgung mit DiPA.

Der monatliche Erstattungsbetrag beträgt bis zu 50 Euro für die DiPA selbst sowie ergänzende Unterstützungsleistungen ambulanter Pflegeeinrichtungen. Die Pflegekasse entscheidet im Einzelfall über die Notwendigkeit der Versorgung.

DiPA sind nicht auf ärztliche Verordnung angewiesen. Pflegebedürftige können den Antrag selbst bei der Pflegekasse stellen. Die Anwendungen müssen nachweislich zur Minderung von Beeinträchtigungen der Selbstständigkeit oder der Fähigkeiten beitragen oder einer Verschlimmerung der Pflegebedürftigkeit entgegenwirken.

## Technische Details

### Abgrenzung zu DiGA

DiGA und DiPA haben ein ähnliches Prüfmodell, unterscheiden sich aber in wesentlichen Punkten:

| Merkmal | [[DiGA]] | DiPA |
|---|---|---|
| Rechtsgrundlage | § 139e SGB V | §§ 40a, 40b SGB XI |
| Einführung | DVG 2019 | [[DVPMG]] 2021 |
| Kostenträger | Gesetzliche Krankenversicherung ([[GKV]]) | Gesetzliche Pflegeversicherung |
| Verordnungsweg | Ärztliche/psychotherapeutische Verordnung | Eigenantrag bei der Pflegekasse |
| Zielgruppe | GKV-Versicherte mit medizinischer Indikation | Pflegebedürftige Pflegegrade 1-5 |
| Erstattungsbetrag | Verhandelbar, im DiGA-Verzeichnis gelistet | Bis 50 Euro/Monat |
| Prüfbehörde | [[BfArM]] | [[BfArM]] |

### BfArM-Prüfverfahren

Das BfArM prüft DiPA-Anträge nach den Anforderungen des § 78a SGB XI. Geprüft werden:

1. **Sicherheit und Funktionstüchtigkeit**: Entsprechend der Medizinprodukteverordnung ([[MDR]])
2. **Datenschutz und Datensicherheit**: Verarbeitung nach DSGVO-Grundsätzen
3. **Positive Versorgungseffekte**: Nachweis der pflegerischen Wirkung
4. **Qualität**: Benutzerfreundlichkeit und barrierefreie Gestaltung

Wie bei [[DiGA]] gibt es die Möglichkeit einer vorläufigen Aufnahme ins Verzeichnis, wenn der Nutzennachweis noch nicht vollständig erbracht ist.

### Interoperabilität

Die [[DiPAV]] schreibt Anforderungen an die Interoperabilität vor. Exportierte Daten sollen in standardisierten Formaten vorliegen. Eine direkte Integration mit der [[ePA]] ist perspektivisch vorgesehen, da die ePA für alle Versicherten auch Pflegerelevante Daten aufnehmen soll.

### Nutzungskontext

DiPA werden häufig in folgenden Versorgungsbereichen eingesetzt:

- Kognitive Aktivierung (z.B. bei Demenz)
- Unterstützung bei Alltagsaktivitäten
- Kommunikation und soziale Teilhabe
- Sturzprävention und Mobilität
- Pflegegeld-Dokumentation

## Verknüpfungen

- [[DiGA]]: Schwesterkonzept in der gesetzlichen Krankenversicherung
- [[BfArM]]: Zuständige Prüfbehörde und Betreiber des DiPA-Verzeichnisses
- [[DVPMG]]: Einführendes Gesetz von 2021, das DiPA in §§ 40a, 40b SGB XI verankerte
- [[DiPAV]]: Ausführungsverordnung, die das Prüfverfahren für DiPA im Detail regelt
- [[DVG]]: Vorläufer-Gesetz, das den DiGA-Rahmen schuf
- [[ePA]]: Perspektivische Integration von DiPA-Daten in die elektronische Patientenakte
- [[GKV]]: Abgrenzung zur Krankenversicherung, die DiGA erstattet
- [[FHIR]]: Interoperabilitätsstandard, der auch für DiPA-Datenexporte gilt

## Quellen

- [BfArM: Digitale Pflegeanwendungen (DiPA)](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/_node.html)
- [BfArM: Wissenswertes zu DiPA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/Wissenswertes/_artikel.html)
- [BMG: Digitale Pflegeanwendungen](https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick/digitale-pflegeanwendungen.html)
- [GKV-Spitzenverband: DiPA](https://www.gkv-spitzenverband.de/pflegeversicherung/pv_digitalisierung/dipa.jsp)
