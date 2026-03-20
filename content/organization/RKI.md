---
title: RKI
audience: [technical, non-technical]
tags: [organisation, gesundheit, infektionsschutz, surveillance, bundesbehörde]
aliases: [Robert Koch-Institut, Robert-Koch-Institut]
relevance:
  sectors: [regulierung, forschung, krankenhaus]
  interests: [compliance, technik]
maturity: wachsend
---

# RKI

Das **RKI** (Robert Koch-Institut) ist das nationale Public-Health-Institut Deutschlands. Es ist eine Bundesoberbehörde im Geschäftsbereich des [[BMG|Bundesministeriums für Gesundheit (BMG)]] und betreibt unter anderem [[DEMIS]], das elektronische Meldesystem für Infektionskrankheiten.

## Erklärt für Einsteiger

Das Robert Koch-Institut ist sozusagen das Frühwarnsystem Deutschlands für Krankheiten. Wenn irgendwo in Deutschland viele Menschen an einer Grippe erkranken oder ein neues Virus auftaucht, ist das RKI dafür zuständig, das zu erkennen, zu analysieren und den Behörden zu melden. Während der Corona-Pandemie war das RKI die Stelle, die jeden Tag zählte, wie viele Menschen erkrankt waren, und die Empfehlungen aussprach, wie man sich schützen kann.

## Überblick

Das RKI wurde 1891 gegründet und ist nach dem Bakteriologen Robert Koch benannt. Es hat seinen Sitz in Berlin. Als Bundesoberbehörde ist es dem BMG unterstellt und erhält seinen Auftrag aus dem Infektionsschutzgesetz ([[IfSG]]) und anderen Bundesgesetzen.

Die Kernaufgaben des RKI:

- **Infektionsschutz und Surveillance**: Erkennung, Analyse und Bewertung von Infektionskrankheiten
- **Epidemiologische Lagebeobachtung**: Bundesweite Auswertung von Meldedaten, Trendanalysen, Risikoberichte
- **Referenzlaboratorien**: Betrieb nationaler Referenzzentren für Krankheitserreger
- **Gesundheitsberichterstattung (GBE)**: Koordination der bundesweiten Gesundheitsberichterstattung
- **Wissenschaftliche Beratung**: Beratung von BMG, Bundesbehörden und Öffentlichkeit in Gesundheitsfragen
- **Vorbereitung auf Gesundheitskrisen**: Notfallplanung und Krisenreaktion

Das RKI nimmt eine "Antennenfunktion" wahr: Es erkennt Gesundheitsgefahren frühzeitig und leitet die Informationen an die zuständigen Stellen weiter.

> [!interesse-compliance]
> Ärzte, Krankenhäuser und Labore sind nach dem [[IfSG]] zur Meldung bestimmter Infektionskrankheiten und Erregernachweise verpflichtet. Die Meldung erfolgt seit 2023 verpflichtend über [[DEMIS]] (Deutsches Elektronisches Melde- und Informationssystem). Nicht rechtzeitig erstattete Meldungen sind Ordnungswidrigkeiten nach § 73 IfSG (Bußgeld bis zu 25.000 Euro).

## Technische Details

### Rechtsgrundlage und Stellung

Das RKI ist nach § 4 IfSG die zuständige Bundesbehörde für Aufgaben des Infektionsschutzes. Dort ist festgelegt, dass das RKI Aufgaben der epidemiologischen Surveillance, der Infektionsepidemiologie und der Prävention übernimmt.

Als Bundesoberbehörde hat das RKI keine Weisungsbefugnis gegenüber den Ländern oder Gesundheitsämtern. Es kann Empfehlungen aussprechen und Daten aufbereiten, die operative Infektionsschutzarbeit liegt jedoch bei den [[OeGD|Gesundheitsämtern]] der Länder.

### DEMIS: Das elektronische Meldesystem

Das RKI entwickelt und betreibt [[DEMIS]] (Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz). DEMIS digitalisiert die Meldekette nach §§ 6, 7, 9 IfSG:

1. Arzt, [[KIS|Krankenhaus]] oder Labor erkennt eine meldepflichtige Erkrankung oder einen Erregernachweis
2. Meldung über DEMIS (HTTPS/FHIR-REST-API) an das zuständige Gesundheitsamt
3. Gesundheitsamt übermittelt aggregierte Daten an die Landesbehörde und das RKI
4. RKI wertet bundesweit aus und veröffentlicht Surveillance-Berichte

Das Fachgebiet 32 des RKI ist für DEMIS verantwortlich. Es entwickelt die [[FHIR]]-Profile für Meldungen, betreibt die Infrastruktur und stellt Testumgebungen für Softwarehersteller bereit.

> [!klinik-integration] Klinik-Integration: DEMIS-Anbindung im Krankenhaus
> **Meldepflicht:** Krankenhäuser sind nach §§ 6 und 8 IfSG namentlich meldepflichtig. Seit 2023 ist die elektronische Übermittlung über DEMIS verpflichtend. Arztmeldungen (§ 6 IfSG) und Labormeldungen (§ 7 IfSG) müssen als FHIR R4 Bundle übertragen werden. Bei Nichtmeldung droht ein Bußgeld bis 25.000 Euro (§ 73 IfSG).
>
> **KIS-Integration:** Verbreitete KIS-Systeme (z.B. Meierhofer M-KIS, CGM Medico, Dedalus Orbis) bieten DEMIS-Module an, die Meldungen direkt aus dem Behandlungsfall heraus erzeugen und versenden. Voraussetzung: Implementierung der DEMIS-FHIR-Schnittstelle und Authentifizierung mit einem institutionellen Zertifikat. Klären Sie mit Ihrem KIS-Hersteller, ob das DEMIS-Modul für Arztmeldungen (Erkrankungsmeldung) und Labormeldungen separat lizenziert wird.
>
> **Notaufnahme-Besonderheit:** Meldepflichtige Erkrankungen können zuerst in der Notaufnahme auffallen. Stellen Sie sicher, dass das DEMIS-Modul auch im Notaufnahme-Workflow des KIS verfügbar ist und nicht nur im stationären Bereich.

