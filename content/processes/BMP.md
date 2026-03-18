---
title: BMP
audience: [technical, non-technical]
tags: [prozess, medikation, medikationsplan, papier, qr-code]
aliases: [Bundeseinheitlicher Medikationsplan, Medikationsplan, BMP]
---

# BMP

Der **BMP (Bundeseinheitlicher Medikationsplan)** ist der papierbasierte Medikationsplan für Kassenpatienten in Deutschland. Er wurde 2016 als DIN-A4-Ausdruck mit maschinenlesbarem QR-Code eingeführt und ist der unmittelbare Vorläufer des digitalen [[eMP|elektronischen Medikationsplans (eMP)]].

## Erklärt für Einsteiger

Stell dir vor, du nimmst fünf Medikamente von drei verschiedenen Ärzten. Kein Arzt kennt das vollständige Bild. Der Bundeseinheitliche Medikationsplan ist ein DIN-A4-Zettel, auf dem alle deine Medikamente übersichtlich stehen, mit einem QR-Code, den jeder Arzt und jede Apotheke einscannnen kann. So sieht jeder auf einen Blick, was du nimmst. Er war die erste verbindliche Form des Medikationsplans in Deutschland, bevor alles digital wurde.

## Überblick

Der BMP wurde zum **1. Oktober 2016** eingeführt, als Rechtsgrundlage gilt **§ 31a SGB V**. Seitdem haben Patienten mit mindestens drei verschreibungspflichtigen Dauermedikamenten Anspruch auf die Erstellung, Aktualisierung und Aushändigung eines BMP durch ihren Arzt. Apotheken sind verpflichtet, auf Wunsch den BMP zu aktualisieren.

Der BMP basiert auf einer gemeinsamen Vereinbarung von [[KBV]] (Kassenärztliche Bundesvereinigung), [[Bundesaerztekammer|Bundesärztekammer (BÄK)]] und [[ABDA]] (Deutscher Apothekerverband). Die technische Spezifikation (Anlage 3 der Vereinbarung) definiert Inhalt, Format und Codierung des QR-Codes.

### Inhalt

Ein BMP enthält:

- Patientenstammdaten (Name, Geburtsdatum, Ausstellungsdatum)
- Pro Medikament: Handelsname, Wirkstoff, Stärke, Darreichungsform, Dosierungsschema und Dosierungshinweis
- Freitextfelder für klinische Hinweise (z.B. Allergien, Hinweise zur Einnahme)
- QR-Code mit denselben Daten in maschinenlesbarer Form
- Ausstellende Arztpraxis

### Verhältnis zum elektronischen Medikationsplan

Der BMP und der [[eMP]] koexistieren übergangsweise:

| Merkmal | BMP | [[eMP]] |
|---|---|---|
| Form | Papier (DIN A4) | Digital in der [[ePA]] |
| Einführung | Oktober 2016 | März 2026 |
| Träger | Papier, kann auf [[eGK]] gespeichert werden | [[ePA]]-Aktensystem |
| Aktualisierung | Manuell durch Arzt oder Apotheke | Automatisch durch [[E-Rezept]]-Daten |
| Maschinenlesbarkeit | QR-Code | [[FHIR]] R4 |

Die gematik-Spezifikation `gemInfo_Überführung_BMP_in_eMP` beschreibt, wie bestehende BMP-Daten in das FHIR-basierte Format des eMP überführt werden. Arztpraxen, die den BMP bisher auf der [[eGK]] gespeichert haben, können die Daten damit in die neue Umgebung migrieren.

## Technische Details

### QR-Code-Format

Der QR-Code des BMP enthält die Medikationsdaten nach der Spezifikation in Anlage 3 der KBV/BÄK/ABDA-Vereinbarung. Das Format ist ein strukturiertes Textformat mit definierten Trennzeichen, kein FHIR oder XML. Es erlaubt die Codierung von maximal 40 Medikamentenpositionen in einem einzelnen QR-Code.

Primärsysteme ([[PVS]], [[AVS]]) können den QR-Code einlesen und automatisch die enthaltenen Medikationsdaten in das Patientenstammdatensystem übernehmen. Der Arzt prüft die importierten Daten und ergänzt oder korrigiert sie bei Bedarf.

### Speicherung auf der eGK

Neben dem Papierausdruck konnte der BMP auf dem Chip der [[eGK]] gespeichert werden. Das erforderte eine Verbindung zur [[Telematikinfrastruktur]] und den [[Konnektoren|Konnektor]] in der Praxis. Die Speicherung auf der eGK setzte sich in der Praxis weniger durch als der Papierausdruck.

Ab dem Rollout des digitalen [[eMP]] im März 2026 wird die eGK-Speicherung des BMP durch den Medication Service der [[ePA]] abgelöst. Der [[eMP]] ist vollständig [[FHIR]]-basiert und erlaubt automatische Aktualisierung durch Dispensierdaten aus dem [[E-Rezept]]-Fachdienst.

### Abgrenzung zum Notfallausweis

Der BMP ist kein Notfallausweis. Der [[NFDM|Notfalldatensatz (NFD)]] enthält kritische Informationen (Allergien, Diagnosen, aktuelle Medikation) für Notfallsituationen und wird auf der [[eGK]] gespeichert. Der BMP listet dagegen alle Dauermedikamente vollständig auf und ist für die reguläre Versorgung gedacht, nicht nur für Notfälle. Beide können parallel existieren.

## Verknüpfungen

- [[eMP]] (digitaler Nachfolger des BMP in der ePA)
- [[eGK]] (Chipkarte; konnte BMP-Daten speichern)
- [[AMTS]] (Arzneimitteltherapiesicherheit; BMP ist ein AMTS-Instrument)
- [[KBV]] (Ko-Herausgeberin der BMP-Spezifikation)
- [[ABDA]] (Ko-Herausgeberin der BMP-Spezifikation)
- [[Bundesaerztekammer]] (Ko-Herausgeberin der BMP-Spezifikation)
- [[SGB V]] (§ 31a: gesetzlicher Anspruch auf den Medikationsplan)
- [[ePA]] (Nachfolge-Plattform für den digitalen Medikationsplan)
- [[E-Rezept]] (Dispensierdaten fließen automatisch in den eMP ein)
- [[FHIR]] (Datenformat des eMP, der den BMP ablöst)
- [[PVS]] (Primärsystem; erstellt und liest den BMP QR-Code)
- [[NFDM]] (Notfalldatensatz; ergänzendes Dokument auf der eGK)

## Quellen

- [KBV: Medikationsplan](https://www.kbv.de/html/medikationsplan.php)
- [Bundesärztekammer: BMP Anlage 3 Spezifikation](https://www.bundesaerztekammer.de/fileadmin/user_upload/_old-files/downloads/pdf-Ordner/Telematik/BMP_Anlage3.pdf)
- [gematik Fachportal: Elektronischer Medikationsplan](https://fachportal.gematik.de/anwendungen/elektronischer-medikationsplan)
- [BARMER: Medikationsplan](https://www.barmer.de/gesundheit-verstehen/medizin/medikamente/wofuer-medikationsplan-1056422)
