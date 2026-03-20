---
title: DSFA
audience: [technical, non-technical]
tags: [konzepte, datenschutz, dsgvo, compliance]
aliases: [Datenschutz-Folgenabschätzung, Data Protection Impact Assessment, DPIA]
relevance:
  sectors: [krankenhaus, arztpraxis, kasse, hersteller, it-dienstleister, startup, forschung, regulierung]
  interests: [compliance, technik]
maturity: wachsend
---

# DSFA

Die **Datenschutz-Folgenabschätzung (DSFA)** ist eine Pflichtprüfung nach Art. 35 [[DSGVO]], die durchgeführt werden muss, bevor eine Datenverarbeitung mit voraussichtlich hohem Risiko für die Rechte und Freiheiten natürlicher Personen beginnt.

## Erklärt für Einsteiger

Wenn eine Organisation plant, viele sensible Daten zu verarbeiten, zum Beispiel Gesundheitsdaten von Tausenden Menschen, muss sie vorher schriftlich analysieren: Was kann dabei schiefgehen? Wer könnte Schaden nehmen? Wie kann man das Risiko reduzieren? Dieses Dokument heißt Datenschutz-Folgenabschätzung. Es ist wie ein Sicherheits-Check, den man machen muss, bevor man ein neues, riskantes Projekt startet.

## Überblick

Art. 35 [[DSGVO]] schreibt die DSFA vor, wenn eine Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge hat. Der deutsche Gesetzgeber hat in Art. 35 Abs. 3 DSGVO drei Pflichtfälle definiert:

1. Systematische und umfassende Bewertung persönlicher Aspekte auf Basis automatisierter Verarbeitung (einschließlich Profiling)
2. Umfangreiche Verarbeitung besonderer Kategorien von Daten nach Art. 9 DSGVO (darunter Gesundheitsdaten)
3. Systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche

Im deutschen Gesundheitswesen ist die DSFA besonders relevant bei:

- Einführung neuer Systeme zur Verarbeitung von Patientendaten in großem Umfang
- Nutzung pseudonymisierter oder anonymisierter Gesundheitsdaten für Forschungszwecke
- Aufbau von Forschungsdatenbanken (z.B. beim [[Forschungsdatenzentrum-Gesundheit]])
- Einsatz von KI-Systemen zur klinischen Entscheidungsunterstützung

Die [[BfDI|Datenschutzbehörden]] haben Listen veröffentlicht, welche Verarbeitungsarten immer eine DSFA erfordern (sogenannte Blacklists).

> [!praxis-tipp] Praxis-Tipp: Wann braucht Ihre Praxis eine DSFA?
> Viele Arztpraxen glauben, die DSFA sei nur für große Kliniken relevant. Das stimmt nicht.
>
> Eine DSFA ist in Ihrer Praxis nötig, wenn Sie:
> - ein Telemonitoring-System einführen (systematische Patientenüberwachung)
> - eine KI-gestützte Diagnosesoftware einsetzen
> - ein Videokonferenz-System für Telemedizin neu einrichten
>
> Eine DSFA ist **nicht** nötig für:
> - das normale PVS (reine Verwaltungssoftware)
> - Röntgengeräte und EKG-Geräte ohne Datenweiterleitung
>
> So gehen Sie vor:
> 1. Neues System angedacht? Zuerst prüfen: Welche Patientendaten fließen wohin?
> 2. Ihren Datenschutzbeauftragten (DSB) informieren. Haben Sie keinen bestellt? Ab 20 Mitarbeitern mit Datenzugang ist ein DSB Pflicht.
> 3. DSFA dokumentieren, bevor das System in Betrieb geht. Nachträgliche DSFA ist nicht zulässig.

> [!interesse-compliance]
> **Pflicht nach Art. 35 DSGVO:** Vor Beginn jeder Verarbeitung mit hohem Risiko. Für Gesundheitsdaten nach Art. 9 DSGVO ist die Schwelle in der Regel erreicht, sobald die Verarbeitung umfangreich ist.
>
> **Muss enthalten:** Beschreibung der Verarbeitung und ihrer Zwecke, Bewertung der Notwendigkeit und Verhältnismäßigkeit, Bewertung der Risiken für die Rechte und Freiheiten der betroffenen Personen, Maßnahmen zur Risikoabwehr.
>
> **Datenschutzbeauftragter:** Muss nach Art. 35 Abs. 2 DSGVO in die DSFA einbezogen werden, sofern ein DSB bestellt ist.
>
> **Vorherige Konsultation:** Wenn die geplanten Maßnahmen das Risiko nicht ausreichend mindern, muss die zuständige Aufsichtsbehörde (z.B. [[BfDI]]) nach Art. 36 DSGVO konsultiert werden.

## Technische Details

### Inhalt einer DSFA

Eine DSFA nach Art. 35 Abs. 7 DSGVO muss mindestens enthalten:

- Systematische Beschreibung der geplanten Verarbeitungsvorgänge und der Verarbeitungszwecke
- Bewertung der Notwendigkeit und Verhältnismäßigkeit der Verarbeitungsvorgänge
- Bewertung der Risiken für die Rechte und Freiheiten der betroffenen Personen
- Abhilfemaßnahmen (technische und organisatorische Maßnahmen, Sicherheitsvorkehrungen und Verfahren)

### DSFA und Forschungsdaten

