---
title: Telekonsil
audience: [technical, non-technical]
tags: [technologies, telemedizin, konsil, facharztkommunikation, kim]
aliases: [Telekonsilium, Online-Konsil, elektronisches Konsil, ärztliches Telekonsil]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, hersteller, it-dienstleister, kasse]
  interests: [compliance, technik, business]
maturity: setzling
---

# Telekonsil

**Telekonsil** (auch Telekonsilium) ist die digitale Einholung einer fachärztlichen Zweitmeinung oder Mitbehandlung durch einen anderen Arzt, ohne dass Patient oder konsiliarischer Arzt am gleichen Ort sein müssen.

## Erklärt für Einsteiger

Stell dir vor, ein Hausarzt sieht ein auffälliges Hautbild und ist unsicher, ob es sich um etwas Ernstes handelt. Früher hätte er den Patienten zum Dermatologen überweisen müssen, der möglicherweise wochenlange Wartezeiten hat. Beim Telekonsil fotografiert der Hausarzt das Hautbild, schreibt eine kurze Fallbeschreibung und schickt alles sicher an einen Facharzt. Der Facharzt sieht sich den Fall an und schickt seine fachärztliche Einschätzung zurück. Das geht in Stunden statt Wochen, und der Patient muss keinen extra Termin machen.

## Überblick

Das Telekonsil unterscheidet sich von der [[Videosprechstunde]]: Bei der Videosprechstunde ist der Patient aktiv beteiligt. Beim Telekonsil kommunizieren zwei Ärzte über einen Fall, oft ohne direkte Patientenbeteiligung.

In Deutschland ist das ärztliche Telekonsil seit 2020 eine abrechnungsfähige Leistung im Einheitlichen Bewertungsmaßstab ([[EBM]]). Es gibt drei Kernszenarien:

1. **Dermato-Telekonsil (Hautarzt)**: Ein Hausarzt oder Nicht-Dermatologe schickt Bilder und Befunde an einen Dermatologen. Häufigster Anwendungsfall in Deutschland.
2. **Radiologisches Telekonsil**: Zweitmeinung zu Röntgen-, CT- oder MRT-Aufnahmen durch Radiologen an anderen Standorten (Teleradiologie).
3. **Onkologisches Telekonsil / Tumorkonferenz**: Fallbesprechung zwischen Onkologen, Radiologen, Chirurgen und Pathologen aus verschiedenen Häusern.

Der Informationsaustausch beim Telekonsil läuft zunehmend über [[KIM]] (Kommunikation im Medizinwesen). KIM ermöglicht den sicheren, verschlüsselten Versand von Befunden, Bildern und Arztbriefen innerhalb der [[Telematikinfrastruktur]].

> [!interesse-compliance]
> Das ärztliche Telekonsil ist nach EBM-Ziffer 01671 (Telekonsiliarische Beurteilung) und verwandten Ziffern abrechnungsfähig. Voraussetzungen: Einwilligung des Patienten, Dokumentation im PVS/KIS, sichere Datenübertragung (z.B. per KIM oder anderer TI-gesicherter Verbindung). Das ärztliche Standeskonsil per Videokonferenz fällt unter § 7 Abs. 4 MBO-Ä (Musterberufsordnung). Datenschutz: Konsilunterlagen müssen DSGVO-konform übermittelt werden. KIM als TI-Kommunikationsweg ist die empfohlene Übertragungsform.

> [!praxis-tipp] Praxis-Tipp: Telekonsil abrechnen
> Als anfragender Arzt rechnen Sie EBM 01670 (128 Punkte, ca. 14 Euro) ab. Als konsiliarischer Facharzt rechnen Sie EBM 01671 ab.
>
> Voraussetzungen für die Abrechnung:
> 1. Schriftliche Patienteneinwilligung einholen und in der Akte dokumentieren.
> 2. Übertragungsweg muss sicher sein: KIM-Dienst oder KBV-zertifizierter Videodienst.
> 3. Fragestellung und Konsilantwort im PVS dokumentieren.
> 4. Bei zeitaufwändigem Konsil (über 10 Minuten): Zuschlag EBM 01672 je weitere 5 Minuten, maximal dreimal.
>
> In Ihrer Praxis bedeutet das: KIM muss eingerichtet und aktiv sein. Ohne KIM-Adresse im VZD können Fachärzte Ihnen die Konsilantwort nicht sicher zurückschicken.

