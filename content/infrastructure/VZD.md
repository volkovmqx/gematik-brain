---
title: VZD - Verzeichnisdienst
audience: [technical, non-technical]
tags: [infrastruktur, verzeichnis, kim, ti-messenger]
aliases: [VZD, Verzeichnisdienst, VZD-FHIR-Directory]
---

# VZD - Verzeichnisdienst

Der **VZD (Verzeichnisdienst)** ist das zentrale Adressbuch der [[Telematikinfrastruktur]]. Er listet alle zugelassenen Teilnehmer und Einrichtungen des deutschen Gesundheitswesens mit ihren Kommunikationsadressen.

## Erklärt für Einsteiger

Stell dir vor, du willst einem Arzt eine sichere Nachricht schicken, aber du kennst seine E-Mail-Adresse nicht. Der VZD ist wie das Telefonbuch des Gesundheitswesens: Dort stehen alle Ärzte, Apotheken, Krankenhäuser und andere Einrichtungen mit ihren Adressen. Wenn [[KIM]] eine Nachricht verschickt oder der [[TI-Messenger]] jemanden sucht, schaut das System zuerst im VZD nach, um die richtige Adresse zu finden.

## Überblick

Der VZD wird von der [[Telematikinfrastruktur]] als zentraler Dienst betrieben und von der [[gematik]] spezifiziert. Er enthält Einträge für alle Teilnehmer der TI, darunter Arztpraxen, Kliniken, Apotheken, Krankenkassen und auch einzelne Heilberufler.

Der VZD hat zwei unterschiedliche technische Realisierungen, die parallel existieren:

1. **LDAP-basierter VZD**: Die klassische, ältere Variante. Wird von [[KIM]] genutzt, um Empfängeradressen aufzulösen. Jeder KIM-Teilnehmer ist dort mit seiner KIM-Adresse eingetragen.

2. **VZD-FHIR-Directory**: Eine moderne, REST-basierte Variante auf Basis von [[FHIR]]. Sie wird primär vom [[TI-Messenger]] genutzt und enthält zusätzliche strukturierte Informationen über Einrichtungen und deren Dienste.

Der VZD ist eine Pflichtkomponente: Ohne ihn können weder [[KIM]] noch der [[TI-Messenger]] Adressen auflösen oder Identitäten überprüfen.

## Technische Details

### LDAP-VZD

Der klassische VZD basiert auf dem LDAP-Protokoll (Lightweight Directory Access Protocol). Einträge folgen einem definierten Schema mit Attributen wie:

- [[Telematik-ID]] des Teilnehmers
- KIM-Adresse(n)
- X.509-Zertifikate für die Verschlüsselung
- Name und Typ der Einrichtung (Arztpraxis, Apotheke, Krankenhaus usw.)

Das [[Konnektoren|Clientmodul von KIM]] fragt den LDAP-VZD ab, um das Verschlüsselungszertifikat des Empfängers zu laden. So kann die Nachricht schon vor dem Versand Ende-zu-Ende verschlüsselt werden.

### VZD-FHIR-Directory

Das VZD-FHIR-Directory ist eine Erweiterung des klassischen Verzeichnisdienstes. Es speichert Daten in drei FHIR-Ressourcentypen:

- **PractitionerDirectory**: Einzelne Heilberufler (Ärzte, Zahnärzte, Apotheker). Profil über FHIR Practitioner.
- **OrganizationDirectory**: Einrichtungen (Praxen, Kliniken, Apotheken). Profil über FHIR Organization.
- **HealthcareService**: Ergänzende Dienste, die eine Einrichtung anbietet.

Die Daten des LDAP-VZD werden per Synchronisation in das FHIR-Directory übernommen. Zusätzlich können Einrichtungen eigene Einträge (FA-Attribute) selbst pflegen.

### Schnittstellen und Authentisierung

Das VZD-FHIR-Directory bietet mehrere Schnittstellen:

- **I_Directory_Query**: Suche im Verzeichnis (LDAP und FHIR).
- **I_Directory_Application_Maintenance**: Verwaltung eigener Einträge durch Fachanwendungen.
- **I_Directory_Administration**: Backend-Administration für Synchronisation und Zertifikatsverwaltung.
- **FHIRDirectoryFdvSearchAPI (`/fdv/search`)**: Suchendpunkt für Versichertenanwendungen wie die ePA-App.

Zugriff ohne Authentisierung ist laut Spezifikation verboten. Je nach Nutzergruppe kommen unterschiedliche Verfahren zum Einsatz:

- [[TI-Messenger]]-Clients: Matrix-OpenID-Token
- Einrichtungen, die eigene Daten pflegen: OpenID Connect Authorization Code Flow
- Fachdienste und Systemzugänge: OAuth 2.0 Client Credentials Flow

### TI-Messenger-Integration

Der [[TI-Messenger]] nutzt das VZD-FHIR-Directory für die Kontaktsuche. Eine besondere Operation ist `whereIs`: Sie löst eine Matrix-ID zu einem konkreten Matrix-Homeserver auf. So kann ein Client wissen, bei welchem Anbieter eine Person registriert ist.

### Versionen

Die Implementierung des VZD-FHIR-Directory wird kontinuierlich weiterentwickelt. Ab Version 1.5 unterstützt es erweiterte Selbstverwaltungsfunktionen für Einrichtungen und mehrwertige Datenfelder.

## Verknüpfungen

- Pflichtkomponente für [[KIM]] (LDAP-Adressauflösung) und [[TI-Messenger]] (FHIR-Suche)
- Basiert auf [[FHIR]] für die moderne REST-Schnittstelle
- Authentisierung über den [[IDP]]-Dienst der TI
- Einträge enthalten [[Telematik-ID]]s aus [[SMC-B]] und [[HBA]]-Zertifikaten
- Bestandteil der [[Telematikinfrastruktur]]

## Quellen

- [gemSpec_VZD - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VZD/latest/)
- [gemSpec_VZD_FHIR_Directory - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VZD_FHIR_Directory/latest/)
- [api-vzd - GitHub](https://github.com/gematik/api-vzd)
