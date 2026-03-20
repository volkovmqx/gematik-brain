---
title: Telemonitoring
audience: [technical, non-technical]
tags: [technologies, telemedizin, chroniker, vitalparameter, monitoring, gkv]
aliases: [Telemonitoring, Fernüberwachung, Telemedizinisches Monitoring, kardiales Telemonitoring]
relevance:
  sectors: [arztpraxis, krankenhaus, pflege, patient, kasse, hersteller, startup, it-dienstleister]
  interests: [compliance, technik, business, patient]
maturity: setzling
---

# Telemonitoring

**Telemonitoring** ist die kontinuierliche oder regelmäßige Fernüberwachung physiologischer Parameter chronisch kranker Patienten durch Leistungserbringer, ohne dass der Patient in die Praxis kommen muss.

## Erklärt für Einsteiger

Wer an einer schweren Herzinsuffizienz leidet, muss regelmäßig seinen Blutdruck, sein Gewicht und seine Herzfrequenz messen. Früher brachte der Patient die Werte bei jedem Termin mit. Beim Telemonitoring übermittelt ein Gerät zu Hause die Messwerte automatisch ans Arztteam. Steigt das Gewicht plötzlich an, weil sich Wasser im Körper ansammelt, sieht das die Praxis sofort und kann handeln, bevor der Patient ins Krankenhaus muss.

> [!patientenrecht] Patientenrecht: Teilnahme am Telemonitoring
> Telemonitoring ist freiwillig. Sie entscheiden, ob Sie mitmachen.
>
> **Ihre Rechte:**
> - Sie haben das Recht, Fragen zu stellen, bevor Sie zustimmen.
> - Sie dürfen jederzeit aufhören. Ihre Behandlung geht dann normal weiter.
> - Ihr Arzt muss Sie schriftlich aufklären, welche Daten übertragen werden und wer sie sieht.
>
> **Was kann ich fragen?**
> - "Wer sieht meine Messwerte?"
> - "Werden meine Daten an andere Stellen weitergegeben?"
> - "Was passiert, wenn ich aufhöre?"
>
> Ihre Krankenkasse übernimmt die Kosten für das Telemonitoring, wenn Sie an einem Herzinsuffizienz-Programm (DMP) teilnehmen und Ihr Arzt die Leistung verordnet.

## Überblick

Telemonitoring ist ein Teilbereich der [[Telemedizin]]. Der Schwerpunkt liegt auf der regelmäßigen oder kontinuierlichen Erfassung von Vitalparametern bei Patienten mit chronischen Erkrankungen wie:

- **Herzinsuffizienz**: Körpergewicht, Blutdruck, Herzfrequenz, ggf. implantierte Herzgeräte-Daten
- **Hypertonie**: Blutdruckwerte
- **COPD/Asthma**: Peakflow, Sauerstoffsättigung
- **Diabetes**: Blutzucker (CGM, kontinuierliche Glukosemessung)
- **Schlafapnoe**: CPAP-Gerätedaten

In Deutschland ist Telemonitoring seit 2021 eine erstattungsfähige GKV-Leistung für Herzinsuffizienz-Patienten. Rechtsgrundlage ist **§ 137f SGB V** (Strukturierte Behandlungsprogramme, DMP).

> [!praxis-tipp] Praxis-Tipp: Telemonitoring anbieten als Hausarzt
> Hausarztpraxen können Telemonitoring bei Herzinsuffizienz anbieten, ohne eine Genehmigung der KV einzuholen. Für die Indikationsstellung und Betreuung rechnen Sie über EBM-Ziffern ab.
>
> So starten Sie:
> 1. Patienten identifizieren: NYHA-Stadium II oder III, stabile Herzinsuffizienz.
> 2. Überweisung ans Telemedizinische Zentrum (TMZ) ausstellen oder selbst betreuen.
> 3. Messgeräte für den Patienten organisieren. Viele TMZ-Anbieter liefern Waage und Blutdruckmessgerät direkt an den Patienten.
> 4. EBM-Ziffer abrechnen: GOP 03325/03326 (Hausarzt, Indikationsstellung und Betreuungspauschale).
>
> Zeitaufwand: Erstgespräch ca. 20 Minuten. Laufender Aufwand: ca. 5-10 Minuten pro Quartal für die Betreuungsdokumentation.

