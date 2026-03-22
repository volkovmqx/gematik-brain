---
title: KZBV
audience: [technical, non-technical]
tags: [organization, selbstverwaltung, gematik, zahnaerzte]
aliases: [Kassenzahnärztliche Bundesvereinigung]
maturity: immergruen
relevance:
  sectors: [zahnarzt, regulierung, verband, hersteller]
  interests: [compliance, business]
---

# KZBV

Die **Kassenzahnärztliche Bundesvereinigung (KZBV)** ist der bundesweite Dachverband der Kassenzahnärztlichen Vereinigungen (KZVen) und vertritt als Gesellschafterin der [[gematik]] die Interessen der Vertragszahnärzte in der Telematikinfrastruktur.

## Erklärt für Einsteiger

Ärzte und Zahnärzte, die mit den gesetzlichen Krankenkassen abrechnen, sind in einer Art Pflichtverband organisiert. Für Zahnärzte ist das die KZBV. Sie verhandelt mit den Krankenkassen, wie viel ein Zahnarzt für welche Behandlung bezahlt bekommt, und stellt sicher, dass überall in Deutschland ein Zahnarzt verfügbar ist. Man kann sich die KZBV wie eine Art Gewerkschaft und Regulierungsbehörde für Vertragszahnärzte vorstellen.

## Überblick

Die KZBV ist eine Körperschaft des öffentlichen Rechts und Teil der zahnärztlichen Selbstverwaltung. Sie ist der Bundesverband der 17 regionalen Kassenzahnärztlichen Vereinigungen (KZVen), die wiederum alle Vertragszahnärzte in ihrem jeweiligen Bundesland als Pflichtmitglieder organisieren.

Die KZBV vertritt bundesweit rund **63.000 Vertragszahnärzte** in der GKV. Ihr Pendant auf der ärztlichen Seite ist die [[KBV]] (Kassenärztliche Bundesvereinigung), die Vertragsärzte vertritt.

Als Gesellschafterin der [[gematik]] ist die KZBV an den Entscheidungen über die Telematikinfrastruktur beteiligt. Die Gesellschafterversammlung der gematik ist das höchste Gremium, in dem die KZBV Stimmrechte hat. Damit bringt sie die zahnärztliche Perspektive in die Weiterentwicklung der TI-Anwendungen ein.

Der [[G-BA]] (Gemeinsamer Bundesausschuss) ist ein weiteres Gremium, in dem die KZBV Stimmrechte hält. Der G-BA entscheidet darüber, welche Leistungen die GKV erstattet.

### Hauptaufgaben

Die KZBV hat zwei Kernaufgaben: Sicherstellung und Interessenvertretung.

**Sicherstellung** bedeutet, dass flächendeckend ausreichend Vertragszahnärzte für die GKV-Versicherten vorhanden sein müssen. Die KZVen sind dafür auf Landesebene zuständig.

**Interessenvertretung** umfasst die Verhandlung mit dem [[GKV-Spitzenverband]] über:
- Vergütungshöhe und [[BEMA|Bewertungsmaßstab zahnärztlicher Leistungen (BEMA)]]
- Abrechnungsregeln
- Versorgungsverträge

### Finanzierung

Die KZBV finanziert sich vollständig aus Mitgliedsbeiträgen der regionalen KZVen, die ihrerseits von den Vertragszahnärzten erhoben werden. Sie ist finanziell von Krankenversicherungsbeiträgen und Steuermitteln unabhängig. Die Aufsicht führt das Bundesministerium für Gesundheit ([[BMG]]).

## Technische Details

> [!interesse-compliance] TI-Pflichten für Vertragszahnärzte
> Vertragszahnärzte sind an dieselben TI-Anbindungspflichten gebunden wie Vertragsärzte. Pflichtanwendungen für Zahnarztpraxen: [[eGK]]-Einlesen (VSDM), [[KIM]] für sichere Kommunikation, [[E-Rezept]] für Arzneimittel und Verbandmittel, [[ePA]]-Zugriff mit Einwilligung. Der zahnärztliche [[HBA]] (eZHBA) ist Voraussetzung für [[QES]] und ePA-Schreibzugriff. [[SMC-B]] für die Praxis ist Pflicht für die TI-Anbindung. Die KZBV koordiniert zusammen mit den KZVen die Einbindung der Zahnarztpraxen.

### Relevanz für die Telematikinfrastruktur

Als Gesellschafterin der [[gematik]] ist die KZBV bei allen wesentlichen TI-Entscheidungen beteiligt. Konkrete TI-Anwendungen, die für Zahnärzte relevant sind:

