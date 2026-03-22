---
title: BZÄK
audience: [technical, non-technical]
tags: [organisation, zahnärzte, kammer, standespolitik]
aliases: [Bundeszahnärztekammer, Bundeszahnärztekammer BZÄK]
relevance:
  sectors: [zahnarzt, regulierung, verband, hersteller]
  interests: [compliance, business]
maturity: wachsend
---

# BZÄK

Die **Bundeszahnärztekammer (BZÄK)** ist die Standesorganisation der deutschen Zahnärzteschaft auf Bundesebene und Gesellschafterin der [[gematik]].

## Erklärt für Einsteiger

Wie Ärzte ihre Bundesärztekammer haben, haben Zahnärzte in Deutschland ihre eigene Standesorganisation: die Bundeszahnärztekammer. Sie vertritt die Interessen aller approbierten Zahnärztinnen und Zahnärzte in Deutschland, stellt Regeln für den Berufsstand auf und ist maßgeblich daran beteiligt, welche digitalen Systeme Zahnarztpraxen nutzen müssen.

## Überblick

Die BZÄK ist die Bundesorganisation der 17 deutschen Landeszahnärztekammern. Alle niedergelassenen und angestellten Zahnärztinnen und Zahnärzte in Deutschland sind kraft Gesetz Pflichtmitglieder ihrer jeweiligen Landeszahnärztekammer. Die BZÄK bündelt deren Interessen auf Bundesebene.

### Aufgaben

Die Kernaufgaben der BZÄK sind:

- **Berufsrecht**: Musterberufsordnung für Zahnärzte, ethische Grundsätze, Weiterbildungsordnung
- **Aus- und Fortbildung**: Koordination zahnmedizinischer Ausbildung an deutschen Hochschulen
- **Standespolitik**: Vertretung gegenüber Bundesministerien, Bundesbehörden, dem Gemeinsamen Bundesausschuss ([[G-BA]]) und der [[gematik]]
- **Patienteninformation**: Aufklärung der Bevölkerung über Zahngesundheit

### Gesellschafterrolle bei gematik

Die BZÄK ist eine der neun Gesellschafterinnen der [[gematik]]. Zusammen mit [[Bundesaerztekammer|Bundesärztekammer (BÄK)]], [[KBV]], [[KZBV]], [[DAV]] und [[DKG]] hält sie einen Anteil an den verbleibenden 19,95 Prozent der gematik-Anteile (nach dem BMG-Anteil von 51 % und dem [[GKV-Spitzenverband]]-Anteil von 22,05 % sowie dem [[PKV]]-Anteil von 7 %).

In der Gesellschafterversammlung stimmt die BZÄK über gematik-Beschlüsse ab und bringt die Perspektive der Zahnärzteschaft in die TI-Weiterentwicklung ein.

### Abgrenzung zur KZBV

Die BZÄK und die [[KZBV]] (Kassenzahnärztliche Bundesvereinigung) sind zwei verschiedene Organisationen mit unterschiedlichen Aufgaben:

| Organisation | Aufgabe | Rechtsgrundlage |
|---|---|---|
| BZÄK | Standespolitik, Berufsrecht, Ausbildung | Heilberufsgesetze der Länder |
| [[KZBV]] | Kassenvertragliche Versorgung, Abrechnung mit GKV | [[SGB-V]] |

Jeder Zahnarzt ist Mitglied beider Organisationen (sofern er GKV-Patienten behandelt): der Landeszahnärztekammer (BZÄK-Ebene) und der Kassenzahnärztlichen Vereinigung seines Bundeslandes (KZBV-Ebene).

## Technische Details

### HBA-Ausgabe über Landeszahnärztekammern

> [!praxis-tipp] Praxis-Tipp: eHBA G2.1 rechtzeitig beantragen
> Ca. 18.000 Zahnärzte in Deutschland sind betroffen: Alle eHBA ohne Aufschrift "G2.1" verlieren am **30. Juni 2026** ihre Gültigkeit.
>
> So gehen Sie vor:
> 1. Schauen Sie auf die Rückseite Ihres HBA. Steht dort "G2" oder keine Generationsangabe, müssen Sie tauschen.
> 2. Wenden Sie sich an Ihre Landeszahnärztekammer. Die Kammer organisiert den Austausch, nicht der HBA-Hersteller direkt.
> 3. D-Trust und Medisign schicken betroffenen Karteninhabern ab Mitte 2025 E-Mails mit Schritt-für-Schritt-Anleitung. Prüfen Sie Ihre hinterlegte E-Mail-Adresse bei der Kammer.
> 4. Bei geänderter Adresse oder E-Mail kann eine erneute Identifizierung nötig sein. Planen Sie dafür ca. 2 bis 3 Wochen ein.
>
> Ohne gültigen eHBA G2.1 können Sie ab Juli 2026 keine QES leisten und keine TI-Anwendungen nutzen, die eine Arztidentifikation erfordern.

Der [[HBA]] (Heilberufsausweis) für Zahnärzte wird durch die jeweilige Landeszahnärztekammer ausgestellt. Die BZÄK koordiniert auf Bundesebene die Anforderungen und Rahmenbedingungen für die HBA-Ausgabe. Dabei gelten dieselben technischen Standards wie bei der Ausgabe durch Landesärztekammern: Der HBA ist eine Chipkarte mit qualifizierten elektronischen Signaturzertifikaten ([[QES]]) und Authentifizierungszertifikaten.

Zahnärztliche HBAs werden von denselben zugelassenen Kartenherausgebern (TSPs) produziert wie ärztliche HBAs. Aktuelle Kartengeneration: HBA G2.1 (ECC-fähig). Bis 30. Juni 2026 müssen HBAs der Generation G2.0 (RSA) gegen G2.1 getauscht sein.