> [!dev-quickstart] Dev Quickstart: DEMIS Labormeldung per FHIR senden
> Meldungen werden als FHIR R4 Bundle per HTTP POST an die DEMIS Notification API gesendet. Auth via Bearer Token des DEMIS Token Provider.
> ```bash
> POST https://demis.rki.de/notification-api/fhir/$process-notification
> Content-Type: application/fhir+json
> Authorization: Bearer <demis-token>
>
> {
>   "resourceType": "Bundle",
>   "meta": { "profile": ["https://demis.rki.de/fhir/StructureDefinition/NotificationBundleLaboratory"] },
>   "type": "document",
>   "entry": [
>     { "resource": { "resourceType": "Composition", ... } },
>     { "resource": { "resourceType": "Patient", ... } },
>     { "resource": { "resourceType": "DiagnosticReport", ... } }
>   ]
> }
> ```
> - Testumgebung: [gematik/DEMIS-Test_Environment](https://github.com/gematik/DEMIS-Test_Environment) (Docker-basiert)
> - FHIR-Profile: [simplifier.net/rki.demis.laboratory](https://simplifier.net/rki.demis.laboratory) (Package `de.rki.demis.laboratory`)
> - Dokumentation für Sender: [wiki.gematik.de DEMIS Wissensdatenbank](https://wiki.gematik.de/pages/viewpage.action?pageId=143884296)
> - LOINC für Erregernachweise und SNOMED-CT für Krankheiten verpflichtend

> [!interesse-technik]
> DEMIS nutzt FHIR R4 (HL7 FHIR) für strukturierte Meldungen. Die Profile sind auf Simplifier.net veröffentlicht (Package: `de.rki.demis.disease`). Meldungen erfolgen über eine REST-API (HTTPS POST). Testumgebung: [demis.rki.de/testing](https://demis.rki.de/testing). Laborberichte nach § 7 IfSG werden als FHIR-Bundle übertragen. LOINC-Codes für Labortests und SNOMED-CT für Krankheiten sind verpflichtend.

### Surveillance-Systeme

Das RKI betreibt mehrere Surveillance-Systeme parallel:

- **SurvNet@RKI**: Software zur Fallerfassung und -verwaltung in Gesundheitsämtern (vor DEMIS der Standard)
- **GrippeWeb**: Sentinel-Surveillance für akute Atemwegserkrankungen auf Basis von Bürgermeldungen
- **ARE-Netzwerk**: Netzwerk von Arztpraxen für Influenza-Surveillance
- **DEMIS**: Digitale Plattform für strukturierte Pflichtmeldungen nach IfSG

### Abgrenzung zur Telematikinfrastruktur

Das RKI ist kein Teil der [[Telematikinfrastruktur]] und keine gematik-Einrichtung. DEMIS ist ein eigenständiges Fachsystem des öffentlichen Gesundheitsdienstes. Es nutzt dieselben Interoperabilitätsstandards ([[FHIR]], [[ICD-10-GM]]) wie die TI, ist aber technisch unabhängig davon.

Der Berührungspunkt mit der TI entsteht über die Primärsysteme: [[PVS]] und [[KIS]] können DEMIS-Meldungen aus ihren Workflows heraus erzeugen und über DEMIS versenden.

### Internationale Einbettung

Das RKI arbeitet eng mit dem Europäischen Zentrum für die Prävention und die Kontrolle von Krankheiten (ECDC) in Stockholm zusammen. Im globalen Rahmen kooperiert es mit der Weltgesundheitsorganisation (WHO). Das RKI nimmt für Deutschland die Funktion eines nationalen Ansprechpartners im Rahmen der Internationalen Gesundheitsvorschriften (IGV) wahr.

## Verknüpfungen

- [[DEMIS]]: Vom RKI betriebenes elektronisches Meldesystem für Infektionskrankheiten
- [[IfSG]]: Infektionsschutzgesetz, Rechtsgrundlage für RKI-Aufgaben und Meldepflichten
- [[BMG]]: Bundesministerium für Gesundheit, dem das RKI unterstellt ist
- [[FHIR]]: Technisches Datenformat für DEMIS-Meldungen
- [[KIS]]: Krankenhausinformationssysteme als Quellsysteme für DEMIS-Meldungen
- [[PVS]]: Praxisverwaltungssysteme als Quellsysteme für DEMIS-Meldungen
- [[BSI]]: Beteiligt an Sicherheitsanforderungen für öffentliche digitale Gesundheitsinfrastruktur

## Quellen

- [RKI: Institut - Grundlegende Informationen](https://www.rki.de/DE/Institut/institut-node.html)
- [RKI: Fachgebiet 32 - Surveillance und DEMIS](https://www.rki.de/DE/Institut/Organisation/Abteilungen/Abteilung-3/FG32/fg32-surveillance-und-elektronisches-melde-und-informationssystem-demis-oegd-kontaktstelle-node.html)
- [Infektionsschutzgesetz (IfSG) § 4](https://www.gesetze-im-internet.de/ifsg/__4.html)
- [RKI: DEMIS - Überblick](https://www.rki.de/DE/Content/Infekt/DEMIS/DEMIS_node.html)
