---
title: eIDAS
audience: [technical, non-technical]
tags: [standards, recht, signatur, eu, vertrauensdienste]
aliases: [eIDAS-Verordnung, EU-Verordnung 910/2014, electronic Identification Authentication and trust Services]
---

# eIDAS

Die **eIDAS-Verordnung** (EU Nr. 910/2014) ist die europäische Rechtsgrundlage für elektronische Identifizierung und Vertrauensdienste. Sie definiert die drei Stufen elektronischer Signaturen und macht die [[QES|qualifizierte elektronische Signatur]] der handschriftlichen Unterschrift rechtlich gleichwertig.

## Erklärt für Einsteiger

Wenn du online etwas unterschreibst, kann das viele verschiedene Bedeutungen haben. Eine Unterschrift unter einer E-Mail beweist gar nichts. Eine qualifizierte elektronische Signatur (QES) hingegen ist wie ein amtlich beglaubigter Fingerabdruck: Sie beweist eindeutig, wer unterschrieben hat, und kann nicht gefälscht werden. Die eIDAS-Verordnung ist das EU-Gesetz, das festlegt, was eine solche Signatur leisten muss, damit sie in allen EU-Ländern rechtlich anerkannt wird.

## Überblick

eIDAS steht für "electronic Identification, Authentication and trust Services". Die Verordnung gilt seit dem 1. Juli 2016 unmittelbar in allen EU-Mitgliedstaaten und im Europäischen Wirtschaftsraum.

Vor eIDAS gab es in jedem EU-Land eigene nationale Regelungen für elektronische Signaturen, die nicht gegenseitig anerkannt wurden. eIDAS schaffte einen einheitlichen Rahmen: Eine QES, die in Deutschland ausgestellt wird, hat dieselbe rechtliche Wirkung in Frankreich, Polen oder Spanien.

Die Verordnung regelt zwei große Bereiche:

1. **Elektronische Identifizierung (eID)**: Gegenseitige Anerkennung nationaler eID-Systeme (z.B. der deutschen Online-Ausweisfunktion des Personalausweises) für den grenzüberschreitenden Zugang zu Behördenportalen.
2. **Vertrauensdienste**: Elektronische Signaturen, Siegel, Zeitstempel, Zertifikate für die Websiteauthentifizierung sowie elektronische Einschreiben.

In der deutschen [[Telematikinfrastruktur]] ist eIDAS die rechtliche Grundlage für die [[QES]], die Ärzte beim Ausstellen von [[E-Rezept|E-Rezepten]] und [[eAU|elektronischen Krankmeldungen]] verwenden.

## Technische Details

### Die drei Stufen elektronischer Signaturen

eIDAS definiert drei Kategorien. Jede höhere Stufe hat stärkere Anforderungen und eine stärkere Rechtswirkung:

| Stufe | Anforderungen | Rechtliche Wirkung |
|---|---|---|
| Einfache elektronische Signatur (EES) | Beliebige Daten, die einer Person zugeordnet sind | Gering, kontextabhängig |
| Fortgeschrittene elektronische Signatur (FES) | Eindeutig zugeordnet, nachträglich erkennbare Manipulation | Mittel |
| Qualifizierte elektronische Signatur (QES) | Qualifiziertes Zertifikat + QSCD | Handunterschrift gleichgestellt (Art. 25 Abs. 2 eIDAS) |

Die [[QES]] erfordert:
- Ein **qualifiziertes Zertifikat** (ausgestellt von einem qualifizierten Vertrauensdiensteanbieter)
- Eine **QSCD** (Qualified Signature Creation Device): ein sicheres Gerät, auf dem der private Schlüssel gespeichert ist und das die Karte nie verlässt. In der TI ist das der kryptografische Chip auf dem [[HBA]].

### Vertrauensdiensteanbieter

Organisationen, die qualifizierte Vertrauensdienste anbieten, werden als **qualifizierte Vertrauensdiensteanbieter (VDA)** bezeichnet. Sie müssen sich einer Konformitätsprüfung unterziehen und werden in der offiziellen EU-Vertrauensliste ("Trusted List") geführt.

