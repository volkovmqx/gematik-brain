---
title: DEMIS
audience: [technical]
tags: [technologie, meldewesen, infektionsschutz, FHIR, RKI]
aliases: [Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz]
relevance:
  sectors: [krankenhaus, arztpraxis, apotheke, pflege, ti-infrastruktur, regulierung]
  interests: [compliance, technik]
maturity: wachsend
---

# DEMIS

DEMIS (Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz) ist das vom [[RKI|Robert Koch-Institut (RKI)]] betriebene, [[FHIR]]-basierte System zur elektronischen Meldung meldepflichtiger Infektionskrankheiten in Deutschland.

## Erklärt für Einsteiger

Wenn ein Arzt eine meldepflichtige Krankheit wie Masern oder Tuberkulose diagnostiziert, muss er das dem Gesundheitsamt melden. Früher geschah das per Fax oder Brief, was langsam und fehleranfällig war. DEMIS ist das digitale System dafür: Der Arzt oder das Labor schickt die Meldung elektronisch ab, sie landet direkt beim zuständigen Gesundheitsamt, und das Gesundheitsamt leitet sie weiter an das RKI. Das funktioniert schnell und strukturiert. Während der COVID-19-Pandemie wurde deutlich, wie wichtig ein solches System für schnelle Lageberichte ist.

## Überblick

DEMIS wurde auf Basis des [[IfSG|Infektionsschutzgesetzes (IfSG)]] entwickelt und schrittweise eingeführt. Das RKI ist als nationale Gesundheitsbehörde für Betrieb und Weiterentwicklung verantwortlich.

Das System digitalisiert die [[Meldepflicht|Meldekette]] nach IfSG: Ärzte, Krankenhäuser, Labore und andere meldepflichtige Einrichtungen übermitteln Krankheitsmeldungen und Laborbefunde elektronisch an die zuständigen [[OeGD|Gesundheitsämter]]. Die Gesundheitsämter übermitteln aggregierte Daten weiter an die Landesbehörden und schließlich an das RKI.

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

> [!klinik-integration] Klinik-Integration: DEMIS-Arztmeldung aus dem KIS
> Krankenhäuser sind nach § 6 IfSG zur Meldung von Krankheitsverdacht, Erkrankung und Tod bei meldepflichtigen Krankheiten verpflichtet. Die Meldung soll direkt aus dem KIS-Befunddokumentationsprozess erfolgen, ohne manuelle Doppelerfassung.
>
> **KIS-Modul-Status klären:** CGM MEDICO, Orbis/Dedalus, iMedOne und SAP IS-H bieten DEMIS-Module an. Prüfen Sie, ob das Modul lizenziert, konfiguriert und produktiv ist. DEMIS-Meldungen erfordern keine TI-Verbindung: Authentifizierung erfolgt über ein Einrichtungszertifikat per HTTPS direkt an den DEMIS-Empfangsserver des Gesundheitsamts.
> **Stammdaten-Pflicht ab April 2026:** Ab April 2026 müssen Einrichtungsstammdaten im DEMIS-System korrekt hinterlegt sein. Fehlerhafte Stammdaten führen zur automatischen Zurückweisung mit FHIR OperationOutcome. Prüfen Sie jetzt den Stammdatenstatus Ihrer Einrichtung in der DEMIS-Verwaltungsoberfläche des RKI.
> **Meldungsformat und Timing:** Das RKI aktualisiert DEMIS-FHIR-Profile und Codelisten (LOINC, SNOMED CT) laufend. Das KIS-Modul muss aktuelle Profile unterstützen. Für bestimmte Erreger gilt eine 24-Stunden-Melde-Frist. Planen Sie einen Fallback-Prozess für KIS-Wartungsfenster ein.

### Technische Übertragung

Meldungen werden per HTTPS über eine REST-API übermittelt. Primärsysteme (Laborsoftware, [[KIS]]) können DEMIS-Meldungen direkt aus dem Workflow heraus erzeugen und versenden. Das RKI stellt Referenzimplementierungen und Testumgebungen bereit.

Die Authentifizierung der meldenden Einrichtungen erfolgt über Zertifikate, die von zugelassenen Stellen ausgestellt werden. Damit wird sichergestellt, dass nur berechtigte Einrichtungen Meldungen einreichen können.

