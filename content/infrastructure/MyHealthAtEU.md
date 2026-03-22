---
title: MyHealth@EU
audience: [technical, non-technical]
tags: [infrastruktur, eu, interoperabilitaet, grenzueberschreitend, ehealth]
aliases: [MyHealth@EU, eHDSI, eHealth Digital Service Infrastructure, EU-eHealth-Infrastruktur]
maturity: wachsend
---

# MyHealth@EU

**MyHealth@EU** (früher eHealth Digital Service Infrastructure, eHDSI) ist die europäische eHealth-Infrastruktur für den grenzüberschreitenden Austausch von Gesundheitsdaten zwischen EU-Mitgliedstaaten.

## Erklärt für Einsteiger

Wenn du im Urlaub in Spanien krank wirst und ins Krankenhaus musst, sprechen die dortigen Computersysteme normalerweise eine andere Sprache als dein Arzt in Deutschland. MyHealth@EU ist das Netz, das diese Systeme verbindet. Es übersetzt zwischen den verschiedenen nationalen Gesundheitssystemen, damit ein spanischer Arzt deine deutschen Gesundheitsdaten abrufen kann. Dazu muss dein Land Mitglied sein und einen nationalen Zugangspunkt betreiben. Deutschland wird voraussichtlich ab H1/2027 mitmachen.

## Überblick

MyHealth@EU wurde von der Europäischen Kommission im Rahmen des Programms für digitale Gesundheit in Europa aufgebaut. Die Infrastruktur wird von der **Europäischen Kommission (DG SANTE)** betrieben. Die operative Steuerung liegt beim **eHealth Network** und seinem Operational Management Board unter der Federführung von DG SANTE (Generaldirektion Gesundheit und Lebensmittelsicherheit) und HaDEA (Europäische Gesundheits- und Digitalagentur). Die Infrastruktur vernetzt die nationalen Kontaktpunkte ([[NCPeH]]) der Mitgliedstaaten über ein zentrales Gateway.

Derzeit unterstützt MyHealth@EU zwei Dienste:

1. **ePrescription / eDispensation**: Elektronische Rezepte, die in anderen EU-Ländern eingelöst werden können.
2. **[[Patient-Summary|Patient Summary]]**: Zusammenfassung der wichtigsten Gesundheitsdaten eines Patienten (aktuelle Diagnosen, Dauermedikation, Allergien, Impfungen).

In einer zweiten Ausbaustufe (Wave 2) sollen weitere Dienste hinzukommen: Laborbefunde, Entlassungsbriefe, medizinische Bildgebung ([[DICOM]]) und Notfallausweise.

### Mitgliedstaaten und Rollout

MyHealth@EU wächst schrittweise. Der Beitritt erfolgt in sogenannten **Waves** (Wellen). Pioniere wie Finnland, Estland und Tschechien sind seit mehreren Jahren aktiv. Österreich nahm im **Februar 2026** den grenzüberschreitenden Empfang von EU-E-Rezepten (aus Tschechien) auf.

**Deutschland** plant die Teilnahme ab **Wave 10 (H1/2027)**. Der deutsche [[NCPeH]], betrieben von der [[DVKA]] (Deutsche Verbindungsstelle Krankenversicherung Ausland), wird dabei als nationaler Zugangspunkt dienen. Die [[gematik]] ist für die Spezifikation des NCPeH zuständig.

### Rechtlicher Rahmen: EHDS

Mit dem Inkrafttreten des [[EHDS|European Health Data Space (EHDS, EU 2025/327)]] im März 2025 wurde MyHealth@EU auf eine neue gesetzliche Grundlage gestellt. Der EHDS verpflichtet alle Mitgliedstaaten zur Teilnahme. Die Pflicht zum tatsächlichen grenzüberschreitenden Datenaustausch gilt ab **März 2029** (vier Jahre nach Inkrafttreten). Die vollständige Teilnahme aller Mitgliedstaaten wird bis **März 2031** erwartet.

