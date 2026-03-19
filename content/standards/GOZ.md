---
title: GOZ
audience: [technical, non-technical]
tags: [standards, abrechnung, zahnärzte, pkv, honorar]
aliases: [Gebührenordnung für Zahnärzte, Gebührenordnung Zahnärzte]
maturity: wachsend
---

# GOZ

Die **GOZ (Gebührenordnung für Zahnärzte)** ist die Rechtsverordnung, die die Vergütung privatärztlicher zahnärztlicher Leistungen in Deutschland regelt.

## Erklärt für Einsteiger

Wenn du als Privatpatient zum Zahnarzt gehst oder als Kassenpatient Leistungen bezahlst, die deine Kasse nicht erstattet (z.B. hochwertiger Zahnersatz), dann bestimmt die GOZ, wie viel der Zahnarzt verlangen darf. Die GOZ funktioniert wie eine Preisliste mit Punktwerten: Jede Behandlung hat eine Ziffer und einen Punktwert. Daraus ergibt sich ein Grundpreis. Der Zahnarzt kann je nach Aufwand einen Steigerungsfaktor anwenden.

## Überblick

Die GOZ ist eine Bundesrechtsverordnung. Rechtsgrundlage ist **§ 15 des Gesetzes über die Ausübung der Zahnheilkunde (Zahnheilkundegesetz, ZHG)**. Die aktuelle Fassung der GOZ trat am **1. Januar 2012** in Kraft (GOZ 2012). Sie enthält ein Gebührenverzeichnis mit Leistungsziffern und Punktwerten für alle privatärztlichen zahnärztlichen Leistungen.

Die GOZ gilt für:
- **Privatpatienten** (PKV): Volle Erstattung gemäß GOZ-Sätzen, abhängig vom Versicherungstarif.
- **GKV-Patienten bei privat zu vergütenden Leistungen**: Zahnarzt berechnet GOZ für Mehrkostentarife (z.B. Zuzahlung bei Zahnersatz, Individualprophylaxe für Erwachsene).

Parallel zur GOZ gilt für GKV-Leistungen der **[[BEMA]] (Bewertungsmaßstab zahnärztlicher Leistungen)**, der als Kollektivvertrag zwischen [[KZBV]] und [[GKV]]-Spitzenverband ausgehandelt wird. GOZ und BEMA schließen sich gegenseitig aus: Eine Leistung wird entweder nach BEMA (GKV) oder nach GOZ (PKV/Selbstzahler) abgerechnet.

### Verhältnis zu GOÄ und EBM

Die GOZ ist das zahnärztliche Pendant zur **[[GOÄ]]** (Gebührenordnung für Ärzte, für Humanmediziner). Der **[[EBM]]** (Einheitlicher Bewertungsmaßstab) ist das Gegenstück für GKV-Kassenärzte. Das Dreieck GOÄ, GOZ und EBM bildet das Abrechnungssystem im deutschen Gesundheitswesen.

| Gebührenordnung | Gilt für | Anwendungsbereich |
|---|---|---|
| [[EBM]] | GKV-Vertragsärzte (inkl. Zahnärzte) | Gesetzlich Versicherte (GKV) |
| [[GOÄ]] | Ärzte (nicht Zahnärzte) | Privatpatienten, Selbstzahler |
| GOZ | Zahnärzte | Privatpatienten, Selbstzahler |

## Technische Details

### Punktwert und Berechnung

Der GOZ-Punktwert beträgt seit Einführung der GOZ 1988 (und unverändert seit der Euro-Einführung) **5,62421 Cent**. Dieser Wert wurde bei der GOZ-Reform 2012 nicht erhöht, obwohl Zahnärztekammern und [[KZBV]] wiederholt eine Anpassung fordern. Er entspricht dem Euro-Äquivalent der ursprünglichen 11 Pfennig.

Die Gebühr berechnet sich nach der Formel:

> Gebühr = Punktzahl × Punktwert × Steigerungsfaktor

Der **Steigerungsfaktor** richtet sich nach Schwierigkeit, Zeitaufwand und Umständen der Leistung:

