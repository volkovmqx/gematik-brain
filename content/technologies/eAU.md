---
title: eAU - Elektronische Arbeitsunfahigkeitsbescheinigung
audience: [technical, non-technical]
tags: [anwendung, eau, arbeitsunfaehigkeit]
---

# eAU - Elektronische Arbeitsunfahigkeitsbescheinigung

Die **eAU** ist die digitale Krankmeldung. Seit dem **1. Januar 2023** mussen Arzte die AU-Daten elektronisch an die Krankenkasse ubermitteln.

## Erklart fur Einsteiger

Wenn du krank bist und nicht arbeiten kannst, stellt dir der Arzt eine Krankmeldung aus. Fruher war das ein gelber Zettel: ein Blatt fur dich, eins fur den Arbeitgeber, eins fur die Krankenkasse. Jetzt schickt der Arzt die Daten direkt elektronisch an die Krankenkasse. Dein Arbeitgeber ruft die Krankmeldung dann bei der Krankenkasse digital ab. Du musst selbst nichts mehr einschicken.

## Uberblick

### Ablauf
1. Arzt stellt AU im Praxisverwaltungssystem (PVS) aus
2. AU-Daten werden uber [[KIM]] an die Krankenkasse gesendet
3. Arbeitgeber ruft die eAU-Daten bei der Krankenkasse elektronisch ab

Der Versicherte bekommt weiterhin einen Durchschlag fur die eigenen Unterlagen.

## Technische Basis

- Transport: [[KIM]]-Nachricht
- Signatur: Qualifizierte elektronische Signatur (QES) via [[Konnektoren|Konnektor]] und HBA
- Datenformat: Strukturiertes XML (KBV-Vorgabe)
- TI-Anbindung: Uber [[Konnektoren]] und [[SMC-B]]

## Verknupfungen

- Nutzt [[KIM]] als Transportweg
- AU-Daten konnen in der [[ePA]] gespeichert werden
- Anbindung uber die [[Telematikinfrastruktur]]
- Signatur uber [[SMC-B]] und HBA

## Quellen

- [Fachportal - Anwendungen](https://fachportal.gematik.de/anwendungen)
- [KIM - Fachportal](https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen) (Transport-Spezifikation)
