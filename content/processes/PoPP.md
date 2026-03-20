---
title: PoPP - Proof of Patient Presence
audience: [technical]
tags: [prozess, sicherheit, authentisierung, epa]
aliases: [Proof of Patient Presence, PoPP-Dienst]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, hersteller, ti-infrastruktur]
  interests: [technik, compliance]
maturity: wachsend
---

# PoPP - Proof of Patient Presence

Der **PoPP-Dienst** (Proof of Patient Presence) ist ein TI-Dienst, der kryptografisch nachweist, dass ein Versicherter bei einem Leistungserbringer physisch anwesend ist oder online aktiv eingewilligt hat, bevor auf seine Patientendaten zugegriffen werden darf.

## Erklärt für Einsteiger

Stell dir vor, jemand könnte mit einer gefälschten Praxiskarte auf die Patientenakten vieler Menschen zugreifen, ohne dass die Patienten dabei sind. Genau diese Lücke hat der Chaos Computer Club Ende 2024 in der [[ePA]] gefunden. PoPP löst dieses Problem: Bevor ein Arzt auf deine Akte zugreifen kann, muss dein Körper sozusagen "anwesend" sein. Das funktioniert, indem deine [[eGK]] in der Praxis ausgelesen wird und ein sicherer, zeitgebundener Nachweis erzeugt wird. Ohne diesen Nachweis kein Zugriff.

## Überblick

Der PoPP-Dienst wurde als direkte Reaktion auf die CCC-Sicherheitsforschung entwickelt. Ende 2024 zeigten Sicherheitsforscher, dass durch den Einsatz gefälschter [[SMC-B]]-Karten ein Massenzugriff auf [[ePA]]-Daten theoretisch möglich gewesen wäre. Die [[gematik]] und das [[BSI]] bestätigten, dass kein tatsächlicher Missbrauch stattgefunden hatte, leiteten aber Sofortmaßnahmen ein.

Die dauerhafte Lösung ist der PoPP-Dienst. Am **3. März 2026** veröffentlichte die [[gematik]] die PoPP-Dienst-Spezifikation V1.0.0. Den Implementierungsauftrag für Stufe 1 erhielt **RISE** (Rostocker Initiative Software Engineering).

PoPP ersetzt prospektiv das bisherige [[VSDM]]-Verfahren (VSDM++) für den Präsenznachweis. Es ist keine bloße Erweiterung, sondern ein eigenständiger Dienst mit eigenem kryptografischen Protokoll.

> [!interesse-compliance]
> Ab Mitte 2026 ist PoPP Stufe 1 produktiv. [[PVS]]-, [[KIS]]- und [[AVS]]-Hersteller müssen die PoPP-Schnittstelle implementieren, um weiterhin den [[ePA]]-Zugriff für ihre Einrichtungen zu ermöglichen. Während der Einführungsphase läuft [[VSDM]]++ parallel. Ein konkreter Abschalttermin für das alte Verfahren ist noch nicht festgesetzt.

> [!praxis-tipp] Praxis-Tipp: Was PoPP für Ihren Praxisablauf bedeutet
> Ab Mitte 2026 ändert sich der Ablauf beim ePA-Zugriff. PoPP ersetzt schrittweise das bisherige VSDM++-Verfahren.
>
> In Ihrer Praxis bedeutet das konkret:
> - Der Patient steckt seine eGK wie gewohnt ins Kartenterminal
> - Ihr PVS holt automatisch im Hintergrund ein PoPP-Token
> - Erst danach öffnet sich der ePA-Zugriff im PVS
> - Für Sie und Ihre MFA ändert sich der sichtbare Ablauf kaum
>
> Handlungsbedarf jetzt: Fragen Sie Ihren PVS-Anbieter, ob das Update für PoPP-Stufe 1 bereits im Lieferplan steht. Ohne PVS-Update ist ab Einführung kein ePA-Zugriff mehr möglich. Planen Sie das Update außerhalb der Sprechstunde ein.

### Ausbaustufen

**Stufe 1** (produktiv: Mitte 2026):

- [[eGK]]-basierter Präsenznachweis in Praxis und Krankenhaus
- Hausbesuch-Szenario: eGK-Auslesen mit mobilen Geräten
- Nachweis: Die eGK des Versicherten wird am Kartenterminal ausgelesen, ein zeitgebundenes Präsenztoken wird erzeugt

**Stufe 2** (geplant: Q4/2026):

- Online-Check-in vor dem Arztbesuch
- Authentisierung über [[Gesundheits-ID]]
- Telemedizin-Szenarien
- Kontaktlose eGK-Nutzung ohne PIN (in Verbindung mit [[CardLink]])

## Technische Details

### Kryptografisches Grundprinzip

> [!interesse-technik]
> Spezifikation: [gemSpec_PoPP_Service V1.0.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PoPP_Service/gemSpec_PoPP_Service_V1.0.0/index.html). Token-Format: [[JWT]] (JSON Web Token), signiert durch den PoPP-Dienst. Schnittstelle: REST/FHIR-basiert. Das PoPP-Token enthält: Kartenidentität (Zertifikat-Referenz), Zeitstempel, Gültigkeitsdauer. Für die Integration in [[PVS]], [[KIS]] und [[AVS]] ist die PoPP-API-Dokumentation auf dem gematik Fachportal verfügbar.

