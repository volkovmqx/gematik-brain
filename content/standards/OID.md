---
title: OID
audience: [technical]
tags: [standards, identifikator, pki, fhir, hl7, zertifikat]
aliases: [Object Identifier, Objektkennzeichen, OID-Baum]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, arztpraxis]
  interests: [technik]
maturity: setzling
---

# OID

Ein **OID (Object Identifier)** ist ein hierarchisch aufgebauter, weltweit eindeutiger Bezeichner aus einer Folge von Ganzzahlen, der in TI-Zertifikaten, [[FHIR]]-Profilen, [[HL7]]-Nachrichten und der [[Telematik-ID]] verwendet wird, um Konzepte, Systeme oder Objekte eindeutig zu identifizieren.

## Erklärt für Einsteiger

Stell dir vor, jeder Begriff in der Medizin, jede Organisation und jede Softwarekomponente bräuchte eine eindeutige Nummer, die auf der ganzen Welt einmalig ist. OIDs lösen genau dieses Problem. Sie sehen aus wie IP-Adressen mit vielen Punkten, zum Beispiel `1.2.276.0.76.4.3`. Jede Stelle von links nach rechts macht die Bedeutung spezifischer. Die erste Ziffer sagt, ob es ein internationaler, nationaler oder privater Standard ist. Die letzten Ziffern identifizieren das konkrete Objekt.

## Überblick

OIDs stammen aus dem Standard **ITU-T X.660** (und ASN.1) und werden von einer Baumhierarchie verwaltet. Internationale Organisationen wie ISO, ITU, IANA und nationale Vergabestellen pflegen Teilbäume. Für Deutschland ist die Bundesnetzagentur die nationale Registrierungsstelle.

In der deutschen Telematikinfrastruktur und im Gesundheitswesen sind OIDs allgegenwärtig:

- **TI-Zertifikate**: Zertifikatsfelder wie "Profession OID" (Berufsgruppe) und "Role OID" (Rolle) enthalten OIDs, um Heilberufler und Institutionen zu klassifizieren.
- **HL7 und FHIR**: Codesysteme (ICD-10, LOINC, SNOMED CT) werden über OIDs referenziert. FHIR verwendet OIDs als URIs im Format `urn:oid:1.2.3`.
- **Telematik-ID**: Die [[Telematik-ID]] basiert intern auf einem OID-Namensraum.
- **DICOM**: Bildgebungsdaten und SOPs im [[DICOM]]-Standard sind durch OIDs eindeutig benannt.
- **DiGA und DiPA**: Anwendungen erhalten OIDs als eindeutige Identifikatoren im BfArM-Verzeichnis.

### Wichtige OID-Zweige für die TI

**Zweig 1.2.276 (Deutschland, DIN/ISO)**

Der OID-Zweig `1.2.276` ist Deutschland zugeordnet. Die wichtigsten Unterzweige für die TI:

| OID-Präfix | Bereich |
|---|---|
| `1.2.276.0.76.4` | Heilberufsausweise und Institutionskarten (gematik) |
| `1.2.276.0.76.4.3` | Heilberufsausweis (HBA) |
| `1.2.276.0.76.4.30` | SMC-B (Institutionskarte) |
| `1.2.276.0.76.4.70` | Betriebsstättennummer (BSNR) |
| `1.2.276.0.76.4.80` | Telematik-ID |

**Zweig 2.16.840.1.113883 (HL7 International)**

HL7 verwaltet einen eigenen Zweig für medizinische Codesysteme:

| OID | Codesystem |
|---|---|
| `2.16.840.1.113883.6.3` | ICD-10 (WHO) |
| `2.16.840.1.113883.6.1` | LOINC |
| `2.16.840.1.113883.6.96` | SNOMED CT |
| `2.16.840.1.113883.6.73` | ATC-Code (WHO) |

## Technische Details

### OID-Syntax

Eine OID ist eine Folge von nicht-negativen Ganzzahlen, getrennt durch Punkte:

```
1.2.276.0.76.4.3
```

Jede Stelle entspricht einem Knoten im OID-Baum. Die Bedeutung einer OID ergibt sich aus dem Kontext ihres Zweigs.

In der Praxis werden OIDs in zwei Formen verwendet:

- **ASN.1-Darstellung**: Binäre Kodierung in Zertifikaten und Protokollen (z.B. [[X.509]])
- **Dotted Decimal Notation**: Menschenlesbare Form `1.2.276.0.76.4.3`
- **FHIR-URI**: `urn:oid:1.2.276.0.76.4.3` (präfixiert für FHIR-Ressourcen)

### OIDs in TI-Zertifikaten

[[X.509]]-Zertifikate verwenden OIDs in mehreren Feldern:

- **Subject Alternative Name (SAN)**: Enthält die Telematik-ID (OID-basiert)
- **Extended Key Usage**: OIDs definieren den Verwendungszweck (z.B. `1.3.6.1.5.5.7.3.2` für Client-Authentisierung)
- **Profession OID**: In [[HBA]]-Zertifikaten enthält dieses Feld die OID der Berufsgruppe. Beispiel: `1.2.276.0.76.4.30` für SMC-B Zahnarzt. Diese OID wird von [[Konnektoren]] ausgelesen, um die Rolle des Karteninhabers zu bestimmen.
- **Admission**: Weitere Rollen- und Institutionsinformationen.

> [!interesse-technik]
> **Profession OIDs für HBA und SMC-B:** Die vollständige Liste der in der TI verwendeten Profession OIDs ist im Dokument "Professionell OIDs" auf dem gematik-Fachportal veröffentlicht. Sie enthält OIDs für alle Heilberufsgruppen (Arzt, Zahnarzt, Apotheker, Pflegefachkraft etc.) und Institutionstypen. Primärsysteme nutzen diese OIDs, um festzustellen, ob eine eingesteckte Karte für eine bestimmte Operation berechtigt ist. Spezifikation: gemSpec_OID.

### OIDs in FHIR

> [!klinik-integration] Klinik-Integration: OIDs in KIS-Schnittstellen und ISiK
> **HL7-Nachrichten im KIS:** Alle gängigen KIS-Systeme (SAP ISH, Orbis/Dedalus, iMedOne, NEXUS KIS) verwenden OIDs in HL7 v2-Nachrichten zur Identifikation von Codesystemen. In ADT-Nachrichten (Aufnahme, Verlegung, Entlassung) kennzeichnet die OID `2.16.840.1.113883.6.3` (ICD-10) Diagnosen. LOINC-OID `2.16.840.1.113883.6.1` kennzeichnet Laborwerte in ORU^R01-Nachrichten. Prüfen Sie bei KIS-Upgrades, ob die eingesetzten OID-Versionen mit den deutschen HL7-Profilen (HL7 DE e.V.) kompatibel sind.
>
> **ISiK-FHIR-Profile und OIDs:** Die ISiK-Spezifikation legt fest, welche OID-basierten Systemidentifikatoren in FHIR-Ressourcen verwendet werden müssen. Beispiel: Einrichtungskennzeichen (IK-Nummer) wird als `urn:oid:1.2.276.0.76.4.5` im FHIR-Profil `Organization` hinterlegt. Falsche oder fehlende OIDs führen bei der ISiK-Konformitätsprüfung zu Validierungsfehlern. Tipp: Nutzen Sie den gematik-FHIR-Validator oder Simplifier.net zur Vorabprüfung Ihrer KIS-Ausgaben.
>
> **DICOM und Radiologie-Integration:** Im Radiologie-Workflow identifizieren OIDs SOP-Klassen (z.B. CT, MRT) und UIDs von Studien und Serien. Bei der KIS-RIS-PACS-Integration ist sicherzustellen, dass die OID-Namensräume konsistent sind. Eigene OID-Namensräume für das Haus können beim BfArM unter dem Zweig `1.2.276.0.76` registriert werden.

