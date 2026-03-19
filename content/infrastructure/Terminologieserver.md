---
title: Terminologieserver
audience: [technical]
tags: [infrastructure, fhir, terminologie, snomed, loinc, bfarm]
aliases: [Terminologiedienst, FHIR Terminology Server, ZTS BfArM]
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, ti-infrastruktur, it-dienstleister, forschung]
  interests: [technik, compliance]
maturity: wachsend
---

# Terminologieserver

Ein **Terminologieserver** ist ein spezialisierter Server, der medizinische Codesysteme und Terminologien (wie [[SNOMED-CT]], [[LOINC]], [[ICD-10-GM]]) verwaltet und über eine standardisierte [[FHIR]]-API für Softwaresysteme zugänglich macht.

## Erklärt für Einsteiger

Stell dir vor, alle Krankenhäuser und Arztpraxen sollen denselben Begriff für "Blutdruckmessung" verwenden. Dazu gibt es internationale Listen mit Tausenden von Begriffen, jeweils mit einem festen Code. Der Terminologieserver ist der Ort, an dem diese Listen gespeichert sind. Wenn ein Krankenhausprogramm wissen will: "Was bedeutet Code 55284-4?", fragt es den Terminologieserver und bekommt die Antwort "Blutdruck" auf Englisch und Deutsch. Ohne diesen Dienst müsste jedes Programm seine eigene Kopie dieser Listen pflegen, was schnell zu Fehlern führt.

## Überblick

In Deutschland betreibt das [[BfArM]] (Bundesinstitut für Arzneimittel und Medizinprodukte) den offiziellen nationalen Terminologieserver unter `terminologien.bfarm.de`. Er basiert auf **TerminoloGIT**, einer Open-Source-Lösung, die ursprünglich von der österreichischen ELGA GmbH (Elektronische Gesundheitsakte) entwickelt wurde. Die Weiterentwicklung erfolgt gemeinsam im D-A-CH-Raum mit ELGA Österreich und eHealth Suisse.

Der BfArM-Terminologieserver ist die offizielle Bezugsquelle für:

- **[[SNOMED-CT]]**: Die internationale klinische Terminologie mit über 350.000 Konzepten
- **[[LOINC]]**: Standardcodes für Laborwerte, klinische Beobachtungen und Dokumente
- **[[ICD-10-GM]]**: Die deutsche Modifikation der WHO-Diagnoseklassifikation
- **FHIR ValueSets und CodeSystems**: Für den Einsatz in deutschen FHIR-Profilen (ePA-MIOs, ISiK, KDS der MII)
- **Alpha-ID, OPS, ATC**: Weitere BfArM-Codesysteme in FHIR-Format

### Warum ein zentraler Terminologieserver wichtig ist

Ohne einen zentralen Terminologieserver müsste jedes Softwaresystem (PVS, KIS, AVS, FHIR-Server) seine eigene lokale Kopie der Terminologien pflegen. Versionskonflikte sind dann unvermeidlich: Wenn das [[PVS]] einer Praxis SNOMED CT Version 2024-01 verwendet und das Krankenhaus Version 2024-07, können dieselben Konzepte unterschiedlich codiert sein. Der zentrale Terminologieserver löst dieses Problem, indem er immer die aktuellen, offiziell freigegebenen Versionen bereitstellt.

> [!interesse-compliance] Terminologien in der ePA und FHIR-Pflichtprojekten
> Die [[ePA]]-MIOs der [[KBV]] und die [[ISiK]]-Profile schreiben konkrete Terminologieversionen vor. Die Quelle für die verpflichtend verwendeten ValueSets ist der BfArM-Terminologieserver. Hersteller, die FHIR-Profile für die [[Konformitätsbewertung]] (KOB) bei der gematik einreichen, müssen sicherstellen, dass ihre ValueSet-Referenzen auf Versionen verweisen, die der BfArM-Server bereitstellt. Die Nutzung veralteter oder selbst erstellter Terminologiekopien ist ein häufiger Ablehnungsgrund bei Konformitätsprüfungen.

## Technische Details

### FHIR Terminology API

Der BfArM-Terminologieserver implementiert die FHIR R4 Terminology-Operationen gemäß dem FHIR-Standard (HL7):

