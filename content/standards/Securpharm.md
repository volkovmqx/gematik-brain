---
title: Securpharm
audience: [technical, non-technical]
tags: [standards, arzneimittel, fälschungsschutz, apotheke, serialisierung, eu]
aliases: [securPharm, EMVS Deutschland, EU-Fälschungsschutzrichtlinie Umsetzung]
relevance:
  sectors: [apotheke, hersteller, krankenhaus, kasse, it-dienstleister]
  interests: [compliance, technik]
maturity: wachsend
---

# Securpharm

**securPharm** ist das deutsche System zur Fälschungssicherung von verschreibungspflichtigen Arzneimitteln, das auf Basis der EU-Fälschungsschutzrichtlinie seit Februar 2019 verpflichtend ist und jede Arzneimittelpackung mit einer eindeutigen Seriennummer verifizierbar macht.

## Erklärt für Einsteiger

Stell dir vor, jede Arzneimittelpackung bekommt im Werk eine einzigartige Seriennummer, wie ein Fingerabdruck. Diese Nummer wird in einer Datenbank gespeichert. Wenn du das Medikament in der Apotheke abholst, scannt die Apothekerin den Barcode auf der Packung. Das System prüft in Millisekunden: Ist diese Nummer bekannt? Wurde sie schon einmal ausgegeben? Wenn ja, ist die Packung möglicherweise eine Fälschung. securPharm ist genau dieses System für Deutschland.

## Überblick

securPharm wurde 2013 als Pilotprojekt gestartet und ist seit dem **9. Februar 2019** für alle rezeptpflichtigen Arzneimittel in der EU verpflichtend. Die Rechtsgrundlage ist die EU-Fälschungsschutzrichtlinie (Richtlinie 2011/62/EU, sogenannte Falsified Medicines Directive, FMD) in Verbindung mit der delegierten Verordnung (EU) Nr. 2016/161.

securPharm ist der deutsche Beitrag zum europäischen **European Medicines Verification System (EMVS)**: einem Netzwerk nationaler Verifizierungsplattformen, das EU-weit miteinander verbunden ist.

### Trägerorganisation

securPharm e.V. ist der Trägerverein des deutschen Systems. Mitglieder sind Verbände aus der pharmazeutischen Industrie, dem Pharmagroßhandel und den Apotheken:

- **BAH** (Bundesverband der Arzneimittel-Hersteller)
- **BPI** (Bundesverband der Pharmazeutischen Industrie)
- **vfa** (Verband Forschender Arzneimittelhersteller)
- **PHAGRO** (Bundesverband des pharmazeutischen Großhandels)
- **[[ABDA]]** (Bundesvereinigung Deutscher Apothekerverbände)

### Welche Arzneimittel sind betroffen?

Die Verifizierungspflicht gilt für verschreibungspflichtige Humanarzneimittel. Ausgenommen sind bestimmte Produktgruppen (z.B. Radiopharmazeutika, homöopathische Mittel). Auch einige OTC-Präparate unterliegen der Pflicht, wenn sie auf der nationalen Liste für betäubungsmittelähnliche Substanzen stehen.

> [!interesse-compliance] Pflichten für Apotheken
> Jede Apotheke muss bei der Ausgabe eines rezeptpflichtigen Arzneimittels dessen 2D-DataMatrix-Code scannen und über das AVS gegen die securPharm-Datenbank verifizieren. Die Packung wird dabei als "ausgegeben" markiert (Decommissioning). Fehlermeldungen müssen dokumentiert und dem MAH (Marketing Authorisation Holder) gemeldet werden. Der [[AVS]]-Hersteller muss die securPharm-Schnittstelle integriert haben. Verstöße gegen die Verifizierungspflicht können als Verstoß gegen das Arzneimittelgesetz (AMG) geahndet werden.

