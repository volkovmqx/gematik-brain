---
title: Heilmittelverordnung
audience: [technical, non-technical]
tags: [prozesse, heilmittel, verordnung, physiotherapie, e-rezept, evo]
aliases: [Heilmittelverordnung, Muster 13, Heilmittelrezept, elektronische Heilmittelverordnung]
relevance:
  sectors: [arztpraxis, therapie, krankenhaus, kasse, hersteller, regulierung]
  interests: [compliance, business, patient]
maturity: setzling
---

# Heilmittelverordnung

Die **Heilmittelverordnung** ist die ärztliche Verordnung von Therapieleistungen wie Physiotherapie, Ergotherapie, Logopädie und Podologie für GKV-Versicherte. Ihre Digitalisierung als elektronische Heilmittelverordnung ([[eVO]]) ist ab 2027 für Ärzte verpflichtend.

## Erklärt für Einsteiger

Wenn dein Arzt nach einem Bandscheibenvorfall Physiotherapie verordnet, schreibt er dir ein Rezept für die Therapeutin: das grüne Muster-13-Formular. Du nimmst es mit, gibst es beim Physiotherapeuten ab, und dieser kann die Behandlung bei der Krankenkasse abrechnen. Ab 2027 soll das nicht mehr auf Papier, sondern digital über das sichere Gesundheitsnetz laufen, ähnlich wie das [[E-Rezept]] für Medikamente.

> [!patientenrecht] Patientenrecht: Zuzahlung und Befreiung
> Wenn Ihr Arzt Ihnen Physiotherapie, Ergotherapie oder ähnliche Therapien verordnet, müssen Sie einen Teil der Kosten selbst zahlen. Das nennt sich Zuzahlung.
>
> **Was müssen Sie zahlen?**
> Sie zahlen 10 Euro pro Rezept plus 10 % der Behandlungskosten. Das gilt ab 18 Jahren.
>
> **Was kann ich tun, wenn ich mir das nicht leisten kann?**
> Sie können sich von der Zuzahlung befreien lassen. Das geht, sobald Ihre Zuzahlungen in einem Jahr eine bestimmte Grenze erreicht haben.
>
> So beantragen Sie die Befreiung:
> 1. Sammeln Sie alle Quittungen Ihrer Zuzahlungen
> 2. Rufen Sie Ihre Krankenkasse an oder loggen Sie sich in die App Ihrer Kasse ein
> 3. Beantragen Sie die Zuzahlungsbefreiung für den Rest des Jahres
>
> **Wann greift die Grenze?** Bei 2 % Ihres Jahres-Bruttoeinkommens. Für chronisch Kranke bei 1 %. Das sind 2026 zum Beispiel 135,12 Euro (oder 67,56 Euro für chronisch Kranke).
>
> **Wichtig:** Die Befreiung gilt nicht automatisch. Sie müssen sie selbst beantragen.

## Überblick

Heilmittelverordnungen sind Verordnungen für therapeutische Leistungen, die keine Arzneimittel sind. Die gesetzliche Grundlage ist der [[Bundesmantelvertrag]] (BMV-Ä) in Verbindung mit den Heilmittel-Richtlinien des [[G-BA]] (Gemeinsamer Bundesausschuss). Der G-BA legt fest, welche Heilmittel bei welchen Diagnosen verordnet werden dürfen und in welcher Menge.

### Betroffene Berufsgruppen

Die Heilmittelverordnung gilt für folgende Therapieberufe:

- **Physiotherapie** (Krankengymnastik, Massagen, Elektrotherapie)
- **Ergotherapie** (Behandlung motorischer, sensorischer und kognitiver Störungen)
- **Logopädie** (Sprach-, Sprech-, Stimm- und Schlucktherapie)
- **Podologie** (medizinische Fußpflege bei Diabetikern und anderen Indikationen)

Zusammen sind das ca. 160.000 Therapeutinnen und Therapeuten in Deutschland, die Leistungen für GKV-Versicherte erbringen.

