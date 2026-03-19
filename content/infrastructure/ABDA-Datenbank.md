---
title: ABDA-Datenbank
audience: [technical, non-technical]
tags: [infrastructure, arzneimittel, apotheke, avs, amts, abdata]
aliases: [ABDADatenbank², ABDATA-Datenbank, Arzneimitteldatenbank ABDATA]
relevance:
  sectors: [apotheke, krankenhaus, arztpraxis, hersteller, it-dienstleister, kasse]
  interests: [technik, compliance, business]
maturity: wachsend
---

# ABDA-Datenbank

Die **ABDA-Datenbank** ist die zentrale Arzneimittelinformationsdatenbank der ABDATA Pharma-Daten-Service GmbH, die Stammdaten, Interaktionen, Preise und AMTS-Informationen zu allen in Deutschland erhältlichen Arzneimitteln enthält und in allen Apothekenverwaltungssystemen integriert ist.

## Erklärt für Einsteiger

Wenn du ein Rezept in der Apotheke abgibst und der Computer sofort sagt, ob sich das neue Medikament mit deinen bisherigen verträgt und was es kostet, dann steckt dahinter die ABDA-Datenbank. Sie enthält Informationen zu Hunderttausenden von Medikamenten: Wirkstoff, Preis, Packungsgröße, Wechselwirkungen mit anderen Medikamenten und vieles mehr. Kein Apothekenprogramm müsste diese Daten selbst sammeln, alle nutzen dieselbe zentrale Datenbank.

## Überblick

Die ABDATA Pharma-Daten-Service GmbH ist eine Tochtergesellschaft der [[ABDA]] (Bundesvereinigung Deutscher Apothekerverbände). Sie wurde gegründet, um eine einheitliche, qualitätsgesicherte Arzneimittelinformationsbasis für alle deutschen Apotheken bereitzustellen.

Die ABDA-Datenbank ist faktisch eine Pflichtkomponente jedes zugelassenen [[AVS]] (Apothekenverwaltungssystems). Alle relevanten Apothekensoftware-Hersteller in Deutschland integrieren sie über eine standardisierte Schnittstelle. Damit haben alle rund 18.000 öffentlichen Apotheken in Deutschland Zugang zu denselben Arzneimittelinformationen.

### Fünf Module

Die aktuelle Version, **ABDADatenbank²**, ist modular aufgebaut:

1. **Artikelstamm**: Grunddaten zu jedem verkäuflichen Arzneimittel und apothekenrelevanten Produkt. Enthält [[PZN]], Handelsname, Hersteller, Packungsgröße, Darreichungsform, Zulassungsstatus, Verkehrsfähigkeit und Apothekenverkaufspreis (AVP).
2. **Wirkstoffe und Zubereitungen**: Pharmakologische Daten zu Wirkstoffen, Stärken, Kombinationspräparaten.
3. **Interaktionen (AMTS-Modul)**: Arzneimittelinteraktionen nach klinischer Relevanz bewertet; Warnhinweise mit Handlungsempfehlungen. Grundlage für [[AMTS]]-Prüfungen im [[AVS]].
4. **Indikationen und Kontraindikationen**: Anwendungsgebiete, Gegenanzeigen, Schwangerschafts- und Stillzeitkategorien.
5. **Texte und Fachinformationen**: Strukturierte Texte aus Fach- und Gebrauchsinformationen.

### Aktualisierungsrhythmus

Die ABDA-Datenbank wird **alle 14 Tage** regulär aktualisiert. Bei sicherheitsrelevanten Informationen (z.B. Rückrufe, neue Kontraindikationen) können außerordentliche Updates mehrmals täglich veröffentlicht werden. Das [[AVS]] lädt die Updates automatisch.

> [!praxis-tipp] Praxis-Tipp: Updates nicht ignorieren
> Ihr AVS meldet ein ABDA-Datenbank-Update? Spielen Sie es zeitnah ein. Gründe:
> - Bei Arzneimittelrückrufen erscheinen außerordentliche Updates täglich. Ein veralteter Datenstand bedeutet: Ihr System warnt nicht vor zurückgerufenen Packungen.
> - Neue Kontraindikationen und Interaktionen sind sofort nach dem Update aktiv.
>
> In Ihrer Apotheke bedeutet das: Konfigurieren Sie das automatische Update im AVS. Prüfen Sie den Datenstand einmal pro Woche unter Einstellungen. Aktueller Stand ist Voraussetzung für korrekte AMTS-Prüfungen und damit für Ihre Haftungssicherheit.

