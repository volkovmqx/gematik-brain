---
title: DSGVO
audience: [technical, non-technical]
tags: [standard, datenschutz, eu, recht]
aliases: [Datenschutz-Grundverordnung, GDPR, General Data Protection Regulation]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, hersteller, kasse, it-dienstleister, regulierung, patient]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# DSGVO

Die **Datenschutz-Grundverordnung (DSGVO)**, EU-Verordnung 2016/679, ist die zentrale EU-Rechtsgrundlage für die Verarbeitung personenbezogener Daten, einschließlich Gesundheitsdaten in der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Die DSGVO ist ein EU-Gesetz, das festlegt, wie Unternehmen und Behörden mit deinen persönlichen Daten umgehen dürfen. Wenn dein Arzt deine Krankenakte speichert oder die Krankenkasse Daten über dich verarbeitet, muss das nach den Regeln der DSGVO geschehen. Gesundheitsdaten gelten als besonders sensibel: Für sie gelten strengere Regeln als für andere Daten.

## Überblick

Die DSGVO trat am 25. Mai 2018 in Kraft. Sie gilt unmittelbar in allen 27 EU-Mitgliedstaaten, ohne dass eine nationale Umsetzung nötig ist. In Deutschland ergänzt das [[BDSG|Bundesdatenschutzgesetz (BDSG)]] die DSGVO in Bereichen, die nationale Regelungsspielräume lassen.

Für Gesundheitsdaten gilt Artikel 9 DSGVO: Gesundheitsdaten sind "besondere Kategorien personenbezogener Daten" und dürfen grundsätzlich nicht verarbeitet werden. Ausnahmen sind in Art. 9 Abs. 2 aufgeführt, u.a.:

- Einwilligung des Betroffenen (Art. 9 Abs. 2 lit. a)
- Verarbeitung für Zwecke der Gesundheitsversorgung (Art. 9 Abs. 2 lit. h)
- Verarbeitung aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit (Art. 9 Abs. 2 lit. i)

Im deutschen Gesundheitswesen gilt außerdem [[SGB-V]] als spezialgesetzliche Grundlage, die die DSGVO in bestimmten Bereichen konkretisiert oder überlagert.

> [!interesse-compliance] Pflichten für Verarbeiter von Gesundheitsdaten
> Alle Einrichtungen, die Gesundheitsdaten verarbeiten, müssen eine Datenschutz-Folgenabschätzung (DSFA, Art. 35 DSGVO) durchführen, wenn die Verarbeitung voraussichtlich ein hohes Risiko darstellt. Für TI-Anwendungen (ePA, E-Rezept, KIM) ist die DSFA Pflicht. Ein Auftragsverarbeitungsvertrag (AVV, Art. 28 DSGVO) ist mit jedem Dienstleister abzuschließen, der Gesundheitsdaten im Auftrag verarbeitet. Verstöße können Bußgelder bis zu 20 Millionen Euro oder 4 Prozent des weltweiten Jahresumsatzes nach sich ziehen.

## Technische Details

### Grundsätze der DSGVO (Art. 5)

Die DSGVO definiert sechs Grundsätze für die Datenverarbeitung:

1. **Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz**
2. **Zweckbindung**: Daten dürfen nur für festgelegte, eindeutige Zwecke verarbeitet werden.
3. **Datenminimierung**: Nur die notwendigen Daten dürfen verarbeitet werden.
4. **Richtigkeit**: Daten müssen korrekt und aktuell sein.
5. **Speicherbegrenzung**: Daten dürfen nicht länger als nötig gespeichert werden.
6. **Integrität und Vertraulichkeit**: Angemessene Sicherheit durch technische und organisatorische Maßnahmen.

### Relevanz für die TI

In der [[Telematikinfrastruktur]] sind Gesundheitsdaten allgegenwärtig. Die DSGVO prägt die TI-Architektur in mehreren Bereichen:

- **[[ePA]]**: Die Einführung der ePA für alle (Opt-out) wurde auf die DSGVO-Konformität geprüft. Versicherte haben das Recht auf Auskunft, Löschung und Einschränkung der Verarbeitung.
- **[[E-Rezept]]**: Verordnungsdaten sind Gesundheitsdaten nach Art. 9 DSGVO. Der E-Rezept-Fachdienst muss die Grundsätze der Datenminimierung und Zweckbindung einhalten.
- **[[DiGA]]**: Die DiGAV schreibt vor, dass DiGA-Daten nur in Deutschland verarbeitet werden dürfen. Dies ist eine Konkretisierung der DSGVO für Medizinprodukte.
- **[[GDNG]]**: Das Gesundheitsdatennutzungsgesetz regelt die Sekundärnutzung von Gesundheitsdaten auf Basis von Art. 9 Abs. 2 lit. i DSGVO (öffentliches Interesse).

