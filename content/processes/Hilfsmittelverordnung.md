---
title: Hilfsmittelverordnung
audience: [technical, non-technical]
tags: [prozesse, hilfsmittel, e-rezept, verordnung, digitalisierung]
aliases: [Hilfsmittelverordnung, elektronische Hilfsmittelverordnung, eHV]
relevance:
  sectors: [arztpraxis, krankenhaus, pflege, therapie, hersteller, it-dienstleister, kasse, patient]
  interests: [compliance, technik]
maturity: wachsend
---

# Hilfsmittelverordnung

Die **Hilfsmittelverordnung** ist die ärztliche Verordnung medizinischer Hilfsmittel (Orthesen, Rollstühle, Hörgeräte, Bandagen usw.) für GKV-Versicherte, die ab dem **1. Juli 2027** verpflichtend als [[E-Rezept|elektronisches Rezept (E-Rezept)]] ausgestellt werden muss.

## Erklärt für Einsteiger

Wenn ein Arzt einem Patienten eine Knieorthese oder einen Rollstuhl verschreibt, ist das eine Hilfsmittelverordnung. Bisher war das immer ein Papiervordruck (Muster 16), den der Patient in ein Sanitätshaus oder einen Hilfsmittellieferanten bringen musste. Ab Juli 2027 wird diese Verordnung digital ausgestellt: Als E-Rezept auf der Gesundheitskarte oder in der App, genau wie schon heute das Rezept für Medikamente.

## Überblick

Hilfsmittel sind technische und sächliche Mittel, die dazu dienen, körperliche Behinderungen oder Beeinträchtigungen auszugleichen oder zu lindern. Der Anspruch GKV-Versicherter auf Hilfsmittel ist in § 33 [[SGB-V]] geregelt. Beispiele für Hilfsmittel:

- Orthopädische Hilfsmittel (Orthesen, Prothesen, orthopädische Schuhe)
- Mobilitätshilfsmittel (Rollstühle, Gehhilfen, Rollatoren)
- Hörgeräte und Sehbehelfe
- Inkontinenzversorgung
- Verbandsmaterial und Wundversorgung
- Kompressionsstrümpfe
- Diabetikerversorgung

Die Verordnung erfolgt bisher auf dem Papierformular **Muster 16** durch Vertragsärzte. Hilfsmittellieferanten (Sanitätshäuser, Optiker, Hörgeräteakustiker) rechnen die Leistungen mit den Krankenkassen ab.

### Zeitplan der Einführung

| Datum | Meilenstein |
|---|---|
| bis 01.01.2026 | Pflicht zur TI-Anbindung für Hilfsmittellieferanten |
| 01.07.2027 | [[E-Rezept]]-Pflicht für alle GKV-Hilfsmittelverordnungen |

Die E-Rezept-Pflicht für Arzneimittel gilt bereits seit dem 1. Januar 2024 (§ 360 [[SGB-V]]). Für Hilfsmittel wurde bewusst ein späterer Zeitpunkt gewählt, um die komplexeren Versorgungsprozesse in diesem Bereich vorzubereiten.

> [!frist-warnung] Frist-Warnung: TI-Anbindungspflicht Hilfsmittellieferanten ab 1. Januar 2026
> **Rechtsgrundlage:** § 360 Abs. 5 SGB V i.d.F. des Digitalgesetzes (DigiG) vom 22. März 2024 (BGBl. I Nr. 101)
> **Frist:** Seit 1. Januar 2026 müssen alle Hilfsmittellieferanten (Sanitätshäuser, Orthopädietechnik-Betriebe, Optiker, Hörgeräteakustiker) an die Telematikinfrastruktur angebunden sein.
> **Handlungsbedarf:** Nicht angebundene Leistungserbringer müssen unverzüglich einen TI-Anbindungsvertrag mit einem zugelassenen Dienstleister abschließen und die erforderlichen Komponenten (Konnektor oder TI-Gateway, SMC-B) beschaffen sowie aktivieren.
> **Bei Nichtbeachtung:** Ab 1. Juli 2027 können Hilfsmittelverordnungen ausschließlich als E-Rezept entgegengenommen werden. Ohne TI-Anbindung ist die Abrechnung von GKV-Leistungen gefährdet.

> [!interesse-compliance]
> Ab dem **1. Januar 2026** müssen alle Hilfsmittellieferanten (Sanitätshäuser, Hilfsmittelerbringer) an die [[Telematikinfrastruktur]] angebunden sein. Ab dem **1. Juli 2027** ist die elektronische Hilfsmittelverordnung (eHV) für alle neuen Verordnungen Pflicht. Vertragsärzte müssen bis dahin ihre PVS-Systeme auf die Ausstellung von Hilfsmittel-E-Rezepten vorbereiten. Übergangslösungen für bereits laufende Verordnungen werden noch konkretisiert.

