---
title: NFDM - Notfalldatenmanagement
audience: [technical, non-technical]
tags: [prozess, nfdm, notfalldaten]
aliases: [Notfalldatenmanagement, NFD, Notfalldatensatz]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, patient]
  interests: [technik, patient]
maturity: wachsend
---

# NFDM - Notfalldatenmanagement

**NFDM** ermöglicht die Speicherung und den Abruf von Notfalldaten auf der [[eGK]]. Im Notfall können Rettungskräfte und Ärzte schnell auf wichtige medizinische Informationen zugreifen.

## Erklärt für Einsteiger

Stell dir vor, du bist bewusstlos und der Rettungsdienst kommt. Die wissen nicht, ob du Allergien hast, welche Medikamente du nimmst oder ob du einen Herzschrittmacher hast. Mit NFDM sind diese Infos auf deiner Gesundheitskarte gespeichert. Der Rettungssanitäter steckt die Karte ins Lesegerät und sieht sofort, worauf er achten muss. Das ist freiwillig: Dein Hausarzt trägt die Daten auf Wunsch ein.

## Überblick

NFDM ist eine freiwillige Anwendung. Versicherte können bei ihrem Arzt Notfalldaten auf der [[eGK]] speichern lassen.

### Gespeicherte Daten
- Vorerkrankungen und Diagnosen
- Aktuelle Medikation
- Allergien und Unverträglichkeiten
- Kontaktdaten behandelnder Ärzte
- Notfallkontakt (Angehörige)
- Hinweis auf Patientenverfügung, Organspende-Erklärung, Vorsorgevollmacht (in einem separaten Datensatz "Persönliche Erklärungen")

### Wer darf zugreifen?
- Ärzte, Zahnärzte und deren Personal
- Rettungskräfte (im Notfall)
- Apotheker und Psychotherapeuten (mit Einwilligung, außerhalb von Notfällen)

> [!interesse-patient]
> Die Notfalldaten sind freiwillig. Du kannst deinen Hausarzt bitten, sie auf deiner Gesundheitskarte zu speichern. Du kannst die Daten jederzeit ändern oder löschen lassen. Im Notfall können Rettungskräfte die Daten lesen, auch wenn du nicht ansprechbar bist. Mit einer PIN kannst du den Zugriff zusätzlich schützen, zum Beispiel für sensible Diagnosen.

> [!patientenrecht] Patientenrecht: Notfalldaten anlegen, ändern oder löschen
> Ihre Notfalldaten gehören Ihnen. Sie entscheiden allein, was gespeichert wird.
>
> **Sie haben das Recht:**
> - Die Notfalldaten jederzeit ändern zu lassen (beim Arzt oder Hausarzt)
> - Die Notfalldaten jederzeit vollständig löschen zu lassen
> - Einen PIN-Schutz zu aktivieren, der den Lesezugriff einschränkt
>
> **PIN-Schutz:** In der Standardeinstellung ist kein PIN aktiv. Mit einem PIN können nur Personen mit Ihrer Karte und Ihrer PIN die Daten lesen. Im Notfall können Ärzte den Datensatz aber auch ohne PIN lesen. So bleiben Sie im Notfall geschützt und gut versorgt.
>
> Sprechen Sie Ihren Hausarzt an, wenn Sie Änderungen wünschen.

## Ablauf

1. Versicherter bittet seinen Arzt (meistens den Hausarzt) um die Erfassung
2. Arzt benötigt: [[eGK]] im [[Kartenterminal]], eigenen [[HBA]], Primärsystem, TI-Zugang
3. Arzt erstellt standardisierten Datensatz im Primärsystem
4. Daten werden auf der [[eGK]] gespeichert und mit [[QES|qualifizierter elektronischer Signatur]] signiert
5. Versicherter kann den Zugriff optional mit einer PIN schützen

