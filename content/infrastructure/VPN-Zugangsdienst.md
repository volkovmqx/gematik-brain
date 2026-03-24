---
title: VPN-Zugangsdienst
audience: [technical]
tags: [infrastruktur, vpn, netzwerk, zugang]
aliases: [VPN-Zugangsdienst TI, TI-VPN-Zugangsdienst]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, ti-infrastruktur, it-dienstleister]
  interests: [technik]
maturity: wachsend
---

# VPN-Zugangsdienst

Der **VPN-Zugangsdienst** ist eine zugelassene TI-Komponente, die den verschlüsselten VPN-Tunnel zwischen dem [[Konnektoren|Konnektor]] einer Leistungserbringerumgebung und dem zentralen Netz der [[Telematikinfrastruktur]] herstellt.

## Erklärt für Einsteiger

Stell dir die Telematikinfrastruktur wie ein sicheres Firmennetz vor. Damit eine Arztpraxis von außen in dieses Netz kommt, braucht sie einen gesicherten Tunnel. Der VPN-Zugangsdienst ist der Eingang zu diesem Tunnel. Er prüft, ob der Konnektor der Praxis berechtigt ist, und stellt dann die verschlüsselte Verbindung her. Ohne diesen Dienst kann der Konnektor keine TI-Anwendungen nutzen.

## Überblick

Der VPN-Zugangsdienst ist ein Pflichtbestandteil der TI 1.0-Architektur. Er baut den IPsec-VPN-Tunnel zwischen dem Konnektor in der Leistungserbringerumgebung und dem zentralen TI-Netzwerk auf. Ohne aktive VPN-Verbindung können keine TI-Fachdienste genutzt werden.

Laut gematik sind über **19 zugelassene Anbieter** für den VPN-Zugangsdienst zertifiziert. Jeder Konnektor wird bei der Konfiguration einem bestimmten VPN-Zugangsdienst-Anbieter zugewiesen. Die Zulassung durch die [[gematik]] ist Voraussetzung für den Betrieb.

Der VPN-Zugangsdienst ist technisch unabhängig vom [[Konnektoren|Konnektor]] und wird von eigenständigen Anbietern betrieben. Damit wird sichergestellt, dass der Netzwerkzugang unabhängig von der Konnektorhardware ausgetauscht werden kann.

> [!interesse-technik]
> Der VPN-Zugangsdienst nutzt IPsec/IKEv2 für den Tunnel zwischen Konnektor und TI-Zentralnetz. Authentisierung erfolgt zertifikatsbasiert über die TI-[[PKI]] (Gerätezertifikat im Konnektor). Zugelassene Anbieter und ihre Zertifikate sind über das gematik-Fachportal einsehbar. In TI 2.0 wird IPsec durch [[mTLS]] am [[TI-Gateway]] ersetzt. Spezifikation: gemSpec_VPN_Zugangsdienst auf gemspec.gematik.de.

> [!interesse-compliance]
> Jede Leistungserbringerumgebung (Arztpraxis, Krankenhaus, Apotheke) muss einen gematik-zugelassenen VPN-Zugangsdienst nutzen. Die Zulassung des Anbieters ist Pflicht. Betreiber, die ihr System auf das [[TI-Gateway]] migrieren, können den VPN-Zugangsdienst kündigen: Die vollständige Ablösung der VPN-Architektur ist bis 2027 geplant. Für Praxen ohne Hochgeschwindigkeitskonnektor ist der VPN-Zugangsdienst bis zur Migration verpflichtend.