- Einfachsatz (1,0-fach): Standardleistung ohne besondere Umstände
- Regelhöchstsatz (2,3-fach): Typischer Faktor für reguläre Behandlungen
- Höchstsatz (3,5-fach): Nur bei besonders schwierigen oder zeitaufwendigen Behandlungen
- Überschreitung des 2,3-fachen Satzes: Muss schriftlich gegenüber dem Patienten begründet werden.

### GOZ-Nummernstruktur

Das GOZ-Gebührenverzeichnis gliedert sich in Abschnitte (A bis J):

- **Abschnitt A**: Allgemeine Leistungen (Untersuchung, Beratung)
- **Abschnitt B**: Prophylaktische Leistungen
- **Abschnitt C**: Konservierende Leistungen (Füllungen, Kariesbehandlung)
- **Abschnitt D**: Chirurgische Leistungen (Extraktionen)
- **Abschnitt E**: Parodontologische Leistungen
- **Abschnitt F**: Prothetische Leistungen (Zahnersatz)
- **Abschnitt G**: Kieferorthopädische Leistungen
- **Abschnitt H**: Eingliederung von Aufbissbehelfen
- **Abschnitt J**: Implantologische Leistungen (GOZ-Analogpositionen nach § 6 GOZ)

### GOZ und TI-Anwendungen

Obwohl die GOZ eine Abrechnungsverordnung ist, hat sie Berührungspunkte mit der TI-Infrastruktur:

- **[[HBA]]**: Zahnärzte benötigen einen eigenen Heilberufsausweis (HBA) für den Zugang zur [[Telematikinfrastruktur]]. HBA-Inhaber können E-Rezepte signieren, auf die [[ePA]] zugreifen und [[KIM]]-Nachrichten versenden. GOZ-Leistungen sind davon unabhängig, aber ein Zahnarzt mit HBA kann TI-Dienste und GOZ-Abrechnung parallel nutzen.
- **E-Rezept**: Zahnärzte können verschreibungspflichtige Arzneimittel per [[E-Rezept]] verordnen. Die Arzneimittelkosten werden nach [[EBM]] oder GOÄ erstattet; die zahnärztliche Leistung selbst nach BEMA oder GOZ.
- **[[ePA]]**: Patienten können in ihrer ePA auch zahnärztliche Befunde, Röntgenbilder und Behandlungspläne speichern. Ob diese nach GOZ oder BEMA abgerechnet wurden, ist für die ePA irrelevant.

### Aktuelle Reformdebatte

Die GOZ 2012 wurde zuletzt 2011/2012 umfassend aktualisiert. Seither haben sich Behandlungskosten erheblich erhöht, der Punktwert blieb aber unverändert. Die **[[KZBV]]** und die **Bundeszahnärztekammer (BZÄK)** fordern eine GOZ-Novelle, die den Punktwert anhebt und neue Leistungen (Digitale Abformung, Implantatprothetik) besser abbildet. Eine verbindliche Novelle ist zum Stand 2026 noch nicht beschlossen.

## Verknüpfungen

- [[GOÄ]] (Pendant für humanmedizinische Ärzte)
- [[EBM]] (Pendant für GKV-Kassenärzte und Kassenzahnärzte)
- [[KZBV]] (Kassenzahnärztliche Bundesvereinigung; vertritt Zahnärzte gegenüber GKV)
- [[PKV]] (Private Krankenversicherung; erstattet GOZ-Leistungen für Privatpatienten)
- [[HBA]] (Heilberufsausweis für Zahnärzte; Zugang zur TI)

## Quellen

- [KZBV: Gebührenordnung für Zahnärzte (GOZ 2012)](https://www.kzbv.de/wp-content/uploads/gebuehrenordnung_fuer_zahnaerzte_2012.pdf)
- [BZÄK: GOZ - Gebührenordnung für Zahnärzte](https://www.bzaek.de/goz/gebuehrenordnung-fuer-zahnaerzte-goz.html)
- [Wikipedia: Gebührenordnung für Zahnärzte](https://de.wikipedia.org/wiki/Geb%C3%BChrenordnung_f%C3%BCr_Zahn%C3%A4rzte)
- [PKV-Verband: GOZ Kommentar (Paragrafenteil)](https://www.pkv.de/fileadmin/user_upload/PKV/3_PDFs/GOAE-GOZ/GOZ_paragrafenteil.pdf)
