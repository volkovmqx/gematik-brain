---
title: PDSG - Patientendaten-Schutz-Gesetz
audience: [technical, non-technical]
tags: [standards, gesetzgebung, epa, datenschutz, telematikinfrastruktur, sgb-v]
aliases: [PDSG, Patientendaten-Schutz-Gesetz, Patientendatenschutzgesetz]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, kasse, hersteller, regulierung, patient]
  interests: [compliance, patient]
maturity: wachsend
---

# PDSG - Patientendaten-Schutz-Gesetz

Das **Patientendaten-Schutz-Gesetz (PDSG)** ist ein deutsches Bundesgesetz von 2020, das den datenschutzrechtlichen Rahmen für die elektronische Patientenakte schuf und das Versichertenstammdatenmanagement modernisierte.

## Erklärt für Einsteiger

Wenn alle Gesundheitsdaten in einer digitalen Akte gespeichert werden sollen, braucht man klare Regeln: Wer darf reinschauen? Wer darf was eintragen? Was passiert, wenn Daten missbraucht werden? Das PDSG hat diese Regeln festgelegt. Es sagt zum Beispiel: Du als Patient entscheidest, wer deine Akte sehen darf. Und wenn eine Stelle die Sicherheitsregeln verletzt, drohen hohe Strafen.

## Überblick

Das PDSG (Gesetz zum Schutz elektronischer Patientendaten in der Telematikinfrastruktur) wurde am 3. Juni 2020 vom Deutschen Bundestag beschlossen und trat am 20. Oktober 2020 in Kraft. Es folgte auf das [[DVG]] von 2019 und bereitete die technische und rechtliche Infrastruktur für die flächendeckende Einführung der [[ePA]] vor.

Das PDSG verfolgte drei Hauptziele:

1. **Datenschutzrahmen für die ePA**: Klare gesetzliche Grundlagen für Zugriff, Verarbeitung und Löschung von ePA-Daten.
2. **Erweiterung der ePA-Inhalte**: Stufenweise Einführung von Dokumententypen ([[eImpfpass|Impfpass]], [[Mutterpass]], [[Kinderuntersuchungsheft]], Zahnbonusheft, Arztbriefe).
3. **VSDM-Modernisierung**: Neue Regeln für das Versichertenstammdatenmanagement, einschließlich Online-Prüfpflicht.

Das PDSG gilt als Zwischengesetz zwischen dem [[DVG]] (2019) und dem [[DigiG]] (2024). Während das DVG die ePA einführte, regelte das PDSG konkret, wie sie sicher betrieben werden soll. Das DigiG stellte das Modell dann auf Opt-out um.

> [!interesse-compliance] Compliance-Relevanz des PDSG
> Das PDSG legte die bis heute geltenden Grundregeln für die ePA-Sicherheit fest: Meldepflicht bei Sicherheitsvorfällen gegenüber der [[gematik]] (§ 307 SGB V), Bußgelder bis 300.000 Euro bei Verstößen und die Pflicht zur VAU-Architektur für Aktensystembetreiber. Diese Anforderungen gelten weiterhin, auch wenn das Opt-out-Modell erst durch das [[DigiG]] eingeführt wurde. Leistungserbringer und TI-Anbieter sollten prüfen, ob ihre Sicherheitskonzepte die PDSG-Anforderungen vollständig abdecken.

## Technische Details

### Änderungen im SGB V

Das PDSG ergänzte und änderte den elften Abschnitt des [[SGB-V]] (§§ 291a bis 395). Wichtige Regelungen:

- **§ 336 SGB V**: Pflicht der Krankenkassen, ihren Versicherten ab 2021 eine ePA bereitzustellen.
- **§ 337 SGB V**: Zugriff auf die ePA nur mit ausdrücklicher Einwilligung des Versicherten. Definiert die technischen Mechanismen für Zugriffssteuerung.
- **§ 341 SGB V**: Inhalte der ePA: Medikationsplan, Notfalldaten, Arztbriefe, Befunde, Impfdokumentation, [[Mutterpass]], [[Kinderuntersuchungsheft|Kinderuntersuchungshefte]], Zahnbonusheft.
- **§ 342 SGB V**: Stufenweise Einführung der ePA-Dokumententypen bis 2023.
- **§ 353 SGB V**: Besondere Zugriffsschutzregelungen für sensible Kategorien von Gesundheitsdaten (z.B. psychiatrische Diagnosen, Suchterkrankungen).
- **§ 307 SGB V**: Meldepflicht bei Sicherheitsvorfällen gegenüber der [[gematik]]. Bußgeld bis 300.000 Euro bei Verstößen.

### ePA unter dem PDSG: Opt-in-Modell

Das PDSG behielt das **Opt-in-Modell** für die ePA bei: Versicherte mussten aktiv der Anlage einer ePA zustimmen. Erst das [[DigiG]] von 2024 stellte auf Opt-out um.

