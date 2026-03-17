---
title: Telematikinfrastruktur (TI)
aliases: [TI, Telematikinfrastruktur]
audience: [technical, non-technical]
tags: [infrastruktur, ti, netzwerk]
---

# Telematikinfrastruktur (TI)

Die **Telematikinfrastruktur (TI)** ist das sichere digitale Netzwerk des deutschen Gesundheitswesens. Sie verbindet Arztpraxen, Krankenhauser, Apotheken, Krankenkassen und weitere Akteure miteinander.

## Erklart fur Einsteiger

Stell dir das Internet vor, aber nur fur das Gesundheitswesen und besonders gesichert. Wenn dein Arzt ein Rezept ausstellt, deine Krankmeldung an die Kasse schickt oder deine Patientenakte offnet, laufen diese Daten uber die TI. Es ist wie ein eigenes Netz, das dafur sorgt, dass Gesundheitsdaten sicher von A nach B kommen und nur die richtigen Leute Zugriff haben. Die gematik in Berlin ist dafur verantwortlich.

## Uberblick

Die TI wird von der **gematik GmbH** (Berlin, Rosenthaler Strasse 30) im Auftrag des Bundesministeriums fur Gesundheit (BMG) verantwortet.

### Zentrale Dienste
- **IDP-Dienst**: Identitatsmanagement und Authentisierung
- **VZD (Verzeichnisdienst)**: Zentrales Adressbuch aller TI-Teilnehmer
- **TSP (Trust Service Provider)**: PKI-Infrastruktur fur Zertifikate
- **OCSP/CRL**: Zertifikatsprufung

### Anwendungen auf der TI
- [[ePA]]: Elektronische Patientenakte
- [[E-Rezept]]: Digitales Rezept
- [[KIM]]: Sichere E-Mail
- [[TI-Messenger]]: Instant Messaging
- [[eAU]]: Elektronische Arbeitsunfahigkeitsbescheinigung
- [[VSDM]]: Versichertenstammdaten
- [[NFDM]]: Notfalldaten

## Architektur

### Zugangskomponenten
- **[[Konnektoren]]**: Hardware-VPN-Gateway in Praxen und Kliniken
- **TI-Gateway**: Cloud-basierte Alternative zum Konnektor (TI 2.0)
- **[[eGK]]**: Versichertenausweis mit NFC-Chip
- **[[SMC-B]]**: Institutionskarte fur Leistungserbringer
- **HBA**: Heilberufsausweis fur Arzte und Apotheker

### TI 2.0

Die TI wird grundlegend weiterentwickelt. Die wichtigsten Anderungen:

- **Zero-Trust-Architektur**: Kein implizites Vertrauen mehr, jeder Zugriff wird gepruft
- **mTLS-Verschlusselung**: Gegenseitige Authentisierung bei jeder Verbindung
- **TI-Gateway statt Konnektor**: Hardwareunabhangig, flexibler, zukunftssicher
- **[[VSDM]] 2.0** ist die erste TI-2.0-Anwendung (Start: 30. Juni 2026)

Uber 19 zugelassene VPN-Zugangsdienstanbieter bieten Anschluss-Pakete an.

### Netzwerk
- Zentrales VPN-Netz mit Konzentratoren
- Sichere DNS-Auflosung (TI-DNS)
- IPv4 (Standard-MTU 1500) und IPv6 (Dual-Stack-Lite, MTU 1400)

## Standards

Die TI nutzt internationale Standards:
- [[FHIR]] fur Dateninteroperabilitat
- OAuth 2.0 / OpenID Connect fur Authentisierung
- X.509-Zertifikate fur PKI
- RSA 2048 (bis Ende 2025), dann ECC

## Quellen

- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
- [TI-Zugang - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [TI-Atlas 2025](https://www.gematik.de/telematikinfrastruktur/ti-atlas)
- [Normative Spezifikationen](https://gemspec.gematik.de)
