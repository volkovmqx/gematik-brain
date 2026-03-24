---
title: Dispensierung
audience: [technical, non-technical]
tags: [prozesse, apotheke, e-rezept, arzneimittel, avs]
aliases: [Abgabe, Arzneimittelabgabe, Dispensation]
relevance:
  sectors: [apotheke, arztpraxis, krankenhaus, kasse, patient]
  interests: [compliance, technik]
maturity: wachsend
---

# Dispensierung

Die **Dispensierung** ist die Abgabe eines Arzneimittels durch eine Apotheke an den Patienten nach Prüfung der Verordnung sowie aller arzneimittelrechtlichen und pharmazeutischen Anforderungen.

## Erklärt für Einsteiger

Wenn du mit einem Rezept in die Apotheke gehst, passiert mehr als ein einfacher Kauf. Die Apotheke prüft, ob das Rezept gültig ist, ob das Medikament für dich sicher ist und ob es Wechselwirkungen mit anderen Mitteln gibt, die du nimmst. Erst danach gibt sie das Medikament heraus. Dieser gesamte Vorgang vom Empfang des Rezepts bis zur Aushändigung an den Patienten heißt Dispensierung. Bei [[E-Rezept|E-Rezepten]] läuft der größte Teil davon digital ab.

## Überblick

Die Dispensierung ist der Kernprozess jeder Apotheke und gesetzlich streng geregelt. Die wichtigste Rechtsgrundlage ist **§ 17 [[ApBetrO|Apothekenbetriebsordnung (ApBetrO)]]**: Arzneimittel dürfen nur in den Geschäftsräumen der Apotheke, nur durch pharmazeutisches Personal und nur nach Prüfung der Verordnung abgegeben werden.

Der Dispensierungsprozess umfasst drei Kernpflichten:

1. **Prüfung der Verordnung**: Formale Prüfung (Ausstellungsdatum, Arztunterschrift bzw. [[QES|qualifizierte Signatur]] beim E-Rezept, Gültigkeitsdauer) und fachliche Prüfung (Dosierung, Kontraindikationen, Wechselwirkungen).
2. **[[AMTS|Arzneimitteltherapiesicherheitsprüfung (AMTS)]]**: Abgleich mit dem aktuellen Medikationsplan des Patienten. Das [[AVS|Apothekenverwaltungssystem (AVS)]] löst automatisch eine [[Interaktionsprüfung]] aus.
3. **Dokumentation und Abrechnung**: Die Abgabe wird im AVS dokumentiert. Die Abrechnungsdaten gehen an das [[Apothekenrechenzentrum]].

> [!frist-warnung] Frist-Warnung: AMTS-Prüfpflicht bei jeder Dispensierung
> **Rechtsgrundlage:** § 17 Abs. 1 ApBetrO i.V.m. § 5 ApBetrO (pharmazeutische Tätigkeit).
> **Dauerpflicht:** Die Interaktions- und Verträglichkeitsprüfung ist gesetzlich vorgeschriebener Bestandteil jeder Abgabe, keine optionale Serviceleistung. Eine fehlende oder nicht dokumentierte AMTS-Prüfung gilt als Verstoß gegen § 17 ApBetrO.
> **Handlungsbedarf:** Das [[AVS]] muss so konfiguriert sein, dass die Interaktionsprüfung gegen eine aktuelle Datenbank (z.B. [[ABDA-Datenbank]]) bei jedem Dispensierungsvorgang automatisch ausgelöst und das Ergebnis dokumentiert wird. Manuelles Übergehen der Prüfung ist nur bei pharmazeutisch begründetem und dokumentiertem Einzelfall zulässig.
> **Bei Nichtbeachtung:** Vollständige Retaxation der Abgabe durch die Krankenkasse; bei wiederholten Verstößen mögliche Maßnahmen im Rahmen der Apothekenüberwachung durch die zuständige Landesbehörde gemäß § 64 AMG.

