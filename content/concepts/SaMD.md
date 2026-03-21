---
title: SaMD
audience: [technical, non-technical]
tags: [konzepte, medizinprodukte, mdr, software, regulierung]
aliases: [Software as a Medical Device, Software als Medizinprodukt]
relevance:
  sectors: [hersteller, startup, it-dienstleister, regulierung, krankenhaus]
  interests: [compliance, technik, business]
maturity: wachsend
---

# SaMD

**SaMD** (Software as a Medical Device, deutsch: Software als Medizinprodukt) bezeichnet eigenständige Software, die für medizinische Zwecke eingesetzt wird und daher als Medizinprodukt nach der [[MDR]]-Verordnung (EU 2017/745) reguliert ist.

## Erklärt für Einsteiger

Nicht jede Gesundheits-App ist ein Medizinprodukt. Eine App, die dir hilft, täglich mehr Wasser zu trinken, ist nur eine Wellness-App. Aber eine App, die anhand von Fotos mögliche Hautkrebs-Symptome erkennt und Handlungsempfehlungen gibt, ist ein Medizinprodukt. Die Grenze liegt daran, ob die Software eine medizinische Entscheidung beeinflusst. SaMD sind solche Programme, die tatsächlich bei Diagnosen, Therapien oder der Überwachung von Krankheiten helfen und dafür eine behördliche Zulassung brauchen.

## Überblick

Die Definition von SaMD stammt ursprünglich vom IMDRF (International Medical Device Regulators Forum): SaMD ist Software, die für medizinische Zwecke bestimmt ist und diese Zwecke erfüllt, ohne Teil eines Hardware-Medizinprodukts zu sein.

In der EU gilt seit 2021 die [[MDR]]-Verordnung (EU 2017/745), die auch für SaMD verbindlich ist. Sie löste die frühere Medizinprodukterichtlinie 93/42/EWG ab. Die Anforderungen für SaMD sind deutlich strenger als unter der alten Richtlinie.

**Entscheidend ist die Zweckbestimmung des Herstellers**, nicht die technischen Funktionen allein. Software wird zur SaMD, wenn der Hersteller sie für folgende Zwecke bestimmt:

- Diagnose, Verhütung, Überwachung, Behandlung oder Linderung von Krankheiten
- Diagnose, Überwachung, Behandlung oder Linderung von Verletzungen oder Behinderungen
- Untersuchung, Ersatz oder Änderung der Anatomie oder eines physiologischen Vorgangs

Software, die ausschließlich administrative oder buchhalterische Zwecke erfüllt, Daten ohne Analyse nur speichert oder überträgt, oder allgemeine Wellness-Ziele unterstützt, ist kein Medizinprodukt.

> [!interesse-compliance]
> Hersteller von SaMD benötigen CE-Kennzeichnung nach MDR. Bis zur CE-Kennzeichnung ist eine [[Konformitaetsbewertung|Konformitätsbewertung]] erforderlich. Ab Risikoklasse IIa muss eine [[Benannte-Stelle]] einbezogen werden. EUDAMED-Registrierungspflicht gilt ab 28. Mai 2026 für alle neuen Produkte. Pflichtanforderungen: IEC 62304 (Software-Lebenszyklus), IEC 62366-1 (Gebrauchstauglichkeit), ISO 14971 (Risikomanagement), ISO 13485 (QMS).

### Abgrenzung zu DiGA

Die [[DiGA]] (Digitale Gesundheitsanwendungen) sind eine spezifisch deutsche Zulassungskategorie für risikoarme SaMD. DiGA werden vom [[BfArM]] im Fast-Track-Verfahren geprüft und können von Ärzten auf Rezept verordnet werden. Eine DiGA ist immer eine SaMD der Risikoklasse I oder IIa; umgekehrt muss eine SaMD nicht zwingend eine DiGA sein.

## Technische Details

### Risikoklassifizierung nach MDR

SaMD werden nach Anhang VIII MDR in vier Risikoklassen eingeteilt. Für Software gilt primär Regel 11:

| Risikoklasse | Typische SaMD-Beispiele | Anforderung |
|---|---|---|
| **Klasse I** | Reine Datenspeicherung für Diagnose, Fitnesstracking mit Gesundheitsbezug | Selbstzertifizierung |
| **Klasse IIa** | Dosierrechner, Auswertung von EKG-Daten, DiGA | Benannte Stelle (Audit) |
| **Klasse IIb** | KI-basierte Röntgenbildauswertung, Triage-Software | Benannte Stelle (Produktprüfung) |
| **Klasse III** | Software zur Steuerung implantierter Geräte, Software für lebenserhaltende Behandlung | Benannte Stelle (umfassend) |