[[FHIR]]-Ressourcen verwenden OIDs als Systemidentifikatoren in CodeableConcept-Elementen:

```json
{
  "system": "urn:oid:1.2.276.0.76.4.3",
  "code": "HBA-Arzt"
}
```

Das gematik-Simplifier-Profil definiert, welche OID-basierten Codesysteme in deutschen FHIR-Profilen zulässig sind. Viele Codesysteme haben sowohl eine OID (Altformat) als auch eine URL (FHIR-native), z.B. LOINC: OID `2.16.840.1.113883.6.1`, URL `http://loinc.org`.

> [!dev-quickstart] Dev Quickstart: OIDs in TI-Zertifikaten und FHIR auslesen
> ```bash
> # Profession OID aus HBA-Zertifikat extrahieren
> openssl x509 -in hba.pem -noout -text | grep -A2 "1.3.36.8.3.3"
>
> # Alternativ: ASN.1-Dump für alle OID-Felder
> openssl asn1parse -in hba.pem -inform PEM | grep "OID"
> ```
> ```json
> // FHIR: OID als System-URI in CodeableConcept
> {
>   "system": "urn:oid:1.2.276.0.76.4.30",
>   "code": "1.2.276.0.76.4.30",
>   "display": "Zahnarzt"
> }
> ```
> **Wichtige Profession OIDs (Auswahl):**
> - `1.2.276.0.76.4.30`: SMC-B Zahnarzt
> - `1.2.276.0.76.4.31`: SMC-B Arzt
> - `1.2.276.0.76.4.46`: SMC-B Apotheke
> - `1.2.276.0.76.4.3`: HBA Arzt
> - `1.2.276.0.76.4.16`: HBA Zahnarzt
>
> Vollständige OID-Liste: [gemSpec_OID V3.23.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_OID/gemSpec_OID_V3.23.0/index.html)

### OID-Registrierung in Deutschland

Die zentrale OID-Registrierungsstelle für Deutschland ist das **Deutsche Institut für Medizinische Dokumentation und Information (DIMDI)**, heute Teil des [[BfArM]]. Es pflegt den deutschen OID-Zweig `1.2.276.0.76` für das Gesundheitswesen.

Hersteller von TI-Produkten, die eigene OIDs benötigen (z.B. für proprietäre Erweiterungen), können beim [[BfArM]] einen eigenen Unterzweig registrieren lassen.

## Verknüpfungen

- [[PKI]] (TI-PKI verwendet OIDs in Zertifikaten für Rollen und Identitäten)
- [[X.509]] (Zertifikatsstandard; verwendet OIDs für Felder und Erweiterungen)
- [[Telematik-ID]] (basiert auf OID-Namensraum)
- [[FHIR]] (verwendet OIDs als Systemidentifikatoren für Codesysteme)
- [[HL7]] (HL7 verwaltet eigenen OID-Zweig für medizinische Codes)
- [[DICOM]] (verwendet OIDs für SOP-Klassen und Instanzen)
- [[HBA]] (Profession OID im Zertifikat identifiziert Berufsgruppe)
- [[SMC-B]] (Profession OID im Zertifikat identifiziert Institutionstyp)
- [[ICD-10-GM]] (hat eigene OID im HL7-Zweig)
- [[LOINC]] (Laborcodesystem mit eigener OID)
- [[BfArM]] (DIMDI-Nachfolger; Registrierungsstelle für medizinische OIDs in Deutschland)

## Quellen

- [gematik: gemSpec_OID – Spezifikation der OIDs in der TI](https://gemspec.gematik.de/docs/gemSpec/gemSpec_OID/latest/)
- [BfArM: OID-Register im Gesundheitswesen](https://www.bfarm.de/DE/Kodiersysteme/Services/OID-Register/_node.html)
- [Wikipedia: Object Identifier](https://de.wikipedia.org/wiki/Object_Identifier)
- [ITU-T X.660: OID-Standard](https://www.itu.int/rec/T-REC-X.660/en)