- **`GET /CodeSystem`**: Listet alle verfügbaren Codesysteme
- **`GET /ValueSet`**: Listet alle verfügbaren ValueSets
- **`POST /ValueSet/$expand`**: Expandiert ein ValueSet zu einer vollständigen Liste von Codes
- **`GET /CodeSystem/$lookup`**: Gibt die Bedeutung eines Codes zurück (Lookup)
- **`POST /CodeSystem/$validate-code`**: Prüft, ob ein Code in einem Codesystem gültig ist
- **`POST /ConceptMap/$translate`**: Übersetzt einen Code von einem Codesystem in ein anderes

Diese Operationen sind in der FHIR-Terminologie-Spezifikation (HL7 FHIR R4, Kapitel "Terminology Module") definiert.

### TerminoloGIT-Technologie

TerminoloGIT ist eine Open-Source-Lösung, die FHIR-Terminologien über Git-Repositories verwaltet. Sie unterstützt neben den Standard-FHIR-Operationen auch:

- SNOMED CT Expression Constraint Language (ECL) für komplexe Abfragen
- Synonymsuche über alle Terminologien
- Automatisches Update von Terminologien aus zentralen Quellen (NRC-Server von SNOMED International)

Das [[BfArM]] lizenziert SNOMED CT für Deutschland und stellt über den Terminologieserver die offiziell freigegebene deutsche SNOMED-CT-Edition bereit.

### Verhältnis zum gematik Interoperabilitätsverzeichnis (INA)

Die [[gematik]] betreibt das **Interoperabilitätsverzeichnis (INA)** unter `ina.gematik.de`. Das INA verlinkt auf FHIR-Profile und Implementierungsleitfäden, referenziert dabei aber den BfArM-Terminologieserver für die zugrundeliegenden Codesysteme. Beide Dienste ergänzen sich: INA ist das Verzeichnis der Profilierungen, der BfArM-Server ist die Terminologie-Infrastruktur dahinter.

> [!interesse-technik] Entwickler-Referenz
> Basis-URL: `https://terminologien.bfarm.de` (öffentlich erreichbar). FHIR-Inhalte werden primär als FHIR-Packages bereitgestellt, abrufbar über die NPM-API des Servers. Beispiel: `GET https://terminologien.bfarm.de/fhir/CodeSystem` listet verfügbare CodeSystems. Vollständige SNOMED-CT-Inhalte erfordern eine NRC-Lizenz. API-Dokumentation: `https://terminologien.bfarm.de/fhirpackages.html`.

