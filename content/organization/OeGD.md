---
title: Öffentlicher Gesundheitsdienst (ÖGD)
audience: [technical, non-technical]
tags: [organisation, gesundheitsamt, infektionsschutz, oegd]
aliases: [ÖGD, Öffentlicher Gesundheitsdienst, Gesundheitsamt, Gesundheitsämter]
---

# Öffentlicher Gesundheitsdienst (ÖGD)

Der **Öffentliche Gesundheitsdienst (ÖGD)** ist die staatliche Infrastruktur des Gesundheitsschutzes in Deutschland, bestehend aus Gesundheitsämtern auf kommunaler Ebene, Landesgesundheitsbehörden und dem [[RKI]] auf Bundesebene.

## Erklärt für Einsteiger

Neben dem Arzt, der dich behandelt, gibt es in Deutschland Behörden, die auf die Gesundheit der gesamten Bevölkerung achten. Das ist der ÖGD. Das lokale Gesundheitsamt prüft zum Beispiel, ob in einem Restaurant hygienisch gearbeitet wird, und kümmert sich darum, dass Ausbrüche von Infektionskrankheiten schnell eingedämmt werden. Wenn ein Arzt eine meldepflichtige Krankheit wie Masern entdeckt, muss er das dem Gesundheitsamt melden. Das Gesundheitsamt sorgt dann dafür, dass andere Menschen nicht angesteckt werden.

## Überblick

In Deutschland gibt es rund **375 Gesundheitsämter**, die auf Kreisebene oder in kreisfreien Städten angesiedelt sind. Sie sind Behörden der Länder und Kommunen. Die rechtliche Grundlage für ihre Aufgaben ergibt sich aus dem [[IfSG|Infektionsschutzgesetz (IfSG)]] sowie den Gesundheitsdienstgesetzen der Länder.

### Kernaufgaben der Gesundheitsämter

- **Infektionsschutz**: Entgegennahme und Bearbeitung von Meldungen nach [[IfSG]], Ermittlung von Infektionsketten, Anordnung von Quarantänemaßnahmen.
- **Hygienekontrolle**: Überwachung von Einrichtungen (Krankenhäuser, Pflegeheime, Gemeinschaftsunterkünfte, Gastronomie).
- **Kinder- und Jugendgesundheit**: Schuleingangsuntersuchungen, Impfberatung.
- **Gesundheitsberichterstattung**: Lokale Daten über Gesundheitszustand und Risikofaktoren.
- **Amtsärztlicher Dienst**: Gutachten für Beamte, Führerscheinuntersuchungen, Leichenschau.

### Dreistufige Meldekette

Der ÖGD ist die zentrale Schaltstelle in der Infektionsschutzmeldekette nach [[IfSG]]:

1. **Meldepflichtige** (Ärzte, Labore, Krankenhäuser) melden an das zuständige Gesundheitsamt.
2. Das **Gesundheitsamt** ermittelt den Fall, ergreift Maßnahmen und meldet weiter an die Landesbehörde.
3. Die **Landesbehörde** leitet die Daten ans [[RKI]] weiter.

Diese Kette wurde durch [[DEMIS]] digitalisiert und erheblich beschleunigt.

### Pakt für den ÖGD

Der "Pakt für den Öffentlichen Gesundheitsdienst" von 2020 sah Investitionen von vier Milliarden Euro und die Schaffung von 5.000 neuen Stellen bis 2026 vor. Hintergrund war die COVID-19-Pandemie, die strukturelle Defizite im ÖGD offenbarte. Die Digitalisierung spielte dabei eine zentrale Rolle: [[DEMIS]] wurde als Pflichtanwendung für alle Gesundheitsämter ausgebaut.

## Technische Details

### DEMIS: Digitale Meldekette

[[DEMIS]] (Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz) ist das zentrale IT-System, über das Meldungen die Gesundheitsämter erreichen. Der Meldefluss:

- Labore und Kliniken übermitteln [[FHIR]]-basierte Meldebündel per HTTPS an den DEMIS-Server des [[RKI]].
- DEMIS routet die Meldung automatisch an das zuständige Gesundheitsamt.
- Gesundheitsämter verarbeiten die Meldung in ihrer DEMIS-Gesundheitsamt-Software (Sormas oder vergleichbare Systeme).
- Die Weitermeldung an Landesbehörden und [[RKI]] erfolgt ebenfalls über DEMIS.

Ab **April 2026** müssen meldende Labore aktuelle DEMIS-Stammdaten gepflegt haben, sonst werden Meldungen mit Fehlerstatus zurückgewiesen.

### SORMAS

**SORMAS** (Surveillance Outbreak Response Management and Analysis System) ist eine Open-Source-Software, die in vielen Gesundheitsämtern für das Fallmanagement genutzt wird. SORMAS importiert DEMIS-Meldungen und unterstützt die Ermittlung von Infektionsketten. Es wurde während der COVID-19-Pandemie in Deutschland eingeführt.

### Anbindung an die Telematikinfrastruktur

Der ÖGD ist nicht Teil der [[Telematikinfrastruktur]] im Sinne der gematik. Er betreibt eigene, unabhängige IT-Infrastruktur. Die Schnittstelle zur TI besteht über [[DEMIS]] als gemeinsamem Datenkanal. Langfristig ist eine engere Integration denkbar.

## Verknüpfungen

- [[DEMIS]] (digitales Meldesystem; Gesundheitsämter sind zentrale Empfänger)
- [[IfSG]] (Infektionsschutzgesetz; Rechtsgrundlage für Meldepflichten und ÖGD-Aufgaben)
- [[RKI]] (Robert Koch-Institut; nationale Koordination und Surveillance, oberste Ebene der Meldekette)
- [[FHIR]] (technisches Datenformat für DEMIS-Meldungen)
- [[Telematikinfrastruktur]] (parallele Gesundheits-IT-Infrastruktur; keine direkte Verbindung zum ÖGD)

## Quellen

- [Bundesgesundheitsministerium: Öffentlicher Gesundheitsdienst](https://www.bundesgesundheitsministerium.de/themen/gesundheitswesen/oeffentlicher-gesundheitsdienst.html)
- [Robert Koch-Institut: ÖGD und Infektionsschutz](https://www.rki.de/DE/Content/Infekt/IfSG/ifsg_node.html)
- [Wikipedia: Gesundheitsamt](https://de.wikipedia.org/wiki/Gesundheitsamt)
- [DEMIS – RKI](https://www.rki.de/DE/Content/Infekt/DEMIS/DEMIS_node.html)
