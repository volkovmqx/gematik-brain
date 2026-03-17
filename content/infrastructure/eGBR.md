---
title: eGBR - Elektronisches Gesundheitsberuferegister
audience: [technical, non-technical]
tags: [infrastruktur, identitaet, hba, smcb, register]
aliases: [eGBR, Elektronisches Gesundheitsberuferegister, Gesundheitsberuferegister]
---

# eGBR - Elektronisches Gesundheitsberuferegister

Das **eGBR (Elektronisches Gesundheitsberuferegister)** ist die zentrale Stelle der Bundesländer, die elektronische Heilberufsausweise ([[HBA]]) und Institutionskarten ([[SMC-B]]) an Gesundheitsberufe ausgibt, die keine eigene Kammer haben.

## Erklärt für Einsteiger

Ärzte bekommen ihren digitalen Ausweis (den HBA) von ihrer Ärztekammer. Pflegekräfte und Hebammen haben aber keine solche Kammer. Das eGBR ist die Stelle, die diesen Berufsgruppen trotzdem einen digitalen Ausweis ausstellt, damit auch sie das digitale Gesundheitsnetz nutzen können. Ohne diesen Ausweis könnten Pflegekräfte zum Beispiel keine elektronische Patientenakte einsehen.

## Überblick

Das eGBR wurde gegründet, weil die [[Telematikinfrastruktur]] für alle Leistungserbringer im Gesundheitswesen zugänglich sein soll. Zugelassene Heilberufskammern (Ärzte, Zahnärzte, Apotheker, Psychotherapeuten) geben HBA und SMC-B über ihre Landesorganisationen aus. Für Berufsgruppen ohne eigene Kammer übernimmt das eGBR diese Aufgabe bundesweit zentral.

Das eGBR ist als **gemeinsame Stelle der Bundesländer** bei der Bezirksregierung Münster in Nordrhein-Westfalen angesiedelt. Die Rechtsgrundlage bilden der eGBR-Staatsvertrag der Länder, die eGBR-Gebührenordnung (eGBR-GebO) und das [[SGB V]].

### Berufsgruppen

Das eGBR ist zuständig für Berufsgruppen, die zwar ärztlich verordnete Leistungen erbringen, aber keine eigene Körperschaft zur Kartenausgabe haben:

- Pflegefachkräfte
- Hebammen
- Physiotherapeuten und Masseure
- Logopäden und Ergotherapeuten
- Diätassistenten
- Notfallsanitäter
- Weitere Heilmittelerbringer

### Ausgestellte Karten

Das eGBR gibt zwei Kartentypen aus:

1. **eHBA (elektronischer Heilberufsausweis)**: Personenbezogene Chipkarte. Ermöglicht Authentisierung und die Erstellung rechtsgültiger digitaler Signaturen. Voraussetzung für den TI-Zugang als individuelle Fachkraft.
2. **SMC-B (Security Module Card Typ B)**: Einrichtungsbezogene Karte für Institutionen wie Pflegeeinrichtungen. Setzt voraus, dass bereits ein eHBA in der Einrichtung vorhanden ist.

Mit diesen Karten erhalten die Angehörigen der genannten Berufe Zugang zu TI-Anwendungen wie [[ePA]], [[E-Rezept]] und [[NFDM]].

## Technische Details

### Verifikationsprozess

Das eGBR arbeitet mit rund 1.500 **bestätigenden Stellen** zusammen. Diese Stellen prüfen die berufliche Qualifikation der Antragsteller und bestätigen die Berechtigung zur Kartenausgabe. Approbation ist für diese Berufsgruppen keine Voraussetzung, jedoch muss die berufliche Zulassung nachgewiesen werden.

### Technische Einbindung in die TI

Die vom eGBR ausgestellten Karten entsprechen denselben technischen Standards wie HBA und SMC-B der Heilberufskammern. Sie enthalten X.509-Zertifikate der TI-[[PKI]] mit:

- Authentisierungszertifikat (C.HP.AUT für eHBA, C.HCI.AUT für SMC-B)
- Verschlüsselungszertifikat
- Organisationssignaturzertifikat (SMC-B)
- QES-Zertifikat (nur eHBA, nach [[eIDAS]])

Die [[Telematik-ID]] im Zertifikat identifiziert den Karteninhaber eindeutig in der TI. Der Eintrag im [[VZD]] (Verzeichnisdienst) wird bei SMC-B-Aktivierung automatisch angelegt.

Die Karten werden in ein Kartenterminal gesteckt, das am [[Konnektoren|Konnektor]] oder TI-Gateway hängt. So können die betreffenden Berufsgruppen TI-Dienste wie die [[ePA]] genau wie Ärzte oder Apotheker nutzen.

### Abgrenzung zu gematik als Herausgeber

Die [[gematik]] gibt HBA und SMC-B direkt für Sonderfälle aus (zum Beispiel EU-Versandapotheken ohne deutschen Kammeranschluss). Das eGBR hingegen ist für die oben genannten Gesundheitsberufe ohne Kammer zuständig und agiert als eigenständige Behörde der Länder.

## Verknüpfungen

- [[HBA]] (der eHBA ist das zentrale Produkt des eGBR)
- [[SMC-B]] (Institutionskarte, ebenfalls vom eGBR ausgegeben)
- [[PKI]] (Zertifikatsinfrastruktur, in die eGBR-Karten eingebunden sind)
- [[Telematik-ID]] (eindeutiger Bezeichner im eGBR-Zertifikat)
- [[VZD]] (Eintrag wird bei SMC-B-Aktivierung automatisch angelegt)
- [[Telematikinfrastruktur]] (Zugang zu TI-Diensten ist das Ziel der eGBR-Karten)
- [[ePA]] (TI-Anwendung, auf die eGBR-Inhaber Zugriff erhalten)
- [[eIDAS]] (Rechtsrahmen für QES-Zertifikate auf dem eHBA)
- [[gematik]] (spezifiziert die technischen Anforderungen an die Karten)
- [[SGB V]] (rechtliche Grundlage für den Kartenanspruch)

## Quellen

- [Elektronisches Gesundheitsberuferegister - Bezirksregierung Münster](https://www.bezreg-muenster.de/themen/gesundheit-und-soziales/elektronisches-gesundheitsberuferegister-egbr)
- [Was ist das eGBR? - healthcare-digital.de](https://www.healthcare-digital.de/was-ist-das-elektronische-gesundheitsberuferegister-egbr-a-1107266/)
- [eHBA für Gesundheitsberufe (eGBR) - ehba.de](https://www.ehba.de/egbr/)
- [Elektronisches Gesundheitsberuferegister - HLfGP Hessen](https://hlfgp.hessen.de/gesundheitsfachberufe/elektronisches-gesundheitsberuferegister)
