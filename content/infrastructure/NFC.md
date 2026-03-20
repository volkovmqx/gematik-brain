---
title: NFC
audience: [technical, non-technical]
tags: [infrastruktur, hardware, chipkarte, kontaktlos, egk]
aliases: [Near Field Communication, Nahfeldkommunikation, kontaktlos, ISO 14443]
relevance:
  sectors: [arztpraxis, zahnarzt, apotheke, krankenhaus, hersteller, ti-infrastruktur, it-dienstleister, patient]
  interests: [technik, compliance, patient]
maturity: immergruen
---

# NFC

**NFC (Near Field Communication)** ist ein Funkstandard für die kontaktlose Datenübertragung über kurze Distanzen (bis ca. 10 cm), der in der deutschen Gesundheits-IT zum Auslesen der [[eGK]], zur Authentisierung mit dem [[HBA]] und für die [[Gesundheits-ID]] per Smartphone eingesetzt wird.

## Erklärt für Einsteiger

NFC ist dieselbe Technik, die auch beim kontaktlosen Bezahlen mit der Bankkarte genutzt wird. Du hältst die Karte kurz an das Lesegerät, und schon fließen Daten. In der Arztpraxis funktioniert das mit der elektronischen Gesundheitskarte (eGK) genauso: Statt die Karte einzustecken, wird sie bei modernen Kartenterminals einfach aufgelegt oder ans Gerät gehalten. Auch Smartphones können heute NFC: So ist es möglich, sich bei manchen Gesundheitsdiensten direkt mit dem Handy anzumelden, ohne die Karte rauszunehmen.

## Überblick

NFC wurde als gemeinsamer Standard von Nokia, Philips (heute NXP Semiconductors) und Sony entwickelt. Am 18. März 2004 gründeten diese drei Unternehmen das NFC Forum, das den Standard seither pflegt. Die zugrunde liegende Übertragungstechnologie (NFCIP-1, ISO 18092) entstand ab 2002; als NFC Forum-Standard wurde sie 2004 mit der Gründung des Forums etabliert. Die technische Grundlage bildet die ISO-Norm 14443, die kontaktlose Chipkarten beschreibt.

Im deutschen Gesundheitswesen ist NFC an mehreren Stellen relevant:

**Kontaktloses Lesen der eGK**: Moderne Kartenterminals unterstützen neben dem Kontaktchip auch die NFC-Schnittstelle der [[eGK]]. Die eGK der zweiten Generation (eGK G2 und G2.1) besitzt eine Dual-Interface-Architektur: Sie ist sowohl kontaktbehaftet als auch kontaktlos nutzbar.

**CardLink**: Das CardLink-Verfahren ermöglicht es, die [[eGK]] über die NFC-Schnittstelle eines Smartphones auszulesen. Dabei wird die Karte an das Smartphone gehalten, das die Daten über eine verschlüsselte Verbindung an einen Dienst weiterleitet. CardLink wird z.B. für die Online-Einlösung von [[E-Rezept|E-Rezepten]] in der Apotheken-App genutzt.

**GesundheitsID und Smartphone-NFC**: Die [[Gesundheits-ID]] ist eine digitale Identität für GKV-Versicherte, die per App auf dem Smartphone bereitgestellt wird. Bei der Erstregistrierung wird die eGK per NFC ausgelesen, um die Identität zu verifizieren. Nach der Registrierung kann das Smartphone selbst als Authentisierungsmittel für TI-Dienste dienen.

**eID-Funktion des ePass**: Der neue elektronische Personalausweis ([[eID]]) und der [[ePass]] (Reisepass) nutzen ebenfalls NFC für die kontaktlose Identitätsprüfung.

