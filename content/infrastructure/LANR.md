---
title: LANR
audience: [technical, non-technical]
tags: [infrastructure, identifikation, abrechnung, kv, arzt]
aliases: [Lebenslange Arztnummer, Lebenslange Arzt-Identifikationsnummer, LAINR]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, krankenhaus, hersteller, it-dienstleister]
  interests: [technik, compliance]
maturity: immergruen
---

# LANR

Die **LANR (Lebenslange Arztnummer)** ist eine neunstellige Kennzahl, die jedem approbierten Arzt in Deutschland dauerhaft und bundesweit eindeutig zugeordnet ist.

## Erklärt für Einsteiger

Jeder Arzt in Deutschland bekommt einmal im Leben eine feste Nummer: die Lebenslange Arztnummer. Sie bleibt ihm sein ganzes Berufsleben lang, egal ob er die Praxis wechselt, umzieht oder als Vertretung tätig ist. Diese Nummer steht auf allen Rezepten und Dokumenten, die er ausstellt, sodass immer klar ist: Wer hat diese Leistung erbracht?

## Überblick

Die LANR wird von der [[Kassenaerztliche-Vereinigung|Kassenärztlichen Vereinigung (KV)]] vergeben, sobald ein Arzt eine Zulassung oder Ermächtigung als Vertragsarzt erhält. Im Gegensatz zur [[BSNR]], die an die Betriebsstätte gebunden ist, folgt die LANR dem Arzt sein gesamtes Berufsleben lang.

Auch Psychotherapeuten und Zahnärzte erhalten eine entsprechende lebenslange Kennzahl (bei Zahnärzten heißt sie KZVA-Nummer, bei Psychotherapeuten ebenfalls LANR).

Die LANR erscheint in allen abrechnungsrelevanten Dokumenten: auf dem [[E-Rezept]], in Arztbriefen, Überweisungen und Quartalsabrechnungen. Sie ist gemeinsam mit der [[BSNR]] das grundlegende Identifikationspaar der ambulanten Versorgung.

## Technische Details

### Aufbau der LANR

Die LANR ist neunstellig:

```
XXXXXXX XX
│       └── 2-stellige Fachgruppennummer
└── 7-stellige Arztidentifikation (individuelle Nummer)
```

Die letzten zwei Stellen kodieren die Fachgruppe des Arztes:

| Fachgruppe | Code (Beispiele) |
|---|---|
| Allgemeinmedizin / Hausarzt | 01 |
| Innere Medizin | 05 |
| Chirurgie | 07 |
| Psychiatrie | 25 |
| Gynäkologie | 36 |
| Pädiatrie | 44 |

Diese Fachgruppenkennung ermöglicht es, aus der LANR direkt auf die Fachrichtung des Arztes zu schließen, was für die Abrechnung und für Plausibilitätsprüfungen relevant ist.

### LANR und BSNR: das ambulante Identifikationspaar

In der Abrechnung und in TI-Dokumenten treten LANR und [[BSNR]] immer gemeinsam auf. Die BSNR identifiziert, wo eine Leistung erbracht wurde. Die LANR identifiziert, von wem. Zusammen ermöglichen sie die vollständige Dokumentation und Abrechnung ambulanter Leistungen.

### LANR in der Telematikinfrastruktur

- **[[E-Rezept]]**: Das E-Rezept enthält die LANR des ausstellenden Arztes als FHIR-Identifier in der `Practitioner`-Ressource. System: `https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR`.
- **[[KVDT]]-Abrechnung**: Die LANR erscheint in jedem Behandlungsfall-Datensatz als Feldnummer 0202.
- **[[VZD]] (Verzeichnisdienst)**: Ärzte sind im VZD mit ihrer LANR eingetragen. Andere Leistungserbringer können darüber die [[KIM]]-Adresse eines Arztes ermitteln.
- **[[eReferral]]**: Überweisungen enthalten die LANR des überweisenden Arztes.
- **[[eAU]]**: Die elektronische Arbeitsunfähigkeitsbescheinigung enthält die LANR des ausstellenden Arztes.
- **[[HBA]]**: Der [[HBA]] (Heilberufsausweis) eines Arztes enthält die LANR als Attribut im Kartenzertifikat.

