---
title: Broad Consent
audience: [technical, non-technical]
tags: [konzept, datenschutz, forschung, einwilligung, mii]
aliases: [Broad Consent, Breite Einwilligung, MII Broad Consent]
relevance:
  sectors: [krankenhaus, forschung, patient]
  interests: [compliance, patient]
maturity: setzling
---

# Broad Consent

Der **Broad Consent** (breite Einwilligung) ist ein standardisiertes Einwilligungsformular der [[Medizininformatik-Initiative]] (MII), mit dem Patientinnen und Patienten in die Nutzung ihrer Gesundheitsdaten für die medizinische Forschung einwilligen.

## Erklärt für Einsteiger

Wenn du in ein Universitätsklinikum kommst, kannst du gefragt werden, ob deine Behandlungsdaten für die Forschung genutzt werden dürfen. Das Besondere am Broad Consent ist, dass du nicht für jedes einzelne Forschungsprojekt neu gefragt wirst. Stattdessen gibst du einmalig eine breite Einwilligung für eine Vielzahl zukünftiger Studien. Du kannst dabei wählen, für welche Zwecke du zustimmst und für welche nicht. Und du kannst die Einwilligung jederzeit widerrufen.

## Überblick

Der Broad Consent ist das einheitliche Einwilligungsmodell der [[Medizininformatik-Initiative]] (MII). Die MII ist ein Zusammenschluss von mehr als 30 deutschen Universitätskliniken und Gesundheitseinrichtungen, die Patientendaten für Forschungszwecke zusammenführen und auswerten.

Das zentrale Problem, das der Broad Consent löst: Die Datenschutz-Grundverordnung ([[DSGVO]]) verlangt für die Verarbeitung von Gesundheitsdaten eine informierte Einwilligung (Art. 6 Abs. 1 lit. a, Art. 9 Abs. 2 lit. a DSGVO). Bei der klassischen spezifischen Einwilligung müsste ein Patient für jedes neue Forschungsprojekt erneut eingewilligt haben, was in der Praxis kaum umsetzbar ist. Der Broad Consent ermöglicht eine einmalige, breit gefasste Einwilligung für eine Klasse von Forschungsvorhaben, die dem Einwilligenden im Zeitpunkt der Einwilligung noch nicht vollständig bekannt ist.

Die Rechtmäßigkeit des Broad Consent ist in Deutschland umstritten. Das Muster der MII wurde gemeinsam mit Datenschutzbehörden und Ethikkommissionen der Länder abgestimmt. In einigen Bundesländern akzeptieren Datenschutzbehörden das Modell; in anderen ist die Rechtslage weniger klar.

### Abgrenzung zum Opt-Out-Modell der ePA

Der Broad Consent der MII und das [[Opt-Out-ePA|Opt-Out-Modell der ePA]] sind grundsätzlich verschieden:

| Merkmal | Broad Consent (MII) | Opt-Out (ePA) |
|---------|---------------------|---------------|
| Rechtsmodell | Einwilligung (Opt-In) | Widerspruch (Opt-Out) |
| Betroffene | Freiwillig; Patienten von MII-Kliniken | Alle GKV-Versicherten |
| Zweck | Sekundärnutzung für Forschung | Klinische Versorgung plus Sekundärnutzung |
| Widerruf | Jederzeit möglich | Jederzeit möglich |
| Rechtsgrundlage | DSGVO Art. 9 Abs. 2 lit. a | § 363 SGB V |

> [!interesse-patient]
> Der Broad Consent ist freiwillig. Du kannst ihn beim Besuch eines Universitätsklinikums unterschreiben oder ablehnen, ohne dass deine Behandlung davon abhängt. Falls du eingewilligt hast, kannst du deine Einwilligung jederzeit schriftlich widerrufen. Daten, die bereits in Forschungsprojekten genutzt wurden, können nach dem Widerruf nicht mehr zurückgeholt werden, aber zukünftige Nutzungen werden gestoppt. Du kannst auch nur für bestimmte Forschungsbereiche einwilligen und andere ausschließen.

> [!patientenrecht] Patientenrecht: Einwilligung widerrufen
> Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Niemand darf Sie dafür benachteiligen.
>
> **So widerrufen Sie den Broad Consent:**
> 1. Wenden Sie sich an das Universitätsklinikum, in dem Sie eingewilligt haben
> 2. Informieren Sie die dortige Treuhandstelle oder das Datenschutzbüro schriftlich
> 3. Zukünftige Nutzungen Ihrer Daten werden gestoppt
>
> **Wichtig:** Daten, die bereits in abgeschlossenen Forschungsprojekten ausgewertet wurden, können nicht rückwirkend entfernt werden. Daten, die noch nicht genutzt wurden, werden nach dem Widerruf nicht mehr verwendet.
>
> Sie können die Einwilligung auch **nur für einzelne Bereiche** widerrufen, zum Beispiel nur für Biomaterialien, aber nicht für klinische Daten.

