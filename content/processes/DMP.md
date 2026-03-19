---
title: DMP
audience: [technical, non-technical]
tags: [processes, chronische-erkrankung, gkv, g-ba, versorgung]
aliases: [Disease-Management-Programm, Disease-Management-Programme, Chronikerprogramm]
maturity: setzling
---

# DMP

Ein **Disease-Management-Programm (DMP)** ist ein strukturiertes Behandlungsprogramm für gesetzlich Versicherte mit einer bestimmten chronischen Erkrankung, das eine evidenzbasierte, sektorenübergreifende Versorgung nach einheitlichen Standards sichert.

## Erklärt für Einsteiger

Stell dir vor, du hast Diabetes. Ohne besonderes Programm gehst du mal zum Hausarzt, mal zum Diabetologen, mal wird der Blutdruck gemessen, mal nicht. Ein DMP ist wie ein fester Fahrplan: Du schreibst dich ein, bekommst regelmäßige Kontrolltermine, der Arzt dokumentiert immer dieselben Werte, und du weißt genau, was als nächstes kommt. Das macht die Behandlung verlässlicher und verhindert, dass wichtige Schritte vergessen werden.

## Überblick

DMPs wurden in Deutschland mit dem Gesetz zur Reform des Risikostrukturausgleichs im Jahr 2002 eingeführt. Rechtsgrundlage ist § 137f [[SGB V]]. Der [[G-BA]] (Gemeinsamer Bundesausschuss) legt in der DMP-Anforderungen-Richtlinie (DMP-A-RL) fest, für welche chronischen Krankheiten ein DMP aufgelegt werden kann und welche inhaltlichen Anforderungen es erfüllen muss.

Die Krankenkassen schließen auf Basis dieser Richtlinie Verträge mit Leistungserbringern (Hausärzte, Fachärzte, Krankenhäuser) und melden die Programme beim Bundesamt für Soziale Sicherung (BAS) zur Zulassung an.

### Aktuelle DMP-Indikationen

Zum Stand 31.12.2025 hat der G-BA DMP-Anforderungen für elf Erkrankungen beschlossen. Acht davon sind zugelassen und können von Krankenkassen als Programme angeboten werden:

- Diabetes mellitus Typ 2 (seit 2002)
- Brustkrebs (seit 2002)
- Koronare Herzkrankheit (KHK) (seit 2003)
- Diabetes mellitus Typ 1 (seit 2004)
- Asthma bronchiale (seit 2005)
- COPD (chronisch obstruktive Lungenerkrankung) (seit 2005)
- Osteoporose (seit 2023)
- Rheumatoide Arthritis (seit Juli 2025)

Vier weitere Indikationen, für die der G-BA Anforderungen beschlossen hat, befinden sich noch in der Umsetzungsphase. Die Krankenkassen können noch keine zugelassenen Programme anbieten:

- Chronische Herzinsuffizienz
- Chronischer Rückenschmerz
- Depression
- Adipositas (Erwachsene sowie Kinder und Jugendliche)

### Einschreibung und Teilnahme

Die Teilnahme ist freiwillig. Voraussetzung ist eine gesicherte Diagnose durch den behandelnden Arzt sowie die schriftliche Einwilligung des Versicherten zur Datenverarbeitung. Der koordinierende Arzt (meist der Hausarzt) leitet die Einschreibung ein. Versicherte können das Programm jederzeit verlassen.

Rund 7,7 Millionen GKV-Versicherte sind laut BAS in mindestens einem DMP eingeschrieben (Stand 2025).

### Finanzierung

Die Krankenkassen erhalten aus dem Gesundheitsfonds pro eingeschriebenem Versicherten eine Programmkostenpauschale (PKP). Diese betrug 2025 monatlich 149,16 Euro und steigt 2026 auf 152,28 Euro (laut KBV). Die PKP deckt u.a. die Vergütung der Dokumentations- und Koordinationsleistungen der Ärzte.

## Technische Details

### Dokumentation

Ein Kernelement der DMPs ist die strukturierte, elektronische Dokumentation. Der koordinierende Arzt erfasst bei jeder Verlaufskontrolle (quartalsweise oder halbjährlich) standardisierte Datensätze:

- **Indikationsübergreifender Teil**: Stammdaten, Versichertenidentifikation ([[KVNR]]), Datum
- **Indikationsspezifischer Teil**: krankheitsbezogene Messwerte, Medikation, Schulungsteilnahme, Zielvereinbarungen

Die Datensätze werden elektronisch an Datenannahmestellen übermittelt, von dort an Auswertungsstellen weitergeleitet und pseudonymisiert für Qualitätsberichte aufbereitet.

### Schnittstellen zur TI

Der [[G-BA]] hat im März 2025 digitale Module für DMP Diabetes mellitus Typ 1 und 2 beschlossen. Diese Module erlauben die digitale Unterstützung der Versorgung, z.B. durch [[DiGA|digitale Gesundheitsanwendungen (DiGA)]] zur Begleitung zwischen Arztterminen. Perspektivisch sollen DMP-Dokumentationen auch über die [[ePA]] zugänglich sein, sodass alle beteiligten Leistungserbringer auf dieselben Verlaufsdaten zugreifen können.

Die Abrechnung der Dokumentations- und Koordinationsleistungen erfolgt über die [[Kassenaerztliche-Vereinigung|Kassenärztliche Vereinigung]] auf Basis des [[EBM]].

### Qualitätssicherung

Die Krankenkassen müssen dem BAS bis zum 30. September jeden Jahres einen Qualitätsbericht vorlegen. Auswertungsstellen erstellen auf Basis der pseudonymisierten Daten Feedbackberichte für die teilnehmenden Praxen. Diese zeigen die Erreichung von Qualitätszielen (z.B. HbA1c-Wert bei Diabetes, Raucherquote, Schulungsteilnahme) im regionalen Vergleich.

## Verknüpfungen

- [[G-BA]] (beschließt die DMP-Anforderungen-Richtlinie)
- [[SGB V]] (§ 137f SGB V: Rechtsgrundlage für DMPs)
- [[GKV]] (Träger der DMP-Verträge und Finanzierung)
- [[EBM]] (Abrechnungsgrundlage für DMP-Leistungen)
- [[ePA]] (perspektivische Datenablage für DMP-Dokumentation)
- [[DiGA]] (digitale Module zur DMP-Begleitung)
- [[KVNR]] (Versichertenidentifikation in der Dokumentation)
- [[Kassenaerztliche-Vereinigung]] (Zulassung der teilnehmenden Ärzte und Abrechnung)
- [[AMTS]] (Arzneimitteltherapiesicherheit, relevant im DMP-Medikationsmanagement)

## Quellen

- [G-BA: Disease-Management-Programme](https://www.g-ba.de/themen/disease-management-programme/)
- [Bundesamt für Soziale Sicherung: DMP-Grundlegende Informationen](https://www.bundesamtsozialesicherung.de/de/themen/disease-management-programme/dmp-grundlegende-informationen/)
- [KBV: DMP für Arztpraxen](https://www.kbv.de/html/dmp.php)
- [G-BA: DMP-Anforderungen-Richtlinie](https://www.g-ba.de/richtlinien/83/)
