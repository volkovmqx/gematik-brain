---
title: EEHRxF
audience: [technical, non-technical]
tags: [standards, eu, interoperabilitaet, ehds, fhir, epa]
aliases: [European Electronic Health Record Exchange Format, EHRxF]
relevance:
  sectors: [ti-infrastruktur, hersteller, kasse, regulierung, krankenhaus, it-dienstleister]
  interests: [technik, compliance]
maturity: wachsend
---

# EEHRxF

Das **EEHRxF** (European Electronic Health Record Exchange Format) ist das von der [[EHDS]]-Verordnung vorgeschriebene einheitliche Format für den grenzüberschreitenden Austausch elektronischer Patientendaten in der EU. Es basiert auf [[FHIR]] und ist ab 2027 durch EU-Durchführungsrechtsakte technisch verbindlich festzulegen.

## Erklärt für Einsteiger

Stell dir vor, du hast eine Akte beim Arzt in Deutschland. Wenn du in Spanien krank wirst, kann der dortige Arzt diese Akte nicht lesen, weil die Systeme unterschiedliche "Sprachen" sprechen. Das EEHRxF ist ein gemeinsamer Standard für alle EU-Länder: Wie ein Universalstecker für Patientendaten. Alle EU-Staaten müssen bis 2029 sicherstellen, dass ihre Gesundheitssysteme diesen Standard unterstützen.

## Überblick

Das EEHRxF wurde in Artikel 15 der [[EHDS]]-Verordnung (EU 2025/327) verankert, die am 26. März 2025 in Kraft trat. Die Europäische Kommission muss bis zum **26. März 2027** Durchführungsrechtsakte mit den genauen technischen Spezifikationen des EEHRxF erlassen.

Das Format legt fest, in welchen Datenstrukturen Gesundheitsdaten zwischen EU-Mitgliedstaaten ausgetauscht werden müssen. Es ist damit die technische Grundlage für den grenzüberschreitenden Austausch über [[MyHealthAtEU|MyHealth@EU]] und für die Patientenrechte nach EHDS (Zugriff, Einsicht, Weitergabe, Korrektur und Einfügen von Daten in die eigene elektronische Akte).

> [!interesse-compliance]
> **Pflichttermine für Mitgliedstaaten:**
> - **26. März 2027**: EU-Kommission erlässt technische Spezifikationen (Implementing Acts)
> - **März 2029**: Mitgliedstaaten müssen Phase-1-Datenkategorien (Patientenzusammenfassung, E-Rezept, Dispensierung) im EEHRxF-Format unterstützen
> - **März 2031**: Phase-2-Datenkategorien (Laborbefunde, Entlassberichte, Bildgebung) müssen folgen
>
> Für Deutschland: Die [[ePA]] muss ab 2029 Daten im EEHRxF-Format exportieren können. KIS- und PVS-Hersteller sollten die Spezifikationsentwicklung ab 2027 verfolgen.

### Datenkategorien (phasenweise)

**Phase 1 (bis März 2029):**
- Patientenzusammenfassungen ([[Patient-Summary]])
- Elektronische Rezepte und Dispensierungsdaten ([[E-Rezept]])

**Phase 2 (bis März 2031):**
- Laborergebnisse und Befunde
- Krankenhaus-Entlassberichte
- Medizinische Bildgebung und Befunde

> [!klinik-integration] Klinik-Integration: EEHRxF-Vorbereitung im KIS
> **Entlassbericht als Phase-2-Pflicht (bis März 2031):** Der Krankenhaus-Entlassbericht ist eine der Phase-2-Datenkategorien. KIS-Systeme müssen Entlassbriefe ab 2031 im HL7 Europe Hospital Discharge Report FHIR IG-Format exportieren können. HL7 Europe veröffentlichte die relevanten Implementation Guides im November 2025 als Grundlage für die EU-Durchführungsrechtsakte von 2027.
>
> **KIS-Handlungsbedarf jetzt:** Die finalen technischen Spezifikationen werden bis März 2027 festgelegt. KIS-Hersteller müssen ihre Entlassbriefmodule auf FHIR R4 + HL7 Europe IGs umstellen. IT-Leitungen sollten im laufenden KIS-Wartungsvertrag prüfen, ob EEHRxF-Konformität als Updatepflicht vereinbart ist, und dies für Verlängerungsverhandlungen 2026/2027 vormerken.
>
> **Terminologie-Anforderung:** Entlassberichte und Laborbefunde im EEHRxF-Format erfordern SNOMED-CT- und LOINC-Kodierung. Krankenhäuser, die bislang nur ICD-10-GM und OPS kodieren, benötigen eine Terminologie-Strategie. Die SNOMED-CT-Lizenz wird in Deutschland über die gematik bereitgestellt.

