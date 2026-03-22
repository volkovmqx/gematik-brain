---
title: eID
audience: [technical, non-technical]
tags: [infrastruktur, identität, authentifizierung, personalausweis, bsi]
aliases: [Online-Ausweisfunktion, eID-Funktion, elektronischer Personalausweis, nPA]
relevance:
  sectors: [patient, hersteller, it-dienstleister, kasse, regulierung, ti-infrastruktur]
  interests: [technik, compliance, patient]
maturity: immergruen
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

> [!frist-warnung] Frist-Warnung: Berechtigungszertifikat-Erneuerung nach § 21 PAuswG
> **Rechtsgrundlage:** § 21 Abs. 1 Personalausweisgesetz (PAuswG) i.V.m. BSI TR-03128-2
> **Frist:** Berechtigungszertifikate der Vergabestelle für Berechtigungszertifikate (VfB) beim Bundesverwaltungsamt sind auf maximal 3 Jahre befristet. Dienste, die die eID für die Gesundheits-ID-Registrierung oder andere Identifikationszwecke einsetzen, müssen rechtzeitig vor Ablauf die Erneuerung beantragen. Die Erneuerung setzt ein aktuelles BSI-Zertifikat nach TR-03128-2 voraus.
> **Handlungsbedarf:** Die verantwortliche Stelle überwacht das Ablaufdatum des eigenen Berechtigungszertifikats und stellt den Erneuerungsantrag beim Bundesverwaltungsamt (VfB) frühzeitig. Ein abgelaufenes Berechtigungszertifikat führt dazu, dass der eID-Server des Dienstes vom zentralen eID-Server abgewiesen wird und keine Nutzeridentifizierungen mehr möglich sind.
> **Bei Nichtbeachtung:** Betrieb ohne gültiges Berechtigungszertifikat ist nach § 25 PAuswG bußgeldbewehrt. Bei Krankenkassen würde dies die eID-basierte Gesundheits-ID-Registrierung vollständig blockieren.

> [!interesse-compliance] Berechtigungszertifikat und Antragspflicht
> Dienste, die die eID für die Identifizierung von Nutzern verwenden wollen (z.B. Krankenkassen für die [[Gesundheits-ID]]-Registrierung), müssen ein Berechtigungszertifikat beim Bundesverwaltungsamt beantragen. Im Antrag ist anzugeben, welche Datenfelder ausgelesen werden sollen. Das Bundesverwaltungsamt prüft die Verhältnismäßigkeit (Datensparsamkeit). Dienste mit einem Berechtigungszertifikat unterliegen Datenschutzauflagen nach DSGVO und PAuswG. Eine Nutzung der eID ohne Berechtigungszertifikat ist technisch ausgeschlossen.

> [!interesse-patient] Was die eID für Versicherte bedeutet
> Mit der eID auf dem Personalausweis können Versicherte ihre [[Gesundheits-ID]] bei der Krankenkasse registrieren, ohne persönlich in die Filiale gehen zu müssen. Das reicht dann als digitaler Ausweis für viele Gesundheits-Apps. Die PIN für die eID kann im Ausweisportal des Bundes geändert werden, wenn man sie vergessen hat. Wer keine eID nutzen möchte, kann alternativ die [[eGK]] für die Registrierung der Gesundheits-ID verwenden.

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

> [!patientenrecht] Patientenrecht: Welche Daten gibt die eID weiter?
> Ihre Daten werden nicht einfach so weitergegeben. Ein Dienst darf nur lesen, was er beim Bundesverwaltungsamt beantragt und genehmigt bekommen hat.
>
> **Beispiel:** Eine Krankenkasse, die nur prüfen will, dass Sie volljährig sind, bekommt Ihren Namen und Ihre Adresse nicht zu sehen.
>
> **Sie haben das Recht:**
> - Zu fragen, welche Daten ein Dienst ausliest (steht im Datenschutzhinweis des Dienstes)
> - Die eID-Funktion Ihres Ausweises jederzeit beim Bürgeramt deaktivieren zu lassen
> - Eine Auskunft nach DSGVO über gespeicherte Daten zu beantragen

