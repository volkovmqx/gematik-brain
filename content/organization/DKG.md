---
title: DKG
audience: [technical, non-technical]
tags: [organization, krankenhaus, gematik, selbstverwaltung]
aliases: [Deutsche Krankenhausgesellschaft]
maturity: wachsend
relevance:
  sectors: [krankenhaus, kasse, regulierung, verband, it-dienstleister, hersteller]
  interests: [compliance, business]
---

# DKG

Die **Deutsche Krankenhausgesellschaft e.V. (DKG)** ist der Dachverband der deutschen Krankenhausträger und Gesellschafterin der [[gematik]]. Sie vertritt die Interessen der Krankenhäuser gegenüber Politik, Krankenkassen und anderen Akteuren des Gesundheitssystems.

## Erklärt für Einsteiger

In Deutschland gibt es knapp 1.900 Krankenhäuser. Diese haben sich in der DKG zusammengeschlossen, um gemeinsam ihre Interessen zu vertreten. Wenn das Gesundheitsministerium neue Regeln für Krankenhäuser plant, spricht es mit der DKG. Wenn die Krankenkassen über Vergütungen verhandeln, sitzt die DKG mit am Tisch. Die DKG ist also so etwas wie die Stimme der Krankenhäuser in der Gesundheitspolitik.

## Überblick

Die DKG ist ein eingetragener Verein mit Sitz in Berlin. Sie vertritt 28 Mitgliedsverbände: 16 Landesverbände und 12 Bundesverbände der verschiedenen Krankenhausträger (öffentlich, freigemeinnützig, privat). Damit erreicht sie praktisch alle deutschen Krankenhäuser.

Deutschlands Krankenhäuser behandeln jährlich rund **17 Millionen stationäre** und **21 Millionen ambulante Patientinnen und Patienten** und erzielen einen Gesamtumsatz von ca. 127 Milliarden Euro.

Als Gesellschafterin der [[gematik]] ist die DKG an den Entscheidungen über die Telematikinfrastruktur beteiligt. Sie bringt die Perspektive der Krankenhäuser in die Entwicklung und Einführung von TI-Anwendungen ein, insbesondere bei der [[ePA]], beim [[KIS]]-Anschluss und bei Interoperabilitätsstandards wie [[ISiK]].

### Hauptaufgaben

Die DKG erfüllt mehrere gesetzlich zugewiesene Aufgaben in der gemeinsamen Selbstverwaltung:

- Aushandlung der **Krankenhausvergütung** mit dem [[GKV-Spitzenverband]] (DRG-Systempflege über das [[InEK]])
- Mitgestaltung der **Qualitätssicherung** im stationären Bereich (gemeinsam mit G-BA)
- Stellungnahmen und Verhandlungen zu Krankenhaus-Gesetzgebung (z.B. [[KHZG]], [[KHVVG]])
- Festlegung, welche Krankenhaus-IT-Systeme nach § 373 [[SGB V]] einer ISiK-Bestätigung bedürfen

### Relevanz für Krankenhausfinanzierung

> [!interesse-business] Marktposition der DKG
> Die DKG vertritt knapp 1.900 Krankenhäuser mit einem Gesamtumsatz von ca. 127 Milliarden Euro und rund 1,2 Millionen Beschäftigten. Als Gesellschafterin der [[gematik]] hat sie Mitsprache bei allen TI-Entscheidungen. Hersteller von Krankenhaus-IT müssen ihre Produkte an den DKG-mitgestalteten Standards ([[ISiK]], G-DRG) ausrichten, um im deutschen Markt bestehen zu können.

Das **[[InEK]]** (Institut für das Entgeltsystem im Krankenhaus) ist eine gemeinsame Einrichtung von DKG, [[GKV-Spitzenverband]] und Verband der Privaten Krankenversicherung. Es kalkuliert und pflegt das G-DRG-System (Diagnosis Related Groups), nach dem Krankenhäuser vergütet werden.

## Technische Details

### ISiK: Interoperabilität im Krankenhaus

Die DKG spielt eine zentrale Rolle beim Standard **[[ISiK]]** (Informationstechnische Systeme im Krankenhaus). ISiK legt fest, welche Daten [[KIS]]-Systeme und andere Krankenhaus-IT über standardisierte Schnittstellen bereitstellen müssen.