In Deutschland unterliegen VDAs dem **Vertrauensdienstegesetz (VDG)** und der Aufsicht der **[[Bundesnetzagentur]]**. Sie prüft Anträge, führt Überwachungsaudits durch und kann Anbieter aus der Vertrauensliste streichen.

Qualifizierte Zertifikate für den [[HBA]] in der TI werden von akkreditierten VDAs ausgestellt, beispielsweise von D-Trust (Bundesdruckerei) und T-Systems.

### Verbindung zur TI-PKI

Die [[PKI]] der Telematikinfrastruktur enthält zwei Zertifikatskategorien:

- **TI-PKI-Zertifikate**: Von gematik akkreditierte Trust Service Provider (TSP) ausgestellt, für alle TI-Operationen (Authentifizierung, Verschlüsselung, Organisationssignaturen)
- **eIDAS-qualifizierte Zertifikate**: Auf dem [[HBA]] gespeichert (C.HP.QES), von VDAs ausgestellt, ausschließlich für die [[QES]]

Nur das QES-Zertifikat auf dem HBA ist nach eIDAS qualifiziert. Die anderen Zertifikate auf HBA und [[SMC-B]] sind TI-spezifische, nicht-qualifizierte Zertifikate.

### Signaturformate

Qualifizierte Signaturen folgen in der EU den technischen Standards des European Telecommunications Standards Institute (ETSI). Die wichtigsten Formate:

- **CAdES** (CMS Advanced Electronic Signatures): Für binäre Dokumente
- **XAdES** (XML Advanced Electronic Signatures): Für XML-Dokumente
- **PAdES** (PDF Advanced Electronic Signatures): Für PDF-Dokumente

In der TI werden überwiegend CAdES-Signaturen eingesetzt, z.B. beim [[E-Rezept]]-Bundle.

### eIDAS 2.0

Die überarbeitete eIDAS-Verordnung (EU 2024/1183, auch "eIDAS 2.0") trat am 20. Mai 2024 in Kraft. Kernneuerung ist die **European Digital Identity Wallet (EUDI Wallet)**: Jeder EU-Mitgliedstaat muss seinen Bürgern bis spätestens Anfang 2027 eine kostenlose, staatlich angebotene digitale Brieftasche bereitstellen, mit der sie sich grenzüberschreitend identifizieren und Nachweise (Führerschein, Krankenversicherungskarte, Zeugnisse) präsentieren können.

Die Nutzung ist freiwillig. Deutschland entwickelt seine EUDI-Wallet-Lösung unter Beteiligung der Bundesdruckerei und des BMI. Die Relevanz für die TI liegt darin, dass die Gesundheits-ID und der HBA zukünftig in die EUDI Wallet integriert werden könnten.

## Verknüpfungen

- [[QES]]: Die qualifizierte elektronische Signatur, die eIDAS auf höchster Stufe definiert
- [[HBA]]: Träger des qualifizierten QES-Zertifikats in der TI
- [[PKI]]: Zertifikatsinfrastruktur der TI; eIDAS-qualifizierte Zertifikate sind ein Teil davon
- [[Bundesnetzagentur]]: Nationale Aufsichtsbehörde für VDAs in Deutschland
- [[E-Rezept]]: Anwendungsfall, der QES nach eIDAS erfordert
- [[eAU]]: Anwendungsfall, der QES nach eIDAS erfordert
- [[SMC-B]]: Erzeugt keine QES, sondern eine Organisationssignatur
- [[TI-Federation]]: Nutzt eIDAS-konforme Identitätsmechanismen
- [[Gesundheits-ID]]: Langfristig mögliche Integration mit EUDI Wallet

## Quellen

- [eIDAS-Verordnung (EU) Nr. 910/2014 - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32014R0910)
- [eIDAS 2.0 (EU) 2024/1183 - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1183)
- [BSI: eIDAS-Verordnung](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/eIDAS-Verordnung/eidas-verordnung_node.html)
- [Bundesnetzagentur: Vertrauensdienste](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitalisierung/Vertrauensdienste/start.html)
