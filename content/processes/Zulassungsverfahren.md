---
title: Zulassungsverfahren
audience: [technical, non-technical]
tags: [prozess, zulassung, gematik, regulierung, hersteller]
aliases: [Zulassungsverfahren, TI-Zulassung, Produktzulassung gematik]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister]
  interests: [compliance, technik]
maturity: setzling
---

# Zulassungsverfahren

Das **Zulassungsverfahren** ist der formale Prozess, mit dem die [[gematik]] prüft und bestätigt, dass ein Produkt oder Dienst die technischen, sicherheitsbezogenen und funktionalen Anforderungen der [[Telematikinfrastruktur]] erfüllt.

## Erklärt für Einsteiger

Stell dir vor, du entwickelst ein Gerät, das an das medizinische Datennetz angeschlossen werden soll. Bevor das Gerät wirklich ins Netz darf, muss ein TÜV-ähnlicher Prozess durchlaufen werden. Gematik übernimmt die Rolle dieses TÜVs: Sie prüft, ob das Produkt sicher ist, korrekt funktioniert und die Datenschutzvorgaben einhält. Erst nach einer Zulassung darf das Produkt in Arztpraxen oder Krankenhäusern eingesetzt werden.

## Überblick

Kein Produkt und kein Dienst darf in der [[Telematikinfrastruktur]] eingesetzt werden, ohne vorher eine Zulassung oder Bestätigung der [[gematik]] erhalten zu haben. Das Zulassungsverfahren ist im [[SGB-V]] gesetzlich verankert: § 325 SGB V regelt die TI-Zulassung als primäre Rechtsgrundlage; § 311 SGB V definiert die Aufgaben der gematik als Zulassungsbehörde. Die [[gematik]] ist die zuständige Zulassungsbehörde.

### Zulassungspflichtige Produkte

**Zulassung (vollständig)** ist erforderlich für:
- **Konnektoren** und Nachfolger ([[TI-Gateway]])
- **[[Kartenterminal|Kartenterminals]]** (stationär und mobil)
- **[[eGK|Elektronische Gesundheitskarten]]** und Kartenherausgabe-Systeme
- **[[HBA|Heilberufsausweise]]** und **[[SMC-B]]**
- **[[Fachdienst|Fachdienste]]** (ePA-Aktensystem, E-Rezept-Fachdienst, KIM-Dienst, VZD)
- **[[Sektoraler-IDP|Sektorale IDPs]]** und Zugangsdienste
- **ePA-FdV-Anwendungen** ([[ePA-App]])

**Bestätigung (vereinfacht)** ist ausreichend für:
- [[ISiK]]-konforme Krankenhausinformationssysteme ([[KIS]])
- ISIP-Implementierungen (Interoperabilitätsprofil Pflege)
- Weitere elektronische Dienste ohne direkten TI-Kernzugang

### Abgrenzung zu BSI-Zertifizierung

Das Zulassungsverfahren der [[gematik]] und die Zertifizierung durch das [[BSI]] sind separate Schritte. Das [[BSI]] prüft sicherheitsrelevante Komponenten nach Common Criteria (CC) oder einer BSI-Technischen Richtlinie. Erst nach erfolgreicher [[BSI]]-Bewertung kann die Komponente bei der [[gematik]] zur Zulassung angemeldet werden. Für viele Fachdienste (z.B. die [[VAU]]) ist die [[BSI]]-Prüfung Voraussetzung für die gematik-Zulassung.

> [!interesse-compliance]
> Wer als Hersteller oder Betreiber ein Produkt oder einen Dienst in der TI anbieten möchte, braucht zwingend eine gematik-Zulassung. Ohne Zulassung darf das Produkt nicht in Praxen, Krankenhäusern oder Apotheken eingesetzt werden. Leistungserbringer, die nicht-zugelassene Produkte einsetzen, riskieren den Verlust der [[TI-Pauschale]]. Die Zulassung muss bei Produktänderungen neu beantragt werden, wenn sicherheitsrelevante oder funktionale Merkmale betroffen sind.

## Prozessschritte

Das Zulassungsverfahren läuft in vier Phasen ab:

### Phase 1: Information und Vorbereitung

