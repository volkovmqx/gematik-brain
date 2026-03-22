---
title: FHIR-Profil
audience: [technical]
tags: [standards, fhir, interoperabilität, kbv, gematik, profil]
aliases: [FHIR-Profile, StructureDefinition, FHIR-Profilierung, FHIR Profile]
relevance:
  sectors: [hersteller, it-dienstleister, krankenhaus, arztpraxis, ti-infrastruktur, startup]
  interests: [technik]
maturity: wachsend
---

# FHIR-Profil

Ein **FHIR-Profil** (auch: StructureDefinition) ist eine formale Einschränkung oder Erweiterung einer [[FHIR]]-Basisressource, die festlegt, wie diese Ressource in einem bestimmten nationalen oder organisatorischen Kontext zu verwenden ist.

## Erklärt für Einsteiger

[[FHIR]] stellt fertige Bausteine für Gesundheitsdaten bereit, zum Beispiel "Patient" oder "Medikament". Diese Bausteine sind international und sehr allgemein gehalten. Ein FHIR-Profil ist wie eine Schablone über so einem Baustein: Es schreibt vor, welche Felder ausgefüllt sein müssen, welche Codes zu verwenden sind und welche Felder in Deutschland gar nicht genutzt werden. So sprechen alle deutschen Softwaresysteme dieselbe Sprache.

## Überblick

Der [[FHIR]]-Standard (HL7 FHIR R4) definiert generische Ressourcen wie `Patient`, `Observation`, `MedicationRequest` oder `DiagnosticReport`. Diese Ressourcen sind so allgemein wie möglich gehalten, damit sie weltweit einsetzbar sind.

In der deutschen Telematikinfrastruktur und im deutschen Gesundheitswesen werden diese Ressourcen durch **FHIR-Profile** auf den deutschen Kontext zugeschnitten. Ein Profil legt fest:

- Welche Felder (Elemente) verpflichtend oder optional sind
- Welche Terminologien (LOINC, SNOMED CT, ICD-10-GM, ATC) für welche Felder zu verwenden sind
- Welche Extensions (Erweiterungen) zusätzliche deutsche Anforderungen abbilden
- Welche Cardinalitäten (minimale und maximale Anzahl) für Elemente gelten

FHIR-Profile sind selbst FHIR-Ressourcen des Typs `StructureDefinition`. Sie werden in maschinenlesbarer Form veröffentlicht und in Validierungstools eingebunden.

### Wer erstellt FHIR-Profile in Deutschland?

In der deutschen Gesundheits-IT erstellen verschiedene Organisationen FHIR-Profile:

- **[[gematik]]**: Profile für TI-Anwendungen (E-Rezept, ePA, TI-Messenger, DEMIS)
- **[[KBV]]**: Profile für vertragsärztliche Anwendungen (E-Rezept, Medikationsplan, [[MIO]])
- **HL7 Deutschland**: Basisprofile für den deutschen Kontext (`de.basisprofil.r4`)
- **[[IHE]]**: Internationale Profile (XDS, QEDm, mXDE) für dokumentenbasierte Interoperabilität
- **[[gematik]]-Arbeitskreise**: Profile für ISiK (Interoperabler Sicherheitsstandard im Krankenhaus)

> [!klinik-integration] Klinik-Integration: ISiK-Profile als gesetzliche Pflicht für Krankenhäuser
> **Was ISiK bedeutet:** Der Interoperable Sicherheitsstandard im Krankenhaus ([[ISiK]]) ist kein freiwilliger Standard, sondern eine gesetzliche Anforderung. Krankenhäuser, die Fördermittel aus dem Krankenhauszukunftsfonds (KHZG) empfangen haben, sind verpflichtet, ISiK-bestätigte Systeme einzusetzen.
>
> **ISiK Stufe 3 (Pflicht ab Juli 2025):** Die aktuell verpflichtende Stufe umfasst Module für Basisinformationen (Patient, Encounter, Condition), Dokumentenaustausch, Medikation, Vitalparameter, Labor und Terminplanung. KIS-Hersteller müssen für diese Module eine gematik-Bestätigung vorweisen. Fordern Sie diese Bestätigung von Ihrem KIS-Hersteller aktiv an.
>
> **Praktische Bedeutung für die IT-Abteilung:** ISiK-konforme Schnittstellen ermöglichen es, Subsysteme (RIS, PDMS, Pflegedokumentation) über eine standardisierte FHIR-REST-API anzubinden, anstatt individuelle HL7-v2-Verbindungen zu pflegen. Das reduziert mittelfristig den Wartungsaufwand, erfordert aber zunächst eine Inventarisierung aller bestehenden Schnittstellen und eine Migrations-Roadmap.

### Verzeichnisse und Veröffentlichung

