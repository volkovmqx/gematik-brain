---
title: ISMS
audience: [technical]
tags: [konzept, sicherheit, bsi, krankenhaus, iso27001, kritis]
aliases: [Informationssicherheitsmanagementsystem, Information Security Management System, ISMS-Zertifizierung]
---

# ISMS

Ein **ISMS** (Informationssicherheitsmanagementsystem) ist ein systematisches Regelwerk aus Richtlinien, Prozessen und Kontrollen, mit dem eine Organisation ihre Informationssicherheit strukturiert verwaltet und kontinuierlich verbessert.

## Erklärt für Einsteiger

Stell dir vor, ein Krankenhaus hat Tausende von Patientendaten auf seinen Computern. Ein ISMS ist wie ein Sicherheitshandbuch, das festlegt: Wer darf auf welche Daten zugreifen? Was passiert, wenn ein Computer gehackt wird? Wie werden Mitarbeiter geschult? Wie wird überprüft, ob alle Regeln eingehalten werden? Ein ISMS beantwortet all diese Fragen schriftlich und sorgt dafür, dass die Sicherheitsmaßnahmen nicht vom Zufall abhängen.

## Überblick

Ein ISMS basiert auf einem kontinuierlichen Verbesserungsprozess, dem **PDCA-Zyklus** (Plan, Do, Check, Act). Zentrale Bestandteile sind:

- **Risikoanalyse**: Identifikation und Bewertung von Bedrohungen und Schwachstellen
- **Sicherheitsrichtlinien**: Verbindliche Vorgaben für Mitarbeiter, Systeme und Prozesse
- **Technische und organisatorische Maßnahmen (TOMs)**: Konkrete Schutzmaßnahmen
- **Incident Management**: Prozesse für den Umgang mit Sicherheitsvorfällen
- **Internes Audit und Managementbewertung**: Regelmäßige Überprüfung der Wirksamkeit

### ISMS im deutschen Gesundheitswesen

Im deutschen Gesundheitswesen ist ein ISMS in mehreren Kontexten vorgeschrieben:

1. **KRITIS-Krankenhäuser**: Krankenhäuser mit über 30.000 vollstationären Fällen pro Jahr sind als [[KRITIS|kritische Infrastruktur]] eingestuft. Sie müssen nach § 8a BSIG ein ISMS betreiben und alle zwei Jahre Sicherheitsnachweise gegenüber dem [[BSI]] erbringen.

2. **KHZG-geförderte Krankenhäuser**: Das [[KHZG|Krankenhauszukunftsgesetz]] macht ein ISMS ab **1. Januar 2025** zur Pflicht für alle Krankenhäuser, die KHZG-Fördergelder (Fördertatbestand 10: IT-Sicherheit) erhalten haben. Grundlage ist ISO 27001 oder BSI IT-Grundschutz, alternativ der branchenspezifische Sicherheitsstandard **B3S Krankenhaus**.

3. **TI-Betreiber**: Zugelassene Betreiber von Diensten in der [[Telematikinfrastruktur]] müssen ein ISMS nachweisen. Die [[gematik]] selbst ist ISO-27001-zertifiziert.

### Relevante Standards

Zwei Standards dominieren im deutschen Markt:

- **ISO/IEC 27001**: Internationaler Standard, rahmenbasiert, zertifizierbar durch akkreditierte Stellen.
- **BSI IT-Grundschutz**: Deutsches Pendant des [[BSI]], technisch detaillierter. Ermöglicht ebenfalls eine ISO-27001-Zertifizierung auf Basis von IT-Grundschutz.

## Technische Details

### ISO/IEC 27001 Anforderungen

Die ISO 27001:2022 (aktuelle Fassung) definiert in ihren Klauseln 4 bis 10 die ISMS-Anforderungen:

- **Klausel 6.1.2**: Risikobeurteilung: Kriterien, Methodik, Ergebnisse dokumentieren
- **Klausel 6.1.3**: Risikobehandlungsplan: Maßnahmen aus Annex A auswählen und implementieren
- **Annex A**: 93 Sicherheitsmaßnahmen (Controls) in vier Themenbereichen: Organisatorisch, Personell, Physisch, Technologisch

Die Zertifizierung erfolgt durch akkreditierte Zertifizierungsstellen (z.B. TÜV, DQS, BSI) in einem mehrstufigen Auditverfahren.

### BSI IT-Grundschutz

Das BSI IT-Grundschutz-Kompendium besteht aus:

- **IT-Grundschutz-Profilen**: Vorangepasste ISMS-Vorlagen für bestimmte Einrichtungstypen (z.B. Krankenhaus, Behörde)
- **Bausteinweise Maßnahmenkataloge**: Konkrete technische und organisatorische Anforderungen pro Systemkomponente
- **Standard 200-1** bis **200-4**: Methodische Grundlagen für ISMS-Einführung, Risikomanagement und Notfallmanagement

### Branchenspezifischer Sicherheitsstandard (B3S) Krankenhaus

Der **B3S Krankenhaus** wurde von der [[DKG|DKG (Deutsche Krankenhausgesellschaft)]] gemeinsam mit dem [[BSI]] entwickelt und als sektorspezifische Alternative zu ISO 27001 für Krankenhäuser anerkannt. Er konkretisiert die KRITIS-Anforderungen für den Krankenhausbetrieb und berücksichtigt Besonderheiten wie:

- Medizingeräte-Netzwerke (IoMT)
- Verfügbarkeitsanforderungen in Notaufnahmen und Intensivstationen
- Schnittstellen zu [[KIS]], PACS (Picture Archiving and Communication System) und [[TI-Gateway]]

### Meldepflichten und ISMS

Ein ISMS allein genügt nicht: KRITIS-Betreiber müssen erhebliche Sicherheitsvorfälle unverzüglich dem [[BSI]] melden (§ 8b BSIG). Im Gesundheitssektor sind zudem Meldungen an das Bundesamt für Arzneimittel und Medizinprodukte ([[BfArM]]) bei Vorfällen mit Medizinprodukten und an die zuständigen Datenschutzbehörden bei Datenpannen nach Art. 33 [[DSGVO]] erforderlich.

## Verknüpfungen

- [[BSI]] (gibt BSI IT-Grundschutz heraus; nimmt KRITIS-Sicherheitsnachweise entgegen)
- [[KRITIS]] (KRITIS-Betreiber sind zur ISMS-Implementierung verpflichtet)
- [[KHZG]] (Fördertatbestand 10: ISMS-Pflicht für geförderte Krankenhäuser ab 1.1.2025)
- [[Zero-Trust]] (Zero-Trust-Architektur ergänzt ein ISMS um netzwerktechnische Sicherheitskontrollen)
- [[gematik]] (betreibt selbst ein ISMS; verlangt es von TI-Diensteanbietern)
- [[DSGVO]] (Datenschutzrechtliche Anforderungen überschneiden sich mit ISMS-Maßnahmen)
- [[TI-Gateway]] (TI-Gateway-Betreiber müssen ISMS-Anforderungen erfüllen)

## Quellen

- [BSI: IT-Grundschutz](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html)
- [Wikipedia: Information Security Management System](https://de.wikipedia.org/wiki/Information_Security_Management_System)
- [BSI: B3S Krankenhaus](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/Kritische-Infrastrukturen/Sektorspezifische-Sicherheitsstandards/sicherheitsstandards_node.html)
- [ISO/IEC 27001:2022 – ISO](https://www.iso.org/standard/27001)
