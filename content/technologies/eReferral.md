---
title: eReferral - Elektronische Überweisung
audience: [technical, non-technical]
tags: [technologie, ueberweisung, epa, primaerversorgung, planung]
aliases: [eReferral, elektronische Überweisung, digitale Überweisung]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, patient, kasse, hersteller]
  interests: [compliance, technik, patient]
maturity: setzling
---

# eReferral - Elektronische Überweisung

Der **eReferral** (elektronische Überweisung) ist eine geplante Funktion der [[ePA]], die die papierbasierte Überweisung von einem Arzt zum nächsten durch einen digitalen, sicheren Prozess über die [[Telematikinfrastruktur]] ersetzt.

## Erklärt für Einsteiger

Wenn dein Hausarzt dich zum Spezialisten schickt, bekommst du heute einen Zettel: die Überweisung. Du nimmst diesen Zettel mit zur Facharztpraxis. Der Facharzt sieht darauf, warum du überwiesen wurdest. Beim eReferral läuft das digital: Der Hausarzt schickt die Überweisung direkt an die Facharztpraxis, du hast sie auch in deiner Patientenakte. Kein Zettel, keine vergessene Überweisung in der Jackentasche.

## Überblick

Der eReferral ist ein zentrales Element der von Bundesgesundheitsministerin Nina Warken (CDU) am **11. Februar 2026** vorgestellten Vision für die digitale Primärversorgung. Das Drei-Säulen-Modell sieht die [[ePA]] als Koordinationsplattform zwischen:

1. **Hausarztpraxis** als erste Anlaufstelle
2. **[[ePA]]** als Datenhub und Koordinationsmedium
3. **116117** als telefonischer Ersteinschätzung

Der eReferral soll ermöglichen, dass Ärzte Überweisungen direkt über die ePA an Fachärzte übermitteln, ohne Papierformulare. Die Patienten sollen die Überweisung auch in der ePA-App ihrer Krankenkasse einsehen können.

### Stand der Umsetzung (März 2026)

Der eReferral ist zum Stand März 2026 noch in der Planungsphase. Es gibt keinen verbindlichen Einführungstermin. Das Vorhaben ist Teil der geplanten GDVG-Gesetzgebung, die in der ersten Jahreshälfte 2026 als Referentenentwurf erwartet wird. Parallel soll eine **zentrale Termindatenbank** entstehen, die von [[gematik]] und Selbstverwaltung betrieben und per Gesetz im **Sommer 2026** verankert werden soll.

> [!frist-warnung] Frist-Warnung: Kein Handlungsbedarf – eReferral noch ohne Rechtsgrundlage
> **Rechtsgrundlage:** Derzeit keine. Die gesetzliche Verankerung ist Teil des geplanten GDVG (Gesundheitsdigitalisierungsversorgungsgesetz); Referentenentwurf erwartet im ersten Halbjahr 2026.
> **Geltende Pflicht (Übergangslösung):** Die Papierüberweisung nach KBV-Muster 6 bleibt bis zur gesetzlichen Einführung des eReferral der verbindliche Standard gemäß § 24 Bundesmantelvertrag-Ärzte (BMV-Ä). Vertragsärzte sind verpflichtet, Überweisungen auf Muster 6 auszustellen.
> **Handlungsbedarf:** Stand März 2026 besteht kein Umsetzungsaufwand. Verfolgen Sie die GDVG-Gesetzgebung. Sobald ein Referentenentwurf vorliegt, sind Übergangsfristen für die technische Umsetzung zu erwarten (erfahrungsgemäß 12 bis 24 Monate nach Inkrafttreten).

> [!interesse-compliance]
> Der eReferral ist noch **nicht in Kraft**. Es existiert kein verbindlicher Pflichttermin (Stand März 2026). Die gesetzliche Verankerung ist Teil des geplanten [[GDVG]] (Referentenentwurf erwartet H1/2026). Praxen müssen noch keine Maßnahmen ergreifen. Die [[KBV]] hat Skepsis gegenüber dem Modell geäußert und die Rolle des persönlichen Hausarzt-Patienten-Verhältnisses betont.

### Geplante Funktionen

Neben dem eReferral im engeren Sinne (Überweisung Arzt zu Arzt) sind weitere Koordinationsfunktionen im Primärversorgungsmodell geplant:

- **Termindatenbank**: Zentrale Datenbank für Arzttermine, bundesweit betrieben von gematik und Selbstverwaltung, gesetzliche Verankerung Sommer 2026 angestrebt
- **Ersteinschätzung**: Digitale Triage-Funktion, die Patienten in den richtigen Versorgungskanal leitet (ePA, Hausarzt oder 116117)

### Abgrenzung zu bestehenden Lösungen

Bereits heute gibt es Wege, Überweisungen elektronisch zu übermitteln:

| Methode | Status | Beschränkung |
|---|---|---|
| Papierüberweisung (Muster 6) | Aktueller Standard | Medienbruch, Verlustrisiko |
| [[KIM]] (sichere E-Mail) | Produktiv | Keine strukturierten Daten, kein einheitliches Format |
| eReferral über ePA | In Planung | Noch kein Pflichttermin |

