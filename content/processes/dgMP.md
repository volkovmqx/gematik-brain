---
title: dgMP - Digital gestützter Medikationsprozess
audience: [technical, non-technical]
tags: [prozesse, medikation, epa, e-rezept, medikationsplan]
aliases: [dgMP, digital gestützter Medikationsprozess, digitaler Medikationsprozess]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, zahnarzt, psychotherapie, pflege, patient, kasse, hersteller]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# dgMP - Digital gestützter Medikationsprozess

Der **digital gestützte Medikationsprozess (dgMP)** ist das übergeordnete Konzept für die digitale Abbildung aller Schritte von der Verordnung bis zur Abgabe von Arzneimitteln in der deutschen Telematikinfrastruktur. Er umfasst die [[eML|elektronische Medikationsliste (eML)]] und den [[eMP|elektronischen Medikationsplan (eMP)]].

## Erklärt für Einsteiger

Wenn du ein Rezept bekommst, eine Pille schluckst oder eine Apotheke dir ein Medikament gibt, läuft im Hintergrund ein Prozess ab. Früher war dieser Prozess auf Papier verstreut: Rezepte, Durchschläge, Kassenzettel. Der dgMP bringt das alles digital zusammen. Alle Schritte, von der ärztlichen Verordnung über die Abgabe in der Apotheke bis zur Prüfung auf gefährliche Wechselwirkungen, werden in der elektronischen Patientenakte festgehalten. So sieht jeder Beteiligte, was du nimmst, und nichts geht verloren.

## Überblick

Der dgMP startete im **März 2026** in seiner ersten Produktivstufe. Grundlage sind die technischen Spezifikationen der [[ePA]] 3.1.x und des [[E-Rezept]]-Fachdienstes. Der dgMP ist kein einzelnes Produkt, sondern ein Prozessrahmen, der mehrere Dienste und Datenflüsse koordiniert.

### Zwei Kernkomponenten

Der dgMP besteht aus zwei klar voneinander getrennten Instrumenten:

**[[eML|Elektronische Medikationsliste (eML)]]**: Eine automatisch geführte, chronologische Aufstellung aller verordneten und abgegebenen Medikamente. Sie wird ohne manuellen Aufwand aus den E-Rezept-Dispensierdaten befüllt. Sie zeigt alle Medikamente, die ein Patient je auf Rezept bekommen und eingelöst hat.

**[[eMP|Elektronischer Medikationsplan (eMP)]]**: Ein strukturiertes, arztgeführtes Dokument mit der aktuellen Dauermedikation, expliziten Dosierungsangaben und klinischen Hinweisen. Ärzte müssen den eMP aktiv pflegen. Er enthält auch Selbstmedikation und ergänzende Informationen, die nicht aus E-Rezepten kommen.

### Rollout-Zeitplan

| Phase | Datum | Inhalt |
|---|---|---|
| Stufe 1 (produktiv) | März 2026 | eML mit automatischen E-Rezept-Daten; manuelles Nachtragen für Ärzte; Korrektur/Löschen von Einträgen |
| Pilotphase eMP | Juli 2026 | eMP in ausgewählten Modellregionen |
| Bundesweiter eMP-Rollout | Oktober 2026 | eMP und Apotheken-Schreibzugriff für OTC-Medikamente |

> [!frist-warnung] Frist-Warnung: dgMP-Pflichten für PVS und AVS
> **Rechtsgrundlage:** §§ 342, 355 und 360 SGB V (Digital-Gesetz, BGBl. I 2023 Nr. 37)
> **Fristen:** PVS-Systeme sind seit **März 2026** verpflichtet, die eML anzuzeigen und zu befüllen (§ 360 SGB V). Ab **1. Oktober 2026** sind Apotheken (AVS) verpflichtet, OTC-Medikamente (rezeptfreie Arzneimittel) in den Medikationsdienst einzutragen (§ 355 SGB V).
> **Handlungsbedarf:** Stellen Sie sicher, dass Ihr PVS die dgMP-Stufe-1-Funktionen unterstützt (Anzeige eML, manuelles Nachtragen). Apotheken müssen ihr AVS bis Oktober 2026 auf OTC-Schreibzugriff vorbereiten. Prüfen Sie den Update-Stand des ePA-Moduls bei Ihrem Softwarehersteller.
> **Bei Nichtbeachtung:** Praxen mit nicht konformen PVS riskieren Honorarabschläge. Ohne gültige ePA-Anbindung entfällt die TI-Pauschale anteilig.

