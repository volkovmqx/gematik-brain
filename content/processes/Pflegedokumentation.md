---
title: Pflegedokumentation
audience: [technical, non-technical]
tags: [prozess, pflege, dokumentation, primärsystem, epa, interoperabilität]
aliases: [Pflegedokumentation, digitale Pflegedokumentation, Pflegebericht, Pflegeplanung]
relevance:
  sectors: [pflege, krankenhaus, hersteller, it-dienstleister, patient, kasse]
  interests: [technik, compliance, patient]
maturity: setzling
---

# Pflegedokumentation

Die **Pflegedokumentation** ist die strukturierte Erfassung aller pflegerelevanten Informationen über einen Patienten oder Pflegebedürftigen, vom Pflegeassessment über die Pflegeplanung bis zum Pflegebericht, und bildet als digitales Primärsystem die Schnittstelle zu TI-Anwendungen wie der [[ePA]].

## Erklärt für Einsteiger

Wenn eine Krankenschwester einen Patienten versorgt, schreibt sie alles auf: Welche Medikamente wurden gegeben, wie der Patient geschlafen hat, ob er Schmerzen hatte und welche Pflegemaßnahmen durchgeführt wurden. Früher war das ein Papierheft oder eine Karteikarte am Bett. Heute passiert das auf dem Tablet oder Computer, in einer Pflegedokumentation-Software. Damit alle Beteiligten, also Pflegekräfte, Ärzte und auch die Krankenkasse, dieselben Informationen haben, müssen diese Systeme mit dem deutschen Gesundheitsnetz verbunden sein.

## Überblick

Pflegedokumentation umfasst alle Unterlagen, die im Pflegeprozess entstehen:

- **Pflegeanamnese**: Ersterfassung des Patienten (Hilfebedarf, Ressourcen, biographische Daten)
- **Pflegediagnosen**: Probleme und Ressourcen des Patienten in Pflegesprache (z.B. nach NANDA, ICNP)
- **Pflegeplanung**: Geplante Pflegeziele und Maßnahmen
- **Pflegebericht/Verlaufsdokumentation**: Täglich erfasste Beobachtungen und durchgeführte Maßnahmen
- **Assessments**: Strukturierte Einschätzungsinstrumente (Sturzrisiko, Dekubitusrisiko, Schmerz)
- **Pflegeüberleitung**: Übergabedokumente bei Wechsel der Einrichtung

Pflegedokumentation wird in verschiedenen Versorgungssettings geführt:

- Krankenhäuser (stationäre Pflege: im [[KIS]] oder separatem Pflegesystem)
- Ambulante Pflegedienste (mobile Dokumentation auf Tablet)
- Stationäre Pflegeeinrichtungen (Pflegeheime, teilstationäre Einrichtungen)
- Intensivstationen (spezialisierte Module im KIS)

### Rechtliche Grundlagen

Die Pflicht zur Pflegedokumentation ergibt sich aus mehreren Rechtsquellen:

- **§ 630f BGB**: Dokumentationspflicht in der Patientenversorgung
- **SGB XI (Sozialgesetzbuch XI)**: Anforderungen an die Qualitätssicherung in der Pflege
- **MDK-Richtlinien**: Anforderungen des Medizinischen Dienstes für Qualitätsprüfungen
- **Landesheimgesetze**: Dokumentationsanforderungen für stationäre Pflegeeinrichtungen

> [!frist-warnung] Frist-Warnung: Aufbewahrungspflicht und Audit-Readiness der Pflegedokumentation
> **Rechtsgrundlage:** § 630f Abs. 3 BGB (Aufbewahrung mindestens 10 Jahre nach Behandlungsende); § 114 Abs. 1 SGB XI (Qualitätsprüfung durch den Medizinischen Dienst); neue Qualitätsprüfungsrichtlinien ambulante Pflege (QPR ambulant) gelten ab 1. Juli 2026
> **Frist:** Laufend: Jede abgeschlossene Pflegedokumentation ist ab Behandlungsende mindestens 10 Jahre aufzubewahren. Akut: Ab 1. Juli 2026 prüft der Medizinische Dienst ambulante Pflegedienste auf Grundlage der aktualisierten QPR ambulant 2026.
> **Handlungsbedarf:** Die verantwortliche Stelle muss sicherstellen, dass die Pflegedokumentation revisionssicher archiviert und jederzeit exportierbar ist. Digitale Systeme müssen nachträgliche Veränderungen ausschließen können (Anforderung der MD-Prüfanleitung). Bei einem Systemwechsel ist eine vollständige Datenmigration oder ein zertifiziertes Langzeitarchiv erforderlich.
> **Bei Nichtbeachtung:** Fehlende oder nicht exportierbare Dokumentation gilt im MD-Audit als Dokumentationsmangel und kann zu einer schlechteren Qualitätsbewertung sowie zu Vergütungsabschlägen nach § 115 Abs. 3a SGB XI führen.

