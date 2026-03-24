---
title: DataMatrix
audience: [technical, non-technical]
tags: [standards, barcode, e-rezept, securpharm, serialisierung]
aliases: [Data Matrix, DataMatrix-Code, 2D-Barcode, GS1 DataMatrix]
relevance:
  sectors: [apotheke, hersteller, krankenhaus, arztpraxis, it-dienstleister, regulierung]
  interests: [technik, compliance, business]
maturity: wachsend
---

# DataMatrix

**DataMatrix** ist ein zweidimensionaler Barcode-Standard nach ISO/IEC 16022, der in Deutschland für die Codierung von [[E-Rezept]]-Tokens auf Papierausdrucken und für die Arzneimittelserialisierung nach der EU-Fälschungsschutzrichtlinie ([[Securpharm]]) eingesetzt wird.

## Erklärt für Einsteiger

Ein normaler Strichcode (Barcode) enthält nur wenige Zahlen, die in einer einzelnen Zeile gespeichert sind. Ein DataMatrix-Code ist ein kleines schwarzweißes Quadrat aus winzigen Pixeln und kann viel mehr Information speichern, ohne dabei größer zu werden. Auf einer Medikamentenpackung ist so ein Code aufgedruckt. Wenn man ihn mit dem Scanner einliest, weiß die Apotheke sofort: Welches Produkt, welche Seriennummer, wann läuft es ab und ob es möglicherweise gefälscht ist. Beim E-Rezept-Ausdruck enthält der DataMatrix-Code die Rezept-ID, damit die Apotheke das Rezept digital einlösen kann.

## Überblick

DataMatrix wurde ursprünglich von International Data Matrix Inc. entwickelt und 2000 als internationaler Standard ISO/IEC 16022 veröffentlicht. Im Gesundheitswesen hat sich DataMatrix gegenüber dem QR-Code als bevorzugtes Format für Kleinpackungen und Pharmaanwendungen durchgesetzt, weil er bei kleiner Fläche eine hohe Datendichte erreicht und auch auf gewölbten oder leicht beschädigten Oberflächen noch lesbar ist.

### E-Rezept-Ausdruck

Wenn ein Patient ein elektronisches Rezept ([[E-Rezept]]) als Papierausdruck mitbekommt, enthält dieser Ausdruck einen DataMatrix-Code. Dieser Code enthält den sogenannten Token, einen digitalen Schlüssel, mit dem die Apotheke das Rezept beim [[E-Rezept]]-Fachdienst abrufen kann. Der Apotheker scannt den Code, und das System lädt das Rezept und alle zugehörigen Daten automatisch nach.

Ein E-Rezept-Ausdruck enthält bis zu drei DataMatrix-Codes (für drei Medikamente auf einem Rezept), jeder mit dem jeweiligen Token.

> [!praxis-tipp] Praxis-Tipp: E-Rezept-Ausdruck korrekt drucken
> Seit 1. Januar 2024 gilt das E-Rezept als Pflicht für GKV-Patienten. Ihr PVS erzeugt den DataMatrix-Code automatisch. Sie müssen nichts manuell codieren.
>
> In Ihrer Praxis bedeutet das:
> 1. Prüfen Sie, ob Ihr Drucker den DataMatrix-Code scharf und vollständig druckt. Mindestauflösung: 300 dpi. Thermodrucker unter 203 dpi erzeugen unleserliche Codes.
> 2. Testen Sie den Ausdruck: Scannen Sie den Code mit der E-Rezept-App oder fragen Sie Ihre Apotheke, ob sie ihn einlesen können.
> 3. Auf einem Ausdruck können bis zu drei Rezepte abgebildet sein, jeweils als eigener DataMatrix-Code.
>
> Häufiger Fehler: Kopierpapier mit zu geringem Kontrast. Verwenden Sie für Rezeptausdrucke Laser- oder Thermodrucker, keine Tintenstrahldrucker mit verblasster Tinte.

### Securpharm und die EU-Fälschungsschutzrichtlinie

Seit Februar 2019 schreibt die EU-Fälschungsschutzrichtlinie (EU FMD, Delegierte Verordnung (EU) 2016/161) vor, dass alle verschreibungspflichtigen Arzneimittel einen individuellen DataMatrix-Code auf der Packung tragen müssen. Dieser Code enthält:

