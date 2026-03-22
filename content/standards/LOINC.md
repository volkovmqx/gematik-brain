---
title: LOINC
audience: [technical]
tags: [standards, terminologie, laborwerte, fhir, interoperabilität]
aliases: [Logical Observation Identifiers Names and Codes, LOINC-Code]
relevance:
  sectors: [krankenhaus, arztpraxis, forschung]
  interests: [technik]
maturity: immergruen
---

# LOINC

LOINC (Logical Observation Identifiers Names and Codes) ist ein internationales Terminologiesystem für die eindeutige Benennung und Codierung von Laborwerten, klinischen Beobachtungen und Dokumenten.

## Erklärt für Einsteiger

Wenn ein Labor einen Blutwert misst, nennt jedes Krankenhaus diesen Wert möglicherweise anders: "Kalium im Serum", "Serum-K" oder "K+". Damit Computer in verschiedenen Kliniken und Ländern diesen Wert trotzdem als dasselbe erkennen, gibt es LOINC. Jeder Messwert bekommt einen weltweit eindeutigen Code, zum Beispiel 2823-3 für "Kalium im Serum". So kann ein System in München einen Wert an ein System in Hamburg schicken, und beide wissen sofort, was gemeint ist.

## Überblick

LOINC wurde 1994 vom Regenstrief Institute, einem gemeinnützigen Forschungsinstitut in Indianapolis (USA), entwickelt und wird dort bis heute gepflegt. Das System ist kostenlos nutzbar und wird laut Regenstrief in mehr als 165 Ländern eingesetzt. Der Bestand umfasst knapp 95.000 Codes, davon rund 57.800 für Laborparameter und rund 37.000 für klinische Beobachtungen.

LOINC ergänzt andere Terminologiesysteme wie [[SNOMED-CT|SNOMED CT]] und [[ICD-10-GM]]. Während ICD-10-GM Diagnosen codiert und SNOMED CT klinische Konzepte beschreibt, codiert LOINC die Beobachtung selbst: was gemessen wird, wie und mit welchem Material.

In der deutschen [[Telematikinfrastruktur]] ist LOINC als Terminologiesystem in [[FHIR]]-Profilen verankert. Die [[KBV]] schreibt LOINC in mehreren [[MIO|Medizinischen Informationsobjekten (MIO)]] vor, insbesondere für Laborparameter und Vitalzeichen. Auch die [[ISiK]]-Spezifikation verwendet LOINC für die Codierung von Beobachtungen (FHIR Observation).

## Technische Details

### Aufbau eines LOINC-Codes

Jeder LOINC-Code besteht aus einer numerischen Kennung (z.B. 2823-3) und einem vollständig ausgeschriebenen Namen, dem sogenannten "Fully Specified Name". Dieser Name setzt sich aus bis zu sechs Achsen zusammen:

| Achse | Bedeutung | Beispiel |
|---|---|---|
| Component | Was wird gemessen? | Potassium (Kalium) |
| Property | Welche Eigenschaft? | SCnc (Substanzkonzentration) |
| Timing | Zeitbezug | Pt (Punktmessung) |
| System | Probenmaterial oder Körpersystem | Ser (Serum) |
| Scale | Ergebnistyp | Qn (quantitativ) |
| Method | Messmethode (optional) | (leer, wenn nicht relevant) |

Der vollständige LOINC-Name für 2823-3 lautet damit: "Potassium:SCnc:Pt:Ser:Qn".

### LOINC in FHIR

In [[FHIR]] ist LOINC das bevorzugte Codesystem für die Ressource `Observation`. Der kanonische URI des LOINC-Codesystems in FHIR lautet:

```
http://loinc.org
```

Eine FHIR-Observation für einen Kaliumwert enthält typischerweise:

```json
{
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "2823-3",
      "display": "Potassium [Moles/volume] in Serum or Plasma"
    }]
  }
}
```

HL7 stellt eine offizielle Definition des LOINC-Codesystems in FHIR bereit. LOINC betreibt außerdem einen eigenen FHIR-[[Terminologieserver]] unter loinc.org/fhir, der LOINC-Codes als FHIR-Ressourcen ausliefert.

### Einsatz in MIOs und ISiK

In den deutschen [[MIO]]-Profilen der [[KBV]] ist LOINC für folgende Bereiche vorgeschrieben:

- Laborparameter im Laborbefund-MIO
- Vitalzeichen (z.B. Blutdruck, Körpertemperatur) im Beobachtungs-MIO
- Dokumententypen im KH-Entlassbrief-MIO

