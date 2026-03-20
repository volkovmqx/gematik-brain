---
title: IS-H
audience: [technical]
tags: [infrastruktur, krankenhaus, sap, kis, abrechnung]
aliases: [SAP IS-H, Industry Solution Healthcare, IS-H*MED, i.s.h.med]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, regulierung, kasse]
  interests: [technik, business, compliance]
maturity: wachsend
---

# IS-H

**SAP IS-H (Industry Solution Healthcare)** ist die Branchenlösung von SAP für das stationäre Gesundheitswesen und diente jahrzehntelang als Kernkomponente des [[KIS]] in deutschen Universitätskliniken und Maximalversorgern.

## Erklärt für Einsteiger

Ein Krankenhaus hat hunderte von Abläufen: Patienten werden aufgenommen, Ärzte dokumentieren Behandlungen, am Ende muss alles mit den Krankenkassen abgerechnet werden. SAP IS-H ist eine Software, die SAP, bekannt für Buchhaltungssoftware in großen Unternehmen, speziell für Krankenhäuser entwickelt hat. Sie verbindet die Verwaltung (Aufnahme, Abrechnung, Betten) mit der klinischen Dokumentation und dem Medizincontrolling. Die medizinische Ergänzung dazu, das eigentliche Arztprogramm, heißt i.s.h.med.

## Überblick

SAP IS-H war seit den 1990er Jahren die dominierende Lösung für das Patientenmanagement und die DRG-Abrechnung in deutschen Universitätskliniken und großen Krankenhäusern. Das System ist Teil des SAP-ERP-Ökosystems und nutzt dessen betriebswirtschaftliche Module (FI für Buchhaltung, CO für Kostenrechnung, MM für Materialwirtschaft).

Die klinische Erweiterung **i.s.h.med** (heute unter Oracle Cerner vermarktet) ergänzte IS-H um ärztliche Dokumentation, Pflegedokumentation, Auftragsmanagement und Befundkommunikation. Die Kombination IS-H / i.s.h.med bildete das vollständige [[KIS]] für zahlreiche deutsche Unikliniken.

**Marktposition**: IS-H und i.s.h.med sind verbreitet in deutschen Universitätskliniken und Häusern der Maximalversorgung. Bekannte Installationen: Charité Berlin, Universitätsklinikum Freiburg, LMU Klinikum München und viele weitere Unikliniken.

SAP hat sich aus dem direkten IS-H-Produktgeschäft zurückgezogen. Die Weiterentwicklung und der Support von i.s.h.med werden heute von **Oracle Health** (früher Oracle Cerner, entstanden durch die Cerner-Übernahme durch Oracle im Jahr 2022) übernommen.

> [!interesse-business]
> Oracle Health (i.s.h.med) dominiert den Uniklinik-Markt in Deutschland. Konkurrenten wie Dedalus ORBIS gewinnen zunehmend auch Unikliniken, z.B. durch Neuausschreibungen. Die SAP S/4HANA-Migration ist ein zentrales Thema für IS-H-Betreiber: Altinstallationen auf SAP ECC laufen auf verkürztem Support bis 2027/2030 (je nach Vereinbarung). IS-H-Hersteller bieten Migrationspfade zu S/4HANA an, die umfangreiche Projekte bedeuten (Laufzeit 2-5 Jahre, Kosten im hohen einstelligen Millionenbereich für Unikliniken).

## Technische Details

### Architektur von SAP IS-H

SAP IS-H ist ein SAP-Modul auf Basis des ABAP-Stacks im SAP-ERP-System. Die Hauptmodule:

| Modul | Inhalt |
|---|---|
| IS-H ADM | Patientenaufnahme, Belegungsplanung, Entlassung |
| IS-H MED | Medizinische Dokumentation (in Kombination mit i.s.h.med) |
| IS-H NUC | Pflegedokumentation |
| IS-H CA | Abrechnung nach [[DRG]] und PEPP (Psychiatrie) |
| IS-H REC | Leistungsabrechnung, stationäre Fallkodierung |

### DRG- und PEPP-Abrechnung

IS-H ist eng mit dem deutschen DRG-System (Diagnosis Related Groups) verknüpft. Das System:

- Kodiert Diagnosen nach [[ICD-10-GM]] und Prozeduren nach [[OPS]]
- Berechnet die DRG-Fallpauschalen auf Basis der Kodierung (Grouper-Integration)
- Erstellt Datensätze für die Krankenkassen nach § 301 SGB V (stationäre Abrechnung)
- Unterstützt das PEPP-Vergütungssystem für psychiatrische Einrichtungen

Die §-301-Datensätze werden über den DTA-Weg (Datenträgeraustausch) oder elektronisch an die Kassen übermittelt.

### Schnittstellenarchitektur

IS-H kommuniziert mit anderen Kliniksystemen überwiegend über:

- **[[HL7|HL7 v2]]**: ADT-Nachrichten (Aufnahme, Verlegung, Entlassung) an Subsysteme wie [[LIS]], [[PACS]], Apothekensystem
- **SAP PI/PO (Process Orchestration)**: Integrationsplattform für komplexere Nachrichtenflüsse
- **IDoc (Intermediate Document)**: SAP-proprietäres Nachrichtenformat für Interprozesskommunikation

Mit [[ISiK]] wird IS-H zunehmend um FHIR-Schnittstellen ergänzt. Oracle Health hat für i.s.h.med eine ISiK-konforme FHIR-Schicht angekündigt.

