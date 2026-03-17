---
title: AVS
audience: [technical, non-technical]
tags: [infrastruktur, apotheke, software, primärsystem]
aliases: [Apothekenverwaltungssystem, Apothekensoftware]
---

# AVS

Ein **AVS** (Apothekenverwaltungssystem) ist die primäre Verwaltungssoftware einer Apotheke, über die Medikamente verwaltet, Rezepte abgerechnet und alle Anbindungen an die [[Telematikinfrastruktur]] gesteuert werden.

## Erklärt für Einsteiger

Das AVS ist für die Apotheke, was das [[PVS]] für die Arztpraxis ist: das zentrale Programm, über das alles läuft. Die Apothekerin tippt das Medikament ein, das AVS prüft den Lagerbestand, berechnet den Preis, bucht die Abgabe und übermittelt die Daten an die Krankenkasse. Seit das E-Rezept eingeführt wurde, ist das AVS auch das Werkzeug, mit dem die Apotheke digitale Rezepte aus dem sicheren Gesundheitsnetz abruft und einlöst.

## Überblick

Das AVS ist das Kernstück jeder Apotheke. Es übernimmt die Warenwirtschaft, die Rezeptabrechnung gegenüber den Krankenkassen und Apothekenabrechnungszentren sowie die Dokumentation von Abgaben. Mit dem flächendeckenden Ausbau der [[Telematikinfrastruktur]] ist das AVS zum zentralen Zugangspunkt für TI-Anwendungen in der Apotheke geworden.

Apotheken waren nach dem [[DVG]] (2019) verpflichtet, sich bis spätestens 1. September 2020 an die [[Telematikinfrastruktur]] anzubinden. Seitdem ist das AVS mit dem [[Konnektoren|Konnektor]] oder dem [[TI-Gateway]] verbunden und kann TI-Dienste nutzen.

Die wichtigste TI-Anwendung für Apotheken ist das [[E-Rezept]]. Das AVS ruft digitale Verordnungen vom E-Rezept-[[Fachdienst]] ab, verarbeitet sie und übermittelt die Abgabedaten zurück. Daneben nutzt das AVS den Zugang zur [[ePA]] für den Medikationsplan-Abgleich und [[KIM]] für die sichere Kommunikation mit Arztpraxen.

Zertifizierungsbehörde für AVS-Software ist das ADAS (Apothekenrechenzentrum-Datenaustausch-Systemprüfstelle) über die [[ABDA]] (Bundesvereinigung Deutscher Apothekerverbände). Die [[gematik]] prüft seit 2024 zusätzlich die korrekte TI-Implementierung im Rahmen der Konformitätsbewertung.

## Technische Details

### TI-Anbindung

Das AVS kommuniziert mit dem [[Konnektoren|Konnektor]] oder dem [[TI-Gateway]] über SOAP-Webservices. Diese Schnittstelle entspricht der Schnittstellenspezifikation der [[gematik]] und ist mit der Schnittstelle des [[PVS]] vergleichbar. Über den Konnektor beziehungsweise das TI-Gateway steuert das AVS alle kryptografischen Operationen und den sicheren Datentransport.

### E-Rezept-Workflow

Der E-Rezept-Einlöseprozess im AVS läuft wie folgt ab:

1. Versicherter steckt [[eGK]] ein oder zeigt DataMatrix-Code auf dem Smartphone
2. AVS schickt Token-Anfrage über den Konnektor an den E-Rezept-[[Fachdienst]]
3. Fachdienst liefert das [[FHIR]]-Rezeptbündel (KBV-FHIR-Profile, MedicationRequest)
4. AVS prüft die [[QES]]-Signatur des Arztes
5. Apothekenpersonal wählt passendes Medikament aus (Substitution nach § 129 SGB V möglich)
6. AVS erstellt MedicationDispense-Ressource und übermittelt sie an den Fachdienst
7. Abrechnung gegenüber dem Apothekenrechenzentrum erfolgt auf Basis der abgerufenen Daten

### AMTS-Prüfung