> [!frist-warnung] Frist-Warnung: Verifizierungspflicht und Bußgeldtatbestand nach AMG
> **Rechtsgrundlage:** Art. 25 und Art. 30 Delegierte Verordnung (EU) 2016/161 i.V.m. § 97 Abs. 2 AMG (eingefügt durch das Gesetz für mehr Sicherheit in der Arzneimittelversorgung, GSAV, BGBl. I 2019 S. 1202, in Kraft seit 15. August 2019)
> **Pflicht:** Apotheken sind seit dem 9. Februar 2019 verpflichtet, bei jeder Abgabe eines rezeptpflichtigen Arzneimittels den Unique Identifier (2D-DataMatrix-Code) gegen die EMVS-Datenbank zu verifizieren und die Packung zu dekommissionieren. Die Abgabe darf nicht erfolgen, wenn Grund zur Annahme besteht, dass die Packung manipuliert wurde oder das Arzneimittel nicht authentisch ist.
> **Handlungsbedarf:** Apotheken müssen sicherstellen, dass ihr AVS die securPharm-Schnittstelle fehlerfrei betreibt. Fehlermeldungen sind zu dokumentieren und innerhalb von sieben Werktagen an den pharmazeutischen Unternehmer (MAH) zu melden. Kann der MAH den Verdacht nicht ausräumen, ist die zuständige Landesbehörde unverzüglich zu informieren.
> **Bei Nichtbeachtung:** Ein vorsätzlicher oder fahrlässiger Verstoß gegen Art. 30 Delegierte Verordnung (EU) 2016/161 stellt eine Ordnungswidrigkeit nach § 97 Abs. 2 AMG dar und kann mit einem Bußgeld geahndet werden.

## Technische Details

### Sicherheitsmerkmale auf der Packung

Jede betroffene Packung trägt zwei Pflichtmerkmale:

1. **Erstöffnungsschutz (Tamper Evidence)**: Physische Sicherung der Packung gegen unbemerkte Öffnung (z.B. Sicherheitssiegel)
2. **Individuelles Erkennungsmerkmal (Unique Identifier, UI)**: Maschinenlesbarer 2D-[[DataMatrix]]-Code mit vier Elementen:
   - **Produktcode (PC)**: Nationale Pharmazentralnummer ([[PZN]])
   - **Seriennummer (SN)**: Bis zu 20-stellige alphanumerische Zufallszahl, einzigartig je Packung
   - **Chargennummer (LOT)**: Batch-Identifikation
   - **Verfallsdatum (EXP)**: Ablaufdatum im Format YYMMDD

### Datenfluss: Vom Hersteller zur Apotheke

```
Hersteller → EMVS (Nationale Datenbank) → Apotheke/Krankenhaus
```

1. Der pharmazeutische Hersteller (MAH) lädt die Seriennummer jeder Packung in die EMVS-Datenbank hoch (Upload). Dies geschieht kurz nach der Herstellung.
2. Beim Abverkauf an Großhandel oder Direktbelieferung: optionale Statusänderungen möglich, aber keine Pflicht-Dekommissionierung im Großhandel.
3. Bei Abgabe in der Apotheke oder Krankenhauspflege: Scan des 2D-Codes, Abgleich mit EMVS, Statusänderung auf "ausgegeben" (Decommissioning).

Der gesamte Verifizierungsvorgang dauert üblicherweise weniger als eine Sekunde.

> [!klinik-integration] Klinik-Integration: securPharm in der Krankenhausapotheke
> Krankenhausapotheken sind seit Februar 2019 zur securPharm-Verifikation verpflichtet, wenn sie rezeptpflichtige Arzneimittel an Stationen abgeben. Die DKG hat gemeinsam mit securPharm ein Verfahren zur produktbegleitenden Datenlieferung etabliert.
>
> **Workflow Krankenhausapotheke:** Verifikation erfolgt nicht am Patientenbett, sondern bei der Ausgabe aus der Krankenhausapotheke an die Station. Der Scan des DataMatrix-Codes muss vor der Abgabe an die Station durchgeführt werden.
>
> **KIS-Integration:** Die securPharm-Schnittstelle ist typischerweise im Apothekeninformationssystem (AIS) des Krankenhauses integriert, nicht direkt im KIS. Gängige AIS-Systeme (z.B. Pharmis, ADKA-Systeme) bieten die EMVS-Anbindung an. Prüfen Sie beim Hersteller, ob das AIS über eine aktive securPharm-Zertifizierung verfügt.
>
> **Besonderheit Stationsbelieferung:** Bei der Belieferung von Stationen mit Einheitsdosen oder Unit-Dose-Systemen müssen die Seriennummern vor der Verpackung gescannt werden. Chargenrückverfolgung im KIS sollte Seriennummer und LOT-Nummer je Patientendosierung speichern.
>
> **Verfügbarkeit:** Die EMVS-API muss während der gesamten Apothekenöffnungszeit erreichbar sein. Notfallprozedur für Verbindungsausfall dokumentieren (DKG empfiehlt manuelle Dokumentation und Nachverifikation).