> [!klinik-integration] Klinik-Integration: eReferral und Krankenhaus-Schnittstellen
> Der eReferral ist noch nicht spezifiziert, aber für Krankenhäuser besonders relevant: Kliniken empfangen Überweisungen (stationäre Einweisung, ambulante Spezialambulanz) und stellen ihrerseits Weiterüberweisungen aus. Frühzeitige Planung lohnt sich.
>
> **Relevante Eingangskanäle heute:** Einweisungen laufen heute per Papier (Muster 2) oder KIM. Eine KIS-seitige KIM-Integration ist die sinnvolle Übergangslösung: Das KIS empfängt strukturierte Einweisungsdaten per KIM und übergibt sie an den Aufnahmeprozess (HL7 v2 ADT^A01).
>
> **Notaufnahme:** Der eReferral adressiert primär die geplante Überweisung, nicht die Notaufnahme. Notfallpatienten können nicht auf eine digitale Einweisung warten. Die Notaufnahme-Dokumentation läuft weiter über bestehende KIS-Workflows und, ab ISiK Stufe 3, über die FHIR-basierte ISiK-Schnittstelle (Encounter, Condition).
>
> **Planung für IT-Leitungen:** Beobachten Sie den GDVG-Referentenentwurf (erwartet H1/2026). Wenn der eReferral als `FHIR ServiceRequest` spezifiziert wird, benötigt das KIS einen entsprechenden Empfangsendpunkt. Das ISiK-Basismodul (Encounter, Patient) ist die wahrscheinliche technische Grundlage für die KIS-seitige Integration von eingehenden eReferrals. Klären Sie mit Ihrem KIS-Hersteller, ob ein eReferral-Empfangsmodul in der Roadmap enthalten ist.

> [!praxis-tipp] Praxis-Tipp: Was Sie heute schon tun können
> Der eReferral ist noch nicht eingeführt. Überweisungen laufen weiter per Papier (Muster 6). Sie müssen nichts ändern.
>
> Wenn Sie bereits KIM nutzen, können Sie Überweisungen als Digitales Muster (DiMu) versenden:
> 1. Überweisung im PVS ausfüllen (wie gewohnt).
> 2. PDF mit Ihrem eHBA signieren.
> 3. Per KIM-Mail an die empfangende Praxis senden.
>
> Voraussetzung: KIM-Account aktiv, eHBA vorhanden, PVS unterstützt DiMu-Funktion. Fragen Sie Ihren PVS-Anbieter, ob DiMu in Ihrer Version bereits enthalten ist.
>
> Für den eReferral über die ePA: Kein Handlungsbedarf jetzt. Verfolgen Sie die GDVG-Gesetzgebung (erwartet H1/2026).

Der eReferral unterscheidet sich von der KIM-basierten Kommunikation dadurch, dass er in die ePA integriert und für den Patienten direkt einsehbar wäre.

## Technische Details

### Geplante Architektur

Die technische Umsetzung des eReferral ist noch nicht spezifiziert (Stand März 2026). Auf Basis der Primärversorgungsvision lässt sich folgende Architektur skizzieren:

- **Datenformat**: Voraussichtlich [[FHIR]] ServiceRequest oder basierend auf bestehenden IHE-Profilen (XDW Workflow, XDS-Überweisungsdokument)
- **Transport**: Über den ePA-Medikationsdienst oder einen eigenen Überweisungsfachdienst auf der [[Telematikinfrastruktur]]
- **Zugriff**: Für überweisende Praxis (Aussteller), empfangende Praxis (Empfänger) und Versicherten (Einsicht in ePA-App)
- **Signatur**: Ggf. qualifizierte elektronische Signatur ([[QES]]) des überweisenden Arztes via [[HBA]]

