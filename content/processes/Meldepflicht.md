---
title: Meldepflicht
audience: [technical, non-technical]
tags: [prozesse, meldewesen, infektionsschutz, ifsg, demis, oeffentlicher-gesundheitsdienst]
aliases: [Infektionsschutz-Meldepflicht, Arztmeldepflicht, Labormeldepflicht, meldepflichtige Erkrankung]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, forschung, regulierung, it-dienstleister, hersteller]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# Meldepflicht

Die **Meldepflicht** im Infektionsschutz ist die gesetzliche Pflicht von Ärzten, Laboren und Leitungen von Einrichtungen, bestimmte Infektionskrankheiten und Erregernachweise an das zuständige [[OeGD|Gesundheitsamt]] zu melden, geregelt in §§ 6 und 7 des [[IfSG|Infektionsschutzgesetzes]].

## Erklärt für Einsteiger

Stell dir vor, ein Arzt stellt bei einem Patienten Masern fest. Das ist nicht nur ein Problem für diesen Patienten, sondern könnte viele andere Menschen in der Umgebung gefährden. Deshalb muss der Arzt das sofort dem Gesundheitsamt melden, damit schnell gehandelt werden kann: Quarantäne, Kontaktpersonen benachrichtigen, Ausbruch eindämmen. Für viele Krankheiten ist diese Meldung gesetzlich Pflicht. Seit einigen Jahren läuft das digital über das System [[DEMIS]], statt wie früher per Fax.

## Überblick

Die Infektionsschutzmeldepflicht ist das Fundament des deutschen Seuchenfrühwarnsystems. Sie verpflichtet bestimmte Personengruppen, Krankheitsfälle und Erregernachweise unverzüglich zu melden. Ziel ist die schnelle Erkennung von Ausbrüchen und die Einleitung von Gegenmaßnahmen.

### Rechtsgrundlage

Das [[IfSG|Infektionsschutzgesetz (IfSG)]] regelt die Meldepflicht im Detail:

- **§ 6 IfSG** (Arztmeldepflicht): Ärzte müssen den Verdacht, die Erkrankung und den Tod an bestimmten Krankheiten melden. Die Meldung muss namentlich und unverzüglich, spätestens innerhalb von 24 Stunden, erfolgen.
- **§ 7 IfSG** (Labormeldepflicht): Labore müssen den Nachweis von Krankheitserregern melden. Hier ist die Meldung meist erregerspezifisch, d.h. der Nachweis des Erregers löst die Pflicht aus, nicht erst die Diagnose einer Erkrankung.
- **§ 8 IfSG**: Definiert den Kreis der Meldepflichtigen (namentliche Ärzte, Leitungen von Krankenhäusern, Heimen, Gemeinschaftseinrichtungen).
- **§ 9 IfSG**: Regelt Inhalt und Form der namentlichen Meldung.
- **§§ 14, 15 IfSG**: Regeln die Übermittlung der Daten vom Gesundheitsamt an das Landesamt und das [[RKI]].

> [!frist-warnung] Frist-Warnung: 24-Stunden-Meldepflicht nach §§ 6 und 7 IfSG
> **Rechtsgrundlage:** § 6 Abs. 1 i.V.m. § 9 Abs. 1 IfSG (Arztmeldepflicht); § 7 Abs. 1 i.V.m. § 9 Abs. 2 IfSG (Labormeldepflicht)
> **Frist:** Meldungen müssen unverzüglich, spätestens innerhalb von 24 Stunden nach erlangter Kenntnis, beim zuständigen Gesundheitsamt eingehen. Für ausgewählte Erkrankungen (z.B. Pocken, hämorrhagische Fieber, Verdacht auf Bioterrorismus) gilt unverzügliche Meldung ohne Aufschub.
> **Handlungsbedarf:** Meldepflichtige Personen (Ärzte, Leitungen von Krankenhäusern, Heimen und Gemeinschaftseinrichtungen nach § 8 IfSG) müssen sicherstellen, dass ihre Praxis- oder Kliniksoftware DEMIS-Meldungen unterstützt oder das DEMIS-Webportal als Fallback genutzt wird. Faxmeldungen sind seit 1. Januar 2023 nicht mehr der primär vorgesehene Weg.
> **Bei Nichtbeachtung:** Verspätete oder unterlassene Meldungen sind nach § 73 Abs. 1 Nr. 7-10 IfSG Ordnungswidrigkeiten mit Bußgeld bis 25.000 Euro. Die persönliche Verantwortung liegt beim meldepflichtigen Arzt bzw. der Einrichtungsleitung.