Die Einstufung nach Regel 11 basiert auf: der Bedeutung der Information für die klinische Entscheidung (treat or diagnose vs. drive clinical management) und der Schwere der Erkrankung (critical, serious, non-serious).

> [!frist-warnung] Frist-Warnung: MDR-Übergangsfrist für Legacy-SaMD (Art. 120 MDR)
> **Rechtsgrundlage:** Art. 120 Abs. 3 und 3a MDR (EU 2017/745) i.d.F. der Verordnung (EU) 2023/607 vom 15. März 2023
> **Geltungsbereich:** Nur für Legacy-Produkte, d.h. SaMD mit gültiger Konformitätserklärung (DoC) nach MDD 93/42/EWG, die vor dem 26. Mai 2021 ausgestellt wurde.
> **Fristen nach Risikoklasse:**
> - Klasse III und implantierbare Klasse IIb: bis **31. Dezember 2027**
> - Klasse IIa, nicht-implantierbare Klasse IIb und sterile Klasse I: bis **31. Dezember 2028**
> - Klasse I (ohne Messf./Sterilität), erstmals unter MDD selbstzertifiziert: **kein Bestandsschutz**, MDR-Konformität war seit 26. Mai 2021 erforderlich
>
> **Handlungsbedarf:** Hersteller müssen sicherstellen, dass vor Ablauf der jeweiligen Frist ein gültiges MDR-Zertifikat einer [[Benannte-Stelle|Benannten Stelle]] vorliegt oder (bei Klasse I ohne Beteiligung einer Benannten Stelle) eine MDR-konforme DoC ausgestellt wurde.
> **Bei Nichtbeachtung:** Das Produkt darf ab dem Stichtag nicht mehr in der EU in Verkehr gebracht werden.

### Schlüsselstandards für SaMD-Entwicklung

- **IEC 62304**: Software-Lebenszyklusprozesse für Medizingeräte-Software. Definiert drei Sicherheitsklassen (A, B, C) und Anforderungen an Dokumentation, Testen und Fehlermanagement.
- **IEC 62366-1**: Anwendung der Gebrauchstauglichkeit (Usability Engineering). Vorgeschrieben für alle Risikoklassen.
- **ISO 14971**: Risikomanagementprozess für Medizinprodukte. Grundlage für die Risikobewertung im Konformitätsbewertungsverfahren.
- **ISO 13485**: Qualitätsmanagementsystem für Medizinprodukte. Voraussetzung für CE-Kennzeichnung.