> [!interesse-patient] Patientenrechte nach dem PDSG
> Das PDSG legte erstmals klare Patientenrechte für die digitale Akte fest: granulare Zugriffssteuerung (wer darf welche Dokumente sehen), das Recht auf Löschung einzelner Dokumente und die vollständige Kontrolle über die eigene Akte. Diese Rechte gelten bis heute. Das [[DigiG]] hat den Zugang vereinfacht (Opt-out statt Opt-in), aber die Datenschutzrechte aus dem PDSG blieben erhalten.

Das PDSG legte jedoch fest, dass Versicherte nach Anlage der Akte vollständige Kontrolle über ihre Daten haben:

- Granulare Zugriffssteuerung: Wer darf welche Dokumente sehen?
- Recht auf Löschung einzelner Dokumente
- Protokollierung aller Zugriffe
- Möglichkeit, die Akte jederzeit vollständig zu löschen

### VAU (Vertrauenswürdige Ausführungsumgebung)

Das PDSG führte die Anforderung an eine **[[VAU|Vertrauenswürdige Ausführungsumgebung (VAU)]]** für das ePA-Aktensystem ein. Die VAU stellt sicher, dass Verarbeitungen auf dem Server des Aktensystems datenschutzkonform ablaufen und auch der Betreiber des Aktensystems keinen unverschlüsselten Zugriff auf die Daten erhält. Diese Anforderung ist in § 341 SGB V verankert.

### VSDM-Modernisierung

Das PDSG modernisierte die Regeln für das [[VSDM|Versichertenstammdatenmanagement]]:

- Ärzte sind verpflichtet, bei jedem Patientenbesuch die Versichertenstammdaten online zu prüfen (Online-Prüfpflicht).
- Die Stammdaten auf der [[eGK]] müssen aktuell gehalten werden.
- Neuregelung der Datenfelder auf der eGK: Welche Daten dürfen gespeichert werden?

### Bußgeld- und Sicherheitsregelungen

Das PDSG verschärfte die Sanktionen für Sicherheitsverstöße in der TI:

- Leistungserbringer und Betreiber von TI-Diensten müssen Sicherheitsvorfälle unverzüglich der [[gematik]] melden.
- Bußgelder bis zu 300.000 Euro für unterlassene Meldung.
- Betreiber von Aktensystemen tragen direkte Verantwortung für den Schutz der gespeicherten Daten.

### Abgrenzung zu anderen Gesetzen

| Gesetz | Jahr | Bezug zur ePA |
|---|---|---|
| [[DVG]] | 2019 | Einführung der ePA als Kassenleistung (§ 33a SGB V) |
| PDSG | 2020 | Datenschutzrahmen, Opt-in, VAU, VSDM-Online-Prüfpflicht |
| [[DigiG]] | 2024 | Opt-out, Cloud-Nutzung, Beschleunigung |

### Verbindung zum IfSG

Das PDSG schuf laut [[IfSG|Infektionsschutzgesetz]] zusätzliche Rechtsgrundlagen für die Digitalisierung des Meldewesens über [[DEMIS]]. Es ergänzte die Grundlagen für elektronische Kommunikation zwischen Gesundheitsbehörden und TI-Systemen.

## Verknüpfungen

- [[ePA]]: Hauptgegenstand des PDSG, datenschutzrechtlicher Rahmen
- [[SGB-V]]: PDSG änderte und ergänzte zahlreiche SGB-V-Paragrafen
- [[DVG]]: Vorläufergesetz (2019), führte ePA als Kassenleistung ein
- [[DigiG]]: Nachfolgegesetz (2024), führte Opt-out für ePA ein
- [[VAU]]: Vertrauenswürdige Ausführungsumgebung, PDSG-Anforderung für Aktensysteme
- [[VSDM]]: Versichertenstammdatenmanagement, durch PDSG modernisiert
- [[gematik]]: Empfänger von Sicherheitsmeldungen nach PDSG
- [[DEMIS]]: Digitales Meldewesen, dessen rechtliche Grundlagen das PDSG stärkte
- [[IfSG]]: Infektionsschutzgesetz, ergänzt durch PDSG im Bereich digitales Meldewesen
- [[GKV]]: Krankenkassen mussten ab 2021 die ePA bereitstellen

## Quellen

- [Bundesministerium für Gesundheit: Patientendaten-Schutz-Gesetz](https://www.bundesgesundheitsministerium.de/themen/digitalisierung/patientendaten-schutz-gesetz.html)
- [SGB V §§ 336 ff. – Elektronische Patientenakte (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/sgb_5/__336.html)
- [Bundestag: Beschlussempfehlung PDSG (BT-Drs. 19/19525)](https://dip.bundestag.de/vorgang/patientendaten-schutz-gesetz/262090)