### Betroffenenrechte (Art. 15-22 DSGVO)

Versicherte haben gegenüber Verarbeitern ihrer Gesundheitsdaten folgende Rechte:

> [!interesse-patient] Ihre Rechte als Patient
> Sie können jederzeit Auskunft darüber verlangen, welche Gesundheitsdaten über Sie gespeichert sind (Art. 15). Falsche Daten müssen korrigiert werden (Art. 16). Bei der [[ePA]] können Sie über die App Ihrer Krankenkasse Zugriffe einsehen und Dokumente löschen. Das Widerspruchsrecht gegen die Übermittlung an das [[Forschungsdatenzentrum-Gesundheit]] ist für GKV-Versicherte derzeit nicht vorgesehen (Klage der GFF anhängig). Zuständige Aufsichtsbehörde für Bundesdaten: [[BfDI]].

- **Auskunftsrecht** (Art. 15): Welche Daten werden verarbeitet?
- **Berichtigungsrecht** (Art. 16): Falsche Daten korrigieren lassen.
- **Recht auf Löschung** ("Recht auf Vergessenwerden", Art. 17)
- **Recht auf Einschränkung der Verarbeitung** (Art. 18)
- **Recht auf Datenübertragbarkeit** (Art. 20): Eigene Daten in maschinenlesbarem Format erhalten.
- **Widerspruchsrecht** (Art. 21)

### Auftragsverarbeitung (Art. 28 DSGVO)

Wenn TI-Dienstleister Gesundheitsdaten im Auftrag einer Einrichtung verarbeiten (z.B. Cloud-Hosting für [[KIS]]), muss ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen werden. Der Verantwortliche bleibt die Einrichtung, der Dienstleister ist Auftragsverarbeiter.

> [!interesse-technik] Technische Umsetzung der DSGVO in der TI
> Privacy-by-Design (Art. 25 DSGVO) ist für alle TI-Komponenten Pflicht. Konkrete Maßnahmen in der TI: Ende-zu-Ende-Verschlüsselung ([[VAU]] in der [[ePA]]), Pseudonymisierung von Abrechnungsdaten im [[Forschungsdatenzentrum-Gesundheit]], Datensparsamkeit durch FHIR-Datenminimierung. Technische und organisatorische Maßnahmen (TOMs, Art. 32 DSGVO) müssen dokumentiert und regelmäßig überprüft werden. Das [[BSI]]-Grundschutz-Kompendium dient als Referenz für TOMs im deutschen Gesundheitswesen.

### DSGVO und [[eIDAS]]

Im Kontext der [[EUDI-Wallet]] gilt die DSGVO für alle personenbezogenen Daten, die in der Wallet gespeichert oder übertragen werden. Das Privacy-by-Design-Prinzip der DSGVO (Art. 25) schreibt vor, dass Datenschutz bereits bei der technischen Konzeption berücksichtigt wird, was u.a. die Selective-Disclosure-Funktion (SD-JWT) in der EUDI-Wallet beeinflusst.

## Verknüpfungen

- [[ePA]] (Speicherung von Gesundheitsdaten; DSGVO-Grundlage für Opt-out-Modell)
- [[E-Rezept]] (Verarbeitung von Verordnungsdaten als Gesundheitsdaten nach Art. 9)
- [[DiGA]] (DiGAV konkretisiert DSGVO für digitale Medizinprodukte)
- [[GDNG]] (Gesundheitsdatennutzungsgesetz; regelt Sekundärnutzung nach DSGVO)
- [[SGB-V]] (Spezialgesetzliche Grundlage, die die DSGVO im GKV-Bereich ergänzt)
- [[BDSG]] (Nationales Datenschutzgesetz, ergänzt DSGVO in Deutschland)
- [[EUDI-Wallet]] (Privacy-by-Design-Anforderungen nach DSGVO)
- [[BSI]] (technische und organisatorische Maßnahmen nach DSGVO Art. 32)
- [[Telematikinfrastruktur]] (Gesamtsystem, für das DSGVO-Compliance nachgewiesen werden muss)

## Quellen

- [DSGVO im Volltext (EUR-Lex)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679)
- [Bundesbeauftragter für Datenschutz und Informationsfreiheit (BfDI): DSGVO-Anwendung im Gesundheitsbereich](https://www.bfdi.bund.de/DE/Buerger/Inhalte/Gesundheit/Gesundheit_node.html)
- [Wikipedia: Datenschutz-Grundverordnung](https://de.wikipedia.org/wiki/Datenschutz-Grundverordnung)
