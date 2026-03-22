---
title: MDR
audience: [technical, non-technical]
tags: [standards, regulierung, medizinprodukte, diga, ce-kennzeichen, eu]
aliases: [EU-Medizinprodukteverordnung, Medical Device Regulation, Verordnung EU 2017/745, EU MDR]
relevance:
  sectors: [hersteller, startup, krankenhaus, regulierung, forschung, it-dienstleister]
  interests: [compliance, business, technik]
maturity: immergruen
---

# MDR

Die MDR (Medical Device Regulation, Verordnung EU 2017/745) ist die europäische Verordnung für [[Medizinprodukte]], die seit Mai 2021 gilt und die Grundlage für die CE-Zertifizierung aller Medizinprodukte im EU-Binnenmarkt bildet.

## Erklärt für Einsteiger

Bevor ein Pflaster, ein Herzschrittmacher oder eine Gesundheits-App auf den europäischen Markt kommen darf, muss sie beweisen, dass sie sicher ist und das tut, wofür sie gebaut wurde. Die MDR ist das gemeinsame Regelwerk aller EU-Länder dafür. Hersteller müssen ihre Produkte nach diesen Regeln prüfen lassen und dürfen dann das CE-Zeichen aufdrucken. Ohne CE-Zeichen ist ein Medizinprodukt in der EU nicht zugelassen.

## Überblick

Die MDR wurde am 5. April 2017 im Amtsblatt der Europäischen Union veröffentlicht und trat nach einer Übergangsfrist am 26. Mai 2021 in Kraft. Sie ersetzte die bisherige Medizinprodukte-Richtlinie (MDD, 93/42/EWG) und die Richtlinie für aktive implantierbare medizinische Geräte (AIMD, 90/385/EWG).

Ziel der MDR ist es, die Sicherheit und Leistungsfähigkeit von Medizinprodukten auf einem einheitlich hohen Niveau zu gewährleisten. Gegenüber der Vorgängerrichtlinie verschärfte sie die Anforderungen erheblich: strengere Konformitätsbewertungen, umfangreichere klinische Evidenzanforderungen und eine lückenlosere Marktüberwachung.

In Deutschland ist das [[BfArM]] die zuständige Bundesbehörde für die Marktüberwachung von Medizinprodukten. Das BfArM genehmigt klinische Prüfungen, nimmt Vorkommnismeldungen entgegen und koordiniert Rückrufe.

Die MDR ist unmittelbar geltendes EU-Recht. Sie gilt in allen EU-Mitgliedstaaten ohne nationale Umsetzungsakte.

> [!interesse-compliance] CE-Kennzeichen als Marktzugangsvoraussetzung
> Ohne CE-Kennzeichen nach MDR ist kein Medizinprodukt in der EU verkehrsfähig. Für [[DiGA]] und [[DiPA]] ist die CE-Kennzeichnung zusätzliche Voraussetzung für die Antragstellung beim [[BfArM]]-Fast-Track-Verfahren. Hersteller müssen die Konformitätsbewertung vollständig abschließen, bevor sie einen DiGA-Antrag stellen. Für Klasse-IIa-Produkte (viele DiGA) ist eine Benannte Stelle erforderlich; die Zahl akkreditierter Stellen in Deutschland ist begrenzt, was zu Wartezeiten führen kann. Die MDR schreibt PMS-Berichte (Post-Market Surveillance) in regelmäßigen Abständen vor, auch nach der Markteinführung.

> [!interesse-business] Markt- und Wettbewerbslage unter MDR
> Die MDR hat die Marktzulassung für Medizinprodukte gegenüber der Vorgängerrichtlinie MDD erheblich verteuert und verlängert. Für Startups im DiGA-Bereich sind CE-Kosten und Benannte-Stelle-Gebühren ein wesentlicher Kostenfaktor. Etablierte Hersteller mit bestehenden MDD-Zertifikaten mussten bis Ende 2024 auf MDR umstellen. Die Engpässe bei Benannten Stellen und der Rückzug einiger Stellen aus dem Markt haben zu Engpässen geführt, die die Markteinführung neuer Produkte verzögern.

## Technische Details

### Risikoklassen

Die MDR klassifiziert Medizinprodukte in vier Risikoklassen. Die Klasse bestimmt, welche Konformitätsbewertungsverfahren erforderlich sind:

| Klasse | Risiko | Beispiele | Konformitätsbewertung |
|---|---|---|---|
| I | Niedrig | Verbandsmaterial, Brillen | Selbstbewertung des Herstellers |
| I (steril/messend) | Mittel-niedrig | Sterile Einmalprodukte | [[Benannte-Stelle|Benannte Stelle]] erforderlich |
| IIa | Mittel | Hörgeräte, Zahnfüllungen | [[Benannte-Stelle|Benannte Stelle]] erforderlich |
| IIb | Mittel-hoch | Beatmungsgeräte, Röntgengeräte | [[Benannte-Stelle|Benannte Stelle]] erforderlich |
| III | Hoch | Herzklappen, Koronarstents | [[Benannte-Stelle|Benannte Stelle]], umfangreichste Prüfung |

### [[Konformitaetsbewertung|Konformitätsbewertung]]

Das Konformitätsbewertungsverfahren ist der zentrale Nachweis, dass ein Produkt die Anforderungen der MDR erfüllt. Es umfasst:

1. **Technische Dokumentation**: Vollständige Beschreibung des Produkts, seiner Zweckbestimmung, Risikoanalyse und Sicherheitsnachweise
2. **Klinische Bewertung**: Nachweis der klinischen Sicherheit und Leistung auf Basis klinischer Daten (Literatur, eigene Studien)
3. **Qualitätsmanagementsystem**: Zertifizierung nach ISO 13485
4. **Benannte Stelle (Notified Body)**: Für Klassen IIa, IIb und III muss eine zugelassene externe Stelle die Dokumentation prüfen und eine CE-Bescheinigung ausstellen

Das CE-Kennzeichen darf erst nach erfolgreich abgeschlossener Konformitätsbewertung angebracht werden.

### Post-Market Surveillance

Die MDR verpflichtet Hersteller zu einem dauerhaften Post-Market-Surveillance-System (PMS). Hersteller müssen:

- Vorkommnisse mit Gesundheitsschäden innerhalb definierter Fristen melden (PMCF: Post-Market Clinical Follow-Up)
- Periodische Sicherheitsberichte (PSUR: Periodic Safety Update Report) erstellen
- Feld-Sicherheitsmaßnahmen (Rückrufe, Sicherheitskorrekturen) koordinieren

> [!frist-warnung] Frist-Warnung: PSUR-Pflicht für Klasse-IIa-Medizinprodukte
> **Rechtsgrundlage:** Art. 86 Verordnung (EU) 2017/745 (MDR) i.V.m. MDCG 2022-21
> **Frist:** Hersteller von Medizinprodukten der Klasse IIa (darunter viele DiGA und der MMI-AMTS-Service) müssen mindestens alle zwei Jahre einen Periodic Safety Update Report (PSUR) erstellen und der Benannten Stelle sowie auf Anforderung den zuständigen Behörden vorlegen.
> **Handlungsbedarf:** Die verantwortliche Stelle richtet einen PMS-Prozess ein, der systematisch Post-Market-Daten (Beschwerden, Vigilanzdaten, Literatur, klinische Nachbeobachtung) sammelt und auswertet. Der PSUR ist in der technischen Dokumentation des Produkts zu hinterlegen und bei jeder Rezertifizierung vorzulegen. Schwere Vorkommnisse sind nach Art. 87 MDR innerhalb von 15 Tagen (schwerwiegendes Vorkommnis) oder 2 Tagen (Gefahr für Leben oder Gesundheit) dem BfArM zu melden.
> **Bei Nichtbeachtung:** Fehlende oder unvollständige PSURs können zum Entzug der CE-Bescheinigung durch die Benannte Stelle führen und damit die Verkehrsfähigkeit des Produkts in der EU beenden.

### MDR und DiGA

Alle [[DiGA|Digitalen Gesundheitsanwendungen (DiGA)]] sind Medizinprodukte der Risikoklasse I oder IIa nach MDR. Sie müssen ein CE-Kennzeichen tragen, bevor sie beim [[BfArM]] für das DiGA-Verzeichnis beantragt werden können. Das BfArM prüft im Fast-Track-Verfahren u.a. die Konformität mit der MDR als erste Zulassungsvoraussetzung.

Auch [[DiPA|Digitale Pflegeanwendungen (DiPA)]] unterliegen der MDR.

### Software als Medizinprodukt (SaMD)

Die MDR enthält Regelungen für Software als eigenständiges Medizinprodukt ([[SaMD|Software as a Medical Device, SaMD]]). Entscheidend ist die Zweckbestimmung: Software, die zur Diagnose, Prävention, Überwachung, Vorhersage oder Behandlung von Krankheiten dient, gilt als Medizinprodukt. Betriebssoftware oder reine Verwaltungssoftware fällt nicht darunter.