> [!praxis-tipp] Praxis-Tipp: Fehlermeldung beim Scan
> Ihr AVS zeigt eine Fehlermeldung beim securPharm-Scan? Gehen Sie so vor:
> 1. Packung sofort zurücklegen. Noch nicht abgeben.
> 2. Fehlercode notieren (z.B. SP-102, SP-212).
> 3. Häufigste Ursache: Falsche Scanner-Konfiguration. Prüfen Sie Sprache (Deutsch) und Großschreibung. Testtext "FAHRZEUGTYP" muss korrekt erscheinen.
> 4. Vermutete Fälschung: Melden Sie den Fall dem pharmazeutischen Unternehmer. Frist: 7 Tage zur Klärung.
> 5. Nur wenn der Unternehmer den Verdacht nicht ausräumen kann: Meldepflicht an die Behörde.
>
> Häufiger Fehler: Scanner auf englischer Tastaturlage. Lösung: NGDA-Scannertest kostenlos unter ngda.de.

### Integration mit dem [[E-Rezept]]

Mit der Einführung des [[E-Rezept]]s entsteht eine engere Verknüpfung zwischen E-Rezept-Dispensierung und securPharm-Verifizierung. Beim Einlösen eines E-Rezepts im [[AVS]] werden securPharm-Scan und E-Rezept-Token-Entwertung kombiniert.

> [!praxis-tipp] Praxis-Tipp: E-Rezept und securPharm kombiniert
> Beim Einlösen eines E-Rezepts in Ihrem AVS laufen zwei Schritte gleichzeitig:
> 1. E-Rezept-Token wird entwertet.
> 2. securPharm-Scan verifiziert die Packung.
>
> In Ihrer Apotheke bedeutet das: Ein einziger Scan am Abgabetresen erledigt beides. Voraussetzung: Ihr AVS-Hersteller hat das E-Rezept-Modul in der aktuell geforderten Version eingespielt. Prüfen Sie nach jedem AVS-Update, ob der kombinierte Workflow noch funktioniert. Chargennummer und Seriennummer werden automatisch im Dispensierdatensatz gespeichert. Die Anforderungen sind in den E-Rezept-FHIR-Profilen der [[gematik]] beschrieben; der Dispensiervorgang muss Chargennummer und Seriennummer als Teil des Dispensierdatensatzes enthalten.

> [!interesse-technik] Technische Schnittstelle
> Die EMVS-API nutzt REST-basierte Webservices. Apotheken-AVS-Hersteller implementieren die securPharm-Schnittstelle gemäß den Spezifikationen von securPharm e.V. Die Verbindung erfolgt über HTTPS mit Client-Zertifikaten. Fehlercodes sind in der securPharm-Schnittstellenspezifikation definiert. GitHub: securPharm e.V. veröffentlicht keine öffentlichen Repositories; Spezifikationen sind Verbandsmitgliedern zugänglich. Informationen zu den EU-EMVS-Schnittstellen finden sich bei der EMVO (European Medicines Verification Organisation).

