---
title: DRG
audience: [technical, non-technical]
tags: [konzepte, abrechnung, krankenhaus, kodierung, finanzierung]
aliases: [Diagnosis Related Groups, Diagnosebezogene Fallgruppen, G-DRG, Fallpauschalen]
---

# DRG

DRG (Diagnosis Related Groups, deutsch: Diagnosebezogene Fallgruppen) ist das Abrechnungssystem, nach dem Krankenhäuser in Deutschland seit 2004 ihre stationären Leistungen gegenüber den Krankenkassen abrechnen.

## Erklärt für Einsteiger

Früher bezahlten Krankenkassen Krankenhäuser nach Liegezeit: Je länger ein Patient blieb, desto mehr Geld gab es. Das führte dazu, dass Patienten manchmal länger im Krankenhaus blieben als nötig. Seit 2004 gilt das DRG-System: Das Krankenhaus bekommt einen festen Betrag pro Behandlungsfall, unabhängig davon, wie lange der Patient liegt. Die Höhe des Betrages hängt davon ab, welche Diagnosen und Behandlungen dokumentiert wurden. Ein Knieersatz bekommt zum Beispiel einen anderen Betrag als eine einfache Blinddarmentfernung.

## Überblick

Das deutsche DRG-System heißt offiziell G-DRG (German Diagnosis Related Groups). Es wurde auf Basis des australischen AR-DRG-Systems entwickelt und 2003 freiwillig, ab 2004 verpflichtend eingeführt. Rechtsgrundlage ist § 17b des [[KHG|Krankenhausfinanzierungsgesetzes (KHG)]].

Verantwortlich für die Pflege und Weiterentwicklung des G-DRG-Systems ist das **[[InEK|Institut für das Entgeltsystem im Krankenhaus (InEK GmbH)]]** in Siegburg. Das InEK aktualisiert den DRG-Katalog jährlich auf Basis von Kostendaten, die Kalkulationskrankenhäuser aus ganz Deutschland einreichen. Der Katalog enthält rund 1.200 unterschiedliche DRG-Codes.

Das G-DRG-System veränderte die Anreizstruktur im Krankenhausbetrieb grundlegend. Effiziente Behandlung wird belohnt, lange Liegezeiten werden nicht mehr vergütet. Gleichzeitig wuchs der Druck auf Krankenhäuser, Diagnosen und Prozeduren vollständig und korrekt zu dokumentieren, weil jede fehlende Kodierung zu Einnahmeverlusten führt.

## Technische Details

### Kodierung als Grundlage

Die DRG-Klassifikation basiert auf zwei deutschen Kodiersystemen, die beide vom [[BfArM]] gepflegt werden:

- **[[ICD-10-GM]]**: Codiert alle Diagnosen des stationären Aufenthalts, inklusive Haupt- und Nebendiagnosen
- **[[OPS]]** (Operationen- und Prozedurenschlüssel): Codiert alle durchgeführten Prozeduren und Eingriffe

Neben den Codes fließen weitere klinische Daten in die Gruppierung ein: Alter des Patienten, Geschlecht, Geburtsgewicht bei Neugeborenen, Beatmungsstunden und Entlassungsart.

### Der DRG-Grouper

Die Zuordnung eines Behandlungsfalls zu einer DRG erfolgt automatisch durch eine Software, den **DRG-Grouper**. Der Grouper ist bundesweit verpflichtend. Er verarbeitet alle kodierten Diagnosen und Prozeduren und liefert als Ergebnis einen vierstelligen alphanumerischen DRG-Code, zum Beispiel:

- **B70A**: Apoplex mit bestimmten Nebendiagnosen
- **I44B**: Gelenkersatz der unteren Extremität ohne bestimmte Komplikationen

Der Code besteht aus einem Buchstaben für die Major Diagnostic Category (MDC), zwei Ziffern für die DRG innerhalb der MDC und einem Buchstaben für den Schweregrad.

