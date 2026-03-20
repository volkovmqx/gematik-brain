---
title: HL7 v2
audience: [technical]
tags: [standards, interoperabilität, krankenhaus, nachrichten, kis]
aliases: [HL7 Version 2, HL7v2, HL7 2.x, ADT, ORM, ORU]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, ti-infrastruktur]
  interests: [technik, business, compliance]
maturity: wachsend
---

# HL7 v2

**HL7 Version 2 (HL7 v2)** ist der weltweit am weitesten verbreitete Standard für den Nachrichtenaustausch zwischen klinischen IT-Systemen, insbesondere zwischen [[KIS|Krankenhausinformationssystem]], [[LIS]], [[RIS]] und [[PACS]].

## Erklärt für Einsteiger

Wenn ein Patient ins Krankenhaus aufgenommen wird, muss das Aufnahmesystem das Laborsystem, das Röntgensystem und die Pflegestation informieren. HL7 v2 ist die gemeinsame Sprache, die diese Systeme sprechen. Es ist wie ein standardisiertes Formular, das alle Beteiligten kennen: "Nachricht Typ ADT/A01" bedeutet "Patient aufgenommen", egal welcher Hersteller das System gebaut hat. Fast jedes Krankenhaus weltweit nutzt diese Sprache noch heute.

## Überblick

HL7 v2 wurde ab 1987 von Health Level Seven International (HL7 International) entwickelt. Die erste Produktionsversion war HL7 v2.1 (1990). Die verbreitetsten Versionen heute sind **v2.3**, **v2.3.1**, **v2.4** und **v2.5.1**. Die letzte veröffentlichte Version ist v2.9 (2019), aber die meisten produktiven Systeme nutzen ältere Versionen.

HL7 v2 ist der dominierende Standard für den Austausch klinischer Ereignisse in deutschen Krankenhäusern. Er ist in fast allen [[KIS|Krankenhausinformationssystemen]], Laborinformationssystemen ([[LIS]]) und Bildarchivierungssystemen ([[PACS]]) implementiert. Trotz des Aufkommens neuerer Standards wie [[FHIR]] wird HL7 v2 noch Jahrzehnte in Betrieb bleiben, weil es in Hunderten von Produktivsystemen tief integriert ist.

Im deutschen Gesundheitswesen ist HL7 v2 insbesondere für folgende Workflows relevant:

- **Patientenaufnahme/-entlassung/-verlegung (ADT)**: Synchronisation zwischen KIS und Subsystemen
- **Laboranforderungen (ORM) und -befunde (ORU)**: KIS zu [[LIS]] und zurück
- **Radiologieanforderungen**: KIS zu [[RIS]], mit Worklist-Management
- **Infektionsschutzmeldungen**: Einige [[DEMIS]]-Anbindungen nutzen HL7 v2 als Eingangsformat

> [!interesse-technik]
> HL7 v2 wird in deutschen Krankenhäusern oft über MLLP (Minimal Lower Layer Protocol) auf TCP/IP transportiert, typischerweise auf Port 2575. Der Standard selbst definiert keine Transportschicht: MLLP ist de-facto-Standard, aber nicht Teil von HL7. FHIR-Migration: gematik empfiehlt [[ISiK]] (FHIR R4) als Ablösung für den KIS-internen Nachrichtenaustausch, aber kein Ablösedatum für HL7 v2 ist gesetzt.

> [!interesse-business]
> HL7 v2 ist der wichtigste Integrationsstandard im Krankenhaus-IT-Markt. Nahezu alle Krankenhaus-IT-Integrationsprojekte erfordern HL7-v2-Kenntnisse. Integration Engines (Mirth Connect, Rhapsody, Camel Healthcare) übersetzen HL7 v2 zu FHIR und umgekehrt. Dieser Middleware-Markt wächst mit der ePA- und ISiK-Pflicht.

## Technische Details

### Nachrichtenstruktur

Eine HL7-v2-Nachricht besteht aus Segmenten. Jedes Segment wird durch einen dreistelligen Code identifiziert und enthält Felder, die durch das Pipe-Zeichen (`|`) getrennt sind. Felder können Komponenten (`^`) und Subkomponenten (`&`) enthalten. Wiederholungen werden durch `~` getrennt.

