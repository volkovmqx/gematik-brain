---
title: E-Rezept-Fachdienst
audience: [technical]
tags: [infrastruktur, e-rezept, fachdienst, fhir, api]
aliases: [E-Rezept-Dienst, Rezept-Fachdienst, gematik E-Rezept-Fachdienst]
relevance:
  sectors: [arztpraxis, apotheke, krankenhaus, zahnarzt, hersteller, ti-infrastruktur, it-dienstleister]
  interests: [technik, compliance]
maturity: immergruen
---

# E-Rezept-Fachdienst

Der **E-Rezept-Fachdienst** ist der zentrale FHIR-basierte Backend-Dienst der [[gematik]], der alle elektronischen Rezepte speichert, verwaltet und zwischen Verordnern, Apotheken, Krankenkassen und Patienten vermittelt.

## Erklärt für Einsteiger

Wenn ein Arzt ein E-Rezept ausstellt, geht es nicht direkt an die Apotheke. Es landet zuerst in einem zentralen System, dem E-Rezept-Fachdienst. Von dort kann es die Apotheke abholen, wenn der Patient den QR-Code oder Token vorzeigt. Der Fachdienst ist wie ein digitales Postfach: Der Arzt legt das Rezept hinein, die Apotheke holt es heraus, und beide wissen immer, welchen Status das Rezept hat.

## Überblick

Der E-Rezept-Fachdienst wird seit dem verpflichtenden Pflichtstart des E-Rezepts am **1. Januar 2024** flächendeckend genutzt. Er wird von der [[gematik]] betrieben und nach den Vorgaben der [[gematik]]-Spezifikation gemSpec_FD_eRp entwickelt und zertifiziert.

Der Fachdienst unterstützt alle Rezepttypen, die im deutschen Gesundheitswesen per E-Rezept abgewickelt werden:

- **Kassenrezepte (Muster 16)**: Verschreibungspflichtige Arzneimittel für GKV-Versicherte
- **Privatrezepte**: Verordnungen außerhalb des GKV-Leistungskatalogs
- **[[DiGA]]-Rezepte**: Digitale Gesundheitsanwendungen (seit Oktober 2025)
- **Hilfsmittelverordnungen**: Pflicht ab 1. Juli 2026
- **[[eVO|Heilmittelverordnungen]]**: Pflicht ab 1. Januar 2027
- **T-Rezepte** (Thalidomid, Lenalidomid, Pomalidomid): Spezifikation veröffentlicht, Einführung 2026 geplant

Bis zum **17. Oktober 2025** wurden bereits **eine Milliarde E-Rezepte** über den Fachdienst eingelöst.

> [!interesse-compliance]
> PVS-Hersteller, AVS-Hersteller und andere Primärsystem-Hersteller benötigen eine gematik-Zulassung, um auf den E-Rezept-Fachdienst zugreifen zu dürfen. Die Zulassung setzt Konformitätsprüfungen gegen die FHIR-Profile und Schnittstellentests voraus. Stand März 2026 haben über 1.100 Primärsysteme die Konformitätsbestätigung erhalten. Neue Rezepttypen (T-Rezept, Hilfsmittel) erfordern separate Zertifizierungszyklen.

## Technische Details

### Architektur

Der E-Rezept-Fachdienst ist ein FHIR-Server, der als TI-Fachdienst innerhalb der [[Telematikinfrastruktur]] betrieben wird. Er ist nur aus der TI erreichbar (nicht direkt aus dem öffentlichen Internet). Primärsysteme greifen über die TI-Verbindung ([[Konnektoren]] oder [[TI-Gateway]]) auf den Fachdienst zu.

Die interne Verarbeitung läuft in einer **[[VAU|Vertrauenswürdigen Ausführungsumgebung (VAU)]]**: Rezeptdaten werden innerhalb der VAU entschlüsselt und verarbeitet, sodass der Fachdienst-Betreiber keinen Klartextzugriff auf Rezeptinhalte hat.

### FHIR-Endpunkte

Der Fachdienst stellt REST-Endpunkte nach FHIR R4 bereit. Die Basis-URL lautet:

```
https://erp.zentral.erp.splitdns.ti-dienste.de/
```

Zentrale Endpunkte:

| Endpunkt | Methode | Funktion |
|---|---|---|
| `/Task` | POST | Neues Rezept erstellen (Verordner) |
| `/Task/{id}/$activate` | POST | Rezept aktivieren (Apotheke) |
| `/Task/{id}/$accept` | POST | Rezept annehmen (Apotheke) |
| `/Task/{id}/$close` | POST | Rezept dispensieren (Apotheke) |
| `/Task/{id}/$abort` | POST | Rezept stornieren |
| `/MedicationDispense` | GET | Dispensierdaten abfragen |
| `/Communication` | POST/GET | Nachrichten zwischen Akteuren |