> [!klinik-integration] Klinik-Integration: Dispensierung in der Krankenhausapotheke
> In der Krankenhausapotheke läuft die Dispensierung anders als in öffentlichen Apotheken: Sie ist stationär eingebettet und direkt mit dem [[KIS]] verknüpft.
>
> **Stationärer Workflow:** Die Verordnung entsteht im KIS durch den Stationsarzt. Sie wird elektronisch an das Apotheken-Informationssystem (AIS) übertragen. Die Apotheke prüft und gibt frei. Auf der Station erfolgt die Ausgabe, idealerweise mit Barcode-Scan am Patientenbett (Closed Loop Medication Management, CLMM).
> **Unit-Dose-Systeme:** Viele Kliniken setzen vollautomatische Unit-Dose-Automaten ein. Der Automat stellt patientenindividuelle Blister zusammen. Voraussetzung ist eine digitale Schnittstelle zwischen KIS und Automaten-Steuerungssystem, typischerweise HL7 v2 OMP^O09 (Medikationsauftrag) oder ein proprietäres FHIR-basiertes Interface. Klären Sie mit dem KIS-Hersteller und dem Automaten-Anbieter, welche Schnittstellenversion produktiv zertifiziert ist und ob Updates des KIS-Medikationsmoduls die Schnittstelle beeinflussen.
> **AMTS im stationären Bereich:** Das KIS muss bei jeder stationären Verordnung eine AMTS-Prüfung anstoßen. Dafür ist eine vollständige und aktuelle Medikationsliste im KIS notwendig. Prüfen Sie, ob das Medikationsmodul Ihres KIS eine automatische Interaktionsprüfung gegen eine aktuell lizenzierte Datenbank (z.B. Ifap, MMI Pharmindex, ABDA-Datenbank) durchführt und ob Hochrisikointeraktionen den Arzt aktiv alarmieren.

### Dispensierung im E-Rezept-Workflow

Mit dem verpflichtenden [[E-Rezept]] (für GKV-Versicherte seit Januar 2024) ist die Dispensierung vollständig digitalisiert:

1. Der Patient übergibt die [[eGK]] oder zeigt den [[DataMatrix]]-Ausdruck, alternativ nutzt er die E-Rezept-App.
2. Das [[AVS]] ruft das E-Rezept vom [[Fachdienst|E-Rezept-Fachdienst]] ab (Task-basierter Workflow über [[FHIR]]-API).
3. Das AVS signalisiert dem Fachdienst den Einlösevorgang ("in progress").
4. Die AMTS-Prüfung erfolgt automatisch gegen die [[ABDA-Datenbank]].
5. Das Arzneimittel wird ausgegeben. Der [[Securpharm]]-Code auf der Packung wird gescannt und im nationalen Verifizierungssystem entwertet.
6. Das AVS übermittelt den Dispensierungsdatensatz (MVO-Quittung) an den E-Rezept-Fachdienst. Das Rezept gilt damit als eingelöst.
7. Der Abrechnungsdatensatz ([[TA1]]-Format) wird an das Apothekenrechenzentrum übertragen, das die Abrechnung mit den Krankenkassen durchführt.

> [!praxis-tipp] Praxis-Tipp: E-Rezept-Einlösung in der Apotheke
> Drei Einlösewege sind möglich. Welcher kommt beim Patienten an?
>
> 1. **eGK stecken**: Patient steckt die Karte ins Lesegerät. Keine PIN nötig. Ihr AVS ruft alle offenen E-Rezepte des Patienten ab.
> 2. **QR-Code-Ausdruck**: Patient zeigt den Ausdruck aus der Praxis. Ihr AVS scannt den DataMatrix-Code.
> 3. **E-Rezept-App**: Patient zeigt das Rezept in der App. Ihr AVS scannt den QR-Code aus der App.
>
> Häufiger Fehler: Patient hat mehrere offene E-Rezepte auf der eGK. Prüfen Sie im AVS, welches Rezept eingelöst werden soll, bevor Sie den Dispensierungsvorgang starten.
> Wichtig: Nach dem Abschluss ($close) ist das Rezept dauerhaft gesperrt. Eine Korrektur ist danach nur über die Krankenkasse möglich.

