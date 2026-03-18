---
title: Medizinischer Dienst
audience: [technical, non-technical]
tags: [organisation, gkv, pruefung, pflege, krankenhaus]
aliases: [MD, MDK, Medizinischer Dienst der Krankenversicherung, MDS]
maturity: setzling
---

# Medizinischer Dienst

Der **Medizinischer Dienst (MD)** ist der unabhängige Prüf- und Beratungsdienst der gesetzlichen Kranken- und Pflegeversicherung in Deutschland für medizinische und pflegerische Fragen.

## Erklärt für Einsteiger

Wenn eine Krankenkasse nicht sicher ist, ob eine beantragte Behandlung oder Pflegestufe wirklich medizinisch notwendig ist, kann sie einen unabhängigen Gutachter beauftragen. Das ist der Medizinische Dienst: ein Dienst aus Ärzten und Pflegefachkräften, die neutrale Gutachten erstellen. Sie prüfen zum Beispiel, ob ein Krankenhaus zu Recht so lange abgerechnet hat, wie ein Patient stationär lag, oder ob jemand wirklich Pflegegrad 3 benötigt.

## Überblick

Der Medizinische Dienst existierte bis 2019 unter dem Namen **MDK (Medizinischer Dienst der Krankenversicherung)**. Durch das **MDK-Reformgesetz** (Gesetz für bessere und unabhängigere Prüfungen, BGBl. I 2019, S. 2789) wurden die MDK-Organisationen zum 1. Januar 2020 in eigenständige Körperschaften des öffentlichen Rechts umgewandelt und heißen seitdem "Medizinischer Dienst" (MD).

Auf Bundesebene koordiniert der **MDS (Medizinischer Dienst des Spitzenverbandes Bund der Krankenkassen)** die Arbeit der 15 Länderdienste. Seit der Reform heißt er **MD Bund**.

### Kernaufgaben

- **Krankenhausabrechnungsprüfung**: Überprüfung von [[DRG]]-Abrechnungen der Krankenhäuser auf Korrektheit und medizinische Notwendigkeit
- **Pflegegutachten**: Einstufung von Pflegebedürftigen in Pflegegrade (1-5) nach SGB XI
- **Begutachtung im Leistungsstreit**: Prüfung von Leistungsanträgen (z.B. Rehabilitationsmaßnahmen, Hilfsmittel, Krankengeld)
- **Qualitätssicherung**: Prüfung der Qualität in Pflegeeinrichtungen und Krankenhäusern
- **Beratung**: Beratung der Krankenkassen in medizinisch-fachlichen Fragen

### Krankenhausabrechnungsprüfung

Die Prüfung von Krankenhausabrechnungen ist eine der öffentlich sichtbarsten Aufgaben des MD. Krankenkassen können den MD beauftragen, Krankenhausrechnungen zu prüfen, wenn der Verdacht besteht, dass:
- Die Verweildauer des Patienten nicht medizinisch begründet war
- Der abgerechnete DRG-Code nicht dem tatsächlichen Behandlungsfall entspricht
- Zusatzentgelte (ZE) nicht korrekt berechnet wurden

Im Rahmen der Krankenhausreform 2023 wurden die Prüfquoten und das Verfahren für die MD-Abrechnungsprüfung neu geregelt.

## Technische Details

### Digitale Kommunikation

Der MD tauscht Informationen mit Krankenhäusern und Krankenkassen über standardisierte digitale Kanäle aus:

- **[[KIM]]**: Der Austausch von Prüfaufträgen und Gutachten zwischen Krankenhäusern und dem MD erfolgt zunehmend über KIM (Kommunikation im Medizinwesen). Die TI-Anbindung des MD ist verpflichtend.
- **MD-Prüfportal**: Der MD Bund betreibt ein digitales Portal für die strukturierte Übermittlung von Prüfanfragen.

### Zugriff auf Patientenakten und ePA

Der MD hat im Rahmen seiner gesetzlichen Aufgaben Auskunftsrechte gegenüber Leistungserbringern. Mit der Einführung der [[ePA]] ergeben sich neue Fragen zum Datenzugang:

- Patienten können den MD in ihrer ePA als berechtigten Zugreifer eintragen, wenn eine Begutachtung stattfindet.
- Die Einzelheiten des MD-Zugriffs auf ePA-Daten sind in § 342 ff. SGB V geregelt.
- Der MD darf keine pauschalen Zugriffe auf die ePA verlangen; jeder Zugriff muss fallbezogen und durch den Versicherten freigegeben sein.

### Pflegegutachten und Pflegegrad-Einstufung

Die Pflegegrad-Einstufung nach SGB XI erfolgt anhand eines standardisierten Begutachtungsinstruments (BI). Es bewertet sechs Lebensbereiche (Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit krankheitsbedingten Anforderungen, Gestaltung des Alltagslebens). Das Ergebnis ist ein Gesamtpunktwert, der den Pflegegrad bestimmt.

Die Begutachtung erfolgt in der Regel beim Versicherten zu Hause oder in der Pflegeeinrichtung. Seit der COVID-19-Pandemie sind auch Telefon- und Videobegutachtungen möglich.

## Verknüpfungen

- [[GKV]] (Auftraggeber des MD; Krankenkassen beauftragen Prüfgutachten)
- [[DRG]] (Abrechnungssystem, dessen Korrektheit der MD bei Krankenhäusern prüft)
- [[KIS]] (Krankenhäuser übermitteln Prüfunterlagen aus ihrem KIS an den MD)
- [[KIM]] (Kommunikationsweg für MD-Krankenkassen-Krankenhausprüfprozesse)
- [[ePA]] (Patienten können MD-Zugriff auf ihre ePA freigeben)
- [[SGB V]] (§ 275 ff. SGB V: Gesetzliche Grundlage für MD-Beauftragung)

## Quellen

- [Medizinischer Dienst Bund: Über uns](https://www.medizinischerdienst.de/der-md/wer-wir-sind/)
- [MDK-Reformgesetz (BGBl. I 2019, S. 2789)](https://www.bgbl.de/xaver/bgbl/start.xav?startbk=Bundesanzeiger_BGBl&jumpTo=bgbl119s2184.pdf)
- [Wikipedia: Medizinischer Dienst](https://de.wikipedia.org/wiki/Medizinischer_Dienst_(Krankenversicherung))
- [§ 275 SGB V – Beauftragung des MD](https://www.gesetze-im-internet.de/sgb_5/__275.html)
