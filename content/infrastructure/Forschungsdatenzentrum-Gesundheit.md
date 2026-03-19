---
title: Forschungsdatenzentrum Gesundheit
audience: [technical, non-technical]
tags: [infrastruktur, forschung, gesundheitsdaten, bfarm, sekundärnutzung, gdng]
aliases: [FDZ Gesundheit, FDZ, Forschungsdatenzentrum]
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

### Rechtliche Auseinandersetzungen

Im **Februar 2026** reichte die Gesellschaft für Freiheitsrechte (GFF) eine Klage gegen die Weitergabe von GKV-Daten an das FDZ ein. Die GFF zweifelt daran, ob das eingesetzte Pseudonymisierungsverfahren ausreichend ist, um eine Reidentifikation von Versicherten auszuschließen. Das Verfahren ist anhängig.

### Verbindung zum EHDS

Das FDZ Gesundheit ist der deutsche Beitrag zur **Secondary Use**-Infrastruktur des [[EHDS]] (European Health Data Space). Der EHDS verpflichtet alle EU-Mitgliedstaaten, eine nationale Infrastruktur für die Sekundärnutzung von Gesundheitsdaten aufzubauen. Das FDZ fungiert als nationaler HealthData@EU-Zugangspunkt für Deutschland.

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

### Pseudonymisierungsverfahren

GKV-Abrechnungsdaten werden mit einem einheitlichen **Pseudonym** versehen, das die Verknüpfung von Daten über verschiedene Leistungserbringer hinweg ermöglicht (Längsschnittanalysen), ohne direkten Personenbezug herzustellen. Das Verfahren basiert auf einer kryptografischen Hashfunktion, angewendet auf die [[KVNR]] (Krankenversicherungsnummer).

Die Adäquatheit dieses Verfahrens ist Gegenstand der GFF-Klage (Februar 2026), da die KVNR als quasi-stabiles Pseudonym bei Datenlecks möglicherweise rückführbar ist.

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
