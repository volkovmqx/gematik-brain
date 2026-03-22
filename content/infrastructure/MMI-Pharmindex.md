---
title: MMI-Pharmindex
audience: [technical, non-technical]
tags: [infrastruktur, arzneimittel, datenbank, amts, apotheke, pvs, avs]
aliases: [MMI Pharmindex, Gelbe Liste Pharmindex, Vidal MMI, MMI-Datenbank, Gelbe Liste]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, zahnarzt, hersteller, it-dienstleister]
  interests: [technik, business, compliance]
maturity: setzling
---

# MMI-Pharmindex

Der **MMI-Pharmindex** (auch: Gelbe Liste Pharmindex) ist eine kommerzielle Arzneimittel-Stammdaten- und Interaktionsdatenbank des Unternehmens Vidal MMI Germany, die in deutschen Praxisverwaltungssystemen ([[PVS]]) und Apothekenverwaltungssystemen ([[AVS]]) für die Arzneimitteltherapiesicherheit ([[AMTS]]) eingesetzt wird.

## Erklärt für Einsteiger

In einer Arztpraxis muss der Computer wissen, ob zwei Medikamente, die ein Patient gleichzeitig nehmen soll, gefährliche Wechselwirkungen haben. Dafür braucht das Praxisprogramm eine riesige Datenbank mit Informationen über alle Medikamente. Der MMI-Pharmindex ist eine solche Datenbank. Er ist vergleichbar mit einem sehr detaillierten Nachschlagewerk, das ständig aktuell gehalten wird und das Praxisprogramm automatisch nutzt, wenn ein Arzt ein Rezept schreibt.

## Überblick

Der MMI-Pharmindex ist neben der [[ABDA-Datenbank]] eine der zwei führenden Arzneimittel-Stammdatendatenbanken in Deutschland. Beide konkurrieren um die Integration in Primärsysteme des Gesundheitswesens. Während die [[ABDA-Datenbank]] von den deutschen Apothekerverbänden herausgegeben wird, ist der MMI-Pharmindex ein privatwirtschaftliches Produkt von Vidal MMI Germany, einer Tochtergesellschaft der französischen Vidal Group.

Die bekannteste Verbrauchermarke ist die **Gelbe Liste**, unter der Vidal MMI eine öffentliche Arzneimittel-Informationsseite betreibt. Die professionelle Datenbankinfrastruktur für die Integration in Softwaresysteme wird als **MMI-Pharmindex** vermarktet, mit verschiedenen Produktausprägungen (MMI Pharmindex Plus, MMI Pharmindex Pro).

### Einsatz in der Telematikinfrastruktur

Im Kontext der deutschen [[Telematikinfrastruktur]] ist der MMI-Pharmindex relevant für:

- **[[eMP]] (elektronische Medikationsliste)**: PVS und AVS nutzen Arzneimitteldatenbanken für die Befüllung und Darstellung des eMP-Datensatzes
- **[[AMTS]]-Prüfungen**: Beim Ausstellen eines [[E-Rezept|E-Rezepts]] prüfen PVS den neuen Wirkstoff gegen die aktuelle Medikation des Patienten. Die Interaktionsdatenbank ist dabei der technische Kern
- **[[BMP]] (Bundeseinheitlicher Medikationsplan)**: Arzneimittelstammdaten für die Befüllung des BMP

> [!interesse-technik] Integration in PVS und AVS
> MMI-Pharmindex Pro ist als Webservice verfügbar und kann über eine REST-API in Primärsysteme integriert werden. Die API liefert Arzneimittelstammdaten (nach [[PZN]]), Interaktionsdaten, Kontraindikationshinweise und Dosierungsinformationen. Der zugrundeliegende AMTS-Service ist als Medizinprodukt nach [[MDR]] (EU 2017/745) zugelassen. Die Interaktionsdaten stammen aus der Datenbank der Abteilung Klinische Pharmakologie und Pharmakoepidemologie des Universitätsklinikums Heidelberg. Für die Integration in Konnektor-gebundene Systeme (PVS mit TI-Anbindung) gelten keine spezifischen Konnektoren-Anforderungen, da die Datenbankabfrage unabhängig von der TI-Kommunikationsschicht erfolgt.

> [!interesse-business] Marktstellung und Wettbewerb
> Vidal MMI und die ABDA (über ihre Tochtergesellschaft ABDATA) teilen den deutschen Markt für Arzneimittelstammdaten in Primärsystemen. PVS-Hersteller lizenzieren in der Regel eine der beiden Datenbanken oder bieten den Kunden die Wahl. Für Apothekensoftware (AVS) ist die [[ABDA-Datenbank]] traditionell dominierend, da sie aus dem Apothekerumfeld stammt. Im Praxissegment (PVS) ist der MMI-Pharmindex stark vertreten. Die Marktanteile sind nicht öffentlich bekannt.

