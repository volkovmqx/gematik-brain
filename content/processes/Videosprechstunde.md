---
title: Videosprechstunde
audience: [technical, non-technical]
tags: [processes, telemedizin, videokonsultation, ebm, digig, bundesmantelvertrag]
aliases: [Videokonsultation, Online-Sprechstunde, Telekonsultation]
relevance:
  sectors: [arztpraxis, krankenhaus, psychotherapie, patient, kasse, hersteller, it-dienstleister]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# Videosprechstunde

Die **Videosprechstunde** ist eine telemedizinische Versorgungsform, bei der Arzt und Patient über eine zertifizierte Videoverbindung kommunizieren, ohne dass der Patient die Praxis aufsuchen muss.

## Erklärt für Einsteiger

Statt in die Arztpraxis zu gehen und im Wartezimmer zu sitzen, schaust du einfach auf deinem Smartphone oder Computer in eine Videoanruf-App. Die Ärztin sieht dich, du siehst sie, und sie kann viele Fragen beantworten, Ergebnisse besprechen oder Medikamente verschreiben, ohne dass du rausgehen musst. Das ist besonders praktisch bei Erkältungen, wenn du andere anstecken könntest, oder wenn du weit von der Praxis wohnst.

## Überblick

Die Videosprechstunde ist seit 2017 im deutschen Vertragsarztrecht verankert. Rechtsgrundlage ist die **Anlage 31b zum [[Bundesmantelvertrag]]-Ärzte (BMV-Ä)**, die die technischen und datenschutzrechtlichen Anforderungen an Videosprechstundensysteme festlegt.

Vertragsärzte benötigen für das Angebot von Videosprechstunden eine Genehmigung der zuständigen [[Kassenärztliche-Vereinigung|Kassenärztlichen Vereinigung (KV)]]. Die Abrechnung erfolgt über den [[EBM]] (Einheitlicher Bewertungsmaßstab) durch die KV.

### Mengenbeschränkungen und ihre Entwicklung

Die Mengenbeschränkungen für Videosprechstunden wurden schrittweise gelockert:

- Bis März 2024: Maximale Obergrenze von 30 Prozent der Behandlungsfälle pro Quartal (§ 87 Abs. 2a Satz 30 [[SGB-V]])
- Ab 26. März 2024 ([[DigiG]]): Die 30-Prozent-Begrenzung für einzelne EBM-Leistungen wurde aufgehoben
- Ab 1. April 2025: Bis zu 50 Prozent der Behandlungsfälle können bei bekannten Patienten im Rahmen von Videosprechstunden abgerechnet werden

### Assistierte Telemedizin

Das [[DigiG]] (2024) führte die **assistierte Telemedizin** ein: Patienten ohne eigenes Smartphone oder ohne ausreichende digitale Kompetenz können Videosprechstunden künftig auch aus Apotheken heraus durchführen. Apotheken stellen dafür einen Videoarbeitsplatz bereit. Diese Form war 2025/2026 noch in der Einführungsphase.

> [!interesse-compliance] Anforderungen für Praxen
> Videosprechstunden sind nur mit zertifizierten Anbietern erlaubt, die auf einer KBV-Liste geführt werden. Voraussetzungen: Genehmigung durch die zuständige [[Kassenärztliche-Vereinigung|KV]], zertifizierter Videodienst, DSGVO-konformer Auftragsverarbeitungsvertrag mit dem Anbieter. Seit EBM 2025 wurden die abrechenbaren Leistungen erweitert. Die Anlage 31b BMV-Ä ist die maßgebliche Rechtsquelle.

## Technische Details

### Zertifizierung von Videodiensten

Videodienste für die Videosprechstunde müssen von der [[KBV]] und dem [[GKV-Spitzenverband]] gemeinsam zugelassen sein. Die Anforderungen sind in der Anlage 31b BMV-Ä definiert:

- Ende-zu-Ende-Verschlüsselung der Videoübertragung
- Peer-to-Peer-Verbindung zwischen Arzt und Patient (kein dauerhafter Serverspeicher)
- Kein Routing über Serverinfrastrukturen außerhalb der EU
- Identitätsprüfung des Patienten (durch Vorlage des Ausweises per Video oder durch [[eGK]]/[[Gesundheits-ID]])
- Barrierefreiheit

Anbieter, die diese Anforderungen erfüllen, werden in einer öffentlichen Liste der [[KBV]] geführt (Stand 2026: ca. 25 zugelassene Dienste, darunter Doctolib, Samedi, arztkonsultation.de, TeleClinic und andere).

