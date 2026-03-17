---
title: KBV
audience: [technical, non-technical]
tags: [organization, selbstverwaltung, fhir-profile, vertragsärzte]
aliases: [Kassenärztliche Bundesvereinigung, KBV-Profile]
---

# KBV

Die Kassenärztliche Bundesvereinigung (KBV) ist die Dachorganisation der regionalen Kassenärztlichen Vereinigungen und erstellt die verbindlichen [[FHIR]]-Profile für digitale Arztformulare wie [[E-Rezept]] und [[eAU]].

## Erklärt für Einsteiger

Stell dir vor, alle Arztpraxen in Deutschland müssen Rezepte auf eine bestimmte Weise ausfüllen, damit Apotheken und Krankenkassen sie lesen können. Die KBV ist die Organisation, die diese Vorgaben festlegt. In der digitalen Welt heißt das: Die KBV schreibt vor, wie ein elektronisches Rezept oder eine Krankschreibung technisch aufgebaut sein muss, damit alle Computersysteme im Gesundheitswesen die Daten verstehen.

## Überblick

Die KBV ist eine Körperschaft des öffentlichen Rechts und Teil der ärztlichen Selbstverwaltung im System der gesetzlichen Krankenversicherung (GKV). Sie ist die bundesweite Interessenvertretung der rund 180.000 niedergelassenen Vertragsärztinnen und -ärzte sowie Vertragspsychotherapeutinnen und -psychotherapeuten.

Zu den Kernaufgaben gehören:
- Sicherstellung der flächendeckenden ambulanten medizinischen Versorgung (Sicherstellungsauftrag)
- Interessenvertretung der niedergelassenen Ärzteschaft gegenüber den Krankenkassen
- Verhandlung der Vergütung vertragsärztlicher Leistungen
- Standardisierung der Schnittstellen für Praxisverwaltungssysteme (PVS)

Im Kontext der Digitalisierung ist die KBV als Herausgeberin verbindlicher technischer Standards besonders relevant. Das Bundesgesundheitsministerium beauftragt die KBV, Schnittstellen nach § 291d SGB V festzulegen. Diese Schnittstellen bestimmen, wie Arztpraxissoftware mit der [[Telematikinfrastruktur]] kommuniziert.

## Technische Details

### KBV-FHIR-Profile

Die KBV veröffentlicht ihre [[FHIR]]-Implementierungsleitfäden auf dem FHIR-Simplifier unter `fhir.kbv.de` (weiterleitung zu simplifier.net). Die wichtigsten Pakete sind:

- **`kbv.basis`**: Basisprofile, auf denen alle weiteren KBV-Profile aufbauen. Enthält angepasste Definitionen für gängige FHIR-Ressourcen (z.B. KBV_PR_Base_Patient).
- **`kbv.ita.erp`**: FHIR-Profile für das [[E-Rezept]] (Electronic Prescription). Definiert KBV_PR_ERP_Prescription (Verordnung), KBV_PR_ERP_Medication (Medikament), KBV_PR_ERP_PractitionerRole.
- **`kbv.ita.eau`**: FHIR-Profile für die [[eAU]] (elektronische Arbeitsunfähigkeitsbescheinigung).
- **`kbv.all.st`**: Terminologiepaket mit Codesystemen und Valuesets für alle KBV-Anwendungen.

### MIOs (Medizinische Informationsobjekte)

Gemeinsam mit der [[gematik]] und der Kassenärztlichen Vereinigung entwickelt die KBV sogenannte MIOs (Medizinische Informationsobjekte). MIOs sind standardisierte [[FHIR]]-Profile für spezifische klinische Dokumente, z.B.:
- Impfpass
- Mutterpass
- Kinderuntersuchungsheft
- Zahnbonusheft

MIOs werden in der [[ePA]] gespeichert und ermöglichen es, klinische Daten zwischen verschiedenen Systemen austauschbar zu machen.

### Verhältnis zu gematik-Profilen

Es gibt eine Arbeitsteilung zwischen KBV und [[gematik]]:
- Die KBV definiert Profile für den **verordnenden** Bereich (was Ärzte ausstellen)
- Die [[gematik]] definiert Profile für den **infrastrukturellen** Bereich (wie Daten in der TI transportiert und verarbeitet werden)

Beim [[E-Rezept]] zum Beispiel: Die KBV legt fest, wie die Verordnung (das Rezept) strukturiert ist. Die [[gematik]] legt fest, wie dieses Rezept im E-Rezept-Fachdienst übertragen und gespeichert wird.

### Schnittstellen für Praxisverwaltungssysteme

Nach § 291d SGB V ist die KBV verpflichtet, Schnittstellen für Praxisverwaltungssysteme zu definieren. Diese Schnittstellen werden als KBV_ITA-Dokumente veröffentlicht und sind für alle PVS-Hersteller verbindlich. Sie beschreiben unter anderem das Format der [[eAU]], des [[E-Rezept]] und digitaler Formulare.

## Verknüpfungen

- [[FHIR]] (Standard, für den die KBV verbindliche deutsche Profile erstellt)
- [[E-Rezept]] (KBV-FHIR-Profile definieren das Verordnungsformat)
- [[eAU]] (KBV-Vorgaben für die elektronische Krankschreibung)
- [[gematik]] (Partnerorganisation; Gesellschafterin der gematik; gemeinsame Standardisierung)
- [[Telematikinfrastruktur]] (Infrastruktur, für die KBV-Standards gelten)
- [[ePA]] (MIOs als FHIR-Dokumente in der Patientenakte)

## Quellen

- [KBV: Aufgaben der Kassenärztlichen Bundesvereinigung](https://www.kbv.de/kbv/die-kbv/aufgaben)
- [KBV FHIR-Profile | Simplifier.net](https://simplifier.net/organization/kassenrztlichebundesvereinigungkbv)
- [Wikipedia: Kassenärztliche Bundesvereinigung](https://de.wikipedia.org/wiki/Kassen%C3%A4rztliche_Bundesvereinigung)
- [KBV eRezept-FHIR-Profile | kbv.de](https://www.kbv.de/html/erezept.php)