### Meldepflichtige Krankheiten nach § 6 IfSG

Ärzte müssen unter anderem melden (Verdacht, Erkrankung, Tod):

- Botulismus, Cholera, Diphtherie
- Hämorrhagische Fieber (Ebola, Lassa, Marburg)
- Meningokokken-Meningitis oder -Sepsis
- Masern, Mumps, Röteln, Windpocken (Varizellen)
- Milzbrand (Anthrax), Pest, Pocken
- Poliomyelitis (Kinderlähmung)
- Tollwut, Typhus abdominalis, Paratyphus
- Tuberkulose
- COVID-19 (seit März 2020 namentlich nach § 6 Abs. 1)

> [!praxis-tipp] Praxis-Tipp: Meldepflicht im Praxisalltag
> Sie stellen eine meldepflichtige Erkrankung fest. Die Uhr läuft: Meldung innerhalb von 24 Stunden an das zuständige Gesundheitsamt. Das gilt auch für den Verdacht, nicht erst nach Laborbefund.
>
> So gehen Sie vor:
> 1. Diagnose oder begründeter Verdacht: Krankheit in der Liste nach § 6 IfSG? Dann sofort handeln.
> 2. Zuständiges Gesundheitsamt: immer das Amt des Aufenthaltsortes des Patienten, nicht des Praxissitzes.
> 3. Meldeweg: Über das DEMIS-Webportal unter demis.rki.de oder per Meldevordruck (Fax nur als Ausnahme).
> 4. Pflichtangaben: Name, Geburtsdatum, Anschrift des Patienten, Krankheitsbild, Erkrankungsbeginn, Ihre Arztdaten.
>
> Zahnarztpraxen sind nach § 6 IfSG bei Diphtherie-, Tuberkulose- oder hämorrhagischen-Fieber-Verdacht meldepflichtig. Für die meisten anderen Erkrankungen gilt die Meldepflicht nicht für Zahnärzte.
>
> Häufiger Fehler: Meldung verschoben, weil "erst der Laborbefund abgewartet wird". Bei namentlicher Meldepflicht reicht der begründete Verdacht bereits aus.

> [!interesse-compliance]
> Unterlassene oder verspätete Meldungen sind nach § 73 IfSG eine Ordnungswidrigkeit und können mit einem Bußgeld von bis zu 25.000 Euro geahndet werden. Die Meldung muss spätestens 24 Stunden nach der Diagnose beim zuständigen Gesundheitsamt eingehen. Ärzte und Laborleitungen sind persönlich verantwortlich.

### Meldepflichtige Erregernachweise nach § 7 IfSG

Labore müssen den Nachweis zahlreicher Erreger melden. Dazu gehören u.a.:

- Adenoviren (Konjunktivitis)
- Bacillus anthracis, Bordetella pertussis (Keuchhusten)
- Campylobacter, Clostridium botulinum
- Dengue-Virus, FSME-Virus
- Influenza-A/B-Viren
- MRSA (invasiv), MRGN (bestimmte Resistenzen)
- Norovirus (bei Häufungen)
- Salmonella Typhi/Paratyphi, Shigellen
- Treponema pallidum (Syphilis)
- Toxoplasma gondii (kongenital)
- West-Nil-Virus

Die vollständige Liste wird durch Rechtsverordnungen aktualisiert.

## Technische Details

### Digitale Meldung via DEMIS

Seit 2020 ist das **[[DEMIS]]-System** (Deutsches Elektronisches Melde- und Informationssystem für den Infektionsschutz) der offizielle digitale Meldekanal. [[DEMIS]] wird vom [[RKI]] betrieben und basiert auf [[FHIR]] R4.

Meldende Einrichtungen können Meldungen auf zwei Wegen einreichen:

1. **Softwareintegration**: Laborsoftware ([[LIS]]) und [[KIS]] generieren FHIR-konforme Meldungen direkt aus dem Arbeitsablauf und senden diese über eine REST-API an DEMIS.
2. **Web-Portal**: Für Einrichtungen ohne Systemintegration bietet das RKI das DEMIS-Webportal unter demis.rki.de an.

> [!praxis-tipp] Praxis-Tipp: DEMIS nutzen, bevor das PVS integriert ist
> Ihr PVS unterstützt DEMIS noch nicht direkt? Kein Problem. Sie können sofort über das DEMIS-Webportal melden.
>
> 1. Rufen Sie demis.rki.de auf. Einloggen mit Ihrem Arztausweis (HBA) oder mit Benutzername/Passwort nach Registrierung beim RKI.
> 2. Wählen Sie "Arztmeldung nach § 6 IfSG". Das Formular führt Sie durch alle Pflichtfelder.
> 3. Nach dem Absenden erhalten Sie eine Eingangsbestätigung. Speichern oder drucken Sie diese für Ihre Dokumentation.
>
> Zeitaufwand: ca. 5-10 Minuten pro Meldung über das Webportal.
>
> Fragen Sie Ihren PVS-Anbieter, ob DEMIS-Direktmeldung aus dem PVS heraus bereits unterstützt wird. Ab 1. Januar 2026 soll die PVS-Zertifizierung (KOB) DEMIS-Fähigkeit voraussetzen.

