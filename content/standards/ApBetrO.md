---
title: ApBetrO
audience: [technical, non-technical]
tags: [standards, gesetzgebung, apotheke, arzneimittel, amts]
aliases: [Apothekenbetriebsordnung, ApoBetrO, ApBetrO 1987]
relevance:
  sectors: [apotheke, arztpraxis, krankenhaus, hersteller, regulierung]
  interests: [compliance, technik]
maturity: setzling
---

# ApBetrO

Die **Apothekenbetriebsordnung (ApBetrO)** ist die Rechtsverordnung, die die Anforderungen an den Betrieb von Apotheken in Deutschland regelt, einschließlich der Pflichten zur Arzneimittelprüfung, Dokumentation und Abgabe.

## Erklärt für Einsteiger

Stell dir vor, ein Supermarkt hat ganz genaue Vorschriften, wie Lebensmittel gelagert, geprüft und verkauft werden müssen. Die ApBetrO ist das Äquivalent für Apotheken: Sie schreibt vor, wie eine Apotheke ausgestattet sein muss, wie Arzneimittel geprüft, aufbewahrt und ausgegeben werden, und welche Fachleute dabei mitwirken müssen. Wer gegen diese Regeln verstößt, riskiert die Betriebserlaubnis.

## Überblick

Die Apothekenbetriebsordnung (ApBetrO) ist eine Rechtsverordnung des Bundesgesundheitsministeriums auf Grundlage des Apothekengesetzes (ApoG). Sie gilt für alle öffentlichen Apotheken in Deutschland und enthält verbindliche Mindeststandards für Personal, Räume, Ausstattung und Betriebsabläufe.

Die ApBetrO ist die zentrale Rechtsgrundlage für den Apothekenalltag. Für die digitale Gesundheitsversorgung sind insbesondere **§ 17 ApBetrO** (Erwerb und Abgabe von Arzneimitteln, pharmazeutische Beratungspflicht) und **§ 20 ApBetrO** (Arzneimittelrisiken, Dokumentation) bedeutsam: § 20 schreibt vor, dass jede Abgabe mit einer Überprüfung auf Wechselwirkungen, Kontraindikationen und Dosierungsfehler verbunden sein muss. Diese Pflicht ist die rechtliche Basis für die [[AMTS|Arzneimitteltherapiesicherheitsprüfung (AMTS)]].

### Relevanz für die digitale Versorgung

Mit der flächendeckenden Einführung des [[E-Rezept|E-Rezepts]] (GKV-Pflicht seit Januar 2024) ist die ApBetrO das Fundament, auf dem digitale Apothekenworkflows aufgebaut werden. Das [[AVS|Apothekenverwaltungssystem (AVS)]] muss so konfiguriert sein, dass die ApBetrO-Pflichten bei jeder Abgabe automatisch erfüllt werden:

- **§ 17 ApBetrO**: Erwerb und Abgabe von Arzneimitteln, Pflicht zur pharmazeutischen Beratung bei jeder Abgabe
- **§ 20 ApBetrO**: Pflicht zur Prüfung auf Arzneimittelrisiken (Wechselwirkungen, Kontraindikationen) und Dokumentation
- **§ 22 ApBetrO**: Dokumentationspflichten für Herstellung, Abgabe und Prüfung
- **§ 5 ApBetrO**: Anforderungen an das pharmazeutische Personal

> [!interesse-compliance]
> Jede Apotheke muss sicherstellen, dass ihr [[AVS]] die AMTS-Prüfung (Interaktionsprüfung, Kontraindikationscheck) bei jedem Dispensierungsvorgang automatisch ausführt und dokumentiert. Das ist eine Dauerpflicht nach § 20 ApBetrO, keine optionale Funktion. AVS-Systeme müssen von der zuständigen Apothekerammer und der Aufsichtsbehörde als konform anerkannt sein. Bei Retaxationsprüfungen durch Krankenkassen wird die Dokumentation der AMTS-Prüfung regelmäßig kontrolliert.

