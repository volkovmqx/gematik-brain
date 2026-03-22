---
title: DiGA-Fast-Track
audience: [technical, non-technical]
tags: [prozesse, diga, bfarm, zulassung, sgb-v, regulierung]
aliases: [DiGA Fast-Track, Fast-Track-Verfahren, DiGA-Zulassungsverfahren, Fast Track DiGA]
relevance:
  sectors: [hersteller, startup, kasse, regulierung, patient, forschung]
  interests: [compliance, business]
maturity: immergruen
---

# DiGA-Fast-Track

Das **DiGA-Fast-Track-Verfahren** ist das Schnellzulassungsverfahren des [[BfArM]] nach § 139e [[SGB-V]], mit dem Hersteller digitaler Gesundheitsanwendungen ([[DiGA]]) innerhalb von maximal drei Monaten die Aufnahme in das öffentliche DiGA-Verzeichnis beantragen können.

## Erklärt für Einsteiger

Damit eine Gesundheits-App von der Krankenkasse bezahlt wird, muss sie eine Prüfung bestehen. Das Fast-Track-Verfahren macht diese Prüfung schnell: Statt jahrelange Zulassungsverfahren wie bei Medikamenten zu durchlaufen, bekommt eine App innerhalb von drei Monaten eine Antwort. Wenn die App noch nicht alle nötigen Studien hat, wird sie zunächst vorläufig aufgenommen und hat ein Jahr Zeit, den Nutzen zu beweisen. Ist die Prüfung bestanden, zahlt die Krankenkasse die App für alle Versicherten.

## Überblick

Das DiGA-Fast-Track-Verfahren wurde durch das Digitale-Versorgung-Gesetz ([[DVG]]) eingeführt, das am 19. Dezember 2019 in Kraft trat. Es ist international einzigartig: Kein anderes Land hat ein vergleichbares Schnellverfahren für digitale Medizinprodukte geschaffen, das die volle Erstattungsfähigkeit durch die gesetzliche Krankenversicherung erschließt.

Rechtliche Grundlage ist § 139e [[SGB-V]], konkretisiert durch die [[DiGAV]] (Digitale-Gesundheitsanwendungen-Verordnung). Das Verfahren richtet sich ausschließlich an digitale Medizinprodukte der Risikoklasse I oder IIa nach der europäischen Medizinprodukteverordnung ([[MDR]]).

Das [[BfArM]] führt das DiGA-Verzeichnis und veröffentlicht es tagesaktuell als öffentlich zugängliches Webportal. Seit Einführung wurden über 100 Anträge gestellt; Stand Anfang 2026 sind rund 60 bis 65 DiGA dauerhaft oder vorläufig gelistet.

> [!interesse-business] Marktchancen durch das Fast-Track-Verfahren
> Das Fast-Track-Verfahren erschließt unmittelbaren GKV-Marktzugang für rund 74 Millionen Versicherte. Hersteller setzen in der 12-monatigen Erprobungsphase den Erstattungsbetrag selbst fest, was einen direkten Hebel auf den wahrgenommenen Marktwert hat. Nach dauerhafter Listung wird der Betrag mit dem GKV-Spitzenverband verhandelt. Seit der Zweiten DiGAV-Änderungsverordnung (1. Februar 2026) ist 20 Prozent des Erstattungsbetrags erfolgsabhängig (Anwendungsbegleitende Erfolgsmessung, AbEM), was den Nachweis realer Wirksamkeit zur Pflicht macht.

## Technische Details

### Ablauf des Verfahrens

Das Fast-Track-Verfahren gliedert sich in drei Phasen:

#### 1. Antragstellung

Hersteller stellen den Antrag ausschließlich elektronisch über das DiGA-Antragsportal des [[BfArM]]. Der Antrag enthält:

- Nachweise zur Erfüllung der Anforderungen aus Anlage 1 [[DiGAV]] (Sicherheit, Datenschutz, Datensicherheit, Funktionstauglichkeit, Benutzerfreundlichkeit)
- Belege zum positiven Versorgungseffekt (oder Erklärung zur Durchführung einer Erprobungsstudie)
- CE-Kennzeichnung als Medizinprodukt nach [[MDR]]
- Interoperabilitätsnachweise (Anlage 2 DiGAV: MIO DiGA Toolkit, FHIR R4-Export)

#### 2. Prüfung durch das BfArM

Das [[BfArM]] prüft in maximal drei Monaten:

1. **Formelle Vollständigkeit**: Sind alle Unterlagen vorhanden?
2. **Inhaltliche Prüfung**: Sind die DiGAV-Anforderungen erfüllt? Stimmen Selbstauskunft und vorgelegte Belege überein?
3. **Bewertung des Versorgungseffekts**: Sind die vorgelegten Studiendaten methodisch belastbar?

