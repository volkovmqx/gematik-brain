---
title: Konformitätsbewertung
audience: [technical]
tags: [processes, zulassung, gematik, kob, medizinprodukte, mdr, ivdr]
aliases: [KOB, Konformitätsbewertung, Konformitätsbestätigung, Zulassung TI-Komponenten]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, arztpraxis, kasse, startup]
  interests: [compliance, technik, business]
maturity: wachsend
---

# Konformitätsbewertung

Die **Konformitätsbewertung** ist der Pflichtprozess, durch den Hersteller von Telematikinfrastruktur-Komponenten und Primärsystemen nachweisen müssen, dass ihre Produkte den gematik-Spezifikationen entsprechen, bevor sie in der TI eingesetzt werden dürfen.

## Erklärt für Einsteiger

Stell dir vor, du baust ein neues Schloss für die Türen eines Hochsicherheitsgebäudes. Bevor du das Schloss einbauen darfst, muss jemand prüfen, ob es wirklich alle Sicherheitsanforderungen erfüllt. Die Konformitätsbewertung ist genau das für die digitale Gesundheitsinfrastruktur: Bevor ein Arzt-Computer-Programm oder eine App die [[ePA]] öffnen oder das [[E-Rezept]] ausstellen darf, muss die [[gematik]] bestätigen, dass das Programm nach den richtigen Regeln gebaut wurde.

## Überblick

Im deutschen Gesundheitssystem gibt es zwei Arten von Konformitätsbewertungen, die beide für Hersteller relevant sind:

### 1. Gematik-Konformitätsbewertung (KOB)

Die **Konformitätsbewertung (KOB)** bei der [[gematik]] ist ein Instrument zur Prüfung von Primärsystemen auf korrekte Umsetzung von Interoperabilitätsstandards. Sie wurde 2024 eingeführt und ist insbesondere für folgende Produktkategorien relevant:

- **[[PVS]]** (Praxisverwaltungssysteme) und [[AVS]] (Apothekenverwaltungssysteme)
- **[[KIS]]** (Krankenhausinformationssysteme)
- Sonstige TI-Fachdienste und Clients

Die KOB prüft vor allem die korrekte Implementierung von [[FHIR]]-Profilen und Terminologien. Der erste Anwendungsfall betraf die Medikationsliste im Rahmen des [[ePA]]-Rollouts: Bis Anfang 2026 wurden über 141 Systeme aus ambulantem und stationärem Bereich sowie Apothekensystemen erfolgreich bewertet.

Die [[gematik]] veröffentlicht auf dem Interoperabilitätsverzeichnis (INA) eine **Positivliste** der erfolgreich bewerteten Systeme.

