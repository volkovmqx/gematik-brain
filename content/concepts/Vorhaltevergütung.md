---
title: Vorhaltevergütung
audience: [technical, non-technical]
tags: [konzept, finanzierung, krankenhaus, vergütung, khvvg]
aliases: [Vorhaltepauschale, leistungsunabhängige Vergütung, Infrastrukturvergütung]
relevance:
  sectors: [krankenhaus, kasse, regulierung, hersteller, it-dienstleister]
  interests: [compliance, business]
maturity: immergruen
---

# Vorhaltevergütung

Die **Vorhaltevergütung** ist eine neue Vergütungskomponente für Krankenhäuser, die ab 1. Januar 2027 bis zu 60 Prozent der Betriebskosten einer Einrichtung leistungsunabhängig vergütet, um die Krankenhausstruktur zu stabilisieren.

## Erklärt für Einsteiger

Stell dir vor, ein Feuerwehrhaus in einer kleinen Stadt hat kaum Einsätze, muss aber trotzdem immer besetzt und einsatzbereit sein. Man bezahlt die Feuerwehr nicht nur für die Anzahl der Einsätze, sondern auch dafür, dass sie verfügbar ist. Genauso funktioniert die Vorhaltevergütung: Krankenhäuser werden nicht nur dafür bezahlt, wie viele Patienten sie behandeln, sondern auch dafür, dass sie bestimmte Kapazitäten und Fachabteilungen vorhalten. Das soll Krankenhäuser in der Fläche erhalten, auch wenn sie nicht immer ausgelastet sind.

## Überblick

Das deutsche Krankenhausvergütungssystem funktioniert derzeit fast ausschließlich über die [[DRG]]-Fallpauschalen: Ein Krankenhaus bekommt Geld pro behandeltem Fall. Das führt zu einem Anreiz, möglichst viele Patienten zu behandeln, und benachteiligt Häuser in wenig besiedelten Regionen mit geringen Fallzahlen.

Das [[KHVVG]] (Krankenhausversorgungsverbesserungsgesetz, 2024) hat die Vorhaltevergütung als neues Element eingeführt. Sie gilt ab dem **1. Januar 2027** und verändert die Vergütungsstruktur grundlegend:

- Bis zu **60 Prozent** der Betriebskosten einer Einrichtung können als Vorhaltevergütung abgerechnet werden.
- Die restlichen Anteile bleiben als DRG-Fallpauschalen erhalten.
- Die Vorhaltevergütung wird pro Leistungsgruppe berechnet, nicht pauschal für das gesamte Haus.

### Verhältnis zu den Leistungsgruppen

Die Vorhaltevergütung ist eng mit dem System der **65 Leistungsgruppen** verknüpft, das das [[KHVVG]] eingeführt hat. Jede Leistungsgruppe (z.B. Kardiologie, Unfallchirurgie, Geburtshilfe) hat einen definierten Vorhalteanteil. Nur Krankenhäuser, denen eine Leistungsgruppe durch die Landesplanung zugewiesen wurde, erhalten für diese Gruppe die Vorhaltevergütung.

Das noch nicht verabschiedete [[KHAG]] (Krankenhausreformanpassungsgesetz, Bundesrat-Abstimmung: 27. März 2026) sieht vor, die Leistungsgruppen von 65 auf 61 zu reduzieren. Ob und wie dies die Vorhaltevergütungsberechnung verändert, hängt vom Ausgang der Abstimmung ab.

> [!interesse-compliance]
> Ab 1. Januar 2027 müssen Krankenhäuser die IT-Dokumentationsanforderungen der ihnen zugewiesenen Leistungsgruppen erfüllen, um die Vorhaltevergütung abzurechnen. Die Zuordnung zu Leistungsgruppen bindet das Krankenhaus an konkrete strukturelle und digitale Nachweispflichten. Krankenhäuser sollten mit ihrer IT-Abteilung prüfen, ob die notwendigen KIS-Module und ISiK-Zertifizierungen fristgerecht verfügbar sind. Frühzeitige Kommunikation mit der Landesbehörde über die Leistungsgruppen-Zuordnung ist wichtig, da die Planung die Förderfähigkeit im [[Transformationsfonds]] beeinflusst.