> [!interesse-compliance]
> **Rechtsgrundlage:** § 137f [[SGB-V]] i.V.m. der DMP-Anforderungsrichtlinie des [[G-BA]].
>
> **Erstattungsfähigkeit:** Seit dem 1. Juli 2021 können Ärzte Telemonitoring bei Herzinsuffizienz über EBM-Ziffern abrechnen. Hausärztlich: GOP 04325/04326 (Indikationsstellung und Betreuungspauschale). Fachärztlich über ein Telemedizinisches Zentrum (TMZ): GOP 13584 (Telemonitoring mittels kardialem Aggregat), 13586 (mittels externer Messgeräte), 13587 (Zuschlag intensiviertes Telemonitoring). Voraussetzung: Genehmigung der KV und Erfüllung der Anforderungsrichtlinie des G-BA (Schweregrade NYHA II-III).
>
> **DiGA als Ergänzung:** Einige [[DiGA]] kombinieren Patientenbegleitung mit Telemonitoring-Elementen, sind aber regulatorisch anders eingestuft.

## Technische Details

### Systemarchitektur

Ein Telemonitoring-System besteht aus mehreren Schichten:

1. **Messgeräte** am Patienten: Medizinische Messgeräte (Waage, Blutdruckmessgerät, Pulsoximeter, CGM-Sensor) oder implantierte Geräte (Herzschrittmacher, ICD, CRT-D mit Fernauslesefunktion)
2. **Datenübertragung**: Bluetooth/NFC zum Patientengerät (Smartphone oder Hub), dann via App oder Telematik an die Monitoring-Plattform
3. **Monitoring-Plattform**: Zentrale Server-Infrastruktur, die Messwerte empfängt, speichert, Alarmregeln prüft und Dashboards für das medizinische Team bereitstellt
4. **Klinisches Dashboard**: Web-Oberfläche für Ärzte, Pflegepersonal oder spezialisierte Monitoring-Zentren

### Alarmierung und Interventionskette

Das System wertet Messwerte gegen konfigurierte Grenzwerte aus:

- **Grüne Zone**: Werte im Sollbereich, keine Aktion erforderlich
- **Gelbe Zone**: Werte außerhalb des Sollbereichs, Pflegetelefon oder Arzt kontaktiert Patienten
- **Rote Zone**: Kritische Abweichung, unmittelbare ärztliche Intervention oder Notaufnahme

Die Grenzwerte werden patientenindividuell vom behandelnden Arzt konfiguriert.

### Regulatorische Einordnung der Geräte

Geräte im Telemonitoring-System unterliegen der europäischen [[Medizinprodukte]]-Regulierung:

- **Klassische Messgeräte** (Waage, Blutdruckmessgerät): Klasse I oder IIa nach [[MDR]]
- **Implantate mit Telemetrie** (Herzschrittmacher, ICD): Klasse III nach MDR
- **In-vitro-Diagnostika** (CGM-Systeme für Glukose): Klasse C nach [[IVDR]]
- **Software-Plattformen**: Können als [[Medizinprodukte]] eingestuft sein, wenn sie klinische Entscheidungen unterstützen

### Datenschutz und IT-Sicherheit

> [!patientenrecht] Patientenrecht: Ihre Daten beim Telemonitoring
> Ihre Messwerte sind Gesundheitsdaten. Sie sind besonders geschützt.
>
> **Sie haben das Recht:**
> - zu erfahren, wo Ihre Daten gespeichert werden.
> - zu wissen, wer Zugriff auf Ihre Messwerte hat.
> - Ihre Daten löschen zu lassen, wenn Sie die Teilnahme beenden.
>
> **Was sollten Sie wissen?** Bei implantierten Herzgeräten (z.B. Herzschrittmacher) fließen Daten oft an Server des Geräteherstellers im Ausland. Fragen Sie Ihren Arzt: "Wohin gehen meine Herzgeräte-Daten?"
>
> Bei Fragen zum Datenschutz können Sie sich an den Datenschutzbeauftragten Ihrer Krankenkasse oder Ihres Arztes wenden.

Telemonitoring-Daten sind Gesundheitsdaten nach Art. 9 [[DSGVO]]. Anforderungen:

- Ende-zu-Ende-Verschlüsselung der Übertragungswege
- Zugriffsprotokollierung
- [[DSFA]] (Datenschutz-Folgenabschätzung) vor Einführung
- Auftragsverarbeitungsvertrag mit Plattformbetreiber
- ISO 27001 oder [[ISMS]] für die Monitoring-Plattform

