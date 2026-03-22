---
title: Entlassbrief
audience: [technical, non-technical]
tags: [prozesse, krankenhaus, kommunikation, arztbrief, isik, kim, cda, fhir]
aliases: [Entlassungsbericht, Krankenhausentlassbrief, Arztbrief, Entlassungsbrief, Abschlussbericht]
relevance:
  sectors: [krankenhaus, arztpraxis, hersteller, it-dienstleister, kasse]
  interests: [compliance, technik]
maturity: wachsend
---

# Entlassbrief

Der **Entlassbrief** (auch: Entlassungsbericht, Arztbrief) ist das klinische Dokument, das ein Krankenhaus nach einer stationären Behandlung an den weiterbehandelnden Arzt übermittelt. Er fasst Diagnosen, Therapie und Empfehlungen für die Weiterversorgung zusammen.

## Erklärt für Einsteiger

Wenn du aus dem Krankenhaus entlassen wirst, weiß dein Hausarzt oft noch nichts von dem, was passiert ist. Der Entlassbrief schließt diese Lücke: Das Krankenhaus schreibt zusammen, was festgestellt wurde, was behandelt wurde und was als nächstes zu tun ist. Früher kam dieser Brief per Post, manchmal erst Wochen nach der Entlassung. Mit der digitalen Telematikinfrastruktur wird er jetzt elektronisch direkt an den Hausarzt übermittelt, in wenigen Stunden statt in Wochen.

## Überblick

Der Entlassbrief ist das zentrale Dokument für die Kommunikation zwischen stationärer und ambulanter Versorgung. Er wird am Ende eines Krankenhausaufenthalts vom behandelnden Arzt verfasst und an den Hausarzt oder andere weiterbehandelnde Leistungserbringer übermittelt.

Die rechtliche Grundlage liegt in § 39 Abs. 1a [[SGB-V]], der das Entlassmanagement als Bestandteil der Krankenhausbehandlung definiert. Das Krankenhaus ist verpflichtet, den Patienten beim Übergang in die ambulante Versorgung aktiv zu unterstützen. Zum Entlassmanagement gehört auch die zeitnahe Übermittlung der Entlassungsunterlagen.

Inhaltlich enthält ein Entlassbrief typischerweise:

- **Aufnahmeanlass und Anamnese**: Warum und wann wurde der Patient aufgenommen?
- **Diagnosen**: Haupt- und Nebendiagnosen, kodiert nach [[ICD-10-GM]]
- **Durchgeführte Prozeduren**: Operationen und Eingriffe nach [[OPS]]
- **Therapieverlauf**: Behandlungsschritte, Medikamente, Besonderheiten
- **Medikation bei Entlassung**: Aktuelle Medikamentenliste mit Dosierungsangaben
- **Epikrise und Empfehlungen**: Zusammenfassung und Hinweise für die Weiterversorgung
- **Ambulante Anschlusstermine**: Empfohlene Folgetermine beim Haus- oder Facharzt

### Bedeutung für die sektorenübergreifende Versorgung

Der Entlassbrief ist das Bindeglied zwischen Krankenhaus und niedergelassenen Ärzten. Kommt er zu spät oder ist er unvollständig, entstehen Versorgungslücken: Der Hausarzt weiß nicht, welche Medikamente geändert wurden, oder Anschlussuntersuchungen werden nicht rechtzeitig veranlasst. Studien zeigen, dass verzögerte oder fehlende Entlassbriefe ein wesentlicher Risikofaktor für Rehospitalisierungen sind.

> [!praxis-tipp] Praxis-Tipp: Entlassbriefe über KIM empfangen
> Elektronische Entlassbriefe kommen als KIM-Nachricht an. So prüfen Sie Ihren Empfang:
> 1. Öffnen Sie in Ihrem PVS das KIM-Postfach. Neue Entlassbriefe erscheinen wie E-Mails mit Anhang.
> 2. Der Brief wird automatisch der Patientenakte zugeordnet, wenn die Versichertennummer übereinstimmt. Prüfen Sie die Zuordnung manuell bei Abweichungen.
> 3. Prüfen Sie das KIM-Postfach mindestens zweimal täglich: Entlassbriefe müssen laut Rahmenvertrag Entlassmanagement am Entlassungstag übermittelt werden.
> 4. Medikationsänderungen aus dem Brief sofort im PVS übernehmen: Das ist der häufigste Fehlerquell bei Folgebehandlungen.
>
> Häufiger Fehler: Die KIM-Adresse der Praxis ist nicht im Verzeichnisdienst (VZD) eingetragen. Das Krankenhaus kann dann keine Briefe zustellen. Lassen Sie Ihren TI-Dienstleister den VZD-Eintrag prüfen.

