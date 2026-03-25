---
title: KIS
audience: [technical, non-technical]
tags: [technologies, krankenhaus, digitalisierung, interoperabilität]
aliases: [Krankenhausinformationssystem, KIS-System, Hospital Information System, HIS]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, ti-infrastruktur]
  interests: [technik, compliance, business]
maturity: setzling
---

# KIS

Ein **KIS (Krankenhausinformationssystem)** ist die zentrale Software-Plattform eines Krankenhauses, die Patientenverwaltung, klinische Dokumentation, Abrechnung und die Kommunikation mit der Telematikinfrastruktur integriert.

## Erklärt für Einsteiger

Stell dir vor, in einem Krankenhaus arbeiten Hunderte von Menschen: Ärzte, Pflegekräfte, Apotheker, Verwaltungsangestellte. Alle brauchen Informationen über Patienten, und alle müssen miteinander kommunizieren. Das KIS ist wie ein digitales Gehirn des Krankenhauses: Hier kommt ein Patient an, das KIS verwaltet die Aufnahme. Ein Arzt schreibt eine Diagnose, das KIS speichert sie. Eine Apotheke braucht die Medikamentenliste, das KIS stellt sie bereit. Ohne KIS wäre das moderne Krankenhaus nicht zu betreiben.

## Überblick

Das KIS ist die wichtigste Software-Infrastruktur im stationären Versorgungsbereich. Es verbindet alle klinischen und administrativen Prozesse: Aufnahme, Behandlung, Pflegedokumentation, Laborbefunde, Entlassung und Abrechnung.

In Deutschland dominieren drei große Hersteller den KIS-Markt:

- **SAP IS-H** (auch: SAP for Healthcare): Weit verbreitet in Universitätskliniken und großen Klinikketten. [[IS-H]] ist das SAP-Modul für Krankenhäuser.
- **Oracle Cerner / Millennium**: Internationales System mit starker Verbreitung in Deutschland, insbesondere nach der Übernahme durch Oracle 2022.
- **Dedalus (Orbis)**: Führend im deutschsprachigen Markt, stark verbreitet in mittleren und kleineren Kliniken.

Daneben gibt es spezialisierte Systeme wie iMedOne (Telekom Healthcare Solutions), CGM Medico und weitere.

### KIS und der Transformationsfonds

Seit 2026 ist das KIS in den Mittelpunkt der Krankenhausdigitalisierung gerückt. Der [[Transformationsfonds]] (bis zu 50 Milliarden Euro, 2026 bis 2035) fördert explizit KIS-Investitionen unter Fördertatbestand 5 (Digitalisierung). Voraussetzung für bestimmte Förderungen ist [[ISiK]]-Konformität des KIS. Krankenhäuser ohne zertifiziertes KIS-Modul riskieren Abschläge bei der DRG-Abrechnung.

> [!interesse-compliance]
> Ab April 2026 müssen Krankenhäuser ein zertifiziertes ePA-Modul im KIS vorweisen, sonst drohen finanzielle Sanktionen. [[ISiK]]-Konformität (Stufe 1, 2 und 3) ist Fördervoraussetzung für den [[Transformationsfonds]] (Fördertatbestand 5). Seit dem 1. Oktober 2025 sind Krankenhäuser zur aktiven ePA-Nutzung verpflichtet. Das KIS muss dabei den Opt-out-Status jedes Patienten vor jedem Datenzugriff prüfen. Ab 17. Juli 2026 gilt die KRITIS-Dachgesetz-Registrierungspflicht für Krankenhäuser, mit IT-Sicherheitsanforderungen, die das KIS betreffen. **NIS2-Pflicht**: Krankenhäuser mit 50 oder mehr Mitarbeitern oder 10 Millionen Euro Umsatz gelten als NIS2-pflichtige Einrichtungen nach [[NIS2UmsuCG]]. Seit dem 6. März 2026 ist das BSI in der aktiven Durchsetzungsphase und kann Bußgelder bis 10 Millionen Euro verhängen. KIS-Hersteller und KH-IT-Abteilungen müssen sicherstellen, dass das KIS die BSI-Mindestsicherheitsanforderungen erfüllt.