> [!klinik-integration] Klinik-Integration: VPN-Architektur im Krankenhaus
> **Mehrere Standorte:** Krankenhäuser mit mehreren Betriebsstätten, Ambulanzen oder MVZ-Dependancen benötigen pro TI-Anbindungspunkt einen Konnektor. Eine Konnektor-Farm (zentral im Rechenzentrum des Krankenhauses oder beim IT-Dienstleister) ermöglicht es, bis zu mehrere Tausend Kartenterminals über ein zentrales Konnektornetzwerk anzubinden. Fällt ein Konnektor aus, übernehmen andere Konnektoren die angebundenen Terminals automatisch (Hochverfügbarkeitsmodus).
> **Netzwerksegmentierung:** Die TI-Komponenten (Konnektoren, Kartenterminals) sollten in einem dedizierten VLAN betrieben werden, das vom klinischen Netz (KIS-Segment) und dem Büronetz getrennt ist. Dieser Ansatz entspricht BSI-Empfehlungen und reduziert das Angriffspotenzial auf die TI-Komponenten.
> **TI 2.0 / TI-Gateway:** Ab 2027 löst das TI-Gateway den VPN-Zugangsdienst ab. Für Krankenhäuser bedeutet das: Primärsystem (KIS) mit mTLS-Zertifikat direkt an TI-Gateway anbinden, ohne dedizierte Konnektor-Hardware. Planen Sie die Migration frühzeitig ein, insbesondere wenn Konnektorzertifikate in den nächsten Jahren auslaufen. Laufende VPN-Verträge sollten keine Laufzeiten über 2027 hinaus enthalten.

> [!praxis-tipp] Praxis-Tipp: TI-Verbindung prüfen und Ausfälle beheben
> In Ihrer Praxis bedeutet das: Wenn der Konnektor keine TI-Verbindung aufbaut, funktionieren alle TI-Anwendungen nicht: kein E-Rezept, kein KIM, keine ePA.
>
> Erste Schritte bei Verbindungsproblemen:
> 1. Internetverbindung testen: Kann Ihr Router normale Webseiten aufrufen?
> 2. Konnektor-Oberfläche aufrufen (IP-Adresse im Browser eingeben, steht im Installationsprotokoll)
> 3. VPN-Status prüfen: Wird eine aktive Verbindung angezeigt?
> 4. Konnektor neu starten: Ausschalten, 30 Sekunden warten, wieder einschalten
> 5. Immer noch kein VPN? Hotline Ihres VPN-Zugangsdienst-Anbieters anrufen
>
> Legen Sie die Support-Nummer Ihres Anbieters gut sichtbar in der Praxis ab. Im Ausfall sucht niemand die Vertragsunterlagen.

### Abgrenzung von KV-SafeNet

Neben dem TI-VPN-Zugangsdienst existiert das **[[KV-SafeNet]]**, ein von den Kassenärztlichen Vereinigungen betriebenes VPN-Netz für die Abrechnungskommunikation zwischen Praxen und [[Kassenaerztliche-Vereinigung|KVen]]. KV-SafeNet ist kein Teil der Telematikinfrastruktur, wird aber häufig parallel betrieben. Mit der Ausbreitung der TI wird KV-SafeNet schrittweise abgelöst.

### Rolle in TI 2.0

In der TI 2.0 wird das VPN-Modell durch eine [[Zero-Trust|Zero-Trust-Architektur]] abgelöst. Das [[TI-Gateway]] übernimmt die Rolle des Zugangspunkts ohne dedizierte VPN-Infrastruktur. Statt eines VPN-Tunnels authentifiziert sich das Primärsystem über [[mTLS]] (Mutual TLS) direkt beim TI-Gateway. Der VPN-Zugangsdienst wird im Zuge der TI-2.0-Migration schrittweise abgebaut.

> [!praxis-tipp] Praxis-Tipp: VPN-Vertrag und TI-2.0-Migration planen
> Die Hardware-Konnektoren und damit der VPN-Zugangsdienst werden bis 2027 abgebaut. Was das für Ihre Praxis bedeutet:
>
> Handlungsbedarf jetzt:
> - Prüfen Sie die Laufzeit Ihres VPN-Vertrags. Verträge mit Laufzeit über 2027 hinaus sind problematisch.
> - Fragen Sie Ihren PVS- oder ZZVS-Hersteller nach dem Zeitplan für die TI-2.0-Umstellung.
> - Warten Sie auf Mitteilungen Ihrer KV oder KZBV zum Migrationszeitplan.
>
> Keine Panik: Sie müssen noch nichts umstellen. Aber neue VPN-Verträge sollten keine langen Laufzeiten haben.

