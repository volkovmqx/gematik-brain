---
title: eGK - Elektronische Gesundheitskarte
audience: [technical, non-technical]
tags: [infrastruktur, egk, karte, identitaet]
---

# eGK - Elektronische Gesundheitskarte

Die **elektronische Gesundheitskarte (eGK)** ist der Versichertenausweis der gesetzlichen Krankenversicherung. Sie dient als Identitätsnachweis und Zugangsmittel zur [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Die eGK ist die Chipkarte, die du von deiner Krankenkasse bekommst. Du steckst sie beim Arzt ins Lesegerät, und damit weist du nach, dass du versichert bist. Auf dem Chip sind dein Name, deine Adresse und deine Versichertennummer gespeichert. Seit es das [[E-Rezept]] gibt, steckst du die Karte auch in der Apotheke ein, um dein Rezept abzuholen. Du kannst auch freiwillig Notfalldaten ([[NFDM]]) auf der Karte speichern lassen, zum Beispiel Allergien oder Medikamente, damit Rettungskräfte im Notfall Bescheid wissen.

## Überblick

Jeder gesetzlich Versicherte besitzt eine eGK. Die Karte hat einen Mikroprozessorchip mit zwei Schnittstellen: kontaktbehaftet (einstecken) und kontaktlos (NFC). Der Kartenkörper dient auch als visueller Ausweis.

### Funktionen
- Identifikation des Versicherten
- Zugang zur [[ePA]]
- Einlösen von [[E-Rezept]]en in der Apotheke
- [[VSDM]]: Online-Abgleich der Stammdaten
- [[NFDM]]: Speicherung von Notfalldaten (freiwillig)

### Daten auf der eGK
- Versichertenstammdaten (Name, Adresse, Versichertennummer)
- Notfalldaten (optional)
- Persönliche Erklärungen (Organspende, Patientenverfügung)

## Technische Details

### Chipkarte
- Kontaktbehaftete Schnittstelle (ISO 7816)
- Kontaktlose Schnittstelle (NFC, ISO 14443)
- Kryptografische Schlüsselpaare (RSA / ECC)
- X.509-Zertifikate der [[PKI|TI-PKI]]
- Kartenbetriebssystem (COS): Standardisierte elektrische Schnittstelle
- Objektsystem: Beschreibt die Anwendungen auf der Karte

### Besonderheiten
Smartcards im TI-System bestehen aus: Kartenkörper, Chipmodul (Mikroprozessor + Speicher), Betriebssystem, Objektsystem und individuellen Kartendaten. Die eGK ist höherer mechanischer Belastung ausgesetzt als andere Karten (weil sie im Geldbeutel steckt).

## Verknüpfungen

- Wird gelesen über [[Konnektoren]] und Kartenterminals
- Zugang zu [[ePA]] und [[E-Rezept]]
- Stammdaten via [[VSDM]]
- Notfalldaten via [[NFDM]]
- Teil der [[Telematikinfrastruktur]]

## Quellen

- [Smartcards - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/smartcards)
- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
