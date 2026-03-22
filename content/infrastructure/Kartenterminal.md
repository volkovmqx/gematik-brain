---
title: Kartenterminal
audience: [technical, non-technical]
tags: [infrastruktur, kartenterminal, hardware, ehealth-kt]
aliases: [eHealth-Kartenterminal, eHealth-KT, Kartenlesegerät]
relevance:
  sectors: [arztpraxis, zahnarzt, apotheke, krankenhaus, ti-infrastruktur]
  interests: [technik]
maturity: immergruen
---

# Kartenterminal

Das **eHealth-Kartenterminal (eHealth-KT)** ist das Kartenlesegerät in Arztpraxen und anderen Gesundheitseinrichtungen, das die Chipkarten ([[eGK]], [[HBA]], [[SMC-B]]) mit dem [[Konnektoren|Konnektor]] oder dem [[TI-Gateway]] verbindet.

## Erklärt für Einsteiger

Stell dir vor, ein Arzt steckt deine Gesundheitskarte in ein Lesegerät auf dem Schreibtisch. Dieses Gerät ist das Kartenterminal. Es liest die Daten von der Karte und leitet sie sicher an den Computer der Praxis weiter. Ohne dieses Gerät kann der Arzt nicht auf die [[Telematikinfrastruktur]] zugreifen. Es ist so etwas wie der Türsteher zwischen deiner Karte und dem digitalen Gesundheitsnetz.

## Überblick

Das eHealth-Kartenterminal ist ein zugelassenes Hardwaregerät, das in jeder Arztpraxis, Zahnarztpraxis, Apotheke und Klinik vorhanden sein muss, die an die [[Telematikinfrastruktur]] angebunden ist. Es bildet die physische Schnittstelle zwischen den Chipkarten und der TI-Infrastruktur der Einrichtung.

Es gibt zwei Varianten:

- **Stationäres Terminal**: Fest installiertes Gerät am Empfang oder Behandlungsraum. Für Standard-Praxen die häufigste Form.
- **Mobiles Terminal**: Für Hausbesuche oder flexible Einsatzorte. Kommuniziert drahtlos mit dem Konnektor.

Kartenterminals sind zulassungspflichtig. Die [[gematik]] prüft und zertifiziert jedes Gerät. Nur zugelassene Terminals dürfen in der TI eingesetzt werden. Für die Aufnahme in die [[TI-Pauschale]] muss die Praxis die Anzahl der installierten Kartenterminals nachweisen.

