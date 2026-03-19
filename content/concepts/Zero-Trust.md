---
title: Zero-Trust
audience: [technical]
tags: [konzept, sicherheit, architektur, ti-2-0]
aliases: [Zero Trust, Zero-Trust-Architektur, Zero Trust Architecture, ZTA]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister, krankenhaus, arztpraxis]
  interests: [technik, compliance]
maturity: wachsend
---

# Zero-Trust

Zero-Trust ist ein Sicherheitsarchitekturprinzip, das keinem Nutzer, Gerät oder Netzwerksegment automatisch vertraut, sondern jeden Zugriff unabhängig von seiner Herkunft explizit prüft und autorisiert.

## Erklärt für Einsteiger

Früher dachte man: Wer im Büro ist, ist sicher. Man hat die Haustür gut abgeschlossen, aber drinnen konnte jeder überall hingehen. Zero Trust sagt: Das reicht nicht. Auch wer schon drin ist, muss sich bei jeder Tür neu ausweisen. Das Prinzip lautet: "Vertraue niemandem, überprüfe alles." Im Gesundheitswesen bedeutet das: Ein Computerprogramm, das auf Patientendaten zugreifen will, muss sich jedes Mal neu legitimieren. Es reicht nicht, einmal im Netzwerk zu sein.

## Überblick

Das Konzept Zero Trust wurde maßgeblich von John Kindervag geprägt, der es 2010 bei Forrester Research beschrieb. Der Begriff bezieht sich auf das fehlende implizite Vertrauen ("zero trust"), das traditionelle Netzwerksicherheitsmodelle internen Nutzern und Systemen entgegenbrachten.

Das klassische Sicherheitsmodell basiert auf einem Perimeter: Eine Firewall schützt das interne Netz, und alles innerhalb des Perimeters gilt als vertrauenswürdig. Dieser Ansatz funktionierte, solange Mitarbeiter ausschließlich an festen Büroarbeitsplätzen im Firmennetz arbeiteten. Mobilgeräte, Cloud-Dienste und Homeoffice haben dieses Modell grundlegend infrage gestellt.

Zero Trust ersetzt das Perimeter-Modell durch ressourcenzentrierte Sicherheit: Jede Ressource, jeder Dienst und jedes Dokument schützt sich selbst durch kontinuierliche Verifikation. Das BSI beschreibt Zero Trust als "architektonisches Gestaltungsparadigma, das sich aus dem 'Assume Breach'-Ansatz entwickelt hat."

NIST SP 800-207 definiert Zero Trust als "sich entwickelnden Satz von Cybersicherheitsparadigmen, der die Verteidigung von statischen, netzwerkbasierten Perimetern auf Nutzer, Assets und Ressourcen verlagert."

In der deutschen [[Telematikinfrastruktur]] ist Zero Trust das tragende Architekturprinzip der [[TI-2.0|TI 2.0]]. Der Übergang von TI 1.0 zu TI 2.0 bedeutet den Wechsel von einer VPN-basierten Vertrauensarchitektur zu einem Zero-Trust-Modell.

## Technische Details

### Kernprinzipien

Zero Trust basiert auf mehreren Grundsätzen:

1. **Kein implizites Vertrauen**: Kein Nutzer, kein Gerät und kein Dienst wird allein aufgrund seiner Netzwerkposition als vertrauenswürdig eingestuft.
2. **Explizite Verifikation**: Jeder Zugriff erfordert eine Authentifizierung und Autorisierung, unabhängig davon, ob die Anfrage von innen oder außen kommt.
3. **Minimale Rechte (Least Privilege)**: Jede Entität erhält nur die minimal notwendigen Zugriffsrechte für ihre Aufgabe.
4. **Assume Breach**: Das System geht davon aus, dass ein Angreifer bereits im Netz sein könnte. Schutzmaßnahmen werden so konzipiert, dass Schäden begrenzt bleiben.
5. **Mikrosegmentierung**: Netzwerke und Ressourcen werden in kleine Segmente aufgeteilt. Ein Angreifer, der ein Segment kompromittiert, kommt nicht automatisch in andere.

### Zero Trust vs. VPN-Perimeter

| Merkmal | Klassisches VPN-Modell | Zero Trust |
|---|---|---|
| Vertrauensbasis | Netzwerkposition (innen vs. außen) | Identität und Kontext jeder Anfrage |
| Authentisierung | Einmalig beim Netzwerkzutritt | Kontinuierlich bei jedem Ressourcenzugriff |
| Zugriffskontrolle | Netzwerkbasiert (IP-Ranges, VLANs) | Ressourcen- und identitätsbasiert |
| Kompromittierungsrisiko | Seitliche Bewegung im Netz möglich | Segmentierung begrenzt Schadensausbreitung |
| Skalierung | Schwierig bei mobilen und Cloud-Szenarien | Nativ für verteilte Infrastrukturen |

### Zero Trust in der TI 2.0

Die TI 1.0 basierte auf einem VPN-Modell: [[Konnektoren]] bauten einen VPN-Tunnel zur zentralen TI-Infrastruktur auf. Wer im Tunnel war, galt als vertrauenswürdig. Dieses Modell erforderte teure Hardware vor Ort und ließ keine flexiblen Zugangsszenarien zu.

