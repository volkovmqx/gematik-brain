---
title: Sekundärnutzung
audience: [technical, non-technical]
tags: [konzept, datenschutz, forschung, gesundheitsdaten, gdng, ehds]
aliases: [Sekundärnutzung von Gesundheitsdaten, Sekundärdatennutzung, Sekundärnutzung Gesundheitsdaten]
relevance:
  sectors: [forschung, kasse, regulierung, krankenhaus, hersteller, startup, patient]
  interests: [compliance, business, patient]
maturity: setzling
---

# Sekundärnutzung

**Sekundärnutzung** bezeichnet die Weiterverarbeitung von Gesundheitsdaten zu anderen Zwecken als dem ursprünglichen Behandlungszweck, etwa für Forschung, Versorgungsplanung oder die Weiterentwicklung des Gesundheitssystems.

## Erklärt für Einsteiger

Wenn du beim Arzt bist, werden Daten über deine Erkrankung und Behandlung erfasst. Das nennt man Primärnutzung: Die Daten helfen direkt bei deiner Versorgung. Sekundärnutzung bedeutet, dass dieselben Daten später auch für andere Zwecke genutzt werden, zum Beispiel um Forschern zu helfen, eine neue Krankheit besser zu verstehen. Damit das erlaubt ist, gibt es strenge Regeln: Die Daten müssen meistens anonymisiert oder pseudonymisiert werden, und du hast als Patient das Recht, dieser Nutzung zu widersprechen.

## Überblick

Primärnutzung und Sekundärnutzung sind die zwei grundlegenden Kategorien im Umgang mit Gesundheitsdaten.

**Primärnutzung** meint den direkten Behandlungszweck: Ein Arzt liest die Krankengeschichte eines Patienten, um ihn besser behandeln zu können. Die Daten dienen der Person, von der sie stammen.

**Sekundärnutzung** meint jeden Verwendungszweck jenseits der Behandlung. Typische Anwendungsfälle:

- **Medizinische Forschung**: Analyse von Krankheitsverläufen, klinische Studien, Epidemiologie
- **Versorgungsforschung**: Wie gut funktioniert das Gesundheitssystem? Welche Therapien sind wirksam?
- **Öffentliche Gesundheit**: Seuchenüberwachung, Pandemiereaktionen
- **Produktentwicklung**: Pharma- und Medizintechnikunternehmen nutzen Daten für Zulassungsanträge
- **Qualitätssicherung**: Krankenhäuser und Kassen werten Daten aus, um Versorgungsqualität zu messen

Die Spannung zwischen dem gesellschaftlichen Nutzen der Forschung und dem Grundrecht auf informationelle Selbstbestimmung ist das Kernproblem der Sekundärnutzung. Alle gesetzlichen Regelungen versuchen, diesen Interessenkonflikt zu lösen.

> [!interesse-patient]
> Du kannst der Sekundärnutzung deiner ePA-Daten für Forschungszwecke widersprechen. Diesen Widerspruch (Opt-out) kannst du jederzeit über deine Krankenkasse oder die ePA-App einlegen. Die Daten werden dann nicht mehr für Forschung und Versorgungsplanung genutzt. Deine Behandlung wird dadurch nicht beeinträchtigt.

### Rechtliche Entwicklung in Deutschland

Die Sekundärnutzung war in Deutschland lange durch ein Flickenwerk von Einzelregelungen geregelt. Drei Entwicklungen haben das Feld neu strukturiert:

1. Das **[[GDNG]] (Gesundheitsdatennutzungsgesetz, 2024)** hat erstmals einen einheitlichen Rahmen für die Sekundärnutzung von GKV-Abrechnungsdaten und ePA-Daten geschaffen. Es richtet beim [[BfArM]] eine zentrale Datenzugangs- und Koordinierungsstelle ein.

2. Der **[[EHDS]] (Europäischer Gesundheitsdatenraum)** schafft ab 2025 eine europäische Rechtsgrundlage (Verordnung EU 2025/327) für die Sekundärnutzung über Ländergrenzen hinweg. Er unterscheidet explizit zwischen Primärnutzung und Sekundärnutzung (Kapitel zur Sekundärnutzung).