> [!interesse-patient]
> Du gibst in der Apotheke deine Karte (oder den QR-Code vom Arzt) ab. Die Apotheke prüft, ob das Medikament für dich sicher ist und gibt es aus. Das Rezept kann danach nicht mehr ein zweites Mal eingelöst werden: Es ist nach der Abgabe dauerhaft gesperrt. Wenn du ein Papierrezept hattest, gilt dasselbe.

## Technische Details

### E-Rezept Dispensierungsworkflow (FHIR-API)

Der E-Rezept-Fachdienst der [[gematik]] implementiert einen Task-basierten Workflow gemäß der Spezifikation gemSpec_FD_eRp. Jedes E-Rezept ist ein `Task`-Objekt im FHIR-R4-Datenmodell.

Der Dispensierungsablauf aus Apothekensicht:

```
1. GET /Task/<id>?secret=<AccessCode>   → Rezept abrufen (inkl. MedicationRequest)
2. POST /Task/<id>/$accept              → Rezept als "in Bearbeitung" markieren
3. [AMTS-Prüfung, Packung scannen]
4. POST /Task/<id>/$close               → Dispensierungsdatensatz (MedicationDispense) senden
                                          Task-Status wechselt auf "completed"
```

Der `MedicationDispense`-Datensatz enthält:
- PZN des tatsächlich abgegebenen Arzneimittels (kann von der Verordnung abweichen bei Aut-idem-Substitution)
- Abgabedatum und Apothekenkennung ([[Telematik-ID]] der Apotheke aus [[SMC-B]])
- Chargen-Nummer und Securpharm-Verification-Status

