---
title: Primärsystem
audience: [technical, non-technical]
tags: [infrastruktur, software, pvs, kis, avs, ti-anbindung]
aliases: [Primärsysteme, Primärsoftware, klinisches Informationssystem]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, zahnarzt, psychotherapie, pflege, hersteller, it-dienstleister]
  interests: [technik, compliance, business]
maturity: wachsend
---

# Primärsystem

Ein **Primärsystem** ist jede klinische oder administrative Software, die direkt mit der [[Telematikinfrastruktur]] verbunden ist und von einem Leistungserbringer für die Patientenversorgung eingesetzt wird.

## Erklärt für Einsteiger

In einer Arztpraxis gibt es ein Programm, in dem die Ärztin Patienten aufnimmt, Diagnosen einträgt und Rezepte ausstellt. In der Apotheke gibt es ein anderes Programm, das Lagerbestände verwaltet und Rezepte einlöst. Im Krankenhaus ein drittes, das Bettenbelegung und Entlassbriefe koordiniert. Alle diese Programme heißen Primärsysteme. Sie sind der direkte Arbeitsplatz des medizinischen Personals und gleichzeitig die Schnittstelle zum sicheren deutschen Gesundheitsnetz.

## Überblick

Der Begriff Primärsystem bezeichnet in der deutschen Gesundheits-IT alle Software-Systeme auf der Seite der Leistungserbringer, die an die [[Telematikinfrastruktur]] angebunden sind. Der Begriff grenzt diese Systeme von der TI-Infrastruktur selbst ab: Fachdienste wie der E-Rezept-Server oder das ePA-Aktensystem sind keine Primärsysteme. Primärsysteme sind die Clients, die diese Dienste nutzen.

Die drei wichtigsten Primärsystemtypen sind:

- **[[PVS]]** (Praxisverwaltungssystem): Software für ambulante Arztpraxen und Psychotherapeuten. Verwaltung von Patienten, Diagnosen, Rezepten, Abrechnung. Zertifizierung durch die [[KBV]].
- **[[KIS]]** (Krankenhausinformationssystem): Software für stationäre Einrichtungen. Deckt Aufnahme, Behandlung, Pflege, Abrechnung nach [[DRG]] ab. Verbunden mit Subsystemen wie [[RIS]], [[LIS]], [[PACS]].
- **[[AVS]]** (Apothekenverwaltungssystem): Software für Apotheken. Warenwirtschaft, Rezeptabrechnung, [[E-Rezept]]-Einlösung, [[ePA]]-Zugriff für Medikationsplan.

Weitere spezialisierte Primärsysteme existieren für Zahnärzte (ZABS/Zahnarzt-PVS), Pflegeeinrichtungen (Pflegedokumentationssoftware) und Heil- und Hilfsmittelerbringer.
> [!klinik-integration] Klinik-Integration: KIS als TI-Primärsystem
> **Kein Monolith:** Ein KIS ist eine Plattform, keine Einzelanwendung. Die TI-Anbindung betrifft nicht nur das Kernsystem, sondern alle angebundenen Subsysteme (RIS, LIS, PACS, Pflegedokumentation, Apothekenmodul). Jedes Modul, das TI-Anwendungen (ePA, E-Rezept, KIM) nutzt, muss entweder selbst zertifiziert sein oder über das KIS-Kernsystem zertifizierten Zugriff erhalten.
>
> **ISiK-Pflicht:** Für Krankenhäuser gilt der ISiK-Standard, der FHIR-basierte REST-Schnittstellen zwischen KIS und Subsystemen verbindlich macht. ISiK Stufe 3 ist seit 1. Januar 2025 verpflichtend. Klären Sie mit Ihrem KIS-Hersteller, ob Basismodul und relevante Fachmodule (Medikation, Terminplanung) vollständig implementiert sind.
>
> **Hochverfügbarkeit:** Das KIS ist ein 24/7-System. Die TI-Verbindungskomponente (Konnektor oder TI-Gateway) muss redundant ausgelegt sein. Ein ungeplanter TI-Ausfall blockiert die eGK-Prüfung bei der Aufnahme sowie den ePA-Zugriff auf Station. Halten Sie ein Fallback-Verfahren (z.B. Offline-Notaufnahme-Modus) bereit.


### Anbindung an die TI

Jedes Primärsystem verbindet sich mit der [[Telematikinfrastruktur]] über einen [[Konnektoren|Konnektor]] oder, seit TI 2.0, über ein [[TI-Gateway]]. Diese Verbindungskomponenten übernehmen die kryptografischen Operationen (Signatur, Verschlüsselung) und den sicheren Transport. Das Primärsystem steuert diese Operationen über definierte Schnittstellen (gemSpec-konforme [[SOAP]]-Webservices).

