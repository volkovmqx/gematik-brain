---
title: Telemedizin
audience: [technical, non-technical]
tags: [konzepte, fernbehandlung, videosprechstunde, digitalisierung]
aliases: [Fernbehandlung, Videosprechstunde, Telemonitoring, assistierte Telemedizin]
---

# Telemedizin

Telemedizin bezeichnet medizinische Leistungen, bei denen Arzt und Patient räumlich getrennt sind und die Kommunikation über digitale Kanäle (Video, Telefon, Datenübertragung) stattfindet.

## Erklärt für Einsteiger

Früher musste man für jeden Arztbesuch persönlich in die Praxis fahren. Bei der Telemedizin spricht man mit dem Arzt per Video auf dem Smartphone oder Computer, ähnlich wie ein Videoanruf mit Freunden. Der Arzt kann so Fragen beantworten, Befunde besprechen oder eine Krankschreibung ausstellen, ohne dass man die Wohnung verlassen muss. Das spart Zeit und ist besonders praktisch für Menschen auf dem Land oder mit eingeschränkter Mobilität.

## Überblick

Telemedizin umfasst mehrere Versorgungsformen. Die wichtigsten sind:

- **[[Videosprechstunde]]**: Synchrone Echtzeit-Konsultation per zertifizierter Videoverbindung
- **Fernbehandlung (allgemein)**: Diagnostik und Beratung ohne persönlichen Erstkontakt
- **Telemonitoring**: Kontinuierliche Übertragung von Messwerten (z.B. Herzfrequenz, Blutzucker) chronisch Kranker
- **Teleradiologie**: Fernbefundung von Röntgen-, MRT- und CT-Aufnahmen durch Radiologen

Bis 2018 galt in Deutschland ein weitgehendes **Fernbehandlungsverbot**: Ärzte durften Patienten, die sie nicht persönlich kannten, nicht ausschließlich per Fernkommunikation behandeln. Der 121. Deutsche Ärztetag hob dieses Verbot auf und erlaubte die reine Fernbehandlung, wenn sie medizinisch vertretbar ist und die ärztliche Sorgfalt gewahrt bleibt.

Das [[DigiG]] von 2024 hob die bisherigen Mengenbeschränkungen für Videosprechstunden in der Kassenärztlichen Versorgung auf. Außerdem führte es die **assistierte Telemedizin** ein: Apotheken können Versicherten kostenlos bei Videosprechstunden unterstützen.

Der KBV-Patientenservice 116117 vermittelt seit 2025 telemedizinische Leistungen nach § 370a [[SGB-V]].

## Technische Details

### Zertifizierte Videodienstanbieter

Für die Abrechnung telemedizinischer Leistungen in der [[GKV]] müssen Videokonferenzsysteme durch die [[KBV]] zertifiziert sein. Die Anforderungen sind in Anlage 31b des [[Bundesmantelvertrag|Bundesmantelvertrags-Ärzte (BMV-Ä)]] festgelegt. Stand Mai 2025 sind 88 Anbieter zertifiziert. Zu den technischen Anforderungen gehören:

- Ende-zu-Ende-Verschlüsselung der Videoverbindung
- Serverstandort in Deutschland oder EWR
- Keine dauerhafte Speicherung der Videoinhalte
- Barrierefreiheit für Patientinnen und Patienten

### Telematikinfrastruktur-Anbindung

Telemedizinische Leistungen sind an die [[Telematikinfrastruktur]] gebunden. Eine Praxis muss vollständig an die TI angebunden sein, um Videosprechstunden abzurechnen. Dazu gehören:

- [[Konnektoren]] oder TI-Gateway-Zugang
- [[eGK]]-Lesegerät oder digitaler Identitätsnachweis über [[Gesundheits-ID]]
- Zugriff auf das [[PVS]] (Praxisverwaltungssystem) mit ePA-Schnittstelle

Praxen ohne vollständige TI-Anbindung erhalten Honorarabschläge von bis zu 2,5 Prozent.

### Telemonitoring

Beim Telemonitoring übermitteln Patienten kontinuierlich Vitaldaten vom häuslichen Umfeld an die Praxis. Technisch werden Daten über zertifizierte Messgeräte und Übertragungsmodule (z.B. Bluetooth zu einem Hub, dann per Mobilfunk) an ein Telemonitoringzentrum gesendet. Die [[ePA]] ist als perspektivischer Datenspeicher für Telemonitoringdaten vorgesehen.

Das [[DigiG]] ermöglichte es, [[DiGA]] der Risikoklasse IIb für Telemonitoringzwecke zuzulassen. Damit können komplexere Telemonitoringanwendungen als GKV-Leistung erstattet werden.

### Teleradiologie

[[Teleradiologie]] ist ein spezieller Bereich der Telemedizin. Radiologische Aufnahmen werden in [[DICOM]]-Format über gesicherte Netzwerke übertragen und von räumlich entfernten Radiologen befundet. In Deutschland ist Teleradiologie durch die Strahlenschutzverordnung (StrlSchV § 25) und DIN-Norm 6868-159 geregelt.

### Rechtlicher Rahmen

| Regelung | Inhalt |
|---|---|
| Musterberufsordnung für Ärzte (MBO-Ä) § 7 Abs. 4 | Erlaubt Fernbehandlung bei medizinischer Vertretbarkeit seit 2018 |
| BMV-Ä Anlage 31b | Technische Anforderungen an zertifizierte Videodienste |
| BMV-Ä Anlage 31c (ab 1. März 2025) | Neue Mindestanforderungen und Regelsprechstunden für Videokonsultationen |
| [[DigiG]] § 75b [[SGB-V]] | Aufhebung der Mengenbeschränkungen, assistierte Telemedizin |
| § 370a SGB V | Telemedizinische Leistungsvermittlung über 116117 |

## Verknüpfungen

- [[DigiG]] (Aufhebung von Mengenbeschränkungen für Videosprechstunden 2024)
- [[ePA]] (perspektivischer Datenspeicher für telemedizinische Befunde und Monitoring-Daten)
- [[DiGA]] (digitale Gesundheitsanwendungen als Ergänzung zur Telemedizin, Risikoklasse IIb für Telemonitoring)
- [[Telematikinfrastruktur]] (Pflichtanbindung für Abrechnung telemedizinischer Leistungen)
- [[Konnektoren]] (TI-Zugang der Arztpraxis, Voraussetzung für Abrechnung)
- [[GKV]] (Kostenträgerin für Videosprechstunden und Telemonitoringleistungen)
- [[KBV]] (Zertifiziert Videodienstanbieter und regelt Abrechnungsbedingungen)
- [[PVS]] (Praxisverwaltungssystem, integriert Videosprechstunde und TI-Zugang)
- [[SGB-V]] (gesetzliche Grundlage für GKV-Leistungen inkl. Telemedizin)
- [[Gesundheits-ID]] (digitale Identität für Versicherte ohne physische Karte)

## Quellen

- [Bundesärztekammer: Telemedizin und Fernbehandlung](https://www.bundesaerztekammer.de/themen/aerzte/digitalisierung/telemedizin-fernbehandlung)
- [KBV: Videosprechstunde - Anforderungen und Abrechnung](https://www.kbv.de/html/videosprechstunde.php)
- [BMG: Digital-Gesetz (DigiG) – Telemedizin-Regelungen](http://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/digig)
- [Taylor Wessing: Update Telemedizin 2025](https://www.taylorwessing.com/de/insights-and-events/insights/2025/01/update-telemedizin)
