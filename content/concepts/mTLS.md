---
title: mTLS - Mutual TLS
audience: [technical]
tags: [konzept, sicherheit, tls, authentisierung, ti-2-0, kryptografie]
aliases: [mTLS, Mutual TLS, gegenseitiges TLS, beidseitige TLS-Authentisierung]
---

# mTLS - Mutual TLS

**mTLS (Mutual TLS)** ist eine Erweiterung des TLS-Protokolls, bei der sich nicht nur der Server, sondern auch der Client mit einem Zertifikat authentisiert.

## Erklärt für Einsteiger

Wenn du eine Website im Browser öffnest, zeigt dir die Website ihr Zertifikat. Dein Browser prüft, ob das Zertifikat echt ist. Aber die Website weiß nicht, wer du bist. Bei mTLS ist das anders: Beide Seiten zeigen ein Zertifikat. Der Server prüft das Zertifikat des Clients, und der Client prüft das Zertifikat des Servers. So kennen sich beide sicher, bevor auch nur ein Byte an echten Daten ausgetauscht wird. Es ist wie ein gegenseitiger Ausweis-Check an einer Eingangstür.

## Überblick

Normales TLS (Transport Layer Security) schützt die Verbindung durch Verschlüsselung und stellt sicher, dass der Client mit dem richtigen Server spricht. Die Identität des Clients wird aber bei Standard-TLS nicht auf Protokollebene geprüft. Stattdessen passiert das meist auf Anwendungsebene, zum Beispiel durch Benutzername und Passwort.

mTLS erweitert dieses Modell: Beide Seiten der Verbindung müssen ein gültiges [[X.509]]-Zertifikat vorlegen und beweisen, dass sie den zugehörigen privaten Schlüssel besitzen. Nur wenn beide Seiten erfolgreich validiert wurden, kommt die Verbindung zustande.

mTLS ist kein neues Protokoll, sondern eine Konfigurationsoption innerhalb von TLS (definiert seit TLS 1.0). Die Spezifikation für zertifikatsgebundene Access Tokens in Verbindung mit mTLS ist in RFC 8705 festgelegt.

### Relevanz in der TI 2.0

In der [[Telematikinfrastruktur]] 2.0 ist mTLS ein zentrales Sicherheitsprinzip. Es ersetzt das bisherige Modell, bei dem ein [[Konnektoren|Konnektor]] als vertrauenswürdige Hardware-Grenze die sichere Verbindung hergestellt hat.

Mit dem [[TI-Gateway]] entfällt die Hardware-Box in der Praxis. Stattdessen muss das Primärsystem ([[PVS]], [[KIS]], AVS) selbst per mTLS eine gegenseitige Authentisierung mit dem TI-Gateway durchführen. Das Gateway prüft das Zertifikat des Primärsystems, und das Primärsystem prüft das Zertifikat des Gateways.

mTLS ist damit ein Kernbestandteil der [[Zero-Trust]]-Architektur der TI 2.0. Kein Gerät und kein Dienst erhält automatisch Vertrauen, nur weil es sich im selben Netz befindet.

## Technische Details

### TLS-Handshake mit Client-Authentisierung

Im Standard-TLS-Handshake sendet der Server sein Zertifikat. Der Client prüft es und baut die verschlüsselte Verbindung auf. Der Server weiß nicht, mit wem er spricht.

Bei mTLS werden zusätzliche Schritte eingefügt:

1. Server sendet sein Zertifikat (wie bei Standard-TLS).
2. Server sendet eine `CertificateRequest`-Nachricht und fordert damit ein Client-Zertifikat an.
3. Client sendet sein X.509-Zertifikat.
4. Client sendet eine `CertificateVerify`-Nachricht: eine kryptografische Signatur über die bisherigen Handshake-Daten, erstellt mit dem privaten Schlüssel des Clients.
5. Server verifiziert die Signatur. Nur wenn sie gültig ist, kommt die Verbindung zustande.

