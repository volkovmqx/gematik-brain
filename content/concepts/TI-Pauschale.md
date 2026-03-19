---
title: TI-Pauschale
audience: [technical, non-technical]
tags: [concepts, vergütung, ebm, telematikinfrastruktur, arztpraxis]
aliases: [TI-Finanzierungspauschale, Telematikinfrastruktur-Pauschale]
maturity: wachsend
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, apotheke, pflege, kasse, it-dienstleister]
  interests: [compliance, business]
---

# TI-Pauschale

Die **TI-Pauschale** ist eine monatliche Vergütung, die Arztpraxen und andere Leistungserbringer von den gesetzlichen Krankenkassen erhalten, um die laufenden Kosten für Anschluss und Betrieb der [[Telematikinfrastruktur]] zu decken.

## Erklärt für Einsteiger

Eine Arztpraxis braucht bestimmte Technik, um an das digitale Gesundheitsnetz (die Telematikinfrastruktur) angeschlossen zu sein: einen Konnektor, Kartenlesegeräte, Ausweise für Arzt und Praxis, und verschiedene Programme. Das alles kostet Geld. Die TI-Pauschale ist der Betrag, den die Krankenkassen der Praxis jeden Monat überweisen, damit sie diese Kosten nicht selbst tragen muss. Wer die nötigen Geräte und Programme nicht nutzt, bekommt weniger.

## Überblick

Die TI-Pauschale wurde durch das Krankenhauspflegeentlastungsgesetz (KHPflEG) eingeführt und gilt seit dem 1. Juli 2023. Sie löste das vorherige System aus separaten Einmal- und Betriebskostenerstattungen ab und fasst die Finanzierung der TI-Infrastruktur in einer einheitlichen Monatspauschale zusammen.

Die Pauschale ist im [[EBM]] (Einheitlichen Bewertungsmaßstab) verankert und wird von den [[Kassenaerztliche-Vereinigung|Kassenärztlichen Vereinigungen]] ausgezahlt. Sie passt sich jährlich an den aktuellen Orientierungswert an: Zum 1. Januar 2026 stieg sie um 2,8 Prozent entsprechend dem neuen Orientierungswert von 12,7404 Cent.

### Höhe 2026

Die Pauschale staffelt sich nach der Praxisgröße (Anzahl der Ärzte und Psychotherapeuten in der Praxis):

| Praxisgröße | Monatliche TI-Pauschale (ab 01.01.2026) |
|---|---|
| 1-3 Ärzte/Psychotherapeuten (TI-Pauschale 1) | 263,62 Euro |
| 10-12 Ärzte/Psychotherapeuten | 390,80 Euro |
| 13-15 Ärzte/Psychotherapeuten | 422,50 Euro |
| 16-18 Ärzte/Psychotherapeuten | 454,20 Euro |

Für kleinere Praxen, Einzelpraxen und Praxen mit wenigen Ärztinnen und Ärzten gilt die TI-Pauschale 1 in Höhe von 263,62 Euro.

### Voraussetzungen für den vollen Anspruch

Um die volle TI-Pauschale zu erhalten, müssen Praxen sowohl die erforderlichen Komponenten betreiben als auch die verpflichtenden TI-Anwendungen aktiv nutzen:

**Komponenten:**
- [[Konnektoren|Konnektor]] mit gSMC-K und [[VPN-Zugangsdienst]]
- [[Kartenterminal]] mit [[gSMC-KT]]
- [[HBA]] (Heilberufsausweis) und [[SMC-B]] (Praxisausweis)

**Pflichtanwendungen:**
- [[NFDM|Notfalldatenmanagement (NFDM)]]
- [[ePA]] (Elektronische Patientenakte)
- [[KIM]] (Kommunikation im Medizinwesen)
- [[eAU]] (Elektronische Arbeitsunfähigkeitsbescheinigung)
- [[eArztbrief]]
- [[E-Rezept]]

### Abzüge bei fehlenden Anwendungen

Praxen, die einzelne Pflichtanwendungen nicht in der aktuell geforderten Version nachweisen können, erhalten Abzüge von der TI-Pauschale. Das System schafft damit einen wirtschaftlichen Anreiz für die vollständige TI-Nutzung.

> [!praxis-tipp] Praxis-Tipp: Volle Pauschale sichern, Abzüge vermeiden
> Fehlt eine Pflichtanwendung: Sie erhalten nur noch 50 % der Pauschale (also ca. 131 Euro statt 263,62 Euro für Einzelpraxen).
> Fehlen zwei oder mehr Anwendungen: Die Pauschale entfällt vollständig.
>
> Checkliste für Ihre Praxis:
> 1. [[ePA]]-Modul im PVS aktiv und in aktueller Version? Apotheken: ePA-Nachweis bis Ende 2025 erforderlich, sonst Kürzung ab 2026.
> 2. [[KIM]]-Adresse eingerichtet und im Verzeichnisdienst (VZD) eingetragen?
> 3. [[E-Rezept]] und [[eAU]] aktiv genutzt?
> 4. [[HBA]]- und [[SMC-B]]-Ablaufdaten prüfen. Neue Ausweise haben eine Vorlaufzeit von 4-6 Wochen.
>
> In Ihrer Praxis bedeutet das: Prüfen Sie einmal pro Quartal den Status aller TI-Komponenten und Anwendungen. Ihre KV informiert Sie über fehlende Nachweise.