- Produktcode (GTIN, GS1-Standard)
- Chargenbezeichnung
- Verfallsdatum
- Seriennummer (eindeutig je Packung)

Das deutsche System zur Umsetzung heißt [[Securpharm]]. Hersteller kodieren die Seriennummer beim Befüllen, Apotheken scannen den Code bei der Abgabe und prüfen die Authentizität in einer zentralen Datenbank.

> [!praxis-tipp] Praxis-Tipp: Securpharm-Scan in der Apotheke
> Jede Abgabe eines Rx-Arzneimittels erfordert seit Februar 2019 einen Verifikationsscan. Ihr AVS führt diesen Schritt durch, sobald Sie den GS1-DataMatrix-Code auf der Packung scannen.
>
> Checkliste für den Ablauf:
> 1. Packung mit dem 2D-Scanner scannen. Ein normaler 1D-Barcodescanner reicht nicht. Sie brauchen einen 2D-Scanner, der DataMatrix liest.
> 2. Das AVS prüft die Seriennummer gegen das securPharm-System. Bei Erfolg: grünes Signal. Bei Alarm: Packung nicht abgeben, securPharm-Hotline anrufen (0800 0009 753).
> 3. Nach der Abgabe deaktiviert das AVS die Packung automatisch. Ohne Deaktivierung bleibt die Seriennummer aktiv und kann als gefälscht gemeldet werden.
>
> Häufiger Fehler: Scanner ist auf 1D-Modus eingestellt. Prüfen Sie die Scannerkonfiguration in den AVS-Einstellungen.

> [!frist-warnung] Frist-Warnung: Securpharm-Scan-Pflicht bei Arzneimittelabgabe
> **Rechtsgrundlage:** Art. 25 Delegierte Verordnung (EU) 2016/161 i.V.m. § 17 Abs. 6c [[ApBetrO]] (Apothekenbetriebsordnung)
> **Frist:** Seit 9. Februar 2019 verbindlich für alle EU-Mitgliedstaaten. Keine laufende Übergangsfrist mehr. Jede Abgabe eines verschreibungspflichtigen Arzneimittels erfordert den Verifikationsscan.
> **Handlungsbedarf:** Apotheken (öffentlich und Krankenhausapotheken) sind verpflichtet, bei jeder Abgabe von Rx-Arzneimitteln den GS1-DataMatrix-Code zu scannen, die Seriennummer gegen das EMVS (European Medicines Verification System) zu prüfen und die Packung anschließend zu deaktivieren. Dazu wird ein 2D-Scanner und ein AVS mit aktiver securPharm-Anbindung benötigt.
> **Bei Nichtbeachtung:** Verstöße können als Verstoß gegen das Arzneimittelgesetz (§ 8 AMG) gewertet werden und durch Landesbehörden mit Auflagen bis hin zur Betriebsuntersagung geahndet werden. Hersteller ohne korrekte Serialisierung riskieren Rückrufverpflichtungen.

> [!interesse-compliance]
> Apotheken sind nach der EU-FMD-Verordnung verpflichtet, bei jeder Abgabe von rezeptpflichtigen Arzneimitteln den Securpharm-DataMatrix-Code zu scannen und die Echtheit zu prüfen. Ohne diese Prüfung ist die Abgabe nicht regelkonform. Das gilt auch für Krankenhausapotheken. Seit 2023 werden Abweichungen durch das ABDA-Zertifizierungssystem und Landesbehörden kontrolliert.

