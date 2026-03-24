---
title: MVZ
audience: [technical, non-technical]
tags: [infrastruktur, versorgung, ambulant, einrichtung]
aliases: [Medizinisches Versorgungszentrum, Medizinische Versorgungszentren]
relevance:
  sectors: [arztpraxis, krankenhaus, it-dienstleister]
  interests: [business, compliance]
maturity: setzling
---

# MVZ

Ein **MVZ** (Medizinisches Versorgungszentrum) ist eine ambulante Einrichtung, in der mehrere Ärzte verschiedener Fachrichtungen unter einem Dach gemeinsam Patienten versorgen.

## Erklärt für Einsteiger

Normalerweise hat jeder Arzt seine eigene Praxis. Ein MVZ ist wie ein Einkaufszentrum für medizinische Versorgung: Internist, Kardiologe und Diabetologe sitzen im selben Gebäude, teilen sich Verwaltung und Technik und können Patienten direkt weiterleiten. Für die Patienten bedeutet das kürzere Wege. Für die Technik bedeutet das, dass alle diese Ärzte gemeinsam an die Gesundheitsinfrastruktur angebunden sein müssen.

## Überblick

MVZ wurden durch das GKV-Modernisierungsgesetz (GMG, verabschiedet November 2003, in Kraft ab 1. Januar 2004) in [[SGB-V]] § 95 eingeführt. Sie sind eine eigenständige Versorgungsform neben der klassischen Einzelpraxis. Gründen können ein MVZ unter anderem: Krankenhäuser, Vertragsärzte, Kommunen und bestimmte gemeinnützige Einrichtungen.

Ein MVZ hat eine eigene Zulassung als Einrichtung und beschäftigt angestellte Ärzte oder lässt niedergelassene Ärzte mit ihren Kassenzulassungen im MVZ tätig sein. Die Abrechnung mit den Kassenärztlichen Vereinigungen ([[Kassenaerztliche-Vereinigung|KV]]) erfolgt über die Einrichtung, nicht über einzelne Ärzte.

MVZ sind insbesondere in städtischen Ballungsräumen und in der Nachfolge von Krankenhäusern (Ambulantisierung) gewachsen. Krankenhäuser dürfen MVZ gründen, um ambulante Vor- und Nachsorge für ihre stationären Patienten zu integrieren.

### Relevanz für die TI-Anbindung

Für die [[Telematikinfrastruktur]] sind MVZ relevanter als Einzelpraxen, weil sie typischerweise:

- Mehrere Ärzte beschäftigen, die alle eigene [[HBA]]s benötigen
- Eine einzige Einrichtungsidentität über eine [[SMC-B]] haben
- Komplexere [[PVS|Praxisverwaltungssysteme (PVS)]] oder [[KIS|Krankenhausinformationssysteme (KIS)]] nutzen
- Potenziell mehrere Kartenterminals und Netzwerksegmente betreiben

Größere MVZ mit vielen Arztarbeitsplätzen setzen häufig einen **[[Highspeed-Konnektor]] (HSK)** ein, der mehrere Arztarbeitsplätze und Kartenterminals an einem zentralen Konnektor bündelt. Das ist wirtschaftlicher als ein separater [[Konnektoren|Konnektor]] pro Arztzimmer.

> [!praxis-tipp] Praxis-Tipp: TI-Aufbau im MVZ richtig planen
> Im MVZ läuft die TI-Anbindung anders als in einer Einzelpraxis. Wichtige Punkte:
>
> **Karten und Identitäten:**
> - Jeder Arzt im MVZ braucht einen eigenen HBA (persönliche Kammer-Beantragung).
> - Das MVZ selbst erhält eine SMC-B über die zuständige KV.
> - Die SMC-B kann erst beantragt werden, wenn mindestens ein HBA vorliegt.
>
> **Technik-Entscheidung: Highspeed-Konnektor oder TI-Gateway?**
> - Highspeed-Konnektor: Nur für eine einzige Betriebsstätte nutzbar, muss vor Ort stehen.
> - TI-Gateway (Cloud): Empfehlenswert bei mehreren Standorten. Standortübergreifende Nutzung möglich.
>
> **Typischer Fehler:** Krankenhausgetragene MVZ versuchen, den Highspeed-Konnektor des Krankenhauses mitzunutzen. Das ist technisch und regulatorisch nicht zulässig. Jede rechtlich eigenständige Betriebsstätte braucht einen eigenen TI-Zugang.