> [!interesse-technik]
> Alle Anfragen an den E-Rezept-Fachdienst müssen mit einem gültigen [[IDP]]-Token (ACCESS_TOKEN, Scope `e-rezept`) authentifiziert sein. Der Workflow für Verordner (PVS) läuft so ab: (1) IDP-Token holen, (2) Task erstellen via POST /Task, (3) FHIR-Bundle mit KBV-Profil signieren (QES via [[HBA]]), (4) Task aktivieren. Für Apotheken (AVS): (1) Token holen, (2) Task akzeptieren via $accept, (3) Dispensierung via $close. Vollständige Dokumentation: [github.com/gematik/api-erp](https://github.com/gematik/api-erp). FHIR-Profile: [simplifier.net/erezept](https://simplifier.net/erezept).

### Datenformate

Rezepte werden als FHIR-Bundle nach dem KBV-Profil `KBV_PR_ERP_Bundle` gespeichert. Das Bundle enthält:

- `KBV_PR_ERP_Prescription`: Die eigentliche Verordnung (Medikament, Dosierung, Indikation)
- `KBV_PR_FOR_Patient`: Patientenstammdaten
- `KBV_PR_FOR_Practitioner`: Verordnerdaten
- `KBV_PR_FOR_Coverage`: Kostenträgerdaten

Das Bundle wird mit einer **qualifizierten elektronischen Signatur ([[QES]])** des [[HBA]] signiert. Die Signatur stellt die Rechtsgültigkeit der Verordnung sicher.

### Token-System

Der Fachdienst verwaltet Rezepte über das Task-Konzept. Jeder Task hat:

- Eine eindeutige **Task-ID** (36-stellige UUID)
- Einen **AccessCode** (geheimer Code, den der Patient erhält)
- Einen **Secret** (nur für die Apotheke nach $accept sichtbar)

Patient und Arztpraxis erhalten den AccessCode, der in Form eines DataMatrix-Codes (oder QR-Codes) ausgedruckt oder in der E-Rezept-App gespeichert wird. Die Apotheke scannt diesen Code und kann damit den Task akzeptieren.

### ePA-Integration

Seit Januar 2025 übermittelt der E-Rezept-Fachdienst Dispensierdaten automatisch an die [[eML|Elektronische Medikationsliste (eML)]] in der [[ePA]] der Versicherten. Dieser Prozess läuft serverseitig ohne Zutun des Patienten oder der Apotheke.

### Testumgebungen

Die [[gematik]] betreibt mehrere Testumgebungen für den E-Rezept-Fachdienst:

- **RU (Referenzumgebung)**: Für Zulassungstests neuer Primärsystemversionen
- **TU (Testumgebung)**: Für Integrationstests von Herstellern
- **PU (Produktionsumgebung)**: Produktivbetrieb

Weitere Details zu den Testumgebungen: [[Testumgebung]].

## Verknüpfungen

- [[E-Rezept]] (Anwendung, für die der Fachdienst die Backend-Infrastruktur bildet)
- [[FHIR]] (Datenformat des Fachdienstes)
- [[KBV]] (definiert die FHIR-Profile für Rezepte)
- [[IDP]] (stellt Authentifizierungstoken für Fachdienst-Zugriffe aus)
- [[HBA]] (für die QES-Signatur der Verordnung)
- [[SMC-B]] (Einrichtungsauthentisierung beim Fachdienst-Zugriff)
- [[VAU]] (Vertrauenswürdige Ausführungsumgebung des Fachdienstes)
- [[ePA]] (empfängt Dispensierdaten vom E-Rezept-Fachdienst)
- [[eML]] (Medikationsliste in der ePA, gespeist durch Fachdienst-Daten)
- [[AVS]] (Apothekenverwaltungssysteme, die auf den Fachdienst zugreifen)
- [[PVS]] (Praxisverwaltungssysteme, die Rezepte an den Fachdienst senden)
- [[Testumgebung]] (RU/TU/PU für Entwicklung und Zulassung)

## Quellen

- [gematik: E-Rezept-Fachdienst API-Dokumentation (GitHub)](https://github.com/gematik/api-erp)
- [gematik Fachportal: E-Rezept](https://fachportal.gematik.de/anwendungen/e-rezept)
- [KBV FHIR-Profile für das E-Rezept (Simplifier.net)](https://simplifier.net/erezept)
- [gemSpec_FD_eRp – gematik Spezifikation](https://gemspec.gematik.de/docs/gemSpec/gemSpec_FD_eRp/latest/)
