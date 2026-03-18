---
title: Apothekenrechenzentrum
audience: [technical, non-technical]
tags: [infrastruktur, apotheke, abrechnung, gkv, arz]
aliases: [ARZ, Apothekenrechenzentren, VDARZ]
maturity: setzling
---

# Apothekenrechenzentrum

Ein **Apothekenrechenzentrum (ARZ)** ist ein Abrechnungsdienstleister, der zwischen Apotheken und gesetzlichen Krankenkassen vermittelt: Er prüft, bündelt und übermittelt die monatlichen GKV-Abrechnungsdaten der Apotheken.

## Erklärt für Einsteiger

Wenn du in einer Apotheke ein Rezept einlöst, bekommt die Apotheke das Geld nicht sofort von deiner Krankenkasse. Am Ende des Monats schickt die Apotheke alle Rezeptdaten gesammelt an ein Rechenzentrum. Das Rechenzentrum prüft, ob alles stimmt, und schickt die Abrechnung dann weiter an die Krankenkasse. Erst dann überweist die Kasse das Geld. Das Apothekenrechenzentrum ist also wie ein Buchhalter und Kontrolleur in einem, der sicherstellt, dass die Abrechnung korrekt und vollständig ist.

## Überblick

Apothekenrechenzentren sind unverzichtbare Teile der deutschen Arzneimittelversorgungskette. Jede Apotheke, die GKV-Rezepte einlöst, ist auf ein ARZ angewiesen. Die ARZs sind keine staatlichen Stellen, sondern private Unternehmen, die im Wettbewerb zueinander stehen.

Der Branchenverband **VDARZ (Verband Deutscher Apothekenrechenzentren)** vertritt die Interessen der Rechenzentren gegenüber Politik und Krankenkassen. Die ARZs sind auch aktiv in die Einführung des [[E-Rezept]]s eingebunden, da sie die Abrechnungsinfrastruktur für die neuen digitalen Verordnungsformen bereitstellen.

### Kernaufgaben

- Entgegennahme der monatlichen Abrechnungsdaten aus [[AVS|Apothekenverwaltungssystemen (AVS)]]
- Prüfung der Daten auf formale und inhaltliche Korrektheit nach dem [[TA1]]-Format
- Bündelung der Abrechnungssätze und Weiterleitung an die zuständigen [[GKV]]-Krankenkassen
- Abwicklung von Gutschriften und Korrekturen bei Retaxationen
- Einzug von Herstellerrabatten nach § 130a [[SGB V]]

### Marktstruktur

Die wichtigsten Apothekenrechenzentren in Deutschland:

- **NOVENTI**: Marktführer (nach Branchenschätzungen ca. 50 Prozent der GKV-Rezepte), entstanden aus dem Zusammenschluss der Abrechnungszentren VSA (München), ALG (Datteln) und SARZ (Schwerin) zwischen 2016 und 2018. Betreibt auch das Softwarehaus Awinta.
- **ARZ Darmstadt**: Eigenständiges, apothekergetragenes Rechenzentrum; kooperiert seit 2018 mit NOVENTI bei bestimmten Softwareprojekten, ist aber rechtlich und operativ unabhängig.
- **ARZ Haan**: Mittelgroßer Anbieter, besonders im Rheinland verbreitet.
- **ARZ Wünsch (ARZW)**: Regionaler Anbieter.
- **DAD (Deutsches Apothekenrechenzentrum der ABDA)**: Dem Deutschen Apothekerverband nahestehend.
- **GRZ (Gesundheitsrechenzentrum)**: Weiterer Wettbewerber.

### Bedeutung im E-Rezept-Kontext

Mit der Einführung des [[E-Rezept]]s (Pflicht seit 1. Januar 2024) hat sich die technische Rolle der ARZs verändert. Die Verordnungsdaten kommen nun als [[FHIR]]-Ressourcen vom E-Rezept-Fachdienst der [[gematik]], nicht mehr als eingescannte Papierrezepte. Die ARZs haben ihre Systeme entsprechend angepasst: Sie nehmen FHIR-Dispensierdaten entgegen und übersetzen sie in die klassische [[TA1]]-Abrechnungsstruktur für die Krankenkassen.

