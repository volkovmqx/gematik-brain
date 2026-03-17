---
title: TI-Messenger
audience: [technical, non-technical]
tags: [anwendung, messenger, kommunikation]
---

# TI-Messenger

Der **TI-Messenger** ist der Instant-Messaging-Dienst der [[Telematikinfrastruktur]]. Er ermoglicht sichere Echtzeit-Kommunikation im Gesundheitswesen.

## Erklart fur Einsteiger

Stell dir vor, eine Arztin will schnell einen Kollegen im Krankenhaus fragen, ob ein Befund schon da ist. Ein Brief uber [[KIM]] ist dafur zu langsam, ein Anruf landet auf dem Anrufbeantworter. Der TI-Messenger ist wie WhatsApp oder Signal, aber speziell fur das Gesundheitswesen. Die Nachrichten sind verschlusselt, und nur zugelassene Personen und Einrichtungen konnen mitmachen. Man kann Textnachrichten schreiben, Bilder schicken und Gruppen erstellen.

## Uberblick

Wahrend [[KIM]] fur formelle, asynchrone Kommunikation gedacht ist (wie E-Mail), ist der TI-Messenger fur schnelle Absprachen da (wie Chat).

### Drei Varianten

1. **TI-Messenger Pro**: Chat zwischen Leistungserbringern und Einrichtungen (Arztpraxen, Kliniken, Apotheken, Kassen)
2. **TI-Messenger ePA**: Nachrichten zwischen Versicherten und Leistungserbringern innerhalb der [[ePA]]
3. **TI-Messenger Connect**: Zugang fur Versicherte uber integrierte Apps (DiGA, Patientenportale, Telemedizin)

## Architektur

Der TI-Messenger basiert auf dem **Matrix-Protokoll**, einem offenen, foderierten Standard von Matrix.org.

### Komponenten
- **TI-Messenger-Client**: App oder Integration im Primarsystem
- **Messenger-Proxy**: Gateway zum Matrix-Homeserver
- **Matrix-Homeserver**: Betrieben von zugelassenen Anbietern
- **Registrierungsdienst**: Pruft TI-Identitaten

### Technische Details
- Protokoll: Matrix (foderiert, interoperabel zwischen Anbietern)
- Verschlusselung: Ende-zu-Ende (Olm/Megolm)
- Authentisierung: [[SMC-B]]/HBA via [[Konnektoren]] oder gematik IDP
- Verzeichnis: VZD-FHIR-Directory (basiert auf [[FHIR]])

### Kosten fur Anbieter
- Fachdienst-Referenzinstanz: 180 EUR/Monat
- Client-Referenzinstanz: 60 EUR/Monat
- Ein Gratismonat fur Zertifizierungszwecke

## Sicherheit

Alle Nachrichten sind Ende-zu-Ende-verschlusselt. Die Identitat jedes Teilnehmers wird uber die TI verifiziert. Das foderierte Matrix-Protokoll ermoglicht anbieterubergreifende Kommunikation, ohne die Sicherheit zu beeintrachtigen.

## Verknupfungen

- Erganzt [[KIM]] (Messenger = schnell, KIM = formell)
- Nutzt die [[Telematikinfrastruktur]] als Vertrauensraum
- Identitaten uber [[SMC-B]] und den Verzeichnisdienst
- Adressbuch basiert auf [[FHIR]]
- Integration in die [[ePA]] (Variante ePA)

## Quellen

- [TI-Messenger - Fachportal](https://fachportal.gematik.de/anwendungen/ti-messenger)
