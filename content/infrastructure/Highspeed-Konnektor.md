---
title: Highspeed-Konnektor
audience: [technical]
tags: [infrastruktur, konnektor, hardware, krankenhaus, mvz]
aliases: [HSK]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, hersteller, ti-infrastruktur]
  interests: [technik]
maturity: wachsend
---

# Highspeed-Konnektor

Der **Highspeed-Konnektor (HSK)** ist eine skalierbare Variante des [[Konnektoren|Konnektors]] für größere Einrichtungen wie Krankenhäuser und [[MVZ]]. Er unterstützt höhere Durchsatzraten, mehr gleichzeitige Kartenterminals und bildet die technische Basis für das [[HSM-B]]-Pilotprojekt.

## Erklärt für Einsteiger

Ein normaler Konnektor ist wie ein WLAN-Router für eine Wohnung: Er verbindet ein paar Geräte mit dem Internet. Ein Highspeed-Konnektor ist wie ein industrieller Router für ein Bürogebäude mit hundert Mitarbeitern. Im Krankenhaus gibt es nicht zwei oder drei Ärzte, sondern Hunderte. Alle brauchen gleichzeitig Zugang zum sicheren Gesundheitsnetz. Der Highspeed-Konnektor kann das leisten, weil er deutlich leistungsfähiger und für den Dauerbetrieb ausgelegt ist.

## Überblick

Für kleine Einrichtungen (Einzelpraxen, Apotheken) reicht ein Standard-Konnektor. Ab einer bestimmten Größe, insbesondere für Krankenhäuser und größere [[MVZ]], ist der HSK die wirtschaftlichere und technisch passendere Wahl.

Der HSK ermöglicht:
- Anbindung vieler Arztarbeitsplätze und Kartenterminals an einem zentralen Zugang
- Höhere Verfügbarkeit durch redundante Konfigurationsmöglichkeiten
- Hosting von [[HSM-B]] (Hardware Security Module Typ B) als digitaler Ersatz für die physische [[SMC-B]]-Karte
- Unterstützung von mehr gleichzeitigen TI-Transaktionen als ein Standard-Konnektor

Hersteller des HSK ist im Produktivbetrieb **RISE GmbH** (im Auftrag der gematik). Der HSK ist nach der Produkttyp-Version (PTV) **2.1.1** zugelassen und muss wie alle Konnektoren von der [[gematik]] zertifiziert sein.

### Abgrenzung zum Standard-Konnektor

| Merkmal | Standard-Konnektor | Highspeed-Konnektor |
|---|---|---|
| Zielgruppe | Einzelpraxis, Apotheke | Krankenhaus, MVZ, Pflegeeinrichtung |
| Gleichzeitige Terminals | begrenzt (ca. 5) | viele (skalierbar) |
| HSM-B-Unterstützung | nein | ja (Pilotbetrieb) |
| Form | Desktop/Tischgerät | Server-Rack-Einheit |
| Betriebsmodell | On-Premise | On-Premise oder cloud-gehostet |

> [!praxis-tipp] Praxis-Tipp: Wann lohnt sich der Highspeed-Konnektor für eine Praxis?
> Für eine Einzelpraxis oder kleine Zahnarztpraxis ist der Standard-Konnektor ausreichend. Der HSK lohnt sich, wenn Sie:
>
> - ein MVZ mit 5 oder mehr Behandlern betreiben,
> - mehrere Standorte zentral anbinden wollen,
> - oder häufige Ausfälle des Standard-Konnektors durch gleichzeitige Zugriffe haben.
>
> Wechselaufwand: Planen Sie ca. 1 Tag für die Umstellung durch Ihren IT-Dienstleister. Ihr PVS oder KIS muss auf die neue Adresse des HSK umgestellt werden. Bestehende SMC-B-Karten können zunächst weiter genutzt werden.
>
> Kosten: Der HSK wird als Managed Service von RISE GmbH bereitgestellt. Fragen Sie Ihren TI-Dienstleister nach aktuellen Betriebskosten.

