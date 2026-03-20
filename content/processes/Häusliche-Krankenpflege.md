---
title: Häusliche Krankenpflege
audience: [technical, non-technical]
tags: [prozess, pflege, e-rezept, sgb-v, g-ba]
aliases: [HKP, Häusliche Pflege, häusliche Krankenpflege, außerklinische Intensivpflege]
relevance:
  sectors: [arztpraxis, pflege, krankenhaus, kasse, regulierung, patient]
  interests: [compliance, patient, technik]
maturity: setzling
---

# Häusliche Krankenpflege

**Häusliche Krankenpflege** ist eine ambulante Pflegeleistung nach § 37 SGB V, bei der Pflegefachkräfte Versicherte in ihrer eigenen Wohnung versorgen, wenn Krankenhauspflege vermieden oder verkürzt werden soll.

## Erklärt für Einsteiger

Stell dir vor, jemand kommt nach einer Operation nach Hause, kann sich aber noch nicht vollständig selbst versorgen: Verbände müssen gewechselt werden, Medikamente müssen injiziert werden, die Wundpflege muss kontrolliert werden. Die häusliche Krankenpflege schickt dafür Pflegefachkräfte direkt nach Hause. Der Arzt verordnet diese Pflege auf einem Rezept, ähnlich wie bei Medikamenten. Ab Juli 2026 muss dieses Rezept digital ausgestellt werden.

## Überblick

Die häusliche Krankenpflege umfasst nach § 37 SGB V drei Leistungsarten:

1. **Behandlungspflege (§ 37 Abs. 2 SGB V)**: Medizinisch notwendige Pflegemaßnahmen wie Wundversorgung, Injektionen, Medikamentengabe oder Katheterversorgung. Sie werden vom Arzt verordnet und von der GKV erstattet.
2. **Grundpflege und hauswirtschaftliche Versorgung (§ 37 Abs. 1 SGB V)**: Körperpflege, Ernährung, Mobilität. Nur im Zusammenhang mit Krankenhauspflege-Vermeidung oder bei Schwere der Erkrankung erstattungsfähig.
3. **Außerklinische Intensivpflege (§ 37c SGB V)**: Seit 2021 eigenständig geregelt; für beatmungspflichtige Patienten außerhalb von Kliniken.

### Rechtsgrundlage

Die häusliche Krankenpflege ist in **§ 37 SGB V** geregelt. Konkrete Leistungsansprüche und Verordnungsvoraussetzungen sind in der **Häuslichen Krankenpflege-Richtlinie des [[G-BA]]** (HKP-Richtlinie) festgelegt. Die Richtlinie definiert:

- Welche Verrichtungen als Behandlungspflege anerkannt werden
- Maximale Verordnungsdauer (in der Regel 4 Wochen)
- Dokumentationsanforderungen für Pflegedienste

> [!interesse-compliance]
> Ab **1. Juli 2026** müssen Verordnungen für häusliche Krankenpflege und außerklinische Intensivpflege als [[E-Rezept]] ausgestellt werden. Das gilt für alle Vertragsärzte. Papierverordnungen sind danach nicht mehr möglich. Heilmittelverordnungen (Physiotherapie etc.) folgen erst ab 1. Januar 2027. **Handlungsbedarf:** Arztpraxen müssen sicherstellen, dass ihr [[PVS]] die HKP-Verordnung als E-Rezept unterstützt. Pflegedienste müssen in der Lage sein, das E-Rezept über die TI abzurufen.

> [!frist-warnung] Frist-Warnung: E-Rezept-Pflicht für HKP-Verordnungen ab 1. Juli 2026
> **Rechtsgrundlage:** § 360 Abs. 5 SGB V i.V.m. § 37 Abs. 1 und 2 SGB V (Fassung gemäß Digitalisierungsgesetz DigiG).
> **Frist:** Ab dem 1. Juli 2026 sind alle Vertragsärzte verpflichtet, Verordnungen für häusliche Krankenpflege und außerklinische Intensivpflege ausschließlich als elektronisches Rezept auszustellen und über die Telematikinfrastruktur zu übermitteln. Papierverordnungen auf Formblatt 12 sind ab diesem Datum nicht mehr zulässig.
> **Handlungsbedarf:** Vertragsärzte müssen bei ihrem PVS-Anbieter sicherstellen, dass die Software die HKP-Verordnung als E-Rezept nach den KBV-FHIR-Profilen für Pflegeverordnungen unterstützt. Pflegedienste müssen bis zu diesem Datum an die Telematikinfrastruktur angeschlossen sein und über eine SMC-B sowie einen E-Rezept-Fachdienst-Zugang verfügen, um Verordnungen empfangen zu können.
> **Bei Nichtbeachtung:** Papierverordnungen ab dem 1. Juli 2026 sind formunwirksam. Leistungserbringer können auf Basis dieser Verordnungen nicht mehr mit der Krankenkasse abrechnen.