Eine Fristverlängerung von bis zu drei weiteren Monaten ist in begründeten Einzelfällen möglich (§ 139e Abs. 3 Satz 1 SGB V). Eine öffentliche Stellungnahmephase ist nicht vorgesehen.

#### 3. Listungsentscheidung

Das BfArM entscheidet zwischen zwei Wegen:

**Vorläufige Listung (Erprobungsphase):** Wenn noch keine abgeschlossene Studie vorliegt, wird die DiGA für maximal 12 Monate vorläufig gelistet. In diesem Zeitraum muss der Hersteller den positiven Versorgungseffekt durch eine Erprobungsstudie nachweisen. Gelingt das nicht, wird die DiGA aus dem Verzeichnis entfernt.

**Dauerhafte Listung:** Wenn aussagekräftige Studiendaten vorliegen, wird die DiGA dauerhaft gelistet. Es folgen Verhandlungen über den dauerhaften Erstattungsbetrag mit dem GKV-Spitzenverband.

> [!frist-warnung] Frist-Warnung: Erprobungsphase und Nachweispflicht positiver Versorgungseffekt
> **Rechtsgrundlage:** § 139e Abs. 4 SGB V i.V.m. § 6 DiGAV (Digitale-Gesundheitsanwendungen-Verordnung in der jeweils geltenden Fassung)
>
> **Frist:** Vorläufig gelistete DiGA müssen den positiven Versorgungseffekt innerhalb von 12 Monaten ab dem Datum der vorläufigen Listung gegenüber dem [[BfArM]] nachweisen. Eine einmalige Verlängerung um bis zu 12 weitere Monate ist auf Antrag möglich, sofern der Hersteller spätestens 3 Monate vor Ablauf der Erstfrist eine plausible Begründung einreicht. Die maximale Erprobungsphase beträgt damit 24 Monate.
>
> **Handlungsbedarf:** Die verantwortliche Stelle (DiGA-Hersteller) ist verpflichtet, den Studienplan so zu terminieren, dass auswertungsfähige Daten vor Fristablauf vorliegen. Ein Verlängerungsantrag ist vor Ablauf der initialen 12-Monats-Frist zu stellen. Wird der Antrag versäumt oder inhaltlich abgelehnt, entscheidet das BfArM von Amts wegen über die Streichung.
>
> **Bei Nichtbeachtung:** Das BfArM streicht die DiGA ohne Übergangsfrist aus dem Verzeichnis nach § 139e Abs. 6 SGB V. Die Erstattungsfähigkeit durch die GKV entfällt damit sofort. Eine erneute Antragstellung ist grundsätzlich möglich, erfordert aber ein vollständiges Neuverfahren.

> [!interesse-compliance] Anforderungen für die Aufnahme
> Kernpflichten laut DiGAV (Anlage 1):
> - Datenschutz: Verarbeitung ausschließlich in Deutschland oder EU/EWR, keine Werbezwecke
> - Datensicherheit: Penetrationstests, Meldung von Sicherheitsvorfällen
> - Interoperabilität (Anlage 2): FHIR R4-Datenexport gemäß MIO DiGA Toolkit ([[KBV]])
> - Seit 1. Februar 2026 (Zweite DiGAV-Änderungsverordnung): Schreibzugriff auf die [[ePA]] und Authentifizierung über [[Gesundheits-ID]] sind Pflichtanforderungen ohne Übergangsfrist.
> - AbEM: Mindestens 20 Prozent des Erstattungsbetrags müssen von messbaren Versorgungsergebnissen abhängen. Quartalsweise Datenerhebung und halbjährliche Meldung an das [[BfArM]] sind verpflichtend.

### Positiver Versorgungseffekt

Das Herzstück des Verfahrens ist der Nachweis eines positiven Versorgungseffekts. Die [[DiGAV]] unterscheidet:

- **Medizinischer Nutzen**: Verbesserung des Gesundheitszustands, Verkürzung der Krankheitsdauer, Verbesserung der Lebensqualität (patientenrelevante Endpunkte).
- **Patientenrelevante Struktur- und Verfahrensverbesserung**: Verbesserung der Versorgungsabläufe, Therapietreue, Patientensicherheit oder Gesundheitskompetenz.
- **Erhalt oder Verbesserung der Arbeitsfähigkeit** (neu ab 1. Februar 2026): Auch DiGA in der medizinischen Rehabilitation und Wiedereingliederung in das Arbeitsleben sind erstattungsfähig.

Akzeptierte Studiendesigns umfassen randomisierte kontrollierte Studien (RCT), aber auch Real-World-Studien und Beobachtungsstudien unter bestimmten Bedingungen.

### Vergütung

| Phase | Erstattungsbetrag | Festlegung |
|---|---|---|
| Erprobungsphase (12 Monate) | Vom Hersteller selbst festgelegt | Einseitig durch Hersteller |
| Dauerhafte Listung | Verhandelter Betrag | GKV-Spitzenverband und Hersteller; Schiedsstelle bei Nichteinigung |