## Technische Details

> [!interesse-technik]
> Der HSK bietet eine SOAP-Webservice-Schnittstelle (IConnector_v2) kompatibel zu Standard-Konnektoren, sodass KIS/PVS-Systeme ohne Codeänderungen wechseln können. Zusätzlich unterstützt PTV 2.1.1 gRPC-Endpunkte für TI-2.0-Anwendungen. Im Cloud-Betrieb (RISE GmbH) erhält das Primärsystem eine private VPN-Verbindung zum cloud-gehosteten HSK. Das HSM-B-Pilotprojekt (Produktivstart März 2026) ersetzt die physische SMC-B durch ein kryptografisches Modul im HSK, was wartungsarme Mehrstandort-Deployments ermöglicht. Technische Spezifikation: gemSpec_Kon (Highspeed-Konnektor-Profil) auf dem gematik Fachportal.

### Architektur

Der HSK ist als zentraler TI-Zugangspunkt für die gesamte Einrichtung konzipiert. Er integriert die Funktion mehrerer Standard-Konnektoren in einem einzigen, hochverfügbaren System:

- Zentraler VPN-Tunnel zur [[Telematikinfrastruktur]] (über [[VPN-Zugangsdienst]])
- Verwaltung mehrerer gleichzeitiger Kartenterminal-Sessions
- SOAP-Webservice-Schnittstelle für Primärsysteme ([[KIS]], [[PVS]])
- Unterstützung von gRPC für TI-2.0-Anwendungen

