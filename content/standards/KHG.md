---
title: KHG
audience: [technical, non-technical]
tags: [standards, recht, gesetz, krankenhaus, finanzierung, drg]
aliases: [Krankenhausfinanzierungsgesetz, KHG]
maturity: immergruen
relevance:
  sectors: [krankenhaus, regulierung, kasse]
  interests: [compliance, business]
---

# KHG

Das **Krankenhausfinanzierungsgesetz (KHG)** ist das zentrale Bundesgesetz zur wirtschaftlichen Sicherung der Krankenhäuser in Deutschland. Es legt die Grundsätze der dualen Krankenhausfinanzierung fest und bildet die gesetzliche Grundlage für das [[DRG]]-Vergütungssystem.

## Erklärt für Einsteiger

Ein Krankenhaus muss bezahlt werden: für die Behandlung von Patienten, aber auch für Gebäude, Geräte und Renovierungen. Das KHG regelt, wer was bezahlt. Vereinfacht gesagt: Die Bundesländer zahlen für Investitionen (neue MRT-Geräte, Bauarbeiten), und die Krankenkassen zahlen für die Behandlungen. Diese Aufteilung nennt man duale Finanzierung. Das Gesetz gilt seit 1972 und wurde viele Male geändert, zum Beispiel als das DRG-System 2003 eingeführt wurde.

## Überblick

Das KHG trat am 29. Juni 1972 in Kraft (BGBl. I S. 1009). Es verfolgt drei Hauptziele:

1. **Wirtschaftliche Sicherung der Krankenhäuser**: Krankenhäuser sollen eine leistungsgerechte Vergütung erhalten.
2. **Bedarfsgerechte Versorgung**: Die Versorgung der Bevölkerung mit Krankenhausleistungen soll sichergestellt werden.
3. **Sozial tragbare Pflegesätze**: Die Kosten für Patienten und Kassen sollen angemessen sein.

### Duale Finanzierung (§ 4 KHG)

Das KHG basiert auf dem Prinzip der dualen Finanzierung:

- **Investitionskosten** (Gebäude, Großgeräte, Instandhaltung): tragen die Bundesländer über öffentliche Fördermittel.
- **Betriebskosten** (Personal, Medikamente, Behandlungen): tragen die Krankenkassen und Patienten über die Pflegesätze bzw. DRG-Vergütung.

### KHG als Rahmengesetz

Das KHG ist ein Rahmengesetz. Es ermächtigt den Bundesgesetzgeber und die Selbstverwaltung ([[DKG|Deutsche Krankenhausgesellschaft]], GKV-Spitzenverband, Kassenärztliche Vereinigungen), konkrete Vergütungssysteme und Regelwerke zu entwickeln. Daraus entstanden unter anderem:

- Das [[DRG]]-System (§ 17b KHG), das 2003 eingeführt wurde
- Die Krankenhausplanung durch die Länder (§ 6 KHG)
- Das Qualitätssicherungssystem über den [[G-BA|Gemeinsamen Bundesausschuss (G-BA)]]

Das KHG wurde durch folgende Gesetze ergänzt oder weiterentwickelt:

- **[[KHZG]] (Krankenhauszukunftsgesetz, 2020)**: Förderprogramm für digitale Infrastruktur in Krankenhäusern mit 4,3 Milliarden Euro.
- **[[KHVVG]] (Krankenhausversorgungsverbesserungsgesetz, 2024)**: Strukturreform der Krankenhausvergütung, ersetzt die einmalige KHZG-Förderung durch dauerhafte strukturelle Veränderungen.

## Technische Details

### § 17b KHG: DRG-System

§ 17b KHG ist die zentrale Norm für die Krankenhausvergütung im somatischen Bereich. Er schuf die Rechtsgrundlage für die Einführung eines fallpauschalierten Entgeltsystems auf Basis von Diagnosis Related Groups ([[DRG]]). Das System wurde vom [[InEK]] (Institut für das Entgeltsystem im Krankenhaus) entwickelt und wird jährlich aktualisiert.

Seit 2019 werden Pflegepersonalkosten nicht mehr über die DRG-Fallpauschalen vergütet, sondern über ein gesondertes Pflegebudget (§ 17b Abs. 4 und 4a KHG). Seitdem spricht man vom aG-DRG-System (a = ausgegliedert).

### § 17d KHG: PEPP-System

