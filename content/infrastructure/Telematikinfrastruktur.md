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

Die TI wird von der **[[gematik|gematik GmbH]]** (Berlin, Rosenthaler Straße 30) im Auftrag des Bundesministeriums für Gesundheit ([[BMG]]) verantwortet.

### Zentrale Dienste

- **[[IDP]]-Dienst**: Identitätsmanagement und Authentisierung
- **[[VZD]] (Verzeichnisdienst)**: Zentrales Adressbuch aller TI-Teilnehmer
- **[[TSP]] (Trust Service Provider)**: [[PKI]]-Infrastruktur für Zertifikate
- **[[OCSP]]/CRL**: Zertifikatsprüfung

### Anwendungen auf der TI

- [[ePA]]: Elektronische Patientenakte
- [[E-Rezept]]: Digitales Rezept
- [[KIM]]: Sichere E-Mail
- [[TI-Messenger]]: Instant Messaging
- [[eAU]]: Elektronische Arbeitsunfähigkeitsbescheinigung
- [[VSDM]]: Versichertenstammdaten
- [[NFDM]]: Notfalldaten

### Anbindungspflichten

Die Pflicht zur TI-Anbindung wird schrittweise ausgeweitet. Pflegeeinrichtungen müssen ab **1. Dezember 2026** die elektronische Abrechnung über [[KIM]] nutzen. Für Heilmittelerbringer wurde die Anbindungsfrist auf den **1. Oktober 2027** verlängert.

## Architektur

### Zugangskomponenten

- **[[Konnektoren]]**: Hardware-VPN-Gateway in Praxen und Kliniken
- **[[TI-Gateway]]**: Cloud-basierte Alternative zum Konnektor (TI 2.0)
- **[[eGK]]**: Versichertenausweis mit NFC-Chip
- **[[SMC-B]]**: Institutionskarte für Leistungserbringer
- **[[HBA]]**: Heilberufsausweis für Ärzte und Apotheker

### TI 2.0

Die TI wird grundlegend weiterentwickelt. Die wichtigsten Änderungen:

- **[[Zero-Trust]]-Architektur**: Kein implizites Vertrauen mehr, jeder Zugriff wird geprüft
- **[[mTLS]]-Verschlüsselung**: Gegenseitige Authentisierung bei jeder Verbindung
- **[[TI-Gateway]] statt Konnektor**: Hardwareunabhängig, flexibler, zukunftssicher
- **[[VSDM]] 2.0** ist die erste TI-2.0-Anwendung (Start: 30. Juni 2026)

Über 19 zugelassene [[VPN-Zugangsdienst|VPN-Zugangsdienstanbieter]] bieten Anschluss-Pakete an.

### Netzwerk

- Zentrales VPN-Netz mit Konzentratoren
- Sichere DNS-Auflösung (TI-DNS)
- IPv4 (Standard-MTU 1500) und IPv6 (Dual-Stack-Lite, MTU 1400)

## Technische Details

### Netzwerkarchitektur

Das Netz der TI ist kein öffentliches Netz. Es basiert auf einem VPN-Overlay über das öffentliche Internet. VPN-Konzentratoren nehmen die verschlüsselten Verbindungen der [[Konnektoren]] und [[TI-Gateway]]-Instanzen entgegen. Die TI-DNS-Infrastruktur löst intern genutzte Domainnamen auf und ist vom öffentlichen DNS getrennt.

### PKI und Zertifikate

Die gesamte Vertrauensinfrastruktur der TI basiert auf einer mehrstufigen [[PKI]] (Public Key Infrastructure). Die [[gematik]] betreibt die Root-CA. Unterhalb der Root-CA gibt es Zwischen-CAs für verschiedene Kartenfamilien ([[eGK]], [[HBA]], [[SMC-B]]) und Dienste. Alle Zertifikate verwenden X.509 v3.

Seit 1. Januar 2026 ist ECC 256 für alle neu ausgestellten Zertifikate Pflicht. Laufende Übergangsfristen: eHBA G2.0 (RSA) bis 30. Juni 2026, [[gSMC-KT]] bis 31. Dezember 2026.

### Authentisierung und Autorisierung

Für die Authentisierung setzt die TI auf [[OAuth 2.0]] und OpenID Connect. Der [[IDP]]-Dienst der [[gematik]] ist der zentrale Identitätsanker. Versicherte authentisieren sich über die [[eGK]] oder die [[Gesundheits-ID]]. Leistungserbringer nutzen [[HBA]] und [[SMC-B]].

Token-basierte Autorisierung sichert den Zugriff auf Fachdienste. Jedes Token hat einen eingeschränkten Scope und eine begrenzte Gültigkeitsdauer.

### FHIR-basierter Datenaustausch

[[FHIR]] (Fast Healthcare Interoperability Resources) ist das zentrale Datenformat der modernen TI. Fachdienste wie [[ePA]], [[E-Rezept]], [[VZD]] und [[TI-Messenger]] verwenden FHIR R4-Profile. Die [[gematik]] definiert spezifische deutsche Profile und veröffentlicht sie auf Simplifier.net.

### Zero-Trust-Migration

Mit TI 2.0 wird das bisherige VPN-Perimeter-Modell durch [[Zero-Trust]] ersetzt. Jede Verbindung zwischen Primärsystem und TI-Fachdienst erfordert [[mTLS]] (Mutual TLS), bei dem beide Seiten gültige Zertifikate vorlegen müssen. Das [[TI-Gateway]] ist die zentrale Umsetzungskomponente.

## Standards

Die TI nutzt internationale Standards:

- [[FHIR]] für Dateninteroperabilität
- OAuth 2.0 / OpenID Connect für Authentisierung
- X.509-Zertifikate für die [[PKI]]
- ECC 256 (seit 1. Januar 2026 Pflicht; eHBA-Übergangsfrist bis 30. Juni 2026; gSMC-KT bis 31. Dezember 2026)

## Verknüpfungen

- [[ePA]]: Elektronische Patientenakte auf der TI
- [[E-Rezept]]: Digitale Verordnung auf der TI
- [[KIM]]: Sichere E-Mail-Kommunikation
- [[TI-Messenger]]: Instant Messaging im Gesundheitswesen
- [[eAU]]: Elektronische Arbeitsunfähigkeitsbescheinigung
- [[VSDM]]: Versichertenstammdatenmanagement
- [[NFDM]]: Notfalldaten-Management
- [[Konnektoren]]: Hardware-Zugangsgeräte zur TI
- [[TI-Gateway]]: Cloud-Zugang für TI 2.0
- [[eGK]]: Elektronische Gesundheitskarte
- [[SMC-B]]: Institutionskarte für Leistungserbringer
- [[HBA]]: Heilberufsausweis für Heilberufler
- [[FHIR]]: Datenformat für Interoperabilität
- [[PKI]]: Zertifikatsinfrastruktur der TI
- [[IDP]]: Identitätsdienst der TI
- [[VZD]]: Verzeichnisdienst der TI
- [[gematik]]: Betreiber und Regulierer der TI
- [[BMG]]: Bundesministerium für Gesundheit, Auftraggeber
- [[BSI]]: Bundesamt für Sicherheit in der Informationstechnik
- [[Zero-Trust]]: Architekturprinzip der TI 2.0

## Quellen

- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
- [TI-Zugang - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [TI-Atlas 2025](https://www.gematik.de/telematikinfrastruktur/ti-atlas)
- [Normative Spezifikationen](https://gemspec.gematik.de)
