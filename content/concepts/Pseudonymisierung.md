---
title: Pseudonymisierung
audience: [technical, non-technical]
tags: [konzepte, datenschutz, forschung, anonymisierung, dsgvo]
aliases: [Pseudonymisierung, pseudonymisiert, Pseudonym, Re-Identifizierung]
relevance:
  sectors: [krankenhaus, arztpraxis, forschung, kasse, hersteller, it-dienstleister, startup, regulierung]
  interests: [compliance, technik, patient]
maturity: setzling
---

# Pseudonymisierung

**Pseudonymisierung** ist eine Datenschutztechnik, bei der direkte Identifikatoren (Name, Adresse, Geburtsdatum) durch ein Pseudonym ersetzt werden, sodass die Daten ohne Zusatzwissen nicht mehr einer bestimmten Person zugeordnet werden können.

## Erklärt für Einsteiger

Stell dir vor, ein Forscher will verstehen, wie viele Menschen nach einer bestimmten Operation ins Krankenhaus zurückkehren. Dafür braucht er keine Namen. Der Name "Max Mustermann" wird durch eine zufällige Nummer ersetzt, z.B. "Patient 4738". Der Forscher sieht: Patient 4738 hatte die Operation und kam sechs Monate später zurück. Er weiß aber nicht, dass dieser Patient Max Mustermann ist. Das nennt man Pseudonymisierung. Der Unterschied zur vollständigen Anonymisierung: Irgendwo gibt es noch eine Liste, die die Nummer 4738 dem echten Max Mustermann zuordnet. Diese Liste ist streng geschützt.

## Überblick

Pseudonymisierung ist kein binäres Konzept, sondern ein Spektrum. An einem Ende steht einfache Pseudonymisierung (Namensersetzen durch ID), am anderen Ende stehen komplexe kryptografische Verfahren, die auch Re-Identifizierung durch statistische Methoden erschweren.

Die [[DSGVO]] definiert Pseudonymisierung in Art. 4 Nr. 5 als "Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können". Wichtig: Pseudonymisierte Daten **bleiben** personenbezogene Daten. Die DSGVO gilt weiterhin, auch wenn Privilegierungen (z.B. für Forschung) greifen.

Pseudonymisierung ist die zentrale Datenschutztechnik für die Sekundärnutzung von Gesundheitsdaten in Deutschland, insbesondere im:

- **[[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]]**: GKV-Abrechnungsdaten von 73 Millionen Versicherten werden vor Weitergabe an Forscher pseudonymisiert.
- **[[ePA]]-Forschungsnutzung**: Laut [[GDNG]] können pseudonymisierte ePA-Daten für gemeinwohlorientierte Forschung genutzt werden (Widerspruchsrecht der Versicherten).
- **Medizininformatik-Initiative ([[MII]])**: Verknüpft klinische Daten aus Universitätskliniken über pseudonymisierte Identifikatoren.

## Technische Details

### Pseudonymisierung vs. Anonymisierung

| Merkmal | Pseudonymisierung | Anonymisierung |
|---|---|---|
| Identifikatoren | Ersetzt durch Pseudonym | Vollständig entfernt |
| Rückführbarkeit | Möglich (mit Schlüssel) | Nicht möglich |
| DSGVO-Status | Personenbezogene Daten | Keine personenbezogenen Daten |
| Forschungsnutzen | Hoch (Längsschnittdaten möglich) | Begrenzt (kein Verknüpfen über Zeit) |
| Risiko | Re-Identifizierung möglich | Informationsverlust |

### Pseudonymisierungsverfahren

**Deterministische Pseudonymisierung**: Derselbe Identifikator erzeugt immer dasselbe Pseudonym. Technisch: kryptografische Hashfunktion (z.B. SHA-256) oder HMAC mit geheimem Schlüssel. Vorteil: Datensätze derselben Person können über Datasets hinweg verknüpft werden. Nachteil: Bei bekanntem Identifikator-Raum (z.B. alle deutschen KVNRs) können Pseudonyme durch Brute-Force rückgeführt werden.

**Probabilistische Pseudonymisierung**: Derselbe Identifikator kann unterschiedliche Pseudonyme erzeugen. Keine direkte Verknüpfbarkeit. Technisch: Verschlüsselung mit Zufallskomponente (IND-CPA-sicher).

