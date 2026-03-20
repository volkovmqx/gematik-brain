---
title: ISMS
audience: [technical]
tags: [konzept, sicherheit, bsi, krankenhaus, iso27001, kritis]
aliases: [Informationssicherheitsmanagementsystem, Information Security Management System, ISMS-Zertifizierung]
relevance:
  sectors: [krankenhaus, hersteller, ti-infrastruktur, it-dienstleister]
  interests: [compliance, technik]
maturity: immergruen
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

> [!interesse-compliance]
> **KRITIS-Krankenhäuser** (ab 30.000 stationäre Fälle/Jahr): ISMS-Pflicht nach § 8a BSIG, Nachweispflicht alle zwei Jahre gegenüber dem [[BSI]]. **Alle KHZG-geförderten Krankenhäuser**: ISMS-Pflicht ab 1. Januar 2025 (Fördertatbestand 10). **TI-Diensteanbieter**: ISMS-Nachweis Voraussetzung für gematik-Zulassung. **KRITIS-Dachgesetz ab Juli 2026**: Neue Registrierungspflicht und Resilienzplan-Anforderungen für alle KRITIS-Betreiber im Gesundheitssektor.

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

> [!dev-quickstart] Dev Quickstart: Grundschutz++ Kompendium maschinenlesbar abfragen
> Das BSI veröffentlicht das IT-Grundschutz++ Kompendium seit September 2025 als JSON auf GitHub.
> ```bash
> # Kompendium-JSON herunterladen (ca. 10 MB)
> curl -sL "https://raw.githubusercontent.com/BSI-Bund/Stand-der-Technik-Bibliothek/main/Kompendien/Grundschutz%2B%2B-Kompendium/Grundschutz%2B%2B-Kompendium.json" \
>   -o grundschutz-kompendium.json
>
> # Alle Bausteine mit Bezeichnung auflisten (jq)
> jq '.components[] | {id: .identifier, title: .title}' grundschutz-kompendium.json
>
> # Anforderungen eines bestimmten Bausteins filtern (z.B. SYS.1 Server)
> jq '.components[] | select(.identifier | startswith("SYS.1")) | .requirements[].title' \
>   grundschutz-kompendium.json
> ```
> Format: OSCAL (JSON/XML), maschinenlesbar für automatisierte Compliance-Checks.
> - Repo: [github.com/BSI-Bund/Stand-der-Technik-Bibliothek](https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek)
> - IT-Grundschutz Webseite: [bsi.bund.de/IT-Grundschutz](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html)

### Branchenspezifischer Sicherheitsstandard (B3S) Krankenhaus

Der **B3S Krankenhaus** wurde von der [[DKG|DKG (Deutsche Krankenhausgesellschaft)]] gemeinsam mit dem [[BSI]] entwickelt und als sektorspezifische Alternative zu ISO 27001 für Krankenhäuser anerkannt. Er konkretisiert die KRITIS-Anforderungen für den Krankenhausbetrieb und berücksichtigt Besonderheiten wie:

- Medizingeräte-Netzwerke (IoMT)
- Verfügbarkeitsanforderungen in Notaufnahmen und Intensivstationen
- Schnittstellen zu [[KIS]], PACS (Picture Archiving and Communication System) und [[TI-Gateway]]

> [!klinik-integration] Klinik-Integration: ISMS-Scope für KIS und TI-Infrastruktur
> Der ISMS-Scope eines Krankenhauses muss die gesamte IT-Infrastruktur abdecken, die klinische Prozesse unterstützt. Für die TI-Anbindung sind besondere Überlegungen erforderlich.
>
> **KRITIS-Dachgesetz: Registrierungspflicht ab 17. Juli 2026:** Krankenhäuser, die kritische Dienstleistungen für mehr als 500.000 Personen erbringen, müssen sich bis zum 17. Juli 2026 beim BBK (Bundesamt für Bevölkerungsschutz und Katastrophenhilfe) registrieren. Das KIS und seine IT-Infrastruktur sind als kritische Komponenten zu melden. ISO 27001 allein reicht nicht aus: Das KRITIS-DachG verlangt zusätzlich Resilienz- und BCM-Maßnahmen.
> **B3S als praktischer Einstieg:** Der B3S Krankenhaus ist auf die besonderen Bedürfnisse des Krankenhausbetriebs zugeschnitten: Medizingeräte-Netzwerke (IoMT), 24/7-Verfügbarkeit in Notaufnahme und Intensivstation, Schnittstellen zu KIS, PACS und TI-Gateway. Für KRITIS-Krankenhäuser ist B3S der empfohlene Nachweisweg gegenüber dem BSI.
> **TI-Komponenten im ISMS-Scope:** Konnektor, TI-Gateway, KIM-Clientmodul, SMC-B-Verwaltung und ePA-Zugangsdienst müssen im ISMS-Risikoregister erfasst sein. Konfigurationsmanagement und Patch-Prozesse für TI-Komponenten müssen dokumentiert werden. Planen Sie Ausfallszenarien der TI-Verbindung als eigene Risikobehandlung ein.

