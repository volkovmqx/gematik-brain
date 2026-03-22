---
title: TI-Gateway
audience: [technical, non-technical]
tags: [infrastruktur, ti-2-0, gateway, cloud, konnektor]
aliases: [TI-Gateway, TI 2.0 Gateway, vKON]
maturity: immergruen
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister, arztpraxis, krankenhaus]
  interests: [technik, compliance]
---

# TI-Gateway

Das **TI-Gateway** ist der cloud-basierte Nachfolger des Hardware-[[Konnektoren|Konnektors]] in der [[Telematikinfrastruktur]] 2.0. Es stellt dieselben Basisfunktionen wie ein Konnektor bereit, ohne dass eine physische Box in der Einrichtung stehen muss.

## Erklärt für Einsteiger

Bisher brauchte jede Arztpraxis eine spezielle Hardware-Box, den [[Konnektoren|Konnektor]], um sicher mit dem Gesundheitsnetz verbunden zu sein. Das war teuer und aufwendig zu warten. Das TI-Gateway ist wie ein Konnektor in der Cloud: Dieselben Funktionen laufen jetzt als Software beim Anbieter, und die Praxis braucht nur noch eine Internetverbindung und die richtige Software. Weniger Hardware, weniger Wartungsaufwand, aber dieselbe Sicherheit.

## Überblick

Mit der Weiterentwicklung zur TI 2.0 modernisiert die [[gematik]] den Zugang zur [[Telematikinfrastruktur]] grundlegend. Der Hardware-Konnektor, der seit Jahren in Praxen und Kliniken steht, soll schrittweise durch das TI-Gateway abgelöst werden.

Das TI-Gateway ist kein Gerät, sondern ein Dienst. Zugelassene Anbieter betreiben TI-Gateways in der Cloud. Einrichtungen buchen den Zugang als Service und müssen keine eigene Hardware mehr kaufen, installieren und warten.

Die ersten zugelassenen TI-Gateway-Lösungen sind bereits verfügbar. Der Übergang ist nicht abrupt: [[Konnektoren]] bleiben während der Migrationsphase parallel im Einsatz. Schritt für Schritt werden Anwendungen auf TI 2.0 umgestellt, beginnend mit [[VSDM]] 2.0 (Start: 30. Juni 2026).

Das TI-Gateway ist eine Schlüsselkomponente der TI 2.0 und direkt mit deren zentralen Architekturprinzipien verbunden: [[Zero-Trust]]-Architektur und [[mTLS]]-Verschlüsselung.

## Technische Details

### Kernkomponenten

Das TI-Gateway besteht aus zwei zentralen Teilen:

1. **Virtueller Konnektor (vKON)**: Implementiert die Konnektor-Funktionalität als Software-Service. Übernimmt kryptografische Operationen, Kartendienste und Schnittstellenlogik.
2. **Integrierter [[VPN-Zugangsdienst]]**: Der VPN-Tunnel zur TI ist im TI-Gateway bereits eingebaut. Beim klassischen Konnektor war der VPN-Zugangsdienst ein separater Dienst.

### Schnittstellen zum Primärsystem

Das TI-Gateway unterstützt bestehende Primärsystem-Schnittstellen (SOAP-Webservices), die auch der Konnektor verwendet. So können [[PVS|Praxisverwaltungssysteme (PVS)]], [[KIS|Krankenhausinformationssysteme (KIS)]] und [[AVS|Apothekenverwaltungssysteme (AVS)]] ohne vollständige Neuimplementierung auf das TI-Gateway umsteigen.

Neue Schnittstellen nutzen [[gRPC]], wie es für TI 2.0 vorgesehen ist.

### mTLS-Anforderung

Ein wichtiger Unterschied zum klassischen Konnektor: Das Primärsystem muss **mTLS (mutual TLS)** konfigurieren. Beim klassischen Konnektor stellte die Hardware-Box die vertrauenswürdige Verbindung her. Beim TI-Gateway authentisiert sich das Primärsystem aktiv gegenüber dem Gateway, und das Gateway authentisiert sich gegenüber dem Primärsystem. Beide Seiten müssen gültige Zertifikate vorlegen.