### Digitalisierung als eVO

Die elektronische Heilmittelverordnung ([[eVO]]) ist die digitale Form der Heilmittelverordnung über die [[Telematikinfrastruktur]]. Sie soll das papierbasierte Muster-13-Formular ersetzen. Das Konzept ähnelt dem [[E-Rezept]] für Arzneimittel, erfordert aber eigene FHIR-Profile und Prozesse, da Heilmittel andere Regelungen als Arzneimittel haben.

> [!frist-warnung] Frist-Warnung: Pflicht zur eVO-Ausstellung für Vertragsärzte
> **Rechtsgrundlage:** § 73 Abs. 2 Satz 1 Nr. 7 SGB V i.V.m. § 360 Abs. 1 SGB V (eingefügt durch das Gesetz zur Beschleunigung der Digitalisierung des Gesundheitswesens, DigiG, BGBl. I 2024 Nr. 67)
> **Frist:** Ab **1. Januar 2027** sind Vertragsärzte verpflichtet, Heilmittelverordnungen ausschließlich als elektronische Heilmittelverordnung ([[eVO]]) über die [[Telematikinfrastruktur]] auszustellen. Das papierbasierte Muster-13-Formular verliert für GKV-Verordnungen seine Zulässigkeit.
> **Handlungsbedarf:** Arztpraxen müssen bis Ende 2026 sicherstellen, dass ihr [[PVS]] die eVO-Funktion unterstützt (KBV-Zertifizierung und gematik-KOB erforderlich), ein [[HBA]] G2.1 für die [[QES]] vorliegt und das Praxispersonal den neuen Workflow kennt.
> **Bei Nichtbeachtung:** Papierbasierte Heilmittelverordnungen können ab 1. Januar 2027 von Heilmittelerbringern nicht mehr gegenüber der GKV abgerechnet werden. Abrechnungsfähige Leistungen entfallen, bis eine ordnungsgemäße eVO ausgestellt wird.

> [!interesse-compliance]
> Zeitplan für die digitale Heilmittelverordnung:
> - **1. Januar 2027**: Ärzte müssen Heilmittelverordnungen verpflichtend als [[eVO]] über die TI ausstellen.
> - **1. Oktober 2027**: Heilmittelerbringer (Physiotherapeuten, Ergotherapeuten, Logopäden, Podologen) müssen an die TI angebunden sein und können nur noch elektronische Verordnungen abrechnen.
> - **2028**: Vollständige Pflichteinführung für alle Beteiligten.
> Die ursprüngliche TI-Anbindungspflicht für Heilmittelerbringer (1. Januar 2026) wurde auf 1. Oktober 2027 verschoben.
> [!klinik-integration] Klinik-Integration: Heilmittelverordnung im Entlassmanagement
> **Krankenhäuser dürfen Heilmittel verordnen:** Im Rahmen des [[Entlassmanagement|Entlassmanagements]] (§ 39 Abs. 1a SGB V) kann das Krankenhaus Heilmittelverordnungen für bis zu **7 Tage** nach Entlassung ausstellen. Behandlungsbeginn beim Therapeuten muss innerhalb von 7 Tagen, Behandlungsabschluss innerhalb von 12 Tagen nach Entlassung erfolgen. Diese Regelung gilt für Physiotherapie, Ergotherapie und Logopädie.
>
> **Ab 2027 als eVO:** Ab 1. Januar 2027 müssen auch Krankenhäuser Heilmittelverordnungen im Entlassmanagement als elektronische Heilmittelverordnung (eVO) ausstellen. Das KIS muss dafür die eVO-Funktion unterstützen. Klären Sie mit Ihrem KIS-Hersteller, ob das Entlassmanagement-Modul die eVO-Ausstellung bis Ende 2026 unterstützt.
>
> **Workflow:** Der Entlassarzt benötigt einen HBA G2.1 für die QES. Das KIS muss den eVO-Ausstellungsprozess in den Entlass-Workflow integrieren und sicherstellen, dass Diagnose (ICD-10-GM) und Heilmittelbezeichnung nach G-BA-Katalog korrekt befüllt werden.


