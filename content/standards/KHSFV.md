---
title: KHSFV
audience: [technical, non-technical]
tags: [standards, recht, krankenhaus, strukturfonds, förderung, isik]
aliases: [Krankenhaus-Strukturfonds-Verfahrensverordnung, Krankenhauszukunftsfonds-Verordnung, KHSFV]
relevance:
  sectors: [krankenhaus, hersteller, it-dienstleister, regulierung]
  interests: [compliance, business]
maturity: immergruen
---

# KHSFV

Die **KHSFV (Krankenhaus-Strukturfonds-Verfahrensverordnung)** ist die Verordnung zur Verwaltung des Krankenhausstrukturfonds nach dem [[KHG|Krankenhausfinanzierungsgesetz (KHG)]] und regelt die Voraussetzungen, Verfahren und Nachweispflichten für Fördermittel, zu denen seit 2024 auch [[ISiK]]-Bestätigungen gehören.

## Erklärt für Einsteiger

Wenn Krankenhäuser staatliche Fördermittel für Umstrukturierungen erhalten wollen, müssen sie bestimmte Regeln einhalten und nachweisen, dass das Geld sinnvoll eingesetzt wird. Die KHSFV ist das Regelwerk, das genau das festlegt: Was muss ein Krankenhaus vorweisen, um an den Strukturfonds zu kommen? Seit 2024 gehört dazu auch der Nachweis, dass das Krankenhaus digitale Schnittstellen nach dem [[ISiK]]-Standard betreibt.

## Überblick

Die KHSFV wurde auf Grundlage des [[KHG]] erlassen und regelt die Verwaltung des Krankenhausstrukturfonds (KHSFonds). Der Fonds dient der Finanzierung von Krankenhausumstrukturierungen, Kapazitätsabbau und Konzentrationsmaßnahmen.

Die Verordnung ist in drei Teile gegliedert:

- **Teil 1**: Förderungen nach § 12 KHG (allgemeiner Strukturfonds)
- **Teil 2**: Förderungen nach § 12a KHG (erweiterter Strukturfonds)
- **Teil 3**: Förderungen nach § 14a KHG (Krankenhauszukunftsfonds KHZF, ergänzt durch das [[KHZG]])

Zuständig für die Verwaltung und Prüfung der Anträge ist das **Bundesamt für Soziale Sicherung (BAS)**.

### Verbindung zum KHZG

Das [[KHZG]] von 2020 ergänzte das KHG um § 14a, der den Krankenhauszukunftsfonds (KHZF) schuf. Die KHSFV wurde entsprechend um einen dritten Teil erweitert, der die konkreten Verfahrensregeln für diesen Fonds festlegt. Krankenhäuser, die KHZG-Mittel erhielten, unterliegen seither dauerhaften Berichtspflichten nach KHSFV.

## Technische Details

### ISiK-Bestätigung als Fördervoraussetzung

Mit der Weiterentwicklung des Interoperabilitätsstandards [[ISiK]] (Informationstechnische Systeme im Krankenhaus) wurden ISiK-Bestätigungen als Nachweis für bestimmte KHSFV-Fördermaßnahmen eingeführt. Nach § 21 Abs. 2 KHSFV ist die ISiK-Bestätigung für relevante IT-Digitalisierungsvorhaben Voraussetzung für die Förderfähigkeit.

> [!frist-warnung] Frist-Warnung: ISiK-Stufe-3-Bestätigung als Fördervoraussetzung
> **Rechtsgrundlage:** § 373 Abs. 1 SGB V i.V.m. § 21 Abs. 2 KHSFV
> **Frist:** Seit 1. Juli 2025 gilt ISiK Stufe 3 als Pflichtstandard. Die ISiK-Stufe-3-Bestätigung ist Voraussetzung für die Förderfähigkeit von IT-Vorhaben nach KHSFV.
> **Handlungsbedarf:** Leistungserbringer müssen beim KIS-Hersteller die aktuelle ISiK-Stufe-3-Bestätigung der gematik anfordern und diese Unterlagen für laufende und zukünftige Förderanträge beim BAS aufbewahren. Bestätigungen sind auf dem gematik-Fachportal unter "Bestätigungsverfahren ISiK" einsehbar.
> **Bei Nichtbeachtung:** IT-Vorhaben ohne gültige ISiK-Bestätigung gelten als nicht förderfähig; bereits bewilligte Mittel können zurückgefordert werden.