Das AVS ist neben [[PVS]] und [[KIS]] eines der Primärsysteme, in denen die eigentliche AMTS-Interaktionsprüfung stattfindet. Das AVS integriert Arzneimitteldatenbanken (z.B. ABDA-Datenbank, MMI-Pharmindex), die bekannte Wechselwirkungen und Kontraindikationen enthalten. Seit der ePA-Integration kann das AVS außerdem den vollständigen Medikationsplan aus der [[ePA]] abrufen und für den Interaktionscheck nutzen, sofern der Versicherte den Zugriff erlaubt hat.

### ePA-Zugriff

Apotheker haben Zugriffsrechte auf die [[ePA]] ihrer Kunden für die Medikationsliste. Das AVS kommuniziert hierfür direkt mit dem ePA-[[Fachdienst]]. Der Zugriff ist an die Einwilligung des Patienten gebunden und wird in der ePA protokolliert.

### KIM-Integration

Über [[KIM]] können Apotheken sichere Nachrichten mit Arztpraxen, Krankenhäusern und Pflegeeinrichtungen austauschen. Das AVS integriert den KIM-Client, sodass Apothekenpersonal Rückfragen zu Verordnungen direkt aus der Software stellen kann.

### Schnittstellen und Datenformate

| Schnittstelle | Format | Verwendung |
|---|---|---|
| Konnektor/TI-Gateway | SOAP | TI-Basisoperationen |
| E-Rezept-Fachdienst | [[FHIR]] R4 (REST) | Rezeptabruf und Abgabe |
| ePA-Fachdienst | [[FHIR]] R4 | Medikationsplan |
| Apothekenrechenzentrum | TA1/ABDA-Format | Abrechnung |
| Warenwirtschaft | ABDA-Artikelstamm | Produktdaten |

### Bekannte AVS-Hersteller

Marktführende AVS-Systeme in Deutschland sind LAUER-FISCHER (WINAPO), ADG (Aposystem), PHARMATECHNIK (Ixos) und CGM (Pharmacy). Alle zugelassenen Systeme sind bei der ABDA gelistet.

## Verknüpfungen

- [[PVS]]: Analoges System für Arztpraxen
- [[KIS]]: Äquivalent im Krankenhauskontext
- [[E-Rezept]]: Primärer TI-Dienst des AVS, Einlösung digitaler Verordnungen
- [[ePA]]: Medikationsplan-Abgleich und AMTS-Daten
- [[AMTS]]: Wechselwirkungs- und Interaktionsprüfung im AVS
- [[Konnektoren]]: Verbindungsbox zur TI, über die das AVS TI-Dienste anspricht
- [[TI-Gateway]]: Cloud-basierter Nachfolger des Konnektors in der TI 2.0
- [[Fachdienst]]: E-Rezept- und ePA-Fachdienst als Backend
- [[KIM]]: Sichere Kommunikation mit anderen Leistungserbringern
- [[QES]]: AVS prüft QES-Signaturen bei der E-Rezept-Einlösung
- [[FHIR]]: Datenformat für E-Rezept und ePA-Schnittstellen
- [[gematik]]: Spezifiziert TI-Anforderungen und prüft AVS-Konformität
- [[DVG]]: Gesetz, das die TI-Pflichtanbindung für Apotheken einführte
- [[ABDA]]: Dachverband der Apothekerschaft, Herausgeberin des Artikelstamms und TA1-Format

## Quellen

- [gematik: Apotheken in der TI](https://www.gematik.de/apotheken)
- [gematik: Glossar Apothekenverwaltungssystem](https://www.gematik.de/glossar/begriffe/apothekenverwaltungssystem/357/)
- [gematik: Checkliste TI-Anbindung Apotheke (PDF)](https://www.gematik.de/media/gematik/Medien/Newsroom/Publikationen/Checklisten/gematik_Checkliste_Apotheke_web_210115.pdf)
- [ABDA: Bundesvereinigung Deutscher Apothekerverbände](https://www.abda.de/)
