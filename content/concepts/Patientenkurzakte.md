---
title: Patientenkurzakte
audience: [technical, non-technical]
tags: [konzepte, fhir, epa, interoperabilität, mio, europa, kbv]
aliases: [PKA, Patient Summary Deutschland, Patientenzusammenfassung, Kurzakte]
relevance:
  sectors: [arztpraxis, krankenhaus, kasse, hersteller, it-dienstleister, patient, ti-infrastruktur]
  interests: [technik, compliance, patient]
maturity: wachsend
---

# Patientenkurzakte

Die **Patientenkurzakte** ist das deutsche [[MIO]]-Profil für eine strukturierte Zusammenfassung der wichtigsten Gesundheitsdaten eines Versicherten. Sie bildet die nationale Datengrundlage für den grenzüberschreitenden Austausch über [[MyHealthAtEU|MyHealth@EU]] im Sinne des internationalen [[Patient-Summary|Patient Summary]]-Standards.

## Erklärt für Einsteiger

Stell dir vor, du wirst im Urlaub in einem anderen EU-Land krank. Der Arzt dort braucht schnell die wichtigsten Informationen über dich: Welche Medikamente nimmst du? Welche Allergien hast du? Welche chronischen Erkrankungen sind relevant? Die Patientenkurzakte ist die deutsche Antwort auf diese Frage: eine kompakte, strukturierte Zusammenfassung deiner wichtigsten Gesundheitsdaten, die in deiner [[ePA]] gespeichert ist und bei Bedarf an einen Arzt im Ausland weitergegeben werden kann.

## Überblick

Die Patientenkurzakte ist ein [[MIO]] (Medizinisches Informationsobjekt), das von der **[[KBV]] und der mio42 GmbH** als [[FHIR]]-R4-Spezifikation entwickelt wird. Sie erfüllt für Deutschland die Anforderungen des europäischen [[Patient-Summary|International Patient Summary (IPS)]]-Standards und setzt diesen auf den deutschen Versorgungskontext um.

Die Patientenkurzakte enthält keine vollständige Krankengeschichte. Sie umfasst die für die Akutversorgung und die sektorenübergreifende Koordination kritischen Informationen:

- **Aktive Erkrankungen und Diagnosen**: kodiert nach [[ICD-10-GM]] und [[SNOMED CT]]
- **Dauermedikation**: Arzneimittel mit Wirkstoff, Dosierung und Indikation
- **Allergien und Unverträglichkeiten**: gegen Medikamente, Nahrungsmittel und andere Substanzen
- **Impfstatus**: relevante Impfungen aus dem [[eImpfpass]]
- **Relevante Eingriffe und Operationen**: kodiert nach [[OPS]]
- **Implantate und medizinische Geräte**

### Verhältnis zum Patient Summary

Der [[Patient-Summary|Patient Summary]] ist der internationale Standard (HL7 IPS, ISO 27269:2021). Die Patientenkurzakte ist das deutsche Implementierungsartefakt:

| Aspekt | Patientenkurzakte (deutsch) | Patient Summary (EU/international) |
|---|---|---|
| Herausgeber | KBV / mio42 | HL7, ISO |
| Rechtsrahmen | SGB V, ePA-Gesetz | [[EHDS]]-Verordnung |
| Format | FHIR R4 MIO | HL7 IPS (FHIR R4) |
| Speicherort | [[ePA]] des Versicherten | Übermittlung via [[NCPeH]] |
| Nutzung | National + grenzüberschreitend | Grenzüberschreitend |

Die [[DVKA]] ist für die Übermittlung der deutschen Patientenkurzakte an das europäische Netzwerk über den [[NCPeH]] (National Contact Point for eHealth) verantwortlich. Der NCPeH konvertiert die national gespeicherte Patientenkurzakte in das IPS-Format und übermittelt sie an den anfragenden nationalen Kontaktpunkt im Ausland.

### Rollout-Zeitplan