> [!dev-quickstart] Dev Quickstart: DEMIS FHIR-Meldung senden
> DEMIS nutzt die FHIR-Operation `$process-notification` per HTTP POST. Basis-URL: `https://demis.rki.de/fhir`
>
> **1. Access-Token holen (Zertifikatauthentifizierung)**
> ```bash
> curl --cert-type P12 --cert "zertifikat.p12":PASSWORT \
>   -X POST "https://auth.demis.rki.de/realms/LAB/protocol/openid-connect/token" \
>   -H "Content-Type: application/x-www-form-urlencoded" \
>   -d "grant_type=client_credentials&client_id=demis-adapter&client_secret=<secret>"
> ```
>
> **2. Meldung senden (Arztmeldung § 6 IfSG)**
> ```bash
> curl -X POST "https://demis.rki.de/fhir/\$process-notification" \
>   -H "Authorization: Bearer <access_token>" \
>   -H "Content-Type: application/fhir+json" \
>   -d @notification_disease.json
> ```
>
> **Bundle-Profil: NotificationBundleDisease (Struktur)**
> ```json
> {
>   "resourceType": "Bundle",
>   "meta": {
>     "profile": ["https://demis.rki.de/fhir/StructureDefinition/NotificationBundleDisease"]
>   },
>   "type": "document",
>   "entry": [
>     { "resource": { "resourceType": "Composition" } },
>     { "resource": { "resourceType": "Patient" } },
>     { "resource": { "resourceType": "Condition" } }
>   ]
> }
> ```
> - FHIR-Profile: [Simplifier: rki.demis.disease](https://simplifier.net/rki.demis.disease)
> - Implementierungsleitfaden: [robert-koch-institut.github.io/DEMIS_FHIR-Profile](https://robert-koch-institut.github.io/DEMIS_FHIR-Profile_Vorabveroeffentlichung/)
> - Validation Service: [gematik/DEMIS-validation-service](https://github.com/gematik/DEMIS-validation-service)
> - Testumgebung: [gematik/DEMIS-Test_Environment](https://github.com/gematik/DEMIS-Test_Environment)

> [!interesse-technik]
> DEMIS-FHIR-API: HTTPS REST, Basis-URL https://demis.rki.de. FHIR-Profile: auf Simplifier.net unter "Robert Koch-Institut / DEMIS" (https://simplifier.net/organization/robert-koch-institut). Authentifizierung: Zertifikat, ausgestellt durch eine von RKI akkreditierte Zertifizierungsstelle. FHIR-Ressourcentypen: Bundle, Composition, Patient (pseudonymisiert), Condition (gemeldete Erkrankung), Observation (Laborbefund), DiagnosticReport. Jede Meldeform hat ein eigenes FHIR-Profil-Set, z.B. `NotificationBundleDisease` für Arztmeldungen.

### Meldekette: Von der Diagnose bis zum RKI

```
Arzt / Labor
    ↓ § 6/7 IfSG (24h-Frist, namentlich, an Gesundheitsamt)
Gesundheitsamt (Landkreis/kreisfreie Stadt)
    ↓ § 14 IfSG (anonymisiert, an Landesbehörde)
Landesgesundheitsamt / Landesbehörde
    ↓ § 15 IfSG (aggregiert, an RKI)
Robert Koch-Institut (RKI)
    ↓ EU-Ebene
ECDC / WHO
```

### Labormeldepflicht und Primärsystemintegration

Labore sind nach § 7 IfSG oft doppelt belastet: Sie müssen sowohl Arzt/Krankenhaus als auch das Gesundheitsamt informieren. Mit DEMIS erfolgt die Meldung direkt aus dem [[LIS]] (Labor-Informationssystem) heraus. Das spart Fax und manuelle Dateneingabe.

Für [[KIS]]-Hersteller ist die DEMIS-Anbindung ein Pflichtbestandteil der [[ISiK]]-Spezifikation: ISiK Stufe 2 schreibt vor, dass Krankenhaussysteme DEMIS-Meldungen unterstützen müssen.

> [!klinik-integration] Klinik-Integration: DEMIS-Meldepflicht im Krankenhaus-Workflow
> **Meldepflichtige:** Nach § 8 IfSG ist bei stationären Einrichtungen die Leitung des Krankenhauses meldepflichtig. In der Praxis obliegt die Meldung dem behandelnden Arzt, der Hygieneabteilung oder dem Klinikhygieniker. Klären Sie Zuständigkeiten intern schriftlich.
> **KIS-Integration:** ISiK Stufe 2 verpflichtet KIS-Hersteller zur DEMIS-Anbindung. Prüfen Sie, ob Ihr KIS (Oracle Health i.s.h.med, Dedalus ORBIS, Meierhofer M-KIS) DEMIS-Meldungen bereits direkt aus dem Workflow heraus generieren kann. Die Meldung erfolgt als FHIR R4 Bundle POST an `https://demis.rki.de/fhir` mit RKI-akkreditiertem Zertifikat.
> **Labor-Schnittstelle:** Wenn das hauseigene Labor (LIS) eigenständig nach § 7 IfSG meldet, klären Sie mit dem LIS-Betreiber, ob das Krankenhaus eine Kopie der Meldung erhält. Doppelmeldungen sind durch DEMIS technisch erkennbar, aber nicht automatisch verhindert.
> **24-Stunden-Frist:** Diagnostik im Krankenhaus läuft oft außerhalb der Geschäftszeiten. Stellen Sie sicher, dass die DEMIS-Meldung auch nachts und am Wochenende möglich ist, z.B. über das DEMIS-Webportal als Fallback wenn die KIS-Integration außer Betrieb ist.

> [!frist-warnung] Frist-Warnung: DEMIS-Stammdaten-Pflicht für Labore ab April 2026
> **Rechtsgrundlage:** § 7 IfSG i.V.m. den technischen Anforderungen der DEMIS-Betreiberrichtlinien des RKI
> **Frist:** Ab April 2026 akzeptiert DEMIS ausschließlich Meldungen von Laboren mit korrekt gepflegten Stammdaten (u.a. aktualisierte Schlüssellisten für meldepflichtige Erreger). Labore ohne aktualisierte Stammdaten erhalten ab diesem Zeitpunkt Fehlerstatus für eingereichte Meldungen, die dann nicht als rechtswirksam gelten.
> **Handlungsbedarf:** Labore sind verpflichtet, ihre DEMIS-Stammdaten (insbesondere Erreger-Codelisten) vor April 2026 zu aktualisieren. LIS-Hersteller müssen die aktualisierten DEMIS-Profile aus dem Simplifier.net-Repository des RKI einspielen und testen.
> **Bei Nichtbeachtung:** Meldungen mit veraltetem Stammdaten-Stand landen im Fehlerstatus und gelten nicht als erfolgreiche Meldung nach § 7 IfSG. Das Ordnungswidrigkeitsrisiko nach § 73 IfSG bleibt bestehen, da die Meldepflicht nicht erfüllt ist.

### Namentliche vs. anonyme Meldung

§ 9 IfSG unterscheidet:

- **Namentliche Meldung**: Name, Geburtsdatum, Adresse der betroffenen Person, Name des meldenden Arztes, Krankheitsbild. An das Gesundheitsamt.
- **Anonymisierte Übermittlung**: Vom Gesundheitsamt an Landesbehörde und RKI nur ohne Personenbezug, aber mit Informationen zu Alter, Geschlecht, Erkrankungsbeginn, Kreis.

Der Personenbezug bleibt beim Gesundheitsamt. Das RKI erhält keine direkt personenidentifizierenden Daten.

> [!patientenrecht] Patientenrecht: Was passiert mit meinen Daten bei einer Meldung?
> Wenn Ihr Arzt eine meldepflichtige Krankheit diagnostiziert, wird Ihr Name an das Gesundheitsamt gemeldet. Das ist gesetzlich vorgeschrieben (§ 9 IfSG). Ein Widerspruch ist nicht möglich, weil der Schutz anderer Menschen Vorrang hat.
>
> **Was Sie wissen sollten:**
> - Ihre persönlichen Daten (Name, Adresse) bleiben beim Gesundheitsamt. Nur anonymisierte Daten gehen weiter an das Robert Koch-Institut (RKI).
> - Das RKI sieht nie Ihren Namen. Es erhält nur allgemeine Angaben wie Alter, Geschlecht und Wohnkreis.
> - Das Gesundheitsamt ist an das Datenschutzrecht gebunden. Ihre Daten dürfen nur für den Infektionsschutz genutzt werden.
>
> **Sie haben das Recht:** Sie können beim zuständigen Gesundheitsamt nachfragen, welche Daten dort über Sie gespeichert sind (Auskunftsrecht nach Art. 15 DSGVO).

### Ausbruchserkennung

Bei Häufungen von Meldungen desselben Erregers oder derselben Erkrankung aktivieren Gesundheitsämter Ausbruchsermittlungen. DEMIS unterstützt diesen Prozess durch:

- Automatische Clusterbildung auf Basis von Ort, Zeit und Erreger
- Benachrichtigung der zuständigen Behörde bei Überschreitung von Schwellenwerten
- Strukturierte Datensätze für epidemiologische Auswertungen

## Verknüpfungen

- [[DEMIS]] (digitales Meldesystem des RKI für Infektionsschutzmeldungen)
- [[IfSG]] (Infektionsschutzgesetz: Rechtsgrundlage der Meldepflicht)
- [[RKI]] (Robert Koch-Institut: Betreiber von DEMIS und Empfänger aggregierter Meldedaten)
- [[OeGD]] (Öffentlicher Gesundheitsdienst: Gesundheitsämter als erste Meldestelle)
- [[FHIR]] (technische Basis der DEMIS-Meldungen)
- [[LIS]] (Labor-Informationssystem, generiert Labormeldungen nach § 7 IfSG)
- [[KIS]] (Krankenhausinformationssystem, übermittelt Arztmeldungen nach § 6 IfSG)
- [[ISiK]] (ISiK Stufe 2 schreibt DEMIS-Anbindung für KIS vor)

## Quellen

- [Infektionsschutzgesetz (IfSG) §§ 6-9: gesetze-im-internet.de](https://www.gesetze-im-internet.de/ifsg/__6.html)
- [RKI: DEMIS – Deutsches Elektronisches Melde- und Informationssystem](https://www.rki.de/DE/Content/Infekt/IfSG/DEMIS/DEMIS_inhalt.html)
- [RKI: Meldepflichtige Krankheiten und Erregernachweise](https://www.rki.de/DE/Content/Infekt/IfSG/Meldepflichtige_Krankheiten/Meldepflichtige_Krankheiten_node.html)
- [DEMIS FHIR-Profile auf Simplifier.net](https://simplifier.net/organization/robert-koch-institut)
