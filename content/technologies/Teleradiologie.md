---
title: Teleradiologie
audience: [technical, non-technical]
tags: [technologies, radiologie, dicom, telemedizin, bildgebung]
aliases: [Teleradiology, Telekonsil Radiologie, Fernbefundung]
maturity: setzling
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, it-dienstleister, regulierung]
  interests: [compliance, technik]
---

# Teleradiologie

Die **Teleradiologie** ist die digitale Übertragung radiologischer Bilder im [[DICOM]]-Format über Netzwerke an räumlich entfernte Radiologen zur Befundung oder Zweitbeurteilung.

## Erklärt für Einsteiger

Wenn du nachts in ein kleines Krankenhaus kommst und ein CT gemacht wird, gibt es dort vielleicht keinen Radiologen, der das Bild sofort beurteilen kann. Mit Teleradiologie werden die Bilder sofort über das Internet an einen Radiologen in einer anderen Stadt geschickt. Dieser schaut sich die Bilder am Computer an und schreibt seinen Befund, auch wenn er hunderte Kilometer entfernt ist. So bekommst du auch nachts oder am Wochenende schnell ein fachärztliches Ergebnis.

## Überblick

Teleradiologie ist ein Teilbereich der [[Telemedizin]]. Sie ermöglicht, dass radiologische Aufnahmen (Röntgen, CT, MRT, Ultraschall, nuklearmedizinische Bilder) nicht mehr vor Ort befundet werden müssen. Der Radiologe sitzt an einem zertifizierten Befundungsarbeitsplatz an einem anderen Ort und verbindet sich über gesicherte Netzwerke mit dem [[PACS]] des Aufnahmestandorts.

In Deutschland sind zwei Anwendungsszenarien verbreitet:

- **Teleradiologie im engeren Sinne**: Ein Krankenhaus ohne eigenen Radiologen schickt Bilder an einen externen Teleradiologieanbieter. Rechtsgrundlage ist § 123 der Strahlenschutzverordnung 2018 (StrlSchV 2018, in Kraft seit 1. Januar 2019). Genehmigungspflichtig durch das Landesamt für Umwelt (für den Betrieb).
- **Telekonsil (radiologische Zweitbefundung)**: Ein Arzt schickt Bilder an einen anderen Radiologen zur Expertenmeinung. Vertragsärzte können das Telekonsil seit 2017 nach EBM-Ziffer 34800 ff. abrechnen.

### Versorgungsrelevanz

Teleradiologie schließt Versorgungslücken in zwei Bereichen:

1. **Nachtdienst und Wochenende**: Kleine Häuser ohne Nacht-Bereitschaftsdienst für Radiologen können über Teleradiologie rund um die Uhr Befunde erhalten.
2. **Unterversorgung**: Regionen mit wenigen niedergelassenen Radiologen können auf externe Kapazitäten zurückgreifen.

## Technische Details

### DICOM als Datenformat

Das technische Fundament der Teleradiologie ist der [[DICOM]]-Standard (Digital Imaging and Communications in Medicine). DICOM definiert das Dateiformat für medizinische Bilder und die Netzwerkprotokolle zur Übertragung. Jede DICOM-Datei enthält neben den Bilddaten auch strukturierte Metadaten: Patientenidentifikation, Geräteparameter, Aufnahmezeitpunkt, Modalität.

Für die Fernübertragung werden DICOM-Standarddienste genutzt:

- **DICOM C-STORE**: Überträgt Bilder von der Quelle (CT, MRT) zum [[PACS]] oder direkt an den externen Befunder.
- **DICOM C-FIND/C-MOVE**: Sucht und ruft Bilder aus einem entfernten PACS ab.
- **DICOMweb (WADO/STOW-RS)**: Modernerer REST-basierter Ansatz für DICOM-Übertragung über HTTP.

### Workflow

Ein typischer Teleradiologie-Workflow:

1. Bildgebung erzeugt DICOM-Bilder (z.B. CT in Notaufnahme eines Kreiskrankenhauses).
2. [[RIS]] (Radiologie-Informationssystem) sendet Auftrag (Worklist) über DICOM MWL.
3. Bilder werden automatisch in das lokale [[PACS]] abgelegt.
4. Das PACS überträgt die Bilder per DICOM C-STORE oder DICOMweb an das PACS des Teleradiologieanbieters.
5. Radiologe befundet am kalibrierten Befundungsmonitor mit Befundungssoftware.
6. Befund wird als DICOM Structured Report (SR) oder als HL7-Nachricht zurück übermittelt.
7. Befund erscheint im [[RIS]] der einsendenden Einrichtung.

### Rechtliche Anforderungen in Deutschland

Die Teleradiologie im engeren Sinne (Befundung ohne Radiologen vor Ort) ist an strenge Anforderungen geknüpft:

- **Strahlenschutzverordnung (StrlSchV 2018, § 123)**: Der Teleradiologe muss unmittelbar erreichbar sein und den Befund sofort nach Bildübermittlung erstellen (§ 123 StrlSchV).
- **DIN 6868-159**: Technische Norm für Teleradiologie-Systeme; regelt Qualitätsanforderungen an Übertragung und Befundungsmonitor.
- **Datenschutz**: Bilder enthalten direkte Patientenidentifikatoren ([[KVNR]], Name, Geburtsdatum). Die Übertragung muss verschlüsselt erfolgen. Für Forschung oder externe Anbieter außerhalb Deutschlands ist [[DICOM]]-De-Identifikation nach PS3.15 Annex E erforderlich.
- **Genehmigungspflicht**: Der externe Befunder benötigt eine eigene Röntgengenehmigung für Teleradiologie.

> [!interesse-compliance]
> Rechtsgrundlage für Teleradiologie im engeren Sinne ist § 123 StrlSchV 2018 (in Kraft seit 1. Januar 2019). Der Teleradiologe muss unmittelbar erreichbar sein und den Befund sofort nach Bildübermittlung erstellen. Der externe Befunder benötigt eine eigene Röntgengenehmigung. Abrechnung des Telekonsils erfolgt über EBM-Ziffer 34800 ff. durch die zuständige [[Kassenaerztliche-Vereinigung|Kassenärztliche Vereinigung]].

### Abgrenzung: Teleradiologie vs. Telekonsil

| Merkmal | Teleradiologie (§ 123 StrlSchV 2018) | Telekonsil (EBM 34800 ff.) |
|---|---|---|
| Szenario | Kein Radiologe vor Ort | Zweitmeinung durch Experten |
| Rechtsgrundlage | StrlSchV | SGB V, EBM |
| Genehmigung | Landesamt | Nicht erforderlich |
| Vergütung | Privat/DRG | KV-Abrechnung möglich |

## Verknüpfungen

- [[DICOM]] (Bildformat und Übertragungsprotokoll für Teleradiologie)
- [[PACS]] (Picture Archiving and Communication System; speichert und überträgt DICOM-Bilder)
- [[RIS]] (Radiologie-Informationssystem; verwaltet Aufträge und Befunde)
- [[Telemedizin]] (Oberbegriff; Teleradiologie ist ein Teilbereich)
- [[KIS]] (Krankenhausinformationssystem; empfängt Teleradiologie-Befunde)
- [[ePA]] (Bildgebungsdaten können in der Akte abgelegt werden)

## Quellen

- [Springer: Grundlagen der Teleradiologie (Die Radiologie)](https://link.springer.com/article/10.1007/s00117-007-1486-8)
- [KBV: Radiologische Telekonsilien](https://www.kbv.de/html/27985.php)
- [NIH/PMC: Teleradiologie und Telemedizin](https://pmc.ncbi.nlm.nih.gov/articles/PMC7545155/)
- [DICOM Standard PS3.15 Annex E: De-Identification](https://www.dicomstandard.org/current)
- [§ 123 Strahlenschutzverordnung 2018 (StrlSchV) - Gesetze im Internet](https://www.gesetze-im-internet.de/strlschv_2018/__123.html)
