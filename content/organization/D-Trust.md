---
title: D-Trust
audience: [technical, non-technical]
tags: [organisation, pki, zertifikate, vertrauensdiensteanbieter, tsp, bundesdruckerei]
aliases: [D-Trust GmbH, D-TRUST]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, apotheke, pflege, ti-infrastruktur, hersteller]
  interests: [compliance, technik]
maturity: setzling
---

# D-Trust

**D-Trust GmbH** ist eine Tochtergesellschaft der Bundesdruckerei-Gruppe und der zentrale zugelassene [[TSP|Vertrauensdiensteanbieter (TSP)]] für [[HBA|Heilberufsausweise (HBA)]] und [[SMC-B|Institutionskarten (SMC-B)]] in der deutschen [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Stell dir vor, eine Behörde stellt deinen Personalausweis aus und garantiert damit, dass die Daten darin stimmen. D-Trust macht dasselbe für die digitale Welt des Gesundheitswesens: Das Unternehmen stellt die Ausweise für Ärzte, Apotheker und Krankenhäuser aus, mit denen sie sich im digitalen Gesundheitsnetz sicher ausweisen können. Ohne diesen digitalen Ausweis kann ein Arzt keine elektronischen Rezepte ausstellen oder auf die Patientenakte zugreifen.

## Überblick

D-Trust wurde 1998 gegründet und hat seinen Sitz in Berlin. Seit 2010 ist D-Trust eine hundertprozentige Tochtergesellschaft der Bundesdruckerei GmbH. Im Jahr 2016 wurde D-Trust von der Bundesnetzagentur als qualifizierter Vertrauensdiensteanbieter nach der [[eIDAS]]-Verordnung zertifiziert.

In der [[Telematikinfrastruktur]] nimmt D-Trust die Rolle eines zugelassenen [[TSP]] ein. Die [[gematik]] prüft und lässt TSPs zu, die Zertifikate für TI-Komponenten und Heilberufsträger ausstellen dürfen. D-Trust ist einer der wenigen zugelassenen TSPs in Deutschland und der mit Abstand marktdominanteste Anbieter für HBA und SMC-B.

### Produkte für die Telematikinfrastruktur

D-Trust stellt folgende TI-Karten aus und verwaltet die zugehörigen Zertifikate:

- **[[HBA|eHBA (elektronischer Heilberufsausweis)]]**: Für Ärzte, Zahnärzte, Psychotherapeuten, Apotheker, Pflegefachkräfte und weitere Heilberufe. Der eHBA enthält die Identität des Leistungserbringers und ermöglicht die [[QES|qualifizierte elektronische Signatur (QES)]].
- **[[SMC-B|SMC-B (Security Module Card Type B)]]**: Institutionskarte für Arztpraxen, Krankenhäuser, Apotheken und andere Leistungserbringer. Die SMC-B wird dauerhaft im [[Kartenterminal]] betrieben und authentisiert die Einrichtung gegenüber der TI.

Beide Karten enthalten kryptografische Zertifikate, die Teil der [[PKI|Telematik-PKI]] sind und von D-Trust ausgestellt werden.

> [!interesse-compliance]
> Alle Leistungserbringer, die an die TI angebunden sind, benötigen eine von einem zugelassenen TSP ausgestellte SMC-B. Ärzte, Zahnärzte und Apotheker benötigen zusätzlich einen HBA für Anwendungen wie [[QES]], [[eMP|E-Medikationsplan]] und die Befüllung der [[ePA]]. Die Ausstellung erfolgt über die jeweilige Kammer (Ärztekammer, Zahnärztekammer, Apothekerkammer) unter Einbindung eines TSP wie D-Trust. D-Trust bietet für die Antragstellung kostenlose Vor-Ort-Identifizierung an, um den Identitätsnachweis ohne Postweg zu ermöglichen.

> [!praxis-tipp] Praxis-Tipp: HBA und SMC-B rechtzeitig beantragen
> So läuft die Beantragung ab:
> 1. Ihre Kammer (z.B. Ärztekammer) prüft den Antrag und schickt Ihnen eine Referenznummer.
> 2. Mit dieser Referenznummer melden Sie sich im D-Trust eHealth-Antragsportal an: [ehealth.d-trust.net](https://ehealth.d-trust.net/antragsportal/)
> 3. Der Antrag ist dort vorausgefüllt. Prüfen, ergänzen, absenden.
> 4. Zur Identifizierung nutzen Sie die kostenlose Vor-Ort-Identifizierung von D-Trust (kein Postident nötig).
>
> Kalkulieren Sie mindestens 4 Wochen Bearbeitungszeit. Bei hohem Aufkommen kann es länger dauern. Beantragen Sie HBA und SMC-B daher frühzeitig, nicht erst wenn der alte Ausweis abläuft. Die SMC-B hat eine Laufzeit von 5 Jahren.

### Abgrenzung zu anderen TSPs

Neben D-Trust sind weitere TSPs für bestimmte TI-Karten zugelassen, zum Beispiel die Bundesdruckerei GmbH selbst oder medisign. D-Trust ist jedoch der mit Abstand am häufigsten eingesetzte TSP für eHBA und SMC-B und von nahezu allen Landesärztekammern als bevorzugter Dienstleister eingebunden.

## Technische Details

### PKI-Struktur

D-Trust betreibt als zugelassener TSP eine mehrstufige [[PKI]]-Infrastruktur für die TI:

- **Root-CA**: Die oberste Zertifizierungsinstanz der Telematik-PKI liegt bei der gematik. D-Trust betreibt untergeordnete Zwischen-CAs.
- **Component CA**: Stellt Zertifikate für TI-Komponenten aus (Konnektoren, Kartenterminals, Fachdienste).
- **Identity CA**: Stellt Zertifikate für HBA und SMC-B aus.

Das Certification Practice Statement (CPS) von D-Trust für TI-Zertifikate (D-TRUST TSP-TI CPS) beschreibt alle Verfahren zur Schlüsselerzeugung, Zertifikatsausstellung und Sperrung. Es ist öffentlich zugänglich.

### Zertifikatstypen auf HBA und SMC-B

Eine HBA enthält typischerweise drei Zertifikate:

1. **Authentifizierungszertifikat (AUT)**: Für die Authentisierung gegenüber TI-Diensten
2. **Verschlüsselungszertifikat (ENC)**: Für die Ende-zu-Ende-Verschlüsselung (z.B. [[KIM]])
3. **QES-Zertifikat (SIG)**: Für die qualifizierte elektronische Signatur nach [[eIDAS]]

Die SMC-B enthält Authentifizierungs- und Verschlüsselungszertifikate für die Einrichtung, aber kein QES-Zertifikat (da nicht für natürliche Personen).

> [!interesse-technik]
> D-Trust CPS für TI-Zertifikate: [d-trust.net](https://www.d-trust.net/de/loesungen/ti-anbindung-vor-ort-identifizierung-ehba-eba-smc-b-antraege). gematik TSL (Trust Service Status List): listet alle zugelassenen TSPs und ihre Zertifikate. Die TSL ist ein signiertes XML-Dokument und wird vom [[Konnektor]] und TI-Diensten zur Validierung genutzt. Abruf der TSL: über den gematik-PKI-Dienst. CPS-Download: [d-trust.net/de/unternehmen/downloads](https://www.d-trust.net/de/unternehmen/downloads).

> [!dev-quickstart] Dev Quickstart: TSL herunterladen und validieren
> **Produktions-TSL abrufen:**
> ```bash
> # Standard-TSL (RSA)
> curl -o TSL.xml https://download.tsl.ti-dienste.de/TSL.xml
>
> # ECC-RSA-Variante (ab TI 2.0 relevant)
> curl -o ECC-RSA_TSL.xml  http://download.crl.ti-dienste.de/TSL-ECC/ECC-RSA_TSL.xml
> curl -o ECC-RSA_TSL.sig  http://download.crl.ti-dienste.de/TSL-ECC/ECC-RSA_TSL.sig
> ```
> - Format: XML nach ETSI TS 119 612, XML-DSig-signiert
> - Enthält: alle zugelassenen TSPs (inkl. D-Trust) mit CA-Zertifikaten und Status
> - Validierung: Signaturzertifikat ist in der TSL selbst enthalten; Root liegt bei gematik
> - Referenzimplementierung (Java): [github.com/gematik/ref-GemLibPki](https://github.com/gematik/ref-GemLibPki)
> - Spezifikation: gemSpec_TSL auf [gemspec.gematik.de](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_TSL/gemSpec_TSL_V1.20.0.html)

> [!praxis-tipp] Praxis-Tipp: Ablaufdaten auf HBA und SMC-B prüfen
> In Ihrer Praxis bedeutet das: Prüfen Sie jetzt das Ablaufdatum Ihrer SMC-B und Ihres HBA.
> Das Ablaufdatum steht auf der Karte selbst und im Konnektor-Verwaltungsportal Ihres PVS.
>
> Häufiger Fehler: Die SMC-B läuft ab, ohne dass es jemand bemerkt. Dann schlägt der VSDM-Online-Check fehl und Patienten können nicht aufgenommen werden. Lösung: Tragen Sie das Ablaufdatum aller Karten in Ihren Praxiskalender ein. Planen Sie die Neubeantragung 8 Wochen vor Ablauf.

### eIDAS-Konformität

D-Trust ist nach der [[eIDAS]]-Verordnung (EU) 910/2014 als qualifizierter Vertrauensdiensteanbieter (QTSP) anerkannt und in der EU-Vertrauensliste (EU Trust List) geführt. Dies bedeutet, dass die von D-Trust ausgestellten QES-Zertifikate EU-weit rechtlich einer handschriftlichen Unterschrift gleichgestellt sind.

## Verknüpfungen

- [[TSP]] (Vertrauensdiensteanbieter: regulatorischer Rahmen für D-Trusts Tätigkeit)
- [[PKI]] (Infrastruktur für TI-Zertifikate, die D-Trust betreibt)
- [[HBA]] (eHBA: zentrales D-Trust-Produkt für Heilberufsträger)
- [[SMC-B]] (Institutionskarte: zentrales D-Trust-Produkt für Einrichtungen)
- [[QES]] (Qualifizierte elektronische Signatur auf Basis der D-Trust-Zertifikate)
- [[eIDAS]] (EU-Vertrauensdiensterahmen, nach dem D-Trust zertifiziert ist)
- [[gematik]] (Zulassungsstelle für TSPs in der TI)
- [[TSL]] (Trust Service Status List: listet D-Trust als zugelassenen TSP)
- [[Kartenterminal]] (Gerät, in das SMC-B und HBA gesteckt werden)
- Bundesdruckerei GmbH (Muttergesellschaft von D-Trust)

## Quellen

- [D-Trust GmbH: Offizielle Website](https://www.d-trust.net/)
- [D-Trust: TI-Anbindung – eHBA und SMC-B](https://www.d-trust.net/de/loesungen/ti-anbindung-vor-ort-identifizierung-ehba-eba-smc-b-antraege)
- [D-Trust: Über uns (Geschichte)](https://www.d-trust.net/en/about-us)
- [gematik: Telematik-PKI und zugelassene TSPs](https://fachportal.gematik.de/telematikinfrastruktur/sicherheit-und-datenschutz/pki)