> [!praxis-tipp] Praxis-Tipp: NFC am Empfang und in der Zahnarztpraxis
> Ob Ihr Kartenterminal NFC unterstützt, sehen Sie am Kontaktlos-Symbol auf dem Gerät oder im Handbuch (Stichwort "ISO 14443").
>
> In Ihrer Praxis bedeutet das: Patienten mit eGK G2.1 können die Karte einfach auflegen, statt sie einzustecken. Die eGK G2.1 erkennen Sie am WLAN-Symbol auf der Karte.
>
> 1. Kartenterminals mit RSA-Gerätezertifikat (gSMC-KT) müssen bis Ende 2026 getauscht werden. Fragen Sie Ihren IT-Dienstleister nach dem Ablaufdatum Ihrer Gerätekarte.
> 2. RFID-Schutzhüllen blockieren NFC. Bitten Sie Patienten, die Karte vor dem Auflegen aus der Hülle zu nehmen.
> 3. Ältere Karten ohne WLAN-Symbol müssen weiterhin eingesteckt werden. Beide Verfahren funktionieren parallel am selben Terminal.

> [!interesse-patient]
> Mit NFC auf dem Smartphone können GKV-Versicherte ihre eGK einmalig digital registrieren und danach mit dem Smartphone auf Gesundheitsdienste zugreifen. Die eGK wird dabei kurz (3-5 Sekunden) ans Smartphone gehalten. Voraussetzung: NFC-fähiges Smartphone und eine NFC-fähige eGK (eGK G2 oder neuer, erkennbar am WLAN-Symbol auf der Karte).

## Technische Details

### ISO/IEC 14443

ISO/IEC 14443 ist die technische Grundnorm für kontaktlose Chipkarten (Proximity Cards). Sie definiert:

- **Teil 1 und 2**: Physikalische Eigenschaften und Hochfrequenzleistung (13,56 MHz)
- **Teil 3**: Initialisierung und Antikollision (Typ A und Typ B)
- **Teil 4**: Übertragungsprotokoll (T=CL, Half-Duplex Block Transmission Protocol)

Sowohl die [[eGK]] als auch der [[HBA]] und die [[SMC-B]] nutzen die ISO-14443-Typ-A-Variante. Die Übertragungsrate beträgt üblicherweise 106 kbit/s, optional bis 848 kbit/s.

### NFC Forum und Betriebsmodi

Das NFC Forum definiert drei Betriebsmodi für NFC-fähige Geräte:

| Modus | Beschreibung | TI-Beispiel |
|---|---|---|
| Reader/Writer | Gerät liest passive NFC-Tags oder Karten | Kartenterminal liest eGK |
| Peer-to-Peer | Zwei NFC-Geräte tauschen Daten aus | (selten in TI genutzt) |
| Card Emulation | Gerät gibt sich als NFC-Karte aus | Smartphone emuliert eGK-Funktion (CardLink) |

### eGK G2 Dual Interface

Die eGK der zweiten Generation hat eine Dual-Interface-Architektur:

- **Kontaktbehaftet (ISO 7816)**: Klassisches Einführen in den Chipkartenleser
- **Kontaktlos (ISO 14443)**: Kontaktloses Auflegen auf das Lesegerät

Beide Interfaces greifen auf dieselbe Logik und dieselben Zertifikate zu. Die NFC-Schnittstelle ist durch PACE (Password Authenticated Connection Establishment) oder PIN-basierte Verfahren geschützt, damit die Karte nicht unbemerkt ausgelesen werden kann.

