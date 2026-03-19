---
title: Kassenärztliche Vereinigung
audience: [technical, non-technical]
tags: [organisation, kv, abrechnung, ambulant]
aliases: [KV, Kassenärztliche Vereinigungen, KVen, Kassenärztliche Vereinigung]
---

# Kassenärztliche Vereinigung

Die **Kassenärztliche Vereinigung (KV)** ist eine regionale Körperschaft des öffentlichen Rechts, über die niedergelassene Ärzte und Psychotherapeuten die Vergütung ihrer Leistungen mit den gesetzlichen Krankenkassen abrechnen.

## Erklärt für Einsteiger

Wenn du zum Arzt gehst und deine Gesundheitskarte vorzeigst, weiß der Arzt, dass er von der Krankenkasse bezahlt wird. Aber wie kommt das Geld zur Praxis? Dazwischen steht die Kassenärztliche Vereinigung: Sie sammelt die Abrechnungsdaten der Ärzte, prüft sie und verteilt das Geld aus einem gemeinsamen Topf. Jedes Bundesland hat eine eigene KV, zusammengeschlossen sind sie in der [[KBV]].

## Überblick

Es gibt 17 Kassenärztliche Vereinigungen in Deutschland, eine je Bundesland (Nordrhein-Westfalen hat zwei: KV Nordrhein und KV Westfalen-Lippe). Sie sind nach [[SGB-V]] (§ 77 ff.) als Körperschaften des öffentlichen Rechts organisiert. Die Mitgliedschaft ist für niedergelassene Vertragsärzte und Vertragspsychotherapeuten Pflicht.

Die KVen erfüllen zwei Kernaufgaben:

1. **Sicherstellung der ambulanten Versorgung**: Die KV garantiert gegenüber den Krankenkassen, dass ihre Mitglieder die vertragsärztliche Versorgung flächendeckend gewährleisten.
2. **Abrechnung**: Sie nehmen die Abrechnungsdaten der Praxen entgegen, prüfen diese und vergüten die Leistungen aus der Gesamtvergütung, die sie von den Krankenkassen erhalten.

Auf Bundesebene ist die [[KBV]] (Kassenärztliche Bundesvereinigung) der Dachverband. Sie ist unter anderem Gesellschafter der [[gematik]].

## Technische Details

### KVDT: Abrechnungsdatenformat

Das **[[KVDT]]** (Kassenärztlicher Datentransfer) ist das standardisierte Dateiformat für die Übertragung von Abrechnungsdaten aus dem [[PVS|Praxisverwaltungssystem (PVS)]] an die jeweilige KV. Es gehört zur Familie der [[xDT]]-Formate (KVDT, GDT, LDT, BDT), die von der [[KBV]] und den KVen spezifiziert werden.

Der Abrechnungsworkflow:
1. Arzt erfasst Behandlungsfall im [[PVS]]
2. PVS erstellt eine KVDT-Datei (strukturiertes Textformat mit Feldkennzeichen)
3. Datei wird online an die KV übermittelt (in der Regel über ein KV-Connect-Portal)
4. KV prüft sachlich und rechnerisch, bereinigt Unstimmigkeiten (Plausibilitätsprüfung)
5. KV vergütet auf Basis des [[EBM]] (Einheitlicher Bewertungsmaßstab)

### Bezug zur Telematikinfrastruktur

Die KVen sind an die [[Telematikinfrastruktur]] angebunden. Sie erhalten über die TI unter anderem:

- [[eAU]]-Daten (Arbeitsunfähigkeitsbescheinigungen) von den Praxen
- Abrechnungsrelevante Daten, die künftig über TI-Kommunikationswege wie [[KIM]] übermittelt werden

Für die Prüfung der TI-Nutzung durch ihre Mitglieder spielen die KVen eine wichtige Rolle: Sie können die [[TI-Pauschale]] kürzen oder streichen, wenn Praxen Pflichtanwendungen nicht nutzen.

### KV-SafeNet

[[KV-SafeNet]] ist ein von mehreren KVen betriebenes VPN-Netz für den sicheren Datenaustausch zwischen Praxen und KVen. Es ist kein Teil der [[Telematikinfrastruktur]], wird aber parallel genutzt für die Abrechnungskommunikation. Mit der Ausbreitung der TI wird KV-SafeNet schrittweise abgelöst.

## Verknüpfungen

- [[KBV]] (Kassenärztliche Bundesvereinigung, Dachverband der KVen)
- [[EBM]] (Einheitlicher Bewertungsmaßstab, Vergütungsgrundlage für KV-Abrechnungen)
- [[PVS]] (Praxisverwaltungssystem, aus dem KVDT-Abrechnungsdaten exportiert werden)
- [[eAU]] (Elektronische Arbeitsunfähigkeitsbescheinigung, wird über TI an Krankenkassen und KV gemeldet)
- [[KIM]] (Kommunikationsdienst, zunehmend für Abrechnungsdaten genutzt)
- [[gematik]] (KBV ist Gesellschafter; KVen sind TI-Teilnehmer)
- [[GKV]] (Gesetzliche Krankenversicherung, zahlt die Gesamtvergütung an die KVen)
- [[SGB-V]] (Rechtsgrundlage für KVen, § 77 ff.)
- [[Telematikinfrastruktur]] (Infrastruktur, über die Praxen und KVen kommunizieren)
- [[TI-Pauschale]] (KVen zahlen die TI-Pauschale aus und prüfen die Voraussetzungen)
- [[Bewertungsausschuss]] (beschließt EBM-Leistungen und Pauschalen, die KVen umsetzen)

## Quellen

- [Kassenärztliche Bundesvereinigung: Was sind KVen?](https://www.kbv.de/html/kven.php)
- [Wikipedia: Kassenärztliche Vereinigung](https://de.wikipedia.org/wiki/Kass%C3%A4rztliche_Vereinigung)
- [SGB V § 77 - Gesetze im Internet](https://www.gesetze-im-internet.de/sgb_5/__77.html)