Schritt 4 beweist, dass der Client tatsächlich den privaten Schlüssel zu dem vorgelegten Zertifikat besitzt. Ein Zertifikat allein kann nicht missbraucht werden.

### X.509-Zertifikate in der TI

In der [[Telematikinfrastruktur]] stammen Zertifikate aus der [[PKI|TI-PKI]]. Jede zugelassene Komponente erhält ein Zertifikat, das von einer Zertifizierungsstelle der gematik ausgestellt wurde. Dies gilt auch für [[TI-Gateway]]-Instanzen und die Primärsysteme, die sich dagegen authentisieren.

Die Gültigkeitsdauer und die zulässigen Algorithmen sind in den gematik-Spezifikationen festgelegt. Seit dem 1. Januar 2026 ist ECDSA (ECC 256) Pflicht.

### Zertifikatsgebundene Tokens (RFC 8705)

mTLS ermöglicht nicht nur Verbindungsauthentisierung, sondern auch zertifikatsgebundene Tokens. Ein [[IDP|Identity Provider]] stellt einen Access Token aus, der den SHA-256-Fingerabdruck des Client-Zertifikats enthält (`x5t#S256`). Der Empfänger-Dienst prüft bei jeder Anfrage, ob das im Token hinterlegte Zertifikat mit dem über mTLS vorgelegten Zertifikat übereinstimmt. So kann ein gestohlener Token ohne das passende Zertifikat nicht verwendet werden.

Diese Methode wird in der TI für die Absicherung von [[Fachdienst]]-Zugriffen eingesetzt.

### Vergleich: TLS vs. mTLS

| Merkmal | Standard-TLS | mTLS |
|---|---|---|
| Server-Authentisierung | Ja | Ja |
| Client-Authentisierung | Nein (Protokollebene) | Ja |
| Grundlage | Server-Zertifikat | Beide Zertifikate |
| Konfigurationsaufwand | Gering | Höher |
| Einsatz | Öffentliche Webseiten | Service-zu-Service, TI-Komponenten |

### mTLS in der TI-Praxis

Das [[TI-Gateway]] erfordert mTLS zwischen Primärsystem und Gateway. Der klassische [[Konnektoren|Konnektor]] erforderte das nicht, weil er physisch vor Ort stand und die Verbindung über ein lokales Netz aufgebaut wurde. Beim TI-Gateway läuft die Verbindung über das Internet, weshalb mTLS notwendig ist.

Primärsystem-Hersteller müssen ihre Software so anpassen, dass sie TLS-Client-Zertifikate verwalten und bei der Verbindungsaufnahme vorlegen können. Die Zertifikate werden von der gematik-[[PKI]] ausgestellt und müssen regelmäßig erneuert werden.

## Verknüpfungen

- [[TI-Gateway]] (verlangt mTLS für Verbindungen vom Primärsystem)
- [[Telematikinfrastruktur]] (TI 2.0 basiert auf mTLS als Kernsicherheitsmechanismus)
- [[Zero-Trust]] (mTLS ist ein Baustein der Zero-Trust-Architektur)
- [[PKI]] (stellt die Zertifikate aus, die bei mTLS verwendet werden)
- [[IDP]] (stellt zertifikatsgebundene Tokens gemäß RFC 8705 aus)
- [[Konnektoren]] (bisherige Hardware-Alternative, die mTLS-Anforderung nicht hatte)
- [[TI-Federation]] (nutzt ebenfalls gegenseitige Authentisierung zwischen IDPs und Diensten)

## Quellen

- [RFC 8705: OAuth 2.0 Mutual-TLS Client Authentication and Certificate-Bound Access Tokens](https://www.rfc-editor.org/rfc/rfc8705)
- [gemSpec_TI-Gateway - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_TI-Gateway/latest/)
- [TI 2.0 - gematik.de](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
