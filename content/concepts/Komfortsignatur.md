---
title: Komfortsignatur
audience: [technical, non-technical]
tags: [konzepte, qes, signatur, hba, konnektor, ti]
aliases: [Komfort-Signatur, Comfort Signature, Komfortsignaturmodus]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, psychotherapie, apotheke, pflege]
  interests: [compliance, technik]
maturity: immergruen
---

# Komfortsignatur

Die **Komfortsignatur** ist ein Betriebsmodus des [[Konnektoren|Konnektors]] in der [[Telematikinfrastruktur]], bei dem Heilberufsangehörige mit einem einmaligen PIN-Eintrag bis zu 250 qualifizierte elektronische Signaturen ([[QES]]) innerhalb von maximal 24 Stunden erstellen können, ohne die PIN für jede Signatur neu eingeben zu müssen.

## Erklärt für Einsteiger

Normalerweise müsste ein Arzt jedes Mal seine geheime PIN eingeben, wenn er ein Dokument digital unterschreibt, so wie eine Unterschrift auf Papier. Bei vielen Unterschriften am Tag wäre das sehr aufwendig. Die Komfortsignatur löst das Problem: Der Arzt gibt seine PIN einmal zu Beginn des Arbeitstages ein, und dann kann der Computer für den Rest des Tages automatisch bis zu 250 Dokumente in seinem Namen unterschreiben, ohne dass er jedes Mal eingreifen muss.

## Überblick

Die Komfortsignatur wurde eingeführt, um den Praxisalltag zu erleichtern. In Arztpraxen und Krankenhäusern entstehen täglich viele signaturpflichtige Dokumente: [[eAU|Arbeitsunfähigkeitsbescheinigungen]], [[E-Rezept|E-Rezepte]], [[eArztbrief|Arztbriefe]] und weitere Belege. Ohne Komfortsignatur müsste der Heilberufsangehörige für jedes einzelne Dokument den [[HBA]] (Heilberufsausweis) in das Kartenterminal stecken und die PIN eingeben. Das war in der Praxis eine erhebliche Unterbrechung des Arbeitsflusses.

Mit der Komfortsignatur aktiviert der HBA-Inhaber zu Beginn einer Session die Komfortsignatur-Funktion durch einmalige PIN-Eingabe. Der [[Konnektoren|Konnektor]] speichert einen temporären Schlüsselzugang und verarbeitet anschließend Signatursanfragen des [[Primärsystem|Primärsystems]] (PVS oder KIS) automatisch, bis entweder das Signaturlimit oder das Zeitlimit erreicht ist.

### Einsatzszenarien

Die Komfortsignatur ist besonders relevant in Einrichtungen mit hohem Signaturaufkommen:

- Großpraxen und Medizinische Versorgungszentren ([[MVZ]])
- Krankenhäuser mit hohem Dokumentationsvolumen
- Praxen mit mehreren Ärzten, die denselben Konnektor nutzen
- Radiologiezentren mit zahlreichen täglichen Befunden

> [!praxis-tipp] Praxis-Tipp: Komfortsignatur einrichten
> Voraussetzungen prüfen, bevor Sie beginnen:
> 1. HBA Generation 2.0 oder höher vorhanden? (Beantragung bei der Ärztekammer)
> 2. Konnektor auf PTV4+ aktualisiert? (IT-Dienstleister fragen)
> 3. PVS-Update eingespielt? (Hersteller kontaktieren)
>
> Aktivierung im Praxisalltag:
> 1. HBA in das Kartenterminal stecken
> 2. Im PVS den Komfortsignatur-Modus aktivieren (Menüpfad je nach Software verschieden, z.B. "Konnektor" > "Komfortsignatur aktivieren")
> 3. PIN.QES am Kartenterminal einmalig eingeben
> 4. Fertig: Das PVS signiert eAUs, E-Rezepte und Arztbriefe für den Rest des Tages automatisch
>
> Zeitaufwand für die Ersteinrichtung: ca. 30 Minuten mit IT-Dienstleister. Wichtig: Beim Verlassen des Arbeitsplatzes die Session beenden, damit niemand in Ihrem Namen signiert.

