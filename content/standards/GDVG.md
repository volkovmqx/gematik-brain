---
title: GDVG
audience: [technical, non-technical]
tags: [standards, recht, gesetz, digitalisierung, gematik]
aliases: [Gesetz für digitale Versorgung und den Gesundheitsdatenraum, GDVG]
maturity: wachsend
relevance:
  sectors: [regulierung, hersteller, kasse, krankenhaus, arztpraxis, ti-infrastruktur, startup]
  interests: [compliance, business, technik]
---

# GDVG

Das **GDVG (Gesetz für digitale Versorgung und den Gesundheitsdatenraum)** ist ein geplantes deutsches Bundesgesetz, das die [[gematik]] zu einer modernen Digitalagentur für Gesundheit weiterentwickeln und den Zugang zu Gesundheitsdaten für Versorgung und Forschung verbessern soll.

## Erklärt für Einsteiger

Stell dir vor, die Firma, die das digitale Gesundheitsnetz betreibt, braucht neue Regeln und mehr Befugnisse, um schneller und besser arbeiten zu können. Das GDVG soll genau das für die gematik tun: Es gibt ihr mehr Handlungsspielraum und klärt, wer wofür verantwortlich ist. Außerdem soll das Gesetz regeln, wie Gesundheitsdaten besser für Forschung und Versorgung genutzt werden können, ohne die Datenschutzrechte der Patienten zu verletzen.

## Überblick

Das GDVG ist der Nachfolger des gescheiterten **[[GDAG]] (Gesundheits-Digitalagentur-Gesetz)**. Das GDAG war unter der Ampel-Koalition entwickelt worden, hatte aber wegen des Koalitionsbruchs Ende 2024 den Bundestag nicht mehr passiert.

Der Koalitionsvertrag von CDU/CSU und SPD (April 2025) sieht die Modernisierung der [[gematik]] zu einer "modernen Digitalagentur" als Ziel vor. Das [[BMG]] unter Bundesgesundheitsministerin Nina Warken (CDU) kündigte im Februar 2026 an, den Referentenentwurf für das GDVG in der **ersten Jahreshälfte 2026** vorzulegen.

### Zentrale Vorhaben

- **Umwandlung der gematik**: Die [[gematik]] soll als Digitalagentur erweiterte Durchsetzungsbefugnisse für einheitliche Standardimplementierungen erhalten. Statt bloßer Koordination soll sie klarer als zentrale Steuerungsstelle für die Digitalisierung des Gesundheitswesens positioniert werden.
- **Gesundheitsdatenraum**: Das Gesetz soll die Nutzung von Gesundheitsdaten für Versorgung und Forschung verbessern und den deutschen Beitrag zum [[EHDS]] (European Health Data Space) stärken.
- **Interoperabilität**: Alle Software- und IT-Anbieter im Gesundheitswesen sollen bis 2027 verlustfreien Datenaustausch auf Basis einheitlicher Standards sicherstellen.
- **Kompetenzzentrum Interoperabilität (KIG)**: Das bei der [[gematik]] angesiedelte KIG soll gesetzlich verankert und gestärkt werden.

> [!interesse-compliance]
> Für Hersteller von [[PVS]], [[KIS]] und [[AVS]] bedeutet das GDVG erweiterte Durchsetzungsmöglichkeiten der [[gematik]]. Abweichende Schnittstellenimplementierungen können zukünftig sanktioniert werden. Der Referentenentwurf soll in H1/2026 vorgelegt werden. Bis 2027 müssen alle Software-Anbieter im Gesundheitswesen verlustfreien Datenaustausch auf Basis einheitlicher Standards sicherstellen.

> [!interesse-business]
> Das GDVG schafft neue Marktregeln: [[gematik]] erhält Durchsetzungsbefugnisse, die den Wettbewerb um standardkonforme Implementierungen verschärfen. Gleichzeitig sollen erleichterte Forschungsdatenzugänge über das [[Forschungsdatenzentrum-Gesundheit|FDZ Gesundheit]] neue Geschäftsmodelle für Health-Data-Startups ermöglichen. Der Markt für Interoperabilitätslösungen wächst: [[ISiK]]-konforme Systeme sind Voraussetzung für KHAG-Förderung.

