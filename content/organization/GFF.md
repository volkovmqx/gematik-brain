---
title: GFF
audience: [technical, non-technical]
tags: [organisation, datenschutz, bürgerrechte, klagen, grundrechte]
aliases: [Gesellschaft für Freiheitsrechte, GFF e.V.]
relevance:
  sectors: [regulierung, forschung, patient, verband]
  interests: [compliance, patient]
maturity: immergruen
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

> [!frist-warnung] Frist-Warnung: Rechtliche Unsicherheit bei FDZ-Datenzugang nach GDNG
> **Rechtsgrundlage:** §§ 303a–303f SGB V i.V.m. § 1 GDNG (Gesundheitsdatennutzungsgesetz, in Kraft seit 26. März 2024); Art. 9 Abs. 2 DSGVO.
> **Aktueller Stand (März 2026):** Das GFF-Klageverfahren vor dem Verwaltungsgericht Berlin gegen die Datenweitergabe an das FDZ beim BfArM ist seit Februar 2026 wiederaufgenommen. Das FDZ ist seit Oktober 2025 teilweise in Betrieb und gibt Daten heraus. Ein Endurteil steht noch aus.
> **Handlungsbedarf für Forschungseinrichtungen:** Institutionen, die auf Basis von § 303e SGB V Anträge auf FDZ-Datenzugang gestellt haben oder planen, müssen die Verfahrensentwicklung aktiv beobachten. Bis zu einem rechtskräftigen Urteil besteht Unsicherheit über die Bestandskraft der Datenzugangsregelungen. Projektverträge und Data-Sharing-Agreements sollten Vorbehaltsklauseln für den Fall einer gerichtlichen Aufhebung der GDNG-Datenweitergabepflicht enthalten.
> **Bei negativem Urteil:** Eine gerichtliche Aufhebung der FDZ-Datenweitergabepflicht würde laufende Forschungsprojekte unterbrechen und eine gesetzliche Nachbesserung erfordern.

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

> [!patientenrecht] Patientenrecht: GFF als Anlaufstelle für Datenschutzfragen
> Die GFF ist keine Behörde und kann Ihnen keine Rechtsberatung geben. Aber sie ist eine wichtige Informationsquelle, wenn es um Ihre Datenschutzrechte im Gesundheitsbereich geht.
>
> **Was Sie konkret tun können:**
> - Auf der GFF-Website finden Sie verständliche Erklärungen zu laufenden Klagen.
> - Der offizielle Datenschutzbeauftragte Ihres Bundeslandes nimmt Beschwerden zu Datenschutzverstößen entgegen.
> - Für individuelle Beratung zu Patientenrechten wenden Sie sich an die **Unabhängige Patientenberatung Deutschland (UPD)** unter 0800 011 77 22 (kostenlos, montags bis freitags 8 bis 22 Uhr).
>
> **Ihr Recht:** Sie können sich beim Datenschutzbeauftragten beschweren, wenn Sie glauben, dass Ihre Gesundheitsdaten unrechtmäßig verarbeitet werden. Das ist kostenlos und ohne Anwalt möglich.

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

- [GFF: Wer wir sind](https://freiheitsrechte.org/ueber-die-gff/werwirsind)
- [GFF: Klage gegen Gesundheitsdatengesetz](https://freiheitsrechte.org/gesundheitsdaten/)
- [GFF: Freiheit im digitalen Zeitalter](https://freiheitsrechte.org/themen/freiheit-im-digitalen-zeitalter)
- [Wikipedia: Gesellschaft für Freiheitsrechte](https://de.wikipedia.org/wiki/Gesellschaft_f%C3%BCr_Freiheitsrechte)
