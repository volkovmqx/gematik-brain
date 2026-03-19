---
title: BTM-Rezept
audience: [technical, non-technical]
tags: [prozesse, betäubungsmittel, rezept, verordnung, e-rezept]
aliases: [E-BtM-Rezept, eBtM, Betäubungsmittelrezept, elektronisches Betäubungsmittelrezept, BtMVV]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, regulierung, hersteller]
  interests: [compliance, technik]
maturity: setzling
---

# BTM-Rezept

Das **BTM-Rezept** (Betäubungsmittelrezept, auch E-BtM-Rezept) ist die spezielle Verordnungsform für Betäubungsmittel nach der Betäubungsmittel-Verschreibungsverordnung (BtMVV). Die Digitalisierung als elektronisches Betäubungsmittelrezept über die [[Telematikinfrastruktur]] ist für 2027 geplant.

## Erklärt für Einsteiger

Für bestimmte starke Schmerzmittel (wie Morphin oder Oxycodon) und andere Betäubungsmittel braucht ein Arzt ein besonderes Rezept: das gelbe BTM-Rezept. Es gibt strenge Regeln, wie dieses Rezept aussehen muss und wie es aufbewahrt wird. Heute ist das noch ein Papierformular, ähnlich wie früher alle Rezepte Papier waren. In ein paar Jahren soll auch das BTM-Rezept digital werden, also elektronisch über das Gesundheitsnetz übermittelt werden.

## Überblick

Betäubungsmittel (BTM) unterliegen in Deutschland dem Betäubungsmittelgesetz (BtMG) und der Betäubungsmittel-Verschreibungsverordnung (BtMVV). Die besonderen Anforderungen an Betäubungsmittelrezepte dienen der Missbrauchsprävention und der Nachverfolgbarkeit.

Das herkömmliche papierbasierte BTM-Rezept (Bundeseinheitliches Betäubungsmittelrezept) ist ein dreiteiliges Durchschlagsformular in Gelb. Es enthält Sicherheitsmerkmale und wird in nummerierten Blöcken vom [[BfArM]] ausgegeben. Der Arzt muss es von Hand unterschreiben, der Verbleib wird dokumentiert.

> [!praxis-tipp] Praxis-Tipp: BTM-Rezeptblöcke rechtzeitig nachbestellen
> Das Papier-BTM-Rezept bleibt mindestens bis Ende 2027 Pflicht. Stellen Sie sicher, dass Ihre Praxis ausreichend Blöcke vorrätig hat.
>
> So bestellen Sie nach:
> 1. Nutzen Sie die **Folge-Anforderungskarte** aus dem letzten Block. Ankreuzen, eigenhändig unterschreiben, frankiert zurückschicken.
> 2. Erstbestellung: Formular auf bfarm.de unter "Betäubungsmittel > Formulare" herunterladen, oder telefonisch: +49 228 99 307-4321 (Mo–Fr, 9–12 Uhr).
> 3. Gültigkeitsfrist beachten: Ein BTM-Rezept darf nur **7 Tage** nach Ausstellung in der Apotheke eingelöst werden.
>
> Häufiger Fehler: Rezeptblöcke gehen zur Neige ohne Reservebestellung. Bestellen Sie nach, sobald Sie den letzten Block beginnen.

### Warum ein eigenes Verfahren?

Das [[E-Rezept]]-System deckt seit Januar 2024 reguläre verschreibungspflichtige Arzneimittel ab. Das BTM-Rezept ist jedoch aus dem E-Rezept-Regelbetrieb zunächst ausgenommen, weil:

- Die BtMVV besondere Formvorschriften stellt (Unterschrift, Durchschläge, Nummerierung)
- Eine elektronische Lösung die bestehenden Nachverfolgbarkeitsanforderungen sicher erfüllen muss
- Technische und rechtliche Anforderungen (u.a. [[QES|qualifizierte elektronische Signatur]]) zusätzlich abgesichert werden müssen

