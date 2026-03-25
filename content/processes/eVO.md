---
title: eVO
audience: [technical, non-technical]
tags: [prozesse, heilmittel, verordnung, e-rezept, physiotherapie]
aliases: [Elektronische Heilmittelverordnung, elektronische Verordnung Heilmittel, eVO]
relevance:
  sectors: [arztpraxis, krankenhaus, therapie, hersteller, ti-infrastruktur, it-dienstleister]
  interests: [compliance, technik]
maturity: wachsend
---

# eVO

Die **eVO (elektronische Heilmittelverordnung)** ist die digitale Form der Verordnung für Heilmittel wie Physiotherapie, Ergotherapie, Logopädie und Podologie. Sie soll das papierbasierte Muster 13 ersetzen und die Verordnungsdaten über die [[Telematikinfrastruktur]] übermitteln.

## Erklärt für Einsteiger

Wenn dein Arzt dir Physiotherapie verordnet, schreibt er heute noch ein Papierformular (das grüne Muster 13). Du nimmst das Blatt mit und gibst es beim Physiotherapeuten ab. Die eVO macht das digital: Der Arzt stellt die Verordnung am Computer aus, und der Physiotherapeut kann sie über das Gesundheitsnetz abrufen. Kein Papier, weniger Fehler, schnellere Übermittlung. Das Konzept ist ähnlich wie beim [[E-Rezept]] für Arzneimittel, nur für Therapien.

## Überblick

Die eVO ist Teil der schrittweisen Ausweitung des [[E-Rezept]]-Systems auf alle Verordnungsarten. Während das E-Rezept für Arzneimittel seit Januar 2024 Pflicht ist, folgen Heilmittelverordnungen mit Verzögerung.

### Zeitplan (Stand März 2026)

- **1. Januar 2027**: Ärzte müssen Heilmittelverordnungen verpflichtend als eVO über die TI ausstellen. Heilmittelerbringer müssen ab diesem Datum auf Basis der elektronischen Verordnung abrechnen.
- **1. Oktober 2027**: TI-Anbindungspflicht für Heilmittelerbringer (Physiotherapeuten, Ergotherapeuten, Logopäden, Podologen). Die Frist wurde von ursprünglich 1. Januar 2026 auf diesen Termin verschoben, da die eVO noch nicht verfügbar war.
- **2028**: Vollständige Pflichteinführung der eVO für alle Beteiligten.

Gematik betont, die eVO solle mehr sein als ein digitalisiertes Formular. Ziel ist es, bekannte Probleme des Papierverfahrens zu lösen: Medienbrüche, unleserliche Handschriften, verzögerte Übermittlung und schwierige Änderungen bei Rückfragen.

> [!interesse-compliance]
> Die Pflicht zur eVO trifft zwei Gruppen unterschiedlich früh. Ärzte und Krankenhäuser müssen ab **1. Januar 2027** Heilmittelverordnungen verpflichtend als eVO ausstellen. Heilmittelerbringer (Physiotherapeuten, Ergotherapeuten, Logopäden, Podologen) müssen sich bis **1. Oktober 2027** an die TI anbinden und ab diesem Datum elektronisch abrechnen. Die eVO-Pflicht für alle Beteiligten gilt vollständig ab **2028**. Ärzte ohne PVS-Update für die eVO-Erstellung riskieren nach dem 1. Januar 2027 Abrechnungsprobleme bei GKV-Heilmittelverordnungen.

### Betroffene Berufsgruppen

Als Heilmittelerbringer gelten nach § 124 [[SGB V]]:
- Physiotherapeuten
- Ergotherapeuten
- Logopäden und Sprachtherapeuten
- Podologen

### Abgrenzung zum E-Rezept

Die eVO ist technisch eng mit dem [[E-Rezept]] verwandt und nutzt denselben [[E-Rezept-Fachdienst]] der [[gematik]] als Infrastruktur. Der Unterschied: Heilmittelverordnungen werden nicht in einer Apotheke eingelöst, sondern bei einem Therapeuten. Die Abrechnungswege führen über spezielle Abrechnungsdienstleister für Heilmittel (nicht über [[Apothekenrechenzentrum|Apothekenrechenzentren]]).

## Technische Details

