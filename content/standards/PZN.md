---
title: PZN
audience: [technical, non-technical]
tags: [standard, pzn, arzneimittel, identifikator]
aliases: [Pharmazentralnummer]
relevance:
  sectors: [apotheke, arztpraxis, krankenhaus, hersteller, it-dienstleister, kasse]
  interests: [technik, compliance]
maturity: wachsend
---

# PZN

Die **Pharmazentralnummer (PZN)** ist eine achtstellige Ziffernfolge, die jedes in Deutschland zugelassene Arzneimittel eindeutig identifiziert.

## Erklärt für Einsteiger

Jede Packung eines Medikaments in der Apotheke hat einen Barcode. Der Code dahinter ist die PZN. Sie sagt der Apotheke genau, welches Medikament, welche Stärke und welche Packungsgröße gemeint ist. Wenn der Arzt ein [[E-Rezept]] ausstellt, steht darin die PZN, und die Apotheke weiß sofort, was sie aushändigen soll.

## Überblick

Die PZN wird von der **IFA GmbH** (Informationsstelle für Arzneispezialitäten GmbH) vergeben, einer gemeinsamen Einrichtung von [[ABDA]], dem Bundesverband der Pharmazeutischen Industrie (BPI) und dem Pharmagroßhandel (PHAGRO). Hersteller und Importeure beantragen die PZN für jedes neue Produkt vor der Markteinführung.

Jede PZN bezieht sich auf genau eine Artikel-Einheit: Ein Medikament mit zwei Packungsgrößen (50 Tabletten und 100 Tabletten) hat zwei verschiedene PZNs. Gleiches gilt für unterschiedliche Stärken oder Darreichungsformen.

Die PZN ist in Deutschland der zentrale Identifikator im Apothekenbereich. Sie erscheint auf der Verpackung als Barcode (Data Matrix oder Code 128), im Lieferschein, in der Abrechnung und in elektronischen Verordnungen.

> [!interesse-technik] PZN in FHIR und E-Rezept-Implementierungen
> Im [[E-Rezept]]-Ökosystem ist die PZN als CodeSystem `http://fhir.de/CodeSystem/ifa/pzn` in [[FHIR]] R4 standardisiert. Die IFA GmbH stellt über die ABDATA-Schnittstellen tagesaktuelle PZN-Stammdaten bereit. Für die Abrechnung nach [[TA1]] (§ 300 [[SGB-V]]) ist die PZN Pflichtfeld. Beim AMTS-Check im PVS wird die PZN genutzt, um den Wirkstoff in der [[ABDA-Datenbank]] oder im [[MMI-Pharmindex]] zu identifizieren. Achtung: PZNs werden nach Produktänderungen (neue Packungsgröße, Hersteller) neu vergeben. Systeme müssen mit veralteten PZNs umgehen können.

> [!interesse-compliance] PZN-Pflicht auf dem E-Rezept
> Das [[E-Rezept]]-FHIR-Profil der [[KBV]] schreibt die PZN als Pflichtfeld für verschreibungspflichtige Arzneimittel vor. Ärzte dürfen auf dem E-Rezept nicht nur einen Wirkstoff ohne PZN angeben, wenn ein konkretes Fertigarzneimittel gemeint ist. Ausnahmen gelten für Rezepturen und Wirkstoffverordnungen. Apotheken, die ein E-Rezept einlösen, müssen die dispensierte PZN an das Apothekenrechenzentrum übertragen, das die Abrechnung mit der [[GKV]] durchführt.

## Technische Details

### Format und Aufbau

Die PZN besteht aus acht Stellen (bis 2012 waren es sieben Stellen):

- Sieben Informationsstellen (Nutzerdaten)
- Eine Prüfziffer (letzte Stelle, nach Modulo-11-Verfahren berechnet)

Die PZN wird in der Regel mit dem Präfix "PZN" oder "PZN-" geschrieben, gefolgt von der achtstelligen Zahl (z.B. PZN-12345678).