> [!dev-quickstart] Dev Quickstart: ISiK FHIR R4 auf Oracle Health Millennium
> Oracle Health Millennium stellt FHIR R4-Endpunkte für IS-H/i.s.h.med-Daten bereit.
>
> **Patient abfragen (ISiK-konform)**
> ```bash
> GET https://<millennium-host>/fhir/r4/Patient?identifier=<KVNR>
> Authorization: Bearer <OAuth2-Token>
> Accept: application/fhir+json
> ```
>
> **Encounter (stationärer Fall) abfragen**
> ```bash
> GET https://<millennium-host>/fhir/r4/Encounter?subject=Patient/<id>&status=in-progress
> Authorization: Bearer <OAuth2-Token>
> Accept: application/fhir+json
> ```
>
> - Auth: OAuth 2.0, SMART on FHIR. Token-Endpoint: `https://<millennium-host>/oauth2/token`
> - Oracle Health FHIR R4 REST-Referenz: [docs.oracle.com/health/millennium-platform-apis](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/r4_overview.html)
> - ISiK Stufe 3 FHIR-Profile: [Simplifier: gematik/ISiK-Basis](https://simplifier.net/ISiK-Basismodul)
> - ISiK-Spezifikation: [fachportal.gematik.de/isik](https://fachportal.gematik.de/informationen-fuer/isik)

> [!frist-warnung] Frist-Warnung: ISiK Stufe 3 Bestätigungspflicht
> **Rechtsgrundlage:** § 373 Abs. 1 SGB V i.V.m. den gematik-Spezifikationen für ISiK Stufe 3
> **Frist:** ISiK Stufe 3 ist verbindlich bis 30. Juni 2026. KIS-Hersteller müssen bis zu diesem Datum die Bestätigung durch gematik für ihre Produkte nachweisen. Krankenhäuser dürfen danach nur noch bestätigte Systeme einsetzen.
> **Handlungsbedarf:** Krankenhausbetreiber sind verpflichtet, bei ihrem KIS-Hersteller (Oracle Health, SAP, Dedalus etc.) den Bestätigungsstatus für ISiK Stufe 3 abzufragen. Neue Ausschreibungen müssen ISiK-Stufe-3-Konformität als Anforderung enthalten.
> **Bei Nichtbeachtung:** Systeme ohne ISiK-Bestätigung entsprechen nicht den gesetzlichen Anforderungen nach § 373 SGB V. Im Kontext von KHZG-Förderungen kann dies zur Rückforderung von Fördermitteln führen.

### TI-Anbindung

IS-H-basierte [[KIS]] sind TI-Teilnehmer und benötigen einen [[Konnektoren|Konnektor]] oder ab [[TI-2.0|TI 2.0]] ein [[TI-Gateway]]. Für IS-H sind folgende TI-Anwendungen relevant:

- **[[ePA]]**: KIS-seitiges ePA-Modul zur Befüllung der Patientenakte, ab April 2026 Pflicht
- **[[KIM]]**: Versand von Arztbriefen und Entlassberichten über den sicheren Kommunikationsdienst
- **[[E-Rezept]]**: Stationäre E-Rezept-Ausstellung durch Krankenhausärzte
- **[[VSDM]]**: Versichertenstammdaten-Abgleich bei Aufnahme
- **[[DEMIS]]**: Meldung meldepflichtiger Krankheiten nach IfSG

> [!klinik-integration] Klinik-Integration: TI-Anbindung und ISiK-Fristen für IS-H-Häuser
> **TI-Konnektor:** IS-H/i.s.h.med benötigt pro Standort einen Konnektor oder ab TI 2.0 ein [[TI-Gateway]]. Für Unikliniken mit mehreren Standorten empfiehlt sich ein zentralisierter Highspeed-Konnektor (HSK) im Rechenzentrumsbetrieb. Oracle Health i.s.h.med, SAP S/4HANA for Healthcare und Dedalus ORBIS unterstützen alle die SOAP-Konnektor-API per gemSpec_Kon.
> **ePA (Pflicht ab April 2026):** Das KIS muss Befunde, Entlassbriefe und Medikationspläne automatisch in die ePA einstellen. Prüfen Sie mit Oracle Health bzw. SAP den Lieferstatus des ePA-Moduls für Ihre IS-H-Version.
> **ISiK Stufe 3 (Frist 30.06.2026):** Alle eingesetzten KIS-Produkte benötigen die gematik-Bestätigung für ISiK Stufe 3. Ohne Bestätigung sind die Systeme ab diesem Datum nicht mehr gesetzeskonform. Bestätigungsstatus beim Hersteller schriftlich anfordern und vertraglich sichern.
> **DEMIS aus IS-H:** Die FHIR-R4-Meldung wird über SAP PI/PO oder einen FHIR-Adapter direkt aus dem KIS an `https://demis.rki.de/fhir` übermittelt. KIS-seitige Zertifikate (RKI-akkreditiert) müssen bereitliegen.

> [!dev-quickstart] Dev Quickstart: HL7 v2 ADT-Nachricht aus IS-H
> IS-H sendet bei Aufnahme, Verlegung und Entlassung HL7 v2 ADT-Nachrichten an angebundene Subsysteme (LIS, PACS, Apotheke).
>
> **ADT^A01 Aufnahme-Nachricht (Beispiel)**
> ```
> MSH|^~\&|ISH|UNIKLINIK|LIS|LAB|20260320120000||ADT^A01|MSG001|P|2.5
> EVN|A01|20260320120000
> PID|1||123456789^^^UNIKLINIK^PI||Mustermann^Max||19800101|M|||Musterstraße 1^^Berlin^^10115^DE
> PV1|1|I|STAT^301^A^^||||||||||||||V|123456789
> ```
> - Nachrichtentypen: A01 (Aufnahme), A02 (Verlegung), A03 (Entlassung), A08 (Patientendaten-Update)
> - IS-H nutzt SAP PI/PO als Integrations-Middleware für HL7-Routing
> - HL7 v2.x Spezifikation: [hl7.org/implement/standards](https://www.hl7.org/implement/standards/)
> - DEMIS-Anbindung aus IS-H: FHIR R4 Bundle POST auf `https://demis.rki.de/fhir` (Zertifikatauthentifizierung)

> [!interesse-technik]
> IS-H FHIR-Anbindung: Oracle Health stellt FHIR R4-Adapter für i.s.h.med bereit. ISiK Stufe 3 ist verbindlich bis 30.06.2026. §-301-Datensatz (KH-Abrechnung): HL7 V3 CDA-Format gemäß KVDT-kompatiblem Datenträgeraustausch. SAP S/4HANA Healthcare: Die Nachfolgelösung für IS-H auf S/4HANA läuft unter dem Namen "SAP S/4HANA for Healthcare" und nutzt eine neue ABAP RESTful Application Programming Model (RAP)-Architektur.

### Migration zu SAP S/4HANA

SAP stellt den Mainstream-Support für SAP ECC (auf dem IS-H basiert) Ende 2027 ein, für Extended Support laufen Vereinbarungen bis 2030. Krankenhäuser mit IS-H stehen damit vor einer Migrationsentscheidung:

> [!frist-warnung] Frist-Warnung: SAP ECC Mainstream-Support-Ende 2027
> **Rechtsgrundlage:** Keine direkte gesetzliche Pflicht, jedoch mittelbar relevant über § 75c SGB V (IT-Sicherheit in Krankenhäusern) und BSI-Grundschutz-Baustein SYS.1.1 (Allgemeiner Server): der Betrieb von Software ohne Herstellersupport und Sicherheitsupdates gilt als kritischer Mangel.
> **Frist:** SAP-Mainstream-Support für ECC endet am 31. Dezember 2027. Extended Maintenance ist bis 31. Dezember 2030 gegen Aufpreis verfügbar, deckt aber keine vollständige Softwarepflege ab.
> **Handlungsbedarf:** Krankenhäuser mit IS-H-Betrieb müssen bis Ende 2025 eine Migrationsentscheidung getroffen und bis Ende 2027 ein Migrationsprojekt in ausreichendem Fortschritt haben. Migrationen zu S/4HANA oder alternativem KIS dauern typisch 2 bis 5 Jahre.
> **Bei Nichtbeachtung:** Betrieb auf ECC ohne Support ab 2028 bedeutet keine Sicherheitspatches. Für KRITIS-Krankenhäuser (ab 30.000 Fälle/Jahr) kann das BSI dies als meldepflichtigen Sicherheitsmangel nach § 8b BSI-Gesetz werten.

1. **Migration zu SAP S/4HANA**: Die Krankenhauslösung auf S/4HANA ist verfügbar, aber die Migration ist aufwendig. Funktionslücken gegenüber dem langjährig gewachsenen IS-H-System müssen geschlossen werden.
2. **Wechsel zu alternativem KIS**: Einige Unikliniken evaluieren Wechsel zu Dedalus ORBIS oder Meierhofer, was ebenfalls ein Migrationsprojekt bedeutet.
3. **Oracle Health als Kontinuitätsoption**: Oracle Health bietet eine cloudbasierte Weiterentwicklung von i.s.h.med an (Oracle Cerner Millennium Ersatz).

Die Migration ist strategisch bedeutsam: IS-H-Installationen in Unikliniken sind über Jahrzehnte gewachsen und haben tiefe Integrationen mit Forschungssystemen, Studienmanagement und spezialisierten Klinikinformationssystemen.

## Verknüpfungen

- [[KIS]] (IS-H ist eine der zentralen KIS-Plattformen für Unikliniken)
- [[DRG]] (IS-H ist das führende System für DRG-Abrechnung in Unikliniken)
- [[ICD-10-GM]] (Diagnosekodierung in IS-H)
- [[OPS]] (Prozedurkodierung für DRG-Grouping)
- [[ISiK]] (FHIR-Interoperabilitätsstandard, den IS-H erfüllen muss)
- [[HL7]] (HL7 v2 ADT als Hauptschnittstelle zu Subsystemen)
- [[FHIR]] (zunehmend genutzte moderne Schnittstelle in ISiK-Kontext)
- [[ePA]] (KIS-Anbindung ab April 2026 Pflicht)
- [[KIM]] (Arztbriefsversand aus dem KIS)
- [[LIS]] (Labor-Informationssystem als angebundenes Subsystem)
- [[PACS]] (Bilddatensystem als angebundenes Subsystem)
- [[TI-Gateway]] (TI-2.0-Zugang ohne Hardware-Konnektor)

## Quellen

- [Oracle Health: i.s.h.med Produkt](https://www.oracle.com/de/health/clinical-care/ish-med/)
- [SAP: Krankenhaus-IT und Healthcare-Lösungen](https://www.sap.com/germany/products/erp/healthcare.html)
- [gematik: ISiK-Spezifikation (Informationstechnische Systeme in Krankenhäusern)](https://fachportal.gematik.de/informationen-fuer/isik)
- [DIMDI/BfArM: OPS und ICD-10-GM (Klassifikationen)](https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/_node.html)
