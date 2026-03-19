---
title: ePA - Elektronische Patientenakte
audience: [technical, non-technical]
tags: [anwendung, epa, patientenakte]
aliases: [Elektronische Patientenakte, Patientenakte]
maturity: wachsend
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, apotheke, pflege, therapie, hebamme, patient, kasse, hersteller]
  interests: [compliance, technik, patient]
---

# ePA - Elektronische Patientenakte

Die **elektronische Patientenakte (ePA)** ist die zentrale digitale Akte für Versicherte in der gesetzlichen Krankenversicherung. Sie speichert Medikationsinformationen, Arztbriefe und Befunde an einem Ort.

## Erklärt für Einsteiger

Stell dir vor, du gehst zum Arzt und der weiß nicht, welche Medikamente dir ein anderer Arzt verschrieben hat. Bisher musste man Befunde als Papier mitbringen oder hoffen, dass der Arztbrief angekommen ist. Die ePA ist wie ein digitaler Ordner, in dem alle deine Gesundheitsdaten gesammelt werden. Jeder Arzt, den du besuchst, kann reinschauen (wenn du es erlaubst) und sieht sofort, was bisher passiert ist. Du selbst kannst über eine App deiner Krankenkasse alles einsehen.

## Überblick

Ab dem **15. Januar 2025** startete die ePA in Modellregionen (Pilot). Der **bundesweite Rollout** begann am **29. April 2025**: Seither wird die ePA automatisch für alle gesetzlich Versicherten angelegt. Man muss aktiv widersprechen, wenn man keine haben will (Opt-out). Seit dem **1. Oktober 2025** ist die ePA in allen medizinischen Einrichtungen Pflicht.

Laut dem **TI-Atlas 2025** (gematik / IGES Institut, veröffentlicht 24. November 2025, Befragung von über 6.600 Einrichtungen und 1.400 Bürgerinnen und Bürgern) hatten **drei Viertel der Arztpraxen die ePA bereits vor dem Pflichtstarttermin genutzt**.

Ab **April 2026** müssen [[KIS|Krankenhausinformationssysteme (KIS)]] ein zertifiziertes ePA-Modul enthalten. Krankenhäuser, deren KIS diese Anforderung nicht erfüllt, riskieren finanzielle Sanktionen.

Rund 100 Krankenkassen nutzen zugelassene Aktensysteme. Die technischen Implementierungen stammen von IBM (ca. 16 Kassen) und RISE/BITMARCK (ca. 87 Kassen).

> [!interesse-compliance] Fristen und Pflichten
> - **15. Jan 2025**: Pilotstart in Modellregionen
> - **29. Apr 2025**: Bundesweiter Rollout, Opt-out-Verfahren
> - **1. Okt 2025**: Pflicht für alle medizinischen Einrichtungen
> - **Apr 2026**: [[KIS]] muss zertifiziertes ePA-Modul enthalten (Sanktionen bei Nichteinhaltung)
> - **Okt 2026**: Bundesweiter eMedikationsplan-Rollout

### Aktuelle Nutzung (Stand März 2026)

Stand März 2026 haben über **130.000 von ca. 160.000 Einrichtungen (81 Prozent)** mindestens eine ePA geöffnet. Mehr als **700 Millionen Datensätze** wurden verarbeitet, darunter über **37 Millionen hochgeladene Dokumente**.

> [!interesse-business] Marktüberblick
> - ~100 Krankenkassen mit zugelassenen Aktensystemen
> - 2 Betreiber: IBM (~16 Kassen), RISE/BITMARCK (~87 Kassen)
> - 130.000 von 160.000 Einrichtungen aktiv (81%, Stand März 2026)
> - 700 Mio. Datensätze verarbeitet, 37 Mio. Dokumente hochgeladen

Seit **1. Januar 2026** sind Abrechnungsdaten in der ePA nur noch für Versicherte selbst sichtbar. Ärzte und andere Leistungserbringer können Abrechnungsdaten nicht ohne explizite Freigabe durch den Versicherten einsehen. Grundlage ist das **[[BEEP-Gesetz]]** (Gesetz zur Befugniserweiterung und Entbürokratisierung in der Pflege). Ebenfalls seit 1. Januar 2026 können Praxen in therapeutisch begründeten Einzelfällen auf die ePA-Befüllung verzichten (**§ 347 SGB V**).

### Was wird gespeichert?

- Medikationsinformationen
- Arztbriefe und Befunde
- Laborergebnisse
- Daten vom [[E-Rezept]]

### Wer hat Zugriff?

- **Versicherte**: Über die ePA-App der eigenen Krankenkasse
- **Leistungserbringer**: Über ihr Praxissystem, mit Einwilligung
- **Krankenkassen**: Über das Aktensystem (Backend)

