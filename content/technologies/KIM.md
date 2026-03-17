---
title: KIM - Kommunikation im Medizinwesen
audience: [technical, non-technical]
tags: [anwendung, kim, kommunikation]
---

# KIM - Kommunikation im Medizinwesen

**KIM** ist der sichere E-Mail-Dienst der [[Telematikinfrastruktur]]. Er ermöglicht den verschlüsselten Austausch von Nachrichten und medizinischen Dokumenten zwischen Leistungserbringern.

## Erklärt für Einsteiger

Stell dir vor, ein Arzt will einem anderen Arzt deinen Befund schicken. Per normaler E-Mail geht das nicht, weil Gesundheitsdaten geschützt werden müssen. KIM ist wie eine spezielle, sichere E-Mail nur für das Gesundheitswesen. Alles wird verschlüsselt, und nur der richtige Empfänger kann die Nachricht lesen. So können Arztbriefe, Laborergebnisse und Krankmeldungen sicher versendet werden.

## Überblick

KIM funktioniert wie E-Mail, ist aber Ende-zu-Ende-verschlüsselt und in die TI eingebunden. Jeder Teilnehmer hat eine KIM-Adresse im Format `name@anbieter.kim.telematik`. Es gibt 155 zertifizierte Anbieter-Organisationen.

### Was wird über KIM verschickt?
- Arztbriefe
- Befunde und Laborergebnisse
- [[eAU]]-Meldungen an Krankenkassen
- Abrechnungsdaten
- Strukturierte Daten über sogenannte Dienstkennungen (für automatische Verarbeitung)

## Architektur

KIM besteht aus drei Komponenten:

### 1. Clientmodul
Das Clientmodul ist in das Primärsystem (Praxissoftware) integriert. Es verschlüsselt und signiert Nachrichten über die Schnittstellen des [[Konnektoren|Konnektors]].

### 2. KIM-Fachdienst (Mailserver)
Der Fachdienst routet verschlüsselte Nachrichten zwischen Teilnehmern. Er wird von zugelassenen Anbietern betrieben.

### 3. Verzeichnisdienst
Ein LDAP-basiertes Adressbuch ([[VZD]]), in dem alle registrierten KIM-Teilnehmer gelistet sind.

### Technische Details
- Verschlüsselung: S/MIME mit Zertifikaten der [[PKI|TI-PKI]]
- Maximale Nachrichtengröße: 25 MB (ab KIM 1.5+: 524 MB)
- Aktuelle Version: KIM 1.6.3 (Zertifizierungen gültig bis 2026)
- Dienstkennungen ermöglichen automatisierte Verarbeitung und gezieltes Routing

### Ablauf
1. Absender verfasst Nachricht im Primärsystem
2. Clientmodul verschlüsselt und signiert über den Konnektor
3. Nachricht wird an den KIM-Fachdienst übertragen
4. Fachdienst routet an den Empfänger-Fachdienst
5. Empfänger-Clientmodul entschlüsselt die Nachricht

## Verknüpfungen

- Wird ergänzt durch [[TI-Messenger]] für Echtzeit-Kommunikation
- Transportweg für [[eAU]]
- Nutzt [[Konnektoren]] und [[SMC-B]] für Verschlüsselung
- Adressbuch über den [[VZD|Verzeichnisdienst]] der [[Telematikinfrastruktur]]

## Quellen

- [KIM - Fachportal](https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen)
- Spezifikationen: gemSpec gemAnbT_FD_KOMLE, gemProdT_CM_KOMLE, gemProdT_FD_KOMLE
