---
title: Laborbefund
audience: [technical, non-technical]
tags: [prozess, labor, epa, fhir, ldt, hl7, loinc, lis]
aliases: [Laborbefund, Laborbericht, Laborergebnis, MIO Laborbefund, strukturierter Laborbefund]
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, it-dienstleister, forschung, patient]
  interests: [technik, patient, compliance]
maturity: setzling
---

# Laborbefund

Der **Laborbefund** ist das strukturierte Ergebnisdokument eines medizinischen Laboratoriums, das Messwerte, Referenzbereiche und klinische Interpretationen enthält und in der deutschen Telematikinfrastruktur als FHIR-basiertes Medizinisches Informationsobjekt (MIO) in die [[ePA]] integriert wird.

## Erklärt für Einsteiger

Wenn ein Arzt Blut abnimmt und ins Labor schickt, kommt nach ein paar Stunden ein Befund zurück: "Hämoglobin: 13,5 g/dl (Normbereich: 12-16 g/dl)". Früher war das oft ein PDF oder ein Faxausdruck. Mit dem strukturierten Laborbefund wird dieses Ergebnis so gespeichert, dass der Computer es versteht: Er weiß nicht nur den Zahlenwert, sondern auch welcher Test gemacht wurde, ob der Wert im Normbereich liegt und welche Einheit gemeint ist. Damit können alle behandelnden Ärzte die Laborwerte eines Patienten direkt aus der digitalen Patientenakte lesen und automatisch vergleichen.

## Überblick

Der Laborbefund ist einer der häufigsten Dokumententypen im Gesundheitswesen. In Deutschland werden täglich Millionen von Laboraufträgen von Ärzten an Laboratorien gesendet und die Ergebnisse zurück an die auftraggebenden Einrichtungen übermittelt.

Bisher erfolgte diese Übermittlung größtenteils über das Format **[[xDT|LDT]]** (Labor-Datentransfer) oder als [[HL7]] v2-Nachrichten. Diese Formate sind nicht in die [[ePA]] einbindbar und ermöglichen keine einrichtungsübergreifende Auswertung über Systemgrenzen hinweg.

Die [[KBV]] entwickelt über ihre Tochtergesellschaft **mio42 GmbH** ein neues [[MIO]] (Medizinisches Informationsobjekt) für den strukturierten Laborbefund. Dieses MIO basiert auf [[FHIR]] R4 und definiert, wie Laborergebnisse in der [[ePA]] gespeichert werden.

### Zeitplan und ePA 3.2

Die Einführung des MIO Laborbefund ist mit der ePA-Version 3.2 verbunden:

- **Frühjahr 2026**: Abschluss der MIO-Laborbefund-Spezifikation (INA-Arbeitskreis)
- **2026**: Pilotprojekte mit ausgewählten Laboren und Primärsystemen
- **März 2027 (geplant)**: Rollout von ePA 3.2 mit strukturiertem Laborbefund

Das Ziel: Laborwerte sollen einrichtungsübergreifend in der ePA verfügbar sein, sodass jeder behandelnde Arzt die Laborhistorie eines Patienten einsehen kann, ohne Befunde manuell anfordern zu müssen.

Das Digital-Gesetz (DigiG, in Kraft seit März 2024) verpflichtet zur Einführung des MIO Laborbefund in der ePA vor 2030.

