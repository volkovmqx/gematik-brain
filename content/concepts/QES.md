---
title: QES - Qualifizierte Elektronische Signatur
audience: [technical, non-technical]
tags: [konzepte, qes, signatur, eidas, recht]
aliases: [QES, Qualifizierte Elektronische Signatur, qualifizierte Signatur]
---

# QES - Qualifizierte Elektronische Signatur

Die **QES** (Qualifizierte Elektronische Signatur) ist die höchste Stufe der elektronischen Signatur nach der eIDAS-Verordnung. Sie ist der handschriftlichen Unterschrift gesetzlich gleichgestellt.

## Erklärt für Einsteiger

Wenn ein Arzt ein Rezept unterschreibt, beweist seine Unterschrift: "Ich, Dr. Müller, habe das wirklich ausgestellt und stehe dafür." Die QES macht genau das in der digitalen Welt. Nur ein zugelassener Arzt mit seinem persönlichen [[HBA]] kann diese Signatur erzeugen, und sie kann nicht gefälscht werden. Das Gesetz behandelt sie genauso wie eine handschriftliche Unterschrift auf einem Papier.

## Überblick

Die QES ist in Deutschland und der EU durch die **[[eIDAS]]-Verordnung** (EU) Nr. 910/2014 geregelt. Sie ist die einzige Signaturform, die der Handunterschrift rechtlich vollständig gleichgestellt ist.

In der [[Telematikinfrastruktur]] ist die QES für mehrere Anwendungsfälle verpflichtend oder rechtlich erforderlich:

- **[[E-Rezept]]**: Ärzte signieren Verordnungen mit QES via [[HBA]]
- **[[eAU]]**: Elektronische Arbeitsunfähigkeitsbescheinigung trägt QES des Arztes
- **[[NFDM]]**: Notfalldaten werden durch Heilberufler mit QES signiert
- **Arztbriefe**: Für die Abrechnung im ambulanten Bereich erforderlich

### Signaturebenen nach eIDAS

Die eIDAS-Verordnung definiert drei Stufen elektronischer Signaturen:

| Stufe | Anforderungen | Rechtliche Wirkung |
|---|---|---|
| Einfache elektronische Signatur | Keine besonderen Anforderungen | Gering |
| Fortgeschrittene Signatur | Eindeutig dem Unterzeichner zugeordnet, manipulierbar erkennbar | Mittel |
| **Qualifizierte Signatur (QES)** | Qualifiziertes Zertifikat + QSCD | Handunterschrift gleichgestellt |

## Technische Details

### Voraussetzungen für eine QES in der TI

Um eine QES in der TI zu erstellen, werden benötigt:

1. Zugang zur [[Telematikinfrastruktur]]
2. Ein [[Konnektoren|Konnektor]] oder TI-Gateway
3. Ein eHealth-Kartenterminal
4. Ein [[HBA]] (Heilberufsausweis) mit QES-Zertifikat (C.HP.QES)
5. PIN-Eingabe durch den Karteninhaber

Die PIN-Eingabe ist nicht verzichtbar. Sie stellt sicher, dass der Inhaber des HBA persönlich die Signatur autorisiert.

### Qualifiziertes Zertifikat und QSCD

Das QES-Zertifikat auf dem [[HBA]] ist ein **qualifiziertes Zertifikat** nach eIDAS. Es wird von einem zugelassenen **Vertrauensdiensteanbieter (VDA)** ausgestellt, der unter Aufsicht der **[[Bundesnetzagentur]]** steht.

Die Signaturerstellung erfolgt auf einer **QSCD** (Qualified Signature Creation Device, dt. qualifizierter Signaturerstellungseinheit). Im TI-Kontext ist das der kryptografische Chip auf dem [[HBA]]. Der private Schlüssel verlässt die Karte nie.

### Technischer Ablauf (TI)

```
1. Primärsystem ([[PVS]]) erstellt Dokument (z.B. FHIR-Bundle für E-Rezept)
2. Anfrage an Konnektor: "Signiere dieses Dokument"
3. Konnektor leitet Anfrage an HBA im Kartenterminal weiter
4. Arzt gibt PIN am Terminal ein
5. HBA erzeugt Signatur mit privatem Schlüssel (bleibt auf der Karte)
6. Konnektor gibt signiertes Dokument zurück
7. Prüfung: Empfänger validiert Signatur gegen QES-Zertifikat und TI-PKI
```

### Signaturformat

In der TI werden QES-Signaturen in der Regel als **CAdES** (CMS Advanced Electronic Signatures) oder **PAdES** (PDF Advanced Electronic Signatures) erzeugt, je nach Anwendungsfall. Das Format folgt den Vorgaben der gematik-Spezifikationen.

### Fernunterschrift (Remote-QES)

Seit der eIDAS-Verordnung ist auch die **Fernunterschrift** möglich. Dabei liegt das qualifizierte Zertifikat nicht auf einer physischen Karte, sondern bei einem VDA in der Cloud. Die Authentisierung erfolgt über andere sichere Mittel. In der TI ist diese Option bisher nicht flächendeckend eingesetzt.

### Abgrenzung zur Organisationssignatur

Die [[SMC-B]] kann keine QES erzeugen. Sie erzeugt nur eine **Organisationssignatur** (C.HCI.OSIG), die eine Einrichtung identifiziert, aber nicht der Handunterschrift einer Person gleichgestellt ist. Nur der [[HBA]] einer natürlichen Person kann QES erzeugen.

## Verknüpfungen

- Erfordert [[HBA]] (QES-Zertifikat C.HP.QES)
- Erstellt über [[Konnektoren]] und Kartenterminal
- Teil der TI-[[PKI]] (Zertifikatsprüfung)
- Genutzt in [[E-Rezept]], [[eAU]], [[NFDM]]
- Rechtsbasis: [[eIDAS]]-Verordnung (EU) Nr. 910/2014
- Ausgabe der Zertifikate durch VDA unter Aufsicht der [[Bundesnetzagentur]]
- Eingebunden in [[Telematikinfrastruktur]]

## Quellen

- [Qualifizierte elektronische Signatur - gematik Fachportal](https://fachportal.gematik.de/anwendungen/qualifizierte-elektronische-signatur)
- [Elektronischer Heilberufsausweis (HBA) - Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/smartcards/elektronischer-heilberufsausweis-hba)
- [eIDAS-Verordnung (EU) Nr. 910/2014 - EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32014R0910)
