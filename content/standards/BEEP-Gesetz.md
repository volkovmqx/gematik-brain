---
title: BEEP-Gesetz
audience: [technical, non-technical]
tags: [standards, gesetz, epa, pflege, datenschutz]
aliases: [Gesetz zur Befugniserweiterung und Entbürokratisierung in der Pflege, Pflegekompetenzgesetz]
maturity: wachsend
relevance:
  sectors: [pflege, apotheke, arztpraxis, regulierung]
  interests: [compliance]
---

# BEEP-Gesetz

Das **BEEP-Gesetz** (Gesetz zur Befugniserweiterung und Entbürokratisierung in der Pflege) ist ein Bundesgesetz, das am 1. Januar 2026 in Kraft trat und unter anderem den Zugang zu Abrechnungsdaten in der [[ePA]] neu regelt sowie den ePass als Identifikationsmethode für die ePA einführt.

## Erklärt für Einsteiger

Stell dir vor, du warst beim Arzt und die Krankenkasse hat danach alle Details der Behandlung als Abrechnungsdaten in deine digitale Patientenakte gespeichert. Früher konnte der nächste Arzt, den du besuchst, diese Abrechnungsdaten auch sehen. Das BEEP-Gesetz hat das geändert: Jetzt können nur noch du selbst diese Daten sehen, nicht mehr andere Ärzte, es sei denn, du erlaubst es ausdrücklich. Das schützt sensible Informationen, zum Beispiel wenn du wegen einer psychischen Erkrankung oder einer Geschlechtskrankheit behandelt wurdest.

## Überblick

Das BEEP-Gesetz wurde vom Deutschen Bundestag am **6. November 2025** verabschiedet. Der Bundesrat rief zunächst den Vermittlungsausschuss an (21. November 2025), stimmte dem Gesetz nach Einigung aber zu. Es trat am **1. Januar 2026** in Kraft.

Das Gesetz ändert mehrere Sozialgesetzbücher, schwerpunktmäßig das [[SGB V]] und das [[SGB XI]]. Sein Name enthält zwei Kernziele: "Befugniserweiterung" für Pflegefachkräfte (mehr eigenständige Handlungsspielräume in der Pflege) und "Entbürokratisierung" im Pflegesektor (Abbau von Dokumentationspflichten und Formularzwängen).

Für die Telematikinfrastruktur und die [[ePA]] sind vor allem folgende Regelungen des BEEP-Gesetzes relevant:

### Abrechnungsdaten in der ePA

Seit 1. Januar 2026 werden die von den Krankenkassen automatisch in die [[ePA]] eingestellten elektronischen Abrechnungsdaten (eAD) so gespeichert, dass nur die Versicherten selbst Zugriff darauf haben. Behandelnde (Ärzte, Zahnärzte, Apotheken, Therapeuten) können diese Daten nicht einsehen, es sei denn, der Versicherte gibt sie explizit frei.

Diese Änderung schützt besonders sensible Diagnose- und Behandlungsinformationen, die sich aus den Abrechnungscodes (z.B. [[ICD-10-GM]]-Diagnosen, [[EBM]]-Ziffern, [[PZN]]-Codes) rekonstruieren lassen würden.

### Ausnahmen bei der ePA-Befüllung

Das BEEP-Gesetz führt in § 347 [[SGB V]] eine Ausnahmeregelung ein: Leistungserbringer können in therapeutisch begründeten Einzelfällen von der Pflicht zur ePA-Befüllung absehen. Voraussetzungen:

- Erhebliche therapeutische Gründe (z.B. bei psychischen Erkrankungen, wenn der Eintrag den Therapieerfolg gefährden würde)
- Gefährdung des Kindeswohls (z.B. bei Verdacht auf Kindesmisshandlung bei unter 15-Jährigen)
- Bedrohung von Drittrechten

### ePass als Authentifizierungsweg

Das BEEP-Gesetz schafft auch die Rechtsgrundlage für den **[[ePass]]**, einen neuen Identifikationsweg für die [[ePA]]. Der ePass nutzt den NFC-Chip eines deutschen Personalausweises (ab August 2021) oder Reisepasses (ab 2005). Versicherte können sich damit per Smartphone für die ePA authentisieren, ohne PIN oder Praxisbesuch. Er ergänzt die [[Gesundheits-ID]] und die [[eGK]].

