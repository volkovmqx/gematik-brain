---
title: InEK
audience: [technical, non-technical]
tags: [organisation, drg, krankenhaus, vergütung, kodierung]
aliases: [Institut für das Entgeltsystem im Krankenhaus, InEK GmbH, DRG-Institut]
---

# InEK

Das **InEK** (Institut für das Entgeltsystem im Krankenhaus GmbH) ist die von den Selbstverwaltungspartnern getragene Institution, die das [[DRG|G-DRG-System]] entwickelt, pflegt und jährlich aktualisiert.

## Erklärt für Einsteiger

Wenn jemand ins Krankenhaus kommt, bekommt das Krankenhaus von der Krankenkasse einen bestimmten Betrag, abhängig davon, welche Erkrankung behandelt wurde. Wer entscheidet, wie viel ein gebrochenes Bein oder eine Herzoperation wert ist? Das ist Aufgabe des InEK. Es sammelt echte Kostendaten von Hunderten Krankenhäusern, rechnet durch, was Behandlungen tatsächlich kosten, und legt daraus jedes Jahr neu fest, welche Fallpauschale welchen Betrag bekommt.

## Überblick

Das InEK wurde im Jahr **2001** gegründet und hat seinen Sitz in Siegburg (Nordrhein-Westfalen). Es ist eine gemeinnützige GmbH im Eigentum der drei Selbstverwaltungspartner:

- **[[DKG|Deutsche Krankenhausgesellschaft (DKG)]]**: Interessenvertretung der Krankenhäuser
- **GKV-Spitzenverband**: Dachverband der gesetzlichen Krankenkassen
- **Verband der Privaten Krankenversicherung (PKV)**

Der gesetzliche Auftrag ergibt sich aus [[SGB-V]] §17b (stationäre Vergütung) und der Vereinbarung nach §17b KHG (Krankenhausfinanzierungsgesetz).

### Aufgaben

Das InEK erfüllt vier Kernaufgaben:

1. **Weiterentwicklung des G-DRG-Systems**: Jährliche Kalkulation der Bewertungsrelationen auf Basis realer Kostendaten aus dem Kalkulationskrankenhaus-Netz.
2. **Pflege der Deutschen Kodierrichtlinien (DKR)**: Die DKR sind die verbindliche Anleitung, wie Diagnosen ([[ICD-10-GM]]) und Prozeduren ([[OPS]]) in Krankenhäusern zu kodieren sind.
3. **PEPP-System**: Seit 2013 ist das InEK auch für das Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik (PEPP) zuständig.
4. **Nutzerbewertung**: Das InEK betreibt ein Antragsverfahren, über das Krankenhäuser, Fachgesellschaften und Kassen Anpassungsvorschläge für das G-DRG-System einreichen können.

### Kalkulationskrankenhaus-Netz

Die Grundlage für die DRG-Kalkulation sind die **Istkosten** von freiwillig teilnehmenden Krankenhäusern (Kalkulationskrankenhäuser). Für das G-DRG-System 2026 haben rund **260 Krankenhäuser** ihre Kostendaten geliefert, was mehrere Millionen Behandlungsfälle umfasst.

## Technische Details

### Kalkulationsverfahren

Das InEK-Kalkulationsverfahren folgt einem mehrstufigen Prozess:

1. **Kostenartenrechnung**: Krankenhäuser liefern Daten aus ihrer Buchhaltung nach einem einheitlichen Schema (Datenerhebung Kostendaten, DEK-Format).
2. **Kostenstellenrechnung**: Kosten werden auf Kostenstellen verteilt (Normalstationen, OP, Intensiv, Radiologie, Labor etc.).
3. **Kostenträgerrechnung**: Kosten werden auf einzelne Behandlungsfälle (DRG-Fälle) umgelegt.
4. **DRG-Gruppierung**: Fälle werden durch den [[DRG]]-Grouper anhand von Hauptdiagnose, Nebendiagnosen und Prozeduren einer DRG-Fallgruppe zugeordnet.
5. **Bewertungsrelation**: Für jede DRG wird aus den Durchschnittskosten eine Bewertungsrelation berechnet (Relation 1,0 = Basisfallwert).

### DRG-Grouper und Logik

Der DRG-Grouper ordnet jeden Krankenhausfall anhand von:

- **Hauptdiagnose** ([[ICD-10-GM]]-Code)
- **Nebendiagnosen** (Komorbiditäten, Komplikationen)
- **Prozeduren** ([[OPS]]-Codes)
- **Patientenmerkmale** (Alter, Beatmungsstunden, Entlassungsart)

Der Algorithmus ist ein Entscheidungsbaum mit über 1.300 DRG-Gruppen. Das InEK veröffentlicht den Grouper-Algorithmus jährlich als Definitionshandbuch.

### Deutsche Kodierrichtlinien (DKR)

Die **DKR** erscheinen jährlich und sind für alle deutschen Krankenhäuser bei der Abrechnung nach G-DRG verbindlich. Sie regeln:

- Wie die Hauptdiagnose auszuwählen ist
- Wann Nebendiagnosen zu kodieren sind
- Spezifische Kodierregeln für chirurgische Eingriffe, Neugeborene, psychiatrische Fälle
- Fallzusammenführung bei Wiederaufnahmen

Die DKR 2026 wurden vom InEK im Dezember 2025 veröffentlicht und gelten ab 1. Januar 2026.

### Datenmeldung nach §21 KHEntgG

Jedes Krankenhaus ist nach § 21 KHEntgG verpflichtet, seine DRG-Falldaten an das InEK zu übermitteln. Das Datenmeldeverfahren nutzt ein strukturiertes XML-Format. Das InEK aggregiert diese Daten und stellt anonymisierte Auswertungen für Forschung und Planung bereit.

## Verknüpfungen

- [[DRG]] (G-DRG-System, das das InEK entwickelt und pflegt)
- [[ICD-10-GM]] (Diagnoseklassifikation, die in den DKR und DRG-Groupern eingesetzt wird)
- [[OPS]] (Operationen- und Prozedurenschlüssel, Grundlage der DRG-Kodierung)
- [[KIS]] (KIS-Systeme implementieren DRG-Grouper und DKR für die Krankenhausabrechnung)
- [[SGB-V]] (§ 17b SGB V: gesetzliche Grundlage für das G-DRG-System)
- [[GKV]] (Kostenträger, der über den GKV-Spitzenverband am InEK beteiligt ist)

## Quellen

- [InEK GmbH: Das Institut](https://www.g-drg.de/das-institut)
- [InEK GmbH: Kodierrichtlinien 2026](https://www.g-drg.de/ag-drg-system-2025/kodierrichtlinien/kodierrichtlinien)
- [Wikipedia: Institut für das Entgeltsystem im Krankenhaus](https://de.wikipedia.org/wiki/Institut_f%C3%BCr_das_Entgeltsystem_im_Krankenhaus)
- [§ 17b KHG – Krankenhausfinanzierungsgesetz](https://www.gesetze-im-internet.de/khg/__17b.html)