## Inhalt der MII-Einwilligung

Der MII Broad Consent Mustertext (aktuelle Version: V2022) enthält Module, für die Patienten getrennt einwilligen können:

1. **Daten aus Behandlung (klinische Daten)**: Alle im Behandlungsprozess anfallenden Daten wie Diagnosen, Medikamente, Laborwerte, Untersuchungsergebnisse
2. **Biomaterialien**: Lagerung und Nutzung von Blut-, Gewebe- und anderen Körpermaterialproben
3. **Kontaktaufnahme für weitere Studien**: Berechtigung, den Patienten für neue Studien zu kontaktieren
4. **Vernetzung mit anderen Datenquellen**: Verknüpfung mit Daten anderer MII-Standorte oder Forschungsinfrastrukturen

Für jeden Bereich kann die Einwilligung separat gegeben oder verweigert werden (modulares Einwilligungskonzept).

### Geltungsbereich

Der MII Broad Consent gilt für Forschungsprojekte, die:
- Von einer Ethikkommission genehmigt wurden
- Den MII-Datenschutz- und Sicherheitsstandards entsprechen
- Wissenschaftliche oder medizinische Erkenntnisziele verfolgen
- Über das Datenintegrationszentrum des jeweiligen MII-Standorts abgewickelt werden

## Technische Details

> [!frist-warnung] Frist-Warnung: Datenschutzkonforme Einwilligungsdokumentation in MII-Einrichtungen
> **Rechtsgrundlage:** Art. 9 Abs. 2 lit. a DSGVO i.V.m. Art. 7 DSGVO; § 287 Abs. 1 SGB V (Nutzung von Sozialdaten zu Forschungszwecken)
> **Pflicht:** MII-Mitgliedseinrichtungen sind verpflichtet, für jeden Patienten, dessen Daten in das Datenintegrationszentrum (DIZ) einfließen, eine dokumentierte und widerrufbare Einwilligung nach dem MII-Broad-Consent-Muster (aktuelle Version: V2022) nachzuweisen. Die Einwilligung muss vor der Datenverarbeitung vorliegen.
> **Handlungsbedarf:** Einrichtungen müssen sicherstellen, dass der Einwilligungsprozess vollständig dokumentiert ist, der V2022-Mustertext unverändert verwendet wird und eine technische Widerrufsmöglichkeit implementiert ist. Die MII-Finanzierungsphase II läuft bis 2026; Standorte müssen bis dahin den produktiven Einwilligungsprozess nachweisen.
> **Bei Nichtbeachtung:** Verarbeitung von Gesundheitsdaten ohne wirksame Einwilligung stellt einen Verstoß gegen Art. 9 DSGVO dar und kann Bußgelder nach Art. 83 Abs. 5 DSGVO (bis 4 % des weltweiten Jahresumsatzes) sowie den Ausschluss aus dem MII-Netzwerk nach sich ziehen.

> [!klinik-integration] Klinik-Integration: Broad Consent im Aufnahme-Workflow und KIS
> Der Einwilligungsprozess muss in den stationären Aufnahme-Workflow eingebettet werden. Typisch: Das Aufnahmepersonal legt dem Patienten das Broad-Consent-Formular zusammen mit den übrigen Aufnahmepapieren vor.
>
> **KIS-seitige Consent-Verwaltung:** Verbreitete KIS (Orbis/Dedalus, SAP ISH, iMedOne) bieten Module zur digitalen Einwilligungsdokumentation. Der Consent-Status muss pro Patient im KIS hinterlegt und mit dem DIZ synchronisiert sein. Ohne aktiven Consent-Status werden keine Patientendaten ins DIZ übertragen.
> **FHIR-Schnittstelle KIS zu DIZ:** Der MII Consent ist als FHIR R4-Ressource modelliert (Profil: `mii-pr-consent-einwilligung`). Das KIS übermittelt Consent-Ereignisse per FHIR-API oder HL7 v2 MDM-Nachricht an das lokale DIZ-System.
> **Widerruf:** Bei Widerruf muss das KIS den Consent-Status umgehend aktualisieren; das DIZ stoppt die weitere Datenübertragung. Prüfen Sie, ob der KIS-Hersteller den Widerruf-Workflow automatisiert unterstützt oder ob ein manueller Prozess nötig ist.

### Datenintegrationszentren (DIZ)

Jeder MII-Standort betreibt ein **Datenintegrationszentrum (DIZ)**: eine Infrastruktur, die klinische Daten aus dem [[KIS]] und anderen Quellen in ein standardisiertes Format (FHIR R4, MII Kerndatensatz) umwandelt und pseudonymisiert. Nur Daten von Patienten mit aktivem Broad Consent werden ins DIZ aufgenommen.

### Pseudonymisierung

