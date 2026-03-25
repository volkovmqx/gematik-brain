---
title: PVS-Hersteller
audience: [technical, non-technical]
tags: [organisation, pvs, primärsystem, software, markt]
aliases: [PVS-Anbieter, Praxissoftware-Hersteller, Primärsystem-Hersteller]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, hersteller, it-dienstleister, startup, kasse, regulierung]
  interests: [technik, business, compliance]
maturity: wachsend
---

# PVS-Hersteller

**PVS-Hersteller** sind Softwareunternehmen, die Praxisverwaltungssysteme ([[PVS]]) für ambulante medizinische Einrichtungen entwickeln und vertreiben. Sie sind zentrale Akteure im TI-Ökosystem, weil alle TI-Anwendungen über ihre Produkte in den Praxisalltag gelangen.

## Erklärt für Einsteiger

Jede Arztpraxis braucht eine Software, um Termine zu planen, Patientendaten zu verwalten und Leistungen abzurechnen. Diese Software heißt Praxisverwaltungssystem. Die Firmen, die diese Software bauen, sind die PVS-Hersteller. Wenn der Gesetzgeber neue digitale Pflichten einführt, wie das E-Rezept oder die ePA, müssen die PVS-Hersteller ihre Software entsprechend aktualisieren. Praxen können eine neue gesetzliche Anforderung oft erst dann erfüllen, wenn ihr PVS-Hersteller das passende Update geliefert hat.

## Überblick

Der deutsche PVS-Markt ist konzentriert: Wenige große Anbieter versorgen den Großteil der rund 100.000 vertragsärztlichen Praxen. Die wichtigsten Hersteller nach Marktanteil sind (Stand 2025):

- **CGM (CompuGroup Medical)**: Marktführer mit Produkten wie CGM TURBOMED, CGM MEDISTAR, CGM ALBIS und vielen weiteren
- **Dampsoft**: Marktführer im zahnärztlichen Segment
- **x.comfort (x-tention)**: Relevanter Anbieter im niedergelassenen Bereich
- **Tomedo (Zollsoft)**: Wachsender Anbieter, besonders bei jungen Praxen
- **Mediservice / DocCirrus**: Cloudbasierte Lösungen
- **Facharzt24 / MEDICAL SOFTWARE**: Fachrichtungsspezialisierte Systeme

Für Zahnarztpraxen gibt es ein eigenes Segment: Zahnarztpraxisverwaltungssysteme (ZZVS), mit Herstellern wie Dampsoft, CGM Zahnarzt-Systeme und anderen.

> [!interesse-business]
> Der PVS-Markt ist reguliert: Alle PVS müssen gematik-zugelassene TI-Komponenten integrieren und Konformitätsnachweise erbringen. Das erzeugt erhebliche Entwicklungs- und Zertifizierungskosten. Auf der anderen Seite schützt das hohe Zertifizierungsaufwand vor Neueinsteigern. Stand März 2026 haben über 1.100 Primärsysteme (PVS, AVS, KIS) eine gematik-Konformitätsbestätigung für das E-Rezept. Die [[gematik]] veröffentlicht eine öffentliche Liste aller zugelassenen Primärsysteme.

### Rolle im TI-Ökosystem

PVS-Hersteller sind das zentrale Glied zwischen den technischen Vorgaben der [[gematik]] und den Praxisabläufen. Sie müssen:

1. TI-Komponenten in ihre Software integrieren (Konnektor- oder [[TI-Gateway]]-Schnittstellen)
2. FHIR-Profile der [[KBV]] und [[gematik]] implementieren
3. Zulassungsverfahren bei der [[gematik]] durchlaufen
4. Ihre Software nach jedem gematik-Releasezyklen aktualisieren
5. Praxen schulen und beim Onboarding unterstützen

Weil alle TI-Anwendungen ([[E-Rezept]], [[ePA]], [[eAU]], [[KIM]], [[eVO]]) über das PVS laufen, sind PVS-Hersteller de facto Gatekeeper der digitalen Gesundheitsversorgung.

### Konformitätsprüfung und Zulassung

PVS-Hersteller müssen ihre Produkte bei der [[gematik]] zertifizieren lassen, bevor sie TI-Funktionen produktiv anbieten dürfen. Das Verfahren umfasst:

- Konformitätsprüfung gegen gematik-Spezifikationen (gemSpec)
- Prüfung durch zugelassene Prüflabore
- Konformitätserklärung gegenüber der [[gematik]]
- Listung im gematik-Produktkatalog

