---
title: ABDA
audience: [technical, non-technical]
tags: [organisation, apotheke, interessenvertretung, artikelstamm]
aliases: [Bundesvereinigung Deutscher Apothekerverbände, ABDA, DAV, BAK]
relevance:
  sectors: [apotheke, regulierung, verband]
  interests: [compliance, business]
maturity: wachsend
---

# ABDA

Die **ABDA (Bundesvereinigung Deutscher Apothekerverbände)** ist der Spitzenverband der deutschen Apothekerschaft und zuständig für Standesrecht, Interessenvertretung und die Bereitstellung zentraler Datendienste für das Apothekenwesen.

## Erklärt für Einsteiger

Die ABDA ist für Apotheken das, was die Ärztekammer für Ärzte ist: der Dachverband, der die Interessen aller Apothekerinnen und Apotheker in Deutschland gegenüber Politik und Krankenkassen vertritt. Sie sorgt dafür, dass Apotheken einheitliche Regeln haben und stellt eine zentrale Datenbank bereit, in der alle Medikamente mit ihren Preisen und Eigenschaften gelistet sind. Ohne diese Datenbank könnte eine Apothekensoftware kein Rezept korrekt abrechnen.

## Überblick

Die ABDA wurde 1950 gegründet und hat ihren Sitz in Berlin. Sie bündelt die 17 Landesapothekerverbände und die 17 Landesapothekerkammern unter zwei organisatorischen Dächern: dem [[DAV|Deutschen Apothekerverband (DAV)]] für berufs- und wirtschaftspolitische Themen und der Bundesapothekerkammer (BAK) für Berufsrecht und Qualitätssicherung.

Im deutschen Gesundheitswesen nimmt die ABDA Aufgaben wahr, die für das Zusammenspiel von Apotheken mit der Telematikinfrastruktur direkt relevant sind. Sie handelt die Abrechnungsvereinbarungen mit den Krankenkassenverbänden aus und definiert die technischen Formate für den elektronischen Datenaustausch zwischen Apotheken und [[Apothekenrechenzentrum|Apothekenrechenzentren]].

Über ihre Tochtergesellschaft **ABDATA** (früher Teil von Avoxa, der Mediengruppe Deutscher Apotheker GmbH) betreibt die ABDA den **ABDA-Artikelstamm**. Dieser ist die zentrale Arzneimitteldatenbank Deutschlands und bildet das Herzstück aller [[AVS|Apothekenverwaltungssysteme]] (AVS). Die ABDA ist außerdem Herausgeberin der Lauer-Taxe, dem Standardwerk zur Arzneimittelpreisgestaltung.

### Rolle im Zertifizierungswesen

Die Prüfung von AVS-Software erfolgt über das **ADAS** (Apothekenrechenzentrum-Datenaustausch-Systemprüfstelle), das im Auftrag des DAV tätig wird. Apothekensoftware muss nachweisen, dass sie die technischen Anlagen zur Abrechnungsvereinbarung korrekt umsetzt, insbesondere die **[[TA1|Technische Anlage 1 (TA1)]]** für den Datenaustausch mit den Apothekenrechenzentren. Ohne diese Prüfung kann ein AVS nicht zur GKV-Abrechnung zugelassen werden.

> [!interesse-compliance]
> Apotheken sind verpflichtet, den ABDA-Artikelstamm in ihrer AVS-Software zu nutzen. Die 14-täglichen Updates zum 1. und 15. eines Monats müssen eingespielt werden. Fehlen aktuelle Preise oder Substitutionsinformationen, kann die Abrechnung mit Rechenzentren scheitern. Apotheken haften gegenüber Krankenkassen für korrekte Abrechnung nach TA1.

## Technische Details

### ABDA-Artikelstamm

Der ABDA-Artikelstamm ist die maßgebliche Produktdatenbank für das deutsche Apothekenwesen. Er wird von ABDATA gepflegt und enthält für alle zugelassenen Arzneimittel:

- **Pharmazentralnummer (PZN)**: eindeutige Produktkennung
- **Produktbezeichnung, Packungsgröße, Darreichungsform**: Stammdaten
- **Apothekenverkaufspreis (AVP), Großhandelspreis**: aktuelle Preise
- **Verschreibungspflicht, Erstattungsfähigkeit**: rechtliche Klassifizierung
- **Rabattverträge und Substitutionsinformationen**: für den Austausch nach § 129 [[SGB-V]]
- **Interaktionsdaten ([[ABDA-Datenbank]])**: Arzneimittelwechselwirkungen für die [[AMTS]]-Prüfung

