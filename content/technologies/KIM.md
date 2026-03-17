---
title: KIM - Kommunikation im Medizinwesen
audience: [technical, non-technical]
tags: [anwendung, kim, kommunikation]
---

# KIM - Kommunikation im Medizinwesen

**KIM** ist der sichere E-Mail-Dienst der [[Telematikinfrastruktur]]. Er ermoglicht den verschlusselten Austausch von Nachrichten und medizinischen Dokumenten zwischen Leistungserbringern.

## Erklart fur Einsteiger

Stell dir vor, ein Arzt will einem anderen Arzt deinen Befund schicken. Per normaler E-Mail geht das nicht, weil Gesundheitsdaten geschutzt werden mussen. KIM ist wie eine spezielle, sichere E-Mail nur fur das Gesundheitswesen. Alles wird verschlusselt, und nur der richtige Empfanger kann die Nachricht lesen. So konnen Arztbriefe, Laborergebnisse und Krankmeldungen sicher versendet werden.

## Uberblick

KIM funktioniert wie E-Mail, ist aber Ende-zu-Ende-verschlusselt und in die TI eingebunden. Jeder Teilnehmer hat eine KIM-Adresse im Format `name@anbieter.kim.telematik`. Es gibt 155 zertifizierte Anbieter-Organisationen.

### Was wird uber KIM verschickt?
- Arztbriefe
- Befunde und Laborergebnisse
- [[eAU]]-Meldungen an Krankenkassen
- Abrechnungsdaten
- Strukturierte Daten uber sogenannte Dienstkennungen (fur automatische Verarbeitung)

## Architektur

KIM besteht aus drei Komponenten:

### 1. Clientmodul
Das Clientmodul ist in das Primarsystem (Praxissoftware) integriert. Es verschlusselt und signiert Nachrichten uber die Schnittstellen des [[Konnektoren|Konnektors]].

### 2. KIM-Fachdienst (Mailserver)
Der Fachdienst routet verschlusselte Nachrichten zwischen Teilnehmern. Er wird von zugelassenen Anbietern betrieben.

### 3. Verzeichnisdienst
Ein LDAP-basiertes Adressbuch, in dem alle registrierten KIM-Teilnehmer gelistet sind.

### Technische Details
- Verschlusselung: S/MIME mit Zertifikaten der TI-PKI
- Maximale Nachrichtengrossse: 25 MB (ab KIM 1.5+: 524 MB)
- Aktuelle Version: KIM 1.6.3 (Zertifizierungen gultig bis 2026)
- Dienstkennungen ermoglichen automatisierte Verarbeitung und gezieltes Routing

### Ablauf
1. Absender verfasst Nachricht im Primarsystem
2. Clientmodul verschlusselt und signiert uber den Konnektor
3. Nachricht wird an den KIM-Fachdienst ubertragen
4. Fachdienst routet an den Empfanger-Fachdienst
5. Empfanger-Clientmodul entschlusselt die Nachricht

## Verknupfungen

- Wird erganzt durch [[TI-Messenger]] fur Echtzeit-Kommunikation
- Transportweg fur [[eAU]]
- Nutzt [[Konnektoren]] und [[SMC-B]] fur Verschlusselung
- Adressbuch uber den Verzeichnisdienst der [[Telematikinfrastruktur]]

## Quellen

- [KIM - Fachportal](https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen)
- Spezifikationen: gemSpec gemAnbT_FD_KOMLE, gemProdT_CM_KOMLE, gemProdT_FD_KOMLE