> [!dev-quickstart] Dev Quickstart: ZTS FHIR Terminology API
> Basis-URL (öffentlich, kein Auth erforderlich): `https://terminologien.bfarm.de/fhir`
>
> ```bash
> # Code-Lookup: LOINC 55284-4 (Blutdruck)
> curl -H "Accept: application/fhir+json" \
>   "https://terminologien.bfarm.de/fhir/CodeSystem/\$lookup?system=http://loinc.org&code=55284-4"
>
> # ValueSet expandieren (ICD-10-GM)
> curl -X POST \
>   -H "Content-Type: application/fhir+json" \
>   -d '{"resourceType":"Parameters","parameter":[{"name":"url","valueUri":"http://fhir.de/ValueSet/bfarm/icd-10-gm"}]}' \
>   "https://terminologien.bfarm.de/fhir/ValueSet/\$expand"
>
> # Code validieren
> curl -X POST \
>   -H "Content-Type: application/fhir+json" \
>   -d '{"resourceType":"Parameters","parameter":[{"name":"url","valueUri":"http://fhir.de/ValueSet/bfarm/icd-10-gm"},{"name":"code","valueCode":"J06.9"}]}' \
>   "https://terminologien.bfarm.de/fhir/ValueSet/\$validate-code"
>
> # FHIR-Package per npm laden (ZTS als Registry)
> npm --registry https://packages.simplifier.net install de.bfarm.icd-10-gm@latest
> ```
>
> - FHIR R4, `Accept: application/fhir+json`
> - SNOMED ECL: `GET /fhir/ValueSet/$expand?ecl=<ECL-Ausdruck>` (NRC-Lizenz erforderlich)
> - Automatisierte Package-Downloads: [github.com/gematik/zts-api-client-examples](https://github.com/gematik/zts-api-client-examples)
> - Vollständige API-Doku: [terminologien.bfarm.de/fhirpackages.html](https://terminologien.bfarm.de/fhirpackages.html)

### Nutzung in deutschen FHIR-Projekten

Der BfArM-Terminologieserver ist Pflichtquelle für:

- **[[MIO]]-Spezifikationen** der KBV ([[eImpfpass]], [[Mutterpass]], [[Kinderuntersuchungsheft]]): ValueSets müssen auf dem BfArM-Server verfügbar sein
- **[[ISiK]]**-Profile für Krankenhaus-IT: Terminologiereferenzen auf den BfArM-Server
- **Medizininformatik-Initiative (KDS)**: Die Kerndatensatz-Module der [[Medizininformatik-Initiative]] nutzen LOINC- und SNOMED-Codes, die der BfArM-Server bereitstellt
- **E-Rezept-FHIR-Profile**: Kodierungen für Arzneimittelverordnungen (ATC, PZN als CodeSystems)

> [!klinik-integration] Klinik-Integration: Terminologieserver im KIS-Betrieb
> **ISiK-Pflicht:** ISiK Basis Stufe 3 (Frist Juli 2025) verlangt, dass KIS-Systeme FHIR-Ressourcen mit validen Terminologiereferenzen auf den BfArM-Server (`terminologien.bfarm.de`) ausliefern. Veraltete lokale Kopien von ICD-10-GM, SNOMED CT oder LOINC führen bei der ISiK-Bestätigung zur Ablehnung.
>
> **KIS-Anbindung:** Moderne KIS-Systeme (SAP ISH, Orbis, iMedOne, Dedalus) implementieren die FHIR Terminology API direkt oder über einen lokalen Proxy-Cache. Empfehlung: lokalen Terminology-Cache im Kliniknetz vorhalten, um Latenzen und Internet-Abhängigkeit zu reduzieren. Updatezyklus prüfen: BfArM veröffentlicht neue SNOMED-CT-Releases halbjährlich.
>
> **Deployment:** Der Terminologieserver ist öffentlich erreichbar, aber für Produktivbetrieb mit hohem Request-Volumen sollte ein lokaler Cache (z.B. HAPI FHIR Terminology Server) eingesetzt werden. Verfügbarkeitsanforderung: 24/7 für alle Systeme, die bei Patientenaufnahme oder Befundcodierung terminologieabhängige Validierungen durchführen.

## Verknüpfungen

- [[BfArM]] (betreibt den nationalen Terminologieserver terminologien.bfarm.de)
- [[SNOMED-CT]] (wichtigstes klinisches Codesystem auf dem Terminologieserver)
- [[LOINC]] (Laborwerte und klinische Beobachtungen)
- [[ICD-10-GM]] (Diagnoseklassifikation; deutsche Modifikation der WHO-ICD)
- [[FHIR]] (technisches Protokoll der Terminology API)
- [[MIO]] (Medizinische Informationsobjekte; nutzen BfArM-Terminologien)
- [[ISiK]] (Krankenhaus-Interoperabilitätsstandard; referenziert BfArM-ValueSets)
- [[Medizininformatik-Initiative]] (KDS-Module nutzen BfArM-Terminologien)
- [[ePA]] (MIO-Inhalte in der ePA basieren auf BfArM-Terminologien)
- [[Konformitätsbewertung]] (KOB bei gematik prüft korrekte Terminologienutzung)
- [[gematik]] (Interoperabilitätsverzeichnis INA referenziert BfArM-Terminologien)
- [[ATC-Code]] (Arzneimittelklassifikation; als CodeSystem auf dem BfArM-Server)
- [[PZN]] (Pharmazentralnummer; CodeSystem auf dem BfArM-Server)

## Quellen

- [BfArM: Terminologieserver](https://www.bfarm.de/DE/Kodiersysteme/Services/Terminologieserver/_node.html)
- [BfArM: Kommentar zum Terminologieserver (englisch)](https://www.bfarm.de/EN/Code-systems/Services/Terminologyserver/commentary/_node.html)
- [BfArM: Pressemitteilung Zentraler Terminologieserver (2024)](https://www.bfarm.de/SharedDocs/Pressemitteilungen/DE/2024/pm07-2024.html)
- [gematik INA: Positionspapier Terminologieservices](https://www.ina.gematik.de/fileadmin/Dokumente/Positionspapier_Terminologieservices.pdf)
- [BfArM: Zentraler Terminologieserver (terminologien.bfarm.de)](https://terminologien.bfarm.de/)
- [HL7.de Magazin: TerminoloGit – Open-Source-Terminologieserver aus Österreich](https://magazin.hl7.de/terminologit/)