> [!dev-quickstart] Dev Quickstart: LANR im FHIR-Kontext
> LANR als FHIR `Practitioner.identifier` (KBV-Profil):
> ```json
> {
>   "resourceType": "Practitioner",
>   "identifier": [
>     {
>       "type": {
>         "coding": [{ "system": "http://terminology.hl7.org/CodeSystem/v2-0203", "code": "LANR" }]
>       },
>       "system": "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR",
>       "value": "123456701"
>     }
>   ]
> }
> ```
> VZD FHIR-API: Arzt per LANR suchen und KIM-Adresse ermitteln:
> ```bash
> curl -s "https://fhir.vzd.ti-dienste.de/search/Practitioner?identifier=https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR|123456701" \
>   -H "Accept: application/fhir+json" \
>   -H "Authorization: Bearer <vzd-access-token>"
> ```
> - KBV NamingSystem: `https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR`
> - KBV-FHIR-Profil: [KBV_PR_Base_Practitioner](https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Practitioner)
> - VZD-API: [github.com/gematik/api-vzd](https://github.com/gematik/api-vzd)

> [!interesse-technik]
> FHIR-Identifier für LANR in KBV-Profilen: System `https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR`, Wert ist die 9-stellige LANR. Im E-Rezept-Bundle: `Practitioner.identifier.system` + `Practitioner.identifier.value`. Im [[HBA]]-Zertifikat ist die LANR als OID-Attribut hinterlegt (OID 1.2.276.0.76.4.16). In [[KVDT]]-Dateien: Feldnummer 0202, Länge 9 Stellen.

### Zuweisung und Verwaltung

Die LANR wird bei der Erstzulassung durch die KV vergeben. Ein Arzt kann in mehreren KV-Bezirken tätig sein (z.B. als Vertretungsarzt), nutzt aber immer dieselbe LANR. Die LANR wird nicht automatisch gelöscht, wenn ein Arzt in Rente geht. Sie bleibt dauerhaft im System.

Ärzte, die ausschließlich privat abrechnen (keine GKV-Zulassung), erhalten keine LANR durch die KV. Sie können aber eine sogenannte "Pseudo-LANR" verwenden, wenn sie an bestimmten TI-Prozessen teilnehmen müssen.

> [!klinik-integration] Klinik-Integration: LANR-Verwaltung im KIS
> Im Krankenhaus ist die LANR-Verwaltung komplexer als in der Einzelpraxis: Es gibt viele Ärzte (Fach- und Assistenzärzte), häufige Stellenwechsel und verschiedene Fachbereiche. Das KIS muss LANRs korrekt führen, da sie in E-Rezepten, Entlassbriefen und TI-Anwendungen auftauchen.
>
> **Vollständigkeit im KIS sicherstellen:** Jeder Arzt, der im KIS E-Rezepte ausstellt oder Dokumente in die ePA einstellt, benötigt eine korrekt hinterlegte LANR. Prüfen Sie, ob Ihr KIS die LANR als Pflichtfeld bei der Anlage von Arztprofilen verlangt und ob alle niedergelassenen und angestellten Ärzte vollständig erfasst sind.
> **Privatärzte und Pseudo-LANR:** Krankenhausärzte ohne GKV-Zulassung (z.B. ausschließlich privatärztlich tätige Chefärzte) haben keine KV-LANR. Für TI-Anwendungen wie E-Rezept kann eine Pseudo-LANR vergeben werden. Klären Sie mit dem KIS-Hersteller, wie Pseudo-LANRs im System hinterlegt werden und ob sie korrekt in FHIR-Ressourcen eingetragen werden.
> **KIM und VZD:** Für die KIM-Kommunikation (Telekonsil, Entlassbrief-Versand) müssen Krankenhausärzte im VZD mit ihrer LANR eingetragen sein. Ärzte ohne VZD-Eintrag können nicht per KIM kontaktiert werden. Klären Sie die VZD-Eintragslogistik für alle am Telekonsil beteiligten Fachabteilungen.

> [!praxis-tipp] Praxis-Tipp: LANR im Praxisalltag
> Jeder in Ihrer Praxis tätige Arzt hat seine eigene LANR. Diese Nummer muss korrekt im PVS hinterlegt sein.
>
> Typische Situationen, in denen die LANR wichtig wird:
> - **Vertretungsarzt**: Trägt die Praxis durch eine Vertretung? Der Vertretungsarzt unterschreibt mit seiner eigenen LANR, nicht mit der des Praxisinhabers. Im PVS den Vertretungsarzt korrekt erfassen.
> - **Angestellter Arzt**: Jeder angestellte Arzt benötigt eine eigene LANR. Die KV zuständig für Ihren Bezirk vergibt sie auf Antrag.
> - **Neue Partnerin oder neuer Partner**: LANR muss vor dem ersten Arbeitstag im PVS hinterlegt sein, sonst können keine E-Rezepte ausgestellt werden.
>
> Häufiger Fehler: LANR des Praxisinhabers wird für alle Ärzte genutzt. Das ist abrechnungsrechtlich nicht korrekt und führt zu Rückfragen der KV.

## Verknüpfungen

- [[BSNR]] (Betriebsstättennummer; Pendant zur LANR auf Praxisebene)
- [[KVDT]] (Abrechnungsformat; enthält LANR in jedem Behandlungsfall-Datensatz)
- [[Kassenaerztliche-Vereinigung]] (vergibt und verwaltet die LANR)
- [[HBA]] (Heilberufsausweis; enthält LANR als Zertifikatsattribut)
- [[E-Rezept]] (enthält LANR des Ausstellers als FHIR-Identifier)
- [[VZD]] (Verzeichnisdienst; enthält LANRs der zugelassenen Ärzte)
- [[eAU]] (elektronische AU; enthält LANR des ausstellenden Arztes)
- [[eReferral]] (Überweisungen enthalten die LANR des überweisenden Arztes)

## Quellen

- [KBV: FHIR-Profil KBV_PR_Base_Practitioner (LANR-Identifier)](https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Practitioner)
- [KBV ITA-Update Portal: KVDT-Spezifikation](https://update.kbv.de/ita-update/Abrechnung/)
- [Wikipedia: Arzt-Identifikationsnummer](https://de.wikipedia.org/wiki/Arzt-Identifikationsnummer)