> [!interesse-business]
> MVZ sind ein wachsendes Segment im deutschen Gesundheitsmarkt. Laut KBV (Stand Ende 2023) gab es über 4.700 MVZ mit mehr als 23.000 angestellten Ärzten. IT-Dienstleister können mit MVZ Rahmenverträge für TI-Anbindung und PVS/KIS-Wartung schließen, da MVZ zentralisiert einkaufen. Krankenhausgetragene MVZ haben oft bereits IT-Strukturen, die eine TI-Gateway-Anbindung statt eines separaten Konnektors wirtschaftlich sinnvoll machen.

> [!interesse-compliance]
> Jeder im MVZ tätige Arzt benötigt einen eigenen HBA. Der HBA wird vom Arzt persönlich bei der zuständigen Landesärztekammer beantragt, nicht vom MVZ. Die SMC-B für das MVZ wird über die zuständige KV beantragt. Für die Telemonitoring-Pflicht (§ 37c SGB V ab 2024) und die ePA-Befüllungspflicht (ab 2025) gelten dieselben Fristen wie für Einzelpraxen.

> [!frist-warnung] Frist-Warnung: ePA-Befüllungspflicht und TI-Pauschalen-Sanktion
> **Rechtsgrundlage:** § 341 Abs. 6 SGB V (TI-Pauschale und Sanktion); § 347 SGB V (ePA-Befüllungspflicht); KBV-Richtlinie zur ePA (gemäß § 341 Abs. 7 SGB V)
> **Frist:** Seit dem **1. Oktober 2025** sind alle vertragsärztlichen Einrichtungen, einschließlich MVZ, verpflichtet, die ePA aktiv zu befüllen, sofern das PVS ein zertifiziertes ePA-Modul vorhält. Fehlender Nachweis führt zur Kürzung der TI-Pauschale um 1 % des Honorars für vertragsärztliche Leistungen (§ 341 Abs. 6 SGB V).
> **Handlungsbedarf für MVZ:** Stellen Sie sicher, dass das PVS des MVZ das ePA-Modul (ePA 3.0) installiert hat und für jeden Arztarbeitsplatz aktiviert ist. Jeder im MVZ tätige Arzt muss seinen eigenen HBA für ePA-Zugriffe und die QES-Signatur nutzen. Prüfen Sie außerdem, ob Ihre eHBA noch RSA-only sind: Diese müssen bis zum 30. Juni 2026 durch ECC-fähige Karten (G2.1) ersetzt werden.
> **Bei Nichtbeachtung:** Kürzung der TI-Pauschale um 1 % bis der Nachweis der ePA-Nutzung erbracht ist. Bei Wegfall der TI-Anbindungsvoraussetzungen (fehlender oder abgelaufener HBA) ist die Abrechnung von E-Rezept und eAU nicht mehr möglich.

## Technische Details

### TI-Anbindung im MVZ

Die TI-Anbindung eines MVZ folgt grundsätzlich denselben Regeln wie bei einer Praxis. Pro Einrichtung ist eine [[SMC-B]] erforderlich. Jeder Arzt im MVZ braucht seinen eigenen [[HBA]] für die qualifizierte elektronische Signatur ([[QES]]).

Für die Netzwerkarchitektur gibt es mehrere Muster:

- **Zentraler Konnektor**: Ein [[Konnektoren|Konnektor]] oder Highspeed-Konnektor bedient alle Arbeitsplätze des MVZ über das lokale Netzwerk.
- **TI-Gateway**: Statt eines lokalen Konnektors verbindet sich das MVZ-Netzwerk über ein cloud-basiertes [[TI-Gateway]]. Besonders attraktiv für MVZ mit mehreren Standorten.
- **Standortübergreifende MVZ**: Ein MVZ mit mehreren Standorten benötigt an jedem Standort einen eigenen TI-Zugang oder eine standortübergreifende VPN-Verbindung zu einem zentralen TI-Zugangspunkt.

### Abrechnung und TI

Die Abrechnung eines MVZ läuft über die [[Kassenaerztliche-Vereinigung|KV]]. Für [[E-Rezept]] und [[eAU]] ist die QES-Signatur durch den behandelnden Arzt mit seinem persönlichen [[HBA]] erforderlich. Die [[SMC-B]] des MVZ wird für die Einrichtungsauthentisierung und den [[KIM]]-Nachrichtenversand genutzt.

