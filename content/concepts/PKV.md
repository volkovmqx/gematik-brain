---
title: PKV
audience: [technical, non-technical]
tags: [konzepte, krankenversicherung, finanzierung, privatversicherung]
aliases: [Private Krankenversicherung, PKV-Verband, Verband der Privaten Krankenversicherung]
---

# PKV

Die Private Krankenversicherung (PKV) ist das risikobasierte, beitragsindividuelle Krankenversicherungssystem Deutschlands, dem rund 8,7 Millionen Vollversicherte angehören, und dessen Verband Gesellschafter der [[gematik]] GmbH ist.

## Erklärt für Einsteiger

Während bei der [[GKV]] alle in einen gemeinsamen Topf einzahlen und gleiche Leistungen bekommen, funktioniert die PKV wie eine individuelle Versicherung: Jeder zahlt einen Beitrag, der zu seinem persönlichen Gesundheitsrisiko passt. Junge, gesunde Menschen zahlen weniger; ältere oder vorerkrankte Personen zahlen mehr. Im Gegenzug gibt es oft mehr Leistungen und kürzere Wartezeiten. Beamte, Selbstständige und gut verdienende Angestellte können sich privat versichern.

## Überblick

In Deutschland sind rund 12 Prozent der Bevölkerung privat krankenversichert. Diese Gruppe umfasst Beamte, Selbstständige und Angestellte, die freiwillig in die PKV gewechselt sind. Das Gegenmodell zur PKV ist die [[GKV]] mit ihrem Solidarprinzip.

Die PKV wird durch das Versicherungsvertragsgesetz (VVG) und das Versicherungsaufsichtsgesetz (VAG) geregelt. Der Dachverband ist der **Verband der Privaten Krankenversicherung e. V. (PKV-Verband)**. Er vertritt die Interessen der privaten Kranken- und Pflegeversicherungen gegenüber Politik und Selbstverwaltung.

Der PKV-Verband hält seit dem 3. April 2020 einen Anteil von 7 Prozent an der [[gematik]] GmbH. Er war zuvor schon einmal Gesellschafter, hatte diesen Status aber zwischenzeitlich abgegeben. Mit der Wiederaufnahme in den Gesellschafterkreis trägt der PKV-Verband auch 7 Prozent der Finanzierung der gematik.

Die PKV spielt eine wachsende Rolle in der [[Telematikinfrastruktur]]. Das erklärte Ziel lautet: "ePA für alle" soll auch für Privatversicherte gelten, unabhängig vom Versicherungsstatus.

## Technische Details

### Besonderheiten im TI-Zugang

Der TI-Zugang für Privatversicherte unterscheidet sich strukturell von dem für GKV-Versicherte. Die wichtigste Differenz betrifft den Identifikator: GKV-Versicherte erhalten automatisch eine lebenslange [[KVNR|Krankenversicherungsnummer (KVNR)]]. Bei PKV-Versicherten ist keine automatische KVNR-Vergabe vorgesehen. Für TI-Anwendungen wie die [[ePA]] ist die KVNR jedoch als Schlüsselidentifikator erforderlich.

Der PKV-Verband forderte daher eine gesetzliche Regelung zur KVNR-Vergabe für Privatversicherte, um eine vollständige Einbindung in die TI zu ermöglichen.

### ePA für Privatversicherte

Die [[ePA]] ist gesetzlich primär als Pflichtleistung der [[GKV]] ausgestaltet. Privatversicherte haben keinen gesetzlichen Anspruch auf eine ePA über ihre PKV. Die privaten Krankenversicherer können ihren Versicherten jedoch freiwillig eine ePA anbieten.

Für die freiwillige ePA in der PKV gelten folgende Besonderheiten:

- Zugang ausschließlich über die Smartphone-App der jeweiligen privaten Krankenversicherung
- Authentifizierung über die [[Gesundheits-ID]], nicht über eine physische [[eGK]]
- Das Opt-out-Modell des DigiG gilt für GKV-Versicherte. Bei der PKV muss die Anlage einer ePA nach vorheriger Information und Widerspruchsmöglichkeit erfolgen.
- Der PKV-Verband hat angekündigt, bis Ende 2025 die große Mehrheit seiner Versicherten mit einer ePA auszustatten.

### Telematikinfrastruktur und PKV-Leistungserbringer

Ärzte und andere Leistungserbringer sind technisch nicht davon abhängig, ob ihr Patient GKV- oder PKV-versichert ist. Die TI-Komponenten (z.B. [[Konnektoren]], Kartenterminals, [[PVS]]) werden für alle Patienten genutzt. Abrechnungs- und Versorgungsunterschiede entstehen auf der organisatorischen, nicht auf der technischen Ebene.

### Pflegeversicherung

Neben der Krankenversicherung umfasst die PKV auch private Pflegeversicherungen. Diese sind das Pendant zur gesetzlichen Pflegeversicherung nach [[SGB-XI]]. Digitale Pflegeanwendungen ([[DiPA]]) sind primär auf die gesetzliche Pflegeversicherung ausgerichtet; die Erstattungspflicht für DiPA gilt für private Pflegepflichtversicherungen analog.

## Verknüpfungen

- [[GKV]] (das Gegenmodell mit Solidarprinzip, etwa 88 % der Bevölkerung)
- [[gematik]] (PKV-Verband hält 7 % der Anteile)
- [[Telematikinfrastruktur]] (PKV-Versicherte haben zunehmend Zugang)
- [[ePA]] (freiwilliges Angebot der PKV an Privatversicherte)
- [[Gesundheits-ID]] (Authentifizierungsweg für PKV-Versicherte ohne eGK)
- [[eGK]] (physische Karte nur für GKV-Versicherte obligatorisch)
- [[KVNR]] (fehlende automatische Vergabe als zentrales TI-Problem für PKV-Versicherte)
- [[DiPA]] (Erstattung durch private Pflegeversicherung analog zur sozialen Pflegeversicherung)
- [[SGB-XI]] (Rechtsgrundlage der Pflegeversicherung, auch relevant für private Pflegepflichtversicherung)
- [[BMG]] (Aufsicht über die GKV- und PKV-Regulierung)

## Quellen

- [gematik: Welcome PKV wird Gesellschafter der gematik (Pressemitteilung)](https://www.gematik.de/newsroom/news-detail/pressemitteilung-welcome-pkv-wird-gesellschafter-der-gematik)
- [PKV-Verband: Elektronische Patientenakte für Privatversicherte](https://www.pkv.de/wissen/versorgung/digitale-medizin/elektronische-patientenakte/)
- [Ärzteblatt: PKV kehrt in gematik-Gesellschafterkreis zurück](https://www.aerzteblatt.de/nachrichten/111700/PKV-kehrt-in-gematik-Gesellschafterkreis-zurueck)
- [gematik: Gesellschafter der gematik](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