> [!dev-quickstart] Dev Quickstart: FHIR ServiceRequest als Überweisungsprototyp
> Noch kein offizieller Endpunkt (Stand März 2026). Referenzarchitektur auf Basis von FHIR R4 und KBV-Profilen:
> ```json
> // FHIR ServiceRequest – Überweisungsstruktur (Entwurf, nicht normativ)
> {
>   "resourceType": "ServiceRequest",
>   "status": "active",
>   "intent": "referral",
>   "code": {
>     "coding": [{ "system": "http://snomed.info/sct", "code": "306206005" }]
>   },
>   "subject": { "reference": "Patient/X123456789" },
>   "requester": { "reference": "Practitioner/<LANR>" },
>   "performer": [{ "reference": "Organization/<BSNR-Ziel>" }],
>   "reasonCode": [{ "text": "Verdacht auf Herzrhythmusstörung" }]
> }
> ```
> - Transport heute: Per KIM als FHIR-Bundle (via [gematik/api-app-transport-framework](https://github.com/gematik/api-app-transport-framework))
> - Referenzvalidierung: [gematik/app-referencevalidator](https://github.com/gematik/app-referencevalidator)
> - KBV-Basis-Profile (enthält Überweisungsprofile): [simplifier.net/base1x0](https://simplifier.net/base1x0)
> - E-Rezept-ServiceRequest (verwandtes Konzept): [gematik/spec-E-Rezept-ServiceRequest](https://github.com/gematik/spec-E-Rezept-ServiceRequest)
> - Kein gemSpec für eReferral bis GDVG-Verabschiedung. gematik-Repo beobachten: [github.com/gematik](https://github.com/gematik)

### Termindatenbank

Die geplante zentrale Termindatenbank soll:

- Verfügbare Arzttermine bei Spezialisten aggregieren
- Hausärzte befähigen, direkt Termine für Patienten zu buchen
- Mit dem 116117-Terminservice verknüpft werden

Technische Infrastruktur: betrieben von [[gematik]] und Selbstverwaltung, öffentlich-rechtlich verankert.

> [!interesse-technik]
> Keine formale Spezifikation verfügbar (Stand März 2026). Folgende Referenzdokumente sind relevant:
> - **IHE XDW** (Cross-Enterprise Document Workflow): Standard für Arbeitsablauf-Koordination in XDS-Umgebungen; wird in der TI für ePA-Dokumentenflüsse verwendet
> - **FHIR ServiceRequest**: Ressource für Überweisungen in HL7 FHIR R4
> - **KBV FHIR-Profile**: [simplifier.net/packages/kbv.basis](https://simplifier.net/packages/kbv.basis) (enthält bestehende Überweisungsprofile)
> Die gematik wird einen gemSpec-Release für eReferral vorlegen, wenn die GDVG-Gesetzgebung abgeschlossen ist.

> [!interesse-patient]
> Eine digitale Überweisung bedeutet: Ihr Arzt schickt die Überweisung direkt weiter, Sie müssen keinen Zettel mitnehmen. Sie können Ihre Überweisung jederzeit in der App Ihrer Krankenkasse einsehen. Falls Sie keine [[ePA]] haben, bleibt vorerst die Papierüberweisung wie bisher. Der eReferral ist noch nicht eingeführt (Stand März 2026), die Planung läuft.

> [!patientenrecht] Patientenrecht: Was eine digitale Überweisung für Sie bedeutet
> Der eReferral ist noch nicht eingeführt (Stand März 2026). Heute bekommen Sie Überweisungen noch als Zettel. Das bleibt vorerst so.
>
> **Was kommt auf Sie zu, wenn der eReferral eingeführt wird?**
> - Ihre Überweisung wird in Ihrer Patientenakte ([[ePA]]) gespeichert.
> - Sie können sie in der App Ihrer Krankenkasse einsehen.
> - Beide Praxen, die überweisende und die empfangende, haben Zugriff.
>
> **Sie haben keine ePA oder möchten keine digitale Überweisung?**
> Wenn der eReferral eingeführt wird, gilt: Wer keine ePA hat oder der ePA widerspricht, bekommt weiterhin eine Papierüberweisung. Ihr Recht auf Versorgung bleibt unberührt.
>
> **Wie Sie der ePA heute widersprechen können:**
> Rufen Sie Ihre Krankenkasse an oder nutzen Sie deren App. Sie können der ePA jederzeit ganz oder teilweise widersprechen. Sprechen Sie auch Ihren Arzt an, wenn Sie Fragen haben.

## Verknüpfungen

- [[ePA]] (geplante Plattform für den eReferral)
- [[GDVG]] (geplantes Gesetz, das den eReferral rechtlich verankern soll)
- [[KIM]] (aktuelles Medium für elektronische Arzt-zu-Arzt-Kommunikation)
- [[Telematikinfrastruktur]] (Infrastruktur für den eReferral)
- [[FHIR]] (geplantes Datenformat für eReferral-Ressourcen)
- [[KBV]] (erstellt FHIR-Profile; hat Skepsis gegenüber dem Modell geäußert)
- [[gematik]] (soll die Termindatenbank betreiben)
- [[HBA]] (Signaturmittel für den überweisenden Arzt)
- [[PVS]] (Primärsystem, das den eReferral ausstellt)

## Quellen

- [Ärzteblatt: ePA soll Dreh- und Angelpunkt des Primärversorgungssystems werden (11. Februar 2026)](https://www.aerzteblatt.de/news/elektronische-patientenakte-soll-dreh-und-angelpunkt-des-primarversorgungssystems-werden-41863b8d-749f-4a17-9678-f7dc5040008a)
- [BMG: Weiterentwicklung Digitalisierungsstrategie – Pressemitteilung (11. Februar 2026)](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/weiterentwicklung-digitalisierungsstrategie-pm-11-02-26)
- [BMG: Start des Dialogprozesses zur Primärversorgung (27. Januar 2026)](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/start-des-dialogprozesses-zur-erarbeitung-eines-primaerversorgungssystems-pm-27-01-2026)
- [gematik Fachportal: ePA für alle](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
