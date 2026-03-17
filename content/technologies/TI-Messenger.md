---
title: TI-Messenger
audience: [technical, non-technical]
tags: [anwendung, messenger, kommunikation]
---

# TI-Messenger

Der **TI-Messenger** ist der Instant-Messaging-Dienst der [[Telematikinfrastruktur]]. Er ermöglicht sichere Echtzeit-Kommunikation im Gesundheitswesen.

## Erklärt für Einsteiger

Stell dir vor, eine Ärztin will schnell einen Kollegen im Krankenhaus fragen, ob ein Befund schon da ist. Ein Brief über [[KIM]] ist dafür zu langsam, ein Anruf landet auf dem Anrufbeantworter. Der TI-Messenger ist wie WhatsApp oder Signal, aber speziell für das Gesundheitswesen. Die Nachrichten sind verschlüsselt, und nur zugelassene Personen und Einrichtungen können mitmachen. Man kann Textnachrichten schreiben, Bilder schicken und Gruppen erstellen.

## Überblick

Während [[KIM]] für formelle, asynchrone Kommunikation gedacht ist (wie E-Mail), ist der TI-Messenger für schnelle Absprachen da (wie Chat).

### Drei Varianten

1. **TI-Messenger Pro**: Chat zwischen Leistungserbringern und Einrichtungen (Arztpraxen, Kliniken, Apotheken, Kassen)
2. **TI-Messenger ePA**: Nachrichten zwischen Versicherten und Leistungserbringern innerhalb der [[ePA]]
3. **TI-Messenger Connect**: Zugang für Versicherte über integrierte Apps (DiGA, Patientenportale, Telemedizin)

## Architektur

Der TI-Messenger basiert auf dem **Matrix-Protokoll**, einem offenen, föderierten Standard von Matrix.org.

### Komponenten
- **TI-Messenger-Client**: App oder Integration im Primärsystem
- **Messenger-Proxy**: Gateway zum Matrix-Homeserver
- **Matrix-Homeserver**: Betrieben von zugelassenen Anbietern
- **Registrierungsdienst**: Prüft TI-Identitäten

### Technische Details
- Protokoll: Matrix (föderiert, interoperabel zwischen Anbietern)
- Verschlüsselung: Ende-zu-Ende (Olm/Megolm)
- Authentisierung: [[SMC-B]]/[[HBA]] via [[Konnektoren]] oder [[IDP|gematik IDP]]
- Verzeichnis: [[VZD|VZD-FHIR-Directory]] (basiert auf [[FHIR]])

### Kosten für Anbieter
- Fachdienst-Referenzinstanz: 180 EUR/Monat
- Client-Referenzinstanz: 60 EUR/Monat
- Ein Gratismonat für Zertifizierungszwecke

## Sicherheit

Alle Nachrichten sind Ende-zu-Ende-verschlüsselt. Die Identität jedes Teilnehmers wird über die TI verifiziert. Das föderierte Matrix-Protokoll ermöglicht anbieterübergreifende Kommunikation, ohne die Sicherheit zu beeinträchtigen.

## Verknüpfungen

- Ergänzt [[KIM]] (Messenger = schnell, KIM = formell)
- Nutzt die [[Telematikinfrastruktur]] als Vertrauensraum
- Identitäten über [[SMC-B]] und den [[VZD|Verzeichnisdienst]]
- Adressbuch basiert auf [[FHIR]]
- Integration in die [[ePA]] (Variante ePA)

## Quellen

- [TI-Messenger - Fachportal](https://fachportal.gematik.de/anwendungen/ti-messenger)