> [!frist-warnung] Frist-Warnung: Kartenterminal-Zertifikate (gSMC-KT) ablaufend
> **Rechtsgrundlage:** § 291 Abs. 2b SGB V i.V.m. gematik-Zulassungsbedingungen für eHealth-Kartenterminals
> **Frist:** Kartenterminals (gSMC-KT) mit RSA-Verschlüsselung verlieren Ende 2026 ihre TI-Zulassung. Konnektoren mit RSA-Zertifikaten mussten bis 31. Dezember 2025 ausgetauscht werden.
> **Handlungsbedarf:** Die verantwortliche Stelle hat sicherzustellen, dass alle eingesetzten eHealth-Kartenterminals und Konnektoren über gültige, ECC-basierte Zertifikate verfügen. Prüfen Sie Laufzeiten über Ihr PVS oder direkt beim Gerätehersteller.
> **Bei Nichtbeachtung:** Abgelaufene Komponenten werden von der TI abgelehnt. Ohne funktionsfähiges Kartenterminal sind VSDM-Abgleich, ePA-Zugriff und E-Rezept-Ausstellung nicht möglich; die TI-Anbindung und damit die Abrechnungsfähigkeit entfallen.

### CardLink-Verfahren

CardLink ist ein in der TI definiertes Verfahren, das Smartphone-NFC für Gesundheitsanwendungen nutzbar macht:

1. Der Nutzer hält seine [[eGK]] ans NFC-fähige Smartphone.
2. Eine App (z.B. eine Apotheken-App) liest die kontaktlose Schnittstelle der eGK aus.
3. Die Daten werden über eine Ende-zu-Ende-verschlüsselte Verbindung an den Fachdienst übertragen.
4. Der Fachdienst authentisiert den Nutzer anhand der eGK-Daten.

CardLink wurde 2024 für die [[E-Rezept]]-Einlösung in Apotheken-Apps zugelassen. Es erlaubt Versicherten, E-Rezepte einzulösen, ohne den [[Konnektoren|Konnektor]] oder ein stationäres Kartenterminal zu benötigen.

> [!praxis-tipp] Praxis-Tipp: CardLink in der Apotheke
> CardLink ermöglicht Kunden, E-Rezepte per Apotheken-App einzulösen, ohne die Karte ins Terminal zu stecken. Ihr AVS-System muss dafür keine Änderung vornehmen: Die CardLink-Abwicklung läuft über den E-Rezept-Fachdienst, den Ihr AVS bereits anspricht.
>
> In Ihrer Apotheke bedeutet das: Sie können E-Rezepte auch für Kunden einlösen, die kein Terminal benutzen wollen oder die Karte vergessen haben, solange die Karte per Smartphone gelesen werden kann.
>
> Häufiger Fehler: Kunden mit eGK G1 (ohne WLAN-Symbol) können CardLink nicht nutzen. Prüfen Sie die Karte vor dem Einlösen.
> Hinweis: CardLink ist eine Übergangslösung. Ab Ende 2026 soll das PoPP-Verfahren CardLink schrittweise ablösen.