In der Praxis bedeutet das: Krankenhäuser, die Förderanträge für IT-Systeme stellen, müssen nachweisen, dass die eingesetzten Krankenhausinformationssysteme ([[KIS]]) und Subsysteme ISiK-konforme Schnittstellen bereitstellen. Die gematik vergibt ISiK-Bestätigungen nach Prüfung der Herstellererklärungen.

> [!klinik-integration] Klinik-Integration: ISiK-Bestätigung im KIS-Betrieb beschaffen
> Die ISiK-Bestätigung ist keine einmalige Formalität, sondern eine laufende Betriebsanforderung. Für die IT-Abteilung gilt:
>
> **KIS-Beschaffung und Verträge:** Fordern Sie bei Ausschreibungen und Vertragsverlängerungen die ISiK-Bestätigungsurkunden der gematik als Vergabekriterium ein. Gültige Bestätigungen für ISiK Stufe 1, 2 und 3 sind im Bestätigungsverfahren der gematik öffentlich einsehbar. SAP ISH und Orbis/Dedalus haben ISiK-Bestätigungen erhalten; prüfen Sie die aktuelle Stufe Ihres Systems.
> **FHIR-Schnittstellen im Betrieb:** ISiK basiert auf [[FHIR]] R4 REST-APIs. Betroffen sind die Fördertatbestände 1 (Patientenportal), 2 (klinische Entscheidungsunterstützung), 4 (Pflegedokumentation), 5 (Medikationsmanagement) und 6 (Leistungsanforderung/Rückmeldung). FHIR-Endpunkte müssen 24/7 erreichbar sein und ins Netzwerkmonitoring eingebunden werden.
> **Subsysteme:** Auch Subsysteme (Radiologie-RIS, Labor-LIS, Patientenportale) benötigen eigene ISiK-Bestätigungen. Klären Sie dies mit den jeweiligen Herstellern vor Förderantragstellung beim BAS.

> [!interesse-compliance]
> Krankenhäuser, die KHSFV-Förderung für IT-Vorhaben beantragen, müssen prüfen, ob ihr [[KIS]] eine gültige ISiK-Bestätigung der [[gematik]] vorweisen kann. ISiK-Stufe 3 (Pflichttermin 01.07.2025) ist der aktuelle Mindeststandard. Krankenhäuser sollten bei ihren KIS-Herstellern die ISiK-Bestätigungsunterlagen anfordern und diese für Förderanträge aufbewahren. Fehlende ISiK-Konformität kann die Förderfähigkeit von IT-Vorhaben gefährden.

### Digitalisierungsreife-Nachweis

Für Fördervorhaben aus dem KHZG-Teil der KHSFV gilt zusätzlich die Pflicht zum Nachweis der Digitalisierungsreife:

- **Ausgangsmessung** zum 30. Juni 2021
- **Abschlussmessung** zum 30. Juni 2024

Als Referenzmodell dient das EMRAM-Modell (Electronic Medical Record Adoption Model) des HIMSS-Instituts. Krankenhäuser, die keine nachweisbaren Fortschritte erzielen, riskieren Rückforderungen bereits ausgezahlter Mittel.

### ISMS-Pflicht

Krankenhäuser, die Mittel aus dem KHZG-Teil des Strukturfonds erhalten haben, sind verpflichtet, ab dem 1. Januar 2025 ein [[ISMS|Information Security Management System (ISMS)]] nach ISO 27001 oder BSI-Grundschutz zu betreiben. Diese Pflicht gilt unabhängig davon, ob das Krankenhaus als [[KRITIS]]-Einrichtung eingestuft ist.

> [!klinik-integration] Klinik-Integration: ISMS im Krankenhausbetrieb umsetzen
> Das ISMS ist kein Papierprojekt, sondern muss gelebten Betrieb abbilden. Für die Krankenhaus-IT bedeutet das:
>
> **Geltungsbereich:** Das ISMS muss die gesamte klinische IT umfassen, einschließlich KIS, Medizingeräte mit Netzwerkanschluss (PACS, Infusionspumpen, Monitoring) und Subsysteme. Die Abgrenzung des Geltungsbereichs (Scope) ist typischerweise die erste Aufgabe der ISMS-Implementierung.
> **Deployment:** ISO 27001 erfordert interne Audits, Risikobeurteilungen und ein Dokumentenmanagementsystem. BSI IT-Grundschutz bietet vorgefertigte Bausteine, die für Krankenhäuser gut geeignet sind (Baustein SYS.1.2 für Windows-Server, NET.1 für Netzwerke u.a.).
> **Verfügbarkeit:** Das ISMS muss explizit die 24/7-Anforderungen des Klinikbetriebs berücksichtigen. Redundanzkonzepte für KIS und Konnektoren sind Teil des Informationssicherheitskonzepts. Notfallplan für Ransomware-Angriffe und TI-Ausfälle einplanen.
> **Nachweis gegenüber BAS:** Halten Sie Zertifizierungsdokumente oder ISMS-Nachweisberichte für Nachfragen durch das Bundesamt für Soziale Sicherung bereit.

