---
title: VDG
audience: [technical, non-technical]
tags: [standards, recht, eidas, qes, vertrauensdienste, signatur]
aliases: [Vertrauensdienstegesetz, Vertrauensdienste-Gesetz]
---

# VDG

Das Vertrauensdienstegesetz (VDG) ist das deutsche Ausführungsgesetz zur [[eIDAS]]-Verordnung (EU) Nr. 910/2014 und regelt die Aufsicht über qualifizierte Vertrauensdiensteanbieter in Deutschland.

## Erklärt für Einsteiger

Wenn du online eine wichtige Unterschrift leistest, zum Beispiel beim Arzt oder vor Gericht, muss klar sein, dass diese Unterschrift wirklich von dir stammt und nicht gefälscht wurde. Dafür gibt es Firmen, die digitale Ausweise und Zertifikate ausstellen. Das VDG legt fest, wer diese Firmen überwacht und welche Regeln sie einhalten müssen. In Deutschland übernimmt diese Aufgabe hauptsächlich die [[Bundesnetzagentur]].

## Überblick

Das VDG trat am 29. Juli 2017 in Kraft. Es ergänzt die direkt geltende [[eIDAS]]-Verordnung um nationale Durchführungsbestimmungen. Ohne diese nationalen Regelungen wären Fragen zur Aufsichtszuständigkeit, zu Bußgeldern und zu Verfahrensabläufen nicht geregelt.

Das Gesetz bestimmt, welche deutschen Behörden für die Aufsicht über Vertrauensdienste zuständig sind. Die [[Bundesnetzagentur]] überwacht qualifizierte elektronische Signaturen, Siegel, Zeitstempel und Dienste für elektronische Einschreiben. Das [[BSI]] ist für die Aufsicht über Dienste zur Website-Authentifizierung zuständig.

Im Gesundheitswesen ist das VDG relevant, weil Ärzte, Apotheker und andere Heilberufler qualifizierte elektronische Signaturen ([[QES]]) auf ihren [[HBA|Heilberufsausweisen]] nutzen. Diese QES-Zertifikate dürfen nur von qualifizierten Vertrauensdiensteanbietern (VDA) ausgestellt werden, die nach VDG und eIDAS zugelassen sind.

## Technische Details

### Struktur des VDG

Das VDG ist in fünf Teile gegliedert:

**Teil 1 (§§ 1-8): Allgemeine Bestimmungen**
- § 1: Anwendungsbereich. Das VDG regelt die wirksame Durchführung der eIDAS-Vorschriften in Deutschland. Andere Gesetze mit spezifischen Anforderungen an Vertrauensdienste bleiben unberührt.
- § 2: Aufsichtsstelle. Benennt die [[Bundesnetzagentur]] als Hauptaufsichtsstelle und das [[BSI]] für Website-Authentifizierungszertifikate.
- §§ 3-8: Verfahren, Aufsichtsmaßnahmen, Mitwirkungspflichten, Haftung, Barrierefreiheit, Datenschutz.

**Teil 2 (§§ 9-16): Qualifizierte Vertrauensdienste**
Regelt Vertrauenslisten, Deckungsvorsorge, Identitätsprüfung, Zertifikate, Widerruf und die Langfristbeweiserhaltung von Signaturen.

**Teil 3 (§ 17): Qualifizierte elektronische Signaturen und Siegel**
Benennt zugelassene Stellen für die Konformitätsbewertung nach Art. 30 eIDAS.

**Teil 4 (§ 18): Zustellungsdienste**
Regelt qualifizierte Dienste für elektronische Einschreiben.

**Teil 5 (§§ 19-21): Schlussvorschriften**
Bußgeldregelungen, Verordnungsermächtigung und Übergangsvorschriften.

### Qualifizierte Vertrauensdiensteanbieter (VDA)

Ein Vertrauensdiensteanbieter gilt als qualifiziert, wenn er:

1. Ein Konformitätsbewertungsverfahren durch eine akkreditierte Prüfstelle durchlaufen hat.
2. Von der [[Bundesnetzagentur]] als qualifizierter VDA anerkannt wurde.
3. In der Deutschen Vertrauensliste (DTL) eingetragen ist.

Die DTL ist ein maschinenlesbares, signiertes XML-Dokument. TI-Komponenten wie der [[Konnektoren|Konnektor]] und das [[TI-Gateway]] referenzieren die DTL, um QES-Zertifikate zu validieren.

### Abgrenzung zu eIDAS

Die [[eIDAS]]-Verordnung gilt als EU-Recht direkt in allen Mitgliedstaaten. Sie enthält aber Öffnungsklauseln für nationale Regelungen. Das VDG füllt diese Lücken:

- Es benennt die nationalen Aufsichtsbehörden (Art. 17 eIDAS).
- Es regelt Bußgelder für Verstöße.
- Es legt Verfahren für die Qualifizierung von VDAs fest.
- Es definiert die Langfristbeweiserhaltung für Signaturen (§ 15 VDG).

### Relevanz für die QES in der TI

Qualifizierte C.HP.QES-Zertifikate auf dem [[HBA]] werden von qualifizierten VDAs ausgestellt, die nach VDG und eIDAS zugelassen sind. Die [[PKI]] der [[Telematikinfrastruktur]] unterscheidet deshalb zwei Bereiche:

- **QES-PKI**: Unter Aufsicht der [[Bundesnetzagentur]] nach VDG und eIDAS.
- **nonQES-PKI**: Unter Aufsicht der [[gematik]] mit eigenen Akkreditierungsanforderungen.

## Verknüpfungen

- [[eIDAS]]: EU-Verordnung, die das VDG ausführt
- [[Bundesnetzagentur]]: Hauptaufsichtsbehörde nach § 2 VDG
- [[BSI]]: Aufsicht über Website-Authentifizierungszertifikate nach § 2 VDG
- [[QES]]: Qualifizierte elektronische Signatur, deren Anbieter das VDG reguliert
- [[HBA]]: Träger der QES-Zertifikate für Heilberufler
- [[PKI]]: TI-Infrastruktur, in der VDG-regulierte VDAs die QES-Zertifikate ausstellen
- [[Konnektoren]]: Prüft QES-Zertifikate über die Deutsche Vertrauensliste
- [[TI-Gateway]]: Cloud-basierter Nachfolger des Konnektors, ebenfalls mit DTL-Prüfung

## Quellen

- [Vertrauensdienstegesetz (VDG) auf gesetze-im-internet.de](https://www.gesetze-im-internet.de/vdg/)
- [Bundesnetzagentur: Elektronische Vertrauensdienste](https://www.elektronische-vertrauensdienste.de/)
- [eIDAS-Verordnung (EU) Nr. 910/2014 - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32014R0910)
- [Bundesnetzagentur: Deutsche Vertrauensliste](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitalisierung/ElektronischeVertrauensdienste/start.html)
