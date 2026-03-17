---
title: DVPMG
audience: [technical, non-technical]
tags: [standards, gesetzgebung, dipa, pflege, telematikinfrastruktur]
aliases: [Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz, Digitale Versorgung und Pflege Modernisierungsgesetz]
---

# DVPMG

Das **DVPMG (Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz)** ist ein deutsches Bundesgesetz vom Juni 2021, das digitale Pflegeanwendungen einführte, die [[Gesundheits-ID]] als verpflichtende Kassenleistung festlegte und den Weg zur Ablösung des Hardware-Konnektors ebnete.

## Erklärt für Einsteiger

Das DVPMG ist das Nachfolgegesetz des [[DVG]] von 2019. Während das DVG digitale Apps für Kranke eingeführt hat, hat das DVPMG dasselbe für Pflegebedürftige gemacht: Wer einen Pflegegrad hat, kann nun auch digitale Helfer-Apps bekommen, die die Pflegekasse bezahlt. Außerdem hat das Gesetz festgelegt, dass Krankenkassen ihren Versicherten eine digitale Identität fürs Gesundheitswesen anbieten müssen, also eine Art Ausweis auf dem Handy für Arztbesuche.

## Überblick

Das DVPMG (Gesetz zur digitalen Modernisierung von Versorgung und Pflege) wurde am 3. Juni 2021 vom Bundestag verabschiedet und trat am 9. Juni 2021 in Kraft. Es ist das dritte große Digitalisierungsgesetz des [[BMG]] nach dem [[E-Health-Gesetz]] (2015) und dem [[DVG]] (2019).

Das Herzstück des DVPMG ist die Einführung der **[[DiPA]] (Digitale Pflegeanwendungen)**. Mit dem DVPMG wurden die §§ 40a und 40b im Elften Buch Sozialgesetzbuch ([[SGB-XI|SGB XI]]) neu eingefügt. Sie begründen den Rechtsanspruch Pflegebedürftiger auf DiPA und regeln das Prüfverfahren beim [[BfArM]]. DiPA sind das Pendant zu [[DiGA]] in der gesetzlichen Pflegeversicherung.

Ein weiteres zentrales Element ist die **[[Gesundheits-ID]]**: Das DVPMG verpflichtet Krankenkassen ab dem 1. Januar 2023, ihren Versicherten ergänzend zur [[eGK]] eine nicht kartengebundene digitale Identität anzubieten. Ab 2024 soll diese als vollständiger Versicherungsnachweis gelten. Damit wurde die gesetzliche Grundlage für die TI 2.0-Strategie der [[gematik]] gelegt.

Das DVPMG enthält außerdem den Auftrag an die [[gematik]], einen "Zukunftskonnektor oder Zukunftskonnektordienst" zu entwickeln. Dieser Auftrag führte letztlich zum [[TI-Gateway]] als Cloud-basierter Alternative zum Hardware-[[Konnektoren|Konnektor]]. Das Gesetz bereitete so den Übergang von einer karten- und hardwarebasierten zu einer softwarebasierten Telematikinfrastruktur vor.

## Technische Details

### Änderungen im SGB XI

Das DVPMG fügte folgende Paragraphen in das SGB XI ein:

- **§ 40a SGB XI (neu)**: Rechtsanspruch auf DiPA, Prüfverfahren beim [[BfArM]], Erstattung bis 50 Euro monatlich
- **§ 40b SGB XI (neu)**: Ergänzende Unterstützungsleistungen ambulanter Pflegeeinrichtungen im Zusammenhang mit DiPA
- **§ 78a SGB XI (neu)**: Verordnungsermächtigung für das Bundesministerium für Gesundheit, auf deren Basis die [[DiPAV]] erlassen wurde

### Änderungen im SGB V

Im Fünften Buch Sozialgesetzbuch (SGB V) erweiterte das DVPMG:

- **§ 291a SGB V**: Krankenkassen werden verpflichtet, eine digitale Identität (Gesundheits-ID) bereitzustellen
- **§ 33a SGB V**: Anspruch auf DiGA wurde ausgeweitet, insbesondere im Zusammenhang mit ergänzenden therapeutischen Leistungen
- **§ 291 SGB V**: Weitere Konkretisierungen zur TI-Pflichtanbindung

### Abgrenzung zum DVG

| Merkmal | [[DVG]] (2019) | DVPMG (2021) |
|---|---|---|
| Kernneuerung | [[DiGA]] in der GKV | [[DiPA]] in der Pflegeversicherung |
| Rechtsbuch | SGB V | SGB XI + SGB V |
| Identität | Keine Regelung | [[Gesundheits-ID]] als Pflicht |
| TI-Infrastruktur | Konnektor-Pflicht für Apotheken | Zukunftskonnektor-Auftrag |

### Bedeutung für die TI-Architektur

Der im DVPMG verankerte Auftrag zum Zukunftskonnektor war strategisch bedeutend. Er signalisierte, dass der Hardware-Konnektor mittelfristig durch Cloud-Dienste abgelöst werden soll. Neue Leistungserbringergruppen wie Pflegeeinrichtungen und therapeutische Berufe sollten nicht mehr verpflichtet werden, teure Hardware zu installieren, sondern sich über softwarebasierte Lösungen anbinden können.

## Verknüpfungen

- [[DiPA]]: Kernneuerung des DVPMG, digitale Anwendungen für Pflegebedürftige
- [[DiPAV]]: Ausführungsverordnung zur DiPA, auf Grundlage des § 78a SGB XI
- [[DVG]]: Vorläufer-Gesetz von 2019, auf dessen Strukturen das DVPMG aufbaut
- [[Gesundheits-ID]]: Im DVPMG als verpflichtende Kassenleistung festgelegt
- [[BfArM]]: Prüfbehörde für DiPA, analog zur DiGA-Prüfung
- [[DiGA]]: Schwesterkonzept in der Krankenversicherung, eingeführt durch DVG 2019
- [[eGK]]: Das DVPMG leitet die schrittweise Ablösung der Chipkarte durch die Gesundheits-ID ein
- [[TI-Gateway]]: Entstand aus dem im DVPMG erteilten Auftrag zum Zukunftskonnektor
- [[Konnektoren]]: Hardware-Konnektor, dessen Ablösung das DVPMG einleitete
- [[gematik]]: Erhielt durch das DVPMG den Auftrag zur Entwicklung des Zukunftskonnektors
- [[BMG]]: Erließ auf Grundlage des DVPMG die DiPAV als Ausführungsverordnung

## Quellen

- [BMG: DVPMG](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/guv-19-lp/dvpmg.html)
- [Gesetze im Internet: § 40a SGB XI](https://www.gesetze-im-internet.de/sgb_11/__40a.html)
- [Bundestag DIP: DVPMG](https://dip.bundestag.de/vorgang/gesetz-zur-digitalen-modernisierung-von-versorgung-und-pflege-digitale-versorgung-und-pflege-modernisierungs-gesetz/272822)
- [pflege.de: DVPMG Erklärung](https://www.pflege.de/pflegegesetz-pflegerecht/dvpmg/)