> [!interesse-business]
> Der deutsche KIS-Markt ist ein milliardenschwerer Bestandsmarkt mit wenigen Anbietern. Der [[Transformationsfonds]] und [[KHZG]]-Fördergelder schaffen erhebliche Investitionsanreize für KIS-Projekte bis 2035. ISiK-Zertifizierung ist für KIS-Hersteller zunehmend eine Marktzugangsvoraussetzung. Neue Anforderungen (ePA, DEMIS, PoPP) erhöhen den Software-Entwicklungs- und Zertifizierungsaufwand. Systemhäuser und IT-Dienstleister profitieren von Implementierungs-, Integrations- und Beratungsprojekten rund um die TI-Anbindung von KIS-Systemen.

## Technische Details

### HL7 v2: Interne Kommunikation

Innerhalb eines Krankenhauses kommunizieren KIS, Laborsystem ([[LIS]]), Radiologieinformationssystem ([[RIS]]) und Bildarchiv ([[PACS]]) über [[HL7-v2]]-Nachrichten:

- **ADT-Nachrichten** (Admission, Discharge, Transfer): Steuern die Patientenbewegungen. ADT^A01 = Aufnahme, ADT^A03 = Entlassung, ADT^A08 = Patientendaten-Update.
- **ORM^O01**: Laboranforderung vom KIS an das LIS.
- **ORU^R01**: Laborbefund vom LIS zurück ans KIS.
- **MDM^T02**: Arztbriefe und Dokumentenübermittlung.

Diese HL7-v2-Nachrichten sind Dateiformat-Nachrichten mit fixen Segmenten (MSH, PID, PV1 usw.), die über TCP/IP-Verbindungen (MLLP-Protokoll) transportiert werden.

### ISiK: FHIR-Schnittstelle für das Krankenhaus

[[ISiK]] (Informationstechnische Systeme im Krankenhaus) definiert verbindliche [[FHIR]] R4-Schnittstellen für KIS-Systeme. Die gematik schreibt ISiK für alle KIS vor, die im Rahmen des [[Transformationsfonds]] oder [[KHZG]] gefördert werden:

| ISiK-Stufe | Inhalte |
|---|---|
| **Stufe 1** | Basismodule: Patient, Encounter (Fall), Condition (Diagnose), Procedure (Prozedur), Coverage (Versicherung) |
| **Stufe 2** | Erweiterte Module: Medication, Observation, DiagnosticReport, Dokumentensuche (MHD) |
| **Stufe 3** | Dokumente: Strukturierte Entlassbriefe, ISiK-Dokumentenendpunkt |