> [!interesse-patient] Ihre Daten in der ePA
> - Zugang über die App Ihrer Krankenkasse (kostenlos)
> - Opt-out jederzeit möglich: Widerspruch bei Ihrer Kasse
> - Push-Benachrichtigungen bei Zugriffen (seit März 2026)
> - Abrechnungsdaten nur für Sie sichtbar (seit Januar 2026)
> - Kein Widerspruchsrecht gegen FDZ-Datenübermittlung (Klage anhängig)

### Transparenz und Kontrolle

Seit März 2026 erhalten Versicherte Push-Benachrichtigungen über die Krankenkassen-App, wenn jemand auf ihre ePA zugreift oder Änderungen vornimmt.

## Architektur

Die ePA nutzt die [[Telematikinfrastruktur]] als sicheres Netzwerk. Der Zugriff für Leistungserbringer läuft über [[Konnektoren]] und das jeweilige Primärsystem ([[PVS]], [[KIS]], [[AVS]]).

### Versionen

- ePA 3.0.5: Basis-Release
- ePA 3.1.3: Spezifikation für erweitertes Medikationsmanagement ([[AMTS]]-relevante Zusatzinformationen); bundesweiter eMedikationsplan-Rollout verschoben auf Oktober 2026 (Pilotphase ab Juli 2026)

## Technische Details