> [!klinik-integration] Klinik-Integration: AMTS-Datenbankanbindung im Klinik-KIS
> **KIS-Kontext:** MMI Pharmindex Plus wird für Kliniken als lokal installierte Version angeboten und ist in gängige KIS-Systeme integrierbar. Vidal MMI und Agfa HealthCare (Orbis) haben eine Kooperation zur direkten Übernahme von Medikationsplänen in digitale Patientenakten demonstriert. Krankenhäuser mit Orbis/Dedalus, iMedOne oder SAP ISH prüfen beim jeweiligen KIS-Hersteller, ob der MMI-AMTS-Service oder die ABDA-Datenbank als lizenzierte Komponente bereits enthalten ist oder gesondert lizenziert werden muss.
>
> **Workflow-Bezug:** Im stationären Bereich erfolgt der AMTS-Check typischerweise bei Aufnahme (Medikationsabgleich), Verordnung auf Station und Entlassung. Die Krankenhausapotheke stützt sich auf Stammdaten der Klinikdatenbank, die täglich aktualisiert werden sollte, um zurückgezogene Zulassungen oder neue Interaktionsdaten abzubilden.
>
> **MDR-Compliance:** Der MMI-AMTS-Service ist als Medizinprodukt Klasse IIa nach MDR zertifiziert. Krankenhäuser sind als Betreiber verpflichtet, sicherzustellen, dass nur MDR-konforme AMTS-Komponenten in der Patientenversorgung eingesetzt werden. Bei KIS-Updates darauf achten, dass die integrierte AMTS-Datenbankversion aktuell und noch CE-zertifiziert ist.

## Technische Details

### Produktvarianten

Vidal MMI bietet den MMI-Pharmindex in verschiedenen Ausprägungen an:

| Produkt | Zielgruppe | Zugang |
|---|---|---|
| MMI Pharmindex Plus | Praxen, MVZ, Kliniken (lokal) | Lokale Installation, CD/Update |
| MMI Pharmindex Pro | Softwarehersteller (PVS, AVS) | REST-Webservice-API |
| Gelbe Liste Online | Öffentlich, Fachpublikum | Webportal |
| Gelbe Liste App | Fachpublikum mobil | Smartphone-App |

### Dateninhalt

Die Datenbank enthält für jedes Arzneimittel (identifiziert über [[PZN]]):

- **Stammdaten**: Handelsname, Wirkstoff(e), [[ATC-Code]], Darreichungsform, Stärke, Packungsgröße, Hersteller
- **Indikationen und Kontraindikationen**: Für welche Erkrankungen ist das Mittel zugelassen, für wen nicht?
- **Interaktionen**: Wechselwirkungen mit anderen Wirkstoffen (klassifiziert nach Schweregrad)
- **Dosierungsinformationen**: Empfohlene Dosen nach Altersgruppe, Nierenfunktion
- **Zulassungsstatus**: Aktueller Zulassungsstatus in Deutschland
- **Preise und Erstattung**: Apothekenverkaufspreise, GKV-Erstattungsstatus

> [!frist-warnung] Frist-Warnung: AMTS-Dienste als Medizinprodukt nach MDR
> **Rechtsgrundlage:** Verordnung (EU) 2017/745 (MDR), Art. 10, Anhang I; § 139e Abs. 1 SGB V (Anforderungen an PVS-Komponenten)
> **Pflicht:** Der MMI-AMTS-Service ist seit Februar 2023 als Medizinprodukt der Klasse IIa nach MDR zertifiziert. PVS-Hersteller, die AMTS-Dienste in ihre Systeme integrieren, müssen sicherstellen, dass ausschließlich MDR-konforme Komponenten eingesetzt werden. Für klinische Systeme (KIS) gilt dieselbe Anforderung. Nicht-zertifizierte AMTS-Komponenten dürfen nicht in regulierten Medizinprodukten betrieben werden.
> **Handlungsbedarf:** Die verantwortliche Stelle prüft, ob der eingesetzte AMTS-Dienst eine gültige MDR-Konformitätserklärung und ein aktuelles CE-Zertifikat einer Benannten Stelle besitzt. Für Klasse-IIa-Produkte ist nach Art. 86 MDR alle zwei Jahre ein Periodic Safety Update Report (PSUR) zu erstellen.
> **Bei Nichtbeachtung:** Der Betrieb eines nicht-konformen Medizinprodukts in der Patientenversorgung ist eine Ordnungswidrigkeit nach dem Medizinprodukterecht-Durchführungsgesetz (MPDG) und kann zu Marktrücknahmen führen.

