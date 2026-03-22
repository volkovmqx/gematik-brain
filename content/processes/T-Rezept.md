---
title: T-Rezept
audience: [technical, non-technical]
tags: [prozesse, rezept, thalidomid, bfarm, digitalisierung, e-rezept]
aliases: [T-Rezept, Thalidomid-Rezept, Sonderrezept Thalidomid, E-T-Rezept, elektronisches T-Rezept]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, hersteller, regulierung, patient]
  interests: [compliance, technik]
maturity: wachsend
---

# T-Rezept

Das **T-Rezept** ist ein gesetzlich vorgeschriebenes Sonderrezept für Arzneimittel mit den Wirkstoffen Thalidomid, Lenalidomid und Pomalidomid, das aufgrund des hohen Teratogenitätsrisikos dieser Substanzen strenge Verschreibungs- und Abgabepflichten unterliegt und ab dem vierten Quartal 2026 als elektronisches T-Rezept eingeführt werden soll.

## Erklärt für Einsteiger

Thalidomid war der Wirkstoff hinter dem Schlafmittel Contergan. Es verursachte in den 1950er und 1960er Jahren schwere Missbildungen bei tausenden Kindern. Heute wird Thalidomid und verwandte Wirkstoffe bei bestimmten Krebsarten eingesetzt. Weil diese Wirkstoffe immer noch extrem schädlich für ungeborene Kinder sind, gibt es für sie ein besonderes Rezept: das T-Rezept. Es stellt sicher, dass nur Ärzte mit einer besonderen Erlaubnis dieses Medikament verschreiben dürfen und dass Patientinnen im gebärfähigen Alter strenge Verhütungsauflagen einhalten. Ab Ende 2026 wird das Papierrezept durch eine digitale Version ersetzt.

## Überblick

Das T-Rezept wurde durch das [[BfArM]] im Rahmen eines Risikominimierungsprogramms eingeführt. Rechtsgrundlage ist § 3a der Arzneimittelverschreibungsverordnung (AMVV). Das T-Rezept ist Teil des **T-Registers**, einem verpflichtenden Sicherheitsprogramm des BfArM, das Ärzte, Apotheken und Patientinnen erfasst, die mit Thalidomid-Klasse-Arzneimitteln in Kontakt kommen.

Die betroffenen Wirkstoffe sind:

- **Thalidomid** (z.B. Thalidomide Celgene)
- **Lenalidomid** (z.B. Revlimid)
- **Pomalidomid** (z.B. Imnovid)

Diese Wirkstoffe sind Therapieoptionen bei multiplem Myelom (Knochenmarkkrebs) und anderen hämatologischen Erkrankungen. Ihre Anwendung ist an strenge Bedingungen geknüpft, die über das normale Verschreibungsrecht hinausgehen.

> [!interesse-compliance] Besondere Verschreibungspflichten
> Ärzte dürfen T-Rezept-pflichtige Arzneimittel nur verschreiben, wenn sie beim BfArM-T-Register registriert sind und die spezifischen Schulungen absolviert haben. Patientinnen im gebärfähigen Alter müssen einen negativen Schwangerschaftstest nachweisen und verlässliche Verhütungsmaßnahmen einhalten. Apotheken dürfen das T-Rezept nur einlösen, wenn es vollständig ausgefüllt ist (Arztregisternummer, Patientennummer aus dem T-Register, Bestätigung der Aufklärung). Die Einlösung ist auf 7 Tage nach Ausstellung begrenzt. Bei Verstößen gegen das T-Register-Verfahren drohen dem Arzt der Entzug der Verschreibungserlaubnis und strafrechtliche Konsequenzen.