## Digitalisierung der HKP-Verordnung

### E-Rezept ab Juli 2026

Ab dem 1. Juli 2026 gilt die E-Rezept-Pflicht für häusliche Krankenpflege und außerklinische Intensivpflege. Dies ist Teil der schrittweisen Ausweitung des [[E-Rezept]]s auf alle Verordnungsarten in Deutschland.

Der Prozess läuft dann digital ab:

1. Arzt erstellt die HKP-Verordnung im [[PVS]] und signiert sie mit dem [[HBA]].
2. Die Verordnung wird als E-Rezept auf dem [[E-Rezept]]-Fachdienst gespeichert.
3. Patient oder Pflegedienst löst das E-Rezept bei der zuständigen Krankenkasse ein (nicht in der Apotheke).
4. Die Krankenkasse genehmigt und erteilt die Leistung.

### Besonderheit gegenüber Arzneimittelrezepten

Das HKP-E-Rezept folgt nicht dem gleichen Weg wie ein Arzneimittelrezept in der Apotheke. Die Genehmigung durch die Krankenkasse ist bei vielen HKP-Leistungen erforderlich. Der E-Rezept-Fachdienst der gematik wird daher für HKP-Verordnungen mit einem spezifischen Workflow genutzt.

> [!klinik-integration] Klinik-Integration: HKP-Verordnung im Entlassmanagement
> Das Krankenhaus ist ein zentraler Ausgangspunkt für HKP-Verordnungen: Vor der Entlassung organisieren Ärzte häufig häusliche Krankenpflege, um eine frühzeitige und sichere Entlassung zu ermöglichen (Krankenhausvermeidungs- und Frühentlassungspflege nach § 39 SGB V).
>
> **KIS-Modul ab Juli 2026:** Ab 1. Juli 2026 muss das KIS das HKP-E-Rezept im Entlassmanagement-Prozess unterstützen. Klären Sie mit Ihrem KIS-Hersteller (SAP IS-H, Orbis/Dedalus, iMedOne), ob das HKP-E-Rezept-Modul verfügbar ist und welches Update nötig ist. Der entlassende Arzt signiert die Verordnung mit seinem [[HBA]] direkt im KIS.
> **FHIR-Profil:** HKP-Verordnungen basieren auf einem KBV-FHIR-Profil (ServiceRequest-basiert). Das KIS muss dieses Profil erzeugen und über den E-Rezept-Fachdienst übertragen können. Koordinieren Sie mit der IT-Abteilung, ob die Schnittstelle zum E-Rezept-Fachdienst für diesen neuen Verordnungstyp konfiguriert ist.
> **HBA-Verwaltung:** Jeder entlassende Arzt benötigt einen aktiven HBA. Prüfen Sie jetzt, ob alle stationsärztlichen HBAs aktuell und gültig sind. Abgelaufene oder nicht aktivierte HBAs blockieren den Signaturprozess im Entlassmanagement.

> [!praxis-tipp] Praxis-Tipp: HKP-Verordnung ab Juli 2026 als E-Rezept
> Ab 1. Juli 2026 müssen Sie häusliche Krankenpflege digital verordnen. Papierformulare (Muster 12) sind dann nicht mehr zulässig.
>
> Checkliste für Ihre Praxis:
> 1. Fragen Sie Ihren PVS-Anbieter: Unterstützt die aktuelle Version HKP-Verordnungen als E-Rezept?
> 2. Stellen Sie sicher, dass Ihr HBA gültig ist und im Konnektor erkannt wird. Ohne HBA keine digitale Signatur.
> 3. Klären Sie mit Ihrem Pflegedienst: Kann er E-Rezepte bereits empfangen? TI-Anbindung für Pflegedienste ist seit Juli 2025 Pflicht.
> 4. Probelauf vor dem 1. Juli 2026: Testen Sie die HKP-E-Rezept-Funktion mit einem Testpatienten.
>
> Zeitaufwand für die Ersteinrichtung: ca. 30 Minuten (PVS-Update + Testlauf). Planen Sie dies für Mai oder Juni 2026 ein.