> [!klinik-integration] Klinik-Integration: KIS-Module und SaMD-Einordnung nach MDR
> **KIS-Kontext:** Nicht das gesamte KIS, aber einzelne Module können als Medizinprodukt einzustufen sein. Module mit Entscheidungsunterstützung (Warnungen bei Medikamenteninteraktionen, Dosierungsvorschläge, Sepsis-Screening-Algorithmen) fallen typischerweise unter Regel 11 MDR (SaMD). Reine Dokumentations- und Abrechnungsmodule sind kein Medizinprodukt. Krankenhäuser sollten vom KIS-Hersteller eine schriftliche Einordnung jedes klinischen Moduls nach MDR einfordern.
>
> **Beschaffung:** Bei der Ausschreibung klinischer Software prüfen, ob der Anbieter eine aktuelle CE-Konformitätserklärung und ggf. ein Zertifikat einer Benannten Stelle vorlegen kann. Für Klasse-IIa-Module (z.B. AMTS-Dienste) ist ein Nachweis der laufenden Post-Market Surveillance zu verlangen. MDCG 2019-11 Rev. 1 (Juni 2025) ist das aktuelle Leitdokument der EU-Kommission zur SaMD-Klassifizierung.
>
> **Betreiberpflichten:** Krankenhäuser sind als Betreiber nach § 4 MPDG verpflichtet, nur Medizinprodukte mit gültigem CE-Kennzeichen einzusetzen und Vorkommnisse dem BfArM zu melden. Das gilt auch für Software-Updates: Ändert ein Update die Zweckbestimmung oder fügt klinische Entscheidungslogik hinzu, kann eine neue Konformitätsbewertung erforderlich sein.

Für die Einordnung digitaler Gesundheitsprodukte hat die EU-Kommission ein Klassifizierungsregelwerk in Anhang VIII MDR veröffentlicht. Regel 11 regelt die Klassifizierung von Software.

> [!dev-quickstart] Dev Quickstart: EUDAMED Geräteregister-API abfragen
> EUDAMED stellt öffentliche REST-Endpunkte für UDI-Gerätedaten bereit (kein Auth für Lesezugriffe).
> ```bash
> # UDI-DI-Stammdaten eines Medizinprodukts abrufen (öffentlich)
> curl -X GET "https://ec.europa.eu/tools/eudamed/api/devices/udiDiData?udiDi=<UDI-DI>" \
>   -H "Accept: application/json"
>
> # Gerätegruppendaten abrufen
> curl -X GET "https://ec.europa.eu/tools/eudamed/api/devices/basicUdiData/<basicUdiDiId>" \
>   -H "Accept: application/json"
> ```
> - EUDAMED-Registrierungspflicht für neue Produkte: ab 1. Januar 2026 (Vigilance ab 1. Juli 2026)
> - M2M-Schreibzugang: Registrierung über nationale Behörde oder akkreditierten Dienstleister erforderlich
> - Testumgebung (Sandbox): [EUDAMED Playground](https://webgate.ec.europa.eu/eudamed-play-help/en/getting-started/eudamed-environments.html)
> - Inoffizielle API-Referenz: [openregulatory/eudamed-api](https://github.com/openregulatory/eudamed-api)

### Abgrenzung zur MDR: IVDR

Neben der MDR gibt es die [[IVDR]] (In-vitro-Diagnostika-Verordnung, EU 2017/746), die Labordiagnostika und Schnelltests regelt. DEMIS-Labormeldungen betreffen z.B. Produkte, die unter die IVDR fallen.

## Verknüpfungen

- [[DiGA]]: Müssen als Medizinprodukte nach MDR zertifiziert sein
- [[DiPA]]: Ebenfalls MDR-pflichtige Medizinprodukte in der Pflege
- [[BfArM]]: Marktüberwachungsbehörde für Medizinprodukte in Deutschland
- [[DiGAV]]: Ausführungsverordnung für DiGA, baut auf MDR auf
- [[SGB-V]]: Rechtsgrundlage für die DiGA-Erstattung, verweist auf MDR-Konformität
- [[ePA]]: DiGA-Daten können in die Patientenakte übertragen werden

## Quellen

- [EUR-Lex: Verordnung (EU) 2017/745 über Medizinprodukte](https://eur-lex.europa.eu/eli/reg/2017/745/oj?locale=de)
- [BfArM: MDR und Medizinprodukte](https://www.bfarm.de/DE/Medizinprodukte/_node.html)
- [BfArM: DiGA und MDR](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiGA/_node.html)
- [Digitalversorgt: Medizinprodukte-Regulatorik](https://www.digitalversorgt.de/themen/medizinprodukte-regulatorik)
