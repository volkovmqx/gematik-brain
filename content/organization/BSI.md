---
title: BSI
audience: [technical, non-technical]
tags: [organization, sicherheit, kryptografie, zertifizierung]
aliases: [Bundesamt für Sicherheit in der Informationstechnik]
relevance:
  sectors: [it-dienstleister, hersteller, ti-infrastruktur, regulierung]
  interests: [technik, compliance]
maturity: immergruen
---

# BSI

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) ist die zentrale Behörde für Cybersicherheit in Deutschland und zertifiziert Komponenten sowie kryptografische Verfahren der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Das BSI ist so etwas wie der TÜV für IT-Sicherheit in Deutschland. Genau wie der TÜV prüft, ob ein Auto sicher auf der Straße fahren darf, prüft das BSI, ob Software und Hardware sicher genug sind, um sensible Daten zu verarbeiten. In der Gesundheits-IT kontrolliert das BSI, ob die Verschlüsselung in der Arztpraxis oder in der Krankenakte sicher genug ist.

## Überblick

Das BSI wurde 1991 gegründet und ist dem Bundesministerium des Innern (BMI) unterstellt. Der Sitz ist in Bonn. Die Hauptaufgaben umfassen die Sicherheit der IT-Systeme des Bundes, die Zertifizierung von Produkten und die Veröffentlichung von Sicherheitsstandards.

Im Kontext der [[Telematikinfrastruktur]] hat das BSI eine klar definierte Rolle: Es zertifiziert wichtige TI-Komponenten, nachdem unabhängige Prüfstellen die Komponenten evaluiert haben. Ohne BSI-Zertifizierung darf eine Komponente nicht in der TI eingesetzt werden. Die [[gematik]] ist für die Zulassung zuständig, das BSI für die sicherheitstechnische Bewertung.

Das BSI arbeitet eng mit der [[gematik]] zusammen, um Sicherheitsstandards fortlaufend an neue Bedrohungslagen anzupassen. Die Zusammenarbeit ist im [[SGB-V]] gesetzlich verankert. Auch der [[BfDI|Bundesbeauftragte für Datenschutz und Informationsfreiheit (BfDI)]] ist in diesen Koordinierungsrahmen eingebunden.

## Technische Details

### BSI TR-03116: Kryptografische Vorgaben für die TI

Die Technische Richtlinie BSI TR-03116 legt bindende Anforderungen an kryptografische Verfahren für Projekte der Bundesregierung fest. Teil 1 betrifft direkt die [[Telematikinfrastruktur]] und regelt die Vorgaben für:
- [[eGK]] (elektronische Gesundheitskarte)
- [[HBA]] (Heilberufsausweis)
- Technische Komponenten der TI (Konnektoren, Fachdienste, Zugangsdienste)

Die TR-03116-1 schreibt vor, welche Algorithmen zugelassen sind und bis wann ältere Verfahren abgelöst werden müssen. Beispielsweise war RSA 2048 bis Ende 2025 zugelassen; seitdem ist ECC (brainpoolP256r1, brainpoolP384r1) der Pflichtstandard.

> [!dev-quickstart] Dev Quickstart: BSI TR-03116 konforme Kryptografie in der TI
> Pflichtstandards ab 2026 (BSI TR-03116-1):
> - Kurven: `brainpoolP256r1` (OID 1.3.36.3.3.2.8.1.1.7), `brainpoolP384r1` (OID 1.3.36.3.3.2.8.1.1.11)
> - Signatur: ECDSA mit SHA-256 oder SHA-384
> - TLS: TLS 1.2 (Mindest), TLS 1.3 empfohlen; Cipher Suites nach TR-03116-4
> ```bash
> # TLS-Konfiguration eines TI-Endpunkts prüfen (erlaubte Cipher Suites)
> openssl s_client -connect <ti-dienst-host>:443 \
>   -tls1_3 -curves brainpoolP256r1 2>&1 | grep -E "Cipher|Protocol|Curve"
>
> # ECC-Schlüsselpaar erzeugen (brainpoolP256r1, BSI TR-03116 konform)
> openssl ecparam -name brainpoolP256r1 -genkey -noout -out ti-key.pem
> openssl req -new -key ti-key.pem -out ti-csr.pem \
>   -subj "/CN=ti-dienst/O=Muster GmbH/C=DE"
> ```
> - TR-03116-1 (TI-Kryptografie): [bsi.bund.de/TR-03116](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03116/TR-03116_node.html)
> - TR-02102-1 (Algorithmenempfehlungen): [bsi.bund.de/TR-02102](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr02102/tr02102_node.html)
> - Grundschutz++ Kompendium (JSON): [github.com/BSI-Bund/Stand-der-Technik-Bibliothek](https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek)

