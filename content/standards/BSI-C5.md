---
title: BSI C5
audience: [technical]
tags: [standards, cloud, sicherheit, bsi, zertifizierung, sgb-v]
aliases: [C5, BSI C5-Testat, Cloud Computing Compliance Criteria Catalogue]
maturity: wachsend
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, kasse, regulierung]
  interests: [compliance, technik]
---

# BSI C5

Der **BSI C5** (Cloud Computing Compliance Criteria Catalogue) ist ein Anforderungskatalog des Bundesamts für Sicherheit in der Informationstechnik ([[BSI]]) für Cloud-Dienstleister. Im deutschen Gesundheitswesen ist er nach § 393 SGB V Pflichtvoraussetzung für die Verarbeitung von Patientendaten in der Cloud.

## Erklärt für Einsteiger

Wenn ein Arzt oder ein Krankenhaus Patientendaten nicht auf einem eigenen Server, sondern in der Cloud speichert (z.B. bei einem externen Rechenzentrum), muss dieser Cloud-Anbieter beweisen, dass er sicher und vertrauenswürdig ist. Der BSI C5 ist der Sicherheitscheck, den der Anbieter dafür bestehen muss. Ein unabhängiger Prüfer (Wirtschaftsprüfer oder IT-Sicherheitsauditor) schaut sich das Rechenzentrum genau an und bestätigt: "Ja, dieser Anbieter erfüllt die Sicherheitsanforderungen." Erst mit diesem Zertifikat dürfen Gesundheitsdaten dort gespeichert werden.

## Überblick

Das [[BSI]] veröffentlichte den C5-Katalog erstmals im Jahr 2016 und aktualisierte ihn 2020 (C5:2020). Er definiert Mindestanforderungen an die Informationssicherheit von Cloud-Diensten in 17 Themenbereichen, darunter Organisationssicherheit, Identitäts- und Zugriffsmanagement, Datensicherheit und Incident Management.

Der C5 ist im Prinzip eine Erweiterung des internationalen Standards [[ISO-27001|ISO/IEC 27001]] um cloudspezifische Anforderungen. Er unterscheidet sich von [[ISO-27001|ISO 27001]] dadurch, dass er explizit auf Cloud-Umgebungen zugeschnitten ist und Transparenzanforderungen zur Offenlegung von Lieferketten, Subunternehmern und geografischen Standorten enthält.

### Gesetzliche Pflicht nach § 393 SGB V

Durch das **[[DigiG]]** (Digital-Gesetz 2024) wurde in **§ 393 SGB V** festgelegt, dass Leistungserbringer im Gesundheitswesen (Ärzte, Krankenhäuser, Apotheken) Patientendaten nur bei Cloud-Dienstleistern mit gültigem **C5-Testat** verarbeiten dürfen.

Die Übergangsfristen laut § 393 SGB V:
- **Typ-1-Testat**: Pflicht bis 1. Juli 2024 (Eignung des Kontrollsystems zum Stichtag)
- **Typ-2-Testat**: Pflicht bis 1. Juli 2025 (Wirksamkeitsprüfung über einen Prüfzeitraum)

> [!interesse-compliance] C5-Pflicht für Cloud-Nutzung im Gesundheitswesen
> Seit 1. Juli 2025 ist das C5-Typ-2-Testat für alle Cloud-Dienstleister Pflicht, bei denen Leistungserbringer Patientendaten verarbeiten (§ 393 SGB V i.d.F. des [[DigiG]]). Das Testat muss auf Anfrage vorgelegt werden. Prüfen Sie bei Ihrem Cloud-Anbieter: Liegt ein gültiges Typ-2-Testat für die deutschen Rechenzentrumsregionen vor? Für [[ePA]]-Aktensystembetreiber, [[DiGA]]-Hersteller mit Cloud-Backend und KIS-Anbieter mit Cloud-Hosting ist das Testat keine Option, sondern gesetzliche Pflicht.

## Technische Details

### Typ-1-Testat und Typ-2-Testat

Der BSI C5 sieht zwei Prüfungsarten vor:

**Typ-1-Testat (Design-Prüfung):**
- Prüft, ob das Kontrollsystem des Cloud-Anbieters zum Stichtag angemessen gestaltet ist.
- Bewertet: Existenz und Beschreibung der Sicherheitskontrollen.
- Gilt als erster Schritt. Kein Nachweis der tatsächlichen Wirksamkeit.

**Typ-2-Testat (Wirksamkeitsprüfung):**
- Prüft, ob die Sicherheitskontrollen über einen definierten Zeitraum (mindestens 6 Monate) wirksam betrieben wurden.
- Stärker als Typ-1: Nachweis der operativen Umsetzung über Zeit.
- Entspricht in etwa einem SOC 2 Type 2 Audit (amerikanisches Pendant).