> [!klinik-integration] Klinik-Integration: KOB und ISiK-Bestätigung für KIS
> Krankenhäuser sind als Betreiber und Auftraggeber von KIS direkt betroffen: Nur KIS-Systeme mit erfolgreicher KOB-Bestätigung dürfen ePA-Funktionen (insb. die digitale Medikationsliste, [[eML]]) im Klinikbetrieb nutzen.
>
> **Zwei parallele Verfahren für KIS-Hersteller:**
> - **KOB (gematik):** Prüft FHIR-Profilkonformität und korrekte Terminologienutzung. Pflicht für ePA-Integration im Krankenhaus.
> - **ISiK-Bestätigungsverfahren (gematik):** Eigenständiges Verfahren für Krankenhaus-IT-Systeme. ISiK Basis Stufe 3 war mit Frist Juli 2025 verpflichtend. Harmonisierung mit KOB ist laut gematik in Koordination.
>
> **Empfehlung IT-Leitung:** Beim KIS-Hersteller (SAP ISH, Orbis, iMedOne, Dedalus) aktiv anfragen, ob KOB-Bestätigung für eML sowie ISiK-Bestätigung Stufe 3 vorliegen. Fehlende Nachweise blockieren die ePA-Integration im Krankenhaus. Positivliste prüfen: [ina.gematik.de/kig/konformitaetsbewertung](https://www.ina.gematik.de/kig/konformitaetsbewertung).

> [!interesse-compliance] Pflicht zur KOB-Bewertung
> Primärsysteme, die an der ePA für alle teilnehmen und die digitale Medikationsliste (eML) befüllen oder lesen wollen, benötigen eine erfolgreiche KOB-Bestätigung. Systeme ohne KOB-Bestätigung dürfen die betreffenden Funktionen nicht nutzen. Die Positivliste der bewerteten Systeme ist unter [ina.gematik.de/kig/konformitaetsbewertung](https://www.ina.gematik.de/kig/konformitaetsbewertung) abrufbar. Die KOB-Pflicht wird schrittweise auf weitere TI-Anwendungsfälle ausgedehnt.

> [!frist-warnung] Frist-Warnung: KOB-Pflicht für eML-Teilnahme
> **Rechtsgrundlage:** § 342 SGB V i.V.m. § 355 SGB V (ePA-Anbindungspflicht für Primärsysteme); gematik-Anforderungsdokument gemäß § 385 SGB V
> **Frist:** Seit dem ePA-Rollout (ab 15. Januar 2025, flächendeckend ab 15. April 2025) dürfen Primärsysteme die ePA-Medikationsliste (eML) nur dann befüllen oder lesen, wenn eine gültige KOB-Bestätigung vorliegt.
> **Handlungsbedarf:** Hersteller von PVS, KIS und AVS müssen die KOB-Testsuite (github.com/gematik/KOB-Testsuite) durchlaufen, die Ergebnisse bei der gematik einreichen und die Aufnahme in die INA-Positivliste beantragen. Die Bewertung muss vor dem Produktivbetrieb der eML-Funktion abgeschlossen sein.
> **Bei Nichtbeachtung:** Primärsysteme ohne KOB-Bestätigung sind nicht berechtigt, die eML-Schnittstelle zu nutzen. Dies führt zur Nichterfüllung der Interoperabilitätsanforderungen nach § 385 SGB V und kann die Zulassung des Systems für die TI gefährden.

### 2. CE-Konformitätsbewertung nach MDR/IVDR

Für Produkte, die als Medizinprodukte eingestuft werden, gilt zusätzlich die CE-Konformitätsbewertung nach der EU-Medizinprodukteverordnung ([[MDR]], EU 2017/745) bzw. der EU-In-vitro-Diagnostika-Verordnung ([[IVDR]], EU 2017/746).

Software kann ein Medizinprodukt sein (Software as a Medical Device, SaMD). Entscheidend ist der bestimmungsgemäße Zweck: Wenn eine Software zur Diagnose, Prognose, Überwachung, Behandlung oder Linderung von Krankheiten eingesetzt wird, fällt sie unter die MDR.

Medizinprodukt-Software muss:
- Klassifiziert werden (Risikoklassen I bis III nach Anhang VIII MDR)
- Von einer **[[Benannte-Stelle|Benannten Stelle]]** (Notified Body) oder im Eigenverfahren (Klasse I) bewertet werden
- Das CE-Zeichen tragen
- In der **EUDAMED**-Datenbank der EU-Kommission registriert sein

> [!frist-warnung] Frist-Warnung: MDR-Übergangsfrist für Legacy-Software (SaMD)
> **Rechtsgrundlage:** Verordnung (EU) 2017/745 (MDR) i.V.m. Verordnung (EU) 2023/607 zur Verlängerung der Übergangsfristen
> **Fristen:** Klasse-III-Software (z.B. kritische klinische Entscheidungsunterstützung): 31. Dezember 2027. Klasse-IIb- und Klasse-IIa-Software sowie Klasse-I-Produkte mit Messfunktion oder in sterilem Zustand: 31. Dezember 2028.
> **Voraussetzungen für die Verlängerung:** Der Hersteller muss bis zum 26. Mai 2024 einen Übergangspfad mit einer Benannten Stelle vereinbart haben. Produkte ohne diese Vereinbarung dürfen die Übergangsfrist nicht in Anspruch nehmen.
> **Handlungsbedarf:** Hersteller von Gesundheitssoftware müssen prüfen, ob ihre Software als Medizinprodukt nach MDR Anhang VIII Regel 11 einzustufen ist. Liegt eine Klasse-IIa-Einstufung oder höher vor, ist unverzüglich eine Benannte Stelle zu beauftragen und die EUDAMED-Registrierung einzuleiten.
> **Bei Nichtbeachtung:** Software ohne gültige CE-Kennzeichnung nach MDR darf nach Ablauf der Übergangsfrist nicht mehr in Verkehr gebracht oder in Betrieb genommen werden (Art. 120 MDR).

## Technische Details

### KOB-Verfahren bei der gematik

Das KOB-Verfahren bei der [[gematik]] läuft in mehreren Schritten ab:

1. **Antragstellung**: Hersteller reicht Antrag und Produktdokumentation bei der gematik ein.
2. **Selbstauskunft**: Hersteller erklärt, welche Testfälle implementiert wurden.
3. **Testsuite**: Hersteller führt die öffentlich verfügbare **KOB-Testsuite** gegen seine Software aus. Die Testsuite ist auf GitHub veröffentlicht: [github.com/gematik/KOB-Testsuite](https://github.com/gematik/KOB-Testsuite).
4. **Tiger-Testplattform**: Seit November 2024 stellt die gematik die **Tiger**-Testplattform für begleitende Tests und Zertifizierungsverfahren bereit. Tiger bietet eine einheitliche Umgebung für TI-Tests.
5. **Bewertung**: Die gematik prüft die Testergebnisse und stellt bei Erfolg eine Konformitätsbescheinigung aus.
6. **Veröffentlichung**: Das Produkt erscheint auf der Positivliste der INA.

> [!interesse-technik] Entwickler-Ressourcen
> KOB-Testsuite (GitHub): [github.com/gematik/KOB-Testsuite](https://github.com/gematik/KOB-Testsuite). Enthält alle Pflicht-Testfälle für die KOB plus optionale Entwicklungstests. Testframework: Tiger (gematik). Positivliste eML: [ina.gematik.de/kig/konformitaetsbewertung/positivliste-kob-eml](https://www.ina.gematik.de/kig/konformitaetsbewertung/positivliste-kob-eml). Die Testsuite ist öffentlich zugänglich und sollte frühzeitig in den Entwicklungsprozess integriert werden.

> [!dev-quickstart] Dev Quickstart: KOB-Testsuite lokal ausführen
> Voraussetzungen: Java 17+, Maven 3.8+, laufendes Primärsystem, erreichbarer Konnektor (RU)
>
> ```bash
> # Repository klonen
> git clone https://github.com/gematik/KOB-Testsuite.git
> cd KOB-Testsuite
>
> # Pflicht-Testfälle für eML ausführen
> # Tiger-Proxy startet automatisch auf Port 8080
> mvn verify -Dcucumber.filter.tags="@KOB-eML-Muss"
>
> # Primärsystem-Traffic durch Tiger-Proxy routen:
> # Proxy-Einstellung im PS auf http://localhost:8080 setzen
> # Tiger-Workbench (UI) erreichbar unter http://localhost:8083
>
> # Alle Testberichte
> open target/site/serenity/index.html
> ```
>
> - Tiger-Proxy zeichnet TI-Traffic auf und prüft FHIR-Profile automatisch
> - Alle `@KOB-eML-Muss`-Tests müssen grün sein für die KOB-Einreichung
> - Tiger-Framework Doku: [gematik.github.io/app-Tiger/Tiger-User-Manual.html](https://gematik.github.io/app-Tiger/Tiger-User-Manual.html)
> - ePA-Deployment für lokale Testumgebung: [github.com/gematik/epa-deployment](https://github.com/gematik/epa-deployment)
> - Positivliste prüfen: [ina.gematik.de/kig/konformitaetsbewertung](https://www.ina.gematik.de/kig/konformitaetsbewertung)

### MDR-Klassifizierung von Gesundheitssoftware

Die Klassifizierung von Software nach MDR folgt Regeln in Anhang VIII. Relevante Regeln:

- **Regel 11**: Software, die zur Entscheidungsfindung für Diagnose oder Behandlung eingesetzt wird, wird mindestens als Klasse IIa eingestuft. Besonders kritische Entscheidungen (z.B. Blutzuckermessung für insulinpflichtige Patienten) erreichen Klasse III.
- Reine Verwaltungssoftware ([[PVS]] ohne Entscheidungsunterstützung, [[AVS]] ohne AMTS) gilt nicht als Medizinprodukt.

Für die Konformitätsbewertung nach MDR ist eine **Benannte Stelle** (z.B. TÜV SÜD, BSI als Notified Body für bestimmte Bereiche) erforderlich, sofern die Software nicht in Klasse I fällt.

### Verhältnis gematik-KOB zu MDR

Beide Verfahren sind voneinander unabhängig und können parallel gelten:

- Die **gematik-KOB** prüft interoperabilitätsbezogene Anforderungen (korrekte [[FHIR]]-Profile, Terminologien).
- Die **MDR-Konformitätsbewertung** prüft Sicherheits- und Leistungsanforderungen für Medizinprodukte.

Ein [[PVS]] mit AMTS-Entscheidungsunterstützung kann gleichzeitig einer MDR-Konformitätsbewertung und einer gematik-KOB unterliegen.

> [!klinik-integration] Klinik-Integration: MDR-Pflichten für Krankenhaus-IT als Betreiber
> Krankenhäuser sind nicht nur Anwender, sondern bei Eigenentwicklungen und Systemkonfigurationen ggf. auch Hersteller im Sinne der MDR. Entscheidend für IT-Leitungen:
>
> **Software-Beschaffung:** Beim Einkauf von KIS-Modulen mit klinischer Entscheidungsunterstützung (AMTS, CDSS, radiologische KI) darauf bestehen, dass der Hersteller CE nach MDR Klasse IIa oder höher nachweist und in EUDAMED registriert ist. Fehlendes CE ist ein Haftungsrisiko für das Krankenhaus.
>
> **Eigenentwicklungen:** Individuelle KIS-Konfigurationen mit automatisierten Diagnose- oder Dosierungsempfehlungen können das Krankenhaus zum Hersteller im Sinne der MDR machen. Rechtsabteilung und IT-Leitung sollten solche Szenarien gemeinsam prüfen.
>
> **Doppelpflicht:** KIS-Module, die FHIR-basierte ePA-Daten verarbeiten und klinische Entscheidungen unterstützen, unterliegen gleichzeitig KOB (gematik) und MDR (CE-Kennzeichnung). Beide Bestätigungen beim Hersteller einfordern.

## Verknüpfungen

- [[gematik]] (führt die KOB durch; veröffentlicht Positivliste)
- [[MDR]] (EU-Medizinprodukteverordnung; CE-Konformitätsbewertung für Software als Medizinprodukt)
- [[IVDR]] (EU-In-vitro-Diagnostika-Verordnung; für diagnostische Software)
- [[FHIR]] (zentrales Prüfobjekt der KOB)
- [[ePA]] (erster KOB-Anwendungsfall: eML-Medikationsliste)
- [[eML]] (elektronische Medikationsliste: zentraler KOB-Pflichtanwendungsfall für PVS, KIS, AVS)
- [[PVS]] (Primärsystem; Hauptzielgruppe der KOB)
- [[AVS]] (Apothekenverwaltungssystem; ebenfalls KOB-pflichtig für eML)
- [[KIS]] (Krankenhausinformationssystem; KOB für ePA-Krankenhaus-Module)
- [[ISiK]] (Interoperabilitätsstandard; eng mit KOB verbunden)
- [[Terminologieserver]] (korrekte Terminologienutzung ist KOB-Kriterium)
- [[AMTS]] (AMTS-Funktionen können Software zu Medizinprodukten machen)

## Quellen

- [gematik INA: Konformitätsbewertung](https://www.ina.gematik.de/kig/konformitaetsbewertung)
- [gematik: KOB sorgt mit Standards für Transparenz (Pressemitteilung)](https://www.gematik.de/newsroom/news-detail/kob-sorgt-mit-standards-fuer-transparenz-141-systeme-bereits-erfolgreich-bewertet)
- [GitHub: gematik KOB-Testsuite](https://github.com/gematik/KOB-Testsuite)
- [gematik INA: Lunch Break Konformitätsbewertung 2024 (PDF)](https://www.ina.gematik.de/fileadmin/Dokumente/20240813_Digital_Lunch_Break_KOB_public.pdf)