Die [[ISiK]]-Spezifikation schreibt für die FHIR-Ressource `Observation` LOINC als primäres Codesystem vor. Systeme, die ISiK-konform sein wollen, müssen LOINC-Codes für ihre Beobachtungen vergeben.

### Abgrenzung zu SNOMED CT

LOINC und [[SNOMED-CT|SNOMED CT]] überschneiden sich in manchen Bereichen, haben aber verschiedene Stärken:

- **LOINC**: Fokus auf die Messung selbst (was, wie, womit). Stärken: Labordaten, Vitalzeichen, Dokumententypen.
- **SNOMED CT**: Fokus auf klinische Konzepte und ihre Beziehungen. Stärken: Diagnosen, Prozeduren, klinische Befunde.

In deutschen [[FHIR]]-Profilen werden beide parallel eingesetzt. LOINC codiert den Beobachtungstyp, SNOMED CT kann den klinischen Kontext ergänzen.

> [!interesse-technik]
> FHIR CodeSystem URI: `http://loinc.org`. LOINC FHIR Terminology Service: [loinc.org/fhir](https://loinc.org/fhir/) (FHIR `$lookup`, `$validate-code`). Kostenfreier Download und Lizenzbedingungen: [loinc.org/downloads](https://loinc.org/downloads/). Zweijährliche Releases. Für [[ISiK]]-konforme KIS: LOINC ist Pflicht-Codesystem für FHIR Observation. Für [[MIO]]-konforme PVS: LOINC vorgeschrieben für Laborparameter und Vitalzeichen.

> [!dev-quickstart] Dev Quickstart: LOINC-Codes per FHIR-API abrufen
> **Base URL:** `https://fhir.loinc.org`
>
> ```bash
> # Code-Lookup: Details zu LOINC-Code 2823-3 (Kalium im Serum)
> curl "https://fhir.loinc.org/CodeSystem/$lookup?system=http://loinc.org&code=2823-3"
>
> # Code validieren
> curl "https://fhir.loinc.org/CodeSystem/$validate-code?system=http://loinc.org&code=2823-3"
>
> # ValueSet expandieren (z.B. alle Vitalzeichen-LOINC-Codes)
> curl "https://fhir.loinc.org/ValueSet/$expand?url=http://loinc.org/vs/VitalSigns"
> ```
> - Auth: Kostenloser LOINC-Account erforderlich (Basic Auth oder API-Key)
> - Anmeldung: [loinc.org/downloads](https://loinc.org/downloads/)
> - Unterstützte FHIR-Versionen: R4, STU3
> - Ältere Versionen (ab 2.69) per `version`-Parameter abrufbar: `?system=http://loinc.org&code=2823-3&version=2.78`
> - Offizielle API-Dokumentation: [loinc.org/fhir](https://loinc.org/fhir/)

### Pflege und Versionszyklen

Das Regenstrief Institute veröffentlicht LOINC zweimal jährlich in neuen Versionen. Alle Codes sind persistent: Einmal vergebene Codes werden nie gelöscht oder umdefiniert, nur als "deprecated" markiert. Das sichert die Langzeitstabilität gespeicherter Daten.

## Verknüpfungen

- [[FHIR]] (technisches Format, in dem LOINC-Codes als Codesystem verwendet werden)
- [[MIO]] (KBV-Profile schreiben LOINC für Laborparameter und Vitalzeichen vor)
- [[ISiK]] (LOINC als Pflicht-Codesystem für Observations in KIS-Schnittstellen)
- [[KBV]] (Herausgeber der deutschen FHIR-Profile mit LOINC-Bindungen)
- [[ICD-10-GM]] (ergänzendes Codesystem für Diagnosen)
- [[SNOMED-CT|SNOMED CT]] (ergänzendes Codesystem für klinische Konzepte)
- [[HL7]] (LOINC ist Teil des HL7-Terminologieökosystems)
- [[ePA]] (Labordaten in der ePA nutzen LOINC-codierte Observations)

## Quellen

- [Regenstrief Institute: LOINC FHIR Terminology Service](https://loinc.org/fhir/)
- [HL7 Terminology: LOINC CodeSystem](https://terminology.hl7.org/NamingSystem-v3-loinc.html)
- [PMC: Logical Observation Identifiers Names and Codes (LOINC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8464801/)
- [KBV: MIO-Terminologien (mio.kbv.de)](https://mio.kbv.de)
