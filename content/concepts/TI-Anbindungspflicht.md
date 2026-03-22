---
title: TI-Anbindungspflicht
audience: [technical, non-technical]
tags: [konzept, recht, sgbv, leistungserbringer, ti, pflicht]
aliases: [TI-Anbindungspflicht, Anbindungspflicht TI, Pflicht zur TI-Anbindung]
relevance:
  sectors: [arztpraxis, zahnarzt, apotheke, krankenhaus, psychotherapie, pflege, therapie, hebamme, kasse]
  interests: [compliance, business]
maturity: setzling
---

# TI-Anbindungspflicht

Die **TI-Anbindungspflicht** ist die gesetzliche Verpflichtung aller zugelassenen Leistungserbringer im deutschen Gesundheitswesen, sich an die [[Telematikinfrastruktur]] anzubinden und die verpflichtenden TI-Anwendungen zu nutzen, geregelt in §§ 291 ff. SGB V.

## Erklärt für Einsteiger

In Deutschland arbeiten alle Ärzte, Zahnarztpraxen, Apotheken und Krankenhäuser mit einem gemeinsamen, sicheren Datennetz zusammen: der Telematikinfrastruktur. Die TI-Anbindungspflicht legt fest, dass alle, die mit der gesetzlichen Krankenversicherung abrechnen, dieses Netz auch tatsächlich nutzen müssen. Wer sich nicht anschließt oder die Mindestanforderungen nicht erfüllt, muss finanzielle Kürzungen hinnehmen. Es ist ein bisschen wie die Pflicht, ein Kassenbon-System zu nutzen: Wer teilnehmen will, muss die technische Infrastruktur einsetzen.

## Überblick

Die gesetzliche Grundlage für die TI-Anbindungspflicht findet sich im **Fünften Buch Sozialgesetzbuch (SGB V)**:

- **§ 291 SGB V**: Regelungen zur elektronischen Gesundheitskarte ([[eGK]]) als Voraussetzung für die Abrechnung
- **§ 291a SGB V**: Inhalt der eGK (gespeicherte Daten und Anwendungen auf der Karte)
- **§ 291b SGB V**: Verfahren zur Nutzung der eGK als Versicherungsnachweis (inkl. VSDM-Sanktionen bei Nichterfüllung)
- **§ 306 ff. SGB V**: Telematikinfrastruktur und Anwendungen (eingeführt durch PDSG 2020, ersetzt frühere TI-Regelungen in § 291a a.F.)
- **§ 360 SGB V**: Pflicht zur elektronischen Verordnung (E-Rezept-Pflicht ab 1. Januar 2024)
- **§ 341 SGB V**: Sanktionen bei fehlender ePA-Anbindung (Honorarkürzung von 1 %)
- **§ 347 SGB V**: Pflicht zur ePA-Befüllung ab 1. Oktober 2025

Alle **Vertragsärzte**, **Vertragszahnärzte**, **Psychotherapeuten**, **Krankenhäuser** und **Apotheken** (jeweils im Rahmen ihrer SGB-V-Zulassung) sind zur TI-Anbindung verpflichtet.

### Abgestuftes Pflichtensystem

Die TI-Anbindungspflicht ist nicht einheitlich, sondern richtet sich nach dem Leistungserbringer und der Anwendung:

| Leistungserbringer | Pflichtige Anwendungen |
|---|---|
| Vertragsarztpraxen | VSDM, KIM, ePA, E-Rezept, eAU, eMP (ab Okt. 2026) |
| Zahnarztpraxen | VSDM, KIM, ePA, E-Rezept |
| Apotheken | VSDM, ePA, E-Rezept-Einlösung |
| Krankenhäuser | VSDM, KIM, ePA (ab Okt. 2025), E-Rezept |
| Psychotherapeuten | VSDM, KIM, ePA, E-Rezept |
| Pflegeeinrichtungen | KIM (ab Rollout), ePA |

> [!praxis-tipp] Praxis-Tipp: TI-Pauschale nicht verlieren
> Die TI-Pauschale erstattet Ihnen die laufenden TI-Kosten. Sie wird nur gezahlt, wenn alle Pflichtanwendungen aktiv genutzt werden.
>
> In Ihrer Praxis bedeutet das: Fehlt der Nachweis für eine Anwendung, wird die TI-Pauschale um 50 % gekürzt. Fehlen mehrere, entfällt sie vollständig.
>
> Häufiger Fehler: eAU oder ePA ist im PVS zwar installiert, aber nicht aktiviert oder nie genutzt. Das zählt als Nichterfüllung.
> Lösung: Bitten Sie Ihre MFA, einmal pro Quartal zu kontrollieren, ob eAU-Ausstellungen, KIM-Nachrichten und ePA-Uploads im PVS protokolliert werden.

### Sanktionen bei Nichtanbindung

