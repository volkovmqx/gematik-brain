---
title: DiGA
audience: [technical, non-technical]
tags: [technologies, digitale-gesundheit, medizinprodukt, bfarm]
aliases: [Digitale Gesundheitsanwendungen, App auf Rezept, DiGAV]
maturity: immergruen
---

# DiGA

Digitale Gesundheitsanwendungen (DiGA) sind CE-zertifizierte Medizinprodukte in Form von Apps, die Ärzte verordnen können und die von der gesetzlichen Krankenversicherung erstattet werden.

## Erklärt für Einsteiger

Stell dir vor, dein Arzt verschreibt dir nicht eine Pille, sondern eine App. Das ist eine DiGA. Die App hilft dir zum Beispiel dabei, mit einer chronischen Krankheit umzugehen, Schmerzen zu dokumentieren oder mentale Gesundheit zu verbessern. Genau wie ein Medikament muss die App zugelassen sein und nachweislich funktionieren. Du bekommst einen Aktivierungscode von deiner Krankenkasse und lädst die App kostenlos herunter.

## Überblick

DiGA wurden mit dem [[DVG|Digitale-Versorgung-Gesetz (DVG)]] im Jahr 2019 in Deutschland eingeführt. Seitdem können Ärzte und Psychotherapeuten DiGA auf einem Kassenrezept verordnen. Die [[GKV]] übernimmt die Kosten für alle 73 Millionen GKV-Versicherten.

Das Bundesinstitut für Arzneimittel und Medizinprodukte ([[BfArM]]) ist die zuständige Zulassungsbehörde. Es führt das öffentliche DiGA-Verzeichnis, in dem alle zugelassenen Apps mit Informationen zu Indikation, Evidenz und Erstattungsbetrag aufgeführt sind.

DiGA sind rechtlich Medizinprodukte der Risikoklasse I oder IIa nach der europäischen Medizinprodukteverordnung ([[MDR]]). Sie müssen ein CE-Kennzeichen tragen. Zusätzlich zur MDR gelten die speziellen Anforderungen der Digitale-Gesundheitsanwendungen-Verordnung ([[DiGAV]]).

Anwendungsfelder sind breit: Kardiologie, Diabetologie, Psychotherapie, Physiotherapie, Gynäkologie und mehr. Typische DiGA helfen bei der Dokumentation von Symptomen, bei Verhaltensinterventionen oder bei der Unterstützung einer laufenden Therapie.

## Technische Details

### Fast-Track-Verfahren

Das BfArM prüft DiGA-Anträge im sogenannten Fast-Track-Verfahren innerhalb von maximal drei Monaten. Geprüft wird:

1. **Sicherheit und Funktionstüchtigkeit**: Entspricht der MDR, kein Schaden für Patienten
2. **Datenschutz**: Daten dürfen nur in Deutschland verarbeitet werden; strenge Anforderungen an Datensparsamkeit
3. **Interoperabilität**: DiGA müssen Daten in interoperablen Formaten exportieren ([[FHIR]]-basierter [[MIO]] DiGA Toolkit)
4. **Positiver Versorgungseffekt**: Hersteller müssen entweder direkt einen Nutzennachweis erbringen oder werden vorläufig aufgenommen und müssen den Nachweis innerhalb von 12 Monaten erbringen

### Interoperabilität und FHIR

Laut DiGAV Anlage 2 müssen DiGA Datenexporte in interoperablen Formaten ermöglichen. Der Datenexport soll dem MIO DiGA Toolkit entsprechen, das auf [[FHIR]] R4 basiert. Das BfArM stellt einen FHIR-Validator im DiGA-Antragsportal bereit.

### Schnittstelle zu Medizingeräten: HDDT

Seit § 374a [[SGB V]] können Medizinprodukte und Implantate (z.B. Insulinpumpen, Herzmonitore, Spirometer) Messdaten direkt an DiGAs übertragen. Die technische Schnittstelle dafür heißt **HDDT** (Health Device Data Transfer). Die gematik veröffentlichte am 10. März 2026 den Release Candidate der HDDT-Spezifikation Version 26_1. Diese Version ergänzt die bereits vorhandenen [[FHIR]]-Profile für Diabetes (Glukosemessung) um Profile für:

- **Lungenfunktionsmessung** (Spirometrie-Daten)
- **Blutdruckmessung** (systolisch, diastolisch, Puls)

Die Kommentierungsfrist für den Release Candidate läuft bis 1. April 2026. HDDT-Daten folgen dem [[FHIR]] R4-Standard und können bei Einwilligung des Versicherten in die [[ePA]] übertragen werden.

### Integration mit der ePA

Ab dem **1. Februar 2026** müssen DiGA verpflichtend den Schreibzugriff auf die [[ePA]] unterstützen. Versicherte können DiGA-Daten mit ihrer Einwilligung automatisch in ihre [[ePA]] übertragen lassen. Die Übertragung ist konfigurierbar und endet automatisch nach Ablauf der Verordnungsdauer. Grundlage ist die Zweite Verordnung zur Änderung der [[DiGAV]], die gleichzeitig die Authentifizierung via [[Gesundheits-ID]] als Pflichtanforderung einführt. DiGA, die diese Anforderungen nicht erfüllen, riskieren den Ausschluss aus dem BfArM-Verzeichnis.

### Integration mit dem E-Rezept

Seit Oktober 2025 können DiGA als [[E-Rezept]] verordnet werden. Ein Pilotprojekt lief von Mai bis September 2025, rund 15 der im BfArM-Verzeichnis gelisteten DiGA wurden initial via E-Rezept verordnet. Wichtig: Das DiGA-E-Rezept wird nicht in der Apotheke, sondern direkt bei der Krankenkasse eingereicht. Die Kasse prüft und stellt daraufhin einen Gutscheincode für die DiGA-App aus.

### Integration mit dem TI-Messenger

Der [[TI-Messenger]] sieht eine Zugangsoption für Versicherte über integrierte Apps vor, darunter auch DiGA und Patientenportale.

### Zugangsweg

1. Arzt oder Psychotherapeut stellt Verordnung (Muster 16 oder E-Rezept) aus
2. Versicherter reicht Verordnung bei der Krankenkasse ein
3. Krankenkasse prüft und stellt Aktivierungscode aus (innerhalb von 3 Werktagen)
4. Versicherter lädt App aus dem App-Store und aktiviert sie mit dem Code
5. DiGA ist für die Verordnungsdauer (meist 90 Tage) freigeschaltet

### Abgrenzung: DiGA vs. DiPA

Seit 2022 gibt es auch [[DiPA|Digitale Pflegeanwendungen (DiPA)]], die analog zu DiGA für Pflegebedürftige konzipiert sind. DiPA werden durch die Pflegeversicherung erstattet und ebenfalls vom BfArM zugelassen.

## Verknüpfungen

- [[ePA]] (DiGA können Daten in die Patientenakte schreiben)
- [[E-Rezept]] (DiGA-Verordnungen per E-Rezept seit Oktober 2025 möglich)
- [[TI-Messenger]] (Zugang für Versicherte über DiGA-Apps vorgesehen)
- [[FHIR]] (Datenformat für DiGA-Interoperabilität, MIO DiGA Toolkit)
- [[Telematikinfrastruktur]] (Rahmeninfrastruktur, in die DiGA zunehmend integriert werden)
- [[Gesundheits-ID]] (Authentifizierungsmechanismus für DiGA-Nutzung)

## Quellen

- [BfArM: Wissenswertes zu DiGA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiGA/Wissenswertes/_artikel.html)
- [DiGA-Verzeichnis | BfArM](https://diga.bfarm.de/de)
- [Digitale Gesundheitsanwendungen | Bundesgesundheitsministerium](https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/online-ratgeber-krankenversicherung/arznei-heil-und-hilfsmittel/digitale-gesundheitsanwendungen)
- [DiGAV | gesetze-im-internet.de](https://www.gesetze-im-internet.de/digav/BJNR076800020.html)
