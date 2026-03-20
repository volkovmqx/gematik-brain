---
title: Medizinprodukte
audience: [technical, non-technical]
tags: [konzepte, mdr, ivdr, regulierung, ce, konformitaet, zulassung]
aliases: [Medizinprodukt, Medical Device, CE-Kennzeichnung Medizinprodukt, MDR-Produkt]
relevance:
  sectors: [hersteller, krankenhaus, arztpraxis, regulierung, startup, it-dienstleister, forschung]
  interests: [compliance, technik, business]
maturity: wachsend
---

# Medizinprodukte

**Medizinprodukte** sind Gegenstände, Stoffe oder Software, die für medizinische Zwecke am oder im menschlichen Körper eingesetzt werden und deren Hauptwirkung nicht auf pharmakologischem, immunologischem oder metabolischem Weg erzielt wird.

## Erklärt für Einsteiger

Ein Herzschrittmacher, ein Blutzuckermessgerät, ein Röntgengerät und eine App zur Diagnoseunterstützung haben eines gemeinsam: Sie sind Medizinprodukte. Der Unterschied zu Medikamenten: Ein Medikament wirkt durch chemische Substanzen im Körper. Ein Medizinprodukt wirkt mechanisch, physikalisch oder durch Informationsverarbeitung. Damit ein Medizinprodukt in der EU verkauft werden darf, muss es nachweisen, dass es sicher und wirksam ist. Das CE-Zeichen auf dem Gerät ist dieser Nachweis.

## Überblick

In der EU werden Medizinprodukte durch zwei Verordnungen reguliert:

- **[[MDR]] (Medical Device Regulation, EU 2017/745)**: Für Medizinprodukte allgemein, in Kraft seit Mai 2021
- **[[IVDR]] (In Vitro Diagnostic Regulation, EU 2017/746)**: Für In-vitro-Diagnostika (Labortests, Blutuntersuchungen), verpflichtend ab Mai 2022

Beide Verordnungen haben die früheren Richtlinien MDD (Medical Device Directive) und IVDD abgelöst und setzen deutlich strengere Anforderungen an Sicherheit, klinische Evidenz und Nachmarktüberwachung.

Das Spektrum der Medizinprodukte ist weit:

- Chirurgische Instrumente, Implantate (Herzschrittmacher, Hüftprothesen)
- Diagnostische Geräte (MRT, CT, Ultraschall, EKG-Geräte)
- In-vitro-Diagnostika (Blutzuckermessgeräte, PCR-Tests, COVID-Schnelltests)
- Medizinische Software (KI-basierte Diagnosesoftware, klinische Entscheidungsunterstützung)
- [[DiGA|Digitale Gesundheitsanwendungen (DiGA)]], sofern als Medizinprodukt eingestuft

> [!interesse-compliance]
> **CE-Kennzeichnung ist Pflicht** für das Inverkehrbringen in der EU. Ohne CE kein legaler Verkauf.
>
> **Übergangsfristen:** MDR-Übergangsfristen für Alt-Produkte laufen je nach Risikoklasse bis 2026 oder 2028. Hersteller, die noch unter MDD-Zertifizierung operieren, müssen bis zu diesen Fristen umgestellt haben.
>
> **Benannte Stelle:** Für Klasse IIa, IIb und III sowie für die meisten IVDR-Klassen ist eine akkreditierte Benannte Stelle (Notified Body) für die Konformitätsbewertung erforderlich.

