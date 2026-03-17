---
title: DigiG - Digital-Gesetz
audience: [technical, non-technical]
tags: [standards, gesetzgebung, epa, telematikinfrastruktur, sgb-v]
aliases: [DigiG, Digitalgesetz, Digital-Gesetz, Gesetz zur Beschleunigung der Digitalisierung des Gesundheitswesens]
---

# DigiG - Digital-Gesetz

Das **Digital-Gesetz (DigiG)** ist ein deutsches Bundesgesetz von 2024, das das Opt-out-Modell für die elektronische Patientenakte einführte und die Digitalisierung des Gesundheitswesens in mehreren Bereichen beschleunigt.

## Erklärt für Einsteiger

Früher musste man aktiv "Ja" sagen, wenn man eine elektronische Patientenakte haben wollte. Kaum jemand tat das, also hatte kaum jemand eine ePA. Das DigiG hat das umgedreht: Seit Anfang 2025 bekommt jeder gesetzlich Versicherte automatisch eine ePA. Wer keine haben möchte, muss aktiv widersprechen. Das ist wie beim Organspende-Widerspruchsmodell, nur eben für Gesundheitsdaten.

## Überblick

Das DigiG (Gesetz zur Beschleunigung der Digitalisierung des Gesundheitswesens) wurde am 22. März 2024 im Bundesgesetzblatt verkündet und trat größtenteils am 26. März 2024 in Kraft. Es ist das bis dahin weitreichendste Digitalisierungsgesetz für das deutsche Gesundheitswesen und baut auf dem [[DVG]] (2019) und dem [[PDSG]] (2020) auf.

Das Herzstück des DigiG ist das **Opt-out-Modell für die [[ePA]]**: Ab dem 15. Januar 2025 wird für alle gesetzlich Versicherten automatisch eine elektronische Patientenakte angelegt. Wer keine haben möchte, muss der eigenen Krankenkasse gegenüber aktiv widersprechen. Damit soll die ePA-Nutzung von wenigen Prozent auf nahezu alle GKV-Versicherten gesteigert werden.

Neben der ePA enthält das DigiG Regelungen zu [[Telemedizin]], DiGA, Cloud-Nutzung und der Governance der [[gematik]].

## Technische Details

### Änderungen im SGB V

Das DigiG änderte zahlreiche Paragrafen im [[SGB-V]], darunter:

- **§ 335 SGB V (ePA Opt-out)**: Jeder GKV-Versicherte erhält automatisch eine ePA. Widerspruch ist gegenüber der Krankenkasse möglich.
- **§ 393 SGB V (Cloud-Nutzung)**: Leistungserbringer dürfen Gesundheitsdaten in zertifizierten Cloud-Diensten verarbeiten. Gefordert wird die C5-Zertifizierung des [[BSI]] (Typ 1 bis 1. Juli 2024, Typ 2 bis 1. Juli 2025).
- **§ 75b SGB V (IT-Sicherheit)**: Strengere IT-Sicherheitsanforderungen für Vertragsärzte, Umsetzung nach BSI-Richtlinien.
- **§ 139e SGB V (DiGA)**: Erweiterung der DiGA auf Risikoklasse IIb (Medizinprodukte für komplexere Behandlungen wie Telemonitoring).

### ePA-Opt-out-Modell

Vor dem DigiG galt ein **Opt-in-Modell**: Nur wer aktiv zustimmte, erhielt eine ePA. Die Nutzungsquote war gering.

Das DigiG hat auf ein **Opt-out-Modell** umgestellt:

1. Die Krankenkasse legt automatisch eine ePA an.
2. Versicherte werden über die Anlage informiert.
3. Wer widerspricht, bekommt keine ePA oder hat die Möglichkeit, eine bereits angelegte ePA zu löschen.
4. Der Widerspruch kann jederzeit ausgeübt werden.

Die technische Umsetzung startete am 15. Januar 2025 zunächst in Hamburg, Franken und Nordrhein als Pilotregionen.

### DiGA-Erweiterung auf Risikoklasse IIb

Das DigiG erlaubt, dass [[DiGA]] künftig auch Medizinprodukte der Risikoklasse IIb umfassen können, insbesondere für Telemonitoring-Anwendungen bei chronisch Kranken. Damit werden komplexere digitale Therapien erstattungsfähig. Die Aktivierungsfrist für die Kostenübernahme durch die Krankenkasse wurde auf zwei Werktage verkürzt.

### Telemedizin

Das DigiG hebt die bisherigen Mengenbeschränkungen für Videosprechstunden für Vertragsärzte auf. Außerdem wird "assistierte [[Telemedizin]]" eingeführt: Apotheken können Versicherten kostenlos bei Videosprechstunden unterstützen und die Technik bereitstellen.

### Digital Advisory Board bei der gematik

Das DigiG richtet einen **Digitalbeirat** bei der [[gematik]] ein. Dieser Beirat besteht aus Experten für Datenschutz, IT-Sicherheit und Digitalisierung. Er berät die gematik bei der Weiterentwicklung der [[Telematikinfrastruktur]].

### Abgrenzung zu anderen Gesetzen

| Gesetz | Jahr | Schwerpunkt |
|---|---|---|
| [[DVG]] | 2019 | DiGA eingeführt, TI-Pflichtanbindung für Apotheken/Kliniken |
| [[PDSG]] | 2020 | Datenschutzrahmen für ePA, VSDM-Modernisierung |
| [[DVPMG]] | 2021 | DiPA (Digitale Pflegeanwendungen) eingeführt |
| DigiG | 2024 | ePA opt-out, Cloud, DiGA-Erweiterung, Telemedizin |

## Verknüpfungen

- [[ePA]]: Hauptthema des DigiG, Opt-out-Modell ab 2025
- [[SGB-V]]: DigiG ändert zahlreiche SGB-V-Paragrafen
- [[DVG]]: Vorläufergesetz (2019)
- [[PDSG]]: Vorläufergesetz (2020)
- [[DiGA]]: Durch DigiG auf Risikoklasse IIb erweitert
- [[gematik]]: Erhält durch DigiG einen Digitalbeirat
- [[BSI]]: C5-Zertifizierung für Cloud-Nutzung nach § 393 SGB V
- [[GKV]]: Krankenkassen legen ePA für alle Versicherten an
- [[Telematikinfrastruktur]]: TI-Rollout durch DigiG beschleunigt

## Quellen

- [Bundesministerium für Gesundheit: FAQ zum Digital-Gesetz](http://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/digig/faq-digital-gesetz)
- [Digital-Gesetz - Gesetze im Internet (Bundesjustizministerium)](https://www.gesetze-im-internet.de/digig/)
- [gematik: ePA für alle – Informationen zum Rollout](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
