---
title: LDAP
audience: [technical]
tags: [infrastruktur, protokoll, verzeichnisdienst, vzd, netzwerk]
aliases: [Lightweight Directory Access Protocol, LDAP-Verzeichnis, LDAP-Dienst]
relevance:
  sectors: [ti-infrastruktur, hersteller, it-dienstleister, krankenhaus]
  interests: [technik]
maturity: setzling
---

# LDAP

**LDAP** (Lightweight Directory Access Protocol) ist ein Netzwerkprotokoll für den Zugriff auf hierarchisch strukturierte Verzeichnisdienste und bildet die technische Basis des [[VZD|Verzeichnisdienstes (VZD)]] der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Ein Verzeichnisdienst ist wie ein digitales Telefonbuch: Er speichert zu jeder Person oder Organisation Name, Adresse und weitere Informationen. LDAP ist das Protokoll, mit dem Computer dieses Telefonbuch abfragen. In der Telematikinfrastruktur nutzen Arztpraxen und Apotheken LDAP, um nachzuschlagen, welche KIM-Adresse eine andere Einrichtung hat, oder um Zertifikate abzurufen. Man tippt einen Namen oder eine Telematik-ID ein, und die Software fragt das zentrale Verzeichnis über LDAP ab.

## Überblick

LDAP (RFC 4511) ist seit den frühen 1990er Jahren der de-facto-Standard für Verzeichnisdienste in Unternehmens-IT. Bekannte Implementierungen sind Microsoft Active Directory, OpenLDAP und der Novell Directory Services. LDAP läuft standardmäßig auf Port 389 (unverschlüsselt) oder Port 636 (LDAPS, verschlüsselt über TLS).

In der deutschen [[Telematikinfrastruktur]] hat die [[gematik]] den [[VZD]] ursprünglich auf LDAP-Basis aufgebaut. Der VZD ist das zentrale Adressbuch aller TI-Teilnehmer: Ärzte, Zahnärzte, Apotheken, Krankenhäuser, Krankenkassen und weitere. Jeder Eintrag enthält:

- Name und Adresse der Person oder Einrichtung
- [[Telematik-ID]]
- TI-Zertifikate (für [[mTLS]] und Verschlüsselung)
- [[KIM]]-Adresse (für die sichere E-Mail-Kommunikation)

### LDAP-VZD und FHIR-VZD

Die gematik hat den VZD in zwei parallele Schnittstellen aufgeteilt:

- **LDAP-VZD** (klassisch): Lesender Zugriff auf Basiseinträge über das LDAP-Protokoll. Wurde von den ersten KIM-Implementierungen genutzt. Wird schrittweise durch die neue FHIR-Schnittstelle abgelöst.
- **FHIR-VZD** (neu): RESTful API auf Basis von [[FHIR]]-Ressourcen. Ermöglicht reichhaltigere Abfragen, z.B. Suche nach Fachrichtung, Ort oder Spezialisierung. Für [[TI-Messenger]] und neue KIM-Versionen verpflichtend.

Primärdaten werden in einem LDAP-Kernverzeichnis (LDAP Core) gepflegt, während ergänzende FHIR-spezifische Daten in einer separaten FHIR-Datenbasis verwaltet werden. Beide Quellen werden für die jeweiligen Schnittstellen synchronisiert.

## Technische Details

### LDAP-Datenmodell

LDAP organisiert Daten in einem **Directory Information Tree (DIT)**: einer Baumstruktur ähnlich einem Dateisystem. Jeder Knoten im Baum ist ein **Entry** (Eintrag).

Ein Eintrag besteht aus:
- **DN (Distinguished Name)**: Eindeutiger Pfad im Baum, z.B. `cn=Max Mustermann,ou=users,dc=ti,dc=de`
- **Attributen**: Schlüssel-Wert-Paare, z.B. `mail: max.mustermann@arztpraxis.kim.telematik`
- **ObjectClass**: Definiert, welche Attribute ein Eintrag haben darf oder muss