> [!frist-warnung] Frist-Warnung: MDR-Übergangsfristen für Legacy-Produkte
> **Rechtsgrundlage:** Verordnung (EU) 2023/607 zur Änderung der MDR (EU) 2017/745, in Kraft seit 20. März 2023.
> **Frist Klasse III und implantierbare Klasse IIb:** Bis 31. Dezember 2027 müssen Hersteller die MDR-Konformitätsbewertung abgeschlossen haben (ausgenommen Nahtmaterial, Zahnfüllungen, Knochenplatten und ähnliche einfache Implantate).
> **Frist übrige Klasse IIb, Klasse IIa, Klasse I mit Messfunktion oder steril:** Bis 31. Dezember 2028.
> **Voraussetzung:** Die Fristverlängerung gilt nur, wenn der Antrag bei einer Benannten Stelle bis zum 26. Mai 2024 eingereicht und die vertragliche Vereinbarung bis zum 26. September 2024 abgeschlossen wurde.
> **Handlungsbedarf:** Hersteller, die diese Voraussetzungen nicht erfüllt haben, verlieren den Schutz der Übergangsfristen und müssen die MDR-Konformität unverzüglich nachweisen. Bestehende Lagerbestände dürfen nach Ablauf der jeweiligen Frist nicht mehr erstmals in Verkehr gebracht werden.

## Technische Details

### Klassifizierung nach MDR

Medizinprodukte nach MDR werden in vier Risikoklassen eingeteilt:

| Klasse | Risiko | Beispiele |
|---|---|---|
| **Klasse I** | Niedrig | Pflaster, Rollstühle, Stethoskope |
| **Klasse IIa** | Mittel-niedrig | Hörgeräte, Blutdruckmessgeräte, Einmalnadeln |
| **Klasse IIb** | Mittel-hoch | Blutbeutel, Infusionspumpen, Defibrillatoren |
| **Klasse III** | Hoch | Herzschrittmacher, Stents, Hüftimplantate |

Für Klasse I reicht eine Eigenkonformitätserklärung des Herstellers (ohne Benannte Stelle). Ab Klasse IIa ist eine Benannte Stelle einzubeziehen.

### Software als Medizinprodukt (SaMD)

Software gilt als Medizinprodukt, wenn sie zur Diagnose, Überwachung, Behandlung oder Prognose von Krankheiten oder physiologischen Zuständen eingesetzt wird und die Entscheidung des Arztes beeinflusst.

Die MDCG (Medical Device Coordination Group) hat Leitlinien zur Abgrenzung von Medizinprodukt-Software und allgemeiner Software veröffentlicht (MDCG 2019-11).

Wichtig für den deutschen Kontext:

- [[DiGA]]-Software ist immer ein Medizinprodukt (Risikoklasse I oder IIa)
- KI-basierte Diagnoseunterstützungssoftware ist typischerweise Klasse IIa oder IIb
- Reine Verwaltungssoftware ([[KIS]], [[PVS]]) ist kein Medizinprodukt, sofern sie keine klinischen Entscheidungen trifft

> [!interesse-technik]
> **Software-Klassifizierungsregel (MDR Anhang VIII, Regel 11):** Software, die Informationen für Diagnose oder Therapie-Entscheidungen liefert, ist mindestens Klasse IIa. Software zur Diagnose oder Therapie von lebensbedrohlichen Erkrankungen ist mindestens Klasse IIb.
>
> **Technische Dokumentation:** MDR Anhang II und III definieren den Inhalt der technischen Dokumentation (Design, Risikoanalyse nach ISO 14971, klinische Bewertung, Post-Market Surveillance Plan).
>
> **IEC 62304:** Norm für Softwarelebenszyklusprozesse bei Medizinprodukten. Unterscheidet Software-Sicherheitsklassen A, B, C.
>
> **EU-Datenbank EUDAMED:** Öffentliches Register für Medizinprodukte der EU (eudamed.ec.europa.eu).