## Technische Details

### Übertragungsweg: KIM

[[KIM]] (Kommunikation im Medizinwesen) ist der bevorzugte sichere Übertragungsweg für Telekonsilien innerhalb der deutschen TI. Eine KIM-Telekonsil-Nachricht enthält typischerweise:

- **Begleitschreiben**: Klinische Fragestellung, Befundzusammenfassung (als [[CDA]] oder Freitext)
- **Bildmaterial**: Fotos, Röntgenbilder (im JPEG- oder [[DICOM]]-Format)
- **Vorbefunde**: Laborbefunde, frühere Arztbriefe
- **Einwilligungsdokumentation**: Nachweis der Patienteneinwilligung

Der konsiliarische Facharzt antwortet mit einer strukturierten oder unstrukturierten Antwort per KIM. Diese Antwort wird automatisch in die Patientenakte ([[ePA]] oder Praxissoftware) importiert, sofern das Primärsystem dies unterstützt.

> [!praxis-tipp] Praxis-Tipp: Dermato-Telekonsil vorbereiten
> Für ein Hautarzt-Telekonsil per KIM brauchen Sie:
> - Mindestens 2 Fotos der Hautläsion (Übersicht und Nahaufnahme, gute Beleuchtung).
> - Kurze Fallbeschreibung: Seit wann? Veränderung? Begleitsymptome? Vorbehandlung?
> - KIM-Adresse des Dermatologen (im VZD suchen oder beim Facharzt erfragen).
>
> Anhänge per KIM: Maximale Nachrichtengröße beträgt 25 MB. Fotos als JPEG vor dem Versand komprimieren, wenn Sie mehrere Bilder schicken.
>
> Häufiger Fehler: Einwilligung des Patienten fehlt in der Dokumentation. Ohne dokumentierte Einwilligung ist die Abrechnung nicht möglich.

> [!interesse-technik]
> Technisches Substrat des Telekonsils per KIM: E-Mail-Protokoll (SMTP/IMAP) mit Ende-zu-Ende-Verschlüsselung (S/MIME, AES-256), übertragen über das TI-Netz. Anhänge: beliebige Formate, max. Nachrichtengröße 25 MB (KIM-Standard). Für Teleradiologie: DICOM-Studien können als ZIP-Archiv per KIM verschickt werden. Bei größeren Dateimengen (Full-DICOM-Studien) empfehlen sich dedizierte Teleradiologieplattformen mit eigenem sicheren Transfer. Strukturierte Telekonsil-Dokumentation: CDA R2 Level 3-Dokument (Konsil-CDA). KBV-MIO-Profil für Konsil-Befund noch in Entwicklung.