### VZD-LDAP-Attribute (Auswahl)

Die gematik-Spezifikation gemSpec_VZD definiert die LDAP-Attribute des TI-Verzeichnisses:

| Attribut | Bedeutung |
|---|---|
| `cn` | Name der Person oder Einrichtung |
| `telematikID` | Eindeutige [[Telematik-ID]] |
| `mail` | KIM-Adresse |
| `userCertificate` | TI-Zertifikat (DER-kodiert) |
| `professionOID` | Berufs-OID (Arzt, Zahnarzt, Apotheker ...) |
| `specialization` | Fachrichtung oder Spezialisierung |
| `entryType` | Typ des Eintrags (Person, Einrichtung, Dienst) |

### LDAP-Operationen im TI-Kontext

Der VZD unterstützt über LDAP folgende Operationen:

- **Search**: Suche nach Einträgen anhand von Filterausdrücken, z.B. `(cn=*Mustermann*)`
- **Read**: Abruf eines bekannten Eintrags über seinen DN
- **Bind**: Authentifizierung am Verzeichnis (für Schreibzugriffe, die über die FHIR-API erfolgen)

Lesende LDAP-Abfragen sind im VZD **ohne Authentifizierung** möglich (anonymes Bind). Das ermöglicht es, Zertifikate und KIM-Adressen ohne Vorabauthentifizierung aufzulösen.

### Abfrage-Beispiel

Eine LDAP-Suchanfrage an den VZD nach einer KIM-Adresse sieht in LDIF-ähnlicher Darstellung so aus:

```
Base DN:    ou=providers,dc=vzd,dc=telematik
Filter:     (telematikID=1-2-3456789)
Attributes: cn, mail, userCertificate
```

Das Ergebnis enthält den Namen, die KIM-Adresse und das Zertifikat der gesuchten Einrichtung. [[KIM]]-Clients nutzen diese Abfrage, um vor dem Versenden einer Nachricht die KIM-Adresse des Empfängers und das zugehörige Verschlüsselungszertifikat aufzulösen.

> [!klinik-integration] Klinik-Integration: VZD-Abfragen aus dem KIS
> Für Krankenhäuser ist der [[VZD]] in zwei typischen Szenarien relevant.
>
> **KIM-Versand aus dem KIS:** [[KIM]]-Clients, die im [[KIS]] integriert sind (z.B. für den Versand von Arztbriefen und Entlassberichten), lösen die Empfängeradresse über den VZD auf. Die Abfrage erfolgt via LDAP-VZD (Port 636, LDAPS) und benötigt keinen Authentifizierungs-Token. Voraussetzung ist eine TI-Anbindung des Krankenhauses, entweder über einen Highspeed-Konnektor oder ein [[TI-Gateway]].
> **Verzeichniseintrag des Krankenhauses:** Jede KIS-Abteilung, die KIM nutzen soll, benötigt eine eigene [[KIM]]-Adresse. Diese wird im VZD unter der [[SMC-B]]-Institutionskarte des Krankenhauses eingetragen. Für große Häuser mit mehreren Abteilungen empfiehlt sich ein strukturiertes Namensschema (z.B. `kardiologie@klinikum-beispiel.kim.telematik`).
>
> **Übergang zu FHIR-VZD:** Der [[TI-Messenger]] für Krankenhäuser setzt ausschließlich die FHIR-basierte VZD-Schnittstelle voraus. Prüfen Sie bei Ihrer KIS-Middleware, ob sie neben LDAP-Abfragen auch FHIR REST-Abfragen gegen den VZD unterstützt, da neue TI-Anwendungen LDAP nicht mehr unterstützen werden.

### Übergang zu FHIR