## Technische Details

### Abrechnung und Auszahlung

> [!praxis-tipp] Praxis-Tipp: Pauschale kommt automatisch, Nachweise aber nicht
> Die TI-Pauschale wird monatlich von Ihrer KV ausgezahlt. Sie müssen keine Leistung pro Patient abrechnen. Aber: Die KV prüft technische Verbindungsdaten und Nutzungsnachweise. Stimmen diese nicht, wird die Pauschale still gekürzt.
>
> Was Sie jetzt tun sollten:
> 1. Ihren IT-Dienstleister beauftragen, alle Verbindungsnachweise des Konnektors zu dokumentieren.
> 2. Prüfen, ob Ihr PVS automatisch Nutzungsdaten an die KV übermittelt.
> 3. Bei Kürzungen: Widerspruch innerhalb von 4 Wochen nach Auszahlung einlegen.

Die TI-Pauschale wird nicht über die reguläre EBM-Fallabrechnung vergütet, sondern als eigene Pauschale außerhalb des Regelleistungsvolumens (RLV) gewährt. Die [[Kassenaerztliche-Vereinigung|Kassenärztliche Vereinigung]] zahlt sie monatlich direkt an die Praxis aus, ohne dass eine Leistungsabrechnung pro Patient erforderlich ist.

Grundlage für den Nachweis der Anspruchsvoraussetzungen sind die technischen Verbindungsdaten der TI-Komponenten (z.B. Verbindungsnachweis des [[Konnektoren|Konnektors]] zum [[VPN-Zugangsdienst]]) sowie der Nachweis der Nutzung der einzelnen Fachdienste.

### Abgrenzung: TI-Gateway-Praxen

Für Praxen, die keinen klassischen [[Konnektoren|Konnektor]] betreiben, sondern über ein [[TI-Gateway]] auf die TI zugreifen, gelten eigene Pauschalen. Das TI-Gateway ersetzt den stationären Konnektor und ermöglicht Cloud-basierten TI-Zugang. Die Pauschalen sind strukturell vergleichbar, berücksichtigen aber die unterschiedliche Kostenstruktur des Gateway-Betriebs.

### Verhältnis zum EBM

Die TI-Pauschale ist als eigenständige EBM-Position konzipiert. Der [[Bewertungsausschuss]] (paritätisches Gremium aus [[KBV]] und [[GKV-Spitzenverband]]) beschließt die Höhe der Pauschale und passt sie jährlich an. Die Anpassung folgt dem Orientierungswert, der ebenfalls jährlich neu festgesetzt wird.

## Verknüpfungen

- [[Telematikinfrastruktur]] (Infrastruktur, für die die Pauschale gezahlt wird)
- [[EBM]] (Regelwerk, in dem die TI-Pauschale verankert ist)
- [[Kassenaerztliche-Vereinigung]] (zahlt die TI-Pauschale aus)
- [[KBV]] (verhandelt die TI-Pauschale im Bewertungsausschuss)
- [[GKV-Spitzenverband]] (verhandelt die TI-Pauschale im Bewertungsausschuss)
- [[Bewertungsausschuss]] (beschließt Höhe und Bedingungen der TI-Pauschale)
- [[Konnektoren]] (Pflichtkomponente für den vollen Anspruch)
- [[Kartenterminal]] (Pflichtkomponente für den vollen Anspruch)
- [[SMC-B]] (Pflichtkomponente für den vollen Anspruch)
- [[HBA]] (Pflichtkomponente für den vollen Anspruch)
- [[TI-Gateway]] (Alternative zu Konnektor; eigene Pauschalenregelung)
- [[E-Rezept]] (Pflichtanwendung für vollen Pauschalenanspruch)
- [[ePA]] (Pflichtanwendung für vollen Pauschalenanspruch)
- [[KIM]] (Pflichtanwendung für vollen Pauschalenanspruch)

## Quellen

- [KBV Praxisnachricht: TI-Pauschale um 2,8 Prozent gestiegen (Januar 2026)](https://www.kbv.de/praxis/tools-und-services/praxisnachrichten/2026/01-08/ti-pauschale-gestiegen)
- [KBV: Telematikinfrastruktur – Finanzierung und Betrieb](https://www.kbv.de/praxis/digitalisierung/telematikinfrastruktur)
- [gematik: Telematikinfrastruktur – Finanzierung für Leistungserbringer](https://www.gematik.de/telematikinfrastruktur/finanzierung)
