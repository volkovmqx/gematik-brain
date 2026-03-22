---
title: Fernsignatur
audience: [technical]
tags: [technologies, signatur, qes, ti-gateway, eidas]
aliases: [Ferngesteuerte qualifizierte elektronische Signatur, Remote-Signatur]
maturity: wachsend
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, hersteller, it-dienstleister, ti-infrastruktur]
  interests: [technik, compliance]
---

# Fernsignatur

Die **Fernsignatur** ist eine qualifizierte elektronische Signatur ([[QES]]), bei der der private Schlüssel nicht auf einer lokalen Chipkarte gespeichert ist, sondern sicher beim Vertrauensdiensteanbieter in einem Hardware-Sicherheitsmodul (HSM) verwahrt wird.

## Erklärt für Einsteiger

Normalerweise braucht ein Arzt einen physischen Ausweis (den [[HBA]]) und ein Kartenlesegerät, um Dokumente rechtsgültig zu unterschreiben. Das ist wie eine handgeschriebene Unterschrift: Man muss persönlich anwesend sein und einen Stift halten. Bei der Fernsignatur liegt der "Stempel" nicht beim Arzt zu Hause, sondern sicher in einer gesperrten Tresorhalle. Der Arzt gibt online die Erlaubnis, und der Tresor stempelt für ihn. Das Ergebnis ist genauso rechtsgültig, aber es braucht keine Karte und kein Lesegerät vor Ort.

## Überblick

Die [[QES]] ist in Deutschland für viele medizinische Dokumente vorgeschrieben oder rechtlich gleichwertig zur handschriftlichen Unterschrift. Bisher erforderte eine QES in der [[Telematikinfrastruktur]] zwingend einen physischen [[HBA]] im Kartenlesegerät und einen [[Konnektoren|Konnektor]]. Das erzeugt einen Medienbruch, wenn Ärzte mobil arbeiten oder mehrere Standorte haben.

Die Fernsignatur ist in der EU durch die [[eIDAS]]-Verordnung geregelt. Die ursprüngliche eIDAS-Verordnung (EU) 910/2014 definiert in Art. 3 Nr. 26 die qualifizierte elektronische Signaturerstellungseinheit und schuf den allgemeinen Rechtsrahmen für qualifizierte elektronische Signaturen. Art. 29 der ursprünglichen Verordnung legt die Anforderungen an qualifizierte Signaturerstellungseinheiten fest. Mit der Änderungsverordnung (EU) 2024/1183 (eIDAS 2.0) wurde Art. 29a eingefügt, der erstmals explizite Anforderungen an qualifizierte Dienste zur Verwaltung von Fernunterschriften-Erstellungseinheiten regelt. Der Unterschied zur kartenbasierten Signatur liegt im Speicherort des Signaturschlüssels: Bei der Fernsignatur liegt dieser beim qualifizierten Vertrauensdiensteanbieter ([[TSP]]) in einem zertifizierten HSM. Der Signaturprozess selbst wird vom TSP durchgeführt, nachdem der Signierende sich sicher authentisiert hat.

In der Telematikinfrastruktur ist die Fernsignatur mit dem Konzept des [[TI-Gateway|TI-Gateways]] und der TI 2.0 verknüpft. Das TI-Gateway ist der cloudbasierte Ersatz für den Hardware-Konnektor. In der Feature-Roadmap des TI-Gateways ist die Fernsignatur als geplanter Zusatzdienst vorgesehen. Ziel ist, dass Ärzte ihre [[HBA]]-Funktion in Zukunft auch ohne physische Karte und ohne Konnektor nutzen können.

## Technische Details

### Wie die Fernsignatur funktioniert

1. Der Heilberufsträger registriert sich beim qualifizierten TSP und weist seine Identität nach (z.B. über [[eID]] oder Videoident).
2. Der TSP erzeugt ein Schlüsselpaar. Der private Schlüssel bleibt im zertifizierten HSM beim TSP.
3. Zum Signieren authentisiert sich der Heilberufsträger beim TSP (z.B. per App, PIN oder biometrischem Verfahren).
4. Der TSP führt die Signatur innerhalb des HSM durch.
5. Die fertige Signatur wird an das signierende System zurückgegeben.