> [!praxis-tipp] Praxis-Tipp: Vorbereitung auf die Hilfsmittel-E-Verordnung ab Juli 2027
> In Ihrer Praxis bedeutet das: Ab dem 1. Juli 2027 dürfen Hilfsmittelverordnungen nicht mehr auf Papier (Muster 16) ausgestellt werden.
>
> Was Sie jetzt tun sollten:
> 1. Fragen Sie Ihren PVS-Anbieter, ob das Hilfsmittel-E-Rezept bereits unterstützt wird. Große Anbieter wie CGM und Medisoftware planen Updates bis 2027.
> 2. Stellen Sie sicher, dass Ihr [[HBA]] aktiv und nicht abgelaufen ist. Ohne aktiven HBA können Sie keine E-Rezepte signieren.
> 3. Weisen Sie Ihr Praxisteam frühzeitig ein. Der Workflow unterscheidet sich vom Arzneimittel-E-Rezept: Bei vielen Hilfsmitteln ist eine Krankenkassengenehmigung vorgeschaltet.
>
> Häufiger Fehler: Das Sanitätshaus Ihrer Patienten ist noch nicht TI-angebunden. Fragen Sie die häufig genutzten Lieferanten, ob sie ab 2026 TI-ready sind.

> [!klinik-integration] Klinik-Integration: Hilfsmittelverordnung im Entlassmanagement
> Im Krankenhaus entstehen Hilfsmittelverordnungen typischerweise bei der Entlassung: Stationsarzt oder Entlassmanager verordnet Rollstuhl, Orthese oder Inkontinenzversorgung für die Weiterversorgung zu Hause.
>
> **KIS-Workflow Entlassung:** Der verordnende Arzt erstellt die Hilfsmittelverordnung im KIS (SAP ISH, Orbis, iMedOne), signiert sie mit dem [[HBA]] (qualifizierte elektronische Signatur) und überträgt sie an den E-Rezept-Fachdienst. Das KIS muss dafür eine aktive Konnektor-Anbindung und die E-Rezept-Funktion für Hilfsmittel unterstützen.
> **Besonderheit stationär:** Im Krankenhaus gilt das Entlassmanagement nach § 39 Abs. 1a SGB V. Hilfsmittelverordnungen bei Entlassung können auch von Krankenhausärzten ausgestellt werden, nicht nur von niedergelassenen Vertragsärzten. Prüfen Sie, ob Ihr KIS-Hersteller dies im E-Rezept-Modul abbildet.
> **Zeitplan:** KIS-Hersteller müssen die FHIR-Profile der KBV für Hilfsmittel-E-Rezepte bis zum 01.07.2027 implementiert haben. Klären Sie den Umsetzungstermin frühzeitig mit Ihrem Hersteller.

### Pilotprojekte

Mehrere Pilotprojekte zur elektronischen Hilfsmittelverordnung wurden ab 2023 gestartet. Beteiligt sind unter anderem die AOK Bayern, BARMER, BIG direkt gesund und DAK-Gesundheit. Die Piloten testen den gesamten Prozess von der ärztlichen Verordnung bis zur Abgabe beim Hilfsmittellieferanten und der Abrechnung mit der Krankenkasse. Ergebnisse aus den Piloten fließen in die technische Spezifikation für den Pflichtstart 2027 ein.

## Technische Details

### Unterschiede zum Arznei-E-Rezept

Die elektronische Hilfsmittelverordnung unterscheidet sich in mehreren Aspekten vom E-Rezept für Arzneimittel:

**Komplexerer Versorgungsprozess**: Bei Hilfsmitteln ist oft eine individuelle Anpassung notwendig (z.B. maßgefertigte Orthesen). Der Verordnungsprozess umfasst Voranfragen an Krankenkassen, Kostenvoranschläge und Genehmigungsverfahren, die beim Arzneimittel-E-Rezept entfallen.

**Mehr Akteure**: Neben Arzt, Patient und Krankenkasse sind Hilfsmittellieferanten, teilweise Sanitätshäuser und Krankenkassen-Außendienst beteiligt.

**Genehmigungspflicht**: Viele Hilfsmittel erfordern eine Vorabgenehmigung durch die Krankenkasse, bevor sie abgegeben werden dürfen. Die elektronische Verordnung muss diesen Genehmigungsworkflow abbilden.

> [!klinik-integration] Klinik-Integration: FHIR-Schnittstelle und Genehmigungsworkflow im KIS
> Die elektronische Hilfsmittelverordnung nutzt denselben E-Rezept-Fachdienst wie das Arzneimittel-E-Rezept, aber eigene FHIR-Profile der KBV (KBV_PR_ERP_Prescription mit Hilfsmittel-Erweiterung).
>
> **HL7/FHIR-Details:** Verordnung als FHIR Bundle, signiert per QES des verordnenden Arztes (HBA). Übertragung via REST-API an den E-Rezept-Fachdienst (gem. gemSpec_DM_eRp). Das KIS muss den Zugriff auf den Fachdienst über den Konnektor (TI-Verbindung) abwickeln.
> **Genehmigungsprozess:** Viele Hilfsmittel (z.B. Rollstühle, aufwendige Orthesen) erfordern eine Krankenkassen-Vorabgenehmigung. Das KIS sollte idealerweise den Status der Genehmigungsanfrage nachhalten. Prüfen Sie, ob Ihr KIS-Hersteller diesen Workflow für das Entlassmanagement abbildet.
> **Notaufnahme und Akutsituationen:** In dringenden Fällen kann die Hilfsmittelversorgung wie bisher über Papier-Übergangsregelungen erfolgen, bis die Verordnung nachgeholt wird. Die technische Spezifikation für Ausnahmetatbestände wird bis 2027 noch konkretisiert.

