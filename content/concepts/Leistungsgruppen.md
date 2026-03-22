---
title: Leistungsgruppen
audience: [technical, non-technical]
tags: [konzept, krankenhaus, khvvg, krankenhausreform, planung, vergütung]
aliases: [Leistungsgruppen KHVVG, Leistungsgruppen Krankenhausreform]
relevance:
  sectors: [krankenhaus, kasse, regulierung, hersteller, it-dienstleister]
  interests: [compliance, business, technik]
maturity: setzling
---

# Leistungsgruppen

**Leistungsgruppen** sind standardisierte Kategorien medizinischer Versorgungsleistungen (ursprünglich 65, seit März 2026 durch das [[KHAG]] auf 61 reduziert), die das [[KHVVG|Krankenhausversorgungsverbesserungsgesetz (KHVVG)]] als strukturierendes Grundprinzip der deutschen Krankenhausplanung und -vergütung einführt.

## Erklärt für Einsteiger

Stell dir vor, Krankenhäuser werden nicht mehr pauschal nach Bettenzahl, sondern danach bezahlt und geplant, was sie tatsächlich können und wofür sie speziell ausgestattet sind. Die Leistungsgruppen sind wie eine gemeinsame Speisekarte für alle deutschen Krankenhäuser: Es gibt festgelegte Menüs (zum Beispiel "Herzchirurgie" oder "Geburtshilfe"), ursprünglich 65, seit März 2026 sind es 61. Welches Krankenhaus welche Menüs anbieten darf, entscheiden die Bundesländer anhand von Qualitätskriterien.

## Überblick

Das [[KHVVG]] trat am 12. Dezember 2024 in Kraft und reformiert die Krankenhausplanung in Deutschland grundlegend. Kernstück ist die Einführung von 65 Leistungsgruppen, die in Anlage 1 zu § 135e [[SGB-V]] definiert sind. Das [[KHAG|Krankenhausreformanpassungsgesetz (KHAG)]] vom März 2026 reduzierte die Zahl der Leistungsgruppen von 65 auf 61.

Die Leistungsgruppen erfüllen drei Funktionen gleichzeitig:

1. **Krankenhausplanung**: Die Bundesländer vergeben Versorgungsaufträge künftig auf Basis der Leistungsgruppen. Ein Krankenhaus erhält nur dann einen Versorgungsauftrag für eine Leistungsgruppe, wenn es die dafür definierten Qualitätskriterien erfüllt.
2. **Vergütung**: Die Vergütung im neuen System aus DRG und [[Vorhaltevergütung]] ist an die Leistungsgruppen geknüpft. Nur Krankenhäuser mit entsprechendem Versorgungsauftrag erhalten die Vorhaltevergütung für eine Leistungsgruppe.
3. **Transparenz**: Patienten und Einweiser können anhand der Leistungsgruppen erkennen, für welche Behandlungen ein Krankenhaus planmäßig zugelassen ist.

> [!frist-warnung] Frist-Warnung: Leistungsgruppen-Zuweisung durch Bundesländer bis 30. September 2027
> **Rechtsgrundlage:** § 135e Abs. 1 SGB V i.d.F. des KHVVG vom 12. Dezember 2024 i.V.m. KHAG (März 2026)
> **Frist:** Die zuständigen Landesbehörden müssen die erstmalige Zuweisung der Leistungsgruppen an Krankenhäuser bis zum 30. September 2027 abschließen (verlängert durch das KHAG von ursprünglich 31. Oktober 2026). Prüfungen durch den Medizinischen Dienst sind bis spätestens 31. Juli 2026 abzuschließen.
> **Handlungsbedarf:** Krankenhäuser müssen ihr Versorgungsprofil anhand der Qualitätskriterien in Anlage 1 zu § 135e SGB V analysieren und Anträge auf Leistungsgruppenzuweisung bei der zuständigen Landesbehörde einreichen. Strukturmerkmale, Personalanforderungen und Mindestfallzahlen sind frühzeitig zu dokumentieren.
> **Bei Nichtbeachtung:** Ohne zugewiesenen Leistungsgruppenauftrag entfällt die Vorhaltevergütung für die betreffenden Leistungsgruppen ab dem Stichtag der Budgetzuteilung.

