---
title: EUDAMED
audience: [technical, non-technical]
tags: [infrastruktur, medizinprodukte, eu, mdr, ivdr, registrierung]
aliases: [European Database on Medical Devices, Europäische Datenbank für Medizinprodukte]
relevance:
  sectors: [hersteller, regulierung, ti-infrastruktur, krankenhaus, it-dienstleister]
  interests: [compliance, technik]
maturity: immergruen
---

# EUDAMED

**EUDAMED** (European Database on Medical Devices) ist die zentrale EU-Datenbank für Medizinprodukte, in der Hersteller, Bevollmächtigte und Importeure ihre Produkte, Zertifikate und Vigilanzdaten registrieren müssen, bevor sie diese in der EU vermarkten.

## Erklärt für Einsteiger

Bevor ein neues Medikament auf den Markt kommt, muss es bei einer Behörde zugelassen werden. Für Medizinprodukte, also alles von Pflastern über Herzschrittmacher bis zu medizinischen Apps, gilt etwas Ähnliches in Europa: Hersteller müssen ihre Produkte in einer zentralen Datenbank registrieren. EUDAMED ist diese Datenbank. Sie sorgt dafür, dass alle EU-Länder einen gemeinsamen Überblick über Medizinprodukte haben: welche zugelassen sind, von wem sie hergestellt werden und ob es Sicherheitsprobleme gibt.

## Überblick

EUDAMED wurde von der Europäischen Kommission entwickelt, um die [[MDR]]-Verordnung (EU 2017/745) und die [[IVDR]]-Verordnung (EU 2017/746) zu unterstützen. Die Datenbank dient als zentrale Plattform für den Informationsaustausch zwischen Herstellern, Benannten Stellen, Behörden und der Öffentlichkeit.

Ab dem **28. Mai 2026** ist die Nutzung von EUDAMED für neue Medizinprodukte verpflichtend. Hersteller müssen Produkte im Modul "UDI/Geräteregistrierung" registrieren, bevor sie die erste Einheit in der EU vermarkten. Produkte, die vor dem 28. Mai 2026 bereits vermarktet wurden und nach diesem Datum weiter vermarktet werden, müssen bis spätestens **28. November 2026** nachregistriert werden.

Für [[SaMD]] (Software as a Medical Device) gelten dieselben Registrierungspflichten wie für physische Medizinprodukte. Dies betrifft auch DiGA-ähnliche Anwendungen, die als Medizinprodukt nach MDR klassifiziert sind.

> [!interesse-compliance]
> **Pflichttermin für Hersteller:** Ab 28. Mai 2026 müssen alle neuen MDR/IVDR-Produkte vor der ersten Vermarktung in EUDAMED registriert sein. Bereits vermarktete Produkte: Nachregistrierung bis 28. November 2026. Ohne gültige EUDAMED-Registrierung darf das Produkt ab dem Stichtag nicht mehr in der EU vermarktet werden. Das gilt auch für [[SaMD]]-Hersteller, deren Software als Medizinprodukt klassifiziert ist.

### Öffentlicher Zugang

Ein Teil der EUDAMED-Daten ist öffentlich einsehbar. Patienten, Gesundheitsfachkräfte und Behörden können prüfen, ob ein Produkt zugelassen ist und ob es Sicherheitsmeldungen gibt.

> [!klinik-integration] Klinik-Integration: EUDAMED in der Krankenhaus-Beschaffung
> **Beschaffungsprozess ab Mai 2026:** Krankenhäuser müssen bei jeder Neubeschaffung von Medizinprodukten prüfen, ob das Produkt in EUDAMED registriert ist. Ohne gültige EUDAMED-Registrierung darf ein Gerät ab dem 28. Mai 2026 nicht mehr in der EU vermarktet werden. Dies betrifft alle Geräteklassen: von Einmalartikeln über bildgebende Systeme bis zu implantierbaren Geräten.
>
> **UDI im KIS und in der Materialwirtschaft:** Die UDI (Unique Device Identifier) der eingesetzten Produkte sollte im KIS und im Medizinproduktemanagement erfasst werden. Dies erleichtert Rückrufe, Vigilanzmeldungen und die Nachweispflicht nach MPBetreibV. KIS-Hersteller und CMMS-Systeme bieten zunehmend UDI-Felder an. Prüfen Sie, ob Ihre Materialwirtschaft (z.B. SAP MM, Orbis Material) den UDI-DI strukturiert speichern kann.
>
> **Sonderfälle [[SaMD]]:** Klinische Softwareprodukte (CDSS, KI-Diagnosesysteme), die als Medizinprodukt nach MDR klassifiziert sind, unterliegen denselben EUDAMED-Pflichten. Bei sicherheitsrelevanten Software-Updates ändert sich der UDI-DI: Die eingesetzte Softwareversion im KIS muss dann auf den neuen UDI-DI aktualisiert werden.