> [!frist-warnung] Frist-Warnung: PZN-Pflicht im E-Rezept und Abrechnungsformat TA1
> **Rechtsgrundlage:** § 360 Abs. 2 SGB V (E-Rezept-Pflicht für Vertragsärzte ab 1. Januar 2024) i.V.m. § 300 Abs. 1 SGB V (Arzneimittelabrechnungsvereinbarung) und dem KBV-FHIR-Profil (KBV_PR_ERP_Medication_PZN)
> **Pflicht:** Seit dem 1. Januar 2024 sind Vertragsärzte verpflichtet, verschreibungspflichtige Arzneimittel ausschließlich als E-Rezept auszustellen. Im E-Rezept-FHIR-Profil ist die PZN Pflichtfeld für Fertigarzneimittel (CodeSystem `http://fhir.de/CodeSystem/ifa/pzn`). Apotheken übertragen beim Einlösen die dispensierte PZN im Abrechnungsformat TA1 nach § 300 SGB V an die Apothekenrechenzentren. Fehlt die PZN oder ist sie fehlerhaft, wird die Abrechnung zurückgewiesen.
> **Handlungsbedarf:** PVS-Hersteller stellen sicher, dass die PZN-Daten tagesaktuell aus einer zugelassenen Arzneimitteldatenbank (IFA-Stammdaten) bezogen werden. Veraltete PZNs nach Produktänderungen (neue Packungsgröße, Herstellerwechsel) müssen erkannt und abgelehnt werden.

### PZN im E-Rezept (FHIR MedicationRequest)

Im [[E-Rezept]] wird die PZN als Pflichtfeld im [[FHIR]] MedicationRequest-Profil der [[KBV]] codiert. Das Profil schreibt vor:

```json
{
  "resourceType": "Medication",
  "code": {
    "coding": [
      {
        "system": "http://fhir.de/CodeSystem/ifa/pzn",
        "code": "12345678"
      }
    ]
  }
}
```

Das CodeSystem `http://fhir.de/CodeSystem/ifa/pzn` ist das offizielle FHIR-Codesystem für PZNs in Deutschland. Es wird von HL7 Deutschland und [[KBV]] gepflegt.