§ 17d KHG bildet die Rechtsgrundlage für das PEPP-System (Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik). Psychiatrische und psychosomatische Krankenhäuser werden nicht nach DRG, sondern nach einem tagesgleichen Entgeltsystem vergütet.

### § 17c KHG: Prüfung von Abrechnungen

§ 17c KHG regelt die Prüfung von Krankenhausabrechnungen durch den [[Medizinischer-Dienst|Medizinischen Dienst (MD)]]. Krankenkassen können den MD beauftragen, Krankenhausrechnungen auf Korrektheit zu prüfen. Das Verfahren wurde durch das MDK-Reformgesetz (2020) und folgende Gesetze mehrfach überarbeitet.

> [!interesse-compliance] Relevante Fristen und Pflichten
> - **Ab 2026**: ISiK-Konformität ist Voraussetzung für Transformationsfonds-Förderung (§ 374 SGB V auf KHG-Basis)
> - **Ab April 2026**: Krankenhäuser benötigen ein gematik-zertifiziertes ePA-Modul im KIS, sonst DRG-Abschläge
> - Krankenhausplanung (§ 6 KHG): Nur im Landeskrankenhausplan gelistete Häuser erhalten Investitionsmittel
> - KHVVG (2024): Neue Leistungsgruppen und Mindestversorgungsstufen gelten ab 2025; Planbetten werden ab 2027 durch Vorhalteleistungen ersetzt

> [!interesse-business] Finanzierungsstruktur und Marktdynamik
> - Duale Finanzierung: Investitionsmittel der Länder oft chronisch unterfinanziert (geschätztes Defizit >50 Mrd. EUR)
> - Transformationsfonds: bis zu 50 Mrd. EUR (Bund + Länder) für Krankenhausreform bis 2035
> - DRG-System: 1.200+ Fallpauschalen; InEK aktualisiert den Katalog jährlich
> - KHVVG-Reform: Verlagerung von Fallpauschalen zu Vorhaltevergütung soll Wirtschaftlichkeitsdruck mindern

### KHG und Digitalisierung: ISiK und KHZG

Das KHG enthält durch Ergänzungen mehrere Digitalisierungsvorschriften:

- **§ 374 SGB V** (ergänzend): verpflichtet Krankenhäuser zur Bereitstellung standardisierter digitaler Schnittstellen gemäß [[ISiK]] (Informationstechnische Systeme im Krankenhaus).
- Das [[KHZG]] schuf auf KHG-Grundlage den Krankenhauszukunftsfonds (KHZF) mit 4,3 Milliarden Euro für digitale Infrastruktur.

### § 6 KHG: Krankenhausplanung

Die Bundesländer erstellen Krankenhauspläne, in denen sie festlegen, welche Krankenhäuser mit welchen Fachabteilungen und wie vielen Betten gefördert werden. Nur Krankenhäuser im Landeskrankenhausplan erhalten öffentliche Investitionsmittel.

## Verknüpfungen

- [[DRG]] (§ 17b KHG schuf das Diagnose-bezogene Vergütungssystem)
- [[KHZG]] (ergänzendes Gesetz für digitale Krankenhaus-Investitionen)
- [[ISiK]] (digitale Schnittstellenpflicht für Krankenhäuser; auf KHG-Grundlage geregelt)
- [[KIS]] (Krankenhausinformationssystem; zentrales IT-System, das KHG-Abrechnungen verarbeitet)
- [[InEK]] (entwickelt den DRG-Katalog auf Basis von § 17b KHG)
- [[Medizinischer-Dienst]] (prüft Krankenhausabrechnungen nach § 17c KHG)
- [[GKV]] (Hauptzahler der Krankenhausvergütung nach KHG)
- [[SGB V]] (ergänzendes Sozialgesetzbuch; regelt GKV-Leistungen und Krankenhausrecht)

## Quellen

- [KHG im Volltext (Gesetze im Internet)](https://www.gesetze-im-internet.de/khg/)
- [§ 17b KHG – DRG-Einführung (Gesetze im Internet)](https://www.gesetze-im-internet.de/khg/__17b.html)
- [BMG: Krankenhausfinanzierung](https://www.bundesgesundheitsministerium.de/krankenhausfinanzierung)
- [socialnet Lexikon: Krankenhausfinanzierungsgesetz](https://www.socialnet.de/lexikon/Krankenhausfinanzierungsgesetz)
- [InEK: Grundsatzvereinbarungen nach § 17b KHG](https://www.g-drg.de/das-institut/grundsatzvereinbarungen-der-selbstverwaltung/)
