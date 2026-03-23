---
title: Gesundheitsdatenraum
audience: [technical, non-technical]
tags: [konzept, datenutzung, forschung, gesundheitsdaten, ehds, gdng, gdvg]
aliases: [nationaler Gesundheitsdatenraum, Gesundheitsdateninfrastruktur]
relevance:
  sectors: [krankenhaus, kasse, hersteller, it-dienstleister, forschung, regulierung, patient]
  interests: [compliance, technik, patient]
maturity: immergruen
---

# Gesundheitsdatenraum

Der **Gesundheitsdatenraum** bezeichnet das Gesamtkonzept der sicheren, interoperablen Bereitstellung und Nutzung von Gesundheitsdaten, das in Deutschland durch das [[GDNG]], das [[GDVG|GDVG (geplant)]] und auf EU-Ebene durch den [[EHDS]] geregelt wird.

## Erklärt für Einsteiger

Stell dir vor, in einem riesigen, gut gesicherten Lesesaal liegen medizinische Daten aus ganz Deutschland. Forscher dürfen dort arbeiten, aber die Daten verlassen den Saal nicht und sind so aufbereitet, dass kein Rückschluss auf einzelne Personen möglich ist. So funktioniert der Gesundheitsdatenraum: Er soll Gesundheitsdaten zugänglich machen, damit neue Behandlungen entwickelt und die Versorgung verbessert werden können, ohne die Privatsphäre der Patienten zu gefährden.

## Überblick

Der Begriff "Gesundheitsdatenraum" umfasst zwei eng verbundene, aber unterschiedliche Konzepte:

**Nationaler Ebene** (Deutschland): Der deutsche Gesundheitsdatenraum ist die Infrastruktur und der Rechtsrahmen für die Nutzung von Gesundheitsdaten zu Forschungs- und Versorgungszwecken innerhalb Deutschlands. Die Grundlage bildet das [[GDNG|Gesundheitsdaten-Nutzungsgesetz (GDNG)]] von 2024. Das [[GDVG|Gesetz für digitale Versorgung und den Gesundheitsdatenraum (GDVG)]] setzt diesen Rahmen weiter fort.

**Europäische Ebene** (EU): Der Europäische Gesundheitsdatenraum ist die [[EHDS|EHDS-Verordnung (EU 2025/327)]], die seit März 2025 in Kraft ist und den grenzüberschreitenden Datenaustausch sowie die [[Sekundärnutzung]] auf EU-Ebene regelt.

### Unterschied zu EHDS

Der [[EHDS]] ist der europäische Rechtsrahmen. Der nationale Gesundheitsdatenraum ist dessen deutsche Umsetzung und Ausprägung. Deutschland hat mit dem [[GDNG]] bereits vor Inkrafttreten des EHDS einen nationalen Rahmen für die Sekundärnutzung geschaffen, der eng auf den EHDS abgestimmt ist.

| Aspekt | Nationaler Gesundheitsdatenraum | EHDS |
|---|---|---|
| Rechtsebene | Deutschland | Europäische Union |
| Hauptgesetz | [[GDNG]], [[GDVG]] | Verordnung EU 2025/327 |
| Zugangsstelle | [[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]] | Health Data Access Bodies (HDAB) |
| Inkrafttreten | März 2024 (GDNG) | März 2025 |
| Primärnutzung | Nicht Gegenstand des GDNG | Geregelt (MyHealth@EU) |
| Sekundärnutzung | Forschung, Versorgungsforschung | Forschung, Innovation, Regulierung |

## Technische Details

### Infrastrukturkomponenten

Der deutsche Gesundheitsdatenraum stützt sich auf folgende Infrastrukturkomponenten:

**[[Forschungsdatenzentrum-Gesundheit|Forschungsdatenzentrum Gesundheit (FDZ)]]**: Das FDZ beim [[BfArM]] ist die zentrale nationale Datenzugangsstelle. Es sammelt Sozialdaten der gesetzlichen Krankenversicherung (GKV-Routinedaten) und stellt sie pseudonymisiert für Forschungsanfragen bereit.

