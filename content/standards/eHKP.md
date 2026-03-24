---
title: eHKP
audience: [technical, non-technical]
tags: [standards, zahnarzt, kzbv, digitalisierung, ti, hkp]
aliases: [Elektronischer Heil- und Kostenplan, elektronischer HKP, eHeilkostenplan]
relevance:
  sectors: [zahnarzt, kasse, patient, hersteller, it-dienstleister]
  interests: [compliance, technik]
maturity: setzling
---

# eHKP

Der **eHKP (Elektronischer Heil- und Kostenplan)** ist die digitale Weiterentwicklung des zahnärztlichen Heil- und Kostenplans (HKP), der die geplante prothetische Versorgung eines Patienten beschreibt und zur Genehmigung bei der Krankenkasse eingereicht wird.

## Erklärt für Einsteiger

Wenn du zum Zahnarzt gehst und eine Zahnprothese oder Krone brauchst, erstellt der Arzt einen Plan, was gemacht werden soll und was es kostet. Diesen Plan schickst du zur Krankenkasse, die dann entscheidet, wie viel sie davon bezahlt. Bisher lief das meistens auf Papier. Mit dem eHKP läuft dieser Prozess digital: Der Zahnarzt erstellt den Plan direkt am Computer, schickt ihn elektronisch an die Kasse, und du bekommst die Genehmigung schneller zurück.

## Überblick

Der Heil- und Kostenplan ist ein speziell für die Zahnmedizin entwickeltes Formular (Muster KB/P 1), das die geplante prothetische Versorgung dokumentiert. Es enthält den Befund, den Behandlungsplan, die voraussichtlichen Kosten und den Kassenanteil. Rechtliche Grundlage ist § 87 Abs. 1a [[SGB-V|SGB V]] in Verbindung mit dem [[BEMA]].

Der eHKP digitalisiert diesen Prozess und integriert ihn in die [[Telematikinfrastruktur]]. Die Umsetzung liegt bei der [[KZBV]] (Kassenzahnärztliche Bundesvereinigung) als Träger des zahnärztlichen Abrechnungssystems.

### Rechtliche Grundlage und Einführungspfad

Der eHKP wurde durch das [[E-Health-Gesetz]] von 2015 als digitales Ziel formuliert. Die konkrete Spezifikation und der Rollout wurden von der [[KZBV]] in Abstimmung mit der [[gematik]] und dem GKV-Spitzenverband vorangetrieben.

Ab 2025 soll der eHKP für alle Zahnarztpraxen verpflichtend in den zugehörigen Praxisverwaltungssystemen (ZZVS) verfügbar sein. Der eHKP löst den papiergebundenen HKP ab, der bisher postalisch oder per Fax an die Krankenkassen übermittelt wurde.

> [!interesse-compliance]
> Zahnarztpraxen sind verpflichtet, ein für die TI zugelassenes Praxisverwaltungssystem (ZZVS) zu nutzen, das den eHKP-Workflow unterstützt. Die [[KZBV]] hat die Anforderungen an ZZVS-Systeme in ihren technischen Richtlinien festgelegt. Praxen, die noch keine eHKP-fähigen Systeme nutzen, sollten beim ZZVS-Hersteller nachfragen, wann das Update verfügbar ist. Die Einreichung auf Papier wird schrittweise eingestellt.

> [!frist-warnung] Frist-Warnung: eHKP-Pflicht und Ausschluss des Papierwegs
> **Rechtsgrundlage:** § 87 Abs. 1a SGB V i.V.m. den Bundesmantelvertrag Zahnärzte (BMV-Z) in der Fassung der KZBV-/GKV-Spitzenverband-Vereinbarung zum Elektronischen Beantragungs- und Genehmigungsverfahren (EBZ)
> **Frist:** Seit 1. Januar 2023 ist das EBZ-Verfahren für Zahnarztpraxen verpflichtend. Seit Beginn 2025 akzeptieren die gesetzlichen Krankenkassen ausschließlich elektronische HKPs. Die papierbasierte Einreichung ist eingestellt.
> **Handlungsbedarf:** Zahnarztpraxen ohne EBZ-fähiges Praxisverwaltungssystem (ZZVS) müssen unverzüglich ein Update beim ZZVS-Hersteller beauftragen. Voraussetzungen: aktive TI-Anbindung mit eHealth-Konnektor (Version PTV3 oder höher), gültige SMC-B, eingerichteter KIM-Account und KIM-Clientmodul im ZZVS. Praxen, die die TI-Anforderungen nicht erfüllen, können prothetische GKV-Leistungen nicht abrechnen.
> **Bei Nichtbeachtung:** Krankenkassen lehnen papierbasierte HKP-Einreichungen ab. Ohne Genehmigung per eHKP sind prothetische Behandlungen nicht über die GKV abrechenbar. Retaxationen für bereits begonnene Behandlungen ohne gültige elektronische Genehmigung sind möglich.