### Relativgewicht und Basisfallwert

Jede DRG hat ein **Relativgewicht** (auch: Kostengewicht). Es ist ein dimensionsloser Wert, der die relative Kostenintensität eines Behandlungsfalls im Vergleich zum durchschnittlichen Krankenhausfall ausdrückt. Ein Relativgewicht von 2,0 bedeutet, dass dieser Fall doppelt so teuer ist wie ein Durchschnittsfall.

Das InEK berechnet die Relativgewichte jährlich aus den Kostendaten der Kalkulationskrankenhäuser.

Der **Landesbasisfallwert** ist der Eurobetrag, der dem Relativgewicht 1,0 entspricht. Er wird in jedem Bundesland separat zwischen den Krankenhäusern und den Krankenkassen verhandelt. Für 2025 liegt er je nach Bundesland zwischen etwa 4.100 und 4.600 Euro.

Die Vergütung eines Behandlungsfalls errechnet sich so:

```
Vergütung = Relativgewicht × Landesbasisfallwert
```

Beispiel: Eine DRG mit Relativgewicht 1,5 in einem Bundesland mit Landesbasisfallwert 4.200 Euro ergibt eine Vergütung von 6.300 Euro.

### Verbindung zu ICD-10-GM und OPS im Krankenhausalltag

Das [[KIS]] (Krankenhausinformationssystem) ist das zentrale Werkzeug für die DRG-Kodierung. Ärzte dokumentieren Diagnosen nach [[ICD-10-GM]] und Prozeduren nach [[OPS]] direkt im KIS. Das KIS übergibt die Daten an den integrierten oder angebundenen Grouper, der die DRG ermittelt. Die Kodierung wird vom medizinischen Controlling des Krankenhauses geprüft, bevor die Abrechnung an die Krankenkassen übermittelt wird.

Krankenkassen haben das Recht, Abrechnungen durch den Medizinischen Dienst (MD) prüfen zu lassen. Streitigkeiten über die korrekte Kodierung sind im deutschen Krankenhausmarkt häufig.

### PEPP: Pauschalierende Entgelte für Psychiatrie und Psychosomatik

Psychiatrische und psychosomatische Krankenhäuser unterliegen nicht dem G-DRG-System. Für sie gilt seit 2013 das [[PEPP]]-System (Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik), das ebenfalls vom InEK gepflegt wird, aber auf anderen Strukturprinzipien basiert.

## Verknüpfungen

- [[ICD-10-GM]] (Diagnosekodierung als Grundlage des G-DRG-Groupers)
- [[OPS]] (Prozedurkodierung als zweite Grundlage des G-DRG-Groupers)
- [[InEK]] (Institut für das Entgeltsystem im Krankenhaus, Herausgeber des G-DRG-Katalogs)
- [[KIS]] (Krankenhausinformationssystem, in dem DRG-Kodierung durchgeführt wird)
- [[BfArM]] (pflegt ICD-10-GM und OPS, die Codierbasis des G-DRG-Systems)
- [[GKV]] (bezahlt die Fallpauschalen an die Krankenhäuser)
- [[KHZG]] (Krankenhauszukunftsgesetz, förderte Digitalisierung von KIS-Systemen)

## Quellen

- [vdek: Fallpauschalensystem und Diagnosis Related Groups](https://www.vdek.com/vertragspartner/Krankenhaeuser/fallpauschalen_drg.html)
- [Reimbursement Institute: DRG einfach erklärt](https://reimbursement.institute/glossar/drg/)
- [Reimbursement Institute: Relativgewicht](https://reimbursement.institute/glossar/relativgewicht/)
- [Reimbursement Institute: Basisfallwert](https://reimbursement.institute/glossar/basisfallwert/)
- [BfArM: OPS - Zweck und Anwendung](https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/OPS-ICHI/OPS/Anwendung/Zweck/_artikel.html)
