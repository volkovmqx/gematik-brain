---
title: AMTS - Arzneimitteltherapiesicherheit
audience: [technical, non-technical]
tags: [prozess, amts, medikation, sicherheit, epa]
aliases: [AMTS, Arzneimitteltherapiesicherheit, Medikationssicherheit]
relevance:
  sectors: [arztpraxis, krankenhaus, apotheke, pflege, hersteller]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# AMTS - Arzneimitteltherapiesicherheit

**AMTS** bezeichnet alle Maßnahmen, die verhindern sollen, dass Patienten durch Fehler bei der Arzneimitteltherapie Schaden nehmen.

## Erklärt für Einsteiger

Stell dir vor, du gehst zu drei verschiedenen Ärzten, und jeder verschreibt dir ein Medikament. Keiner weiß, was die anderen verschrieben haben. Manche dieser Medikamente vertragen sich aber nicht miteinander und können gefährliche Wechselwirkungen auslösen. AMTS ist das Ziel, genau das zu verhindern. Digitale Werkzeuge wie der Medikationsplan und die [[ePA]] sorgen dafür, dass alle Ärzte sehen können, welche Medikamente ein Patient einnimmt. So können Fehler frühzeitig erkannt werden.

## Überblick

AMTS steht für Arzneimitteltherapiesicherheit. Der Begriff beschreibt die Gesamtheit aller Prozesse und Systeme, die sicherstellen, dass Medikamente korrekt verordnet, abgegeben und eingenommen werden. Fehler in der Arzneimitteltherapie gehören zu den häufigsten vermeidbaren Schäden im Gesundheitswesen.

Typische Risiken, die AMTS adressiert:

- **Wechselwirkungen**: Zwei Medikamente, die zusammen gefährlich werden
- **Kontraindikationen**: Ein Medikament, das bei einer bestimmten Vorerkrankung nicht gegeben werden darf
- **Doppelverordnungen**: Derselbe Wirkstoff wird von mehreren Ärzten gleichzeitig verschrieben
- **Fehldosierungen**: Falsche Menge oder falsches Anwendungsintervall

Die gesetzliche Grundlage für digitale AMTS-Unterstützung wurde mit dem [[E-Health-Gesetz]] (2015) und dem [[DVG|Digitale-Versorgung-Gesetz (2019)]] geschaffen. Patienten mit mindestens drei verordneten Arzneimitteln haben gesetzlichen Anspruch auf einen Medikationsplan (§ 31a SGB V).

> [!interesse-compliance]
> Patienten mit mindestens drei verordneten Arzneimitteln haben seit 2016 einen gesetzlichen Anspruch auf einen Medikationsplan (§ 31a SGB V). Arztpraxen und Kliniken sind verpflichtet, diesen auf Wunsch auszustellen und bei jeder Änderung zu aktualisieren. Seit März 2026 ist der [[eMP|elektronische Medikationsplan]] in die [[ePA]] integriert; die Befüllung durch den Arzt ist Teil der Anforderungen für die volle [[TI-Pauschale]].

> [!interesse-patient]
> Ihr Arzt oder Ihre Ärztin kann Ihnen einen Medikationsplan erstellen, der alle Ihre Medikamente auflistet. Seit 2026 ist dieser Plan in der elektronischen Patientenakte (ePA) gespeichert. Apotheken und andere Ärzte können ihn einsehen, wenn Sie das erlauben. Das hilft, gefährliche Wechselwirkungen zu vermeiden.

### Medikationsplan und ePA

> [!praxis-tipp] Praxis-Tipp: Medikationsplan im Praxisalltag pflegen
> Patienten mit mindestens drei verordneten Arzneimitteln haben gesetzlichen Anspruch auf einen Medikationsplan (§ 31a SGB V). Ihre Praxis ist verpflichtet, ihn auszustellen und bei jeder Änderung zu aktualisieren.
>
> Bewährter Ablauf:
> 1. MFA erfasst aktuelle Medikation beim Einlesen der eGK vor
> 2. Arzt prüft, ergänzt Selbstmedikation und OTC-Präparate, bestätigt
> 3. PVS speichert den eMP in der ePA (ab ePA-Version 3.1.2, März 2026)
> 4. Patient erhält Ausdruck mit QR-Code für Apotheke und Notaufnahme
>
> Zeitaufwand: ca. 5-10 Minuten bei Erstanlage. Aktualisierungen dauern 2-3 Minuten.
> Häufiger Fehler: Selbstmedikation (Ibuprofen, pflanzliche Mittel) fehlt. Fragen Sie aktiv danach.