> [!dev-quickstart] Dev Quickstart: DataMatrix-Code dekodieren und EMVS-Felder parsen
> Der DataMatrix-Code auf einer securPharm-Packung kodiert vier GS1-Felder (Application Identifiers). Format nach GS1-Standard mit FNC1-Trennzeichen:
>
> ```
> Rohstring (Beispiel):
> ]d2010401234567890121234567890ABCDE1710123117123456789012
>
> GS1 Application Identifiers:
>   AI(01) = GTIN/PZN-Wrapper: 04012345678901  → enthält PZN
>   AI(21) = Seriennummer (SN): 1234567890ABCDE (max. 20 Zeichen)
>   AI(17) = Verfallsdatum (EXP): 101231  → YYMMDD → 2010-12-31
>   AI(10) = Chargennummer (LOT): 123456789012
> ```
>
> ```python
> # Beispiel: GS1-Felder aus DataMatrix-String parsen (Python)
> import re
>
> def parse_gs1(raw: str) -> dict:
>     # Trennzeichen entfernen, AIs extrahieren
>     s = raw.lstrip("]d2")
>     fields = {}
>     patterns = {"01": 14, "21": None, "17": 6, "10": None}
>     for ai, length in patterns.items():
>         m = re.search(rf"\({ai}\)(.+?)(?=\(\d{{2}}\)|$)", raw)
>         if not m:
>             m = re.search(rf"{ai}(.{{{length}}})" if length else rf"{ai}(.+?)(?=\d{{2}}|$)", s)
>         if m:
>             fields[ai] = m.group(1)
>     return fields
> ```
>
> - EMVS-Verifikation: REST-API via HTTPS + Client-Zertifikat (X.509, ausgestellt durch securPharm e.V.)
> - Endpunkt-Schema: `POST https://<nmvs-endpoint>/ui/authenticate` (Verbandsmitglieder erhalten Zugangsdaten)
> - Kodierungsregeln: [securPharm Coding Rules EN V2](https://www.securpharm.de/wp-content/uploads/2018/09/securPharm_Codierung_Regeln_EN_V2_02.pdf)
> - EU EMVO Schnittstellenspezifikation: [emvo-medicines.eu](https://www.emvo-medicines.eu/mission/emvs/)
> - E-Rezept-Dispensierung: Chargennummer + Seriennummer in `MedicationDispense.lot` (FHIR R4)

### Verhältnis zum Apothekenrechenzentrum

Die securPharm-Verifikationsdaten sind von den [[TA1]]-Abrechnungsdaten getrennt. Das [[Apothekenrechenzentrum]] prüft bei der Rezeptabrechnung nicht die securPharm-Daten. Allerdings enthält der TA1-Abrechnungssatz die Chargennummer, die auch im securPharm-Kontext relevant ist.

> [!klinik-integration] Klinik-Integration: Chargendokumentation im KIS und Rückrufmanagement
> Im stationären Umfeld ist die Verknüpfung von securPharm-Daten mit dem KIS für das Rückrufmanagement besonders relevant.
>
> **Rückrufmanagement:** Bei einem Arzneimittelrückruf muss das Krankenhaus alle betroffenen Chargen bis auf Patientenebene nachverfolgen. Dazu müssen LOT-Nummer und Seriennummer im KIS patientenbezogen dokumentiert sein. Prüfen Sie, ob Ihr KIS und AIS diese Daten verknüpft speichern.
>
> **FHIR-Integration:** Beim Einsatz von E-Rezept-Dispensierung im stationären Bereich enthält `MedicationDispense.lot` (FHIR R4) die Chargennummer. Systeme, die ISiK-konforme FHIR-Ressourcen erzeugen, sollten Chargen- und Seriennummer aus dem AIS automatisch befüllen.
>
> **Audit-Trail:** Krankenhäuser unterliegen nach AMVV und AMG besonderen Dokumentationspflichten für Arzneimittel. Die securPharm-Verifikationsprotokolle (Scan-Zeitstempel, Ergebnis, Seriennummer) sollten mindestens 5 Jahre archiviert werden. Klären Sie mit dem AIS-Hersteller, ob Protokolle exportierbar und in das KIS-Archiv integrierbar sind.

## Verknüpfungen

- [[AVS]] (Apothekenverwaltungssystem; integriert die securPharm-Schnittstelle)
- [[PZN]] (Pharmazentralnummer; Pflichtbestandteil des securPharm-Unique-Identifier)
- [[E-Rezept]] (Dispensiervorgang wird mit securPharm-Scan verknüpft)
- [[ABDA]] (Mitgründer und Mitglied von securPharm e.V.)
- [[Apothekenrechenzentrum]] (verarbeitet Chargendaten aus der TA1-Abrechnung)
- [[TA1]] (Abrechnungsformat; enthält Chargennummer als Pflichtfeld)
- [[gematik]] (E-Rezept-Fachdienst; Dispensierdaten enthalten securPharm-Chargeninfos)
- [[BfArM]] (zuständige Behörde für Arzneimittelsicherheit und AMG-Aufsicht)

## Quellen

- [ABDA: Was ist securPharm?](https://www.abda.de/fuer-apotheker/was-ist-securpharm/)
- [securPharm e.V.: Offizielle Website](https://www.securpharm.de/)
- [EU-Fälschungsschutzrichtlinie 2011/62/EU – EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32011L0062)
- [Delegierte Verordnung (EU) 2016/161 – EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0161)