### Anbindung an die Telematikinfrastruktur

Pflegesysteme sind in der Entwicklung zu direkten Teilnehmern der [[Telematikinfrastruktur]]:

- **[[ePA]]-Befüllung**: Pflegedienste und stationäre Pflegeeinrichtungen sollen ab dem ePA-Rollout Dokumente in die ePA des Patienten einstellen (Pflegeberichte, Überleitungsbögen). Pflichttermin ist noch nicht festgelegt.
- **[[KIM]]-Anbindung**: Sichere Kommunikation zwischen Pflegeeinrichtungen, Ärzten und Krankenkassen über KIM-Nachrichten (z.B. Anfragen, Entlassberichte)
- **E-Rezept-Einlösung**: Ambulante Pflegedienste können im Auftrag der Patienten Medikamente bestellen
- **VSDM**: Einlesen der [[eGK]] bei ambulanten Pflegebesuchen (ist technisch möglich, aber derzeit noch nicht flächendeckend implementiert)

> [!praxis-tipp] Praxis-Tipp: TI-Anbindung für Pflegeeinrichtungen — was jetzt zu tun ist
> Seit Juli 2025 sind alle Pflegeeinrichtungen zur TI-Anbindung verpflichtet. Ambulante Pflegedienste müssen Leistungen ab Dezember 2026 ausschließlich elektronisch über KIM abrechnen. Papier-Abrechnung ist nur noch bis 30. November 2026 als Übergangslösung erlaubt.
>
> Checkliste für Ihre Einrichtung:
> 1. Prüfen Sie, ob Ihre Pflegedokumentation-Software (z.B. Medifox DAN, CGM Pflege) eine KIM-Anbindung hat. Fragen Sie den Hersteller nach dem konkreten Rollout-Datum.
> 2. Beantragen Sie eine SMC-B (Institutionskarte), falls noch nicht vorhanden. Planungszeit: ca. 6 Wochen.
> 3. Lassen Sie sich vom Software-Hersteller zeigen, wie Pflegekräfte die ePA eines Patienten im Pflegesystem aufrufen.
> 4. Informieren Sie Ihr Team: ePA-Zugriff erfordert die ausdrückliche Einwilligung des Patienten oder der Pflegeperson.
>
> Häufiger Fehler: Die SMC-B wird beantragt, aber nicht rechtzeitig im System hinterlegt. Testen Sie den Zugriff mit einer Test-ePA, bevor der Echtbetrieb beginnt.

> [!interesse-compliance] Pflichten für Pflegeeinrichtungen in der TI
> Pflegeeinrichtungen sind verpflichtet, ihren Patienten auf Anfrage Pflegedokumentationsdaten in die ePA einzustellen, sobald die entsprechenden technischen Voraussetzungen geschaffen sind. Die gematik arbeitet an Standards für Pflegesysteme als TI-Teilnehmer. Pflegeeinrichtungen sollten prüfen, ob ihre Dokumentationssoftware:
> 1. [[KIM]]-Anbindung unterstützt
> 2. ePA-Export von Pflegedokumenten anbietet
> 3. Das [[MIO]] Überleitungsbogen (in Entwicklung) implementiert
>
> Ambulante Pflegedienste, die E-Rezepte einlösen, benötigen eine [[SMC-B]] und [[eGK]]-Lesegerät.

## Technische Details

### Markt und Systeme

Wichtige Softwaresysteme für die digitale Pflegedokumentation in Deutschland:

| System | Einsatzbereich |
|---|---|
| Medifox DAN | Ambulante und stationäre Pflege |
| Euregon SNAP | Stationäre Pflege, Krankenhäuser |
| Dr. Ausbüttel EDV | Ambulante Pflege |
| CGM Pflege (CompuGroup) | Ambulante und stationäre Pflege |
| Dedalus (ORBIS Pflege) | Krankenhauspflege |
| Nexus Pflege | Krankenhauspflege |

