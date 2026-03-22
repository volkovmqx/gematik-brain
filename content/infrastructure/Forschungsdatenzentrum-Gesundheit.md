---
title: Forschungsdatenzentrum Gesundheit
audience: [technical, non-technical]
tags: [infrastruktur, forschung, gesundheitsdaten, bfarm, sekundärnutzung, gdng]
aliases: [FDZ Gesundheit, FDZ, Forschungsdatenzentrum]
relevance:
  sectors: [forschung, kasse, regulierung, hersteller, it-dienstleister]
  interests: [compliance, technik, business]
maturity: wachsend
---

# Forschungsdatenzentrum Gesundheit

Das **Forschungsdatenzentrum Gesundheit (FDZ)** ist eine beim [[BfArM]] angesiedelte Forschungsinfrastruktur, die pseudonymisierte GKV-Abrechnungsdaten und weitere Gesundheitsdaten für zugelassene Forschungsprojekte bereitstellt.

## Erklärt für Einsteiger

Millionen Arztbesuche, Klinikaufenthalte und Arzneimittelverordnungen erzeugen riesige Mengen an Daten. Diese Daten könnten Forschern zeigen, welche Behandlungen wirklich helfen, welche Bevölkerungsgruppen besonders häufig erkranken oder wie die Gesundheitsversorgung besser geplant werden kann. Bisher waren diese Daten kaum zugänglich. Das FDZ Gesundheit ist wie eine Bibliothek für Gesundheitsdaten: Wer einen guten Grund hat (Forschung im Gemeinwohlinteresse), kann dort unter strengen Auflagen Daten nutzen. Die Patienten selbst werden nie identifizierbar.

## Überblick

Das FDZ Gesundheit wurde durch das **Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz (DVPMG, 2021)** beim [[BfArM]] eingerichtet. Die gesetzliche Grundlage für den Datenzugang ist in den **§§ 303a bis 303f SGB V** geregelt.

Durch das **[[GDNG]]** (Gesundheitsdatennutzungsgesetz, März 2024) wurde das FDZ erheblich erweitert: mehr Datenquellen, schnellere Zugangsverfahren, Möglichkeit zur Verknüpfung mit weiteren Registerdaten (z.B. klinische Krebsregister).

Das FDZ ist von der [[BfArM]]-Haupttätigkeit (Arzneimittelzulassung) organisatorisch getrennt. Es untersteht der Rechtsaufsicht des [[BMG]].

### Datenbestände

Das FDZ stellt folgende Daten bereit:

- **GKV-Abrechnungsdaten** (SGB V § 303a ff.): Alle Abrechnungsdaten der gesetzlichen Krankenkassen, pseudonymisiert. Enthält Diagnosen ([[ICD-10-GM]]), Prozeduren ([[OPS]]), Arzneimittelverordnungen ([[E-Rezept]]-Daten ab Mitte 2026), stationäre Aufnahmen ([[DRG]]), ambulante Leistungen.
- **ePA-Daten** (nach [[GDNG]]): Pseudonymisierte Daten aus der [[ePA]], soweit Versicherte nicht widersprochen haben.
- **Krankenversichertendaten**: Stammdaten der GKV-Versicherten (anonymisiert/pseudonymisiert).
- **Verknüpfungen mit Registern**: Das FDZ kann Abrechnungsdaten mit klinischen Krebsregistern oder anderen Registerdaten verknüpfen.

### E-Rezept-Daten ab Mitte 2026

Ab **Mitte 2026** fließen [[E-Rezept]]-Daten pseudonymisiert aus der [[ePA]] an das FDZ. Grundlage ist das [[GDNG]]. Damit steht erstmals eine vollständige, bundesweite Arzneimittelverordnungsdatenbank für die Forschung zur Verfügung.

