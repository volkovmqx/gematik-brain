---
title: Retaxation
audience: [technical, non-technical]
tags: [prozess, apotheke, abrechnung, e-rezept, krankenkasse]
aliases: [Retax, retaxieren, Retaxierung, Nullretax]
relevance:
  sectors: [apotheke, kasse, regulierung, arztpraxis]
  interests: [compliance, business]
---

# Retaxation

Eine **Retaxation** (kurz: Retax) ist die nachträgliche Streichung oder Kürzung der Vergütung durch eine Krankenkasse, wenn eine Apotheke ein Rezept fehlerhaft beliefert oder abgerechnet hat.

## Erklärt für Einsteiger

Stell dir vor, eine Apotheke gibt einem Patienten ein Medikament auf Kassenrezept heraus und schickt die Rechnung an die Krankenkasse. Wenn die Krankenkasse dabei einen Fehler findet, zum Beispiel eine falsche Menge oder ein fehlendes Pflichtfeld auf dem Rezept, kann sie die Zahlung verweigern oder zurückfordern. Das nennt man Retaxation. Im schlimmsten Fall bekommt die Apotheke gar nichts bezahlt, obwohl sie das Medikament bereits herausgegeben hat. Das ist eine sogenannte Nullretax.

## Überblick

Die Retaxation ist ein zentraler Sanktionsmechanismus im deutschen Apothekenrecht. Die Rechtsgrundlage liegt im [[SGB-V]] und in den Rahmenverträgen zwischen Kassen und Apothekenverbänden (insbesondere dem Rahmenvertrag nach § 129 SGB V).

Krankenkassen beauftragen in der Regel das [[Apothekenrechenzentrum]] mit der Prüfung eingereichter Rezepte. Dort werden die Abrechnungsdaten maschinell und stichprobenartig manuell auf Korrektheit geprüft.

### Häufige Retaxationsgründe

Retaxationen werden typischerweise aus folgenden Gründen ausgelöst:

- **Formfehler auf dem Rezept**: fehlende Arztstempel, fehlende Unterschriften, unleserliche Angaben (relevant vor allem beim [[Muster-16]]-Papierrezept)
- **Fehler bei der Arzneimittelauswahl**: Abgabe eines nicht-rabattierten Präparats, wenn ein Rabattvertragspartner-Präparat hätte abgegeben werden müssen
- **Dosierungsfehler**: Abgabe einer Menge, die nicht der verordneten Menge entspricht
- **Fehlende Genehmigung**: Abgabe eines genehmigungspflichtigen Arzneimittels ohne Vorliegen der Genehmigung der Krankenkasse
- **Überschreitung der Retaxationsfrist**: Rezept wurde erst nach Ablauf der Einlösefrist bei der Kasse eingereicht
- **Fehler bei der [[Dispensierung]]**: Abgabe eines Arzneimittels, das nicht der Verordnung entspricht, ohne dokumentierte Rücksprache mit dem Arzt

### Nullretax versus Teilretax

- **Nullretax**: Die Krankenkasse verweigert die gesamte Vergütung. Die Apotheke trägt die vollen Kosten des abgegebenen Medikaments.
- **Teilretax**: Nur ein Teil des Rechnungsbetrags wird gestrichen, etwa wenn die Menge falsch war, aber die Abgabe an sich korrekt.

Nullretaxen sind besonders kritisch für Apotheken, da sie bei teuren Spezialpräparaten (z.B. Onkologika) zu erheblichen wirtschaftlichen Schäden führen können.

> [!interesse-compliance] Retaxrisiken minimieren
> - Formfehler auf Papierrezepten (Muster-16) sind die häufigste Retaxursache; Apothekenpersonal sollte Rezepte vor Belieferung genau prüfen
> - Beim E-Rezept reduziert sich das Formfehlerrisiko, da viele Felder technisch validiert werden
> - Retaxationsfristen beachten: Krankenkassen haben in der Regel 12 Monate Zeit zur Retaxation nach Abrechnung
> - Dokumentationspflicht: Jede Rücksprache mit dem Arzt (z.B. bei Substitution) muss im [[AVS]] dokumentiert werden