Diese Systeme sind entweder eigenständige Pflegedokumentationssysteme oder Pflegemodule innerhalb eines [[KIS]].

> [!klinik-integration] Klinik-Integration: Pflegedokumentation im KIS-Umfeld
> **Zwei Modelle im Krankenhaus:** Entweder läuft die Pflegedokumentation als integriertes Modul im KIS (z.B. SAP IS-H mit Pflegemodul, Dedalus ORBIS Pflege) oder als eigenständiges Pflegesystem, das über HL7 v2 ADT-Nachrichten mit dem KIS synchronisiert wird. Integrierte Lösungen vermeiden Schnittstellenprobleme, sind aber oft weniger spezialisiert. Eigenständige Systeme bieten tiefere Pflegefunktionen, erfordern aber eine stabile bidirektionale KIS-Anbindung.
>
> **Intensivstation (ITS):** ITS-Dokumentation erfolgt häufig in spezialisierten Patientendaten-Management-Systemen (PDMS), z.B. Draeger, Philips IntelliVue oder Metavision. Die PDMS-KIS-Integration läuft über HL7 v2 oder ISiK FHIR. Prüfen Sie bei PDMS-Ausschreibungen, ob das System ISiK-Stufe-3-konform ist: Das ist Voraussetzung für die KHZG-Förderung und die zukünftige ePA-Integration.
>
> **MDK-Anforderung:** Die Pflegedokumentation muss revisionssicher und exportierbar sein. Stellen Sie sicher, dass Ihr System Dokumentenaudit-Logs führt und ein vollständiger Export für MDK-Prüfungen möglich ist, unabhängig vom KIS-Betriebszustand.

### Schnittstellen und Datenformate

Die technische Integration der Pflegedokumentation erfolgt über mehrere Standards:

**[[xDT|xDT]]-Familie**: Historischer Datenaustauschstandard im deutschen Gesundheitswesen. Für Pflegedienstleister sind vor allem GDT (Gerätedatentransfer) und BDT (Behandlungsdatentransfer) relevant.

**[[HL7]] v2**: Nachrichten für Aufnahme, Entlassung, Verlegung (ADT-Nachrichten: A01 Aufnahme, A02 Verlegung, A03 Entlassung). KIS-Systeme senden ADT-Nachrichten an Pflegesysteme, um Patientenbewegungen zu synchronisieren.

> [!klinik-integration] Klinik-Integration: HL7 ADT und ISiK für Pflegeworkflows
> **ADT-Nachrichten im Pflegealltag:** Wenn eine Patientin aufgenommen wird (ADT A01), muss die Nachricht an das Pflegesystem weitergeleitet werden, damit eine Pflegeplanung angelegt werden kann. Bei Stationsverlegung (ADT A02) muss die Pflegezuständigkeit automatisch wechseln. Bei Entlassung (ADT A03) muss der Pflegebericht abgeschlossen und ein Entlassbrief ausgelöst werden. Konfigurationsfehler in diesen Mappings sind eine häufige Ursache für fehlende oder verzögerte Pflegedokumentation.
>
> **Migration zu ISiK FHIR:** ISiK Stufe 3 definiert `ISiKPatient` und `ISiKKontaktGesundheitseinrichtung` (Encounter) als FHIR-Ressourcen. Zukünftig sollen ADT-Events über FHIR Subscriptions statt HL7-v2-Nachrichten kommuniziert werden. Prüfen Sie mit Ihrem Pflegesystem-Hersteller, ob und wann die FHIR-basierte ADT-Anbindung unterstützt wird. Bis dahin läuft HL7 v2 als paralleler Kanal weiter.
>
> **Entlassmanagement (§ 39 SGB V):** Das KIS muss beim Entlassvorgang den Überleitungsbogen erzeugen und ab Fertigstellung des MIO Überleitungsbogen in die ePA des Patienten einliefern. Dieser Workflow berührt KIS, Pflegesystem und TI-Konnektor gleichzeitig: Planen Sie ihn end-to-end und testen Sie Ausfallszenarien für den Fall, dass die TI nicht erreichbar ist.

