---
title: eArztbrief
audience: [technical, non-technical]
tags: [technologies, kommunikation, arztbrief, cda, kim, qes]
aliases: [Elektronischer Arztbrief, e-Arztbrief, digitaler Arztbrief]
maturity: setzling
---

# eArztbrief

Der **eArztbrief** ist der elektronische Arztbrief im [[CDA]]-Format, der über den sicheren Kommunikationsdienst [[KIM]] zwischen Leistungserbringern in der [[Telematikinfrastruktur]] versandt wird.

## Erklärt für Einsteiger

Wenn du beim Facharzt warst, schreibt er deinem Hausarzt einen Brief: Was wurde festgestellt, was wurde behandelt, was ist als nächstes zu tun. Früher kam dieser Brief per Post, manchmal Wochen später. Der eArztbrief ist dieser Brief in digitaler Form. Er wird über ein sicheres Netz direkt von Arzt zu Arzt geschickt, in wenigen Minuten statt in Wochen. Damit der Inhalt nicht verändert werden kann, wird er digital unterschrieben, ähnlich wie eine Unterschrift auf Papier, nur fälschungssicher.

## Überblick

Der eArztbrief ist der zentrale Anwendungsfall des [[KIM]]-Dienstes. Er löst den papierbasierten Arztbrief ab, der bislang per Post oder Fax übermittelt wurde. Die rechtliche Grundlage für die Förderung des eArztbriefs legte das E-Health-Gesetz (2015), das eine Vergütung für maschinenlesbar übermittelte Arztbriefe einführte.

Das Format des eArztbriefs folgt dem internationalen Standard [[CDA]] R2 (Clinical Document Architecture, Release 2) in der Ausprägung, die die [[KBV]] (Kassenärztliche Bundesvereinigung) als "Basis-Arztbrief" spezifiziert hat. Die KBV-Spezifikation definiert Pflicht- und optionale Abschnitte sowie die Codierung medizinischer Inhalte (Diagnosen nach [[ICD-10-GM]], Prozeduren nach [[OPS]]).

Seit der Einführung von KIM werden täglich hunderttausende eArztbriefe über die TI ausgetauscht. Der eArztbrief ist damit die meistgenutzte Fachanwendung auf KIM.

## Technische Details

### Format: CDA R2

Der eArztbrief basiert auf **HL7 CDA R2** (Clinical Document Architecture, Release 2). CDA ist ein XML-basiertes Dokumentenformat, das medizinische Dokumente mit strukturierten Metadaten und maschinenlesbaren klinischen Inhalten verbindet.

Ein CDA-Arztbrief hat zwei Ebenen:

- **Header**: Metadaten zum Dokument (Autor, Patient, Einrichtung, Zeitstempel, Dokumenttyp-Code nach LOINC)
- **Body**: Klinischer Inhalt, unterteilt in Sections (Abschnitte). Jeder Abschnitt kann in strukturierter Form (maschinenlesbar, z.B. ICD-10-codierte Diagnosen) oder als Freitext vorliegen.

Die KBV veröffentlicht den **Basis-Arztbrief** als verbindliches CDA-Template. Er definiert, welche Sections verpflichtend sind (z.B. Anamnese, Diagnose, Therapie, Epikrise) und welche optional eingebunden werden können.

### Transport: KIM

Der eArztbrief wird als Anhang einer [[KIM]]-Nachricht übermittelt. Der Absender hängt das signierte CDA-Dokument an die KIM-E-Mail und adressiert sie an die KIM-Adresse des Empfängers. Der KIM-Fachdienst transportiert die Ende-zu-Ende-verschlüsselte Nachricht. Das Primärsystem des Empfängers extrahiert das CDA-Dokument und stellt es dem Empfänger dar.

Die Dienstkennung `eArztbrief` im KIM-Header kennzeichnet die Nachricht als Arztbrief und ermöglicht automatisches Routing im Primärsystem.

