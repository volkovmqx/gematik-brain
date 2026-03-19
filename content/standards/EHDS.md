---
title: EHDS
audience: [technical, non-technical]
tags: [standard, eu, datenschutz, interoperabilitaet, recht]
aliases: [European Health Data Space, Europäischer Gesundheitsdatenraum, EU 2025/327]
relevance:
  sectors: [krankenhaus, kasse, hersteller, it-dienstleister, regulierung, forschung, patient]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# EHDS

Der **European Health Data Space (EHDS)** ist eine EU-Verordnung (EU 2025/327), die den grenzüberschreitenden Austausch und die Sekundärnutzung von Gesundheitsdaten in der EU regelt.

## Erklärt für Einsteiger

Stell dir vor, du reist nach Frankreich und brauchst dort dringend eine Behandlung. Mit dem EHDS kann der französische Arzt deine Krankenakte abrufen, sofern du zugestimmt hast. Der EHDS ist das EU-Gesetz, das sicherstellt, dass alle EU-Länder ihre Gesundheitssysteme nach einheitlichen Regeln vernetzen. Gleichzeitig dürfen Forscher Gesundheitsdaten nutzen, um neue Behandlungen zu entwickeln. Aber nur unter strengen Auflagen und ohne Rückschluss auf einzelne Personen.

## Überblick

Der EHDS trat im März 2025 in Kraft. Er ist in zwei Hauptbereiche gegliedert:

### Primärnutzung: Patientenversorgung

Der EHDS verpflichtet die EU-Mitgliedstaaten, digitale Gesundheitsdaten über die Infrastruktur **[[MyHealthAtEU|MyHealth@EU]]** grenzüberschreitend zugänglich zu machen. Versicherte erhalten das Recht auf Zugang zu ihren eigenen Gesundheitsdaten in einem interoperablen, maschinenlesbaren Format.

Konkrete Dienste im Aufbau:
- **ePrescription / eDispensation**: Elektronische Rezepte, die EU-weit eingelöst werden können
- **[[Patient-Summary|Patient Summary]]**: Zusammenfassung der wichtigsten Gesundheitsdaten (Diagnosen, Medikamente, Allergien)

Deutschland plant die Teilnahme an MyHealth@EU ab **Wave 10 (2026)** über den deutschen [[NCPeH]].

> [!patientenrecht] Patientenrecht: Gesundheitsdaten im EU-Ausland
> Sie haben das Recht, Ihre Gesundheitsdaten zu erhalten. Das gilt auch im EU-Ausland.
>
> **Was bedeutet das für mich?**
> Wenn Sie in einem anderen EU-Land krank werden, kann der dortige Arzt Ihre wichtigsten Daten abrufen. Zum Beispiel Ihre Medikamente oder bekannte Allergien. Das geht aber nur, wenn Sie dem zugestimmt haben.
>
> **Was kann ich tun?**
> 1. Fragen Sie Ihre Krankenkasse, wann dieser Dienst in Deutschland startet (geplant: 2026).
> 2. Achten Sie auf Informationen Ihrer Krankenkasse zur Teilnahme an MyHealth@EU.
> 3. Sie können der Weitergabe Ihrer Daten ins EU-Ausland widersprechen. Wenden Sie sich dazu an Ihre Krankenkasse.

### Sekundärnutzung: Forschung und Innovation

Der EHDS schafft einen rechtlichen Rahmen für die Nutzung von Gesundheitsdaten zu wissenschaftlichen, statistischen und regulatorischen Zwecken. Die Daten werden über nationale **Gesundheitsdaten-Zugangsstellen** (Health Data Access Bodies, HDAB) bereitgestellt. In Deutschland ist das [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit]] die zuständige Stelle.

Die Grundlagen für die Sekundärnutzung in Deutschland liegen im [[GDNG|Gesundheitsdatennutzungsgesetz (GDNG)]] von 2024, das den EHDS-Anforderungen entspricht.

### Zeitplan der Umsetzung

> [!interesse-compliance] Fristen für Hersteller und Anbieter
> Der EHDS verpflichtet EHR-System-Hersteller, ihre Produkte interoperabel zu machen. Die technischen Anforderungen werden in Durchführungsrechtsakten bis März 2027 festgelegt. Ab **März 2029** gilt die Pflicht zum grenzüberschreitenden Datenaustausch. Hersteller von Patientenaktensystemen (wie [[ePA]]-Modulen) sollten die EHDS-Interoperabilitätsvorgaben bereits in der Produktentwicklung berücksichtigen, um rechtzeitig zertifizierungsfähig zu sein.

| Meilenstein | Datum |
|---|---|
| EHDS in Kraft | März 2025 |
| Durchführungsrechtsakte der Kommission (technische Anforderungen) | März 2027 |
| Anwendung Primär- und Sekundärnutzungsregeln (erste Gruppe) | März 2029 |
| Vollständige Teilnahme aller Mitgliedstaaten | März 2031 |

Die Frist **März 2027** bezeichnet den Termin, bis zu dem die Europäische Kommission Durchführungsrechtsakte (Implementing Acts) zu den technischen Anforderungen der Primär- und Sekundärnutzung erlassen muss. Die **Pflicht zum tatsächlichen grenzüberschreitenden Datenaustausch** gilt für die Mitgliedstaaten erst ab März 2029 (vier Jahre nach Inkrafttreten). Die vollständige Teilnahme aller Mitgliedstaaten ist bis März 2031 (sechs Jahre nach Inkrafttreten) gefordert.

## Technische Details

### Architektur: MyHealth@EU

