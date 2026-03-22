---
title: TSL
audience: [technical]
tags: [infrastruktur, pki, zertifikate, vertrauen, ti]
aliases: [Trust Service List, Vertrauensliste, TSL-CA, BNetzA-VL]
---

# TSL

Die **TSL** (Trust Service List, auch Vertrauensliste) ist eine signierte XML-Liste aller vertrauenswürdigen Zertifizierungsstellen (CAs) der [[Telematikinfrastruktur]]. Jede TI-Komponente lädt die TSL und akzeptiert nur Zertifikate von dort gelisteten Vertrauensdienstanbietern ([[TSP|Trust Service Providern]]).

## Erklärt für Einsteiger

Stell dir vor, es gibt eine offizielle Liste aller zugelassenen Ausweisdrucker in Deutschland. Nur wenn ein Personalausweis von einem Drucker auf dieser Liste stammt, gilt er als echt. Die TSL ist genau das für die digitalen Zertifikate im Gesundheitsnetz. Jedes Gerät und jede Software prüft: Kommt dieses Zertifikat von einer Stelle, die auf der offiziellen Liste steht? Wenn ja, wird vertraut. Wenn nein, wird die Verbindung abgelehnt. Die Liste wird regelmäßig aktualisiert und ist selbst digital unterschrieben, damit niemand sie fälschen kann.

## Überblick

In der [[Telematikinfrastruktur]] gibt es viele verschiedene Komponenten: [[Konnektoren]], [[eGK]]s, [[HBA]]s, [[SMC-B]]s, Fachdienste, [[TI-Gateway]]s. Alle müssen sich gegenseitig als vertrauenswürdig ausweisen können. Dafür nutzen sie Zertifikate, die von zugelassenen CAs ausgestellt werden.

Die TSL ist das zentrale Dokument, das festlegt, welchen CAs vertraut wird. Sie wird von der [[gematik]] als Root-CA-Betreiber herausgegeben und digital signiert. Alle TI-Komponenten laden die TSL beim Start und aktualisieren sie regelmäßig. Eine Verbindung zu einem Dienst, dessen Zertifikat nicht auf eine in der TSL gelistete CA zurückgeführt werden kann, wird abgelehnt.

Die TSL der TI ist technisch an das **ETSI TS 119 612**-Format angelehnt, dem europäischen Standard für Trust Service Lists (der auch für die Vertrauenslisten der EU-Mitgliedstaaten nach eIDAS verwendet wird).

### Abgrenzung zur BNetzA-Vertrauensliste

Die **Bundesnetzagentur-Vertrauensliste (BNetzA-VL)** listet die in Deutschland zugelassenen qualifizierten Vertrauensdiensteanbieter nach [[eIDAS]]-Verordnung. Sie ist die nationale Vertrauensliste (Trusted List) gemäß Art. 22 eIDAS. Die TI-TSL ist davon zu unterscheiden: Sie bezieht sich ausschließlich auf die TI-eigene PKI-Hierarchie und wird von der [[gematik]] verwaltet, nicht von der Bundesnetzagentur.

## Technische Details

### Struktur der TSL

Die TSL ist ein XML-Dokument, das folgende Informationen enthält:

- **TSL-Sequenznummer**: Monoton steigende Versionsnummer. Clients prüfen, ob sie die aktuelle Version haben.
- **Ausstellungsdatum und Nächstes-Update-Datum**: Gibt an, wann die TSL abläuft und neu geladen werden muss.
- **Digitale Signatur der gematik**: Die gesamte TSL ist mit dem privaten Schlüssel der gematik Root-CA signiert. Nur wer den öffentlichen Schlüssel der gematik Root-CA kennt, kann die Signatur prüfen.
- **TSP-Einträge**: Für jeden zugelassenen Vertrauensdienstanbieter ([[TSP]]) enthält die TSL:
  - Name und Identifikationsdaten des TSP
  - Zertifikatspolitik (OID)
  - Öffentliche Schlüssel der CA-Zertifikate
  - Status (aktiv oder zurückgezogen)
  - Gültigkeitszeiten