> [!praxis-tipp] Praxis-Tipp: Jetzt handeln, bevor der eMP kommt
> Der eMP-Rollout startet bundesweit im Oktober 2026. Bis dahin sollten Sie:
> 1. PVS-Update prüfen: Fragen Sie Ihren Anbieter, ob die dgMP-Funktionen (eML-Anzeige, manuelles Nachtragen) in Ihrer Version enthalten sind.
> 2. SMC-B und HBA prüfen: Beide Karten müssen gültig sein, um auf den Medikationsdienst zuzugreifen.
> 3. Team einweisen: Wer in der Praxis trägt fehlende Medikamente nach? Wer löscht Fehlereinträge?
> 4. Pilotphase beobachten (ab Juli 2026): Wenn Ihre KV Ihre Praxis für die Pilotregion anfrägt, melden Sie sich an.
>
> Zeitaufwand für Ersteinrichtung: ca. 1-2 Stunden (PVS-Konfiguration + Teameinweisung). Laufender Aufwand: gering, da eML automatisch befüllt wird.

> [!interesse-compliance]
> Der dgMP ist seit **März 2026** verpflichtend für Primärsysteme, die ePA unterstützen. PVS-Systeme (§ 360 SGB V) müssen die eML anzeigen und befüllen können. Ab **Oktober 2026** sind Apotheken (AVS) verpflichtet, OTC-Medikamente in den Medikationsdienst einzutragen. Praxen, die kein konformes PVS haben, riskieren Abrechnungsabschläge.

> [!patientenrecht] Patientenrecht: Dem digitalen Medikationsprozess widersprechen
> Seit März 2026 werden Ihre Rezeptdaten automatisch in Ihrer Patientenakte gespeichert. Das ist der digitale Medikationsprozess (dgMP).
>
> **Sie möchten das nicht?** Sie können dem dgMP als Anwendungsfall widersprechen. Dann fließen Ihre E-Rezept-Daten zwar weiterhin in die Liste. Aber Ärzte und Apotheken können die Liste nicht mehr sehen. Nur Sie selbst sehen sie noch.
>
> So legen Sie Widerspruch ein:
> 1. Öffnen Sie die App Ihrer Krankenkasse.
> 2. Gehen Sie in die Einstellungen der Patientenakte.
> 3. Suchen Sie den Punkt "Medikationsprozess" oder "Medikationsliste".
> 4. Wählen Sie "Widersprechen" oder "Verbergen".
> 5. Alternativ: Rufen Sie die Ombudsstelle Ihrer Krankenkasse an.
>
> **Ihr Widerspruch gilt sofort** und kann jederzeit wieder aufgehoben werden.

### Warum dgMP?

> [!praxis-tipp] Praxis-Tipp: eML als AMTS-Werkzeug nutzen
> In Ihrer Praxis bedeutet das: Sie können jetzt beim Patientengespräch die eML im PVS aufrufen und sehen, welche Medikamente der Patient in anderen Praxen verordnet bekommen hat.
>
> Konkret hilfreich bei: Patienten mit mehreren Fachärzten, Patienten nach Krankenhausaufenthalt, Patienten, die ihren Medikationsplan nicht dabei haben.
>
> Häufiger Fehler: Die eML zeigt nur E-Rezept-Einträge. Privatrezepte, BtM ohne digitale Erfassung und Selbstmedikation fehlen. Fragen Sie Patienten weiterhin aktiv nach diesen Medikamenten.

Vor dem dgMP war die Medikationssituation eines Patienten für Leistungserbringer schwer einzusehen. Ohne Kenntnis der Gesamtmedikation steigt das Risiko gefährlicher Wechselwirkungen. Laut Studien sterben in Deutschland jährlich mehrere tausend Menschen an vermeidbaren [[AMTS|Arzneimitteltherapiesicherheits-]]-Problemen.

Der dgMP soll:

1. Alle Medikamentendaten an einem Ort verfügbar machen (eML)
2. Vollständige, klinisch aufbereitete Übersichten ermöglichen (eMP)
3. [[AMTS]]-Prüfungen auf vollständiger Datenbasis ermöglichen
4. Apotheken in die Medikationsführung einbeziehen