Die ISiK-Spezifikation ist auf [simplifier.net/isik](https://simplifier.net/isik) veröffentlicht. Zertifizierungen werden von gematik-akkreditierten Prüfstellen vergeben.

> [!dev-quickstart] Dev Quickstart: ISiK FHIR-Endpunkte abfragen
> Basis-URL des KIS-FHIR-Servers: `https://<kis-host>/fhir` (FHIR R4, Version 4.0.1)
> ```bash
> # Patient per KVNR suchen (ISiK Stufe 1)
> curl -s "https://<kis-host>/fhir/Patient?identifier=https://fhir.de/sid/gkv/kvid-10|A123456789" \
>   -H "Accept: application/fhir+json"
>
> # Aktuelle Fälle eines Patienten
> curl -s "https://<kis-host>/fhir/Encounter?subject=Patient/12345&status=in-progress" \
>   -H "Accept: application/fhir+json"
>
> # Diagnosen zu einem Fall
> curl -s "https://<kis-host>/fhir/Condition?encounter=Encounter/67890" \
>   -H "Accept: application/fhir+json"
>
> # Capability Statement (unterstützte Ressourcen und ISiK-Stufen)
> curl -s "https://<kis-host>/fhir/metadata" \
>   -H "Accept: application/fhir+json"
> ```
> - ISiK-Profile (Stufe 1-4): [simplifier.net/isik-basis-v4](https://simplifier.net/isik-basis-v4)
> - Spec-Repo: [github.com/gematik/spec-ISiK-Basismodul](https://github.com/gematik/spec-ISiK-Basismodul)
> - Auth: OAuth2/SMART on FHIR oder mTLS (je nach KIS-Hersteller)

> [!interesse-technik]
> ISiK-Basis Stufe 1 FHIR-Endpunkte: `GET /Patient?identifier=<KVNR>`, `GET /Encounter?subject=<patient-id>`, `GET /Condition?encounter=<encounter-id>`. KIS-FHIR-Server muss FHIR R4 (4.0.1) unterstützen. ISiK-Profile auf [simplifier.net/isik-basis-v4](https://simplifier.net/isik-basis-v4). HL7-v2-zu-FHIR-Mapping: KIS-Hersteller implementieren meist einen internen Konverter, der ADT-Nachrichten in FHIR-Ressourcen überführt. DEMIS-Meldungen: Das KIS kann FHIR-Bundles direkt an den DEMIS-Empfangsserver des Gesundheitsamts senden. PoPP-Integration: Das KIS muss ab Mitte 2026 ein PoPP-Token vom PoPP-Dienst anfordern, bevor es Patientenakten in der ePA öffnet.

### ePA-Integration

> [!frist-warnung] Frist-Warnung: KIS ePA-Modul-Pflicht ab April 2026
> **Rechtsgrundlage:** § 341 Abs. 4 SGB V i.V.m. § 347 SGB V (eingefügt durch das DigiG); gematik-Zulassungsordnung für ePA-Kompatibilitätszertifikate.
> **Frist:** Ab April 2026 müssen Krankenhäuser ein zertifiziertes ePA-Modul im KIS vorweisen. Krankenhäuser, deren KIS bis zu diesem Zeitpunkt kein zertifiziertes ePA-Modul besitzt, können Patientenakten nicht mehr rechtmäßig befüllen.
> **Handlungsbedarf:** Die IT-Abteilung muss beim KIS-Hersteller (SAP IS-H, Dedalus Orbis, iMedOne, CGM Medico) schriftlich bestätigen lassen, welche Softwareversion das ePA-Modul abdeckt und zu welchem Datum die Zertifizierung vorliegt. Sind Lieferverzögerungen zu erwarten, ist dies gegenüber der Geschäftsführung und der zuständigen Landesbehörde zu dokumentieren.
> **Bei Nichtbeachtung:** Fehlende ePA-Modul-Zertifizierung führt ab dem Abrechnungsjahr 2026 zu einer Kürzung der TI-Pauschale und ggf. zu DRG-Abrechnungsabschlägen nach § 341 Abs. 6 SGB V.

Seit dem 1. Oktober 2025 sind Krankenhäuser verpflichtet, Dokumente in die [[ePA]] einzustellen. Das KIS muss dafür:

1. Den Opt-out-Status des Patienten per [[KVNR]] bei der ePA-API abfragen.
2. Dokumente als FHIR-Composition oder strukturiertes PDF/A in die ePA hochladen.
3. Ab Mitte 2026 ein [[PoPP]]-Token als Präsenznachweis vorlegen.

Der Entlassbrief ist das wichtigste Dokument, das Krankenhäuser in die ePA einstellen. Das ISiK-Dokumentenmodul (Stufe 3) definiert das Format.

> [!frist-warnung] Frist-Warnung: KRITIS-Dachgesetz Registrierungspflicht ab 17. Juli 2026
> **Rechtsgrundlage:** § 9 KRITIS-DachG (Gesetz zur Umsetzung der CER-Richtlinie EU 2022/2557, in Kraft seit März 2026) i.V.m. § 8a BSIG.
> **Schwellenwert:** Krankenhäuser, die mehr als 500.000 Personen mit kritischen Dienstleistungen versorgen, gelten als kritische Anlage nach KRITIS-DachG. Im Gesundheitssektor betrifft dies vor allem Häuser der Maximalversorgung und größere Klinikketten.
> **Frist:** Ab dem 17. Juli 2026 müssen betroffene Krankenhäuser sich auf der gemeinsamen Plattform von BBK (Bundesamt für Bevölkerungsschutz und Katastrophenhilfe) und BSI registrieren. Die Frist beträgt drei Monate nach Identifikation als kritische Anlage.
> **Handlungsbedarf:** Die Geschäftsführung muss prüfen, ob das Krankenhaus unter die KRITIS-Schwellenwerte fällt. Das KIS und seine IT-Infrastruktur sind Bestandteil der meldepflichtigen kritischen Komponenten. Die Registrierung erfordert Angaben zu kritischen Komponenten, Standort und einem 24/7-Ansprechpartner.

### DEMIS-Integration

Über das KIS werden [[DEMIS]]-Meldungen an das Gesundheitsamt übermittelt. Das KIS generiert FHIR-Bundles nach den DEMIS-Profilen des [[RKI]] und sendet sie per HTTPS an den DEMIS-Empfangsserver.

> [!dev-quickstart] Dev Quickstart: DEMIS-Meldung aus dem KIS senden
> Endpoint: `POST https://demis.rki.de/notification/$process-notification`
> ```bash
> # DEMIS-Meldung als FHIR-Bundle senden (Authentifizierung per Einrichtungszertifikat)
> curl -X POST "https://demis.rki.de/notification/$process-notification" \
>   -H "Content-Type: application/fhir+json" \
>   -H "Authorization: Bearer <demis-access-token>" \
>   --cert /path/to/einrichtung.crt \
>   --key  /path/to/einrichtung.key \
>   -d @demis-meldung-bundle.json
> ```
> Bundle-Struktur: FHIR R4 `Bundle` (type: `message`) mit `MessageHeader`, `Patient`, `Condition` und optional `Observation`.
> - RKI FHIR-Profile: [simplifier.net/demis](https://simplifier.net/demis)
> - Testumgebung (Docker): [github.com/gematik/DEMIS-Test_Environment](https://github.com/gematik/DEMIS-Test_Environment)
> - Validierungsservice: [github.com/gematik/DEMIS-validation-service](https://github.com/gematik/DEMIS-validation-service)

> [!klinik-integration] Klinik-Integration: DEMIS-Meldepflicht im KIS-Workflow
> Krankenhäuser sind nach § 6 IfSG zur Meldung meldepflichtiger Krankheiten verpflichtet. Das KIS muss dafür DEMIS-konforme FHIR R4-Bundles erzeugen und per HTTPS an den DEMIS-Empfangsserver übermitteln.
>
> **KIS-Modul prüfen:** CGM MEDICO, Orbis/Dedalus, iMedOne und weitere KIS-Systeme bieten DEMIS-Module an. Klären Sie, ob das Modul aktiv lizenziert und welche Meldungstypen (Arztmeldung nach § 6, Labormeldung nach § 7 IfSG) abgedeckt sind.
> **Stammdaten ab April 2026:** Ab April 2026 müssen Einrichtungen korrekte Stammdaten im DEMIS-System hinterlegt haben, sonst werden Meldungen zurückgewiesen. Prüfen Sie jetzt den Stammdatenstatus Ihrer Einrichtung.
> **Workflow-Integration:** Die DEMIS-Meldung sollte direkt aus dem KIS-Befunddokumentationsprozess getriggert werden, ohne manuelle Mehrfacherfassung. Authentifizierung erfolgt per Einrichtungszertifikat (nicht über TI-PKI). Planen Sie einen Fallback-Prozess für KIS-Wartungsfenster ein.

### KHZG-Digitalisierungsabschläge (ab 2026)

Seit dem **1. Januar 2026** erheben Krankenkassen bei Krankenhäusern ohne ausreichende Digitalisierungsmaßnahmen DRG-Abschläge je Abrechnungsfall. Die Abschläge sind nach [[KHZG]]-Fördertatbeständen (FTB) gestaffelt:

| Fördertatbestand | Inhalt | Abschlag |
|---|---|---|
| FTB 2 | Patientenportale | 0,5 % |
| FTB 3 | Digitale Pflege- und Behandlungsdokumentation | 0,6 % |
| FTB 4 | Klinische Entscheidungsunterstützung (CDSS) | 0,2 % |
| FTB 5 | Digitales Medikationsmanagement | 0,4 % |
| FTB 6 | Digitale Leistungsanforderung | 0,3 % |
| **Maximum** | | **2,0 %** |

Für die Jahre **2026 und 2027** genügt der Nachweis der Beauftragung ("beauftragt"). Ab **2028** muss die tatsächliche Nutzung belegt werden.

> [!frist-warnung] Frist-Warnung: KHZG-Digitalisierungsabschläge
> **Rechtsgrundlage:** [[KHZG]] i.V.m. den Folgeregeln aus dem Krankenhauszukunftsfonds; §§ 19 ff. KHEntgG.
> **Frist:** Abschläge werden seit dem 1. Januar 2026 je Abrechnungsfall erhoben.
> **Handlungsbedarf:** Stellen Sie sicher, dass für jeden der fünf Fördertatbestände (FTB 2–6) entweder ein laufendes KHZG-Projekt mit Beauftragungsnachweis vorliegt oder die Maßnahme bereits produktiv ist. In 2026 und 2027 reicht der Nachweis der Beauftragung. Ab 2028 muss die tatsächliche Nutzung (z.B. Patientenportal-Logins, Dokumentationsquoten) gegenüber den Krankenkassen belegt werden.
> **Bei Nichtbeachtung:** Jeder DRG-Abrechnungsfall kann mit bis zu 2,0 % Abschlag belastet werden. Bei einem Krankenhaus mit 500 Millionen Euro DRG-Erlös entspricht das bis zu 10 Millionen Euro jährlichem Verlust.

### DRG-Abrechnung

Die [[DRG]]-Abrechnung (Diagnosis Related Groups) ist eine Kernfunktion des KIS. Das KIS kodiert Diagnosen nach [[ICD-10-GM]] und Prozeduren nach [[OPS]], berechnet den DRG-Code und erstellt die Abrechnungsdaten für die Krankenkassen. Das Datenübermittlungsverfahren läuft über §301-Datensätze nach dem SGB V.

> [!klinik-integration] Klinik-Integration: KIS-Einführung und TI-Anbindung
> Eine KIS-Einführung ist ein komplexes Projekt mit mehrjähriger Laufzeit. Für die TI-Anbindung sind folgende Schritte relevant:
>
> 1. **TI-Zugangsdienst**: Anschluss über [[TI-Gateway]] oder lokalen Konnektor.
> 2. **[[SMC-B]]**: Institutionskarte für das Krankenhaus (eine pro Standort).
> 3. **[[HBA]]**: Heilberufsausweis für jeden Arzt (für ePA-Schreibzugriff und eAU-Signatur).
> 4. **KIM-Anbindung**: Für den sicheren Nachrichtenversand (Telekonsile, Entlassbriefe, DEMIS).
> 5. **ISiK-Zertifizierung**: Beim KIS-Hersteller anfragen, welche ISiK-Stufen zertifiziert sind.
> 6. **ePA-Modul**: Ab April 2026 Pflicht; prüfen, ob das Modul vom KIS-Hersteller zertifiziert ist.

## Verknüpfungen

- [[HL7-v2]] (interne Kommunikation zwischen KIS, LIS, RIS, PACS)
- [[FHIR]] (moderner Interoperabilitätsstandard; ISiK basiert auf FHIR R4)
- [[ISiK]] (FHIR-Schnittstelle für KIS; Fördervoraussetzung Transformationsfonds)
- [[ePA]] (Zielrepository für KIS-Dokumente; Opt-out-Status muss geprüft werden)
- [[E-Rezept]] (KIS kann E-Rezepte für stationäre Patienten ausstellen)
- [[KIM]] (sicherer Nachrichtenkanal für Entlassbriefe, Telekonsile, DEMIS)
- [[DEMIS]] (Meldepflicht-System; KIS sendet FHIR-Meldebundles)
- [[IS-H]] (SAP-Modul für Krankenhäuser; häufigste KIS-Basis in deutschen Universitätskliniken)
- [[DRG]] (Abrechnungssystem; KIS ist das zentrale DRG-Kodierungswerkzeug)
- [[KHVVG]] (Krankenhausreformgesetz; definiert ISiK-Anforderungen als Voraussetzung)
- [[Transformationsfonds]] (Förderinstrument; KIS-Investitionen sind förderfähig)
- [[PoPP]] (Präsenznachweis; ab Mitte 2026 KIS-Pflicht für ePA-Zugriff)
- [[LIS]] (Laborsystem; kommuniziert via HL7 v2 mit dem KIS)
- [[PACS]] (Bildarchiv; empfängt Anforderungen vom KIS per DICOM)
- [[TI-Gateway]] (TI-Zugangsdienst für Krankenhäuser ohne lokalen Konnektor)

## Quellen

- [gematik: ISiK – Informationstechnische Systeme im Krankenhaus](https://fachportal.gematik.de/anwendungen/isik)
- [Simplifier.net: ISiK Basis Stufe 1-3](https://simplifier.net/isik)
- [Wikipedia: Krankenhausinformationssystem](https://de.wikipedia.org/wiki/Krankenhausinformationssystem)
- [gematik Newsroom: ePA im Krankenhaus (Dr.-Erler-Kliniken, März 2026)](https://www.gematik.de/newsroom/news-detail/die-epa-im-krankenhaus-einblicke-aus-den-dr-erler-kliniken-in-nuernberg)
- [DKG/GKV-SV: Digitalisierungsabschlagsvereinbarung nach KHZG (PDF)](https://www.dkgev.de/fileadmin/default/Mediapool/2_Themen/2.1_Digitalisierung_Daten/2.1.8._Krankenhauszukunftsfonds__KHZF_/KHZG_Digitalisierungsabschlagsvereinbarung.pdf)