> [!dev-quickstart] Dev Quickstart: eHealth-CardLink (eH-CL) Integration
> CardLink nutzt WebSocket für die Kommunikation zwischen App und eH-CL-Dienst. Die Schnittstelle ist in AsyncAPI spezifiziert.
>
> - **Protokoll**: WebSocket (TLS), Nachrichten im JSON-Format gemäß AsyncAPI-Schema
> - **Interface-Spezifikation**: [gematik/api-ehcl](https://github.com/gematik/api-ehcl)
> - **Technische Spezifikation**: gemSpec_eHealth-CardLink V1.0.0 auf [gemspec.gematik.de](https://gemspec.gematik.de/downloads/gemSpec/gemSpec_eHealth-CardLink/gemSpec_eHealth-CardLink_V1.0.0.pdf)
>
> **Android NFC Reader-Mode (eGK auslesen)**
> ```kotlin
> val nfcAdapter = NfcAdapter.getDefaultAdapter(context)
> nfcAdapter.enableReaderMode(
>     activity,
>     { tag -> handleTag(tag) },
>     NfcAdapter.FLAG_READER_ISO_DEP or NfcAdapter.FLAG_READER_NFC_A,
>     null
> )
> // ISO-DEP APDU senden (ISO 7816-4)
> val isoDep = IsoDep.get(tag)
> isoDep.connect()
> val response = isoDep.transceive(selectApdu)
> ```
> - Android NFC-Referenzimplementierung: [gematik/ref-CardReaderProvider-NFC-Android](https://github.com/gematik/ref-CardReaderProvider-NFC-Android)
> - iOS/Swift Framework: [gematik/ref-OpenHealthCardKit](https://github.com/gematik/ref-OpenHealthCardKit)

> [!patientenrecht] Patientenrecht: E-Rezept per Smartphone einlösen
> Sie können Ihr E-Rezept direkt per Smartphone in einer Apotheken-App einlösen. Dafür brauchen Sie kein Kartenterminal in der Arztpraxis.
>
> **So geht es (CardLink):**
> 1. Laden Sie eine Apotheken-App herunter (z.B. die App Ihrer Online-Apotheke).
> 2. Wählen Sie die Option "E-Rezept einlösen" oder "Mit eGK anmelden".
> 3. Halten Sie Ihre Gesundheitskarte (eGK) an die Rückseite Ihres Smartphones.
> 4. Halten Sie die Karte 3 bis 5 Sekunden ruhig, bis die App die Daten gelesen hat.
> 5. Bestätigen Sie die Bestellung oder Abholung in der App.
>
> **Voraussetzung:** Ihr Smartphone muss NFC unterstützen. Das erkennen Sie am WLAN-ähnlichen Symbol auf Ihrer Gesundheitskarte. Ältere Karten ohne dieses Symbol funktionieren nicht per NFC.

> [!frist-warnung] Frist-Warnung: ePA-Anbindungspflicht mit NFC-fähiger eGK
> **Rechtsgrundlage:** § 341 Abs. 1 SGB V i.V.m. § 342 SGB V (ePA für alle)
> **Frist:** Seit 15. Januar 2025 sind alle zugelassenen Leistungserbringer (Arztpraxen, Apotheken, Krankenhäuser) verpflichtet, die ePA zu unterstützen. Das CardLink-Verfahren zur NFC-basierten Einlösung von E-Rezepten ist seit 2024 in der Apotheke zugelassen.
> **Handlungsbedarf:** Leistungserbringer sind verpflichtet, sicherzustellen, dass ihr Primärsystem ePA-fähig ist und NFC-fähige eGK (G2 oder neuer) korrekt verarbeitet werden. Prüfen Sie, ob Ihr Kartenterminal die kontaktlose Schnittstelle der eGK G2.1 unterstützt.
> **Bei Nichtbeachtung:** Fehlende ePA-Unterstützung gilt als Pflichtverletzung; die TI-Anbindung ist Voraussetzung für die Abrechnung nach § 295 SGB V.

> [!klinik-integration] Klinik-Integration: NFC-Kartenterminals im stationären Betrieb
> **Aufnahme:** Gematik-zertifizierte eHealth-Kartenterminals mit vier Kartenschächten (eGK, HBA, SMC-B, gSMC-KT) unterstützen NFC für eGK G2/G2.1. Bei mehr als 500 Aufnahmen täglich mehrere Terminals parallel einplanen. Der [[VSDM]]-Abgleich wird durch das Einlesen der eGK ausgelöst und per HL7 ADT^A01 an das [[KIS]] übermittelt.
> **Notaufnahme:** Mobile NFC-fähige Kartenterminals ermöglichen das eGK-Einlesen direkt am Bett und in der Triagezone. Bei Erstversorgung hat die klinische Behandlung Vorrang. Der VSDM-Abgleich kann nachgeholt werden. Der Offline-Modus (VSDM-Fallback) muss im KIS aktiviert und regelmäßig getestet sein.
> **Ausfallszenario:** Netzwerkausfall zwischen Terminal und Konnektor blockiert den VSDM-Abgleich. Eskalationspfad und Verantwortlichkeit für diesen Fall schriftlich im Betriebshandbuch festhalten.

### GesundheitsID-Registrierung via NFC

Bei der Erstregistrierung der [[Gesundheits-ID]] wird die NFC-Schnittstelle der eGK genutzt:

1. Der Versicherte öffnet die App seiner Krankenkasse.
2. Die App aktiviert die Kamera oder den NFC-Reader.
3. Die eGK wird ans Smartphone gehalten (3-5 Sekunden).
4. Die App liest die Versicherungsstammdaten von der eGK.
5. Nach Verifikation durch den [[IDP|sektoralen IDP]] der Kasse ist die GesundheitsID aktiv.

### Sicherheitsaspekte

NFC arbeitet auf einer Reichweite von maximal etwa 10 cm. Das verringert das Risiko unbemerkten Auslesens aus der Ferne. Zusätzlich schützen folgende Mechanismen:

- **PACE**: Kryptografisches Handshake-Protokoll, das die eGK-Verbindung absichert
- **EAC (Extended Access Control)**: Schützt den Zugriff auf sensible Datenbereiche des [[ePass]]
- **Metallic shielding**: Viele Kartenhüllen blockieren NFC physisch (sogenannte RFID-Schutzhüllen)

> [!patientenrecht] Patientenrecht: Kann meine Karte heimlich ausgelesen werden?
> Nein. Ihre Gesundheitskarte ist technisch geschützt. Sie kann nicht einfach aus der Tasche gelesen werden.
>
> **Was schützt Sie:**
> - Die NFC-Reichweite beträgt maximal 10 cm. Jemand müsste die Karte fast berühren.
> - Die Karte nutzt ein Sicherheitsprotokoll (PACE). Ein Lesegerät muss sich zuerst authentifizieren.
> - Wenn Sie ganz sichergehen wollen: Kaufen Sie eine RFID-Schutzhülle für Ihre Karte. Diese blockiert NFC vollständig.
>
> **Wichtig:** Nur Praxen, Apotheken und von Ihnen autorisierte Apps können die Kartendaten nutzen. Ein zufälliges Lesegerät im Zug oder im Supermarkt kann Ihre Karte nicht auslesen.

> [!interesse-technik]
> ISO/IEC 14443 Typ A, 13,56 MHz, Bitrate 106-848 kbit/s. NFC-Chipkarten-Protokoll in der TI: ISO 7816-4 (APDU-Struktur) über kontaktlose Schnittstelle. CardLink-Spezifikation: gemSpec_CardLink (gematik Fachportal). Smartphone-NFC-APIs: Android HCE (Host Card Emulation) für Card-Emulation-Modus, Android/iOS NFC API für Reader-Modus. Reichweite: typisch 4 cm, maximal ca. 10 cm.

## Verknüpfungen

- [[eGK]] (Gesundheitskarte mit Dual-Interface: kontaktbehaftet und NFC)
- [[HBA]] (Heilberufsausweis, ebenfalls NFC-fähig)
- [[SMC-B]] (Institutionskarte mit NFC-Interface)
- [[Kartenterminal]] (liest eGK kontaktlos per NFC)
- [[Gesundheits-ID]] (Registrierung via NFC-Readout der eGK)
- [[E-Rezept]] (CardLink-Verfahren für kontaktlose Einlösung)
- [[eID]] (Personalausweis mit NFC-eID-Funktion)
- [[ePass]] (Reisepass mit NFC und EAC)
- [[IDP]] (sektoraler IDP für GesundheitsID-Authentisierung)
- [[TI-2.0]] (CardLink als Teil des neuen Zugangswegs ohne Konnektor)

## Quellen

- [ISO/IEC 14443: Identification cards — Contactless integrated circuit cards](https://www.iso.org/standard/73596.html)
- [NFC Forum: About NFC](https://nfc-forum.org/learn/nfc-technology/)
- [gematik Fachportal: CardLink-Spezifikation](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
- [BSI: NFC-Grundlagen und Sicherheit](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Smarthome-IoT-Wearables/NFC/nfc_node.html)