Leistungserbringer, die die TI-Anbindungspflicht nicht erfüllen, erhalten Honorarabzüge:

- **Ärzte und Psychotherapeuten**: 1 % Abzug auf das Honorar pro Quartal bei Nichterfüllung einzelner Pflichten (z.B. keine E-Rezept-Ausstellung, keine ePA-Befüllung)
- **Apotheken**: Sanktionsmechanismen über die Apothekenrechenzentren
- **Krankenhäuser**: Finanzielle Einbußen bei fehlendem zertifiziertem ePA-Modul im [[KIS]] ab April 2026

> [!klinik-integration] Klinik-Integration: Krankenhaus-Sanktionen und ePA-Modul-Pflicht
> **Frist 1. April 2026:** Ab diesem Datum müssen Krankenhäuser ein von der gematik zertifiziertes ePA-Modul im [[KIS]] im Betrieb haben. Ohne dieses Modul drohen Einbußen bei der Krankenhausfinanzierung. Anders als bei Vertragsärzten (KV-Honorar) betrifft die Sanktion hier die DRG-Abrechnung über die Krankenkassen.
>
> **Was zertifiziert sein muss:** Das KIS-Modul muss ePA-Dokumente lesen und schreiben können, mindestens als PDF/A-Dokumente (ePA 3.0). FHIR-strukturierte Dokumente (ePA 3.1/3.2) sind für die Zertifizierung noch nicht verpflichtend, aber strategisch sinnvoll für die Laborintegration ab 2027.
>
> **Projektplanung:** Der Zertifizierungsprozess läuft beim KIS-Hersteller, nicht beim Krankenhaus selbst. Klären Sie mit Ihrem Hersteller, ob und wann das eingesetzte KIS die gematik-Bestätigung für das ePA-Modul erhält. Planen Sie mindestens 3 Monate für Rollout, Test und Mitarbeiterschulung ein.

> [!frist-warnung] Frist-Warnung: ePA-Befüllungspflicht und Honorarkürzung ab 1. Januar 2026
> **Rechtsgrundlage:** § 341 Abs. 4 SGB V i.V.m. § 347 SGB V (Digital-Gesetz, BGBl. 2024 I Nr. 101)
> **Frist:** Seit 1. Oktober 2025 gilt die Befüllungspflicht. Seit 1. Januar 2026 greifen die Sanktionen: Praxen, die ePA-fähige Technik nicht einsetzen, erhalten 1 % Honorarkürzung pro Quartal sowie eine auf 50 % halbierte TI-Pauschale.
> **Handlungsbedarf:** Leistungserbringer müssen sicherstellen, dass ihr [[PVS]] bzw. [[KIS]] das ePA-Modul (mindestens ePA 3.0) aktiviert hat und tatsächlich genutzt wird. Bloße Installation ohne Nutzungsnachweis gilt als Nichterfüllung. Die [[Kassenärztliche-Vereinigung]] prüft die Erfüllung quartalsweise.
> **Bei Nichtbeachtung:** Honorarkürzung von 1 % des Quartalshonorars sowie halbe TI-Pauschale bis zur nachgewiesenen Erfüllung der Pflicht.

> [!interesse-compliance] Überblick: Was ist wann Pflicht?
> Wichtige Pflichttermine für alle Leistungserbringer:
> - **1. Januar 2024**: E-Rezept-Pflicht für Vertragsärzte (§ 360 SGB V)
> - **1. Oktober 2025**: ePA-Pflicht für alle medizinischen Einrichtungen (§ 347 SGB V)
> - **1. April 2026**: Krankenhäuser müssen zertifiziertes ePA-Modul im KIS haben
> - **Oktober 2026**: eMP (elektronischer Medikationsplan) flächendeckend verpflichtend
> - **1. Januar 2026**: GesundheitsID muss als Versicherungsnachweis akzeptiert werden (§ 15 Abs. 2 SGB V)
>
> Bei Nichterfüllung drohen Honorarkürzungen von bis zu 1 % pro Quartal. Prüfen Sie regelmäßig, ob Ihre PVS- und KIM-Software aktuell ist und welche Pflichtmodule noch fehlen.

> [!frist-warnung] Frist-Warnung: eMP-Pflicht für Vertragsarztpraxen ab Oktober 2026
> **Rechtsgrundlage:** § 31a SGB V i.V.m. gematik-Festlegungen zum elektronischen Medikationsplan (eMP) in der [[ePA]]
> **Frist:** Ab Oktober 2026 wird der elektronische Medikationsplan (eMP) vollständig aus der [[eGK]] in die [[ePA]] überführt. Vertragsarztpraxen sind ab diesem Zeitpunkt verpflichtet, den eMP ausschließlich über die ePA zu führen und zu aktualisieren.
> **Handlungsbedarf:** Praxen müssen prüfen, ob ihr [[PVS]] den ePA-basierten eMP unterstützt. Der bisherige eMP auf der eGK wird ab Oktober 2026 nicht mehr fortgeführt. Das Vorhandensein der eMP-Funktion im PVS ist Voraussetzung für die volle monatliche TI-Pauschale gemäß Finanzierungsvereinbarung.
> **Bei Nichtbeachtung:** Entfall der eMP-Pauschale; bei genereller Nichterfüllung der ePA-Pflicht droht zusätzlich die 1 %-Honorarkürzung nach § 341 SGB V.