Der [[TI-Messenger]] und neue KIM-Versionen nutzen ausschließlich die FHIR-basierte VZD-Schnittstelle. Die gematik arbeitet an der schrittweisen Ablösung des LDAP-VZD durch die FHIR-Schnittstelle. Ältere LDAP-Clients (KIM 1.5) können weiterhin die LDAP-Schnittstelle nutzen. Neue Implementierungen sollen die FHIR-API verwenden.

> [!interesse-technik]
> GitHub-Repository mit der VZD API-Spezifikation: [gematik/api-vzd](https://github.com/gematik/api-vzd). Das Repository enthält auch die LDAP-Attribut-Dokumentation (`docs/LDAP_Attribute.adoc`). Die gematik-Spezifikation für den VZD: gemSpec_VZD auf dem gematik Fachportal. LDAP-Anfragen an den VZD laufen über Port 636 (LDAPS), anonymes Bind ist für Leseoperationen zulässig.

> [!dev-quickstart] Dev Quickstart: VZD-LDAP und FHIR-VZD abfragen
> **LDAP (klassisch)**: anonymes Bind, Port 636 (LDAPS):
> ```bash
> # KIM-Adresse und Zertifikat per Telematik-ID auflösen
> ldapsearch -H ldaps://ldap.vzd.ti-dienste.de:636 \
>   -x \
>   -b "ou=providers,dc=vzd,dc=telematik" \
>   "(telematikID=1-2-3456789)" \
>   cn mail userCertificate professionOID
> ```
> **FHIR-VZD (neu)**: OAuth2-Token erforderlich, Endpunkt `/fdv/search`:
> ```bash
> # Arzt nach Name suchen (FHIR-Practitioner)
> curl -s \
>   -H "Authorization: Bearer <access-token>" \
>   "https://fhir-directory.app.ti-dienste.de/fdv/search/Practitioner?name=Mustermann&active=true"
> ```
> - Auth für FHIR-VZD: OAuth2-Token vom gematik-IDP (`search`-Scope)
> - LDAP-Attributdoku: [api-vzd/docs/LDAP_Attribute.adoc](https://github.com/gematik/api-vzd/blob/main/docs/LDAP_Attribute.adoc)
> - FHIR-Suchbeispiele: [api-vzd/docs/FHIR_VZD_HOWTO_Search.adoc](https://github.com/gematik/api-vzd/blob/main/docs/FHIR_VZD_HOWTO_Search.adoc)
> - CLI-Tool: [gematik/app-vzd-cli](https://github.com/gematik/app-vzd-cli)
> - Simplifier-Profile: [simplifier.net/vzd-fhir-directory](https://simplifier.net/vzd-fhir-directory)

## Verknüpfungen

- [[VZD]] (Verzeichnisdienst der TI: nutzt LDAP als Basis-Protokoll)
- [[KIM]] (nutzt den VZD-LDAP für die Auflösung von KIM-Adressen und Zertifikaten)
- [[TI-Messenger]] (nutzt FHIR-VZD als Verzeichnisbasis)
- [[Telematik-ID]] (zentrales Suchkriterium im LDAP-VZD)
- [[TI-Gateway]] (greift auf den VZD über LDAP oder FHIR-API zu)
- [[mTLS]] (VZD-Zertifikate werden für mTLS-Verbindungen aus dem LDAP abgerufen)
- [[FHIR]] (neue FHIR-basierte VZD-Schnittstelle ersetzt LDAP schrittweise)
- [[PKI]] (TI-PKI-Zertifikate sind im VZD-LDAP abrufbar)

## Quellen

- [RFC 4511: Lightweight Directory Access Protocol (LDAP): The Protocol](https://www.rfc-editor.org/rfc/rfc4511)
- [gematik GitHub: api-vzd – API-Spezifikation des VZD](https://github.com/gematik/api-vzd)
- [gematik GitHub: LDAP-Attribute-Dokumentation](https://github.com/gematik/api-vzd/blob/main/docs/LDAP_Attribute.adoc)
- [gematik Fachportal: Spezifikationen (gemSpec_VZD)](https://fachportal.gematik.de/spezifikationen)