Seit der Zweiten DiGAV-Änderungsverordnung (1. Februar 2026) muss mindestens 20 Prozent des Erstattungsbetrags von messbaren Versorgungsergebnissen abhängen (Anwendungsbegleitende Erfolgsmessung, AbEM). Das [[BfArM]] veröffentlicht AbEM-Ergebnisse im DiGA-Verzeichnis.

> [!frist-warnung] Frist-Warnung: AbEM-Meldepflicht und ePA-Schreibzugriff
> **Rechtsgrundlage:** § 139e Abs. 7 SGB V i.V.m. Zweiter Verordnung zur Änderung der DiGAV (in Kraft ab 1. Februar 2026); Anlage 1 DiGAV (Datensicherheit, Interoperabilität)
>
> **Fristen:**
> - **Seit 1. Februar 2026 (ohne Übergangsfrist):** DiGA-Hersteller sind verpflichtet, Schreibzugriff auf die [[ePA]] zu implementieren und die Authentifizierung über [[Gesundheits-ID]] anzubieten. Bestehend gelistete DiGA ohne diese Funktionen können vom BfArM aus dem Verzeichnis gestrichen werden.
> - **Laufend (quartalsweise):** Datenerhebung für die Anwendungsbegleitende Erfolgsmessung (AbEM). Die halbjährliche Meldung der AbEM-Ergebnisse an das [[BfArM]] ist Pflicht. Das BfArM veröffentlicht die Ergebnisse im DiGA-Verzeichnis.
>
> **Handlungsbedarf:** DiGA-Hersteller, deren Produkt vor dem 1. Februar 2026 gelistet wurde, müssen unverzüglich prüfen, ob ePA-Schreibzugriff und Gesundheits-ID-Authentifizierung bereits implementiert sind. Die quartalsweise AbEM-Datenerhebung muss im technischen Produkt und in den Studienprotokollen verankert sein.
>
> **Bei Nichtbeachtung:** Fehlende Pflichtanforderungen (ePA-Schreibzugriff, Gesundheits-ID) berechtigen das BfArM zur Streichung aus dem DiGA-Verzeichnis nach § 139e Abs. 6 SGB V. Ausbleibende AbEM-Meldungen können als Vertragsverletzung gewertet werden und führen zu einer Überprüfung des Erstattungsbetrags.

### Abgrenzung zu anderen Zulassungswegen

Das DiGA-Fast-Track-Verfahren gilt ausschließlich für [[DiGA]] (Risikoklasse I und IIa, MDR). Es ist nicht anwendbar auf:

- Digitale Pflegeanwendungen ([[DiPA]]), die über ein separates Verfahren nach [[SGB-XI]] gelistet werden.
- Medizinprodukte der Klasse IIb und III (höheres Risikopotenzial), die strengere Konformitätsbewertungen erfordern.
- [[SaMD]] ohne Medizinproduktestatus.

## Verknüpfungen

- [[DiGA]] (Digitale Gesundheitsanwendungen: Gegenstand des Fast-Track-Verfahrens)
- [[DiGAV]] (Durchführungsverordnung zum Fast-Track-Verfahren)
- [[BfArM]] (Zulassungsbehörde, führt das Fast-Track-Verfahren durch)
- [[DVG]] (Digitale-Versorgung-Gesetz: gesetzliche Grundlage des Verfahrens)
- [[SGB-V]] (§ 139e: Anspruch der GKV-Versicherten auf DiGA)
- [[MDR]] (EU-Medizinprodukteverordnung: Voraussetzung für die DiGA-Zulassung)
- [[GKV]] (Kostenträger, verhandelt den dauerhaften Erstattungsbetrag)
- [[MIO]] (MIO DiGA Toolkit: Pflichtformat für den Datenexport)
- [[FHIR]] (technischer Standard für den DiGA-Datenexport)
- [[ePA]] (ab 1. Februar 2026 Pflichtintegration für DiGA)
- [[Gesundheits-ID]] (ab 1. Februar 2026 Pflichtauthentifizierungsweg)
- [[SaMD]] (Software as a Medical Device: Oberbegriff für DiGA)
- [[DiPA]] (Digitale Pflegeanwendungen: analoges Verfahren nach SGB XI)

## Quellen

- [BfArM: Digitale Gesundheitsanwendungen – Wissenswertes zu DiGA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiGA/Wissenswertes/_artikel.html)
- [BfArM: DiGA-Leitfaden Version 3.6 (Stand: 10.12.2025)](https://www.bfarm.de/SharedDocs/Downloads/DE/Medizinprodukte/diga_leitfaden.html)
- [§ 139e SGB V – Verzeichnis für digitale Gesundheitsanwendungen (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/sgb_5/__139e.html)
- [DiGAV (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/digav/BJNR076800020.html)
- [Bundesgesundheitsministerium: DiGAV](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/digitale-gesundheitsanwendungen-verordnung-digav)