> [!patientenrecht] Patientenrecht: Anspruch auf häusliche Krankenpflege
> Wenn Sie nach einer Erkrankung oder Operation Pflege zu Hause brauchen, haben Sie möglicherweise Anspruch auf häusliche Krankenpflege.
>
> **Was bedeutet das?**
> - Ihr Arzt verordnet die Pflege (künftig als digitales Rezept).
> - Pflegefachkräfte kommen direkt zu Ihnen nach Hause.
> - Die Kosten übernimmt Ihre Krankenkasse (bei medizinischer Notwendigkeit).
>
> **Wichtig:** Ihr Arzt muss die HKP verordnen. Sie können nicht direkt bei der Kasse beantragen. Sprechen Sie Ihren Hausarzt oder den Krankenhausarzt beim Entlassmanagement darauf an.

> [!patientenrecht] Patientenrecht: Was tun, wenn die Krankenkasse ablehnt?
> Ihre Krankenkasse muss die häusliche Krankenpflege genehmigen. Manchmal lehnt sie ab. Das müssen Sie nicht einfach hinnehmen.
>
> **Sie haben das Recht auf Widerspruch:**
> 1. Die Krankenkasse muss Ihnen die Ablehnung schriftlich mitteilen.
> 2. In dem Schreiben steht eine Frist. Meistens haben Sie vier Wochen Zeit.
> 3. Schreiben Sie einen Widerspruch. Bitten Sie Ihren Arzt um eine kurze Begründung.
> 4. Der Medizinische Dienst (MD) prüft den Fall dann erneut.
>
> **Wichtig:** Weder die Krankenkasse noch der MD darf Ihrem Arzt vorschreiben, was er verordnen darf. Das nennt man ärztliche Therapiefreiheit. Ein Widerspruch kann Ihnen nicht schaden. Er kostet nichts.
>
> **Hilfe:** Pflegeberatungsstellen, Sozialverbände (VdK, VdH) oder Patientenberatungsorganisationen (UPD) helfen Ihnen beim Widerspruch.

## Technische Details

### TI-Anbindung für Pflegedienste

Pflegedienste, die häusliche Krankenpflege erbringen, sind seit Juli 2025 verpflichtet, an die [[Telematikinfrastruktur]] angebunden zu sein. Voraussetzungen:

- **[[SMC-B]]**: Institutionskarte für den Pflegedienst
- **[[eHBA]]**: Heilberufsausweis für examinierte Pflegefachkräfte (wo zutreffend)
- **[[KIM]]**: Für die elektronische Kommunikation (Arztbriefe, Verordnungen) mit Arztpraxen und Krankenhäusern
- Ab Juli 2026: E-Rezept-Empfang über TI

Ab 1. Dezember 2026 müssen Pflegeeinrichtungen ihre Abrechnungsdaten nach [[SGB-XI]] ausschließlich über die TI und den KIM-Dienst übermitteln.

> [!frist-warnung] Frist-Warnung: SGB-XI-Abrechnung ab 1. Dezember 2026 nur noch über KIM
> **Rechtsgrundlage:** § 105 Abs. 2 SGB XI i.V.m. der Rahmenvereinbarung über den elektronischen Datenaustausch der Pflegeabrechnung.
> **Frist:** Ab dem 1. Dezember 2026 sind Pflegeeinrichtungen verpflichtet, ihre Abrechnungsdaten nach SGB XI ausschließlich über die Telematikinfrastruktur und den KIM-Dienst zu übermitteln. Der bisherige Austausch über proprietäre Datenträger und Clearing-Stellen entfällt.
> **Handlungsbedarf:** Pflegeeinrichtungen, die noch keine KIM-Adresse besitzen, müssen umgehend einen KIM-Anbieter beauftragen und eine SMC-B für die Einrichtung beantragen. Die Pflegesoftware muss KIM-fähig sein. Bei Neubeauftragung von Software sollte die KIM-Unterstützung vertraglich zugesichert werden.
> **Bei Nichtbeachtung:** Abrechnungsdaten, die nicht über die TI übermittelt werden, können ab dem Stichtag von den Krankenkassen zurückgewiesen werden. Dies führt zu Zahlungsverzögerungen und ggf. Rückforderungen.