> [!dev-quickstart] Dev Quickstart: PZN im FHIR-Kontext validieren und abfragen
> ```bash
> # E-Rezept-Fachdienst: Task per E-Rezept-ID abrufen (erfordert eGK-Token oder SMC-B-Token)
> curl -X GET "https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<Task-ID>" \
>   -H "Authorization: Bearer <ACCESS_TOKEN>" \
>   -H "Accept: application/fhir+json"
>
> # FHIR-Medication nach PZN suchen (auf FHIR-Server)
> curl -X GET "https://fhir.example.de/Medication?code=http://fhir.de/CodeSystem/ifa/pzn|12345678" \
>   -H "Accept: application/fhir+json"
>
> # PZN-Prüfziffer berechnen (Modulo-11, Python)
> # digits = [int(c) for c in "1234567"]
> # check = 11 - sum(d * (i+1) for i, d in enumerate(digits)) % 11
> # Ergebnis 10 → PZN ungültig, 11 → Prüfziffer = 0
> ```
> - FHIR CodeSystem: `http://fhir.de/CodeSystem/ifa/pzn`
> - KBV-Profil für Medication (E-Rezept): [simplifier.net/erezept](https://simplifier.net/erezept)
> - E-Rezept-API-Doku: [gematik/api-erp](https://github.com/gematik/api-erp)
> - PZN-Stammdaten (tagesaktuell, lizenzpflichtig): IFA GmbH über ABDATA-Schnittstelle

### Abrechnung in der Apotheke

Apotheken übertragen beim Einlösen eines [[E-Rezept]]s die PZN an die Apothekenrechenzentren, die die Abrechnung mit der [[GKV]] durchführen. Das Abrechnungsformat ([[TA1]] nach § 300 [[SGB-V]]) enthält die PZN als Pflichtelement.

Im [[AVS|Apothekenverwaltungssystem (AVS)]] ist die PZN der primäre Schlüssel für den Warenbestand. Die PZN ermöglicht den automatischen Abgleich zwischen verordnetem und dispensiertem Arzneimittel.

> [!praxis-tipp] Praxis-Tipp: Häufige PZN-Fehler beim E-Rezept vermeiden
> Wenn eine Apotheke ein E-Rezept zurückgibt oder eine Rückfrage kommt, liegt es oft an PZN-Problemen. Häufige Ursachen:
> - Mengenangabe und PZN stimmen nicht überein: Prüfen Sie, ob Ihr PVS beides konsistent ausfüllt. Die Mengenangabe muss zum Packungsinhalt der PZN passen.
> - Veraltete PZN: Wenn ein Medikament vom Hersteller geändert (neue Packungsgröße, Wirkstärke) oder vom Markt genommen wurde, ändert sich die PZN. Ihr PVS muss aktuelle Stammdaten verwenden.
> - PZN und Medikamentenname passen nicht zusammen: Das Apothekensystem prüft den Abgleich automatisch. Stimmt die PZN mit dem Handelsnamen im PVS nicht überein, lehnt die Apotheke das Rezept ab.
>
> Was tun? Bei einer Rückfrage wegen einer falschen PZN genügt meist ein neues E-Rezept mit der korrekten PZN aus Ihrem PVS.

### AMTS und PZN

In der [[AMTS|Arzneimitteltherapiesicherheit]] wird die PZN verwendet, um Wechselwirkungen und Kontraindikationen zu prüfen. Datenbanken wie die [[ABDA-Datenbank]] und die Interaktionsdatenbank ABDA ordnen PZNs ihren Wirkstoffen zu, um eine pharmakologische Analyse zu ermöglichen.

> [!klinik-integration] Klinik-Integration: PZN im Krankenhaus-Medikationsprozess
> **Workflow-Bezug:** Im Krankenhaus dient die PZN als Verbindungsglied zwischen KIS-Verordnung, Krankenhausapotheke und Stationsversorgung. Typischer Ablauf: Arzt verordnet im KIS ein Medikament per PZN, die Verordnung wird an die Apothekensoftware übermittelt, die Apotheke prüft Lagerbestand und gibt das Arzneimittel für die Station frei. Ohne PZN-basierte Stammdaten im KIS ist ein fehlerfreier, automatisierter Medikationsprozess nicht möglich.
>
> **KIS-Kontext:** KIS-Systeme (Orbis/Dedalus, iMedOne, SAP ISH) halten in der Regel ein internes Klinikarzneimittelverzeichnis, das PZNs als Schlüssel nutzt. Dieses Verzeichnis muss regelmäßig mit aktuellen Stammdaten (IFA/ABDATA) abgeglichen werden: PZNs werden bei Sortimentswechseln, Hersteller-Insolvenzen oder Marktauslistungen geändert. Veraltete PZNs im KIS führen zu Beschaffungsfehlern und Medikationsfehlern.
>
> **Besonderheit Klinikversorgung:** Krankenhausapotheken beschaffen häufig Großpackungen und stellen patientenindividuelle Einheiten her (Rezepturen, Zytostatika). Diese internen Artikel haben keine PZN, sondern klinikinterne Artikelnummern. Das KIS muss beide Identifikatortypen sauber trennen und für die Abrechnung nach § 301 SGB V die korrekte PZN der Originalverpackung zuordnen können.

### Abgrenzung: PZN vs. andere Identifikatoren

| Identifikator | Beschreibung |
|---|---|
| PZN | Deutsches Produkt-ID-System für Arzneimittel |
| [[ATC-Code]] | WHO-Klassifikation nach Wirkstoff und Indikation |
| EAN/GTIN | Internationaler Barcode-Standard (kann PZN enthalten) |
| Zulassungsnummer | Behördliche Zulassung durch [[BfArM]] oder EMA |

## Verknüpfungen

- [[E-Rezept]] (enthält PZN als Pflichtfeld in der FHIR-MedicationRequest-Ressource)
- [[FHIR]] (Datenformat für E-Rezepte; PZN ist als FHIR-CodeSystem definiert)
- [[AVS]] (Apothekenverwaltungssystem, das PZN als Warenbestandsschlüssel nutzt)
- [[AMTS]] (Arzneimitteltherapiesicherheit; PZN-basierte Wirkstoffanalyse)
- [[BfArM]] (Bundesinstitut für Arzneimittel und Medizinprodukte; koordiniert Arzneimittelidentifikatoren)
- [[KBV]] (definiert FHIR-Profile für E-Rezepte mit PZN)
- [[GKV]] (Abrechnungsgrundlage für Apotheken; PZN im TA1-Format)

## Quellen

- [IFA GmbH: Über die IFA GmbH](https://www.ifaffm.de/de/ifa-gmbh.html)
- [KBV FHIR-Profile für das E-Rezept](https://simplifier.net/evdga)
- [Wikipedia: Pharmazentralnummer](https://de.wikipedia.org/wiki/Pharmazentralnummer)