## Technische Details

### Module von EUDAMED

EUDAMED besteht aus sechs Modulen. Vier wurden von der Europäischen Kommission als funktional bestätigt und sind ab Mai 2026 verbindlich:

| Modul | Inhalt | Status |
|-------|--------|--------|
| **Akteurregistrierung** | Hersteller, Bevollmächtigte, Importeure | Verbindlich ab 28.05.2026 |
| **UDI/Geräteregistrierung** | Gerätekennnummer, Produktdaten | Verbindlich ab 28.05.2026 |
| **Benannte Stellen und Zertifikate** | Zertifikate der Benannten Stellen | Verbindlich ab 28.05.2026 |
| **Marktüberwachung** | Behördliche Aktionen | Verbindlich ab 28.05.2026 |
| **Vigilanz** | Sicherheitsmeldungen (Vorfälle) | Verbindlich nach Funktionsbestätigung |
| **Klinische Prüfungen** | Prüfungsdaten | Verbindlich nach Funktionsbestätigung |

> [!frist-warnung] Frist-Warnung: EUDAMED-Pflichtnutzung ab 28. Mai 2026
> **Rechtsgrundlage:** Art. 123 Abs. 3 lit. d MDR (EU 2017/745) i.V.m. Kommissionsbeschluss (EU) 2025/2371 vom 27. November 2025 (ABl. L 2025/2371)
> **Frist 1, Neue Produkte:** Ab **28. Mai 2026** müssen alle wirtschaftlichen Akteure (Hersteller, Bevollmächtigte, Importeure) in EUDAMED registriert sein. Neue Medizinprodukte dürfen erst nach vollständiger EUDAMED-Registrierung in der EU in Verkehr gebracht werden.
> **Frist 2, Bestandsprodukte:** Produkte, die vor dem 28. Mai 2026 bereits vermarktet wurden, müssen bis **28. November 2026** nachregistriert sein (sechs Monate Übergangsfrist nach Art. 123 Abs. 3 lit. d MDR).
> **Handlungsbedarf:** Akteurregistrierung (SRN) und UDI/Geräteregistrierung sofort anstoßen. Interne Prozesse für laufende UDI-DI-Pflege bei Versionsänderungen einrichten.
> **Bei Nichtbeachtung:** Ohne gültige EUDAMED-Registrierung ist das Inverkehrbringen in der EU ab dem jeweiligen Stichtag unzulässig. Marktüberwachungsbehörden (in Deutschland: [[BfArM]]) können den Rückruf anordnen.

### UDI-System

Das UDI-System (Unique Device Identifier) ist das Herzstück der Geräteregistrierung in EUDAMED. Jedes Produkt erhält einen eindeutigen Identifikator, der aus zwei Teilen besteht:

- **UDI-DI** (Device Identifier): Identifiziert das spezifische Produktmodell, eindeutig pro Produkt und Hersteller
- **UDI-PI** (Production Identifier): Identifiziert das spezifische Exemplar (Seriennummer, Lotnummer, Verfallsdatum)

Für [[SaMD]] gilt: Die Version der Software ist Teil des UDI. Bei jeder neuen Version, die die Sicherheit oder Leistung beeinflusst, muss ein neuer UDI-DI vergeben werden.