Der **[[eMP|elektronische Medikationsplan (eMP)]]** ist das zentrale Instrument der digitalen AMTS-Unterstützung. Er listet alle aktuellen Medikamente eines Patienten inklusive Wirkstoff, Handelsname, Stärke, Dosierungsform und Einnahmehinweisen.

Seit März 2026 ist der eMP in die [[ePA]] integriert. Die ePA enthält daneben eine elektronische Medikationsliste, in die [[E-Rezept]]-Daten automatisch einfließen. Ärzte und Apotheker können so den aktuellen Medikationsstatus eines Patienten vollständig einsehen, sofern der Patient den Zugriff erlaubt.

Die ePA-Version 3.1.3 führt ergänzend **AMTS-relevante Zusatzinformationen (AMTS-rZI)** ein. Dabei handelt es sich um strukturierte Daten, die klinische Hinweise zur Therapiesicherheit enthalten und an den Medikationsdatensatz angehängt werden.

> [!patientenrecht] Patientenrecht: Anspruch auf einen Medikationsplan
> Nehmen Sie drei oder mehr verschriebene Medikamente dauerhaft ein? Dann haben Sie gesetzlichen Anspruch auf einen Medikationsplan.
>
> **Was bedeutet das für Sie?**
> - Ihr Arzt ist verpflichtet, Ihnen diesen Plan auszustellen (§ 31a SGB V)
> - Der Plan listet alle Ihre Medikamente mit Dosierung und Einnahmehinweisen auf
> - Er wird aktualisiert, wenn sich Ihre Medikation ändert
>
> **Was können Sie tun?**
> 1. Fragen Sie Ihren Hausarzt aktiv nach dem Medikationsplan
> 2. Seit März 2026 liegt der Plan auch in Ihrer elektronischen Patientenakte (ePA)
> 3. In der ePA-App Ihrer Krankenkasse können Sie ihn jederzeit einsehen
> 4. Apotheken können den Plan ebenfalls lesen und aktualisieren, wenn Sie das erlauben
>
> Erwähnen Sie dabei auch Medikamente, die Sie ohne Rezept kaufen, zum Beispiel Schmerzmittel oder pflanzliche Mittel.

> [!patientenrecht] Patientenrecht: Wer sieht meine Medikationsdaten?
> Seit März 2026 sehen Ärzte und Apotheker Ihren Medikationsplan in der ePA. Aber nur, wenn Sie das erlauben.
>
> **Sie bestimmen selbst:**
> - Sie können einzelnen Praxen oder Apotheken den Zugriff auf Ihre Medikationsdaten entziehen.
> - Sie können einzelne Medikamente aus dem Plan ausblenden.
> - Jeder Zugriff auf Ihre ePA wird protokolliert. Sie können das Protokoll jederzeit in der App einsehen.
>
> **So kontrollieren Sie den Zugriff:**
> 1. Öffnen Sie die App Ihrer Krankenkasse.
> 2. Gehen Sie zur ePA und öffnen Sie die Zugriffseinstellungen.
> 3. Dort sehen Sie, wer Ihre Daten zuletzt eingesehen hat.
> 4. Sie können Zugriffsrechte einzelner Praxen oder Apotheken dort entziehen.
>
> Ihre Krankenkasse hat keinen Zugriff auf den Inhalt Ihrer Medikationsdaten.

### Verbindung zum E-Rezept

Das [[E-Rezept]] ist eng mit dem AMTS-Prozess verbunden. Wenn ein [[E-Rezept]] ausgestellt wird, kann das Primärsystem des Arztes ([[PVS]]) automatisiert gegen bekannte Wechselwirkungen und Kontraindikationen prüfen. Die Daten des eingelösten [[E-Rezept]]s fließen in die [[ePA]] ein und vervollständigen so das Bild der aktuellen Medikation.

