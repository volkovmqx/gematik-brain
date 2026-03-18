---
title: BDSG
audience: [technical, non-technical]
tags: [standard, datenschutz, recht]
aliases: [Bundesdatenschutzgesetz, Bundesdatenschutz-Gesetz]
---

# BDSG

Das **Bundesdatenschutzgesetz (BDSG)** ist das deutsche Datenschutzgesetz, das die [[DSGVO]] auf nationaler Ebene ergänzt und in bestimmten Bereichen konkretisiert.

## Erklärt für Einsteiger

Die DSGVO ist ein EU-Gesetz, das in allen Mitgliedstaaten gilt. Aber die EU erlaubt den Ländern, manche Regeln selbst zu gestalten. Das BDSG ist das deutsche Gesetz, das diese Lücken füllt. Es legt zum Beispiel fest, unter welchen Bedingungen Arbeitgeber Mitarbeiterdaten verarbeiten dürfen oder wie der staatliche Datenschutzbeauftragte arbeitet. Für das Gesundheitswesen ist das BDSG besonders wichtig, weil Gesundheitsdaten besonders schützenswert sind.

## Überblick

Das BDSG wurde 2018 grundlegend neu gefasst, um es an die [[DSGVO]] anzupassen (BDSG-neu). Es regelt drei Bereiche:

1. **Öffentlicher Bereich**: Datenschutz bei Bundesbehörden und anderen öffentlichen Stellen des Bundes (Teil 1 und 2 BDSG).
2. **Nichtöffentlicher Bereich**: Ergänzungsregelungen für private Unternehmen, soweit die DSGVO nationale Öffnungsklauseln vorsieht (Teil 1 und 2 BDSG).
3. **Strafrechtliches Sanktionssystem**: § 42 BDSG enthält Straftatbestände für besonders schwere Datenschutzverstöße (bis zu drei Jahren Freiheitsstrafe).

Im Gesundheitswesen wird das BDSG durch das [[SGB-V]] und das [[PDSG|Patientendaten-Schutz-Gesetz (PDSG)]] weiter konkretisiert. Das [[GDNG|Gesundheitsdatennutzungsgesetz (GDNG)]] schafft zusätzliche Rechtsgrundlagen für die Sekundärnutzung von Gesundheitsdaten.

### Verhältnis zur DSGVO

Die [[DSGVO]] hat als EU-Verordnung grundsätzlich Vorrang vor nationalem Recht. Das BDSG gilt daher nur, wo die DSGVO ausdrücklich nationale Regelungen zulässt (sogenannte Öffnungsklauseln). Beispiele:

- Art. 9 Abs. 4 DSGVO erlaubt Mitgliedstaaten, strengere Bedingungen für besondere Datenkategorien (wie Gesundheitsdaten) festzulegen.
- Art. 88 DSGVO erlaubt nationale Regelungen für den Beschäftigtendatenschutz (§ 26 BDSG).
- Art. 85 DSGVO erlaubt Ausnahmen für journalistische und wissenschaftliche Zwecke.

### Aufsicht

Der **Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)** überwacht die Einhaltung des BDSG bei Bundesbehörden und Telekommunikationsunternehmen. Für private Unternehmen zuständig sind die Datenschutzaufsichtsbehörden der Länder.

## Technische Details

### Besondere Kategorien: Gesundheitsdaten

Gesundheitsdaten sind nach Art. 9 DSGVO besonders schützenswerte Daten. Die Verarbeitung ist grundsätzlich verboten, es sei denn, einer der abschließenden Erlaubnistatbestände greift. Im deutschen Gesundheitswesen sind folgende Rechtsgrundlagen relevant:

- Art. 9 Abs. 2 lit. h DSGVO: Verarbeitung für Zwecke der Gesundheitsversorgung (z.B. [[ePA]], [[E-Rezept]])
- Art. 9 Abs. 2 lit. j DSGVO: Verarbeitung für wissenschaftliche Forschung (Grundlage für das [[GDNG]])
- § 22 BDSG: Nationale Konkretisierung für Gesundheits- und Sozialdaten

### Datenschutzbeauftragter

Für die Pflicht zur Bestellung eines Datenschutzbeauftragten (DSB) gelten zwei ergänzende Regelungen:

**§ 38 BDSG (nationale Regelung):** Nichtöffentliche Stellen müssen einen DSB benennen, wenn in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.

**Art. 37 Abs. 1 lit. b DSGVO (EU-Regelung):** Unabhängig von der Mitarbeiterzahl muss ein DSB bestellt werden, wenn die Kerntätigkeit einer Organisation in der umfangreichen Verarbeitung besonderer Datenkategorien besteht, die eine regelmäßige und systematische Überwachung von Betroffenen erfordert. Gesundheitsdaten nach Art. 9 DSGVO fallen unter diese besonderen Kategorien.

Beide Anforderungen sind voneinander unabhängig und können jeweils für sich allein eine DSB-Pflicht auslösen. Im Gesundheitswesen trifft die DSGVO-Pflicht nach Art. 37 Abs. 1 lit. b typischerweise Krankenhäuser und Krankenkassen unabhängig von ihrer Größe, da ihre Kerntätigkeit die Verarbeitung von Gesundheitsdaten umfasst. § 38 BDSG kann zusätzlich kleinere Einrichtungen wie Arztpraxen erfassen, die die Größenschwelle von 20 Personen erreichen.

### Technische und organisatorische Maßnahmen (TOMs)

Das BDSG verpflichtet zur Umsetzung angemessener technischer und organisatorischer Schutzmaßnahmen (Art. 32 DSGVO). Im TI-Kontext sind dies unter anderem:

- Ende-zu-Ende-Verschlüsselung bei der Übertragung von Patientendaten
- Zugangskontrolle über [[SMC-B]] und [[HBA]]
- Protokollierung von Zugriffen auf die [[ePA]]
- [[VAU|Vertrauenswürdige Ausführungsumgebungen (VAU)]] beim E-Rezept-Fachdienst

### Betroffenenrechte

Das BDSG ergänzt die DSGVO-Betroffenenrechte (Auskunft, Berichtigung, Löschung, Widerspruch) um Einschränkungen, die für das Gesundheitswesen relevant sind. § 27 BDSG erlaubt die Einschränkung von Betroffenenrechten bei der Verarbeitung zu wissenschaftlichen Zwecken, wenn deren Erfüllung den Forschungszweck erheblich beeinträchtigen würde.

## Verknüpfungen

- [[DSGVO]] (EU-Datenschutzgrundverordnung; BDSG ergänzt und konkretisiert die DSGVO)
- [[SGB-V]] (enthält spezifische Datenschutzregelungen für die GKV, ergänzt durch das BDSG)
- [[PDSG]] (Patientendaten-Schutz-Gesetz; schafft datenschutzrechtliche Grundlagen für die TI)
- [[GDNG]] (Gesundheitsdatennutzungsgesetz; Rechtsgrundlage für Sekundärnutzung von Gesundheitsdaten)
- [[ePA]] (Patientenakte; Verarbeitung unterliegt DSGVO und BDSG)
- [[gematik]] (Betreiber der TI; Datenschutzanforderungen nach DSGVO und BDSG)

## Quellen

- [Bundesdatenschutzgesetz (BDSG) – Gesetze im Internet](https://www.gesetze-im-internet.de/bdsg_2018/)
- [Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)](https://www.bfdi.bund.de/)
- [Wikipedia: Bundesdatenschutzgesetz](https://de.wikipedia.org/wiki/Bundesdatenschutzgesetz)