- **MIO-Entwicklung**: Die Patientenkurzakte-Spezifikation (Version 1.0.0) befindet sich in der Entwicklungsphase (Stand: 2025/2026). Fertigstellung ist für den Zeitraum der ePA 3.x-Rolloutphase geplant.
- **Bis 2029**: Deutschland plant die vollständige Nutzbarkeit des Patient Summary EU-weit, entsprechend den Anforderungen der [[EHDS]]-Verordnung.
- **2031**: EU-weite Pflicht für alle Mitgliedstaaten zur Umsetzung des Patient Summary.

> [!frist-warnung] Frist-Warnung: EHDS-Pflicht Patient Summary bis 26. März 2029
> **Rechtsgrundlage:** Verordnung (EU) 2025/327 des Europäischen Parlaments und des Rates (EHDS-Verordnung), in Kraft seit 26. März 2025; Anwendung des Primärnutzungsrahmens ab 26. März 2027; Kapitel II EHDS-Verordnung (Patientenzusammenfassungen und elektronische Rezepte)
> **Frist:** Ab 26. März 2029 müssen Patientenzusammenfassungen (Patient Summary) und elektronische Verordnungen in allen EU-Mitgliedstaaten grenzüberschreitend austauschbar sein. Deutschland ist als Mitgliedstaat verpflichtet, die nationale Infrastruktur (NCPeH, Patientenkurzakte in der ePA) bis zu diesem Datum vollständig betriebsbereit zu haben.
> **Handlungsbedarf:** Für Hersteller von ePA-Systemen und KIS/PVS-Software: Die MIO-Spezifikation der Patientenkurzakte (Version 1.0.0, mio42 GmbH) muss rechtzeitig implementiert und zertifiziert sein. Für Krankenkassen als ePA-Betreiber: Sicherstellen, dass die ePA ab 2029 die Patientenkurzakte als abrufbares Dokument enthält und der [[NCPeH]] darauf zugreifen kann.
> **Bei Nichtbeachtung:** Verstöße gegen die EHDS-Verordnung können Vertragsverletzungsverfahren der EU-Kommission gegen die Bundesrepublik Deutschland auslösen. Mitgliedstaaten tragen die staatliche Verantwortung für die fristgerechte Umsetzung.

> [!interesse-compliance] Pflichten und Fristen für Leistungserbringer
> Die Patientenkurzakte ist kein eigenständiger rechtlicher Pflichtprozess für einzelne Praxen oder Krankenhäuser. Die Bereitstellungspflicht liegt bei der [[ePA]]-Infrastruktur: Wenn Leistungserbringer Diagnosedaten, Medikation und Allergien in die [[ePA]] eintragen (was ab ePA 3.x zur Standardnutzung gehört), entsteht die Patientenkurzakte automatisch aus diesen Daten. Für niedergelassene Ärzte: Vollständige und korrekte Kodierung von Diagnosen mit [[ICD-10-GM]] und Medikation ist Grundlage für eine nutzbare Kurzakte. Die [[EHDS]]-Verordnung verpflichtet Deutschland bis 2029 zur EU-weiten Bereitstellung.

> [!interesse-patient] Ihre Patientenkurzakte und Ihre Rechte
> Ihre Patientenkurzakte ist Teil Ihrer [[ePA]]. Sie enthält nur eine Zusammenfassung der wichtigsten Informationen, nicht Ihre vollständige Krankengeschichte. Sie können in der ePA-App sehen, was in Ihrer Kurzakte steht. Wenn ein Arzt im EU-Ausland Ihre Daten abrufen möchte, müssen Sie ausdrücklich einwilligen. Sie können der Weitergabe Ihrer Daten ins Ausland in der ePA widersprechen.