> [!interesse-compliance] Rechtliche Rahmenbedingungen der Komfortsignatur
> Die Komfortsignatur ist im gematik-Zulassungsverfahren spezifiziert (gemSpec_Kon_KomfSig). Sie erzeugt rechtsgültige qualifizierte elektronische Signaturen nach [[eIDAS]]-Verordnung, da die PIN-Eingabe zum Aktivierungszeitpunkt den Willen des Unterzeichners begründet. Die Signaturen erfüllen die Anforderungen des § 110 SGB V für die eAU-Signaturpflicht. Der HBA-Inhaber ist verpflichtet, die Komfortsignatur-Session bei Verlassen des Arbeitsplatzes zu beenden, um Missbrauch zu verhindern. Eine Delegation der Signaturerstellung an nicht-approbierte Personen ist nicht möglich.

## Technische Details

### Konfigurationsparameter

Die Komfortsignatur lässt sich im Konnektor-Administrationsportal konfigurieren:

| Parameter | Standardwert | Maximum |
|---|---|---|
| Sessiondauer | 6 Stunden | 24 Stunden |
| Signaturen pro Session | 100 | 250 |
| Aktivierung | PIN-Eingabe am Kartenterminal | Pflicht |

Die Standardwerte können vom Praxisadministrator innerhalb der Maximalwerte angepasst werden. Für die maximale Session (24 Stunden, 250 Signaturen) ist eine bewusste Konfigurationsänderung im Konnektor-Portal erforderlich.

### Technische Voraussetzungen

Für die Komfortsignatur sind folgende Komponenten erforderlich:

1. **[[HBA]]** (Heilberufsausweis): Enthält den privaten Schlüssel für die QES. Der HBA muss im Kartenterminal stecken oder muss für die Session aktiviert worden sein.
2. **[[Konnektoren|Konnektor]] mit PTV4+ (ePA-Plus-Standard)**: Die Komfortsignatur steht ab Produkttypenversion PTV4 zur Verfügung. Alle aktuell zugelassenen Konnektoren unterstützen PTV4+.
3. **eHealth-Kartenterminal**: Stationäres Kartenterminal für die PIN-Eingabe am Arbeitsplatz des Unterzeichners.
4. **Primärsystem mit Komfortsignatur-Unterstützung**: Das PVS oder KIS muss die Komfortsignatur-API des Konnektors ansprechen können.

> [!klinik-integration] Klinik-Integration: Komfortsignatur im Krankenhausbetrieb
> **KIS-Anbindung:** KIS-Systeme (Orbis/Dedalus, iMedOne, SAP ISH, Nexus KIS) müssen die Konnektor-API aktiv unterstützen. Vor dem Rollout prüfen, ob das eingesetzte KIS die Operationen `ActivateComfortSignature`, `GetSignatureMode` und `DeactivateComfortSignature` implementiert. Hersteller-Updates sind ggf. einzuspielen.
>
> **Deployment im Krankenhaus:** Im Gegensatz zur Einzelpraxis sind im Krankenhaus mehrere Konnektoren pro Standort typisch. Jeder Arzt benötigt ein Kartenterminal an seinem primären Arbeitsplatz (Station, Ambulanz, OP-Vorbereitung). Hochverfügbarkeit des Konnektors ist kritisch: Fällt der Konnektor aus, ist kein Signieren von eAUs, E-Rezepten und Arztbriefen möglich. Redundanter Konnektor-Betrieb wird für Häuser mit mehr als 200 Betten empfohlen.
>
> **Schichtbetrieb:** Bei Schichtwechsel muss die Komfortsignatur-Session des abtretenden Arztes explizit beendet werden. Empfehlung: Session-Timeout auf maximal die Schichtlänge konfigurieren (Standard 6 Stunden reicht für reguläre Schichten; 24-Stunden-Sessions nur für Bereitschaftsdienste mit begründetem Bedarf aktivieren).

### Ablauf einer Komfortsignatur-Session