## Technische Details

### Architektur

MyHealth@EU basiert auf einer Stern-Topologie: Jeder Mitgliedstaat betreibt einen nationalen Kontaktpunkt ([[NCPeH]]), der mit dem zentralen EU-Gateway verbunden ist. Der Datenaustausch läuft nicht direkt zwischen den Mitgliedstaaten, sondern immer über das zentrale Gateway.

```
[DE: NCPeH] ─── [Zentrales EU-Gateway] ─── [ES: NCPeH]
[AT: NCPeH] ───────────────────────────────
[CZ: NCPeH] ───────────────────────────────
```

### Datenformate und Standards

MyHealth@EU verwendet folgende Standards:

- **[[FHIR]]** R4 für den Patient Summary und die neuen ePrescription-Dienste (ab Wave 2)
- **[[HL7]] CDA R2** (Clinical Document Architecture) für ältere Dienste der ersten Welle
- **[[IHE]]**-Profile: IHE XCA (Cross-Community Access) für den Datenabruf, IHE XCPD (Cross-Community Patient Discovery) für die Patientenidentifikation
- **Terminologien**: [[SNOMED CT]], [[LOINC]], ICD-10

### Identitätsabgleich

Eine der technischen Herausforderungen ist die Patientenidentifikation über Ländergrenzen hinweg. Jedes Land hat andere Patientenidentifikatoren ([[KVNR|Krankenversichertennummer]] in Deutschland, OID-basierte Nummern anderswo). MyHealth@EU nutzt den **Master Patient Index**-Ansatz über IHE XCPD: Der NCPeH des behandelnden Landes sendet demografische Daten (Name, Geburtsdatum) an den NCPeH des Heimatlandes. Der Heimat-NCPeH liefert dann den zugehörigen Datensatz zurück.

### Sicherheit und Datenschutz

Die Übertragung erfolgt verschlüsselt über TLS. Alle Mitgliedstaaten müssen die [[DSGVO]] einhalten. Für Gesundheitsdaten als besondere Kategorie nach Art. 9 DSGVO gelten zusätzliche Schutzmaßnahmen. Versicherte haben das Recht, den grenzüberschreitenden Datenaustausch zu widersprechen (Opt-out), sofern das nationale Recht dies vorsieht.

### Verbindung zur deutschen TI

In Deutschland werden die Daten für den MyHealth@EU-Export aus der [[ePA]] des Versicherten entnommen. Die [[ePA]] ist die primäre Datenquelle für den Patient Summary und künftige Dienste. Das [[E-Rezept]] ist der erste Dienst, der ab Wave 10 grenzüberschreitend einlösbar sein soll.

## Verknüpfungen

- [[NCPeH]] (nationaler Zugangspunkt Deutschlands zu MyHealth@EU)
- [[EHDS]] (gesetzlicher Rahmen, der MyHealth@EU verpflichtend macht)
- [[ePA]] (Datenquelle für den deutschen Beitrag zu MyHealth@EU)
- [[E-Rezept]] (erster Dienst für den grenzüberschreitenden Austausch)
- [[FHIR]] (technisches Datenformat für neue MyHealth@EU-Dienste)
- [[IHE]] (Interoperabilitätsprofile für den Datenabruf)
- [[gematik]] (zuständig für NCPeH-Spezifikation)
- [[DSGVO]] (Datenschutzrahmen für den grenzüberschreitenden Austausch)

## Quellen

- [Europäische Kommission: MyHealth@EU](https://health.ec.europa.eu/ehealth-digital-health-and-care/myhealth-eu_en)
- [gematik: Grenzüberschreitende Nutzung (NCPeH)](https://www.gematik.de/anwendungen/ncpeh)
- [Verordnung (EU) 2025/327 (EHDS) – EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32025R0327)
- [Wikipedia: eHealth Digital Service Infrastructure](https://de.wikipedia.org/wiki/eHealth_Digital_Service_Infrastructure)
