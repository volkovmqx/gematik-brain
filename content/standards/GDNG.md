---
title: GDNG
audience: [technical, non-technical]
tags: [standards, recht, gesetz, forschung, datenschutz, sekundärnutzung]
aliases: [Gesundheitsdatennutzungsgesetz, Health Data Use Act]
maturity: immergruen
relevance:
  sectors: [krankenhaus, arztpraxis, kasse, forschung, hersteller, it-dienstleister, startup, regulierung, patient]
  interests: [compliance, business, patient]
---

# GDNG

Das Gesundheitsdatennutzungsgesetz (GDNG) ist ein deutsches Bundesgesetz vom März 2024, das den Zugang zu Gesundheitsdaten für gemeinwohlorientierte Forschungszwecke regelt und vereinfacht.

## Erklärt für Einsteiger

In deutschen Krankenhäusern und Arztpraxen entstehen täglich riesige Mengen an Gesundheitsdaten. Diese Daten könnten Forscher dabei helfen, neue Krankheiten zu verstehen, Medikamente zu verbessern oder die Versorgung besser zu planen. Bisher war es für Forscherinnen und Forscher sehr schwer, an diese Daten heranzukommen. Das GDNG ändert das: Es schafft klare Regeln, wer unter welchen Bedingungen Gesundheitsdaten für Forschung nutzen darf, und es baut die technische Infrastruktur dafür auf. Patientinnen und Patienten können der Nutzung ihrer Daten widersprechen.

## Überblick

Das GDNG trat am 26. März 2024 in Kraft. Der vollständige Name lautet: "Gesetz zur Nutzung von Gesundheitsdaten zu gemeinwohlorientierten Forschungszwecken und zur datenbasierten Weiterentwicklung des Gesundheitswesens". Es wurde zusammen mit dem [[DigiG]] (Digital-Gesetz) verabschiedet, das gleichzeitig die [[ePA]] auf ein Opt-out-Modell umstellte.

Das GDNG verfolgt zwei Hauptziele. Erstens soll Forschung, die dem Gemeinwohl dient, erleichterten Zugang zu Gesundheitsdaten erhalten. Zweitens soll das Gesundheitswesen als lernendes System auf Basis von Versorgungsdaten weiterentwickelt werden. Das [[BMG]] sieht das GDNG als Grundlage für eine Gesundheitsdateninfrastruktur, die Deutschland im internationalen Wettbewerb um datenbasierte Medizin stärken soll.

Die Sekundärnutzung von Daten aus der [[ePA]] ist ein zentraler Aspekt des Gesetzes. Versicherte können der Nutzung ihrer pseudonymisierten ePA-Daten für Forschungszwecke jederzeit widersprechen. Der Widerspruch ist über die Krankenkasse oder digital in der ePA-App möglich.

> [!interesse-patient]
> Ihre Gesundheitsdaten aus der ePA können für anonymisierte Forschung genutzt werden. Das GDNG erlaubt dies nur für gemeinwohlorientierte Forschung, nicht für kommerzielle Werbung. Sie haben ein Widerspruchsrecht: In der ePA-App unter "Einstellungen" können Sie die Forschungsnutzung Ihrer Daten jederzeit ablehnen. Der Widerspruch gilt sofort. Ihre Identität wird durch Pseudonymisierung geschützt; Forscher sehen keine Namen oder Adressen.

## Technische Details

### Datenzugangs- und Koordinierungsstelle

Das GDNG richtet beim [[BfArM]] eine zentrale **Datenzugangs- und Koordinierungsstelle für Gesundheitsdaten** ein. Diese Stelle:

- führt einen öffentlichen Metadatenkatalog verfügbarer Datensätze
- berät Forschende bei der Identifikation und Beantragung benötigter Daten
- nimmt Antragstellungen entgegen und koordiniert sie
- ermöglicht die Verknüpfung von Daten aus verschiedenen Quellen

### Forschungsdatenzentrum Gesundheit

Das bestehende **[[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]]** beim [[BfArM]] wird durch das GDNG ausgebaut. Das FDZ stellt pseudonymisierte Abrechnungsdaten der gesetzlichen Krankenversicherung ([[GKV]]) für zugelassene Forschungsprojekte bereit. Es war bereits vor dem GDNG durch das [[DVPMG]] (Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz, 2021) eingerichtet worden, wird aber durch das GDNG erheblich erweitert.

Das FDZ kann unter dem GDNG pseudonymisierte Daten mit weiteren Registerdaten verknüpfen, zum Beispiel mit klinischen Krebsregistern.

### GFF-Klage gegen das FDZ (2022/2026)

Die Gesellschaft für Freiheitsrechte (GFF, unterstützt vom CCC) nahm im Februar 2026 ihre 2022 eingereichte Klage gegen das [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]] wieder auf (das Verfahren hatte seit Februar 2023 geruht, da das FDZ nicht operativ war). Die Kritikpunkte: Die [[Pseudonymisierung]] der Daten von 73 Millionen GKV-Versicherten reiche nicht aus, da eine Re-Identifizierung bei seltenen Krankheiten möglich sei. Außerdem fehlen gesetzlich verankerte ausreichende Sicherheitsstandards. Ein weiterer Kritikpunkt: GKV-Versicherte haben kein Widerspruchsrecht gegen die Datenübermittlung an das FDZ, PKV-Versicherte hingegen schon. Die Klage ist zum Stand März 2026 anhängig.

### Datensicherheit und Forschungsgeheimnis

