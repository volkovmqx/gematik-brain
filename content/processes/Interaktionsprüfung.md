---
title: Interaktionsprüfung
audience: [technical, non-technical]
tags: [prozess, amts, apotheke, arzneimittel, abda, avs]
aliases: [Arzneimittelinteraktionsprüfung, Interaktionscheck, Wechselwirkungsprüfung]
relevance:
  sectors: [apotheke, arztpraxis, krankenhaus, hersteller, it-dienstleister]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# Interaktionsprüfung

Die **Interaktionsprüfung** ist die automatisierte Prüfung, ob ein neu verordnetes oder abzugebendes Arzneimittel mit anderen Medikamenten des Patienten gefährliche Wechselwirkungen eingehen kann.

## Erklärt für Einsteiger

Stell dir vor, du nimmst schon ein Blutdruckmittel und bekommst jetzt ein Schmerzmittel verschrieben. Manche Medikamente vertragen sich nicht miteinander: Sie können sich gegenseitig verstärken, abschwächen oder gefährliche Nebenwirkungen auslösen. Die Interaktionsprüfung ist ein automatischer Alarm in der Computersoftware der Apotheke oder des Arztes. Wenn du ein Rezept einlöst, prüft das System sofort, ob das neue Medikament mit deinen anderen Mitteln verträglich ist, und warnt den Apotheker oder Arzt, falls es ein Problem gibt.

## Überblick

Die Interaktionsprüfung ist ein zentraler Bestandteil der [[AMTS|Arzneimitteltherapiesicherheit (AMTS)]]. Ihr Ziel ist es, unerwünschte Arzneimittelwechselwirkungen (UAW) zu verhindern, die zu einem der häufigsten vermeidbaren Schadensereignisse im Gesundheitswesen zählen.

Die Prüfung findet an zwei Stellen statt:

1. **In der Arztpraxis**: Das [[PVS|Praxisverwaltungssystem (PVS)]] prüft bei der Verordnung, ob das neu verschriebene Medikament mit der bekannten Medikation des Patienten interagiert.
2. **In der Apotheke**: Das [[AVS|Apothekenverwaltungssystem (AVS)]] prüft bei der Abgabe nochmals. Hier ist die Datenbasis oft vollständiger, weil die Apotheke alle eingelösten Rezepte des Patienten sieht.

Mit der [[ePA]] und dem [[eMP|Elektronischen Medikationsplan (eMP)]] soll die Interaktionsprüfung künftig auf einer vollständigen, tagesaktualisierten Medikationshistorie basieren.

> [!interesse-patient]
> Wenn du mehrere Medikamente einnimmst, ist die Interaktionsprüfung ein wichtiger Schutz für dich. Du kannst aktiv dazu beitragen, indem du in der Apotheke alle Mittel angibst, die du nimmst, auch rezeptfreie Präparate und Nahrungsergänzungsmittel. Apotheken sind gesetzlich verpflichtet, diesen Check durchzuführen.

### Rechtliche Verpflichtung

Die Interaktionsprüfung ist keine freiwillige Leistung. Sie ist Teil der gesetzlich vorgeschriebenen AMTS-Prüfungen, die Apotheken gemäß [[ApBetrO|Apothekenbetriebsordnung (ApBetrO)]] durchführen müssen. Apothekensoftware (AVS) muss für die Zulassung in Deutschland nachweisen, dass sie die AMTS-Prüfungen korrekt implementiert.