### Bezug zur deutschen ePA

Die deutsche [[ePA]] muss ab 2029 Daten im EEHRxF-Format für den grenzüberschreitenden Austausch bereitstellen. Die technischen Details, wie genau die ePA-Daten in das EEHRxF-Format überführt werden, werden in den gematik-Spezifikationen festgelegt, die auf den EU-Durchführungsrechtsakten von 2027 aufbauen.

> [!frist-warnung] Frist-Warnung: EEHRxF-Pflicht für ePA und NCPeH ab März 2029
> **Rechtsgrundlage:** Art. 15 Abs. 1 i.V.m. Art. 2 Abs. 2 EHDS-Verordnung (EU 2025/327); die Verordnung gilt für Mitgliedstaaten ab **26. März 2027**
> **Frist Phase 1, 26. März 2029:** Mitgliedstaaten müssen den grenzüberschreitenden Austausch von Patientenzusammenfassungen und Rezept-/Dispensierdaten im EEHRxF-Format über [[MyHealthAtEU|MyHealth@EU]] gewährleisten. Für Deutschland: Die [[ePA]] und der [[NCPeH]] müssen diese Datenkategorien EEHRxF-konform bereitstellen.
> **Frist Phase 2, 26. März 2031:** Laborbefunde, Krankenhaus-Entlassberichte und medizinische Bildgebungsdaten müssen folgen.
> **Handlungsbedarf für KIS- und PVS-Hersteller:** Die technischen Durchführungsrechtsakte werden bis **26. März 2027** von der EU-Kommission veröffentlicht (Art. 15 Abs. 2 EHDS). Ab diesem Datum beginnt die Implementierungspflicht mit nur zwei Jahren Vorlaufzeit bis zur Phase-1-Frist. Systemhersteller müssen die Spezifikationsentwicklung über [ehr-exchange-format.eu](https://ehr-exchange-format.eu/) aktiv verfolgen und Produktplanung entsprechend ausrichten.

## Technische Details

### Technische Grundlagen

Das EEHRxF basiert auf einem Stapel internationaler Standards:

| Standard | Funktion |
|---------|---------|
| **[[FHIR]] R4** | Primäres Datenaustauschformat |
| **HL7 International Patient Summary (IPS)** | Datenstruktur für Patientenzusammenfassungen |
| **HL7 Europe FHIR IGs** | Europäische Profile für Rezepte, Laborbefunde, Entlassberichte |
| **IHE-Profile** | Integration und Dokumentenaustausch |
| **[[SNOMED-CT]]** | Terminologie für klinische Konzepte |
| **LOINC** | Terminologie für Laborwerte |
| **[[eIDAS]]** | Identifizierung und Authentifizierung über Ländergrenzen |

> [!interesse-technik]
> HL7 Europe FHIR IGs für EHDS/EEHRxF: [build.fhir.org/ig/HL7-Europe](https://build.fhir.org/ig/HL7-Europe/). EEHRxF Standards and Policy Hub: [ehr-exchange-format.eu](https://ehr-exchange-format.eu/). Technische Implementierungsprojekte: xShare, Xt-EHR, XpanDH (EU-gefördert). FHIR-Basisversion: R4 (4.0.1); Migration zu R5 ist für EEHRxF noch nicht entschieden. Die Spezifikationen sind über das Joint Action HealthData@EU abrufbar.

> [!dev-quickstart] Dev Quickstart: EEHRxF FHIR IGs implementieren
> **Aktuelle HL7 Europe FHIR IGs für EHDS/EEHRxF (FHIR R4):**
> - Patient Summary: [build.fhir.org/ig/hl7-eu/eps/](https://build.fhir.org/ig/hl7-eu/eps/)
> - Laboratory Report: [hl7.eu/fhir/laboratory/](https://hl7.eu/fhir/laboratory/)
> - Medication/Prescription/Dispense: [hl7europe.org/medication-ig](https://hl7europe.org/the-hl7-europe-medication-prescription-and-dispense-fhir-ig-and-its-alignment-with-xt-ehr/)
> - EHDS Logical Models (Xt-EHR): [build.fhir.org/ig/Xt-EHR/xt-ehr-common/](https://build.fhir.org/ig/Xt-EHR/xt-ehr-common/)
>
> **Patient Summary FHIR-Query (IPS-Profil):**
> ```bash
> GET [base]/Patient/[id]/$summary
> Accept: application/fhir+json
> # Returns: Bundle (Composition + referenced resources)
> # Profil: http://hl7.eu/fhir/ig/eps/StructureDefinition/Bundle-eu-ps
> ```
>
> **Lab Report FHIR-Query:**
> ```bash
> GET [base]/DiagnosticReport?patient=[id]&category=LAB
> Accept: application/fhir+json
> # Profil: http://hl7.eu/fhir/laboratory/StructureDefinition/DiagnosticReport-eu-lab
> ```
>
> - Referenzimplementierungen und Testdaten: [EEHRxF Standards Hub](https://ehr-exchange-format.eu/)
> - Validator-Package für HL7 Europe IGs: `hl7.eu.fhir.base` auf [packages.simplifier.net](https://packages.simplifier.net/)

### Governance und Entwicklung

Die Entwicklung des EEHRxF erfolgt in einer Europäischen Zusammenarbeit:

- **EU-Kommission**: Erlass der Durchführungsrechtsakte (bis März 2027)
- **eHealth Network**: Beratendes Gremium der EU-Gesundheitsministerien
- **HL7 Europe / IHE Europe**: Technische Standardisierungsorganisationen
- **Mitgliedstaaten**: Implementierung in nationale Infrastrukturen
- **Deutschland/[[gematik]]**: Integration in [[ePA]] und [[NCPeH]]

> [!frist-warnung] Frist-Warnung: EU-Durchführungsrechtsakte bis 26. März 2027, Planungsfenster für Hersteller
> **Rechtsgrundlage:** Art. 15 Abs. 2 EHDS-Verordnung (EU 2025/327)
> **Frist:** Die Europäische Kommission muss bis **26. März 2027** Durchführungsrechtsakte erlassen, die die technischen Spezifikationen des EEHRxF verbindlich festlegen. Erst danach sind die exakten FHIR-Profile, Terminologien und Schnittstellen rechtsverbindlich definiert.
> **Handlungsbedarf:** Hersteller von KIS, PVS und ePA-Komponenten sollten die Entwürfe der Durchführungsrechtsakte und die vorbereitenden HL7 Europe FHIR Implementation Guides ([build.fhir.org/ig/HL7-Europe](https://build.fhir.org/ig/HL7-Europe/)) bereits jetzt in die technische Planung einbeziehen. Nach Veröffentlichung der Implementing Acts verbleibt bis zur Phase-1-Pflicht (März 2029) nur ein Implementierungsfenster von zwei Jahren.
> **Konsequenz:** Hersteller, die erst nach Veröffentlichung der Implementing Acts mit der Implementierung beginnen, riskieren, die Phase-1-Frist 2029 nicht einhalten zu können.

### Verbindung zu MyHealth@EU und NCPeH

MyHealth@EU ist die europäische Infrastruktur für den grenzüberschreitenden Datenaustausch. Das EEHRxF ist das Format, in dem Daten über MyHealth@EU ausgetauscht werden. Deutschland ist über den [[NCPeH]] an MyHealth@EU angebunden. Der NCPeH wird die EEHRxF-Anforderungen ab 2027 sukzessive implementieren müssen.

## Verknüpfungen

- [[EHDS]] (Rechtsgrundlage, Art. 15 definiert EEHRxF)
- [[MyHealthAtEU|MyHealth@EU]] (Infrastruktur für den grenzüberschreitenden Datenaustausch)
- [[NCPeH]] (Deutsches Gateway zu MyHealth@EU)
- [[ePA]] (Deutsche elektronische Patientenakte, muss EEHRxF ab 2029 unterstützen)
- [[FHIR]] (primäres technisches Format)
- [[Patient-Summary]] (erste Datenkategorie in Phase 1)
- [[E-Rezept]] (weitere Phase-1-Datenkategorie)
- [[SNOMED-CT]] (Terminologiesystem für klinische Konzepte)
- [[gematik]] (Implementierung in der deutschen TI)

## Quellen

- [EHDS-Verordnung EU 2025/327 (EUR-Lex)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32025R0327)
- [EEHRxF Standards and Policy Hub](https://ehr-exchange-format.eu/)
- [Frontiers: Accelerating EEHRxF implementation across Europe (2025)](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1648170/full)
- [HL7 News: New HL7 Europe FHIR Implementation Guides for EHDS](https://hl7news.hl7.org/2026/01/02/new-hl7-europe-fhir-implementation-guides-to-support-the-european-health-data-space/)