> [!interesse-business] Marktstellung
> Die ABDA-Datenbank hat in Deutschland faktisch eine Monopolstellung für Apothekensoftware. Alle zugelassenen AVS-Systeme integrieren sie. Für AVS-Hersteller ist die ABDATA-Lizenz ein wesentlicher Kostenfaktor. Alternativprodukte für den deutschen Markt (z.B. ifap, Lauer-Taxe für Preisinformationen) decken nur Teilbereiche ab. Für Hersteller anderer Gesundheitssoftware (PVS, KIS) ist der AMTS-Datensatz relevant für die Integration eigener Interaktionsprüfungen.

## Technische Details

### Datenformat und Schnittstellen

Die ABDA-Datenbank wird über verschiedene Formate und Schnittstellen bereitgestellt:

- **Binärformat**: Das proprietäre Format wird direkt in kompatible AVS-Systeme eingebettet. ABDATA liefert die Daten als Download-Paket.
- **API-Zugang**: Für Softwarepartner bietet ABDATA auch API-Schnittstellen zum Echtzeit-Abruf (z.B. für Online-Apotheken und Portale).
- **FHIR-Kompatibilität**: Für den [[E-Rezept]]-Kontext werden Teile der ABDA-Daten in FHIR-kompatible Ressourcentypen überführt. Die gematik schreibt für den E-Rezept-Dispensierdatensatz bestimmte Codierungen vor, die auf ABDA-Stammdaten basieren.

### Rolle bei der E-Rezept-Dispensierung

Wenn ein [[E-Rezept]] eingelöst wird, prüft das [[AVS]] anhand der ABDA-Datenbank:

- Ist das verordnete Arzneimittel in der verordneten Menge verkehrsfähig?
- Hat das Produkt die korrekte [[PZN]]?
- Gibt es Interaktionen mit anderen Medikamenten des Patienten (AMTS)?
- Was ist der korrekte Apothekenverkaufspreis (AVP) und Zuzahlungsbetrag?

Die Ergebnisse der AMTS-Prüfung können im [[eMP]] (elektronischer Medikationsplan) dokumentiert werden.

> [!praxis-tipp] Praxis-Tipp: AMTS-Warnungen richtig reagieren
> Ihr AVS zeigt beim E-Rezept-Einlösen eine AMTS-Warnung? So gehen Sie vor:
> 1. Warnhinweis lesen: Rot = klinisch relevant, Gelb = Hinweis zur Vorsicht.
> 2. Medikationsplan des Patienten prüfen (eMP, falls vorhanden).
> 3. Rücksprache mit verordnender Praxis über [[KIM]], wenn nötig.
> 4. Dokumentieren Sie Beratungsgespräch und Entscheidung im AVS.
>
> Häufiger Fehler: AMTS-Warnungen wegklicken ohne Prüfung. Das ist haftungsrechtlich problematisch. Die ABDA-Datenbank liefert zu jeder Interaktion eine konkrete Handlungsempfehlung, die Ihnen die Entscheidung erleichtert.

> [!interesse-technik] Entwickler-Referenz
> Die ABDATA-Schnittstelle ist nicht öffentlich dokumentiert. Zugang erhalten nur lizenzierte AVS- und Software-Partner nach Abschluss eines ABDATA-Lizenzvertrages. Für die [[E-Rezept]]-Dispensierung gibt die gematik vor, welche Felder aus dem ABDA-Artikelstamm in den FHIR-Dispensierdatensatz einfließen müssen (MedicationDispense-Ressource gemäß KBV-Profil). PZN-Daten (als CodeSystem) sind auch über den [[Terminologieserver]] des [[BfArM]] abrufbar.

