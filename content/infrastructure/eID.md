---
title: eID
audience: [technical, non-technical]
tags: [infrastruktur, identität, authentifizierung, personalausweis, bsi]
aliases: [Online-Ausweisfunktion, eID-Funktion, elektronischer Personalausweis, nPA]
---

# eID

Die **eID** (Online-Ausweisfunktion) ist die im deutschen Personalausweis integrierte Funktion zur sicheren elektronischen Identifizierung im Internet, basierend auf einem Chip im Ausweis und einer 6-stelligen PIN.

## Erklärt für Einsteiger

Stell dir vor, du musst dich irgendwo ausweisen, aber nicht persönlich, sondern über das Internet. Die eID ist wie dein Personalausweis für das Netz. Im Ausweis steckt ein kleiner Chip. Du hältst deinen Ausweis ans Smartphone, gibst deine PIN ein, und die Webseite weiß: Das ist wirklich diese Person, bestätigt vom deutschen Staat. Es ist viel sicherer als ein einfaches Passwort, weil man sowohl den Ausweis besitzen als auch die PIN kennen muss.

## Überblick

Die eID-Funktion wurde 2010 mit dem neuen Personalausweis (nPA) eingeführt. Sie erlaubt es Bürgerinnen und Bürgern, sich gegenüber Online-Diensten zu identifizieren, ohne persönlich erscheinen zu müssen. Der Chip im Ausweis speichert personenbezogene Daten (Name, Geburtsdatum, Adresse) und gibt sie nur nach erfolgreicher Authentifizierung frei.

Technische Grundlage ist die BSI Technische Richtlinie **TR-03110**, die das Protokoll zur Chip-zu-Server-Kommunikation definiert. Die Softwarekomponente auf dem Endgerät ist die **AusweisApp** (früher AusweisApp2), eine kostenlose Anwendung des Bundes. Für die Kommunikation mit dem Chip wird NFC (Near Field Communication) verwendet, entweder über ein NFC-fähiges Smartphone oder ein USB-Kartenlesegerät.

Im Kontext der deutschen [[Telematikinfrastruktur]] spielt die eID eine zentrale Rolle bei der Erst-Registrierung der [[Gesundheits-ID]]. Wer seine digitale Identität für Gesundheitsanwendungen anlegen möchte, ohne die [[eGK]] zu verwenden, kann sich über die eID eindeutig identifizieren. Die Krankenkasse kann so sicherstellen, dass die digitale Identität tatsächlich zu der versicherten Person gehört.

Die rechtliche Grundlage bildet das **Personalausweisgesetz (PAuswG)**. Dienste, die die eID nutzen wollen, müssen sich beim Bundesverwaltungsamt als Berechtigungszertifikat-Anbieter registrieren und erhalten ein elektronisches Zertifikat, das definiert, welche Daten sie auslesen dürfen.

## Technische Details

### Protokollarchitektur

Die Online-Ausweisfunktion basiert auf drei übereinanderliegenden kryptografischen Protokollen laut BSI TR-03110:

1. **PACE (Password Authenticated Connection Establishment)**: Stellt zunächst einen sicheren Kanal zwischen Chip und Lesegerät her. Der Nutzer gibt die PIN ein, die als Grundlage für den Schlüsselaustausch dient. Erst nach erfolgreichem PACE kann der Chip mit der Gegenseite kommunizieren.

2. **Terminal-Authentisierung (TA)**: Der Dienst-Anbieter weist sich gegenüber dem Chip mit einem Berechtigungszertifikat aus. Dieses Zertifikat wird von der Vergabestelle für Berechtigungszertifikate (VfB) ausgestellt und legt fest, welche Datenfelder der Anbieter auslesen darf.

3. **Chip-Authentisierung (CA)**: Der Chip weist sich gegenüber dem Dienst mit einem asymmetrischen Schlüsselpaar aus. Dies verhindert die Verwendung geklonter oder manipulierter Ausweise.

### Datenfelder und Datensparsamkeit

Der Chip enthält folgende optionale Felder, die ein Dienstanbieter nur nach Genehmigung auslesen darf:
- Familienname, Vorname
- Geburtsdatum
- Anschrift
- Dokumentengültigkeit
- Altersverifikation (ohne Herausgabe des Geburtsdatums)
- Pseudonymfunktion (nutzerspezifische, dienst-pseudonymisierte Kennung)

Das Prinzip der Datensparsamkeit ist technisch erzwungen: Jedes Datenfeld muss einzeln im Berechtigungszertifikat freigeschaltet werden. Dienste, die nur eine Altersverifikation benötigen, erhalten keinen Zugriff auf Namen oder Adresse.

### Zusammenhang mit eIDAS

Die deutsche eID ist als Notifizierung gemäß der [[eIDAS]]-Verordnung auf dem höchsten Sicherheitsniveau "hoch" eingestuft. Sie wird damit auch für behördliche Online-Dienste anderer EU-Staaten anerkannt. Die eIDAS-Verordnung bildet den europäischen Rechtsrahmen, in den die deutsche eID eingebettet ist.

### Nutzung für die Gesundheits-ID

Bei der Registrierung der [[Gesundheits-ID]] dient die eID als einer von drei möglichen Identitätsnachweisen. Der Ablauf:

1. Versicherter öffnet die Krankenkassen-App
2. App leitet zur Identifizierung per eID weiter
3. AusweisApp öffnet sich, Ausweis wird per NFC ausgelesen
4. PACE, TA und CA werden durchgeführt
5. Identitätsdaten werden verschlüsselt an den sektoralen [[IDP]] der Krankenkasse übermittelt
6. Krankenkasse prüft die Daten gegen ihre Versichertenstammdaten
7. Smartphone wird für die [[Gesundheits-ID]] registriert

### Technische Komponenten

| Komponente | Beschreibung |
|---|---|
| Ausweis-Chip | Kontaktloser Chip (ISO 14443), NFC-fähig |
| AusweisApp | Vermittler zwischen Chip und Online-Dienst |
| eID-Server | Serverseitiger Kommunikationspartner beim Dienstanbieter |
| Berechtigungszertifikat | Legt erlaubte Datenzugriffe fest, ausgestellt durch VfB |
| VfB | Vergabestelle für Berechtigungszertifikate, beim Bundesverwaltungsamt |

## Verknüpfungen

- [[Gesundheits-ID]]: Nutzt eID als Registrierungsweg für die digitale TI-Identität
- [[eIDAS]]: Europäischer Rechtsrahmen, in dem die deutsche eID als "hoch"-zertifiziertes Mittel notifiziert ist
- [[eGK]]: Alternative Identifizierungsmethode in der TI; eID ist die kartenunabhängige Alternative
- [[IDP]]: Identity Provider der TI, der nach eID-Registrierung die laufende Authentifizierung übernimmt
- [[QES]]: Die eID ermöglicht Fernsignaturverfahren; für QES gelten zusätzliche Anforderungen
- [[BSI]]: Definiert TR-03110 als technischen Standard für die eID-Protokolle
- [[PKI]]: Berechtigungszertifikate der eID sind Teil einer PKI-Infrastruktur

## Quellen

- [BSI: Online-Ausweisfunktion](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/Elektronische-Identitaeten/Online-Ausweisfunktion/online-ausweisfunktion_node.html)
- [Bundesregierung: AusweisApp](https://www.ausweisapp.bund.de/ausweisapp2/)
- [gematik: Identitäten in der TI](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti/identitaeten)
- [BSI TR-03110 (eID-Protokollspezifikation)](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03110/TR-03110_node.html)