Jede neue TI-Anwendung (z.B. T-Rezept, eVO) erfordert einen neuen Zertifizierungszyklus.

## Technische Details

### TI-Integration im PVS

PVS verbinden sich mit der [[Telematikinfrastruktur]] entweder über einen lokalen [[Konnektoren|Konnektor]] (traditionelle Methode) oder über ein [[TI-Gateway]] (cloudbasierter Zugang, TI 2.0). Die PVS-seitige Schnittstelle zum Konnektor ist als SOAP-Webservice definiert (gemSpec_Kon).

Für [[FHIR]]-basierte TI-Anwendungen (E-Rezept, ePA) kommuniziert das PVS direkt mit den jeweiligen Fachdiensten über REST/FHIR. Der Authentifizierungsfluss läuft über den [[IDP]]-Dienst der [[gematik]].

> [!interesse-technik]
> PVS-Hersteller implementieren typischerweise folgende TI-Schnittstellen: (1) Konnektor SOAP-API für eGK-Auslesen (VSDM), SMC-B-Operationen und QES-Signatur. (2) IDP OAuth2/OIDC für Token-Beschaffung. (3) E-Rezept-Fachdienst REST/FHIR für Rezeptmanagement. (4) ePA-Aktensystem REST/FHIR für Aktenzugriff. (5) KIM SMTP/IMAP (lokal via KIM-Clientmodul). Entwicklungsreferenzen: [github.com/gematik/api-erp](https://github.com/gematik/api-erp), [github.com/gematik/epa-poc-collection](https://github.com/gematik/epa-poc-collection), [fachportal.gematik.de](https://fachportal.gematik.de).

### Releasezyklen und Updatepflicht

Die [[gematik]] gibt Releasezyklen vor, die PVS-Hersteller umsetzen müssen. Typische Updateanlässe:

- Neue gematik-Spezifikationsversionen (z.B. KIM_1_5_5, ePA_3_1_3)
- Neue oder geänderte KBV-FHIR-Profile
- Neue EBM-Ziffern durch den [[Bewertungsausschuss]]
- Jährliche [[ICD-10-GM]]- und [[OPS]]-Katalogaktualisierungen
- Jährliche DRG-Grouper-Updates ([[InEK]])

Die Anforderungen kumulieren: PVS-Hersteller müssen mehrere Updatestränge gleichzeitig verwalten.

### Haftung und Verantwortung

PVS-Hersteller tragen Mitverantwortung dafür, dass Praxen TI-Pflichten erfüllen können. Wenn ein PVS-Update ausbleibt oder fehlerhaft ist, können Praxen Abrechnungsausfälle, Retaxierungen oder TI-Pflichtverstöße riskieren. Praxen sollten daher Update-SLAs mit ihrem PVS-Hersteller vereinbaren.

## Verknüpfungen

- [[PVS]] (Praxisverwaltungssystem: das Produkt der PVS-Hersteller)
- [[KBV]] (definiert FHIR-Profile, die PVS implementieren müssen)
- [[gematik]] (Zulassungsbehörde für PVS-TI-Funktionen)
- [[E-Rezept-Fachdienst]] (zentrale TI-Schnittstelle für Verordnungen)
- [[ePA]] (ePA-Modul muss in jedem PVS enthalten sein)
- [[KIM]] (PVS integriert KIM-Clientmodul)
- [[eVO]] (Heilmittelverordnung, PVS-Pflicht ab 2027)
- [[Konnektoren]] (traditionelle TI-Anbindung im PVS-Kontext)
- [[TI-Gateway]] (neue cloudbasierte TI-Anbindung)
- [[Bewertungsausschuss]] (EBM-Änderungen erfordern PVS-Updates)
- [[IDP]] (Authentifizierungsdienst für PVS-Zugriffe auf TI-Fachdienste)

## Quellen

- [gematik: Zugelassene Primärsysteme (Produktkatalog)](https://fachportal.gematik.de/anwendungen/e-rezept)
- [KBV: FHIR-Profile für Primärsysteme](https://simplifier.net/organization/kassenrztlichebundesvereinigungkbv)
- [gematik: Anforderungen an Primärsysteme](https://fachportal.gematik.de/hersteller-anbieter/komponenten-dienste/primaersystem)
- [Wikipedia: Praxisverwaltungssystem](https://de.wikipedia.org/wiki/Praxisverwaltungssystem)
