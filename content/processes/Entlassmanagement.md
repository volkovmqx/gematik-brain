---
title: Entlassmanagement
audience: [technical, non-technical]
tags: [processes, krankenhaus, entlassung, nachversorgung, kim]
aliases: [Krankenhaus-Entlassmanagement, stationäres Entlassmanagement, Überleitung, Entlassplanung]
relevance:
  sectors: [krankenhaus, arztpraxis, apotheke, pflege, therapie, hersteller, it-dienstleister, kasse]
  interests: [compliance, technik, business]
maturity: wachsend
---

# Entlassmanagement

**Entlassmanagement** ist der gesetzlich geregelte Prozess, mit dem Krankenhäuser sicherstellen, dass Patienten nach der stationären Behandlung lückenlos in die ambulante oder pflegerische Weiterversorgung übergehen (§ 39 Abs. 1a SGB V).

## Erklärt für Einsteiger

Wenn jemand aus dem Krankenhaus entlassen wird, ist die Behandlung oft noch nicht abgeschlossen: Man braucht vielleicht noch Physiotherapie, ein neues Medikament oder Unterstützung zu Hause. Damit nichts vergessen wird und keine Versorgungslücke entsteht, ist das Entlassmanagement verpflichtend. Das Krankenhaus muss vor der Entlassung klären: Was braucht dieser Patient danach? Und es muss die Verordnungen ausstellen und Folgetermine organisieren, bevor der Patient das Haus verlässt.

## Überblick

Das gesetzliche Entlassmanagement ist seit **Oktober 2017** für alle zugelassenen Krankenhäuser Pflicht. Die Rechtsgrundlage ist § 39 Abs. 1a SGB V, konkretisiert durch den **Rahmenvertrag Entlassmanagement** zwischen dem GKV-Spitzenverband, der Deutschen Krankenhausgesellschaft ([[DKG]]) und der Kassenärztlichen Bundesvereinigung ([[KBV]]).

Das Entlassmanagement umfasst folgende Kernpflichten des Krankenhauses:

- Strukturiertes Entlassungsassessment: Welcher Patient braucht was nach der Entlassung?
- Ausstellung von Verordnungen direkt aus dem Krankenhaus (Kurzzeitverordnungen)
- Übermittlung des Entlassbriefs an den weiterbehandelnden Arzt
- Organisation von Anschlussheilbehandlung, häuslicher Pflege oder Hilfsmitteln

Das Entlassmanagement ist eng mit den TI-Anwendungen verknüpft. Der Entlassbrief wird per [[KIM]] verschickt, Verordnungen laufen über das [[E-Rezept]] oder die [[eVO]].

> [!interesse-compliance]
> **Rechtsgrundlage**: § 39 Abs. 1a SGB V und Rahmenvertrag Entlassmanagement (zuletzt geändert 2024). Krankenhäuser müssen das Entlassmanagement für alle GKV-Versicherten durchführen. Für PKV-Patienten besteht keine gesetzliche Pflicht nach SGB V, aber vergleichbare Qualitätsanforderungen der DKG. Verstöße gegen das Entlassmanagement können zu Rückforderungen durch Krankenkassen führen. KIS-Systeme müssen das Entlassmanagement dokumentieren und die entsprechenden TI-Workflows unterstützen (KIM-Entlassbrief, E-Rezept, eVO).

## Technische Details

### Kurzzeitverordnungen bei der Entlassung

Ein zentrales Element des Entlassmanagements sind Kurzzeitverordnungen, die der Krankenhausarzt direkt ausstellen kann, um Versorgungslücken bis zum ersten ambulanten Termin zu überbrücken. Diese umfassen:

- **Arzneimittelverordnungen**: Bis zu 7 Tage Versorgung mit Arzneimitteln als [[E-Rezept]] (gesetzliche Pflicht ab 2024) oder Papierrezept (Muster 16)
- **[[Heilmittelverordnung|Heilmittelverordnungen]]**: Physiotherapie, Ergotherapie, Logopädie, für maximal 14 Tage nach Entlassung
- **[[eVO|Häusliche Krankenpflege (HKP)]]**: Häusliche Pflege als elektronische Verordnung
- **Hilfsmittelversorgung**: Rollstuhl, Gehhilfen, Stomamaterial