> [!frist-warnung] Frist-Warnung: HBA G2.0 Austausch für Zahnärzte
> **Rechtsgrundlage:** § 311 Abs. 1 SGB V i.V.m. gematik-Festlegung zur RSA-zu-ECC-Migration; Zulassungsrecht für Kartenherausgeber (TSPs) nach § 291a SGB V
> **Frist:** Bis **30. Juni 2026** müssen alle zahnärztlichen HBAs der Generation G2.0 (RSA-only) gegen die Generation G2.1 (ECC-fähig) ausgetauscht sein. Eine Verlängerung der RSA-Zertifikatsgültigkeit ist nicht möglich.
> **Handlungsbedarf:** Die verantwortliche Stelle (Zahnarzt/Zahnärztin) muss den Kartentausch aktiv über die zuständige **Landeszahnärztekammer** beantragen. Die Kammer leitet den Antrag an den jeweiligen Trust Service Provider (D-Trust oder Medisign) weiter. Da Bearbeitungszeiten 4 bis 6 Wochen betragen können, sollte der Antrag unverzüglich gestellt werden.
> **Bei Nichtbeachtung:** Ohne gültigen HBA G2.1 ist nach dem 30. Juni 2026 keine [[QES]] möglich. Damit entfällt die Abrechnungsfähigkeit für eAU, E-Rezept-Signatur und ePA-Befüllungspflicht. Die zuständige Kassenzahnärztliche Vereinigung kann Abrechnungen zurückweisen.

> [!interesse-compliance]
> Zahnärzte benötigen einen gültigen [[HBA]] für den Zugriff auf alle signaturpflichtigen TI-Anwendungen. HBA G2.0 (RSA-only) müssen bis **30. Juni 2026** gegen G2.1 (ECC) getauscht werden. Die zuständige Stelle ist die jeweilige Landeszahnärztekammer. Zahnärzte ohne HBA können keine [[QES]] leisten und keine TI-Anwendungen nutzen, die eine Arztidentifikation erfordern.

### TI-Relevanz für Zahnarztpraxen

Zahnarztpraxen sind seit dem [[DVG]] (2019) zur TI-Anbindung verpflichtet. Die wichtigsten TI-Anwendungen für Zahnärzte:

- **[[ePA]]**: Zahnärzte müssen die elektronische Patientenakte ihrer Patienten befüllen
- **[[KIM]]**: Sichere Kommunikation mit Krankenkassen, Laboren und anderen Leistungserbringern
- **[[VSDM]]**: Versichertenstammdatenabgleich an der Rezeption
- **[[eAU]]**: Elektronische Krankschreibung (auch für Zahnärzte bei Zahnerkrankungen)
- **[[E-Rezept]]**: Ausstellung von Medikamentenrezepten durch Zahnärzte

> [!frist-warnung] Frist-Warnung: ePA-Befüllungspflicht und Sanktionen für Zahnarztpraxen
> **Rechtsgrundlage:** § 341 Abs. 6 SGB V (ePA-Nutzungspflicht und Sanktionsregelung), § 347 Abs. 1 SGB V (Befüllungspflicht für Leistungserbringer), eingeführt durch das Digitalgesetz (DigiG) vom 22. März 2024
> **Frist:** Seit **1. Oktober 2025** gilt die Pflicht zur ePA-Befüllung für Zahnarztpraxen. Sanktionen greifen seit **1. Januar 2026**.
> **Handlungsbedarf:** Zahnarztpraxen müssen sicherstellen, dass (1) ein ePA-fähiges Zahnarzt-PVS (ZABS) mit aktuellem KOB-Nachweis im Einsatz ist, (2) mindestens ein [[HBA]] G2.1 vorhanden ist (Voraussetzung für ePA-Zugriff), und (3) Zahnbehandlungsdaten, die in elektronischer Form vorliegen, in die ePA des Versicherten eingestellt werden.
> **Bei Nichtbeachtung:** Honorarkürzung von 1 Prozent gemäß § 341 Abs. 6 SGB V sowie Reduzierung der TI-Pauschale um 50 Prozent. Die Kassenzahnärztliche Bundesvereinigung (KZBV) hat bei der gematik eine vorübergehende Aussetzung der Sanktionierung beantragt; Stand März 2026 sind die Sanktionen formal wirksam.

Die KZBV vertritt die kassenzahnärztlichen Interessen und handelt mit dem GKV-Spitzenverband Vergütungsvereinbarungen aus. Die BZÄK setzt die berufspolitischen Rahmenbedingungen dafür.

## Verknüpfungen

- [[KZBV]] (kassenzahnärztliche Pendant-Organisation zur BZÄK)
- [[gematik]] (Gesellschafterin; BZÄK bringt Zahnärzte-Perspektive in TI-Entscheidungen)
- [[HBA]] (Heilberufsausweis für Zahnärzte, ausgegeben durch Landeszahnärztekammern)
- [[Bundesaerztekammer]] (Pendant für Ärzte)
- [[G-BA]] (Gemeinsamer Bundesausschuss, mit dem BZÄK in der Versorgungspolitik interagiert)
- [[ePA]] (TI-Pflichtanwendung für Zahnarztpraxen)
- [[QES]] (qualifizierte elektronische Signatur via HBA)
- [[DVG]] (begründete [[TI-Anbindungspflicht]] für Zahnärzte)

## Quellen

- [BZÄK: Bundeszahnärztekammer – Über uns](https://www.bzaek.de/ueber-uns.html)
- [gematik: Gesellschafter der gematik GmbH](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
- [KZBV: Über die KZBV](https://www.kzbv.de/die-kzbv.31.de.html)
- [Wikipedia: Bundeszahnärztekammer](https://de.wikipedia.org/wiki/Bundeszahn%C3%A4rztekammer)