> [!praxis-tipp] Praxis-Tipp: Datenqualität für die Patientenkurzakte sichern
> Die Patientenkurzakte entsteht automatisch aus den Daten, die Ihre Praxis in die [[ePA]] einträgt. Sie müssen keinen neuen Arbeitsschritt einführen. Aber die Qualität der Kurzakte hängt direkt von der Qualität Ihrer Einträge ab.
>
> Was jetzt in Ihrer Praxis zählt:
> - **Diagnosen vollständig kodieren**: Tragen Sie aktive Dauerdiagnosen mit vollständigem [[ICD-10-GM]]-Kode ein (inkl. Zusatzkennzeichen G/V/Z/A). Fehlende Kodes führen zu einer leeren Diagnoseliste in der Kurzakte.
> - **Dauermedikation aktuell halten**: Ab Frühjahr 2026 können Praxen die elektronische Medikationsliste (eML) in der ePA direkt befüllen. Prüfen Sie, ob Ihr PVS dafür bereit ist.
> - **Allergien und Unverträglichkeiten eintragen**: Das ist das am häufigsten fehlende Feld. Fragen Sie aktiv beim nächsten Patientenkontakt nach und tragen Sie Allergien strukturiert ein, nicht nur als Freitext.
>
> Zeitaufwand für die Erstbefüllung bei Bestandspatienten: ca. 2-3 Minuten je Patient, wenn Sie strukturierte Eingabefelder in Ihrem PVS nutzen.

> [!patientenrecht] Patientenrecht: Widerspruch gegen Ihre Kurzakte
> Ihre Patientenkurzakte wird automatisch aus Ihrer [[ePA]] erstellt. Sie müssen nichts tun, um sie zu bekommen. Aber Sie können widersprechen.
>
> **Was kann ich tun?**
>
> 1. Öffnen Sie die App Ihrer Krankenkasse (oder melden Sie sich telefonisch).
> 2. Wählen Sie die Einstellungen Ihrer ePA.
> 3. Sie können der gesamten ePA widersprechen. Dann wird auch die Kurzakte gelöscht.
> 4. Sie können auch nur der Weitergabe Ihrer Daten ins EU-Ausland widersprechen. Die Kurzakte bleibt dann in Deutschland gespeichert, wird aber nicht an ausländische Ärzte weitergegeben.
>
> **Wichtig:** Die Weitergabe ins Ausland ist noch nicht aktiv. Sie ist für 2029 geplant. Sie können aber schon jetzt widersprechen.

## Technische Details

### FHIR-Architektur

Die Patientenkurzakte ist als FHIR Bundle vom Typ `document` spezifiziert, analog zum IPS-Format. Das Bundle enthält:

- **Composition** (Metadaten): Patient, Autor (ausstellende Einrichtung), Datum, Sprache
- **Pflichtabschnitte**:
  - `AllergyIntolerance` (Allergien und Unverträglichkeiten)
  - `MedicationStatement` oder `MedicationRequest` (Medikation)
  - `Condition` (aktive Diagnosen)
- **Empfohlene Abschnitte**:
  - `Immunization` (Impfungen, Verknüpfung zum [[eImpfpass]]-MIO)
  - `Procedure` (Eingriffe nach [[OPS]])
  - `Device` (Implantate und Hilfsmittel)

Die Profile bauen auf deutschen Basisprofilen (HL7 Deutschland, KBV-Basisprofile) auf und sind mit dem internationalen IPS-Profil kompatibel, so dass eine Konversion durch den [[NCPeH]] möglich ist.