Seit der Integration des [[E-Rezept|E-Rezept-Pflicht]] im stationären Bereich sind Arzneimittelverordnungen beim Entlassmanagement in vielen Häusern auf E-Rezept umgestellt.

> [!praxis-tipp] Praxis-Tipp: Entlassrezept in der Praxis richtig einlösen
> Ihr Patient kommt mit einem Entlassrezept (Muster 16 mit rosa Streifen und Aufdruck "Entlassmanagement") aus dem Krankenhaus. Was Sie wissen müssen:
>
> - Das Entlassrezept ist nur **3 Werktage** gültig (inklusive Ausstellungstag, Montag bis Samstag).
> - Maximal 3 Arzneimittel pro Rezept. Das Krankenhaus darf nur 7 Tage Versorgung verordnen.
> - Sie müssen das Entlassrezept nicht neu ausstellen. Die Apotheke kann direkt beliefern.
> - Folgerezepte: Wenn der Patient länger Medikamente braucht, stellen Sie nach dem ersten Praxistermin ein reguläres Kassenrezept aus.
>
> Häufiger Fehler: Das Entlassrezept wird in der Apotheke abgelehnt, weil die 3-Tage-Frist abgelaufen ist. Weisen Sie Patienten bei der Entlassung darauf hin, sofort in die Apotheke zu gehen.

### Entlassbrief per KIM

Der Entlassbrief ist das wichtigste Kommunikationsmittel beim Entlassmanagement. Er enthält:

- Zusammenfassung der stationären Behandlung
- Entlassdiagnosen ([[ICD-10-GM]])
- Durchgeführte Eingriffe ([[OPS]])
- Aktuelle Medikation (inklusive Änderungen)
- Geplante Weiterbehandlung und offene Befunde
- Verordnungen für Nachsorge

Der Entlassbrief soll laut Rahmenvertrag **innerhalb von 24 Stunden** nach Entlassung an den nachbehandelnden Arzt übermittelt werden. Die empfohlene Übertragungsform ist [[KIM]], das sichere E-Mail-System der [[Telematikinfrastruktur]].

> [!frist-warnung] Frist-Warnung: 24-Stunden-Pflicht für den Entlassbrief
> **Rechtsgrundlage:** § 39 Abs. 1a Satz 9 SGB V i.V.m. Rahmenvertrag Entlassmanagement (GKV-Spitzenverband, DKG, KBV; 14. Änderungsvereinbarung ab 1. April 2026 in Kraft)
> **Frist:** Der Entlassbrief muss innerhalb von 24 Stunden nach Entlassung des Patienten an den weiterbehandelnden Arzt übermittelt werden.
> **Handlungsbedarf:** Krankenhäuser müssen sicherstellen, dass der KIM-Versand des Entlassbriefs im KIS automatisch durch die ADT^A03-Entlassungsnachricht ausgelöst wird. Die KIM-Adresse des nachbehandelnden Arztes muss vor Entlassung im VZD recherchiert und im KIS hinterlegt sein. Manueller Fax-Versand als Fallback ist technisch erlaubt, aber für den Rahmenvertragsnachweis gegenüber Krankenkassen nicht gleichwertig.
> **Bei Nichtbeachtung:** Krankenkassen können bei nachgewiesenen Verstößen Vergütungsabschläge geltend machen. Der MDK prüft im Rahmen von Abrechnungskontrollen die Einhaltung der Entlassmanagement-Dokumentationspflichten.

> [!praxis-tipp] Praxis-Tipp: Entlassbrief per KIM empfangen
> Krankenhäuser schicken Entlassbriefe zunehmend per KIM. In Ihrer Praxis bedeutet das:
>
> 1. KIM-Posteingang mindestens einmal täglich prüfen. Entlassbriefe kommen oft am Entlassungstag oder am Folgetag.
> 2. KIM-Adresse Ihrer Praxis im VZD (Verzeichnisdienst) korrekt eingetragen? Wenn nicht, landet der Brief per Fax oder gar nicht.
> 3. Entlassbrief im PVS importieren: Viele PVS öffnen KIM-Anhänge (PDF oder CDA) direkt in der Patientenakte. Prüfen Sie, ob Ihr PVS das unterstützt.
> 4. Medikationsänderungen aus dem Entlassbrief sofort in den Medikationsplan übernehmen. Krankenhäuser ändern häufig Dosierungen oder tauschen Präparate.
>
> Häufiger Fehler: KIM-Adresse ist veraltet oder nicht mehr aktiv. Ergebnis: Das Krankenhaus schickt den Brief ins Leere. Prüfen Sie Ihre KIM-Adresse beim KIM-Anbieter (Laufzeit und Aktivierung).

