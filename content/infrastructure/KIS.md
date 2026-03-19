---
title: KIS
audience: [technical, non-technical]
tags: [infrastruktur, krankenhaus, software, primärsystem]
aliases: [Krankenhausinformationssystem, Klinikinformationssystem]
maturity: wachsend
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister]
  interests: [technik, business]
---

# KIS

Ein **KIS** (Krankenhausinformationssystem) ist die zentrale Software-Plattform eines Krankenhauses zur Verwaltung aller klinischen und administrativen Prozesse. Es ist das Äquivalent zum [[PVS]] im ambulanten Bereich.

## Erklärt für Einsteiger

In einem Krankenhaus läuft sehr viel gleichzeitig: Patienten werden aufgenommen, Ärzte schreiben Befunde, das Labor schickt Ergebnisse, die Pflege dokumentiert Maßnahmen, und am Ende muss alles abgerechnet werden. Das KIS ist das zentrale System, das all das zusammenhält. Es ist wie das Betriebssystem eines Krankenhauses: Alle anderen Systeme, die Laborgeräte, die Radiologie und die Apotheke, sind damit verbunden.

## Überblick

Ein KIS deckt den gesamten Behandlungsprozess im stationären Bereich ab, von der Aufnahme bis zur Entlassung:

- Patientenaufnahme, Belegungsmanagement und Entlassung
- Ärztliche Dokumentation: Anamnese, Diagnosen ([[ICD-10-GM]]), Therapieplanung
- Pflegerische Dokumentation: Pflegepläne, Vitalzeichen, Medikamentenvergabe
- Auftragsmanagement: Laboranforderungen, Radiologieanforderungen ([[RIS|Radiologie-Informationssystem, RIS]])
- Medikamentenmanagement (Verbindung zum Klinikapothekensystem)
- Abrechnung nach [[DRG]] (Diagnosis Related Groups) gegenüber den Krankenkassen
- Kodierung nach ICD-10-GM und [[OPS]] (Operationen- und Prozedurenschlüssel)

> [!interesse-business]
> Der deutsche KIS-Markt ist hochkonzentriert: Dedalus ORBIS (über 820 Installationen, über 41 % der stationären Fälle), Oracle Cerner i.s.h.med (Unikliniken), Telekom iMedOne (über 250), NEXUS KIS (über 250), Meierhofer M-KIS (über 275 im deutschsprachigen Raum). SAP hat sich aus dem Direktgeschäft zurückgezogen. Der Markt ist geprägt von langen Vertragslaufzeiten und hohen Wechselkosten.

Der deutsche KIS-Markt ist stark konzentriert. Marktführer ist **Dedalus** mit dem System ORBIS. Laut Marktberichten von 2024 werden über 41 Prozent aller stationären Fälle in Deutschland über ORBIS abgerechnet. Weitere wichtige Anbieter:

- **Dedalus ORBIS**: Marktführer, über 820 Installationen in Deutschland
- **Oracle Cerner i.s.h.med** (in Kombination mit SAP IS-H): Verbreitet in Unikliniken und großen Häusern; SAP hat sich aus dem Direktgeschäft zurückgezogen, Oracle Cerner betreut die Systeme weiter
- **Telekom Healthcare Solutions iMedOne**: Über 250 Einrichtungen
- **NEXUS KIS**: Über 250 Einrichtungen, mit Interoperabilitätsfokus
- **Meierhofer M-KIS**: Über 275 Installationen im deutschsprachigen Raum

## Technische Details

### Systemarchitektur

Moderne KIS-Systeme sind modular aufgebaut. Ein typisches KIS besteht aus einem Kernsystem (administrative und klinische Basisfunktionen) und spezialisierten Subsystemen:

- **RIS** (Radiologie-Informationssystem): Verwaltung radiologischer Aufträge und Befunde
- **[[LIS]]** (Labor-Informationssystem): Labordatenverarbeitung
- **[[PACS]]** (Picture Archiving and Communication System): Speicherung und Verteilung medizinischer Bilder ([[DICOM]])
- **Klinikapothekenmodul**: Medikamentenlogistik und Unit-Dose-Versorgung
- **Stationssystem/Pflegedokumentation**: Pflegerische Dokumentation auf Station

Die Subsysteme kommunizieren über standardisierte Schnittstellen, historisch vorwiegend über **[[HL7|HL7]] v2** (z.B. HL7 ADT-Nachrichten für Aufnahme, Verlegung, Entlassung). Neuere Systeme implementieren zunehmend **[[FHIR]] R4**.

### ISiK-Anforderungen

> [!interesse-technik]
> ISiK definiert FHIR R4-Schnittstellen für KIS. Stufe 3 ist verbindlich bis 30.06.2026. Stufe 5 (Juli 2025 veröffentlicht) fasst alle ISiK-Module zusammen, Pflichtdatum noch offen. Bestätigungsverfahren läuft über die [[gematik]]. FHIR-Profile auf Simplifier.net und dem gematik-Fachportal. Schnittstellen für [[ePA]], [[E-Rezept]], [[KIM]] und [[DEMIS]] sind Teil der TI-Anbindung.

Der verbindliche [[ISiK]]-Standard (Informationstechnische Systeme in Krankenhäusern, § 373 SGB V) verpflichtet KIS-Hersteller, standardisierte FHIR-REST-Schnittstellen bereitzustellen. ISiK definiert Stufen:

- **Stufe 1**: Bereitstellung von Basis-FHIR-Ressourcen (Patient, Encounter, Condition, Procedure)
- **Stufe 2**: Erweiterte Ressourcen (Medikation, Beobachtungen, Diagnosen, Terminverwaltung)
- **Stufe 3**: Verbindlich bis 30.06.2026 (ab 01.07.2025 Voraussetzung für bestimmte KHSFV-Förderung)
- **Stufe 5**: Im Juli 2025 veröffentlicht; fasst alle ISiK-Module zusammen. Pflichtdatum noch offen.