Die TI 2.0 löst dieses Modell ab. Laut gematik gilt: "In der TI 2.0 werden alle Zugriffe wechselseitig auf Echtheit geprüft." Konkrete Umsetzung:

- **[[mTLS]] (Mutual TLS)**: Jede Verbindung zwischen Primärsystem und [[TI-Gateway]] erfordert beidseitige Zertifikatsauthentifizierung. Beide Seiten müssen gültige Zertifikate vorlegen.
- **[[IDP]]-Dienst**: Alle Nutzer und Dienste authentifizieren sich über einen zentralen Identitätsdienst. Die [[Gesundheits-ID]] ist das Identitätsmittel für Versicherte.
- **Token-basierte Autorisierung**: [[OAuth 2.0]] und OpenID Connect sichern den Zugriff auf Fachdienste. Jedes Token hat begrenzte Gültigkeit und eingeschränkten Scope.
- **[[PKI]]**: Die Telematik-PKI stellt Zertifikate für alle Teilnehmer aus. Jede Verbindung basiert auf verifizierten Identitäten, nicht auf Netzwerkpositionen.

### Umsetzung in der Praxis

Die erste TI-2.0-Anwendung auf Zero-Trust-Basis ist [[VSDM]] 2.0, geplant zum 30. Juni 2026. Das [[TI-Gateway]] ist die zentrale Zugangskomponente: Es ersetzt die Hardware-Konnektoren und implementiert die mTLS-Anforderungen.

Zero Trust ist kein einzelnes Produkt, sondern ein Gestaltungsprinzip. Das BSI betont, dass Zero Trust "keine einmalige Investition, sondern ein langfristiges Vorhaben" ist, das personelle und finanzielle Ressourcen erfordert.

> [!interesse-compliance]
> TI-2.0-Zeitplan: VSDM 2.0 mit Zero-Trust-Architektur ab 30. Juni 2026 (Parallelbetrieb), vollständige Migration bis 2029. Hersteller müssen [[mTLS]] in ihren Primärsystemen implementieren. Das [[TI-Gateway]] ersetzt schrittweise Hardware-Konnektoren. Migrationspflichten werden über gemSpec-Dokumente und gematik-Zulassungsverfahren durchgesetzt.

> [!interesse-technik]
> Technische Kernelemente in der TI 2.0: [[mTLS]] für wechselseitige Authentisierung, OAuth 2.0/OpenID Connect für Token-basierte Autorisierung, [[ZETA]]-Framework (Open Source: github.com/gematik/zeta) mit ZETA-Client-SDK und ZETA-Guard. NIST-Referenz: SP 800-207. BSI-Richtlinie: Zero-Trust-Prinzipien im BSI-Kompendium.

### [[ZETA]]: Zero-Trust-Implementierung für die TI

Die konkrete Umsetzung von Zero Trust in der TI 2.0 erfolgt über das **ZETA**-Framework (Zero-Trust-Architektur). Am **15. Dezember 2025** veröffentlichte die [[gematik]] die zentralen ZETA-Komponenten als Open Source auf GitHub (github.com/gematik/zeta):

- **ZETA-Client-SDK**: Bibliothek für die Integration in Primärsysteme und Fachdienste
- **ZETA-Guard**: Enforcer-Komponente, die Zero-Trust-Richtlinien durchsetzt

Der erste produktive Einsatz ist für **Juli 2026** mit [[VSDM]] 2.0 geplant. Die vollständige Migration der TI auf ZETA ist bis **2029** vorgesehen. EY Strategy and Transactions GmbH erhielt den Auftrag zur Entwicklung und Wartung der zentralen Zero-Trust-Softwarekomponenten für TI 2.0.

### Bezug zu NIST SP 800-207

Das NIST-Dokument SP 800-207 "Zero Trust Architecture" von 2020 ist die führende Referenz für Zero-Trust-Architekturen. Es formuliert Grundprinzipien und Implementierungsansätze. Das BSI hat diese Konzepte für den deutschen Markt aufgegriffen.

## Verknüpfungen

- [[Telematikinfrastruktur]]: Zero Trust ist das Architekturprinzip der [[TI-2.0|TI 2.0]]
- [[TI-2.0]]: Das Architekturprogramm, das Zero Trust in der TI umsetzt
- [[TI-Gateway]]: Zentrale Zugangskomponente, die Zero Trust umsetzt
- [[ZETA]]: Konkrete Framework-Implementierung von Zero Trust für die TI 2.0
- [[mTLS]]: Technisches Mittel zur beidseitigen Authentisierung
- [[IDP]]: Identitätsdienst als Vertrauensanker in Zero-Trust-Architekturen
- [[PKI]]: Zertifikatsinfrastruktur als Grundlage für Identitätsverifikation
- [[VSDM]]: Erste TI-2.0-Anwendung mit Zero-Trust-Architektur
- [[Gesundheits-ID]]: Identitätsmittel für Versicherte in TI 2.0

## Quellen

- [BSI: Zero Trust](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Zero-Trust/zero-trust_node.html)
- [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/publications/detail/sp/800-207/final)
- [gematik: TI 2.0](https://www.gematik.de/telematikinfrastruktur/ti-2-0)
- [gematik Fachportal: TI-Zugang](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