> [!frist-warnung] Frist-Warnung: ISMS-Pflicht für KHZG-Empfänger
> **Rechtsgrundlage:** § 14a Abs. 2 KHG i.V.m. § 75c SGB V (IT-Sicherheit in Krankenhäusern)
> **Frist:** Seit 1. Januar 2025 müssen alle Krankenhäuser, die KHZG-Mittel erhalten haben, ein ISMS nach ISO 27001 oder BSI IT-Grundschutz betreiben.
> **Handlungsbedarf:** Die verantwortliche Stelle muss den Nachweis eines zertifizierten oder dokumentierten ISMS gegenüber der zuständigen Landesbehörde und dem BAS erbringen. Fehlende Zertifizierungsdokumentation ist unverzüglich nachzuholen.
> **Bei Nichtbeachtung:** Rückforderung bereits ausgezahlter KHZG-Fördermittel durch das Bundesamt für Soziale Sicherung (BAS) möglich.

> [!interesse-business]
> Für Hersteller von KIS und Subsystemen (z.B. Patientenportale, Medikationssysteme, Radiologielösungen) schafft die KHSFV-Kopplung an ISiK-Bestätigungen einen dauerhaften Nachfragetreiber nach ISiK-konformen Produkten. Krankenhäuser als Käufer verlangen zunehmend ISiK-Bestätigungsunterlagen als Vergabevoraussetzung. Hersteller ohne gültige ISiK-Bestätigung der gematik riskieren, aus Ausschreibungen ausgeschlossen zu werden.

### Verhältnis zum KHVVG und Transformationsfonds

Das [[KHVVG|Krankenhausversorgungsverbesserungsgesetz (KHVVG)]] von 2024 schuf den [[Transformationsfonds]] als neues Förderinstrument für die strukturelle Krankenhausreform. Der Transformationsfonds läuft neben dem bestehenden KHSFV und hat eigene Fördervoraussetzungen. ISiK und Interoperabilitätsnachweise bleiben auch im Transformationsfonds relevant.

## Verknüpfungen

- [[KHG]] (Krankenhausfinanzierungsgesetz: gesetzliche Grundlage der KHSFV)
- [[KHZG]] (Krankenhauszukunftsgesetz: schuf den KHZF, Teil 3 der KHSFV)
- [[ISiK]] (Interoperabilitätsstandard: Bestätigungen als Fördervoraussetzung nach § 21 Abs. 2 KHSFV)
- [[KIS]] (Hauptgegenstand der geförderten Digitalisierungsvorhaben)
- [[gematik]] (vergibt ISiK-Bestätigungen)
- [[ISMS]] (Pflicht für KHZG-Fördermittelempfänger ab 01.01.2025)
- [[KRITIS]] (besondere Anforderungen für kritische Infrastruktur, aber ISMS-Pflicht gilt auch ohne KRITIS-Status)
- [[Transformationsfonds]] (Nachfolgeinstrument für strukturelle Krankenhausreform nach KHVVG)
- [[KHVVG]] (Nachfolgegesetz mit Transformationsfonds)

## Quellen

- [KHSFV auf gesetze-im-internet.de](https://www.gesetze-im-internet.de/khsfv/BJNR235000015.html)
- [Bundesamt für Soziale Sicherung: Krankenhausstrukturfonds](https://www.bundesamtsozialesicherung.de/de/themen/innovationsfonds-und-krankenhausstrukturfonds/krankenhausstrukturfonds/)
- [BMG: FAQ zum KHZG](https://www.bundesgesundheitsministerium.de/krankenhauszukunftsgesetz/faq-khzg.html)
- [gematik: ISiK-Bestätigungsverfahren](https://www.gematik.de/anwendungen/isik)
