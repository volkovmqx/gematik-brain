---
title: DiGA-Verzeichnis
audience: [technical, non-technical]
tags: [infrastruktur, diga, bfarm, verzeichnis, register]
aliases: [DiGA-Verzeichnis BfArM, DiGA-Register, Digitale Gesundheitsanwendungen Verzeichnis]
relevance:
  sectors: [arztpraxis, krankenhaus, kasse, hersteller, startup, patient, regulierung]
  interests: [compliance, business, patient]
maturity: wachsend
---

# DiGA-Verzeichnis

Das **DiGA-Verzeichnis** ist das öffentliche Register des [[BfArM]], das alle vom Bundesinstitut zugelassenen Digitalen Gesundheitsanwendungen ([[DiGA]]) mit Produktdaten, Nachweisen zum Nutzen, Preisen und Verordnungsvoraussetzungen auflistet.

## Erklärt für Einsteiger

Wenn ein Arzt eine DiGA verordnen will, muss er wissen, welche Apps offiziell zugelassen sind. Das DiGA-Verzeichnis ist die offizielle Liste. Nur Apps, die auf dieser Liste stehen, dürfen von Ärzten per [[E-Rezept]] verordnet und von den Krankenkassen erstattet werden. Das Verzeichnis ist öffentlich, jeder kann nachschauen, welche Apps es gibt und warum sie zugelassen wurden.

## Überblick

Das DiGA-Verzeichnis wird vom [[BfArM]] (Bundesinstitut für Arzneimittel und Medizinprodukte) geführt und ist unter **diga.bfarm.de** öffentlich zugänglich. Es entstand mit Einführung des [[DVG]] (Digitale-Versorgung-Gesetz 2019) und des [[DiGA-Fast-Track]]-Verfahrens.

Seit der Einführung im Oktober 2020 wurden über **50 DiGA** mindestens zeitweise aufgenommen (Stand 2026). Die Anzahl der permanent aufgenommenen DiGA (mit vollständigem Nutzennachweis) wächst langsamer als die vorläufig aufgenommenen.

### Inhalt des Verzeichnisses

Für jede DiGA enthält das Verzeichnis:

- Produktname, Hersteller, Versionsnummer
- Zulassungsstatus (dauerhaft oder vorläufig)
- Indikationsgebiet und Zweckbestimmung
- Nachgewiesener Nutzen (Studienergebnisse, bei dauerhafter Aufnahme)
- Verordnungsvoraussetzungen (welche ICD-10-Diagnosen berechtigen zur Verordnung?)
- Erstattungsbetrag (nach Abschluss der Verhandlung mit dem [[GKV-Spitzenverband]])
- Technische Informationen und Datenschutzhinweise