## Technische Details

> [!praxis-tipp] Praxis-Tipp: Jetzt auf eVO vorbereiten
> Arztpraxen müssen ab **1. Januar 2027** Heilmittelverordnungen elektronisch ausstellen. Das bedeutet für Sie:
>
> 1. Prüfen Sie, ob Ihr PVS die eVO unterstützt. Fragen Sie Ihren Anbieter nach dem geplanten Update-Termin.
> 2. Stellen Sie sicher, dass Ihr HBA G2.1 ist (ECC-fähig). Ohne gültige QES-Karte können Sie keine eVO ausstellen.
> 3. Informieren Sie die Therapeuten, mit denen Sie regelmäßig zusammenarbeiten: Auch sie müssen bis **1. Oktober 2027** an die TI angebunden sein.
> 4. Häufiger Fehler: ICD-10-Code oder Diagnosegruppe auf der Verordnung unvollständig. Die eVO prüft diese Felder automatisch, Fehler fallen sofort auf.
>
> In Ihrer Praxis bedeutet das: papierlose Abgabe, schnellere Abrechnung beim Therapeuten, weniger Rückfragen wegen unleserlicher Formulare.

### Das bisherige Papierverfahren (Muster 13)

Das heutige Verfahren ist papierbasiert und medienbruchbehaftet:

1. Arzt füllt Muster-13-Formular aus (handschriftlich oder per PVS-Ausdruck)
2. Patient nimmt das Formular mit und gibt es beim Therapeuten ab
3. Therapeut erbringt die Leistung und heftet das Formular ab
4. Therapeut schickt Formular per Post oder Scan an das Apothekenrechenzentrum
5. Abrechnung gegenüber der Krankenkasse

Häufige Probleme: unleserliche Handschriften, fehlerhafte Diagnose-ICD-Codes, verlorene Formulare, verzögerte Abrechnung.

### Die elektronische Heilmittelverordnung (eVO)

Die [[eVO]] überträgt den Verordnungsprozess in die [[Telematikinfrastruktur]]:

1. Arzt erstellt elektronische Verordnung im [[PVS]] (FHIR-Ressource nach [[KBV]]-Profil)
2. Verordnung wird auf dem [[E-Rezept]]-Fachdienst gespeichert oder direkt übermittelt
3. Therapeut ruft Verordnung über sein Therapeuten-Primärsystem ab
4. Nach Erbringung der Leistung: Quittierung und elektronische Abrechnung

Die gematik betonte in einer Mitteilung vom März 2026, die eVO solle mehr sein als ein digitalisiertes Formular: Sie soll Verordnungsänderungen flexibler und Kommunikation zwischen Arzt und Therapeut einfacher machen.
> [!klinik-integration] Klinik-Integration: eVO-Ausstellung im KIS
> **KIS-Anforderungen für eVO:** Das KIS muss für die eVO-Ausstellung ab Januar 2027 folgende Voraussetzungen erfüllen: gematik-KOB für das eVO-Modul, KBV-FHIR-Profil für Heilmittelverordnungen (KBV_PR_EVO_Verordnung), QES-Signaturworkflow für den HBA G2.1 des ausstellenden Arztes und Anbindung an den E-Rezept-Fachdienst der gematik.
>
> **HL7-Kontext:** Im stationären Bereich ist die Heilmittelverordnung häufig mit dem Entlassbrief (HL7 CDA oder FHIR Composition) verknüpft. Prüfen Sie, ob Ihr KIS die eVO als Teil des Entlassdokuments oder als separaten Vorgang auf dem E-Rezept-Fachdienst abbildet. Beides ist technisch möglich, hat aber unterschiedliche Auswirkungen auf den Therapeuten-Workflow.
>
> **ISiK-Medikation als Orientierung:** Krankenhäuser, die den ISiK-Standard für Medikation bereits implementiert haben, haben eine gute Basis für die eVO-Integration. Die eVO nutzt ähnliche FHIR-Muster (ServiceRequest statt MedicationRequest), ist aber über den E-Rezept-Fachdienst geleitet und nicht über interne KIS-Schnittstellen.