Der Signierende gibt zu keinem Zeitpunkt den privaten Schlüssel frei. Die Kontrolle über den Schlüssel behält er durch den Authentisierungsakt.

### Rechtliche Grundlage

Die [[eIDAS]]-Verordnung (EU) 910/2014 (Art. 29) und die Änderungsverordnung (EU) 2024/1183 (Art. 29a) bilden die europäische Rechtsgrundlage. Danach kann eine QES-Erstellungseinheit vom [[TSP]] im Auftrag des Unterzeichners verwaltet werden, sofern der TSP als qualifizierter Vertrauensdiensteanbieter zugelassen ist. In Deutschland regelt das Vertrauensdienstegesetz ([[VDG]]) die Zulassung der TSPs. Zuständige Aufsichtsbehörde ist die [[Bundesnetzagentur]].

### Abgrenzung zur Komfortsignatur

Die [[Komfortsignatur]] ist eine kartenbasierte Variante, bei der nach einmaliger PIN-Eingabe bis zu 250 Signaturen am Tag ohne erneute Eingabe erzeugt werden. Sie erfordert weiterhin den physischen [[HBA]] und den [[Konnektoren|Konnektor]]. Die Fernsignatur benötigt beides nicht.

### Einbindung in TI 2.0

Mit dem [[TI-Gateway]] als Software-Alternative zum Konnektor entfällt die Hardwareabhängigkeit für viele TI-Anwendungen. Die Fernsignatur ergänzt dieses Konzept: Wenn kein physischer [[HBA]] mehr notwendig ist, können auch mobile Szenarien (Hausbesuche, Telemedizin) vollständig digital abgewickelt werden. Die [[EUDI-Wallet]] wird mittelfristig als weiterer Träger digitaler Identitäten und Signaturfähigkeiten diskutiert.

### Voraussetzungen für den Einsatz in der TI

Für eine Fernsignatur im TI-Kontext müssen folgende Bedingungen erfüllt sein:

- Der TSP muss qualifiziert nach [[eIDAS]] und in der deutschen Vertrauensliste ([[TSL]]) geführt sein.
- Das Zertifikat muss die Berufseigenschaft des Heilberufsträgers (z.B. Arzt, Zahnarzt, Apotheker) ausweisen.
- Die Authentisierungsmethode muss den Anforderungen der [[PKI]]-Richtlinien der gematik entsprechen.

## Verknüpfungen

- [[QES]] (die Fernsignatur ist eine spezifische Form der QES)
- [[HBA]] (die Fernsignatur ist die Alternative zum physischen HBA)
- [[eIDAS]] (europäische Rechtsgrundlage für Vertrauensdienste)
- [[TI-Gateway]] (cloudbasierter Konnektor-Ersatz, in dem Fernsignatur vorgesehen ist)
- [[TSP]] (Vertrauensdiensteanbieter, der die Schlüssel verwaltet)
- [[VDG]] (Vertrauensdienstegesetz, deutsche Umsetzung von eIDAS)
- [[Bundesnetzagentur]] (Aufsichtsbehörde für TSPs in Deutschland)
- [[PKI]] (Infrastruktur für Zertifikate und Vertrauen)
- [[TSL]] (Liste qualifizierter TSPs)
- [[EUDI-Wallet]] (zukünftiger europäischer digitaler Identitätsrahmen)
- [[Konnektoren]] (bisherige Hardware, die die Fernsignatur langfristig ergänzt oder ersetzt)

## Quellen

- [eIDAS-Verordnung (EU) 910/2014 (konsolidierte Fassung)](https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:02014R0910-20241018)
- [Änderungsverordnung (EU) 2024/1183 (eIDAS 2.0)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1183)
- [BSI: Grundlagen der elektronischen Signatur](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/Moderner-Staat/ElektronischeSignatur/elektronischesignatur_node.html)
- [QES - gematik Fachportal](https://fachportal.gematik.de/anwendungen/qualifizierte-elektronische-signatur)
- [TI-Gateway und TI-Zugang - gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/ti-zugang)
