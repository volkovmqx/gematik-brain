---
title: gSMC-KT
audience: [technical]
tags: [infrastruktur, karte, kartenterminal, sicherheit, pki]
aliases: [Security Module Card Kartenterminal, Kartenterminal-Sicherheitsmodul]
---

# gSMC-KT

Die **gSMC-KT** (gematik Security Module Card für Kartenterminals) ist ein Sicherheitschip, der in jedem zugelassenen Kartenterminal verbaut ist und die Authentizität des Terminals gegenüber dem [[Konnektoren|Konnektor]] nachweist.

## Erklärt für Einsteiger

In der Arztpraxis steckt der Patient seine Gesundheitskarte in ein Lesegerät. Aber woher weiß der Konnektor, dass dieses Lesegerät wirklich ein zugelassenes Gerät aus der Arztpraxis ist und kein Gerät, das jemand heimlich angeschlossen hat? Das ist die Aufgabe der gSMC-KT: Sie ist der "Ausweis" des Kartenterminals. Ohne diesen eingebauten Chip würde der Konnektor das Terminal nicht als vertrauenswürdig akzeptieren. Der Chip ist fest im Terminal eingebaut und kann nicht herausgenommen werden.

## Überblick

Jedes zugelassene Kartenterminal enthält eine gSMC-KT als Pflichtbestandteil. Der Chip enthält kryptografische Schlüsselpaare und Zertifikate der [[PKI|TI-PKI]], mit denen das Terminal seine Identität nachweist.

Der [[Konnektoren|Konnektor]] baut beim Start eine authentisierte Verbindung zu jedem angeschlossenen Kartenterminal auf. Dafür prüft er das Zertifikat der gSMC-KT gegen die [[TSL|TI-Vertrauensliste (TSL)]]. Nur wenn das Zertifikat gültig und in der TSL verankert ist, akzeptiert der Konnektor das Terminal.

Die gSMC-KT ist eng mit dem Kartenterminal verknüpft: Sie wird bei der Herstellung eingebaut und ist nicht ohne Weiteres austauschbar. Das verhindert, dass ein gestohlenes Terminal mit einer neuen gSMC-KT manipuliert werden kann.

### Abgrenzung zu SMC-B und HBA

Die gSMC-KT ist die dritte Smartcard-Kategorie in der TI-Peripherie:

| Karte | Inhaber | Zweck |
|---|---|---|
| [[eGK]] | Versicherter | Versicherungsnachweis, Patientenidentität |
| [[HBA]] | Heilberufler | Persönliche Signatur, Arztidentität |
| [[SMC-B]] | Einrichtung | Institutionsidentität |
| gSMC-KT | Kartenterminal | Geräteauthentisierung des Terminals |

## Technische Details

### Zertifikate der gSMC-KT

Die gSMC-KT enthält folgende Zertifikate:

- **C.KT.AUT**: Authentisierungszertifikat des Kartenterminals gegenüber dem Konnektor. Dieses Zertifikat wird bei der Konnektor-Terminal-Paarung geprüft.

Das Zertifikat enthält die Seriennummer des Kartenterminals, den öffentlichen Schlüssel des Terminals und wird von einer zugelassenen CA der [[PKI|TI-PKI]] ausgestellt und in der [[TSL]] gelistet.

### Einbindung in die TI-PKI

Die gSMC-KT-Zertifikate bilden einen eigenen Zweig in der [[PKI|TI-PKI]]-Hierarchie. Die CA, die gSMC-KT-Zertifikate ausstellt, ist in der [[TSL]] gelistet. Der [[Konnektoren|Konnektor]] prüft:

1. Ist das Zertifikat der gSMC-KT von einer in der TSL gelisteten CA ausgestellt?
2. Ist das Zertifikat noch gültig (Laufzeit)?
3. Ist das Zertifikat nicht gesperrt (OCSP-Prüfung)?

Nur wenn alle drei Prüfungen positiv sind, wird das Terminal als vertrauenswürdig eingestuft.

### ECC-Migration und Übergangsfrist

Wie alle anderen TI-Smartcards werden auch die gSMC-KTs im Zuge der [[ECC-Migration]] auf neue Schlüsselverfahren umgestellt. Kartenterminals mit gSMC-KT G2.0 (RSA-only) müssen bis zum **31. Dezember 2026** durch Geräte mit ECC-fähiger gSMC-KT G2.1 ersetzt werden. Ab diesem Datum verlieren Terminals mit alter gSMC-KT die TI-Zulassung.

Hersteller von Kartenterminals, die noch G2.0-gSMC-KTs eingebaut haben, müssen entweder neue Terminals ausliefern oder die gSMC-KT im Gerät austauschen, sofern der Formfaktor das erlaubt.

### Kommunikation Konnektor-Terminal

Der Konnektor kommuniziert mit dem Kartenterminal über eine gesicherte Verbindung. Das Protokoll ist in der **gemSpec_KT**-Spezifikation festgelegt. Nach der Authentisierung über die gSMC-KT kann der Konnektor:

- Karten im Terminal auslesen (eGK, HBA, SMC-B)
- Den PIN-Status der Karten abfragen
- Karten-PIN-Eingaben am Terminal anfordern
- Kryptografische Operationen an die Karten delegieren

## Verknüpfungen

- [[Kartenterminal]] (das Gerät, das die gSMC-KT enthält)
- [[Konnektoren]] (prüft die gSMC-KT bei der Verbindungsaufnahme)
- [[PKI]] (TI-PKI-Hierarchie; gSMC-KT-Zertifikate sind Teil der TI-PKI)
- [[TSL]] (Vertrauensliste; die ausstellende CA der gSMC-KT muss hier gelistet sein)
- [[SMC-B]] (institutionelle Partnerkarte, steckt zusammen mit gSMC-KT im selben Terminal)
- [[HBA]] (persönliche Karte, wird ebenfalls im Terminal eingesteckt)
- [[eGK]] (Patientenkarte, wird im Terminal ausgelesen)
- [[OCSP]] (Zertifikatsstatus-Prüfung der gSMC-KT)

## Quellen

- [gematik Fachportal: Smartcards in der TI](https://fachportal.gematik.de/telematikinfrastruktur/smartcards)
- [gemSpec_KT - gematik Spezifikation Kartenterminal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_KT/latest/)
- [gematik Fachportal: ECC-Migration](https://fachportal.gematik.de/telematikinfrastruktur/ecc-migration)