**Datenzugangs- und Koordinierungsstelle (DACO)**: Nach § 3 GDNG richtet das [[BfArM]] die DACO ein. Sie koordiniert den Datenzugang über alle beteiligten Datengeber hinweg und ist die Kontaktstelle für Forschungsanfragen.

**[[ePA|Elektronische Patientenakte (ePA)]]**: Die ePA ist die primäre Datenquelle für den nationalen Gesundheitsdatenraum. Laut [[GDNG]] können ePA-Daten nach Opt-out-Prinzip für Forschungszwecke genutzt werden. Der Versicherte kann der Forschungsnutzung seiner ePA-Daten widersprechen.

> [!klinik-integration] Klinik-Integration: KIS-Daten als Quelle im Gesundheitsdatenraum
> Krankenhäuser sind nach Art. 23 EHDS-VO verpflichtet, Gesundheitsdaten in standardisierten Formaten bereitzustellen. Das bedeutet: [[KIS]]-Systeme (SAP ISH, Orbis/Dedalus, iMedOne) müssen strukturierte Dokumente in [[FHIR]] R4 exportieren können, insbesondere Entlassbriefe, Diagnosen (ICD-10-GM), Prozeduren (OPS) und Medikationsdaten.
>
> **Datenhaltung:** Krankenhausdaten verbleiben im Haus und werden nicht zentral gesammelt. Für Forschungsanfragen über das FDZ werden pseudonymisierte Datensätze in der VAU bereitgestellt. KIS-Hersteller müssen FHIR-Export-APIs (FHIR R4, ISiK-Profile) implementieren oder nachrüsten.
> **Handlungsbedarf:** Prüfen Sie bei Ihrem KIS-Hersteller, ob strukturierte FHIR-Exporte unterstützt werden. Erste EHDS-Meilensteine sind bis März 2027 vorgesehen. Fehlende Exportfähigkeit wird spätestens mit HDAB-Betrieb (bis 2029 Pflicht) zum Compliance-Risiko.

> [!interesse-technik]
> Technisch basiert der Gesundheitsdatenraum auf einer dezentralen Architektur: Daten verbleiben beim Datengeber (Krankenkasse, Krankenhaus, ePA-Anbieter) und werden nicht zentral gespeichert. Für Forschungsanfragen werden anonymisierte oder pseudonymisierte Datensätze in einer kontrollierten Verarbeitungsumgebung ([[VAU|Vertrauenswürdige Ausführungsumgebung, VAU]]) bereitgestellt. Schnittstellen: Das FDZ bietet einen Datenzugang nach definierten Anforderungsprozessen. Datenanfragen müssen einen ethischen und datenschutzrechtlichen Genehmigungsprozess durchlaufen.

