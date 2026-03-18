---
title: gRPC
audience: [technical]
tags: [technologies, protokoll, api, ti-2-0, soap]
aliases: [Google Remote Procedure Call, gRPC, Remote Procedure Call]
maturity: setzling
---

# gRPC

**gRPC** (gRPC Remote Procedure Calls) ist ein modernes, binärbasiertes RPC-Framework von Google, das HTTP/2 als Transport und Protocol Buffers als Serialisierungsformat verwendet. In der [[Telematikinfrastruktur]] 2.0 ergänzt und ersetzt es schrittweise SOAP-basierte Schnittstellen.

## Erklärt für Einsteiger

Wenn zwei Computerprogramme miteinander reden, benutzen sie eine Sprache und ein Format. Früher hat die TI dafür eine Sprache namens SOAP benutzt, die sehr ausführlich und textbasiert ist, ähnlich wie ein Brief mit vielen Formalitäten. gRPC ist wie eine kurze Sprachnachricht statt eines langen Briefes: schneller, kleiner und effizienter. Der Inhalt wird als kompaktes Binärformat übertragen, nicht als lesbarer Text. Das macht Systemabfragen deutlich schneller.

## Überblick

gRPC wurde ursprünglich von Google entwickelt und im Februar 2015 als Open-Source-Projekt veröffentlicht. Im Februar 2017 wurde es in die Cloud Native Computing Foundation (CNCF) aufgenommen. Es ist in nahezu allen modernen Programmiersprachen verfügbar (Java, Go, C#, Python, JavaScript, Rust u.a.).

In der deutschen [[Telematikinfrastruktur]] spielte bislang SOAP (Simple Object Access Protocol) die zentrale Rolle für die Kommunikation zwischen Primärsystemen und dem [[Konnektoren|Konnektor]] sowie zwischen Fachdiensten. Mit der Einführung von TI 2.0 werden neue Schnittstellen auf gRPC umgestellt oder ergänzt. Der [[TI-Gateway]], der den Hardware-Konnektor ablöst, unterstützt gRPC neben den alten SOAP-Schnittstellen.

### Abgrenzung zu SOAP und REST

| Merkmal | SOAP | REST | gRPC |
|---|---|---|---|
| Format | XML (Text) | JSON (Text) | Protocol Buffers (Binär) |
| Transport | HTTP/1.1, HTTP/2 | HTTP/1.1, HTTP/2 | HTTP/2 (Pflicht) |
| Vertrag | WSDL | OpenAPI | .proto-Datei |
| Streaming | Nein | Nein (SSE möglich) | Ja (bidirektional) |
| Performance | Niedrig | Mittel | Hoch |

SOAP ist ausführlich und textbasiert. Es war in den 2000er-Jahren der Standard für Web Services, ist aber für moderne Microservices-Architekturen zu schwergewichtig. REST ist einfacher, nutzt aber immer noch menschenlesbares JSON. gRPC ist am effizientesten, dafür weniger menschenlesbar ohne Werkzeuge.

## Technische Details

### Protocol Buffers (Protobuf)

gRPC nutzt **Protocol Buffers** (Protobuf) als Schnittstellenbeschreibungssprache und Serialisierungsformat. Eine `.proto`-Datei beschreibt Services und Nachrichten:

```proto
syntax = "proto3";

service PatientService {
  rpc GetPatientData (PatientRequest) returns (PatientResponse);
}

message PatientRequest {
  string kvnr = 1;
}
```

Aus dieser `.proto`-Definition werden automatisch typsichere Client- und Serverstubs für alle unterstützten Programmiersprachen generiert. Das verhindert Schnittstellenfehler und vereinfacht die Integration.

### HTTP/2 und Streaming

gRPC verwendet ausschließlich HTTP/2 als Transportprotokoll. Das ermöglicht:

- **Multiplexing**: Mehrere gRPC-Anfragen über eine einzige TCP-Verbindung
- **Bidirektionales Streaming**: Client und Server können gleichzeitig Datenströme senden und empfangen
- **Header-Komprimierung**: HTTP/2 HPACK reduziert den Overhead bei wiederholten Anfragen
- **Server-Push**: Server kann Daten proaktiv senden, ohne dass der Client fragt

### Einsatz in TI 2.0

Im Kontext der [[Telematikinfrastruktur]] 2.0 werden gRPC-Schnittstellen für folgende Bereiche eingeführt:

- **[[TI-Gateway]]**: Das TI-Gateway unterstützt gRPC als neue API für Primärsysteme, die keine SOAP-Schnittstelle mehr benötigen.
- **Fachdienste**: Neue TI-Fachdienste (z.B. für [[VSDM]] 2.0) sind mit gRPC-APIs geplant.
- **Konnektor-Nachfolger**: Neue Primärsysteme können über gRPC direkt mit TI-Diensten kommunizieren, ohne den Umweg über den SOAP-Konnektor.

Die alten [[Konnektoren|Konnektor]]-SOAP-Schnittstellen bleiben während der Migrationsphase erhalten, damit bestehende Primärsysteme ohne Anpassung weiterlaufen können. Neue Integrationen sollen gRPC verwenden.

### Sicherheit

gRPC erzwingt standardmäßig [[mTLS]] (Mutual TLS) für alle Verbindungen. Das passt zur [[Zero-Trust]]-Architektur der TI 2.0: Jede Verbindung ist verschlüsselt und beide Seiten authentisieren sich gegenseitig mit Zertifikaten.

## Verknüpfungen

- [[Konnektoren]] (SOAP-basierte Schnittstellen; werden durch gRPC in TI 2.0 ergänzt)
- [[TI-Gateway]] (unterstützt gRPC als neue API für Primärsysteme)
- SOAP (älteres Protokoll, das gRPC in TI 2.0 ablöst)
- [[mTLS]] (TLS-Variante mit gegenseitiger Authentisierung; gRPC-Standard)
- [[Zero-Trust]] (TI-2.0-Sicherheitsarchitektur; gRPC ist kompatibel)
- [[Telematikinfrastruktur]] (Rahmeninfrastruktur)
- [[VSDM]] (erste TI-2.0-Anwendung; setzt neue API-Konzepte ein)

## Quellen

- [gRPC: Offizielle Website](https://grpc.io/)
- [gRPC: Wikipedia (englisch)](https://en.wikipedia.org/wiki/GRPC)
- [gematik Fachportal: TI 2.0 Architektur](https://fachportal.gematik.de/telematikinfrastruktur/ti-2-0)
- [Google Cloud: gRPC Overview](https://docs.cloud.google.com/api-gateway/docs/grpc-overview)