Deutsche FHIR-Profile werden auf **[Simplifier.net](https://simplifier.net)** veröffentlicht. Simplifier ist eine Plattform für FHIR-Profilentwicklung und -verteilung. Wichtige Simplifier-Projekte:

- `de.basisprofil.r4`: HL7 Deutschland Basisprofile
- `kbv.ita.erp`: KBV-Profile für das E-Rezept
- `de.gematik.isik-basismodul`: gematik ISiK-Profile
- `de.abda.eRezeptAbgabedaten`: ABDA-Profile für Apothekenabrechnungsdaten
- `kbv.mio.*`: MIO-Profile der KBV

Profile sind als npm-Pakete versioniert und über die FHIR-Registry `packages.simplifier.net` abrufbar.

## Technische Details

### Aufbau einer StructureDefinition

Ein FHIR-Profil (StructureDefinition) hat diese Kernelemente:

```json
{
  "resourceType": "StructureDefinition",
  "url": "https://fhir.kbv.de/StructureDefinition/KBV_PR_ERP_Medication_PZN",
  "version": "1.1.0",
  "name": "KBV_PR_ERP_Medication_PZN",
  "status": "active",
  "kind": "resource",
  "abstract": false,
  "type": "Medication",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Medication",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Medication.code.coding",
        "path": "Medication.code.coding",
        "min": 1,
        "slicing": { ... }
      }
    ]
  }
}
```

- `url`: Eindeutiger Identifier des Profils
- `baseDefinition`: Die FHIR-Basisressource, die eingeschränkt wird
- `derivation`: `constraint` (Einschränkung) oder `specialization`
- `differential`: Nur die Änderungen gegenüber der Basisressource

### Wichtige Profilierungsmechanismen

#### Slicing

Slicing teilt ein wiederholbares Element in benannte Teilmengen auf. Beispiel: `Medication.code.coding` kann einen PZN-Slice und einen ATC-Slice enthalten, wobei der PZN-Slice verpflichtend ist.

#### Extensions

Extensions fügen nicht in der Basisressource vorhandene Felder hinzu. Beispiel: `KBV_EX_ERP_BVG` codiert den BVG-Status eines E-Rezepts (Bundesversorgungsgesetz).

#### Must Support

Elemente mit `mustSupport: true` müssen von Implementierungen verarbeitet werden. Ein System darf Elemente ohne mustSupport ignorieren, aber mustSupport-Elemente müssen angezeigt oder weitergeleitet werden.

### Validierung

FHIR-Instanzen werden gegen Profile validiert. Gängige Validierungstools:

- **FHIR Java Validator** (offizieller HL7-Validator): `java -jar validator_cli.jar -ig <profil> -profile <url> <datei>`
- **Matchbox** (REST-basierter FHIR-Validierungsserver)
- **Simplifier.net Validator** (web-basiert)

Im E-Rezept-Kontext validiert der gematik-Fachdienst eingehende FHIR-Bundles gegen die [[KBV]]-Profile, bevor sie akzeptiert werden.

> [!interesse-technik] Schnelleinstieg für Implementierer
> Für die meisten deutschen TI-Anwendungen sind diese Profile-Quellen relevant:
> - E-Rezept (Verordnung): [simplifier.net/erezept](https://simplifier.net/erezept) (KBV)
> - E-Rezept (Workflow): [simplifier.net/erezept-workflow](https://simplifier.net/erezept-workflow) (gematik)
> - ePA Medication Service: [simplifier.net/epa-medication](https://simplifier.net/epa-medication)
> - ISiK Basis: [simplifier.net/isik-basismodul](https://simplifier.net/isik-basismodul)
> - Basisprofile R4: `npm install de.basisprofil.r4@1.5.0`
> ```bash
> # FHIR-Instanz gegen KBV-E-Rezept-Profil validieren
> java -jar validator_cli.jar \
>   -ig de.basisprofil.r4 \
>   -ig kbv.ita.erp \
>   -profile https://fhir.kbv.de/StructureDefinition/KBV_PR_ERP_Bundle \
>   mein-rezept.json
> ```

> [!dev-quickstart] Dev Quickstart: Deutsches FHIR-Profil finden, laden und validieren
> Profile suchen: [simplifier.net/organization/gematik](https://simplifier.net/organization/gematik) | [simplifier.net/organization/kassenrztlichebundesvereinigungkbv](https://simplifier.net/organization/kassenrztlichebundesvereinigungkbv)
>
> ```bash
> # Profil-Paket per FHIR-npm-Registry herunterladen
> curl -L "https://packages.simplifier.net/de.basisprofil.r4/1.5.0" -o de.basisprofil.r4.tgz
> curl -L "https://packages.simplifier.net/kbv.ita.erp/1.1.0" -o kbv.ita.erp.tgz
>
> # StructureDefinition per URL abrufen (Simplifier FHIR-Endpunkt)
> curl "https://fhir.kbv.de/StructureDefinition/KBV_PR_ERP_Bundle?_format=json"
>
> # Ressource gegen Profil validieren (HL7 Java Validator)
> java -jar validator_cli.jar \
>   -ig de.basisprofil.r4 \
>   -ig kbv.ita.erp \
>   -profile https://fhir.kbv.de/StructureDefinition/KBV_PR_ERP_Bundle|1.1.0 \
>   mein-rezept.json
> ```
>
> Wichtige Paketnamen für TI-Anwendungen:
> - `de.basisprofil.r4` — HL7 Deutschland Basisprofile (Pflicht als Dependency)
> - `kbv.ita.erp` — E-Rezept Verordnung (KBV)
> - `de.gematik.erezept-workflow.r4` — E-Rezept Workflow (gematik)
> - `de.gematik.fhir.epa` — ePA FHIR-Profile (gematik)
> - `de.gematik.isik-basismodul` — ISiK Basismodul (gematik)
>
> Web-Validator (kein Java nötig): [simplifier.net/validate](https://simplifier.net/validate)
> Alle gematik-Profile: [github.com/gematik](https://github.com/gematik)

### Versionsmanagement

FHIR-Profile werden versioniert. In der TI ist die Versionsangabe im `meta.profile`-Element einer FHIR-Instanz häufig verpflichtend:

```json
{
  "resourceType": "Bundle",
  "meta": {
    "profile": [
      "https://fhir.kbv.de/StructureDefinition/KBV_PR_ERP_Bundle|1.1.0"
    ]
  }
}
```

Versionswechsel in Profilen führen zu Migrationspflichten für Hersteller. Die gematik kommuniziert Versionsübergänge über Festlegungstermine.

> [!klinik-integration] Klinik-Integration: Profilversionierung im KIS-Betrieb
> **Risiko Versionskonflikte:** Wenn KIS und Subsystem (z.B. ein PDMS oder RIS) unterschiedliche ISiK-Profilversionen einsetzen, schlagen Validierungen fehl. Das passiert häufig nach KIS-Updates, wenn Subsysteme noch nicht mitgezogen haben. Planen Sie Profilversionswechsel immer als koordinierte Freigabe für alle betroffenen Systeme.
>
> **Deployment-Empfehlung:** Betreiben Sie einen internen FHIR-Validierungsserver (z.B. Matchbox oder HAPI FHIR), um Integrationstests vor Systemupdates automatisiert durchführen zu können. Das ermöglicht es, Profilkonformität aller Subsysteme vor dem Go-live eines KIS-Updates zu prüfen, ohne den Produktivbetrieb zu gefährden.
>
> **Terminkalender ISiK:** Die gematik veröffentlicht die Bestätigungsfristen für neue ISiK-Stufen ca. 12 Monate im Voraus auf dem Fachportal ([fachportal.gematik.de](https://fachportal.gematik.de/informationen-fuer/isik)). Abonnieren Sie den gematik-Newsletter oder das INA-Portal, um Versionswechsel frühzeitig in Ihre Jahresplanung aufzunehmen.

### Zusammenhang mit Implementation Guides

Ein **Implementation Guide (IG)** bündelt mehrere FHIR-Profile, Terminologien (CodeSystems, ValueSets) und Beispiele zu einem Gesamtpaket. Beispiel: Der E-Rezept-Implementation-Guide enthält Profile für Bundle, MedicationRequest, Medication, Practitioner und weitere Ressourcen.

## Verknüpfungen

- [[FHIR]] (Basisstandard, den FHIR-Profile einschränken und erweitern)
- [[MIO]] (KBV-Medizinische Informationsobjekte: FHIR-Profile für ePA-Dokumente)
- [[KBV]] (erstellt FHIR-Profile für vertragsärztliche Anwendungen)
- [[gematik]] (erstellt FHIR-Profile für TI-Anwendungen)
- [[E-Rezept]] (nutzt KBV-FHIR-Profile für Verordnungen)
- [[ePA]] (nutzt gematik-FHIR-Profile für Aktendokumente)
- [[ISiK]] (FHIR-Profile für Krankenhausinformationssysteme)
- [[DEMIS]] (FHIR-Profile für Infektionsschutzmeldungen)
- [[HL7]] (internationale Standardisierungsorganisation hinter FHIR)
- [[IHE]] (erstellt internationale FHIR-Profile für Dokumenteninteroperabilität)
- [[LOINC]] (Terminologie für Laborwerte in FHIR-Profilen)
- [[SNOMED-CT]] (Klinische Terminologie für FHIR-Profile)
- [[Laborbefund]] (strukturierter Befund als FHIR-Profil in der ePA)

## Quellen

- [HL7 FHIR: Profiling FHIR (hl7.org)](https://www.hl7.org/fhir/profiling.html)
- [Simplifier.net: Deutsche FHIR-Profile und Implementation Guides](https://simplifier.net)
- [HL7 Deutschland: Basisprofile R4](https://ig.fhir.de/basisprofile-de/stable/index.html)
- [gematik: FHIR-Profile auf Simplifier.net](https://simplifier.net/organization/gematik)
- [KBV: FHIR-Profile für das E-Rezept](https://simplifier.net/erezept)
