---
title: SOAP
audience: [technical]
tags: [standards, webservices, protokoll, konnektor, schnittstelle]
aliases: [Simple Object Access Protocol, SOAP-Webservices, WSDL, WS-Security]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, krankenhaus, arztpraxis, startup]
  interests: [technik, business]
maturity: wachsend
---

# SOAP

**SOAP (Simple Object Access Protocol)** ist ein XML-basiertes Nachrichtenprotokoll für den strukturierten Datenaustausch zwischen Computersystemen, das in der [[Telematikinfrastruktur]] als primäres Kommunikationsprotokoll zwischen [[Konnektoren|Konnektor]] und [[Primärsystem]] eingesetzt wird.

## Erklärt für Einsteiger

Stell dir vor, zwei Büros müssen sich Briefe schicken. Damit jeder Brief richtig ankommt und verstanden wird, einigen sie sich auf ein festes Formular: Oben steht der Absender, dann der Inhalt, dann eine Unterschrift. SOAP ist so ein Formular für Computer. Wenn eine Arztpraxissoftware den Konnektor bittet, ein Rezept zu signieren, schickt sie eine SOAP-Nachricht: ein fest strukturiertes Paket mit dem Auftrag drin. Der Konnektor liest das Paket, führt die Signatur aus und schickt die Antwort im selben Format zurück.

## Überblick

SOAP entstand Ende der 1990er Jahre als Standard für den Austausch von Nachrichten zwischen Diensten im Internet. Das W3C veröffentlichte SOAP 1.2 im Jahr 2003 als offizielle Empfehlung. SOAP ist protokollunabhängig, wird aber fast ausschließlich über HTTP(S) übertragen.

In der deutschen Gesundheits-IT ist SOAP seit dem Aufbau der [[Telematikinfrastruktur]] das verbindliche Schnittstellenformat zwischen [[Primärsystem|Primärsystemen]] ([[PVS]], [[KIS]], [[AVS]]) und dem [[Konnektoren|Konnektor]]. Die [[gematik]] legt in der gemSpec_Kon (Konnektor-Spezifikation) fest, welche SOAP-Dienste der Konnektor anbieten muss und welche XML-Strukturen dabei zu verwenden sind.

Mit [[TI-2.0|TI 2.0]] und dem Übergang zum [[TI-Gateway]] werden SOAP-Schnittstellen schrittweise durch modernere REST- und gRPC-APIs ersetzt. Bestehende Primärsysteme müssen für den Übergang angepasst werden.

