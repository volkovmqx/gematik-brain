---
title: DiGAV
audience: [technical, non-technical]
tags: [standards, recht, diga, regulierung, bfarm]
aliases: [Digitale-Gesundheitsanwendungen-Verordnung, DiGA-Verordnung]
---

# DiGAV

Die Digitale-Gesundheitsanwendungen-Verordnung (DiGAV) ist die Durchführungsverordnung zum [[DVG]], die das Fast-Track-Verfahren des [[BfArM]] und alle Anforderungen für die Aufnahme einer [[DiGA]] in das DiGA-Verzeichnis regelt.

## Erklärt für Einsteiger

Damit eine Gesundheits-App von der Krankenkasse bezahlt wird, muss sie eine strenge Prüfung bestehen. Die DiGAV ist das Regelwerk für diese Prüfung. Sie legt fest, was eine App können muss: Datenschutz einhalten, nachweisbar nützen, sicher sein und Daten in einem Format exportieren, das andere Systeme lesen können. Das Bundesgesundheitsministerium hat diese Regeln als Verordnung erlassen, damit alle DiGA-Hersteller dieselben Anforderungen erfüllen müssen.

## Überblick

Das Digitale-Versorgung-Gesetz ([[DVG]]) schuf 2019 in [[SGB-V]] §33a den Rechtsanspruch gesetzlich Versicherter auf DiGA als Kassenleistung. Die DiGAV konkretisiert diesen gesetzlichen Rahmen: Sie definiert das Prüfverfahren, die Anforderungskategorien, die Nachweismethoden für positive Versorgungseffekte und die Bedingungen für das öffentliche DiGA-Verzeichnis.

Die Verordnung trat am 11. April 2020 in Kraft und wird laufend durch Änderungsverordnungen aktualisiert. Sie gilt ausschließlich für DiGA, also digitale Medizinprodukte der Risikoklasse I oder IIa nach der europäischen Medizinprodukteverordnung ([[MDR]]), nicht für andere digitale Gesundheitsprodukte.

Das [[BfArM]] prüft DiGA-Anträge auf Basis der DiGAV innerhalb von maximal drei Monaten nach Eingang einer vollständigen Antragstellung. Dieses Fast-Track-Verfahren ist international ohne Parallele.

## Technische Details

### Anforderungskategorien (Anlage 1 DiGAV)

Die DiGAV definiert in Anlage 1 verbindliche Mindestanforderungen in fünf Kategorien:

1. **Sicherheit**: Keine Patientengefährdung; Konformität mit MDR und einschlägigen Normen (IEC 62304, IEC 62366, ISO 14971)
2. **Funktionsfähigkeit und Qualität**: Robustheit, Verfügbarkeit, Wartbarkeit; Einhaltung der grundlegenden Sicherheits- und Leistungsanforderungen der MDR
3. **Datenschutz**: Verarbeitung nur in Deutschland oder EU/EWR; keine Weitergabe an Dritte zu Werbezwecken; Umsetzung der Anforderungen der DSGVO
4. **Datensicherheit**: Technisch-organisatorische Maßnahmen nach Stand der Technik; Penetrationstests; Meldung von Sicherheitsvorfällen
5. **Benutzerfreundlichkeit und Barrierefreiheit**: Usability-Tests; Berücksichtigung von Nutzern mit Behinderungen

### Interoperabilität (Anlage 2 DiGAV)

Anlage 2 der DiGAV regelt die Interoperabilitätsanforderungen. Kernpflicht: Versicherte müssen ihre Daten aus einer DiGA in einem interoperablen Format exportieren können. Dieser Export soll dem **MIO DiGA Toolkit** entsprechen, das auf [[FHIR]] R4 basiert und von der [[KBV]] als [[MIO]] veröffentlicht wird.

Das [[BfArM]] stellt im DiGA-Antragsportal einen [[FHIR]]-Validator bereit, mit dem Hersteller ihre Exporte gegen das MIO DiGA Toolkit prüfen können. Die Nutzung des Validators ist derzeit freiwillig.

Langfristiges Ziel ist die direkte Integration mit der [[ePA]]: DiGA sollen Daten automatisch in die Patientenakte des Versicherten schreiben können.

### Positiver Versorgungseffekt

Das Herzstück der DiGAV ist der Nachweis eines positiven Versorgungseffekts. Die Verordnung unterscheidet zwei Nachweiskategorien:

- **Medizinischer Nutzen**: Patientenrelevante Endpunkte wie Verbesserung des Gesundheitsstatus, Verkürzung von Krankheitsdauer, Verbesserung der Lebensqualität
- **Patientenrelevante Struktur- und Verfahrensverbesserung**: Verbesserung der Versorgungsabläufe, der Therapietreue, der Patientensicherheit oder der Gesundheitskompetenz

Hersteller, die noch keine abgeschlossene Studie vorlegen können, werden vorläufig für maximal 12 Monate in das DiGA-Verzeichnis aufgenommen (Erprobungsphase). In diesem Zeitraum müssen sie den Nachweis erbringen. Gelingt das nicht, wird die DiGA aus dem Verzeichnis entfernt.

### Fast-Track-Verfahren

Das [[BfArM]] prüft in drei Schritten:

1. **Formelle Vollständigkeitsprüfung**: Sind alle Unterlagen eingereicht?
2. **Inhaltliche Prüfung**: Sind die Anforderungen der Anlage 1 DiGAV erfüllt? Stimmen die Selbstauskunft des Herstellers und die vorgelegten Belege überein?
3. **Bewertung des Versorgungseffekts**: Sind die Studiendaten methodisch belastbar und aussagekräftig?

Auf eine öffentliche Stellungnahmephase (wie bei Arzneimitteln) wird verzichtet, um die dreimonatige Frist einzuhalten.

### Vergütung

Nach Aufnahme in das DiGA-Verzeichnis gilt für die Erprobungsphase ein Erstattungsbetrag, den der Hersteller selbst festlegt. Nach dauerhafter Aufnahme verhandeln GKV-Spitzenverband und Hersteller einen Erstattungsbetrag. Einigen sie sich nicht, entscheidet eine Schiedsstelle.

## Verknüpfungen

- [[DiGA]] (die Anwendungen, die die DiGAV reguliert)
- [[DVG]] (gesetzliche Grundlage der DiGAV)
- [[SGB-V]] (§33a: Anspruch der GKV-Versicherten auf DiGA)
- [[BfArM]] (Zulassungsbehörde, führt das DiGA-Verzeichnis)
- [[FHIR]] (technischer Standard für den DiGA-Datenexport)
- [[MIO]] (MIO DiGA Toolkit definiert das Exportformat)
- [[ePA]] (Integrationsziel für DiGA-Daten)
- [[KBV]] (veröffentlicht das MIO DiGA Toolkit)
- [[GKV]] (Kostenträger für DiGA-Leistungen)

## Quellen

- [Digitale-Gesundheitsanwendungen-Verordnung (DiGAV) | BMG](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/digitale-gesundheitsanwendungen-verordnung-digav)
- [DiGAV | gesetze-im-internet.de](https://www.gesetze-im-internet.de/digav/BJNR076800020.html)
- [BfArM: Wissenswertes zu DiGA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiGA/Wissenswertes/_artikel.html)
- [Wikipedia: Digitale Gesundheitsanwendung](https://de.wikipedia.org/wiki/Digitale_Gesundheitsanwendung)
