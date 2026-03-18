---
title: VPN-Zugangsdienst
audience: [technical]
tags: [infrastruktur, vpn, netzwerk, zugang]
aliases: [VPN-Zugangsdienst TI, TI-VPN-Zugangsdienst]
---

# VPN-Zugangsdienst

Der **VPN-Zugangsdienst** ist eine zugelassene TI-Komponente, die den verschlüsselten VPN-Tunnel zwischen dem [[Konnektoren|Konnektor]] einer Leistungserbringerumgebung und dem zentralen Netz der [[Telematikinfrastruktur]] herstellt.

## Erklärt für Einsteiger

Stell dir die Telematikinfrastruktur wie ein sicheres Firmennetz vor. Damit eine Arztpraxis von außen in dieses Netz kommt, braucht sie einen gesicherten Tunnel. Der VPN-Zugangsdienst ist der Eingang zu diesem Tunnel. Er prüft, ob der Konnektor der Praxis berechtigt ist, und stellt dann die verschlüsselte Verbindung her. Ohne diesen Dienst kann der Konnektor keine TI-Anwendungen nutzen.

## Überblick

Der VPN-Zugangsdienst ist ein Pflichtbestandteil der TI 1.0-Architektur. Er baut den IPsec-VPN-Tunnel zwischen dem Konnektor in der Leistungserbringerumgebung und dem zentralen TI-Netzwerk auf. Ohne aktive VPN-Verbindung können keine TI-Fachdienste genutzt werden.

Laut gematik sind über **19 zugelassene Anbieter** für den VPN-Zugangsdienst zertifiziert. Jeder Konnektor wird bei der Konfiguration einem bestimmten VPN-Zugangsdienst-Anbieter zugewiesen. Die Zulassung durch die [[gematik]] ist Voraussetzung für den Betrieb.

Der VPN-Zugangsdienst ist technisch unabhängig vom [[Konnektoren|Konnektor]] und wird von eigenständigen Anbietern betrieben. Damit wird sichergestellt, dass der Netzwerkzugang unabhängig von der Konnektorhardware ausgetauscht werden kann.

### Abgrenzung von KV-SafeNet

Neben dem TI-VPN-Zugangsdienst existiert das **KV-SafeNet**, ein von den Kassenärztlichen Vereinigungen betriebenes VPN-Netz für die Abrechnungskommunikation zwischen Praxen und [[Kassenaerztliche-Vereinigung|KVen]]. KV-SafeNet ist kein Teil der Telematikinfrastruktur, wird aber häufig parallel betrieben. Mit der Ausbreitung der TI wird KV-SafeNet schrittweise abgelöst.

### Rolle in TI 2.0

In der TI 2.0 wird das VPN-Modell durch eine [[Zero-Trust|Zero-Trust-Architektur]] abgelöst. Das [[TI-Gateway]] übernimmt die Rolle des Zugangspunkts ohne dedizierte VPN-Infrastruktur. Statt eines VPN-Tunnels authentifiziert sich das Primärsystem über [[mTLS]] (Mutual TLS) direkt beim TI-Gateway. Der VPN-Zugangsdienst wird im Zuge der TI-2.0-Migration schrittweise abgebaut.

## Technische Details

### Protokoll und Architektur

Der VPN-Zugangsdienst setzt auf **IPsec** (Internet Protocol Security) für den Tunnel zwischen Konnektor und zentralem Netz. Der Aufbau erfolgt mit IKEv2 (Internet Key Exchange Version 2) für die Schlüsselaushandlung.

Der Konnektor initiiert die Verbindung zum VPN-Zugangsdienst beim Start und nach jedem Verbindungsabbruch. Der Verbindungsaufbau umfasst:

1. Zertifikatsbasierte Authentisierung des Konnektors (mit Gerätezertifikat aus der Telematik-[[PKI]])
2. IKEv2-Schlüsselaustausch
3. Aufbau eines IPsec-Tunnels (ESP-Mode)
4. Zuweisung einer TI-internen IP-Adresse für den Konnektor

### Zulassung und Betrieb

Die [[gematik]] definiert die Sicherheitsanforderungen und führt das Zulassungsverfahren durch. Anbieter müssen unter anderem:

- Redundante Infrastruktur mit definierten Verfügbarkeiten (99,9 % SLA) betreiben
- Intrusion Detection und regelmäßige Sicherheitsaudits nachweisen
- Ihre Systeme regelmäßig durch das [[BSI]] akkreditieren lassen

Der Konnektor kommuniziert über das Internet mit dem VPN-Zugangsdienst. Beim Verbindungsaufbau werden die Zertifikate über die [[PKI]] der Telematikinfrastruktur geprüft.

### Übergang zu TI 2.0

Im Rahmen der TI-2.0-Migration:

- Das [[TI-Gateway]] bietet einen direkten, zertifikatsbasierten Zugang über [[mTLS]] ohne VPN-Tunnel.
- Bestehende Konnektoren können übergangsweise weiterhin VPN-Zugangsdienste nutzen.
- Die vollständige Ablösung der VPN-basierten Zugangsarchitektur ist bis **2027** geplant, parallel zur Abschaltung der Hardware-Konnektoren.

## Verknüpfungen

- [[Konnektoren]] (nutzen den VPN-Zugangsdienst für die TI-Anbindung)
- [[Telematikinfrastruktur]] (zentrales Netz, zu dem der VPN-Zugangsdienst den Tunnel aufbaut)
- [[TI-Gateway]] (Nachfolger in TI 2.0, ersetzt den VPN-basierten Zugang)
- [[mTLS]] (Technologie, die den VPN-Tunnel in TI 2.0 ersetzt)
- [[Zero-Trust]] (Architekturprinzip der TI 2.0)
- [[PKI]] (Zertifikatsinfrastruktur für die Authentisierung im VPN-Verbindungsaufbau)
- [[gematik]] (erteilt die Zulassung für VPN-Zugangsdienst-Anbieter)

## Quellen

- [gematik Fachportal: VPN-Zugangsdienst](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [gematik: TI 2.0 – Übergang zu Zero Trust](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [gematik: Zugelassene Produkte und Anbieter](https://fachportal.gematik.de/service-und-support/zugelassene-produkte)