> [!interesse-compliance]
> Leistungserbringer, deren Primärsystem nicht TI-fähig ist oder keine aktuelle Zulassung hat, riskieren Vergütungsabzüge. Die [[KBV]] prüft PVS-Zertifizierungen; die [[gematik]] prüft seit 2024 TI-Konformität im Rahmen der [[Konformitaetsbewertung|Konformitätsbewertung (KOB)]]. PVS-Systeme, die nicht mit der [[ePA]] kompatibel sind, führen seit Anfang 2026 zu Abrechnungskürzungen.

## Technische Details

### Schnittstellenarchitektur

Primärsysteme kommunizieren mit der TI über zwei Schnittstellen:

1. **Konnektor-/TI-Gateway-Schnittstelle**: SOAP-basierte Webservices für kryptografische Operationen (Signaturen, Entschlüsselung), [[eGK]]-Lesevorgänge und den Aufbau des TI-Zugangs. Die Schnittstellenspezifikation ist in gemSpec_Kon bzw. gemSpec_TI-Gateway festgelegt.

2. **Fachdienst-Schnittstellen**: REST/[[FHIR]]-basierte APIs für anwendungsspezifische Operationen. Beispiele:
   - E-Rezept-Fachdienst: FHIR R4, KBV-Profile (MedicationRequest, MedicationDispense)
   - ePA-Fachdienst: FHIR R4, XDS-Dokumente
   - KIM-Fachdienst: SMTP-ähnliche API