> [!interesse-technik]
> ISO 27001:2022 Annex A enthält 93 Controls in vier Kategorien (Organisatorisch, Personell, Physisch, Technologisch). BSI IT-Grundschutz-Kompendium: Bausteinweise Kataloge für Systemkomponenten (z.B. SYS.1 Server, APP.5 Webanwendungen). B3S Krankenhaus: Sektorspezifischer Standard für KRITIS-Krankenhäuser, entwickelt von [[DKG]] und [[BSI]]. ISMS-Scope für TI-Betreiber muss die TI-spezifischen Komponenten (Konnektor, Fachdienste, [[VAU]]) umfassen. Werkzeuge für automatisierte ISMS-Compliance-Prüfungen nutzen ab 2026 das JSON-Format von Grundschutz++.

> [!frist-warnung] Frist-Warnung: KRITIS-DachG Registrierungspflicht ab 17. Juli 2026
> **Rechtsgrundlage:** § 9 KRITIS-DachG (Gesetz zur Umsetzung der CER-Richtlinie EU 2022/2557, in Kraft seit März 2026); § 8a Abs. 1 BSIG (IT-Sicherheitsanforderungen für KRITIS-Betreiber).
> **Frist:** Ab dem 17. Juli 2026 sind Betreiber kritischer Anlagen verpflichtet, sich auf der gemeinsamen Plattform von BBK (Bundesamt für Bevölkerungsschutz und Katastrophenhilfe) und BSI zu registrieren. Die Registrierungsfrist beträgt drei Monate ab Identifikation als kritische Anlage, frühestens jedoch ab dem 17. Juli 2026.
> **Gilt für Krankenhäuser:** Einrichtungen im Gesundheitssektor, die mehr als 500.000 Personen mit medizinischen Versorgungsleistungen versorgen (Maximalversorger, große Klinikketten), gelten als Betreiber kritischer Anlagen. Das ISMS ist dabei Voraussetzung für die Erfüllung der KRITIS-DachG-Anforderungen neben den bestehenden BSIG-Pflichten.
> **Handlungsbedarf:** Betroffene Krankenhäuser müssen ihre ISMS-Dokumentation um die physischen Resilienzanforderungen des KRITIS-DachG ergänzen (Risikoanalyse kritischer Anlagen, Resilienzplan, 24/7-Kontaktstelle). Die Registrierung erfordert Angaben zu kritischen Komponenten und Standorten.

> [!frist-warnung] Frist-Warnung: ISMS-Pflicht für KHZG-geförderte Krankenhäuser seit 1. Januar 2025
> **Rechtsgrundlage:** § 19 Abs. 1 Satz 3 KHSFV i.V.m. Fördertatbestand 10 KHZG; ISO/IEC 27001:2022 oder BSI IT-Grundschutz oder B3S Krankenhaus.
> **Frist:** Seit dem 1. Januar 2025 müssen alle Krankenhäuser, die KHZG-Fördermittel für Fördertatbestand 10 (IT-Sicherheit) erhalten haben, ein nachweisliches ISMS betreiben. Der Nachweis muss gegenüber dem Bundesamt für Soziale Sicherung (BAS) erbracht werden.
> **Handlungsbedarf:** Krankenhäuser mit KHZG-FTB-10-Förderung, die den Nachweis noch nicht erbracht haben, müssen sofort handeln. Fehlende Nachweise können zur Rückforderung der Fördermittel führen. Zertifizierungsverfahren nach ISO 27001 dauern in der Regel 6 bis 18 Monate. Ersatzweise kann der B3S Krankenhaus als sektorspezifischer Nachweis eingereicht werden.

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