Der Hersteller prüft, welche Anforderungen für sein Produkt gelten. Die relevanten Spezifikationen (gemSpec-Dokumente) sind auf dem [gematik-Fachportal](https://fachportal.gematik.de) und auf [gemspec.gematik.de](https://gemspec.gematik.de) öffentlich verfügbar. Für jede Produktkategorie gibt es einen Produkttypsteckbrief (PTV), der die konkreten Prüfanforderungen beschreibt.

### Phase 2: Antragstellung

Der Antrag wird über das **Digitale Antragsportal** der gematik gestellt. Nach Eingang erhält der Hersteller einen Prozessschlüssel. Die Gebühren richten sich nach der **Telematikgebührenverordnung (TelematikGebV)** und variieren je nach Produktkategorie und Aufwand.

### Phase 3: Nachweiseinreichung

Der Hersteller reicht folgende Nachweise ein:
- **Sicherheitsnachweise**: Für sicherheitsrelevante Komponenten oft ein Common-Criteria-Zertifikat oder ein BSI-Prüfbericht
- **Funktionsnachweise**: Testergebnisse aus der gematik Referenzumgebung (RU)
- **Interoperabilitätsnachweise**: Ergebnisse der Kompatibilitätstests gegen andere TI-Komponenten
- **Betriebsnachweise**: Konzepte für Betrieb, Monitoring und Incident-Management

### Phase 4: Entscheidung

Die [[gematik]] prüft alle Nachweise und erteilt:
- **Zulassung**: Das Produkt erhält eine gültige Zulassung und wird in der Zulassungsübersicht veröffentlicht
- **Ablehnung**: Der Hersteller erhält eine Begründung und kann nachbessern

Zulassungen sind in der Regel befristet und müssen bei neuen Produktversionen erneuert werden.

> [!frist-warnung] Frist-Warnung: Zulassungspflicht vor Marktzugang
> **Rechtsgrundlage:** § 325 Abs. 1 SGB V i.V.m. § 311 Abs. 1 SGB V
> **Pflicht:** Kein Produkt und kein Dienst darf in der Telematikinfrastruktur eingesetzt werden, bevor die gematik eine Zulassung oder Bestätigung erteilt hat. Die Pflicht gilt für Hersteller und Betreiber gleichermaßen.
> **Handlungsbedarf:** Hersteller müssen vor Marktzugang den vollständigen Antragsprozess über das Digitale Antragsportal der gematik abschließen. Leistungserbringer dürfen ausschließlich in der öffentlichen Zulassungsübersicht gelistete Produkte einsetzen. Bei Produktänderungen, die sicherheitsrelevante oder funktionale Merkmale betreffen, ist die Zulassung neu zu beantragen.
> **Bei Nichtbeachtung:** Leistungserbringer, die nicht-zugelassene Produkte einsetzen, riskieren den Verlust der TI-Pauschale. Hersteller, die nicht-zugelassene Produkte vertreiben, verstoßen gegen § 325 SGB V.

## Technische Details

### gemSpec und Produkttypsteckbriefe

Jede TI-Komponente wird durch mindestens zwei Spezifikationsdokumente definiert:

- **ATV (Anbietertypsteckbrief)**: Anforderungen an den Anbieter/Betreiber (Service Level, Verfügbarkeit, Monitoring)
- **PTV (Produkttypsteckbrief)**: Technische Anforderungen an das Produkt (Schnittstellen, Kryptografie, Protokolle)

Alle aktuellen Steckbriefe sind auf [gemspec.gematik.de](https://gemspec.gematik.de) veröffentlicht.

### Referenzumgebung (RU)

Die gematik betreibt eine **Referenzumgebung (RU)**: eine vollständige TI-Testinstanz, gegen die Hersteller ihre Produkte testen können. Ohne erfolgreiche Tests auf der RU ist keine Zulassung möglich. Die RU wird regelmäßig mit neuen Spezifikationsversionen aktualisiert (z.B. ECC-Testwochen Q1/2026).

> [!dev-quickstart] Dev Quickstart: gemSpec-Spezifikationen und RU-Zugang
> Einstiegspunkte für Hersteller, die ein TI-Produkt zur Zulassung vorbereiten:
>
> ```bash
> # Alle aktuellen Spezifikationen und Produkttypsteckbriefe (PTV) durchsuchen
> # Basis-URL gemSpec-Suche:
> # https://gemspec.gematik.de/docs/gemSpec/
>
> # Beispiel: PTV für den PoPP-Dienst abrufen
> curl -s "https://gemspec.gematik.de/docs/gemProdT/gemProdT_PoPP_Service/gemProdT_PoPP_Service_PTV_1.0.0-0_V1.0.0/index.html"
>
> # Zulassungsübersicht als strukturierte Quelle
> # https://fachportal.gematik.de/zulassung/zulassungs-und-bestaetigungsuebersichten
> ```
>
> Checkliste RU-Testvorbereitung:
> - PTV für die eigene Produktkategorie herunterladen: [gemspec.gematik.de](https://gemspec.gematik.de)
> - Testinfrastruktur: RU-Zugang über gematik-Fachportal beantragen
> - ECC-Pflicht: ab Q1/2026 sind brainpoolP256r1/P-256 (ECC) in der RU verbindlich; RSA-only-Implementierungen werden abgelehnt
> - Testdaten: Nur RU-Testkarten und -zertifikate verwenden (keine Produktivkarten)
> - Antragsportal: [fachportal.gematik.de/zulassung](https://fachportal.gematik.de/zulassung)
> - gemSpec-GitHub: [github.com/gematik](https://github.com/gematik) (API-Repos, FHIR-Profile, Referenzimplementierungen)

### Konformitätsbewertung (KOB)

Ergänzend zur Zulassung führt die gematik das **Konformitätsbewertungsverfahren (KOB)** für [[PVS|Primärsysteme]] durch. Im Unterschied zur Zulassung prüft die KOB, ob [[PVS]], [[KIS]] und [[AVS]] die ePA-Schnittstellen korrekt implementieren. Systeme, die die KOB nicht bestehen, können vom Markt ausgeschlossen werden.

> [!frist-warnung] Frist-Warnung: Konformitätsbewertung Primärsysteme (KOB)
> **Rechtsgrundlage:** § 387 SGB V (Konformitätsbewertungsverfahren), § 388 SGB V (Marktzugangsverbot bei Nichtkonformität)
> **Pflicht:** Hersteller von PVS, KIS und AVS müssen nachweisen, dass ihre Systeme die verbindlichen Interoperabilitätsanforderungen der gematik erfüllen. Die gematik kann Systeme ohne gültige KOB-Bestätigung vom Markt ausschließen.
> **Handlungsbedarf:** Hersteller, deren Systeme noch nicht das KOB-Verfahren durchlaufen haben, müssen dies unverzüglich einleiten. Einrichtungen, die betroffene Systeme betreiben, sollten den Zertifizierungsstatus beim Hersteller erfragen und die öffentliche KOB-Übersicht der gematik prüfen.
> **Bei Nichtbeachtung:** Das Inverkehrbringen oder Bereithalten nicht-konformer Systeme ist nach § 388 SGB V untersagt.

> [!interesse-technik]
> Hersteller finden alle Spezifikationen auf [gemspec.gematik.de](https://gemspec.gematik.de). Das Antragsportal ist über das gematik-Fachportal erreichbar: [fachportal.gematik.de/zulassung](https://fachportal.gematik.de/zulassung). Für sicherheitsrelevante Komponenten gilt: BSI-Evaluation (Common Criteria EAL 2+/EAL 4+ je nach Komponente) ist Voraussetzung. Die Zulassungsübersicht aller aktuell zugelassenen Produkte ist öffentlich unter [fachportal.gematik.de/zulassung/zulassungs-und-bestaetigungsuebersichten](https://fachportal.gematik.de/zulassung/zulassungs-und-bestaetigungsuebersichten) einsehbar.

## Verknüpfungen

- [[gematik]] (Zulassungsbehörde)
- [[BSI]] (Sicherheitszertifizierung als Voraussetzung für gematik-Zulassung)
- [[Telematikinfrastruktur]] (das Netz, für das Zulassungen erteilt werden)
- [[SGB-V]] (gesetzliche Grundlage des Zulassungsverfahrens)
- [[Konnektoren]] (wichtige TI-Komponente mit Zulassungspflicht)
- [[Kartenterminal]] (zulassungspflichtige Hardware)
- [[Fachdienst]] (zulassungspflichtige Servicesysteme)
- [[VAU]] (Sicherheitskomponente, die BSI- und gematik-Prüfung erfordert)
- [[ISiK]] (Bestätigungsverfahren für KIS)
- [[TI-Gateway]] (Nachfolger des Konnektors; ebenfalls zulassungspflichtig)
- [[PKI]] (Zertifikatsinfrastruktur, die eng mit der Komponentenzulassung verknüpft ist)

## Quellen

- [Zulassung - Fachportal gematik](https://fachportal.gematik.de/zulassung)
- [Anträge und Verfahrensbeschreibungen - Fachportal gematik](https://fachportal.gematik.de/zulassung/antraege-und-verfahrensbeschreibungen)
- [Zulassungsübersicht - Fachportal gematik](https://fachportal.gematik.de/zulassung/zulassungs-und-bestaetigungsuebersichten)
- [§ 311 SGB V: Aufgaben der gematik](https://www.gesetze-im-internet.de/sgb_5/__311.html)
