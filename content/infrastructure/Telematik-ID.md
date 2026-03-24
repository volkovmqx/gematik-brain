---
title: Telematik-ID
audience: [technical]
tags: [infrastruktur, identitaet, pki, vzd, zertifikat]
aliases: [Telematik-ID, TelematikID, TI-ID]
relevance:
  sectors: [arztpraxis, krankenhaus, zahnarzt, apotheke, pflege, it-dienstleister, ti-infrastruktur]
  interests: [technik, compliance]
maturity: wachsend
---

# Telematik-ID

Die **Telematik-ID** ist der eindeutige Bezeichner, der jedem zugelassenen Teilnehmer der [[Telematikinfrastruktur]] zugeordnet wird und in Zertifikaten, Verzeichniseinträgen und Token-Claims die Identität einer Person oder Einrichtung repräsentiert.

## Erklärt für Einsteiger

Jeder Mensch hat eine Personalausweisnummer, die ihn eindeutig identifiziert. In der digitalen Welt des Gesundheitswesens übernimmt die Telematik-ID diese Funktion: Sie ist eine eindeutige Nummer, die zum Beispiel einem Arzt oder einer Arztpraxis zugewiesen wird. Wenn der Arzt auf die elektronische Patientenakte zugreift, steht in seinem digitalen Ausweis (dem HBA) diese Nummer drin, und das System weiß genau, wer er ist.

## Überblick

Die Telematik-ID wird einmalig vergeben und ist dauerhaft mit einer Person oder Einrichtung verknüpft. Sie ist in den X.509-Zertifikaten von [[HBA]] und [[SMC-B]] enthalten und dient als stabiler Bezeichner über Kartengenerationen hinweg.

Die Vergabe der Telematik-ID erfolgt durch die Kartenherausgeber bei Beantragung des [[HBA]] oder der [[SMC-B]]. Für Ärzte, Zahnärzte und Apotheker sind das die jeweiligen Heilberufskammern. Für Gesundheitsberufe ohne Kammer ist das [[eGBR]]. Für Sonderfälle gibt [[gematik]] die Karten direkt aus. Der Nummernraum für die Präfixe wird von der [[gematik]] verwaltet.

Die Telematik-ID ist nicht identisch mit anderen Identifikatoren im deutschen Gesundheitswesen. Die [[eGK]] eines Patienten trägt keine Telematik-ID, sondern die [[KVNR|Krankenversicherungsnummer (KVNR)]]. Die Telematik-ID identifiziert ausschließlich Leistungserbringer und Einrichtungen.

> [!interesse-compliance]
> Jede Einrichtung und jede Person, die aktiv an der TI teilnimmt, erhält genau eine Telematik-ID. Sie ist in der [[SMC-B]] (Einrichtung) oder im [[HBA]] (Person) fest kodiert. Die Telematik-ID wird nicht direkt beantragt: Sie entsteht automatisch bei Beantragung der Karte bei der zuständigen Kammer oder dem [[eGBR]]. Wer seine Telematik-ID kennen muss: Betreiber von TI-Diensten, die Zugriffsprotokoll-Auswertungen durchführen oder eigene API-Integrationen gegen den [[VZD]] oder [[IDP]] testen.

### Verwendung in der TI

Die Telematik-ID taucht an mehreren Stellen in der TI auf:

- **[[VZD]] (Verzeichnisdienst)**: Jeder LDAP-Eintrag und jeder FHIR-Ressourceneintrag im VZD enthält die Telematik-ID als primären Schlüssel des Teilnehmers.
- **[[IDP]]-Tokens**: Der ID_TOKEN, den der IDP nach erfolgreicher Authentisierung ausstellt, enthält die Telematik-ID als Claim. TI-Fachdienste können so die Identität des anfragenden Heilberuflers prüfen.
- **[[PKI]]-Zertifikate**: Die Telematik-ID ist im X.509-Zertifikat im Feld `SubjectDN` und in der Admission Extension (Feld `registrationNumber` innerhalb von `ProfessionInfo`) kodiert.
- **Audit-Logs**: In der [[ePA]] und anderen Fachdiensten wird der Zugriff mit der Telematik-ID protokolliert.

## Technische Details

### Aufbau

Die Telematik-ID besteht laut gemSpec_PKI aus zwei Teilen:

1. **Sektoraler Präfix**: Identifiziert den Sektor (Berufsgruppe oder Institutionstyp). Jeder Kartenherausgeber (Kammer, eGBR, gematik) erhält einen zugewiesenen Präfix. Die Werte sind in Tab_PKI_101 der gemSpec_PKI normativ festgelegt.
2. **Fortsatz**: Der einrichtungs- oder personenspezifische Teil der ID, der innerhalb des Präfixraums eindeutig ist.

Die Gesamtlänge der Telematik-ID (Präfix, Trennzeichen und Fortsatz) darf 128 Zeichen nicht überschreiten.

### Kodierung im X.509-Zertifikat

Die Telematik-ID wird in nicht-QES-Zertifikaten ([[PKI]]-Typ "nonQES") im X.509-Feld `SubjectSerialNumber` im `SubjectDN` gespeichert. Ergänzend wird sie in der Admission Extension als `registrationNumber` kodiert. Die Admission Extension enthält außerdem die Berufsbezeichnung (`professionOID`), die die Rolle des Karteninhabers (Arzt, Apotheker, Krankenhaus usw.) angibt.

> [!interesse-technik]
> Die Telematik-ID wird in X.509-Zertifikaten im Feld `SubjectSerialNumber` (nonQES) kodiert und erscheint als Claim `idNummer` im ID_TOKEN des [[IDP]]. Beim Parsen von Zertifikaten: Admission Extension OID `1.3.36.8.3.3`, Feld `registrationNumber` innerhalb von `ProfessionInfo`. Normative Definition: gemSpec_PKI, Tab_PKI_101 (Präfixstruktur). VZD-Abfrage per FHIR: `GET /fhir/Practitioner?identifier=https://gematik.de/fhir/sid/telematik-id|<ID>`.

### Präfixstruktur nach Kartentyp

| Kartentyp | Inhaber | Präfixverwaltung |
|---|---|---|
| [[HBA]] | Einzelne Heilberufler | Heilberufskammern / [[eGBR]] |
| [[SMC-B]] | Einrichtungen | Heilberufskammern / [[eGBR]] / [[gematik]] |
| SMC-B (Krankenhaus) | Krankenhäuser | Beginnt mit Präfix 5-2 (laut öffentlicher Dokumentation) |

### Eintrag im VZD

Bei Aktivierung einer [[SMC-B]] werden die Zertifikatsdaten automatisch in den [[VZD]] übertragen. Der VZD-Eintrag enthält die Telematik-ID als primäres Suchattribut. Im LDAP-basierten VZD ist sie ein eigenes Attributfeld. Im VZD-FHIR-Directory wird sie als Identifier in den FHIR-Ressourcen `PractitionerDirectory` und `OrganizationDirectory` gespeichert.

### Telematik-ID in IDP-Tokens

Nach erfolgreicher Authentisierung mit [[HBA]] oder [[SMC-B]] am [[IDP]]-Dienst enthält das ausgestellte `ID_TOKEN` die Telematik-ID als standardisierten Claim. TI-Fachdienste (ePA-Aktensystem, E-Rezept-Fachdienst) werten diesen Claim aus, um Zugriffsentscheidungen zu treffen und Zugriffe zu protokollieren.

## Verknüpfungen

- [[HBA]] (enthält die personenbezogene Telematik-ID des Heilberuflers)
- [[SMC-B]] (enthält die einrichtungsbezogene Telematik-ID)
- [[VZD]] (speichert die Telematik-ID als primären Teilnehmerschlüssel)
- [[IDP]] (übergibt die Telematik-ID als Token-Claim nach Authentisierung)
- [[PKI]] (Telematik-ID ist in X.509-Zertifikaten kodiert)
- [[eGBR]] (gibt Telematik-IDs für Gesundheitsberufe ohne Kammer aus)
- [[gematik]] (verwaltet den Nummernraum der Präfixe)
- [[Telematikinfrastruktur]] (die Telematik-ID ist das zentrale Identitätsmerkmal aller TI-Teilnehmer)
- [[ePA]] (protokolliert Zugriffe anhand der Telematik-ID)

## Quellen

- [gemSpec_PKI - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_PKI/gemSpec_PKI_V2.18.0_Aend/)
- [VZD - Telematik (AKNR)](https://www.aknr.de/telematik/verzeichnisdienst-vzd)
- [TI-Zugang SMC-B - gematik.de](https://www.gematik.de/telematikinfrastruktur/alles-zur-ti-anbindung/wenn-zertifikate-auslaufen/smc-b)
- [gemSpec_VZD - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VZD/latest/)
