---
title: GOÄ
audience: [technical, non-technical]
tags: [standards, abrechnung, pkv, arzt, vergütung]
aliases: [Gebührenordnung für Ärzte, GOÄ 2024, Neue GOÄ, nGOÄ]
maturity: immergruen
---

# GOÄ

Die **Gebührenordnung für Ärzte (GOÄ)** ist das verbindliche Preisverzeichnis für privatärztliche Leistungen in Deutschland und regelt, was Ärzte Privatpatienten und Selbstzahlern in Rechnung stellen dürfen.

## Erklärt für Einsteiger

Wenn du als Kassenpatient zum Arzt gehst, zahlt deine Krankenkasse nach einem festen Punktesystem (dem [[EBM]]). Wenn du Privatpatient bist oder eine Leistung selbst bezahlst, gilt die GOÄ. Die GOÄ ist eine Art Preisliste: Für jede ärztliche Leistung gibt es eine festgelegte Nummer und einen Preis. Der Arzt darf in der Regel zwischen dem 1,0- und 3,5-fachen dieses Preises berechnen, je nach Schwierigkeitsgrad. So ein System gibt es, damit Ärzte nicht beliebig hohe Preise verlangen können.

## Überblick

Die GOÄ basiert auf der **Bundesärzteordnung (BÄO)** und wird als Bundesrechtsverordnung vom Bundesministerium für Gesundheit ([[BMG]]) im Einvernehmen mit dem Bundesministerium für Wirtschaft erlassen. Die aktuell gültige Fassung stammt aus dem Jahr **1982**, mit einer umfassenden Novellierung **1996**. Seitdem wurden nur einzelne Abschnitte angepasst.

Die GOÄ gilt für alle approbierten Ärzte, die außerhalb des vertragsärztlichen Systems (GKV) abrechnen. Sie ist die Abrechnungsgrundlage für:

- Privatversicherte (PKV-Mitglieder)
- Beihilfeberechtigte (Beamte und deren Angehörige)
- Selbstzahler (GKV-Versicherte, die Privatleistungen wünschen)
- Ausländische Patienten

Das Pendant zur GOÄ im vertragsärztlichen Bereich ist der [[EBM]] (Einheitlicher Bewertungsmaßstab), der für GKV-Versicherte gilt. Ein niedergelassener Arzt kann beide Abrechnungssysteme nebeneinander nutzen: für Kassenpatienten den EBM, für Privatpatienten die GOÄ.

### Reform: Neue GOÄ (nGOÄ)

Die GOÄ von 1996 gilt seit Jahrzehnten als veraltet: Viele moderne diagnostische und therapeutische Verfahren (Telemedizin, molekulare Diagnostik, minimalinvasive Chirurgie) sind nicht oder unzureichend abgebildet. Die [[Bundesaerztekammer|Bundesärztekammer (BÄK)]] verhandelt seit 2014 mit dem [[PKV]]-Verband über eine Novelle.

Ein gemeinsamer Reformentwurf (nGOÄ) existiert seit 2022. Der Entwurf wurde mehrfach zwischen BÄK, PKV-Verband und BMG verhandelt. Stand 2026 ist das Inkrafttreten der nGOÄ noch nicht abschließend terminiert. Kernpunkte der geplanten Reform:

- Digitalere Leistungsstruktur mit neuen Ziffern für Telemedizin und digitale Diagnostik
- Überarbeitung der Punktwerte
- Neue Beratungsziffern für präventive Leistungen

## Technische Details

### Aufbau der GOÄ

Die GOÄ ist in 18 Abschnitte gegliedert. Jede ärztliche Leistung hat eine vierstellige **Gebührenordnungsziffer (GOÄ-Nummer)**. Zu jeder Ziffer gibt es:

- Eine textliche Leistungsbeschreibung
- Einen Punktwert (in Punkten)
- Einen Punktwert in Euro (Punktwert × 5,82873 Cent = einfacher Gebührensatz)