### Netzwerkanforderungen

- MTU-Reduzierung auf 1400 für IPv6 mit Dual-Stack-Lite wird empfohlen.
- Ports variieren je nach Kartenterminal-Konfiguration.
- Eine stabile Internetverbindung ersetzt den dedizierten TI-Anschluss.

### Verantwortung des Anbieters

Im TI-Gateway-Modell trägt der Anbieter die Betriebsverantwortung für die TI-Zugangsinfrastruktur. Das umfasst auch datenschutzrechtliche Pflichten. Einrichtungen, die ein TI-Gateway nutzen, übertragen also einen Teil ihrer Infrastrukturverantwortung an den Dienstleister.

### Zusätzliche geplante Dienste

Laut gematik sollen künftig weitere Dienste über das TI-Gateway angeboten werden, darunter Fernsignatur-Dienste, die die qualifizierte elektronische Signatur ([[QES]]) ohne lokale Kartenlesegeräte ermöglichen.

### Abgrenzung zum Konnektor

| Merkmal | [[Konnektoren|Konnektor]] | TI-Gateway |
|---|---|---|
| Betriebsform | Hardware vor Ort | Cloud-Service |
| VPN-Zugang | Separater Dienst | Integriert |
| Wartung | Einrichtung | Anbieter |
| Schnittstelle | SOAP, LDAP | SOAP (kompatibel), gRPC |
| Authentisierung | Hardware-basiert | mTLS |

## Verknüpfungen

- Ersetzt den [[Konnektoren|Konnektor]] in der TI 2.0
- Basiert auf [[Zero-Trust]]-Architektur
- Erste Anwendung auf TI 2.0-Basis ist [[VSDM]] 2.0
- Authentisierung über [[IDP]]-Dienst und [[mTLS]]
- Bestandteil der [[Telematikinfrastruktur]] 2.0

### Anbieter und Wettbewerb

Zugelassene TI-Gateway-Anbieter konkurrieren um Einrichtungen als Kunden. Aktive Anbieter (Stand März 2026): **RISE**, **Arvato Systems**, **Akquinet** sowie die **Deutsche Telekom** mit dem Produkt **TI-Connect**.

Telekom **TI-Connect** (seit Anfang 2026): Cloud-basiertes TI-Gateway ohne lokalen Konnektor. Einrichtungen verbinden sich per VPN mit einem [[Highspeed-Konnektor]] (HSK) im Telekom-Rechenzentrum. TI-Connect richtet sich insbesondere an größere Einrichtungen, die keine eigene Hardware betreiben wollen.

### Nutzungszahlen

Laut TI-Dashboard (Stand Oktober 2025) sind rund **22.000 virtuelle Konnektor-Instanzen** über das TI-Gateway angebunden. Die Zahl wächst kontinuierlich mit dem schrittweisen Übergang von Hardware-Konnektoren auf cloud-basierte Lösungen.

### RISE-Ausfall März 2026

Am **3. März 2026** fiel das TI-Gateway von **RISE** aus. Alle über RISE angebundenen Einrichtungen verloren den Zugang zur [[Telematikinfrastruktur]]. Betroffen waren [[E-Rezept]], [[ePA]], [[VSDM]] und [[KIM]]. Weitere Ausfälle folgten am 4. und 5. März. Da kein Offline-Fallback für TI-Anwendungen existiert, mussten Apotheken Patienten ohne Rezeptabgabe wegschicken. Der Ausfall verdeutlichte die Abhängigkeit von einzelnen TI-Gateway-Anbietern und die fehlende Redundanz im TI-2.0-Modell.

## Quellen

- [TI-Zugang - Fachportal gematik](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [TI 2.0 - gematik.de](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [gemSpec_TI-Gateway - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_TI-Gateway/latest/)
- [TI-Zugang_25_3 - Spezifikationsrelease (27. Januar 2026)](https://gemspec.gematik.de/releases/TI-Zugang_25_3/)
