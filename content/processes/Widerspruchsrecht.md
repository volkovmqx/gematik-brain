---
title: Widerspruchsrecht
audience: [technical, non-technical]
tags: [prozess, datenschutz, epa, patientenrecht, opt-out]
aliases: [Widerspruch ePA, Opt-out-Recht, Widerspruchsmöglichkeit]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, patient, kasse, regulierung]
  interests: [compliance, patient]
---

# Widerspruchsrecht

Das **Widerspruchsrecht** ist das gesetzlich verankerte Recht von Versicherten, der Befüllung und Nutzung ihrer [[ePA]] ganz oder teilweise zu widersprechen.

## Erklärt für Einsteiger

Seit April 2025 legt jede gesetzliche Krankenkasse automatisch eine elektronische Patientenakte für ihre Versicherten an. Man muss also nicht zustimmen, sondern aktiv widersprechen, wenn man keine möchte. Dieses Recht zu widersprechen nennt man Widerspruchsrecht. Du kannst jederzeit sagen: "Ich möchte keine ePA" oder "Ich möchte keine Daten für die Forschung freigeben." Dann muss die Kasse das umsetzen.

## Überblick

Mit dem [[DigiG]] (Digitalgesetz, in Kraft seit 2024) wechselte Deutschland beim [[Opt-Out-ePA|Opt-out-Modell]] der [[ePA]] vom Opt-in zum Opt-out. Das bedeutet: Alle gesetzlich Versicherten erhalten automatisch eine ePA, sofern sie nicht widersprechen.

Das Widerspruchsrecht schützt die informationelle Selbstbestimmung der Versicherten. Es ist im [[SGB-V]] verankert (insbesondere §§ 342, 343, 344, 347 SGB V).

### Wogegen kann widersprochen werden?

Versicherte können in drei verschiedenen Bereichen Widerspruch einlegen:

**1. Widerspruch gegen die ePA selbst (vollständiger Opt-out)**
Versicherte können der Anlage und dem Betrieb der gesamten ePA widersprechen. Die Krankenkasse muss die Akte daraufhin schließen oder gar nicht erst anlegen. Bereits eingelegte Dokumente werden gelöscht.

**2. Widerspruch gegen einzelne Dokumentenkategorien oder Einrichtungen**
Versicherte können bestimmten Einrichtungen den Zugriff auf ihre ePA dauerhaft verweigern, oder bestimmte Dokumenttypen ausblenden. Zum Beispiel kann die elektronische Medikationsliste ([[eML]]) für einzelne Arztpraxen gezielt gesperrt werden (Funktion verfügbar seit ePA 3.1.2, März 2026).

**3. Widerspruch gegen die Sekundärnutzung**
Gesundheitsdaten aus der ePA können laut [[GDNG]] (Gesundheitsdatennutzungsgesetz) an das [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]] übermittelt werden. Versicherte können dieser Datenübermittlung für Forschungszwecke gesondert widersprechen. Kein Widerspruchsrecht besteht hingegen gegen die gesetzlich vorgeschriebene Übermittlung von Abrechnungsdaten ans FDZ (gegen diese Regelung ist eine Klage anhängig, Stand März 2026).

> [!interesse-patient] Ihr Widerspruchsrecht in der Praxis
> - Widerspruch jederzeit bei Ihrer Krankenkasse einlegbar (App, Brief, telefonisch)
> - Vollständiger Opt-out: Kasse muss Akte schließen und Daten löschen
> - Granulare Kontrolle: einzelne Einrichtungen oder Dokumenttypen gezielt sperren
> - Forschungsnutzung: gesonderter Widerspruch möglich (§ 363 SGB V)
> - Widerspruch kann jederzeit widerrufen werden

### Wie wird der Widerspruch ausgeübt?

Der Widerspruch kann auf verschiedenen Wegen erklärt werden:

- Über die **App der Krankenkasse** (direkter Zugang zur Widerspruchsfunktion)
- Über das **Patientenportal** der Krankenkasse (Webzugang)
- Schriftlich oder telefonisch bei der Krankenkasse
- Über eine **Ombudsstelle** der Krankenkasse bei Konflikten oder wenn die direkte Einlegung nicht möglich ist

Laut § 342 SGB V muss die Krankenkasse einen unkomplizierten, barrierefreien Widerspruchsprozess anbieten. Eine besondere Begründung ist nicht erforderlich.

> [!interesse-compliance] Pflichten für Leistungserbringer
> - Vor jedem Datenzugriff auf die ePA muss das Primärsystem den Opt-out-Status prüfen
> - Dokumentiert die Kasse einen Widerspruch, darf das KIS/PVS nicht auf die ePA zugreifen
> - Seit 1. Oktober 2025 ist die aktive Befüllung der ePA für Leistungserbringer verpflichtend, sofern kein Patientenwiderspruch vorliegt
> - § 347 SGB V erlaubt in therapeutisch begründeten Einzelfällen das Absehen von der Befüllung (unabhängig vom Widerspruchsrecht des Patienten)

## Technische Details

### Widerspruchsverarbeitung im ePA-Aktensystem

Der Widerspruchsstatus eines Versicherten wird zentral im ePA-Aktensystem gespeichert. Technisch unterscheidet die Architektur zwischen:

- **Account-Löschung**: Bei vollständigem Opt-out wird das ePA-Konto deaktiviert und Daten werden gemäß Löschfristen entfernt.
- **Zugriffseinschränkungen**: Bei partiellen Widersprüchen werden Zugriffsregeln im Aktensystem gesetzt. Das Primärsystem erhält beim Zugriffsversuch einen Fehler-Response (403 Forbidden oder entsprechende FHIR-Fehlermeldung).

### Zusammenspiel mit der VAU

Die [[VAU]] (Vertrauenswürdige Ausführungsumgebung) des ePA-Aktensystems stellt sicher, dass Widerspruchsregeln serverseitig durchgesetzt werden, auch wenn ein Primärsystem technisch versucht, gesperrte Dokumente abzurufen.

### Authentifizierung für den Widerspruch

Um Missbrauch zu verhindern, muss der Versicherte für die Widerspruchserklärung über einen der zugelassenen Identifikationswege authentifiziert sein: [[Gesundheits-ID]], [[eGK]] mit PIN oder [[ePass]].

## Verknüpfungen

- [[ePA]] (das System, auf das sich das Widerspruchsrecht bezieht)
- [[Opt-Out-ePA]] (das zugrundeliegende Opt-out-Modell der ePA)
- [[DigiG]] (Gesetz, das das Opt-out-Modell einführte)
- [[SGB-V]] (gesetzliche Grundlage des Widerspruchsrechts)
- [[eML]] (elektronische Medikationsliste, für die granulare Widersprüche möglich sind)
- [[Ombudsstelle]] (Beschwerdeinstanz bei Konflikten um die Widerspruchsbearbeitung)
- [[Forschungsdatenzentrum-Gesundheit]] (Sekundärnutzung, gegen die gesondert widersprochen werden kann)
- [[GDNG]] (gesetzliche Grundlage für die Sekundärnutzung)
- [[BfDI]] (Aufsicht bei Datenschutzverstößen)
- [[VAU]] (technische Durchsetzung der Widerspruchsregeln)

## Quellen

- [§ 342 SGB V: Elektronische Patientenakte – gesetze-im-internet.de](https://www.gesetze-im-internet.de/sgb_5/__342.html)
- [§ 363 SGB V: Forschungsdatenzentrum Gesundheit – gesetze-im-internet.de](https://www.gesetze-im-internet.de/sgb_5/__363.html)
- [gematik: ePA für alle – Widerspruch und Opt-out](https://www.gematik.de/anwendungen/epa/faq)
- [BfDI: Informationen zur elektronischen Patientenakte](https://www.bfdi.bund.de/DE/Buerger/Inhalte/Gesundheit-Soziales/Telematik/ePA.html)
