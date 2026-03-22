---
title: G-BA
audience: [technical, non-technical]
tags: [organisation, gkv, regulierung, selbstverwaltung, diga]
aliases: [Gemeinsamer Bundesausschuss, G-BA]
maturity: immergruen
relevance:
  sectors: [arztpraxis, krankenhaus, kasse, hersteller, startup, regulierung]
  interests: [compliance, business]
---

# G-BA

Der **Gemeinsame Bundesausschuss (G-BA)** ist das höchste Beschlussgremium der gemeinsamen Selbstverwaltung im deutschen Gesundheitswesen. Er legt fest, welche Leistungen die gesetzlichen Krankenversicherungen übernehmen müssen.

## Erklärt für Einsteiger

Die gesetzliche Krankenversicherung bezahlt nicht einfach alles, was ein Arzt verordnet. Jemand muss entscheiden: Welche Medikamente, Untersuchungen und Behandlungen sollen auf Kosten aller Versicherten verfügbar sein? Diese Entscheidung trifft der G-BA. Er ist wie ein Ausschuss aus Vertretern der Ärzte, Krankenkassen und Krankenhäuser, der diese Regeln aufstellt. Bei neuen Medikamenten oder digitalen Gesundheits-Apps prüft er, ob sie wirklich helfen, bevor die Kassen dafür zahlen müssen.

## Überblick

Der G-BA wurde 2004 durch das GKV-Modernisierungsgesetz gegründet und hat seinen Sitz in Berlin. Er ist eine Körperschaft des öffentlichen Rechts, also keine Behörde, sondern ein Organ der gemeinsamen Selbstverwaltung.

Rechtliche Grundlage ist § 91 [[SGB-V]]. Der G-BA erlässt Richtlinien, die für alle Vertragsärzte, Krankenhäuser und Krankenkassen verbindlich sind. Er hat damit faktisch normsetzende Wirkung, ähnlich wie ein Gesetz.

### Zusammensetzung

Der G-BA besteht aus:

- **Unparteiischen Mitgliedern**: Drei unparteiische Mitglieder (darunter der Vorsitzende) werden einvernehmlich von den Trägerorganisationen bestellt.
- **GKV-Seite**: Der [[GKV-Spitzenverband]] entsendet Vertreter.
- **Leistungserbringerseite**: [[KBV]] (Kassenärztliche Bundesvereinigung), [[KZBV]] (Kassenzahnärztliche Bundesvereinigung) und [[DKG|Deutsche Krankenhausgesellschaft (DKG)]] entsenden Vertreter je nach Thema.
- **Patientenvertreter**: Haben Mitberatungs- aber kein Stimmrecht.

### Kernaufgaben

> [!interesse-compliance] G-BA-Richtlinien als Rechtsrahmen
> G-BA-Richtlinien haben Gesetzeskraft für alle Vertragsärzte, Krankenhäuser und Krankenkassen (§ 91 [[SGB-V]]). Wer Leistungen erbringt oder Produkte (z.B. [[DiGA]]) in den GKV-Leistungskatalog bringen will, muss die jeweils geltenden G-BA-Richtlinien einhalten. Für [[DiGA]]-Hersteller: Der G-BA kann nach der BfArM-Aufnahme eine eigene Nutzenbewertung beauftragen, die über Dauerverordnungsfähigkeit entscheidet.

Der G-BA entscheidet über den Leistungskatalog der [[GKV]]:

- **Arzneimittel-Nutzenbewertung ([[AMNOG]])**: Nach der Markteinführung neuer Medikamente bewertet der G-BA deren Zusatznutzen gegenüber der Standardtherapie. Das Ergebnis bestimmt den Erstattungsbetrag.
- **Heilmittelrichtlinie**: Welche physio-, ergo- und logopädischen Leistungen werden erstattet?
- **Qualitätssicherung**: Der G-BA erlässt Richtlinien zur Mindestqualität von Operationen, Krebsbehandlungen und weiteren Bereichen.
- **Strukturierte Behandlungsprogramme ([[DMP]])**: Programme für chronisch Kranke (z.B. Diabetes, Asthma).
- **Digitale Gesundheitsanwendungen**: Seit 2020 ist der G-BA an der Nutzenbewertung von [[DiGA]] beteiligt.

## Technische Details

### Rolle bei DiGA und digitalen Anwendungen

Bei der Erstattung Digitaler Gesundheitsanwendungen ([[DiGA]]) greifen zwei parallele Prozesse:

1. **BfArM-Fast-Track**: Das [[BfArM]] prüft Sicherheit, Datenschutz und technische Qualität der DiGA und nimmt sie ins DiGA-Verzeichnis auf.
2. **G-BA-Nutzenbewertung**: Nach einer Übergangsphase kann der G-BA eine Nutzenbewertung für DiGA beauftragen, wenn der Zusatznutzen aus dem Fast-Track-Verfahren nicht ausreichend belegt ist.

Dieses zweistufige Verfahren war bei Einführung des DVG 2019 neu und international ohne Vorbild.

> [!interesse-business] DiGA-Markt und G-BA-Nutzenbewertung
> Hersteller von [[DiGA]] müssen nach der 12-monatigen Erprobungsphase im BfArM-Fast-Track einen positiven Zusatznutzennachweis erbringen. Der G-BA beauftragt dafür das [[IQWiG]]. Ohne nachgewiesenen Zusatznutzen wird der Erstattungsbetrag auf den Vergleichspreis gedeckelt. Stand 2026 stehen über 50 DiGA im offiziellen Verzeichnis. Davon haben etwa die Hälfte die permanente Aufnahme erreicht.

### AMNOG-Verfahren

Das [[AMNOG|Arzneimittelmarktneuordnungsgesetz (AMNOG, 2011)]] schrieb das [[Fruehe-Nutzenbewertung|frühe Nutzenbewertungsverfahren]] vor. Der Ablauf:

1. Pharmaunternehmen reicht Dossier ein (Zulassungstag)
2. [[IQWiG]] (Institut für Qualität und Wirtschaftlichkeit im Gesundheitswesen) bewertet den Zusatznutzen
3. G-BA fasst Beschluss (Bewertung und Einstufung)
4. GKV-Spitzenverband und Hersteller verhandeln Erstattungsbetrag

Ergibt die Nutzenbewertung keinen Zusatznutzen, darf das Medikament nicht teurer als die günstigste Vergleichstherapie sein.

### Qualitätssicherungs-Richtlinien

Der G-BA erlässt Mindestmengenregelungen für bestimmte Eingriffe: Kliniken dürfen komplexe Operationen (z.B. Bauchspeicheldrüsenkrebs, Knie-TEP) nur durchführen, wenn sie jährlich mindestens eine festgelegte Mindestanzahl erreichen. Ziel ist ein nachgewiesener Zusammenhang zwischen Übungshäufigkeit und Qualität.

### Richtlinien und TI-Relevanz

Einige G-BA-Richtlinien haben direkte Auswirkungen auf die Telematikinfrastruktur:

- **Häusliche Krankenpflege-Richtlinie**: Regelt die Verordnung von Pflegeleistungen, die zunehmend über [[E-Rezept]] und [[KIM]] abgewickelt werden.
- **Telemedizinische Leistungen**: Der G-BA hat Videosprechstunden und Telemonitoring in den Leistungskatalog aufgenommen, was Abrechnungsgrundlagen für TI-basierte Telemedizin schafft.
- **DiGA-Richtlinie**: Rahmenwerk für die Verordnungsfähigkeit und Nutzenbewertung Digitaler Gesundheitsanwendungen.

## Verknüpfungen

- [[GKV-Spitzenverband]] (Mitglied im G-BA auf Kassenseite)
- [[KBV]] (Mitglied im G-BA auf Seite der Kassenärzte)
- [[BfArM]] (für DiGA-Verfahren parallel zum G-BA zuständig)
- [[DiGA]] (G-BA ist an der Nutzenbewertung beteiligt)
- [[DiGAV]] (Verordnung, die das DiGA-Verfahren regelt; G-BA erlässt ergänzende Richtlinien)
- [[GKV]] (G-BA legt den Leistungskatalog für GKV-Versicherte fest)
- [[SGB-V]] (§ 91 SGB V: gesetzliche Grundlage des G-BA)
- [[E-Rezept]] (G-BA-Richtlinien bestimmen, was per Rezept verordnungsfähig ist)

## Quellen

- [G-BA: Wer wir sind](https://www.g-ba.de/ueber-den-g-ba/wer-wir-sind/)
- [G-BA: Aufgaben und Richtlinien](https://www.g-ba.de/richtlinien/)
- [BMG: Gemeinsamer Bundesausschuss](https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/selbstverwaltung/gemeinsamer-bundesausschuss.html)
- [Wikipedia: Gemeinsamer Bundesausschuss](https://de.wikipedia.org/wiki/Gemeinsamer_Bundesausschuss)