> [!interesse-technik]
> Die E-Rezept-Fachdienst-API (FHIR R4) ist auf GitHub veröffentlicht: [gematik/api-erp](https://github.com/gematik/api-erp). Für den Dispensierungsschritt ist die Operation `$close` auf dem Task-Endpunkt relevant. AVS-Systeme müssen sich mit dem [[SMC-B]]-Zertifikat der Apotheke am [[IDP]] authentisieren. Das `MedicationDispense`-Profil folgt dem KBV-FHIR-Profil `kbv.ita.erp`. Die Kommunikation mit dem Fachdienst erfolgt durch den [[VAU|VAU-Kanal (Vertrauenswürdige Ausführungsumgebung)]].

> [!dev-quickstart] Dev Quickstart: E-Rezept Dispensierung ($accept und $close)
> Basis-URL Fachdienst (Produktion): `https://erp.zentral.erp.splitdns.ti-dienste.de`
> ```bash
> # Schritt 1: Rezept annehmen (Task → "in-progress")
> curl -X POST "https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<taskId>/\$accept?ac=<AccessCode>" \
>   -H "Authorization: Bearer <IDP-Access-Token>"
>
> # Schritt 2: Dispensierungsdatensatz übermitteln, Task schließen (→ "completed")
> curl -X POST "https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<taskId>/\$close?secret=<Secret>" \
>   -H "Authorization: Bearer <IDP-Access-Token>" \
>   -H "Content-Type: application/fhir+json" \
>   -d @medication-dispense.json
> ```
> Body: FHIR `MedicationDispense` nach Profil `de.gematik.erezept-workflow.r4` (aktuell v1.4.3).
> Pflichtfelder: `medication[x]` (PZN als `coding`), `subject` (KVNR), `performer` (Telematik-ID der Apotheke), `whenHandedOver`.
> - FHIR-Profil (v1.4.3): [simplifier.net/packages/de.gematik.erezept-workflow.r4/1.4.3](https://simplifier.net/packages/de.gematik.erezept-workflow.r4/1.4.3)
> - API-Repo: [github.com/gematik/api-erp](https://github.com/gematik/api-erp)
> - Referenzumgebung (RU): `https://erp-ref.zentral.erp.splitdns.ti-dienste.de`
> - Auth: SMC-B der Apotheke → IDP-Access-Token; Transport über VAU-Kanal (HTTPS + zusätzliche Verschlüsselung)

### Aut-idem-Substitution

Bei GKV-Verordnungen gilt standardmäßig die **Aut-idem-Regelung**: Die Apotheke ist verpflichtet, ein rabattiertes Arzneimittel des Rahmenvertrags gemäß § 129 [[SGB-V|SGB V]] abzugeben (Substitution durch ein wirkstoffgleiches Präparat des Kassenvertrags). Ausnahmen:
- Der Arzt hat auf dem Rezept "aut idem" ausgeschlossen (Kreuz im entsprechenden Feld beim Muster-16, beim E-Rezept das Flag `substitutionAllowed: false`).
- Es handelt sich um ein biotechnologisch hergestelltes Arzneimittel (Biologikum).
- Das vorgeschriebene Mittel ist in der Apotheke verfügbar und preislich günstiger.

### Mehrfachverordnung (MVO)

Bei chronischen Erkrankungen kann ein Arzt ein Arzneimittel als **Mehrfachverordnung (MVO)** für bis zu vier Quartale ausstellen. Jede Teilverordnung (MVO-Teil) ist separat dispensierbar. Das AVS prüft beim Abruf, ob die zeitliche Gültigkeit des MVO-Teils (Einlösefenster) noch nicht abgelaufen ist.

> [!praxis-tipp] Praxis-Tipp: Mehrfachverordnungen korrekt dispensieren
> Bei MVO gibt es vier Teilverordnungen (MVO-Teile 1 bis 4). Jeder Teil hat ein eigenes Einlösefenster.
>
> In Ihrer Apotheke bedeutet das:
> - Ihr AVS zeigt beim Abruf an, welcher MVO-Teil gültig ist.
> - Ist das Einlösefenster eines Teils noch nicht geöffnet, lehnt der E-Rezept-Fachdienst den Abruf ab.
> - Ist das Fenster bereits abgelaufen, ist der MVO-Teil verfallen. Der Patient muss zur Praxis und eine neue Verordnung holen.
>
> Typische Patientenfrage: "Ich habe noch drei Teile übrig, warum geht Teil 3 nicht?" Das Einlösefenster ist noch nicht geöffnet. Bitten Sie den Patienten, zum angegebenen Datum wiederzukommen.

> [!klinik-integration] Klinik-Integration: Stationäres E-Rezept und Abrechnung der Krankenhausapotheke
> Die Krankenhausapotheke unterliegt anderen Abrechnungsregeln als die öffentliche Apotheke. Stationäre Arzneimittelkosten sind in der DRG-Fallpauschale inkludiert, kein separates Rezept je Packung.
>
> **Entlassmedikation:** Bei der Patientenentlassung kann der Stationsarzt ein E-Rezept für die Weitermedikation ausstellen. Das KIS muss dafür die E-Rezept-Schnittstelle (FHIR-Task auf dem E-Rezept-Fachdienst) unterstützen. Prüfen Sie, ob das E-Rezept-Modul Ihres KIS für die Entlassmedikation aktiviert und zertifiziert ist.
> **Stationsversorgung ohne E-Rezept:** Für die stationäre Medikation (Arzneimittel auf der Station) wird kein E-Rezept ausgestellt. Hier gilt der interne KIS-Verordnungsworkflow mit direkter AIS-Kommunikation. Securpharm-Entwertung ist für stationär ausgegebene Packungen ebenfalls verpflichtend. Klären Sie, ob das AIS die Securpharm-Schnittstelle integriert oder ob die Entwertung manuell über ein separates System erfolgt.
> **Betäubungsmittel:** BtM-Verordnungen im stationären Bereich erfordern weiterhin Papierformulare (BtMVV) und sind nicht E-Rezept-fähig. Das KIS muss den BtM-Workflow separat abbilden.

### Securpharm-Entwertung

Jede Arzneimittelpackung trägt seit 2019 einen [[DataMatrix]]-Code mit serialisierter PZN, Chargennummer, Ablaufdatum und einer individuellen Seriennummer. Bei der Dispensierung muss das AVS diesen Code scannen und die Packung im europäischen Verifizierungssystem (European Medicines Verification System, EMVS) über den deutschen Knoten ([[Securpharm]]) entwerten. Erst nach erfolgreicher Entwertung darf die Packung ausgegeben werden.

> [!frist-warnung] Frist-Warnung: Securpharm-Entwertungspflicht und E-Rezept-Pflicht
> **Rechtsgrundlage:** Art. 54a i.V.m. Anhang VI der Delegierten Verordnung (EU) 2016/161 (Fälschungsschutzrichtlinie); § 360 Abs. 1 SGB V (E-Rezept-Pflicht für GKV-Arzneimittelverordnungen seit 1. Januar 2024).
> **Frist Securpharm:** Entwertungspflicht gilt seit 9. Februar 2019 lückenlos. Jede verschreibungspflichtige Packung muss vor Ausgabe im EMVS entwertet werden.
> **Frist E-Rezept:** Seit 1. Januar 2024 sind GKV-Arzneimittelverordnungen ausschließlich als [[E-Rezept]] einzulösen (§ 360 Abs. 1 SGB V). Apotheken, deren [[AVS]] noch keine vollständige E-Rezept-Integration besitzt, riskieren Abrechnungsablehnungen durch das Apothekenrechenzentrum.
> **Handlungsbedarf:** Stellen Sie sicher, dass Ihr AVS sowohl den EMVS-Entwertungsschritt als auch den E-Rezept-Workflow ($accept/$close) vollständig und ohne manuelle Eingriffe durchführt. Prüfen Sie die AVS-Versionsstände beim Hersteller auf Konformität mit der aktuellen gematik-Zulassung.

## Verknüpfungen

- [[E-Rezept]] (digitales Rezept: Basis für die elektronische Dispensierung)
- [[AVS]] (Apothekenverwaltungssystem: führt den Dispensierungsworkflow durch)
- [[AMTS]] (Arzneimitteltherapiesicherheit: Pflichtprüfung bei jeder Dispensierung)
- [[Interaktionsprüfung]] (automatische Wechselwirkungsprüfung im AVS)
- [[ABDA-Datenbank]] (Arzneimittelstammdaten: Grundlage für AMTS und Substitutionsprüfung)
- [[Apothekenrechenzentrum]] (übernimmt Abrechnungsdaten nach der Dispensierung)
- [[Securpharm]] (Serialisierung und Entwertung von Packungen)
- [[DataMatrix]] (2D-Code auf Arzneimittelpackungen mit Serialisierungsdaten)
- [[TA1]] (Abrechnungsdatenformat für Apothekenrechenzentren)
- [[Fachdienst]] (E-Rezept-Fachdienst: verwaltet Tasks für den Dispensierungsworkflow)
- [[SMC-B]] (Apothekenkarte: Authentisierung beim E-Rezept-Fachdienst)
- [[SGB-V]] (§ 129 SGB V: Aut-idem-Regelung und Rahmenverträge)
- [[Muster-16]] (Papiervordruck, der durch E-Rezept abgelöst wird)
- [[eML]] (Medikationsliste: Quelle für den Medikationsabgleich bei der AMTS-Prüfung)

## Quellen

- [§ 17 ApBetrO – Dispensierung in der Apotheke](https://www.gesetze-im-internet.de/apobetro_1987/__17.html)
- [gematik: E-Rezept für Apotheken (Workflow-Beschreibung)](https://www.gematik.de/anwendungen/e-rezept/apotheken)
- [gematik GitHub: api-erp – E-Rezept API-Spezifikation](https://github.com/gematik/api-erp)
- [Securpharm: Arzneimittelverifizierungssystem Deutschland](https://www.securpharm.de)
