---
title: BSI IT-Grundschutz
audience: [technical, non-technical]
tags: [standards, sicherheit, isms, bsi, zertifizierung, kritis]
aliases: [IT-Grundschutz, IT-Grundschutz-Kompendium, Grundschutz, BSI-Grundschutz, Grundschutz++]
relevance:
  sectors: [krankenhaus, ti-infrastruktur, it-dienstleister, hersteller, regulierung, kasse, arztpraxis]
  interests: [compliance, technik]
maturity: wachsend
---

# BSI IT-Grundschutz

Das **BSI IT-Grundschutz-Kompendium** ist das vom Bundesamt für Sicherheit in der Informationstechnik ([[BSI]]) herausgegebene Rahmenwerk für Informationssicherheit, das Organisationen eine systematische Methode zur Absicherung ihrer IT-Systeme und Prozesse bietet.

## Erklärt für Einsteiger

Stell dir vor, du ziehst in ein neues Haus und willst es einbruchsicher machen. Anstatt selbst herauszufinden, welche Schlösser, Alarmanlagen und Fensterriegel du brauchst, gibt dir jemand eine fertige Checkliste. IT-Grundschutz ist genau das, nur für die Sicherheit von Computer- und IT-Systemen in Unternehmen und Behörden. Das BSI hat diese Checkliste entwickelt und regelmäßig aktualisiert. Wer sie befolgt und das nachweisen kann, erhält ein offizielles Zertifikat.

## Überblick

Der BSI IT-Grundschutz ist neben [[ISO-27001]] das zweite zentrale Framework für Informationssicherheits-Managementsysteme ([[ISMS]]) in Deutschland. Beide Frameworks verfolgen ähnliche Ziele, unterscheiden sich aber in der Methodik: ISO 27001 definiert Anforderungen auf abstrakter Ebene, während IT-Grundschutz konkrete technische und organisatorische Maßnahmen vorschreibt.

Das IT-Grundschutz-Kompendium besteht aus modularen **Bausteinen**, die verschiedene IT-Systeme, Prozesse und Anwendungsbereiche abdecken. Jeder Baustein enthält Gefährdungen (was kann schiefgehen?) und Anforderungen (was muss umgesetzt werden?). Typische Bausteine decken ab: Netzwerke, Server, Anwendungen, Notfallmanagement, Datenschutz und physische Sicherheit.

### Bedeutung für die Telematikinfrastruktur

Betreiber von Komponenten der [[Telematikinfrastruktur]] und Krankenhäuser, die unter die [[KRITIS]]-Regulierung fallen, müssen ein [[ISMS]] nach anerkannten Standards betreiben. IT-Grundschutz ist ein ausdrücklich anerkanntes Framework. Das gilt insbesondere für:

- Betreiber von Trust Services ([[TSP]]) im Rahmen der TI
- Krankenhäuser, die unter das Krankenhaussicherheitsstärkungsgesetz ([[KHSFV]]) fallen
- Hersteller von TI-Komponenten, die gematik-Zulassungen beantragen
- Betreiber kritischer Gesundheitsinfrastrukturen (KRITIS-Sektor Gesundheit)

Der [[BSI-C5]] (Cloud Computing Compliance Criteria Catalogue) baut konzeptionell auf IT-Grundschutz auf und ist für Cloud-Dienste in der TI relevant.

> [!interesse-compliance] Pflichtanforderungen für KRITIS und Krankenhäuser
> Krankenhäuser mit mehr als 30.000 vollstationären Fällen pro Jahr gelten als KRITIS-Betreiber im Sektor Gesundheit und müssen nach § 8a BSIG ein ISMS nach IT-Grundschutz oder ISO 27001 nachweisen. Das [[KHSFV]] verschärft diese Anforderungen für alle Plankrankenhäuser ab einer bestimmten Betriebsgröße. Die Nachweispflicht erfolgt alle zwei Jahre gegenüber dem BSI. Wer kein zertifiziertes ISMS vorweisen kann, riskiert Bußgelder nach § 14 BSIG.