PoPP erzeugt ein zeitgebundenes, einmalig verwendbares **Präsenztoken** (Proof-of-Presence-Token, PoPP-Token). Der Ablauf in Stufe 1:

1. Der Versicherte steckt seine [[eGK]] am Kartenterminal in der Praxis
2. Der Konnektor oder das [[TI-Gateway]] leitet eine Anfrage an den PoPP-Dienst weiter
3. Der PoPP-Dienst validiert die Kartenzertifikate gegen die TI-[[PKI]]
4. Der PoPP-Dienst erzeugt ein signiertes, zeitgebundenes Token
5. Das Token wird dem Primärsystem übergeben
6. Das Primärsystem verwendet das Token für den [[ePA]]-Zugriff

Das Token ist an den Versicherten (Kartenidentität) und den Zeitpunkt gebunden. Eine [[SMC-B]] allein reicht nicht mehr, um auf die ePA zuzugreifen.

### Sicherheitsgewinn gegenüber VSDM++

Das bisherige VSDM++-Verfahren prüfte lediglich, ob eine gültige [[SMC-B]] vorhanden ist. Es prüfte nicht, ob der betroffene Versicherte auch tatsächlich anwesend ist. PoPP bindet den Zugriff zusätzlich an die physische eGK des Versicherten, die zum Ausstellungszeitpunkt des Tokens ausgelesen werden muss.

### Protokoll und Integration

- Schnittstelle: REST/FHIR-basiert
- Token-Format: JSON Web Token (JWT), signiert durch den PoPP-Dienst
- Integration: Primärsysteme ([[PVS]], [[KIS]], [[AVS]]) müssen die PoPP-Schnittstelle implementieren
- Rückwärtskompatibilität: Während der Einführungsphase läuft VSDM++ parallel weiter

> [!dev-quickstart] Dev Quickstart: PoPP-Token anfordern und verwenden
> OpenAPI-Spec: [gematik/api-popp](https://github.com/gematik/api-popp) | Sample-Code: [gematik/popp-sample-code](https://github.com/gematik/popp-sample-code)
>
> ```bash
> # PoPP-Token vom PoPP-Dienst anfordern
> # (Konnektor/TI-Gateway übermittelt eGK-Zertifikat und signierte Challenge)
> curl -X POST "https://<popp-dienst-host>/popp/v1/token" \
>   -H "Content-Type: application/json" \
>   -H "Authorization: Bearer <smcb-access-token>" \
>   -d '{
>     "egkCertificate": "<Base64-kodiertes eGK-Zertifikat>",
>     "cardHandle":     "<Konnektor-CardHandle>",
>     "timestamp":      "2026-03-20T10:00:00Z"
>   }'
>
> # Antwort: PoPP-Token (JWT, signiert ES256)
> # { "poppToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6Ii4uLiJ9..." }
>
> # JWK-Endpoint des PoPP-Dienstes (öffentliche Schlüssel zur Token-Verifikation)
> curl -s "https://<popp-dienst-host>/popp/v1/.well-known/jwks.json"
>
> # PoPP-Token beim ePA-Zugriff übergeben (als Header im VAU-Kanal)
> # X-PoPP-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6Ii4uLiJ9...
> ```
>
> JWT-Payload enthält:
> - `sub`: Pseudonymisierte Versicherten-ID (aus eGK-Zertifikat abgeleitet)
> - `iat` / `exp`: Ausstellung und Ablauf (Token-Gültigkeit: wenige Minuten)
> - `iss`: PoPP-Dienst-Identifier
>
> Mock-Token für Tests: [gematik/popp-token-generator](https://github.com/gematik/popp-token-generator)
> Spec: [gemSpec_PoPP_Service V1.0.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PoPP_Service/gemSpec_PoPP_Service_V1.0.0/index.html)

## Verknüpfungen

- [[eGK]]: Träger des kryptografischen Nachweises in Stufe 1
- [[VSDM]]: Bisheriges Verfahren, das PoPP prospektiv ablöst
- [[Telematikinfrastruktur]]: Infrastruktur, in die PoPP integriert ist
- [[ePA]]: Schutzziel von PoPP
- [[Gesundheits-ID]]: Authentisierungsmittel für Online-Szenarien in Stufe 2
- [[SMC-B]]: Institutionskarte; alleinige SMC-B reicht nach PoPP nicht mehr für ePA-Zugriff
- [[CardLink]]: Ergänzendes Verfahren für kontaktlose eGK-Nutzung
- [[PKI]]: Vertrauensinfrastruktur für die Zertifikatsprüfung
- [[BSI]]: Beteiligt an Sicherheitsanforderungen für PoPP

## Quellen

- [PoPP-Dienst Spezifikation V1.0.0 - gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PoPP_Service/gemSpec_PoPP_Service_V1.0.0/index.html)
- [gematik Newsroom: PoPP](https://www.gematik.de/newsroom/news-detail/proof-of-patient-presence)
