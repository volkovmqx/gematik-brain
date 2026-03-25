---
title: InEK
audience: [technical, non-technical]
tags: [organisation, drg, krankenhaus, vergütung, kodierung]
aliases: [Institut für das Entgeltsystem im Krankenhaus, InEK GmbH, DRG-Institut]
relevance:
  sectors: [krankenhaus, kasse, regulierung, forschung]
  interests: [compliance, business]
maturity: immergruen
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
3. **[[PEPP]]-System**: Seit 2013 ist das InEK auch für das Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik (PEPP) zuständig.
4. **Nutzerbewertung**: Das InEK betreibt ein Antragsverfahren, über das Krankenhäuser, Fachgesellschaften und Kassen Anpassungsvorschläge für das G-DRG-System einreichen können.

### Kalkulationskrankenhaus-Netz

Die Grundlage für die DRG-Kalkulation sind die **Istkosten** von freiwillig teilnehmenden Krankenhäusern (Kalkulationskrankenhäuser). Für das G-DRG-System 2026 haben rund **260 Krankenhäuser** ihre Kostendaten geliefert, was mehrere Millionen Behandlungsfälle umfasst.

> [!interesse-compliance]
> Jedes Krankenhaus ist nach § 21 KHEntgG verpflichtet, jährlich seine DRG-Falldaten im XML-Format an das InEK zu übermitteln. Frist ist in der Regel der 31. März des Folgejahres. Fehlende oder fehlerhafte Datenmeldungen können zu Korrekturen der Vergütungsvereinbarungen führen. Zudem sind die Deutschen Kodierrichtlinien (DKR), die das InEK jährlich im September oder Oktober verabschiedet, ab dem 1. Januar des Folgejahres für alle Abrechnungen verbindlich. KIS-Systeme müssen den neuen Grouper-Algorithmus und die aktualisierten DKR jährlich vor dem Jahreswechsel einspielen.

> [!klinik-integration] Klinik-Integration: DRG-Grouper im KIS aktuell halten
> **KIS-Kontext:** Der DRG-Grouper ist ein zentrales Modul jedes KIS (SAP ISH, Dedalus ORBIS, iMedOne, CGM). Das InEK veröffentlicht jährlich im September/Oktober den neuen Grouper-Algorithmus und die aktualisierten Deutschen Kodierrichtlinien (DKR). KIS-Hersteller liefern daraufhin ein Grouper-Update, das vor dem **1. Januar** des Folgejahres eingespielt sein muss.
> **Deployment:** Das Grouper-Update ist kein trivialer Patch: Es erfordert in der Regel ein Wartungsfenster, einen Regressionstest der Abrechnungslogik und die Schulung des klinischen Kodierpersonals auf die neuen DKR. Planen Sie das Update-Fenster bereits bei Bekanntgabe der DKR-Entwürfe im Sommer ein. Ein verspätetes Update führt zu fehlerhafter Fallgruppierung und damit zu falschen Abrechnungsbeträgen.
> **Schnittstelle zur § 21-Meldung:** Die jährliche Datenmeldung nach § 21 KHEntgG (Frist: 31. März) wird direkt aus dem KIS generiert. Prüfen Sie, ob Ihr KIS das aktuelle XML-Exportformat des InEK unterstützt und ob die Datenqualitätsregeln des InEK-Prüfprogramms IMPORT fehlerfrei durchlaufen werden.

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

Die DKR 2026 wurden vom InEK am 26. September 2025 verabschiedet und gelten ab 1. Januar 2026.

> [!frist-warnung] Frist-Warnung: DKR-Jahreswechsel und Grouper-Update bis 1. Januar
> **Rechtsgrundlage:** § 17b Abs. 2 Satz 1 KHG i.V.m. der Vereinbarung zum G-DRG-System (§ 17b Abs. 2 KHG); die DKR werden von DKG und GKV-Spitzenverband als verbindliche Kodiergrundlage vereinbart.
> **Frist:** Die vom InEK im Herbst verabschiedeten Deutschen Kodierrichtlinien (DKR) sowie der neue Grouper-Algorithmus gelten ab dem **1. Januar** des Folgejahres für alle DRG-Abrechnungen verbindlich. Das KIS-Grouper-Update muss vor dem Jahreswechsel produktiv eingespielt sein. DKR 2027 werden voraussichtlich im September/Oktober 2026 verabschiedet und gelten ab 1. Januar 2027.
> **Handlungsbedarf:** Die verantwortliche Stelle muss das Grouper-Update des KIS-Herstellers zeitnah nach Veröffentlichung der DKR einspielen, Regressionstests durchführen und das Kodierpersonal auf geänderte Kodierregeln schulen. Für das Wartungsfenster ist eine Betriebsunterbrechung einzuplanen. Änderungen gegenüber dem Vorjahr sind im InEK-Definitionshandbuch dokumentiert.
> **Bei Nichtbeachtung:** Abrechnungen mit veralteten DKR oder Grouper-Algorithmus führen zu fehlerhafter DRG-Zuordnung. Die Krankenkasse kann korrekte Kodierung im MDK-/MD-Prüfverfahren einfordern; falsch abgerechnete Fälle sind rückzuvergüten.

