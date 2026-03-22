---
title: NCPeH - National Contact Point for eHealth
audience: [technical, non-technical]
tags: [infrastruktur, eu, interoperabilitaet, myhealth, ehds]
aliases: [National Contact Point for eHealth, Nationaler Kontaktpunkt eHealth]
maturity: immergruen
relevance:
  sectors: [ti-infrastruktur, krankenhaus, arztpraxis, apotheke, kasse, patient, regulierung]
  interests: [technik, compliance, patient]
---

# NCPeH - National Contact Point for eHealth

Der **NCPeH** (National Contact Point for eHealth) ist Deutschlands nationaler Zugangspunkt zur europäischen [[MyHealthAtEU|MyHealth@EU]]-Infrastruktur. Er verbindet die deutsche [[Telematikinfrastruktur]] mit dem grenzüberschreitenden Gesundheitsdatenaustausch in der EU.

## Erklärt für Einsteiger

Stell dir vor, du bist im Urlaub in Spanien und wirst krank. Der spanische Arzt braucht deine Medikamentenliste oder deine Allergien. Bisher war das kompliziert: Kein System konnte mit dem anderen reden. Der NCPeH ist wie ein Übersetzer und Torwächter zugleich: Er übermittelt die nötigen Gesundheitsdaten sicher aus Deutschland nach Spanien und umgekehrt. Das funktioniert nur, wenn du einverstanden bist.

## Überblick

Die **[[DVKA]]** (Deutsche Verbindungsstelle Krankenversicherung – Ausland) betreibt den NCPeH. Die [[gematik]] ist für die Spezifikation und Produkttypbestätigung zuständig. Der NCPeH ist die technische Schnittstelle zwischen der deutschen [[Telematikinfrastruktur]] und dem europäischen **[[MyHealthAtEU|MyHealth@EU]]**-Netzwerk (früher eHealth-Netzwerk).

Die rechtliche Grundlage auf EU-Ebene ist die **[[EHDS]]-Verordnung** (European Health Data Space, EU 2025/327), die im März 2025 in Kraft trat. Sie verpflichtet die EU-Mitgliedstaaten schrittweise zur Teilnahme am grenzüberschreitenden Gesundheitsdatenaustausch.

Am **16. März 2026** besuchten fast 50 Delegierte aus 14 EU-Ländern die [[gematik]], um sich über den deutschen NCPeH und die TI-Infrastruktur zu informieren. Das zeigt das wachsende Interesse anderer Mitgliedstaaten an der deutschen Implementierung.

Parallel zur E-Rezept-Integration laufen in Deutschland erste Pilotaktivitäten für den grenzüberschreitenden Austausch von [[Patient-Summary|Patientenkurzakten (Patient Summary)]]. Die AOK hat Pilotprojektergebnisse und ein Konzeptpapier für den EU-weiten Patientenzusammenfassungsaustausch beim [[BMG]] eingereicht. Patient Summary und E-Rezept sind zwei eigenständige Anwendungsfälle: Das E-Rezept ist für Wave 10 (H1/2027) priorisiert; der Patient-Summary-Austausch ist als separater Schritt geplant und befindet sich in der konzeptionellen Phase.

> [!interesse-compliance]
> Der Produktivstart Deutschlands für den grenzüberschreitenden E-Rezept-Austausch (Wave 10) wurde auf H1/2027 verschoben (OneRoadmap Q1/2026). Die [[DVKA]] betreibt den NCPeH als Pflichtaufgabe nach EHDS-Verordnung (EU 2025/327, in Kraft März 2025). Krankenkassen und Leistungserbringer müssen keine eigene Infrastruktur aufbauen: Der NCPeH übernimmt die Grenzüberschreitung zentral. Bis 2029 ist die EU-weite Nutzbarkeit von [[Patient-Summary|Patientenzusammenfassung]] und [[E-Rezept]] verpflichtend.

### Geplante Teilnahme an MyHealth@EU

Deutschland plant die Teilnahme an MyHealth@EU in mehreren Wellen:

- **Wave 10 (H1/2027)**: Der Produktivstart Deutschlands für den E-Rezept-Anwendungsfall (ePrescription) wurde von 2026 auf das erste Halbjahr 2027 verschoben (Stand: OneRoadmap Q1/2026).
- **Bis 2029**: Vollständige Nutzbarkeit von [[Patient-Summary|Patientenzusammenfassung (Patient Summary)]] und [[E-Rezept]] EU-weit

Österreich ist bereits seit **25. Februar 2026** aktiv am Austausch beteiligt: Es akzeptiert EU-E-Rezepte aus Tschechien, was ein erstes konkretes Beispiel für den funktionierenden grenzüberschreitenden Austausch ist. Deutschland war ursprünglich als Wave-10-Teilnehmer mit Produktivstart in 2026 geplant; laut OneRoadmap Q1/2026 wurde der Termin auf H1/2027 verschoben.

Das übergeordnete Ziel: Bürgerinnen und Bürger sollen bis 2029 ihre Gesundheitsdaten (Patientenzusammenfassung, E-Rezept) EU-weit nutzen können.

