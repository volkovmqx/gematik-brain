---
title: RKI
audience: [technical, non-technical]
tags: [organisation, gesundheit, infektionsschutz, surveillance, bundesbehörde]
aliases: [Robert Koch-Institut, Robert-Koch-Institut]
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

## Technische Details

### Rechtsgrundlage und Stellung

Das RKI ist nach § 4 IfSG die zuständige Bundesbehörde für Aufgaben des Infektionsschutzes. Dort ist festgelegt, dass das RKI Aufgaben der epidemiologischen Surveillance, der Infektionsepidemiologie und der Prävention übernimmt.

Als Bundesoberbehörde hat das RKI keine Weisungsbefugnis gegenüber den Ländern oder Gesundheitsämtern. Es kann Empfehlungen aussprechen und Daten aufbereiten, die operative Infektionsschutzarbeit liegt jedoch bei den Gesundheitsämtern der Länder.

### DEMIS: Das elektronische Meldesystem

Das RKI entwickelt und betreibt [[DEMIS]] (Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz). DEMIS digitalisiert die Meldekette nach §§ 6, 7, 9 IfSG:

1. Arzt, [[KIS|Krankenhaus]] oder Labor erkennt eine meldepflichtige Erkrankung oder einen Erregernachweis
2. Meldung über DEMIS (HTTPS/FHIR-REST-API) an das zuständige Gesundheitsamt
3. Gesundheitsamt übermittelt aggregierte Daten an die Landesbehörde und das RKI
4. RKI wertet bundesweit aus und veröffentlicht Surveillance-Berichte

Das Fachgebiet 32 des RKI ist für DEMIS verantwortlich. Es entwickelt die [[FHIR]]-Profile für Meldungen, betreibt die Infrastruktur und stellt Testumgebungen für Softwarehersteller bereit.

### Surveillance-Systeme

Das RKI betreibt mehrere Surveillance-Systeme parallel:

- **SurvNet@RKI**: Software zur Fallerfassung und -verwaltung in Gesundheitsämtern (vor DEMIS der Standard)
- **GrippeWeb**: Sentinel-Surveillance für akute Atemwegserkrankungen auf Basis von Bürgermeldungen
- **ARE-Netzwerk**: Netzwerk von Arztpraxen für Influenza-Surveillance
- **DEMIS**: Digitale Plattform für strukturierte Pflichtmeldungen nach IfSG

### Abgrenzung zur Telematikinfrastruktur

Das RKI ist kein Teil der [[Telematikinfrastruktur]] und keine gematik-Einrichtung. DEMIS ist ein eigenständiges Fachsystem des öffentlichen Gesundheitsdienstes. Es nutzt dieselben Interoperabilitätsstandards ([[FHIR]], ICD-10-GM) wie die TI, ist aber technisch unabhängig davon.

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