```
1. Arzt steckt HBA in das Kartenterminal
2. PVS oder Konnektor-Portal: Komfortsignatur-Modus aktivieren
3. Arzt gibt PIN.QES am Kartenterminal ein
4. Konnektor bestätigt Session-Start (Timer beginnt)
5. PVS sendet Signatursanfragen an Konnektor-API
6. Konnektor signiert automatisch ohne weitere PIN-Eingabe
7. Session endet bei: Zeitablauf, Signaturlimit erreicht, manuellem Abbruch, HBA entfernen
```

### API und Spezifikation

Die Komfortsignatur wird über die Konnektor-Serviceschnittstelle angesprochen. Die relevante Operation ist `SignDocument` mit dem Parameter `Mode=comfort`. Die vollständige Spezifikation findet sich in:

- **gemSpec_Kon_KomfSig**: Spezifikation der Komfortsignatur-Erweiterung des Konnektors (auf dem gematik Fachportal)
- **gemSpec_Kon**: Hauptspezifikation des Konnektors (Abschnitte zur QES-Schnittstelle)

> [!interesse-technik] Implementierungshinweise für PVS-Hersteller
> Die Komfortsignatur wird über den SOAP-Webservice des Konnektors aufgerufen. Der Aufruf `SignDocument` im Komfortsignatur-Modus benötigt die Parameter `CardHandle` (Referenz auf den HBA), `JobNumber` (Vorgangsreferenz), `Document` (zu signierendes Dokument im PDF/A-Format) und `Mode=comfort`. Der Konnektor gibt ein XAdES-konformes Signaturobjekt zurück. Primärsysteme müssen die Komfortsignatur-Session-Verwaltung implementieren: Statusabfrage (`GetSignatureMode`), Aktivierung (`ActivateComfortSignature`) und Deaktivierung (`DeactivateComfortSignature`). Spezifikation: [gemspec.gematik.de](https://gemspec.gematik.de) unter gemSpec_Kon_KomfSig.

> [!dev-quickstart] Dev Quickstart: Komfortsignatur-Session per SOAP steuern
> Konnektor-Endpunkt (typisch): `https://konnektor.local:443/ws/SignatureService`
> WSDL: [gematik/api-telematik](https://github.com/gematik/api-telematik) — `conn/SignatureService.wsdl`
> ```xml
> <!-- Session aktivieren: ActivateComfortSignature -->
> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
>                    xmlns:sig="http://ws.gematik.de/conn/SignatureService/v7.5">
>   <SOAP-ENV:Body>
>     <sig:ActivateComfortSignature>
>       <sig:CardHandle>HBA-1</sig:CardHandle>
>       <sig:Context>
>         <sig:MandantId>Mandant1</sig:MandantId>
>         <sig:ClientSystemId>PVS1</sig:ClientSystemId>
>         <sig:WorkplaceId>AP1</sig:WorkplaceId>
>       </sig:Context>
>     </sig:ActivateComfortSignature>
>   </SOAP-ENV:Body>
> </SOAP-ENV:Envelope>
> ```
> - Session-Status prüfen: Operation `GetSignatureMode` (gibt `COMFORT` oder `PIN` zurück)
> - Session beenden: Operation `DeactivateComfortSignature`
> - PoC-Referenzimplementierung (Java/Spring Boot): [gematik/poc-komfortsignatur](https://github.com/gematik/poc-komfortsignatur)
> - Vollständige Spezifikation: [gemSpec_Kon_KomfSig](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon_KomfSig/gemSpec_Kon_KomfSig_V1.1.0_Aend/)

> [!praxis-tipp] Praxis-Tipp: Komfortsignatur-Session richtig beenden
> Häufiger Fehler: Die Session läuft weiter, obwohl der Arzt das Behandlungszimmer verlassen hat. So schützen Sie sich:
> - Session-Limit auf 6 Stunden belassen (nicht auf 24 Stunden erhöhen, wenn die Praxis nicht rund um die Uhr besetzt ist)
> - HBA am Ende der Sprechstunde aus dem Kartenterminal nehmen: Das beendet die Session sofort
> - Alternativ: Im PVS die Session manuell beenden ("Komfortsignatur deaktivieren")
>
> Wenn das Signaturlimit (Standard: 100 Signaturen) erreicht ist, fragt das PVS automatisch nach der PIN. Das ist kein Fehler, sondern Sicherheitsdesign.

### Abgrenzung zur Stapelsignatur

Die Komfortsignatur ist nicht identisch mit der **Stapelsignatur** (Batch-Signatur):

| Merkmal | Komfortsignatur | Stapelsignatur |
|---|---|---|
| PIN-Eingabe | Einmalig zu Beginn der Session | Einmalig für den Stapel |
| Dokumente | Einzeln, über Zeit verteilt | Batch, alle auf einmal |
| Anwendungsfall | Tagesbetrieb, laufende Signierung | Sammelverarbeitung |
| Zeitversatz | Signaturen über Stunden verteilt | Alle Signaturen sofort |

> [!frist-warnung] Frist-Warnung: Signaturpflicht bei eAU und E-Rezept
> **Rechtsgrundlage:** § 295 Abs. 1 SGB V (eAU-Übermittlungspflicht), § 360 Abs. 1 SGB V (E-Rezept-Signaturpflicht)
> **Pflicht:** Jede elektronische Arbeitsunfähigkeitsbescheinigung und jedes E-Rezept ist vom ausstellenden Heilberufsangehörigen mit einer qualifizierten elektronischen Signatur (QES) zu versehen. Die Komfortsignatur-Session ist ausschließlich durch den HBA-Inhaber zu aktivieren. Eine Aktivierung durch Praxispersonal ohne eigenen HBA stellt eine unzulässige Delegation dar und macht die erzeugten Signaturen rechtlich unwirksam.
> **Handlungsbedarf:** Die verantwortliche Stelle stellt sicher, dass Komfortsignatur-Sessions nur durch den jeweiligen HBA-Inhaber aktiviert werden und beim Verlassen des Arbeitsplatzes beendet werden. Praxisorganisatorische Regelungen sind zu dokumentieren.
> **Bei Nichtbeachtung:** Ungültige Signaturen führen zu fehlerhaften eAU-Übermittlungen und können kassenseitige Retaxierungen sowie berufsrechtliche Konsequenzen nach sich ziehen.

### Fernsignatur als Alternative

Die [[Fernsignatur]] (Remote-QES) ist eine Alternative zur Komfortsignatur, die keinen physischen Konnektor und kein physisches Kartenterminal am Unterschriftsort benötigt. Bei der Fernsignatur wird der private Schlüssel in einem zentralen [[HSM-B|Hardware-Sicherheitsmodul]] gehalten. Die Komfortsignatur setzt dagegen einen lokalen Konnektor voraus.

## Verknüpfungen

- [[QES]] (Qualifizierte Elektronische Signatur: Signaturtyp, den die Komfortsignatur erzeugt)
- [[HBA]] (Heilberufsausweis: enthält den Schlüssel für die Komfortsignatur)
- [[Konnektoren]] (Hardware, die die Komfortsignatur-Funktion bereitstellt)
- [[eIDAS]] (rechtlicher Rahmen für qualifizierte elektronische Signaturen in der EU)
- [[eAU]] (elektronische Arbeitsunfähigkeitsbescheinigung: signaturpflichtiges Dokument)
- [[E-Rezept]] (elektronisches Rezept: signaturpflichtiges Dokument)
- [[eArztbrief]] (elektronischer Arztbrief: signaturpflichtiges Dokument)
- [[Fernsignatur]] (Alternative zur Komfortsignatur ohne lokalen Konnektor)
- [[MVZ]] (Medizinisches Versorgungszentrum: typischer Anwendungsfall für Komfortsignatur)

## Quellen

- [gematik: Wie funktioniert die Komfortsignatur? (PDF)](https://www.gematik.de/media/gematik/Medien/Telematikinfrastruktur/Dokumente/Kurz_erklaert_Komfortsignatur.pdf)
- [gematik Fachportal: Qualifizierte elektronische Signatur](https://fachportal.gematik.de/anwendungen/qualifizierte-elektronische-signatur)
- [gemspec.gematik.de: gemSpec_Kon_KomfSig](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Kon_KomfSig/gemSpec_Kon_KomfSig_V1.1.0_Aend/)
- [KV Nordrhein: Elektronische Signaturverfahren](https://ti.kvno.de/elektronisches-signaturverfahren-esignatur/)
