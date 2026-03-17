---
title: Fachdienst
audience: [technical]
tags: [infrastruktur, architektur, backend, ti-dienste]
aliases: [Fachdienst, Fachdienste, TI-Fachdienst, Anwendungs-Fachdienst]
---

# Fachdienst

Ein **Fachdienst** ist ein zentraler Backend-Dienst in der [[Telematikinfrastruktur]], der die Serverseite einer TI-Anwendung implementiert und von zugelassenen Anbietern betrieben wird.

## Erklärt für Einsteiger

Die [[Telematikinfrastruktur]] besteht nicht nur aus dem Netz, das Arztpraxen verbindet. Sie besteht auch aus Diensten, die auf Servern laufen und Daten speichern oder verarbeiten. Wenn ein Arzt ein E-Rezept ausstellt, wird dieses Rezept auf einem Server gespeichert. Dieser Server ist der E-Rezept-Fachdienst. Wenn eine Apotheke das Rezept abruft, holt sie es vom selben Fachdienst. Jede TI-Anwendung hat so einen Fachdienst als zentrale Anlaufstelle.

## Überblick

In der TI-Architektur gibt es eine klare Trennung zwischen der Basis-Infrastruktur (Netz, [[PKI]], [[IDP]], [[VZD]]) und den Anwendungs-Fachdiensten. Letztere implementieren die Fachlogik einer bestimmten TI-Anwendung.

Jeder Fachdienst wird von einem oder mehreren zugelassenen Anbietern betrieben. Die [[gematik]] spezifiziert die Anforderungen und prüft die Zulassung. Der Anbieter übernimmt den Betrieb. Primärsysteme ([[PVS]], [[KIS]], AVS) in Arztpraxen, Kliniken und Apotheken kommunizieren mit dem Fachdienst über definierte Schnittstellen.

### Bekannte Fachdienste

| Fachdienst | Anwendung | Betreiber |
|---|---|---|
| E-Rezept-Fachdienst | [[E-Rezept]] | gematik (IBM) |
| ePA-Aktensystem | [[ePA]] | IBM, RISE/BITMARCK |
| KIM-Fachdienst | [[KIM]] | Verschiedene Anbieter (155+) |
| VSDM-Fachdienst | [[VSDM]] | Krankenkassen |
| TI-Messenger-Fachdienst | [[TI-Messenger]] | Verschiedene Anbieter |

### Zulassungspflicht

Fachdienste unterliegen der gematik-Zulassung. Anbieter müssen die technischen Spezifikationen (gemSpec-Dokumente) einhalten und die Anforderungen der Testsuite bestehen. Erst nach erfolgreicher Zulassung darf der Dienst im Produktivbetrieb der TI eingesetzt werden.

## Technische Details

### Architekturmuster

Ein Fachdienst folgt in der Regel diesem Muster:

- **RESTful API** (meist auf [[FHIR]]-Basis) als Schnittstelle zu Primärsystemen
- **Authentisierung** über Access Tokens des [[IDP]]-Dienstes (OAuth 2.0 / OpenID Connect)
- **Verschlüsselung** der Transportschicht via TLS (in TI 2.0: [[mTLS]])
- **VAU-Schutz** für besonders schutzbedürftige Daten

### VAU - Vertrauenswürdige Ausführungsumgebung

Fachdienste, die besonders sensible Gesundheitsdaten verarbeiten, nutzen eine [[VAU|Vertrauenswürdige Ausführungsumgebung (VAU)]]. Die VAU ist eine gehärtete Ausführungsumgebung, in der die Daten verschlüsselt verarbeitet werden. Selbst der Betreiber des Fachdienstes kann die Daten nicht im Klartext lesen.

Der E-Rezept-Fachdienst und das ePA-Aktensystem nutzen VAU. Die gematik spezifiziert das VAU-Protokoll; der Anbieter implementiert es und weist die korrekte Umsetzung im Zulassungsverfahren nach.

### Ablauf einer Fachdienst-Anfrage

Typischer Ablauf, wenn ein Primärsystem einen Fachdienst aufruft:

1. Primärsystem fordert einen Access Token vom [[IDP]] an (Authentisierung per [[eGK]], [[HBA]] oder [[SMC-B]])
2. [[IDP]] stellt einen zeitbegrenzten Access Token aus
3. Primärsystem sendet eine HTTPS-Anfrage an den Fachdienst und legt den Access Token im Authorization-Header vor
4. Fachdienst prüft Gültigkeit und Berechtigungen des Tokens
5. Fachdienst führt die Fachlogik aus und antwortet

Bei TI 2.0-Fachdiensten erfolgt die Verbindung in Schritt 3 über [[mTLS]], sodass auch das Primärsystem ein Zertifikat vorlegen muss.

### Fachdienst vs. zentrale TI-Dienste

Zentrale TI-Dienste wie [[IDP]], [[VZD]] und [[PKI]] bilden die gemeinsame Basis für alle Anwendungen. Fachdienste bauen auf dieser Basis auf und implementieren Anwendungslogik. Die Grenze ist nicht immer scharf: Das ePA-Aktensystem ist ein Fachdienst, enthält aber auch Infrastrukturanteile wie den Schlüsseldienst.

### Schnittstellen

Fachdienste bieten typischerweise zwei Schnittstellentypen:

- **Primärsystem-Schnittstelle**: Wird von [[PVS]], [[KIS]] und AVS aufgerufen. In der Regel REST/FHIR.
- **Versicherten-App-Schnittstelle**: Wird von mobilen Apps aufgerufen. Ebenfalls REST/FHIR, aber mit anderen Authentisierungsflüssen.

## Verknüpfungen

- [[E-Rezept]] (E-Rezept-Fachdienst als prominentestes Beispiel)
- [[ePA]] (ePA-Aktensystem ist der zentrale ePA-Fachdienst)
- [[KIM]] (KIM-Fachdienst als Mailserver der TI)
- [[VSDM]] (VSDM-Fachdienst bei den Krankenkassen)
- [[IDP]] (stellt Access Tokens für Fachdienst-Zugriffe aus)
- [[VAU]] (Schutzmechanismus für besonders sensible Fachdienste)
- [[FHIR]] (Standarddatenformat für Fachdienst-APIs)
- [[Telematikinfrastruktur]] (Netz und Basis-Infrastruktur, auf der Fachdienste laufen)
- [[mTLS]] (Verbindungsabsicherung in TI 2.0)
- [[gematik]] (spezifiziert und zulässt Fachdienste)

## Quellen

- [E-Rezept-Fachdienst Spezifikation - gemspec.gematik.de](https://gemspec.gematik.de/docs/gemSpec/gemSpec_FD_eRp/latest/)
- [TI-Dienste - Fachportal gematik](https://fachportal.gematik.de/anwendungen)
- [Telematikinfrastruktur - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur)