> [!praxis-tipp] Praxis-Tipp: Kartenterminal kaufen oder ersetzen
> Kaufen Sie nur Geräte aus dem gematik-Produktkatalog: [fachportal.gematik.de](https://fachportal.gematik.de). Nicht zugelassene Geräte funktionieren nicht in der TI.
>
> Worauf Sie achten sollten:
> 1. Stationäres Terminal für den Empfang: ca. 600-700 € (z.B. ORGA Neo ca. 683 €). Die gSMC-KT ist oft separat, ca. 79 €.
> 2. Für Behandlungsräume mit eigenem Terminal: Jedes Gerät braucht eine eigene gSMC-KT.
> 3. Mobiles Terminal für Hausbesuche: Achten Sie auf WLAN-Kompatibilität mit Ihrem Konnektor.
> 4. Ihr TI-Dienstleister (IT-Betreuer oder TI-Anbieter) muss das Terminal im Konnektor registrieren. Planen Sie dafür einen Servicetermin ein.
>
> Tipp: Fragen Sie beim Kauf, ob das Gerät bereits ECC-fähig (gSMC-KT G2.1) ausgeliefert wird.

## Technische Details

### Schnittstellen

Das Kartenterminal verfügt über zwei Chipkarten-Schnittstellen:

- **Kontaktbehaftet (ISO 7816)**: Physische Kontakte für [[eGK]], [[HBA]] und [[SMC-B]]
- **Kontaktlos (NFC, ISO 14443)**: Für die kontaktlose [[eGK]]-Nutzung (z.B. für VSDM-Online-Abgleich ohne Einstecken)

Die Verbindung zum [[Konnektoren|Konnektor]] oder [[TI-Gateway]] erfolgt über das lokale Netzwerk (LAN/WLAN) per TCP/IP. Das Protokoll zwischen Kartenterminal und Konnektor ist in der gematik-Spezifikation gemSpec_KT definiert.

### gSMC-KT (Sicherheitsmodul)

Jedes zugelassene eHealth-Kartenterminal enthält ein eigenes Sicherheitsmodul: die **[[gSMC-KT]]** (gerätespezifische Security Module Card für Kartenterminals). Diese Karte stellt die TI-Identität des Terminals bereit und ermöglicht eine verschlüsselte, authentisierte Verbindung zum Konnektor. Ohne gSMC-KT kann kein Terminal in der TI betrieben werden.

Im Zuge der [[ECC-Migration]] (Umstellung von RSA auf ECC) müssen alle gSMC-KT bis 31. Dezember 2026 auf ECC-fähige Nachfolger umgestellt sein.

> [!praxis-tipp] Praxis-Tipp: gSMC-KT auf ECC umstellen bis Ende 2026
> In Ihrer Praxis bedeutet das: Prüfen Sie, ob Ihre Kartenterminals noch eine alte gSMC-KT G2.0 enthalten. Diese darf ab 1. Januar 2027 nicht mehr genutzt werden.
>
> So prüfen Sie das:
> 1. Schauen Sie in das Verwaltungsportal Ihres Konnektors. Dort sind alle registrierten Terminals mit ihrer gSMC-KT-Version aufgelistet.
> 2. Steht dort "G2.0": Bestellen Sie eine Ersatz-gSMC-KT G2.1 über Ihren TI-Dienstleister oder direkt beim Terminalhersteller (ca. 79 €).
> 3. Der Tausch dauert ca. 15 Minuten und kann während der Sprechstundenpause erfolgen.
>
> Häufiger Fehler: Der Tausch wird auf die lange Bank geschoben. Wer erst im Dezember 2026 tauscht, riskiert Lieferengpässe.

### Kartensteckplätze

Ein Standard-Kartenterminal hat typischerweise zwei bis vier Kartensteckplätze:

- Slot 1: [[eGK]] des Patienten
- Slot 2: [[SMC-B]] der Einrichtung
- Slot 3/4: [[HBA]] des Arztes oder weiterer Nutzer

Im [[Konnektoren|Konnektor]] sind üblicherweise mehrere Kartenterminals gleichzeitig registriert (primäres und weitere Terminals für Behandlungsräume).

### Zulassungsverfahren

Die [[gematik]] vergibt Zulassungen für Kartenterminal-Produkte nach Prüfung gemäß Produkttypsteckbrief (gemProdT KT). Zugelassene Geräte sind im gematik-Produktkatalog gelistet. Hersteller sind unter anderem Cherry, Ingenico und Worldline.

> [!interesse-technik]
> Spezifikation: gemSpec_KT (Kartenterminal-Spezifikation) auf [gemspec.gematik.de](https://gemspec.gematik.de). Das Kommunikationsprotokoll zwischen Terminal und Konnektor basiert auf TCP/IP mit einem proprietären gematik-Protokoll. Schnittstellen: ISO 7816 (kontaktbehaftet) und ISO 14443 / NFC (kontaktlos). ECC-Migration der gSMC-KT bis 31.12.2026 verpflichtend. Zugelassene Geräte im gematik-Produktkatalog: [fachportal.gematik.de](https://fachportal.gematik.de).

> [!dev-quickstart] Dev Quickstart: Konnektor-SOAP-API für Kartenterminale nutzen
> Der [[Konnektoren|Konnektor]] exponiert SOAP-Dienste für die Kartenverwaltung.
>
> **Service Discovery:**
> ```bash
> # Verfügbare Dienste und WSDL-Versionen abfragen
> curl http://<konnektor-ip>/connector.sds
> ```
>
> **Karten und Terminals abfragen (EventService, WSDL v7.2):**
> ```xml
> POST http://<konnektor-ip>/ws/EventService
> Content-Type: text/xml; charset=utf-8
>
> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
>   <SOAP-ENV:Body>
>     <ns:GetCards xmlns:ns="http://ws.gematik.de/conn/EventService/v7.2">
>       <ns:Context>
>         <ns2:MandantId xmlns:ns2="http://ws.gematik.de/conn/ConnectorContext/v2.0">m1</ns2:MandantId>
>         <ns2:ClientSystemId xmlns:ns2="http://ws.gematik.de/conn/ConnectorContext/v2.0">cs1</ns2:ClientSystemId>
>         <ns2:WorkplaceId xmlns:ns2="http://ws.gematik.de/conn/ConnectorContext/v2.0">wp1</ns2:WorkplaceId>
>       </ns:Context>
>     </ns:GetCards>
>   </SOAP-ENV:Body>
> </SOAP-ENV:Envelope>
> ```
> - WSDL-Definitionen (OPB4/OPB5): [github.com/gematik/api-telematik](https://github.com/gematik/api-telematik)
> - Implementierungsleitfaden: gemILF_PS auf [gemspec.gematik.de](https://gemspec.gematik.de/downloads/gemILF/gemILF_PS/gemILF_PS_V2.23.0_Aend.html)
> - Protokoll Terminal–Konnektor (SICCT+eHealth): gemSpec_KT auf [gemspec.gematik.de](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_KT/gemSpec_KT_V3.15.0.html)

## Verknüpfungen

- [[eGK]] (Versichertenkarte, wird im Terminal gelesen)
- [[HBA]] (Heilberufsausweis des Arztes, wird im Terminal gesteckt)
- [[SMC-B]] (Institutionskarte der Praxis, permanent im Terminal)
- [[Konnektoren]] (Gegenstelle des Kartenterminals im Netzwerk)
- [[TI-Gateway]] (Alternative zum Konnektor für TI 2.0)
- [[VSDM]] (Stammdatenabgleich via eGK und Terminal)
- [[NFDM]] (Notfalldaten werden über Terminal und Konnektor gelesen)
- [[gematik]] (Zulassungsbehörde für Kartenterminals)
- [[Telematikinfrastruktur]] (Gesamtsystem, in das das Terminal eingebunden ist)

## Quellen

- [Kartenterminals - gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/zugangsdienste/kartenterminals)
- [Smartcards und Kartenterminals - gematik.de](https://www.gematik.de/telematikinfrastruktur/ti-komponenten/kartenterminals)
- [gemSpec_KT - gematik Spezifikation](https://gemspec.gematik.de)
