---
title: PVS
audience: [technical, non-technical]
tags: [infrastruktur, praxis, software, primärsystem]
aliases: [Praxisverwaltungssystem, Praxissoftware, Arztpraxissoftware]
relevance:
  sectors: [arztpraxis, hersteller, it-dienstleister]
  interests: [technik, business]
maturity: wachsend
---

# PVS

Ein **PVS** (Praxisverwaltungssystem) ist die primäre Verwaltungssoftware einer Arztpraxis oder Psychotherapeutenpraxis, über die Patientendaten verwaltet, Leistungen abgerechnet und alle Anbindungen an die [[Telematikinfrastruktur]] gesteuert werden.

## Erklärt für Einsteiger

Das PVS ist das Herzstück jeder Arztpraxis. Es ist das Programm, in dem die Arzthelferin die Patienten aufnimmt, der Arzt die Diagnosen einträgt und am Quartalsende die Abrechnung erstellt. Früher war es nur eine Art digitales Karteikasten-System. Heute ist es auch das Tor zum sicheren Gesundheitsnetz: Über das PVS lädt der Arzt Rezepte hoch, ruft Versicherungsdaten ab und verschickt Krankmeldungen direkt an die Krankenkasse.

## Überblick

Ein PVS übernimmt alle zentralen Abläufe einer Praxis:

- Patientenaufnahme und Stammdatenverwaltung
- Dokumentation von Diagnosen, Behandlungen und Medikamenten
- Abrechnung mit den Kassenärztlichen Vereinigungen (KV) über das KVDT-Format
- Ausstellung von Verordnungen und Überweisungen
- Kommunikation über die [[Telematikinfrastruktur]]

Die [[KBV]] (Kassenärztliche Bundesvereinigung) ist die zentrale Instanz für die Zertifizierung von PVS-Software. Sie prüft gesetzlich vorgeschriebene Funktionen und gibt Zertifizierungen aus. Seit dem Inkrafttreten des [[GDNG|Digitalisierungsgesetzes (GDNG)]] im März 2024 müssen PVS-Hersteller zusätzlich eine Konformitätsbewertung (KOB) bei der [[gematik]] durchlaufen. Dabei prüft gematik, ob die TI-Anbindung korrekt implementiert ist.

Es gibt über 100 zertifizierte PVS-Produkte in Deutschland. Marktführer sind CompuGroup Medical (CGM) mit Systemen wie CGM M1 PRO, medatixx mit x.isynet (über 14.600 Installationen), sowie weitere Anbieter wie Turbomed, Zollsoft und INDAMED.

> [!interesse-business]
> Der PVS-Markt umfasst über 100 zertifizierte Produkte. Marktführer: CompuGroup Medical (CGM M1 PRO), medatixx x.isynet (über 14.600 Installationen), Turbomed, Zollsoft, INDAMED. Hersteller müssen neben der KBV-Zertifizierung seit 2024 eine Konformitätsbewertung (KOB) bei der [[gematik]] durchlaufen. PVS-Hersteller sind wesentliche Treiber der TI-Einführung in der ambulanten Versorgung.

Die KBV schließt mit Herstellern auf freiwilliger Basis Rahmenvereinbarungen nach § 332b SGB V ab. Diese legen Qualitätskriterien fest: Benutzerfreundlichkeit, Preistransparenz, Sicherheitsstandards und Kundenservice.

## Technische Details

### Anbindung an die Telematikinfrastruktur

> [!interesse-technik]
> Das PVS kommuniziert mit dem Konnektor über SOAP-Webservices (gemSpec_Kon). Mit TI 2.0 und [[TI-Gateway]] ist [[mTLS]] erforderlich: das PVS authentisiert sich mit eigenem Zertifikat. FHIR R4-Profile der [[KBV]] (fhir.kbv.de) sind Pflicht für E-Rezept und eAU. Konformitätsbewertung (KOB) bei der [[gematik]] seit 2024 gesetzlich vorgeschrieben.

Das PVS kommuniziert mit dem [[Konnektoren|Konnektor]] (oder ab TI 2.0 mit dem [[TI-Gateway]]) über SOAP-Webservices. Über diese Schnittstelle steuert das PVS alle TI-Operationen:

- [[VSDM]]: Auslesen der Versicherungsstammdaten von der [[eGK]]
- [[E-Rezept]]: Erstellen, Signieren und Übertragen von Verordnungen
- [[eAU]]: Erstellen und Übermitteln elektronischer Arbeitsunfähigkeitsbescheinigungen
- [[KIM]]: Senden und Empfangen von Nachrichten über den sicheren Kommunikationsdienst
- [[ePA]]: Zugriff auf die elektronische Patientenakte des Versicherten

Für die Signatur mit [[QES]] steuert das PVS über den Konnektor das Kartenterminal an, in dem der [[HBA]] des Arztes steckt.

### Schnittstellen und Datenformate

PVS-Systeme unterstützen mehrere Schnittstellenstandards:

- **KVDT** (Kassenärztliche Vereinigung Datentransfer): Abrechnungsdaten für die KV-Abrechnung
- **[[FHIR]] R4**: Neue Schnittstellen für E-Rezept (KBV-FHIR-Profile), ePA, eAU und MIO-Dokumente
- **GDT** (Gerätedatentransfer): Datenübernahme von Laborgeräten und anderen Medizingeräten
- **LDT** (Labor-Datentransfer): Übertragung von Laborbefunden
- **BDT** (Behandlungsdatentransfer): Export und Import von Patientendaten bei Praxiswechsel
- **[[xDT]]**: Sammelbegriff für alle DT-basierten Austauschformate

Die KBV definiert FHIR-Profile unter fhir.kbv.de, die PVS-Systeme für das E-Rezept und andere Anwendungen implementieren müssen.

### Verordnungssoftware-Schnittstelle (VOS)

Die KBV hat nach § 371 Abs. 1 SGB V eine einheitliche Verordnungssoftware-Schnittstelle (VOS) definiert. Sie ermöglicht es, dass Verordnungsmodule (z.B. für Hilfsmittel oder Sprechstundenbedarf) herstellerunabhängig in jedes PVS eingebunden werden können.

### Konformitätsbewertung (KOB)

Seit 2024 führt die [[gematik]] Konformitätsbewertungen für PVS-Systeme durch. Die KOB prüft insbesondere die korrekte Implementierung der TI-Anwendungen (E-Rezept, ePA, eAU). PVS ohne gültige KOB-Bestätigung dürfen bestimmte TI-Funktionen nicht nutzen.

### TI 2.0 und mTLS

Mit der Umstellung auf [[TI-Gateway]] müssen PVS-Systeme [[mTLS]] (mutual TLS) unterstützen. Das PVS authentisiert sich mit einem eigenen Zertifikat gegenüber dem TI-Gateway. Das ist ein wesentlicher Unterschied zum Hardware-Konnektor, bei dem die Authentisierung durch die Hardware-Box übernommen wurde.

## Verknüpfungen

- [[Konnektoren]]: Verbindungsbox zur TI, über die das PVS alle TI-Dienste anspricht
- [[TI-Gateway]]: Cloud-basierter Nachfolger des Konnektors in der TI 2.0
- [[VSDM]]: Stammdatenabgleich über eGK, gesteuert durch das PVS
- [[E-Rezept]]: Verordnungen werden im PVS erstellt und signiert
- [[eAU]]: Arbeitsunfähigkeitsbescheinigungen werden über das PVS übermittelt
- [[KIM]]: Sicherer Nachrichtendienst, integriert ins PVS
- [[ePA]]: Zugriff auf die Patientenakte über das PVS
- [[QES]]: Ärzte signieren Dokumente über das PVS und den HBA
- [[HBA]]: Heilberufsausweis des Arztes, für QES im PVS-Workflow benötigt
- [[KBV]]: Zertifizierungsstelle für PVS-Software
- [[gematik]]: Führt Konformitätsbewertungen (KOB) durch
- [[FHIR]]: Technisches Datenformat für neue PVS-Schnittstellen
- [[mTLS]]: Authentisierungsprotokoll für TI-Gateway-Anbindung
- [[KIS]]: Äquivalent zum PVS im Krankenhauskontext

## Quellen

- [KBV: Praxisverwaltungssystem](https://www.kbv.de/praxis/digitalisierung/praxisverwaltungssystem)
- [KBV: Verzeichnis zertifizierter Software](https://update.kbv.de/ita-update/Service-Informationen/Zulassungsverzeichnisse/KBV_ITA_SIEX_Verzeichnis_Zert_Software.pdf)
- [KBV: FHIR-Schnittstellen](https://fhir.kbv.de/)
- [gematik: Konformitätsbewertung](https://www.gematik.de/telematikinfrastruktur/ti-anwendungen)