**Trusted Third Party (TTP)**: Eine unabhängige, vertrauenswürdige Stelle hält den Schlüssel. Forscher erhalten nur das Pseudonym, nie den Klartextidentifikator. Rückführung nur durch TTP möglich, mit definierten Verfahren.

**K-Anonymität**: Statistisches Konzept. Ein Datensatz gilt als k-anonym, wenn jede Kombination quasi-identifizierender Merkmale (Alter, Postleitzahl, Diagnose) mindestens k-mal im Datensatz vorkommt. Verhindert Re-Identifizierung durch Kombination von Merkmalen.

> [!dev-quickstart] Dev Quickstart: Pseudonymisierung mit gPAS (REST API)
> **gPAS** (Greifswald Pseudonym Administration Service) ist Open-Source-Standard für klinische Register und MII-Datenzentren.
> ```bash
> # Pseudonym für eine KVNR erzeugen (gPAS TTP-FHIR-Gateway)
> curl -s -X POST "https://gpas.example.org/ttp-fhir/fhir/gpas/\$pseudonymize" \
>   -H "Content-Type: application/fhir+json" \
>   -d '{
>     "resourceType": "Parameters",
>     "parameter": [
>       { "name": "study",    "valueString": "STUDIE_2026" },
>       { "name": "target",   "valueString": "KVNR_DOMAIN" },
>       { "name": "original", "valueString": "A123456789" }
>     ]
>   }'
> # Response: {"parameter":[{"name":"pseudonym","valueString":"PSN-4f2a8b..."}]}
>
> # FHIR Patient-Ressource auf Feld-Ebene pseudonymisieren
> # (miracum/fhir-pseudonymizer, Konfiguration via anonymization.yaml)
> curl -s -X POST "https://fhir-ps.example.org/fhir/Patient/\$de-identify" \
>   -H "Content-Type: application/fhir+json" \
>   -d '{"resourceType":"Patient","id":"pat-1",
>        "identifier":[{"system":"http://fhir.de/sid/gkv/kvid-10","value":"A123456789"}],
>        "name":[{"family":"Mustermann","given":["Max"]}]}'
> # Response: Patient-Ressource mit ersetztem identifier, Familienname entfernt
> ```
> - gPAS Endpoint-Muster: `<ttp-host>/ttp-fhir/fhir/gpas/$pseudonymize`
> - Repo gPAS: [mosaic-hd/mosaic-projects](https://github.com/mosaic-hd/mosaic-projects) (Open Source, Java)
> - Repo FHIR-Pseudonymizer: [miracum/fhir-pseudonymizer](https://github.com/miracum/fhir-pseudonymizer)
> - KVNR-Identifier-System: `http://fhir.de/sid/gkv/kvid-10`
> - Relevante Norm: ISO/TS 25237 (Pseudonymisierung in der Gesundheitsinformatik)

### Pseudonymisierung im FDZ Gesundheit

Das [[Forschungsdatenzentrum-Gesundheit]] beim [[BfArM]] nutzt ein mehrstufiges Pseudonymisierungsverfahren:

1. Die gesetzlichen Krankenkassen übermitteln Abrechnungsdaten mit der [[KVNR]] als Identifikator.
2. Das FDZ ersetzt die KVNR durch ein persistentes Pseudonym (deterministisch, damit Längsschnittdaten möglich).
3. Der Pseudonymisierungsschlüssel ist beim BfArM getrennt von den Forschungsdaten gespeichert.
4. Forscher erhalten ausschließlich pseudonymisierte Daten, niemals KVNRs.

Die **GFF-Klage** (Gesellschaft für Freiheitsrechte, Klage wiederaufgenommen Februar 2026) kritisiert, dass dieses Verfahren bei seltenen Erkrankungen oder kleinen Grundgesamtheiten keine ausreichende Re-Identifizierungsresistenz bietet. Das Verfahren ist noch anhängig.

> [!frist-warnung] Frist-Warnung: Datenzugangsanträge FDZ Gesundheit
> **Rechtsgrundlage:** § 303e SGB V i.V.m. § 4 GDNG (in Kraft seit 26. März 2024)
> **Pflicht:** Forschungseinrichtungen, die auf pseudonymisierte GKV-Abrechnungsdaten beim FDZ Gesundheit (BfArM) zugreifen möchten, müssen einen förmlichen Datenzugangsantrag stellen. Das FDZ prüft gemäß § 303e Abs. 3 SGB V, ob das öffentliche Forschungsinteresse die Vertraulichkeitsinteressen der Versicherten überwiegt und das Re-Identifizierungsrisiko ausreichend minimiert ist.
> **Handlungsbedarf:** Der Antrag muss den Forschungszweck, die Notwendigkeit der Datenverknüpfung und die technischen sowie organisatorischen Schutzmaßnahmen nachweisen. Eine Datenschutz-Folgenabschätzung (DSFA) nach Art. 35 DSGVO ist bei Projekten mit großen Mengen besonderer Kategorien von Gesundheitsdaten Pflicht und dem Antrag beizufügen.
> **Sanktionen:** Re-Identifizierungsversuche sind nach § 9 Abs. 1 Nr. 2 GDNG strafbar (Freiheitsstrafe bis zu einem Jahr oder Geldstrafe). Verstöße gegen die Geheimhaltungspflichten nach § 7 GDNG können zur sofortigen Sperrung des Datenzugangs führen.

### Pseudonymisierung in der ePA

Laut [[GDNG]] werden ePA-Daten für die Forschungsnutzung pseudonymisiert. Das konkrete technische Verfahren für die ePA-Sekundärnutzung wird im Rahmen der GDNG-Umsetzung durch das BfArM und die [[gematik]] definiert.

Versicherte haben ein Widerspruchsrecht gegen die Forschungsnutzung ihrer Daten (Opt-out). Der Widerspruch kann in der ePA-App oder bei der Krankenkasse eingelegt werden.

> [!frist-warnung] Frist-Warnung: ePA-Sekundärnutzung und DSGVO-Rechtsgrundlage
> **Rechtsgrundlage:** Art. 9 Abs. 2 lit. j DSGVO i.V.m. § 27 BDSG und §§ 303a ff. SGB V (eingefügt durch GDNG, in Kraft seit 26. März 2024)
> **Pflicht:** Verantwortliche Stellen, die pseudonymisierte ePA-Daten zu Forschungszwecken verarbeiten, müssen die Verarbeitung auf eine explizite Rechtsgrundlage nach Art. 9 Abs. 2 DSGVO stützen. Pseudonymisierung allein ersetzt diese Rechtsgrundlage nicht, da pseudonymisierte Gesundheitsdaten weiterhin besondere Kategorien personenbezogener Daten im Sinne von Art. 9 Abs. 1 DSGVO sind.
> **Handlungsbedarf:** Prüfen Sie für jedes Forschungsprojekt mit ePA-Daten: (1) Liegt eine GDNG-konforme Genehmigung der Datenzugangs- und Koordinierungsstelle beim BfArM vor? (2) Ist das Widerspruchsrecht der Versicherten (Opt-out) technisch umgesetzt? (3) Ist eine DSFA nach Art. 35 DSGVO durchgeführt und dokumentiert?
> **Bei Nichtbeachtung:** Verstöße gegen Art. 9 DSGVO können Bußgelder von bis zu 20 Millionen Euro oder 4 Prozent des weltweiten Jahresumsatzes nach Art. 83 Abs. 5 DSGVO auslösen.

> [!patientenrecht] Patientenrecht: Forschungsdaten ablehnen
> Ihre Gesundheitsdaten können für medizinische Forschung genutzt werden. Das ist gesetzlich erlaubt. Dabei wird Ihr Name durch eine Nummer ersetzt. Kein Forscher sieht, wer Sie sind.
>
> **Sie möchten das nicht?** Sie können widersprechen. Das nennt man Opt-out.
>
> So geht es:
> 1. Öffnen Sie die ePA-App Ihrer Krankenkasse
> 2. Gehen Sie zu den Datenschutzeinstellungen
> 3. Deaktivieren Sie die Forschungsnutzung
>
> Oder: Rufen Sie Ihre Krankenkasse an und sagen Sie, dass Sie der Forschungsnutzung widersprechen. Sie können sich auch an die Ombudsstelle Ihrer Krankenkasse wenden.
>
> **Wichtig:** Der Widerspruch ist kostenlos. Sie müssen ihn nicht begründen. Sie können ihn jederzeit widerrufen.

> [!interesse-patient]
> Ihre Gesundheitsdaten aus der ePA können für anonymisierte Forschung genutzt werden. Dabei werden alle persönlichen Angaben (Name, Adresse, Versicherungsnummer) durch eine Nummer ersetzt. Kein Forscher sieht, dass die Daten von Ihnen stammen. Sie können dieser Nutzung jederzeit widersprechen: In der ePA-App unter "Datenschutzeinstellungen". Ihr Widerspruch gilt sofort und ist nicht begründungspflichtig.

### Pseudonymisierung in der Medizininformatik-Initiative

Die [[MII]] (Medizininformatik-Initiative) verbindet Daten aus 35 Universitätskliniken. Sie nutzt einen **Broad Consent** und ein zentrales Pseudonymisierungskonzept (PID: Patienten-ID-Management). Jede beteiligte Universitätsklinik pseudonymisiert die Patientendaten lokal und übermittelt nur Pseudonyme an die zentralen Datenintegrationszentren (DIZ). Eine patientenübergreifende Verknüpfung über Klinikgrenzen hinweg erfordert eine TTP-vermittelte De-Pseudonymisierung.

> [!interesse-compliance]
> Pseudonymisierung ersetzt keine DSGVO-Rechtsgrundlage. Pseudonymisierte Gesundheitsdaten bleiben besondere Kategorien personenbezogener Daten nach Art. 9 DSGVO. Verarbeitung für Forschung erfordert Rechtsgrundlage (Art. 9 Abs. 2 lit. j DSGVO i.V.m. nationalem Recht, z.B. [[GDNG]]). Re-Identifizierungsversuche sind nach § 7 [[GDNG]] strafbar. Datenschutz-Folgenabschätzung (DSFA) ist bei großen Gesundheitsdaten-Projekten Pflicht.

> [!interesse-technik]
> Standardbibliotheken für Pseudonymisierung in Deutschland: Mainzelliste (TU Mainz, Open Source, Java, für klinische Register), gPAS (Greifswald Pseudonym Administration Service, Open Source). Für FHIR-konforme Pseudonymisierung: FHIR-Profil für Patient-Resource mit Pseudonym-Identifier. Relevante Norm: ISO/TS 25237 (Gesundheitsinformatik, Pseudonymisierung). KVNR-Pseudonymisierung im FDZ: deterministisches HMAC-SHA256-Verfahren.

## Verknüpfungen

- [[GDNG]] (Gesundheitsdatennutzungsgesetz, primäre Rechtsgrundlage für Forschungsnutzung pseudonymisierter Daten)
- [[ePA]] (Hauptdatenquelle für pseudonymisierte Gesundheitsforschung)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ Gesundheit beim BfArM; nutzt Pseudonymisierung für Abrechnungsdaten)
- [[DSGVO]] (Datenschutz-Grundverordnung, Art. 4 Nr. 5: Definition der Pseudonymisierung)
- [[KVNR]] (Krankenversicherungsnummer; zentraler Identifikator, der im FDZ pseudonymisiert wird)
- [[MII]] (Medizininformatik-Initiative; patientenübergreifende Pseudonymisierung über Klinikgrenzen)
- [[BfArM]] (betreibt FDZ und Datenzugangsstelle nach GDNG)
- [[GKV]] (Abrechnungsdaten der GKV sind Hauptdatenquelle im FDZ)

## Quellen

- [DSGVO Art. 4 Nr. 5: Begriffsbestimmungen (Pseudonymisierung)](https://dsgvo-gesetz.de/art-4-dsgvo/)
- [BfArM: Forschungsdatenzentrum Gesundheit](https://www.bfarm.de/DE/Forschung/Forschungsdatenzentrum/_artikel.html)
- [BMG: Gesundheitsdatennutzungsgesetz (GDNG)](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/gesundheitsdatennutzungsgesetz.html)
- [Wikipedia: Pseudonymisierung](https://de.wikipedia.org/wiki/Pseudonymisierung)
