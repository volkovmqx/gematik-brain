---
title: KHVVG
audience: [technical, non-technical]
tags: [standards, krankenhaus, reform, vergütung, gesetz]
aliases: [Krankenhausversorgungsverbesserungsgesetz, Krankenhausreform 2024]
maturity: wachsend
relevance:
  sectors: [krankenhaus, regulierung, kasse, hersteller, it-dienstleister]
  interests: [compliance, business]
---

# KHVVG

Das **KHVVG (Krankenhausversorgungsverbesserungsgesetz)** ist das zentrale Reformgesetz für die stationäre Versorgung in Deutschland, das die Krankenhausvergütung von einem reinen Fallpauschalensystem auf ein Mischmodell aus Vorhaltevergütung und Fallpauschalen umstellt.

## Erklärt für Einsteiger

Bisher bekamen Krankenhäuser in Deutschland Geld hauptsächlich dann, wenn sie Patienten behandelten. Das führte dazu, dass Kliniken möglichst viele Fälle abrechnen wollten, um wirtschaftlich zu überleben. Das KHVVG ändert das: Krankenhäuser sollen künftig auch Geld dafür bekommen, dass sie bestimmte Leistungen bereithalten, also rund um die Uhr verfügbar sind, auch wenn gerade kein Patient da ist. So wie eine Feuerwehr bezahlt wird, damit sie da ist, nicht erst wenn es brennt.

## Überblick

Der Bundesrat billigte das KHVVG am 22. November 2024. Das Gesetz trat am 12. Dezember 2024 in Kraft, zentrale Finanzierungsänderungen greifen schrittweise ab 2025. Der vollständige Name lautet: Gesetz zur Verbesserung der Versorgungsqualität im Krankenhaus und zur Reform der Vergütungsstrukturen.

Das KHVVG ist das Nachfolgegesetz des [[KHZG]] (Krankenhauszukunftsgesetz). Während das KHZG einmalige Investitionsmittel für digitale Infrastruktur bereitstellte, zielt das KHVVG auf strukturelle Reformen der Vergütung und Planung.

### Kernpunkte

**[[Vorhaltevergütung]]:** Ein Teil der Krankenhausfinanzierung wird von der Fallzahl entkoppelt. Krankenhäuser erhalten Vorhaltepauschalen für das bloße Bereithalten bestimmter Leistungen und Infrastruktur. Damit sollen Krankenhäuser wirtschaftlich überleben können, ohne unnötige Eingriffe durchzuführen.

**Leistungsgruppen:** Die stationären Leistungen werden in zunächst 65 Leistungsgruppen eingeteilt. Jede Leistungsgruppe hat definierte Qualitätskriterien (Mindestfallzahlen, Strukturanforderungen, Prozessqualität). Nur Krankenhäuser, die diese Kriterien erfüllen, dürfen die entsprechenden Leistungen erbringen und abrechnen.

**[[Transformationsfonds]]:** Für die Umsetzung der Reform stellt das KHVVG einen Transformationsfonds von 50 Milliarden Euro bereit. Bund und Länder teilen sich die Kosten je zur Hälfte. Der Fonds fördert Umstrukturierungen, Spezialisierungen und den Abbau von Überkapazitäten.

**Ärztliche Personalbemessung:** Das Gesetz führt erstmals bundeseinheitliche Vorgaben zur ärztlichen Personalausstattung ein.

### Umsetzungszeitplan

- 2025: Inkrafttreten, Beginn der Planungsphase für Leistungsgruppenzuweisungen durch Länder
- bis Ende 2026: Länder weisen ihren Krankenhäusern Leistungsgruppen zu
- 2027-2028: Schrittweise Umstellung auf das neue Finanzsystem
- 2029: Vollständige Umstellung abgeschlossen

## Technische Details

### Leistungsgruppen und IT-Anforderungen

Die 65 Leistungsgruppen stellen neue Anforderungen an die IT-Dokumentation in Krankenhäusern. Das [[KIS]] (Krankenhausinformationssystem) muss die leistungsgruppenbezogene Dokumentation unterstützen: Strukturnachweise, Prozessqualitätsdaten und Mindestfallzahlnachweise müssen systematisch erfasst und abrufbar sein.

Der [[ISiK]]-Standard (Informationstechnische Systeme in Krankenhäusern) bleibt als Schnittstellenstandard für die Datenübermittlung zwischen KIS und externen Systemen relevant. Die [[gematik]] entwickelt ISiK im gesetzlichen Auftrag nach § 373 [[SGB V]].

### Verhältnis zu [[DRG]] und [[PEPP]]

Das KHVVG ändert nicht das [[DRG]]-Fallpauschalensystem grundsätzlich, sondern ergänzt es um den Vorhalteanteil. Die [[DRG]]-Abrechnung bleibt bestehen, wird aber durch die neuen Vorhaltepauschalen ergänzt. Für psychiatrische Einrichtungen gilt weiterhin das [[PEPP]]-System, das durch das KHVVG ebenfalls Anpassungen erfahren wird.

### Krankenhausplanung

Die Länder sind für die Krankenhausplanung zuständig. Das KHVVG gibt ihnen ein neues Instrument: die Leistungsgruppenzuweisungen. Durch die Verknüpfung von Vergütung und Leistungsgruppen kann die Planung direkter wirken als bisher. Das [[InEK]] unterstützt die Kalkulation der neuen Vergütungsstruktur.

## Verknüpfungen

- [[KHZG]] (Vorgängergesetz; einmalige Digitalisierungsförderung)
- [[KHG]] (Krankenhausfinanzierungsgesetz: Basisgesetz für Krankenhausfinanzierung)
- [[DRG]] (Fallpauschalensystem, das durch KHVVG um Vorhaltepauschalen ergänzt wird)
- [[PEPP]] (Vergütungssystem für Psychiatrie; ebenfalls von KHVVG betroffen)
- [[InEK]] (entwickelt Kalkulationsgrundlagen für die neuen Vergütungsstrukturen)
- [[DKG]] (Deutsche Krankenhausgesellschaft; zentraler Verhandlungspartner)
- [[GKV-Spitzenverband]] (Verhandlungspartner für Vergütungsvereinbarungen)
- [[KIS]] (Krankenhausinformationssystem; muss neue Dokumentationsanforderungen erfüllen)
- [[ISiK]] (Schnittstellenstandard; relevant für KIS-Anbindungen im KHVVG-Kontext)
- [[BMG]] (Bundesministerium für Gesundheit; hat das KHVVG initiiert)

## Quellen

- [BMG: Krankenhausversorgungsverbesserungsgesetz (KHVVG)](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/krankenhausversorgungsverbesserungsgesetz-khvvg)
- [Bundestag beschließt Krankenhausreform (BMG, Oktober 2024)](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/bundestag-beschliesst-krankenhausreform-pm-17-10-2024)
- [Bundesgesetzblatt: KHVVG (BGBl. 2024 I Nr. 400)](https://www.recht.bund.de/bgbl/1/2024/400/VO.html)
- [Deutscher Bundestag: KHVVG – Gesetzgebungsverfahren](https://dip.bundestag.de/vorgang/gesetz-zur-verbesserung-der-versorgungsqualit%C3%A4t-im-krankenhaus-und-zur-reform/312313)