> [!interesse-technik]
> Die eVO nutzt dieselbe technische Infrastruktur wie das [[E-Rezept]]: den E-Rezept-Fachdienst der [[gematik]] als zentralen Speicher- und Weiterleitungsdienst. Das FHIR-Profil für Heilmittelverordnungen (KBV_PR_ERP_PracticeSupply und verwandte Profile) wird von der [[KBV]] entwickelt. Entwickler, die PVS- oder Therapeuten-Primärsysteme bauen, können die entstehenden FHIR-Profile auf [simplifier.net/KBV](https://simplifier.net/organization/kassenrztlichebundesvereinigungkbv) verfolgen. Der Authentifizierungsfluss (IDP + HBA-Signatur + E-Rezept-Fachdienst-API) ist identisch zum Arzneimittel-E-Rezept; lediglich das FHIR-Bundle-Profil unterscheidet sich.

### Datenformat

Die eVO wird wie das E-Rezept im [[FHIR]]-Format (R4) spezifiziert. Die konkreten [[KBV]]-Profile für Heilmittelverordnungen werden von der [[KBV|Kassenärztlichen Bundesvereinigung]] in Abstimmung mit der [[gematik]] entwickelt. Zum Stand März 2026 befinden sich die Spezifikationen noch in der Entwicklungsphase.

### Infrastruktur

Die Übermittlung der eVO erfolgt über die [[Telematikinfrastruktur]]:

1. Der Arzt erstellt die eVO im [[PVS|Praxisverwaltungssystem (PVS)]].
2. Die eVO wird mit einer qualifizierten elektronischen Signatur ([[QES]]) über den [[HBA]] signiert.
3. Die eVO wird an den [[E-Rezept-Fachdienst]] der [[gematik]] übermittelt.
4. Der Heilmittelerbringer ruft die eVO über sein Primärsystem ab, sobald er TI-angebunden ist.

### TI-Anbindung für Heilmittelerbringer

Heilmittelerbringer benötigen für die eVO dieselben TI-Komponenten wie Arztpraxen:
- [[SMC-B]] (Institutionskarte)
- [[HBA]] (optional, für Therapeuten mit Heilberufserlaubnis)
- Primärsystem mit TI-Schnittstelle oder [[TI-Gateway]]
- KIM-Client für Kommunikation mit Ärzten und Kassen

Die Beschaffung und Einrichtung dieser Komponenten ist der Grund für die verschobene TI-Anbindungspflicht: Der organisatorische Aufwand für zehntausende kleine Praxen ist erheblich.

## Verknüpfungen

- [[E-Rezept]] (Schwesteranwendung für Arzneimittelverordnungen; eVO nutzt dieselbe TI-Infrastruktur)
- [[Telematikinfrastruktur]] (Netz, über das die eVO übermittelt wird)
- [[KBV]] (entwickelt die FHIR-Profile für die eVO)
- [[SGB V]] (§ 32 SGB V: Anspruch auf Heilmittel; § 124 SGB V: Heilmittelerbringer-Zulassung)
- [[gematik]] (betreibt den E-Rezept-Fachdienst, der auch die eVO verarbeitet)
- [[FHIR]] (Datenformat der eVO)
- [[HBA]] (Heilberufsausweis für die Signatur der eVO)
- [[SMC-B]] (Institutionskarte für Heilmittelerbringer-Einrichtungen)
- [[PVS]] (Praxissoftware, in der Ärzte die eVO erstellen)
- [[Apothekenrechenzentrum]] (nicht zuständig für Heilmittel, aber vergleichbare Abrechnungsstruktur)

## Quellen

- [gematik: eVO soll mehr als ein digitalisiertes Formular werden (up-aktuell, März 2026)](https://www.up-aktuell.de/aktuell/2026/03/gematik-evo-soll-mehr-als-ein-digitalisiertes-formular-werden.html)
- [thevea.de: E-Rezept für Heilmittelerbringer – Pflichten und Fristen](https://thevea.de/praxis-wissen/e-rezept-heilmittelerbringer/)
- [TI-Anbindungsfrist für Heilmittelerbringer auf Oktober 2027 verlängert](https://www.verbandsbuero.de/ti-anbindung-fristverlaengerung-bis-oktober-2027/)
- [DMRZ: TI für Heilmittelerbringer – die elektronische Verordnung](https://www.dmrz.de/blog/ti-fuer-heilmittelerbringerinnen-die-elektronische-verordnung-evo)
