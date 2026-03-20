---
title: DRG
audience: [technical, non-technical]
tags: [konzepte, abrechnung, krankenhaus, kodierung, finanzierung]
aliases: [Diagnosis Related Groups, Diagnosebezogene Fallgruppen, G-DRG, Fallpauschalen]
relevance:
  sectors: [krankenhaus, kasse, regulierung]
  interests: [compliance, business]
maturity: wachsend
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

> [!klinik-integration] Klinik-Integration: KIS und DRG-Grouper
> **Jährlicher Versionswechsel:** ICD-10-GM und OPS werden jedes Jahr zum 1. Januar aktualisiert. Das KIS und der integrierte Grouper müssen rechtzeitig auf die neue Version eingespielt werden. Verantwortlich ist die IT-Abteilung in Abstimmung mit dem Medizincontrolling. Fehlender Update-Stand führt zu fehlerhafter DRG-Zuordnung und Abrechnungsrisiken.
>
> **KIS-Grouper-Integration:** Verbreitete KIS-Systeme (SAP ISH, Dedalus Orbis, iMedOne, CGM Medico, Meierhofer M-KIS) integrieren zertifizierte Grouper direkt. Die InEK-Zertifizierung des Groupers ist Pflichtvoraussetzung für die Abrechnung. Prüfen Sie: Ist Ihr KIS mit dem InEK-zertifizierten Grouper für die aktuelle Version 2026 kompatibel?
>
> **KHVVG-Umstellung 2027:** Ab 1. Januar 2027 ändert sich die Vergütungsstruktur durch das Krankenhauszukunftsverbesserungsgesetz (KHVVG): [[Vorhaltevergütung]] tritt neben die DRG-Fallpauschalen. Das KIS muss die neue Leistungsgruppen-Dokumentation unterstützen. Klären Sie mit Ihrem KIS-Hersteller, ob ein Update rechtzeitig vorliegt.

> [!interesse-compliance]
> Krankenhäuser sind nach § 17b KHG zur vollständigen und korrekten Kodierung verpflichtet. Fehlkodierungen können zu Rückforderungen durch Krankenkassen führen. Der Medizinische Dienst (MD) prüft Abrechnungen stichprobenartig. Seit dem MDK-Reformgesetz (2020) sind Prüfquoten gedeckelt: Krankenkassen dürfen maximal 5 Prozent der abgerechneten Fälle prüfen lassen. Falsch kodierte Fälle führen zu Korrekturrechnungen und können die Zulassungsquote für MDK-Prüfungen erhöhen.

> [!frist-warnung] Frist-Warnung: Umstellung auf Deutsche Kodierrichtlinien 2026
> **Rechtsgrundlage:** § 17b Abs. 1 Krankenhausfinanzierungsgesetz (KHG) i.V.m. der Vereinbarung der Selbstverwaltungspartner zum G-DRG-System 2026.
> **Frist:** Die Deutschen Kodierrichtlinien (DKR) Version 2026 (veröffentlicht am 20. November 2025) sind verbindlich für alle stationären Fälle, die ab dem 1. Januar 2026 aufgenommen werden.
> **Handlungsbedarf:** Krankenhäuser müssen sicherstellen, dass ihr [[KIS]] und der DRG-Grouper auf den Fallpauschalen-Katalog 2026, die OPS 2026 und die ICD-10-GM 2026 umgestellt sind. Medizincontrolling und Kodierfachkräfte müssen die Änderungen der DKR 2026 kennen. Abrechnungen für Fälle ab 1. Januar 2026 nach den alten Kodierrichtlinien 2025 sind fehlerhaft.
> **Bei Nichtbeachtung:** Krankenkassen können fehlerhafte Abrechnungen beanstanden. Korrekturrechnungen müssen innerhalb der gesetzlichen Ausschlussfristen nach § 275c Abs. 4 SGB V (15 Monate) gestellt werden.

> [!interesse-business]
> Der InEK-DRG-Katalog wird jährlich aktualisiert. Neue Behandlungsverfahren (z.B. neue Operationstechniken, teure Medikamente) können neue DRGs erhalten oder bestehende aufwerten. Krankenhäuser, die bei der Kalkulation mitmachen (ca. 280 Kalkulationskrankenhäuser), liefern die Kostendaten. Frühzeitige Kodierung neuer Verfahren und Teilnahme an InEK-Kalkulationen können die Vergütung verbessern.

> [!frist-warnung] Frist-Warnung: KHVVG-Systemwechsel ab 1. Januar 2027
> **Rechtsgrundlage:** Krankenhausversorgungsverbesserungsgesetz (KHVVG), in Kraft seit 18. April 2025, §§ 135e ff. SGB V.
> **Frist:** Ab 1. Januar 2027 wird das Vergütungssystem grundlegend umgestellt. Krankenhäuser erhalten dann eine [[Vorhaltevergütung]] (bis zu 60 % der Betriebskosten), die unabhängig von der Fallzahl ausgezahlt wird. Die verbleibenden 40 % der Vergütung laufen weiterhin über DRG-Fallpauschalen.
> **Vorfristen:** Das InEK stellt bis zum 10. Dezember 2026 jedem Krankenhaus per Bescheid das individuelle Vorhaltevolumen fest. Die erstmalige Prüfung der Qualitätskriterien durch den Medizinischen Dienst muss bis 30. Juni 2026 abgeschlossen sein.
> **Handlungsbedarf:** Krankenhäuser müssen die eigene Leistungsgruppen-Zuordnung prüfen, da das Vorhaltevolumen von den zugewiesenen Leistungsgruppen abhängt. Medizincontrolling und Geschäftsführung sollten die Bescheidfeststellung durch das InEK im Dezember 2026 engmaschig begleiten. Einspruchsfristen gegen fehlerhafte Bescheide müssen gewahrt werden.

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
