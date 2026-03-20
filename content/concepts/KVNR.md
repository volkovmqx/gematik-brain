---
title: KVNR - Krankenversicherungsnummer
audience: [technical, non-technical]
tags: [konzepte, identität, krankenversicherung, versicherte, gkv]
aliases: [KVNR, Krankenversicherungsnummer, Versichertennummer, unveränderliche Krankenversicherungsnummer]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, pflege, kasse, ti-infrastruktur]
  interests: [technik, compliance]
maturity: wachsend
---

# KVNR - Krankenversicherungsnummer

Die **Krankenversicherungsnummer (KVNR)** ist eine lebenslange, unveränderliche Identifikationsnummer für Versicherte der gesetzlichen Krankenversicherung in Deutschland.

## Erklärt für Einsteiger

Jeder Mensch in Deutschland hat eine Steuernummer und eine Rentenversicherungsnummer. Ähnlich dazu hat jeder gesetzlich Versicherte eine KVNR: eine Nummer, die ihn als Person im Gesundheitssystem eindeutig identifiziert. Diese Nummer bleibt ein Leben lang dieselbe, egal zu welcher Krankenkasse man wechselt. Auf deiner Krankenversicherungskarte ist sie aufgedruckt, und im Hintergrund taucht sie immer dann auf, wenn Ärzte oder Kassen miteinander über dich kommunizieren.

## Überblick

Die KVNR wurde mit dem Gesundheitsstrukturgesetz 1993 eingeführt. Vor 1993 vergab jede Krankenkasse eigene Mitgliedsnummern. Diese waren weder kassenübergreifend eindeutig noch lebenslang stabil. Mit der KVNR gibt es erstmals eine einheitliche, kassenunabhängige Identifikation für GKV-Versicherte.

Die KVNR ist auf der [[eGK]] (elektronischen Gesundheitskarte) aufgedruckt und im Chip gespeichert. Sie ist auch Bestandteil der Versichertenstammdaten im [[VSDM]]-System. Krankenkassen, Arztpraxen und Abrechnungsstellen verwenden die KVNR als primären Identifikator für Versicherte.

In der [[Telematikinfrastruktur]] hat die KVNR besondere Bedeutung als dauerhafter, systemübergreifender Identifier. Alle TI-Anwendungen, die Versicherte betreffen, referenzieren deren Daten über die KVNR.

> [!praxis-tipp] Praxis-Tipp: KVNR im Praxisalltag
> Die KVNR begegnet Ihnen täglich, ohne dass Sie es merken. Ihr PVS liest sie automatisch beim VSDM-Check vom Chip der eGK aus.
>
> Was Sie wissen müssen:
> - **Kartenlesen ist Pflicht:** Einmal pro Quartal muss die eGK über das Kartenlesegerät eingelesen werden. Das löst den VSDM-Check aus und bestätigt die Versichertendaten.
> - **Keine Karte vorhanden?** Seit Juli 2025 müssen Praxen auch die elektronische Ersatzbescheinigung (eEB) akzeptieren. Patienten können die eEB über die App ihrer Krankenkasse vorzeigen.
> - **KVNR für die ePA:** Das PVS nutzt die KVNR, um die ePA des Patienten eindeutig abzufragen. Stimmt die KVNR nicht mit den Kassendaten überein, schlägt der ePA-Zugriff fehl.
>
> Häufiger Fehler: Patient gibt die KVNR mündlich an (z.B. am Telefon). Tippen Sie die Nummer nie manuell ein. Nutzen Sie immer die Karte oder die eEB. Manuelle Eingaben führen zu Tipp- und Zuordnungsfehlern.

> [!interesse-compliance]
> Die KVNR ist ein personenbezogenes Datum nach DSGVO (Art. 4 Nr. 1). Sie darf nur für Zwecke der Sozialversicherung und der Gesundheitsversorgung verarbeitet werden (§ 290 SGB V). Eine Nutzung zur kassenübergreifenden Profilbildung ist unzulässig. Praxen und Krankenhäuser müssen die KVNR als besonders schützenswerte Information behandeln und in Verfahrensverzeichnisse aufnehmen.

## Technische Details

### Format und Aufbau

Die KVNR besteht aus **10 alphanumerischen Zeichen**:

```
Beispiel: A123456789
         |\_______/|
         |    |    |
         |    |    Prüfziffer (1 Stelle, numerisch)
         |    Seriennummer (8 Stellen, numerisch)
         Anfangsbuchstabe des Geburtsnamens (1 Stelle, alphabetisch, Großbuchstabe)
```

- **Position 1**: Erster Buchstabe des Geburtsnamens (Großbuchstabe A-Z)
- **Positionen 2-9**: Seriennummer (8 Ziffern, vom Rentenversicherungsträger vergeben)
- **Position 10**: Prüfziffer (1 Ziffer, berechnet nach einem definierten Algorithmus)

Die KVNR basiert strukturell auf der Rentenversicherungsnummer: Der Rentenversicherungsträger (Deutsche Rentenversicherung) vergibt die Stammnummer und leitet daraus die KVNR ab. Dies gewährleistet bundesweite Eindeutigkeit.

### Unveränderlichkeit

Die KVNR ist lebenslang unveränderlich. Sie ändert sich nicht bei:
- Wechsel der Krankenkasse
- Namensänderung (z.B. nach Heirat)
- Umzug in ein anderes Bundesland

