---
title: EUDI-Wallet
audience: [technical, non-technical]
tags: [infrastructure, identität, eu, eidas, digitale-identität]
aliases: [European Digital Identity Wallet, EU Digital Identity Wallet, EUDIW, eIDAS 2.0 Wallet]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, kasse, hersteller, ti-infrastruktur, it-dienstleister, regulierung, patient]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# EUDI-Wallet

Die EUDI-Wallet (European Digital Identity Wallet) ist eine staatlich bereitgestellte digitale Brieftasche, die auf Basis von [[eIDAS]] 2.0 jedem EU-Bürger eine grenzüberschreitende digitale Identität und die sichere Verwaltung elektronischer Nachweise auf dem Smartphone ermöglicht.

## Erklärt für Einsteiger

Stell dir vor, du hast alle wichtigen Ausweise und Dokumente in einer einzigen, sicheren App auf deinem Handy: Personalausweis, Führerschein, Krankenversicherungskarte, Universitätszeugnisse. Mit dieser App kannst du dich in jedem EU-Land ausweisen, ohne ein einziges Plastikdokument bei dir haben zu müssen. Die EUDI-Wallet ist genau das: eine offizielle, staatlich anerkannte App, die deine Identität digital nachweist und dabei sicher und privatsphärefreundlich ist.

## Überblick

Die EUDI-Wallet wurde mit der überarbeiteten eIDAS-Verordnung (EU 2024/1183, auch "eIDAS 2.0") eingeführt, die am 20. Mai 2024 in Kraft trat. Alle 27 EU-Mitgliedstaaten sind verpflichtet, ihren Bürgerinnen und Bürgern bis November 2026 mindestens eine kostenlose, staatlich angebotene EUDI-Wallet bereitzustellen.

Die Nutzung der EUDI-Wallet ist freiwillig. Sie ergänzt bestehende nationale Identifikationssysteme, ersetzt sie aber nicht.

> [!patientenrecht] Patientenrecht: EUDI-Wallet ist freiwillig
> Die EUDI-Wallet ist eine neue App für Ihr Smartphone. Sie können damit Ihre Identität digital nachweisen. Zum Beispiel beim Arzt oder in anderen EU-Ländern.
>
> **Das ist wichtig für Sie:**
> - Die Nutzung ist kostenlos und freiwillig.
> - Sie werden nicht benachteiligt, wenn Sie die App nicht nutzen.
> - Ihre bisherigen Ausweise und Karten bleiben gültig.
> - Alle Daten werden nur auf Ihrem Gerät gespeichert. Niemand kann Ihre Daten zentral einsehen.
>
> **Sie entscheiden selbst:** Sie wählen, welche Daten Sie wem zeigen. Die App zeigt Ihnen, mit wem Sie in der Vergangenheit Daten geteilt haben.

Kernfunktionen der EUDI-Wallet sind:
- Digitaler Identitätsnachweis (online und offline) in allen EU-Mitgliedstaaten
- Speicherung und Vorzeigen von Nachweisen (Führerschein, Krankenversicherungskarte, Zeugnisse, Rezepte)
- Ausführung qualifizierter elektronischer Signaturen ([[QES]]) direkt vom Smartphone
- Pseudonymisierte Anmeldung bei Online-Diensten

Die EUDI-Wallet hat direkte Bedeutung für die deutsche [[Telematikinfrastruktur]]. Laut gematik soll die EUDI-Wallet-Technologie für digitale Identitäten von Leistungserbringern in der TI nutzbar gemacht werden. Langfristig könnten die [[Gesundheits-ID]] und der [[HBA]] in die EUDI-Wallet integriert werden.

## Technische Details

### Architecture Reference Framework (ARF)

Die technische Grundlage der EUDI-Wallet ist das **Architecture Reference Framework (ARF)**, das von der EU-Kommission und den Mitgliedstaaten gemeinsam entwickelt wurde. Das ARF definiert:

- Datenmodelle für Nachweise (Credentials)
- Protokolle für die Kommunikation zwischen Wallet, Ausstellern und Prüfern
- Sicherheitsanforderungen (z.B. Wallet Secure Cryptographic Device, WSCD)