### Struktur der Leistungsgruppen

Die Leistungsgruppen sind in allgemeine und spezielle Gruppen unterteilt:

- **Allgemeine Leistungsgruppen**: Breit gefasste Kategorien wie "Allgemeine Innere Medizin" oder "Allgemeine Chirurgie". Jedes Krankenhaus mit einem entsprechenden Basisangebot kann diese Gruppen erhalten.
- **Spezielle Leistungsgruppen**: Hochspezialisierte Bereiche wie "Herzchirurgie", "Neurochirurgie" oder "Perinatalmedizin (Level 1)". Diese erfordern spezifische Strukturmerkmale (z.B. bestimmte Geräteausstattung, Facharztpräsenz 24/7, Mindestzahlen).

Die Systematik folgt in weiten Teilen dem Vorbild des nordrhein-westfälischen Leistungsgruppen-Modells (NRW-Modell), das seit 2022 landesweit erprobt wird.

> [!interesse-compliance]
> Krankenhäuser müssen bei den zuständigen Landesbehörden die Leistungsgruppen beantragen, für die sie einen Versorgungsauftrag anstreben. Voraussetzung ist der Nachweis der Qualitätskriterien nach Anlage 1 zu § 135e SGB V. Ohne entsprechenden Leistungsgruppenauftrag dürfen Leistungen dieser Gruppe ab dem Stichtag nicht mehr regulär abgerechnet werden. Krankenhäuser sollten ihre Versorgungsprofile frühzeitig analysieren und Anträge vorbereiten. Übergangsfristen werden von den Bundesländern festgelegt.

## Technische Details

### Qualitätskriterien und Mindestmerkmale

Für jede Leistungsgruppe definiert Anlage 1 zu § 135e SGB V spezifische Mindestmerkmale:

- **Strukturmerkmale**: Vorhandene Geräte und Einrichtungen (z.B. Hybrid-OP, Herzkatheter-Labor, Neonatologie)
- **Personelle Anforderungen**: Facharztspezifische Präsenzzeiten (z.B. 24/7 Facharztpräsenz bei spezialisierten Gruppen)
- **Qualitätsergebnisse**: Mindestfallzahlen in bestimmten Zeiträumen (Mindestmengenregelung nach § 136b SGB V)
- **Kooperationsanforderungen**: Für manche Leistungsgruppen können Kooperationen mit anderen Häusern oder Praxen zugelassen werden statt vollständiger Eigenerbringung

> [!klinik-integration] Klinik-Integration: Strukturmerkmale und Personalanforderungen im KIS nachweisen
> Die Qualitätskriterien nach Anlage 1 zu § 135e SGB V müssen gegenüber Landesbehörden und dem Medizinischen Dienst (MD) dokumentiert belegt werden. Das KIS ist das zentrale Dokumentationswerkzeug.
>
> **Strukturmerkmale:** Geräteausstattung (Hybrid-OP, Herzkatheter-Labor, MRT usw.) sollte im KIS als Ressource hinterlegt sein. Einige KIS-Systeme bieten Ressourcenmanagement-Module, die für diesen Nachweis genutzt werden können.
> **Personelle Anforderungen:** 24/7-Facharztpräsenz für spezialisierte Leistungsgruppen muss dokumentiert sein (Dienstpläne, Rufbereitschaftsnachweise). Prüfen Sie, ob Ihr Dienstplanungssystem eine automatisierte Auswertung für Nachweiszwecke ermöglicht und mit dem KIS verknüpft ist.
> **Mindestfallzahlen:** Die Mindestmengen nach § 136b SGB V sind je Leistungsgruppe unterschiedlich. Das KIS muss laufende Fallzahlauswertungen je Leistungsgruppe ermöglichen, damit Unterschreitungen frühzeitig erkannt werden. Zuständig für die Prüfung ist der MD auf Basis der §21-Daten.

### Dokumentationsanforderungen und IT

