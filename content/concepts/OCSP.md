---
title: OCSP
audience: [technical]
tags: [concepts, PKI, kryptographie, zertifikate, sicherheit]
aliases: [Online Certificate Status Protocol, Zertifikatsstatus-Protokoll]
---

# OCSP

Protokoll zur Echtzeit-Abfrage des Sperrstatus eines X.509-Zertifikats direkt beim Aussteller, definiert in RFC 6960.

## Erklärt für Einsteiger

Wenn du einer Person vertraust, weil sie dir einen Ausweis zeigt, möchtest du manchmal sicherstellen, dass dieser Ausweis nicht gesperrt wurde. OCSP macht genau das für digitale Zertifikate: Es fragt beim Aussteller an, ob ein bestimmtes Zertifikat noch gültig ist. Das ist schneller als das Durchsuchen einer langen Liste gesperrter Ausweise.

## Überblick

OCSP (Online Certificate Status Protocol) ist ein Protokoll aus der Infrastruktur für öffentliche Schlüssel ([[PKI]]). Es ermöglicht einem Client, den aktuellen Sperrstatus eines [[PKI|X.509]]-Zertifikats bei einer Zertifizierungsstelle oder einem beauftragten OCSP-Responder abzufragen. Der Standard ist in RFC 6960 spezifiziert und ersetzt in vielen Szenarien die älteren Certificate Revocation Lists (CRL).

In der [[Telematikinfrastruktur]] (TI) ist OCSP ein zentraler Mechanismus zur Zertifikatsprüfung. [[Konnektoren]] prüfen bei jeder Kommunikation die Gültigkeit von Zertifikaten auf [[eGK]], [[HBA]] und [[SMC-B]] über OCSP-Anfragen an die [[TSP]]-Responder. Die gematik-Spezifikation gemKPT_PKI_TIP beschreibt OCSP als Standardprotokoll für den Zertifikatsstatus und definiert Optimierungsoptionen für die TI-Architektur.

Der Vorteil von OCSP gegenüber CRL liegt in der Aktualität: CRLs müssen heruntergeladen und lokal gecacht werden und können veraltet sein. OCSP liefert eine Echtzeitauskunft direkt für das angefragte Zertifikat.

## Technische Details

### Ablauf einer OCSP-Abfrage

1. Der Client erstellt einen `OCSPRequest` mit der Identifikation des zu prüfenden Zertifikats.
2. Der Request wird per HTTP GET oder POST an den OCSP-Responder gesendet. Die Responder-URL steht im Zertifikat selbst im Feld `AuthorityInfoAccess`.
3. Der OCSP-Responder antwortet mit einem signierten `OCSPResponse`.

### Nachrichtenformat

Nachrichten werden in ASN.1 kodiert und über HTTP transportiert. Der Content-Type bei POST-Anfragen lautet `application/ocsp-request`, Antworten verwenden `application/ocsp-response`.

**OCSPRequest**: Enthält ein oder mehrere `CertID`-Objekte mit:
- `hashAlgorithm`: verwendeter Hash-Algorithmus (typisch SHA-1 oder SHA-256)
- `issuerNameHash`: Hash des Distinguished Name der ausstellenden CA
- `issuerKeyHash`: Hash des öffentlichen Schlüssels der ausstellenden CA
- `serialNumber`: Seriennummer des zu prüfenden Zertifikats

**OCSPResponse**: Enthält pro Zertifikat einen `SingleResponse` mit dem Status:
- `good`: Zertifikat ist gültig und nicht gesperrt
- `revoked`: Zertifikat wurde gesperrt, mit optionalem Sperrzeitpunkt und Sperrgrund
- `unknown`: Der Responder hat keine Information über dieses Zertifikat

Fehlerstatuscodes sind: `malformedRequest`, `internalError`, `tryLater`, `sigRequired`, `unauthorized`.

### HTTP-Transport

Bei Anfragen unter 255 Byte kann GET verwendet werden: `GET {url}/{base64-encoded DER OCSPRequest}`. Größere Anfragen verwenden POST mit dem DER-kodierten Request im Body.

### Nonce-Extension

Um Replay-Angriffe zu verhindern, kann der Client eine Nonce in den Request einfügen. Ein Angreifer kann eine gespeicherte "good"-Antwort nicht wiederverwenden, wenn die Nonce vom Responder in die Antwort eingebettet wird. Viele öffentliche Responder unterstützen Nonces nicht, da sie vorab signierte Antworten mit einer Gültigkeitsdauer von mehreren Tagen verwenden.

### OCSP Stapling

OCSP Stapling (RFC 5019 / TLS Certificate Status Request, RFC 6066) ist eine Optimierung: Der TLS-Server lädt die OCSP-Antwort selbst vorab herunter und liefert sie beim TLS-Handshake mit. Der Client muss keinen separaten OCSP-Request stellen. Das reduziert Latenz und schützt die Privatsphäre, da der Client nicht direkt beim Responder anfragen muss.

### OCSP in der Telematikinfrastruktur

Die TI-[[PKI]] verwendet eine [[TSL|Trust Service List (TSL)]], in der alle akkreditierten TSP-X.509-CAs eingetragen sind. Jedes Zertifikat enthält die OCSP-Responder-URL des ausstellenden TSP. [[Konnektoren]] prüfen Zertifikate von [[eGK]], [[HBA]] und [[SMC-B]] über diese Responder. Das gematik-Referenzprojekt `ref-GemLibPki` implementiert die OCSP-Abfragen gemäß gematik-Spezifikation. Laut gemKPT_PKI_TIP ist neben OCSP auch CRL als Fallback-Mechanismus vorgesehen.

### Kryptografische Anforderungen

Clients müssen RSA mit SHA-256 unterstützen. Die TI-Spezifikationen schreiben zudem ECC-Algorithmen vor, da die TI schrittweise von RSA auf ECC umgestellt wird.

## Verknüpfungen

- [[PKI]]: Infrastruktur, in der OCSP als Zertifikatsprüfmechanismus eingebettet ist
- [[Konnektoren]]: Prüfen Zertifikate über OCSP bei jeder TI-Kommunikation
- [[Telematikinfrastruktur]]: Nutzt OCSP/CRL als zentralen Sicherheitsmechanismus
- [[eGK]]: Enthält Zertifikate, die per OCSP geprüft werden
- [[SMC-B]]: Institutionskarte mit OCSP-geprüften Zertifikaten
- [[HBA]]: Heilberufsausweis mit OCSP-geprüften Zertifikaten
- [[QES]]: Qualifizierte elektronische Signatur, deren Gültigkeit OCSP-Prüfung voraussetzt

## Quellen

- [RFC 6960: X.509 Internet Public Key Infrastructure Online Certificate Status Protocol](https://www.rfc-editor.org/rfc/rfc6960.html)
- [gematik: gemKPT_PKI_TIP – Konzept PKI der TI-Plattform](https://gemspec.gematik.de/docs/gemKPT/gemKPT_PKI_TIP/gemKPT_PKI_TIP_V2.14.0/index.html)
- [gematik GitHub: ref-GemLibPki (PKI-Referenzimplementierung)](https://github.com/gematik/ref-GemLibPki)
