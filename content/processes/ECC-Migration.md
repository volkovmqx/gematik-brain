---
title: ECC-Migration
audience: [technical, non-technical]
tags: [prozesse, kryptographie, ecc, pki, migration]
aliases: [RSA-ECC-Migration, ECC-Umstellung, RSA zu ECC, ECC 256]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, hersteller, ti-infrastruktur]
  interests: [compliance, technik]
maturity: wachsend
---

# ECC-Migration

Die **ECC-Migration** bezeichnet die TI-weite Umstellung der kryptografischen Algorithmen von RSA auf Elliptic Curve Cryptography (ECC) in der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Stell dir vor, du hast ein Schloss, das schon älter ist und theoretisch mit einem sehr leistungsstarken Computer geknackt werden könnte. Die ECC-Migration ist wie der Austausch aller alten Schlösser gegen neue, modernere Schlösser, die schwerer zu knacken sind, aber auch noch kleiner und leichter sind. In der Telematikinfrastruktur bedeutet das: Alle Chipkarten, Konnektoren und Zertifikate, die bisher das ältere RSA-Verfahren nutzten, müssen auf das modernere ECC-Verfahren umgestellt werden.

## Überblick

RSA (Rivest-Shamir-Adleman) war über Jahrzehnte der Standardalgorithmus für asymmetrische Kryptografie in der TI. ECC (Elliptic Curve Cryptography) bietet bei kürzeren Schlüsseln ein höheres Sicherheitsniveau und reduziert Rechenaufwand sowie Speicherbedarf. Die [[BSI]]-Technischen Richtlinien (TR-03116, TR-02102) empfehlen ECC seit Jahren als bevorzugten Algorithmus.

Seit **1. Januar 2026** haben RSA-only-Konnektoren keinen TI-Zugang mehr. Alle neu ausgestellten Zertifikate für Karten und Komponenten sind ECC-basiert. Die Migration betrifft fünf Komponenten der TI gleichzeitig:

1. [[Konnektoren]] (Hardware-Zugangspunkte)
2. Primärsysteme und KIM-Clientmodule ([[PVS]], [[KIS]], [[AVS]])
3. Heilberufsausweise ([[HBA]])
4. Institutionelle Karten ([[SMC-B]])
5. Kartenterminal-Gerätekarten ([[gSMC-KT]])

> [!interesse-compliance]
> **Fristen im Überblick:**
> - **1. Januar 2026**: RSA-only-Konnektoren verlieren den TI-Zugang. Keine Ausnahmen.
> - **30. Juni 2026**: HBA Generation 2.0 (RSA) und SMC-B Generation 2.0 (RSA) müssen gegen ECC-Karten ausgetauscht sein.
> - **1. Juli 2026**: RSA (1900-3000 Bit) wird auch für QES und nonQES-Anwendungen verboten.
> - **31. Dezember 2026**: gSMC-KT Generation 2.0 muss gegen Generation 2.1 (ECC) getauscht werden.
>
> Praxen und Apotheken: Konnektor-Firmware prüfen oder auf [[TI-Gateway]] wechseln. Karten über die zuständige [[Landesaerztekammer|Landesärztekammer]] oder Apothekerkammer neu beantragen.

## Technische Details

### Warum ECC statt RSA?

| Merkmal | RSA 2048 | ECC 256 (brainpoolP256r1) |
|---|---|---|
| Schlüssellänge | 2048 Bit | 256 Bit |
| Sicherheitsniveau | ca. 112 Bit | ca. 128 Bit |
| Rechenaufwand | Hoch | Gering |
| Zukunftssicherheit | Begrenzt | Besser (Quantencomputer-Resistenz: noch nicht gegeben, aber besser) |

ECC-Kurven in der TI: **brainpoolP256r1** und **brainpoolP384r1** (gemäß BSI TR-03116).

### Betroffene Komponenten im Detail

#### Konnektoren

Seit 1. Januar 2026 sind RSA-only-Konnektoren von der TI ausgeschlossen. [[Konnektoren|Konnektoren]], die ECC-Verschlüsselung unterstützen, benötigen in der Regel ein Firmware-Update. RISE hat am 11. Februar 2026 die Firmware-Version 6.1.3:1.0.0 mit **ECC-Preferred-Feature** freigegeben. Einige ältere Konnektor-Modelle laufen technisch aus und können nicht auf ECC aufgerüstet werden. In diesem Fall ist der Wechsel auf den [[Highspeed-Konnektor]] oder das [[TI-Gateway]] erforderlich.

#### Heilberufsausweise (HBA) und SMC-B