> [!dev-quickstart] Dev Quickstart: ABDA-Daten im E-Rezept-Dispensierdatensatz
> Die ABDA-Schnittstelle selbst ist nicht öffentlich. Aber: Der FHIR-Dispensierdatensatz (DAV-Profil), der ABDA-Felder konsumiert, ist vollständig spezifiziert und validierbar.
>
> ```bash
> # DAV-Referenzvalidator herunterladen und Dispensierdatensatz prüfen
> # Repo: https://github.com/DAV-ABDA/eRezept-Referenzvalidator
> java -jar erezept-referenzvalidator.jar \
>   --profile DAV \
>   --input meine-abgabedaten.xml
>
> # PZN als FHIR CodeSystem vom BfArM-Terminologieserver abrufen
> curl -H "Accept: application/fhir+json" \
>   "https://terminologien.bfarm.de/fhir/CodeSystem/\$lookup?\
> system=http://fhir.de/CodeSystem/ifa/pzn&code=06312077"
> ```
>
> Pflichtfelder aus dem ABDA-Artikelstamm im `MedicationDispense` (FHIR R4):
> - `medication.code.coding.system` = `http://fhir.de/CodeSystem/ifa/pzn`
> - `medication.code.coding.code` = PZN (8-stellig)
> - `medication.batch.lotNumber` = Chargennummer (securPharm)
> - `medication.batch.expirationDate` = Verfallsdatum
> - `quantity.value` + `quantity.unit` = abgegebene Menge
>
> - FHIR-Profil: `DAV-PR-ERP-Abgabeinformationen` auf [Simplifier](https://simplifier.net/packages/de.abda.erezeptabgabedaten)
> - Beispieldateien: [github.com/DAV-ABDA/eRezept-Beispiele](https://github.com/DAV-ABDA/eRezept-Beispiele)
> - gematik E-Rezept API: [github.com/gematik/api-erp](https://github.com/gematik/api-erp)

### Lauer-Taxe und ABDA-Datenbank

Die **Lauer-Taxe** ist ein von der ABDATA herausgegebenes Preisverzeichnis für Arzneimittel und Sonderanfertigungen. Apotheken und Apothekenrechenzentren nutzen sie für die Preisermittlung. Es ist streng genommen ein separates Produkt, aber in der Praxis eng mit der ABDA-Datenbank verknüpft, da die Preisdaten im Artikelstamm enthalten sind.

### Verhältnis zur [[TA1]]-Abrechnung

Die [[TA1]]-Abrechnungsdaten, die Apotheken an [[Apothekenrechenzentrum|Apothekenrechenzentren]] übermitteln, enthalten PZN, Preis und Zuzahlung aus der ABDA-Datenbank. Die Rechenzentren prüfen bei Eingang der TA1-Datei u.a., ob der angegebene Preis dem aktuellen Lauertaxe-Preis entspricht.

## Verknüpfungen

- [[ABDA]] (Muttergesellschaft von ABDATA; Bundesvereinigung Deutscher Apothekerverbände)
- [[AVS]] (Apothekenverwaltungssystem; integriert die ABDA-Datenbank zwingend)
- [[AMTS]] (Arzneimitteltherapiesicherheit; AMTS-Prüfungen basieren auf ABDA-Interaktionsdaten)
- [[E-Rezept]] (Dispensiervorgang nutzt ABDA-Stammdaten und AMTS-Prüfung)
- [[PZN]] (Pharmazentralnummer; primärer Schlüssel im ABDA-Artikelstamm)
- [[eMP]] (elektronischer Medikationsplan; AMTS-Prüfergebnisse fließen ein)
- [[TA1]] (Apothekenabrechnung; Preisdaten kommen aus ABDA-Stammdaten)
- [[Apothekenrechenzentrum]] (prüft ABDA-Preise bei TA1-Eingang)
- [[BfArM]] (Behörde für Arzneimittelsicherheit; PZN-CodeSystem auf Terminologieserver)
- [[Terminologieserver]] (BfArM-Terminologieserver für PZN als FHIR CodeSystem)
- [[Securpharm]] (Fälschungsschutz; ABDA-Daten enthalten Packungsattribute für securPharm-Scan)
- [[ATC-Code]] (Klassifikation der Wirkstoffe; im ABDA-Artikelstamm enthalten)

## Quellen

- [ABDATA: ABDA-Datenbank – Produktseite](https://abdata.de/datenangebot/abda-datenbank/)
- [ABDATA: ABDADatenbank² – Modulübersicht](https://abdata.de/produkte/abdadatenbank2/)
- [ABDA: Wissensmanagement](https://www.abda.de/apotheke-in-deutschland/was-apotheken-leisten/persoenlich-beraten/wissensmanagement/)
- [Pharmazeutische Zeitung: Arzneimitteldaten für die Apotheke](https://www.pharmazeutische-zeitung.de/titel-24-1999/)