> [!patientenrecht] Patientenrecht: Ihre Daten in der DiGA
> Jede DiGA im Verzeichnis wurde vom BfArM auf Datenschutz geprüft. Das ist Pflicht.
>
> **Was bedeutet das für Sie?**
> - Die App darf Ihre Gesundheitsdaten nur mit Ihrer Einwilligung speichern.
> - Sie können Ihre Einwilligung jederzeit widerrufen.
> - Ihre Daten dürfen nicht für Werbung genutzt werden.
>
> **Was können Sie tun?**
> 1. Lesen Sie die Datenschutzerklärung der App, bevor Sie starten.
> 2. Im DiGA-Verzeichnis finden Sie für jede App die Datenschutzinformationen: [diga.bfarm.de](https://diga.bfarm.de/de/verzeichnis)
> 3. Bei Fragen wenden Sie sich an den Hersteller der App oder Ihre Krankenkasse.

> [!interesse-compliance]
> **Für Verordner:** Nur DiGA aus dem aktuellen BfArM-Verzeichnis dürfen auf einem [[E-Rezept]] verordnet werden. Die Verordnung erfolgt mit der PZN der DiGA. Krankenkassen erstatten ausschließlich gelistete DiGA. Eine DiGA ohne Eintrag im Verzeichnis kann nicht abgerechnet werden. Aktuelles Verzeichnis: [diga.bfarm.de](https://diga.bfarm.de/de/verzeichnis)

> [!interesse-business]
> **Marktzugang:** Die Aufnahme ins DiGA-Verzeichnis ist die einzige Möglichkeit, eine DiGA als erstattungsfähig zu positionieren. Ohne Eintrag kein GKV-Markt. Der Erstattungspreis im ersten Jahr nach vorläufiger Aufnahme wird vom Hersteller frei gesetzt. Ab dem zweiten Jahr wird er mit dem GKV-Spitzenverband verhandelt. Hersteller, die keine Studienergebnisse nach 12 Monaten vorlegen, werden aus dem Verzeichnis gestrichen.

## Technische Details

### Zulassungsstatus: Vorläufig und Dauerhaft

Das DiGA-Verzeichnis unterscheidet zwei Aufnahmestatus:

**Vorläufige Aufnahme**: Der Hersteller hat einen plausiblen positiven Versorgungseffekt nachgewiesen, aber noch keine Studie abgeschlossen. Die DiGA wird für 12 Monate vorläufig aufgenommen. In dieser Zeit muss der Hersteller eine Studie durchführen. Ziel: Nachweis eines positiven Versorgungseffekts (pVE) oder medizinischen Nutzens.

> [!frist-warnung] Frist-Warnung: Nachweispflicht bei vorläufiger DiGA-Aufnahme
> **Rechtsgrundlage:** § 139e Abs. 4 SGB V i.V.m. § 20 DiGAV (Digitale-Gesundheitsanwendungen-Verordnung vom 8. April 2020, BGBl. I S. 768)
> **Frist:** Der Hersteller einer vorläufig aufgenommenen DiGA muss Nachweise über einen positiven Versorgungseffekt (pVE) oder medizinischen Nutzen spätestens zum Ablauf des 12-monatigen Erprobungszeitraums beim BfArM einreichen. Eine einmalige Verlängerung um bis zu weitere 12 Monate ist auf Antrag möglich.
> **Handlungsbedarf:** Hersteller sind verpflichtet, ab Datum der vorläufigen Aufnahme eine konforme Studie zu planen, durchzuführen und die Ergebnisse fristgerecht beim BfArM einzureichen. Das BfArM entscheidet binnen drei Monaten nach Eingang vollständiger Unterlagen über die dauerhafte Aufnahme.
> **Bei Nichtbeachtung:** Gemäß § 139e Abs. 4 SGB V ist die DiGA aus dem Verzeichnis zu streichen. Eine erneute Antragstellung ist frühestens 12 Monate nach dem ablehnenden Bescheid zulässig und nur mit neuen oder bisher nicht eingereichten Nachweisen möglich. Eine wiederholte vorläufige Aufnahme zum Zweck der Erprobung ist ausgeschlossen.

**Dauerhafte Aufnahme**: Der Nutzen ist durch Studien belegt. Die DiGA bleibt dauerhaft im Verzeichnis, solange sie die Anforderungen erfüllt.

Eine DiGA kann auch aus dem Verzeichnis entfernt werden: bei fehlendem Studiennachweis nach 12 Monaten, bei sicherheitsrelevanten Problemen oder auf Antrag des Herstellers.

### Verordnung und Einlösung

Die Verordnung einer DiGA erfolgt über das [[E-Rezept]]-System:

1. Arzt oder Psychotherapeut stellt ein E-Rezept mit der **PZN** ([[PZN]]) der DiGA aus.
2. Patient löst das E-Rezept bei seiner Krankenkasse ein (nicht in der Apotheke).
3. Krankenkasse stellt einen Freischaltcode bereit.
4. Patient aktiviert die DiGA-App mit dem Freischaltcode.
5. Krankenkasse erstattet dem Hersteller den Erstattungsbetrag.

> [!praxis-tipp] Praxis-Tipp: DiGA verordnen im Praxisalltag
> So verordnen Sie eine DiGA in Ihrer Praxis:
> 1. Vor der Verordnung: Prüfen Sie unter [diga.bfarm.de](https://diga.bfarm.de/de/verzeichnis), ob die gewünschte App aktuell im Verzeichnis steht. DiGA können gestrichen werden.
> 2. Im PVS die PZN der DiGA aufrufen und ein E-Rezept ausstellen. Eine Diagnose auf dem Rezept ist nicht zwingend erforderlich.
> 3. Falls Ihr PVS die elektronische DiGA-Verordnung noch nicht unterstützt: Verordnung auf Muster 16 (Papier) ist weiterhin möglich.
> 4. Dem Patienten erklären: Das Rezept wird nicht in der Apotheke eingelöst, sondern direkt bei der Krankenkasse. Die App ist für den Patienten kostenlos.
>
> Häufiger Fehler: DiGA-Verordnung in der Apotheke eingelöst. Die Apotheke kann DiGA nicht aushändigen. Patient muss sich an die Krankenkasse wenden.

> [!interesse-patient]
> **Als Patient:** Wenn Ihr Arzt Ihnen eine DiGA verordnet, erhalten Sie ein E-Rezept. Das lösen Sie nicht in der Apotheke ein, sondern direkt bei Ihrer Krankenkasse (App, Website oder Kundendienst). Die Kasse gibt Ihnen dann einen Zugangscode für die App. Die App ist für Sie kostenlos, die Kasse übernimmt die Kosten. Sie können im DiGA-Verzeichnis nachschauen, welche Apps es gibt: diga.bfarm.de

> [!patientenrecht] Patientenrecht: DiGA beantragen und einlösen
> Sie haben das Recht auf eine DiGA. Zwei Wege führen dazu:
>
> **Weg 1: Ihr Arzt verschreibt die DiGA.**
> Sie erhalten ein Rezept (auf Papier oder elektronisch). Das geben Sie bei Ihrer Krankenkasse ab, nicht in der Apotheke.
>
> **Weg 2: Sie beantragen die DiGA direkt bei Ihrer Krankenkasse.**
> Das ist möglich, wenn Ihre Diagnose passt. Die Kasse entscheidet dann innerhalb von 3 Wochen.
>
> **So lösen Sie die DiGA ein:**
> 1. Reichen Sie das Rezept bei der Kasse ein (per App, Website oder Post).
> 2. Die Kasse schickt Ihnen einen Freischaltcode.
> 3. Sie laden die App herunter und geben den Code ein.
> 4. Die App ist für Sie kostenlos.
>
> **Wichtig:** Nur Apps aus dem offiziellen BfArM-Verzeichnis werden erstattet. Prüfen Sie vorher: [diga.bfarm.de](https://diga.bfarm.de/de/verzeichnis)

### Erstattungsbeträge

Erstattungsbeträge werden vom Hersteller im ersten Jahr frei gesetzt (keine Deckelung). Ab dem zweiten Jahr werden sie mit dem [[GKV-Spitzenverband]] verhandelt. Wenn keine Einigung erzielt wird, entscheidet eine Schiedsstelle. Basis für die Verhandlung sind die nachgewiesenen Nutzeneffekte und der internationale Preisvergleich.

Die Erstattungsbeträge variieren stark: Von ca. 10 Euro/Monat (einfache Anwendungen) bis über 600 Euro/Monat (bei nachgewiesenem hohem medizinischen Nutzen).

### Schnittstelle zwischen DiGA-Verzeichnis und TI

Das DiGA-Verzeichnis ist kein Teil der [[Telematikinfrastruktur]] im technischen Sinne, aber eng mit ihr verknüpft:

- Die Verordnung erfolgt über das [[E-Rezept]] (TI-Fachdienst).
- Die PZN der DiGA wird im E-Rezept-Datensatz als Produkt codiert.
- Die Abrechnung läuft über das [[Apothekenrechenzentrum]]-System (analog zu Arzneimitteln, aber mit der Krankenkasse als direktem Endpunkt).
- [[ISiK]]-fähige [[KIS]] können DiGA-Verordnungen und deren Status in das Patientenmanagement integrieren.

### API-Zugang zum Verzeichnis

Das [[BfArM]] stellt das DiGA-Verzeichnis als maschinenlesbare Daten zur Verfügung. Hersteller von Primärsystemen und Krankenkassen können das Verzeichnis automatisiert abfragen, um aktuelle Produktdaten zu erhalten. Ein REST-API existiert für das DiGA-Portal.

## Verknüpfungen

- [[DiGA]] (die Anwendungsklasse, die im Verzeichnis gelistet wird)
- [[DiGA-Fast-Track]] (das Verfahren, über das DiGA ins Verzeichnis kommen)
- [[DiGAV]] (Ausführungsverordnung; regelt die Kriterien für das Verzeichnis)
- [[BfArM]] (betreibt das Verzeichnis)
- [[DVG]] (Gesetz, das das DiGA-Verzeichnis einführte)
- [[E-Rezept]] (Verordnungsweg für gelistete DiGA)
- [[PZN]] (Produktnummer; Identifikator jeder DiGA im Verzeichnis)
- [[GKV-Spitzenverband]] (verhandelt Erstattungsbeträge ab Jahr 2)
- [[SGB-V]] (§ 139e: gesetzliche Grundlage für das DiGA-Verzeichnis)
- [[DiPA]] (Schwesterkonzept für Pflegeanwendungen; eigenes BfArM-Register)
- [[Medizinprodukte]] (DiGA sind regulierte Medizinprodukte der Risikoklasse I/IIa)
- [[G-BA]] (Bewertungsausschuss; kann bei DiGA eine Nutzenbewertung einleiten)

## Quellen

- [BfArM: DiGA-Verzeichnis (diga.bfarm.de)](https://diga.bfarm.de/de/verzeichnis)
- [BfArM: DiGA – Fast-Track-Verfahren](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiGA/_artikel.html)
- [gematik: E-Rezept für DiGA](https://fachportal.gematik.de/anwendungen/e-rezept)
- [Wikipedia: Digitale Gesundheitsanwendung](https://de.wikipedia.org/wiki/Digitale_Gesundheitsanwendung)