### FHIR-Profile und Spezifikation

Die [[KBV]] entwickelt eigene [[FHIR]]-Profile für Heilmittelverordnungen. Diese basieren auf den bestehenden KBV-FHIR-Profilen für das E-Rezept, enthalten aber heilmittelspezifische Felder:

- Heilmittelbezeichnung (nach Heilmittelkatalog des G-BA)
- Diagnosegruppe nach G-BA-Heilmittelrichtlinie
- Verordnungsmenge und -frequenz
- Behandlungsdiagnose ([[ICD-10-GM]])
- Dringlich- oder Langfristverordnungskennzeichen

### Abgrenzung zu anderen Verordnungsformen

| Verordnungsform | Gegenstand | Status Digital |
|---|---|---|
| [[E-Rezept]] (Muster 16) | Verschreibungspflichtige Arzneimittel | Pflicht seit Jan. 2024 |
| [[eVO]] (Muster 13) | Heilmittel (Physio, Ergo, Logo, Podo) | Pflicht ab Jan. 2027 |
| [[BTM-Rezept]] (gelb) | Betäubungsmittel | Pilot Q4/2026 geplant |
| Hilfsmittelverordnung (Muster 15) | Prothesen, Orthesen, Rollstühle | E-Rezept-Pflicht ab Jul. 2027 |

### TI-Anbindung für Heilmittelerbringer

> [!praxis-tipp] Praxis-Tipp: Therapeuten-Praxen auf TI-Anbindung hinweisen
> Wenn Sie als Arztpraxis regelmäßig Heilmittel verordnen, sollten Ihre Kooperationspartner (Physiotherapeuten, Ergotherapeuten, Logopäden) wissen, was auf sie zukommt.
>
> Was Therapeuten bis **1. Oktober 2027** brauchen:
> - SMC-B (Institutionskarte): Beantragung über den zuständigen Kartenherausgeber, Vorlaufzeit ca. 6 bis 8 Wochen
> - TI-fähige Praxisverwaltungssoftware: Physio- und Ergo-Softwareanbieter planen 2026/2027 entsprechende Updates
> - TI-Anschluss: Konnektor oder TI-Gateway
>
> Empfehlung: Sprechen Sie Ihre Therapeuten-Netzwerke bereits 2026 an. Wer zu spät startet, kann elektronische eVO ab Januar 2027 noch nicht empfangen.

Ab 1. Oktober 2027 brauchen Physiotherapeuten, Ergotherapeuten, Logopäden und Podologen einen TI-Zugang. Sie benötigen dafür:

- Eine [[SMC-B]] (Institutionsskarte für die Einrichtung)
- Ggf. einen [[HBA]] (Heilberufsausweis, für Heilmittelerbringer mit eigenem Kammerrecht)
- Eine TI-fähige Praxisverwaltungssoftware
- Anschluss über Konnektor oder [[TI-Gateway]]

> [!frist-warnung] Frist-Warnung: TI-Anbindungspflicht Heilmittelerbringer
> **Rechtsgrundlage:** § 360 Abs. 2 SGB V i.d.F. des Pflegekompetenzgesetzes (PflKompG, BGBl. I 2025); ursprüngliche Frist aus § 360 Abs. 2 SGB V a.F. (1. Januar 2026) wurde auf 1. Oktober 2027 verlängert
> **Frist:** Ab **1. Oktober 2027** müssen alle Heilmittelerbringer (Physiotherapeuten, Ergotherapeuten, Logopäden, Podologen) an die [[Telematikinfrastruktur]] angebunden sein. Ab diesem Datum können nur noch elektronische Heilmittelverordnungen ([[eVO]]) gegenüber der GKV abgerechnet werden.
> **Handlungsbedarf:** Heilmittelerbringer müssen bis Oktober 2027 eine [[SMC-B]] bei einem zugelassenen Trust Service Provider beantragen (Vorlaufzeit 6 bis 8 Wochen), eine TI-fähige Therapiesoftware beschaffen und den TI-Anschluss (Konnektor oder [[TI-Gateway]]) einrichten. Die Finanzierung erfolgt über Vergütungszuschläge nach § 302 SGB V (Abrechnungsvereinbarungen mit den Krankenkassen).
> **Bei Nichtbeachtung:** Ohne TI-Anbindung können ab 1. Oktober 2027 keine eVO-basierten Leistungen gegenüber der GKV abgerechnet werden. Papierbasierte Muster-13-Formulare werden von den Krankenkassen ab diesem Datum nicht mehr als Abrechnungsgrundlage akzeptiert.