> [!frist-warnung] Frist-Warnung: Quartalsweise Datenmeldepflicht der Krankenkassen
> **Rechtsgrundlage:** § 303b Abs. 1 SGB V (Datenzusammenführung und -übermittlung); Datentransparenzverordnung (DaTraV) i.d.F. des GDNG (BGBl. I 2024, Nr. 94)
> **Frist:** Gesetzliche Krankenkassen sind verpflichtet, ihre Abrechnungsdaten spätestens zehn Wochen nach Ende jedes Quartals an den GKV-Spitzenverband als datenhaltende Stelle zu übermitteln. Der GKV-Spitzenverband leitet die Daten nach einer vierwöchigen Prüfphase ans FDZ weiter. Damit stehen Daten eines Quartals dem FDZ frühestens vier Monate nach Quartalsende zur Verfügung.
> **Handlungsbedarf:** Krankenkassen müssen sicherstellen, dass ihre Abrechnungssysteme die vollständigen, plausiblen und konsistenten Datenmeldungen fristgerecht erzeugen. Mängel in der Datenqualität führen zu einer Rückweisung durch den GKV-Spitzenverband und verzögern die Forschungsdatenverfügbarkeit. Die technischen Anforderungen an das Übermittlungsformat sind in der DaTraV geregelt.
> **Bei Nichtbeachtung:** Verspätete oder mangelhafte Meldungen sind ein Vertragsverstoß gegenüber dem GKV-Spitzenverband und können zur Nachforderung von Bereinigungsleistungen führen.

### Rechtliche Auseinandersetzungen

Im **Februar 2026** reichte die Gesellschaft für Freiheitsrechte (GFF) eine Klage gegen die Weitergabe von GKV-Daten an das FDZ ein. Die GFF zweifelt daran, ob das eingesetzte Pseudonymisierungsverfahren ausreichend ist, um eine Reidentifikation von Versicherten auszuschließen. Das Verfahren ist anhängig.

### Geplante Erweiterung 2026: Tägliche ePA-Daten und KI-Fähigkeiten

Das BMG stellte im Februar 2026 Pläne vor, das FDZ deutlich auszubauen. Kernpunkte der Strategie:

- **Tägliche ePA-Datenübermittlung**: Ab Inkrafttreten des geplanten [[GDVG]] sollen pseudonymisierte Daten aus der [[ePA]] täglich automatisch an das FDZ übermittelt werden. Aktuell fließen E-Rezept-Daten erst ab Mitte 2026 ans FDZ.
- **KI-Ausbau**: Das FDZ soll KI-fähig werden, um komplexe Auswertungen über große Datenmengen zu ermöglichen.
- **Medizinregistergesetz**: Rund 350 bestehende medizinische Register sollen vereinheitlicht und über pseudonymisierte Identifikatoren (auf Basis der Versichertennummer) miteinander und mit FDZ-Daten verknüpfbar gemacht werden.
- **Mehr Zugangsberechtigte**: Über 80 Institutionen, darunter Pharmaunternehmen und Behörden, sollen Zugang erhalten.

Datenschützer und die GFF kritisieren, dass die Pseudonymisierung bei seltenen Krankheiten keine ausreichende Re-Identifikationsbarriere bietet. GKV-Versicherte haben kein Widerspruchsrecht gegen die Datenübermittlung ans FDZ.

> [!interesse-compliance] Datenzugangsbedingungen und Widerspruchsrecht
> GKV-Versicherte haben **kein Widerspruchsrecht** gegen die Übermittlung ihrer Abrechnungsdaten an das FDZ (§ 303a ff. SGB V). PKV-Versicherte hingegen schon. Die Weitergabe pseudonymisierter ePA-Daten ist nach dem [[GDNG]] geregelt; hier besteht ein Opt-out über die [[ePA]]-App. Forschungseinrichtungen müssen einen förmlichen Antrag stellen und die Gemeinwohlorientierung nachweisen. Das FDZ führt ein öffentliches Antragsregister. Die GFF-Klage (Februar 2026) zweifelt an der Ausreichendheit der Pseudonymisierung; das Verfahren ist anhängig.

### Verbindung zum EHDS

Das FDZ Gesundheit ist der deutsche Beitrag zur **Secondary Use**-Infrastruktur des [[EHDS]] (European Health Data Space). Der EHDS verpflichtet alle EU-Mitgliedstaaten, eine nationale Infrastruktur für die Sekundärnutzung von Gesundheitsdaten aufzubauen. Das FDZ fungiert als nationaler HealthData@EU-Zugangspunkt für Deutschland.