3. Das **[[GDVG]] (Gesundheitsversorgungsstärkungsgesetz)** und das **[[DigiG]] (Digitalgesetz)** haben die Opt-out-Regelung für die [[ePA]] eingeführt und damit die automatische Verfügbarkeit von ePA-Daten für Forschungszwecke als Standard gesetzt, sofern kein Widerspruch eingelegt wird.

> [!interesse-compliance]
> Einrichtungen, die Gesundheitsdaten für Sekundärzwecke nutzen wollen, brauchen eine explizite Rechtsgrundlage nach Art. 6 Abs. 1 DSGVO und Art. 9 Abs. 2 DSGVO (besondere Kategorien personenbezogener Daten). Das GDNG erlaubt die Nutzung pseudonymisierter Daten ohne Einwilligung für bestimmte Forschungszwecke. Für sensiblere Nutzungen ist ein [[Broad-Consent]] oder eine Einzelgenehmigung der zuständigen Ethikkommission erforderlich.

> [!frist-warnung] Frist-Warnung: Opt-out-Informationspflicht für Krankenkassen
> **Rechtsgrundlage:** § 342 Abs. 3 SGB V i.V.m. § 6 Abs. 1 GDNG
> **Frist:** Die Opt-out-Regelung gilt seit dem 15. Januar 2025. Das BMG erstattet dem Bundestag erstmals bis zum 30. Juni 2026 Bericht über die Umsetzung, einschließlich der Anzahl der Widersprüche und der Informationsmaßnahmen der Kassen.
> **Handlungsbedarf für Krankenkassen:** Prüfen Sie, ob der Widerspruchsprozess technisch und organisatorisch vollständig implementiert ist und ob die Versicherteninformation den gesetzlichen Vorgaben entspricht. Erfassen Sie die Nutzungsstatistiken für den Berichtszeitraum.
> **Handlungsbedarf für Forschungseinrichtungen:** Vor dem Abruf pseudonymisierter ePA-Daten beim FDZ Gesundheit ist sicherzustellen, dass kein wirksamer Widerspruch des betroffenen Versicherten vorliegt.

### Opt-out und Broad Consent

Für die Sekundärnutzung von ePA-Daten gilt in Deutschland das **Opt-out-Modell**: Gesundheitsdaten werden standardmäßig für Forschung und Versorgungsplanung bereitgestellt, sofern der Versicherte nicht widerspricht. Das unterscheidet sich vom Opt-in-Modell, bei dem eine aktive Einwilligung erforderlich wäre.

> [!patientenrecht] Patientenrecht: Widerspruch gegen Forschungsnutzung Ihrer Daten
> Ihre Gesundheitsdaten aus der ePA werden automatisch für Forschung genutzt. Das nennt sich Opt-out.
>
> **Sie möchten das nicht?** Sie können jederzeit widersprechen.
>
> So geht es:
> 1. Öffnen Sie die ePA-App Ihrer Krankenkasse
> 2. Suchen Sie den Bereich "Datenfreigabe" oder "Forschung"
> 3. Deaktivieren Sie die Freigabe für Forschungszwecke
> 4. Alternativ: Rufen Sie die Ombudsstelle Ihrer Krankenkasse an
>
> **Wichtig:** Der Widerspruch gilt jederzeit. Ihre Behandlung ändert sich dadurch nicht.

Daneben existiert das Konzept des **[[Broad-Consent]]**: Eine weit gefasste Einwilligungserklärung, die Patienten vor Behandlungsbeginn unterzeichnen und die eine breite Nutzung ihrer Daten für zukünftige Forschungszwecke erlaubt. Broad Consent wird vor allem in der [[Medizininformatik-Initiative]] und Universitätskliniken eingesetzt.

## Technische Details

> [!patientenrecht] Patientenrecht: Was passiert mit Ihren Daten?
> Bevor Forscher Ihre Daten sehen, werden sie technisch geschützt.
>
> **Was bedeutet das für mich?**
> - Ihr Name und Ihre Adresse werden entfernt oder ersetzt
> - Forscher sehen nur anonymisierte Auswertungen, keine einzelnen Patienten
> - Eine Genehmigung durch eine Ethikkommission ist Pflicht
>
> Ihre Krankenkasse oder das Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) muss jeden Datenzugang prüfen und genehmigen. Sie können beim BfArM nachfragen, welche Forschungsprojekte Daten erhalten haben.

