---
title: MVZ
audience: [technical, non-technical]
tags: [infrastruktur, versorgung, ambulant, einrichtung]
aliases: [Medizinisches Versorgungszentrum, Medizinische Versorgungszentren]
---

# MVZ

Ein **MVZ** (Medizinisches Versorgungszentrum) ist eine ambulante Einrichtung, in der mehrere Ärzte verschiedener Fachrichtungen unter einem Dach gemeinsam Patienten versorgen.

## Erklärt für Einsteiger

Normalerweise hat jeder Arzt seine eigene Praxis. Ein MVZ ist wie ein Einkaufszentrum für medizinische Versorgung: Internist, Kardiologe und Diabetologe sitzen im selben Gebäude, teilen sich Verwaltung und Technik und können Patienten direkt weiterleiten. Für die Patienten bedeutet das kürzere Wege. Für die Technik bedeutet das, dass alle diese Ärzte gemeinsam an die Gesundheitsinfrastruktur angebunden sein müssen.

## Überblick

MVZ wurden durch das GKV-Modernisierungsgesetz 2004 in [[SGB-V]] § 95 eingeführt. Sie sind eine eigenständige Versorgungsform neben der klassischen Einzelpraxis. Gründen können ein MVZ unter anderem: Krankenhäuser, Vertragsärzte, Kommunen und bestimmte gemeinnützige Einrichtungen.

Ein MVZ hat eine eigene Zulassung als Einrichtung und beschäftigt angestellte Ärzte oder lässt niedergelassene Ärzte mit ihren Kassenzulassungen im MVZ tätig sein. Die Abrechnung mit den Kassenärztlichen Vereinigungen ([[Kassenärztliche Vereinigung]]) erfolgt über die Einrichtung, nicht über einzelne Ärzte.

MVZ sind insbesondere in städtischen Ballungsräumen und in der Nachfolge von Krankenhäusern (Ambulantisierung) gewachsen. Krankenhäuser dürfen MVZ gründen, um ambulante Vor- und Nachsorge für ihre stationären Patienten zu integrieren.

### Relevanz für die TI-Anbindung

Für die [[Telematikinfrastruktur]] sind MVZ relevanter als Einzelpraxen, weil sie typischerweise:

- Mehrere Ärzte beschäftigen, die alle eigene [[HBA]]s benötigen
- Eine einzige Einrichtungsidentität über eine [[SMC-B]] haben
- Komplexere [[PVS|Praxisverwaltungssysteme (PVS)]] oder [[KIS|Krankenhausinformationssysteme (KIS)]] nutzen
- Potenziell mehrere Kartenterminals und Netzwerksegmente betreiben

Größere MVZ mit vielen Arztarbeitsplätzen setzen häufig einen **Highspeed-Konnektor (HSK)** ein, der mehrere Arztarbeitsplätze und Kartenterminals an einem zentralen Konnektor bündelt. Das ist wirtschaftlicher als ein separater [[Konnektoren|Konnektor]] pro Arztzimmer.

## Technische Details

### TI-Anbindung im MVZ

Die TI-Anbindung eines MVZ folgt grundsätzlich denselben Regeln wie bei einer Praxis. Pro Einrichtung ist eine [[SMC-B]] erforderlich. Jeder Arzt im MVZ braucht seinen eigenen [[HBA]] für die qualifizierte elektronische Signatur ([[QES]]).

Für die Netzwerkarchitektur gibt es mehrere Muster:

- **Zentraler Konnektor**: Ein [[Konnektoren|Konnektor]] oder Highspeed-Konnektor bedient alle Arbeitsplätze des MVZ über das lokale Netzwerk.
- **TI-Gateway**: Statt eines lokalen Konnektors verbindet sich das MVZ-Netzwerk über ein cloud-basiertes [[TI-Gateway]]. Besonders attraktiv für MVZ mit mehreren Standorten.
- **Standortübergreifende MVZ**: Ein MVZ mit mehreren Standorten benötigt an jedem Standort einen eigenen TI-Zugang oder eine standortübergreifende VPN-Verbindung zu einem zentralen TI-Zugangspunkt.

### Abrechnung und TI

Die Abrechnung eines MVZ läuft über die [[Kassenärztliche Vereinigung]]. Für [[E-Rezept]] und [[eAU]] ist die QES-Signatur durch den behandelnden Arzt mit seinem persönlichen [[HBA]] erforderlich. Die [[SMC-B]] des MVZ wird für die Einrichtungsauthentisierung und den [[KIM]]-Nachrichtenversand genutzt.

### Besonderheit: Krankenhausgetragene MVZ

Krankenhäuser dürfen MVZ gründen (§ 95 Abs. 1 SGB V). Solche Einrichtungen nutzen häufig die IT-Infrastruktur des Krankenhauses mit und sind über das [[KIS]] des Trägerhauses angebunden. Die TI-Anbindung erfolgt dann häufig über den Highspeed-Konnektor des Krankenhauses.

## Verknüpfungen

- [[Konnektoren]] (TI-Zugangskomponente im MVZ, typisch Highspeed-Konnektor)
- [[TI-Gateway]] (cloud-basierte Alternative für MVZ mit mehreren Standorten)
- [[SMC-B]] (Institutionskarte des MVZ für die TI-Authentisierung)
- [[HBA]] (jeder Arzt im MVZ braucht seinen eigenen HBA)
- [[PVS]] (Praxisverwaltungssystem im MVZ)
- [[KIS]] (bei krankenhausgetragenen MVZ)
- [[Kassenärztliche Vereinigung]] (Abrechnungspartner des MVZ)
- [[E-Rezept]] (Kernfunktion der TI-Anbindung im MVZ)
- [[SGB-V]] (§ 95 SGB V: Rechtsgrundlage für MVZ)

## Quellen

- [§ 95 SGB V – Zulassung zur vertragsärztlichen Versorgung](https://www.gesetze-im-internet.de/sgb_5/__95.html)
- [Kassenärztliche Bundesvereinigung: Medizinisches Versorgungszentrum](https://www.kbv.de/html/mvz.php)
- [Wikipedia: Medizinisches Versorgungszentrum](https://de.wikipedia.org/wiki/Medizinisches_Versorgungszentrum)