> [!klinik-integration] Klinik-Integration: ISMS-Umsetzung und B3S im Krankenhaus-IT-Betrieb
> **B3S Krankenhaus:** Der branchenspezifische Sicherheitsstandard (B3S) für die Gesundheitsversorgung in Krankenhäusern (Version 1.3.1, Januar 2026, erarbeitet von BSI und DKG) konkretisiert die IT-Grundschutz-Anforderungen für den Klinikbetrieb. Er deckt KIS-Systeme, Medizingeräte-Netzwerke, Notaufnahme-IT und klinische Workstations spezifisch ab und ist der bevorzugte Einstieg für Krankenhäuser ohne ISO-27001-Erfahrung.
>
> **KIS-Scoping:** KIS-Systeme (SAP ISH, Orbis/Dedalus, iMedOne, Nexus KIS) müssen in die Strukturanalyse nach BSI-Standard 200-2 einbezogen werden. Besonderes Augenmerk gilt Schnittstellen zu Medizingeräten (DICOM, HL7), Zugriffen aus dem Klinik-WLAN und externen IT-Dienstleistern (Outsourcing-Bausteine OPS.2.x). Medizingeräte-Netzwerke erfordern wegen der Verfügbarkeitsanforderungen (24/7) erhöhten Schutzbedarf.
>
> **Ressourcenplanung:** Für Krankenhäuser ohne dedizierte IT-Sicherheitsabteilung ist der Einsatz eines externen Informationssicherheitsbeauftragten (ISB) beim BSI anerkannt. Grundschutz++ (ab 2026) wird mit JSON-basiertem Kompendium die Integration in GRC-Plattformen vereinfachen, was den Dokumentationsaufwand für Klinik-IT-Abteilungen reduziert.

### BSI-Grundschutz-Zertifizierung

Eine Zertifizierung nach IT-Grundschutz erfolgt auf drei Niveaus:

1. **Einstiegsniveau**: Selbstauskunft des Unternehmens auf Basis von Kern-Absicherung oder Basis-Absicherung. Kein externes Audit.
2. **Standard-Absicherung mit ISO-27001-Zertifikat auf Basis IT-Grundschutz**: Externes Audit durch einen BSI-zugelassenen Auditor. Das Zertifikat wird vom BSI ausgestellt.
3. **BSI-Grundschutz-Zertifikat**: Höchstes Niveau, nur für IS-Revisionen nach BSI-Methodik.