Ein Segment-Trenner ist immer ein Carriage Return (`\r`).

Beispiel: Minimale ADT^A01-Nachricht (Patientenaufnahme)

```
MSH|^~\&|KIS|KRANKENHAUS|LAB|LABOR|20260320120000||ADT^A01|MSG001|P|2.5.1
EVN|A01|20260320120000
PID|1||12345^^^KH||Mustermann^Max^||19800101|M|||Musterstraße 1^^Berlin^^10115^DE
PV1|1|I|B301^301^1|||12345^Müller^Hans|||SUR|||||||123456
```

- **MSH**: Message Header. Enthält Absender, Empfänger, Zeitstempel, Nachrichtentyp und Versions-ID.
- **EVN**: Event Type. Definiert den Auslöser der Nachricht.
- **PID**: Patient Identification. Enthält Patientenidentifikatoren, Namen, Geburtsdatum, Geschlecht, Adresse.
- **PV1**: Patient Visit. Enthält Aufnahmedaten: Station, Zimmer, Bett, aufnehmender Arzt.

### Wichtige Nachrichtentypen

| Nachrichtentyp | Trigger Event | Bedeutung |
|---|---|---|
| **ADT^A01** | Admit | Patientenaufnahme |
| **ADT^A02** | Transfer | Verlegung auf andere Station |
| **ADT^A03** | Discharge | Entlassung |
| **ADT^A04** | Register | Ambulanter Besuch / Notaufnahme-Registrierung |
| **ADT^A08** | Update | Patientenstammdaten geändert |
| **ADT^A11** | Cancel Admit | Aufnahme storniert |
| **ORM^O01** | Order | Laborauftrag, Radiologieauftrag |
| **ORU^R01** | Observation Result | Laborbefund, Radiologiebefund |
| **MDM^T02** | Document Status Change | Dokument (z.B. Arztbrief) fertiggestellt |
| **DFT^P03** | Post Detail Financial Transaction | Abrechnung |

> [!klinik-integration] Klinik-Integration: ADT/ORM-Feeds im KIS konfigurieren
> **ADT-Feed:** Jedes Subsystem (LIS, RIS, PACS, Pflegedokumentation) muss als Empfänger des ADT-Feeds konfiguriert werden. In SAP IS-H und Dedalus ORBIS erfolgt dies über den jeweiligen Nachrichtenbroker. Empfehlung: zentraler Message Router (z.B. Mirth Connect, Rhapsody), der ADT^A01/A02/A03 an alle Zielsysteme verteilt und ACK-Quittierungen überwacht.
>
> **ORM/ORU-Feed:** Laboranforderungen (ORM^O01) und Rückantworten (ORU^R01) müssen bidirektional konfiguriert und überwacht sein. Fehlende Acknowledgements führen zu lautlosem Auftragsverlust: Monitoring der MLLP-Queues ist betriebskritisch, nicht optional.
>
> **Z-Segmente bei Systemwechsel:** Beim KIS-Wechsel (z.B. SAP IS-H auf Nachfolgeprodukt oder Dedalus ORBIS) müssen proprietäre Z-Segmente (ZBE: Bewegungsdaten, ZVS: Versicherungsdaten) explizit im Migrationsprojekt adressiert werden. Das Zielsystem kennt die Z-Segmente des Vorlieferanten nicht automatisch.
>
> **Notaufnahme:** ADT^A04 (ambulanter Kurzfall) triggert in vielen KIS-Konfigurationen keinen automatischen VSDM-Abgleich. Explizit prüfen und konfigurieren.

### Segment-Referenz (Auswahl)

| Segment | Name | Pflicht in ADT | Inhalt |
|---|---|---|---|
| MSH | Message Header | Ja | Protokoll-Overhead, Routing |
| PID | Patient Identification | Ja | Patient-ID, Name, Geburtsdatum, Geschlecht, Adresse |
| PV1 | Patient Visit | Ja | Station, Aufnahmenummer, aufnehmender Arzt |
| OBX | Observation/Result | Nein | Messwert oder Befund (in ORU) |
| ORC | Common Order | Ja (in ORM) | Auftragsmetadaten |
| OBR | Observation Request | Ja (in ORM) | Auftragsdetails, Leistungsanforderung |
| NTE | Notes and Comments | Nein | Freitext-Kommentare |
| ZXX | Z-Segment | Nein | Herstellerspezifische Erweiterungen |

