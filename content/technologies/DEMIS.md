---
title: DEMIS
audience: [technical]
tags: [technologie, meldewesen, infektionsschutz, FHIR, RKI]
aliases: [Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz]
---

# DEMIS

DEMIS (Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz) ist das vom [[RKI|Robert Koch-Institut (RKI)]] betriebene, [[FHIR]]-basierte System zur elektronischen Meldung meldepflichtiger Infektionskrankheiten in Deutschland.

## Erklärt für Einsteiger

Wenn ein Arzt eine meldepflichtige Krankheit wie Masern oder Tuberkulose diagnostiziert, muss er das dem Gesundheitsamt melden. Früher geschah das per Fax oder Brief, was langsam und fehleranfällig war. DEMIS ist das digitale System dafür: Der Arzt oder das Labor schickt die Meldung elektronisch ab, sie landet direkt beim zuständigen Gesundheitsamt, und das Gesundheitsamt leitet sie weiter an das RKI. Das funktioniert schnell und strukturiert. Während der COVID-19-Pandemie wurde deutlich, wie wichtig ein solches System für schnelle Lageberichte ist.

## Überblick

DEMIS wurde auf Basis des [[IfSG|Infektionsschutzgesetzes (IfSG)]] entwickelt und schrittweise eingeführt. Das RKI ist als nationale Gesundheitsbehörde für Betrieb und Weiterentwicklung verantwortlich.

Das System digitalisiert die Meldekette nach IfSG: Ärzte, Krankenhäuser, Labore und andere meldepflichtige Einrichtungen übermitteln Krankheitsmeldungen und Laborbefunde elektronisch an die zuständigen Gesundheitsämter. Die Gesundheitsämter übermitteln aggregierte Daten weiter an die Landesbehörden und schließlich an das RKI.

Während der COVID-19-Pandemie ab 2020 zeigte sich der Wert eines solchen Systems: Die Menge der Meldungen war mit klassischen Papiermeldungen nicht mehr handhabbar. DEMIS wurde zum zentralen Kanal für die bundesweite COVID-19-Surveillance. Das System ermöglichte es dem RKI erstmals, tagesaktuelle, strukturierte Falldaten in großem Umfang zu verarbeiten.

DEMIS ist technisch unabhängig von der [[Telematikinfrastruktur]] der [[gematik]], orientiert sich aber an denselben Interoperabilitätsstandards. Der primäre Kanal für Labormeldungen ist eine HTTPS-basierte FHIR-REST-API. Langfristig ist eine engere Integration mit der TI-Infrastruktur denkbar, da auch dort [[FHIR]] als Datenformat eingesetzt wird.

## Technische Details

### Rechtsgrundlage

Das [[IfSG|Infektionsschutzgesetz (IfSG)]], insbesondere §§ 6, 7 und 9, verpflichtet zur Meldung bestimmter Krankheiten und Erreger. Die §§ 14 und 15 IfSG regeln die Übermittlung der Daten. Das [[PDSG|Patientendaten-Schutz-Gesetz (PDSG)]] von 2020 schuf zusätzliche Rechtsgrundlagen für die Digitalisierung des Meldewesens.

### FHIR-Basis

DEMIS setzt vollständig auf [[FHIR]] R4. Das RKI hat eigene FHIR-Profile entwickelt und auf Simplifier.net veröffentlicht. Die zentralen Ressourcentypen sind:

- **Bundle**: Jede DEMIS-Meldung ist ein FHIR-Bundle
- **Composition**: Strukturiert den Inhalt einer Meldung
- **Patient**: Demografische Angaben der betroffenen Person (anonymisiert oder pseudonymisiert)
- **Condition**: Die gemeldete Diagnose oder der Erregerbefund
- **Observation**: Laborbefunde und Testergebnisse
- **DiagnosticReport**: Laborberichte

Die Profile sind domänenspezifisch nach Erregern bzw. Krankheiten strukturiert. Für jede meldepflichtige Erkrankung existiert ein eigenes FHIR-Profil-Set.

### Meldewege und Akteure

| Akteur | Meldeinhalt | Empfänger |
|---|---|---|
| Arzt / Krankenhaus | Krankheitsverdacht, Erkrankung, Tod | Zuständiges Gesundheitsamt |
| Labor | Erregernachweise | Zuständiges Gesundheitsamt |
| Gesundheitsamt | Anonymisierte Falldaten | Landesbehörde, RKI |

### Technische Übertragung

Meldungen werden per HTTPS über eine REST-API übermittelt. Primärsysteme (Laborsoftware, [[KIS]]) können DEMIS-Meldungen direkt aus dem Workflow heraus erzeugen und versenden. Das RKI stellt Referenzimplementierungen und Testumgebungen bereit.

Die Authentifizierung der meldenden Einrichtungen erfolgt über Zertifikate, die von zugelassenen Stellen ausgestellt werden. Damit wird sichergestellt, dass nur berechtigte Einrichtungen Meldungen einreichen können.

### Verarbeitungspipeline beim RKI

Eingehende Meldungen durchlaufen beim RKI eine automatische Validierung gegen die FHIR-Profile. Fehlerhafte Meldungen werden zurückgewiesen mit einer strukturierten Fehlermeldung (FHIR OperationOutcome). Valide Meldungen werden in das RKI-eigene Surveillance-System übernommen und fließen in Lageberichte und die öffentliche Statistik ein.

### Abgrenzung zu anderen Systemen

DEMIS ist kein Teil der klinischen TI-Infrastruktur (kein Dienst der [[Telematikinfrastruktur]]). Es ist ein Fachsystem des öffentlichen Gesundheitsdienstes. Schnittstellen zur TI bestehen nicht direkt, aber indirekt über gemeinsame Standards ([[FHIR]], [[ICD-10-GM]]) und die Nutzung von Patientenidentifikatoren.

## Verknüpfungen

- [[FHIR]]: Technische Basis aller DEMIS-Meldungen
- [[IfSG]]: Rechtsgrundlage für DEMIS und alle Meldepflichten
- [[RKI]]: Betreibt DEMIS und koordiniert die nationale Surveillance
- [[gematik]]: Betreiber der TI; DEMIS nutzt analoge Standards, ist aber ein eigenständiges System
- [[Telematikinfrastruktur]]: Parallele Infrastruktur mit ähnlichen Interoperabilitätszielen
- [[ISiK]]: Krankenhaus-Interoperabilitätsstandard, aus dem DEMIS-Meldungen generiert werden können
- [[BSI]]: Beteiligt an Sicherheitsanforderungen für öffentliche digitale Gesundheitsinfrastruktur

## Quellen

- [RKI: DEMIS – Überblick](https://www.rki.de/DE/Content/Infekt/DEMIS/DEMIS_node.html)
- [Simplifier.net: DEMIS FHIR-Profile (RKI)](https://simplifier.net/demis)
- [Infektionsschutzgesetz (IfSG)](https://www.gesetze-im-internet.de/ifsg/)
- [Bundesgesundheitsministerium: Elektronische Infektionsmeldung](https://www.bundesgesundheitsministerium.de/themen/digitalisierung/elektronische-infektionsmeldung.html)