> [!dev-quickstart] Dev Quickstart: DEMIS-Meldung per FHIR REST senden
> Endpoint: `POST https://demis.rki.de/notification/$process-notification`
> ```bash
> # DEMIS-Arztmeldung als FHIR-Bundle senden
> # Auth: Access-Token vom DEMIS Token Provider + mTLS mit Einrichtungszertifikat
> curl -X POST "https://demis.rki.de/notification/\$process-notification" \
>   -H "Content-Type: application/fhir+json" \
>   -H "Authorization: Bearer <demis-access-token>" \
>   --cert /pfad/einrichtung.crt \
>   --key  /pfad/einrichtung.key \
>   -d @meldung-bundle.json
>
> # Lokale Validierung vor dem Senden (Docker-Testumgebung)
> curl -X POST "http://localhost:8080/\$validate" \
>   -H "Content-Type: application/fhir+json" \
>   -d @meldung-bundle.json
> ```
> Bundle-Typ: FHIR R4 `Bundle` (type: `message`) mit `MessageHeader`, `Patient`, `Condition`.
> Bei Fehler: FHIR `OperationOutcome` als Antwort mit Fehlerdetail.
> - RKI FHIR-Profile: [simplifier.net/demis](https://simplifier.net/demis)
> - Testumgebung (Docker): [github.com/gematik/DEMIS-Test_Environment](https://github.com/gematik/DEMIS-Test_Environment)
> - Validierungsservice: [github.com/gematik/DEMIS-validation-service](https://github.com/gematik/DEMIS-validation-service)

### Verarbeitungspipeline beim RKI

Eingehende Meldungen durchlaufen beim RKI eine automatische Validierung gegen die FHIR-Profile. Fehlerhafte Meldungen werden zurückgewiesen mit einer strukturierten Fehlermeldung (FHIR OperationOutcome). Valide Meldungen werden in das RKI-eigene Surveillance-System übernommen und fließen in Lageberichte und die öffentliche Statistik ein.

> [!interesse-compliance]
> Die Meldepflicht nach [[IfSG]] §§ 6 und 7 gilt für Ärzte, Krankenhäuser, Labore und andere Einrichtungen. Seit der schrittweisen DEMIS-Einführung ab 2021 ist die elektronische Übermittlung über DEMIS der vorgesehene Standardweg. Ab April 2026 müssen Labore aktuelle Stammdaten hinterlegt haben, sonst werden Meldungen zurückgewiesen. Für Krankenhäuser: Das [[KIS]] muss DEMIS-Meldungen direkt erzeugen können.

> [!frist-warnung] Frist-Warnung: DEMIS-Stammdatenpflicht und aktualisierte FHIR-Profile ab April 2026
> **Rechtsgrundlage:** § 14 Abs. 2 IfSG i.V.m. der DEMIS-Nutzungsordnung des RKI; §§ 6 und 7 IfSG (Meldepflichten für Ärzte, Krankenhäuser und Labore).
> **Frist:** Ab April 2026 müssen meldende Labore und Krankenhäuser ihre DEMIS-Stammdaten vollständig und korrekt gepflegt haben. Meldungen von Einrichtungen mit veralteten oder unvollständigen Stammdaten werden vom DEMIS-System automatisch zurückgewiesen. Gleichzeitig gelten aktualisierte FHIR-Profile und Codelisten (LOINC, SNOMED CT), die Primärsysteme ab diesem Zeitpunkt unterstützen müssen.
> **Handlungsbedarf:** Labore und Krankenhäuser müssen umgehend den Status ihrer DEMIS-Stammdaten im RKI-Stammportal prüfen und ggf. aktualisieren. KIS-Hersteller und Laborsoftware-Anbieter müssen die neuen FHIR-Profile des RKI (auf simplifier.net/demis veröffentlicht) in ihre Systeme einspielen. Ein Testlauf gegen die DEMIS-Testumgebung vor dem Stichtag ist dringend empfohlen.
> **Bei Nichtbeachtung:** Nicht fristgerecht übermittelte oder zurückgewiesene Meldungen stellen eine Verletzung der gesetzlichen Meldepflicht nach §§ 6, 7 IfSG dar. Ordnungswidrigkeiten nach § 73 IfSG können mit einem Bußgeld von bis zu 25.000 Euro geahndet werden.

### Änderungen ab April 2026

Ab **April 2026** gelten neue Pflichten für meldende Labore:

- **Stammdaten-Pflicht**: Labore müssen ihre DEMIS-Stammdaten korrekt und aktuell gepflegt haben, um weiterhin Meldungen einreichen zu können. Unvollständige oder veraltete Stammdaten führen zur Zurückweisung von Meldungen.
- **Aktualisiertes Meldungsformat**: Das Meldungsformat und die verwendeten Codelisten (LOINC, SNOMED CT) wurden aktualisiert. Primärsysteme müssen die neuen Profile unterstützen.
> [!interesse-technik]
> DEMIS-Meldungen sind FHIR R4 Bundles. Endpunkt: HTTPS REST-API. FHIR-Profile des RKI auf [simplifier.net/demis](https://simplifier.net/demis). Für KIS-Integration: Laborsoftware und KIS können DEMIS-Bundles direkt per HTTP POST an den DEMIS-Empfangsserver des Gesundheitsamts senden. Authentifizierung per Zertifikat (nicht über TI-PKI). RKI stellt Testumgebung und Referenzimplementierungen bereit: [github.com/gematik/DEMIS](https://github.com/gematik/DEMIS).

### Abgrenzung zu anderen Systemen

DEMIS ist kein Teil der klinischen TI-Infrastruktur (kein Dienst der [[Telematikinfrastruktur]]). Es ist ein Fachsystem des öffentlichen Gesundheitsdienstes. Schnittstellen zur TI bestehen nicht direkt, aber indirekt über gemeinsame Standards ([[FHIR]], [[ICD-10-GM]]) und die Nutzung von Patientenidentifikatoren.

> [!praxis-tipp] Praxis-Tipp: Meldepflichtige Erkrankungen digital melden
> Als niedergelassene Ärztin oder niedergelassener Arzt sind Sie nach § 6 IfSG meldepflichtig. Typische Meldeanlässe: Masern, Scharlach, Hepatitis, Tuberkulose, Typhus, Keuchhusten, EHEC.
>
> So melden Sie heute:
> - Viele PVS unterstützen DEMIS-Meldungen direkt aus dem Befunddialog heraus. Prüfen Sie in Ihren PVS-Einstellungen, ob DEMIS aktiviert ist.
> - Alternativ: DEMIS-Webportal unter [demis.rki.de](https://demis.rki.de) nutzen. Kein Login mit TI-Komponenten nötig, Zugangsdaten über das zuständige Gesundheitsamt.
> - Die Meldung muss innerhalb von 24 Stunden nach Diagnosestellung beim Gesundheitsamt eingehen.
>
> Häufiger Fehler: Meldung wird vergessen, weil kein automatischer Workflow im PVS eingerichtet ist. Fragen Sie Ihren PVS-Hersteller, ob eine DEMIS-Direktintegration verfügbar ist.

## Verknüpfungen

- [[FHIR]]: Technische Basis aller DEMIS-Meldungen
- [[IfSG]]: Rechtsgrundlage für DEMIS und alle Meldepflichten
- [[Meldepflicht]]: §§ 6 und 7 IfSG als Grundlage der Meldepflicht
- [[RKI]]: Betreibt DEMIS und koordiniert die nationale Surveillance
- [[OeGD|Öffentlicher Gesundheitsdienst (ÖGD)]]: Gesundheitsämter als zentrale Empfänger der DEMIS-Meldungen
- [[gematik]]: Betreiber der TI; DEMIS nutzt analoge Standards, ist aber ein eigenständiges System
- [[Telematikinfrastruktur]]: Parallele Infrastruktur mit ähnlichen Interoperabilitätszielen
- [[ISiK]]: Krankenhaus-Interoperabilitätsstandard, aus dem DEMIS-Meldungen generiert werden können
- [[BSI]]: Beteiligt an Sicherheitsanforderungen für öffentliche digitale Gesundheitsinfrastruktur

## Quellen

- [RKI: DEMIS – Überblick](https://www.rki.de/DE/Content/Infekt/DEMIS/DEMIS_node.html)
- [Simplifier.net: DEMIS FHIR-Profile (RKI)](https://simplifier.net/demis)
- [Infektionsschutzgesetz (IfSG)](https://www.gesetze-im-internet.de/ifsg/)
- [Bundesgesundheitsministerium: Elektronische Infektionsmeldung](https://www.bundesgesundheitsministerium.de/themen/digitalisierung/elektronische-infektionsmeldung.html)