> [!klinik-integration] Klinik-Integration: DataMatrix in der Krankenhausapotheke
> **Wareneingang:** Krankenhausapotheken können die Securpharm-Deaktivierung bereits beim Wareneingang vornehmen. Eine erneute Prüfung auf Station ist dann nicht erforderlich. Dies vereinfacht den Workflow erheblich, muss aber organisatorisch verbindlich geregelt und dokumentiert sein.
> **KIS/Apothekensystem-Integration:** Das Apothekeninformationssystem (AIS, z.B. Pharmis, ADIS, Apoweb) übernimmt den Securpharm-Scan und die Deaktivierung. Die Anbindung an das [[KIS]] erfolgt typischerweise über HL7-Schnittstelle (Auftragsmanagement) oder proprietäre Middleware. Prüfen Sie, ob Ihr AIS GS1-DataMatrix (ECC 200) und die AI-Felder (01)(17)(10)(21) vollständig verarbeitet.
> **E-Rezept im stationären Bereich:** Für die Einlösung stationärer E-Rezepte durch Krankenhausärzte enthält der Papierausdruck DataMatrix-Token. Das KIS oder ein angekoppeltes Apothekensystem löst den Token gegen den [[E-Rezept]]-Fachdienst ein. Stellen Sie sicher, dass 2D-Scanner (DataMatrix-fähig) an allen relevanten Arbeitsplätzen im Stationsbereich vorhanden sind.

## Technische Details

### ISO/IEC 16022

Der Standard ISO/IEC 16022 beschreibt DataMatrix vollständig:

- **Symbolstruktur**: Quadratisches oder rechteckiges Raster aus Modulen (Pixel). Jedes Modul ist entweder schwarz (1) oder weiß (0).
- **Finder Pattern**: Ein L-förmiger schwarzer Rahmen an zwei Seiten und ein abwechselndes Muster an den anderen beiden, das dem Scanner Ausrichtung und Größe signalisiert.
- **Fehlerkorrektur**: Reed-Solomon-Fehlerkorrektur, die bis zu 25 Prozent des beschädigten Codes rekonstruieren kann.
- **Datenkapazität**: Je nach Größe bis zu 3.116 numerische Zeichen oder 2.335 alphanumerische Zeichen in einem Symbol.

Für Pharmaanwendungen wird ausschließlich das **ECC 200**-Format verwendet (nicht ECC 000-140).

### GS1 DataMatrix im Pharmabereich

Pharma-DataMatrix-Codes folgen der **GS1-Anwendungskennung (AI)** -Systematik:

```
(01) 04150000123456 (17) 250101 (10) ABC123 (21) 1234567890
  ↑ GTIN              ↑ Verfall   ↑ Charge  ↑ Seriennummer
```

- **(01)**: GTIN (Global Trade Item Number, 14 Stellen)
- **(17)**: Verfallsdatum (YYMMDD)
- **(10)**: Charge (Lotnummer)
- **(21)**: Seriennummer (eindeutig je Packung)

Die GS1 Germany definiert die Regeln für die Nutzung dieser Anwendungskennzeichnungen im deutschen Pharmabereich.

> [!frist-warnung] Frist-Warnung: E-Rezept-Pflicht und DataMatrix-Ausdruck
> **Rechtsgrundlage:** § 360 Abs. 1 SGB V i.V.m. § 4 AMVV (Arzneimittelverschreibungsverordnung)
> **Frist:** Seit 1. Januar 2024 ist das E-Rezept für alle GKV-Patienten Pflicht. Ärzte müssen Rezepte elektronisch ausstellen. Wird auf Wunsch des Patienten ein Papierausdruck ausgegeben, muss dieser den DataMatrix-Code nach gematik-Spezifikation enthalten.
> **Handlungsbedarf:** Arztpraxen sind verpflichtet sicherzustellen, dass ihr PVS E-Rezepte korrekt ausstellt und bei Bedarf einen normierten Ausdruck mit DataMatrix-Code erzeugt. Apotheken benötigen einen 2D-fähigen Scanner, der das DataMatrix-Format lesen kann.
> **Bei Nichtbeachtung:** Papierausdrucke ohne korrekten DataMatrix-Code sind für die Apotheke nicht einlösbar. Die Abgabe ist dann nicht möglich; Patienten sind auf den elektronischen Weg via eGK oder GesundheitsID angewiesen.

### E-Rezept-Token im DataMatrix

Der DataMatrix-Code auf einem E-Rezept-Ausdruck enthält einen strukturierten Token nach gematik-Spezifikation. Der Token ist eine URL-Struktur:

```
https://prescriptionserver.telematik/Bundle/<UUID>?
  iv=<Initialisierungsvektor>&
  q=<Zugangstoken>
```