### Abgrenzung zum HKP-Papierformular

Der klassische Heil- und Kostenplan (Muster KB/P 1) ist:
- Ein standardisiertes Papierformular
- Manuell vom Zahnarzt ausgefüllt
- Vom Patienten per Post oder Fax an die Kasse geschickt
- Mit langen Bearbeitungszeiten verbunden (oft 4–6 Wochen für Genehmigung)

Der eHKP:
- Wird direkt im ZZVS erstellt
- Enthält strukturierte Daten in einem definierten elektronischen Format
- Wird über die [[Telematikinfrastruktur]] an die Kasse übermittelt
- Ermöglicht schnellere Genehmigungsverfahren

> [!praxis-tipp] Praxis-Tipp: eHKP-Versand vorbereiten
> In Ihrer Zahnarztpraxis bedeutet das: Der eHKP ersetzt den Papierweg komplett. Die Genehmigung der Kasse kommt als KIM-Nachricht zurück, nicht mehr per Post.
>
> Voraussetzungen prüfen:
> 1. ZZVS auf aktuelle Version prüfen: Fragen Sie Ihren Softwareanbieter, ob der eHKP-Workflow freigeschaltet ist
> 2. KIM-Account aktiv? Ohne KIM kann Ihr ZZVS keinen eHKP versenden
> 3. SMC-B im Konnektor gültig? Ablaufdatum prüfen (Karte regelmäßig im Konnektor sichtbar)
> 4. KIM-Adresse der Krankenkasse im VZD nachschlagen: Das ZZVS macht das in der Regel automatisch
>
> Zeitvorteil: Genehmigungen kommen oft in 1–2 Wochen statt 4–6 Wochen auf Papier.

## Technische Details

### Datenformat und Übertragungsweg

Der eHKP basiert auf einem elektronischen Datenformat, das von der [[KZBV]] und der [[gematik]] gemeinsam spezifiziert wurde. Der Übertragungsweg nutzt [[KIM]] (Kommunikation im Medizinwesen) als sicheren Nachrichtenkanal zwischen Zahnarztpraxis und Krankenkasse.

Die technische Spezifikation des eHKP orientiert sich an bestehenden Formaten für den elektronischen Datenaustausch im zahnärztlichen Bereich und baut auf dem **xDT-Format** ([[xDT]]) auf, das im ambulanten Bereich für den Datenaustausch zwischen Praxissystem und Labor eingesetzt wird.