> [!klinik-integration] Klinik-Integration: Beitrag des Krankenhauses zur Patientenkurzakte
> **KIS-Kontext:** Das Krankenhaus ist ein zentraler Datenproduzent für die Patientenkurzakte. Stationäre Diagnosen (ICD-10-GM, SNOMED CT), durchgeführte Eingriffe (OPS), Medikation bei Entlassung und neu festgestellte Allergien fließen bei Einstellung in die [[ePA]] automatisch in die Kurzakte. Die Qualität der Kurzakte hängt direkt von der Kodierqualität im KIS ab.
>
> **Workflow-Bezug:** Bei Entlassung: KIS stellt Diagnosen, Medikation und Allergien strukturiert in die ePA ein. Diese Einzelressourcen werden vom ePA-System maschinell zur Patientenkurzakte aggregiert. Implantate und medizinische Geräte (Device-Ressource) aus OP-Dokumentation tragen zum empfohlenen Abschnitt bei.
>
> **HL7/FHIR-Schnittstellen:** Der IPS-Export aus dem KIS nutzt FHIR R4-Ressourcen: `Condition` (Diagnosen), `MedicationStatement` (Dauermedikation), `AllergyIntolerance`, `Procedure` (OPS-kodiert), `Device` (Implantate). Terminologieanforderung: ICD-10-GM-Kodes müssen auf SNOMED CT gemappt werden. Prüfen Sie mit Ihrem KIS-Hersteller, ob ein SNOMED-CT-Mapping-Modul verfügbar ist.
>
> **Vorbereitung:** Die MIO-Spezifikation Patientenkurzakte 1.0.0 ist noch in Entwicklung (Stand März 2026). Überwachen Sie die Veröffentlichung auf [mio.kbv.de](https://mio.kbv.de) und stimmen Sie mit dem KIS-Hersteller ab, wann ein konformes Export-Modul verfügbar sein wird.

> [!dev-quickstart] Dev Quickstart: IPS-kompatibles FHIR Bundle (Patientenkurzakte)
> Bundle-Typ: `document`. Erster Entry muss eine `Composition` sein. Pflicht-Sections (Composition.section):
> ```json
> {
>   "resourceType": "Bundle",
>   "meta": { "profile": ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PKA_Bundle"] },
>   "type": "document",
>   "entry": [
>     { "resource": {
>       "resourceType": "Composition",
>       "meta": { "profile": ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PKA_Composition"] },
>       "status": "final",
>       "type": { "coding": [{ "system": "http://loinc.org", "code": "60591-5" }] },
>       "subject": { "reference": "Patient/example" },
>       "date": "2026-03-22",
>       "section": [
>         { "title": "Allergien", "entry": [{ "reference": "AllergyIntolerance/1" }] },
>         { "title": "Medikation", "entry": [{ "reference": "MedicationStatement/1" }] },
>         { "title": "Diagnosen",  "entry": [{ "reference": "Condition/1" }] }
>       ]
>     }}
>   ]
> }
> ```
> - Profil-Prefix: `KBV_PR_MIO_PKA_` (Composition, Condition, MedicationStatement, AllergyIntolerance)
> - Simplifier PKA: [simplifier.net/pka](https://simplifier.net/pka)
> - MIO-Portal Spec: [mio.kbv.de](https://mio.kbv.de)
> - IPS-Referenz: [hl7.org/fhir/uv/ips/](https://hl7.org/fhir/uv/ips/)
> - Validierungspaket mio42: [github.com/mio42-GmbH](https://github.com/mio42-GmbH)

### Terminologien

| Inhalt | Codesystem |
|---|---|
| Diagnosen | [[ICD-10-GM]], [[SNOMED CT]] |
| Arzneimittel | PZN, [[ATC-Code]], SNOMED CT |
| Allergene | SNOMED CT, ASK (Allergiestoff-Katalog) |
| Impfstoffe | SNOMED CT, ATC |
| Prozeduren | [[OPS]], SNOMED CT |

### Einbindung in die ePA und NCPeH-Austausch

Die Patientenkurzakte wird aus den in der [[ePA]] gespeicherten Einzelressourcen (Medikationen, Diagnosen, Allergien) maschinell zusammengestellt oder als eigenständiges Dokument eingestellt. Der [[NCPeH]] kann diese Daten auf Anfrage eines ausländischen Kontaktpunkts:

1. Aus der [[ePA]] des Versicherten abrufen (nach Identifizierung über [[Gesundheits-ID]])
2. In das IPS-Format konvertieren
3. Verschlüsselt an den nationalen Kontaktpunkt des anfragenden EU-Landes übermitteln

> [!patientenrecht] Patientenrecht: Wer sieht Ihre Daten im Ausland?
> Wenn Sie im EU-Ausland behandelt werden, kann der dortige Arzt Ihre Kurzakte anfragen. Das passiert aber nicht automatisch.
>
> **So funktioniert der Schutz:**
> - Ihre Identität wird über Ihre [[Gesundheits-ID]] geprüft. Niemand kann anonym auf Ihre Daten zugreifen.
> - Nur die Daten in der Kurzakte werden weitergegeben. Ihre vollständige Krankengeschichte bleibt gesperrt.
> - Ihre Krankenkasse hat keinen Zugriff auf den medizinischen Inhalt Ihrer Akte.
>
> **Sie möchten keine Weitergabe ins Ausland?** Widersprechen Sie in der App Ihrer Krankenkasse. Die Option heißt je nach Kasse "Grenzüberschreitender Datenaustausch" oder "Europäische Gesundheitsdaten".

### Pilotprojekte

Die AOK hat im Jahr 2025/2026 erste Pilotprojektergebnisse für den grenzüberschreitenden Patientenzusammenfassungsaustausch beim [[BMG]] eingereicht. Der Patient-Summary-Austausch läuft als separater Anwendungsfall neben dem E-Rezept-Austausch (Wave 10, H1/2027) und befindet sich in der konzeptionellen Phase (laut [[NCPeH]]-Informationen von gematik, März 2026).

> [!interesse-technik] FHIR-Ressourcen und Spezifikationen
> MIO Patientenkurzakte: Version 1.0.0 in Entwicklung bei mio42 GmbH. Basiert auf FHIR R4 (HL7 IPS-kompatibel). Wichtige Profile: `KBV_PR_MIO_PKA_Composition`, `KBV_PR_MIO_PKA_Condition`, `KBV_PR_MIO_PKA_MedicationStatement`, `KBV_PR_MIO_PKA_AllergyIntolerance`. MIO-Portal: [mio.kbv.de](https://mio.kbv.de). IPS-Referenz: [hl7.org/fhir/uv/ips/](https://hl7.org/fhir/uv/ips/). NCPeH-Austauschformat: HL7 IPS (ISO 27269:2021). Terminologieserver: [[Terminologieserver]] des [[BfArM]] für [[ICD-10-GM]] und [[SNOMED CT]].

## Verknüpfungen

- [[Patient-Summary]] (internationaler IPS-Standard, den die Patientenkurzakte national umsetzt)
- [[MIO]] (Medizinische Informationsobjekte: technisches Rahmenwerk für die Spezifikation)
- [[ePA]] (Speicherort der Patientenkurzakte)
- [[NCPeH]] (übermittelt die Patientenkurzakte grenzüberschreitend)
- [[MyHealthAtEU]] (europäische Infrastruktur für den Austausch)
- [[EHDS]] (regulatorischer Rahmen auf EU-Ebene)
- [[KBV]] (Herausgeber der MIO-Spezifikation)
- [[DVKA]] (betreibt den NCPeH)
- [[FHIR]] (technisches Basis-Format)
- [[SNOMED CT]] (Terminologie für Diagnosen und klinische Konzepte)
- [[ICD-10-GM]] (deutsche Diagnosekodierung)
- [[eImpfpass]] (Impfdaten fließen in die Patientenkurzakte ein)
- [[Gesundheits-ID]] (Identifikation beim grenzüberschreitenden Abruf)

## Quellen

- [KBV MIO-Portal: Patientenkurzakte](https://mio.kbv.de/site/mio)
- [HL7 FHIR: International Patient Summary Implementation Guide](https://hl7.org/fhir/uv/ips/)
- [gematik: NCPeH und grenzüberschreitender Datenaustausch](https://www.gematik.de/anwendungen/ncpeh)
- [EHDS-Verordnung (EU 2025/327): European Health Data Space](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-health-records/patient-summary_en)
- [ISO 27269:2021: Health Informatics International Patient Summary](https://www.iso.org/standard/79491.html)