### Datenschutzmechanismen

Sekundärnutzung setzt technische Schutzmaßnahmen voraus, die das Risiko der Reidentifizierung minimieren:

- **[[Pseudonymisierung]]**: Direkte Identifikatoren (Name, Adresse, Versichertennummer) werden durch einen Pseudonym-Schlüssel ersetzt. Die Zuordnung ist technisch möglich, aber kontrolliert.
- **Anonymisierung**: Alle identifizierenden Merkmale werden entfernt. Eine Zuordnung zum Individuum ist nicht mehr möglich. Anonymisierte Daten fallen nicht mehr unter die [[DSGVO]].
- **Differenzieller Datenschutz**: Ein mathematisches Verfahren, das statistische Rauschen zu Abfrageergebnissen addiert, um individuelle Datenpunkte zu schützen.
- **Sichere Datenräume (Trusted Execution Environments)**: Forscher stellen Abfragen an ein System, das die Daten nicht herausgibt, sondern nur Analyseergebnisse liefert.

### Institutionen und Datenzugangsstellen

| Institution | Rolle |
|---|---|
| [[BfArM]] | Zentrale Datenzugangs- und Koordinierungsstelle (GDNG, § 3) |
| [[Forschungsdatenzentrum-Gesundheit|FDZ Gesundheit]] | Datenzugangsstelle beim BfArM für GKV-Abrechnungsdaten |
| [[Medizininformatik-Initiative]] | Vernetzt Universitätskliniken für Sekundärnutzung |
| [[EHDS]]-Zugangsstellen | Ab 2025 nationale Anlaufstellen für grenzüberschreitende Sekundärnutzung |
| [[BfDI]] | Datenschutzaufsicht für bundesbehördliche Datenzugangsstellen |

> [!klinik-integration] Klinik-Integration: Datenlieferung an FDZ und Klinisches Krebsregister
> Ab Oktober 2025 sind Krankenhäuser verpflichtet, die ePA aktiv zu befüllen. Damit werden Kliniken zur zentralen Datenquelle für die Sekundärnutzung.
>
> **FDZ Gesundheit:** Ab Oktober 2026 stehen ePA-Daten pseudonymisiert im FDZ zur Forschung bereit. Das [[KIS]] muss ePA-konforme FHIR-Ressourcen erzeugen. Klären Sie mit Ihrem KIS-Hersteller (SAP ISH, Orbis, iMedOne, Dedalus), ob die ePA-Exportschnittstelle bereits zertifiziert ist.
> **Klinisches Krebsregister:** § 4 GDNG sieht die Verknüpfung von FDZ-Daten mit klinischen Krebsregistern der Länder vor. Onkologische Krankenhäuser, die Daten an das jeweilige Landeskrebsregister melden, sind Teil dieser Sekundärnutzungs-Kette. Die Meldepflicht liegt beim Krankenhaus, die technische Übermittlung erfolgt häufig über [[KIM]] oder direkte KIS-Schnittstellen.
> **Broad Consent im KIS:** Universitätskliniken und Häuser der Maximalversorgung sollten prüfen, ob ihr bestehendes Broad-Consent-Verfahren (z.B. aus der [[Medizininformatik-Initiative]]) mit den GDNG-Anforderungen kompatibel ist. Die Dokumentation der Einwilligung muss KIS-seitig revisionssicher abgebildet sein.