Im Kontext des [[GDNG]] und der Nutzung von ePA-Daten für Forschungszwecke ist die DSFA ein Pflichtbestandteil des Datenzugangsantrags beim [[Forschungsdatenzentrum-Gesundheit]]. Das FDZ prüft die eingereichte DSFA als Teil des Genehmigungsverfahrens nach § 303e SGB V.

### DSFA und DiGA

Hersteller von [[DiGA|Digitalen Gesundheitsanwendungen]] müssen bei der Antragstellung beim [[BfArM]] eine DSFA einreichen, sofern die DiGA Gesundheitsdaten in erheblichem Umfang verarbeitet. Die DSFA ist Bestandteil der Zulassungsunterlagen und wird durch das BfArM inhaltlich bewertet.

### Verhältnis zu anderen Instrumenten

Die DSFA ist kein Ersatz für das Verzeichnis der Verarbeitungstätigkeiten (Art. 30 DSGVO) oder für die allgemeinen Datenschutzmaßnahmen. Sie ergänzt diese um eine vorausschauende Risikoanalyse für besonders riskante Verarbeitungen.

> [!klinik-integration] Klinik-Integration: DSFA-Pflicht bei KIS-Einführung und digitalen Projekten
> **KIS-Einführung ist ein Pflichtfall:** Die Einführung oder der Wechsel eines [[KIS]] (z.B. SAP ISH, Orbis/Dedalus, iMedOne, CGM Medico) löst die DSFA-Pflicht aus. Krankenhäuser verarbeiten damit Gesundheitsdaten von tausenden Patienten in großem Umfang, was nach Art. 35 Abs. 3 lit. b DSGVO eindeutig DSFA-pflichtig ist. Gleiches gilt für Patientenportale (KHZG-Förderbereich 2) und KI-Diagnosemodule.
>
> **KHZG-Projekte:** Für alle nach dem Krankenhauszukunftsgesetz geförderten Digitalisierungsprojekte ist eine DSFA Pflichtbestandteil der Datenschutzdokumentation. Der Datenschutzbeauftragte des Krankenhauses muss in den Bewilligungsprozess eingebunden werden. Ohne DSFA riskiert das Krankenhaus Nachforderungen durch den Fördermittelgeber.
>
> **Dokumentation und Aufbewahrung:** Die DSFA muss schriftlich vorliegen, datiert und vom DSB gegengezeichnet sein. Bei Systemänderungen (Updates, neue Module, Dienstleisterwechsel) ist eine Überprüfung der DSFA erforderlich. Empfehlung: DSFA im Verzeichnis der Verarbeitungstätigkeiten (Art. 30 DSGVO) des Krankenhauses verlinken.

> [!dev-quickstart] Dev Quickstart: DSFA-Pflicht programmatisch prüfen
> Die BfDI veröffentlicht eine Muss-Liste (Art. 35 Abs. 4 DSGVO) als PDF. Für Systeme im Gesundheitswesen gilt: Verarbeitung von Gesundheitsdaten nach Art. 9 DSGVO in großem Umfang löst DSFA-Pflicht immer aus.
>
> Checkliste für Software-Teams:
> - Verarbeitet das System Gesundheitsdaten von mehr als einer Handvoll Personen? → DSFA erforderlich
> - Werden Profile aus Gesundheitsdaten erstellt (z.B. Risikoscores, KI-Diagnosen)? → DSFA erforderlich
> - DiGA-Antrag beim BfArM? → DSFA als Pflichtbestandteil der Zulassungsunterlagen einreichen
> - FDZ-Datenzugangsantrag (§ 303e SGB V)? → DSFA als Pflichtbestandteil des Antrags
>
> Relevante Dokumente:
> - [BfDI Muss-Liste DSFA](https://www.bfdi.bund.de/DE/Datenschutz/Themen/Technik/Datenschutz-Folgenabschaetzung/Datenschutz-Folgenabschaetzung_node.html)
> - [Art. 35 DSGVO Gesetzestext](https://dsgvo-gesetz.de/art-35-dsgvo/)
> - [CNIL PIA-Tool (Open Source, anpassbar)](https://github.com/LINCnil/pia)

## Verknüpfungen

- [[DSGVO]] (Art. 35: Rechtsgrundlage der DSFA)
- [[BfDI]] (Datenschutzbehörde; Konsultation bei hohem Restrisiko)
- [[BDSG]] (deutsches Datenschutzgesetz, konkretisiert DSGVO)
- [[Pseudonymisierung]] (häufig als Risikominderungsmaßnahme in der DSFA beschrieben)
- [[GDNG]] (Forschungsdaten; DSFA als Pflichtbestandteil des FDZ-Datenzugangsantrags)
- [[DiGA]] (DSFA bei Antragstellung beim BfArM erforderlich)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ prüft DSFA im Genehmigungsverfahren)

## Quellen

- [DSGVO Art. 35: Datenschutz-Folgenabschätzung (Gesetzestext)](https://dsgvo-gesetz.de/art-35-dsgvo/)
- [BfDI: Muss-Liste – Verarbeitungsvorgänge, die einer DSFA bedürfen](https://www.bfdi.bund.de/DE/Datenschutz/Themen/Technik/Datenschutz-Folgenabschaetzung/Datenschutz-Folgenabschaetzung_node.html)
- [Wikipedia: Datenschutz-Folgenabschätzung](https://de.wikipedia.org/wiki/Datenschutz-Folgenabsch%C3%A4tzung)