> [!praxis-tipp] Praxis-Tipp: AMTS-Prüfung bei jeder Abgabe sicherstellen
> In Ihrer Apotheke bedeutet das: Jede Abgabe, auch das schnelle "Über-den-Tresen-Reichen", muss eine AMTS-Prüfung im AVS auslösen. Das AVS muss das Ergebnis speichern.
>
> Typischer Fehler: Mitarbeitende überspringen den AMTS-Dialog im AVS, wenn es stressig ist. Bei einer Retaxationsprüfung durch die Krankenkasse fehlt dann der Dokumentationsnachweis.
>
> Lösung: Prüfen Sie in Ihrem AVS, ob die AMTS-Prüfung als Pflichtschritt konfiguriert ist und nicht weggeklickt werden kann. Fragen Sie Ihren AVS-Hersteller, falls das nicht der Fall ist.

> [!klinik-integration] Klinik-Integration: Krankenhausapotheke und AMTS im KIS
> **KIS-Kontext:** Krankenhausapotheken arbeiten mit eigenen Apothekeninformationssystemen (z.B. Apostore, Pharmavision, PHARMOS), die über HL7 v2.x-Schnittstellen an das KIS angebunden sind. Gängige Nachrichtentypen: RDE^O11 (Medikationsanforderung), RDS^O13 (Dispensierungsbestätigung), OMP^O09 (Medikationsplan).
> **Workflow-Bezug:** Der Closed-Loop-Medikationsprozess im Krankenhaus beginnt mit der ärztlichen Verordnung im KIS, die automatisch an die Apotheke übermittelt wird. Die ApBetrO-konforme AMTS-Prüfung (Wechselwirkungen, Kontraindikationen) muss dabei für den stationären Patienten gegen die vollständige Medikationsliste des KIS erfolgen, nicht nur gegen eine Einzelverordnung.
> **Deployment:** Viele KIS-Hersteller (Dedalus ORBIS, Cerner/Oracle, iMedOne, CGM M-Medikation) bieten integrierte Medikationsmodule mit ApBetrO-konformer AMTS-Prüfung. Prüfen Sie, ob Ihr Apothekensystem und KIS bidirektional kommunizieren. Für den 24/7-Betrieb ist eine redundante HL7-Schnittstelleninfrastruktur erforderlich.

> [!frist-warnung] Frist-Warnung: Aufbewahrungsfristen für Apothekendokumentation
> **Rechtsgrundlage:** § 22 Abs. 3 ApBetrO (allgemeine Abgabedokumentation), § 20 Abs. 1 ApBetrO (AMTS-Dokumentation)
> **Fristen:** Dokumentation zu Arzneimittelabgaben ist mindestens 5 Jahre aufzubewahren, gerechnet ab dem Datum der Abgabe. Für Blutprodukte, Gewebepräparate und gentechnisch hergestellte Plasmaproteine gilt eine Aufbewahrungsfrist von 30 Jahren nach dem letzten Eintrag (§ 14 Abs. 6 Transfusionsgesetz i.V.m. ApBetrO).
> **Handlungsbedarf:** Die verantwortliche Stelle hat sicherzustellen, dass das AVS Exportfunktionen und Archivierungssysteme bereitstellt, die die gesetzlichen Aufbewahrungsfristen technisch durchsetzen. Vor einem AVS-Wechsel oder einer Systemabschaltung ist eine vollständige Datenarchivierung zu veranlassen und nachzuweisen.
> **Bei Nichtbeachtung:** Fehlende Dokumentation gilt als Abgabe ohne Nachweis. Bei Retaxationsprüfungen durch Krankenkassen oder Inspektionen der Apothekenaufsichtsbehörde droht der Verlust der Abrechnungsgrundlage.

### Zulassungsanforderungen für AVS

Die ApBetrO stellt indirekt Anforderungen an Apothekensoftware: Das AVS muss die in der ApBetrO vorgeschriebenen Abläufe technisch unterstützen. Dazu gehören:

- Integration aktueller Arzneimitteldatenbanken (z.B. [[ABDA-Datenbank]]) für die AMTS-Prüfung
- Vollständige Dokumentation jedes Dispensiervorgangs
- Unterstützung der [[Interaktionsprüfung]] nach Stand der Wissenschaft
- Korrekte Abwicklung der [[Securpharm]]-Entwertung (Fälschungsschutz)

Für die [[E-Rezept]]-Integration müssen AVS-Systeme zusätzlich die gematik-Zulassung nach den gemSpec-Anforderungen besitzen. Damit entsteht ein doppeltes Anforderungsregime: ApBetrO (apothekenrechtlich) und gematik-Spezifikationen (telematikinfrastrukturrechtlich).

## Technische Details

### § 17 ApBetrO: Dispensierungspflichten

§ 17 ApBetrO schreibt für jede Arzneimittelabgabe vor:

1. **Formale Prüfung der Verordnung**: Vollständigkeit, Gültigkeitsdauer, Arztsignatur (bei E-Rezept: [[QES|qualifizierte elektronische Signatur]])
2. **Fachliche Prüfung**: Dosierungsangemessenheit, Wechselwirkungen mit bekannten Komedikationen
3. **Pharmazeutische Beratung**: Der Apotheker oder das pharmazeutisch-technische Personal muss den Patienten über korrekte Einnahme und Nebenwirkungen informieren
4. **Dokumentation**: Die Abgabe wird im AVS mit Datum, PZN, Chargennummer und Apothekerkürzel dokumentiert

Bei der Abgabe auf E-Rezept-Basis ist der Dispensierungsvorgang im [[E-Rezept]]-Fachdienst zu quittieren (`$close`-Operation auf dem FHIR-Task). Das AVS übermittelt damit den `MedicationDispense`-Datensatz.