Laut § 373 [[SGB V]] muss das [[KIS]] bestimmte Datenaustauschfähigkeiten bestätigen. Die DKG definiert, welche Softwareprodukte als bestätigungsrelevant gelten. Diese Definitionen sind in den ISiK-Implementierungsleitfäden auf der gematik-Website veröffentlicht.

### KHZG und Digitalisierungsförderung

Das Krankenhauszukunftsgesetz ([[KHZG]]) von 2020 stellte 4,3 Milliarden Euro für die Digitalisierung von Krankenhäusern bereit. Die DKG war maßgeblich an der Ausgestaltung der Fördertatbestände beteiligt und veröffentlichte Stellungnahmen zur Förderrichtlinie. Ein Großteil der KHZG-Investitionen floss in:

- Verbesserung der [[KIS]]-Systeme
- Einrichtung von [[Patientenportal|Patientenportalen]]
- Anbindung an die [[Telematikinfrastruktur]] (TI-Anschluss für Krankenhäuser)
- [[ePA]]-Module für Krankenhäuser

### ePA-Anschluss für Krankenhäuser

> [!interesse-compliance] ePA-Pflicht für Krankenhäuser
> Ab **April 2026** müssen Krankenhäuser ihren Patienten über ein zertifiziertes KIS-Modul Zugang zur [[ePA]] ermöglichen. KIS ohne zertifiziertes ePA-Modul können finanzielle Sanktionen nach sich ziehen. Die DKG hat gemeinsam mit der [[gematik]] die technischen Anforderungen mitgestaltet. Krankenhäuser sollten prüfen, ob ihr KIS-Anbieter die Zertifizierung bereits abgeschlossen hat.

Ab **April 2026** müssen [[KIS|Krankenhausinformationssysteme]] ein zertifiziertes ePA-Modul enthalten. Krankenhäuser, deren KIS diese Anforderung nicht erfüllt, riskieren finanzielle Sanktionen. Die DKG hat die Anforderungen an das ePA-Krankenhausmodul in Abstimmung mit der [[gematik]] mitgestaltet.

### DRG-Relevanz

Das G-DRG-System weist jedem Krankenhausfall eine Fallpauschale zu. Die Abrechnung erfolgt über strukturierte Datensätze mit [[ICD-10-GM]]-Diagnosen und [[OPS]]-Prozeduren. Das [[InEK]] kalibriert die Fallgewichte jährlich anhand von Kostendaten, die Krankenhäuser liefern.

Das [[PEPP]]-System (Pauschalierendes Entgeltsystem Psychiatrie und Psychosomatik) ist ein analoges System für psychiatrische Einrichtungen.

## Verknüpfungen

- [[gematik]] (Gesellschafterin)
- [[InEK]] (gemeinsame Einrichtung von DKG, GKV-SV und PKV)
- [[KIS]] (Krankenhausinformationssysteme, zentral für DKG-Anforderungen)
- [[ISiK]] (Interoperabilitätsstandard für Krankenhaus-IT, von DKG mitdefiniert)
- [[KHZG]] (Digitalisierungsförderung, von DKG mitgestaltet)
- [[ePA]] (Einbindung der Krankenhäuser ab 2026)
- [[GKV-Spitzenverband]] (Verhandlungspartner bei Vergütung)
- [[BMG]] (Aufsicht, Gesetzgebung)
- [[G-BA]] (Gremium für Qualitätssicherung, DKG beteiligt)
- [[DRG]] (Fallpauschalen-System im Krankenhaus)
- [[ICD-10-GM]] (Diagnoseklassifikation für DRG-Abrechnung)
- [[OPS]] (Operationenschlüssel für DRG-Abrechnung)
- [[SGB V]] (§ 373 zu ISiK-Bestätigungspflichten)

## Quellen

- [DKG: Aufgaben und Ziele](https://www.dkgev.de/dkg/aufgaben-ziele/)
- [Gesellschafter der gematik](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
- [BMG: Deutsche Krankenhausgesellschaft](https://www.bundesgesundheitsministerium.de/themen/gesundheitswesen/selbstverwaltung/deutsche-krankenhausgesellschaft)
- [Wikipedia: Deutsche Krankenhausgesellschaft](https://de.wikipedia.org/wiki/Deutsche_Krankenhausgesellschaft)
- [ISiK: Interoperabilitäts-Navigator gematik](https://www.ina.gematik.de/iop-themenwelten/interoperabilitaets-initiativen/isik)