> [!frist-warnung] Frist-Warnung: EHDS-Pflichten ab 2027
> **Rechtsgrundlage:** Verordnung (EU) 2025/327 (European Health Data Space, EHDS), in Kraft seit März 2025
> **Frist:** Die primäre Nutzung von Gesundheitsdaten im EHDS (Zugang zur eigenen ePA über MyHealth@EU) beginnt stufenweise ab **März 2027**. Die Sekundärnutzungspflichten (Datenbereitstellung an den europäischen Gesundheitsdatenraum) greifen zu einem späteren Zeitpunkt entsprechend des EHDS-Anwendungsfahrplans.
> **Handlungsbedarf:** Hersteller von PVS, KIS und AVS müssen die EHDS-kompatiblen Datenaustauschformate (European Electronic Health Record Exchange Format, EEHRxF) implementieren. Die gematik hat als nationaler Kontaktpunkt für digitale Gesundheit (NCPeH) die Schnittstellenspezifikationen bis zum Rollout bereitzustellen. Einrichtungen sollten die GDVG-Gesetzgebung ab H1/2026 eng verfolgen, da das GDVG die nationalen EHDS-Umsetzungspflichten konkretisieren wird.
> **Bei Nichtbeachtung:** Verstöße gegen EHDS-Anforderungen können durch die zuständige nationale Aufsichtsbehörde (BfArM als Health Data Access Body) geahndet werden.

### Abgrenzung zum GDAG

Das GDAG sah eine vollständige Umwandlung der gematik GmbH in eine neue Körperschaft (100 Prozent Bundesbesitz) vor. Das GDVG orientiert sich an ähnlichen Zielen, jedoch ist die Rechtsformfrage zum Stand März 2026 noch nicht abschließend geklärt. Das BMG hat signalisiert, dass das GDVG pragmatischer angesetzt sein soll als das gescheiterte GDAG.

## Technische Details

### Erweiterte Befugnisse für gematik

> [!interesse-technik]
> Das GDVG plant, die [[gematik]] mit Befugnissen auszustatten, abweichende Schnittstellenimplementierungen in [[PVS]], [[KIS]] und [[AVS]] zu sanktionieren. Das Kompetenzzentrum Interoperabilität (KIG) soll verbindliche FHIR-Profile und Schnittstellen durchsetzen können. Außerdem ist geplant, das [[Forschungsdatenzentrum-Gesundheit|FDZ Gesundheit]] mit KI-Fähigkeiten auszubauen und an den [[EHDS]] anzubinden.

Das GDVG soll der [[gematik]] ermöglichen, einheitliche Implementierungen von Standards durchzusetzen. Bisher konnte die gematik Hersteller von Primärsystemen ([[PVS]], [[KIS]], [[AVS]]) zwar zertifizieren, hatte aber wenig Handhabe gegen abweichende Implementierungen in der Praxis. Mit dem GDVG soll sich das ändern.

### Gesundheitsdatenraum und EHDS-Vorbereitung

Das GDVG soll sicherstellen, dass Deutschland die Anforderungen des [[EHDS]] (EU-Verordnung 2025/327, in Kraft seit März 2025) erfüllen kann. Dazu gehören:

- Ausbau des [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrums Gesundheit (FDZ)]] mit KI-Fähigkeiten
- Anbindung des FDZ an den europäischen Gesundheitsdatenraum
- Klärung der Rolle des [[BfArM]] als Health Data Access Body nach EHDS

### Verhältnis zu DigiG und GDNG

Das GDVG baut auf dem [[DigiG]] (Digital-Gesetz, 2024) auf, das die ePA für alle einführte, und dem [[GDNG]] (Gesundheitsdatennutzungsgesetz, 2024), das die Forschungsnutzung von Gesundheitsdaten regelt. Das GDVG soll diese Gesetze ergänzen und die institutionelle Seite (gematik als Digitalagentur) stärken.

> [!frist-warnung] Frist-Warnung: Interoperabilitätspflicht bis 2027
> **Rechtsgrundlage:** § 387 SGB V i.V.m. § 388 SGB V; geplante Erweiterung durch GDVG (Referentenentwurf H1/2026)
> **Frist:** Nach dem aktuellen Planungsstand müssen alle Software-Anbieter im Gesundheitswesen (PVS, KIS, AVS) bis **2027** verlustfreien Datenaustausch auf Basis einheitlicher Standards (FHIR R4, ISiK, MIO) sicherstellen. Das geplante GDVG soll der gematik erweiterte Durchsetzungsbefugnisse geben, abweichende Implementierungen zu sanktionieren.
> **Handlungsbedarf:** Hersteller müssen ihre Roadmaps auf die FHIR-basierten Interoperabilitätsanforderungen ausrichten. Das Kompetenzzentrum Interoperabilität (KIG) der gematik ist als Anlaufstelle für verbindliche Profilierungsentscheidungen zu beachten. Sobald der GDVG-Referentenentwurf in H1/2026 vorliegt, sind die konkreten Umsetzungsfristen und Sanktionsmechanismen zu prüfen und in die Produktplanung zu integrieren.
> **Bei Nichtbeachtung:** Das Inverkehrbringen nicht-konformer Systeme ist nach § 388 SGB V bereits heute untersagt; das GDVG soll die Durchsetzung durch die gematik verschärfen.