HBA G2.0 und [[SMC-B]] G2.0 enthalten RSA-Zertifikate. Sie sind bis **30. Juni 2026** gültig. Danach verlieren sie den TI-Zugang für [[QES]] und nonQES-Anwendungen. Neue Karten ([[HBA]] G2.1, SMC-B G2.1) enthalten ECC-Zertifikate. Beantragung läuft über die zuständige Kammer.

#### gSMC-KT (Kartenterminal-Gerätekarten)

[[gSMC-KT]] G2.0 müssen bis **31. Dezember 2026** gegen G2.1 getauscht werden. Kompatible Kartenterminal-Versionen für das ECC-Preferred-Feature: Cherry ST1506 4.0.47, Worldline ORGA 6100 3.9.2, JDM 1.1.20.

### ECC-Testwochen Q1/2026

Die [[gematik]] führte vom 16. Februar bis 19. März 2026 ECC-Testwochen durch:

- **16. Februar 2026**: RSA-Abschaltung für QES/nonQES im Test
- **16.-17. Februar 2026**: Quickcheck-Phase
- **18. Februar - 19. März 2026**: ECC-only-Testphase
- **20. März 2026**: RSA-Reaktivierung im Test

> [!interesse-technik]
> Kurven: brainpoolP256r1 und brainpoolP384r1 nach BSI TR-03116. ECC-Preferred-Feature im RISE Konnektor (Firmware 6.1.3:1.0.0): ermöglicht schrittweise RSA-ECC-Migration, bevor alle Kartenterminals vollständig aktualisiert sind. Einschränkung: IBM- und Akquinet-KIM-Clientmodule unterstützen Brainpool-Kurven noch nicht vollständig. Spezifikationen: [[PKI]]-Konzept gemKPT_PKI_TIP der gematik, BSI TR-03116 für TI-Anforderungen, BSI TR-02102 für Algorithmenempfehlungen.

### Auswirkungen auf die TI-PKI

Die [[PKI]] der TI akzeptiert seit 1. Januar 2026 keine neuen RSA-Zertifikate mehr. Die [[TSL]] (Trust Service List) und der [[OCSP]]-Dienst wurden entsprechend aktualisiert. Bestehende RSA-Zertifikate bleiben bis zu ihrer jeweiligen Ablaufzeit gültig (letzte Frist: 31. Dezember 2026 für gSMC-KT).

## Verknüpfungen

- [[PKI]] (Zertifikatsinfrastruktur der TI; betroffen von der ECC-Migration)
- [[Konnektoren]] (Zugangspunkte zur TI; RSA-only-Modelle seit Januar 2026 ausgesperrt)
- [[HBA]] (Heilberufsausweis; G2.0 bis 30. Juni 2026 tauschpflichtig)
- [[SMC-B]] (Institutionskarte; G2.0 bis 30. Juni 2026 tauschpflichtig)
- [[gSMC-KT]] (Kartenterminal-Gerätekarte; G2.0 bis 31. Dezember 2026 tauschpflichtig)
- [[TSL]] (Trust Service List; enthält ECC-Sub-CAs)
- [[OCSP]] (Zertifikatsprüfung; akzeptiert seit 2026 nur noch ECC-Zertifikate für neue Ausstellungen)
- [[QES]] (Qualifizierte Signatur; erfordert HBA mit ECC-Zertifikat)
- [[BSI]] (gibt Algorithmenempfehlungen vor: TR-03116, TR-02102)
- [[gematik]] (koordiniert die Migration; betreibt Root-CA und TSL)
- [[TI-Gateway]] (Cloud-Konnektor-Nachfolger; ECC nativ)
- [[Kartenterminal]] (muss kompatible Firmware-Version haben)
- [[Highspeed-Konnektor]] (Alternative für Einrichtungen, die Konnektor ersetzen müssen)
- [[Telematikinfrastruktur]] (Gesamtsystem der Migration)

## Quellen

- [gematik: RSA zu ECC Migration](https://www.gematik.de/telematikinfrastruktur/rsa2ecc-migration)
- [gematik Fachportal: RSA zu ECC Migration](https://fachportal.gematik.de/zielgruppen/hersteller-anbieter-von-komponenten-diensten/rsa-zu-ecc-migration)
- [KBV: Frist für Austausch von Arzt- und Praxisausweisen bis Mitte 2026 verlängert](https://www.kbv.de/praxis/tools-und-services/praxisnachrichten/2025/11-17-extra/frist-fuer-austausch-von-arzt-und-praxisausweisen-bis-mitte-2026-verlaengert-kein-aufschub-fuer-aeltere-konnektoren)
- [telekonnekt.de: RSA zu ECC Migration – Fristen & aktuelle Infos](https://www.telekonnekt.de/artikel/rsa-zu-ecc-migration)