> [!frist-warnung] Frist-Warnung: Einführung des elektronischen T-Rezepts (E-T-Rezept)
> **Rechtsgrundlage:** § 3a AMVV (Arzneimittelverschreibungsverordnung) i.V.m. dem gematik-Spezifikationsrahmen für das E-Rezept
> **Frist:** Das E-T-Rezept ist für das vierte Quartal 2026 verbindlich geplant. PVS-Hersteller und AVS-Hersteller müssen das T-Rezept-FHIR-Profil der gematik implementieren. Das bestehende Papier-T-Rezept wird mit der Einführung des E-T-Rezepts für vertragsärztliche Verschreibungen durch das elektronische Format ersetzt.
> **Handlungsbedarf:** Vertragsärztliche Softwarehersteller (PVS) setzen das neue T-Rezept-FHIR-Profil mit allen T-Register-Pflichtfeldern (Arztregisternummer, Patientenregisternummer) um. Apothekensoftware (AVS) implementiert die erweiterte Validierungslogik inklusive der 6-Tage-Einlösefrist nach § 3a AMVV. Ärzte prüfen, ob ihre T-Register-Registrierung beim BfArM aktuell ist.
> **Bei Nichtbeachtung:** Ohne konforme Softwareimplementierung können T-Rezept-pflichtige Arzneimittel nach Einführungsdatum nicht mehr vertragsärztlich verordnet und abgerechnet werden.

### Digitalisierung ab Q4/2026

Die gematik hat im Jahr 2025 die Spezifikation für das elektronische T-Rezept (E-T-Rezept) veröffentlicht. Mit dem E-T-Rezept wird das Papierrezept durch eine digitale Version auf Basis der bestehenden [[E-Rezept]]-Infrastruktur ersetzt. Die Einführung ist für das vierte Quartal 2026 geplant.

Wichtige Änderungen durch das E-T-Rezept:

- Die bisherigen Papierausfertigungen (Arzt-Kopie, Apotheken-Kopie, Patient-Kopie) entfallen.
- Die relevanten Daten werden automatisch über den E-Rezept-Fachdienst weitergeleitet, sobald die Apotheke das Rezept abruft.
- Die Anbindung an die [[eML]] (elektronische Medikationsliste) wird funktionell erweitert.
- Das BfArM-T-Register wird digital mit dem E-Rezept-System verknüpft.