> [!interesse-compliance]
> Das GDNG verpflichtet alle Datenempfänger (Forschungseinrichtungen, Unternehmen) zum Forschungsgeheimnis nach § 7 GDNG. Verstöße gegen die Geheimhaltungspflicht oder Reidentifizierungsversuche sind strafbar (bis 3 Jahre Freiheitsstrafe oder Geldstrafe). Datenzugangsanträge müssen beim [[BfArM]] gestellt werden. Eine Genehmigung setzt voraus, dass der Forschungszweck gemeinwohlorientiert und nicht durch weniger eingreifende Mittel erreichbar ist.

§ 7 GDNG führt ein **Forschungsgeheimnis** ein. Forschende, die Zugang zu Gesundheitsdaten erhalten, sind strafrechtlich zur Geheimhaltung verpflichtet. Der Versuch, Versicherte oder Leistungserbringer zu reidentifizieren, ist in jedem Fall strafbar. Verstöße können mit bis zu drei Jahren Freiheitsstrafe oder Geldstrafen geahndet werden.

### Verhältnis zu DSGVO und BDSG

Das GDNG stützt sich auf Art. 9 Abs. 2 lit. i und lit. j [[DSGVO]] (Verarbeitung besonderer Kategorien personenbezogener Daten für Forschungszwecke). Es schafft als nationales Gesetz die rechtliche Grundlage, die die [[DSGVO]] für solche Ausnahmen verlangt. Es ergänzt das [[BDSG|Bundesdatenschutzgesetz (BDSG)]] für den Bereich der Gesundheitsforschung.

### Beziehung zu ePA und DigiG

Das GDNG und das [[DigiG]] bilden zusammen ein Gesetzespaket. Während das DigiG die [[ePA]] für alle GKV-Versicherten einführte und das Opt-out-Modell verankerte, regelt das GDNG die Bedingungen, unter denen die in der ePA gespeicherten Daten sekundär genutzt werden dürfen. Beide Gesetze wurden zeitgleich verabschiedet und aufeinander abgestimmt.

### GDVG und EHDS: Weiterentwicklung des FDZ

Das geplante **[[GDVG]] (Gesetz für digitale Versorgung und den Gesundheitsdatenraum)**, dessen Referentenentwurf für Q2/2026 erwartet wird, soll das GDNG ergänzen und weiterentwickeln. Konkret vorgesehen:

- **EHDS-Anschluss**: Das [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]] soll an den Europäischen Gesundheitsdatenraum ([[EHDS]], EU-Verordnung 2025/327) angebunden werden. Damit können deutsche Gesundheitsdaten im Rahmen des EHDS grenzüberschreitend für zugelassene Forschungsprojekte bereitgestellt werden.
- **KI-Fähigkeit**: Der Gesundheitsdatenraum soll KI-fähig ausgebaut werden. Datensätze werden so aufbereitet, dass sie für maschinelles Lernen und KI-Modelltraining nutzbar sind, unter Wahrung der Pseudonymisierungsanforderungen des GDNG.

Diese Erweiterungen bedeuten für Forscher: Mehr Datenquellen, grenzüberschreitende Verknüpfung und bessere Werkzeuge für KI-gestützte Analysen.

> [!interesse-business]
> Das GDNG schafft einen regulierten Markt für Gesundheitsdaten-Zugang. Unternehmen können Anträge auf Datenzugang beim BfArM stellen, sofern sie einen gemeinwohlorientierten Forschungszweck nachweisen. Pharma, MedTech und Health-IT-Unternehmen profitieren von größeren und repräsentativeren Datensätzen für Studien und Produktentwicklung. Der EHDS-Anschluss (geplant über GDVG) öffnet die Daten zusätzlich für internationale Kooperationen.

### Datenquellen und berechtigte Forschungszwecke

Das GDNG nennt als Datenquellen:

- Daten aus dem Forschungsdatenzentrum Gesundheit (GKV-Abrechnungsdaten)
- Daten aus der [[ePA]] (nach Opt-out-Regelung)
- Daten aus klinischen Krebsregistern
- Daten aus Leistungserbringereinrichtungen (Eigenforschung)

Als berechtigte Forschungszwecke gelten: medizinische Forschung, Versorgungsforschung, Qualitätssicherung, Planung des Gesundheitswesens und die Weiterentwicklung des Gesundheitssystems.

## Verknüpfungen

- [[ePA]] (Hauptdatenquelle für die Sekundärnutzung unter dem GDNG)
- [[DigiG]] (Begleitgesetz, das die ePA für alle einführte)
- [[BfArM]] (beherbergt die Datenzugangs- und Koordinierungsstelle und das FDZ)
- [[BMG]] (hat das GDNG initiiert und ist zuständiges Ministerium)
- [[GKV]] (Abrechnungsdaten der GKV sind zentrale Datenquelle im FDZ)
- [[DVPMG]] (schuf das FDZ beim BfArM, 2021)
- [[PDSG]] (regelt den Datenschutz der ePA als ergänzendes Gesetz)
- [[Pseudonymisierung]] (zentrale Datenschutztechnik für die Forschungsnutzung im GDNG)

## Quellen

- [BMG: Gesundheitsdatennutzungsgesetz](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/gesundheitsdatennutzungsgesetz.html)
- [Gesetze im Internet: GDNG Volltext](https://www.gesetze-im-internet.de/gdng/BJNR0660B0024.html)
- [AOK: GDNG - Gesetz zur verbesserten Nutzung von Gesundheitsdaten](https://www.aok.de/pp/reform/gdng/)
- [Datenschutz Hessen: Gesundheitsdatennutzungsgesetz tritt in Kraft](https://datenschutz.hessen.de/presse/gesundheitsdatennutzungsgesetz-tritt-in-kraft)
- [GFF-Klage gegen FDZ Gesundheit (Februar 2026)](https://freiheitsrechte.org/themen/datenschutz/fdz)