> [!frist-warnung] Frist-Warnung: LIS- und PVS-Hersteller – Zertifizierung für ePA 3.2
> **Rechtsgrundlage:** Digital-Gesetz (DigiG) vom 22. März 2024 (BGBl. 2024 I Nr. 101) i.V.m. § 355 SGB V (Zulassung von Primärsystemen)
> **Frist:** Geplanter Produktivstart ePA 3.2 mit strukturiertem MIO Laborbefund: März 2027. Spezifikationsabschluss durch die mio42 GmbH: Frühjahr 2026.
> **Handlungsbedarf:** Hersteller von [[LIS]] müssen die finale MIO-Laborbefund-Spezifikation (Veröffentlichung Frühjahr 2026) implementieren und die Zertifizierung bei der [[gematik]] vor dem Produktivstart beantragen. Hersteller von [[PVS]] und [[KIS]] müssen die Darstellung strukturierter FHIR-Laborbefunde aus der [[ePA]] bis zum Rollout sicherstellen.
> **Bei Nichtbeachtung:** Ohne gültige ePA-3.2-Zertifizierung verlieren Primärsysteme die Zulassung zur TI. Praxen und Krankenhäuser mit nicht-zertifizierter Software können keine strukturierten Laborbefunde aus der ePA abrufen.

> [!interesse-compliance] Rechtliche Grundlage und Fristen
> Das Digital-Gesetz (DigiG) verpflichtet zur Einführung des strukturierten Laborbefunds in der ePA. Der Zeitplan ist: Abschluss der MIO-Spezifikation 2026, Produktivstart ePA 3.2 geplant März 2027. Labore und Laborinformationssysteme ([[LIS]]) müssen ab dem Produktivstart die FHIR-basierten Laborbefunde erzeugen können. [[PVS]]- und [[KIS]]-Hersteller müssen FHIR-Laborbefunde darstellen und verarbeiten können. Die genauen gesetzlichen Übergangsfristen für Labore sind noch nicht festgelegt.

> [!interesse-patient] Was ändert sich für Patienten?
> Mit dem strukturierten Laborbefund in der ePA können Patienten alle ihre Laborergebnisse gesammelt an einem Ort einsehen, über die App ihrer Krankenkasse. Kein Suchen nach alten PDF-Ausdrucken mehr. Behandelnde Ärzte sehen dieselben Werte direkt in ihrem Computersystem, wenn der Patient das erlaubt. Das kann Doppeluntersuchungen vermeiden und die Behandlungsqualität verbessern.

> [!patientenrecht] Patientenrecht: Ihre Laborergebnisse in der ePA
> Ab 2027 werden Ihre Laborergebnisse direkt in Ihrer elektronischen Patientenakte (ePA) gespeichert. Sie können sie jederzeit selbst lesen, über die App Ihrer Krankenkasse.
>
> **Was Sie selbst bestimmen können:**
> - Sie können einzelne Laborbefunde in der ePA-App für andere verbergen.
> - Sie können bestimmten Arztpraxen den Zugriff auf Ihre ePA entziehen.
> - Kein Arzt sieht Ihre Werte ohne Ihr Einverständnis.
>
> **Sie möchten keine Laborwerte in der ePA?**
> 1. Rufen Sie Ihre Krankenkasse an oder nutzen Sie die Kassen-App.
> 2. Sagen Sie, dass Sie der Speicherung von Laborwerten widersprechen möchten.
>
> **Wichtig:** Der Widerspruch ist kostenlos und hat keine Nachteile für Ihre medizinische Versorgung.

## Technische Details

### Aktueller Stand: LDT und HL7 v2

Derzeit werden Laborbefunde in Deutschland überwiegend über zwei Formate übermittelt:

**[[xDT|LDT]] (Labor-Datentransfer)**: Format für den Datenaustausch zwischen Einsenderlaboren und Arztpraxen. LDT 3.0 (aktuelle Version) enthält [[LOINC]]-Codes für Laborparameter. Das [[LIS]] erzeugt LDT-Dateien, die das [[PVS]] der Praxis importiert. Format: Textbasiert, proprietär strukturiert.

**[[HL7]] v2 (OUL^R22 / ORU^R01)**: Format für die Laborkommunikation zwischen [[KIS]] und [[LIS]] in Krankenhäusern. Der Befund wird als HL7-v2-Nachricht mit OBX-Segmenten für jeden Messwert zurückgesendet.