Dies unterscheidet die KVNR von der früheren kasseneigenen Mitgliedsnummer, die sich bei jedem Kassenwechsel änderte.

### KVNR in der TI-Federation

In der [[TI-Federation]] ist die KVNR ein standardisierter **Claim** in den ausgestellten Tokens. Laut `gemSpec_IDP_Sek` müssen sektorale [[IDP|Identity Provider]] die KVNR als Pflichtattribut in das ID Token aufnehmen:

```json
{
  "sub": "...",
  "kvnr": "A123456789",
  "given_name": "...",
  "family_name": "...",
  ...
}
```

Fachdienste wie das [[ePA]]-Aktensystem verwenden die KVNR als primären Identifier, um die Akte des Versicherten eindeutig zuzuordnen. Die Akte existiert genau einmal pro KVNR.

### KVNR und Gesundheits-ID

Bei der [[Gesundheits-ID]] (der digitalen Alternative zur [[eGK]]) ist die KVNR der zentrale Identifikator im Authentifizierungstoken. Der sektorale IDP der Krankenkasse stellt ein JSON Web Token (JWT) aus, das die KVNR enthält. Der Token ist kryptografisch signiert und wird von TI-Fachdiensten über die [[TI-Federation]] geprüft.

### KVNR auf der eGK

Die [[eGK]] speichert die KVNR sowohl im Chip (als Feld in den Versichertenstammdaten) als auch aufgedruckt auf der Karte. Beim [[VSDM]]-Online-Check liest der [[Konnektoren|Konnektor]] die KVNR aus dem Chip und übermittelt sie an den Krankenkassen-Server zur Stammdatenprüfung.

### Abgrenzung zu anderen Nummern

| Nummer | Verwendung | Veränderlich |
|---|---|---|
| KVNR | GKV-Identifikator für Versicherte | Nein |
| Kassenmitgliedsnummer | Interne Nummer der Krankenkasse | Ja (bei Kassenwechsel) |
| Rentenversicherungsnummer | Sozialversicherung, Basis für KVNR | Nein |
| Patientennummer (intern) | Nur intern in Praxis/KIS | Ja |

### Datenschutz

Die KVNR ist ein personenbezogenes Datum nach DSGVO. Sie darf nur für Zwecke der Sozialversicherung und der Gesundheitsversorgung verarbeitet werden. Eine Nutzung der KVNR zur kassenübergreifenden Profilbildung außerhalb des Versorgungskontexts ist nicht zulässig.

> [!dev-quickstart] Dev Quickstart: KVNR in FHIR und IDP-Token
> **FHIR Patient-Ressource mit KVNR:**
> ```json
> {
>   "resourceType": "Patient",
>   "identifier": [{
>     "system": "http://fhir.de/sid/gkv/kvid-10",
>     "value": "A123456789"
>   }]
> }
> ```
> **IDP-Token (JWT) des sektoralen IDP** enthält die KVNR als Pflichtclaim `kvnr`:
> ```json
> {
>   "sub": "...",
>   "kvnr": "A123456789",
>   "given_name": "Max",
>   "family_name": "Mustermann",
>   "iss": "https://idp.krankenkasse.example"
> }
> ```
> - Identifier-System: `http://fhir.de/sid/gkv/kvid-10` (definiert in [de.basisprofil.r4](https://simplifier.net/basisprofil-de-r4))
> - Spec: [gemSpec_IDP_Sek](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/) (KVNR als Pflichtclaim)
> - ePA-Aktensystem: Akte wird über KVNR eindeutig zugeordnet (1 KVNR = 1 Akte)

> [!interesse-technik]
> KVNR im TI-Kontext: 10-stellig, alphanumerisch (1 Buchstabe + 8 Ziffern + 1 Prüfziffer). Identifier-System in FHIR: `http://fhir.de/sid/gkv/kvid-10`. Im [[IDP]]-Token des sektoralen IDP ist die KVNR als Pflichtclaim `kvnr` definiert (gemSpec_IDP_Sek). Pseudonymisierung im FDZ: HMAC-SHA256 über die KVNR mit geheimem Schlüssel (deterministisch für Längsschnittdaten).

## Verknüpfungen

- [[eGK]]: Karte, auf der die KVNR gespeichert ist
- [[VSDM]]: Versichertenstammdatenmanagement, das die KVNR als Identifier nutzt
- [[GKV]]: Das Versicherungssystem, dessen Versicherte eine KVNR erhalten
- [[Gesundheits-ID]]: Digitale Identität, deren Token die KVNR enthält
- [[TI-Federation]]: Federationssystem, in dem die KVNR als standardisierter Claim gilt
- [[IDP]]: Identity Provider, der KVNR-Claims in Tokens einbettet
- [[ePA]]: Patientenakte, die über die KVNR eindeutig einem Versicherten zugeordnet wird
- [[Telematikinfrastruktur]]: Nutzt KVNR als zentralen Patientenidentifikator

## Quellen

- [GKV-Spitzenverband: Die Krankenversicherungsnummer](https://www.gkv-spitzenverband.de/krankenversicherung/versichertenrechte/kvnr/kvnr.jsp)
- [gematik: gemSpec_IDP_Sek – Sektoraler IDP, KVNR als Pflichtclaim](https://gemspec.gematik.de/docs/gemSpec/gemSpec_IDP_Sek/latest/)
- [SGB V §290: Versichertennummer der gesetzlichen Krankenversicherung](https://www.gesetze-im-internet.de/sgb_5/__290.html)
