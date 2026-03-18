---
title: AMTS - Arzneimitteltherapiesicherheit
audience: [technical, non-technical]
tags: [prozess, amts, medikation, sicherheit, epa]
aliases: [AMTS, Arzneimitteltherapiesicherheit, Medikationssicherheit]
---

# AMTS - Arzneimitteltherapiesicherheit

**AMTS** bezeichnet alle Maßnahmen, die verhindern sollen, dass Patienten durch Fehler bei der Arzneimitteltherapie Schaden nehmen.

## Erklärt für Einsteiger

Stell dir vor, du gehst zu drei verschiedenen Ärzten, und jeder verschreibt dir ein Medikament. Keiner weiß, was die anderen verschrieben haben. Manche dieser Medikamente vertragen sich aber nicht miteinander und können gefährliche Wechselwirkungen auslösen. AMTS ist das Ziel, genau das zu verhindern. Digitale Werkzeuge wie der Medikationsplan und die [[ePA]] sorgen dafür, dass alle Ärzte sehen können, welche Medikamente ein Patient einnimmt. So können Fehler frühzeitig erkannt werden.

## Überblick

AMTS steht für Arzneimitteltherapiesicherheit. Der Begriff beschreibt die Gesamtheit aller Prozesse und Systeme, die sicherstellen, dass Medikamente korrekt verordnet, abgegeben und eingenommen werden. Fehler in der Arzneimitteltherapie gehören zu den häufigsten vermeidbaren Schäden im Gesundheitswesen.

Typische Risiken, die AMTS adressiert:

- **Wechselwirkungen**: Zwei Medikamente, die zusammen gefährlich werden
- **Kontraindikationen**: Ein Medikament, das bei einer bestimmten Vorerkrankung nicht gegeben werden darf
- **Doppelverordnungen**: Derselbe Wirkstoff wird von mehreren Ärzten gleichzeitig verschrieben
- **Fehldosierungen**: Falsche Menge oder falsches Anwendungsintervall

Die gesetzliche Grundlage für digitale AMTS-Unterstützung wurde mit dem [[E-Health-Gesetz]] (2015) und dem [[DVG|Digitale-Versorgung-Gesetz (2019)]] geschaffen. Patienten mit fünf oder mehr Dauermedikamenten haben gesetzlichen Anspruch auf einen Medikationsplan.

### Medikationsplan und ePA

Der **[[eMP|elektronische Medikationsplan (eMP)]]** ist das zentrale Instrument der digitalen AMTS-Unterstützung. Er listet alle aktuellen Medikamente eines Patienten inklusive Wirkstoff, Handelsname, Stärke, Dosierungsform und Einnahmehinweisen.

Seit März 2026 ist der eMP in die [[ePA]] integriert. Die ePA enthält daneben eine elektronische Medikationsliste, in die [[E-Rezept]]-Daten automatisch einfließen. Ärzte und Apotheker können so den aktuellen Medikationsstatus eines Patienten vollständig einsehen, sofern der Patient den Zugriff erlaubt.

Die ePA-Version 3.1.3 führt ergänzend **AMTS-relevante Zusatzinformationen (AMTS-rZI)** ein. Dabei handelt es sich um strukturierte Daten, die klinische Hinweise zur Therapiesicherheit enthalten und an den Medikationsdatensatz angehängt werden.

### Verbindung zum E-Rezept

Das [[E-Rezept]] ist eng mit dem AMTS-Prozess verbunden. Wenn ein [[E-Rezept]] ausgestellt wird, kann das Primärsystem des Arztes ([[PVS]]) automatisiert gegen bekannte Wechselwirkungen und Kontraindikationen prüfen. Die Daten des eingelösten [[E-Rezept]]s fließen in die [[ePA]] ein und vervollständigen so das Bild der aktuellen Medikation.

## Technische Details

### FHIR-Datenmodell

Die Medikationsdaten in der [[ePA]] basieren auf [[FHIR]] R4. Die relevanten FHIR-Ressourcen sind:

- `Medication`: Beschreibung des Arzneimittels (Wirkstoff, Form, Stärke)
- `MedicationRequest`: Verordnung durch den Arzt
- `MedicationStatement`: Dokumentierter Medikamenteneinsatz (auch Selbstmedikation)
- `MedicationAdministration`: Dokumentierte Einnahme
- `MedicationDispense`: Abgabe durch die Apotheke (aus [[E-Rezept]])

Die KBV definiert spezifische [[FHIR]]-Profile für den Medikationsplan ([[MIO]] Medikationsplan). Diese Profile standardisieren, wie Medikationsdaten in der TI dargestellt werden.

### Überführung des Bundeseinheitlichen Medikationsplans

Vor der ePA gab es den **[[BMP|Bundeseinheitlichen Medikationsplan (BMP)]]** in Papierform. Er wurde als maschinenlesbarer QR-Code auf einem DIN-A4-Blatt gedruckt. Die Spezifikation `gemInfo_Überführung_BMP_in_eMP` beschreibt, wie bestehende BMP-Daten in das eMP-Format der [[ePA]] überführt werden.

### Zugriff auf Medikationsdaten in der ePA

Zugriff auf die Medikationsdaten in der [[ePA]] haben:

- Ärzte und andere Leistungserbringer über ihr Primärsystem und den [[Fachdienst|ePA-Fachdienst]]
- Apotheker über das [[AVS|Apothekenverwaltungssystem (AVS)]]
- Versicherte selbst über die ePA-App

Der Zugriff ist strikt an die Einwilligung des Patienten gebunden und wird in der [[ePA]] protokolliert.

### Primärsysteme und AMTS-Software

Die eigentliche Interaktionsprüfung (Wechselwirkungscheck) findet nicht im [[Fachdienst]] der [[ePA]] statt, sondern in den Primärsystemen ([[PVS]], [[KIS]], [[AVS]]). Diese integrieren Datenbanken wie [[ABDA]] oder MMI-Pharmindex, die Arzneimitteldaten und bekannte Interaktionen enthalten. Die [[ePA]] liefert dazu die vollständige Datenbasis aller Medikamente.

## Verknüpfungen

- [[eMP]] (elektronischer Medikationsplan, das zentrale AMTS-Instrument)
- [[ePA]] (zentrale Datenbasis für alle Medikationsdaten eines Patienten)
- [[E-Rezept]] (Verordnungsdaten fließen automatisch in den Medikationsprozess ein)
- [[FHIR]] (Datenformat für alle Medikationsressourcen in der TI)
- [[NFDM]] (Notfalldaten enthalten ebenfalls Medikationsinformationen)
- [[KBV]] (definiert FHIR-Profile für den elektronischen Medikationsplan)
- [[Fachdienst]] (ePA-Fachdienst stellt Medikationsdaten bereit)

## Quellen

- [ePA für alle - Fachportal gematik](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [Elektronischer Medikationsplan - Fachportal gematik](https://fachportal.gematik.de/anwendungen/elektronischer-medikationsplan)
- [KBV: Medikationsplan](https://www.kbv.de/html/medikationsplan.php)
- [ePA Spezifikation 3.1.3 - gemspec.gematik.de](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