> [!frist-warnung] Frist-Warnung: AMTS-Prüfpflicht und eMP-Befüllung in der Apotheke
> **Rechtsgrundlage:** § 17 Abs. 1 ApBetrO (Beratungs- und Prüfpflicht bei der Arzneimittelabgabe); § 22 ApBetrO (Dokumentationspflicht); § 334 Abs. 1 Nr. 4 SGB V (Elektronischer Medikationsplan in der ePA)
> **Frist:** Seit dem 1. Oktober 2025 sind Apotheken verpflichtet, die ePA zu befüllen, einschließlich des Elektronischen Medikationsplans (eMP). AVS müssen ein zertifiziertes ePA-Modul vorhalten. Die AMTS-Prüfung auf Basis der ePA-Medikationshistorie ist damit zur regulatorischen Pflicht geworden.
> **Handlungsbedarf:** Apotheken müssen sicherstellen, dass ihr AVS die Interaktionsprüfung gegen den eMP aus der ePA durchführt, sofern eine ePA des Patienten vorhanden ist. Entscheidungen bei klinisch relevanten Warnungen müssen dokumentiert sein (§ 22 ApBetrO); die Dokumentation ist mindestens fünf Jahre aufzubewahren. AVS ohne zertifiziertes ePA-Modul unterliegen einer Kürzung der TI-Pauschale.
> **Bei Nichtbeachtung:** Verstöße gegen die Abgabe- und Prüfpflichten können als Ordnungswidrigkeit geahndet werden. Bei einem nachweisbar vermeidbaren Arzneimittelschaden infolge unterlassener Interaktionsprüfung besteht zivilrechtliches Haftungsrisiko.

> [!patientenrecht] Patientenrecht: Beratung bei Wechselwirkungen
> Jede Apotheke ist gesetzlich verpflichtet, Ihre Medikamente auf Wechselwirkungen zu prüfen.
>
> **Was bedeutet das für mich?**
> - Sie haben das Recht auf eine Beratung zu allen Ihren Medikamenten
> - Die Apotheke muss Sie warnen, wenn ein neues Mittel gefährlich mit einem alten zusammenwirkt
>
> **Was kann ich tun?**
> 1. Bringen Sie beim Arzt und in der Apotheke eine Liste aller Medikamente mit, die Sie nehmen
> 2. Nennen Sie auch rezeptfreie Mittel und Nahrungsergänzungsmittel
> 3. Fragen Sie die Apotheke aktiv: "Gibt es Wechselwirkungen mit meinen anderen Mitteln?"
>
> Wenn Sie mehrere Ärzte haben, fragt manchmal keiner nach den Medikamenten der anderen. Die Apotheke ist oft der einzige Ort, wo alle Ihre Mittel zusammenkommen.

## Technische Details

### Datenbasis: ABDA-Datenbank

Die wichtigste Datenbasis für die Interaktionsprüfung in Deutschland ist die **[[ABDA-Datenbank]]** (auch: ABDATA Pharma-Daten-Service). Sie enthält für alle in Deutschland zugelassenen Arzneimittel:

- Wirkstoffinformationen und ATC-Klassifikation ([[ATC-Code]])
- Interaktionspaare mit Schweregrad-Einstufung
- Maßnahmenempfehlungen
- Kontraindikationen und Risikofaktoren

Die ABDA-Datenbank wird lizenzpflichtig an AVS- und PVS-Hersteller geliefert und regelmäßig aktualisiert. Daneben existieren alternative Datenbanken wie der [[MMI-Pharmindex]] (Medi-Span/MMI GmbH).

### Schweregrad-Klassifikation

Die ABDA-Datenbank verwendet eine **sechsstufige Klassifikation** für Arzneimittelinteraktionen:

| Klasse | Bedeutung |
|---|---|
| Kontraindiziert | Kombination ist absolut zu vermeiden |
| Schwerwiegend | Erhebliches Risiko, Kombination nur mit engem Monitoring |
| Mittelschwer | Therapeutisch relevante Folgen möglich, Überwachung empfohlen |
| Gering | Klinische Relevanz begrenzt, Aufmerksamkeit angebracht |
| Minimal | Sehr geringe klinische Relevanz |
| Keine bekannte Interaktion | Keine Daten für eine Wechselwirkung vorhanden |

Jede Interaktionsmeldung enthält neben der Schweregrad-Klasse auch eine Empfehlung, ob und wie die Kombination gehandhabt werden sollte (z.B. Dosisanpassung, zeitlicher Abstand, ärztliche Rücksprache).

### Ablauf im AVS

Eine typische Interaktionsprüfung in einem AVS läuft so ab:

1. Apotheker scannt den Barcode des Arzneimittels ([[DataMatrix]]-Code auf dem E-Rezept oder [[PZN]] auf der Verpackung)
2. AVS ruft die bekannte Medikation des Patienten ab (aus der lokalen Kundendatei oder dem [[eMP]])
3. AVS gleicht alle Wirkstoffe gegen die ABDA-Datenbank ab
4. Bei Interaktionen über einem konfigurierten Schwellenwert erscheint eine Warnung
5. Der Apotheker entscheidet über die weiteren Maßnahmen und dokumentiert seine Entscheidung

> [!interesse-technik]
> Die technische Schnittstelle für AMTS-Prüfungen im AVS basiert auf der ABDA-Datenbank-Schnittstelle (proprietäres Format, geliefert als lokale Datenbank oder API). Mit dem [[eMP]] und der ePA werden künftig FHIR-basierte Schnittstellen relevant: Der Elektronische Medikationsplan nach KBV-FHIR-Profil (MIO eMP) enthält alle Wirkstoffe in standardisierter Form und ermöglicht eine einrichtungsübergreifende Interaktionsprüfung. Das AMTS-Modul der ABDA-Datenbank berücksichtigt neben Wirkstoff-Wirkstoff-Interaktionen auch den Applikationsweg, individuelle Patientenmerkmale (z.B. Niereninsuffizienz) und Kontraindikationen.

> [!klinik-integration] Klinik-Integration: AMTS im Krankenhaus-Workflow
> Im stationären Betrieb unterscheidet sich die Interaktionsprüfung grundlegend vom ambulanten AVS-Modell.
>
> **KIS und Stationsapotheke:** Die meisten [[KIS]]-Systeme (SAP ISH, Orbis, Dedalus, iMedOne) binden ein AMTS-Modul ein oder übergeben die Medikationsliste über eine Schnittstelle an das Apothekensystem. Die Schnittstelle zwischen KIS und Krankenhausapotheke nutzt typischerweise HL7 v2.x-Nachrichten (RDE^O11 für Medikationsanforderungen, RDS^O13 für Dispensierantworten). Der vollständige Medikationsplan des Patienten muss übergeben werden, nicht nur das einzelne angeforderte Präparat.
> **FHIR MedicationRequest (ISiK):** Im Rahmen von [[ISiK]] ist die `MedicationRequest`-Ressource (FHIR R4) der verpflichtende Standard für Medikationsanforderungen aus dem KIS. AMTS-Module mit ISiK-konformer Schnittstelle erhalten damit strukturierte Wirkstoffinformationen inklusive [[ATC-Code]] und können einrichtungsübergreifende Prüfungen durchführen. Prüfen Sie bei Ihrem KIS-Hersteller, ob ISiK-Stufe 2 (Medikation) bereits zertifiziert ist.
> **Notaufnahme:** Bei unbekannter Vormedikation ist die Prüfung eingeschränkt. Die [[ePA]] (ab Oktober 2025 verpflichtend befüllt) und der [[eMP]] verbessern hier die Datenbasis erheblich, setzen aber TI-Anbindung und KIS-Integration voraus.

### Abgrenzung zu anderen AMTS-Prüfungen

Die Interaktionsprüfung ist eine von mehreren AMTS-Prüfungen, die AVS und PVS durchführen:

- **Interaktionsprüfung**: Wechselwirkungen zwischen Arzneimitteln
- **Kontraindikationsprüfung**: Unverträglichkeit mit Erkrankungen des Patienten
- **Doppelverordnungsprüfung**: Selbe Wirkstoffklasse mehrfach verordnet
- **Dosierungsprüfung**: Dosis außerhalb des therapeutischen Bereichs
- **Allergieprüfung**: Bekannte Allergien des Patienten