Aktualisierungen erfolgen 14-täglich zum 1. und 15. eines Monats. AVS-Hersteller integrieren den Artikelstamm direkt in ihre Software. Er ist Pflichtbestandteil jedes zugelassenen AVS.

> [!praxis-tipp] Praxis-Tipp: Artikelstamm-Updates nicht verpassen
> Ihr AVS bezieht die Artikelstamm-Updates in der Regel automatisch. Aber: Automatisch bedeutet nicht immer zeitgleich.
>
> Was Apotheken sicherstellen sollten:
> 1. Prüfen Sie nach dem 1. und 15. jedes Monats, ob das Update eingespielt wurde. Im AVS finden Sie die aktuell verwendete Stammdatenversion in den Systemeinstellungen.
> 2. Wenn das Update fehlt: Verordnungen mit neuen Präparaten oder geänderten Rabattverträgen können nicht korrekt abgerechnet werden. Die Abrechnung beim Rechenzentrum schlägt fehl.
> 3. Vor langen Praxisschließungen (z.B. Urlaub): Prüfen Sie, ob in diesem Zeitraum ein Update fällig ist, und spielen Sie es vorher manuell ein.
>
> Häufiger Fehler: Das AVS läuft auf einem Computer ohne Internetverbindung oder mit abgelaufenen Zugangsdaten zum Update-Server. Dann kommen keine Updates an.

### Technische Anlage 1 (TA1)

Die **TA1** ist das standardisierte Dateiformat für die Rezeptabrechnung zwischen Apotheken und Apothekenrechenzentren. Sie definiert:

- Dateistruktur und Zeichensätze für Abrechnungsdatenpakete
- Pflichtfelder je Verordnungstyp (GKV, PKV, Hilfsmittel)
- Sonderkennzeichen für Betäubungsmittel, Rezepturen und Importe
- Protokoll für Rückmeldungen der Rechenzentren

Die TA1 ist als technische Anlage zur Vereinbarung über die Übermittlung von Daten nach § 300 [[SGB-V]] normiert und wird von den Spitzenverbänden der Krankenkassen gemeinsam mit dem DAV vereinbart und gepflegt.

### Zusammenspiel mit der Telematikinfrastruktur

Mit Einführung des [[E-Rezept|E-Rezepts]] müssen AVS-Systeme sowohl die FHIR-basierten TI-Schnittstellen als auch das TA1-Format beherrschen.

> [!interesse-business]
> Der ABDA-Artikelstamm ist eine Pflichtlizenz für jeden AVS-Hersteller. ABDATA lizenziert den Stamm an alle zugelassenen AVS-Hersteller. Für Hersteller neuer Apothekendigitalisierungslösungen ist die Einbindung des ABDA-Artikelstamms obligatorisch und kostenpflichtig. Die Integration muss Preis-, Substitutions- und Interaktionsdaten korrekt abbilden. Das [[E-Rezept]] liefert die Verordnungsdaten über den gematik-[[Fachdienst]] im [[FHIR]]-Format. Die Abrechnung gegenüber dem Apothekenrechenzentrum erfolgt weiterhin im TA1-Format. Das AVS übernimmt die Transformation zwischen beiden Formaten.

## Verknüpfungen

- [[AVS]]: Apothekenverwaltungssysteme nutzen den ABDA-Artikelstamm als Pflichtdatenquelle
- [[AMTS]]: Die ABDA-Datenbank liefert Interaktionsdaten für die Arzneimitteltherapiesicherheitsprüfung
- [[E-Rezept]]: Abrechnung eingelöster E-Rezepte erfolgt über TA1 an die Apothekenrechenzentren
- [[eMP]]: Der elektronische Medikationsplan nutzt ABDA-Daten für die Medikationsübersicht
- [[SGB-V]]: § 300 SGB V regelt den Datenaustausch, auf dem die TA1 basiert
- [[FHIR]]: Format der TI-seitigen E-Rezept-Schnittstelle; AVS transformiert zu TA1
- [[gematik]]: Prüft seit 2024 die TI-Konformität von AVS-Systemen ergänzend zur ABDA-Prüfung

## Quellen

- [ABDA: Über uns](https://www.abda.de/ueber-uns/die-abda/)
- [ABDATA: ABDA-Artikelstamm](https://abdata.de/produkte/abda-artikelstamm/)
- [GKV-Datenaustausch: Technische Anlage 1 (TA1)](https://www.gkv-datenaustausch.de/media/dokumente/leistungserbringer_1/apotheken/technische_anlagen_archiv/ta1/TA1_035_20210224.pdf)
- [Wikipedia: ABDA](https://de.wikipedia.org/wiki/ABDA_%E2%80%93_Bundesvereinigung_Deutscher_Apothekerverb%C3%A4nde)