### Nachweistypen

Die EUDI-Wallet unterscheidet zwei Kategorien von Nachweisen:

**Person Identification Data (PID):** Die grundlegende digitale Identität, ausgestellt vom jeweiligen Mitgliedstaat. Sie entspricht dem nationalen Identitätsdokument und muss vom Staat als qualifizierter Aussteller bereitgestellt werden.

**Electronic Attestation of Attributes (EAA):** Weitere Nachweise, die von verschiedenen Ausstellern (Behörden, Unternehmen, Bildungseinrichtungen) in die Wallet eingebracht werden können, z.B. Führerschein, Krankenversicherungsnachweis oder Berufsqualifikationen.

Für qualifizierte elektronische Attestierungen (QEAA) müssen Aussteller als qualifizierte Vertrauensdiensteanbieter nach [[eIDAS]] 2.0 zugelassen sein.

### Protokolle

Die EUDI-Wallet setzt auf offene Standards:

- **OpenID for Verifiable Credential Issuance (OID4VCI)**: Protokoll für die Ausstellung von Nachweisen vom Aussteller in die Wallet
- **OpenID for Verifiable Presentations (OID4VP)**: Protokoll für die Vorlage von Nachweisen gegenüber einem Prüfer
- **ISO/IEC 18013-5 (mDL)**: Standard für den mobilen Führerschein, auch offline per NFC oder Bluetooth nutzbar
- **SD-JWT (Selective Disclosure JWT)**: Ermöglicht die selektive Offenlegung einzelner Attribute aus einem Nachweis (z.B. nur das Alter, nicht das Geburtsdatum)

### Datenschutz und Sicherheit

Alle persönlichen Daten werden verschlüsselt lokal auf dem Smartphone des Nutzers gespeichert. Eine zentrale Speicherung oder ein staatliches Profiling ist technisch ausgeschlossen. Der Nutzer entscheidet selbst, welche Attribute er gegenüber welchem Dienst offenlegt.

Das WSCD (Wallet Secure Cryptographic Device) schützt kryptografische Schlüssel. Es kann als Hardware-Sicherheitselement (Secure Element) im Gerät oder als cloudbasiertes HSM (Hardware Security Module) implementiert sein.

### Deutschland: Umsetzungsstand

In Deutschland wird die EUDI-Wallet vom Bundesministerium für Digitales und Staatsmodernisierung (BMDS) verantwortet. Die Umsetzung erfolgt durch die Bundesagentur für Sprunginnovationen (SPRIND) in Zusammenarbeit mit dem [[BSI]], der Bundesdruckerei und weiteren Partnern.

- 28. Januar 2026: Testumgebung (Sandbox) gestartet, betrieben von BMDS und SPRIND. Unternehmen und Behörden können dort digitale Identifikation via Person Identification Data (PID) testen. Nach 12 Monaten können alternative Wallet-Anbieter ihre Lösungen als EUDI-Wallet zertifizieren lassen.
- Anfang 2027: Geplante Bereitstellung der ersten produktiven Version für die Öffentlichkeit

Der Quellcode der staatlichen EUDI-Wallet wird als Open Source veröffentlicht.

### Relevanz für die Telematikinfrastruktur

Die Konvergenz von EUDI-Wallet und TI ist ein strategisches Ziel der gematik im Rahmen der TI 2.0. Konkret sind folgende Szenarien in Planung oder Diskussion:

- **Gesundheits-ID in der EUDI-Wallet**: Die [[Gesundheits-ID]] soll als EAA (Electronic Attestation of Attributes) in der EUDI-Wallet gespeichert und genutzt werden. Das BMG plant den Produktivstart Anfang 2027, pünktlich zur deutschen EUDI-Wallet-Einführung. Die Krankenkassen fungieren als Credential-Aussteller nach dem OID4VCI-Protokoll.
- **HBA ohne Karte**: Ärztekammern sollen laut Gesetzgebung ab 2028 kartenunabhängige digitale Identitäten ausgeben. Diese könnten über die EUDI-Wallet als [[QES]]-fähige Fernsignatur genutzt werden.
- **Wallet-kompatible TI**: Die bestehende TI soll wallet-kompatibel werden, sodass Karten- und Konnektortechnologie schrittweise ersetzt werden kann.