## Technische Details

### Umsetzung der Abrechnungsdatentrennung

Technisch werden die Abrechnungsdaten in einem separaten Bereich der [[ePA]] gespeichert, auf den die Zugriffsrechte für Leistungserbringer standardmäßig nicht gesetzt sind. Die [[VAU]] (Vertrauenswürdige Ausführungsumgebung) stellt sicher, dass die Datentrennung auch auf Serverseite durchgesetzt wird. Krankenkassen befüllen diesen Bereich automatisch, Ärzte und Apotheken können ihn nur lesen, wenn der Versicherte aktiv die Freigabe erteilt.

### Auswirkungen auf Primärsysteme

Praxissoftware ([[PVS]]) und Krankenhausinformationssysteme ([[KIS]]) mussten technisch angepasst werden: Die Benutzeroberflächen zeigen Abrechnungsdaten-Bereiche der ePA nicht mehr ohne Weiteres an. Primärsysteme, die nach dem 1. Januar 2026 versuchen, Abrechnungsdaten ohne Freigabe abzurufen, erhalten einen Zugriffsfehler vom ePA-Aktensystem.

> [!interesse-compliance] Was sich konkret ändert (in Kraft seit 1. Januar 2026)
> - Abrechnungsdaten in der ePA sind für Ärzte und Apotheken standardmäßig gesperrt
> - Ausnahme von ePA-Befüllung möglich bei therapeutischen Gründen (§ 347 SGB V): schriftlich dokumentieren
> - [[ePass]] als neuer Identifikationsweg für die ePA zulässig
> - Pflegefachkräfte erhalten erweiterte Handlungsspielräume (Befugniserweiterung); berufliche Beratung empfehlenswert
> - Primärsysteme (PVS, KIS) mussten bis 1. Januar 2026 technisch angepasst werden

### Bezug zu anderen Regelungen

Das BEEP-Gesetz ergänzt frühere Datenschutzregelungen im Kontext der ePA:
- Das [[PDSG]] (Patientendaten-Schutz-Gesetz) hatte die grundlegende Architektur der ePA und ihre Datenschutzregeln definiert.
- Das [[DigiG]] (Digitalgesetz) hatte den Opt-out-Ansatz für die ePA für alle eingeführt.
- Das BEEP-Gesetz schärft nun den Schutz spezifischer Datenkategorien innerhalb der ePA nach.

## Verknüpfungen

- [[ePA]] (Hauptbetroffene: Datenzugriff auf Abrechnungsdaten neu geregelt)
- [[SGB V]] (Geändertes Gesetz, insbesondere § 347)
- [[SGB XI]] (Pflegeregelungen im BEEP-Gesetz)
- [[ICD-10-GM]] (Diagnosecodes in den Abrechnungsdaten)
- [[EBM]] (Abrechnungsziffern in den Abrechnungsdaten)
- [[PZN]] (Pharmazentralnummern in Rezept-Abrechnungsdaten)
- [[VAU]] (technische Umsetzung der Datentrennung)
- [[Gesundheits-ID]] (Authentifizierungsweg, ergänzt durch ePass)
- [[eGK]] (weitere Authentifizierungsmethode für ePA)
- [[PVS]] (Praxissoftware, die Abrechnungsdaten-Zugriff nicht mehr standardmäßig zeigt)
- [[PDSG]] (Vorläufer-Gesetz mit grundlegenden ePA-Datenschutzregeln)
- [[DigiG]] (Opt-out-Regelung für ePA für alle)

## Quellen

- [Bundesgesundheitsministerium: Gesetz zur Befugniserweiterung und Entbürokratisierung in der Pflege](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/gesetz-befugniserweiterung-entbuerokratisierung-pflege)
- [Bundestag: Verabschiedung des Pflegekompetenzgesetzes, 06.11.2025](https://www.bundestag.de/dokumente/textarchiv/2025/kw45-de-pflege-1116730)
- [BPtK: Analyse des BEEP-Gesetzes](https://www.bptk.de/newsletter/4-2025/gesetz-zur-befugniserweiterung-und-entbuerokratisierung-in-der-pflege/)
- [BornCity: ePA-Update Abrechnungsdaten](https://borncity.com/news/epa-update-patienten-erhalten-alleinige-kontrolle-ueber-abrechnungsdaten/)