### Prüfbereiche des C5

Der C5:2020 deckt 17 Themenbereiche ab:

- Organisationssicherheit (OIS)
- Sicherheitsrichtlinien (SP)
- Identitäts- und Zugriffsmanagement (IDM)
- Kryptografie und Schlüsselmanagement (KRY)
- Kommunikationssicherheit (KOS)
- Portabilität und Interoperabilität (PI)
- Verfügbarkeit (AVL)
- Datensicherheit (DSI)
- Trennung und Isolation (TI)
- Physische Sicherheit (PHS)
- Incident Management (INC)
- Business Continuity Management (BCM)
- Lieferantenmanagement (SSO)
- Compliance und Datenschutz (COS)
- Produktsicherheit (PS)
- Sicherheitsnachweise (SN)
- Transparenzinformationen (TRI)

### Verhältnis zu anderen Standards

Der C5 ergänzt bestehende Standards:

- **ISO/IEC 27001**: Der C5 baut darauf auf. Ein C5-Testat setzt in der Regel eine bestehende ISO-27001-Zertifizierung voraus oder schließt deren Anforderungen ein.

> [!interesse-technik] Technischer Einstieg: C5-Testat beantragen
> Der C5 ist kein Selbst-Assessment, sondern eine externe Prüfung durch akkreditierte Wirtschaftsprüfer oder IT-Sicherheitsauditoren. Der Ablauf: (1) Scope festlegen (welche Cloud-Dienste, welche Standorte), (2) Typ-1-Audit für Design-Prüfung beauftragen, (3) Typ-2-Audit nach mindestens 6 Monaten Betrieb. Das BSI veröffentlicht keine öffentliche Liste akkreditierter Prüfer. Akkreditierte Prüfer sind bei der DAkkS registriert. Hyperscaler (AWS, Azure, Google Cloud) veröffentlichen ihre C5-Testate für deutsche Regionen auf eigenen Compliance-Portalen. Spezifische Gesundheits-Cloud-Anbieter müssen das Testat direkt vorlegen.
- **SOC 2**: Amerikanisches Pendant. Einige Prüfer bieten kombinierte C5/SOC-2-Prüfungen an, um doppelten Aufwand zu reduzieren.
- **BSI IT-Grundschutz**: Ergänzender Standard des BSI für den öffentlichen Sektor.

### Anbieter mit C5-Testat

Das BSI führt keine öffentliche Liste zugelassener Anbieter. Cloud-Anbieter müssen das Testat auf Anfrage vorlegen. Große Hyperscaler (AWS, Microsoft Azure, Google Cloud) haben C5-Testate für ihre deutschen Rechenzentrumsregionen erworben. Spezialisierte Gesundheits-Cloud-Anbieter (z.B. für ePA-Aktensysteme) müssen das Testat ebenfalls nachweisen.

### Relevanz für die TI und ePA

- Aktensystembetreiber der [[ePA]] sind Cloud-Anbieter und benötigen das C5-Testat.
- Hersteller von [[DiGA]] (Digitale Gesundheitsanwendungen), die Daten in der Cloud speichern, müssen C5-konform sein.
- Das Testat ist keine einmalige Prüfung: Es muss regelmäßig erneuert werden (in der Regel jährlich für das Typ-2-Testat).

## Verknüpfungen

- [[BSI]] (herausgebende Behörde; definiert und pflegt den C5-Katalog)
- [[DigiG]] (Digital-Gesetz 2024; schreibt C5-Pflicht in § 393 SGB V fest)
- [[ePA]] (Aktensystembetreiber müssen C5-Testat vorweisen)
- [[DiGA]] (DiGA-Hersteller mit Cloud-Infrastruktur benötigen C5-Testat)
- [[SGB V]] (§ 393 SGB V: gesetzliche Grundlage der C5-Pflicht)
- [[DSGVO]] (C5-Testat ergänzt DSGVO-Compliance, ersetzt sie aber nicht)

## Quellen

- [BSI: Cloud Computing Compliance Criteria Catalogue (C5:2020)](https://www.bsi.bund.de/DE/Themen/CloudComputing/Anforderungskatalog/Anforderungskatalog_node.html)
- [§ 393 SGB V – Cloud-Nutzung im Gesundheitswesen](https://www.gesetze-im-internet.de/sgb_5/__393.html)
- [BSI: C5-Testate – Überblick](https://www.bsi.bund.de/DE/Themen/CloudComputing/Anforderungskatalog/Testate/Testate_node.html)
- [Wikipedia: BSI C5](https://de.wikipedia.org/wiki/Cloud_Computing_Compliance_Criteria_Catalogue)
