---
title: Matrix-Protokoll
audience: [technical]
tags: [standards, messaging, federation, verschlüsselung, TI-Messenger]
aliases: [Matrix, Matrix Protocol, Matrix.org]
---

# Matrix-Protokoll

Offenes, föderiertes Kommunikationsprotokoll für Echtzeit-Messaging, das dezentrale Homeserver über standardisierte REST-APIs verbindet.

## Erklärt für Einsteiger

Stell dir E-Mail vor: Du kannst eine Gmail-Adresse haben und trotzdem an jemanden mit einer GMX-Adresse schreiben. Matrix funktioniert genauso für Chats. Jede Organisation betreibt ihren eigenen Chat-Server, und diese Server sprechen über ein gemeinsames Protokoll miteinander. Kein einzelnes Unternehmen kontrolliert das Netzwerk.

## Überblick

Matrix ist ein offenes Protokoll für sicher und dezentral verschlüsselte Kommunikation, entwickelt von der Matrix.org Foundation. Es definiert offene APIs für föderiertes Instant Messaging, VoIP und IoT-Kommunikation. Die Spezifikation ist öffentlich zugänglich unter spec.matrix.org.

In Deutschland bildet das Matrix-Protokoll die technische Grundlage des [[TI-Messenger]], dem sicheren Kommunikationsdienst der [[Telematikinfrastruktur]]. Gematik hat Matrix gewählt, weil das Protokoll föderierte Identitätsverwaltung, eine dezentrale Architektur und ein offenes Spezifikationsmodell bietet.

Matrix wurde 2014 von Amdocs entwickelt und ist seit 2019 unter der Matrix.org Foundation als gemeinnützige Organisation organisiert. Die bekannteste Client-Implementierung ist Element (früher Riot.im). Andere Clients wie FluffyChat oder Nheko implementieren dieselbe Spezifikation.

## Technische Details

### Grundkonzepte

**Homeserver**: Jede Organisation betreibt einen eigenen Homeserver, auf dem Nutzerkonten, Räume und Nachrichtenverläufe gespeichert werden. Homeserver kommunizieren untereinander über die Server-Server-API (Federation API). Fällt ein einzelner Server aus, betrifft das nur die Nutzer dieses Servers.

**Room (Raum)**: Ein Raum ist aus technischer Sicht eine Folge von JSON-Objekten (Events). Diese Events bilden einen gerichteten azyklischen Graphen (DAG), den sogenannten Event Graph. Die partielle Ordnung des Graphen ergibt die chronologische Reihenfolge der Ereignisse.

**Event**: Jede Nachricht, jede Raumkonfigurationsänderung und jedes Mitgliedschaftsereignis ist ein JSON-Objekt mit einem Typ, Inhalt, Sender und Zeitstempel. Events sind nach ihrer Aufnahme unveränderlich.

### API-Architektur

Matrix definiert drei Haupt-APIs:

| API | Zweck |
|---|---|
| Client-Server API | Clients synchronisieren Nachrichtenverläufe mit ihrem Homeserver |
| Server-Server API (Federation) | Homeserver tauschen Events in Echtzeit aus und replizieren Räume |
| Application Service API | Integration externer Dienste (Bridges, Bots) |

Alle APIs verwenden JSON über HTTPS (REST). Die Server-Server-Kommunikation erfolgt über HTTP-PUT-Anfragen mit JSON-codierten Transaction-Objekten, die Ephemeral Data Units (EDUs) und Persistent Data Units (PDUs) enthalten.

### Ende-zu-Ende-Verschlüsselung: Olm und Megolm

Matrix verwendet zwei verwandte Kryptografie-Protokolle:

**Olm**: Implementierung des Double-Ratchet-Algorithmus (aus dem Signal-Protokoll) für Eins-zu-eins-Kommunikation. Jede Sitzung zwischen zwei Geräten verwendet separate Schlüsselpaare. Olm bietet Perfect Forward Secrecy.

**Megolm**: Erweiterung von Olm für Gruppenkommunikation in Räumen. Ein Megolm-Sitzungsschlüssel wird einmalig erzeugt und an alle Raumteilnehmer über Olm-gesicherte Kanäle verteilt. Ein neuer kryptografischer Schlüssel wird für jede Nachricht innerhalb der Session verwendet. Kompromittierung eines einzelnen Schlüssels schränkt die lesbare Nachrichtenmenge ein.

### Matrix-Protokoll im TI-Messenger

Im [[TI-Messenger]] gelten zusätzliche Anforderungen gegenüber dem Standard-Matrix-Protokoll:

**Messenger-Proxy**: Jeder zugelassene TI-Messenger-Anbieter betreibt einen Proxy vor seinem Homeserver. Dieser prüft, ob Homeserver in der Föderationsliste des [[VZD]] eingetragen sind. Nicht zugelassene Server werden blockiert.

**Verzeichnisdienst**: Der [[VZD]] (Verzeichnisdienst) stellt ein FHIR-basiertes Verzeichnis aller TI-Messenger-Teilnehmer bereit. Matrix-IDs (MXID) werden mit Einträgen im VZD verknüpft.

**Authentifizierung**: Leistungserbringer authentifizieren sich über den [[IDP]] der TI mit [[HBA]] oder [[SMC-B]]. Die Matrix-ID wird mit dem Identitätszertifikat verbunden.

**Raumtypen**: Der TI-Messenger definiert spezifische Raumtypen für medizinische Anwendungsfälle wie Fallbesprechungen, Konsile und Notfallkommunikation.

### Föderationsmodell

Im offenen Matrix-Netzwerk kann jeder Server mit jedem anderen sprechen. Im TI-Messenger ist die Föderation auf zertifizierte Anbieter beschränkt. Nur Homeserver, die auf der Positivliste des VZD stehen, dürfen miteinander kommunizieren. Diese geschlossene Föderationsarchitektur stellt sicher, dass nur geprüfte Teilnehmer am TI-Messenger-Netzwerk teilnehmen können.

## Verknüpfungen

- [[TI-Messenger]]: Nutzt das Matrix-Protokoll als technische Basis
- [[VZD]]: Verzeichnisdienst, der Matrix-IDs mit TI-Identitäten verknüpft
- [[Telematikinfrastruktur]]: Rahmen, in dem der TI-Messenger betrieben wird
- [[IDP]]: Identitätsprovider für die Authentifizierung von TI-Messenger-Nutzern
- [[HBA]]: Heilberufsausweis für die Authentifizierung im TI-Messenger
- [[SMC-B]]: Institutionskarte für die Authentifizierung von Organisationen

## Quellen

- [Matrix Specification (spec.matrix.org)](https://spec.matrix.org/latest/)
- [Matrix: End-to-End Encryption implementation guide](https://matrix.org/docs/matrix-concepts/end-to-end-encryption/)
- [adesso Blog: The Matrix Protocol – A look inside the TI-Messenger](https://www.adesso.de/en/news/blog/the-matrix-protocol-a-look-inside-the-ti-messenger.jsp)
- [Wikipedia: Matrix (Kommunikationsprotokoll)](https://de.wikipedia.org/wiki/Matrix_(Kommunikationsprotokoll))
