---
title: HBA - Heilberufsausweis
audience: [technical, non-technical]
tags: [infrastruktur, hba, karte, identitaet, signatur]
aliases: [HBA, eHBA, Heilberufsausweis, Elektronischer Heilberufsausweis]
---

# HBA - Heilberufsausweis

Der **HBA** (Heilberufsausweis, auch eHBA für elektronischer Heilberufsausweis) ist die persönliche Smartcard für zugelassene Heilberufler in Deutschland. Er dient als digitaler Ausweis und ermöglicht die [[QES|qualifizierte elektronische Signatur]] in der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Stell dir vor, ein Arzt braucht eine Art Personalausweis für das digitale Gesundheitsnetz. Das ist der HBA. Nur wer diesen Ausweis besitzt, darf Rezepte elektronisch unterschreiben, Patientenakten öffnen oder Krankmeldungen digital versenden. Ohne diesen Ausweis ist die Unterschrift nicht rechtsgültig. Es ist wie ein Notarsiegel: Es beweist, dass wirklich ein zugelassener Heilberufler unterschrieben hat.

## Überblick

Der HBA wird an einzelne Personen ausgegeben, nicht an Einrichtungen. Das unterscheidet ihn von der [[SMC-B]], die eine ganze Praxis oder Apotheke repräsentiert. Jeder Arzt, Zahnarzt, Apotheker und Psychotherapeut braucht seinen eigenen HBA.

Die Ausgabe erfolgt über die zuständigen Heilberufskammern:
- Ärzte: Landesärztekammern
- Zahnärzte: Landeszahnärztekammern
- Apotheker: Landesapothekerkammern
- Psychotherapeuten: Landespsychotherapeutenkammern
- Pflegekräfte, Hebammen, Physiotherapeuten: über das elektronische Gesundheitsberuferegister (eGBR)

Für bestimmte Gruppen, zum Beispiel EU-Versandapotheker, ist [[gematik]] direkt der Kartenherausgeber.

Die aktuelle Kartengeneration ist **G2.1**. Sie unterstützt sowohl RSA- als auch ECC-Schlüsselpaare und entspricht den aktuellen Sicherheitsanforderungen der TI-[[PKI]].

### Anwendungen, die den HBA erfordern

- [[E-Rezept]]: Ärzte signieren Verordnungen mit dem HBA
- [[eAU]]: Qualifizierte Signatur der Arbeitsunfähigkeitsbescheinigung
- [[NFDM]]: Lesen und Schreiben der Notfalldaten
- [[ePA]]: Zugriff auf die Patientenakte im Kontext der eigenen Person
- [[KIM]]: Signatur von Nachrichten
- Arztbriefe und Befundberichte

## Technische Details

Der HBA ist eine Smartcard mit kryptografischem Prozessor nach ISO 7816 (kontaktbehaftet). Er enthält mehrere Schlüsselpaare und Zertifikate, die unterschiedliche Funktionen übernehmen.

### Zertifikate auf dem HBA

| Zertifikat | Funktion |
|---|---|
| **C.HP.AUT** | Authentisierung der Person gegenüber TI-Diensten |
| **C.HP.ENC** | Verschlüsselung und Entschlüsselung |
| **C.HP.QES** | Qualifizierte elektronische Signatur (gesetzlich der Handunterschrift gleichgestellt) |
| **C.HP.AUTN** | Nicht-repudiation, Organisationssignatur |

Das QES-Zertifikat (C.HP.QES) ist ein qualifiziertes Zertifikat nach [[eIDAS]]-Verordnung. Es wird von einem zugelassenen Vertrauensdiensteanbieter (VDA) ausgestellt. Die Signaturerstellung erfordert immer die PIN-Eingabe durch den Karteninhaber.

### Einbindung in die TI

Der HBA wird in ein Kartenterminal gesteckt, das am [[Konnektoren|Konnektor]] hängt. Der Konnektor verwaltet die Kommunikation mit der Karte und stellt Signaturdienste für das Primärsystem (Praxissoftware) bereit. Mit TI 2.0 und dem TI-Gateway entfällt die Hardware-Abhängigkeit vom Konnektor.

Die PIN-Eingabe am Kartenterminal ist für jede QES-Signatur Pflicht. Damit wird sichergestellt, dass der Inhaber selbst die Signatur autorisiert.

### Unterschied zu SMC-B

| Merkmal | HBA | [[SMC-B]] |
|---|---|---|
| Inhaber | Einzelne Person | Einrichtung (Praxis, Apotheke) |
| QES | Ja | Nein (nur Organisationssignatur) |
| Ausgeber | Heilberufskammer / gematik | gematik |
| Zertifikatstyp | personenbezogen | einrichtungsbezogen |

## Verknüpfungen

- Gegenstück zur [[SMC-B]] (Institutionskarte)
- Erfordert [[Konnektoren]] oder TI-Gateway für die TI-Anbindung
- Stellt [[QES]] für [[E-Rezept]], [[eAU]], [[NFDM]] bereit
- Zertifikate werden von der TI-[[PKI]] ausgestellt
- Zugang zur [[ePA]] und [[KIM]]
- Eingebunden in die [[Telematikinfrastruktur]]
- Herausgeber: [[gematik]] und Heilberufskammern

## Quellen

- [Elektronischer Heilberufsausweis (HBA) - gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/smartcards/elektronischer-heilberufsausweis-hba)
- [HBA - gematik.de](https://www.gematik.de/telematikinfrastruktur/hba)
- [Kartenherausgabe der gematik - Fachportal](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti/kartenherausgabe-der-gematik)