> [!dev-quickstart] Dev Quickstart: Konnektor SOAP-Endpoint-Discovery
> Alle SOAP-Endpunkte des Konnektors über die Connector Service Description (SDS) ermitteln:
> ```bash
> curl -k https://<konnektor-ip>/connector.sds
> ```
> Die SDS-Antwort (XML) listet alle Dienste mit ihren WSDL-Pfaden, z.B.:
> - `SignatureService` — `/service/v7.4/SignatureService?wsdl`
> - `CardService` — `/service/v1.0/CardService?wsdl`
> - `CertificateService` — `/service/v6.0/CertificateService?wsdl`
>
> SOAP-Request Beispiel (Dokument signieren):
> ```
> POST /service/v7.4/SignatureService HTTP/1.1
> Host: <konnektor-ip>
> Content-Type: text/xml; charset=utf-8
> SOAPAction: "http://ws.gematik.de/conn/SignatureService/v7.4#SignDocument"
> ```
> Spezifikation: [gemSpec_Kon V5.27.0](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/gemSpec_Kon_V5.27.0/index.html) | Implementierungsleitfaden: [gemILF_PS](https://gemspec.gematik.de/docs/gemILF/gemILF_PS/latest/index.html)

### Zertifizierung und Zulassung

Primärsysteme durchlaufen zwei Prüfverfahren:

- **Fachliche Zertifizierung**: Durch die jeweiligen Spitzenorganisationen ([[KBV]] für PVS, [[ABDA]] für AVS, [[DKG]] für KIS). Prüft medizinische und abrechnungstechnische Funktionen.
- **TI-Konformitätsbewertung (KOB)**: Durch die [[gematik]]. Prüft korrekte Implementierung der TI-Schnittstellen. Seit 2024 verpflichtend für alle neuen Zulassungen.

> [!frist-warnung] Frist-Warnung: KOB-Nachweis und ePA-Pflicht
> **Rechtsgrundlage:** § 341 Abs. 6 SGB V (ePA-Nutzungspflicht), § 295a SGB V (Anforderungen an PVS-Zulassung), KBV-Richtlinie gemäß § 75 Abs. 7 SGB V
> **Frist:** Seit **1. Januar 2026** werden Abrechnungen ohne gültigen KOB-Nachweis nicht mehr angenommen. Praxen ohne ePA-fähiges Primärsystem erhalten eine Honorarkürzung von 1 Prozent sowie eine Kürzung der TI-Pauschale um 50 Prozent.
> **Handlungsbedarf:** Leistungserbringer müssen prüfen, ob ihr Primärsystem das ePA-Modul in aktueller, zugelassener Version enthält. Der KOB-Status der eingesetzten Software ist über das gematik-Fachportal (Produkte und Zulassungen) zu verifizieren.
> **Bei Nichtbeachtung:** Honorarkürzung nach § 341 Abs. 6 SGB V sowie Halbierung der TI-Pauschale. Für MVZ und Krankenhäuser gelten analoge Sanktionsregelungen.

### ECC-Migration und TI 2.0

Mit der [[ECC-Migration|RSA-zu-ECC-Migration]] müssen Primärsysteme ECC-fähige Kryptographie unterstützen. Frist: 30. Juni 2026 für ECC-fähige [[HBA]] und [[SMC-B]]. Primärsysteme, die nur RSA-Karten unterstützen, müssen bis dahin aktualisiert sein.

> [!frist-warnung] Frist-Warnung: ECC-Pflicht für Primärsysteme
> **Rechtsgrundlage:** § 311 Abs. 1 SGB V i.V.m. gematik-Festlegung zur RSA-zu-ECC-Migration, basierend auf BSI TR-02102 (Technische Richtlinie kryptografische Verfahren)
> **Frist:** Bis **30. Juni 2026** müssen alle Primärsysteme ECC-fähige Karten ([[HBA]] G2.1 und [[SMC-B]] G2.1) unterstützen. HBA G2.0 und SMC-B G2.0 (RSA-only) verlieren zu diesem Datum ihre Gültigkeit in der TI.
> **Handlungsbedarf:** Hersteller müssen ihre Primärsysteme auf ECC-Kryptographie umstellen. Leistungserbringer müssen prüfen, ob ihr PVS/KIS/AVS in der aktuell installierten Version ECC-Karten der Generation G2.1 unterstützt, bevor Karten getauscht werden.
> **Bei Nichtbeachtung:** Ohne ECC-fähiges Primärsystem ist nach dem 30. Juni 2026 kein Zugriff auf ePA, E-Rezept, eAU oder VSDM möglich. TI-Anbindung und Abrechnungsfähigkeit entfallen.

> [!praxis-tipp] Praxis-Tipp: PVS auf ECC-Kompatibilität prüfen
> Ihre Praxis braucht bis **30. Juni 2026** ein PVS, das ECC-Karten unterstützt. So gehen Sie vor:
> 1. Prüfen Sie Ihre PVS-Version: Rufen Sie die Info-Seite Ihres Anbieters auf oder fragen Sie den Support.
> 2. Liegt noch kein Update mit ECC-Unterstützung vor, fordern Sie einen konkreten Termin an.
> 3. Prüfen Sie gleichzeitig, ob Ihr HBA und Ihre SMC-B die Aufschrift "G2.1" tragen. Fehlt sie, müssen die Karten getauscht werden.
> 4. Planen Sie das Update außerhalb der Sprechstunde ein, ca. 1 Stunde Zeitpuffer.
>
> Wichtig: Ohne ECC-fähiges PVS können Sie ab Juli 2026 keine TI-Anwendungen mehr nutzen. Das betrifft E-Rezept, ePA und VSDM.

In TI 2.0 kommt [[mTLS]] (Mutual TLS) als Pflichtanforderung für alle Primärsystem-Verbindungen. Das bedeutet: Nicht nur der Fachdienst, sondern auch das Primärsystem muss ein gültiges Zertifikat vorlegen. Das [[ZETA]]-Framework der gematik definiert die technischen Anforderungen.

> [!dev-quickstart] Dev Quickstart: ZETA-SDK Integration (TI 2.0 / mTLS)
> Das ZETA-Client-SDK (Kotlin Multiplatform) ersetzt ab 2026 die Konnektor-SOAP-Schicht für TI-2.0-Dienste.
> Maven-Koordinate:
> ```xml
> <dependency>
>   <groupId>de.gematik.zeta</groupId>
>   <artifactId>zeta-sdk</artifactId>
>   <version>0.2.12</version>
> </dependency>
> ```
> ZETA Guard stellt den Policy-Enforcement-Point bereit. Das Primärsystem spricht den Guard per mTLS an:
> ```bash
> curl --cert client.crt --key client.key --cacert ti-ca.crt \
>   https://<zeta-guard-host>/api/v1/token \
>   -H "Content-Type: application/json"
> ```
> - Auth-Flow: OAuth 2.0 / OpenID Connect über [[IDP]], Zertifikat via SMC-B (ECC G2.1)
> - Spezifikation: [gemSpec_ZETA V1.0.0](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_ZETA/gemSpec_ZETA_V1.0.0.pdf)
> - Repos: [gematik/ZETA](https://github.com/gematik/ZETA) | [gematik/zeta-sdk](https://github.com/gematik/zeta-sdk) | [Helm-Charts](https://github.com/gematik/zeta-guard-helm)

### Markt

> [!praxis-tipp] Praxis-Tipp: PVS wechseln oder behalten?
> Ein PVS-Wechsel kostet Zeit und Geld, lohnt sich aber wenn Ihr aktuelles System keine TI-Updates liefert.
> Typische Kosten bei 5 Arbeitsplätzen: Einrichtung und Datenmigration ca. 2.000 bis 5.000 Euro einmalig.
> Die KV erstattet über die TI-Pauschale (131,81 Euro/Monat, Stand 2026) laufende TI-Kosten, nicht den Wechselaufwand.
>
> Häufiger Fehler: Datenmigration wird unterschätzt. Klären Sie vor Vertragsabschluss schriftlich, welche Daten (Patienten, Scheine, Dokumente) übernommen werden.
> Über 72 Prozent der gewechselten Praxen berichten von reibungsloser Datenübernahme, wenn die Migration vorab dokumentiert wurde.

Der PVS-Markt in Deutschland ist konzentriert: Die fünf größten Anbieter (CompuGroup Medical, Medatixx, Tomedo, Dampsoft, x.isynet) decken den Großteil der ca. 100.000 Praxen ab. Im KIS-Markt dominieren Dedalus, SAP Health (IS-H), Orbis und iMedOne. Im AVS-Markt: LAUER-FISCHER, ADG, PHARMATECHNIK, CGM.
> [!klinik-integration] Klinik-Integration: KIS-Markt im Umbruch
> **SAP IS-H Abkündigung:** SAP stellt IS-H Ende 2027 ein (kostenpflichtige Verlängerung bis max. 2030 möglich). Krankenhäuser, die IS-H betreiben, brauchen eine dokumentierte Migrationsstrategie. Optionen: Dedalus ORBIS bzw. ORBIS U (Cloud), iMedOne, Meierhofer M-KIS sowie IS-H-Nachfolgelösungen auf SAP S/4HANA (T-Systems, GITG).
>
> **KIS-Ausschreibung und TI-Zertifizierung:** Bei einer KIS-Neuausschreibung explizit prüfen, welche TI-Module (ePA, E-Rezept, KIM, ISiK) der Hersteller bereits in aktueller gematik-zugelassener Version anbietet und bis wann fehlende Module folgen. Vertragliche Zusagen zu Zertifizierungsfristen absichern. Die Liste zugelassener Primärsysteme ist im gematik-Fachportal unter "Produkte und Zulassungen" einsehbar.


> [!interesse-technik]
> Primärsystem-Hersteller müssen die [[gematik]]-Produkttypsteckbriefe (gemProdT-Dokumente) umsetzen und in der gematik-Testsuite bestehen. API-Referenzen: gemSpec.gematik.de. FHIR-Profile für alle TI-Anwendungen: simplifier.net (gematik-Organisation). Vollständige Liste zugelassener Primärsysteme: gematik-Fachportal unter "Produkte und Zulassungen".

## Verknüpfungen

- [[PVS]] (Praxisverwaltungssystem: Primärsystem für Arztpraxen)
- [[KIS]] (Krankenhausinformationssystem: Primärsystem für Krankenhäuser)
- [[AVS]] (Apothekenverwaltungssystem: Primärsystem für Apotheken)
- [[Konnektoren]] (Hardware-Verbindungskomponente zur TI, Vorgänger des TI-Gateways)
- [[TI-Gateway]] (Cloud-basierte Verbindungskomponente in TI 2.0)
- [[Telematikinfrastruktur]] (das Netz, an das Primärsysteme angebunden sind)
- [[Fachdienst]] (Backend-Dienste, die Primärsysteme aufrufen)
- [[FHIR]] (Datenaustauschformat für Fachdienst-APIs)
- [[KBV]] (Zertifizierungsbehörde für PVS)
- [[gematik]] (TI-Konformitätsbewertung für alle Primärsysteme)
- [[ECC-Migration]] (Kryptographie-Umstellung, betrifft alle Primärsysteme)
- [[mTLS]] (Verbindungsabsicherung in TI 2.0)
- [[ZETA]] (Zero-Trust-Framework für TI 2.0)

## Quellen

- [gematik: Fachportal Primärsysteme und Zulassungen](https://fachportal.gematik.de/hersteller-anbieter/primaersysteme)
- [KBV: Praxissoftware – Zertifizierung und Anforderungen](https://www.kbv.de/html/praxissoftware.php)
- [gematik: Konformitätsbewertung (KOB)](https://www.gematik.de/telematikinfrastruktur/zulassung-konformitaetsbewertung)
- [gemspec.gematik.de: Schnittstellenspezifikationen](https://gemspec.gematik.de/)