## Technische Details

### FHIR-Datenmodell

> [!interesse-technik]
> Die Medikationsdaten in der [[ePA]] folgen dem IG ePA Medication Service (v1.2.0, Stand ePA 3.1.2). Relevante FHIR-Ressourcen: `MedicationRequest` (Verordnung), `MedicationDispense` (Abgabe aus [[E-Rezept]]), `MedicationStatement` (Selbstmedikation). AMTS-relevante Zusatzinformationen (AMTS-rZI) sind als Extension am `MedicationStatement` definiert. Spezifikation: [IG ePA Medication Service](https://simplifier.net/epa-medication).

Die Medikationsdaten in der [[ePA]] basieren auf [[FHIR]] R4. Die relevanten FHIR-Ressourcen sind:

- `Medication`: Beschreibung des Arzneimittels (Wirkstoff, Form, Stärke)
- `MedicationRequest`: Verordnung durch den Arzt
- `MedicationStatement`: Dokumentierter Medikamenteneinsatz (auch Selbstmedikation)
- `MedicationAdministration`: Dokumentierte Einnahme
- `MedicationDispense`: Abgabe durch die Apotheke (aus [[E-Rezept]])

Die KBV definiert spezifische [[FHIR]]-Profile für den Medikationsplan ([[MIO]] Medikationsplan). Diese Profile standardisieren, wie Medikationsdaten in der TI dargestellt werden.

### Überführung des Bundeseinheitlichen Medikationsplans

Vor der ePA gab es den **[[BMP|Bundeseinheitlichen Medikationsplan (BMP)]]** in Papierform. Er wurde als maschinenlesbarer QR-Code auf einem DIN-A4-Blatt gedruckt. Die Spezifikation `gemInfo_Überführung_BMP_in_eMP` beschreibt, wie bestehende BMP-Daten in das eMP-Format der [[ePA]] überführt werden.

### Zugriff auf Medikationsdaten in der ePA

Zugriff auf die Medikationsdaten in der [[ePA]] haben:

- Ärzte und andere Leistungserbringer über ihr Primärsystem und den [[Fachdienst|ePA-Fachdienst]]
- Apotheker über das [[AVS|Apothekenverwaltungssystem (AVS)]]
- Versicherte selbst über die ePA-App

Der Zugriff ist strikt an die Einwilligung des Patienten gebunden und wird in der [[ePA]] protokolliert.

> [!dev-quickstart] Dev Quickstart: Medikationsliste aus der ePA abrufen
> ePA Medication Service: `GET /epa/medication/api/v1/fhir/MedicationRequest`
> ```bash
> # Alle Verordnungen eines Versicherten abrufen (ePA Medication Service v1.3.0)
> curl -s "https://<epa-fachdienst>/epa/medication/api/v1/fhir/MedicationRequest" \
>   -H "Accept: application/fhir+json" \
>   -H "Authorization: Bearer <idp-access-token>" \
>   -H "x-insurantid: A123456789"
>
> # Mit Include: Medication-Ressourcen direkt mitladen
> curl -s "https://<epa-fachdienst>/epa/medication/api/v1/fhir/MedicationRequest?_include=MedicationRequest:medication" \
>   -H "Accept: application/fhir+json" \
>   -H "Authorization: Bearer <idp-access-token>" \
>   -H "x-insurantid: A123456789"
> ```
> - IG ePA Medication Service (v1.3.0): [gematik.de/fhir/epa-medication](https://www.gematik.de/fhir/epa-medication/1.3.0/op-get-medication-list.html)
> - Simplifier: [simplifier.net/epa-medication](https://simplifier.net/epa-medication)
> - Repo: [github.com/gematik/ePA-Medication](https://github.com/gematik/ePA-Medication)

### Primärsysteme und AMTS-Software

> [!klinik-integration] Klinik-Integration: AMTS im stationären KIS-Workflow
> Im Krankenhaus ist AMTS besonders kritisch, weil Patienten oft polypharmazeutisch behandelt werden und mehrere Fachbereiche gleichzeitig Medikamente verordnen. Das KIS ist das zentrale Instrument für eine strukturierte stationäre Medikationsdokumentation.
>
> **Medikationsmodul im KIS:** Stellen Sie sicher, dass das KIS ein aktives Medikationsmodul mit Wechselwirkungsprüfung betreibt (Arzneimitteldatenbanken: ABDA oder MMI-Pharmindex). Die Prüfung läuft im KIS, nicht im ePA-Fachdienst. Klären Sie mit Ihrem KIS-Hersteller (SAP IS-H, Orbis/Dedalus, iMedOne), ob die Arzneimitteldatenbank im Supportvertrag regelmäßig aktualisiert wird.
> **ePA-Anbindung für Medikationsdaten:** Seit Oktober 2025 sind Krankenhäuser verpflichtet, Medikationsdaten in die ePA einzustellen. Der eMP (seit März 2026 in der ePA verfügbar) sollte bei der Entlassung aktualisiert werden. Das KIS muss dazu `MedicationRequest`- und `MedicationStatement`-FHIR-Ressourcen korrekt erzeugen und per ePA-API übertragen können.
> **Entlassmedikation strukturiert übergeben:** Der Entlassbrief enthält die Entlassmedikation. Nur strukturiert kodierte Medikationsdaten (nicht Freitext) erlauben dem weiterbehandelnden Arzt eine automatische AMTS-Prüfung in seinem PVS. Prüfen Sie, ob das ISiK-Dokumentenmodul (Stufe 3) Ihres KIS strukturierte Medikationsdaten im Entlassbrief unterstützt.

> [!praxis-tipp] Praxis-Tipp: Wechselwirkungsprüfung richtig nutzen
> Die AMTS-Prüfung läuft in Ihrem PVS, nicht automatisch in der ePA. Voraussetzung: Ihr PVS hat eine aktuelle Arzneimitteldatenbank (ABDA oder MMI-Pharmindex).
>
> In Ihrer Praxis bedeutet das:
> - Prüfen Sie im PVS-Vertrag, ob die Arzneimitteldatenbank im Update-Abo enthalten ist
> - Ohne aktuelles Abo sind Wechselwirkungswarnungen veraltet, die Prüfung bleibt dennoch Ihre ärztliche Pflicht
> - Apotheken prüfen beim Einlösen des E-Rezepts nochmals auf Wechselwirkungen. Bei Rückruf der Apotheke: Den Hinweis ernst nehmen und die Medikation gemeinsam prüfen

Die eigentliche Interaktionsprüfung (Wechselwirkungscheck) findet nicht im [[Fachdienst]] der [[ePA]] statt, sondern in den Primärsystemen ([[PVS]], [[KIS]], [[AVS]]). Diese integrieren Datenbanken wie [[ABDA]] oder [[MMI-Pharmindex]], die Arzneimitteldaten und bekannte Interaktionen enthalten. Die [[ePA]] liefert dazu die vollständige Datenbasis aller Medikamente.

## Verknüpfungen

- [[eMP]] (elektronischer Medikationsplan, das zentrale AMTS-Instrument)
- [[ePA]] (zentrale Datenbasis für alle Medikationsdaten eines Patienten)
- [[E-Rezept]] (Verordnungsdaten fließen automatisch in den Medikationsprozess ein)
- [[FHIR]] (Datenformat für alle Medikationsressourcen in der TI)
- [[NFDM]] (Notfalldaten enthalten ebenfalls Medikationsinformationen)
- [[KBV]] (definiert FHIR-Profile für den elektronischen Medikationsplan)
- [[Fachdienst]] (ePA-Fachdienst stellt Medikationsdaten bereit)

## Quellen

- [ePA für alle - Fachportal gematik](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [Elektronischer Medikationsplan - Fachportal gematik](https://fachportal.gematik.de/anwendungen/elektronischer-medikationsplan)
- [KBV: Medikationsplan](https://www.kbv.de/html/medikationsplan.php)
- [ePA Spezifikation 3.1.3 - gemspec.gematik.de](https://gemspec.gematik.de/releases/ePA_3_1_3-1/)