Dedalus ORBIS hat bereits ISiK Stufe 1 bestätigt. Die ISiK-Bestätigung erfolgt durch die [[gematik]].

### Anbindung an die Telematikinfrastruktur

Ab **April 2026** müssen KIS ein zertifiziertes [[ePA]]-Modul enthalten. Krankenhäuser, deren KIS diese Anforderung nicht erfüllt, riskieren finanzielle Sanktionen.

Krankenhäuser sind TI-Teilnehmer und benötigen entweder einen [[Konnektoren|Konnektor]] oder ab TI 2.0 ein [[TI-Gateway]]. Das KIS kommuniziert über den Konnektor/TI-Gateway mit den TI-Diensten:

- **[[ePA]]**: Zugriff auf und Befüllen der elektronischen Patientenakte
- **[[E-Rezept]]**: Krankenhausärzte können E-Rezepte ausstellen (seit 2024 möglich)
- **[[KIM]]**: Sicherer Versand von Arztbriefen und Befunden
- **[[VSDM]]**: Versichertenstammdaten-Abgleich bei Aufnahme
- **[[DEMIS]]**: KIS können [[RKI|DEMIS]]-Meldungen direkt aus dem klinischen Workflow generieren

Für die Signatur mit [[QES]] durch den ausstellenden Arzt benötigt das KIS Zugang zu einem Kartenterminal mit [[HBA]].

### Interoperabilität: HL7 und FHIR

KIS-Systeme implementieren typischerweise:

- **HL7 v2 ADT**: Aufnahme/Entlassung/Verlegung-Nachrichten, weit verbreitet
- **HL7 v2 ORM/ORU**: Laboraufträge und -ergebnisse
- **HL7 v3 [[CDA]]** (Clinical Document Architecture): Strukturierte klinische Dokumente (Arztbriefe)
- **HL7 FHIR R4**: Neue Standard-Schnittstelle für ISiK und TI-Anwendungen
- **[[DICOM]]**: Bildübertragung im Radiologiekontext (PACS-Anbindung)

Die [[IHE]]-Integrationsprofile (z.B. XDS.b für Dokumentenverteilung, PIX/PDQ für Patientenidentifikation) werden von größeren KIS-Installationen zunehmend unterstützt.

### KRITIS-Dachgesetz und Krankenhäuser

Das [[KRITIS-Dachgesetz]] (Bundestag 29. Januar 2026, Bundesrat 6. März 2026) setzt die EU-CER-Richtlinie um und schafft einheitliche Mindeststandards für den physischen Schutz kritischer Infrastrukturen. Krankenhäuser fallen ausdrücklich in den Geltungsbereich. Betroffene Betreiber müssen sich ab **17. Juli 2026** registrieren sowie Risikoanalysen und Resilienzpläne erstellen. Das [[BSI]] koordiniert die Aufsicht über die Cybersicherheitsanforderungen im Zusammenspiel mit dem neuen Gesetz.

### Krankenhausfinanzierungsgesetz und KHZG

Das [[KHZG|Krankenhauszukunftsgesetz (KHZG, 2020)]] stellte Fördermittel von 4,3 Milliarden Euro für die Digitalisierung von Krankenhäusern bereit. Ein Förderschwerpunkt war die Beschaffung und Modernisierung von KIS-Systemen sowie die Implementierung von [[Patientenportal|Patientenportalen]] und digitalen Prozessen. KHZG-Vorhaben müssen Interoperabilitätsanforderungen erfüllen, die sich mit ISiK überschneiden.

## Verknüpfungen

- [[PVS]]: Äquivalent zum KIS im ambulanten Praxisbereich
- [[ISiK]]: Verbindlicher FHIR-Interoperabilitätsstandard für KIS in Deutschland
- [[FHIR]]: Technisches Datenformat für neue KIS-Schnittstellen
- [[Konnektoren]]: Verbindungsbox zur TI, über die das KIS TI-Dienste nutzt
- [[TI-Gateway]]: Cloud-basierter Konnektor-Nachfolger in der TI 2.0
- [[ePA]]: KIS befüllt die Patientenakte mit Krankenhausdokumenten
- [[E-Rezept]]: Krankenhausärzte können E-Rezepte über das KIS ausstellen
- [[KIM]]: Sichere Kommunikation zwischen KIS und anderen Leistungserbringern
- [[DEMIS]]: KIS ist Quellsystem für Infektionsschutzmeldungen an das RKI
- [[QES]]: Ärzte im Krankenhaus signieren Dokumente über HBA und KIS
- [[HBA]]: Heilberufsausweis der Krankenhausärzte für QES
- [[IHE]]: Integrationsprofile für KIS-Interoperabilität
- [[gematik]]: Führt ISiK-Bestätigungen für KIS-Systeme durch
- [[RKI]]: Empfängt DEMIS-Meldungen aus KIS-Systemen

## Quellen

- [kma Online: KIS-Markt 2025 - Top-Hersteller](https://www.kma-online.de/aktuelles/it-digital-health/detail/kis-markt-2025-das-sind-die-top-hersteller-53713)
- [Dedalus: ORBIS erreicht ISiK-Bestätigung Stufe 1](https://www.dedalus.com/dach/de/media/news/orbis-erreicht-isik-bestaetigung-der-stufe-1/)
- [gematik: ISiK](https://www.gematik.de/anwendungen/isik)
- [kma Online: Turbulenzen im KIS-Markt nach SAP-Ausstieg](https://www.kma-online.de/aktuelles/it-digital-health/detail/turbulenzen-nach-sap-ausstieg-49621)