> [!dev-quickstart] Dev Quickstart: Konnektor-SOAP vom KIS aus aufrufen
> Der HSK exponiert dieselben SOAP-Endpunkte wie ein Standard-Konnektor. KIS/PVS-Systeme können ohne Codeänderungen wechseln:
> ```
> # Kartenterminals abfragen (EventService)
> POST http://<hsk-ip>:443/ws/EventService
> Content-Type: text/xml; charset=utf-8
> SOAPAction: "http://ws.gematik.de/conn/EventService/v7.2#GetCards"
>
> # QES-Signatur (SignatureService, z.B. für eAU)
> POST http://<hsk-ip>:443/ws/SignatureService
> Content-Type: text/xml; charset=utf-8
> SOAPAction: "http://ws.gematik.de/conn/SignatureService/v7.5#SignDocument"
> ```
> Jeder SOAP-Request braucht einen `ConnectorContext`-Header:
> ```xml
> <ConnectorContext xmlns="http://ws.gematik.de/conn/ConnectorContext/v2.0">
>   <MandantId>Mandant1</MandantId>
>   <ClientSystemId>KIS</ClientSystemId>
>   <WorkplaceId>Station3</WorkplaceId>
> </ConnectorContext>
> ```
> Im Cloud-Betrieb (RISE GmbH) ist `<hsk-ip>` die IP-Adresse des bereitgestellten VPN-Tunnels.
> - WSDL-Dateien aller Services: [gematik/api-telematik](https://github.com/gematik/api-telematik) (Branch OPB5, Ordner `conn/`)
> - HSK-Featurespezifikation: [gemF_Highspeed-Konnektor v1.8](https://gemspec.gematik.de/docs/gemF/gemF_Highspeed-Konnektor/gemF_Highspeed-Konnektor_V1.8.0/index.html)
> - Produkttyp-Steckbrief: [gemProdT_Kon_Highspeed](https://gemspec.gematik.de/docs/gemProdT/gemProdT_Kon_Highspeed/)

> [!klinik-integration] Klinik-Integration: HSK-Deployment im Krankenhaus
> **Architektur:** Der HSK ersetzt im Krankenhaus typischerweise mehrere Standard-Konnektoren, die je Funktionsbereich (Ambulanz, Stationsarbeitsplätze, Notaufnahme) betrieben wurden. Zentrale Konnektorinfrastruktur reduziert Administrationsaufwand, erfordert aber sorgfältige Netzwerksegmentierung: TI-Traffic muss vom klinischen Netz (VLAN für KIS, Medizingeräte) isoliert bleiben.
> **Verfügbarkeit:** Für 24/7-Betrieb empfiehlt sich ein redundanter HSK-Betrieb (Active-Standby). Ein Ausfall des HSK blockiert alle TI-abhängigen Prozesse: VSDM-Prüfung bei Aufnahme, ePA-Zugriff, KIM-Kommunikation, eAU und E-Rezept. Planen Sie ein dokumentiertes Ausfallszenario (Notaufnahme-Prozesse ohne TI-Konnektivität) im Notfallbetriebskonzept ein.
> **KIS-Anbindung:** KIS-Systeme (SAP ISH, Dedalus ORBIS, iMedOne) sprechen den HSK über die SOAP-Webservice-Schnittstelle (IConnector_v2) an. Bei einem Wechsel von Standard-Konnektoren auf HSK ist keine KIS-Codeänderung erforderlich, aber ein Regressionstest aller TI-Workflows (VSDM, ePA, eAU, E-Rezept) vor der Produktivschaltung ist erforderlich.

### HSM-B-Integration

Der HSK ist die einzige Konnektor-Variante, die das [[HSM-B]] (Hardware Security Module Typ B) hosten kann. Dabei wird die institutionelle Identität (bisher auf der physischen [[SMC-B]]-Karte) direkt im HSK als kryptografisches Modul hinterlegt. Der HSK kann HSM-B und [[SMC-B]] **parallel betreiben**, was eine schrittweise Migration ohne Betriebsunterbrechung ermöglicht.

> [!dev-quickstart] Dev Quickstart: HSM-B-Status per Konnektor-SOAP abfragen
> Das Vorhandensein und den Status des HSM-B im HSK kann das Primärsystem über den CardService abfragen:
> ```xml
> POST http://<hsk-ip>:443/ws/CardService
> Content-Type: text/xml; charset=utf-8
> SOAPAction: "http://ws.gematik.de/conn/CardService/v8.1#GetCards"
>
> <soap:Body>
>   <GetCards xmlns="http://ws.gematik.de/conn/CardService/v8.1">
>     <ConnectorContext xmlns="http://ws.gematik.de/conn/ConnectorContext/v2.0">
>       <MandantId>Mandant1</MandantId>
>       <ClientSystemId>KIS</ClientSystemId>
>       <WorkplaceId>Admin</WorkplaceId>
>     </ConnectorContext>
>     <CardType>SMC-B</CardType>
>   </GetCards>
> </soap:Body>
> ```
> Im Response liefert `CardHandle` + `CardType` + `InsertTime` alle aktiven Karten (SMC-B und HSM-B als virtuelle Karte).
> - HSM-B-Pilotdokumentation: [gematik Newsroom (März 2026)](https://www.gematik.de/newsroom/news-detail/gemeinsames-pilotprojekt-zur-kartenlosen-institutions-identitaet-hsm-b-im-highspeed-konnektor)
> - gemSpec_Kon (CardService-Interface): [gemSpec_Kon aktuell](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/latest/)

> [!praxis-tipp] Praxis-Tipp: SMC-B-Ablaufdaten vor HSM-B-Migration prüfen
> Das HSM-B-Pilotprojekt läuft seit März 2026. Wenn Ihr TI-Dienstleister eine HSM-B-Migration anbietet, prüfen Sie vorher den Ablauf Ihrer physischen SMC-B-Karte.
>
> Empfehlung: Läuft Ihre SMC-B in den nächsten 12 Monaten ab, kann eine kombinierte Umstellung auf HSK mit HSM-B wirtschaftlicher sein als eine Kartenerneuerung. Fragen Sie Ihren Dienstleister nach einem Vergleichsangebot.
>
> Wichtig: Während der Migration können HSM-B und SMC-B parallel betrieben werden. Es gibt keine Unterbrechung des Praxisbetriebs.

> [!klinik-integration] Klinik-Integration: HSM-B-Migration im Krankenhausverbund
> **Mehrstandort-Betrieb:** Für Krankenhausverbünde mit mehreren Standorten ist das HSM-B im cloud-gehosteten HSK besonders relevant. Statt an jedem Standort eine physische SMC-B-Karte zu verwalten (Kartenaustausch, Ablauf, Kurierlogistik), liegt die institutionelle Identität zentral im HSK. Das spart Aufwand und reduziert das Risiko von TI-Ausfällen durch abgelaufene Karten.
> **Deployment-Hinweis:** Die HSM-B-Migration läuft schrittweise: Parallelbetrieb von SMC-B und HSM-B ist möglich. Vor der Migration sollten alle SMC-B-Ablaufdaten im Ticket-System erfasst sein. Koordinieren Sie die Migration mit dem TI-Dienstleister und dem KIS-Anbieter, da Zertifikatswechsel in der TI Auswirkungen auf laufende Sessions haben können.
> **Zertifizierungsstatus:** Der HSK (PTV 2.1.1) ist gematik-zertifiziert. Das HSM-B befindet sich seit März 2026 im Produktivpilot. Vor einem Rollout in der Breite: Prüfen Sie den aktuellen Freigabestatus des HSM-B im gematik Fachportal.

### Cloud-Hosting-Modell

Im Gegensatz zum Standard-Konnektor, der immer On-Premise betrieben werden muss, kann der HSK auch als cloud-gehostete Lösung betrieben werden. Das ermöglicht größeren Einrichtungen mit mehreren Standorten (z.B. Krankenhausverbünde, überregionale MVZ) einen zentralisierten TI-Zugang.

Das Cloud-Hosting-Modell des HSK bildet eine konzeptionelle Brücke zum [[TI-Gateway]]: Beide Ansätze entkoppeln den TI-Zugang von der lokalen Hardware. Der Unterschied liegt im Zertifizierungsweg und in der Zielgruppe.

### PTV 2.1.1

Der Produkttyp-Version (PTV) 2.1.1 ist die aktuelle Zulassungsstufe des HSK. PTV-Versionen definieren den Funktionsumfang, den Sicherheitsanforderungen und die Kompatibilitätsstufe eines Konnektors in der TI. Die [[gematik]] veröffentlicht PTV-Anforderungen als Teil der Konnektor-Spezifikation (gemSpec_Kon).

## Verknüpfungen

- [[Konnektoren]] (Standard-Konnektor als Basis; HSK ist dessen skalierbare Variante)
- [[HSM-B]] (Hardware Security Module Typ B; wird im HSK gehostet)
- [[SMC-B]] (physische Karte, die vom HSM-B im HSK abgelöst werden soll)
- [[TI-Gateway]] (cloud-native Alternative; konzeptionell verwandt mit cloud-gehostetem HSK)
- [[MVZ]] (Hauptanwendungsfall für den HSK neben Krankenhäusern)
- [[KIS]] (Primärsystem im Krankenhaus, das über HSK auf die TI zugreift)
- [[Telematikinfrastruktur]] (Netz, zu dem der HSK den Zugang herstellt)
- [[gematik]] (Zulassungsbehörde für den HSK)

## Quellen

- [gematik: HSM-B Pilotprojekt im Highspeed-Konnektor (März 2026)](https://www.gematik.de/newsroom/news-detail/gemeinsames-pilotprojekt-zur-kartenlosen-institutions-identitaet-hsm-b-im-highspeed-konnektor)
- [Konnektor-Zulassung – gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [gemSpec_Kon: Konnektor-Spezifikation – gematik](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/)