Die Apotheke scannt den Code und übergibt den Token an ihr [[AVS|Apothekenverwaltungssystem]]. Das AVS löst den Token gegen den [[E-Rezept]]-Fachdienst ein und lädt das FHIR-Bundle mit den Rezeptdaten.

> [!dev-quickstart] Dev Quickstart: E-Rezept-Token einlösen (AVS-Perspektive)
> Nach dem Scan des DataMatrix-Codes übergibt das AVS Task-ID und AccessCode an den E-Rezept-Fachdienst.
>
> **1. Token aus DataMatrix parsen**
> ```python
> # Token-URL aus DataMatrix-Scan:
> # https://prescriptionserver.telematik/Bundle/<UUID>?iv=<IV>&q=<AccessCode>
> from urllib.parse import urlparse, parse_qs
> parsed = urlparse(token_url)
> task_id = parsed.path.split("/")[-1]
> access_code = parse_qs(parsed.query)["q"][0]
> ```
>
> **2. Rezept abrufen**
> ```bash
> GET https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<task_id>
> Authorization: Bearer <IDP-Access-Token>
> X-AccessCode: <access_code>
> Accept: application/fhir+json
> ```
>
> **3. Dispensierung quittieren**
> ```bash
> POST https://erp.zentral.erp.splitdns.ti-dienste.de/Task/<task_id>/$close
> Authorization: Bearer <IDP-Access-Token>
> Content-Type: application/fhir+json
> ```
> - API-Dokumentation AVS: [gematik/api-erp – erp_abrufen.adoc](https://github.com/gematik/api-erp/blob/master/docs/erp_abrufen.adoc)
> - FHIR-Profile E-Rezept: [Simplifier: KBV / E-Rezept](https://simplifier.net/erezept)
> - Testumgebung: [titus.ti-dienste.de](https://titus.ti-dienste.de)

### DataMatrix vs. QR-Code

| Merkmal | DataMatrix | QR-Code |
|---|---|---|
| Norm | ISO/IEC 16022 | ISO/IEC 18004 |
| Mindestgröße | Kleiner bei gleicher Datenmenge | Größer bei gleicher Datenmenge |
| Fehlerkorrektur | Reed-Solomon | Reed-Solomon |
| Bevorzugte Anwendung | Kleinpackungen, Medizin, Industrie | Konsumgüter, Marketing, Mobilzahlungen |
| Lesegeräte | Spezieller 2D-Scanner oder Smartphone | Fast jedes Smartphone |

Für die E-Rezept-Papierausdrucke hat die [[gematik]] DataMatrix gewählt, weil die Codes platzsparender sind und mit professionellen Kassensystemen in Apotheken gut lesbar sind.

> [!interesse-technik]
> DataMatrix in der E-Rezept-Spezifikation: gemSpec_FM_eRp (Feature-Modul E-Rezept). Tokenformat: siehe gematik-Spezifikation zum E-Rezept-Workflow. GS1 Pharma DataMatrix: https://www.gs1-germany.de/standards/identifikation-und-kodierung/datamatrix/. Securpharm Kodierregeln (Oktober 2025): https://www.securpharm.de/. ISO/IEC 16022:2024 auf iso.org: https://www.iso.org/standard/80926.html

## Verknüpfungen

- [[E-Rezept]] (DataMatrix-Code auf dem Papierausdruck enthält den Einlöse-Token)
- [[AVS]] (Apothekenverwaltungssystem scannt DataMatrix-Codes)
- [[Securpharm]] (Arzneimittelserialisierung nutzt GS1 DataMatrix)
- [[FHIR]] (E-Rezept-Daten im FHIR-Bundle hinter dem DataMatrix-Token)
- [[gematik]] (definiert das Token-Format für E-Rezept-DataMatrix-Codes)

## Quellen

- [ISO/IEC 16022:2024 — DataMatrix-Norm](https://www.iso.org/standard/80926.html)
- [GS1 Germany: DataMatrix im Pharmabereich](https://www.gs1-germany.de/standards/identifikation-und-kodierung/datamatrix/)
- [securPharm e.V.: Fälschungsschutz für Arzneimittel](https://www.securpharm.de/)
- [gematik: E-Rezept Fachdienst Spezifikation](https://fachportal.gematik.de/anwendungen/e-rezept)