> [!frist-warnung] Frist-Warnung: EHDS-Pflichten und GDNG-Datenzugang
> **Rechtsgrundlage:** Verordnung (EU) 2025/327 (EHDS-VO), Art. 45 ff. (Sekundärnutzung); § 3 GDNG i.V.m. §§ 303a ff. SGB V; Art. 9 Abs. 2 DSGVO
> **Frist:** Die EHDS-Verordnung ist am 26. März 2025 in Kraft getreten. Das GDNG gilt seit dem 31. März 2024 vollständig.
> **Handlungsbedarf:** Einrichtungen, die Gesundheitsdaten für Sekundärzwecke nutzen oder bereitstellen, müssen prüfen, ob sie als Dateninhaber oder Datenzugangsantragsteller im Sinne der EHDS-VO gelten. Datenzugangsanträge beim BfArM (FDZ Gesundheit) sind nach dem formalisierten Verfahren gemäß § 3 GDNG zu stellen. Die Rechtsgrundlage nach Art. 9 Abs. 2 DSGVO muss vor jeder Sekundärnutzung schriftlich dokumentiert vorliegen.
> **Bei Nichtbeachtung:** Datenverarbeitung ohne gültige Rechtsgrundlage für besondere Kategorien personenbezogener Daten kann Bußgelder bis zu 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes nach sich ziehen (Art. 83 Abs. 4 DSGVO).

### Rechtsgrundlagen im Detail

Die wichtigsten gesetzlichen Grundlagen für die Sekundärnutzung in Deutschland:

- **[[DSGVO]] Art. 9 Abs. 2 lit. i und j**: Erlaubt Verarbeitung besonderer Kategorien (Gesundheitsdaten) für Forschung und Statistik im öffentlichen Interesse.
- **[[BDSG]] § 27**: Nationale Ausgestaltung der Forschungsausnahme.
- **[[GDNG]]**: Rahmengesetz für die gemeinwohlorientierte Sekundärnutzung in Deutschland ab 2024.
- **[[SGB-V]] § 303a ff.**: Datentransparenzverfahren und Nutzung von GKV-Daten.
- **[[EHDS]]-Verordnung (EU 2025/327)**: Europäischer Rahmen für grenzüberschreitende Sekundärnutzung.

> [!interesse-technik]
> Das FDZ Gesundheit beim BfArM stellt pseudonymisierte GKV-Abrechnungsdaten bereit. Der Datenzugang erfolgt über ein formalisiertes Antragsverfahren. Für die ePA-Forschungsdaten plant die gematik eine Schnittstelle, die pseudonymisierte FHIR-Ressourcen für zugelassene Forschungsvorhaben exportiert. Technische Grundlage ist die FHIR-basierte ePA-Infrastruktur (ePA for all ab 2025).

## Verknüpfungen

- [[GDNG]] (Gesundheitsdatennutzungsgesetz: gesetzlicher Rahmen für Sekundärnutzung in Deutschland)
- [[EHDS]] (Europäischer Gesundheitsdatenraum: EU-Rahmen für primäre und sekundäre Nutzung)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ Gesundheit beim BfArM: zentrale Datenzugangsstelle)
- [[Pseudonymisierung]] (technische Schutzmaßnahme für Sekundärnutzung)
- [[Broad-Consent]] (weit gefasste Einwilligungserklärung als Rechtsgrundlage)
- [[Opt-Out-ePA]] (Widerspruchsrecht gegen Sekundärnutzung von ePA-Daten)
- [[ePA]] (Primärquelle für Gesundheitsdaten im deutschen System)
- [[BfArM]] (Betreiber der zentralen Datenzugangs- und Koordinierungsstelle)
- [[BfDI]] (Datenschutzaufsicht für bundesbehördliche Stellen)
- [[DSGVO]] (datenschutzrechtliche Grundlage für Sekundärnutzung)
- [[Medizininformatik-Initiative]] (vernetzt Universitätskliniken für Sekundärnutzung)
- [[Gesundheitsdatenraum]] (übergreifendes Konzept für Datennutzung im Gesundheitswesen)

## Quellen

- [BMG: Gesundheitsdatennutzungsgesetz (GDNG)](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/gesundheitsdatennutzungsgesetz.html)
- [GDNG auf Gesetze im Internet](https://www.gesetze-im-internet.de/gdng/BJNR0660B0024.html)
- [BfDI: Gesundheitsdaten und Datenschutz](https://www.bfdi.bund.de/DE/Fachthemen/Inhalte/Gesundheit/Gesundheit_node.html)
- [BMG: Europäischer Gesundheitsdatenraum (EHDS)](https://www.bundesgesundheitsministerium.de/themen/internationale-gesundheitspolitik/europa/europaeische-gesundheitspolitik/ehds)