> [!frist-warnung] Frist-Warnung: Leistungsgruppen-Zuordnung durch Bundesländer bis 31. Oktober 2026
> **Rechtsgrundlage:** § 135e Abs. 1 SGB V i.V.m. Anlage 1 KHVVG (Krankenhausversorgungsverbesserungsgesetz, BGBl. I 2024 Nr. 351).
> **Frist:** Die Bundesländer sind verpflichtet, den Krankenhäusern bis zum 31. Oktober 2026 ihre Leistungsgruppen-Zuordnungen zuzuweisen. Erst nach dieser Zuweisung steht fest, für welche Leistungsgruppen ein Krankenhaus ab dem 1. Januar 2027 Vorhaltevergütung erhält.
> **Handlungsbedarf:** Krankenhäuser müssen gegenüber der zuständigen Landesbehörde nachweisen, dass sie die strukturellen Voraussetzungen (Personal, Ausstattung, Mindestvorhaltezahlen) für jede beantragte Leistungsgruppe erfüllen. Die IT-Dokumentation im KIS muss die relevanten Diagnose- und Prozedurkodierungen vollständig abbilden, da diese als Nachweise für die Leistungsgruppen-Zuweisung herangezogen werden.
> **Bei Nichtbeachtung:** Krankenhäuser, die bis zum Stichtag keine oder zu wenige Leistungsgruppen zugewiesen bekommen, erhalten ab dem 1. Januar 2027 keine oder eine reduzierte Vorhaltevergütung. Eine rückwirkende Korrektur der Zuweisung ist nicht vorgesehen.

### Verhältnis zur DRG-Vergütung

Die Vorhaltevergütung ergänzt die DRG-Fallpauschalen, ersetzt sie aber nicht vollständig:

| Vergütungskomponente | Anteil | Zeitraum |
|---|---|---|
| DRG-Fallpauschalen | 40 % der Betriebskosten (künftig) | Weiterhin für Fallmengen |
| Vorhaltevergütung | Bis 60 % der Betriebskosten | Ab 1. Januar 2027 |

In der Übergangsphase (2025 bis 2026) gilt noch das alte DRG-System weitgehend unverändert. Ab 2027 wird die Vorhaltevergütung schrittweise eingeführt.

> [!interesse-business]
> Die Vorhaltevergütung verändert die wirtschaftliche Steuerungslogik von Krankenhäusern. Für IT-Hersteller und Berater bedeutet das: Krankenhäuser müssen ihre Leistungsgruppen-Zuordnung dokumentieren und nachweisen. Das schafft Nachfrage nach IT-Lösungen für Leistungsgruppen-Tracking, DRG-Vorhaltekostenberechnung und ISiK-konformen KIS-Modulen. Die Vorhaltevergütung setzt zudem Anreize für Zusammenlegungen und Spezialisierungen, was weitere IT-Investitionen auslöst (Datenmigration, KIS-Wechsel, TI-Neuanbindung).

## Technische Details

### Berechnungsgrundlage

Die genaue Berechnungsmethodik der Vorhaltevergütung wird durch die Krankenhausfinanzierungsgesetz-Verordnungen und durch die Vereinbarungen zwischen [[DKG]] und [[GKV-Spitzenverband]] festgelegt. Folgende Elemente sind maßgeblich:

- **Vorhaltekosten pro Leistungsgruppe**: Definierte Kostensätze für die Vorhaltung von Kapazitäten (Personal, Geräte, Infrastruktur) pro Leistungsgruppe.
- **Leistungsgruppen-Zuordnung**: Durch die Landesplanung festgelegt. Das Bundesland bestimmt, welches Krankenhaus welche Gruppen anbieten darf.
- **Skalierung nach Betten und Standortgröße**: Kleinere Häuser erhalten proportional mehr Vorhalteunterstützung, um die Versorgung in der Fläche zu sichern.

> [!frist-warnung] Frist-Warnung: Vorhaltevergütung erfordert ISiK-Konformität ab 1. Januar 2027
> **Rechtsgrundlage:** § 135e Abs. 3 SGB V i.V.m. der ISiK-Rahmenvereinbarung der gematik; KHVVG Anlage 1 (Leistungsgruppen-Anforderungen).
> **Frist:** Ab dem 1. Januar 2027 ist die Vorhaltevergütung budgetwirksam. Die Abrechnung setzt voraus, dass das KIS die für die jeweilige Leistungsgruppe vorgeschriebenen digitalen Dokumentationspflichten (ISiK-Stufe 1 und 2) erfüllt und die Daten strukturiert exportierbar sind.
> **Handlungsbedarf:** Die IT-Abteilung muss mit dem KIS-Hersteller klären, ob ISiK Stufe 1 (Basisprofile: Patient, Encounter, Condition, Procedure) und Stufe 2 (Medikation, DiagnosticReport) für das eigene System zertifiziert sind. Fehlende Zertifizierungen müssen noch 2026 nachgeholt werden, da KIS-Zertifizierungsverfahren mehrere Monate dauern können.

