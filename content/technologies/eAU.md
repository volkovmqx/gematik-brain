---
title: eAU - Elektronische Arbeitsunfähigkeitsbescheinigung
audience: [technical, non-technical]
tags: [anwendung, eau, arbeitsunfaehigkeit]
aliases: [Elektronische Arbeitsunfähigkeitsbescheinigung, Elektronische Krankschreibung, Digitale Krankschreibung]
---

# eAU - Elektronische Arbeitsunfähigkeitsbescheinigung

Die **eAU** ist die digitale Krankmeldung. Seit dem **1. Januar 2023** müssen Ärzte die AU-Daten elektronisch an die Krankenkasse übermitteln.

## Erklärt für Einsteiger

Wenn du krank bist und nicht arbeiten kannst, stellt dir der Arzt eine Krankmeldung aus. Früher war das ein gelber Zettel: ein Blatt für dich, eins für den Arbeitgeber, eins für die Krankenkasse. Jetzt schickt der Arzt die Daten direkt elektronisch an die Krankenkasse. Dein Arbeitgeber ruft die Krankmeldung dann bei der Krankenkasse digital ab. Du musst selbst nichts mehr einschicken.

## Überblick

### Ablauf
1. Arzt stellt AU im [[PVS|Praxisverwaltungssystem (PVS)]] aus
2. AU-Daten werden über [[KIM]] an die Krankenkasse gesendet
3. Arbeitgeber ruft die eAU-Daten bei der Krankenkasse elektronisch ab

Der Versicherte bekommt weiterhin einen Durchschlag für die eigenen Unterlagen.

## Technische Details

- Transport: [[KIM]]-Nachricht
- Signatur: [[QES|Qualifizierte elektronische Signatur]] via [[Konnektoren|Konnektor]] und [[HBA]]
- Datenformat: Strukturiertes XML ([[KBV]]-Vorgabe)
- TI-Anbindung: Über [[Konnektoren]] und [[SMC-B]]

## Verknüpfungen

- Nutzt [[KIM]] als Transportweg
- AU-Daten können in der [[ePA]] gespeichert werden
- Anbindung über die [[Telematikinfrastruktur]]
- Signatur über [[SMC-B]] und [[HBA]]

## Quellen

- [Fachportal - Anwendungen](https://fachportal.gematik.de/anwendungen)
- [KIM - Fachportal](https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen) (Transport-Spezifikation)