> [!interesse-patient]
> Wenn Sie im EU-Ausland krank werden, kann ein Arzt dort mit Ihrer Einwilligung auf Ihre deutschen Gesundheitsdaten zugreifen, etwa auf Ihre Medikamentenliste oder ein Rezept. Das funktioniert über den NCPeH. Sie müssen aktiv einwilligen, bevor Daten abgerufen werden. Der Zugriff ist auf das notwendige Minimum beschränkt. Ab 2029 soll das EU-weit für alle GKV-Versicherten möglich sein.

## Technische Details

### Architektur

Der NCPeH ist ein Gateway zwischen zwei Infrastrukturen:

- **Innenseite (national)**: Verbindung zur deutschen [[Telematikinfrastruktur]] und ihren Fachdiensten ([[ePA]], [[E-Rezept]])
- **Außenseite (europäisch)**: Verbindung zum MyHealth@EU-Netzwerk über standardisierte eHealth-Protokolle

Der Datenaustausch über MyHealth@EU basiert auf **IHE**-Profilen (Integrating the Healthcare Enterprise) und auf [[FHIR]]-basierten Austauschformaten.

> [!interesse-technik]
> **Spezifikation**: gemF_eRp_EU V1.0.0 (Release NCPeH_24_2, März 2025) auf [gemspec.gematik.de](https://gemspec.gematik.de/releases/NCPeH_24_2/).
> **Protokoll**: IHE-Profile und FHIR-basierte Formate über das MyHealth@EU-Backbone-Netz.
> **Autorisierung**: 6-stelliger alphanumerischer Zugangscode zusammen mit Versicherten-ID (KVNR). Kein Konnektor auf der ausländischen Seite erforderlich.
> **Sicherheit**: PKI-basierte Authentisierung aller NCPs. Gegenseitige TLS-Authentisierung (mTLS) zwischen nationalen Kontaktpunkten.

### EU E-Rezept: gemF_eRp_EU V1.0.0

Gematik veröffentlichte am 12. März 2025 mit Release **NCPeH_24_2** die Feature-Spezifikation **gemF_eRp_EU V1.0.0** für den Anwendungsfall "EU Zugriff E-Rezept" (ePrescription/eDispensation Country A). Sie beschreibt, wie Versicherte deutschen Leistungserbringern im EU-Ausland Zugriff auf ihre [[E-Rezept|E-Rezepte]] erteilen können.

Der Autorisierungsmechanismus nutzt einen **6-stelligen alphanumerischen Zugangscode** zusammen mit der Versicherten-ID. Das Verfahren funktioniert ohne Konnektor oder physische Karte auf der ausländischen Seite. Der produktive Wave-10-Anschluss Deutschlands an MyHealth@EU für E-Rezepte ist für H1/2027 geplant (Stand: OneRoadmap Q1/2026).

### Datenarten im Austausch

| Dienst | Inhalt | Status Deutschland |
|---|---|---|
| Patient Summary (PS) | Zusammenfassung der Krankengeschichte, Medikamente, Allergien | In Vorbereitung |
| ePrescription | Elektronisches Rezept | Geplant Wave 10 (H1/2027) |
| eDispensation | Bestätigung der Abgabe | Geplant Wave 10 (H1/2027) |

### EHDS und Sekundärnutzung

Die EHDS-Verordnung (EU 2025/327) regelt nicht nur den primären Datenaustausch zwischen Patienten und Leistungserbringern, sondern auch die Sekundärnutzung von Gesundheitsdaten für Forschung und Innovation. Für die Sekundärnutzung in Deutschland sind die Regelungen des [[GDNG]] (Gesundheitsdatennutzungsgesetz) maßgeblich.

### Sicherheit und Datenschutz

Der NCPeH überträgt personenbezogene Gesundheitsdaten über Ländergrenzen hinweg. Dafür gelten:

- DSGVO-konforme Datenübermittlung in Drittländer nur unter strengen Bedingungen (innerhalb der EU grundsätzlich zulässig)
- Der Versicherte muss aktiv einwilligen, bevor Daten über den NCPeH abgerufen werden können
- [[PKI]]-basierte Authentisierung aller beteiligten nationalen Kontaktpunkte

## Verknüpfungen

- [[Telematikinfrastruktur]]: Nationale Infrastruktur, mit der der NCPeH verbunden ist
- [[ePA]]: Patientendaten, die über den NCPeH zugänglich gemacht werden
- [[E-Rezept]]: Geplante Datenart für den grenzüberschreitenden Austausch
- [[EHDS]]: EU-Verordnung, die den rechtlichen Rahmen für MyHealth@EU schafft
- [[gematik]]: Spezifikation und Produkttypbestätigung für den NCPeH
- [[FHIR]]: Datenformat für den Austausch über MyHealth@EU
- [[GDNG]]: Deutsches Gesetz zur Sekundärnutzung von Gesundheitsdaten

## Quellen

- [gematik: EU-Delegation besucht gematik (März 2026)](https://www.gematik.de/newsroom/news-detail/grenzueberschreitender-digitaler-gesundheitsdatenaustausch-europaeische-delegation-bei-der-gematik)
- [Europäische Kommission: European Health Data Space (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en)
- [DVKA / eu-patienten.de: Grenzüberschreitende Gesundheitsversorgung – Nationale Kontaktstelle](https://www.eu-patienten.de)
- [Gesundheit Österreich: EU-E-Rezept ab 25. Februar 2026 in Österreich einlösbar](https://www.gesundheit.gv.at/news/aktuelles/aktuell-2026/eu-rezept.html)