> [!interesse-technik]
> Die SOAP-Schnittstelle des Konnektors ist vollständig in gemSpec_Kon definiert. Alle SOAP-Dienste verwenden WSDL-Beschreibungen, die gematik veröffentlicht. Der Discovery-Endpunkt des Konnektors (http://\<konnektor-ip\>/connector.sds) liefert eine Service Directory Specification (SDS) mit allen verfügbaren Diensten und ihren SOAP-Endpunkten. WS-Security mit X.509-Zertifikaten sichert die Kommunikation zwischen Primärsystem und Konnektor.

## Technische Details

### Nachrichtenaufbau

Eine SOAP-Nachricht ist ein XML-Dokument mit folgender Struktur:

```xml
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
    <!-- Metadaten, z.B. WS-Security-Token -->
  </soap:Header>
  <soap:Body>
    <!-- Nutzdaten: Aufruf oder Antwort -->
    <SignDocument>
      <document>...</document>
    </SignDocument>
  </soap:Body>
</soap:Envelope>
```

Der **Envelope** ist der äußere Container. Der **Header** enthält optionale Metadaten, z.B. Authentisierungstokens via WS-Security. Der **Body** enthält den eigentlichen Aufruf oder die Antwort.

### WSDL (Web Services Description Language)

SOAP-Dienste werden durch WSDL-Dateien beschrieben. Eine WSDL-Datei definiert:

- Welche Operationen ein Dienst unterstützt (z.B. `SignDocument`, `VerifyDocument`)
- Welche Parameter erwartet werden
- Welche Fehlercodes möglich sind
- An welchem Endpunkt der Dienst erreichbar ist

Die [[gematik]] veröffentlicht die WSDL-Dateien für alle Konnektor-Dienste als Teil der offiziellen Spezifikation.

### WS-Security

WS-Security ist eine Erweiterung für SOAP-Nachrichten, die Vertraulichkeit, Integrität und Authentizität sicherstellt. Im TI-Kontext wird WS-Security genutzt, um:

- Das Primärsystem gegenüber dem Konnektor zu authentisieren (Client-Zertifikat)
- Die Integrität der übertragenen Daten zu sichern
- Tokens für laufende Sessions zu verwalten

### Konnektor-SOAP-Dienste

Die gemSpec_Kon definiert folgende SOAP-Dienste, die jeder zugelassene Konnektor implementieren muss:

| Dienst | Zweck |
|---|---|
| SignaturDienst | Erstellt und prüft qualifizierte Signaturen ([[QES]]) |
| VerschlüsselungsDienst | Ver- und Entschlüsselung für [[KIM]] |
| ZertifikatsDienst | Liest Smartcard-Zertifikate, prüft via [[OCSP]] |
| EventDienst | Benachrichtigungen über Kartenereignisse |
| KartendiensteKomfort | Vereinfachte Kartenadministration |
| AuthSignaturDienst | Authentisierungssignatur mit [[eGK]] oder [[HBA]] |

### Verbindungsaufbau

Das Primärsystem entdeckt den Konnektor über den Discovery-Endpunkt:

```
GET http://<konnektor-ip>/connector.sds
```

Die zurückgegebene Service Directory Specification (SDS) enthält alle verfügbaren Dienste mit ihren SOAP-Endpunkten. Anschließend baut das Primärsystem eine TLS-gesicherte Verbindung zum jeweiligen Dienst auf.

> [!dev-quickstart] Dev Quickstart: Konnektor Discovery und SignDocument
> **1. SDS abrufen**
> ```bash
> curl http://<konnektor-ip>/connector.sds
> ```
> Antwort: XML mit Endpoints aller SOAP-Dienste, z.B. `https://<konnektor-ip>:443/webservices/service/SignatureService`
>
> **2. SignDocument aufrufen (nonQES, CAdES)**
> ```xml
> POST https://<konnektor-ip>/webservices/service/SignatureService
> Content-Type: application/soap+xml; charset=UTF-8
>
> <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
>                xmlns:sig="http://ws.gematik.de/conn/SignatureService/v7.5">
>   <soap:Header/>
>   <soap:Body>
>     <sig:SignDocument>
>       <sig:CardHandle>HBA-1</sig:CardHandle>
>       <sig:Context>
>         <sig:MandantId>Mandant1</sig:MandantId>
>         <sig:ClientSystemId>PVS1</sig:ClientSystemId>
>         <sig:WorkplaceId>AP1</sig:WorkplaceId>
>       </sig:Context>
>       <sig:TvMode>NONE</sig:TvMode>
>       <sig:DocumentList>
>         <sig:Document ID="Doc1">
>           <sig:Base64Data MimeType="text/plain">SGVsbG8gV2VsdA==</sig:Base64Data>
>         </sig:Document>
>       </sig:DocumentList>
>     </sig:SignDocument>
>   </soap:Body>
> </soap:Envelope>
> ```
> - WSDL: `https://<konnektor-ip>/webservices/service/SignatureService?wsdl`
> - XSD/WSDL-Dateien: [gematik/api-telematik](https://github.com/gematik/api-telematik) (Branch OPB5)
> - Beispiel-Requests: [gematik/examples-TelematikInterfaces](https://github.com/gematik/examples-TelematikInterfaces/tree/master/conn/SignatureService)
> - Spec: gemSpec_Kon V5.27.0 auf [gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/latest/)

### SOAP vs. REST im TI-Kontext

| Merkmal | SOAP | REST (TI 2.0) |
|---|---|---|
| Nachrichtenformat | XML | JSON / FHIR |
| Schnittstellenbeschreibung | WSDL | OpenAPI |
| Protokoll | HTTP(S) | HTTP(S) |
| Sicherheit | WS-Security | OAuth 2.0, TLS |
| Verbreitung im TI | Konnektor-Schnittstelle (heute) | TI-Gateway (ab 2025) |

> [!klinik-integration] Klinik-Integration: SOAP und Konnektor-Hochverfügbarkeit im Klinikbetrieb
> Das [[KIS]] kommuniziert mit dem Konnektor ausschließlich über SOAP. Ein einzelner Einbox-Konnektor ist für den 24/7-Klinikbetrieb kein ausreichendes Hochverfügbarkeitskonzept.
>
> **Deployment:** Für Häuser der Mittel- und Maximalversorgung empfiehlt sich der Highspeed-Konnektor (HSK) im Rechenzentrumsbetrieb oder der Wechsel zum [[TI-Gateway]] (entspricht ca. 4.000 Einbox-Konnektoren). Redundanter Betrieb (Active/Passive mit Heartbeat-Monitoring) einplanen.
> **KIS-Konfiguration:** Die SOAP-Endpunkt-URL des Konnektors wird im Primärsystem hinterlegt (Discovery: `http://<konnektor-ip>/connector.sds`). Bei HSK oder TI-Gateway ist dies eine Load-Balancer-IP im klinischen Netz. KIS-Hersteller wie Oracle Health i.s.h.med, Dedalus ORBIS und Meierhofer M-KIS unterstützen alle die gemSpec_Kon-SOAP-API.
> **Zertifikate:** WS-Security-Clientzertifikate für das KIS müssen aktiv überwacht und vor Ablauf erneuert werden. Ablaufende Zertifikate führen zum sofortigen Ausfall aller SOAP-abhängigen TI-Dienste (ePA, KIM, E-Rezept, VSDM) ohne Vorwarnung.

### Migration zu TI 2.0

Mit dem [[TI-Gateway]] als Software-Alternative zum Konnektor werden die SOAP-Schnittstellen nicht abrupt abgeschaltet. Die Migration verläuft in Phasen:

1. **Parallelbetrieb**: Konnektor und TI-Gateway laufen gleichzeitig. Primärsysteme wählen den Zugangsweg.
2. **REST/gRPC-Adapter**: Das TI-Gateway bietet für Primärsysteme zunächst eine SOAP-kompatible Schicht an, um die Migration zu erleichtern.
3. **Vollständige Migration**: Neue Anwendungen und überarbeitete Primärsysteme nutzen ausschließlich die neuen REST- und gRPC-APIs.

> [!dev-quickstart] Dev Quickstart: WSDL-Download und Validierung
> Alle offiziellen WSDL- und XSD-Dateien für Konnektor-Dienste:
> ```bash
> # WSDL-Dateien vom gematik Fachportal herunterladen
> # https://fachportal.gematik.de/schnelleinstieg/downloadcenter/schemadateien-wsdl-und-andere-dateien
>
> # Lokale WSDL-Validierung mit wsdl-validator (Node.js)
> npm install -g wsdl-validator
> wsdl-validator SignatureService.wsdl
> ```
> - Namespace SignaturDienst v7.5: `http://ws.gematik.de/conn/SignatureService/v7.5`
> - Namespace EventService: `http://ws.gematik.de/conn/EventService/v7.2`
> - Alle Namespaces und Versionen: [api-telematik/ReleaseNotes](https://github.com/gematik/api-telematik/blob/OPB5/ReleaseNotes.md)
> - POC Komfortsignatur mit vollständigem Client-Beispiel: [gematik/poc-komfortsignatur](https://github.com/gematik/poc-komfortsignatur)

> [!praxis-tipp] Praxis-Tipp: Konnektor-Ablauf und TI-Gateway-Umstieg
> SOAP läuft im Hintergrund. Ihr PVS spricht über SOAP mit dem Konnektor. Sie merken davon nichts, bis der Konnektor ausläuft oder getauscht werden muss.
>
> In Ihrer Praxis bedeutet das jetzt konkret:
> 1. Prüfen Sie, ob Ihr Konnektor noch gültig ist. Konnektoren mit RSA-Zertifikaten sind seit 31. Dezember 2025 abgelaufen.
> 2. Fragen Sie Ihren PVS-Anbieter, ob Ihr System bereits für das TI-Gateway zertifiziert ist.
> 3. HBA und SMC-B mit RSA-Verschlüsselung können noch bis 30. Juni 2026 genutzt werden. Bestellen Sie rechtzeitig neue Karten.
> 4. Beim Wechsel auf das TI-Gateway entfällt die Hardware im Schrank. Ihr PVS kommuniziert dann über eine verschlüsselte Cloud-Verbindung. Die SOAP-Aufrufe laufen weiterhin im Hintergrund.
>
> Typischer Fehler: PVS-Update vergessen. Das TI-Gateway braucht ein aktuelles PVS, das ECC-Verschlüsselung unterstützt. Ohne Update keine Verbindung.

> [!interesse-business]
> PVS-, KIS- und AVS-Hersteller müssen ihre SOAP-Implementierungen auf die neuen REST/gRPC-Schnittstellen des TI-Gateways umstellen. Für bestehende zertifizierte Systeme gelten Übergangsfristen. Hersteller, die frühzeitig auf die neuen APIs migrieren, haben einen Wettbewerbsvorteil, da Kunden den Konnektor einsparen können.

## Verknüpfungen

- [[Konnektoren]] (nutzen SOAP als primäre Schnittstelle zum Primärsystem)
- [[Primärsystem]] (ruft Konnektor-Dienste über SOAP auf)
- [[PVS]] (Praxisverwaltungssystem als Primärsystem im ambulanten Bereich)
- [[KIS]] (Krankenhausinformationssystem als Primärsystem im stationären Bereich)
- [[AVS]] (Apothekenverwaltungssystem als Primärsystem in Apotheken)
- [[TI-Gateway]] (cloudbasierter Konnektor-Ersatz mit REST/gRPC-APIs)
- [[QES]] (wird über den SignaturDienst des Konnektors via SOAP aufgerufen)
- [[KIM]] (Verschlüsselung via SOAP-VerschlüsselungsDienst)
- [[gematik]] (definiert die SOAP-Schnittstellen in gemSpec_Kon)
- [[TI-2.0]] (Migrationspfad weg von SOAP hin zu REST/gRPC)

## Quellen

- [W3C: SOAP Version 1.2 (Empfehlung)](https://www.w3.org/TR/soap12/)
- [gematik Fachportal: gemSpec_Kon (Konnektor-Spezifikation)](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon/latest/)
- [gematik Fachportal: TI-Gateway](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
