---
title: KIM - Kommunikation im Medizinwesen
audience: [technical, non-technical]
tags: [anwendung, kim, kommunikation]
aliases: [Kommunikation im Medizinwesen, KOM-LE, Sichere E-Mail TI]
maturity: wachsend
---

# KIM - Kommunikation im Medizinwesen

**KIM** ist der sichere E-Mail-Dienst der [[Telematikinfrastruktur]]. Er ermöglicht den verschlüsselten Austausch von Nachrichten und medizinischen Dokumenten zwischen Leistungserbringern.

## Erklärt für Einsteiger

Stell dir vor, ein Arzt will einem anderen Arzt deinen Befund schicken. Per normaler E-Mail geht das nicht, weil Gesundheitsdaten geschützt werden müssen. KIM ist wie eine spezielle, sichere E-Mail nur für das Gesundheitswesen. Alles wird verschlüsselt, und nur der richtige Empfänger kann die Nachricht lesen. So können Arztbriefe, Laborergebnisse und Krankmeldungen sicher versendet werden.

## Überblick

KIM funktioniert wie E-Mail, ist aber Ende-zu-Ende-verschlüsselt und in die TI eingebunden. Jeder Teilnehmer hat eine KIM-Adresse im Format `name@anbieter.kim.telematik`. Es gibt 155 zertifizierte Anbieter-Organisationen.

### Was wird über KIM verschickt?
- [[eArztbrief|Arztbriefe]]
- Befunde und Laborergebnisse
- [[eAU]]-Meldungen an Krankenkassen
- Abrechnungsdaten
- Strukturierte Daten über sogenannte Dienstkennungen (für automatische Verarbeitung)

## Technische Details

### Architektur

KIM besteht aus drei Komponenten:

#### 1. Clientmodul
Das Clientmodul ist in das Primärsystem (Praxissoftware) integriert. Es verschlüsselt und signiert Nachrichten über die Schnittstellen des [[Konnektoren|Konnektors]].

#### 2. KIM-Fachdienst (Mailserver)
Der [[Fachdienst|KIM-Fachdienst]] routet verschlüsselte Nachrichten zwischen Teilnehmern. Er wird von zugelassenen Anbietern betrieben.

#### 3. Verzeichnisdienst (VZD)
Ein LDAP-basiertes Adressbuch ([[VZD]]), in dem alle registrierten KIM-Teilnehmer gelistet sind. KIM-Adressen haben das Format `name@anbieter.kim.telematik` und werden über den [[VZD]] aufgelöst.

### Protokoll und Verschlüsselung

- Verschlüsselung: S/MIME mit Zertifikaten der [[PKI|TI-PKI]]
- Signatur: Qualifizierte elektronische Signatur ([[QES]]) über [[Konnektoren|Konnektor]] und [[HBA]] oder [[SMC-B]]
- Maximale Nachrichtengröße: 25 MB (ab KIM 1.5: 524 MB über Large Message Service)
- Transport: SMTP/IMAP mit TLS

### Versionen

- KIM 1.0: Einführungsversion mit S/MIME und Basisauthentisierung
- KIM 1.5: Erweiterung der Nachrichtengröße auf 524 MB (Large Message Service), Dienstkennungen für automatisiertes Routing
- KIM 1.5.5 (aktuell): Release KIM_1_5_5, Spezifikationsversion gemAnbT 1.6.8 / gemProdT 1.6.5 (Februar 2026)

### Ablauf

1. Absender verfasst Nachricht im Primärsystem
2. Clientmodul verschlüsselt und signiert über den Konnektor
3. Nachricht wird an den KIM-Fachdienst übertragen
4. Fachdienst routet an den Empfänger-Fachdienst
5. Empfänger-Clientmodul entschlüsselt die Nachricht

### Dienstkennungen

Dienstkennungen sind strukturierte Metadaten im KIM-Header, die eine automatische Verarbeitung eingehender Nachrichten ermöglichen. Sie identifizieren den Anwendungsfall (z.B. eAU-Meldung, Arztbrief, Abrechnungsdaten) und erlauben gezieltes Routing im Primärsystem.

### Verbreitung im Pflegesektor

Laut **TI-Atlas 2025** (gematik / IGES Institut, veröffentlicht 24. November 2025) haben **mehr als 80 Prozent der Pflegeeinrichtungen einen Heilberufsausweis beantragt**. Ein Drittel der Pflegeeinrichtungen ist bereits vollständig TI-angebunden und **nutzt KIM aktiv**. Die Studie befragte über 6.600 Einrichtungen und 1.400 Bürgerinnen und Bürger.

### Pflicht zur elektronischen Pflegeabrechnung

Ab **1. Dezember 2026** müssen alle Pflegeeinrichtungen ihre Abrechnungsdaten nach SGB XI ausschließlich über KIM übermitteln. Eine papierbasierte Übermittlung ist ab diesem Zeitpunkt nicht mehr möglich. Voraussetzung ist die vollständige TI-Anbindung der Pflegeeinrichtung (Pflicht seit Juli 2025) einschließlich [[SMC-B]] und KIM-Client.

## Verknüpfungen

- Wird ergänzt durch [[TI-Messenger]] für Echtzeit-Kommunikation
- Transportweg für [[eAU]]
- Nutzt [[Konnektoren]] und [[SMC-B]] für Verschlüsselung
- Adressbuch über den [[VZD|Verzeichnisdienst]] der [[Telematikinfrastruktur]]
- [[SGB XI]] (Pflegeabrechnungspflicht ab Dezember 2026)

## Quellen

- [KIM - Fachportal](https://fachportal.gematik.de/anwendungen/kommunikation-im-medizinwesen)
- Spezifikationen: gemSpec gemAnbT_FD_KOMLE, gemProdT_CM_KOMLE, gemProdT_FD_KOMLE
- [TI-Atlas 2025 | gematik](https://www.gematik.de/newsroom/news-detail/meldung-ti-atlas)
