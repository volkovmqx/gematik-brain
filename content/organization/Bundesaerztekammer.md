---
title: Bundesärztekammer
audience: [technical, non-technical]
tags: [organisation, aerzte, berufsrecht, gematik, hba]
aliases: [BÄK, Bundesaerztekammer, Ärztekammer]
maturity: wachsend
---

# Bundesärztekammer

Die **Bundesärztekammer (BÄK)** ist der Dachverband aller 17 deutschen [[Landesaerztekammer|Landesärztekammern]] und vertritt die beruflichen und gesundheitspolitischen Interessen der Ärzteschaft in Deutschland.

## Erklärt für Einsteiger

Ärzte in Deutschland sind Mitglieder in einer Ärztekammer ihres Bundeslandes, ähnlich wie Handwerker in einer Handwerkskammer. Diese 17 Landesärztekammern haben zusammen einen gemeinsamen Dachverband: die Bundesärztekammer. Sie setzt die übergeordneten Regeln für den Arztberuf fest, zum Beispiel welche Weiterbildungen anerkannt werden oder wie Ärzte sich bei Fernbehandlungen per Video verhalten dürfen. Außerdem sitzt die Bundesärztekammer mit am Tisch, wenn es um die Digitalisierung des Gesundheitswesens geht.

## Überblick

Die Bundesärztekammer wurde 1947 gegründet und hat ihren Sitz in Berlin. Sie ist keine Behörde, sondern ein privatrechtlicher Verein. Die eigentliche Berufsaufsicht über Ärzte liegt bei den einzelnen Landesärztekammern, die als Körperschaften des öffentlichen Rechts organisiert sind.

### Kernaufgaben

- Verabschiedung der **Musterberufsordnung für Ärzte (MBO-Ä)**, die als Vorlage für die Berufsordnungen der Landesärztekammern dient
- Koordination der ärztlichen Weiterbildungsordnungen
- Stellungnahmen zu Gesetzentwürfen, Arzneimittelfragen und medizinethischen Themen
- Vertretung der Ärzteschaft gegenüber Bundestag, Bundesregierung und internationalen Organisationen
- Herausgabe des Deutschen Ärzteblatts

### Fernbehandlungsregelung (MBO-Ä § 7 Abs. 4)

Eine im digitalen Gesundheitswesen besonders relevante Regelung findet sich in **§ 7 Abs. 4 MBO-Ä**: Sie erlaubt ärztliche Beratung und Behandlung ausschließlich über Kommunikationsmedien (Videosprechstunde, Telefonkonsultation), wenn dies medizinisch vertretbar ist und die erforderliche ärztliche Sorgfalt gewahrt bleibt. Damit hat die Bundesärztekammer 2018 den rechtlichen Rahmen für [[Telemedizin]] in Deutschland geschaffen. Die Umsetzung variiert je nach Landesärztekammer.

### Rolle in der gematik

Die Bundesärztekammer ist Gesellschafterin der [[gematik]]. Ihr Anteil ist Teil des 19,95-%-Blocks, den sich die sechs Leistungserbringer-Verbände teilen. Sie wirkt an der Governance der Telematikinfrastruktur mit und vertritt die Interessen der Ärzteschaft bei der Einführung neuer digitaler Anwendungen (ePA, E-Rezept, HBA).

## Technische Details

### HBA-Ausgabe durch Landesärztekammern

Der **[[HBA]] (Heilberufsausweis)** für Ärzte wird nicht von der Bundesärztekammer selbst ausgegeben, sondern von den einzelnen **[[Landesaerztekammer|Landesärztekammern]]**. Jede Landesärztekammer ist für die Ärzteschaft in ihrem Bundesland zuständig und beauftragt zugelassene Trustcenter (z.B. D-Trust, Medisign, TELESEC) mit der technischen Produktion der Karten.

Der HBA enthält:
- Ein Zertifikat für die **qualifizierte elektronische Signatur (QES)**, mit der Arztbriefe und E-Rezepte rechtssicher signiert werden
- Ein Zertifikat für die **Authentisierung** gegenüber TI-Diensten (ePA, E-Rezept-Fachdienst)
- Einen **Verweis auf das Arztregister** der jeweiligen Landesärztekammer

Die Landesärztekammern sind im technischen Sinne die **zuständigen Stellen** nach dem Heilberufeausweis-Konzept der gematik. Sie prüfen vor der HBA-Ausgabe, ob der Antragsteller im Arztregister eingetragen und approbiert ist.

### Arztregister und Telematik-ID

Jede Landesärztekammer führt ein Arztregister. Die Daten aus diesen Registern fließen in den [[VZD]] (Verzeichnisdienst der Telematikinfrastruktur) ein, damit Ärzte über die TI auffindbar und erreichbar sind.

### Musterberufsordnung und Digitalisierung

Die MBO-Ä wird regelmäßig auf dem Deutschen Ärztetag aktualisiert. Relevante Paragrafen für die Digitalisierung:

- **§ 7 Abs. 4**: Erlaubnis zur ausschließlichen Fernbehandlung (Telemedizin)
- **§ 12**: Regeln zur Verschreibung von Medikamenten, auch im Kontext des E-Rezepts
- **§ 23**: Datenschutz und Dokumentation, relevant für ePA und elektronische Aktenführung

## Verknüpfungen

- [[gematik]] (Gesellschafterin; wirkt an TI-Governance mit)
- [[HBA]] (Heilberufsausweis; wird von Landesärztekammern ausgegeben)
- [[VZD]] (Verzeichnisdienst; enthält Arztdaten aus den Kammern)
- [[QES]] (Qualifizierte elektronische Signatur; im HBA enthalten)
- [[Telemedizin]] (Fernbehandlungsregelung in MBO-Ä § 7 Abs. 4)
- [[KBV]] (Kassenärztliche Bundesvereinigung; Schwesterorganisation für Abrechnungsfragen)

## Quellen

- [Bundesärztekammer: Über uns](https://www.bundesaerztekammer.de/bundesaerztekammer)
- [Musterberufsordnung für Ärzte (MBO-Ä)](https://www.bundesaerztekammer.de/fileadmin/user_upload/BAEK/Themen/Rechtsgrundlagen/MBO/MBO-AE.pdf)
- [Wikipedia: Bundesärztekammer](https://de.wikipedia.org/wiki/Bundesärztekammer)
- [gematik: Gesellschafter](https://www.gematik.de/ueber-uns/gremien-gesellschafter)