### TSL-Hierarchie in der TI-PKI

```
gematik Root-CA
  └── TSL (listet alle zugelassenen Sub-CAs)
        ├── TSP-X CA für HBA-Zertifikate
        ├── TSP-Y CA für SMC-B-Zertifikate
        ├── TSP-Z CA für Komponenten-Zertifikate
        └── ...
```

Die [[PKI|TI-PKI]] ist hierarchisch aufgebaut. An der Spitze steht die **gematik Root-CA**, deren öffentlicher Schlüssel in allen TI-Komponenten fest verankert ist (Trust Anchor). Die gematik Root-CA signiert die TSL, und die TSL listet die darunter liegenden Sub-CAs der einzelnen [[TSP]]s.

### TSL-Download und Aktualisierung

Jede TI-Komponente (Konnektor, TI-Gateway, Fachdienst) lädt die TSL beim Start von einem definierten Download-Endpunkt der gematik. Das Intervall für die Aktualisierung ist in der Komponentenspezifikation festgelegt. Typischerweise wird die TSL täglich oder bei jedem Start geprüft.

Wenn eine neue TSL verfügbar ist (höhere Sequenznummer), wird sie heruntergeladen und die Signatur geprüft. Erst nach erfolgreicher Signaturprüfung ersetzt die neue TSL die alte. Schlägt die Prüfung fehl, verwendet die Komponente weiterhin die zuletzt gültige TSL und meldet einen Fehler.

### OCSP und CRL als Ergänzung

Die TSL definiert, welchen CAs vertraut wird. Die aktuelle **Gültigkeit einzelner Zertifikate** wird davon unabhängig per [[OCSP]] (Online Certificate Status Protocol) oder [[CRL]] (Certificate Revocation List) geprüft. Ein Zertifikat kann gültig sein, obwohl seine ausstellende CA in der TSL noch gelistet ist, wenn es individuell gesperrt wurde.

### ECC-Migration und TSL

Im Zuge der [[ECC-Migration]] der TI-PKI wurden neue CA-Einträge in die TSL aufgenommen. Karten der Generation G2.0 (RSA-only) und G2.1 (ECC) werden von unterschiedlichen CA-Zweigen abgedeckt. Die TSL enthält parallel die CA-Zertifikate beider Generationen, solange die Übergangsfrist läuft.

## Verknüpfungen

- [[PKI]] (TI-PKI-Hierarchie, deren Vertrauensanker die TSL abbildet)
- [[TSP]] (Trust Service Provider; deren CAs werden in der TSL gelistet)
- [[OCSP]] (Zertifikatsstatus-Prüfung, ergänzt die TSL)
- [[gematik]] (Herausgeber und Unterzeichner der TI-TSL)
- [[eIDAS]] (europäischer Rahmen für Vertrauenslisten; BNetzA-VL ist die deutsche nationale Trusted List)
- [[HBA]] (Zertifikate werden gegen TSL-gelistete CAs geprüft)
- [[SMC-B]] (Institutionszertifikate ebenso)
- [[Konnektoren]] (laden und nutzen die TSL für alle Verbindungsprüfungen)
- [[TI-Gateway]] (nutzt TSL für die mTLS-Zertifikatsprüfung)

## Quellen

- [gematik Fachportal: TI-PKI und Zertifikate](https://fachportal.gematik.de/telematikinfrastruktur/ti-vertrauensbereich)
- [gemSpec_PKI - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PKI/latest/)
- [ETSI TS 119 612: Electronic Signatures and Infrastructures – Trusted Lists](https://www.etsi.org/deliver/etsi_ts/119600_119699/119612/)
- [BSI: PKI-Konzepte](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Zertifizierung-und-Anerkennung/PKI/pki_node.html)
