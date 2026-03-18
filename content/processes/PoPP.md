---
title: PoPP - Proof of Patient Presence
audience: [technical]
tags: [prozess, sicherheit, authentisierung, epa]
aliases: [Proof of Patient Presence, PoPP-Dienst]
---

# PoPP - Proof of Patient Presence

Der **PoPP-Dienst** (Proof of Patient Presence) ist ein TI-Dienst, der kryptografisch nachweist, dass ein Versicherter bei einem Leistungserbringer physisch anwesend ist oder online aktiv eingewilligt hat, bevor auf seine Patientendaten zugegriffen werden darf.

## Erklärt für Einsteiger

Stell dir vor, jemand könnte mit einer gefälschten Praxiskarte auf die Patientenakten vieler Menschen zugreifen, ohne dass die Patienten dabei sind. Genau diese Lücke hat der Chaos Computer Club Ende 2024 in der [[ePA]] gefunden. PoPP löst dieses Problem: Bevor ein Arzt auf deine Akte zugreifen kann, muss dein Körper sozusagen "anwesend" sein. Das funktioniert, indem deine [[eGK]] in der Praxis ausgelesen wird und ein sicherer, zeitgebundener Nachweis erzeugt wird. Ohne diesen Nachweis kein Zugriff.

## Überblick

Der PoPP-Dienst wurde als direkte Reaktion auf die CCC-Sicherheitsforschung entwickelt. Ende 2024 zeigten Sicherheitsforscher, dass durch den Einsatz gefälschter [[SMC-B]]-Karten ein Massenzugriff auf [[ePA]]-Daten theoretisch möglich gewesen wäre. Die [[gematik]] und das [[BSI]] bestätigten, dass kein tatsächlicher Missbrauch stattgefunden hatte, leiteten aber Sofortmaßnahmen ein.

Die dauerhafte Lösung ist der PoPP-Dienst. Am **3. März 2026** veröffentlichte die [[gematik]] die PoPP-Dienst-Spezifikation V1.0.0. Den Implementierungsauftrag für Stufe 1 erhielt **RISE** (Rostocker Initiative Software Engineering).

PoPP ersetzt prospektiv das bisherige [[VSDM]]-Verfahren (VSDM++) für den Präsenznachweis. Es ist keine bloße Erweiterung, sondern ein eigenständiger Dienst mit eigenem kryptografischen Protokoll.

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