MyHealth@EU (früher eHealth Digital Service Infrastructure, eHDSI) ist die Infrastruktur für den primären Datenaustausch. Die technische Architektur besteht aus:

- **Nationalen Kontaktpunkten (NCPeH)**: Jedes EU-Land betreibt einen [[NCPeH]], der als nationaler Gateway zur MyHealth@EU-Infrastruktur dient.
- **Zentrales Infrastruktur-Gateway**: Verbindet die nationalen Kontaktpunkte der Mitgliedstaaten.
- **Gemeinsames Datenschema**: Auf Basis von **[[FHIR]]** R4 und [[IHE]]-Profilen für einheitliche Datenformate.

### Interoperabilitätsvorgaben

> [!interesse-technik] EHDS-Architektur für Entwickler
> Technisches Format: European EHR Exchange Format (EEHRxF) auf Basis von [[HL7]] [[FHIR]] R4. Terminologien: [[SNOMED CT]], [[LOINC]], ICD-10. Deutsche Umsetzung: [[NCPeH]] als Gateway; [[ePA]] als nationale Datenquelle. Implementierungsleitfäden werden von der Europäischen Kommission und [[IHE]] Europe erarbeitet. GitHub: [github.com/Xt-EHR](https://github.com/Xt-EHR) (Xt-EHR-Projekt für FHIR-Profile).

Der EHDS verpflichtet Mitgliedstaaten und Hersteller von Gesundheits-IT zur technischen Interoperabilität. Konkret:

- Elektronische Patientenakten-Systeme (EHR-Systeme) müssen die Interoperabilitätsvorgaben gemäß den Durchführungsrechtsakten der Kommission (erwartet bis 2027) umsetzen. Die Pflicht zur tatsächlichen grenzüberschreitenden Bereitstellung gilt ab März 2029.
- Das Format basiert auf dem **European Electronic Health Record Exchange Format (EEHRxF)**, der auf [[HL7]] [[FHIR]] und internationalen Terminologien ([[SNOMED CT]], [[LOINC]]) aufbaut.

### Datenschutz

Der EHDS steht im Einklang mit der [[DSGVO]] und dem [[BDSG]]. Für Gesundheitsdaten als besondere Kategorie nach Art. 9 DSGVO gelten besondere Schutzmaßnahmen:

- Für die Primärnutzung: Einwilligung des Versicherten oder gesetzliche Erlaubnis
- Für die Sekundärnutzung: Genehmigung durch die HDAB; keine direkte Identifizierbarkeit der Patienten
- Opt-out-Recht: Versicherte können der Nutzung ihrer Daten für Forschungszwecke widersprechen

> [!patientenrecht] Patientenrecht: Widerspruch gegen Forschungsnutzung (Opt-out)
> Ihre Gesundheitsdaten dürfen für Forschung genutzt werden. Das passiert automatisch, wenn Sie nicht widersprechen.
>
> **Sie möchten das nicht?** Sie haben das Recht zu widersprechen. Das nennt sich Opt-out.
>
> **So können Sie widersprechen:**
> 1. In Deutschland können Sie der Forschungsnutzung Ihrer ePA-Daten über die App Ihrer Krankenkasse widersprechen.
> 2. Der EHDS sieht zusätzlich ein EU-weites Widerspruchsrecht vor. Wie das genau funktioniert, teilt Ihre Krankenkasse mit.
>
> **Wichtig:** Eine Begründung für den Widerspruch ist nicht nötig. Bereits genutzte Daten können nicht rückwirkend gelöscht werden.

> [!interesse-patient] Ihre Rechte im EHDS
> Der EHDS gibt Ihnen das Recht, Ihre eigenen Gesundheitsdaten in einem maschinenlesbaren Format zu erhalten und sie in allen EU-Ländern nutzen zu lassen. Wenn Sie in einem anderen EU-Land behandelt werden, kann der dortige Arzt mit Ihrer Zustimmung auf Ihre Kerndaten zugreifen. Für die Nutzung Ihrer Daten in der Forschung haben Sie ein Widerspruchsrecht (Opt-out). Das Opt-out-Recht für die Forschungsnutzung über die [[ePA]] gilt auch im EHDS-Kontext.

### Bezug zur deutschen TI

Der [[NCPeH]] ist Deutschlands technischer Zugangspunkt zum EHDS-Ökosystem. Die [[gematik]] ist für Spezifikation und Produkttypzulassung des NCPeH zuständig; die [[DVKA]] (Deutsche Verbindungsstelle Krankenversicherung Ausland) betreibt ihn. Die [[ePA]] dient als Quelle für die exportierbaren Patientendaten.

## Verknüpfungen

- [[NCPeH]] (Deutschlands Zugangspunkt zur MyHealth@EU-Infrastruktur)
- [[ePA]] (Quelle der exportierten Patientendaten im EHDS-Kontext)
- [[E-Rezept]] (erster Dienst für den grenzüberschreitenden Austausch, ab Wave 10)
- [[GDNG]] (deutsches Pendant des EHDS für Sekundärnutzung)
- [[FHIR]] (technisches Datenformat für den EHDS-Austausch)
- [[DSGVO]] (Datenschutzrahmen, in den der EHDS eingebettet ist)
- [[IHE]] (Interoperabilitätsprofile für den grenzüberschreitenden Austausch)
- [[gematik]] (Spezifikation des deutschen NCPeH)

## Quellen

- [Europäische Kommission: European Health Data Space](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en)
- [Verordnung (EU) 2025/327 – EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32025R0327)
- [gematik: Grenzüberschreitende Nutzung (NCPeH)](https://www.gematik.de/anwendungen/ncpeh)