## Technische Details

### Architektur

Der dgMP nutzt den ePA-Medikationsdienst als zentrale Datenhaltung. Der Datenfluss:

```
E-Rezept (PVS) → E-Rezept-Fachdienst → Medikationsdienst (ePA)
                                              ↑
Dispensierung (AVS) ────────────────────────→ |
                                              ↑
Manuelles Nachtragen (PVS/AVS) ─────────────→ |
```

Der Medikationsdienst ist Teil der ePA-Infrastruktur und wird über dieselbe TI-Verbindung ([[Konnektoren]] oder [[TI-Gateway]]) angesprochen.

### Zugriff und Berechtigungen

Für den Zugriff auf den Medikationsdienst gelten dieselben Zugriffsregeln wie für die ePA:

- Der Versicherte muss die Einrichtung zur ePA freigeschalten haben.
- Leistungserbringer authentisieren sich über [[SMC-B]] und [[HBA]].
- Versicherte können über die ePA-App ihrer Krankenkasse jederzeit Einträge einsehen und Zugriffe kontrollieren.

> [!patientenrecht] Patientenrecht: Zugriffe auf Ihre Medikationsdaten kontrollieren
> Sie bestimmen, wer Ihre Medikationsliste sehen darf.
>
> **Was Sie tun können:**
> - Einer bestimmten Arztpraxis oder Apotheke den Zugriff entziehen: Gehen Sie in die App Ihrer Krankenkasse und verwalten Sie die Zugriffe dort.
> - Alle Zugriffe einsehen: In der App sehen Sie, wer wann auf Ihre Daten zugegriffen hat.
> - Die gesamte Medikationsliste verbergen: Dann sehen nur Sie die Einträge, keine Ärztin und kein Apotheker.
>
> **Ihre Krankenkasse** hat keinen Zugriff auf den Inhalt Ihrer Medikationsliste. Abrechnungsdaten, die Ihre Kasse einträgt, sind nur für Sie sichtbar.