> [!praxis-tipp] Praxis-Tipp: Interaktionswarnung richtig handhaben
> In Ihrer Apotheke oder Praxis erscheint eine Warnung im AVS/PVS? So gehen Sie vor:
>
> 1. **Schweregrad prüfen**: Nur Klassen "Kontraindiziert" und "Schwerwiegend" erfordern sofortiges Handeln.
> 2. **Rücksprache halten**: Bei schwerwiegenden Interaktionen: Arzt anrufen, bevor Sie abgeben.
> 3. **Entscheidung dokumentieren**: Warum Sie trotz Warnung abgegeben haben (oder nicht), im AVS vermerken.
> 4. **Patienten informieren**: Erklären Sie kurz, worauf der Patient achten soll.
>
> Häufiger Fehler: Alle Warnungen werden weggeklickt, ohne sie zu lesen. Schulen Sie Ihr Team: Nicht jede Warnung ist gleich dringend, aber jede muss bewusst quittiert werden.

> [!interesse-compliance]
> Apothekensoftware muss die AMTS-Funktionalität für die Zulassung nachweisen. Die [[ABDA-Datenbank]] ist de facto Standard für die Interaktionsprüfung in deutschen Apotheken. Mit der verpflichtenden Einführung des [[eMP]] in der [[ePA]] (ab 2025) werden AMTS-Prüfungen auf Basis einer vollständigen Medikationshistorie aus der ePA zur regulatorischen Anforderung.

> [!dev-quickstart] Dev Quickstart: FHIR MedicationStatement für AMTS-Prüfung
> Medikationsliste aus der ePA als FHIR-Bundle abfragen (ePA-Medication-Service):
> ```bash
> GET https://epa-hcpo.example.ti-dienste.de/epa/medication/api/v1/fhir/MedicationStatement
> Authorization: Bearer <IDP-Access-Token>
> x-insurantid: Z123456789
> Content-Type: application/fhir+json
> ```
> Relevante FHIR-Ressourcen für AMTS im eMP-Kontext:
> - `MedicationStatement`: aktuelle Medikation des Patienten
> - `MedicationRequest`: Verordnung mit ATC-Code (`medicationCodeableConcept.coding` system: `http://fhir.de/CodeSystem/bfarm/atc`)
> - `Medication`: Arzneimittel mit PZN (`code.coding` system: `http://fhir.de/CodeSystem/ifa/pzn`)
>
> FHIR-Profile (KBV/ePA): [gematik/ePA-Medication](https://github.com/gematik/ePA-Medication)
> eRezept-Referenzvalidator (inkl. ABDA-Profile): [DAV-ABDA/eRezept-Referenzvalidator](https://github.com/DAV-ABDA/eRezept-Referenzvalidator)
> Simplifier: [simplifier.net/epa-medication](https://simplifier.net/epa-medication)

## Verknüpfungen

- [[AMTS]] (Arzneimitteltherapiesicherheit: übergreifendes Konzept, dessen Teil die Interaktionsprüfung ist)
- [[ABDA-Datenbank]] (zentrale Datenbasis für Interaktionsprüfungen in Deutschland)
- [[AVS]] (Apothekenverwaltungssystem: führt die Interaktionsprüfung bei der Abgabe durch)
- [[eMP]] (Elektronischer Medikationsplan: künftige Datenbasis für einrichtungsübergreifende Prüfung)
- [[ePA]] (enthält zukünftig die vollständige Medikationshistorie für AMTS-Prüfungen)
- [[ATC-Code]] (Klassifikation der Wirkstoffe, Grundlage der Datenbankabfrage)
- [[PZN]] (Pharmazentralnummer: identifiziert das konkrete Arzneimittelprodukt)
- [[E-Rezept]] (löst die Interaktionsprüfung beim Einlösen aus)
- [[FHIR]] (Standard für eMP und ePA-basierte AMTS-Prüfungen)

## Quellen

- [ABDATA: AMTS-Modul der ABDA-Datenbank](https://abdata.de/produkte/abdadatenbank2/amts-modul/)
- [Pharmazeutische Zeitung: Neue Klassifikation der Interaktionen](https://www.pharmazeutische-zeitung.de/neue-klassifikation-der-interaktionen-116172/)
- [ABDA: Kommentar zur Leitlinie Medikationsanalyse](https://www.abda.de/fileadmin/user_upload/assets/Praktische_Hilfen/Leitlinien/Medikationsanalyse/LL_MedAnalyse_Kommentar.pdf)