### Qualifizierte elektronische Signatur (QES)

Arztbriefe müssen nach § 291f SGB V mit einer [[QES|qualifizierten elektronischen Signatur (QES)]] versehen werden, um die Vergütung nach EBM zu erhalten. Die QES wird über den [[HBA]] (Heilberufsausweis) und den [[Konnektoren|Konnektor]] erstellt. Sie stellt sicher, dass:

- die Identität des Unterzeichners (Arzt) nachgewiesen ist
- der Dokumenteninhalt nach der Signatur nicht verändert wurde

Für die technische Erstellung der QES im KIM-Kontext nutzt das Primärsystem die Signier-Schnittstelle des Konnektors.

### Integration mit der ePA

Arztbriefe aus dem eArztbrief-Workflow können automatisiert in die [[ePA]] des Patienten eingestellt werden. Das Primärsystem kann nach dem Empfang eines eArztbriefs diesen als CDA-Dokument über die ePA-Schnittstelle in der Patientenakte ablegen. Der Patient erteilt die Zugriffserlaubnis über seine ePA-App oder am Kartenterminal.

Im ePA-Kontext wird der Arztbrief nach dem [[XDS]]-Dokumentenmodell (Cross-Enterprise Document Sharing) registriert und gespeichert.

### Vergütung nach EBM

Der eArztbrief wird nach dem Einheitlichen Bewertungsmaßstab ([[EBM]]) abgerechnet. Voraussetzung ist die Übermittlung über KIM mit QES. Die Vergütung soll einen Anreiz zur digitalen Übermittlung setzen. Es gelten zwei Ziffern: Das Versenden wird mit EBM 86900 vergütet (28 Cent je Brief), das Empfangen mit EBM 86901 (27 Cent je Brief). Das entspricht einer Grundvergütung für den Mehraufwand gegenüber dem papierbasierten Arztbrief.

### Abgrenzung zu anderen Kommunikationsformen

- **KIM-Nachricht ohne Struktur**: Freitexte ohne CDA-Hülle sind möglich, gelten aber nicht als eArztbrief und werden nicht nach EBM 86900 vergütet.
- **[[TI-Messenger]]**: Für Echtzeit-Kommunikation (Chat). Kein dokumentierter Arztbrief.
- **Befunde als PDF**: Auch über KIM möglich, aber nicht maschinenlesbar; kein eArztbrief im engeren Sinne.

## Verknüpfungen

- [[KIM]] (Transportweg des eArztbriefs)
- [[CDA]] (Dokumentenformat HL7 CDA R2)
- [[QES]] (Qualifizierte elektronische Signatur, Pflicht für Vergütung)
- [[HBA]] (Heilberufsausweis, wird für QES benötigt)
- [[Konnektoren]] (Erstellt die QES für den eArztbrief)
- [[ePA]] (Ablage des eArztbriefs in der Patientenakte)
- [[XDS]] (Dokumentenmodell in der ePA)
- [[KBV]] (veröffentlicht das Basis-Arztbrief-CDA-Template)
- [[ICD-10-GM]] (Codierung von Diagnosen im CDA)
- [[VZD]] (Adressbuch für KIM-Adressen der Empfänger)
- [[TI-Messenger]] (komplementäre Echtzeit-Kommunikation)
- [[Telematikinfrastruktur]] (Rahmeninfrastruktur)

## Quellen

- [KBV: Basis-Arztbrief Spezifikation](https://www.kbv.de/html/basis-arztbrief.php)
- [gematik Fachportal: KIM – Kommunikation im Medizinwesen](https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen)
- [KBV: EBM-Ziffer 86900 (eArztbrief)](https://www.kbv.de/html/e-arztbrief.php)
- [HL7 Deutschland: CDA R2 Basis-Arztbrief Implementierungsleitfaden](https://www.hl7.de/themen/hl7-cda-implementierungsleitfaden-e-arztbrief-2-0-update.html)