> [!interesse-technik]
> MDCG-Guidance: [MDCG 2019-11](https://health.ec.europa.eu/system/files/2019-08/md_mdcg_2019_11_guidance_samd_en_0.pdf) (SaMD-Qualifizierung und -Klassifizierung). IEC 62304 ist der zentrale Entwicklungsstandard: Aktivitäten sind nach Sicherheitsklasse A/B/C gestaffelt. Für FHIR-basierte SaMD: das EU-Recht verlangt keine spezifischen Datenformate, aber Interoperabilitätsanforderungen aus [[ISiK]] oder [[DiGA]]-Spezifikationen können FHIR R4 vorschreiben. EUDAMED-Registrierung ab 28. Mai 2026 via [webgate.ec.europa.eu/eudamed](https://webgate.ec.europa.eu/eudamed).

> [!dev-quickstart] Dev Quickstart: SaMD-Klassifizierung und technische Dokumentation
> **Schritt 1: Zweckbestimmung prüfen:** MDCG 2019-11 Entscheidungsbaum (Seiten 10-15): [health.ec.europa.eu MDCG 2019-11](https://health.ec.europa.eu/system/files/2019-08/md_mdcg_2019_11_guidance_samd_en_0.pdf)
>
> **Schritt 2: Risikoklasse nach MDR Annex VIII, Regel 11 bestimmen:**
> - Nicht-serious condition + drive clinical management → Klasse IIa
> - Serious condition + diagnose or treat → Klasse IIb
> - Life-threatening + treat or diagnose → Klasse III
>
> **Schritt 3: IEC 62304 Sicherheitsklasse ableiten:**
> | MDR-Klasse | IEC 62304 Sicherheitsklasse |
> |---|---|
> | I | A (keine Verletzung möglich) |
> | IIa | B (reversible Verletzung) |
> | IIb / III | C (irreversible Verletzung) |
>
> **Technische Dokumentation (MDR Annex II + III), Mindestdokumente:**
> - Software Architecture Document (SAD)
> - Software Development Plan (IEC 62304 §5.1)
> - Risk Management File (ISO 14971)
> - Usability Engineering File (IEC 62366-1)
> - Verification & Validation Records
> - Clinical Evaluation Report (CER)
>
> **EUDAMED-Registrierung ab 28.05.2026:** EMDN-Code erforderlich (Nomenklatur: [ec.europa.eu/tools/eudamed](https://ec.europa.eu/tools/eudamed/))
> IEC 62304 Edition 2 (geplante Veröffentlichung: August 2026) ersetzt A/B/C-Klassen durch zwei Rigor-Level.

### KI-basierte SaMD

Für SaMD, die maschinelles Lernen oder KI einsetzen, gibt es besondere Anforderungen. Die Europäische Kommission und das MDCG erarbeiten laufend Guidance für "Adaptive AI" in Medizinprodukten. Ein Kernproblem: KI-Modelle können sich durch weiteres Training verändern, was bei traditionellen SaMD nicht der Fall ist. Die Versionierung und Dokumentation von Modellveränderungen ist eine offene regulatorische Frage.

> [!frist-warnung] Frist-Warnung: Vigilanz-Meldepflicht für SaMD-Betreiber und Hersteller
> **Rechtsgrundlage:** Art. 87 Abs. 1 MDR (EU 2017/745); in Deutschland umgesetzt durch § 3 MPSV (Medizinprodukte-Sicherheitsplanverordnung)
> **Fristen:**
> - **Sofortige Meldung** (ohne Verzug): Bei schwerwiegenden Vorfällen, die zum Tod oder zur ernsthaften Verschlechterung des Gesundheitszustands geführt haben oder hätten führen können
> - **Innerhalb von 15 Tagen**: Bei sonstigen schwerwiegenden Vorfällen nach Art. 87 Abs. 6 lit. b MDR
> - **Innerhalb von 2 Tagen**: Bei unmittelbarer Gefahr für die öffentliche Gesundheit (Art. 87 Abs. 6 lit. a MDR)
>
> **Handlungsbedarf:** Hersteller müssen ein dokumentiertes Post-Market-Surveillance-System (PMS) mit funktionierendem Vigilanzprozess betreiben. Die Meldung erfolgt in Deutschland an das [[BfArM]] über EUDAMED (Vigilanz-Modul, wird nach Funktionsbestätigung der Kommission verbindlich). Bis zur EUDAMED-Pflicht für das Vigilanz-Modul gelten nationale Meldewege über [eudamed.bfarm.de](https://eudamed.bfarm.de).
> **Bei Nichtbeachtung:** Strafbare Ordnungswidrigkeit nach § 17 MPSV; behördliche Anordnungen, bis hin zum Vertriebsstopp.

## Verknüpfungen

- [[MDR]] (Rechtsgrundlage für SaMD in der EU)
- [[IVDR]] (gilt für diagnostische SaMD in der IVD-Kategorie)
- [[DiGA]] (deutsche Sonderkategorie für risikoarme SaMD auf Rezept)
- [[Konformitaetsbewertung]] (Verfahren zur CE-Kennzeichnung)
- [[Benannte-Stelle]] (Prüfinstanz für SaMD ab Klasse IIa)
- [[EUDAMED]] (EU-Datenbank, Registrierungspflicht für alle SaMD)
- [[BfArM]] (Deutsche Aufsichtsbehörde, auch für DiGA-Fast-Track)
- [[Medizinprodukte]] (Übergeordnetes Konzept)

## Quellen

- [Johner Institut: Software als Medizinprodukt](https://www.johner-institut.de/blog/iec-62304-medizinische-software/software-als-medizinprodukt-definition/)
- [MDCG 2019-11: Guidance on Qualification and Classification of Software (EU)](https://health.ec.europa.eu/system/files/2019-08/md_mdcg_2019_11_guidance_samd_en_0.pdf)
- [IMDRF: Software as a Medical Device (SaMD): Key Definitions](https://www.imdrf.org/sites/default/files/docs/imdrf/final/technical/imdrf-tech-131209-samd-key-definitions-140901.pdf)
- [BfArM: Medizinprodukte](https://www.bfarm.de/DE/Medizinprodukte/_node.html)