> [!interesse-compliance]
> Das papierbasierte BTM-Rezept ist weiterhin gültig und Pflichtform bis zur Einführung des E-BtM-Rezepts. Ärzte erhalten BTM-Rezeptblöcke vom [[BfArM]] über die Bundesopiumstelle (BOPST). Die Einführung des E-BtM-Rezepts erfordert eine Änderung der BtMVV. Diese Änderung ist Teil der Planungen für 2026/2027, aber noch nicht abgeschlossen.
> [!klinik-integration] Klinik-Integration: Betäubungsmittel im stationären Betrieb
> **Stationäre Besonderheit:** Im Krankenhaus werden Betäubungsmittel nicht über das BTM-Rezept (Patientenrezept), sondern über den **BTM-Anforderungsschein** (§ 4 Abs. 3 BtMVV) bezogen. Die Stationsapotheke bestellt BTM beim Großhandel oder der krankenhausversorgenden Apotheke. Das BTM-Rezept kommt im Krankenhaus vor allem bei der Entlassung zum Einsatz: Patienten erhalten es für die ambulante Weiterversorgung.
>
> **Dokumentation im KIS:** Das KIS muss die lückenlose Dokumentation von BTM-Verordnungen, Abgaben und Verbleibnachweisen gewährleisten. Prüfen Sie, ob Ihr KIS-Apothekenmodul die BtMVV-konforme Buchführung (§ 13 BtMG) unterstützt und ob das Modul in den Medikationsprozess auf Station integriert ist.
>
> **Entlassmanagement:** Bei der Entlassung schmerzkranker Patienten ist ein BTM-Rezept auf Papier auszustellen. Stellen Sie im KIS-Entlassworkflow sicher, dass BTM-Verordnungen für die ambulante Anschlussversorgung geprüft werden und der behandelnde Arzt mit BTM-Verschreibungserlaubnis eingebunden ist.


### Zeitplan (Stand März 2026)

Die gematik hat einen Feature-Draft **eBtM_25_1** als Vorabveröffentlichung bereitgestellt:

- **Spezifikationsphase**: Läuft 2026. Der Draft dient als Grundlage für Kommentare und Abstimmungen.
- **Pilotprojekt**: Frühestens im **Q4 2026** geplant.
- **Verpflichtende Einführung**: Für **2027** erwartet.

Ein konkreter Starttermin hängt von der Änderung der BtMVV und der Zulassung entsprechender Primärsystemfunktionen ab.

> [!frist-warnung] Frist-Warnung: Laufende Pflichten nach BtMVV (Papierverfahren)
> **Rechtsgrundlage:** § 13 BtMG i.V.m. §§ 2–9 BtMVV (Betäubungsmittel-Verschreibungsverordnung in der Fassung vom 20. Januar 1998, zuletzt geändert 2024)
> **Aktuelle Pflichten bis zur E-BtM-Einführung:**
> - Jedes Betäubungsmittelrezept muss auf dem dreiteiligen Bundeseinheitlichen Betäubungsmittelrezept (Formblatt 4a) in Gelb ausgestellt und eigenhändig unterschrieben werden.
> - Die Apotheke darf das Rezept nur innerhalb von **7 Tagen** nach Ausstellung einlösen (§ 8 Abs. 1 BtMVV).
> - Rezeptblöcke werden ausschließlich über die Bundesopiumstelle ([[BfArM]]) bezogen. Eigenbedarfsvorrat je Arzt: max. 3 BTM-Rezeptblöcke.
> - Rezeptkopien müssen **3 Jahre** ab Ausstellungsdatum aufbewahrt werden (§ 8 Abs. 5 BtMVV).
> **Handlungsbedarf:** Die verantwortliche Stelle muss sicherstellen, dass ausreichend nummerierte Rezeptblöcke vorrätig sind, die Aufbewahrungsfristen eingehalten werden und keine BTM über das E-Rezept-System (Muster 16) verordnet werden.
> **Bei Nichtbeachtung:** Verstöße gegen die BtMVV sind Ordnungswidrigkeiten nach § 33 BtMG und können mit Bußgeld bis zu 25.000 Euro geahndet werden. Bei schwerwiegenden Verstößen droht der Entzug der BTM-Verschreibungsberechtigung.

## Technische Details

### Geplante technische Umsetzung

Das E-BtM-Rezept wird voraussichtlich als Erweiterung des bestehenden [[E-Rezept]]-Systems konzipiert. Die technischen Grundlagen:

- **FHIR-Profil**: Eigenes KBV-[[FHIR]]-Profil für Betäubungsmittelverordnungen, analog zu den bestehenden E-Rezept-Profilen (KBV_PR_ERP_Prescription)
- **[[QES]]**: Betäubungsmittelrezepte erfordern eine qualifizierte elektronische Signatur des Arztes. Dies entspricht der bestehenden Unterschriftspflicht auf dem Papierrezept.
- **Transport**: Über den E-Rezept-[[Fachdienst]] der [[gematik]], analog zu regulären E-Rezepten
- **Sonderregeln**: Für BTM gelten zusätzliche Prüfregeln: Mengenbegrenzungen, Wiederholungsverbote, Ausstellerdaten müssen vollständig sein

### Abgrenzung zu anderen Sonderrezepten

Neben dem BTM-Rezept gibt es weitere Sonderrezeptformen, die schrittweise digitalisiert werden:

| Rezepttyp | Besonderheit | Status Digitalisierung |
|---|---|---|
| BTM-Rezept (gelb) | Betäubungsmittel nach BtMVV | Pilot Q4/2026 geplant |
| T-Rezept (blau) | Thalidomid, Lenalidomid, Pomalidomid | Spezifikation 2025, Einführung 2026 |
| [[E-Rezept]] (Muster 16) | Reguläre Rx-Arzneimittel | Pflicht seit Januar 2024 |

Das T-Rezept (Thalidomid-Rezept) hat die Digitalisierung bereits weiter vorangetrieben: Die gematik veröffentlichte im August 2025 die finale Spezifikation für das elektronische T-Rezept.