> [!frist-warnung] Frist-Warnung: EHDS Secondary Use-Infrastruktur (HealthData@EU)
> **Rechtsgrundlage:** Verordnung (EU) 2025/327 (EHDS-Verordnung), Kapitel IV (Sekundärnutzung von Gesundheitsdaten); in Kraft seit 26. März 2025; Geltung der Sekundärnutzungsbestimmungen ab 26. März 2027
> **Frist:** Ab 26. März 2027 müssen Mitgliedstaaten nationale Zugangsstellen für die Sekundärnutzung von Gesundheitsdaten benennen und an das europäische HealthData@EU-Netzwerk anschließen. Deutschland muss das FDZ Gesundheit als nationalen Zugangspunkt (Gesundheitsdaten-Zugangsstelle nach Art. 36 EHDS-Verordnung) formell benennen und die technischen Anschlussbedingungen erfüllen.
> **Handlungsbedarf:** Das BMG und das BfArM müssen die formelle Benennung des FDZ als nationale Gesundheitsdaten-Zugangsstelle vorbereiten. Die technischen Spezifikationen für den HealthData@EU-Anschluss (europäischer Datenaustauschinfrastruktur) werden von der EU-Kommission bis 2026 festgelegt. Datenhaltende Stellen (Krankenkassen, Krankenhäuser) sollten die Kompatibilität ihrer Datenmeldeprozesse mit den EHDS-Anforderungen prüfen.
> **Bei Nichtbeachtung:** Verspätete Umsetzung kann zu Vertragsverletzungsverfahren durch die EU-Kommission führen. Deutschland riskiert außerdem den Ausschluss von EU-Forschungsförderung, die eine HealthData@EU-Anbindung voraussetzt.

## Technische Details

### Datenzugang und Antragstellung

Der Datenzugang ist mehrstufig und antragsbasiert:

1. **Antragstellung**: Forschende reichen einen Antrag beim FDZ ein. Der Antrag muss Forschungszweck, benötigte Datenvariablen und Methoden beschreiben.
2. **Prüfung**: Das FDZ prüft die Zulässigkeit des Forschungszwecks (gemeinwohlorientiert) und das Re-Identifikationsrisiko.
3. **Datenbereitstellung**: Das FDZ stellt Daten in einer der drei Formen bereit:
   - Anonymisierte aggregierte Daten (Standardfall)
   - Pseudonymisierte Einzeldatensätze (nur unter strengen Auflagen)
   - Kontrollierte Fernzugriffsumgebung (Secure Data Environment, SDE)
4. **Nutzung**: Forschende arbeiten in der kontrollierten Umgebung. Ergebnisse werden auf Reidentifikationsrisiko geprüft, bevor sie das FDZ verlassen.

Das FDZ führt ein öffentliches **Antragsregister**, das Informationen über genehmigte Projekte und deren Ergebnisse dokumentiert.