> [!praxis-tipp] Praxis-Tipp: Vorbereitung auf das E-T-Rezept (ab Q4/2026)
> Wenn Sie Thalidomid, Lenalidomid oder Pomalidomid verordnen, müssen Sie vor der Umstellung folgendes prüfen:
> 1. Ist Ihre BfArM-T-Register-Registrierung aktuell? Prüfen Sie dies unter [bfarm.de/T-Register](https://www.bfarm.de/DE/Bundesopiumstelle/T-Register/_node.html).
> 2. Ist Ihr PVS-Update für das E-T-Rezept-FHIR-Profil eingespielt? Fragen Sie Ihren PVS-Hersteller nach dem Umsetzungsdatum.
> 3. Gute Nachricht: Die lästige dreifache Papierausfertigung (Arzt-, Apotheken- und Patientenkopie) entfällt. Die Datenübermittlung ans BfArM läuft automatisch.
>
> Einlösefrist beachten: Das E-T-Rezept darf nur innerhalb von 6 Kalendertagen nach Ausstellung eingelöst werden (bisher 7 Tage beim Papierrezept). Informieren Sie Ihre Patienten über diese geänderte Frist.

> [!klinik-integration] Klinik-Integration: T-Rezept in der Onkologie/Hämatologie
> **Workflow-Bezug:** T-Rezept-pflichtige Wirkstoffe (Thalidomid, Lenalidomid, Pomalidomid) werden fast ausschließlich in hämatologisch-onkologischen Abteilungen bei multiplem Myelom und verwandten Erkrankungen eingesetzt. Stationäre Verordnungen erfolgen durch registrierte Ärzte mit T-Register-Arztregisternummer. Das KIS muss sicherstellen, dass nur bei T-Register-registrierten Ärzten T-Rezepte ausgestellt werden können.
>
> **KIS-Anpassungsbedarf ab Q4/2026:** Das eingesetzte KIS muss das T-Rezept-FHIR-Profil der gematik implementieren. Pflichtfelder sind Arztregisternummer und Patientenregisternummer aus dem T-Register. Krankenhäuser, die eigene IT-Entwicklung betreiben oder KIS-Module beauftragen, müssen diese Anforderungen in die Leistungsbeschreibung an den KIS-Hersteller aufnehmen.
>
> **Krankenhausapotheke:** Die Krankenhausapotheke übernimmt die Dispensierung. Nach Einführung des E-T-Rezepts erfolgt die Meldung an das BfArM-T-Register digital über den E-Rezept-Fachdienst. Die bisherigen manuellen Meldeprozesse der Apotheke (Papierformulare) entfallen. Apothekensoftware im Krankenhaus muss bis Q4/2026 die neue Validierungslogik (7-Tage-Einlösefrist, T-Registernummern-Prüfung) unterstützen.

## Technische Details

### Das T-Register

Das T-Register des [[BfArM]] ist das zentrale Kontrollsystem für Thalidomid-Klasse-Arzneimittel. Es erfasst:

- **Ärzte**: Jeder Arzt, der T-Rezepte ausstellen möchte, muss sich beim BfArM registrieren und erhält eine eindeutige Arztregisternummer.
- **Apotheken**: Apotheken sind zur Prüfung der T-Rezept-Angaben verpflichtet und übermitteln Dispensierungsdaten an das BfArM.
- **Patienten**: Patientinnen und Patienten erhalten eine Patientennummer aus dem T-Register, die auf jedem Rezept aufgeführt sein muss.

Das System ist Teil des europäischen **Pregnancy Prevention Programme (PPP)** für Thalidomid und Lenalidomid, das von der EMA überwacht wird.

### Technische Umsetzung des E-T-Rezepts

Das E-T-Rezept basiert auf der bestehenden [[E-Rezept]]-Infrastruktur der gematik. Die Besonderheiten:

- **[[FHIR]]-Profil für T-Rezepte**: Die gematik hat ein eigenes FHIR-Profil für das T-Rezept erstellt, das die T-Register-spezifischen Pflichtfelder (Arztregisternummer, Patientenregisternummer) abbildet.
- **Workflow-Anpassung**: Der E-Rezept-Fachdienst erkennt T-Rezepte als Sonderrezept-Typ und wendet spezifische Einlöse-Validierungen an (z.B. 7-Tage-Frist, T-Register-Nummernprüfung).
- **BfArM-Schnittstelle**: Eine neue Schnittstelle zwischen dem E-Rezept-Fachdienst und dem BfArM-T-Register ermöglicht die digitale Übermittlung der Dispensierungsdaten.

> [!interesse-technik] Spezifikation und Implementierung
> Die gematik hat die Spezifikation für das E-T-Rezept im August 2025 veröffentlicht. Die Spezifikation ist auf dem gematik Fachportal verfügbar. PVS-Hersteller müssen das neue T-Rezept-FHIR-Profil integrieren und die T-Register-Pflichtfelder (Arztregisternummer, Patientennummer) als Pflichtfelder im Formulardialog umsetzen. AVS-Hersteller müssen die erweiterte Validierungslogik für T-Rezepte implementieren. Relevante Ressource: [BfArM: T-Register FAQ](https://www.bfarm.de/DE/Bundesopiumstelle/_FAQ/T-Register/_node.html)

> [!dev-quickstart] Dev Quickstart: E-T-Rezept FHIR-Profil und Pflichtfelder
> Das E-T-Rezept baut auf dem E-Rezept-Workflow-Profil auf. T-Register-Pflichtfelder werden als FHIR-Extensions abgebildet.
> ```json
> {
>   "resourceType": "MedicationRequest",
>   "meta": {
>     "profile": ["https://gematik.de/fhir/erp/StructureDefinition/GEM_ERP_PR_MedicationRequest|1.4"]
>   },
>   "extension": [
>     {
>       "url": "https://gematik.de/fhir/erp/StructureDefinition/GEM_ERP_EX_TRegisterNumber",
>       "valueIdentifier": {
>         "system": "https://bfarm.de/fhir/sid/t-register-arzt",
>         "value": "<Arztregisternummer>"
>       }
>     },
>     {
>       "url": "https://gematik.de/fhir/erp/StructureDefinition/GEM_ERP_EX_TRegisterPatient",
>       "valueIdentifier": {
>         "system": "https://bfarm.de/fhir/sid/t-register-patient",
>         "value": "<Patientenregisternummer>"
>       }
>     }
>   ],
>   "status": "active",
>   "intent": "order"
> }
> ```
> - E-Rezept-Workflow-Profile (Simplifier): [simplifier.net/erezept-workflow](https://simplifier.net/erezept-workflow)
> - GitHub API-Dokumentation: [gematik/api-erp](https://github.com/gematik/api-erp)
> - Gültigkeitsfrist des T-Rezepts: 7 Tage (Validierung durch E-Rezept-Fachdienst serverseitig)
> - BfArM T-Register: [bfarm.de/T-Register](https://www.bfarm.de/DE/Bundesopiumstelle/T-Register/_node.html)

### Abgrenzung zu anderen Sonderrezepten

| Rezepttyp | Wirkstoffe | Besonderheit |
|---|---|---|
| T-Rezept | Thalidomid, Lenalidomid, Pomalidomid | T-Register-Pflicht, Schwangerschaftsprävention |
| [[BTM-Rezept]] | Betäubungsmittel (Opioide, etc.) | Bundesopiumstelle, spezielle Formulare |
| Normales Rezept (Muster 16) | Alle verschreibungspflichtigen Arzneimittel | Standardrezept |
| [[E-Rezept]] | Alle verschreibungspflichtigen Arzneimittel | Digitale Form des Standardrezepts |

Das T-Rezept ersetzt auf der Verordnungsseite das bisherige analoge Muster-16-Formular für diese Wirkstoffe. Es ist kein BTM-Rezept, obwohl es ebenfalls besondere Verschreibungspflichten hat.

### Zusammenhang mit eML und eMP

Das E-T-Rezept wird in die [[eML]] (elektronische Medikationsliste) und den [[eMP]] (elektronischer Medikationsplan) integriert. Thalidomid-Klasse-Arzneimittel müssen im Medikationsplan des Patienten sichtbar sein, damit andere behandelnde Ärzte über die Einnahme informiert sind und Wechselwirkungen mit anderen verordneten Mitteln geprüft werden können ([[AMTS]]-Prüfung).

## Verknüpfungen

- [[E-Rezept]] (E-T-Rezept baut auf der E-Rezept-Infrastruktur auf)
- [[BTM-Rezept]] (anderes Sonderrezept mit ähnlich strengen Verschreibungsregeln)
- [[BfArM]] (Bundesopiumstelle des BfArM führt das T-Register)
- [[eML]] (elektronische Medikationsliste: T-Rezept-Arzneimittel müssen enthalten sein)
- [[eMP]] (elektronischer Medikationsplan: T-Rezept-Arzneimittel im Überblick)
- [[FHIR]] (technischer Standard für das E-T-Rezept-Profil)
- [[AMTS]] (Arzneimitteltherapiesicherheit: T-Rezept-Arzneimittel haben starkes Interaktionspotenzial)
- [[PVS]] (Primärsystem: muss das T-Rezept-FHIR-Profil implementieren)
- [[AVS]] (Apothekensystem: muss T-Rezept-Validierung implementieren)

## Quellen

- [BfArM: T-Register](https://www.bfarm.de/DE/Bundesopiumstelle/T-Register/_node.html)
- [BfArM: T-Register FAQ](https://www.bfarm.de/DE/Bundesopiumstelle/_FAQ/T-Register/_node.html)
- [Pharmazeutische Zeitung: gematik veröffentlicht T-Rezept-Spezifikation](https://www.pharmazeutische-zeitung.de/gematik-veroeffentlicht-t-rezept-spezifikation-158276/)
- [PTA IN LOVE: E-T-Rezept: Einführung für 2026 geplant](https://www.pta-in-love.de/e-t-rezept-einfuehrung-fuer-2026-geplant/)