> [!interesse-compliance] Fristen und Pflichten
> Nach den Vorgaben des Rahmenvertrags Entlassmanagement (§ 39 Abs. 1a SGB V) muss der Entlassbrief dem weiterbehandelnden Arzt spätestens am Entlassungstag übermittelt oder mitgegeben werden. Bei elektronischer Übermittlung über [[KIM]] gelten die gleichen Anforderungen. Krankenhäuser, die [[ISiK]] Stufe 3 (Modul Dokumentenaustausch) implementieren müssen, sind verpflichtet, den Entlassbrief als [[FHIR]]-Dokument über standardisierte Schnittstellen bereitzustellen. Die Pflicht gilt für alle KHG-geförderten Krankenhäuser ab dem Stichtag der jeweiligen ISiK-Stufe.

> [!frist-warnung] Frist-Warnung: Entlassbrief-Übermittlung am Entlassungstag
> **Rechtsgrundlage:** § 39 Abs. 1a Satz 9 SGB V i.V.m. § 5 Rahmenvertrag Entlassmanagement (GKV-Spitzenverband, DKG, KBV; aktuelle Fassung: 13. Änderungsvereinbarung vom 23.05.2025)
> **Frist:** Der Entlassbrief ist dem weiterbehandelnden Leistungserbringer spätestens am Entlassungstag in Ausfertigung auszuhändigen oder zu übermitteln. Eine nachträgliche Übersendung per Post genügt den vertraglichen Anforderungen nicht.
> **Handlungsbedarf:** Krankenhäuser müssen sicherstellen, dass Entlassbriefe bis zum Zeitpunkt der Entlassung vollständig erstellt und über [[KIM]] an die im [[VZD|Verzeichnisdienst]] hinterlegte KIM-Adresse des weiterbehandelnden Arztes versandt werden. Ist die KIM-Adresse nicht ermittelbar, ist der Brief dem Patienten in Papierform mitzugeben.
> **Bei Nichtbeachtung:** Verstöße sind von den Krankenhäusern im Rahmen des Qualitätsmanagements zu dokumentieren. Das Entlassmanagement ist Pflichtbestandteil der Krankenhausbehandlung nach § 39 Abs. 1a SGB V; die Krankenkassen sind berechtigt, Mängel im Rahmen der Vertragserfüllung zu beanstanden.

## Technische Details

### Digitale Übermittlung über KIM

Elektronische Entlassbriefe werden über den [[KIM|KIM-Dienst (Kommunikation im Medizinwesen)]] als sichere, Ende-zu-Ende-verschlüsselte Nachrichten übertragen. Der Entlassbrief wird als Anhang einer KIM-Nachricht versandt, adressiert an die KIM-Adresse des Hausarztes oder Weiterbehandlers.

Der [[eArztbrief]] ist der Oberbegriff für alle über KIM versandten Arztbriefe. Der Entlassbrief ist ein Spezialfall des Arztbriefs, ausgestellt vom Krankenhaus bei stationärer Entlassung.

### Format: CDA R2 und FHIR

Historisch wurde der Entlassbrief im [[CDA|HL7 CDA R2]]-Format (Clinical Document Architecture) ausgestellt. Die [[KBV]] spezifiziert den "Basis-Arztbrief" als verbindliches CDA-Template mit Pflicht- und optionalen Abschnitten.

Mit der Einführung von [[ISiK]] (Informationstechnische Systeme im Krankenhaus) wird der Entlassbrief schrittweise in das FHIR-Ökosystem überführt:

- **ISiK-Modul Dokumentenaustausch**: Definiert FHIR R4-Profile für klinische Dokumente im Krankenhaus, darunter Arztbriefe und Entlassungsdokumente. Das Modul spezifiziert FHIR-Ressourcen auf Basis von `DocumentReference` und `Bundle`.
- **ISiK Composition**: Strukturiertes Dokument, das die Abschnitte des Entlassbriefs als FHIR-Composition mit Sections abbildet.

### ISiK Dokumentenaustausch