> [!interesse-technik]
> Die elektronische Hilfsmittelverordnung basiert wie das Arznei-E-Rezept auf dem [[FHIR]]-Standard und dem E-Rezept-Fachdienst der [[gematik]]. Die [[KBV]] entwickelt die technischen Profile für die Hilfsmittelverordnung als Erweiterung der bestehenden E-Rezept-Spezifikation. Hilfsmittellieferanten benötigen eine TI-Anbindung und entsprechende Software, um Verordnungen digital entgegennehmen zu können. Das Pilotprojekt des BIV-OT (Bundesinnungsverband für Orthopädietechnik) erprobt die Workflows und die technische Integration.

### Abgrenzung zur Heilmittelverordnung

Hilfsmittel und [[Heilmittelverordnung|Heilmittel]] werden oft verwechselt:

| Merkmal | Hilfsmittel | Heilmittel |
|---|---|---|
| Was ist es? | Technisches Produkt (Orthese, Rollstuhl) | Therapeutische Leistung (Physiotherapie, Logopädie) |
| Rechtsgrundlage | § 33 SGB V | § 32 SGB V |
| Abgabe durch | Hilfsmittellieferanten (Sanitätshaus, Optiker) | Therapeuten (Physiotherapeuten, Logopäden) |
| E-Rezept-Pflicht | Ab 01.07.2027 | Ab 01.07.2027 |

### Abgrenzung zu Sprechstundenbedarf und Sprechstundenbedarf

Hilfsmittelverordnungen sind von anderen Verordnungsarten abzugrenzen:

- **Arzneimittelverordnung**: E-Rezept-Pflicht seit 01.01.2024
- **Hilfsmittelverordnung**: E-Rezept-Pflicht ab 01.07.2027
- **[[Heilmittelverordnung]]**: E-Rezept-Pflicht ab 01.07.2027

> [!frist-warnung] Frist-Warnung: E-Rezept-Pflicht für Hilfsmittelverordnungen ab 1. Juli 2027
> **Rechtsgrundlage:** § 360 Abs. 1 S. 4 SGB V i.d.F. des Digitalgesetzes (DigiG) vom 22. März 2024 (BGBl. I Nr. 101)
> **Frist:** Ab 1. Juli 2027 sind Vertragsärzte und Vertragspsychotherapeuten verpflichtet, Hilfsmittelverordnungen ausschließlich elektronisch auszustellen. Papierverordnungen (Muster 16) verlieren für Hilfsmittel ihre Gültigkeit.
> **Handlungsbedarf:** Vertragsärzte müssen sicherstellen, dass ihr Praxisverwaltungssystem (PVS) bis zum 1. Juli 2027 die Ausstellung von Hilfsmittel-E-Rezepten unterstützt. Die KBV-Technischen Anforderungen für die Hilfsmittelverordnung als FHIR-Profil sind beim PVS-Hersteller anzufragen.
> **Bei Nichtbeachtung:** Verordnungen auf Papier können von Hilfsmittellieferanten und Krankenkassen ab diesem Datum abgelehnt werden; eine ordnungsgemäße Versorgung der Patienten und Abrechnung ist dann nicht mehr gewährleistet.

## Verknüpfungen

- [[E-Rezept]] (elektronische Verordnung: technische Basis für die eHV ab 2027)
- [[SGB-V]] (§ 33: Anspruch auf Hilfsmittel; § 360: E-Rezept-Pflicht)
- [[KBV]] (entwickelt FHIR-Profile für die elektronische Hilfsmittelverordnung)
- [[gematik]] (betreibt den E-Rezept-Fachdienst)
- [[Telematikinfrastruktur]] (Pflichtanbindung für Hilfsmittellieferanten ab 01.01.2026)
- [[FHIR]] (Datenformat für die elektronische Hilfsmittelverordnung)
- [[Heilmittelverordnung]] (Schwesterverordnung, ebenfalls E-Rezept-Pflicht ab 07/2027)

## Quellen

- [PTAheute: Übersicht – Wann kommt welche Art des E-Rezepts?](https://www.ptaheute.de/aktuelles/2023/10/27/uebersicht-wann-kommt-welche-art-vom-e-rezept)
- [medizinrecht-blog.de: Einführung der elektronischen Verordnung von Hilfsmitteln](https://medizinrecht-blog.de/ehealth/einfuehrung-der-elektronischen-verordnung-von-hilfsmitteln/)
- [BIV-OT: Pilotprojekt eVerordnung](https://biv-ot.org/news_und_politik/gesundheitspolitik/pilotprojekt_everordnung/index_ger.html)
- [Gelbe Liste: Hilfsmittelverordnung direkt aufs Smartphone](https://www.gelbe-liste.de/e-rezept/hilfsmittel-verordnung-elektronisch-pilotprojekt)