> [!klinik-integration] Klinik-Integration: KIS/LIS-Schnittstelle heute und morgen
> **Aktueller Betrieb:** Die KIS-LIS-Kommunikation läuft in den meisten Krankenhäusern über HL7 v2: Das KIS sendet Laboranforderungen als ORM^O01, das LIS antwortet mit ORU^R01 oder OUL^R22. Transport erfolgt über MLLP/TCP. Diese Schnittstelle ist bei SAP IS-H, Orbis (Dedalus) und iMedOne verfügbar, erfordert aber pro LIS eine individuelle Mapping-Konfiguration für Codes und Referenzbereiche.
>
> **Übergang zu FHIR (ab 2027):** Mit [[ISiK]] Stufe 3 (Bestätigungspflicht ab Juli 2025) müssen KIS-Hersteller FHIR-Schnittstellen für Laborwerte bereitstellen. Das MIO Laborbefund für die ePA (geplant ab März 2027) kommt hinzu: LIS-Hersteller müssen FHIR-Bundles erzeugen, KIS-Hersteller diese empfangen und darstellen. HL7 v2 und FHIR laufen bis mindestens 2028 parallel.
>
> **Handlungsbedarf jetzt:** Prüfen Sie, ob Ihr LIS-Hersteller die ISiK-Bestätigung für das Modul Labor vorweisen kann. Klären Sie mit dem KIS-Hersteller den Zeitplan für ePA-3.2-Unterstützung. Planen Sie für den Parallelbetrieb beider Schnittstellen ausreichend Integrationskapazität ein.

### FHIR-Datenmodell für Laborbefunde

Das MIO Laborbefund basiert auf [[FHIR]] R4 und verwendet diese Ressourcentypen:

- **`DiagnosticReport`**: Übergeordnetes Befunddokument mit Status, Datum, anforderndem Arzt
- **`Observation`**: Einzelne Messwerte (z.B. Hämoglobin, Kreatinin, Leukozyten) mit LOINC-Code, Wert, Einheit und Referenzbereich
- **`Specimen`**: Probeninformation (Probentyp, Abnahmedatum, Probennummer)
- **`ServiceRequest`**: Laborauftrag des einsendenden Arztes
- **`Organization`**: Labor und einsendende Einrichtung

Jeder Messwert wird mit einem standardisierten **[[LOINC]]-Code** versehen, der exakt definiert, welche Untersuchung mit welcher Methode an welchem Material durchgeführt wurde.

Beispiel einer FHIR-Observation für einen Hämoglobinwert:

```json
{
  "resourceType": "Observation",
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "718-7",
      "display": "Hemoglobin [Mass/volume] in Blood"
    }]
  },
  "valueQuantity": {
    "value": 13.5,
    "unit": "g/dL",
    "system": "http://unitsofmeasure.org",
    "code": "g/dL"
  },
  "referenceRange": [{
    "low": { "value": 12.0, "unit": "g/dL" },
    "high": { "value": 16.0, "unit": "g/dL" }
  }]
}
```

