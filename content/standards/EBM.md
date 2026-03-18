---
title: EBM
audience: [technical, non-technical]
tags: [standards, vergütung, ambulant, abrechnung, gkv, kbv]
aliases: [Einheitlicher Bewertungsmaßstab, EBM-Ziffer, Bewertungsmaßstab]
---

# EBM

Der **Einheitliche Bewertungsmaßstab (EBM)** ist das bundesweit gültige Abrechnungsregelwerk für vertragsärztliche und vertragspsychotherapeutische Leistungen in der gesetzlichen Krankenversicherung.

## Erklärt für Einsteiger

Wenn ein Arzt dich behandelt, bekommt er dafür Geld von der Krankenkasse. Aber wie viel? Das legt der EBM fest. Er listet alle ärztlichen Leistungen auf, von der einfachen Beratung bis zur komplizierten Operation, und ordnet jeder Leistung eine Punktzahl zu. Ein Punkt hat einen festgelegten Geldwert, den sogenannten Orientierungswert. Der Arzt rechnet seine Leistungen über die [[Kassenärztliche Vereinigung|KV]] ab, die das Geld von der Krankenkasse bekommt und es an die Praxen verteilt.

## Überblick

Der EBM wird gemeinsam von der [[KBV]] (Kassenärztliche Bundesvereinigung) und dem [[GKV-Spitzenverband]] im **Bewertungsausschuss** beschlossen. Er ist das zentrale Vergütungsinstrument für die ambulante vertragsärztliche Versorgung in Deutschland und gilt für alle rund 150.000 Vertragsärzte und Vertragspsychotherapeuten.

Der EBM ist nach Fachgebieten und Leistungsbereichen strukturiert. Er enthält mehrere tausend **GOP** (Gebührenordnungspositionen), die jeweils durch eine fünfstellige Ziffernkombination identifiziert werden. Jede GOP hat eine Punktzahl und Abrechnungsvoraussetzungen (z.B. Mindestzeit, Quartalsbeschränkungen).

### Orientierungswert und Vergütung

Das Punktesystem des EBM funktioniert zweistufig:

1. **Orientierungswert**: Der bundeseinheitliche Geldwert eines Punktes, der jährlich zwischen KBV und GKV-Spitzenverband verhandelt wird. Für 2026 beträgt er **12,7404 Cent** (Anstieg um 2,8 % gegenüber 2025).
2. **Regionaler Punktwert**: Die tatsächliche Vergütung kann je nach Morbiditätsstruktur und Budgetvolumen der einzelnen [[Kassenärztliche Vereinigung|KV]] variieren.

### Abgrenzung zu anderen Vergütungssystemen

Der EBM gilt ausschließlich für ambulante GKV-Leistungen. Davon zu unterscheiden sind:

- **[[DRG]]** (Diagnosis Related Groups): Vergütungssystem für stationäre Krankenhausbehandlungen.
- **GOÄ** (Gebührenordnung für Ärzte): Vergütungsregelwerk für Privatpatienten (PKV) und Selbstzahler.
- **GOZ** (Gebührenordnung für Zahnärzte): Analoges Regelwerk für Zahnärzte im PKV-Bereich.

## Technische Details

### Struktur einer EBM-Ziffer

Jede GOP (Gebührenordnungsposition) im EBM enthält:

- **Leistungsbeschreibung**: Volltext der zu erbringenden Leistung
- **Bewertung**: Punkte (z.B. 116 Punkte = ca. 14,78 Euro bei Orientierungswert 2026)
- **Kalkulationszeit**: Durchschnittliche Arzt-Patienten-Kontaktzeit und Restzeit
- **Prüfzeit**: Mindestzeit, die nach GOPs-Protokoll einzuhalten ist
- **Obligater Leistungsinhalt**: Pflichtkomponenten der Leistung
- **Fakultativer Leistungsinhalt**: Optionale Komponenten
- **Abrechnungsbestimmungen**: Höchstzahlen pro Tag, Quartal oder Patient

### TI-Pauschalen im EBM

Seit der Einführung der [[Telematikinfrastruktur]] enthält der EBM spezifische **TI-Pauschalen**, die Praxen für die Nutzung von TI-Diensten vergüten:

- **GOP 01660**: TI-Betriebspauschale für den Betrieb der TI-Infrastruktur
- **GOP 01670–01672**: Pauschalen für [[eAU]] (elektronische Arbeitsunfähigkeitsbescheinigung)
- **GOP 01469**: [[VSDM]]-Pauschale (Versichertenstammdaten-Abgleich)

Die Höhe der TI-Pauschalen wird regelmäßig angepasst und ist im EBM-Kapitel 01 (Allgemeine Leistungen) geregelt.

### Datenformat und Abrechnung

Die Abrechnung gegenüber der [[Kassenärztliche Vereinigung|KV]] erfolgt über das **KVDT-Format** (Kassenärztlicher Datentransfer), das zur Familie der xDT-Formate gehört. Das [[PVS|Praxisverwaltungssystem (PVS)]] erzeugt eine KVDT-Datei mit allen im Quartal erbrachten Leistungen. Diese wird elektronisch an die KV übermittelt.

Seit 2020 stellt die [[KBV]] den EBM auch in einem maschinenlesbaren XML-Format bereit, das von PVS-Herstellern zur automatischen Kodierunterstützung genutzt werden kann.

### Bewertungsausschuss und Aktualisierungszyklen

Der **Bewertungsausschuss** (BA) ist das gemeinsame Beschlussgremium von KBV und GKV-Spitzenverband. Er tagt mindestens zweimal jährlich und beschließt Änderungen an den GOP und am Orientierungswert. Bei Uneinigkeit entscheidet ein **Erweiterter Bewertungsausschuss** mit unparteiischem Vorsitz.

Änderungen treten quartalsweise in Kraft (1. Januar, 1. April, 1. Juli, 1. Oktober). Die KBV veröffentlicht die aktuell gültige EBM-Fassung auf ihrer Website und als App (KBV2GO!).

## Verknüpfungen

- [[Kassenärztliche Vereinigung|KV]] (nimmt Abrechnungen nach EBM entgegen, verteilt Vergütung)
- [[KBV]] (gibt den EBM gemeinsam mit dem GKV-Spitzenverband heraus)
- [[PVS]] (Praxissoftware, in der EBM-Ziffern erfasst und KVDT-Dateien erstellt werden)
- [[GKV]] (Kostenträger, finanziert EBM-Vergütungen über Gesamtvergütungen an KVen)
- [[SGB-V]] (§ 87 SGB V: gesetzliche Grundlage für den EBM und den Bewertungsausschuss)
- [[DRG]] (Parallelsystem für stationäre Vergütung in Krankenhäusern)
- [[eAU]] (elektronische AU-Bescheinigung, hat eigene EBM-Pauschalen)
- [[VSDM]] (Versichertenstammdaten-Abgleich, hat EBM-Pauschale)
- [[Telematikinfrastruktur]] (TI-Nutzung wird über EBM-Pauschalen vergütet)

## Quellen

- [KBV: EBM – Einheitlicher Bewertungsmaßstab](https://www.kbv.de/praxis/abrechnung/ebm)
- [Bewertungsausschuss: Beschlüsse und Sitzungen](https://institut-ba.de/)
- [Wikipedia: Einheitlicher Bewertungsmaßstab](https://de.wikipedia.org/wiki/Einheitlicher_Bewertungsma%C3%9Fstab)
- [§ 87 SGB V – Einheitlicher Bewertungsmaßstab – Gesetze im Internet](https://www.gesetze-im-internet.de/sgb_5/__87.html)