### Weitere relevante BSI-Richtlinien

- **BSI TR-02102**: Kryptografische Verfahren allgemein (Empfehlungen zu Algorithmen und Schlüssellängen)
- **BSI TR-03110**: [[eID]]-Verfahren (relevant für die [[Gesundheits-ID]])
- **BSI IT-Grundschutz**: Rahmenwerk für Informationssicherheit in Behörden und Unternehmen

### Zertifizierungsverfahren

Hersteller von TI-Komponenten durchlaufen folgende Schritte:

1. Antragstellung beim BSI
2. Evaluation durch eine akkreditierte Prüfstelle (z.B. nach Common Criteria)
3. Prüfung der Sicherheitsnachweise durch das BSI
4. Ausstellung eines BSI-Zertifikats
5. Komponente kann von der [[gematik]] zur TI-Zulassung angemeldet werden

### Relevanz für die PKI

Die [[PKI]] der Telematikinfrastruktur muss die BSI-Vorgaben zu Zertifikaten, Schlüssellängen und Algorithmen einhalten. Die Wurzelzertifikate der TI-Root-CA werden nach BSI-Anforderungen erstellt und verwaltet.

### Sicherheitsstudie SiPra/DiPS (2026)

Im März 2026 veröffentlichte das BSI die Ergebnisse zweier Sicherheitsstudien: **SiPra** (Sicherheit in der Praxis) und **DiPS** (Digitale Produkte im Gesundheitswesen). Untersucht wurden Praxisverwaltungssysteme ([[PVS]]) und Pflegedokumentationssoftware im ambulanten Bereich.

Ergebnis: Bei drei von vier getesteten [[PVS]] lassen sich durch Verkettung einzelner Schwachstellen Angriffe aus dem Internet ermöglichen. Konkrete Mängel waren fehlende Transportverschlüsselung, veraltete Kryptoalgorithmen, schwache Authentifizierung und unsichere Update-Mechanismen.

[[PVS]]-Hersteller sind nach den gemSpec-Anforderungen der [[gematik]] zu sicherer Softwareentwicklung verpflichtet. Die BSI-Studie zeigt, dass diese Anforderungen nicht flächendeckend umgesetzt werden. Das BSI veröffentlichte daraufhin Empfehlungen für Hersteller und Betreiber; eine Kommentierungsfrist lief bis 17. Juni 2026. Die betroffenen Systeme wurden nicht namentlich genannt.

### Relevanz für die VAU

Die [[VAU]] (Vertrauenswürdige Ausführungsumgebung) des ePA-Aktensystems und des E-Rezept-Fachdienstes wird im Rahmen des [[Zulassungsverfahren|Zulassungsverfahrens]] vom BSI geprüft. Der öffentliche Schlüssel der VAU ist in einem BSI-geprüften Verfahren verankert.

### NIS2-Durchsetzungsphase

Seit dem **6. März 2026** befindet sich das [[NIS2UmsuCG]] (NIS2-Umsetzungsgesetz) in der aktiven Durchsetzungsphase. Das BSI hat damit verbindliche Befugnisse erhalten, um Compliance-Verstöße zu ahnden. Laut BSI verpassten rund **18.500 Unternehmen** die Registrierungsfrist.

Die Durchsetzungsbefugnisse des BSI nach § 38 NIS2UmsuCG umfassen:

- **Verbindliche Anordnungen**: Das BSI kann verpflichtende Maßnahmen zur Mängelbehebung anordnen
- **Audits und Prüfungen**: Das BSI darf Sicherheitsprüfungen und Audits anordnen
- **Bußgelder bis 10 Millionen Euro** (oder 2 Prozent des weltweiten Jahresumsatzes bei Unternehmen ab 50 Mitarbeitern oder 10 Millionen Euro Umsatz)
- **Persönliche Haftung der Geschäftsleitung**: Leitungsorgane haften persönlich für grobe Vernachlässigung von Cybersicherheitspflichten

Für das Gesundheitswesen gilt: Krankenhäuser und Gesundheitseinrichtungen, die die NIS2-Schwellenwerte erfüllen (ab 50 Mitarbeiter oder 10 Millionen Euro Umsatz), sind als "wesentliche Einrichtungen" oder "wichtige Einrichtungen" eingestuft und unterliegen direkt der BSI-Aufsicht.