> [!interesse-patient]
> Als Patient haben Sie das Recht auf eine Heilmittelverordnung, wenn die medizinische Notwendigkeit besteht. Ab 2027 können Sie Ihre Heilmittelverordnung auch digital einsehen. Wenn Sie eine ePA haben, kann die Verordnung dort hinterlegt werden. Ihr Recht auf Physiotherapie, Ergotherapie oder Logopädie ändert sich durch die Digitalisierung nicht.

> [!patientenrecht] Patientenrecht: Was ändert sich für mich ab 2027?
> Ab Januar 2027 stellt Ihr Arzt das Rezept für Physiotherapie und andere Therapien digital aus. Das Papierrezept (das grüne Formular) entfällt dann.
>
> **Was bedeutet das für Sie?**
> - Sie müssen das Rezept nicht mehr selbst zum Therapeuten bringen. Es wird direkt digital weitergeleitet.
> - Wenn Sie eine elektronische Patientenakte ([[ePA]]) haben, kann Ihre Verordnung dort gespeichert werden. So haben Sie alles auf einen Blick.
>
> **Ihr Recht bleibt gleich:** Die Digitalisierung ändert nichts an Ihrem Anspruch auf Therapie. Sie haben weiterhin das Recht auf alle verordneten Behandlungen.
>
> **Möchten Sie Ihre Verordnung einsehen?** Schauen Sie in die App Ihrer Krankenkasse. Dort können Sie ab 2027 Ihre Heilmittelverordnungen digital abrufen.

## Verknüpfungen

- [[eVO]] (elektronische Heilmittelverordnung: die digitale Form der Heilmittelverordnung)
- [[E-Rezept]] (Vorbild und verwandtes Verfahren für Arzneimittelverordnungen)
- [[G-BA]] (gibt Heilmittel-Richtlinien heraus, die die Verordnung regeln)
- [[KBV]] (entwickelt FHIR-Profile für Heilmittelverordnungen)
- [[PVS]] (Arzt stellt Verordnung im PVS aus)
- [[Telematikinfrastruktur]] (Infrastruktur für die elektronische Übermittlung)
- [[FHIR]] (Datenformat für die eVO)
- [[ICD-10-GM]] (Diagnoseklassifikation, die auf der Verordnung angegeben wird)
- [[BTM-Rezept]] (weiteres Sonderrezept mit eigenem Digitalisierungspfad)
- [[Bundesmantelvertrag]] (regelt die Abrechnungsbedingungen für Heilmittel)

## Quellen

- [gematik Fachportal: E-Rezept – Anwendungen (inkl. Heilmittelverordnung in Vorbereitung)](https://fachportal.gematik.de/anwendungen/e-rezept)
- [up-aktuell.de: gematik – eVO soll mehr als ein digitalisiertes Formular werden (März 2026)](https://www.up-aktuell.de/aktuell/2026/03/gematik-evo-soll-mehr-als-ein-digitalisiertes-formular-werden.html)
- [G-BA: Heilmittel-Richtlinie](https://www.g-ba.de/richtlinien/12/)
- [KBV: Heilmittel in der vertragsärztlichen Versorgung](https://www.kbv.de/html/heilmittel.php)