Das ISiK-Modul "Dokumentenaustausch" (ab Stufe 2, verpflichtend ab Stufe 3 per 01.07.2025) schreibt vor, dass [[KIS|Krankenhausinformationssysteme (KIS)]] klinische Dokumente über standardisierte FHIR REST-Schnittstellen bereitstellen müssen. Entlassbriefe sind als Pflichtdokument im Modul aufgeführt.

> [!klinik-integration] Klinik-Integration: ISiK Dokumentenaustausch im Entlassworkflow
> **Pflichttermin:** Ab 01.07.2025 müssen alle KHG-geförderten Krankenhäuser den Entlassbrief über ISiK Stufe 3 (Modul Dokumentenaustausch) als FHIR-Dokument bereitstellen. Die gematik-Bestätigung des KIS ist Voraussetzung für den weiteren Betrieb (§ 373 SGB V).
>
> **KIS-Kontext:** Gängige KIS-Plattformen (SAP IS-H/i.s.h.med, Orbis/Dedalus, iMedOne, CGM Clinical) liefern ISiK-Module als Software-Update. Klären Sie mit Ihrem Hersteller, ob das Modul Dokumentenaustausch Stufe 3 im aktuellen Release enthalten ist und ob die gematik-Bestätigung vorliegt.
>
> **Workflow-Bezug:** Der Entlassbrief entsteht im KIS beim Entlassvorgang. Parallel zur KIM-Übermittlung muss er als `ISiKDokumentenMetadaten` (DocumentReference, LOINC `18842-5`) über die FHIR REST-Schnittstelle abrufbar sein. KIM-Übermittlung und FHIR-Bereitstellung sind parallele, nicht alternative Kanäle. Die Signatur über den [[HBA]] am Konnektor bleibt Pflicht für die Vergütungsfähigkeit.
>
> **Deployment:** Der FHIR-Endpunkt des KIS muss intern für nachgelagerte Subsysteme erreichbar sein (Dokumentenmanagement, ePA-Konnektor). TLS-Absicherung und Netzwerksegmentierung sind erforderlich. Planen Sie Hochverfügbarkeit des FHIR-Dienstes: Der Endpunkt ist bei jeder Entlassung kritisch.

Relevante FHIR-Ressourcen:
- `ISiKDokumentenMetadaten` (basiert auf `DocumentReference`): Metadaten des Entlassbriefs (Dokumenttyp, Autor, Datum, Patient)
- `ISiKBerichtSubSysteme`: FHIR Composition mit strukturierten Abschnitten
- `Bundle` (Dokumenten-Bundle): Umschließt alle Ressourcen eines Entlassbriefs

Der Dokumenttyp wird über einen [[LOINC]]-Code identifiziert. Für den Entlassbrief ist dies `18842-5` (Discharge Summary).

> [!frist-warnung] Frist-Warnung: ISiK Stufe 3 Dokumentenaustausch
> **Rechtsgrundlage:** § 371 Abs. 2 SGB V (eingefügt durch PDSG vom 14.10.2020); ISiK-Spezifikation Stufe 3 (gematik)
> **Frist:** Seit 1. Juli 2025 sind alle KHG-geförderten Krankenhäuser verpflichtet, das ISiK-Modul "Dokumentenaustausch" (Stufe 3) zu betreiben und das Bestätigungsverfahren der gematik nachzuweisen. Entlassbriefe müssen als FHIR R4-Ressource (Profil `ISiKDokumentenMetadaten`, LOINC `18842-5`) über standardisierte REST-Schnittstellen abrufbar sein.
> **Handlungsbedarf:** Prüfen Sie, ob Ihr KIS-Hersteller das gematik-Bestätigungsverfahren für ISiK Stufe 3 abgeschlossen hat. Das Zertifikat ist dem Krankenhaus nachzuweisen. Fehlende Konformität ist unverzüglich zu melden und nachzurüsten.
> **Bei Nichtbeachtung:** Die ISiK-Konformitätspflicht ist Voraussetzung für die Inanspruchnahme von Fördermitteln nach dem Krankenhauszukunftsgesetz (KHZG) und Nachfolgeprogrammen. Nicht konforme Systeme können bei Prüfungen durch die zuständigen Landesbehörden beanstandet werden.