> [!dev-quickstart] Dev Quickstart: eHKP via KIM versenden (EBZ-Workflow)
> Das ZZVS sendet den eHKP als KIM-Nachricht mit spezifischer Dienstkennung:
> - **KIM-Dienstkennung**: `urn:gematik:ebz:hkp:1` (EBZ Heil- und Kostenplan)
> - **Transport**: MIME/S-MIME über KIM-Clientmodul (SMTPS Port 587 + IMAPS Port 995 gegen KIM-Fachdienst)
> - **Nutzdaten**: XML-Anlage nach EBZ-Schema (Technische Anlage EBZ v2.0)
> - **Signatur**: QES via SMC-B (X.509, S/MIME `multipart/signed`)
>
> KIM-Adresse der Krankenkasse per VZD-LDAP ermitteln:
> ```bash
> ldapsearch -H ldaps://vzd.ti-dienste.de:636 \
>   -b "ou=organizations,dc=vzd,dc=ti-dienste,dc=de" \
>   "(organizationIdentifier=<IK-Nummer der Kasse>)" mail
> ```
> Rückantwort (Genehmigung/Ablehnung) kommt als KIM-Nachricht mit Dienstkennung `urn:gematik:ebz:hkp-genehmigung:1`.
> - Technische Anlage EBZ v2.0: [GKV-Datenaustausch (PDF)](https://www.gkv-datenaustausch.de/media/dokumente/leistungserbringer_1/zahnaerzte/elektronische_beantragungs__und_genehmigungsverfahren/technische_anlagen_archiv_7/20240524_TA_EBZ_v2.0_oA.pdf)
> - FHIR App-Transport-Framework (KIM/TIM): [gematik/api-app-transport-framework](https://github.com/gematik/api-app-transport-framework)
> - Dienstkennungen-Übersicht: [gematik Fachportal](https://fachportal.gematik.de/toolkit/dienstkennung-kim-kom-le)

> [!interesse-technik]
> Der eHKP wird über [[KIM]] übertragen. Das ZZVS erstellt einen strukturierten Datensatz (elektronisches HKP-Formular) und sendet ihn als KIM-Nachricht an die Krankenkasse. Die Krankenkasse bestätigt oder genehmigt den Plan ebenfalls über KIM. Zahnarztpraxen müssen für den eHKP-Workflow: (1) eine gültige [[SMC-B]] haben (Einrichtungsauthentisierung), (2) einen KIM-Account eingerichtet haben, (3) ein KZBV-zertifiziertes ZZVS nutzen. Spezifikationen: KZBV technische Richtlinien und gematik-Fachdienst-Spezifikation KIM.

### Integration in die TI-Anbindung der Zahnarztpraxis

Der eHKP nutzt dieselbe TI-Infrastruktur, die Zahnarztpraxen bereits für andere TI-Anwendungen nutzen:

- **[[SMC-B]]**: Für die Authentisierung der Einrichtung
- **[[KIM]]**: Als Übertragungskanal für strukturierte Nachrichten
- **[[VZD]]**: Für die Adressierung der Krankenkasse im Verzeichnisdienst

Für die eHKP-Einführung benötigen Zahnarztpraxen keine zusätzliche Hardware, wenn sie bereits vollständig an die TI angebunden sind. Das ZZVS muss jedoch ein entsprechendes Update erhalten.

> [!frist-warnung] Frist-Warnung: SMC-B-Ablauf und KIM-Vertragspflicht
> **Rechtsgrundlage:** § 340 Abs. 6 SGB V (TI-Anbindungspflicht für Zahnarztpraxen), § 363 Abs. 1 SGB V (KIM-Nutzungspflicht), Bundesmantelvertrag Zahnärzte (BMV-Z) Anlage 13
> **Dauerpflicht:** Die SMC-B (Institutionskarte) der Zahnarztpraxis muss zu jedem Zeitpunkt gültig sein. Abgelaufene Karten sperren den eHKP-Versand und alle weiteren TI-Dienste. KIM-Verträge mit einem zugelassenen KIM-Anbieter müssen aktiv sein; ohne KIM-Account ist die EBZ-Pflicht nicht erfüllbar.
> **Handlungsbedarf:** Die verantwortliche Stelle hat das Ablaufdatum der SMC-B mindestens 12 Wochen vor Ablauf zu prüfen und eine Erneuerungskarte beim zuständigen Kartenherausgeber zu beantragen. KIM-Konten sind regelmäßig auf Gültigkeit zu prüfen. Bei einem ZZVS-Wechsel muss der KIM-Account auf das neue System migriert werden, bevor der eHKP-Workflow unterbrochen wird.
> **Bei Nichtbeachtung:** Ohne gültige SMC-B oder aktiven KIM-Account können keine eHKPs übermittelt werden. Prothetische GKV-Leistungen sind ohne elektronische Genehmigung nicht abrechenbar. Im Wiederholungsfall können Vertragsstrafen nach BMV-Z geltend gemacht werden.

### Genehmigungsworkflow

```
1. Zahnarzt erstellt eHKP im ZZVS (Befund, Behandlungsplan, Kostenkalkulation)
2. ZZVS überträgt eHKP als KIM-Nachricht an die Krankenkasse
3. Krankenkasse prüft eHKP (ggf. Rückfragen oder Anforderung weiterer Unterlagen)
4. Krankenkasse erteilt Genehmigung oder Ablehnung als KIM-Antwort
5. ZZVS speichert Genehmigung und informiert die Praxis
6. Zahnarzt beginnt die prothetische Behandlung
```

> [!dev-quickstart] Dev Quickstart: KIM-Nachricht für eHKP aufbauen (SMTPS)
> Das ZZVS sendet den eHKP über das KIM-Clientmodul per SMTPS (Port 587, STARTTLS) an den KIM-Fachdienst:
> ```
> MAIL FROM: <zahnarzt@praxis.kim.telematik>
> RCPT TO:   <hkp-eingang@krankenkasse.kim.telematik>
> ```
> Nachrichtenstruktur (RFC 5751 S/MIME):
> ```
> Content-Type: multipart/signed; protocol="application/pkcs7-signature"
>
>   --boundary
>   Content-Type: message/rfc822
>   X-KIM-Dienstkennung: urn:gematik:ebz:hkp:1
>
>     Content-Type: application/xml; name="hkp.xml"
>     Content-Disposition: attachment; filename="hkp.xml"
>     [EBZ-XML-Nutzdaten nach Technischer Anlage EBZ v2.0]
>
>   --boundary
>   Content-Type: application/pkcs7-signature
>   [S/MIME-Signatur mit SMC-B X.509-Zertifikat]
> ```
> - KIM-Clientmodul-API (lokaler SMTP/IMAP-Proxy): `localhost:1025` (SMTP) / `localhost:1143` (IMAP) standardmäßig
> - Alle KIM-Dienstkennungen: [gematik Fachportal](https://fachportal.gematik.de/toolkit/dienstkennung-kim-kom-le)
> - KIM-Spezifikation: [gemSpec_KIM](https://gemspec.gematik.de/docs/gemSpec/gemSpec_KIM/latest/)
> - App-Transport-Framework (Nachrichtenformat): [gematik/api-app-transport-framework](https://github.com/gematik/api-app-transport-framework)

> [!praxis-tipp] Praxis-Tipp: KIM-Posteingang täglich prüfen
> Die Genehmigung der Kasse landet als KIM-Nachricht in Ihrem ZZVS. Prüfen Sie den KIM-Posteingang täglich, sonst verzögert sich der Behandlungsstart.
>
> Häufiger Fehler: Das Team wartet auf den Postboten, obwohl die Genehmigung schon als KIM-Nachricht im ZZVS liegt. Legen Sie im Team fest, wer täglich den KIM-Eingang kontrolliert.
>
> Wichtig für Ihre Patienten: Beginnen Sie die prothetische Behandlung erst nach Eingang der Genehmigung. Ohne Genehmigung trägt der Patient das volle Kostenrisiko.

## Verknüpfungen

- [[BEMA]] (Gebührenordnung für zahnärztliche Leistungen: Abrechnungsgrundlage zum HKP)
- [[KZBV]] (Kassenzahnärztliche Bundesvereinigung: Träger und Spezifikation des eHKP)
- [[KIM]] (Kommunikationsweg für die elektronische HKP-Übertragung)
- [[SMC-B]] (Authentisierung der Zahnarztpraxis in der TI)
- [[SGB-V]] (§ 87 SGB V: Rechtsgrundlage für zahnärztlichen Heil- und Kostenplan)
- [[E-Health-Gesetz]] (formulierte eHKP als digitales Ziel)
- [[gematik]] (definiert TI-Anforderungen für den eHKP-Workflow)
- [[VZD]] (Verzeichnisdienst: Adressierung der Krankenkasse)
- [[xDT]] (Datenaustauschformat im ambulanten Bereich)

## Quellen

- [KZBV – Kassenzahnärztliche Bundesvereinigung (Träger des eHKP/EBZ-Verfahrens)](https://www.kzbv.de)
- [§ 87 SGB V – Gesetze im Internet](https://www.gesetze-im-internet.de/sgb_5/__87.html)
- [gematik: KIM – Kommunikation im Medizinwesen](https://www.gematik.de/anwendungen/kim)
- [Wikipedia: Heil- und Kostenplan](https://de.wikipedia.org/wiki/Heil-_und_Kostenplan)