### Bvitg-Forderungen (März 2026)

Der Bundesverband Gesundheits-IT (bvitg) forderte in einem Positionspapier (11. März 2026):
- Die [[gematik]] soll als neutraler Rahmenanbieter agieren, nicht als Marktakteur.
- Erleichterten Datenzugang für Forschung und Industrie.
- Die [[ePA]] als zentralen Hub für alle Gesundheitsdaten.
- Stabile TI als Grundvoraussetzung für alle weiteren Digitalisierungsschritte.

### Datenschutzkritik (Februar 2026)

Netzpolitik.org veröffentlichte am 16. Februar 2026 eine detaillierte Analyse der geplanten GDVG-Strategie. Kritisiert werden:

- **KI-Training ohne Einwilligung**: Das GDVG soll ermöglichen, dass Gesundheitsdaten aus der [[ePA]] ohne individuelle Einwilligungspflicht für KI-Modelle genutzt werden.
- **Automatische ePA-Datenübermittlung ans FDZ**: Täglich sollen ePA-Daten aller GKV-Versicherten pseudonymisiert an das [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]] übermittelt werden. GKV-Versicherte sollen kein Opt-out-Recht erhalten (PKV-Versicherte hingegen schon).
- **Vernetzung von rund 350 Registern**: Über pseudonymisierte Versicherungs-IDs sollen Gesundheitsregister miteinander verknüpft werden. Kritiker bezweifeln den ausreichenden Schutz vor Re-Identifizierung.

Datenschutzbehörden und Bürgerrechtsorganisationen wie die Gesellschaft für Freiheitsrechte (GFF) und der Chaos Computer Club (CCC) sehen das Vorhaben kritisch. Das Gesetz befindet sich noch in der Referentenentwurfsphase (Stand März 2026), sodass Details noch geändert werden können.

## Verknüpfungen

- [[gematik]] (wird durch das GDVG zur Digitalagentur weiterentwickelt)
- [[DigiG]] (Vorgängergesetz; führte ePA für alle ein)
- [[GDNG]] (Begleitgesetz; regelt Sekundärnutzung von Gesundheitsdaten)
- [[BMG]] (Initiator und zuständiges Ministerium für das GDVG)
- [[ePA]] (zentrale Anwendung, deren Governance durch das GDVG gestärkt wird)
- [[EHDS]] (EU-Rahmenrecht, dem das GDVG Rechnung trägt)
- [[Forschungsdatenzentrum-Gesundheit]] (soll durch das GDVG ausgebaut werden)
- [[ISiK]] (Interoperabilitätsstandard, der durch erweiterte gematik-Befugnisse durchsetzbarer wird)

## Quellen

- [BMG: Digitalisierungsstrategie 2026 – Warken kündigt GDVG an](https://www.kma-online.de/aktuelles/politik/detail/bmg-stellt-digitalisierungsstrategie-2026-vor-das-sind-warkens-plaene-55231)
- [bvitg: Positionspapier zu GDVG (März 2026)](https://www.kma-online.de/aktuelles/it-digital-health/detail/bvitg-anforderungen-nutzung-der-gesundheitsdaten-und-weiterentwicklung-der-infrastruktur-55357)
- [Koalitionsvertrag CDU/CSU-SPD 2025: Gesundheitspolitik](https://pm-report.de/gesundheitswesen/2025/geplanter-koalitionsvertrag-was-soll-im-gesundheitswesen-passieren.html)
- [GDAG (Kabinettsentwurf Juli 2024, nicht verabschiedet)](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/gdag-kabinett-17-07-24.html)
- [netzpolitik.org: Datenschutzkritik am GDVG (16. Februar 2026)](https://netzpolitik.org/2026/bundesgesundheitsministerium-so-umfassend-will-warken-die-gesundheitsdaten-aller-versicherten-verknuepfen/)
