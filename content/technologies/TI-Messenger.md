---
title: TI-Messenger
audience: [technical, non-technical]
tags: [anwendung, messenger, kommunikation]
aliases: [TIM, TI-M]
---

# TI-Messenger

Der **TI-Messenger** ist der Instant-Messaging-Dienst der [[Telematikinfrastruktur]]. Er ermöglicht sichere Echtzeit-Kommunikation im Gesundheitswesen.

## Erklärt für Einsteiger

Stell dir vor, eine Ärztin will schnell einen Kollegen im Krankenhaus fragen, ob ein Befund schon da ist. Ein Brief über [[KIM]] ist dafür zu langsam, ein Anruf landet auf dem Anrufbeantworter. Der TI-Messenger ist wie WhatsApp oder Signal, aber speziell für das Gesundheitswesen. Die Nachrichten sind verschlüsselt, und nur zugelassene Personen und Einrichtungen können mitmachen. Man kann Textnachrichten schreiben, Bilder schicken und Gruppen erstellen.

## Überblick

Während [[KIM]] für formelle, asynchrone Kommunikation gedacht ist (wie E-Mail), ist der TI-Messenger für schnelle Absprachen da (wie Chat).

### Drei Varianten

1. **TI-Messenger Pro**: Chat zwischen Leistungserbringern und Einrichtungen (Arztpraxen, Kliniken, Apotheken, Kassen). Ab Anfang 2026 wurden erste produktive Instanzen von TI-Messenger Pro zugelassen. Version 1.1 ist für Mai 2026 geplant.
2. **TI-Messenger ePA**: Nachrichten zwischen Versicherten und Leistungserbringern innerhalb der [[ePA]]
3. **TI-Messenger Connect**: Zugang für Versicherte über integrierte Apps ([[DiGA]], Patientenportale, Telemedizin). Geplant ab Ende 2026.

### Versichertenkanal und aktuelle Entwicklungen

Mehrere Krankenkassen haben ab März 2026 den Versichertenkanal aktiviert. Dieser ermöglicht es Versicherten, direkt über den TI-Messenger mit ihrer Krankenkasse zu kommunizieren. Am 5. März 2026 veröffentlichte die [[gematik]] die Spezifikation TI-Messenger_26_1, die weitere Ausbaustufen und Interoperabilitätsanforderungen definiert.

## Architektur

Der TI-Messenger basiert auf dem **[[Matrix-Protokoll]]**, einem offenen, föderierten Standard von Matrix.org.

### Komponenten

- **TI-Messenger-Client**: App oder Integration im Primärsystem
- **Messenger-Proxy**: Gateway zum Matrix-Homeserver
- **Matrix-Homeserver**: Betrieben von zugelassenen Anbietern
- **Registrierungsdienst**: Prüft TI-Identitäten

## Technische Details

### Matrix-Protokoll und Föderationsmodell

Der TI-Messenger setzt auf das offene [[Matrix-Protokoll]]. Matrix ist ein dezentrales, föderiertes Kommunikationsprotokoll: Verschiedene Anbieter betreiben eigene Homeserver, die miteinander kommunizieren können. Im TI-Messenger ist die Föderation auf zugelassene Anbieter beschränkt. Ein Teilnehmer auf Homeserver A kann mit einem Teilnehmer auf Homeserver B kommunizieren, ohne dass beide beim selben Anbieter sein müssen.

Die Kommunikation zwischen Homeservern läuft über das Matrix Server-Server-Protokoll (Federation API). Jeder Homeserver speichert eine Kopie der Nachrichten der Räume, an denen seine Nutzer beteiligt sind.

### Verschlüsselung

Alle Nachrichten im TI-Messenger sind Ende-zu-Ende-verschlüsselt. Die Verschlüsselung basiert auf dem **Olm**-Protokoll (für Einzelnachrichten) und **Megolm** (für Gruppenräume). Beide Protokolle sind vom Matrix.org-Projekt spezifiziert und auf dem Signal Protocol aufgebaut. Die Schlüssel werden auf den Endgeräten erzeugt und nie unverschlüsselt an den Homeserver übermittelt.

### Authentisierung

Die Identität jedes Teilnehmers wird über die TI verifiziert:

- **Leistungserbringer**: Authentisierung über [[SMC-B]] oder [[HBA]] via [[Konnektoren]] oder [[IDP|gematik IDP]]
- **Versicherte**: Authentisierung über [[Gesundheits-ID]] (GesundheitsID/al.vi) oder eGK

### Verzeichnisdienst und FHIR-Lookup

Für die Adressierung von Teilnehmern nutzt der TI-Messenger den [[VZD|VZD-FHIR-Directory]]. Das Verzeichnis basiert auf [[FHIR]] und enthält die Matrix-User-IDs aller zugelassenen Teilnehmer. Beim Aufbau einer Verbindung wird die Empfängeradresse per FHIR-Suche im VZD aufgelöst. Das ermöglicht die Suche nach Ärzten und Einrichtungen anhand von Name, Fachrichtung oder Ort.

### Nachrichtenrouting

Eine Nachricht von Arzt A (Homeserver X) an Arzt B (Homeserver Y) wird wie folgt zugestellt:

1. Client A sendet die Ende-zu-Ende-verschlüsselte Nachricht an Homeserver X
2. Homeserver X leitet sie über das Federation API an Homeserver Y weiter
3. Client B ruft die Nachricht von Homeserver Y ab und entschlüsselt sie lokal

Der Messenger-Proxy zwischen Client und Homeserver stellt sicher, dass nur TI-autorisierte Verbindungen hergestellt werden.

## Sicherheit

Alle Nachrichten sind Ende-zu-Ende-verschlüsselt. Die Identität jedes Teilnehmers wird über die TI verifiziert. Das föderierte [[Matrix-Protokoll]] ermöglicht anbieterübergreifende Kommunikation, ohne die Sicherheit zu beeinträchtigen.

## Verknüpfungen

- Ergänzt [[KIM]] (Messenger = schnell, KIM = formell)
- Nutzt die [[Telematikinfrastruktur]] als Vertrauensraum
- Identitäten über [[SMC-B]] und den [[VZD|Verzeichnisdienst]]
- Adressbuch basiert auf [[FHIR]]
- Integration in die [[ePA]] (Variante ePA)

## Quellen

- [TI-Messenger - Fachportal gematik](https://fachportal.gematik.de/anwendungen/ti-messenger)
- [TI-Messenger Spezifikation - gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_TI-Messenger-Dienst/)
- [Matrix.org Protokollspezifikation](https://spec.matrix.org/latest/)