Die Einführung der Leistungsgruppen hat direkte Auswirkungen auf die IT-Dokumentation in Krankenhäusern:

**Leistungsgruppenzuordnung**: Jeder stationäre Behandlungsfall muss einer Leistungsgruppe zugeordnet werden. Diese Zuordnung erfolgt algorithmisch auf Basis der DRG-Kodierung ([[ICD-10-GM]], [[OPS]]).

**KIS-Anpassungen**: [[KIS|Krankenhausinformationssysteme (KIS)]] müssen die Zuordnungslogik der Leistungsgruppen abbilden können und entsprechende Dokumentationsfelder bereitstellen.

**Qualitätssicherung**: Die Mindestmerkmale und Qualitätskriterien müssen im KIS überprüfbar dokumentiert werden, um gegenüber Landesbehörden und dem MDK nachgewiesen werden zu können.

> [!klinik-integration] Klinik-Integration: Leistungsgruppen-Grouper im KIS implementieren
> Das InEK stellt seit 2024 einen zertifizierten Leistungsgruppen-Grouper bereit, der auf Basis von ICD-10-GM- und OPS-Kodierung die Leistungsgruppenzuordnung je Behandlungsfall berechnet. KIS-Systeme müssen diesen Grouper integrieren oder eine kompatible Eigenimplementierung anbieten.
>
> **KIS-Anpassungen konkret:** Die Leistungsgruppen-Stammdaten (61 Gruppen, Stand 2026) müssen als Katalog im KIS gepflegt werden. Jeder abgeschlossene Behandlungsfall erhält bei der Abrechnung automatisch eine Leistungsgruppen-ID. Diese wird für die §21-KHEntgG-Datenlieferung an das InEK benötigt.
> **Medizincontrolling:** Die Leistungsgruppenzuordnung sollte möglichst fallbegleitend erfolgen, nicht erst bei Entlassung. So können Kodierdefizite rechtzeitig erkannt werden, bevor sie die Vorhaltevergütung gefährden. Prüfen Sie, ob Ihr KIS eine Echtzeitauswertung der Leistungsgruppenzuordnung unterstützt.
> **Vendor-Status:** Dedalus (Orbis), SAP ISH, Nexus und iMedOne haben den Leistungsgruppen-Grouper 2024/2025 in ihren Systemen integriert oder angekündigt. Fragen Sie Ihren Hersteller nach dem Release-Stand und der Zertifizierung nach InEK-Vorgaben.

> [!interesse-technik]
> Die Zuordnungslogik für Leistungsgruppen basiert auf den DRG-Codes (ICD-10-GM, OPS). KIS-Hersteller müssen Algorithmen zur automatischen Leistungsgruppenzuordnung implementieren, analog zur bestehenden DRG-Grouper-Logik. Das [[InEK]] (Institut für das Entgeltsystem im Krankenhaus) veröffentlicht die Zuordnungslogiken. Die Leistungsgruppen sind in Anlage 1 zu § 135e SGB V kodifiziert und müssen als Stammdaten in KIS-Systemen gepflegt werden.

> [!interesse-business]
> Die Einführung der Leistungsgruppen schafft einen erheblichen Beratungs- und IT-Anpassungsbedarf bei Krankenhäusern. KIS-Hersteller (Dedalus, SAP ISH, Nexus, iMedOne u.a.) müssen ihre Systeme um Leistungsgruppen-Logiken ergänzen. Strategie- und Managementberatungen unterstützen Krankenhäuser bei der Analyse ihres Leistungsgruppenprofils und der Antragsstrategie. Für Krankenhäuser, die Leistungsgruppen verlieren, bedeutet das Rückgang der Vorhaltevergütung: Die Strategieentscheidung ist, für welche Gruppen man die Qualitätskriterien erfüllen will und investiert.

### Verhältnis zu DRG und Vorhaltevergütung

Die Leistungsgruppen ergänzen das bestehende [[DRG]]-Vergütungssystem um eine neue Ebene:

- **DRG**: Fallbasierte Vergütung nach Diagnose und Behandlung (weiterhin bestehend)
- **Vorhaltevergütung**: Neue Komponente, die nicht mehr für einzelne Fälle, sondern für das Vorhalten der Kapazitäten einer Leistungsgruppe gezahlt wird (ca. 60% der bisherigen Krankenhausvergütung sollen perspektivisch auf Vorhaltevergütung entfallen)

Die Vorhaltevergütung wird nur an Krankenhäuser mit einem anerkannten Leistungsgruppenauftrag für die jeweilige Gruppe ausgezahlt.

> [!frist-warnung] Frist-Warnung: Vorhaltevergütung ab 2027, Mindestmengen nach § 136b SGB V laufend
> **Rechtsgrundlage:** § 135e Abs. 3 SGB V (Vorhaltevergütung) i.V.m. § 136b SGB V (Mindestmengenregelung)
> **Zeitplan:** Die Vorhaltevergütung wird 2025 und 2026 berechnet, aber noch nicht budgetwirksam ausgezahlt. Ab 2027 erhalten Krankenhäuser erstmals ein wirksames Vorhaltebudget für zugewiesene Leistungsgruppen. Die volle Umsetzung ist schrittweise bis 2030 vorgesehen.
> **Handlungsbedarf:** Krankenhäuser müssen die Mindestmengen nach § 136b SGB V für die angestrebten Leistungsgruppen bereits jetzt sicherstellen, da Unterschreitungen zur Aberkennung des Leistungsgruppenauftrags führen können. KIS-Systeme sind auf die leistungsgruppengenaue Falldokumentation vorzubereiten.
> **Bei Nichtbeachtung:** Krankenhäuser, die Qualitätskriterien nicht nachweisen, riskieren den Entzug des Leistungsgruppenauftrags und damit den Ausschluss von der Vorhaltevergütung dieser Gruppe.

### Erreichbarkeit und Mindestzeiten

Das [[KHVVG]] definiert Mindestversorgungsdichte nach Fahrzeiten:

- **Allgemeine Innere Medizin und Chirurgie**: Maximal 30 Minuten Fahrzeit
- **Spezialisierte Leistungsgruppen**: Maximal 40 Minuten Fahrzeit

Diese Vorgaben schützen die Grundversorgung auch in ländlichen Regionen: Auch wenn viele kleinere Häuser Leistungsgruppen abgeben, müssen die Mindestversorgungsziele eingehalten bleiben.

## Verknüpfungen

- [[KHVVG]] (Krankenhausversorgungsverbesserungsgesetz: gesetzliche Grundlage der Leistungsgruppen)
- [[SGB-V]] (§ 135e SGB V: Rechtsgrundlage; Anlage 1 definiert die Leistungsgruppen)
- [[KIS]] (Krankenhausinformationssystem: muss Leistungsgruppen-Logik abbilden)
- [[DRG]] (fallbasierte Vergütung, die durch die Vorhaltevergütung der Leistungsgruppen ergänzt wird)
- [[Vorhaltevergütung]] (neues Vergütungsinstrument, an Leistungsgruppen geknüpft)
- [[InEK]] (veröffentlicht Zuordnungslogiken für Leistungsgruppen)
- [[ICD-10-GM]] (Grundlage der algorithmischen Leistungsgruppenzuordnung)
- [[OPS]] (Prozedurenklassifikation, Teil der Zuordnungslogik)
- [[KHAG]] (Krankenhausreformanpassungsgesetz, März 2026: reduzierte die Leistungsgruppen von 65 auf 61)

## Quellen

- [BMG: Bundeskabinett beschließt Krankenhausreform (KHVVG)](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/krankenhausreform-kabinett-pm-15-05-24)
- [KHVVG auf buzer.de](https://www.buzer.de/KHVVG.htm)
- [vdek: KHVVG – Krankenhausversorgungsverbesserungsgesetz](https://www.vdek.com/politik/gesetze/wahlperiode_20/krankenhausversorgungsverbesserungsgesetz-khvvg.html)
- [AOK: Krankenhausversorgungsverbesserungsgesetz](https://www.aok.de/gp/qualitaet/stationaere-versorgung/krankenhausversorgungsverbesserungsgesetz)