## Technische Details

### Protokoll und Architektur

Der VPN-Zugangsdienst setzt auf **IPsec** (Internet Protocol Security) für den Tunnel zwischen Konnektor und zentralem Netz. Der Aufbau erfolgt mit IKEv2 (Internet Key Exchange Version 2) für die Schlüsselaushandlung.

Der Konnektor initiiert die Verbindung zum VPN-Zugangsdienst beim Start und nach jedem Verbindungsabbruch. Der Verbindungsaufbau umfasst:

1. Zertifikatsbasierte Authentisierung des Konnektors (mit Gerätezertifikat aus der Telematik-[[PKI]])
2. IKEv2-Schlüsselaustausch
3. Aufbau eines IPsec-Tunnels (ESP-Mode)
4. Zuweisung einer TI-internen IP-Adresse für den Konnektor

> [!dev-quickstart] Dev Quickstart: IPsec/IKEv2-Konfiguration und Konnektor-Status
> Konnektor-ServiceDirectory abrufen (enthält VPN-Verbindungsstatus und Endpunkte):
> ```bash
> curl -sk https://<konnektor-ip>/connector.sds \
>   -H "Content-Type: application/xml"
> # Liefert ServiceDirectory mit VPNZugangsDienst-Status und SOAP-Endpunkten
> ```
> IKEv2-Verbindungsparameter laut gemSpec_VPN_ZugD v1.25:
> - **Ports**: UDP 500 (IKE), UDP 4500 (NAT-T / ESP-in-UDP)
> - **Auth**: `RSA-Sig`, Gerätezertifikat aus Telematik-PKI (C=DE, O=gematik...)
> - **Cipher-Suite**: AES-256-CBC + SHA-256 + DH-Gruppe 14 (2048-bit MODP)
> - **Tunnel-Modus**: ESP (Encapsulating Security Payload), kein AH
>
> Zertifikatsprüfung: TI-PKI Root CA herunterladbar via [gematik Fachportal — Zugelassene Produkte](https://fachportal.gematik.de/service-und-support/zugelassene-produkte)
> Spezifikation: [gemSpec_VPN_ZugD v1.25](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_VPN_ZugD/gemSpec_VPN_ZugD_V1.25.0.html)

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

> [!dev-quickstart] Dev Quickstart: TI-Gateway mTLS-Anbindung (TI 2.0)
> Das TI-Gateway ersetzt den VPN-Tunnel durch direktes mTLS vom Primärsystem:
> ```bash
> # mTLS-Verbindungstest gegen TI-Gateway (Referenzumgebung)
> curl -v --cert client.crt --key client.key --cacert ti-root-ca.crt \
>   https://ti-gateway.ti-dienste.de/.well-known/openid-configuration
> ```
> Zertifikat-Anforderungen (gemF_TI-Gateway v1.7):
> - **Client-Zertifikat**: Ausgestellt von Telematik-PKI (Komponenten-CA), ECC P-256 oder RSA 2048
> - **TLS-Version**: TLS 1.2 minimum, TLS 1.3 empfohlen
> - **SNI**: Pflicht, Host-Header muss Zieldienst-FQDN enthalten
>
> Primärsystem-Authentisierung: Zertifikat wird vom Hersteller über gematik-Zulassungsverfahren beantragt.
> Feature-Spezifikation: [gemF_TI-Gateway v1.7](https://gemspec.gematik.de/docs/gemF/gemF_TI-Gateway/gemF_TI-Gateway_V1.7.0/index.html)

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
