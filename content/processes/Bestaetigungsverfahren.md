---
title: Bestätigungsverfahren
audience: [technical, non-technical]
tags: [prozess, zertifizierung, gematik, konformität, isik, pvs, kis]
aliases: [Bestätigungsverfahren gematik, Konformitätsnachweis gematik, Bestätigung gematik]
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, ti-infrastruktur, it-dienstleister, regulierung]
  interests: [compliance, technik, business]
---

# Bestätigungsverfahren

Das **Bestätigungsverfahren** ist gematiks Konformitätsnachweisverfahren für Softwareprodukte wie [[KIS]], [[PVS]] und Apothekenverwaltungssysteme ([[AVS]]), mit dem Hersteller die Erfüllung definierter Spezifikationen gegenüber gematik nachweisen.

## Erklärt für Einsteiger

Wenn ein Hersteller sagt "Unsere Software erfüllt alle Anforderungen der gematik", dann muss er das auch beweisen können. Das Bestätigungsverfahren ist dieser Beweis. Der Hersteller lässt seine Software von einem unabhängigen Prüfinstitut testen. Wenn sie die Anforderungen erfüllt, stellt gematik eine offizielle Bestätigung aus. Ohne diese Bestätigung darf die Software für bestimmte geförderte Zwecke nicht eingesetzt werden.

## Überblick

Das Bestätigungsverfahren unterscheidet sich vom klassischen [[Zulassungsverfahren]] der gematik für TI-Komponenten: Während das Zulassungsverfahren für Infrastrukturkomponenten wie [[Konnektoren]] gilt, richtet sich das Bestätigungsverfahren an klinische und praxisorientierte Softwaresysteme.

### Zweck und Anwendungsbereich

Das Bestätigungsverfahren wird insbesondere für folgende Bereiche angewendet:

- **[[ISiK]] (Informationstechnische Systeme im Krankenhaus)**: Krankenhaussoftware (KIS, Subsysteme) muss ISiK-Konformität nachweisen, um Fördergelder aus dem [[Transformationsfonds]] oder [[KHZG]] in Anspruch nehmen zu können.
- **[[ISiP]] (Informationstechnische Systeme in der Pflege)**: Pflegesoftware analog zu ISiK.
- **Primärsysteme für die TI**: PVS und KIS, die auf die ePA zugreifen oder am E-Rezept-Dienst teilnehmen, benötigen eine Bestätigung durch gematik oder deren akkreditierte Prüfstellen.

Die gesetzliche Grundlage für ISiK-Pflichten im Krankenhaus bildet das [[KHAG]] (Krankenhauszukunftsgesetz-Ausführungsgesetz) in Verbindung mit dem [[KHZG]] und dem [[KHVVG]].

> [!interesse-compliance] Fristen und Konsequenzen
> - **KHZG-Fördertatbestand 5 (Digitalisierung)**: ISiK-Stufe-1-Bestätigung ist Voraussetzung für Förderabruf
> - **Ab April 2026**: Krankenhäuser benötigen ein zertifiziertes ePA-Modul im KIS; fehlende Bestätigung kann zu DRG-Abschlägen führen
> - **Transformationsfonds (2026-2035)**: ISiK-Stufe-2-Konformität ist für höhere Fördertatbestände erforderlich
> - Ohne gültigen Bestätigungsbescheid kann ein Hersteller sein Produkt nicht als "ISiK-konform" vermarkten

### Abgrenzung von der Konformitätsbewertung

Das Bestätigungsverfahren ist nicht identisch mit der [[Konformitaetsbewertung]] nach MDR/IVDR für Medizinprodukte. Die Bestätigung belegt die Einhaltung von TI-Spezifikationen, keine medizinprodukterechtliche Klassifizierung.

## Technische Details

### Ablauf des Bestätigungsverfahrens

Das Verfahren läuft in mehreren Schritten ab:

1. **Selbstauskunft des Herstellers**: Der Hersteller erklärt, welche Anforderungen sein Produkt erfüllt (Selbstdeklaration gegen die Spezifikation).
2. **Testdurchführung**: Der Hersteller führt Tests gegen die gematik-definierten Testfälle durch. Für ISiK gibt es öffentlich zugängliche Testsuiten (z.B. Touchstone-Tests auf dem FHIR-Testserver der gematik).
3. **Prüfinstanzprüfung**: Ein von gematik akkreditiertes Prüfinstitut validiert die Testergebnisse und prüft die Implementierung.
4. **Bestätigungsbescheid**: gematik stellt die offizielle Bestätigung aus und veröffentlicht sie im Produktkatalog auf dem Fachportal.

> [!interesse-technik] Technische Prüfung für ISiK
> ISiK-Konformität wird mit automatisierten Tests gegen definierte FHIR R4-Testfälle geprüft:
> - Testplattform: Touchstone (von HL7 International bereitgestellt)
> - ISiK-Testsuiten: auf [simplifier.net/isik](https://simplifier.net/isik) als FHIR-CapabilityStatements veröffentlicht
> - Pflichtoperationen je Stufe: z.B. ISiK-Stufe-1: `Patient?identifier`, `Encounter?subject`, `Condition?encounter`
> - Fehlerprotokoll: Hersteller müssen vollständige Testergebnisse einreichen; kritische Fehler ("/SOLL"-Anforderungen) verhindern Bestätigung

### Stufen der ISiK-Bestätigung

| Stufe | Inhalte | Pflicht für |
|---|---|---|
| **ISiK-Stufe 1** | Basis-FHIR-Schnittstelle: Patient, Encounter, Condition, Procedure | KHZG-Fördertatbestand 5 |
| **ISiK-Stufe 2** | Medikation, Observation, DiagnosticReport, Dokumentensuche (MHD) | Erweiterungsförderungen |
| **ISiK-Stufe 3** | Strukturierter Entlassbrief, Dokumentenendpunkt | Transformationsfonds höhere Tatbestände |

### Produktkatalog und öffentliche Nachweisbarkeit

Alle Systeme mit gültigem Bestätigungsbescheid sind im öffentlichen Produktkatalog auf dem gematik-Fachportal gelistet. Krankenhäuser können dort prüfen, ob ein angebotenes System tatsächlich bestätigt ist.

> [!interesse-business] Marktrelevanz
> - ISiK-Bestätigung ist faktisch Marktzugangsvoraussetzung für KIS-Hersteller im KH-Bereich
> - Fehlende Bestätigung schließt von KHZG- und Transformationsfonds-Förderungen aus
> - Hersteller mit Bestätigung können höhere Preise für "konforme" Systeme verlangen
> - Prüfinstitute (z.B. Fraunhofer FOKUS, HL7 Deutschland) bieten kommerzielle Vorprüfdienstleistungen an

## Verknüpfungen

- [[Zulassungsverfahren]] (Pendant für TI-Infrastrukturkomponenten)
- [[ISiK]] (wichtigstes Anwendungsfeld des Bestätigungsverfahrens)
- [[KIS]] (Krankenhausinformationssystem als Hauptzielgruppe)
- [[PVS]] (Praxisverwaltungssystem, ebenfalls betroffen)
- [[KHZG]] (Förderprogramm, das ISiK-Bestätigung als Voraussetzung hat)
- [[KHAG]] (gesetzliche Grundlage für ISiK-Pflichten)
- [[Transformationsfonds]] (Folgeprogramm nach KHZG)
- [[FHIR]] (technische Basis der ISiK-Schnittstellen)
- [[Konformitaetsbewertung]] (Parallelbegriff für Medizinprodukte nach MDR)
- [[gematik]] (verantwortliche Stelle für das Bestätigungsverfahren)

## Quellen

- [gematik Fachportal: Bestätigungsverfahren ISiK](https://fachportal.gematik.de/hersteller-anbieter/produktzulassung/bestaetigungsverfahren-isik)
- [gematik: ISiK-Spezifikation auf simplifier.net](https://simplifier.net/isik)
- [Wikipedia: Krankenhauszukunftsgesetz](https://de.wikipedia.org/wiki/Krankenhauszukunftsgesetz)
- [§ 373 SGB V: Informationstechnische Systeme im Krankenhaus (ISiK)](https://www.gesetze-im-internet.de/sgb_5/__373.html)