> [!interesse-technik] Technische Integration der eID für Dienste
> Dienste integrieren die eID über das eID-Server-Protokoll (BSI TR-03130). Der eID-Server des Dienstanbieters kommuniziert mit dem eID-Server des Bundes (Governikus, BDr) über HTTPS. Die AusweisApp kommuniziert über das Localhost-Interface mit dem Browser des Nutzers. Alternativ gibt es die eID-Client-SDK-Schnittstelle (BSI TR-03124) für native Apps. Für die Integration der eID in Krankenkassen-Apps zur Gesundheits-ID-Registrierung stellt das BSI Testumgebungen und Testkarten bereit. Referenz: [BSI TR-03110](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03110/TR-03110_node.html) und [BSI TR-03130](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03130/TR-03130_node.html).

> [!dev-quickstart] Dev Quickstart: AusweisApp SDK für native Apps einbinden
> Das AusweisApp SDK (v2.4.1) ermöglicht die direkte eID-Integration ohne separate AusweisApp-Installation. Kommunikation läuft über einen lokalen WebSocket.
> ```javascript
> // WebSocket-Verbindung zur AusweisApp (Desktop/Web-Modus)
> // Standard-Port laut BSI TR-03124-1
> const ws = new WebSocket("ws://localhost:24727/eID-Kernel");
>
> ws.onopen = () => {
>   // Verfügbare Kommandos abfragen
>   ws.send(JSON.stringify({ cmd: "GET_INFO" }));
> };
>
> ws.onmessage = (event) => {
>   const msg = JSON.parse(event.data);
>   if (msg.msg === "INFO") {
>     // eID-Prozess starten
>     ws.send(JSON.stringify({
>       cmd: "RUN_AUTH",
>       tcTokenURL: "https://dienst.example.de/tc-token"  // eID-Server-URL (TR-03130)
>     }));
>   }
> };
> ```
> - SDK-Doku: [ausweisapp.bund.de/sdk/](https://www.ausweisapp.bund.de/sdk/)
> - Android SDK (AAR): [Governikus/AusweisApp2-SDK-Android](https://github.com/Governikus/AusweisApp2-SDK-iOS)
> - Berechtigungszertifikat beantragen: [Bundesverwaltungsamt](https://www.ausweisapp.bund.de/en/faq-for-developers)
> - Testumgebung + virtuelle Testkarten: über BSI TR-03130-Testinstanz (Zugang auf Anfrage beim BSI)

### Zusammenhang mit eIDAS

Die deutsche eID ist als Notifizierung gemäß der [[eIDAS]]-Verordnung auf dem höchsten Sicherheitsniveau "hoch" eingestuft. Sie wird damit auch für behördliche Online-Dienste anderer EU-Staaten anerkannt. Die eIDAS-Verordnung bildet den europäischen Rechtsrahmen, in den die deutsche eID eingebettet ist.

### Nutzung für die Gesundheits-ID

> [!patientenrecht] Patientenrecht: Gesundheits-ID ist freiwillig
> Die [[Gesundheits-ID]] ist freiwillig. Sie müssen sie nicht anlegen.
>
> **Was Sie wissen sollten:**
> - Die eID-Funktion auf dem Ausweis wird nur aktiviert, wenn Sie das selbst möchten
> - Ihre Krankenkasse darf nur die Daten lesen, die für die Registrierung nötig sind
> - Alternativ können Sie die [[eGK]] (Ihre Gesundheitskarte) zur Registrierung nutzen
>
> **Was tun, wenn die PIN gesperrt ist?**
> 1. Ihre PIN ist nach drei falschen Eingaben gesperrt
> 2. Entsperren geht mit dem PUK aus Ihrem PIN-Brief
> 3. Neuen PIN setzen: beim Bürgeramt vor Ort oder online über die AusweisApp

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