### IT-Anforderungen für die Vorhaltevergütung

Für die Abrechnung der Vorhaltevergütung müssen Krankenhäuser bestimmte Dokumentationsanforderungen erfüllen, die zunehmend digitale Nachweise erfordern:

- **[[ISiK]]-Konformität**: Das [[KIS]] muss die ISiK-Schnittstellen bereitstellen, damit Leistungsgruppen-relevante Dokumentation nachweisbar ist.
- **[[DEMIS]]-Anbindung**: Meldepflichtige Krankheiten müssen digital an das Gesundheitsamt gemeldet werden.
- **[[ePA]]-Anbindung**: Entlassdokumente und Behandlungsdokumentation müssen strukturiert in der ePA bereitstehen.

> [!klinik-integration] Klinik-Integration: KIS-Readiness für Vorhaltevergütung ab 2027
> Die Vorhaltevergütung erfordert ab 1. Januar 2027 lückenlose Dokumentation der zugewiesenen Leistungsgruppen. Die IT-Abteilung muss die Voraussetzungen schaffen, lange bevor die erste Abrechnung gestellt wird.
>
> **ISiK-Zertifizierungsstatus prüfen:** Für jede Leistungsgruppe (z.B. Kardiologie, Unfallchirurgie, Geburtshilfe) sind spezifische digitale Nachweise erforderlich. Das KIS muss die relevanten ISiK-Basisprofile (Patient, Encounter, Condition, Procedure) bereitstellen. Prüfen Sie beim KIS-Hersteller (SAP IS-H, Orbis/Dedalus, iMedOne, CGM MEDICO), welche ISiK-Stufen zertifiziert sind und ob die Leistungsgruppen-spezifischen Anforderungen abgebildet werden.
> **Dokumentationstiefe im KIS:** Die Landesplanung weist Leistungsgruppen auf Basis strukturierter Nachweise zu. Diagnose- und Prozedurkodierung (ICD-10-GM, OPS) muss vollständig und korrekt im KIS erfolgen. Unvollständige Kodierung kann die Zuordnung zur Leistungsgruppe gefährden und damit die Vorhaltevergütung.
> **Abrechnung und Controlling:** Die Vorhaltevergütung (bis 60 % der Betriebskosten) und der verbleibende DRG-Anteil (40 %) müssen im KIS und im Controlling-System getrennt erfasst werden. Stimmen Sie jetzt ab, ob Ihr KIS-Hersteller die neue Abrechnungslogik für 2027 vorbereitet.
> **Verfügbarkeit der Nachweise:** Nachweise für den Medizinischen Dienst müssen auf Abruf aus dem KIS exportierbar sein. Planen Sie standardisierte Reports für Leistungsgruppen-spezifische Qualitätsindikatoren ein.

## Verknüpfungen

- [[KHVVG]] (Rechtsgrundlage der Vorhaltevergütung; in Kraft seit 2024)
- [[KHAG]] (geplante Anpassung; Bundesrat-Abstimmung 27. März 2026)
- [[DRG]] (bisheriges Vergütungssystem; wird durch Vorhaltevergütung ergänzt)
- [[Transformationsfonds]] (paralleles Förderinstrument für Strukturreform und Digitalisierung)
- [[KIS]] (zentrale IT-Grundlage für Leistungsgruppen-Dokumentation)
- [[ISiK]] (FHIR-Schnittstelle; Voraussetzung für Digitalisierungsnachweise)
- [[DKG]] (Deutsche Krankenhausgesellschaft; verhandelt Vorhaltekostensätze mit GKV)
- [[GKV-Spitzenverband]] (Verhandlungspartner für Vergütungsregelungen)
- [[InEK]] (Institut für das Entgeltsystem im Krankenhaus; entwickelt DRG-Kalkulation)

## Quellen

- [KHVVG: Krankenhausversorgungsverbesserungsgesetz (Bundesgesundheitsministerium)](https://www.bundesgesundheitsministerium.de/themen/krankenhaus/krankenhaustransformation)
- [Wikipedia: Fallpauschalen (DRG) – Krankenhausfinanzierung](https://de.wikipedia.org/wiki/Fallpauschalen)
- [BMG: Krankenhausreform – Vorhaltevergütung und Leistungsgruppen](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/krankenhausversorgungsverbesserungsgesetz)