> [!klinik-integration] Klinik-Integration: Kodierqualität und KIS-Dokumentation
> **Workflow-Bezug:** Die DRG-Erlösrealisierung hängt direkt von der Kodierqualität im KIS ab. Fehlende Nebendiagnosen oder falsche OPS-Codes können eine DRG in eine niedrigere Bewertungsgruppe verschieben. Typischer Schwachpunkt: Diagnosen und Prozeduren werden im KIS dokumentiert, aber nicht als abrechnungsrelevante ICD-10-GM- bzw. OPS-Codes klassifiziert.
> **KIS-Anbindung:** Für CDSS-gestützte Kodierhilfe (Clinical Decision Support) bieten Systeme wie 3M 360 Encompass, Optimed oder eigene KIS-Module eine automatische DRG-Vorschlagslogik. Die Schnittstelle zum KIS erfolgt häufig via HL7 v2 MDM- oder DFT-Nachrichten (Detail Financial Transactions). Prüfen Sie, ob Ihre Kodier-Software bidirektional mit dem KIS kommuniziert oder nur als Standalone-Tool läuft.
> **Kalkulationsanreiz:** Wenn Ihr Haus als Kalkulationskrankenhaus am InEK-Netz teilnimmt, müssen zusätzlich Kostendaten im DEK-Format (Datenerhebung Kostendaten) geliefert werden. Das setzt eine vollständige Kostenstellenintegration zwischen KIS und dem kaufmännischen System (z.B. SAP FI/CO) voraus.

### Datenmeldung nach §21 KHEntgG

Jedes Krankenhaus ist nach § 21 KHEntgG verpflichtet, seine DRG-Falldaten an das InEK zu übermitteln. Das Datenmeldeverfahren nutzt ein strukturiertes XML-Format. Das InEK aggregiert diese Daten und stellt anonymisierte Auswertungen für Forschung und Planung bereit.

> [!frist-warnung] Frist-Warnung: § 21 KHEntgG Datenmeldung Jahresdaten zum 31. März
> **Rechtsgrundlage:** § 21 Abs. 1 KHEntgG (Krankenhausentgeltgesetz) i.V.m. § 17b Abs. 8 KHG (Krankenhausfinanzierungsgesetz)
> **Frist:** Die Jahresdatenlieferung für das abgelaufene Kalenderjahr ist bis zum **31. März** des Folgejahres an das InEK zu übermitteln. Für das Datenjahr 2025 endet die Erstlieferungsfrist am 31. März 2026; sanktionsfreie Nachlieferungen sind bis zum 21. April 2026 möglich. Die Datenannahme schließt am 28. April 2026 endgültig.
> **Handlungsbedarf:** Das KIS-Exportmodul für § 21-Daten (XML-Format nach aktueller InEK-Datensatzbeschreibung) muss rechtzeitig aktualisiert sein. Die Datenqualität ist vorab mit dem InEK-Prüfprogramm IMPORT zu validieren. Verantwortlich für die fristgerechte Einreichung ist die Krankenhausleitung; technische Umsetzung liegt beim Medizincontrolling in Abstimmung mit dem KIS-Betrieb.
> **Bei Nichtbeachtung:** Fehlende oder fehlerhafte Datenmeldungen können gemäß § 21 Abs. 5 KHEntgG zu Abschlägen bei den Budgetverhandlungen mit den Krankenkassen führen. Zudem verliert das Haus den Anspruch auf korrekte Berücksichtigung in der DRG-Kalkulation des Folgejahres.

> [!interesse-business]
> Das InEK veröffentlicht auf Basis der § 21-Daten jährlich den **InEK-Datenbrowser**: eine öffentlich zugängliche Datenbank mit DRG-spezifischen Kostenstrukturen je Fachabteilung und Behandlungsfall. Für Krankenhäuser, Kassen und Beratungsunternehmen ist der Datenbrowser das zentrale Benchmark-Instrument für Erlösplanung und Vertragsverhandlungen. Krankenhäuser mit überdurchschnittlich hohen Sachkosten in einer DRG können erkennen, wo Optimierungspotenzial besteht. Kassen nutzen die Daten für die Budgetverhandlungen mit einzelnen Häusern.

## Verknüpfungen

- [[DRG]] (G-DRG-System, das das InEK entwickelt und pflegt)
- [[ICD-10-GM]] (Diagnoseklassifikation, die in den DKR und DRG-Groupern eingesetzt wird)
- [[OPS]] (Operationen- und Prozedurenschlüssel, Grundlage der DRG-Kodierung)
- [[KIS]] (KIS-Systeme implementieren DRG-Grouper und DKR für die Krankenhausabrechnung)
- [[SGB-V]] (§ 17b SGB V: gesetzliche Grundlage für das G-DRG-System)
- [[GKV]] (Kostenträger, der über den GKV-Spitzenverband am InEK beteiligt ist)

## Quellen

- [InEK GmbH: Das Institut](https://www.g-drg.de/das-institut)
- [InEK GmbH: Deutsche Kodierrichtlinien 2026](https://www.g-drg.de/ag-drg-system-2026/kodierrichtlinien/deutsche-kodierrichtlinien-2026)
- [Wikipedia: Institut für das Entgeltsystem im Krankenhaus](https://de.wikipedia.org/wiki/Institut_f%C3%BCr_das_Entgeltsystem_im_Krankenhaus)
- [§ 17b KHG – Krankenhausfinanzierungsgesetz](https://www.gesetze-im-internet.de/khg/__17b.html)