## Technische Details

### Retaxation im E-Rezept-Workflow

Mit Einführung des [[E-Rezept]] ändert sich der Retaxationsprozess strukturell:

- **Technische Validierung**: Das [[E-Rezept-Fachdienst|E-Rezept-Fachdienst-System]] prüft Rezeptdaten beim Einlösen gegen definierte [[FHIR]]-Profile. Viele Formfehler, die beim Muster-16-Papierrezept möglich waren, sind beim E-Rezept technisch ausgeschlossen (z.B. fehlende PZN, fehlende Dosierung).
- **Reduziertes Formfehlerrisiko**: Da das E-Rezept digital von der Arztpraxis signiert und strukturiert erstellt wird, entfallen klassische Handschrift- und Stempelprobleme.
- **Verbleibende Retaxrisiken**: Trotz Digitalisierung bleiben Retaxrisiken bei inhaltlichen Fehlern (z.B. falsche Rabattvertragsabwicklung, fehlende Genehmigungen).

Das [[Apothekenrechenzentrum]] übernimmt die Abwicklung der E-Rezept-Daten und meldet Fehler in standardisierten Fehlercodes zurück.

### Widerspruchsverfahren

Apotheken können gegen eine Retaxation Widerspruch einlegen. Das Verfahren ist im Rahmenvertrag nach § 129 SGB V geregelt:

1. Apotheke erhält Retaxationsbescheid vom Rechenzentrum oder der Kasse
2. Apotheke legt schriftlich Widerspruch ein (Frist beachten)
3. Kasse prüft den Fall neu oder schaltet den Schlichtungsausschuss ein
4. Im Streitfall entscheidet ein Schiedsgericht oder das Sozialgericht

> [!interesse-business] Wirtschaftliche Relevanz
> - Retaxationen verursachen im deutschen Apothekenmarkt jährlich Millionenverluste
> - Apotheken investieren in spezialisierte Retax-Management-Software (z.B. in [[AVS]]-Modulen)
> - Das E-Rezept soll die Retaxquote mittelfristig senken, weil Formfehler seltener werden
> - Kassenindividuelle Retaxpraktiken führen zu Ungleichbehandlungen; Apothekenverbände ([[ABDA]]) fordern einheitlichere Regelungen

## Verknüpfungen

- [[E-Rezept]] (digitaler Rezeptweg, der Retaxrisiken verändert)
- [[Muster-16]] (Papierrezept, das durch Formfehler häufig zu Retaxationen führt)
- [[Apothekenrechenzentrum]] (verarbeitet Abrechnungsdaten und prüft auf Fehler)
- [[Dispensierung]] (der eigentliche Ausgabevorgang, der bei Fehlern Retaxation auslöst)
- [[AVS]] (Apothekenverwaltungssystem, in dem Retaxmanagement stattfindet)
- [[SGB-V]] (gesetzliche Grundlage der Retaxation über § 129 SGB V)
- [[ABDA]] (Dachverband der Apotheken, verhandelt Retaxrahmen mit Kassen)
- [[E-Rezept-Fachdienst]] (technische Plattform des E-Rezepts)
- [[FHIR]] (Datenstandard des E-Rezepts)

## Quellen

- [§ 129 SGB V: Abgabe von Arzneimitteln durch Apotheken – gesetze-im-internet.de](https://www.gesetze-im-internet.de/sgb_5/__129.html)
- [ABDA: Rahmenvertrag über die Arzneimittelversorgung nach § 129 Abs. 2 SGB V](https://www.abda.de/themen/apotheke/bundesvertraege/arzneimittelversorgung/)
- [Deutsche Apotheker Zeitung: Retaxationen und ihre Ursachen](https://www.deutsche-apotheker-zeitung.de/news/artikel/retaxationen)
- [Wikipedia: Retaxierung](https://de.wikipedia.org/wiki/Retaxierung)