### Technische Voraussetzungen

Für die TI-Anbindung sind in der Praxis folgende Komponenten erforderlich:

- **[[eGK]]-Lesegerät (Kartenterminal)**: Für die VSDM-Pflicht (Versicherungsstammdatenmanagement)
- **[[SMC-B]]**: Institutionskarte für die Einrichtung
- **[[HBA]]**: Heilberufsausweis für jeden Leistungserbringer (für ePA und E-Rezept-Signatur)
- **Konnektor oder [[TI-Gateway]]**: Technischer Zugang zur TI
- **[[KIM]]-Adresse**: Für sichere elektronische Kommunikation
- **Zertifiziertes [[PVS]] oder [[KIS]]**: Mit aktuellen TI-Modulen

Mit der Umstellung auf TI 2.0 kann der Hardware-Konnektor durch ein cloudbasiertes [[TI-Gateway]] ersetzt werden.

> [!klinik-integration] Klinik-Integration: TI-Infrastruktur für Krankenhäuser
> **Skalierungsanforderungen:** Ein Krankenhaus mit mehreren Standorten und Stationen benötigt eine deutlich andere TI-Architektur als eine Einzelpraxis. Pro Standort ist mindestens ein zertifizierter Konnektor oder ein [[TI-Gateway]]-Anschluss erforderlich. Bei hohem VSDM-Aufkommen (Zentralaufnahme, Notaufnahme) empfehlen sich mehrere Kartenterminals und eine redundante Konnektor-Anbindung, da ein Ausfall die Patientenaufnahme direkt blockiert.
>
> **KIS-Integration:** Das [[KIS]] (SAP IS-H, Orbis/Dedalus, iMedOne, Nexus) muss über ein zertifiziertes ePA-Modul verfügen. Die Pflichtfrist für Krankenhäuser ist der 1. April 2026. Die KIS-Hersteller liefern das ePA-Modul als Update; planen Sie für Rollout und Test mindestens 8-12 Wochen ein. SMC-B-Karten müssen für jede organisatorische Einheit (z.B. jede Fachabteilung mit eigener VSDM-Prüfung) vorhanden sein.
>
> **TI 2.0 / TI-Gateway:** Für Krankenhaus-Rechenzentren kann das cloudbasierte [[TI-Gateway]] den Hardware-Konnektor ablösen. Dies vereinfacht die zentrale Verwaltung mehrerer Standorte, setzt aber eine stabile Internetanbindung und entsprechende Firewall-Konfiguration voraus. Sprechen Sie mit Ihrem KIS-Hersteller, ob das TI-Gateway-Modell bereits unterstützt wird.

> [!praxis-tipp] Praxis-Tipp: TI-Komponenten auf ECC-Stand bringen
> Seit 1. Januar 2026 dürfen nur noch Konnektoren mit ECC-Verschlüsselung betrieben werden. RSA-Konnektoren sind abgelaufen. SMC-B- und HBA-Karten mit RSA-Zertifikaten sind noch bis 30. Juni 2026 nutzbar.
>
> Checkliste für Ihre Praxis:
> 1. Konnektor: Prüfen Sie im Konnektor-Webinterface, ob die Firmware ECC unterstützt. Bei Unsicherheit: Hersteller oder IT-Dienstleister fragen.
> 2. SMC-B und HBA: Prüfen Sie das Ablaufdatum auf der Kartenrückseite. Neue Karten mit ECC rechtzeitig bestellen (Lieferzeit ca. 4-6 Wochen).
> 3. KIM-Adresse: Kontrollieren Sie im PVS, ob Ihre KIM-Adresse aktiv ist und Nachrichten eingehen.
> 4. ePA-Modul: Fragen Sie Ihren PVS-Hersteller, ob das ePA 3.0-Modul aktiviert ist.
>
> Ihr Ansprechpartner für Hardware-Fragen ist Ihr regionaler TI-Dienstleister oder die KV Ihres Bundeslandes.

## Technische Details

### Gesetzliche Grundlagen im Detail

Die TI-Anbindungspflicht ist in mehreren Paragrafen des SGB V verankert:

**§ 291 SGB V (eGK-Pflicht)**: Versicherte müssen beim Arztbesuch die [[eGK]] oder die [[Gesundheits-ID]] vorlegen. Leistungserbringer müssen die Stammdaten elektronisch auslesen (VSDM-Pflicht).

