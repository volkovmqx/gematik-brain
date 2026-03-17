---
title: Telematikinfrastruktur (TI)
aliases: [TI, Telematikinfrastruktur]
audience: [technical, non-technical]
tags: [infrastruktur, ti, netzwerk]
---

# Telematikinfrastruktur (TI)

Die **Telematikinfrastruktur (TI)** ist das sichere digitale Netzwerk des deutschen Gesundheitswesens. Sie verbindet Arztpraxen, Krankenhäuser, Apotheken, Krankenkassen und weitere Akteure miteinander.

## Erklärt für Einsteiger

Stell dir das Internet vor, aber nur für das Gesundheitswesen und besonders gesichert. Wenn dein Arzt ein Rezept ausstellt, deine Krankmeldung an die Kasse schickt oder deine Patientenakte öffnet, laufen diese Daten über die TI. Es ist wie ein eigenes Netz, das dafür sorgt, dass Gesundheitsdaten sicher von A nach B kommen und nur die richtigen Leute Zugriff haben. Die [[gematik]] in Berlin ist dafür verantwortlich.

## Überblick

Die TI wird von der **[[gematik|gematik GmbH]]** (Berlin, Rosenthaler Straße 30) im Auftrag des Bundesministeriums für Gesundheit (BMG) verantwortet.

### Zentrale Dienste
- **[[IDP]]-Dienst**: Identitätsmanagement und Authentisierung
- **[[VZD]] (Verzeichnisdienst)**: Zentrales Adressbuch aller TI-Teilnehmer
- **TSP (Trust Service Provider)**: [[PKI]]-Infrastruktur für Zertifikate
- **[[OCSP]]/CRL**: Zertifikatsprüfung

### Anwendungen auf der TI
- [[ePA]]: Elektronische Patientenakte
- [[E-Rezept]]: Digitales Rezept
- [[KIM]]: Sichere E-Mail
- [[TI-Messenger]]: Instant Messaging
- [[eAU]]: Elektronische Arbeitsunfähigkeitsbescheinigung
- [[VSDM]]: Versichertenstammdaten
- [[NFDM]]: Notfalldaten

## Architektur

### Zugangskomponenten
- **[[Konnektoren]]**: Hardware-VPN-Gateway in Praxen und Kliniken
- **[[TI-Gateway]]**: Cloud-basierte Alternative zum Konnektor (TI 2.0)
- **[[eGK]]**: Versichertenausweis mit NFC-Chip
- **[[SMC-B]]**: Institutionskarte für Leistungserbringer
- **[[HBA]]**: Heilberufsausweis für Ärzte und Apotheker

### TI 2.0

Die TI wird grundlegend weiterentwickelt. Die wichtigsten Änderungen:

- **Zero-Trust-Architektur**: Kein implizites Vertrauen mehr, jeder Zugriff wird geprüft
- **mTLS-Verschlüsselung**: Gegenseitige Authentisierung bei jeder Verbindung
- **[[TI-Gateway]] statt Konnektor**: Hardwareunabhängig, flexibler, zukunftssicher
- **[[VSDM]] 2.0** ist die erste TI-2.0-Anwendung (Start: 30. Juni 2026)

Über 19 zugelassene VPN-Zugangsdienstanbieter bieten Anschluss-Pakete an.

### Netzwerk
- Zentrales VPN-Netz mit Konzentratoren
- Sichere DNS-Auflösung (TI-DNS)
- IPv4 (Standard-MTU 1500) und IPv6 (Dual-Stack-Lite, MTU 1400)

## Standards

Die TI nutzt internationale Standards:
- [[FHIR]] für Dateninteroperabilität
- OAuth 2.0 / OpenID Connect für Authentisierung
- X.509-Zertifikate für die [[PKI]]
- ECC 256 (seit 1. Januar 2026 Pflicht; eHBA-Übergangsfrist bis 30. Juni 2026; gSMC-KT bis 31. Dezember 2026)

## Quellen

- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
- [TI-Zugang - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [TI-Atlas 2025](https://www.gematik.de/telematikinfrastruktur/ti-atlas)
- [Normative Spezifikationen](https://gemspec.gematik.de)