> [!interesse-compliance] NIS2-Pflichten im Gesundheitswesen
> - Krankenhäuser mit ≥50 Mitarbeitern oder ≥10 Mio. EUR Umsatz: NIS2-Pflicht seit 18. Oktober 2024
> - Registrierung beim BSI: Frist war Oktober 2024; BSI hat Nachfrist bis März 2026 gewährt
> - Meldepflicht für Sicherheitsvorfälle: 24 Stunden Erstmeldung, 72 Stunden Folgemeldung
> - Bußgelder bis 10 Mio. EUR; Geschäftsführer persönlich haftbar
> - [[KIS]] und TI-Komponenten müssen den BSI-Mindestsicherheitsanforderungen genügen

### KRITIS-Dachgesetz

Der Bundestag verabschiedete das [[KRITIS-Dachgesetz]] am 29. Januar 2026, der Bundesrat stimmte am 6. März 2026 zu. Das Gesetz setzt die EU-CER-Richtlinie um und schafft einheitliche Mindeststandards für den physischen Schutz kritischer Infrastrukturen. Krankenhäuser und Gesundheitseinrichtungen fallen ausdrücklich in den Geltungsbereich. Betroffene Betreiber müssen sich ab 17. Juli 2026 registrieren und Risikoanalysen sowie Resilienzpläne erstellen. Das BSI koordiniert die Aufsicht über Cybersicherheitsanforderungen im Zusammenspiel mit dem neuen Gesetz.

### EUDI-Wallet-Handlungsleitfaden (2026)

Im Januar 2026 veröffentlichte das BSI einen Handlungsleitfaden zur Integration der [[EUDI-Wallet]] für Behörden. Der Leitfaden beschreibt, wie öffentliche Einrichtungen als Credential-Aussteller oder -Prüfer in die EUDI-Wallet-Infrastruktur eingebunden werden können. Für das Gesundheitswesen ist dies relevant: Krankenkassen als Aussteller der [[Gesundheits-ID]] und Leistungserbringer als Prüfer müssen die im Leitfaden beschriebenen Sicherheitsanforderungen erfüllen.

### IT-Grundschutz++

Ab 2026 modernisiert das BSI den IT-Grundschutz unter dem Namen Grundschutz++. Kernänderungen sind die Überführung in ein maschinenlesbares JSON-Format für automatisierte Compliance-Prüfungen, ein stärker risikobasierter Ansatz und eine reduzierte Dokumentationslast besonders für kleinere Organisationen. Da die [[Telematikinfrastruktur]] unter IT-Grundschutz-Anforderungen fällt, sind TI-Betreiber und Hersteller von den Neuerungen betroffen. Eine Übergangsphase läuft ab Januar 2026.

## Verknüpfungen

- [[gematik]] (Zulassungsbehörde; kooperiert mit BSI für Kryptografiestandards)
- [[PKI]] (Infrastruktur, deren kryptografische Anforderungen das BSI vorgibt)
- [[VAU]] (Ausführungsumgebung, die vom BSI geprüft wird)
- [[QES]] (qualifizierte Signatur; QES-Infrastruktur folgt BSI-Richtlinien)
- [[Telematikinfrastruktur]] (gesamtes System, in dem BSI-Zertifizierungen gelten)
- [[eGK]] (Komponente, für die BSI TR-03116-1 bindend ist)
- [[HBA]] (Heilberufsausweis; BSI-Vorgaben für Kryptografie gelten)

## Quellen

- [BSI TR-03116: Kryptografische Vorgaben für Projekte der Bundesregierung | bsi.bund.de](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03116/TR-03116_node.html)
- [BSI: Gesundheitskarte und Telematikinfrastruktur | bsi.bund.de](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/E-Health/Telematikinfrastruktur/telematikinfrastruktur.html)
- [BSI Pressemitteilung: Sicherheitsstudie SiPra/DiPS (17. März 2026)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260317_Software-Produkte_Gesundheitswesen.html)
- [BSI: Handlungsleitfaden EUDI-Wallet-Integration (Januar 2026)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/2026/Handlungsleitfaden_EUDI-Wallet-260116.html)
- [Wikipedia: Bundesamt für Sicherheit in der Informationstechnik](https://de.wikipedia.org/wiki/Bundesamt_f%C3%BCr_Sicherheit_in_der_Informationstechnik)