> [!dev-quickstart] Dev Quickstart: MMI-Pharmindex Pro REST-API
> Zugang zur MMI-Pharmindex-Pro-API erfordert einen Lizenzvertrag mit Vidal MMI Germany. Nach Freischaltung steht ein REST-Webservice mit API-Key-Authentifizierung bereit.
> ```bash
> # Arzneimittelstammdaten per PZN abrufen (Beispiel-Endpunkt, nach Lizenzfreischaltung)
> curl -X GET "https://api.mmi.de/pharmindex/v2/drugs?pzn=04599296" \
>   -H "Authorization: Bearer <API_TOKEN>" \
>   -H "Accept: application/json"
>
> # AMTS-Interaktionsprüfung: zwei PZNs gegen Interaktionsdatenbank
> curl -X POST "https://api.mmi.de/pharmindex/v2/interactions" \
>   -H "Authorization: Bearer <API_TOKEN>" \
>   -H "Content-Type: application/json" \
>   -d '{"pzns": ["04599296", "00592833"]}'
> ```
> - Response enthält: Interaktionsgrad (`CONTRAINDICATED`, `SEVERE`, `MODERATE`, `MINOR`), Wirkstoffe, Mechanismus
> - PZN-CodeSystem in FHIR: `http://fhir.de/CodeSystem/ifa/pzn`
> - Produktinfo und API-Zugang: [mmi.de/mmi-pharmindex](https://www.mmi.de/mmi-pharmindex/mmi-pharmindex-plus)
> - Testumgebung und Sandbox auf Anfrage bei Vidal MMI Germany

### AMTS-Prüflogik

Beim AMTS-Check im Primärsystem läuft der folgende Prozess ab:

1. Das PVS übergibt die [[PZN]] des neu verordneten Arzneimittels und die PZNs der aktuellen Medikation des Patienten
2. Der MMI-AMTS-Service prüft alle Wirkstoffkombinationen gegen die Interaktionsdatenbank
3. Interaktionen werden nach Schweregrad klassifiziert (kontraindiziert, schwerwiegend, moderat, gering)
4. Das Ergebnis wird im PVS als Warnung angezeigt

Der MMI-AMTS-Service ist als zugelassenes Medizinprodukt nach [[MDR]] (Klasse IIa) reguliert.

> [!praxis-tipp] Praxis-Tipp: AMTS-Warnungen richtig einordnen
> Wenn Ihr PVS beim Ausstellen eines E-Rezepts eine Wechselwirkungs-Warnung zeigt, müssen Sie nicht automatisch die Verordnung ändern. Die Schweregrade helfen bei der Einschätzung:
> - Rot / kontraindiziert: Immer prüfen und Entscheidung in der Patientenakte dokumentieren. Im Zweifel Therapie anpassen.
> - Orange / schwerwiegend: Klinische Einschätzung erforderlich. Kurzbegründung in der Dokumentation festhalten.
> - Gelb / moderat oder gering: In der Regel kein Handlungsbedarf, aber im Blick behalten.
>
> Häufiger Fehler: Warnungen routinemäßig wegklicken, ohne sie zu lesen. Ihr PVS protokolliert jeden Bestätigungsklick. Im Schadensfall ist diese Dokumentation relevant. Unklare Interaktionen können Sie über die [Gelbe Liste](https://www.gelbe-liste.de) manuell nachschlagen.

### Abgrenzung zu anderen Datenbanken

| Datenbank | Herausgeber | Primäre Nutzung |
|---|---|---|
| MMI-Pharmindex | Vidal MMI Germany | PVS, AVS, Kliniken |
| [[ABDA-Datenbank]] | ABDATA (ABDA-Tochter) | AVS, Apothekensoftware |
| DIMDI-Datenbanken | [[BfArM]]/DIMDI | Behörden, Forschung |

## Verknüpfungen

- [[ABDA-Datenbank]] (Hauptwettbewerber im deutschen Markt für Arzneimittelstammdaten)
- [[AMTS]] (Arzneimitteltherapiesicherheit: zentraler Einsatzzweck des MMI-Pharmindex)
- [[PZN]] (Pharmazentralnummer: primärer Schlüssel der Arzneimitteldatenbank)
- [[ATC-Code]] (WHO-Klassifikation der Wirkstoffe, im MMI-Pharmindex enthalten)
- [[PVS]] (Praxisverwaltungssystem: integriert den MMI-Pharmindex für AMTS-Checks)
- [[AVS]] (Apothekenverwaltungssystem: nutzt Arzneimitteldatenbanken für Abgabe und AMTS)
- [[E-Rezept]] (beim Ausstellen wird AMTS-Check mit der Datenbank durchgeführt)
- [[eMP]] (elektronische Medikationsliste: basiert auf Arzneimittelstammdaten)
- [[BMP]] (Bundeseinheitlicher Medikationsplan: nutzt standardisierte Arzneimitteldaten)
- [[MDR]] (MMI-AMTS-Service ist als Medizinprodukt nach MDR zugelassen)

## Quellen

- [Vidal MMI: MMI Pharmindex Plus](https://www.mmi.de/mmi-pharmindex/mmi-pharmindex-plus)
- [Vidal MMI: MMI-AMTS-Service](https://www.mmi.de/mmi-pharmindex/mmi-amts-service)
- [Vidal MMI: Gelbe Liste Pharmindex](https://www.mmi.de/gelbe-liste-pharmindex)
- [Wikipedia: Gelbe Liste](https://de.wikipedia.org/wiki/Gelbe_Liste)
