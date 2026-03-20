---
title: GFF
audience: [technical, non-technical]
tags: [organisation, datenschutz, bürgerrechte, klagen, grundrechte]
aliases: [Gesellschaft für Freiheitsrechte, GFF e.V.]
relevance:
  sectors: [regulierung, forschung, patient, verband]
  interests: [compliance, patient]
maturity: setzling
---

# GFF

Die **GFF (Gesellschaft für Freiheitsrechte e.V.)** ist eine gemeinnützige Bürgerrechtsorganisation, die in Deutschland strategische Klagen zur Durchsetzung von Grundrechten führt, unter anderem im Bereich des Datenschutzes im Gesundheitswesen.

## Erklärt für Einsteiger

Die GFF ist eine Organisation von Juristen und Aktivisten, die Klagen vor Gericht einreichen, um Grundrechte zu schützen. Sie tut das nicht für einzelne Mandanten, sondern gezielt für Fälle, deren Ausgang viele Menschen betrifft. Im Gesundheitsbereich klagt die GFF beispielsweise gegen Gesetze, die ihrer Meinung nach den Datenschutz von Millionen Versicherten verletzen.

## Überblick

Die GFF wurde 2015 gegründet und hat ihren Sitz in Berlin. Sie finanziert sich über Spenden und führt sogenannte strategische Prozessführung durch: Sie wählt gezielt Fälle aus, bei denen ein Urteil über den Einzelfall hinaus weitreichende Wirkung haben kann.

Im deutschen Gesundheits-IT-Kontext ist die GFF vor allem durch ihre Klage gegen die Datenweitergabe an das [[Forschungsdatenzentrum-Gesundheit]] (FDZ) bekannt geworden. Hintergrund ist das [[GDNG|Gesundheitsdatennutzungsgesetz (GDNG)]], das seit März 2024 die Pflichtübermittlung pseudonymisierter [[ePA]]-Daten und GKV-Abrechnungsdaten an das FDZ beim [[BfArM]] regelt.

Die GFF kritisiert, dass:

1. Das Opt-out-Verfahren (Widerspruchsrecht der Versicherten) den Anforderungen des Art. 9 [[DSGVO]] für besonders sensible Gesundheitsdaten nicht genügt.
2. Die [[Pseudonymisierung]] bei kleinen Patientengruppen (seltene Erkrankungen) keine ausreichende Re-Identifizierungsresistenz bietet.
3. Das Verfahren gegen den Grundsatz der Datensparsamkeit verstößt.

Im Februar 2026 hat die GFF ihre Klage gegen die FDZ-Datenweitergabe wiederaufgenommen und vor dem Verwaltungsgericht Berlin weitere Anträge gestellt. Das Verfahren ist noch anhängig.

Neben der FDZ-Klage war die GFF auch Kritikerin des [[GDVG|Gesundheitsdatenverarbeitungsgesetzes (GDVG)]] und hat dessen datenschutzrechtliche Mängel öffentlich kommentiert.

> [!interesse-compliance]
> Die GFF-Klage gegen das FDZ hat unmittelbare Bedeutung für Forschungseinrichtungen und Hersteller, die auf FDZ-Daten angewiesen sind. Solange das Verfahren anhängig ist, besteht rechtliche Unsicherheit über die Bestandskraft der Datenzugangsregelungen nach GDNG. Forschungseinrichtungen sollten die Entwicklung des Verfahrens beobachten und Projekte mit FDZ-Daten entsprechend absichern.
>
> **Stand März 2026:** Verfahren vor dem Verwaltungsgericht Berlin anhängig. Endurteil noch ausstehend.

## Technische Details

### Rechtliche Grundlagen der GFF-Klage

Die GFF stützt ihre Argumentation auf:

- **Art. 9 DSGVO**: Besondere Kategorien personenbezogener Daten (Gesundheitsdaten) dürfen nur unter engen Voraussetzungen verarbeitet werden. Die GFF bezweifelt, dass das GDNG-Opt-out eine ausreichende Rechtsgrundlage nach Art. 9 Abs. 2 DSGVO darstellt.
- **Art. 2 Abs. 1 GG i.V.m. Art. 1 Abs. 1 GG** (allgemeines Persönlichkeitsrecht): Recht auf informationelle Selbstbestimmung, hergeleitet aus dem Volkszählungsurteil des Bundesverfassungsgerichts von 1983.
- **Verhältnismäßigkeit**: Die Pflichtübermittlung ohne ausdrückliche Einwilligung sei nicht das mildeste Mittel.

### Abgrenzung: Opt-out im FDZ vs. Opt-out in der ePA

Das [[GDNG]] enthält zwei verschiedene Opt-out-Regelungen:

| Regelung | Gegenstand | Opt-out möglich? |
|---|---|---|
| FDZ-Datenweitergabe | GKV-Abrechnungsdaten an BfArM | Ja (Widerspruch bei Krankenkasse) |
| ePA-Sekundärnutzung | Pseudonymisierte ePA-Daten | Ja (Widerspruch in ePA-App) |
| ePA FDZ-Übermittlung | Direkte Weitergabe an FDZ | Kein individuelles Opt-out |

Die GFF kritisiert insbesondere den letzten Punkt: Versicherte können der direkten FDZ-Übermittlung von ePA-Daten nicht individuell widersprechen.

> [!patientenrecht] Patientenrecht: Widerspruch gegen Forschungsdatennutzung
> Ihre Gesundheitsdaten können für Forschung genutzt werden. Dagegen können Sie sich teilweise wehren.
>
> **Was Sie jetzt tun können:**
> 1. Melden Sie sich in der App Ihrer Krankenkasse an.
> 2. Suchen Sie die Datenschutz- oder Privatsphäre-Einstellungen.
> 3. Widersprechen Sie der Nutzung Ihrer ePA-Daten für Forschungszwecke.
>
> **Wichtig zu wissen:** Der Widerspruch gegen die Forschungsnutzung ist möglich. Aber: Die direkte Weitergabe von ePA-Daten an das Forschungsdatenzentrum (FDZ) beim BfArM können Sie derzeit **nicht** individuell stoppen. Genau dagegen klagt die GFF vor Gericht.
>
> **Ihr Recht:** Sie haben das Recht auf informationelle Selbstbestimmung. Das bedeutet: Sie sollen grundsätzlich selbst entscheiden, wer Ihre Gesundheitsdaten sieht.

### Institutionelle Einordnung

Die GFF ist keine Behörde und hat keine hoheitlichen Befugnisse. Sie handelt als Kläger vor ordentlichen Gerichten und Verwaltungsgerichten. Neben dem Gesundheitsbereich führt die GFF strategische Prozesse in den Bereichen Überwachung, Presse- und Meinungsfreiheit sowie Asyl- und Migrationsrecht.

## Verknüpfungen

- [[GDNG]] (Gesundheitsdatennutzungsgesetz; Hauptgegenstand der GFF-Klage)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ beim BfArM; Empfänger der umstrittenen Datenweitergabe)
- [[Pseudonymisierung]] (technisches Verfahren, das die GFF für unzureichend hält)
- [[DSGVO]] (Rechtsgrundlage der GFF-Argumentation)
- [[BfDI]] (Bundesbeauftragter für Datenschutz; kann Verfahren kommentieren)
- [[ePA]] (Datenquelle, über deren Sekundärnutzung die GFF klagt)
- [[GDVG]] (Gesundheitsdatenverarbeitungsgesetz; ebenfalls von GFF kritisiert)

## Quellen

- [GFF: Über uns](https://freiheitsrechte.org/)
- [GFF: Klage gegen Gesundheitsdatengesetz](https://freiheitsrechte.org/gesundheitsdaten/)
- [Wikipedia: Gesellschaft für Freiheitsrechte](https://de.wikipedia.org/wiki/Gesellschaft_f%C3%BCr_Freiheitsrechte)