> [!interesse-technik]
> **Spezifikation**: ePA 3.1.3-1 (26. Januar 2026), Abschnitt Medikationsdienst. Dokument-Set: [gemspec.gematik.de/releases/ePA_3_1_3-1/](https://gemspec.gematik.de/releases/ePA_3_1_3-1/).
> **FHIR-Profile**: IG ePA Medication Service auf Simplifier.net. Ressourcen: MedicationRequest, MedicationDispense, List.
> **API**: REST-API über ePA-Aktensystem. Authentisierung via OAuth 2.0 + mTLS.
> **GitHub PoC**: [github.com/gematik/epa-poc-collection](https://github.com/gematik/epa-poc-collection)

> [!dev-quickstart] Dev Quickstart: Dispensierung in Medikationsdienst schreiben (AVS)
> ```bash
> # MedicationDispense an Medikationsdienst übergeben (FHIR Parameters-Bundle)
> POST /epa/medication/api/v1/fhir/$provide-dispensation
> Authorization: Bearer <VAU-verschlüsseltes-IDP-Token>
> x-insurantid: X123456789
> Content-Type: application/fhir+json
>
> {
>   "resourceType": "Parameters",
>   "parameter": [
>     {
>       "name": "MedicationDispense",
>       "resource": { "resourceType": "MedicationDispense", ... }
>     },
>     {
>       "name": "Medication",
>       "resource": { "resourceType": "Medication", ... }
>     }
>   ]
> }
> ```
> - Profil: `de.gematik.epa.medication` v1.4+ (Medication separat, nicht mehr contained in MedicationDispense)
> - Auth: SMC-B (Apotheken-Institution) + VAU-Kanal; Token vom IDP via Client-Credentials-Flow
> - E-Rezept-Kontext: Dispensierdaten kommen aus dem E-Rezept-Fachdienst, werden automatisch weitergeleitet
>
> GitHub: [gematik/ePA-Medication](https://github.com/gematik/ePA-Medication) | Spec: [gemSpec ePA 3.1.3-1](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
> IG: [ePA Medication Service v1.1.5 (gemspec)](https://gemspec.gematik.de/ig/fhir/epa-medication/1.1.5/op-get-medication-list.html)

### Schnittstellen

Das dgMP-Ökosystem verbindet mehrere Systeme:

- **PVS** (Praxisverwaltungssystem): Erstellt E-Rezepte, trägt Medikamente nach, ruft eML/eMP ab
- **AVS** (Apothekenverwaltungssystem): Schreibt Dispensierungen, ab Oktober 2026 auch OTC
- **KIS** (Krankenhausinformationssystem): Trägt stationäre Medikation nach
- **ePA-App**: Zeigt dem Versicherten seine Medikationsliste und -plan

> [!klinik-integration] Klinik-Integration: dgMP im Krankenhaus-Kontext
> Das KIS ist im dgMP-Ökosystem für die stationäre Medikation verantwortlich. Ambulante Daten (E-Rezept-Dispensierungen) kommen automatisch; was im Krankenhaus verordnet und verabreicht wird, muss das KIS aktiv eintragen.
>
> **Workflow-Bezug:**
> - **Aufnahme:** KIS liest die eML des Patienten aus und stellt die Vormedikation dem Stationsarzt bereit. AMTS-Prüfung auf Basis der vorhandenen eML-Daten möglich.
> - **Station:** Stationäre Verordnungen, die nicht über das E-Rezept laufen, werden über das KIS-ePA-Modul manuell nachgetragen (`MedicationRequest` bzw. `MedicationStatement`).
> - **Entlassung:** Das KIS erstellt den Entlassbrief mit Medikationsangaben; die eML sollte zu diesem Zeitpunkt vollständig und aktuell sein, damit weiterbehandelnde Praxen sofort auf aktuelle Daten zugreifen können.
>
> **KIS-Anforderungen:** KIS-ePA-Modul (verfügbar ab April 2026), ISiK-Stufe-3-Zertifizierung (Pflicht bis 30. Juni 2026, Modul Medikation mit `MedicationRequest`/`MedicationStatement`-Profilen). Klären Sie mit Ihrem KIS-Hersteller, welches Modul für den ePA-Medikationsdienst-Schreibzugriff erforderlich ist und wann es verfügbar ist.
>
> **AMTS-Potenzial:** Die eML ermöglicht erstmals eine übergreifende Medikationsübersicht für stationäre AMTS-Software. Prüfen Sie, ob Ihr KIS-Hersteller eine Integration seines AMTS-Moduls (z. B. Dosing-Integration bei Dedalus ORBIS) mit der eML plant.

## Verknüpfungen

- [[eML]] (elektronische Medikationsliste: automatische Komponente des dgMP)
- [[eMP]] (elektronischer Medikationsplan: kuratierte Komponente des dgMP)
- [[ePA]] (Infrastruktur, in der der Medikationsdienst betrieben wird)
- [[E-Rezept]] (liefert die Verordnungs- und Dispensierdaten für die eML)
- [[AMTS]] (Arzneimitteltherapiesicherheit: Nutzen des dgMP)
- [[PVS]] (Primärsystem, das den dgMP auf Arztseite bedient)
- [[AVS]] (Apothekensystem, das Dispensierungen einträgt)
- [[KIS]] (Krankenhaus-Primärsystem für stationäre Medikation)
- [[gematik]] (Betreiber des E-Rezept-Fachdienstes und ePA)
- [[FHIR]] (Datenformat aller dgMP-Ressourcen)

## Quellen

- [gematik: Gesellschafter beschließen Funktionserweiterung der ePA für alle, inkl. dgMP und eMP (10. September 2025)](https://www.gematik.de/newsroom/news-detail/gesellschafter-beschliessen-funktionserweiterung-der-epa-fuer-alle)
- [gematik: Überblick neue ePA-Funktionen (ePA 3.0.5, Juli 2025)](https://www.gematik.de/newsroom/news-detail/aktuelles-ueberblick-das-sind-die-neuen-funktionen-der-epa-fuer-alle)
- [gematik Fachportal: ePA für alle](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [gematik gemspec: ePA 3.1.3-1 Spezifikationsrelease](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
- [Ärztezeitung: Welche neuen ePA-Funktionen 2026 kommen sollen](https://www.aerztezeitung.de/Wirtschaft/Welche-neuen-ePA-Funktionen-2026-kommen-sollen-460768.html)