Die Patientendaten werden im DIZ durch ein zentrales Pseudonymisierungskonzept anonymisiert. Das verwendete Verfahren ist häufig MAINZELLISTE oder ein kompatibles System. Der Plaintext-Name und die vollständige ID werden ersetzt; ein reversibles Pseudonym ermöglicht die Zusammenführung von Daten desselben Patienten über Zeiträume und Standorte hinweg.

> [!interesse-compliance]
> Krankenhäuser, die MII-Mitglied sind oder am [[Forschungsdatenzentrum-Gesundheit|FDZ Gesundheit]] teilnehmen, müssen einen datenschutzkonformen Einwilligungsprozess nachweisen. Der MII Broad Consent ist das empfohlene Instrument. Für Nicht-MII-Häuser: Das [[GDNG]] (Gesundheitsdatennutzungsgesetz 2024) schafft eine eigene Rechtsgrundlage für die Sekundärnutzung im [[Forschungsdatenzentrum-Gesundheit|FDZ Gesundheit]], die auf einem Opt-Out-Modell basiert und keinen aktiven Broad Consent erfordert. Die beiden Modelle koexistieren.

> [!frist-warnung] Frist-Warnung: Widerrufspflicht und Löschfristen nach DSGVO
> **Rechtsgrundlage:** Art. 7 Abs. 3 DSGVO (Widerrufsrecht), Art. 17 DSGVO (Recht auf Löschung), Art. 5 Abs. 1 lit. e DSGVO (Speicherbegrenzung)
> **Pflicht:** Einrichtungen, die auf Basis des Broad Consent Daten verarbeiten, müssen Widerrufe unverzüglich umsetzen. Zukünftige Datennutzungen müssen nach Widerruf gestoppt werden. Die maximale Speicherdauer im MII-Mustertext beträgt 30 Jahre ab Einwilligungsdatum; bei geplanter Überschreitung ist eine erneute Prüfung durch die zuständige Datenschutzbehörde und Ethikkommission erforderlich.
> **Handlungsbedarf:** Datenintegrationszentren (DIZ) müssen technisch sicherstellen, dass Widerrufe automatisiert in allen nachgelagerten Systemen (Pseudonymisierungsdienst, Forschungsdatenbanken) wirksam werden. Dokumentieren Sie den Widerrufsprozess und testen Sie ihn regelmäßig. Einrichtungen ohne automatisierten Widerrufsmechanismus verstoßen gegen Art. 7 Abs. 3 DSGVO.
> **Bei Nichtbeachtung:** Verstöße gegen das Widerrufsrecht sind nach Art. 83 Abs. 5 DSGVO bußgeldbewehrt.

### Verhältnis zum GDNG und FDZ

Das [[GDNG]] (Gesundheitsdatennutzungsgesetz, 2024) und der MII Broad Consent erfüllen unterschiedliche Funktionen:

- **FDZ Gesundheit** (nach GDNG): Sekundärnutzung von GKV-Abrechnungsdaten und ePA-Daten für alle Versicherten ohne aktive Einwilligung (Opt-Out für PKV-Versicherte)
- **MII Broad Consent**: Freiwillige Einwilligung für detailliertere klinische Daten aus Universitätskliniken, einschließlich Biomaterialien und Studienteilnahme

Beide Systeme sind komplementär: Das FDZ liefert Breitenversorgungsdaten auf GKV-Ebene; die MII liefert tiefe klinische Daten von eingewilligten Patienten aus Spezialkliniken.

## Verknüpfungen

- [[Medizininformatik-Initiative]] (Initiatorin und Trägerorganisation des Broad Consent)
- [[DSGVO]] (Rechtsrahmen für die Einwilligung)
- [[Pseudonymisierung]] (technisches Datenschutzverfahren im MII-DIZ)
- [[Opt-Out-ePA]] (unterschiedliches Rechtsmodell für die ePA-Sekundärnutzung)
- [[GDNG]] (Gesundheitsdatennutzungsgesetz; ergänzende Rechtsgrundlage für FDZ)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ; komplementäre Forschungsinfrastruktur)
- [[KIS]] (Datenquelle für die MII-Datenintegrationszentren)
- [[FHIR]] (Datenformat des MII Kerndatensatzes)

## Quellen

- [MII: Arbeitsgruppe Consent – Medizininformatik-Initiative](https://www.medizininformatik-initiative.de/de/zusammenarbeit/arbeitsgruppe-consent)
- [MII Einwilligungstext Muster V2022 - Medizininformatik-Initiative](https://www.medizininformatik-initiative.de/de/der-kerndatensatz-der-medizininformatik-initiative)
- [DSGVO Art. 9 - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:02016R0679-20160504)
- [Gesundheitsdatennutzungsgesetz (GDNG) 2024 - Bundesgesundheitsministerium](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/gesundheitsdatennutzungsgesetz.html)
