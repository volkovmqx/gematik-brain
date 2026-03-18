---
title: Landesärztekammer
audience: [technical, non-technical]
tags: [organisation, berufsrecht, approbation, hba, kammer]
aliases: [Landesärztekammern, Ärztekammer, Ärztliche Kammer]
---

# Landesärztekammer

Eine **Landesärztekammer** ist die ärztliche Körperschaft des öffentlichen Rechts auf Landesebene. Sie ist für Berufsrecht, Weiterbildung und die Ausstellung des [[HBA|Heilberufsausweises (HBA)]] zuständig.

## Erklärt für Einsteiger

Wenn ein Arzt in Deutschland arbeiten möchte, braucht er eine Genehmigung des Staates, die Approbation. Aber er muss sich auch einer Berufsorganisation anschließen: der Landesärztekammer seines Bundeslandes. Die Kammer macht die Regeln für das Berufsverhalten, sorgt für Fortbildung und gibt dem Arzt seinen digitalen Berufsausweis, den Heilberufsausweis. Ohne diesen Ausweis kann der Arzt im digitalen Gesundheitsnetz keine Rezepte unterschreiben oder Patientenakten öffnen.

## Überblick

In Deutschland gibt es 17 Landesärztekammern, eine je Bundesland (Bayern und Sachsen haben je eine, Hamburg und Berlin je eine). Zusammen sind sie im Dachverband [[Bundesaerztekammer|Bundesärztekammer (BÄK)]] organisiert. Die Mitgliedschaft in der Kammer des jeweiligen Bundeslandes ist für alle approbierten Ärzte mit Berufssitz oder Hauptwohnsitz in diesem Land verpflichtend.

Rechtsgrundlage für die Landesärztekammern sind die **Heilberufe- und Kammergesetze der Länder** (z.B. das Heilberufsgesetz NRW, das Heilberufekammergesetz Bayern). Jede Kammer ist eine Körperschaft des öffentlichen Rechts mit Satzungsautonomie.

### Kernaufgaben

- **Berufsrecht**: Erlass und Durchsetzung der Berufsordnung für Ärzte im jeweiligen Bundesland. Die Berufsordnung regelt das Verhalten gegenüber Patienten, Kollegen und der Öffentlichkeit.
- **Weiterbildung**: Anerkennung von Facharztweiterbildungen und Zusatzbezeichnungen nach der Weiterbildungsordnung (WBO). Jeder Facharzt erhält seine Anerkennung von der Kammer seines Bundeslandes.
- **Heilberufsausweis (HBA)**: Als Herausgeberinstanz bestätigt die Kammer die Approbation des Antragstellers. Damit ist sie der Vertrauensanker im HBA-Ausstellungsprozess.
- **Fortbildungspflicht**: Überwachung und Zertifizierung der gesetzlichen Fortbildungspflicht (§ 95d SGB V). Ärzte müssen alle fünf Jahre 250 Fortbildungspunkte nachweisen.
- **Schlichtung**: Bearbeitung von Beschwerden und Schlichtungsverfahren zwischen Ärzten und Patienten.

### Bedeutung für die Telematikinfrastruktur

Die Landesärztekammern sind das Bindeglied zwischen dem Berufsrecht und dem TI-Zugang. Ohne eine gültige Bestätigung der Approbation durch die Kammer kann kein [[HBA]] ausgestellt werden. Ohne [[HBA]] ist für Ärzte kein Zugang zur [[Telematikinfrastruktur]] möglich: Keine [[QES|qualifizierte elektronische Signatur]], kein [[E-Rezept]]-Ausstellen, kein Zugriff auf die [[ePA]] mit Leistungserbringerstatus.

## Technische Details

### HBA-Ausstellungsprozess

Der Ausstellungsprozess des [[HBA]] läuft technisch über zugelassene Vertrauensdiensteanbieter (VDA, z.B. D-Trust, medisign). Die Landesärztekammer übernimmt dabei eine definierte Rolle:

1. Der Arzt beantragt den [[HBA]] bei der zuständigen Landesärztekammer oder direkt beim VDA (je nach Kammer).
2. Die Kammer prüft die Approbation und übermittelt die **Bundeseinheitliche Arztnummer (BAN)** an den VDA. Die BAN ist ein stabiler Identifikator, der den Arzt eindeutig über Ländergrenzen hinaus identifiziert.
3. Der VDA produziert die Chipkarte, führt die Identitätsprüfung durch und betreibt die PKI-Infrastruktur.
4. Die Kammer hat das Recht, den [[HBA]] zu sperren, wenn die Approbation entzogen wird (Approbationsentzug). Verlust oder Diebstahl wird dagegen direkt beim VDA gemeldet.

Die Kammer produziert den HBA nicht selbst und betreibt keine technische PKI. Ihre Kernfunktion ist die Bestätigung der Berufsqualifikation gegenüber dem VDA.

### Verhältnis zur Bundesärztekammer

Die [[Bundesaerztekammer|Bundesärztekammer]] koordiniert länderübergreifende Themen (z.B. Musterberufsordnung, Muster-Weiterbildungsordnung), hat aber keine Weisungsbefugnis gegenüber den Landesärztekammern. Jede Landesärztekammer erlässt ihre eigene Berufsordnung auf Basis der Musterberufsordnung. Für die HBA-Ausstellung ist immer die Landesärztekammer des Bundeslandes zuständig, in dem der Arzt approbiert ist oder seinen Berufssitz hat.

## Verknüpfungen

- [[HBA]] (Heilberufsausweis; Landesärztekammer ist Herausgeberinstanz)
- [[Bundesaerztekammer]] (Dachverband der Landesärztekammern)
- [[QES]] (qualifizierte elektronische Signatur; setzt gültigen HBA voraus)
- [[Telematikinfrastruktur]] (TI-Zugang für Ärzte erfordert HBA von der Kammer)
- [[E-Rezept]] (Ausstellung erfordert HBA mit gültiger QES)
- [[ePA]] (ärztlicher Zugriff erfordert HBA)
- [[KIM]] (Versenden von eArztbriefen mit QES erfordert HBA)
- [[SMC-B]] (Karte für die Einrichtung; komplementär zum HBA)
- [[PKI]] (technische Infrastruktur hinter dem HBA-Zertifikat)
- [[gematik]] (spezifiziert den HBA-Standard; Landesärztekammer ist Herausgeberinstanz laut gematik-Anforderungen)

## Quellen

- [Bundesärztekammer: FAQ zum eHBA](https://www.bundesaerztekammer.de/themen/aerzte/digitalisierung/digitale-identitaeten/faq-zum-elektronischen-heilberufsausweis)
- [Landesärztekammer Baden-Württemberg: eHBA](https://www.aerztekammer-bw.de/ehba)
- [Bayerische Landesärztekammer: Arztausweis](https://www.blaek.de/wegweiser/arztausweis)
- [gematik Fachportal: Smartcards und Identitäten in der TI](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti)