> [!interesse-technik]
> EUDAMED-Zugang: [webgate.ec.europa.eu/eudamed](https://webgate.ec.europa.eu/eudamed). Registrierung über das Webportal oder über strukturierten Datenaustausch gemäß EUDAMED Technical Onboarding Guide (Europäische Kommission). Öffentliches Suchportal: [eudamed.ec.europa.eu](https://ec.europa.eu/tools/eudamed/). Für SaMD: Registrierung erfordert EMDN-Code (European Medical Device Nomenclature) und Risikoklasse nach MDR Annex VIII Rule 11.

> [!dev-quickstart] Dev Quickstart: EUDAMED-Registrierung und M2M-Datenaustausch
> **Registrierungsportal (Production):** [webgate.ec.europa.eu/eudamed](https://webgate.ec.europa.eu/eudamed)
> **Sandbox/Playground:** [webgate.ec.europa.eu/eudamed-play](https://webgate.ec.europa.eu/eudamed-play)
>
> **Manuelle Registrierung (GUI), Reihenfolge:**
> 1. Akteurregistrierung (SRN: Single Registration Number erhalten)
> 2. UDI-DI anlegen (EMDN-Code + MDR-Risikoklasse pflegen)
> 3. Gerätedatensatz mit Basic UDI-DI verknüpfen
>
> **Machine-to-Machine (M2M), automatisierte Massenregistrierung:**
> - Protokoll: AS4 (CEF eDelivery / Domibus)
> - Format: XML gegen EUDAMED XSD-Schemata validiert
> - Auth: Bearer-Token (OAuth 2.0)
> - XSD-Schemas + User Guide: [webgate.ec.europa.eu/eudamed-help, Technical Documentation](https://webgate.ec.europa.eu/eudamed-help/en/documentation/technical-documentation.html)
> - M2M User Guide (v2.22.0, 2026): [webgate.ec.europa.eu/eudamed-help/en/files/M2M - user guide.pdf](https://webgate.ec.europa.eu/eudamed-help/en/files/M2M%20-%20user%20guide.pdf)
>
> **Für SaMD:** UDI-DI muss bei jeder sicherheitsrelevanten Versionsänderung neu vergeben werden. EMDN-Code für Software: `Z12` (Software für medizinische Zwecke).

### Relevanz für SaMD-Hersteller in Deutschland

Hersteller von [[SaMD]] in Deutschland müssen zusätzlich zur EUDAMED-Registrierung:

1. Eine [[Konformitaetsbewertung|Konformitätsbewertung]] nach MDR durchführen
2. Eine CE-Kennzeichnung anbringen
3. Bei Klasse IIa, IIb oder III: Einbindung einer [[Benannte-Stelle|Benannten Stelle]]
4. Technische Dokumentation und klinische Bewertung erstellen
5. Ein Qualitätsmanagementsystem (QMS, ISO 13485) betreiben

EUDAMED ist das finale Register, das den Abschluss dieses Prozesses dokumentiert.

> [!frist-warnung] Frist-Warnung: UDI-Vergabe bei SaMD-Versionsänderungen
> **Rechtsgrundlage:** Art. 27 Abs. 1 MDR (EU 2017/745) i.V.m. Anhang VI Teil C Nr. 7.1 MDR
> **Pflicht:** Bei jeder neuen SaMD-Version, die Sicherheit oder Leistung beeinflusst, muss ein neuer UDI-DI (Device Identifier) vergeben und in EUDAMED registriert werden. Die alte UDI-DI darf für die neue Version nicht weiterverwendet werden.
> **Handlungsbedarf:** Hersteller müssen einen internen Entscheidungsprozess etablieren, der bei jeder Release-Planung prüft, ob eine neue UDI-DI-Vergabe erforderlich ist. Die MDCG-Guidance 2019-2 enthält Kriterien für "significant changes" bei Software.
> **Bei Nichtbeachtung:** Falscher oder fehlender UDI gefährdet die Konformität des Produkts nach Art. 27 MDR und kann von Marktüberwachungsbehörden als Verstoß gewertet werden.

## Verknüpfungen

- [[MDR]] (Medizinprodukteverordnung EU 2017/745, Rechtsgrundlage für EUDAMED)
- [[IVDR]] (In-vitro-Diagnostika-Verordnung, zweite Rechtsgrundlage)
- [[SaMD]] (Software as Medical Device: wichtige Kategorie in EUDAMED)
- [[Benannte-Stelle]] (Zertifikate der Benannten Stellen werden in EUDAMED erfasst)
- [[Konformitaetsbewertung]] (Voraussetzung für die EUDAMED-Registrierung)
- [[DiGA]] (DiGA können MDR-Medizinprodukte sein und EUDAMED-registrierungspflichtig)
- [[BfArM]] (Deutsche Behörde für Medizinprodukte, verlinkt EUDAMED mit nationalem Recht)

## Quellen

- [Europäische Kommission: EUDAMED](https://health.ec.europa.eu/medical-devices-eudamed_en)
- [EUDAMED Pflichttermin 28. Mai 2026 (Osborne Clarke)](https://www.osborneclarke.com/insights/eu-triggers-mandatory-eudamed-use-diagnostics-and-medtech-may-2026)
- [BfArM: EUDAMED](https://www.bfarm.de/EN/Medical-devices/Overview/Europe-and-EUDAMED/EUDAMED/_artikel.html)
- [EUDAMED Webportal](https://webgate.ec.europa.eu/eudamed)
- [Europäische Kommission: EUDAMED – vier erste Module ab 28. Mai 2026 verpflichtend](https://health.ec.europa.eu/latest-updates/eudamed-four-first-modules-will-be-mandatory-use-28-may-2026-2025-11-27_en)
