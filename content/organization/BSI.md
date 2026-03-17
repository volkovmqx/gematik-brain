---
title: BSI
audience: [technical, non-technical]
tags: [organization, sicherheit, kryptografie, zertifizierung]
aliases: [Bundesamt für Sicherheit in der Informationstechnik]
---

# BSI

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) ist die zentrale Behörde für Cybersicherheit in Deutschland und zertifiziert Komponenten sowie kryptografische Verfahren der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Das BSI ist so etwas wie der TÜV für IT-Sicherheit in Deutschland. Genau wie der TÜV prüft, ob ein Auto sicher auf der Straße fahren darf, prüft das BSI, ob Software und Hardware sicher genug sind, um sensible Daten zu verarbeiten. In der Gesundheits-IT kontrolliert das BSI, ob die Verschlüsselung in der Arztpraxis oder in der Krankenakte sicher genug ist.

## Überblick

Das BSI wurde 1991 gegründet und ist dem Bundesministerium des Innern (BMI) unterstellt. Der Sitz ist in Bonn. Die Hauptaufgaben umfassen die Sicherheit der IT-Systeme des Bundes, die Zertifizierung von Produkten und die Veröffentlichung von Sicherheitsstandards.

Im Kontext der [[Telematikinfrastruktur]] hat das BSI eine klar definierte Rolle: Es zertifiziert wichtige TI-Komponenten, nachdem unabhängige Prüfstellen die Komponenten evaluiert haben. Ohne BSI-Zertifizierung darf eine Komponente nicht in der TI eingesetzt werden. Die [[gematik]] ist für die Zulassung zuständig, das BSI für die sicherheitstechnische Bewertung.

Das BSI arbeitet eng mit der [[gematik]] zusammen, um Sicherheitsstandards fortlaufend an neue Bedrohungslagen anzupassen. Die Zusammenarbeit ist im [[SGB-V]] gesetzlich verankert. Auch der Bundesbeauftragte für Datenschutz und Informationsfreiheit (BfDI) ist in diesen Koordinierungsrahmen eingebunden.

## Technische Details

### BSI TR-03116: Kryptografische Vorgaben für die TI

Die Technische Richtlinie BSI TR-03116 legt bindende Anforderungen an kryptografische Verfahren für Projekte der Bundesregierung fest. Teil 1 betrifft direkt die [[Telematikinfrastruktur]] und regelt die Vorgaben für:
- [[eGK]] (elektronische Gesundheitskarte)
- [[HBA]] (Heilberufsausweis)
- Technische Komponenten der TI (Konnektoren, Fachdienste, Zugangsdienste)

Die TR-03116-1 schreibt vor, welche Algorithmen zugelassen sind und bis wann ältere Verfahren abgelöst werden müssen. Beispielsweise war RSA 2048 bis Ende 2025 zugelassen; seitdem ist ECC (brainpoolP256r1, brainpoolP384r1) der Pflichtstandard.

### Weitere relevante BSI-Richtlinien

- **BSI TR-02102**: Kryptografische Verfahren allgemein (Empfehlungen zu Algorithmen und Schlüssellängen)
- **BSI TR-03110**: [[eID]]-Verfahren (relevant für die [[Gesundheits-ID]])
- **BSI IT-Grundschutz**: Rahmenwerk für Informationssicherheit in Behörden und Unternehmen

### Zertifizierungsverfahren

Hersteller von TI-Komponenten durchlaufen folgende Schritte:

1. Antragsstellung beim BSI
2. Evaluation durch eine akkreditierte Prüfstelle (z.B. nach Common Criteria)
3. Prüfung der Sicherheitsnachweise durch das BSI
4. Ausstellung eines BSI-Zertifikats
5. Komponente kann von der [[gematik]] zur TI-Zulassung angemeldet werden

### Relevanz für die PKI

Die [[PKI]] der Telematikinfrastruktur muss die BSI-Vorgaben zu Zertifikaten, Schlüssellängen und Algorithmen einhalten. Die Wurzelzertifikate der TI-Root-CA werden nach BSI-Anforderungen erstellt und verwaltet.

### Relevanz für die VAU

Die [[VAU]] (Vertrauenswürdige Ausführungsumgebung) des ePA-Aktensystems und des E-Rezept-Fachdienstes wird im Rahmen des Zulassungsverfahrens vom BSI geprüft. Der öffentliche Schlüssel der VAU ist in einem BSI-geprüften Verfahren verankert.

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
- [Wikipedia: Bundesamt für Sicherheit in der Informationstechnik](https://de.wikipedia.org/wiki/Bundesamt_f%C3%BCr_Sicherheit_in_der_Informationstechnik)