**§ 291a SGB V**: Regelt den Inhalt der eGK (welche Daten und Anwendungen auf der Karte gespeichert sind). Nicht zu verwechseln mit der früheren Fassung, die vor der PDSG-Umstrukturierung 2020 auch TI-Regelungen enthielt.

**§ 291b SGB V**: Regelt das Verfahren zur Nutzung der eGK als Versicherungsnachweis (VSDM). Enthält Sanktionen bei Nichterfüllung der VSDM-Prüfpflicht: 1 % Honorarkürzung ab Januar 2019, 2,5 % ab März 2020.

**§ 306 ff. SGB V**: Seit dem Patientendaten-Schutz-Gesetz (PDSG 2020) sind die Regelungen zur Telematikinfrastruktur und ihren Anwendungen in §§ 306 ff. SGB V verankert. Die [[gematik]] legt die technischen Anforderungen fest; Kassenärztliche Vereinigungen setzen die Sanktionen um.

**§ 341 SGB V**: Sanktionen bei fehlender ePA-Anbindung. Leistungserbringer, die die Anforderungen für den ePA-Zugang nicht erfüllen, erhalten eine Honorarkürzung von 1 %.

**§ 360 SGB V (E-Rezept-Pflicht)**: Vertragsärzte müssen verschreibungspflichtige Arzneimittel als [[E-Rezept]] ausstellen. Ausnahmen gelten für bestimmte Sonderrezepte.

**§ 347 SGB V (ePA-Pflicht)**: Leistungserbringer sind verpflichtet, Behandlungsdaten, Befunde und Medikamentenpläne in die [[ePA]] des Patienten einzustellen, soweit dem der Patient nicht widerspricht.

### Umsetzungsverantwortung

Die praktische Umsetzung der TI-Anbindungspflicht liegt auf mehreren Ebenen:

- **[[gematik]]**: Definiert technische Standards und Spezifikationen
- **[[KBV]]** und **[[KZBV]]**: Setzen für ihre Mitglieder die Anforderungen um
- **[[Kassenärztliche-Vereinigung|KVen]] und KZVen**: Prüfen die Erfüllung bei ihren Mitgliedern
- **Hersteller**: Müssen PVS/KIS/AVS-Produkte gemäß gematik-Spezifikationen zertifizieren lassen
- **Einrichtungen**: Müssen zertifizierte Software einsetzen und TI-Hardware betreiben

### Ausnahmen und Übergangsregeln

Für bestimmte Einrichtungen und Situationen gibt es Ausnahmen:

- **§ 347 Abs. 2 SGB V**: In therapeutisch begründeten Einzelfällen können Praxen auf die ePA-Befüllung verzichten (seit 1. Januar 2026)
- Kleine Einrichtungen können zeitlich befristete Ausnahmen beantragen, wenn die technische Umsetzung unverhältnismäßig ist
- Einrichtungen ohne Kassenabrechnung (rein privatärztliche Praxen) unterliegen nicht der TI-Anbindungspflicht, können aber freiwillig teilnehmen

## Verknüpfungen

- [[Telematikinfrastruktur]] (Ziel der Anbindungspflicht)
- [[SGB-V]] (Rechtsgrundlage für alle TI-Pflichten)
- [[gematik]] (definiert die technischen Anforderungen)
- [[E-Rezept]] (Pflichtanwendung ab 1. Januar 2024)
- [[ePA]] (Pflichtanwendung ab 1. Oktober 2025)
- [[eGK]] (Pflichtnutzung für VSDM)
- [[HBA]] (Pflichtkomponente für Leistungserbringer)
- [[SMC-B]] (Pflicht-Institutionskarte)
- [[Konnektoren]] (technischer Zugang zur TI, wird durch TI-Gateway abgelöst)
- [[TI-Gateway]] (cloudbasierter Ersatz für den Konnektor)
- [[KIM]] (Pflicht-Kommunikationsdienst)
- [[KBV]] (setzt TI-Anforderungen für Vertragsärzte um)
- [[Kassenärztliche-Vereinigung]] (prüft TI-Anbindung ihrer Mitglieder)
- [[VSDM]] (Versicherungsstammdatendienst: erste TI-Pflichtanwendung)

## Quellen

- [gematik: TI-Anbindungspflicht für Leistungserbringer](https://www.gematik.de/telematikinfrastruktur/ti-anwendungen/ti-anbindung)
- [§ 291 SGB V: Elektronische Gesundheitskarte (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/sgb_5/__291.html)
- [§ 360 SGB V: E-Rezept-Pflicht (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/sgb_5/__360.html)
- [KBV: E-Rezept-Pflicht ab 1. Januar 2024](https://www.kbv.de/html/e-rezept.php)