> [!dev-quickstart] Dev Quickstart: EUDAMED-Produktsuche per API
> EUDAMED stellt eine öffentliche REST-API bereit. Keine Authentifizierung erforderlich. Antworten in JSON.
> ```bash
> # Suche nach Geräten per UDI-DI
> curl "https://ec.europa.eu/tools/eudamed/api/devices/udiDiData?udidi=<UDI-DI>&lang=de"
>
> # Gerätedaten abrufen (Basic UDI-DI Ebene)
> curl "https://ec.europa.eu/tools/eudamed/api/devices/basicUdiData/<basicUdiDiId>?lang=de"
> ```
> - UDI-DI (Device Identifier): Barcode auf dem Produkt, z.B. GS1/HIBC-kodiert
> - Inoffizielle API-Dokumentation: [openregulatory.github.io/eudamed-api](https://openregulatory.github.io/eudamed-api/)
> - Offizielles Portal: [ec.europa.eu/tools/eudamed](https://ec.europa.eu/tools/eudamed)
> - Playground-Umgebung für Tests: [eudamed.ec.europa.eu/eudamed/screen/home](https://ec.europa.eu/tools/eudamed/screen/home)

### Konformitätsbewertung

Die [[Konformitaetsbewertung|Konformitätsbewertung]] ist der Nachweis, dass ein Produkt die wesentlichen Anforderungen nach MDR/IVDR erfüllt. Sie umfasst:

1. Technische Dokumentation (Design, Risikoanalyse, klinische Bewertung)
2. Qualitätsmanagementsystem nach ISO 13485
3. Prüfung durch eine Benannte Stelle (Notified Body) ab Klasse IIa
4. CE-Kennzeichnung und EU-Konformitätserklärung

Klinische Bewertung und Post-Market Clinical Follow-up (PMCF) sind kontinuierliche Pflichten, keine einmalige Aktivität.

### Abgrenzung: Medizinprodukt vs. DiGA vs. DiPA

| Kategorie | Regulierung | Erstattung |
|---|---|---|
| Medizinprodukt allgemein | MDR/IVDR, CE-Pflicht | Einzelfall oder Hilfsmittelverzeichnis |
| [[DiGA]] | MDR (Klasse I/IIa) + BfArM-DiGA-Verzeichnis | GKV per Verordnung |
| [[DiPA]] | MDR (Klasse I/IIa) + BfArM-DiPA-Verzeichnis | GPV per Verordnung |

DiGA und DiPA sind Medizinprodukte mit zusätzlichen deutschen Zulassungsanforderungen beim [[BfArM]].

### Vigilanz und Meldepflichten

Hersteller sind nach MDR Artikel 87 verpflichtet, schwerwiegende Vorkommnisse und Trends an die nationale Behörde zu melden. In Deutschland ist das [[BfArM]] die zuständige Behörde (Sicherheitsbeauftragter für Medizinprodukte nach § 84 MPDG).

> [!praxis-tipp] Praxis-Tipp: Medizinprodukte in der Praxis sicher einsetzen
> Arztpraxen sind keine Hersteller, haben aber eigene Pflichten beim Betrieb von Medizinprodukten.
>
> Was Sie wissen müssen:
> - Geräte ohne CE-Kennzeichnung dürfen Sie nicht einsetzen. Prüfen Sie das CE-Zeichen vor der Anschaffung.
> - Für Geräte der Klassen IIb und III (z.B. Defibrillatoren, Infusionspumpen) gilt die Medizinprodukte-Betreiberverordnung (MPBetreibV). Sie müssen ein Bestandsverzeichnis führen und regelmäßige Sicherheitsprüfungen veranlassen.
> - Tritt ein schwerwiegendes Vorkommnis auf (Patient kommt zu Schaden), sind Sie als Betreiber meldepflichtig: unverzügliche Meldung an das [[BfArM]] per Online-Formular.
>
> Für digitale Tools: Wenn Sie eine KI-gestützte Diagnosesoftware einsetzen wollen, fragen Sie den Anbieter, ob das Produkt als Medizinprodukt zertifiziert ist (CE-Kennzeichnung und MDR-Klasse). Reine PVS-Module ohne klinische Entscheidungsfunktion sind keine Medizinprodukte.

> [!klinik-integration] Klinik-Integration: Medizinprodukte als Betreiber im Krankenhaus
> **Betreiberpflichten (MPBetreibV 2025):** Krankenhäuser sind Betreiber von Medizinprodukten und unterliegen der neuen Medizinprodukte-Betreiberverordnung (MPBetreibV, in Kraft seit 20. Februar 2025). Pflichten: Bestandsverzeichnis aller aktiven nichtimplantierbaren Geräte (§ 14 MPBetreibV), Medizinproduktebuch für jedes Gerät (§ 13), sicherheits- und messtechnische Kontrollen (§ 12, § 15).
>
> **Software-Medizinprodukte im KIS-Kontext:** KI-gestützte Diagnosemodule und klinische Entscheidungsunterstützungssysteme, die ins [[KIS]] integriert werden, sind häufig Medizinprodukte (Klasse IIa oder höher). Prüfen Sie vor der Beschaffung: CE-Kennzeichnung vorhanden? MDR-konform? IT-Sicherheitsüberprüfung nach § 17 MPBetreibV erforderlich?
>
> **Vorkommnismeldung:** Bei schwerwiegenden Vorkommnissen mit Medizinprodukten ist das Krankenhaus als Betreiber verpflichtet, das [[BfArM]] zu informieren (§ 3 MPDG i.V.m. Art. 87 MDR). Frist: 15 Tage, bei unmittelbarer Gefahr 2 Tage. Benennen Sie einen Sicherheitsbeauftragten für Medizinprodukte (§ 84 MPDG).

> [!frist-warnung] Frist-Warnung: Vigilanzmeldung bei schwerwiegenden Vorkommnissen
> **Rechtsgrundlage:** Art. 87 Abs. 1 MDR (EU) 2017/745 i.V.m. § 84 Medizinprodukterecht-Durchführungsgesetz (MPDG).
> **Frist:** Schwerwiegende Vorkommnisse mit Todesgefahr oder ernsthafter Verschlechterung des Gesundheitszustands: Meldung an das [[BfArM]] unverzüglich, spätestens innerhalb von 15 Kalendertagen nach Kenntnisnahme. Bei unmittelbarer Gefahr für die öffentliche Gesundheit: innerhalb von 2 Tagen.
> **Handlungsbedarf:** Hersteller und Bevollmächtigte müssen ein Vigilanzsystem einrichten, Beschwerden und Vorkommnismeldungen dokumentieren und intern auswerten. Jährlicher Periodic Safety Update Report (PSUR) nach Art. 86 MDR für Klasse IIa, IIb und III ist Pflicht.
> **Bei Nichtbeachtung:** Zuständige Behörden können nach Art. 95 MDR marktkorrigierende Maßnahmen anordnen. Verstöße gegen Meldepflichten können nach § 94 MPDG als Ordnungswidrigkeit mit Bußgeld bis zu 30.000 Euro geahndet werden.

## Verknüpfungen

- [[MDR]] (Medical Device Regulation, EU 2017/745; Hauptregulierung)
- [[IVDR]] (In Vitro Diagnostic Regulation; für Labortests und Diagnostika)
- [[DiGA]] (Digitale Gesundheitsanwendungen; spezielle MDR-Unterklasse)
- [[DiPA]] (Digitale Pflegeanwendungen; spezielle MDR-Unterklasse)
- [[Konformitaetsbewertung]] (Verfahren zum CE-Nachweis)
- [[BfArM]] (zuständige Behörde für Vigilanz und DiGA-Verzeichnis)
- [[Telemonitoring]] (Telemonitoring-Geräte als Medizinprodukte)
- [[IVDR]] (Regulierung für In-vitro-Diagnostika)

## Quellen

- [EU MDR: Verordnung (EU) 2017/745 (offizieller Text)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32017R0745)
- [BfArM: Medizinprodukte – Überblick](https://www.bfarm.de/DE/Medizinprodukte/_artikel.html)
- [EUDAMED: EU-Datenbank für Medizinprodukte](https://ec.europa.eu/tools/eudamed)
- [Wikipedia: Medizinprodukt](https://de.wikipedia.org/wiki/Medizinprodukt)