### Gesundheitsdaten-Anwendungsfälle

> [!patientenrecht] Patientenrecht: Gesundheitsdaten in der Wallet
> Ab 2027 können Sie Ihre Krankenversicherungskarte als digitalen Nachweis in der EUDI-Wallet speichern. Das ist besonders nützlich, wenn Sie im EU-Ausland krank werden.
>
> **Was kommt in die Wallet?**
> - Ihre Krankenversicherungskarte (als digitaler Nachweis)
> - Ihr Impfausweis
> - Im EU-Ausland ausgestellte Rezepte
> - Wichtige Notfalldaten
>
> **Ihre Rechte:**
> - Sie entscheiden selbst, welche Gesundheitsdaten Sie in die Wallet laden.
> - Kein Arzt und keine Behörde kann Daten ohne Ihre Zustimmung hinzufügen.
> - Sie können Daten jederzeit aus der Wallet entfernen.

Über die Identitäts-Credentials hinaus sind weitere Gesundheitsdaten-Use-Cases für die EUDI-Wallet vorgesehen:

- **Digitaler Impfnachweis**: Das europäische Impfzertifikat (bisher als EU Digital COVID Certificate bekannt) soll in die EUDI-Wallet überführt werden.
- **Versicherungsnachweis**: Die [[Gesundheits-ID]] als Nachweis der Krankenversicherung gegenüber Leistungserbringern in anderen EU-Mitgliedstaaten.
- **Elektronisches Rezept (ePrescription)**: Im Rahmen des EHDS soll die grenzüberschreitende Übermittlung von Rezepten via Wallet ermöglicht werden.
- **Patientenkurzakte (Patient Summary)**: Notfalldaten sollen als Wallet-Credential ausgestellt werden, damit sie in anderen EU-Ländern lesbar sind.

Diese Anwendungsfälle werden im Rahmen des [[EHDS]] (Europäischer Gesundheitsdatenraum) und der eIDAS-2.0-Umsetzung standardisiert.

## Verknüpfungen

- [[eIDAS]] (Rechtsgrundlage: eIDAS 2.0 verpflichtet alle Mitgliedstaaten zur EUDI-Wallet)
- [[Gesundheits-ID]] (perspektivische Integration als EAA in die EUDI-Wallet)
- [[HBA]] (kartenunabhängige digitale Identität für Heilberufler ab 2028 geplant)
- [[QES]] (qualifizierte elektronische Signatur kann aus der EUDI-Wallet heraus erzeugt werden)
- [[eID]] (deutsche Online-Ausweisfunktion als Vorläufer und Registrierungsweg)
- [[PKI]] (Vertrauensinfrastruktur; EUDI-Wallet-Aussteller müssen qualifizierte VDAs sein)
- [[Telematikinfrastruktur]] (TI 2.0 soll wallet-kompatibel werden)
- [[BSI]] (beteiligt an Sicherheitsarchitektur der deutschen EUDI-Wallet)
- [[gematik]] (koordiniert TI-Integration der EUDI-Wallet)
- [[Bundesnetzagentur]] (Aufsicht über qualifizierte Vertrauensdiensteanbieter nach eIDAS 2.0)

## Quellen

- [EUDI-Wallet – Bundesministerium für Digitales und Staatsmodernisierung (BMDS)](https://bmds.bund.de/themen/digitaler-staat/digitale-identitaeten/eudi-wallet)
- [EU-Kommission: EU Digital Identity Wallet Home](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/694487738/EU+Digital+Identity+Wallet+Home)
- [eIDAS 2.0 (EU) 2024/1183 – EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1183)
- [Bundesärztekammer: Digitale Identitäten und EUDI-Wallet](https://www.bundesaerztekammer.de/themen/aerzte/digitalisierung/digitale-identitaeten)
- [Deutsches EUDI-Wallet-Projekt (BMI/SPRIND)](https://bmi.usercontent.opencode.de/eudi-wallet/eidas2/en/start/)