> [!frist-warnung] Frist-Warnung: DSFA vor Inbetriebnahme und laufende Überprüfung
> **Rechtsgrundlage:** Art. 35 Abs. 1 und Abs. 3 lit. b DSGVO; BfDI-Muss-Liste (Liste der DSFA-pflichtigen Verarbeitungen, Stand 2023).
> **Frist:** Die [[DSFA]] muss abgeschlossen sein, bevor das Telemonitoring-System in Betrieb genommen wird. Eine nachträgliche DSFA ist nicht zulässig und stellt eine eigenständige Rechtsverletzung dar.
> **Handlungsbedarf:** Die kontinuierliche Verarbeitung von Gesundheitsdaten über Telemonitoring-Plattformen ist eine umfangreiche Verarbeitung besonderer Datenkategorien nach Art. 9 DSGVO und damit zwingend DSFA-pflichtig. Der Datenschutzbeauftragte ist nach Art. 35 Abs. 2 DSGVO einzubeziehen. Bei wesentlichen Änderungen am System (neuer Anbieter, neue Datenkategorien, KI-gestützte Alarmauswertung) muss die DSFA aktualisiert werden. Mit dem Plattformbetreiber ist ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO abzuschließen.
> **Bei Nichtbeachtung:** Verarbeitungen ohne vorherige DSFA können nach Art. 83 Abs. 4 DSGVO mit Bußgeldern bis zu 10 Millionen Euro oder 2 % des weltweiten Jahresumsatzes geahndet werden.

> [!praxis-tipp] Praxis-Tipp: Datenschutz-Pflichten vor dem Start
> Bevor Sie ein Telemonitoring-System einführen, sind zwei Dinge Pflicht:
>
> 1. **Auftragsverarbeitungsvertrag (AVV)** mit dem Plattformanbieter abschließen. Ohne AVV dürfen Sie keine Patientendaten übermitteln. Seriöse Anbieter stellen den AVV auf Anfrage bereit.
> 2. **Datenschutz-Folgenabschätzung ([[DSFA]])** durchführen. Telemonitoring ist eine systematische Überwachung von Patienten: einer der klassischen DSFA-Pflichtfälle. Ihr Datenschutzbeauftragter muss einbezogen werden.
>
> Häufiger Fehler: Das System wird eingeführt, ohne dass ein AVV vorliegt. Das fällt erst bei der nächsten Datenschutz-Prüfung auf. Nachholung kostet 1-2 Wochen.
>
> Tipp: Fragen Sie den Anbieter beim ersten Gespräch explizit nach AVV-Muster und DSFA-Dokumentation.

> [!dev-quickstart] Dev Quickstart: Telemonitoring-Messwert als FHIR Observation senden
> Messwerte werden als `Observation`-Ressource (FHIR R4) an die Monitoring-Plattform übermittelt.
> ```bash
> POST https://<monitoring-plattform>/fhir/Observation
> Content-Type: application/fhir+json
> Authorization: Bearer <access-token>
>
> {
>   "resourceType": "Observation",
>   "status": "final",
>   "code": {
>     "coding": [{
>       "system": "http://loinc.org",
>       "code": "29463-7",
>       "display": "Body weight"
>     }]
>   },
>   "subject": { "identifier": { "system": "http://fhir.de/sid/gkv/kvid-10", "value": "A123456789" }},
>   "effectiveDateTime": "2026-03-20T08:00:00+01:00",
>   "valueQuantity": { "value": 78.5, "unit": "kg", "system": "http://unitsofmeasure.org", "code": "kg" }
> }
> ```
> Weitere relevante LOINC-Codes: `8480-6` (systolischer Blutdruck), `59408-5` (SpO2), `2339-0` (Blutglukose).
> FHIR-Ressourcen für Alarm: `Flag` (aktiver Alarm), `Device` (Messgerät mit `deviceName` und `serialNumber`).

> [!interesse-technik]
> **Geräteintegration:** Messdaten fließen typischerweise via Bluetooth LE (BLE) vom Gerät auf ein Smartphone/Hub. Von dort per HTTPS/REST oder HL7 FHIR an die Monitoring-Plattform. FHIR-Ressourcen: `Observation` (Messwert), `Device` (Messgerät), `Flag` (Alarm).
>
> **FHIR-Profil für Körpergewicht:** `Observation.code = LOINC 29463-7` (Body weight), `valueQuantity` in kg.
>
> **GKV-Schnittstelle:** Für die Abrechnung über EBM muss das Monitoring-System mit dem [[PVS]] des Arztes kommunizieren. Standardschnittstelle noch nicht einheitlich definiert; viele Hersteller nutzen proprietäre PVS-Module.

### Abgrenzung zu DiGA