> [!dev-quickstart] Dev Quickstart: E-Rezept $close: Dispensierung quittieren
> ```bash
> POST /Task/<task-id>/$close?secret=<task-secret>
> Host: erp.zentral.erp.splitdns.ti-dienste.de
> Authorization: Bearer <VAU-Access-Token>
> Content-Type: application/fhir+json
> ```
> Ab Profil 1.4 (seit 15.01.2025): `MedicationDispense` + `Medication` im `Parameters`-Wrapper:
> ```json
> {
>   "resourceType": "Parameters",
>   "parameter": [{
>     "name": "rxDispensation",
>     "part": [
>       { "name": "medicationDispense", "resource": { "resourceType": "MedicationDispense",
>           "performer": [{ "actor": { "identifier": { "system": "https://gematik.de/fhir/sid/telematik-id",
>                                                       "value": "<SMC-B Telematik-ID>" }}}],
>           "medicationReference": { "reference": "#med0" },
>           "lotNumber": "<Chargennummer>",
>           "whenHandedOver": "2025-01-20" }},
>       { "name": "medication", "resource": { "resourceType": "Medication",
>           "code": { "coding": [{ "system": "http://fhir.de/CodeSystem/ifa/pzn", "code": "<PZN>" }]}}}
>     ]
>   }]
> }
> ```
> - Profil: `GEM_ERP_PR_MedicationDispense` v1.4+ auf [Simplifier](https://simplifier.net/packages/de.gematik.erezept-workflow.r4/1.4.3)
> - `task-secret` aus vorherigem `$accept`-Response (`Task.identifier[secret]`)
> - Repo + vollst. Beispiele: [gematik/api-erp](https://github.com/gematik/api-erp) — `docs/erp_abrufen.adoc`

> [!praxis-tipp] Praxis-Tipp: E-Rezept-Abgabe Schritt für Schritt
> Seit Januar 2024 ist das E-Rezept für GKV-Patienten Pflicht. Ihre Checkliste für jede Abgabe:
>
> 1. E-Rezept im AVS einlesen (per eGK, QR-Code oder direkt aus dem Fachdienst)
> 2. Formale Prüfung: Gültigkeitsdauer 28 Tage ab Ausstellungsdatum, Arztsignatur vorhanden
> 3. AMTS-Prüfung im AVS abwarten und Ergebnis dokumentieren
> 4. Arzneimittel ausgeben und Beratungsgespräch führen
> 5. Abgabe im AVS quittieren (Fachdienst-Quittierung erfolgt automatisch)
>
> Häufiger Fehler: E-Rezept wird ausgegeben, aber die Quittierung im Fachdienst schlägt fehl. Prüfen Sie täglich den Ausnahme-Log Ihres AVS auf fehlgeschlagene Quittierungen.

> [!interesse-technik]
> § 17 ApBetrO ist die Rechtsgrundlage für die AMTS-Pflichtprüfung im AVS. Technisch bedeutet das: Das AVS muss bei jedem Abgabevorgang automatisch eine Interaktionsprüfung gegen eine aktuell lizenzierte Datenbank (z.B. [[ABDA-Datenbank]], MMI Pharmindex) anstoßen. Das Prüfergebnis muss im AVS-Log dokumentiert werden. Für [[E-Rezept]]-Abgaben: Der `MedicationDispense`-Datensatz im FHIR-Profil `de.gematik.erezept-workflow.r4` enthält Pflichtfelder für PZN, Chargennummer und Performer-Identifikation (Telematik-ID der Apotheke aus [[SMC-B]]). ApBetrO-konforme Dokumentation und gematik-FHIR-Profil-Anforderungen decken sich damit weitgehend.

### Abgrenzung zu anderen Rechtsquellen

Die ApBetrO steht in einem Normengefüge mit weiteren Rechtsvorschriften:

- **Apothekengesetz (ApoG)**: Ermächtigungsgrundlage für die ApBetrO; regelt Konzession und Grundstruktur
- **Arzneimittelgesetz (AMG)**: Regelt die Herstellung, Zulassung und den Verkehr mit Arzneimitteln
- **Betäubungsmittelgesetz (BtMG)** und **BtMVV**: Spezielle Regelungen für Betäubungsmittel; BtM-Rezepte sind nicht E-Rezept-fähig
- **[[SGB-V|SGB V]] § 129**: Regelt die Arzneimittelabgabe im GKV-Rahmen, insbesondere die Aut-idem-Pflicht und Rabattverträge

## Verknüpfungen

- [[Dispensierung]] (Abgabeprozess, den § 17 ApBetrO regelt)
- [[AMTS]] (Arzneimitteltherapiesicherheit: Prüfpflicht nach ApBetrO)
- [[Interaktionsprüfung]] (technische Umsetzung der ApBetrO-AMTS-Pflicht im AVS)
- [[AVS]] (Apothekensoftware: muss ApBetrO-Anforderungen technisch abbilden)
- [[ABDA-Datenbank]] (Arzneimitteldatenbank für die Interaktionsprüfung nach ApBetrO)
- [[E-Rezept]] (digitale Verordnung, bei deren Dispensierung ApBetrO-Pflichten gelten)
- [[Securpharm]] (Fälschungsschutz: ApBetrO-komplementäre Pflicht bei der Abgabe)
- [[QES]] (qualifizierte Signatur des Arztes auf dem E-Rezept: formale Prüfpflicht nach ApBetrO)
- [[SMC-B]] (Institutionskarte der Apotheke für die Authentisierung beim E-Rezept-Fachdienst)

## Quellen

- [§ 17 ApBetrO – Gesetze im Internet (Bundesjustizministerium)](https://www.gesetze-im-internet.de/apobetro_1987/__17.html)
- [Apothekenbetriebsordnung vollständiger Text – Gesetze im Internet](https://www.gesetze-im-internet.de/apobetro_1987/)
- [ABDA: Grundlagen für den Apothekenbetrieb (ApBetrO)](https://www.abda.de/apotheke-in-deutschland/grundlagen-fuer-den-apothekenbetrieb/)
- [Wikipedia: Apothekenbetriebsordnung](https://de.wikipedia.org/wiki/Apothekenbetriebsordnung)