Ein Arzt berechnet eine Leistung mit einem **Steigerungsfaktor**:

- Einfacher Satz (1,0): Untergrenze
- Regelhöchstsatz (2,3 bzw. 1,8 bei technischen Leistungen)
- Höchstsatz (3,5 bzw. 2,5 bei technischen Leistungen): nur bei besonderen Umständen, mit Begründung

Für besonders schwierige oder zeitaufwendige Einzelfälle ist ein Überschreiten des 3,5-fachen Satzes mit schriftlicher Begründung möglich (sogenanntes **analoges Vorgehen**).

### Abrechnung und Liquidation

Ärzte erstellen eine **Liquidation** (Rechnung) nach GOÄ. Die Rechnung muss für jede abgerechnete Leistung Datum, Ziffer, Leistungsbeschreibung und Steigerungsfaktor ausweisen. Bei Steigerungsfaktoren über dem Regelsatz ist eine schriftliche Begründung erforderlich.

Privatpatienten reichen die Rechnung bei ihrer [[PKV]] zur Erstattung ein. Beihilfeberechtigte reichen sie zusätzlich bei ihrer Beihilfestelle ein.

### Verhältnis zur TI und digitalen Versorgung

Die GOÄ ist nicht direkt Teil der [[Telematikinfrastruktur]], hat aber Berührungspunkte:

- **[[Telemedizin]]**: Videosprechstunden sind in der aktuellen GOÄ nur über Analogziffern abrechenbar. Die nGOÄ soll eigene Videosprechstunden-Ziffern einführen.
- **[[ePA]]**: Privatpatienten sind grundsätzlich nicht gesetzlich zur ePA verpflichtet (ePA gilt für GKV-Versicherte). Der Zugriff auf eine freiwillig angelegte ePA ist jedoch möglich.
- **Abgrenzung zu [[EBM]]**: Systeme wie das [[E-Rezept]] und die ePA sind primär für den GKV-Bereich entwickelt. Privatärzte nutzen die TI für Dienste wie [[KIM]] und [[E-Rezept]], rechnen diese Leistungen aber nach GOÄ ab.

### GOÄ und Zahnärzte / Tierärzte

Die GOÄ gilt nur für Humanmediziner. Für Zahnärzte gilt die **[[GOZ]]** (Gebührenordnung für Zahnärzte), für Tierärzte die **GOT** (Gebührenordnung für Tierärzte). Beide folgen einer ähnlichen Systematik.

## Verknüpfungen

- [[EBM]] (Pendant zur GOÄ im GKV-Bereich; Abrechnungsgrundlage für Kassenpatienten)
- [[PKV]] (private Krankenversicherung; erstattet Leistungen nach GOÄ)
- [[Bundesaerztekammer]] (verhandelt die GOÄ-Reform; zuständiger Berufsverband)
- [[BMG]] (Bundesministerium für Gesundheit; erlässt die GOÄ als Rechtsverordnung)
- [[Telemedizin]] (neue Leistungsformen, die in der aktuellen GOÄ unzureichend abgebildet sind)
- [[ePA]] (grundsätzlich auch für Privatpatienten nutzbar)
- [[DRG]] (stationäres Abrechnungssystem; gilt für Krankenhäuser unabhängig von GOÄ/EBM)

## Quellen

- [GOÄ Volltext - Bundesministerium der Justiz](https://www.gesetze-im-internet.de/go__1982/BJNR004560982.html)
- [Bundesärztekammer: GOÄ-Reform](https://www.bundesaerztekammer.de/aerzte/arztberuf/gebuehrenordnung/goae-reform/)
- [PKV-Verband: GOÄ-Informationen](https://www.pkv.de/wissen/behandlung/aerztliche-abrechnung/)
- [Wikipedia: Gebührenordnung für Ärzte](https://de.wikipedia.org/wiki/Geb%C3%BChrenordnung_f%C3%BCr_%C3%84rzte)
