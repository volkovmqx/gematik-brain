---
title: Bundesnetzagentur
audience: [technical, non-technical]
tags: [organisation, regulierung, eidas, qes, vertrauensdienste]
aliases: [BNetzA, Bundesnetzagentur für Elektrizität Gas Telekommunikation Post und Eisenbahnen]
---

# Bundesnetzagentur

Die Bundesnetzagentur ist die deutsche Bundesbehörde, die als zuständige Aufsichtsstelle für qualifizierte Vertrauensdiensteanbieter (VDA) nach der [[eIDAS]]-Verordnung fungiert und damit die Grundlage für rechtssichere [[QES]]-Zertifikate in Deutschland überwacht.

## Erklärt für Einsteiger

Stell dir vor, jemand behauptet, eine bestimmte Behörde zu sein, und stellt digitale Ausweise aus. Damit du diesen Ausweisen vertrauen kannst, braucht es eine übergeordnete Stelle, die prüft, ob dieser Ausweis-Aussteller vertrauenswürdig ist. Das ist in Deutschland die Bundesnetzagentur. Sie prüft und überwacht die Firmen, die digitale Zertifikate für Ärzte und Apotheker ausstellen. Nur wer diese Prüfung besteht, darf solche Zertifikate ausgeben.

## Überblick

Die Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen (BNetzA) ist eine selbstständige Bundesoberbehörde im Geschäftsbereich des Bundesministeriums für Wirtschaft. Ihr Sitz ist in Bonn. Ursprünglich als Regulierungsbehörde für Netzindustrien gegründet, hat sie durch die [[eIDAS]]-Verordnung (EU) Nr. 910/2014 eine wichtige Rolle im Bereich der digitalen Identität übernommen.

Für das deutsche Gesundheitswesen ist die Bundesnetzagentur relevant, weil sie die Anbieter beaufsichtigt, die [[QES]]-Zertifikate für den [[HBA]] (Heilberufsausweis) ausstellen. Jeder Arzt, Zahnarzt und Apotheker, der eine qualifizierte elektronische Signatur erzeugen will, benötigt ein qualifiziertes Zertifikat. Dieses Zertifikat stammt von einem qualifizierten VDA, der unter Aufsicht der Bundesnetzagentur steht.

Die Bundesnetzagentur nimmt in Deutschland die Funktion der zuständigen nationalen Behörde (englisch: supervisory body) nach Art. 17 eIDAS-Verordnung wahr. Sie erteilt die Qualifizierung, führt die Deutsche Vertrauensliste und überwacht laufend die Einhaltung der Anforderungen.

## Technische Details

### Qualifizierungsprozess für VDA

Damit ein Vertrauensdiensteanbieter als qualifizierter VDA anerkannt wird, muss er ein aufwendiges Konformitätsbewertungsverfahren durchlaufen. Unabhängige Prüfstellen begutachten die technische und organisatorische Eignung des Anbieters. Erst nach erfolgreicher Prüfung erteilt die Bundesnetzagentur die Qualifizierung und nimmt den Anbieter in die Deutsche Vertrauensliste auf.

### Deutsche Vertrauensliste

Die Bundesnetzagentur betreibt die Deutsche Vertrauensliste (DTL). Sie ist ein maschinenlesbares, signiertes Verzeichnis aller qualifizierten deutschen VDAs. TI-Komponenten wie der [[Konnektoren|Konnektor]] und das [[TI-Gateway]] können über die DTL prüfen, ob ein QES-Zertifikat von einem anerkannten VDA stammt. Die DTL ist auch in der [[PKI|Trust Service List (TSL)]] der TI referenziert, die alle gematik-zugelassenen CAs und VDAs aufführt.

### DA:VE - Dauerhafte Verifikation

Die Bundesnetzagentur betreibt das Dienst DA:VE (Dauerhafte Verzeichnisse), der die langfristige Prüfbarkeit von Signaturen sicherstellt. Auch wenn ein VDA seinen Betrieb einstellt, können ältere QES-Signaturen weiterhin gegen die archivierten Zertifikatsdaten geprüft werden.

### Abgrenzung zur gematik-PKI

In der [[PKI]] der [[Telematikinfrastruktur]] gibt es zwei Vertrauensbereiche:

- **nonQES-PKI**: Unter Aufsicht der [[gematik]] (Root-CA, TSP-Akkreditierung)
- **QES-PKI**: Unter Aufsicht der Bundesnetzagentur (qualifizierte VDAs, Deutsche Vertrauensliste)

Die qualifizierten C.HP.QES-Zertifikate auf dem [[HBA]] stammen aus dem QES-Bereich und fallen damit in die Zuständigkeit der Bundesnetzagentur. Die übrigen HBA-Zertifikate (C.HP.AUT, C.HP.ENC) werden von gematik-akkreditierten TSPs ausgestellt.

### Relevante Rechtsgrundlagen

- **eIDAS-Verordnung** (EU) Nr. 910/2014, Art. 17 ff.: Aufsichtspflichten
- **[[VDG|Vertrauensdienstegesetz (VDG)]]**: Deutsches Ausführungsgesetz zur eIDAS-Verordnung
- **eIDAS 2.0** (EU-Verordnung 2024/1183): Erweiterung um die Europäische Digitale Identität

## Verknüpfungen

- [[QES]]: Die Bundesnetzagentur beaufsichtigt die VDAs, die QES-Zertifikate ausstellen
- [[HBA]]: QES-Zertifikat C.HP.QES auf dem HBA stammt von einem qualifizierten VDA
- [[eIDAS]]: Rechtsgrundlage für die Aufsichtsrolle der Bundesnetzagentur
- [[PKI]]: QES-PKI der TI ist von der Bundesnetzagentur reguliert
- [[gematik]]: Betreibt die nonQES-PKI der TI, parallel zur QES-PKI
- [[Konnektoren]]: Prüft QES-Zertifikate über die Trust Service List

## Quellen

- [Bundesnetzagentur: Elektronische Vertrauensdienste](https://www.elektronische-vertrauensdienste.de/)
- [Bundesnetzagentur: Fragen & Antworten zu Vertrauensdiensten](https://www.elektronische-vertrauensdienste.de/EVD/DE/Nutzer/Infothek/Fragen/start.html)
- [eIDAS-Verordnung (EU) Nr. 910/2014 - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32014R0910)
- [gemSpec TSL (PKI der TI) - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_TSL/latest/index.html)
