---
title: DiPA
audience: [technical, non-technical]
tags: [technologies, digitale-pflege, medizinprodukt, bfarm, sgb-xi]
aliases: [Digitale Pflegeanwendungen, DiPA]
relevance:
  sectors: [pflege, hersteller, startup, kasse, patient, regulierung]
  interests: [compliance, business, patient]
maturity: wachsend
---

# DiPA

Digitale Pflegeanwendungen (DiPA) sind vom [[BfArM]] zugelassene digitale Anwendungen für Pflegebedürftige, die von der gesetzlichen Pflegeversicherung nach [[SGB-XI|SGB XI]] erstattet werden.

## Erklärt für Einsteiger

Ähnlich wie ein Arzt eine App auf Rezept verschreiben kann, gibt es seit 2022 auch für Pflegebedürftige solche digitalen Helfer. Eine DiPA ist eine App oder ein digitales Programm, das Pflegebedürftigen hilft, ihren Alltag besser zu bewältigen oder ihre Selbstständigkeit zu erhalten. Die Pflegekasse übernimmt die Kosten, wenn die App vom BfArM geprüft und zugelassen wurde. Es ist das Pendant zu [[DiGA]] in der Pflegeversicherung statt in der Krankenversicherung.

## Überblick

DiPA wurden mit dem Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz ([[DVPMG]]) vom 9. Juni 2021 eingeführt. Die rechtliche Grundlage findet sich in den §§ 40a und 40b des Elften Buches Sozialgesetzbuch ([[SGB-XI|SGB XI]]). Die zugehörige Ausführungsverordnung ist die [[DiPAV|Digitale Pflegeanwendungen-Verordnung (DiPAV)]] vom Oktober 2022.

Das [[BfArM]] führt das Prüfverfahren durch und betreibt das DiPA-Verzeichnis. Nur DiPA, die in diesem Verzeichnis aufgeführt sind, können von den Pflegekassen erstattet werden. Pflegebedürftige der [[Pflegegrad|Pflegegrade]] 1 bis 5 in häuslicher Pflege haben Anspruch auf Versorgung mit DiPA.

Der monatliche Erstattungsbetrag beträgt bis zu 50 Euro für die DiPA selbst sowie ergänzende Unterstützungsleistungen ambulanter Pflegeeinrichtungen. Die Pflegekasse entscheidet im Einzelfall über die Notwendigkeit der Versorgung.

DiPA sind nicht auf ärztliche Verordnung angewiesen. Pflegebedürftige können den Antrag selbst bei der Pflegekasse stellen.

> [!patientenrecht] Patientenrecht: Was tun, wenn die Pflegekasse ablehnt?
> Ihre Pflegekasse muss über Ihren DiPA-Antrag innerhalb von drei Wochen entscheiden. Meldet sie sich nicht rechtzeitig, gilt die DiPA als genehmigt (das nennt sich Genehmigungsfiktion).
>
> **Was kann ich tun bei Ablehnung?**
> 1. Lesen Sie den Ablehnungsbescheid genau durch
> 2. Sie können innerhalb von einem Monat schriftlich Widerspruch einlegen
> 3. Schreiben Sie an Ihre Pflegekasse und begründen Sie, warum Sie die App benötigen
> 4. Holen Sie sich Hilfe bei einer Pflegeberatungsstelle (kostenlos nach § 7a SGB XI)
>
> **Wichtig:** Sie müssen keinen Arzt fragen. Sie stellen den Antrag selbst.

> [!interesse-patient] Wie Pflegebedürftige DiPA beantragen
> Pflegebedürftige aller Pflegegrade (1 bis 5) in häuslicher Pflege können DiPA beantragen. Der Antrag wird direkt bei der Pflegekasse gestellt, eine ärztliche Verordnung ist nicht erforderlich. Die Pflegekasse entscheidet innerhalb von drei Wochen. Wird die Entscheidung nicht rechtzeitig mitgeteilt, gilt die Genehmigung als erteilt (Genehmigungsfiktion). Die DiPA-Kosten werden bis zu 50 Euro pro Monat übernommen. Das aktuelle DiPA-Verzeichnis findet sich auf der Website des [[BfArM]].

> [!interesse-business] DiPA-Markt und Zulassungsverfahren für Hersteller
> DiPA durchlaufen ein dem [[DiGA-Fast-Track]] ähnliches Prüfverfahren beim [[BfArM]]. Vorläufige und dauerhafte Listung sind möglich; der Erstattungsbetrag ist gesetzlich auf 50 Euro/Monat gedeckelt (kein Verhandlungsspielraum wie bei DiGA). Der DiPA-Markt ist noch klein: Stand Anfang 2026 sind deutlich weniger DiPA gelistet als DiGA. Hersteller müssen die MDR-Konformität (CE-Kennzeichen) vor der Antragstellung nachweisen. Die Anwendungen müssen nachweislich zur Minderung von Beeinträchtigungen der Selbstständigkeit oder der Fähigkeiten beitragen oder einer Verschlimmerung der Pflegebedürftigkeit entgegenwirken.

## Technische Details

### Abgrenzung zu DiGA

DiGA und DiPA haben ein ähnliches Prüfmodell, unterscheiden sich aber in wesentlichen Punkten:

| Merkmal | [[DiGA]] | DiPA |
|---|---|---|
| Rechtsgrundlage | § 139e SGB V | §§ 40a, 40b SGB XI |
| Einführung | DVG 2019 | [[DVPMG]] 2021 |
| Kostenträger | Gesetzliche Krankenversicherung ([[GKV]]) | Gesetzliche Pflegeversicherung |
| Verordnungsweg | Ärztliche/psychotherapeutische Verordnung | Eigenantrag bei der Pflegekasse |
| Zielgruppe | GKV-Versicherte mit medizinischer Indikation | Pflegebedürftige Pflegegrade 1-5 |
| Erstattungsbetrag | Verhandelbar, im DiGA-Verzeichnis gelistet | Bis 50 Euro/Monat |
| Prüfbehörde | [[BfArM]] | [[BfArM]] |

> [!frist-warnung] Frist-Warnung: Datensicherheitszertifikat nach BSI TR-03161 Pflicht
> **Rechtsgrundlage:** § 78a Abs. 7 SGB XI i.V.m. BSI Technischer Richtlinie TR-03161
> **Frist:** Ab dem 1. Januar 2025 müssen Hersteller von DiPA beim BfArM ein Zertifikat vorlegen, das die Einhaltung der Datensicherheitsanforderungen nach TR-03161 nachweist. Für bereits gelistete DiPA gilt dieselbe Frist. Neue Anträge ohne gültiges Zertifikat werden nicht in das DiPA-Verzeichnis aufgenommen.
> **Handlungsbedarf:** Die verantwortliche Stelle beauftragt eine akkreditierte Zertifizierungsstelle mit der Prüfung nach BSI TR-03161. Da die Zahl akkreditierter Stellen begrenzt ist, sind Wartezeiten einzuplanen. Das Zertifikat ist dem BfArM mit der Antragstellung oder bei der nächsten Verlängerung der Listung vorzulegen.
> **Hinweis:** Solange keine akkreditierten Zertifizierungsstellen verfügbar sind, hat das BfArM Übergangsregelungen getroffen. Die Pflicht entfaltet ihre volle Wirkung, sobald die Zertifizierungsinfrastruktur operativ ist.

### BfArM-Prüfverfahren

Das BfArM prüft DiPA-Anträge nach den Anforderungen des § 78a SGB XI. Geprüft werden:

1. **Sicherheit und Funktionstüchtigkeit**: Entsprechend der Medizinprodukteverordnung ([[MDR]])
2. **Datenschutz und Datensicherheit**: Verarbeitung nach DSGVO-Grundsätzen
3. **Positive Versorgungseffekte**: Nachweis der pflegerischen Wirkung
4. **Qualität**: Benutzerfreundlichkeit und barrierefreie Gestaltung

Wie bei [[DiGA]] gibt es die Möglichkeit einer vorläufigen Aufnahme ins Verzeichnis, wenn der Nutzennachweis noch nicht vollständig erbracht ist.

### Interoperabilität

Die [[DiPAV]] schreibt Anforderungen an die Interoperabilität vor. Exportierte Daten sollen in standardisierten Formaten vorliegen. Eine direkte Integration mit der [[ePA]] ist perspektivisch vorgesehen, da die ePA für alle Versicherten auch Pflegerelevante Daten aufnehmen soll.

> [!patientenrecht] Patientenrecht: Ihre Daten in der DiPA
> Jede DiPA muss Ihnen erlauben, Ihre eigenen Daten zu exportieren. Die App darf Ihre Daten nur nach DSGVO verarbeiten.
>
> **Sie haben das Recht:**
> - Ihre Nutzungsdaten aus der App zu exportieren und mitzunehmen
> - Auskunft darüber zu bekommen, welche Daten die App speichert
> - Ihre Daten löschen zu lassen, wenn Sie die App nicht mehr nutzen
>
> Perspektivisch können Ihre DiPA-Daten in die [[ePA]] (elektronische Patientenakte) fließen. Sie können in der ePA-App jederzeit festlegen, wer diese Daten sehen darf.

### Nutzungskontext

DiPA werden häufig in folgenden Versorgungsbereichen eingesetzt:

- Kognitive Aktivierung (z.B. bei Demenz)
- Unterstützung bei Alltagsaktivitäten
- Kommunikation und soziale Teilhabe
- Sturzprävention und Mobilität
- Pflegegeld-Dokumentation

## Verknüpfungen

- [[DiGA]]: Schwesterkonzept in der gesetzlichen Krankenversicherung
- [[BfArM]]: Zuständige Prüfbehörde und Betreiber des DiPA-Verzeichnisses
- [[DVPMG]]: Einführendes Gesetz von 2021, das DiPA in §§ 40a, 40b SGB XI verankerte
- [[DiPAV]]: Ausführungsverordnung, die das Prüfverfahren für DiPA im Detail regelt
- [[DVG]]: Vorläufer-Gesetz, das den DiGA-Rahmen schuf
- [[ePA]]: Perspektivische Integration von DiPA-Daten in die elektronische Patientenakte
- [[GKV]]: Abgrenzung zur Krankenversicherung, die DiGA erstattet
- [[FHIR]]: Interoperabilitätsstandard, der auch für DiPA-Datenexporte gilt

## Quellen

- [BfArM: Digitale Pflegeanwendungen (DiPA)](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/_node.html)
- [BfArM: Wissenswertes zu DiPA](https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/Wissenswertes/_artikel.html)
- [BMG: Digitale Pflegeanwendungen](https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick/digitale-pflegeanwendungen.html)
- [GKV-Spitzenverband: DiPA](https://www.gkv-spitzenverband.de/pflegeversicherung/pv_digitalisierung/dipa.jsp)
