---
title: Testumgebung
audience: [technical]
tags: [infrastruktur, entwicklung, testing, ru, tu, pu]
aliases: [RU, TU, PU, Referenzumgebung, Produktivumgebung, gematik Testumgebung]
relevance:
  sectors: [hersteller, ti-infrastruktur, it-dienstleister, startup]
  interests: [technik]
maturity: wachsend
---

# Testumgebung

Die **Testumgebungen** der [[gematik]] sind abgeschirmte Instanzen der [[Telematikinfrastruktur]], die Herstellern und Entwicklern ermöglichen, TI-Komponenten zu testen, zu zertifizieren und zu integrieren, ohne den Produktionsbetrieb zu beeinträchtigen.

## Erklärt für Einsteiger

Wenn Entwickler eine neue Arztpraxis-Software bauen, dürfen sie sie nicht direkt an echten Patientendaten testen. Deshalb gibt es Testumgebungen: separate Systeme, die wie die echte TI funktionieren, aber mit Testdaten. Man kann dort so viel ausprobieren wie man will, ohne etwas kaputtzumachen. Ist alles getestet und genehmigt, darf die Software ins echte System.

## Überblick

Die [[gematik]] betreibt drei Umgebungen mit unterschiedlichen Zwecken:

| Umgebung | Abkürzung | Zweck | Zielgruppe |
|---|---|---|---|
| Referenzumgebung | RU | Zulassungstests, Konformitätsprüfungen | Hersteller, Prüflabore |
| Testumgebung | TU | Integrationstests, Entwickler-Sandbox | Entwickler, Hersteller |
| Produktionsumgebung | PU | Echtbetrieb mit echten Patientendaten | Alle TI-Teilnehmer |

Alle drei Umgebungen sind vollständige TI-Instanzen mit eigenen Diensten (IDP, E-Rezept-Fachdienst, ePA-Aktensystem, VZD, PKI etc.). Sie sind voneinander getrennt: Testdaten aus der RU gelangen nie in die PU.

## Technische Details

### Referenzumgebung (RU)

Die Referenzumgebung ist die offizielle Zulassungsplattform der [[gematik]]. Hier müssen alle TI-Komponenten und Primärsysteme ihre Konformität nachweisen, bevor sie in der PU eingesetzt werden dürfen.

Zwecke der RU:
- Konformitätsprüfungen für neue Produktversionen
- Interoperabilitätstests zwischen verschiedenen Herstellern
- Tests nach gematik-Releasezyklen (z.B. neue ePA-Version, neue KIM-Version)
- ECC-Testwochen (z.B. Februar/März 2026: ECC-Kompatibilitätstests für alle TI-Komponenten)

Zugang zur RU: nur für zugelassene Hersteller und Prüflabore nach Beantragung bei der [[gematik]].

### Testumgebung (TU)

Die Testumgebung ist eine weniger streng kontrollierte Instanz für Entwicklungs- und Integrationstests. Sie ist zugänglicher als die RU und erlaubt schnelleres iteratives Testen.

Typische Nutzung der TU:
- Frühe Integrationstests neuer PVS-Versionen
- Anbindung neuer Primärsystemtypen an TI-Dienste
- Entwicklertests für neue FHIR-Profile
- Schnittstellentests zwischen PVS und KIM-Clientmodul

> [!interesse-technik]
> Für Entwickler ist die TU der erste Anlaufpunkt. Alle TI-Fachdienste (E-Rezept-Fachdienst, IDP, VZD, ePA-Aktensystem) haben TU-Instanzen mit bekannten Testendpunkten. TU-Testdaten (Testkarten, Test-eGK, Test-HBA, Test-SMC-B) werden von der gematik bereitgestellt. Einstieg: [gematik Fachportal – Hersteller & Anbieter](https://fachportal.gematik.de/hersteller-anbieter). Referenz-IDP (öffentlich zugänglich): [gematik.github.io/ref-idp-server](https://gematik.github.io/ref-idp-server/tokenFlowPs.html). Referenz-E-Rezept-Server: [github.com/gematik/erp-servicerequest-workflow](https://github.com/gematik/erp-servicerequest-workflow).

### Produktionsumgebung (PU)

Die Produktionsumgebung ist das Live-System mit echten Patientendaten. Jede Komponente, jedes Primärsystem und jeder Dienst muss die RU-Konformitätsprüfung bestanden haben, bevor er in der PU eingesetzt werden darf.

In der PU gelten strenge Datenschutzanforderungen. Zugriffe sind über [[PKI]]-Zertifikate authentifiziert. Störungen werden im gematik-Störungsportal veröffentlicht.

### Testdaten und Testkarten

Für den Test in RU und TU stellt die [[gematik]] Testkarten bereit, die wie echte TI-Karten funktionieren, aber nur in Testumgebungen akzeptiert werden:

- **Test-eGK**: Simuliert eine echte [[eGK]] mit Testversichertendaten
- **Test-HBA**: Erlaubt Signaturoperationen mit einer Testzertifikatskette
- **Test-SMC-B**: Testet Einrichtungsauthentifizierung

Die Zertifikate der Testkarten stammen aus der TI-Test-PKI (eigene Zertifikatskette, getrennt von der PU-PKI). Test-PKI-Zertifikate werden in der PU abgelehnt.

### Release-Prozess und Umgebungsversionierung

Neue TI-Versionen werden zuerst in der RU und TU deployt, bevor sie in die PU eingespielt werden. Der typische Ablauf:

1. gematik veröffentlicht neue Spezifikation (z.B. ePA_3_1_3)
2. Hersteller implementieren gegen die Spezifikation
3. Tests in der TU (Entwicklungsphase)
4. Konformitätsprüfung in der RU (Zulassungsphase)
5. Zulassung durch gematik (Produktfreigabe)
6. Deployment in der PU (Produktivbetrieb)

Dieser Zyklus dauert typischerweise mehrere Monate. Bei dringenden Sicherheitsupdates kann er verkürzt werden.

### Parallelumgebungen für neue Standards

Bei großen Architekturänderungen wie TI 2.0 betreibt die [[gematik]] vorübergehend Parallelumgebungen. So lief [[VSDM]] 2.0 (erster TI-2.0-Dienst, Start Juni 2026) zunächst parallel zu VSDM 1.0 in der PU, bis die Migration abgeschlossen ist.

## Verknüpfungen

- [[Telematikinfrastruktur]] (das Netz, dessen Instanzen die Testumgebungen sind)
- [[gematik]] (betreibt RU, TU und PU)
- [[E-Rezept-Fachdienst]] (hat eigene RU/TU/PU-Instanzen)
- [[IDP]] (hat Test-IDP-Instanzen in RU und TU)
- [[ePA-Aktensystem]] (hat RU/TU-Instanzen für Hersteller)
- [[PKI]] (Test-PKI für Testkarten ist von der PU-PKI getrennt)
- [[PVS-Hersteller]] (nutzen RU und TU für Zulassungstests)
- [[KIM]] (hat Test-Fachdienst-Instanzen in RU und TU)

## Quellen

- [gematik Fachportal: Hersteller und Anbieter (Testzugang)](https://fachportal.gematik.de/hersteller-anbieter)
- [gematik: Referenz-IDP (GitHub)](https://gematik.github.io/ref-idp-server/tokenFlowPs.html)
- [gematik: Umgebungen der TI (Fachportal)](https://fachportal.gematik.de/telematikinfrastruktur/ti-umgebungen)
- [gematik: Release-Übersicht gemSpec (alle Umgebungsversionen)](https://gemspec.gematik.de/releases/)