> [!dev-quickstart] Dev Quickstart: E-Rezept-Fachdienst — Task erstellen (Basis für E-BtM)
> Das E-BtM-Rezept wird als Erweiterung des E-Rezept-Fachdienstes implementiert. Aktuell produktiv für Muster-16:
> ```bash
> # Schritt 1: Task anlegen (FlowType 160 = regulär, BTM wird eigener FlowType)
> POST https://erp.zentral.erp.splitdns.ti-dienste.de/Task/$create
> Authorization: Bearer <IDP-Access-Token>
> Content-Type: application/fhir+json
>
> {
>   "resourceType": "Parameters",
>   "parameter": [{
>     "name": "workflowType",
>     "valueCoding": {
>       "system": "https://gematik.de/fhir/erp/CodeSystem/GEM_ERP_CS_FlowType",
>       "code": "160"
>     }
>   }]
> }
> ```
> Antwort: `Task` mit `PrescriptionID` und `AccessCode` (HTTP 201).
> - Schritt 2: KBV-Bundle mit `KBV_PR_ERP_Prescription`-Profil signieren (QES via HBA) und per `$activate` übermitteln
> - FHIR-Profile: [simplifier.net/erezept](https://simplifier.net/erezept) | [simplifier.net/erezept-workflow](https://simplifier.net/erezept-workflow)
> - API-Doku: [github.com/gematik/api-erp](https://github.com/gematik/api-erp) | Beispiele: [gematik/eRezept-Examples](https://github.com/gematik/eRezept-Examples)

### Auswirkungen auf Primärsysteme

> [!praxis-tipp] Praxis-Tipp: Auf das E-BtM-Rezept vorbereiten
> Das elektronische BTM-Rezept kommt frühestens als Pilot im **Q4 2026**, verpflichtend voraussichtlich **2027**. Jetzt schon handeln:
>
> 1. Fragen Sie Ihren PVS-Anbieter, ob ein Update für das E-BtM-Rezept geplant ist und wann.
> 2. Ihr HBA (Heilberufsausweis) muss eine qualifizierte elektronische Signatur ([[QES]]) unterstützen. HBA G2.1 ist Pflicht ab 30. Juni 2026.
> 3. Papierblöcke weiterhin vorrätig halten bis zur verpflichtenden Einführung.
>
> In Ihrer Praxis bedeutet das: kein akuter Umstellungsdruck in 2026, aber PVS-Kompatibilität frühzeitig abklären, damit kein Engpass beim Pilotstart entsteht.

[[PVS]]-Systeme müssen für die E-BtM-Rezept-Funktion erweitert werden:

- Neues FHIR-Profil implementieren
- QES-Workflow für BTM-spezifische Signaturanforderungen anpassen
- Validierungslogik für BtMVV-Regeln (Mengen, Substanzlisten) integrieren
- Apotheken-[[AVS]] müssen den Einlöseprozess für BTM-FHIR-Ressourcen umsetzen
> [!klinik-integration] Klinik-Integration: KIS-Update für das E-BtM-Rezept
> **Zeitrahmen für KIS-Hersteller:** Das E-BtM-Rezept kommt frühestens als Pilot im Q4 2026 und verpflichtend 2027. Fordern Sie von Ihrem KIS-Hersteller (z.B. Dedalus ORBIS, iMedOne, Meierhofer M-KIS) eine verbindliche Aussage, bis wann das E-BtM-Modul in zertifizierter Version verfügbar ist. Ohne zertifiziertes KIS-Modul bleibt das Papierrezept Pflicht.
>
> **QES-Infrastruktur im Krankenhaus:** Das E-BtM-Rezept erfordert eine qualifizierte elektronische Signatur (QES) des verordnenden Arztes via HBA G2.1. Stellen Sie sicher, dass alle BTM-verschreibungsberechtigten Ärzte über einen gültigen HBA G2.1 verfügen, der QES-Workflow im KIS abgebildet ist und Kartenterminals an den Stationsarbeitsplätzen verfügbar sind.


> [!dev-quickstart] Dev Quickstart: E-BtM-Rezept FHIR-Profil und Validierung
> Das E-BtM-Profil ist noch im Draft-Stadium (Feature-Draft `eBtM_25_1`). Für die Implementierungsvorbereitung:
> - FHIR-Profil-Basis: `KBV_PR_ERP_Prescription` mit BtMVV-spezifischen Extensions (Mengenbegrenzung, Substanzangabe)
> - QES-Pflicht: Signatur via HBA G2.1 (ECC), Signaturformat XAdES-BES gemäß gemSpec_COS
> - Validierung mit gematik Reference Validator:
> ```bash
> # Reference Validator (JAR)
> java -jar ref-erp-validator.jar >   --profile KBV_PR_ERP_Prescription >   --input btm-prescription-bundle.json
> ```
> - Validator-Repo: [gematik/app-referencevalidator](https://github.com/gematik/app-referencevalidator)
> - Draft-Spezifikation: [gemspec.gematik.de prereleases](https://gemspec.gematik.de/prereleases/) (eBtM_25_1)
> - T-Rezept als Vorlage: finale Spezifikation August 2025, Einführung 2026

## Verknüpfungen

- [[E-Rezept]] (technische Basis und Vorbild für das E-BtM-Rezept)
- [[BfArM]] (gibt papierbasierte BTM-Rezeptblöcke aus, Bundesopiumstelle)
- [[QES]] (qualifizierte elektronische Signatur ist Pflicht für BTM-Verordnungen)
- [[FHIR]] (Datenformat für das geplante E-BtM-Rezept)
- [[Fachdienst]] (E-Rezept-Fachdienst als voraussichtliche Transportplattform)
- [[PVS]] (muss E-BtM-Funktion implementieren)
- [[AVS]] (muss E-BtM-Einlösung implementieren)
- [[KBV]] (erstellt FHIR-Profile für E-BtM-Rezept)

## Quellen

- [Deutsche Apotheker Zeitung: E-BtM-Rezept – Pilotstart frühestens Q4/2026 (Januar 2026)](https://www.deutsche-apotheker-zeitung.de/autoren/news/artikel/2026/01/06/epa-e-rezept-und-mehr-was-kommt-2026)
- [BfArM: BtM-Rezepte / Verschreibung – Bundesopiumstelle](https://www.bfarm.de/DE/Bundesopiumstelle/Betaeubungsmittel/BtM-Rezepte-Verschreibung/_node.html)
- [gematik Fachportal: E-Rezept – Ausblick Sonderrezepte](https://fachportal.gematik.de/anwendungen/e-rezept)
- [Gelbe Liste: E-Rezept-Zeitplan](https://www.gelbe-liste.de/e-rezept/e-rezept-zeitplan)