> [!dev-quickstart] Dev Quickstart: System für den Gesundheitsdatenraum interoperabel machen
> Das FDZ bietet keine offene REST-API. Datenzugang erfolgt über einen Antragsprozess. Als Systemhersteller oder Datengeber gilt:
>
> **Technische Interoperabilitätspflichten:**
> - Pflichtformat: [[FHIR]] R4
> - Pflicht-Terminologien: [[LOINC]] (Laborwerte, Vitalzeichen), [[SNOMED CT]] (Diagnosen), [[ICD-10-GM]] (Abrechnungsdiagnosen)
> - ePA-Daten: KBV MIO-Profile auf [simplifier.net/organization/kbv](https://simplifier.net/organization/kbv)
> - KIS-Exporte: [[ISiK]]-Profile (Stufe 2/3) auf [simplifier.net/isik](https://simplifier.net/isik)
>
> **Antrag auf Datenzugang (Forschende):**
> - Helpdesk: `helpdesk@forschungsdatenzentrum-gesundheit.de`
> - Portal: [bfarm.de/fdz](https://www.bfarm.de/DE/Das-BfArM/Aufgaben/Forschungsdatenzentrum/_node.html)
> - Analyse läuft in abgeschotteter [[VAU]]: kein direkter API-Zugriff, kein Rohdaten-Export
> - Spezifikation VAU: gemSpec_Aktensystem auf [gemspec.gematik.de](https://gemspec.gematik.de)

### Datenkategorien

Der deutsche Gesundheitsdatenraum umfasst potenziell folgende Datenkategorien:

- **GKV-Sozialdaten**: Abrechnungsdaten der Krankenkassen (Diagnosen, Prozeduren, Arzneimittelverordnungen)
- **[[ePA]]-Daten**: Klinische Dokumente, Laborbefunde, Medikationspläne aus der ePA
- **Krebsregisterdaten**: Daten aus den Landeskrebsregistern
- **Mortalitätsdaten**: Sterbedaten der Statistischen Ämter
- **Registerdaten**: Daten aus krankheitsspezifischen Registern

### Datenschutz und Opt-out

> [!interesse-patient]
> Ihre Gesundheitsdaten in der ePA können für anonymisierte Forschung genutzt werden. Das passiert nur, wenn Sie nicht widersprechen (Opt-out-Prinzip). Sie können der Forschungsnutzung jederzeit widersprechen, ohne Begründung, über die App Ihrer Krankenkasse oder die ePA-App. Ihre Identität wird durch Pseudonymisierung geschützt: Forscher sehen keine Namen oder Geburtsdaten.

> [!patientenrecht] Patientenrecht: Widerspruch gegen Forschungsnutzung
> Ihre ePA-Daten werden automatisch für medizinische Forschung genutzt. Sie müssen dem nicht zustimmen. Sie können jederzeit widersprechen.
>
> **Was kann ich tun?**
> 1. Öffnen Sie die App Ihrer Krankenkasse oder die ePA-App
> 2. Suchen Sie den Bereich "Datenschutz" oder "ePA-Einstellungen"
> 3. Wählen Sie "Widerspruch Forschungsnutzung"
> 4. Sie können dem ganzen Bereich widersprechen. Oder nur einzelnen Zwecken (bis zu zehn verschiedene).
>
> Alternativ: Rufen Sie die Ombudsstelle Ihrer Krankenkasse an. Die Nummer steht auf Ihrer Versicherungskarte.
>
> **Wichtig:** Der Widerspruch ist kostenlos. Er gilt sofort. Sie können ihn jederzeit rückgängig machen.

Die Nutzung von Gesundheitsdaten für Forschung ist nur nach strengen Auflagen möglich:

1. Genehmigung durch die DACO und zuständige Datenschutzbehörde
2. Nachgewiesener gemeinwohlorientierter Zweck
3. Pseudonymisierung oder Anonymisierung vor Datenweitergabe
4. Keine Weitergabe der Rohdaten, sondern Analyse in sicherer Umgebung

### Verbindung zum EHDS

Mit Inkrafttreten des [[EHDS]] (März 2025) wird das [[FDZ|Forschungsdatenzentrum]] des [[BfArM]] voraussichtlich die Aufgaben eines "Health Data Access Body" (HDAB) nach EHDS-Recht übernehmen. Das bedeutet, dass deutsche Gesundheitsdaten auch für EU-weite Forschungsanfragen zugänglich werden, unter Einhaltung des deutschen und europäischen Datenschutzrechts.

> [!klinik-integration] Klinik-Integration: EHDS-Readiness im Krankenhaus
> Der EHDS verpflichtet Gesundheitseinrichtungen, Daten über standardisierte Schnittstellen bereitzustellen (Art. 23 EHDS-VO). Für Krankenhäuser bedeutet das eine zweistufige Anforderung:
>
> **Kurzfristig (bis 2027):** ISiK-Stufe-3-Konformität sicherstellen. Die ISiK-FHIR-Profile sind de facto die deutschen Vorlauf-Implementierungen der EHDS-Datenschnittstellen.
> **Mittelfristig (bis 2029):** KIS muss Daten maschinenlesbar an das nationale HDAB (voraussichtlich FDZ/BfArM) liefern können. Zu erwartende Datentypen: Entlassbriefe (HL7 CDA/FHIR), Diagnosen, Prozeduren, Medikation, Laborbefunde.
> **Datenschutz-Workflow:** Patienten-Widersprüche (Opt-out) müssen KIS-seitig dokumentiert und bei Datenabfragen technisch berücksichtigt werden. Abstimmung mit dem Datenschutzbeauftragten des Hauses empfohlen.

> [!patientenrecht] Patientenrecht: Ihre Daten im europäischen Rahmen
> Durch den Europäischen Gesundheitsdatenraum (EHDS) können Ihre Daten künftig auch für EU-weite Forschungsprojekte genutzt werden. Das klingt weit. Aber Ihre Rechte bleiben dieselben.
>
> **Das garantiert Ihnen der EHDS (Artikel 71):**
> - Sie haben das Recht, der Nutzung Ihrer Daten zu widersprechen. Dieses Recht gilt in allen EU-Ländern.
> - Ihre Daten verlassen Deutschland nur anonymisiert. Kein Forscher erfährt Ihren Namen.
> - Ihre Krankenkasse muss Ihnen erklären, wie Sie widersprechen können.
>
> **Was bedeutet das konkret?** Der Widerspruch, den Sie gegenüber Ihrer Krankenkasse einlegen, gilt auch für die EU-weite Nutzung. Sie müssen nichts extra tun.

> [!interesse-compliance]
> Das [[GDNG]] ist seit dem 26. März 2024 in Kraft. Es verpflichtet Krankenkassen, ihre Sozialdaten dem FDZ bereitzustellen. Für die [[ePA]]-Datennutzung gilt das Opt-out-Modell nach § 363 SGB V (in Kraft mit der ePA für alle). Hersteller von Gesundheits-IT sollten prüfen, ob ihre Systeme Daten in standardisierten Formaten ([[FHIR]], [[SNOMED CT]], [[LOINC]]) bereitstellen können, da dies Voraussetzung für die Einspeisung in den Gesundheitsdatenraum ist.

## Verknüpfungen

- [[GDNG]] (Gesundheitsdaten-Nutzungsgesetz: nationaler Rechtsrahmen für Sekundärnutzung)
- [[EHDS]] (European Health Data Space: EU-Verordnung, europäischer Rechtsrahmen)
- [[ePA]] (primäre Datenquelle für den nationalen Gesundheitsdatenraum)
- [[Forschungsdatenzentrum-Gesundheit]] (FDZ: nationale Datenzugangsstelle)
- [[BfArM]] (betreibt FDZ und DACO nach GDNG)
- [[FHIR]] (Interoperabilitätsstandard für Gesundheitsdaten im Datenraum)
- [[GDVG]] (geplantes Nachfolgegesetz mit Erweiterung des Gesundheitsdatenraums)
- [[VAU]] (Vertrauenswürdige Ausführungsumgebung für sichere Datenanalyse)
- [[DigiG]] (Digitalgesetz 2024: ePA-Grundlage für Forschungsnutzung)

## Quellen

- [BMG: Gesundheitsdatennutzungsgesetz (GDNG)](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/gesundheitsdatennutzungsgesetz.html)
- [BMG: Daten für die Forschung und Versorgung – Forschungsdatenzentrum Gesundheit](https://www.bundesgesundheitsministerium.de/themen/digitalisierung/daten-fuer-die-forschung-und-versorgung)
- [GDNG auf gesetze-im-internet.de](https://www.gesetze-im-internet.de/gdng/BJNR0660B0024.html)
- [Europäische Kommission: European Health Data Space (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en)