### Z-Segmente und nationale Erweiterungen

HL7 v2 erlaubt **Z-Segmente** für herstellerspezifische Erweiterungen. In deutschen Krankenhäusern gibt es eine Vielzahl proprietärer Z-Segmente, z.B.:

- `ZFA`: Fachgebiet und Abteilungsinformationen
- `ZBE`: Bewegungsdaten (Aufnahme-/Entlassungsdetails, spezifisch für deutschen Markt)
- `ZVS`: Versicherungsdaten des Patienten

Die Verbreitung proprietärer Z-Segmente ist ein zentrales Interoperabilitätsproblem: Dieselbe Nachricht kann bei Anbieter A andere Z-Segmente haben als bei Anbieter B, was den Systemwechsel erschwert.

### Transportsicherheit und MLLP

Das MLLP-Protokoll transportiert HL7-v2-Nachrichten über TCP/IP. Eine MLLP-Nachricht ist durch Steuerzeichen eingerahmt:

```
[VT]MSH|...\r[CR][FS][CR]
```

- `[VT]` (Vertical Tab, 0x0B): Nachrichtenbeginn
- `[FS]` (File Separator, 0x1C): Nachrichtenende
- Zwischen `[VT]` und `[FS]` befindet sich die HL7-Nachricht

MLLP selbst bietet keine Verschlüsselung oder Authentisierung.

