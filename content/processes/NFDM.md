---
title: NFDM - Notfalldatenmanagement
audience: [technical, non-technical]
tags: [prozess, nfdm, notfalldaten]
aliases: [Notfalldatenmanagement, NFD, Notfalldatensatz]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, pflege, patient]
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
> Die Notfalldaten sind freiwillig. Sie können Ihren Hausarzt bitten, sie auf Ihrer Gesundheitskarte zu speichern. Sie können die Daten jederzeit ändern oder löschen lassen. Im Notfall können Rettungskräfte die Daten lesen, auch wenn Sie nicht ansprechbar sind. Mit einer PIN können Sie den Zugriff zusätzlich schützen, zum Beispiel für sensible Diagnosen.

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

> [!patientenrecht] Patientenrecht: Notfalldaten freiwillig und selbst bestimmt
> Notfalldaten auf Ihrer Gesundheitskarte sind freiwillig. Niemand kann Sie dazu zwingen.
>
> **Was Sie wissen sollten:**
> - Sie müssen aktiv Ihren Arzt bitten, Notfalldaten zu speichern.
> - Sie können jederzeit einzelne Daten ändern oder alles löschen lassen.
> - Für die Löschung stellt Ihr Arzt keinen Eigenanteil in Rechnung. Die Löschung ist für Sie kostenlos.
>
> **So lassen Sie Daten löschen:**
> 1. Sprechen Sie Ihren Hausarzt an.
> 2. Sagen Sie, dass Sie die Notfalldaten löschen möchten.
> 3. Ihr Arzt löscht die Daten beim nächsten Praxisbesuch direkt von Ihrer Gesundheitskarte.
>
> Die Daten liegen nur auf Ihrer Gesundheitskarte, nicht in einer zentralen Datenbank.

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

> [!praxis-tipp] Praxis-Tipp: Notfalldaten aktiv anbieten
> Viele Patienten wissen nicht, dass sie Notfalldaten auf der eGK speichern können. Sprechen Sie sie aktiv an, besonders bei Patienten mit Polymedikation, Allergien oder chronischen Erkrankungen.
>
> In Ihrer Praxis bedeutet das:
> - Beim nächsten Termin eines Risikopatienten fragen: "Möchten Sie Ihre wichtigsten Daten auf der Gesundheitskarte speichern, damit der Rettungsdienst sie im Notfall sieht?"
> - Besonders sinnvoll für Patienten mit Antikoagulanzien, Insulintherapie, schweren Allergien oder seltenen Diagnosen.
> - Zeitaufwand: ca. 5-10 Minuten für die Erstanlage inkl. Dateneingabe und Signatur.
>
> Häufiger Fehler: Nur die Medikation einpflegen, aber Allergien vergessen. Beide Felder sind im Notfall gleich wichtig.

## Technische Details

- Speicherort: [[eGK]] (lokaler Speicher auf der Chipkarte)
- Zugriff: Über [[Konnektoren|Konnektor]] und [[Kartenterminal]]
- Berechtigung: Arzt mit [[HBA]]
- Datenformat: XML nach gematik-Spezifikation
- Offline-fähig: Keine TI-Verbindung für Lesezugriff nötig (die Daten liegen direkt auf der Karte)

> [!klinik-integration] Klinik-Integration: NFDM-Datenpflege im Entlassmanagement
> Ändert sich die Medikation oder entstehen neue Diagnosen während des stationären Aufenthalts, kann das Krankenhaus den Patienten auf eine NFDM-Aktualisierung hinweisen. Das ist ein wichtiger, oft übersehener Schritt im Entlassmanagement.
>
> **Schreibzugriff erfordert TI-Anbindung:** Für das Aktualisieren der Notfalldaten auf der eGK benötigt der Arzt einen [[HBA]] und einen TI-fähigen Konnektor mit Kartenterminal. Anders als der Lesezugriff ist der Schreibzugriff TI-abhängig. Klären Sie, ob das Entlassmanagement-Team Zugang zu einem TI-fähigen Kartenterminal hat, das nicht ausschließlich für die Notaufnahme reserviert ist.
> **KIS-Abgleich:** Das KIS sollte beim Entlassbrief prüfen, ob die stationäre Abschlussmedikation von dem abweicht, was als NFDM auf der eGK hinterlegt ist. Einige KIS-Systeme bieten NFDM-Vergleichsfunktionen an. Klären Sie mit Ihrem KIS-Hersteller, ob diese Funktion verfügbar ist.
> **Abgrenzung zur ePA:** NFDM auf der eGK und Notfalldaten in der [[ePA]] sind zwei separate Datensätze mit unterschiedlicher Zugriffslogik. Der Entlassbrief in der ePA ist für alle Folgebehandler sichtbar und deckt für die meisten klinischen Szenarien den gleichen Informationsbedarf ab.

> [!dev-quickstart] Dev Quickstart: NFD lesen und schreiben via Konnektor-API
> Der Konnektor stellt eine SOAP-Webservice-API bereit (Schnittstellenspezifikation gemSpec_Kon).
> ```bash
> # NFD lesen: ReadNFD-Aufruf via Konnektor SOAP-API
> curl -X POST "http://<konnektor-host>/service/nfdm" \
>   -H "Content-Type: text/xml; charset=utf-8" \
>   -H "SOAPAction: ReadNFD" \
>   -d '<?xml version="1.0"?>
> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
>                   xmlns:nfdm="http://ws.gematik.de/conn/nfdm/v1.0">
>   <soapenv:Body>
>     <nfdm:ReadNFD>
>       <nfdm:EhcHandle><CardHandle>EGK-HANDLE-123</CardHandle></nfdm:EhcHandle>
>     </nfdm:ReadNFD>
>   </soapenv:Body>
> </soapenv:Envelope>'
> ```
> Schreibzugriff (WriteNFD): Erfordert zusätzlich QES-Signatur via `SignDocument` mit HBA.
> Datenformat: XML nach `gemSpec_FM_NFDM`; Schema-Datei in der gematik-Spezifikation enthalten.
> - Konnektor-Schnittstelle: gemSpec_Kon (SOAP, WSDL-basiert)
> - Spezifikation: [fachportal.gematik.de/anwendungen/notfalldaten-management](https://fachportal.gematik.de/anwendungen/notfalldaten-management)
> - Testumgebung: TI-Referenzimplementierung (gematik TU) oder lokaler Software-Konnektor

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