> [!dev-quickstart] Dev Quickstart: KIM-Konsil-Nachricht mit FHIR App Transport Framework
> KIM transportiert strukturierte FHIR-Nachrichten als Anhang. Basis: [gematik/api-app-transport-framework](https://github.com/gematik/api-app-transport-framework)
> ```
> KIM-Nachricht (SMTP über KIM-Clientmodul)
> ├── From:    hausarzt@praxis.kim.telematik
> ├── To:      dermatologe@facharzt.kim.telematik
> ├── Subject: KIM-Dienstkennung: telekonsil;v=1.0
> └── Anhänge:
>     ├── konsil-bundle.json   (FHIR Bundle, Content-Type: application/fhir+json)
>     └── foto-01.jpg          (JPEG-Bild, max. 25 MB gesamt)
> ```
> FHIR Bundle-Struktur für den Konsil-Auftrag:
> ```json
> {
>   "resourceType": "Bundle",
>   "type": "message",
>   "entry": [
>     {
>       "resource": {
>         "resourceType": "MessageHeader",
>         "eventCoding": {
>           "system": "https://gematik.de/fhir/atf/CodeSystem/service-identifier-cs",
>           "code": "eRezept_Rezeptanforderung;Rezeptanfrage"
>         },
>         "source": { "endpoint": "hausarzt@praxis.kim.telematik" },
>         "destination": [{ "endpoint": "dermatologe@facharzt.kim.telematik" }]
>       }
>     },
>     {
>       "resource": {
>         "resourceType": "ServiceRequest",
>         "status": "active",
>         "intent": "order",
>         "code": {
>           "coding": [{ "system": "http://snomed.info/sct", "code": "306206005",
>                        "display": "Referral to dermatologist" }]
>         },
>         "subject": { "reference": "Patient/pat-1" },
>         "note": [{ "text": "Unklare Hautläsion seit 3 Monaten, keine Vorbehandlung." }]
>       }
>     }
>   ]
> }
> ```
> - KIM-Adresse des Facharztes auflösen: VZD-FHIR-API `GET /fdv/fhir/PractitionerRole?specialty=394582007` (Dermatologie, SNOMED)
> - Dienstkennung für Konsile: `telekonsil;v=1.0` im Subject-Header (KIM-Anwendungsfall-Kennung)
> - Repo: [gematik/api-app-transport-framework](https://github.com/gematik/api-app-transport-framework)
> - Repo KIM API: [gematik/api-kim](https://github.com/gematik/api-kim)

### Dermato-Telekonsil: DermoFocus und regionale Plattformen

Im dermatologischen Bereich haben sich neben KIM spezialisierte Plattformen entwickelt, z.B.:

- **DermoFocus** (Patientenzentrierte Teledermatologie)
- **RegioConsult**: Regionale Telekonsil-Plattformen einzelner KVen

Diese Plattformen bieten standardisierte Eingabemasken für Befunde, Fotodokumentation und Fallkategorisierung. Sie sind TI-unabhängig, bieten aber zunehmend KIM-Integration.

### Teleradiologie

Die Teleradiologie ist der älteste und technisch etablierteste Bereich des Telekonsils in Deutschland. Rechtsgrundlage ist die Röntgenverordnung (RöV) bzw. die Strahlenschutzverordnung (StSV) mit spezifischen Anforderungen an die Teleradiologie:

- Präsenzradiologe muss 24/7 erreichbar sein
- Teleradiologe übernimmt Befundverantwortung
- Sichere Bildübertragung (verschlüsselt, integritätsgesichert)
- DICOM-Standard für Bildformat ([[PACS]]-kompatibel)

> [!klinik-integration] Klinik-Integration: PACS/RIS-Anbindung für Teleradiologie
> **Workflow KIS-RIS-PACS:** Eine Radiologieanforderung aus dem KIS (ORM^O01 per HL7 v2) landet im RIS und erzeugt einen Worklist-Eintrag im PACS. Für die Teleradiologie benötigt der externe Befunder Zugriff auf diese Studie: entweder per direktem gesichertem DICOM-Fernzugriff auf das PACS (VPN oder TLS-verschlüsselt) oder über eine dedizierte Teleradiologieplattform als DICOM-Proxy.
>
> **Befund zurück ins KIS:** Der Teleradiologiebefund muss als ORU^R01 oder MDM^T02 zurück ins KIS und RIS gespielt werden. Gängige Teleradiologieanbieter (z.B. Medavis RIS-basierte Lösungen, Agfa HealthCare) bieten standardmäßig HL7-Rückschreibung an. Konfigurationsaufwand und ACK-Monitoring einplanen.
>
> **Verfügbarkeitspflicht und Datenmenge:** Die Strahlenschutzverordnung (StSV) verlangt 24/7-Erreichbarkeit des Präsenzradiologen. PACS und Teleradiologieplattform müssen daher hochverfügbar ausgelegt sein (Redundanz, USV). Full-DICOM-Studien (CT, MRT) überschreiten die 25-MB-KIM-Grenze regelmäßig: Dedizierte Übertragungswege (DICOMweb/WADO-RS) oder sichere Transferplattformen des Teleradiologiedienstleisters sind erforderlich.

### Onkologische Tumorkonferenz per Video

Interdisziplinäre Tumorkonferenzen (IDT) sind in der onkologischen Leitlinienversorgung Standard. Viele Onkologiezentren (zertifiziert nach DKG/DGU) führen wöchentliche Tumorboards per Videokonferenz durch. Technisch werden hierfür Videoplattformen (Microsoft Teams, Webex, spezialisierte klinische Lösungen) eingesetzt, nicht KIM.

> [!interesse-business]
> Telekonsil-Plattformen sind ein wachsendes Marktsegment. Treiber: EBM-Abrechnungsfähigkeit seit 2020, Facharztmangel in ländlichen Regionen, Digitalisierungsschub nach COVID-19. Anbieter: Spezialisierte Plattformen (z.B. für Dermatologie, Radiologie), KIM-Anbieter mit Konsil-Workflows, PVS-Hersteller mit integrierten Konsil-Modulen. Marktgröße schwer quantifizierbar; Wachstumserwartung durch zunehmende TI-Integration und ePA-Anbindung.

### Integration in die ePA

Telekonsil-Befunde sollen langfristig in der [[ePA]] dokumentiert werden. Eingewilligte Konsil-Antworten können als Dokument in die ePA des Patienten geschrieben werden, sodass der Patient und alle behandelnden Leistungserbringer Zugriff haben.

Die technische Integration von Telekonsil-Dokumenten in die ePA folgt dem gleichen Muster wie andere Arztbriefe: FHIR-konforme Dokumente, strukturiert als CDA-Dokumente oder FHIR-native Composition-Ressourcen.

> [!klinik-integration] Klinik-Integration: Konsil-Befunde aus dem KIS in die ePA übertragen
> **KIS-seitige Voraussetzung:** Das KIS muss den abgeschlossenen Konsil-Befund als FHIR-Composition oder CDA-Dokument exportieren können. In SAP IS-H und Dedalus ORBIS existieren dafür Arztbrief-Module, die für Konsil-Dokumente konfiguriert werden müssen. Prüfen Sie, ob Ihr KIS-Hersteller das ISiK-Dokumentenmodul (Stufe 3) für Konsil-Typen freigegeben hat.
>
> **Einwilligung vor Upload:** Vor jedem ePA-Upload muss der aktuelle Opt-out-Status des Patienten abgefragt werden. Dieser kann sich zwischen Konsilanforderung und Befundeingang geändert haben. Kein statisches Caching des Einwilligungsstatus im KIS.
>
> **Tumorkonferenz-Protokolle:** Tumorboard-Protokolle (PDF oder CDA) können ebenfalls in die ePA eingestellt werden, sofern der Patient eingewilligt hat. Für Krebspatienten ist die ePA als zentrales Dokument für Folgebehandler besonders relevant. Klären Sie mit dem KIS-Hersteller, welche Dokumententypen das ePA-Upload-Modul unterstützt.

## Verknüpfungen

- [[KIM]] (Kommunikationsweg für das sichere Telekonsil in der TI)
- [[ePA]] (Zielrepository für Telekonsil-Befunde)
- [[Telemedizin]] (Oberbegriff; Telekonsil als Teilbereich)
- [[Videosprechstunde]] (patientenseitige Telemedizin, Abgrenzung zum arztinternen Telekonsil)
- [[CDA]] (Clinical Document Architecture; strukturiertes Dokumentenformat für Konsil-Befunde)
- [[PACS]] (Bildarchivierung; relevant für Teleradiologie-Konsile)
- [[DICOM]] (Bildübertragungsstandard für Teleradiologie)
- [[EBM]] (Einheitlicher Bewertungsmaßstab; Abrechnungsgrundlage für Telekonsile)
- [[TI-Messenger]] (zukünftiger Kommunikationsweg für Telekonsil-Absprachen in Echtzeit)

## Quellen

- [KBV: Telekonsil – Abrechnung und Voraussetzungen](https://www.kbv.de/html/telekonsil.php)
- [Bundesärztekammer: Telemedizin und Telekonsil](https://www.bundesaerztekammer.de/themen/aerzte/digitalisierung/telemedizin)
- [gematik: KIM – Kommunikation im Medizinwesen](https://www.gematik.de/anwendungen/kim)
- [Wikipedia: Telemedizin (Telekonsultation)](https://de.wikipedia.org/wiki/Telemedizin)