> [!praxis-tipp] Praxis-Tipp: Notfalldaten anlegen und abrechnen
> Das Anlegen von Notfalldaten ist eine vergütete Leistung. Seit 1. Januar 2026 gilt:
>
> - **GOP 01640**: Erstanlage des Notfalldatensatzes (80 Punkte, extrabudgetär)
> - **GOP 01643**: Aktualisierung des Notfalldatensatzes (39 Punkte, einmal pro Behandlungsfall im Jahr, extrabudgetär für zunächst 2 Jahre)
> - **GOP 01642**: Löschung auf ausdrücklichen Patientenwunsch
>
> Wichtig: GOP 01641 entfällt seit 1. Januar 2026. Sie wird nicht mehr automatisch von der KV zugesetzt.
>
> Checkliste für die MFA:
> 1. Patient fragt nach Notfalldaten: Termin beim Hausarzt vereinbaren (kein reiner MFA-Vorgang, da HBA des Arztes benötigt wird)
> 2. eGK des Patienten bereithalten
> 3. Arzt erstellt Datensatz im PVS und signiert mit HBA
> 4. GOP korrekt im Abrechnungssystem erfassen

> [!klinik-integration] Klinik-Integration: NFDM in der Notaufnahme
> Die Notaufnahme ist der häufigste Berührungspunkt des Krankenhauses mit NFDM. Eintreffende Patienten können bewusstlos oder nicht auskunftsfähig sein. Die eGK enthält dann die einzige sofort verfügbare strukturierte Medikations- und Allergie-Information.
>
> **Workflow Notaufnahme:** eGK des Patienten in das stationäre Kartenterminal stecken. Der diensthabende Arzt liest den Notfalldatensatz über das KIS-Primärsystem (Lesezugriff erfordert keinen TI-Zugang, da die Daten lokal auf der Karte liegen). Die ausgelesenen Daten (Allergien, Medikation, Vorerkrankungen) werden in die Patientenaufnahme im KIS übernommen.
> **HL7-Integration:** Die Aufnahme eines Notfallpatienten erzeugt im KIS eine ADT-A01-Nachricht (Aufnahme). NFDM-Daten können dabei als ergänzende Informationsquelle manuell oder per Schnittstelle in den Patientenstamm übernommen werden. Prüfen Sie, ob Ihr KIS einen automatisierten NFDM-zu-ADT-Datentransfer unterstützt.
> **Besonderheit PIN-Schutz:** Hat der Patient einen PIN-Schutz aktiviert, ist ein Lesezugriff ohne PIN nur bei medizinischem Notfall zulässig. Schulen Sie das Notaufnahme-Personal entsprechend. Dokumentieren Sie den Zugriff ohne PIN im KIS.
> **Kartenterminal-Bedarf:** Bei hohem Aufkommen (mehr als 80 Notaufnahmen täglich) sind mehrere Kartenterminals an Aufnahme und Ambulanz einzuplanen.

## Technische Details

- Speicherort: [[eGK]] (lokaler Speicher auf der Chipkarte)
- Zugriff: Über [[Konnektoren|Konnektor]] und [[Kartenterminal]]
- Berechtigung: Arzt mit [[HBA]]
- Datenformat: XML nach gematik-Spezifikation
- Offline-fähig: Keine TI-Verbindung für Lesezugriff nötig (die Daten liegen direkt auf der Karte)

> [!interesse-technik]
> Der Notfalldatensatz wird im XML-Format nach gemSpec_FM_NFDM auf der [[eGK]] gespeichert und mit der [[QES]] des Arztes signiert. Der Schreibzugriff erfolgt über den Konnektor-Befehl `SignDocument` (QES) und `WriteNFD`. Lesezugriff im Notfall ist ohne TI-Verbindung möglich, da die Daten direkt auf der Karte liegen. Spezifikation: [gemSpec_FM_NFDM - Fachportal gematik](https://fachportal.gematik.de/anwendungen/notfalldaten-management).

## Verknüpfungen

- Daten auf der [[eGK]] gespeichert
- Zugriff über [[Konnektoren]]
- Notfalldaten können auch in die [[ePA]] fließen
- Teil der [[Telematikinfrastruktur]]-Anwendungen

## Quellen

- [Notfalldaten-Management - Fachportal](https://fachportal.gematik.de/anwendungen/notfalldaten-management)
- [gematik: Notfalldaten - Fachportal](https://fachportal.gematik.de/anwendungen/notfalldaten)