> [!dev-quickstart] Dev Quickstart: MIO Laborbefund FHIR-Paket einbinden
> FHIR-Paket (aktuelle Kommentierungsversion): `kbv.mio.laborbefund 1.0.0-kommentierung`
> Simplifier-Projektseite: [simplifier.net/lab1x0x0](https://simplifier.net/lab1x0x0)
>
> ```bash
> # Paket aus FHIR-npm-Registry herunterladen
> curl -L "https://packages.simplifier.net/kbv.mio.laborbefund/1.0.0-kommentierung" \
>   -o kbv.mio.laborbefund.tgz
>
> # Laborbefund-Bundle gegen MIO-Profil validieren
> java -jar validator_cli.jar \
>   -ig kbv.mio.laborbefund#1.0.0-kommentierung \
>   -profile https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Bundle \
>   laborbefund-bundle.json
> ```
>
> Kernprofile im Paket:
> - `KBV_PR_MIO_LAB_DiagnosticReport` — Befunddokument (Wrapper)
> - `KBV_PR_MIO_LAB_Observation_Laboratory_Value` — Einzelmesswert mit LOINC + UCUM
> - `KBV_PR_MIO_LAB_Specimen` — Probeninformation
>
> ISiK Modul Labor (produktiv, KIS-LIS-Integration): [simplifier.net/isik-labor](https://simplifier.net/isik-labor)
> mio42 GitHub (Validierungspakete): [github.com/mio42-GmbH](https://github.com/mio42-GmbH)

### Kommunikationskette im strukturierten Laborbefund

Die Übermittlung eines strukturierten Laborbefunds in die ePA läuft über mehrere Stationen:

1. **Labor** erzeugt FHIR-Laborbefund im LIS
2. **LIS** sendet FHIR-Bundle an den [[ePA]]-Fachdienst oder an das KIS/PVS des einsendenden Arztes
3. **Fachdienst** speichert den Befund in der ePA des Patienten
4. **PVS/KIS** des behandelnden Arztes lädt den Befund aus der ePA bei Bedarf

Alternativ kann der Arzt den Befund auch manuell in die ePA hochladen, bis die automatisierte Schnittstelle bei allen Laboren ausgerollt ist.

> [!klinik-integration] Klinik-Integration: Laborbefunde im Klinik-Workflow und ePA-Einlieferung
> **Workflow-Bezug:** Im Krankenhaus ist das KIS der zentrale Empfänger von Laborbefunden. Befunde aus dem Hauslabor kommen über HL7 v2 (ORU^R01) direkt in die Laborsection des KIS und lösen dort klinische Alerts aus (kritische Werte). Befunde aus externen Laboren (z.B. Speziallabore) kommen heute meist noch als PDF per Fax oder KIM.
>
> **Einlieferung in die ePA ab 2027:** Das KIS muss Laborbefunde als FHIR-Bundle über die ePA-Schnittstelle einliefern. Voraussetzung: ein zertifiziertes ePA-Modul im KIS (Pflicht ab April 2026 laut § 341 SGB V). Klären Sie mit Ihrem KIS-Hersteller, ob das ePA-Modul Laborbefunde als FHIR-Ressource oder nur als PDF/A einliefert und wann FHIR-strukturierte Einlieferung unterstützt wird.
>
> **Notaufnahme:** Laborbefunde aus der Notaufnahme haben besonders hohe Zeitanforderungen (Point-of-Care-Testing). Die ePA-Einlieferung darf den klinischen Workflow nicht verzögern. Konfigurieren Sie asynchrone Hintergrundprozesse für die ePA-Übertragung, nicht synchrone Calls im klinischen Pfad.

> [!praxis-tipp] Praxis-Tipp: Laborbefunde heute schon in die ePA einstellen
> In Ihrer Praxis bedeutet das jetzt: Laborbefunde, die Ihr Labor im LDT-Format liefert, können Sie bereits als PDF/A-Dokument in die ePA des Patienten hochladen. Ihr PVS generiert dieses PDF automatisch aus den LDT-Daten.
>
> Checkliste für den heutigen Workflow:
> 1. Prüfen Sie, ob Ihr PVS ein ePA-Modul (Version 3.0 oder höher) aktiviert hat.
> 2. Stellen Sie im PVS ein, dass neu eingehende Laborbefunde automatisch für die ePA vorgemerkt werden.
> 3. Legen Sie fest, wer in Ihrem Team Befunde freigibt: Arzt oder MFA nach Rücksprache?
> 4. Informieren Sie Patienten: Ihre Laborwerte sind nach dem Upload in der ePA-App sichtbar.
>
> Ab März 2027 (geplanter Start ePA 3.2) werden Labore FHIR-strukturierte Befunde direkt einliefern. Ihr PVS muss dann diese strukturierten Daten darstellen können. Fragen Sie Ihren PVS-Hersteller, ob ein Update geplant ist.

> [!interesse-technik] FHIR-Profile und Implementierungsreferenzen
> MIO Laborbefund: [mio.kbv.de](https://mio.kbv.de) (noch in Entwicklung, Abschluss Frühjahr 2026). LOINC-Terminologie für Laborparameter: [loinc.org](https://loinc.org). ISiK Modul Labor (FHIR-Profile für KIS-Laborschnittstellen): [simplifier.net/isik](https://simplifier.net/isik). Aktuell für LIS-KIS-Integration: HL7 v2 OUL^R22 / ORU^R01 (hl7.org). UCUM-Einheitensystem für Messwerteinheiten: [unitsofmeasure.org](https://unitsofmeasure.org).

> [!praxis-tipp] Praxis-Tipp: Jetzt prüfen — Konnektor und PVS für 2027 vorbereitet?
> Ältere RSA-Konnektoren sind seit 1. Januar 2026 nicht mehr zugelassen. Ohne gültigen ECC-Konnektor können Sie keine ePA-Dokumente einstellen, also auch keine Laborbefunde.
>
> Typischer Fehler: Praxen gehen davon aus, das PVS-Update komme automatisch. Es muss aktiv beim Hersteller angefordert oder eingespielt werden.
>
> Lösung: Kontaktieren Sie Ihren PVS-Hersteller und fragen Sie konkret: "Unterstützt Ihre aktuelle Version den Upload von Laborbefunden (PDF/A) in die ePA, und wann kommt die FHIR-Laborbefund-Unterstützung für ePA 3.2?"

### Abgrenzung zu anderen Laborstandards

| Standard | Einsatz | Status |
|---|---|---|
| LDT 3.0 ([[xDT]]) | Einsenderlabore → Arztpraxen (PVS) | Aktuell dominierend |
| [[HL7]] v2 OUL/ORU | KIS ↔ LIS in Krankenhäusern | Aktuell dominierend |
| [[FHIR]] R4 (MIO Laborbefund) | LIS/KIS/PVS → ePA | In Einführung (ab 2027) |
| [[ISiK]] FHIR | KIS-Laborwerte im Krankenhaus | Produktiv (ISiK-Stufe 3) |
| [[DEMIS]] FHIR | Labore → RKI (Infektionsschutz) | Produktiv |

## Verknüpfungen

- [[ePA]] (Speicherort für strukturierte Laborbefunde ab ePA 3.2)
- [[LIS]] (Labor-Informationssystem: Quelle der Laborbefunde)
- [[FHIR]] (Basisstandard für strukturierte Laborbefunde)
- [[FHIR-Profil]] (MIO Laborbefund als deutsches FHIR-Profil)
- [[MIO]] (Medizinisches Informationsobjekt der KBV; Laborbefund ist ein MIO)
- [[LOINC]] (Standardterminologie für Laborparameter)
- [[HL7]] (Kommunikationsstandard für Labornachrichten)
- [[xDT]] (LDT-Format für Laborbefunde in Arztpraxen)
- [[KIS]] (Krankenhausinformationssystem: Empfänger von Laborbefunden)
- [[PVS]] (Praxisverwaltungssystem: Empfänger von Laborbefunden)
- [[GDT]] (Gerätedatentransfer: Schnittstelle zwischen Analysegeräten und LIS)
- [[ISiK]] (FHIR-Profile für Laborwerte im Krankenhaus)
- [[DEMIS]] (Labormeldepflichten nach IfSG via FHIR)
- [[KBV]] (entwickelt das MIO Laborbefund über die mio42 GmbH)

## Quellen

- [KBV: Medizinische Informationsobjekte (MIO) - mio.kbv.de](https://mio.kbv.de)
- [gematik INA: Arbeitskreis Einführungskonzept Laborbefund](https://www.ina.gematik.de/mitwirken/arbeitskreise/einfuehrungskonzept-laborbefund)
- [LOINC: Logical Observation Identifiers Names and Codes](https://loinc.org/)
- [HL7 Deutschland: LDT 3.0 Spezifikation](https://www.hl7.de/themen/labour-data-transfer-ldt/)