> [!interesse-technik] Technische Spezifikation
> Die Anlage 31b BMV-Ä ist unter [gkv-spitzenverband.de](https://www.gkv-spitzenverband.de/krankenversicherung/aerztliche_versorgung/bundesmantelvertrag/anlagen_zum_bundesmantelvertrag/einzelne_anlagen_zum_bmv/bmv_anlage_31b_videosprechstunde.jsp) verfügbar. Für die Übertragung ist eine Peer-to-Peer-Verbindung Standard; bei Abweichung sind gleichwertige TOMs nach Art. 32 [[DSGVO]] nachzuweisen. Perspektivisch ist eine Integration mit dem [[TI-Messenger]] als Kommunikationskanal denkbar.

### EBM-Abrechnung

Videosprechstunden werden über den [[EBM]] abgerechnet. Abrechnungsfähige Leistungen umfassen unter anderem:

- Technikzuschlag Videosprechstunde (GOP 01450 EBM, 40 Punkte, Höchstwert 700 Punkte/Quartal)
- Abrechnung über die fachgruppenspezifische Versicherten-, Grund- oder Konsiliarpauschale (kein eigener Kontaktzuschlag mehr seit Oktober 2019)
- Authentifizierungszuschlag für unbekannte Patienten (GOP 01444 EBM, 10 Punkte, befristet bis 31. Dezember 2026)
- Fachgruppenspezifische Videosprechstundenpauschalen (z.B. psychiatrische Videokonsultation, psychotherapeutische Videositzung)
- Ab 1. April 2025: Zuschlag für ausschließlich per Video behandelte Bestandspatienten (GOP 01452 EBM, 30 Punkte)

Ab 2025 wurden im Rahmen des EBM 2025 weitere Leistungen für Videosprechstunden geöffnet und die Vergütungssätze angepasst.

### Datenschutz und DSGVO

Videosprechstunden verarbeiten Gesundheitsdaten nach Art. 9 [[DSGVO]]. Praxen müssen:

- Einen Auftragsverarbeitungsvertrag (AVV) mit dem Videoanbieter abschließen
- Patienten vorab über die Datenverarbeitung informieren
- Einwilligung des Patienten dokumentieren
- Sicherstellen, dass keine Videodaten dauerhaft gespeichert werden

### Abgrenzung zur Teleradiologie

Die [[Teleradiologie]] ist ein verwandter, aber eigenständiger Bereich der Telemedizin. Während die Videosprechstunde die direkte Arzt-Patienten-Kommunikation betrifft, geht es bei der Teleradiologie um die ferndiagnostische Befundung von Bilddaten durch Radiologen.

## Verknüpfungen

- [[Telemedizin]] (Oberbegriff; Videosprechstunde ist ein Teilbereich)
- [[Bundesmantelvertrag]] (Anlage 31b: Rechtsgrundlage der Videosprechstunde)
- [[EBM]] (Abrechnungsregelwerk für Videosprechstunden)
- [[DigiG]] (Aufhebung der 30%-Mengenbeschränkung; assistierte Telemedizin)
- [[SGB-V]] (§ 87 Abs. 2a SGB V: frühere Mengenbegrenzung)
- [[KBV]] (Zulassung von Videodiensten; EBM-Entwicklung)
- [[GKV-Spitzenverband]] (Ko-Herausgeber der Anlage 31b BMV-Ä)
- [[Kassenärztliche-Vereinigung]] (erteilt Genehmigung für Videosprechstunden)
- [[DSGVO]] (Datenschutzrahmen für Videosprechstunden)
- [[G-BA]] (hat Telemedizin in den GKV-Leistungskatalog aufgenommen)
- [[Teleradiologie]] (verwandter Bereich der Telemedizin)
- [[TI-Messenger]] (künftiger Kommunikationskanal für Telemedizin)

## Quellen

- [GKV-Spitzenverband: Anlage 31b BMV-Ä (Videosprechstunde)](https://www.gkv-spitzenverband.de/krankenversicherung/aerztliche_versorgung/bundesmantelvertrag/anlagen_zum_bundesmantelvertrag/einzelne_anlagen_zum_bmv/bmv_anlage_31b_videosprechstunde.jsp)
- [KV Nordrhein: EBM-Anpassungen Videosprechstunde 2024](https://www.kvno.de/aktuelles/aktuelles-detail/nachricht/verordnungen-per-videosprechstunde-ebm-wird-zum-1-januar-2024-angepasst)
- [Ärztezeitung: EBM 2025 – Verbesserungen bei der Videosprechstunde](https://www.iww.de/aaa/kassenabrechnung/ebm-2025-deutliche-verbesserungen-bei-der-videosprechstunde-f166466)
- [Wikipedia: Videosprechstunde](https://de.wikipedia.org/wiki/Videosprechstunde)