**[[FHIR]] R4**: Moderner Standard für die TI-Integration. FHIR-Ressourcen für Pflegedaten:
- `CarePlan`: Pflegeplanung mit Pflegezielen und Maßnahmen
- `Observation`: Pflegeassessments (Sturz, Dekubitus, Schmerz)
- `Procedure`: Durchgeführte Pflegeinterventionen
- `Condition`: Pflegediagnosen

**ISiK (Interoperabler Sicherheitsstandard im Krankenhaus)**: Die gematik definiert FHIR-Profile für Krankenhäuser, darunter auch Pflegedaten. ISiK Modul Dokumentenaustausch ist für die ePA-Integration relevant.

### MIO Überleitungsbogen

Die [[KBV]] entwickelt das [[MIO]] **Überleitungsbogen** (auch: Pflegeüberleitung), das die strukturierte Übergabe von Pflegepatienten zwischen Einrichtungen (z.B. Krankenhaus → Pflegeheim, ambulante Pflege → stationär) standardisiert. Das MIO ist als FHIR-basiertes Profil spezifiziert und soll in der [[ePA]] gespeichert werden.

Status: Das MIO Überleitungsbogen ist laut KBV-Roadmap in Entwicklung (Version 1.0.0 angekündigt).

> [!interesse-technik] Technische Integration für Entwickler
> Für die TI-Integration von Pflegesystemen sind diese APIs und Standards relevant:
> - ePA-Fachdienst: Dokumente hochladen (XDS-Schnittstelle) oder FHIR-Dokumentenreferenzen anlegen
> - KIM-Client-Bibliothek: Für den Nachrichtenversand über KIM (sicheres E-Mail-Protokoll)
> - ISiK FHIR-Profile: [simplifier.net/isik](https://simplifier.net/isik)
> - MIO Überleitungsbogen: [mio.kbv.de](https://mio.kbv.de) (in Entwicklung)
> - FHIR-Profile für Pflegedaten in der ePA: Noch keine finale Spezifikation; Orientierung an ISiK Modul Dokumentenaustausch

> [!dev-quickstart] Dev Quickstart: FHIR-Schnittstellen für Pflegesysteme
> ISiP (Informationstechnische Systeme in der pflegerischen Versorgung) definiert FHIR-Profile für Pflegedaten.
> GitHub: [github.com/gematik/spec-ISiP](https://github.com/gematik/spec-ISiP)
>
> Relevante FHIR-Ressourcen für Pflegedaten (FHIR R4):
> ```json
> {
>   "resourceType": "CarePlan",
>   "status": "active",
>   "intent": "plan",
>   "subject": { "reference": "Patient/123" },
>   "activity": [{
>     "detail": {
>       "code": { "coding": [{ "system": "http://snomed.info/sct", "code": "229070002" }] },
>       "status": "in-progress",
>       "description": "Dekubitusprophylaxe: Umlagerung alle 2h"
>     }
>   }]
> }
> ```
>
> Für ePA-Dokumentenupload aus Pflegesystemen (XDS-Schnittstelle):
> ```bash
> POST /epa/api/v1/fhir/DocumentReference
> Authorization: Bearer <IDP-Token>
> Content-Type: application/fhir+json
> ```
>
> ADT-Nachrichten (KIS → Pflegesystem): HL7 v2 A01 Aufnahme, A02 Verlegung, A03 Entlassung
> ISiK Dokumentenaustausch (ePA-Integration): [github.com/gematik/spec-ISiK-Dokumentenaustausch](https://github.com/gematik/spec-ISiK-Dokumentenaustausch)
> ePA FHIR-Paket: `de.gematik.fhir.epa` auf [simplifier.net](https://simplifier.net/packages/de.gematik.fhir.epa)

### Qualitätsprüfung durch den MDK

Der Medizinische Dienst (MD, früher MDK) prüft regelmäßig die Qualität der Pflegedokumentation in stationären und ambulanten Pflegeeinrichtungen. Dabei werden unter anderem geprüft:

- Vollständigkeit der Pflegeplanung
- Nachvollziehbarkeit der Pflegemaßnahmen im Bericht
- Dokumentation der Medikamentengabe
- Sturzprotokolle und Dekubitusprophylaxe

Digitale Pflegedokumentation muss exportierbar und MDK-konform sein.

> [!praxis-tipp] Praxis-Tipp: MDK-Prüfung mit digitaler Dokumentation bestehen
> In Ihrer Einrichtung bedeutet das: Der MD prüft, ob Pflegeplanung, Maßnahmen und Medikamentengabe lückenlos nachvollziehbar sind. Digitale Systeme helfen dabei, aber nur wenn sie korrekt genutzt werden.
>
> Typische Mängel bei MD-Prüfungen:
> - Pflegeplanung vorhanden, aber seit Monaten nicht aktualisiert
> - Medikamentengabe dokumentiert, aber ohne Uhrzeit oder Handzeichen
> - Sturzprotokoll fehlt trotz dokumentiertem Sturzereignis
>
> Lösung: Legen Sie in Ihrer Pflegedokumentation-Software Pflichtfelder für diese Einträge fest. Die meisten Systeme (Medifox DAN, CGM Pflege) bieten das als Konfigurationsoption. Planen Sie einmal pro Quartal eine interne Dokumentationsrunde mit Ihrem Pflegeteam.

> [!interesse-patient] Patientenrechte in der Pflegedokumentation
> Als Patient oder Pflegebedürftiger haben Sie das Recht auf Einsicht in Ihre Pflegedokumentation (§ 630g BGB). Sie dürfen Kopien anfordern. Bei einem Einrichtungswechsel (z.B. Krankenhaus zu Pflegeheim) muss die Einrichtung einen Überleitungsbogen erstellen und Ihnen mitgeben. Mit der [[ePA]] sollen diese Dokumente künftig automatisch digital zur Verfügung stehen.

> [!patientenrecht] Patientenrecht: Einsicht in die Pflegedokumentation
> Sie haben das Recht, Ihre Pflegeunterlagen einzusehen. Das gilt für alle: Pflegeheimbewohner, Patienten im Krankenhaus und Personen mit ambulantem Pflegedienst.
>
> **Was kann ich tun?**
> 1. Bitten Sie die Pflegeeinrichtung schriftlich um Einsicht in Ihre Pflegedokumentation.
> 2. Die erste Kopie Ihrer Pflegeunterlagen ist **kostenlos** (§ 630g BGB, seit Februar 2026).
> 3. Die Einrichtung muss Ihnen die Unterlagen unverzüglich zeigen.
>
> **Bei einem Umzug in eine andere Einrichtung:** Die Pflegeeinrichtung muss einen Überleitungsbogen erstellen. Dieser enthält alle wichtigen Pflegeinformationen. Sie können diesen Bogen für sich selbst verlangen.
>
> **Wann kann die Einsicht verweigert werden?** Nur in sehr seltenen Ausnahmefällen, wenn die Einsicht Ihrer Behandlung schaden würde. Das muss die Einrichtung begründen.

## Verknüpfungen

- [[ePA]] (Speicherort für Pflegedokumentation ab dem ePA-Rollout für Pflegeeinrichtungen)
- [[KIS]] (Krankenhausinformationssystem, enthält häufig Pflegedokumentationsmodule)
- [[MIO]] (KBV-Profile; MIO Überleitungsbogen für Pflegeüberleitung)
- [[FHIR]] (Technischer Standard für digitale Pflegedaten)
- [[KIM]] (sichere Kommunikation zwischen Pflegeeinrichtungen und Ärzten)
- [[HL7]] (ADT-Nachrichten für Patientenbewegungen zwischen KIS und Pflegesystem)
- [[ISiK]] (FHIR-Profile für Krankenhauspflege)
- [[SMC-B]] (Institutionskarte für Pflegeeinrichtungen in der TI)
- [[eGK]] (Versicherungsnachweis bei ambulanten Pflegebesuchen)
- [[xDT]] (Datenaustauschstandard im deutschen Gesundheitswesen)
- [[Laborbefund]] (Laborergebnisse als wichtiger Bestandteil der Pflegedokumentation)

## Quellen

- [gematik: ePA für Pflegeeinrichtungen](https://www.gematik.de/anwendungen/epa/pflege)
- [KBV: MIO Überleitungsbogen](https://mio.kbv.de)
- [Bundesministerium für Gesundheit: Digitalisierung in der Pflege](https://www.bundesgesundheitsministerium.de/themen/pflege/digitalisierung-in-der-pflege.html)
- [Wikipedia: Pflegedokumentation](https://de.wikipedia.org/wiki/Pflegedokumentation)