> [!praxis-tipp] Praxis-Tipp: HBA-Ablauf im MVZ rechtzeitig prüfen
> Im MVZ arbeiten mehrere Ärzte mit je einem eigenen HBA. Ein abgelaufener HBA blockiert E-Rezept und eAU für genau diesen Arzt.
>
> In Ihrem MVZ bedeutet das:
> - Legen Sie eine zentrale Liste aller HBA-Ablaufdaten an. Prüfen Sie sie quartalsweise.
> - Ein neuer HBA muss bei der zuständigen Landesärztekammer beantragt werden. Vorlaufzeit: ca. 4 bis 6 Wochen.
> - RSA-only-HBAs (eHBA G1.x) müssen bis zum 30. Juni 2026 durch ECC-fähige Karten (G2.1) ersetzt werden. Betrifft alle Ärzte im MVZ.
> - Tipp für die Praxismanagerin: Richten Sie eine Kalender-Erinnerung 8 Wochen vor Ablauf jedes HBAs ein.
>
> Häufiger Fehler: Im Trubel des Alltags wird ein HBA-Ablauf übersehen. Dann kann der betroffene Arzt keine E-Rezepte mehr signieren und die Sprechstunde läuft auf Notbetrieb.

> [!klinik-integration] Klinik-Integration: Krankenhausgetragenes MVZ als eigene TI-Einheit
> Ein vom Krankenhaus gegründetes MVZ (§ 95 Abs. 1 SGB V) ist rechtlich eine eigenständige Betriebsstätte. Das hat direkte Konsequenzen für die TI-Architektur.
>
> **Eigene SMC-B:** Das MVZ benötigt eine eigene [[SMC-B]], auch wenn es organisatorisch zum Krankenhaus gehört. Die SMC-B des Krankenhauses kann nicht für das MVZ mitgenutzt werden. Beantragung über die KV der Region.
> **TI-Zugang getrennt oder integriert:** Das MVZ kann seinen TI-Zugang über das [[TI-Gateway]] des Trägerkrankenhauses abwickeln, wenn der TI-Gateway-Anbieter Mehrmandantenfähigkeit unterstützt und der Zugang pro SMC-B separat eingerichtet ist. Ein gemeinsamer Hochverfügbarkeits-TI-Gateway-Vertrag ist wirtschaftlich attraktiv, muss aber die Trennung der Mandanten sicherstellen.
> **KIS-Integration vs. PVS:** Krankenhausgetragene MVZ nutzen häufig das [[KIS]] des Trägers (z.B. SAP ISH, Orbis). Prüfen Sie, ob das KIS eine ambulante Abrechnungskomponente enthält, die die KV-Schnittstellen (KVDT, KBV-Formulare) und die ePA-Pflichtbefüllung (ab Oktober 2025) abdeckt. Alternativ ist ein separates [[PVS]] für den ambulanten Betrieb erforderlich, das über eine definierte Schnittstelle mit dem KIS verbunden wird.
> **Ab 2026:** Mit dem ECC-Schlüsselwechsel (RSA auf ECC) müssen auch MVZ-seitige TI-Komponenten (Konnektor-Zertifikate, SMC-B) erneuert werden. Planen Sie dies im Rahmen des Krankenhaus-TI-Projekts ein.

### Besonderheit: Krankenhausgetragene MVZ

Krankenhäuser dürfen MVZ gründen (§ 95 Abs. 1 SGB V). Solche Einrichtungen nutzen häufig die IT-Infrastruktur des Krankenhauses mit und sind über das [[KIS]] des Trägerhauses angebunden. Die TI-Anbindung erfolgt dann häufig über den Highspeed-Konnektor des Krankenhauses.

## Verknüpfungen

- [[Konnektoren]] (TI-Zugangskomponente im MVZ, typisch Highspeed-Konnektor)
- [[TI-Gateway]] (cloud-basierte Alternative für MVZ mit mehreren Standorten)
- [[SMC-B]] (Institutionskarte des MVZ für die TI-Authentisierung)
- [[HBA]] (jeder Arzt im MVZ braucht seinen eigenen HBA)
- [[PVS]] (Praxisverwaltungssystem im MVZ)
- [[KIS]] (bei krankenhausgetragenen MVZ)
- [[Kassenaerztliche-Vereinigung|KV]] (Abrechnungspartner des MVZ)
- [[E-Rezept]] (Kernfunktion der TI-Anbindung im MVZ)
- [[SGB-V]] (§ 95 SGB V: Rechtsgrundlage für MVZ)

## Quellen

- [§ 95 SGB V – Zulassung zur vertragsärztlichen Versorgung](https://www.gesetze-im-internet.de/sgb_5/__95.html)
- [Bundesgesundheitsministerium: Medizinische Versorgungszentren](https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/ambulante-versorgung/medizinische-versorgungszentren)
- [Wikipedia: Medizinisches Versorgungszentrum](https://de.wikipedia.org/wiki/Medizinisches_Versorgungszentrum)