## Technische Details

### Abrechnungsfluss

Der Abrechnungsfluss zwischen Apotheke, ARZ und Krankenkasse sieht im E-Rezept-Zeitalter wie folgt aus:

1. Die Apotheke ruft das E-Rezept-Token per FHIR vom E-Rezept-Fachdienst ab.
2. Das [[AVS]] erfasst die Dispensierung und erzeugt monatlich eine [[TA1]]-konforme Abrechnungsdatei.
3. Das ARZ empfängt die Datei, prüft sie auf [[TA1]]-Konformität und Plausibilität (PZN bekannt, Preis korrekt laut Lauertaxe, [[KVNR]] gültig).
4. Das ARZ bündelt die geprüften Sätze und übermittelt sie elektronisch an die jeweiligen Krankenkassen.
5. Die Krankenkasse erstattet den Apotheken über das ARZ den Betrag, abzüglich gesetzlicher Abschläge.

### Retaxation

Scheitert die Prüfung eines Abrechnungssatzes, gibt das ARZ ihn mit einem Fehlercode (Retaxationscode) an die Apotheke zurück. Die Apotheke kann den Fehler korrigieren oder den Satz streichen. Retaxationen sind ein häufiger Streitpunkt zwischen Apotheken und Krankenkassen, da sie zu Vergütungskürzungen führen.

### Herstellerrabatte nach § 130a SGB V

Ein weiterer Aufgabenbereich der ARZs ist der Einzug der gesetzlichen Herstellerrabatte. Pharmazeutische Unternehmen müssen den Krankenkassen nach § 130a [[SGB V]] Pflichtrabatte auf verschreibungspflichtige Arzneimittel gewähren. Die ARZs rechnen diese Abschläge direkt im Abrechnungsfluss ab und überweisen sie an die Krankenkassen.

### Datenformat TA1 und FHIR-Migration

Das aktuelle Datenformat für die GKV-Abrechnung ist [[TA1]] (Technische Anlage 1 zum Rahmenvertrag nach § 129 SGB V). Es ist eine zeichenbasierte Textdatei mit festen Satzstrukturen. Langfristig planen der [[GKV-Spitzenverband]] und die [[ABDA]], das Format auf [[FHIR]] umzustellen. Ein verbindlicher Migrationszeitplan besteht zum Stand 2026 noch nicht.

## Verknüpfungen

- [[TA1]] (Abrechnungsformat, das ARZs verarbeiten)
- [[AVS]] (Apothekenverwaltungssystem, das die TA1-Daten liefert)
- [[E-Rezept]] (neue Verordnungsquelle; Dispensierdaten fließen über AVS in die TA1-Abrechnung)
- [[GKV]] (Empfänger der ARZ-Abrechnungen und Zahler der Vergütung)
- [[ABDA]] (Deutscher Apothekerverband; Ko-Herausgeber der TA1)
- [[GKV-Spitzenverband]] (Ko-Herausgeber der TA1 gemeinsam mit dem DAV)
- [[PZN]] (Pharmazentralnummer; Pflichtfeld in jedem TA1-Abrechnungssatz)
- [[KVNR]] (Krankenversichertennummer; identifiziert den Versicherten in der TA1)
- [[FHIR]] (langfristiges Zielformat zur Ablösung der TA1)
- [[SGB V]] (§ 129 SGB V: Rechtsgrundlage für die ARZ-Abrechnung)

## Quellen

- [VDARZ: Verband Deutscher Apothekenrechenzentren](https://www.vdarz.de/)
- [ABDA: Apothekenabrechnung und TA1](https://www.abda.de/fuer-apotheker/apothekenbetrieb/arzneimittelversorgung/)
- [GKV-Spitzenverband: Rahmenvertrag § 129 SGB V](https://www.gkv-spitzenverband.de/krankenversicherung/arzneimittel/abgabe_von_arzneimitteln_in_apotheken/abgabe_von_arzneimitteln.jsp)
- [NOVENTI: Apothekenabrechnung](https://www.noventi.de/azh/abrechnung/)
- [ARZ Darmstadt: Rezeptabrechnung](https://www.arz-darmstadt.de/rezeptabrechnung/)
