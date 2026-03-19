---
title: HBA - Heilberufsausweis
audience: [technical, non-technical]
tags: [infrastruktur, hba, karte, identitaet, signatur]
aliases: [HBA, eHBA, Heilberufsausweis, Elektronischer Heilberufsausweis]
relevance:
  sectors: [arztpraxis, zahnarzt, psychotherapie, apotheke, ti-infrastruktur, hersteller]
  interests: [compliance, technik]
---

# HBA - Heilberufsausweis

Der **HBA** (Heilberufsausweis, auch eHBA für elektronischer Heilberufsausweis) ist die persönliche Smartcard für zugelassene Heilberufler in Deutschland. Er dient als digitaler Ausweis und ermöglicht die [[QES|qualifizierte elektronische Signatur]] in der [[Telematikinfrastruktur]].

## Erklärt für Einsteiger

Stell dir vor, ein Arzt braucht eine Art Personalausweis für das digitale Gesundheitsnetz. Das ist der HBA. Nur wer diesen Ausweis besitzt, darf Rezepte elektronisch unterschreiben, Patientenakten öffnen oder Krankmeldungen digital versenden. Ohne diesen Ausweis ist die Unterschrift nicht rechtsgültig. Es ist wie ein Notarsiegel: Es beweist, dass wirklich ein zugelassener Heilberufler unterschrieben hat.

## Überblick

Der HBA wird an einzelne Personen ausgegeben, nicht an Einrichtungen. Das unterscheidet ihn von der [[SMC-B]], die eine ganze Praxis oder Apotheke repräsentiert. Jeder Arzt, Zahnarzt, Apotheker und Psychotherapeut braucht seinen eigenen HBA.

Die Ausgabe erfolgt über die zuständigen Heilberufskammern:
- Ärzte: [[Landesaerztekammer|Landesärztekammern]]
- Zahnärzte: Landeszahnärztekammern
- Apotheker: Landesapothekerkammern
- Psychotherapeuten: Landespsychotherapeutenkammern
- Pflegekräfte, Hebammen, Physiotherapeuten: über das [[eGBR|elektronische Gesundheitsberuferegister (eGBR)]]

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

### ECC-Migration und Übergangsfrist

Die Vorgängergeneration **G2.0** unterstützte ausschließlich RSA. Die TI-weite [[ECC-Migration]] sieht den Wechsel von G2.0 (RSA) auf G2.1 (ECC) bis zum **30. Juni 2026** vor. Über 30.000 eHBAs müssen noch ausgetauscht werden.

Ab **1. Januar 2026** dürfen Kartenherausgeber nur noch ECC-fähige Karten produzieren. Ausnahme: Telekom-Kunden sind von der Übergangsfrist ausgenommen, da für dieses Segment die Migration bereits früher abgeschlossen wurde.

### EUCLEAK-Sicherheitslücke (CVE-2024-45678)

Im Infineon-Chip **SLE78** wurde die Sicherheitslücke EUCLEAK (CVE-2024-45678) entdeckt. Betroffen sind rund **130.000 eHBAs** der Anbieter D-Trust und SHC+Care, die auf diesem Chip basieren. Diese Karten müssen bis zum **30. Juni 2026** ausgetauscht werden. Nach diesem Datum werden die betroffenen Karten in der TI gesperrt.

D-Trust liefert Ersatzkarten auf Basis von G&D-Chips seit Februar 2026 aus. Ein Angriff über EUCLEAK erfordert physischen Kartenzugang, Kenntnis der PIN und Spezialausrüstung. Das Risiko eines Missbrauchs im Alltag wird daher als gering eingestuft, aber der Austausch ist aus regulatorischen Gründen verpflichtend.

Separat lieferte medisign im Januar 2026 rund **2.600 ECC-only-eHBAs** mit fehlerhafter Personalisierung aus. Die [[gematik]] verpflichtete medisign zum Austausch der betroffenen Karten.

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
- Herausgeber: [[gematik]], Heilberufskammern und [[eGBR]]
- Enthält die [[Telematik-ID]] des Inhabers im Zertifikat

## Quellen

- [Elektronischer Heilberufsausweis (HBA) - gematik Fachportal](https://fachportal.gematik.de/telematikinfrastruktur/smartcards/elektronischer-heilberufsausweis-hba)
- [HBA - gematik.de](https://www.gematik.de/telematikinfrastruktur/hba)
- [Kartenherausgabe der gematik - Fachportal](https://fachportal.gematik.de/schnelleinstieg/smartcards-und-identitaeten-in-der-ti/kartenherausgabe-der-gematik)