> [!dev-quickstart] Dev Quickstart: FDZ Datenzugang beantragen
> Das FDZ stellt keine öffentliche REST-API bereit. Zugang erfolgt ausschließlich über das Antragsportal und die Secure Processing Environment (SPE).
>
> **Antragsprozess (ab Oktober 2025 operativ):**
> 1. Registrierung im Datenantragsportal: [forschungsdatenzentrum-gesundheit.de](https://www.forschungsdatenzentrum-gesundheit.de)
> 2. Antrag einreichen: Forschungszweck (Gemeinwohlorientierung), Datenvariablen, Methoden, Re-Identifikationskonzept
> 3. Nach Genehmigung: Zugriff auf Secure Data Environment (virtualisierter Browser-Zugang)
> 4. Auswertung in der SPE mit vorinstallierten Analysetools (R, Python, SPSS) und Standardanalysen
> 5. Ergebnisexport nur nach Disclosure-Control-Prüfung durch FDZ-Mitarbeiter
>
> **Datenvariablen und Kodierung:**
> - Diagnosen: [[ICD-10-GM]] (ambulant/stationär), [[OPS]] (Prozeduren), [[DRG]] (Fallpauschalen)
> - Arzneimittel: ATC-Codes, PZN (ab Mitte 2026 aus E-Rezept-Daten)
> - Terminologieserver BfArM (FHIR-basiert): [terminologieserver.bfarm.de](https://terminologieserver.bfarm.de)
>
> **Helpdesk:** helpdesk@forschungsdatenzentrum-gesundheit.de
> **Antragsregister:** [bfarm.de/FDZ Antragsregister](https://www.bfarm.de/DE/Das-BfArM/Aufgaben/Forschungsdatenzentrum/_node.html)

### Pseudonymisierungsverfahren

GKV-Abrechnungsdaten werden mit einem einheitlichen **Pseudonym** versehen, das die Verknüpfung von Daten über verschiedene Leistungserbringer hinweg ermöglicht (Längsschnittanalysen), ohne direkten Personenbezug herzustellen. Das Verfahren basiert auf einer kryptografischen Hashfunktion, angewendet auf die [[KVNR]] (Krankenversicherungsnummer). Mehr zum technischen Hintergrund: [[Pseudonymisierung]].

Die Adäquatheit dieses Verfahrens ist Gegenstand der GFF-Klage (Februar 2026), da die KVNR als quasi-stabiles Pseudonym bei Datenlecks möglicherweise rückführbar ist.

> [!interesse-technik] Datenzugang und Pseudonymisierungsverfahren
> Daten werden als anonymisierte Aggregate, pseudonymisierte Einzeldatensätze oder in einer Secure Data Environment (SDE) bereitgestellt. Pseudonymisierung: kryptografische Hashfunktion auf Basis der [[KVNR]]. Der FHIR-basierte [[Terminologieserver]] des [[BfArM]] stellt Kodierungen für [[ICD-10-GM]], [[OPS]], [[SNOMED CT]] bereit. Ab Mitte 2026 fließen [[E-Rezept]]-Daten aus der [[ePA]] täglich pseudonymisiert ans FDZ. Antragstellung über das FDZ-Portal: [forschen-mit-gesundheitsdaten.de](https://www.forschen-mit-gesundheitsdaten.de). API-Spezifikationen und technische Anforderungen werden auf der BfArM-FDZ-Seite veröffentlicht.

### Zugangsberechtigte Forschungseinrichtungen

Nach § 303e SGB V sind berechtigt:
- Universitäten und Hochschulen
- Öffentlich finanzierte Forschungseinrichtungen
- Bundesoberbehörden (z.B. RKI, BfArM selbst)
- Unternehmen, soweit sie gemeinwohlorientierte Forschung betreiben und die Anforderungen erfüllen

## Verknüpfungen

- [[BfArM]] (beherbergt und betreibt das FDZ)
- [[GDNG]] (erweitert das FDZ erheblich und regelt Datenzugang)
- [[GKV]] (Abrechnungsdaten der GKV sind zentrale Datenquelle)
- [[ePA]] (ePA-Daten fließen über GDNG in die Sekundärnutzung)
- [[E-Rezept]] (E-Rezept-Daten fließen ab Mitte 2026 ins FDZ)
- [[EHDS]] (FDZ ist Deutschlands Beitrag zur EU-Forschungsdateninfrastruktur)
- [[KVNR]] (Krankenversicherungsnummer als Basis des Pseudonymisierungsverfahrens)
- [[ICD-10-GM]] (Diagnosekodierung in den FDZ-Daten)
- [[SGB V]] (§§ 303a–303f: Rechtsgrundlage des FDZ)
- [[DVPMG]] (Gründungsgesetz des FDZ)
- [[Medizininformatik-Initiative]] (MII; komplementäre Forschungsinfrastruktur für Universitätskliniken)

## Quellen

- [BfArM: Forschungsdatenzentrum Gesundheit](https://www.bfarm.de/DE/Forschung/Forschungsdatenzentrum-Gesundheit/_node.html)
- [§ 303a SGB V – Forschungsdatenzentrum](https://www.gesetze-im-internet.de/sgb_5/__303a.html)
- [§ 303e SGB V – Zugangsberechtigte und Zwecke](https://www.gesetze-im-internet.de/sgb_5/__303e.html)
- [BMG: Gesundheitsdatennutzungsgesetz (GDNG)](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/gesundheitsdatennutzungsgesetz.html)
- [GFF: Klage gegen GKV-Datenweitergabe an FDZ (Februar 2026)](https://freiheitsrechte.org)