> [!interesse-technik] Entwickler-Quickstart
> - **Datenformat**: [[FHIR]] R4, deutsche Profile auf [Simplifier.net](https://simplifier.net/organization/gematik)
> - **Spezifikation**: [ePA 3.1.3](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
> - **PoC**: [github.com/gematik/epa-poc-collection](https://github.com/gematik/epa-poc-collection)
> - **Dokumentenverwaltung**: [[XDS]] (Registry + Repository)
> - **Sicherheit**: [[VAU]] (Vertrauenswürdige Ausführungsumgebung)

### Datenformate und Dokumentenverwaltung

Die ePA verwendet [[FHIR]] R4 als primäres Datenformat. Deutsche FHIR-Profile für die ePA sind von der [[gematik]] spezifiziert und auf Simplifier.net veröffentlicht. Für die Dokumentenverwaltung kommt [[XDS]] (Cross-Enterprise Document Sharing) zum Einsatz: Dokumente werden in einem Document Registry registriert und in einem Document Repository gespeichert.

Mit Release ePA 3.1.2 (Mai 2025) wurden FHIR Implementation Guides aktualisiert, die den Medikationsdienst und die Basisfunktionalitäten der Akte abdecken. Die Guides sind auf Simplifier.net veröffentlicht und bilden die technische Grundlage für die FHIR-basierten ePA-Schnittstellen.

### Digitaler Medikationsprozess (dgMP)

Der **digital gestützte Medikationsprozess (dgMP)** ist seit März 2026 in seiner ersten Stufe produktiv. Er besteht aus zwei Komponenten, die klar zu unterscheiden sind:

**Elektronische Medikationsliste (eML)**: Automatische Sammlung von Medikamentendaten in der ePA. Seit Januar 2025 werden E-Rezept-Dispensierdaten beim Einlösen automatisch in die eML der ePA kopiert. Seit März 2026 können Ärzte zusätzlich Medikamente ohne vorliegendes E-Rezept manuell nachtragen ("Nachtragen"). Ebenfalls seit März 2026 können Apotheken und Arztpraxen bestehende Medikationseinträge bearbeiten und korrigieren, etwa wenn ein Medikament eingetragen ist, das der Patient nie eingenommen hat. Die eML ist ein laufendes, chronologisches Protokoll der verordneten und abgegebenen Medikamente.

**Elektronischer Medikationsplan (eMP)**: Strukturierter Plan mit Dosierungsangaben, Indikationen und Statusangaben (geplant/aktiv/pausiert/beendet) sowie [[AMTS]]-relevanten Zusatzinformationen. Die Pilotphase für den eMP startet im Juli 2026 in ausgewählten Regionen. Der bundesweite Rollout des vollständigen eMP ist für Oktober 2026 geplant.

Technische Grundlage ist ePA 3.1.2 (Mai 2025). Ab Oktober 2026 erhalten Apotheken Schreibzugriff auf den Medikationsdienst, um dispensierte Arzneimittel (einschließlich OTC-Medikamente) direkt einzutragen.

### Vertrauenswürdige Ausführungsumgebung (VAU)

Die [[VAU|Vertrauenswürdige Ausführungsumgebung (VAU)]] ist eine zentrale Sicherheitskomponente der ePA. Sie sorgt dafür, dass Patientendaten auch für den Aktenbetreiber selbst verschlüsselt bleiben. Zugriffe auf Patientendaten finden innerhalb der VAU statt, wo die Daten temporär entschlüsselt werden können, ohne dass der Betreiber dauerhaft Einsicht hat.

### Authentisierungsmethoden

Versicherte authentisieren sich bei der ePA über mehrere Wege:

- **[[eGK]]**: Kontaktlose Nutzung am Kartenterminal in der Praxis (VSDM-Verfahren)
- **[[Gesundheits-ID]]** (al.vi): App-basierte Authentisierung über den Identitätsdienst der Krankenkasse
- **ePass** (ab 25. März 2026): NFC-basiertes Identifikationsverfahren, das den NFC-Chip eines deutschen Personalausweises (ab August 2021) oder Reisepasses (ab 2005) per Smartphone ausliest. In einem zweistufigen Verfahren wird der Ausweis fotografiert und ein Selfie-Video aufgenommen; biometrische Daten werden abgeglichen. Entwickelt von Nect GmbH, bereitgestellt über BITMARCK für ca. 80 Prozent der GKV-Kassen. Rechtsgrundlage: [[BEEP-Gesetz]] (in Kraft 1. Januar 2026). PIN oder Praxisbesuch entfallen. ePass ergänzt die Gesundheits-ID und die eGK, konkurriert nicht mit diesen Verfahren.

Leistungserbringer authentisieren sich über [[SMC-B]] (Einrichtung) und [[HBA]] (Person). Arztbriefe erfordern eine qualifizierte elektronische Signatur ([[QES]]) über den [[HBA]].

### Geplante 2026-Erweiterungen

- **Volltextsuche**: Suche in gespeicherten Dokumenten der ePA. Die Funktion ist noch nicht produktiv. Pilot geplant für Q3/2026, bundesweiter Rollout ab Januar 2027.
- **Strukturierte Dosierungsangaben**: Im eMedikationsplan, mit Schreibzugriff für Apotheken
- **MIO-Integration**: Einbindung der Medizinischen Informationsobjekte ([[MIO]]) [[Mutterpass]], [[eImpfpass|Impfausweis]], [[Kinderuntersuchungsheft]] und Zahnärztliches Bonusheft

### GFF-Klage gegen das FDZ (2022/2026)

Die Gesellschaft für Freiheitsrechte (GFF, unterstützt vom CCC) nahm im Februar 2026 ihre 2022 eingereichte Klage gegen das Forschungsdatenzentrum Gesundheit (FDZ) wieder auf (das Verfahren hatte seit Februar 2023 geruht, da das FDZ nicht operativ war). Kritisiert wird, dass die Pseudonymisierung der ePA-Daten von 73 Millionen GKV-Versicherten unzureichend sei und eine Re-Identifizierung bei seltenen Krankheiten ermögliche. Ein weiterer Kritikpunkt: GKV-Versicherte haben kein Widerspruchsrecht gegen die Datenübermittlung an das FDZ, PKV-Versicherte hingegen schon. Die Klage ist zum Stand März 2026 anhängig. Weitere Details im Artikel zum [[GDNG]].

### Sicherheitsvorfälle und PoPP

Ende 2024 entdeckte der Chaos Computer Club (CCC) eine Sicherheitslücke in der ePA: Durch den Einsatz gefälschter [[SMC-B]]-Karten wäre theoretisch ein Massenzugriff auf Patientenakten möglich gewesen. Die [[gematik]] und das [[BSI]] bestätigten, dass kein Missbrauch dieser Art stattgefunden hatte. Sofortmaßnahmen wurden eingeleitet.

Die dauerhafte Lösung kommt über den **[[PoPP]]-Dienst** (Proof of Patient Presence). PoPP stellt kryptografisch sicher, dass der Zugriff auf die ePA eines Versicherten nur dann möglich ist, wenn der Versicherte physisch anwesend ist oder aktiv online eingewilligt hat. Die PoPP-Spezifikation V1.0.0 wurde am 3. März 2026 veröffentlicht. Stufe 1 (eGK-basierter Präsenznachweis) soll Mitte 2026 produktiv gehen.

## Quiz

> [!quiz] Wer hat standardmäßig Zugriff auf die ePA?
> Seit Januar 2025 wird die ePA automatisch für alle gesetzlich Versicherten angelegt (Opt-out-Verfahren). Zugriff haben Versicherte selbst (über die Krankenkassen-App), Leistungserbringer (mit Einwilligung über ihr Praxissystem) und Krankenkassen (über das Aktensystem-Backend).

## Verknüpfungen

- Nutzt [[VSDM]] für Versichertenstammdaten
- Enthält [[NFDM|Notfalldaten]]
- Empfängt Daten vom [[E-Rezept]]
- Kommunikation über [[KIM]] und [[TI-Messenger]]
- Zugang über [[Konnektoren]] und [[eGK]]

## Quellen

- [gematik: Neue Funktionen der ePA für alle (dgMP, März 2026)](https://www.gematik.de/newsroom/news-detail/aktuelles-ueberblick-das-sind-die-neuen-funktionen-der-epa-fuer-alle)
- [ePA für alle - Fachportal](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [ePA Spezifikationen](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
- [ePA Wiki](https://wiki.gematik.de/pages/viewpage.action?pageId=588640498)
- [ePA PoC Collection - GitHub](https://github.com/gematik/epa-poc-collection)
- [TI-Atlas 2025 | gematik](https://www.gematik.de/newsroom/news-detail/meldung-ti-atlas)