> [!praxis-tipp] Praxis-Tipp: TI-Anbindung für Pflegedienste
> Ihr Pflegedienst muss seit Juli 2025 an die TI angebunden sein. Ab Juli 2026 brauchen Sie die TI auch für den E-Rezept-Empfang.
>
> Was Sie jetzt prüfen müssen:
> - **SMC-B vorhanden?** Ohne Institutionskarte keine TI-Verbindung. Beantragen Sie die SMC-B bei der zuständigen Stelle (für Pflege: Pflegekammer oder Registrierungsstelle der Hersteller).
> - **KIM eingerichtet?** Über KIM erhalten Sie Verordnungen und Arztbriefe digital. Prüfen Sie, ob Ihre Pflegesoftware KIM unterstützt.
> - **Kosten:** TI-Anbindung für Pflegedienste kostet je nach Anbieter ca. 50-100 Euro pro Monat. Refinanzierung über Vergütungsvereinbarungen mit den Kassen klären.
> - **Ab Dezember 2026:** Abrechnung nach SGB XI nur noch über KIM möglich. Wer dann nicht angebunden ist, kann nicht abrechnen.

### FHIR-Profil für HKP-Verordnungen

HKP-Verordnungen als E-Rezept basieren auf den FHIR-Profilen der [[KBV]]. Das Profil für häusliche Krankenpflege definiert die relevanten Ressourcen:

- `MedicationRequest` (angepasst für Pflegeleistungen) oder ein spezialisiertes Verordnungs-Profil
- `ServiceRequest` als Verordnungsdokument
- Pflichtfelder: Diagnose (ICD), Verordnungsmenge, Dauer, Pflegeleistungsart

Die genaue FHIR-Profilversion wird von der KBV im Rahmen der E-Rezept-Erweiterung für Pflegeleistungen spezifiziert.

> [!dev-quickstart] Dev Quickstart: HKP-E-Rezept auf dem E-Rezept-Fachdienst
> HKP-Verordnungen werden ab Juli 2026 als E-Rezept auf dem gematik E-Rezept-Fachdienst gespeichert.
> ```bash
> # E-Rezept-Fachdienst: Verfügbare Tasks für Pflegedienst abrufen
> # (Pflegedienst authentifiziert sich mit SMC-B-basiertem Access-Token)
> curl -s "https://erp.zentral.erp.splitdns.ti-dienste.de/Task?status=ready" \
>   -H "Accept: application/fhir+json" \
>   -H "Authorization: Bearer <smcb-access-token>"
>
> # Task abrufen und Verordnung entgegennehmen ($accept-Operation)
> curl -X POST "https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<task-id>/\$accept" \
>   -H "Content-Type: application/fhir+json" \
>   -H "Authorization: Bearer <smcb-access-token>" \
>   -d '{"resourceType":"Parameters","parameter":[{"name":"secret","valueString":"<task-secret>"}]}'
> ```
> - Auth-Flow: SMC-B des Pflegedienstes am TI-IDP (OAuth2 Client Credentials)
> - KBV FHIR-Profile für Verordnungen: [fhir.kbv.de](https://fhir.kbv.de/)
> - E-Rezept-API: [github.com/gematik/api-erp](https://github.com/gematik/api-erp)
> - Testumgebung (RU): `https://erp-ref.zentral.erp.splitdns.ti-dienste.de`

## Verknüpfungen

- [[E-Rezept]] (ab 1. Juli 2026 Pflicht für HKP-Verordnungen)
- [[SGB-V]] (§ 37: Rechtsgrundlage der häuslichen Krankenpflege)
- [[G-BA]] (HKP-Richtlinie; definiert Leistungsansprüche und Verordnungsvoraussetzungen)
- [[Telematikinfrastruktur]] (Pflegedienste seit Juli 2025 TI-pflichtig)
- [[KIM]] (sicherer Nachrichtenkanal für Pflegedienste)
- [[SMC-B]] (Institutionskarte für Pflegedienste)
- [[Entlassmanagement]] (häufig wird HKP im Rahmen des Entlassmanagements verordnet)
- [[PVS]] (Arztpraxis-Software; muss HKP-E-Rezept unterstützen)

## Quellen

- [G-BA: Häusliche Krankenpflege-Richtlinie](https://www.g-ba.de/richtlinien/11/)
- [Gesetze im Internet: § 37 SGB V – Häusliche Krankenpflege](https://www.gesetze-im-internet.de/sgb_5/__37.html)
- [BMG: Was ändert sich 2026 in Gesundheit und Pflege](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp)
- [gematik: E-Rezept – Was kommt noch?](https://www.gematik.de/anwendungen/e-rezept)
