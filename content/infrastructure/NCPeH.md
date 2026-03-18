---
title: NCPeH - National Contact Point for eHealth
audience: [technical, non-technical]
tags: [infrastruktur, eu, interoperabilitaet, myhealth, ehds]
aliases: [National Contact Point for eHealth, Nationaler Kontaktpunkt eHealth]
---

# NCPeH - National Contact Point for eHealth

Der **NCPeH** (National Contact Point for eHealth) ist Deutschlands nationaler Zugangspunkt zur europäischen MyHealth@EU-Infrastruktur. Er verbindet die deutsche [[Telematikinfrastruktur]] mit dem grenzüberschreitenden Gesundheitsdatenaustausch in der EU.

## Erklärt für Einsteiger

Stell dir vor, du bist im Urlaub in Spanien und wirst krank. Der spanische Arzt braucht deine Medikamentenliste oder deine Allergien. Bisher war das kompliziert: Kein System konnte mit dem anderen reden. Der NCPeH ist wie ein Übersetzer und Torwächter zugleich: Er übermittelt die nötigen Gesundheitsdaten sicher aus Deutschland nach Spanien und umgekehrt. Das funktioniert nur, wenn du einverstanden bist.

## Überblick

Die **DVKA** (Deutsche Verbindungsstelle Krankenversicherung – Ausland) betreibt den NCPeH. Die [[gematik]] ist für die Spezifikation und Produkttypbestätigung zuständig. Der NCPeH ist die technische Schnittstelle zwischen der deutschen [[Telematikinfrastruktur]] und dem europäischen **MyHealth@EU**-Netzwerk (früher eHealth-Netzwerk).

Die rechtliche Grundlage auf EU-Ebene ist die **EHDS-Verordnung** (European Health Data Space, EU 2025/327), die im März 2025 in Kraft trat. Sie verpflichtet die EU-Mitgliedstaaten schrittweise zur Teilnahme am grenzüberschreitenden Gesundheitsdatenaustausch.

Am **16. März 2026** besuchten fast 50 Delegierte aus 14 EU-Ländern die [[gematik]], um sich über den deutschen NCPeH und die TI-Infrastruktur zu informieren. Das zeigt das wachsende Interesse anderer Mitgliedstaaten an der deutschen Implementierung.

### Geplante Teilnahme an MyHealth@EU

Deutschland plant die Teilnahme an MyHealth@EU in mehreren Wellen:

- **Wave 10 (2026)**: Deutschland plant den Anschluss für das [[E-Rezept]] (ePrescription)
- **Bis 2029**: Vollständige Nutzbarkeit von Patientenzusammenfassung (Patient Summary) und [[E-Rezept]] EU-weit

Österreich ist bereits seit **Februar 2026** aktiv am Austausch beteiligt: Es akzeptiert EU-E-Rezepte aus Tschechien, was ein erstes konkretes Beispiel für den funktionierenden grenzüberschreitenden Austausch ist.

Das übergeordnete Ziel: Bürgerinnen und Bürger sollen bis 2029 ihre Gesundheitsdaten (Patientenzusammenfassung, E-Rezept) EU-weit nutzen können.

## Technische Details

### Architektur

Der NCPeH ist ein Gateway zwischen zwei Infrastrukturen:

- **Innenseite (national)**: Verbindung zur deutschen [[Telematikinfrastruktur]] und ihren Fachdiensten ([[ePA]], [[E-Rezept]])
- **Außenseite (europäisch)**: Verbindung zum MyHealth@EU-Netzwerk über standardisierte eHealth-Protokolle

Der Datenaustausch über MyHealth@EU basiert auf **IHE**-Profilen (Integrating the Healthcare Enterprise) und auf [[FHIR]]-basierten Austauschformaten.

### Datenarten im Austausch

| Dienst | Inhalt | Status Deutschland |
|---|---|---|
| Patient Summary (PS) | Zusammenfassung der Krankengeschichte, Medikamente, Allergien | In Vorbereitung |
| ePrescription | Elektronisches Rezept | Geplant Wave 10 (2026) |
| eDispensation | Bestätigung der Abgabe | Geplant Wave 10 (2026) |

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
- [[gematik]]: Spezifikation und Produkttypbestätigung für den NCPeH
- [[FHIR]]: Datenformat für den Austausch über MyHealth@EU
- [[GDNG]]: Deutsches Gesetz zur Sekundärnutzung von Gesundheitsdaten

## Quellen

- [gematik: EU-Delegation besucht gematik (März 2026)](https://www.gematik.de/newsroom/news-detail/grenzueberschreitender-digitaler-gesundheitsdatenaustausch-europaeische-delegation-bei-der-gematik)
- [Europäische Kommission: European Health Data Space (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en)