> [!interesse-technik]
> KIM-Entlassbrief: technisches Format ist standardmäßig ein [[CDA]] Level 2-Dokument (Arztbrief-CDA, verpflichtend für strukturierte Übertragung nach dem KBV-MIO Arztbrief). FHIR R4-basierte Entlassbriefe nach [[MIO]]-Spezifikation sind für neue Systeme möglich. KIS-seitig: ADT^A03-Nachricht ([[HL7-v2]]) triggert den KIM-Versand des Entlassbriefs. KIM-Adresse des aufnehmenden Arztes wird über den [[VZD]] aufgelöst. Bis zur vollständigen KIM-Einführung ist Fax als Fallback weiterhin erlaubt.

> [!dev-quickstart] Dev Quickstart: ISiK Encounter-Entlassung und ePA-Upload (FHIR R4)
> ISiK-Profil `ISiKKontaktGesundheitseinrichtung` (`Encounter` R4). Entlassung = `status: finished` + `hospitalization.dischargeDisposition`.
> ```bash
> # 1. Encounter bei Entlassung auf "finished" setzen (ISiK FHIR PATCH)
> curl -X PATCH "https://kis.krankenhaus.local/fhir/Encounter/enc-12345" \
>   -H "Authorization: Bearer <IDP-Token>" \
>   -H "Content-Type: application/json-patch+json" \
>   -d '[
>     { "op": "replace", "path": "/status", "value": "finished" },
>     { "op": "add", "path": "/hospitalization/dischargeDisposition", "value": {
>         "coding": [{
>           "system": "http://fhir.de/CodeSystem/entlassungsgrund",
>           "code": "01",
>           "display": "Behandlung regulär beendet"
>         }]
>     }}
>   ]'
>
> # 2. Entlassbriefe des heutigen Tages abfragen
> curl "https://kis.krankenhaus.local/fhir/Encounter?status=finished&date=2026-03-20" \
>   -H "Authorization: Bearer <IDP-Token>" \
>   -H "Accept: application/fhir+json"
>
> # 3. Entlassbrief als DocumentReference in ePA einstellen (ab April 2026 Pflicht)
> curl -X POST "https://epa-server.example.org/epa/api/v1/fhir/DocumentReference" \
>   -H "Authorization: Bearer <ePA-Token>" \
>   -H "Content-Type: application/fhir+json" \
>   -d '{
>     "resourceType": "DocumentReference",
>     "status": "current",
>     "type": { "coding": [{ "system": "http://dvmd.de/fhir/CodeSystem/kdl",
>                            "code": "AM010106", "display": "Entlassungsbrief" }] },
>     "subject": { "identifier": { "system": "http://fhir.de/sid/gkv/kvid-10",
>                                  "value": "A123456789" } },
>     "content": [{ "attachment": { "contentType": "application/pdf",
>                                   "data": "<Base64-PDF>" } }]
>   }'
> ```
> - ISiK Encounter-Profil: [simplifier.net/de.gematik.isik-basismodul](https://simplifier.net/packages/de.gematik.isik-basismodul)
> - Entlassungsgrund-CodeSystem: `http://fhir.de/CodeSystem/entlassungsgrund`
> - ePA-Dokumenttyp Entlassbrief: KDL-Code `AM010106`
> - Repo: [gematik/spec-ISiK-Basismodul](https://github.com/gematik/spec-ISiK-Basismodul)

### Workflow im KIS

Ein typischer Entlassmanagement-Workflow im [[KIS]]:

1. **Entlassungsplanung starten** (1-2 Tage vor Entlassung): Pflegedienst und Sozialarbeiter führen Entlassungsassessment durch. Ergebnis: Nachsorgepläne im KIS dokumentiert.
2. **Verordnungen erstellen**: Arzt erstellt E-Rezepte (Arzneimittel), eVO (Heilmittel, Häusliche Pflege) oder Hilfsmittelverordnungen direkt im KIS.
3. **Entlassbrief fertigstellen**: Arzt schließt den Entlassbrief im KIS ab, qualifiziert elektronisch signiert ([[QES]]) mit [[HBA]].
4. **KIM-Versand**: Das KIS schickt den Entlassbrief per KIM an den Hausarzt des Patienten. Die KIM-Adresse wird aus dem [[VZD]] oder der Patientenstammdaten ermittelt.
5. **ePA-Eintrag**: Sofern der Patient eingewilligt hat, wird der Entlassbrief in die [[ePA]] hochgeladen.
6. **Arzneiübergabe**: Entlassungsmedikamente werden dem Patienten mit ausgehändigtem E-Rezept-Token (QR-Code) oder direkt über die Krankenhausapotheke mitgegeben.

> [!klinik-integration] Klinik-Integration: Entlassmanagement-Workflow im KIS absichern
> **ADT^A03-Trigger:** Der KIM-Versand des Entlassbriefs sollte automatisch durch die ADT^A03-Entlassungsnachricht ausgelöst werden. In SAP IS-H und Dedalus ORBIS ist dies konfigurierbar, aber nicht überall der Default. Manueller Versand riskiert Überschreitung der 24-Stunden-Frist (Rahmenvertrag Entlassmanagement).
>
> **HBA-Verfügbarkeit sicherstellen:** Jeder signierende Arzt benötigt seinen HBA am Kartenterminal. An Wochenenden und im Schichtbetrieb entstehen häufig Engpässe. Prüfen Sie, ob Ihr KIS eine Delegation der QES-Signatur auf diensthabende Ärzte unterstützt, und klären Sie die rechtliche Zulässigkeit für Ihren Dokumententyp mit dem Rechtsberater.
>
> **KIM-Adressauflösung via VZD:** Die KIM-Adresse des weiterbehandelnden Arztes wird aus dem VZD bezogen. Fehlende oder veraltete LANR/BSNR in den KIS-Patientenstammdaten sind der häufigste Grund für KIM-Versandfehler. Monitoring des KIM-Versandstatus im KIS empfohlen: Fax-Fallback ist weiterhin erlaubt, aber nicht dokumentationsfest für den Nachweis gegenüber Krankenkassen.

> [!interesse-business]
> Entlassmanagement-Lösungen im KIS sind Pflichtkomponenten und oft Teil größerer KIS-Upgrade-Projekte. Differenzierungspotenzial liegt bei: automatisierter Nachsorgeplanung (KI-gestützte Risikoerkennung), integrierten Hilfsmittel-Beauftragungssystemen, direkter eVO-Anbindung, und KIM-Versand-Monitoring. Pflege und REHA-Überleitungen sind häufig manuell und technisch unterentwickelt, hier liegt Optimierungspotenzial.

### Anschlussheilbehandlung und Rehabilitation

Das Entlassmanagement umfasst auch die Einleitung von Anschlussheilbehandlung (AHB) oder medizinischer Rehabilitation. Dafür sind spezifische Antragsverfahren gegenüber der [[GKV]] oder Rentenversicherung erforderlich. Das KIS muss entsprechende Formulare und Übermittlungswege bereitstellen.

### Entlassmanagement und ePA

Ab dem **1. April 2026** müssen Krankenhäuser Entlassbriefe und Entlassungsmedikationen in die [[ePA]] des Patienten einstellen, sofern der Patient eingewilligt hat. Diese Pflicht ergibt sich aus § 341 Abs. 3 SGB V (ePA-Befüllungspflicht für Leistungserbringer). Das KIS muss dafür ePA-API-fähig sein und das [[ISiK]]-Profil für Entlassbriefe implementieren.

> [!frist-warnung] Frist-Warnung: ePA-Befüllungspflicht für Krankenhäuser ab 1. April 2026
> **Rechtsgrundlage:** §§ 347 Abs. 2, 348 Abs. 3 SGB V (ePA-Befüllungspflicht für Krankenhäuser, eingeführt durch das Digital-Gesetz, BGBl. 2023 I Nr. 400)
> **Frist:** Ab 1. April 2026 müssen Krankenhäuser Entlassbriefe und Entlassungsmedikationen elektronisch in die ePA des Patienten einstellen (soweit der Patient nicht widersprochen hat). Bei Nichterfüllung wird der TI-Zuschlag nach § 377 Abs. 3 SGB V ab diesem Datum gekürzt.
> **Handlungsbedarf:** Prüfen Sie unmittelbar: (1) Unterstützt das eingesetzte KIS die ePA-API der gematik? (2) Ist ISiK-Stufe 3 für den Entlassbrief implementiert? (3) Ist das Einwilligungs- und Widerspruchsmanagement (Opt-out-Abfrage vor jedem Dokument-Upload) technisch umgesetzt? Koordinieren Sie mit dem KIS-Hersteller das konkrete Releasedatum für die ePA-Konnektivität.
> **Bei Nichtbeachtung:** Kürzung des TI-Zuschlags nach § 377 Abs. 3 SGB V. Dieser Zuschlag wird pro Quartal und Krankenhaus berechnet; die Kürzung kann erhebliche finanzielle Auswirkungen haben.

> [!klinik-integration] Klinik-Integration: ePA-Befüllungspflicht ab April 2026
> **Pflicht ab 1. April 2026:** Entlassbrief und Entlassungsmedikation müssen in die ePA des Patienten eingestellt werden (§ 341 Abs. 3 SGB V). Voraussetzung: Das KIS muss ISiK-Stufe 3 konform sein und die ePA-API der gematik implementiert haben. Prüfen Sie beim KIS-Hersteller (SAP, Dedalus, Agfa), welches Releasedatum für ePA-Konnektivität geplant ist.
>
> **FHIR-Dokumentenprofil:** Entlassbriefe werden als FHIR-native Composition-Ressource oder als CDA-Dokument in die ePA geschrieben. Das ISiK-FHIR-Profil für den Entlassbrief definiert die Mindestanforderungen. Medikationsliste aus dem Entlassbrief sollte als separates MedicationStatement-Bundle übertragen werden, damit es im ePA-Medikationsplan erscheint.
>
> **Einwilligungsmanagement:** Patienten, die der ePA-Befüllung widersprochen haben (Opt-out), dürfen keine Dokumente erhalten. Das KIS muss den ePA-Widerspruchsstatus des Patienten abfragen und dokumentieren. Dieser Status kann sich täglich ändern: kein statisches Caching.

## Verknüpfungen

- [[E-Rezept]] (Arzneimittelverordnungen bei Entlassung per E-Rezept seit 2024 weitgehend verpflichtend)
- [[eVO]] (elektronische Verordnung für Heil- und Hilfsmittel bei Entlassung)
- [[Heilmittelverordnung]] (Physio-, Ergo- und Logopädie als Kurzzeitverordnung bei Entlassung)
- [[KIM]] (sicherer Versand des Entlassbriefs an den nachbehandelnden Arzt)
- [[ePA]] (Entlassbriefe und Medikationspläne werden seit April 2026 in der ePA dokumentiert)
- [[KIS]] (technisches System, das den Entlassmanagement-Workflow abbildet)
- [[CDA]] (strukturiertes Dokumentenformat für den elektronischen Entlassbrief)
- [[HL7-v2]] (ADT^A03-Entlassungsnachricht triggert Folge-Workflows im KIS)
- [[VZD]] (Verzeichnisdienst zur Auflösung der KIM-Adresse des nachbehandelnden Arztes)
- [[HBA]] (Heilberufsausweis für die QES-Signatur des Entlassbriefs)
- [[DKG]] (Deutsche Krankenhausgesellschaft; Vertragspartner im Rahmenvertrag Entlassmanagement)
- [[KBV]] (Kassenärztliche Bundesvereinigung; Vertragspartner im Rahmenvertrag Entlassmanagement)

## Quellen

- [GKV-Spitzenverband: Rahmenvertrag Entlassmanagement (§ 39 Abs. 1a SGB V)](https://www.gkv-spitzenverband.de/krankenversicherung/krankenhaeuser/entlassmanagement/entlassmanagement.jsp)
- [Bundesgesundheitsministerium: Entlassmanagement](https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/online-ratgeber-krankenversicherung/krankenhausbehandlung/entlassmanagement.html)
- [Wikipedia: Entlassmanagement (Krankenhaus)](https://de.wikipedia.org/wiki/Entlassmanagement)
- [KBV: Verordnungen beim Entlassmanagement](https://www.kbv.de/html/1150_28817.php)