> [!praxis-tipp] Praxis-Tipp: Was gilt wirklich für Arztpraxen?
> Arztpraxen sind nicht zur BSI-IT-Grundschutz-Zertifizierung verpflichtet. Für Sie gilt die **KBV-IT-Sicherheitsrichtlinie** (seit 1. April 2025 in aktualisierter Fassung). Diese baut auf BSI-Grundschutz-Prinzipien auf und ist speziell für Praxen vereinfacht.
>
> Mindestanforderungen für jede Praxisgröße:
> 1. Aktuellen Virenschutz auf allen Praxisrechnern installieren und regelmäßig aktualisieren
> 2. Datensicherung täglich durchführen und Backup extern aufbewahren (nicht nur auf dem Praxisserver)
> 3. Verschlüsselte Verbindungen nutzen (kein offenes WLAN im Behandlungsbereich)
> 4. Bildschirmsperre und Passwortschutz auf allen Geräten aktivieren
>
> Kostenfreie Checklisten und Arbeitshilfen: [kbv.de/html/it-sicherheit.php](https://www.kbv.de/html/it-sicherheit.php). Ein IT-Dienstleister kann den Soll-Ist-Abgleich in ca. 2 Stunden durchführen.

## Technische Details

### Aufbau des Kompendiums

Das IT-Grundschutz-Kompendium gliedert sich in zehn Schichten:

| Schicht | Bezeichnung | Beispielbausteine |
|---|---|---|
| ISMS | Sicherheitsmanagement | ISMS.1 Sicherheitsmanagement |
| ORP | Organisation und Personal | ORP.1 Organisation |
| CON | Konzepte und Vorgehensweisen | CON.1 Kryptokonzept |
| OPS | Betrieb | OPS.1.1 Allgemeiner IT-Betrieb |
| DER | Detektion und Reaktion | DER.1 Detektion von sicherheitsrelevanten Ereignissen |
| APP | Anwendungen | APP.3.1 Webanwendungen |
| SYS | IT-Systeme | SYS.1.1 Allgemeiner Server |
| IND | Industrielle IT | IND.1 Bausteine für Industrielle IT |
| NET | Netze und Kommunikation | NET.1.1 Netzarchitektur |
| INF | Infrastruktur | INF.1 Allgemeines Gebäude |

Jeder Baustein enthält:
- **Zielsetzung**: Was soll durch diesen Baustein abgesichert werden?
- **Abgrenzung und Modellierung**: Wann ist der Baustein anzuwenden?
- **Gefährdungslage**: Typische Bedrohungen für diesen Bereich
- **Anforderungen**: Basis-, Standard- und erhöhte Anforderungen

### IT-Grundschutz-Vorgehensweise (BSI-Standard 200-2)

Die praktische Anwendung des IT-Grundschutzes ist im BSI-Standard 200-2 beschrieben. Die Vorgehensweise umfasst:

1. **Strukturanalyse**: Erfassung aller IT-Systeme, Prozesse und Anwendungen
2. **Schutzbedarfsfeststellung**: Bewertung der Auswirkungen bei Verlust von Vertraulichkeit, Integrität oder Verfügbarkeit
3. **Modellierung**: Zuordnung geeigneter IT-Grundschutz-Bausteine zu den Systemen
4. **IT-Grundschutz-Check**: Soll-Ist-Vergleich zwischen Anforderungen und umgesetzten Maßnahmen
5. **Risikoanalyse**: Für Systeme mit hohem Schutzbedarf, die über Standard-Absicherung hinausgehen
6. **Umsetzungsplanung**: Priorisierung und Umsetzung der offenen Anforderungen

> [!frist-warnung] Frist-Warnung: KRITIS-Nachweiszyklus nach neuem BSIG
> **Rechtsgrundlage:** § 8a Abs. 3 BSIG i.d.F. des BSI-Gesetzes vom 6. Dezember 2025
> **Frist:** Mit Inkrafttreten des neuen BSIG am 6. Dezember 2025 verlängerte sich der Nachweiszyklus von zwei auf drei Jahre. KRITIS-Betreiber im Sektor Gesundheit wurden vom BSI individuell über ihr neues Nachweisdatum informiert.
> **Handlungsbedarf:** Die verantwortliche Stelle prüft bis 31. März jeden Jahres, ob die eigenen Anlagen die Schwellenwerte der BSI-KritisV (Krankenhaus: 30.000 vollstationäre Fälle pro Jahr) im vorangegangenen Kalenderjahr überschritten haben. Wer nach alter Gesetzeslage innerhalb von 12 Monaten nach dem 6. Dezember 2025 nachweispflichtig war, kann alternativ zum ursprünglichen Nachweisdatum einreichen.
> **Bei Nichtbeachtung:** Verstöße gegen § 8a BSIG können nach § 14 BSIG mit Bußgeldern von bis zu 100.000 Euro geahndet werden.

### Grundschutz++ ab 2026

Das BSI hat 2026 die Modernisierung des IT-Grundschutzes unter dem Arbeitstitel **Grundschutz++** begonnen. Die Kernänderungen:

- **Maschinenlesbares Format**: Anforderungen werden als JSON-Datei veröffentlicht, OSCAL-kompatibel. Das ermöglicht automatisierte Compliance-Prüfungen und Integration in GRC-Werkzeuge.
- **Reduzierte Komplexität**: Laut BSI sollen bis zu 80 Prozent der bisherigen Anforderungen gestrafft werden. Redundanzen zwischen Bausteinen werden beseitigt.
- **Prozessorientierung**: Statt starrer Bausteine gibt es eine prozessorientierte Struktur, die besser auf Cloud-, KI- und IoT-Szenarien passt.
- **Bessere ISO-27001-Harmonisierung**: Grundschutz++ soll die Anforderungen explizit ISO-27001-Controls zuordnen.
- **Übergangsphase bis 2029**: Das alte Kompendium bleibt parallel gültig. Organisationen können bis 2029 zwischen altem und neuem Format wählen.

> [!interesse-technik] Grundschutz++ und digitale Compliance-Tools
> Das neue JSON-basierte Format von Grundschutz++ ermöglicht die Integration in GRC-Plattformen (Governance, Risk, Compliance) und ISMS-Werkzeuge. Das BSI hat eine Preview des Grundschutz++-Kompendiums auf GitHub veröffentlicht. Die OSCAL-Kompatibilität (Open Security Controls Assessment Language) erlaubt maschinellen Abgleich von Sicherheitsanforderungen mit tatsächlich umgesetzten Kontrollen. Für Hersteller von TI-Komponenten, die gematik-Zulassungen anstreben, sind automatisierte Compliance-Nachweise gegenüber dem BSI perspektivisch einfacher zu erbringen.

> [!dev-quickstart] Dev Quickstart: Grundschutz++ Katalog maschinell verarbeiten
> Das BSI veröffentlicht Grundschutz++ als OSCAL-kompatibles JSON in der [Stand-der-Technik-Bibliothek](https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek) auf GitHub.
> ```bash
> # Grundschutz++ Methodik-Katalog herunterladen
> curl -L "https://raw.githubusercontent.com/BSI-Bund/Stand-der-Technik-Bibliothek/main/Quellkataloge/Grundschutz%2B%2B-Methodik/BSI-Grundschutz%2B%2B-Methodik-catalog.json" \
>   -o grundschutz-catalog.json
>
> # Alle Anforderungs-IDs auflisten (jq erforderlich)
> jq '.catalog.groups[].controls[].id' grundschutz-catalog.json
>
> # Anforderungen einer bestimmten Schicht filtern (z.B. APP)
> jq '.catalog.groups[] | select(.id | startswith("APP")) | .controls[].title' grundschutz-catalog.json
> ```
> - Repo: [BSI-Bund/Stand-der-Technik-Bibliothek](https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek)
> - Kompendium-Unterverzeichnis: `Kompendien/Grundschutz++-Kompendium/`
> - OSCAL-Dokumentation: `Dokumentation/OSCAL.md` im selben Repo
> - Format: NIST OSCAL Catalog JSON — kompatibel mit OpenSCAP, compliance-as-code-Toolchains und GRC-Plattformen

### Abgrenzung zu ISO 27001

| Merkmal | IT-Grundschutz | ISO 27001 |
|---|---|---|
| Herausgeber | BSI (Deutschland) | ISO/IEC (international) |
| Ansatz | Konkrete Maßnahmen, Bausteine | Abstrakte Anforderungen, risikobasiert |
| Geltungsbereich | Primär Deutschland | Weltweit |
| Zertifizierung | BSI-Zertifikat | Akkreditierter Zertifizierer |
| Kombinierbar | ISO 27001 auf Basis IT-Grundschutz möglich | Ja |

Beide Frameworks schließen sich nicht aus. Ein "ISO-27001-Zertifikat auf Basis IT-Grundschutz" kombiniert die internationale Anerkennung von ISO 27001 mit der Maßnahmenkonkretheit des IT-Grundschutzes.

## Verknüpfungen

- [[BSI]] (Herausgeber des IT-Grundschutz-Kompendiums und der BSI-Standards 200-x)
- [[ISMS]] (Informationssicherheits-Managementsystem: IT-Grundschutz als Umsetzungsframework)
- [[ISO-27001]] (komplementäres internationales ISMS-Framework; kombinierbar mit IT-Grundschutz)
- [[KRITIS]] (Kritische Infrastrukturen: IT-Grundschutz als Nachweismethode nach § 8a BSIG)
- [[BSI-C5]] (Cloud-Kriterien des BSI, konzeptionell auf IT-Grundschutz aufbauend)
- [[TSP]] (Trust Service Provider der TI: müssen ISMS nach IT-Grundschutz oder ISO 27001 betreiben)
- [[KHSFV]] (Krankenhaussicherheitsstärkungsgesetz: verweist auf ISMS-Pflichten für Krankenhäuser)
- [[Telematikinfrastruktur]] (Betreiber von TI-Komponenten sind häufig IT-Grundschutz-pflichtig)

## Quellen

- [BSI: IT-Grundschutz-Kompendium](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html)
- [BSI: IT-Grundschutz – Methodik und Standards](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html)
- [HiScout: Grundschutz++ – Die Zukunft des BSI IT-Grundschutz](https://www.hiscout.com/grundschutz-die-zukunft-des-bsi-it-grundschutz-fuer-mehr-effizienz-im-isms/)
- [Wikipedia: IT-Grundschutz](https://de.wikipedia.org/wiki/IT-Grundschutz)