- **[[E-Rezept]]**: Vertragszahnärzte dürfen seit 2024 Rezepte für Arzneimittel und Verbandmittel elektronisch ausstellen. Die KZBV hat die zahnärztliche Einbindung in das E-Rezept-System begleitet.
- **[[HBA]] für Zahnärzte**: Zahnärzte erhalten einen Heilberufsausweis (zahnärztlicher HBA, auch eZHBA genannt). Damit können sie [[QES]] für [[eArztbrief|eArztbriefe]] und Verordnungen erzeugen.
- **[[ePA]]-Zugriff**: Vertragszahnärzte haben Lesezugriff auf die ePA ihrer Patienten (mit Einwilligung) und können Befunde und Behandlungsdaten einstellen.
- **[[SMC-B]]** für Zahnarztpraxen: Zahnarztpraxen erhalten eine Institutionskarte (SMC-B) für die TI-Anbindung.
- **[[KIM]]**: Zahnärzte können über KIM sicher mit anderen Leistungserbringern kommunizieren.

> [!frist-warnung] Frist-Warnung: ePA-Nutzungspflicht und Honorarsanktionen für Vertragszahnärzte
> **Rechtsgrundlage:** § 341 Abs. 4 SGB V i.V.m. § 347 SGB V (Digital-Gesetz, BGBl. 2024 I Nr. 101); Finanzierungsvereinbarung [[KZBV]]/[[GKV-Spitzenverband]] zur TI-Pauschale
> **Frist:** Seit 1. Oktober 2025 sind Vertragszahnärzte zur ePA-Nutzung verpflichtet. Seit 1. Januar 2026 greifen Sanktionen: Zahnarztpraxen ohne aktiviertes und genutztes ePA-Modul in ihrem Zahnarztinformationssystem (ZIS) erhalten 1 % Honorarkürzung pro Quartal sowie eine halbierte TI-Pauschale. Zusätzlich mussten bis zum 31. Dezember 2025 Konnektoren und [[HBA]] (eZHBA) auf die Generation 2.0 mit ECC-Zertifikaten umgestellt werden.
> **Handlungsbedarf:** Vertragszahnärzte müssen bei ihrer regionalen KZV prüfen, ob alle Pflichtanwendungen (VSDM, [[KIM]], ePA, [[E-Rezept]]) im ZIS aktiviert sind und Nutzungsnachweise vorliegen. Der zahnärztliche [[HBA]] (eZHBA Gen. 2.0) ist zwingende Voraussetzung für den ePA-Schreibzugriff.
> **Bei Nichtbeachtung:** Quartalsweise Honorarkürzung von 1 % sowie Entfall der halben TI-Pauschale. Die regionalen KZVen prüfen die Erfüllung und setzen Sanktionen um.

Die KZBV koordiniert zusammen mit den KZVen und der [[BZÄK|Bundeszahnärztekammer (BZÄK)]] die Einbindung der zahnärztlichen Leistungserbringer in die TI.

> [!interesse-business] Marktrelevanz und Verhandlungsposition
> Die KZBV vertritt rund 63.000 Vertragszahnärzte. Sie verhandelt mit dem [[GKV-Spitzenverband]] den [[BEMA|Bewertungsmaßstab zahnärztlicher Leistungen (BEMA)]], der die Vergütung für GKV-Leistungen festlegt. Als gematik-Gesellschafterin hat die KZBV Stimmrechte bei der Weiterentwicklung der TI. Softwarehersteller (AVS, ZIS), die zahnarztspezifische TI-Funktionen entwickeln, müssen die durch KZBV und BZÄK mitgestalteten Anforderungen berücksichtigen.

### Abgrenzung zu anderen Organisationen

| Organisation | Zuständigkeit |
|---|---|
| KZBV | Vertragszahnärzte (GKV-Abrechnung), Bundesebene |
| KZV (17 Landesverbände) | Vertragszahnärzte, Landesebene |
| [[BZÄK]] | Berufskammer für alle Zahnärzte (Berufsrecht, Fortbildung) |
| [[KBV]] | Vertragsärzte (nicht Zahnärzte), Bundesebene |

## Verknüpfungen

- [[gematik]] (Gesellschafterin)
- [[KBV]] (Pendant für Vertragsärzte)
- [[GKV-Spitzenverband]] (Vertragspartner)
- [[BMG]] (Aufsichtsbehörde)
- [[G-BA]] (Gremium, in dem KZBV Stimmrechte hält)
- [[HBA]] (Heilberufsausweis für Zahnärzte)
- [[E-Rezept]] (TI-Anwendung für zahnärztliche Verordnungen)
- [[ePA]] (Elektronische Patientenakte, Zugriff für Zahnärzte)
- [[SMC-B]] (Institutionskarte für Zahnarztpraxen)
- [[KIM]] (sichere Kommunikation für Zahnärzte)

## Quellen

- [KZBV: Aufgaben und Finanzierung](https://www.kzbv.de/die-kzbv/aufgaben-und-finanzierung/)
- [Gesellschafter der gematik](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
- [Wikipedia: KZBV](https://de.wikipedia.org/wiki/KZBV)
- [BMG: Kassenzahnärztliche Vereinigungen](https://www.bundesgesundheitsministerium.de/themen/gesundheitswesen/selbstverwaltung/kassenzahnaerztliche-vereinigungen)