| Merkmal | Telemonitoring | [[DiGA]] |
|---|---|---|
| Primärer Zweck | Überwachung und Alarmierung | Therapieunterstützung |
| Arzt-Einbindung | Zentral (Monitoring-Team) | Optional |
| Regulierung | § 137f SGB V (DMP) | § 33a SGB V (DiGA-V) |
| Erstattung | EBM-Pauschalen (Arzt) | Krankenkassen-Verordnung |
| Zulassung | MDR/IVDR (Gerät) | BfArM-DiGA-Verzeichnis |

### Telemonitoring bei implantierten Herzgeräten

Herzschrittmacher und implantierbare Kardioverter-Defibrillatoren (ICD) moderner Generation können Gerätestatus und Herzrhythmusdaten über Telemetrie an ein Heimmonitoring-System übertragen. Anbieter sind u.a. Medtronic (CareLink), Abbott (Merlin.net), Boston Scientific (LATITUDE). Die Daten werden über proprietäre Protokolle an Herstellerserver übertragen und den behandelnden Kardiologen in einem Web-Portal zur Verfügung gestellt.

Die Integration dieser proprietären Systeme in deutsche Primärsysteme ([[KIS]], [[PVS]]) ist noch nicht einheitlich gelöst.

> [!klinik-integration] Klinik-Integration: Telemonitoring-Daten im KIS
> **Implantat-Daten und KIS:** Die proprietären Heimmonitoring-Portale (Medtronic CareLink, Abbott Merlin.net, Boston Scientific LATITUDE) sind in der Regel nicht direkt mit dem KIS integriert. Kardiologische Befunde aus diesen Portalen müssen manuell oder per PDF-Import ins KIS übertragen werden. Einige KIS-Hersteller (z.B. Dedalus Orbis, Meierhofer M-KIS) bieten Schnittstellen oder Add-ons für strukturierte Implantat-Dokumentation nach OPS (z.B. 8-839 "Andere Maßnahmen bei Herzrhythmusstörungen").
>
> **DSFA-Pflicht:** Vor Einführung einer Telemonitoring-Plattform im Krankenhaus ist eine [[DSFA]] nach Art. 35 DSGVO Pflicht. Das gilt auch für cloud-basierte Monitoring-Dienste. Klären Sie Serverstandort (EU-Pflicht), Auftragsverarbeitungsvertrag und Zugriffsrechte.
>
> **ISiK Vitalparameter:** Ab ISiK Stufe 2 können Vitalparameter als FHIR-Observation über KIS-Schnittstellen abgerufen werden. Für nachstationäres Telemonitoring ist ein standardisierter FHIR-Datenaustausch zwischen Monitoring-Plattform und KIS wünschenswert, aber noch nicht verpflichtend geregelt.

> [!interesse-business]
> **Marktentwicklung:** Der deutsche Telemonitoring-Markt wächst seit Einführung der GKV-Erstattung 2021. Treiber: Alterung der Bevölkerung, Zunahme chronischer Erkrankungen, Ärztemangel. Segmente: Herstellereigene Systeme für Implantate, unabhängige Plattformen (z.B. Telemedizin-Zentren), DiGA-ähnliche Apps mit Monitoring-Komponenten. Hersteller-Netzwerk: Kardiovaskuläre Spezialisten mit DMP-Vertrag sind primäre Kunden.

## Verknüpfungen

- [[Telemedizin]] (Oberbegriff)
- [[DiGA]] (digitale Gesundheitsanwendungen; Abgrenzung und Überschneidung)
- [[SGB-V]] (§ 137f: Rechtsgrundlage für GKV-Erstattung Telemonitoring)
- [[G-BA]] (Gemeinsamer Bundesausschuss; DMP-Anforderungsrichtlinie)
- [[MDR]] (Medizinprodukteverordnung; für Telemonitoring-Geräte)
- [[IVDR]] (für In-vitro-Diagnostika im Telemonitoring)
- [[FHIR]] (Datenformat für Messwerte)
- [[ePA]] (zukünftiger Zielort für Telemonitoring-Daten)
- [[DSGVO]] (Datenschutzanforderungen für Gesundheitsdaten)
- [[DSFA]] (Pflicht vor Einführung von Telemonitoring-Systemen)

## Quellen

- [G-BA: DMP Herzinsuffizienz – Anforderungsrichtlinie](https://www.g-ba.de/themen/disease-management-programme/)
- [KBV: Telemonitoring Herzinsuffizienz – Abrechnung (EBM)](https://www.kbv.de/html/telemonitoring.php)
- [Wikipedia: Telemonitoring](https://de.wikipedia.org/wiki/Telemonitoring)
- [BMG: Digitale Versorgung in Deutschland](https://www.bundesgesundheitsministerium.de/themen/digitalisierung/)