> [!dev-quickstart] Dev Quickstart: MLLP-Verbindung aufbauen (Python)
> Minimaler MLLP-Client mit `python-hl7` (Bibliothek: `pip install hl7`):
> ```python
> import socket
>
> MLLP_VT = b'\x0b'   # 0x0B: Nachrichtenbeginn
> MLLP_FS = b'\x1c'   # 0x1C: Nachrichtenende
> MLLP_CR = b'\r'
>
> adt_a01 = (
>     "MSH|^~\\&|KIS|KRANKENHAUS|LAB|LABOR|20260320120000||ADT^A01|MSG001|P|2.5.1\r"
>     "EVN|A01|20260320120000\r"
>     "PID|1||12345^^^KH||Mustermann^Max^||19800101|M|||Musterstraße 1^^Berlin^^10115^DE\r"
>     "PV1|1|I|B301^301^1|||12345^Müller^Hans|||SUR\r"
> )
>
> with socket.create_connection(("hl7-server.krankenhaus.local", 2575)) as sock:
>     payload = MLLP_VT + adt_a01.encode("iso-8859-1") + MLLP_FS + MLLP_CR
>     sock.sendall(payload)
>     ack = sock.recv(4096)
>     print(ack.decode("iso-8859-1"))  # MSH...ACK^A01...AA = Accepted
> ```
> - Standard-Port: **2575** (IANA zugewiesen für HL7 MLLP)
> - Encoding: **ISO-8859-1** (nicht UTF-8) für deutsche Sonderzeichen
> - Secure MLLP (TLS): `ssl.wrap_socket(sock)` vor dem `sendall`
> - Bibliothek mit asyncio-Support: [python-hl7](https://python-hl7.readthedocs.io/) (`MLLPClient`, `start_hl7_server`)
> - Spec: [HL7 MLLP Transport Specification Release 1](https://www.hl7.org/documentcenter/public/wg/inm/mllp_transport_specification.PDF) In Krankenhaus-Netzwerken wird MLLP üblicherweise innerhalb des abgesicherten internen Netzwerks betrieben. Bei der Übertragung über unsichere Netze kommt MLLP over TLS (auch bekannt als Secure MLLP) zum Einsatz.

### Abgrenzung zu HL7 v3 und FHIR

| Standard | Paradigma | Verbreitung im deutschen KH |
|---|---|---|
| **HL7 v2** | Nachrichtenbasiert, pipegetrennt | Sehr hoch (Bestandssysteme) |
| **[[HL7]] v3 / [[CDA]]** | XML-basiert, klinische Dokumente (Arztbrief) | Mittel (Arztbriefe, ePA-Dokumente) |
| **[[FHIR]] R4** | REST-API, JSON/XML | Wachsend (ISiK, ePA, E-Rezept) |

FHIR und HL7 v2 koexistieren in deutschen Krankenhäusern: HL7 v2 für interne Systemkommunikation (ADT, Laboraufträge), FHIR für TI-Anbindung ([[ISiK]], [[ePA]], [[KIM]]-Arztbriefe).

> [!klinik-integration] Klinik-Integration: ISiK-Pflicht und HL7-v2-Bestand
> **ISiK-Bestätigungsverfahren:** Seit 2024 sind KIS-Hersteller verpflichtet, ISiK-Stufe 2 zu bestätigen (§ 373 SGB V). Stufe 3 folgt. ISiK setzt auf FHIR R4-Schnittstellen für den Datenaustausch. Das bedeutet für die IT-Abteilung: Das KIS muss parallel HL7 v2 (intern) und FHIR R4 (extern/TI) beherrschen.
>
> **Migrationsweg:** Eine Integration Engine übersetzt HL7-v2-ADT-Nachrichten in ISiK-FHIR-Ressourcen (Patient, Encounter). Prüfen Sie, ob Ihr KIS-Hersteller diese Transformation intern mitliefert oder ob eine separate Middleware (z.B. Mirth Connect, HL7 FHIR-Konverter) beschafft werden muss.
>
> **Verfügbarkeit:** Die FHIR-Endpunkte für ISiK müssen 24/7 erreichbar sein, da externe Systeme (Portale, Verlegungsdienste wie Recare, ePA-Befüllung) darauf zugreifen. Redundante Auslegung des FHIR-Servers einplanen.

### Relevanz für die Telematikinfrastruktur

HL7 v2 ist kein Bestandteil der [[Telematikinfrastruktur]] selbst. TI-Schnittstellen nutzen [[FHIR]] R4. HL7 v2 ist jedoch das Eingangsformat für viele KIS-Prozesse, die TI-Meldungen auslösen:

- Ein ADT^A01 im KIS triggert den [[VSDM]]-Abgleich.
- Ein fertiggestellter Befund (ORU^R01 oder MDM^T02) kann einen [[KIM]]-Arztbrief auslösen.
- [[DEMIS]]-Meldungen werden in manchen KIS aus HL7-v2-Labor-Ergebnissen automatisch generiert.

## Verknüpfungen

- [[KIS]] (primäres Anwendungsgebiet für HL7 v2 in Deutschland)
- [[LIS]] (Labor-Informationssystem; ADT-Aufnahmen und ORU-Befunde per HL7 v2)
- [[PACS]] (Bildarchivierung; Worklists und Berichte per HL7 v2 / [[DICOM]])
- [[RIS]] (Radiologie-Informationssystem; Auftragsmanagement per HL7 ORM)
- [[FHIR]] (moderner Nachfolger; [[ISiK]] setzt auf FHIR R4 als KIS-Schnittstelle)
- [[HL7]] (Überblicksartikel zur HL7-Standardfamilie inkl. v3, CDA, FHIR)
- [[CDA]] (Clinical Document Architecture; HL7-v3-basiertes Dokumentenformat für Arztbriefe)
- [[ISiK]] (FHIR-basierter Interoperabilitätsstandard für Krankenhäuser, Nachfolger für HL7 v2 intern)
- [[DEMIS]] (Infektionsschutzmeldungen, teils aus HL7-v2-Daten automatisch generiert)
- [[IHE]] (Integrationsprofile die auf HL7 v2 und DICOM aufsetzen, z.B. PIX, PDQ)

## Quellen

- [HL7 International: HL7 Version 2 Product Suite](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185)
- [Wikipedia: Health Level 7 (Version 2)](https://de.wikipedia.org/wiki/Health_Level_7#HL7_Version_2)
- [gematik: ISiK – FHIR-basierte Schnittstelle für Krankenhäuser](https://www.gematik.de/anwendungen/isik)
- [HL7 v2.5.1 Spezifikation (frei zugänglich)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=144)