> [!dev-quickstart] Dev Quickstart: ISiK Dokumentenaustausch REST-API
> Entlassbrief als `DocumentReference` anlegen (ISiK Stufe 3, verpflichtend ab 01.07.2025):
> ```bash
> POST [KIS-FHIR-Base]/DocumentReference
> Content-Type: application/fhir+json
> Authorization: Bearer <Access-Token>
> ```
> Minimales Request-Body-Skelett:
> ```json
> {
>   "resourceType": "DocumentReference",
>   "meta": { "profile": ["https://gematik.de/fhir/isik/StructureDefinition/ISiKDokumentenMetadaten"] },
>   "status": "current",
>   "type": { "coding": [{ "system": "http://loinc.org", "code": "18842-5", "display": "Discharge Summary" }] },
>   "subject": { "reference": "Patient/example-123" },
>   "content": [{ "attachment": { "contentType": "application/pdf", "url": "Binary/entlassbrief-123" } }]
> }
> ```
> Dokument-Bundle abrufen (LOINC 18842-5, Status current):
> ```bash
> GET [KIS-FHIR-Base]/DocumentReference?patient=Patient/123&type=http://loinc.org|18842-5&status=current
> ```
> - Profil `ISiKDokumentenMetadaten`: [simplifier.net/isik-dokumentenaustausch-v3](https://simplifier.net/isik-dokumentenaustausch-v3)
> - GitHub Spec: [gematik/spec-ISiK-Dokumentenaustausch](https://github.com/gematik/spec-ISiK-Dokumentenaustausch)
> - KIM-Transport des Entlassbriefs: Dienstkennung `eArztbrief;v=1.1`

### Einbindung in die ePA

Entlassbriefe können automatisiert in die [[ePA]] des Patienten eingestellt werden. Nach dem Empfang im Primärsystem (PVS) oder direkt vom KIS können sie über die ePA-Schnittstelle im [[XDS]]-Dokumentenmodell registriert und gespeichert werden. Der Patient erteilt die Zugriffserlaubnis.

Mit der ePA erhält der Patient Zugriff auf seine Entlassbriefe und kann sie zukünftigen Behandlern zugänglich machen, ohne sie physisch mitzuführen.

> [!klinik-integration] Klinik-Integration: Entlassbrief direkt in die ePA einstellen
> **Workflow Entlassung:** Das KIS kann Entlassbriefe direkt in die ePA des Patienten übertragen, ohne Umweg über ein niedergelassenes PVS. Voraussetzung ist ein ePA-Konnektor am Krankenhausstandort und eine aktive ePA des Patienten ohne Widerspruch.
>
> **HL7/FHIR-Schnittstelle:** Der Entlassbrief wird als FHIR DocumentReference mit XDS-Metadaten (XDSDocumentEntry) registriert. Dokumentenklasse: `18842-5` (Discharge Summary). Das KIS übermittelt das Dokument über den Konnektor an das ePA-Aktensystem der zuständigen Krankenkasse.
>
> **KIS-Anbindung:** Prüfen Sie beim KIS-Hersteller, ob ein direktes ePA-Modul verfügbar ist. Hochvolumen-Häuser mit mehr als 100 Entlassungen täglich sollten die Performance der ePA-Anbindung in einem Lasttest prüfen. Redundanter Konnektor-Betrieb ist für unterbrechungsfreie Entlassvorgänge empfohlen.
>
> **Ausfallszenario:** Ist die ePA-Schnittstelle nicht erreichbar, muss der Entlassbrief ersatzweise per KIM oder in Papierform übergeben werden. Das Entlassmanagement darf nicht am TI-Ausfall scheitern.

> [!patientenrecht] Patientenrecht: Ihr Entlassbrief gehört Ihnen
> Nach einem Krankenhausaufenthalt haben Sie das Recht, Ihren Entlassbrief zu lesen und eine Kopie zu erhalten.
>
> **Ihre Rechte:**
> - Sie haben das Recht auf Einsicht in alle Behandlungsunterlagen (§ 630g BGB). Das gilt auch für den Entlassbrief.
> - Die erste Kopie Ihrer Unterlagen ist kostenlos (gilt seit 06.02.2026).
> - Das Krankenhaus muss Ihnen den Entlassbrief spätestens am Entlassungstag aushändigen oder übermitteln.
>
> **Was kann ich tun?**
> 1. Fragen Sie beim Pflegepersonal oder der Patientenaufnahme nach Ihrem Entlassbrief.
> 2. Wenn der Brief in Ihrer [[ePA]] gespeichert ist, finden Sie ihn in der App Ihrer Krankenkasse.
> 3. Wenn der Brief fehlt: Wenden Sie sich schriftlich ans Krankenhaus und beantragen Sie Ihre Unterlagen. Das Krankenhaus muss antworten.

> [!praxis-tipp] Praxis-Tipp: Entlassbrief in die ePA einstellen
> Wenn ein Patient eine aktive ePA hat, können Sie empfangene Entlassbriefe direkt daraus in die ePA weiterstellen. So geht es in der Praxis:
> 1. Brief im KIM-Postfach öffnen und prüfen, ob der Patient eine ePA hat (Anzeige im PVS).
> 2. Im PVS die Funktion "In ePA einstellen" nutzen: Der Brief wird als Dokument übertragen.
> 3. Der Patient entscheidet über die Freigabe. Er muss nicht anwesend sein: Die ePA-App informiert ihn.
>
> In Ihrer Praxis bedeutet das: Überweisende Fachärzte und künftige Behandler können den Entlassbrief direkt aus der ePA abrufen, ohne dass der Patient ihn mitbringen muss. Das spart Rückfragen und beschleunigt die Weiterbehandlung.

### Signatur

Nach § 291f [[SGB-V]] muss ein übermittelter Arztbrief mit einer [[QES|qualifizierten elektronischen Signatur (QES)]] versehen werden, damit die Vergütung nach [[EBM]] (GOP 86900) ausgezahlt werden kann. Die QES wird über den [[HBA]] des ausstellenden Arztes und den [[Konnektoren|Konnektor]] erzeugt.

> [!interesse-technik] Technischer Einstieg: ISiK Dokumentenaustausch
> Simplifier-Paket ISiK Dokumentenaustausch: [simplifier.net/packages/de.gematik.isik-dokumentenaustausch](https://simplifier.net/packages/de.gematik.isik-dokumentenaustausch). LOINC-Code für Discharge Summary: `18842-5`. Dokumenten-Bundle-Typ: `document`. Kernprofil für Dokumentenmetadaten: `ISiKDokumentenMetadaten` (DocumentReference). Für den Transport via KIM: Dienstkennung `eArztbrief;v=1.1`. gematik Fachportal ISiK: [fachportal.gematik.de/informationen-fuer/isik](https://fachportal.gematik.de/informationen-fuer/isik).

## Verknüpfungen

- [[eArztbrief]] (elektronischer Arztbrief, Oberbegriff; Entlassbrief ist ein Spezialfall)
- [[KIM]] (Transportdienst für die elektronische Übermittlung)
- [[ISiK]] (Interoperabilitätsstandard, der FHIR-basierte Entlassbriefe im KIS vorschreibt)
- [[CDA]] (historisches XML-Format für Arztbriefe)
- [[FHIR]] (modernes Datenaustauschformat; ISiK Dokumentenaustausch basiert darauf)
- [[ePA]] (elektronische Patientenakte, in die Entlassbriefe eingestellt werden können)
- [[KIS]] (Krankenhausinformationssystem, das den Entlassbrief erstellt und übermittelt)
- [[QES]] (qualifizierte Signatur für die Vergütungsfähigkeit des eArztbriefs)
- [[HBA]] (Träger der QES-Signatur des ausstellenden Arztes)
- [[Entlassmanagement]] (übergeordneter Prozess, zu dem der Entlassbrief gehört)
- [[XDS]] (Dokumentenspeichermodell der ePA)
- [[ICD-10-GM]] (Diagnosekodierung im Entlassbrief)
- [[OPS]] (Prozedurkodierung im Entlassbrief)
- [[LOINC]] (Code für den Dokumenttyp Discharge Summary)

## Quellen

- [§ 39 Abs. 1a SGB V – Entlassmanagement](https://www.gesetze-im-internet.de/sgb_5/__39.html)
- [gematik Fachportal: ISiK – Informationstechnische Systeme im Krankenhaus](https://fachportal.gematik.de/informationen-fuer/isik)
- [KBV: Basis-Arztbrief (CDA-Spezifikation)](https://www.kbv.de/html/2432.php)
- [Simplifier.net: ISiK Dokumentenaustausch](https://simplifier.net/packages/de.gematik.isik-dokumentenaustausch)
- [Rahmenvertrag Entlassmanagement (GKV-Spitzenverband)](https://www.gkv-spitzenverband.de/krankenversicherung/ambulant_stationaere_versorgung/entlassmanagement/entlassmanagement.jsp)
