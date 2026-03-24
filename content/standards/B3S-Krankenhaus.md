---
title: B3S-Krankenhaus
audience: [technical, non-technical]
tags: [standards, sicherheit, kritis, krankenhaus, isms, bsi]
aliases: [B3S, B3S Medizinische Versorgung, Branchenspezifischer Sicherheitsstandard Krankenhaus]
relevance:
  sectors: [krankenhaus, it-dienstleister, ti-infrastruktur, regulierung]
  interests: [compliance, technik]
maturity: setzling
---

# B3S-Krankenhaus

Der **B3S Medizinische Versorgung** (Branchenspezifischer Sicherheitsstandard) ist der vom [[BSI]] anerkannte Nachweis für Krankenhäuser, die als [[KRITIS|KRITIS-Betreiber]] eingestuft sind, dass sie angemessene technische und organisatorische Maßnahmen zum Schutz ihrer IT-Systeme umsetzen.

## Erklärt für Einsteiger

Wenn ein Krankenhaus so groß ist, dass sein Ausfall die Gesundheitsversorgung einer ganzen Region gefährden würde, stuft der Staat es als "Kritische Infrastruktur" ein. Dann muss das Krankenhaus nachweisen, dass seine IT-Systeme gut geschützt sind. Dafür gibt es einen speziellen Prüfkatalog für Krankenhäuser, den B3S. Der Unterschied zu allgemeinen IT-Sicherheitsstandards: Der B3S wurde speziell für die Abläufe in Krankenhäusern entwickelt und berücksichtigt klinische Besonderheiten wie Medizingeräte, Schichtsysteme und die 24/7-Verfügbarkeit.

## Überblick

KRITIS-Betreiber im Gesundheitssektor können gegenüber dem [[BSI]] auf zwei Wegen nachweisen, dass sie angemessene Sicherheitsmaßnahmen umsetzen:

1. **Zertifizierung nach [[ISO-27001]]** oder **Auditierung nach [[BSI-IT-Grundschutz]]** (allgemeine Standards)
2. **Umsetzung des B3S** (branchenspezifischer Standard, der vom BSI als gleichwertig anerkannt ist)

Der B3S Medizinische Versorgung wurde von der **Deutsche Krankenhausgesellschaft (DKG)** in enger Abstimmung mit dem [[BSI]] entwickelt. Das Verfahren basiert auf § 8a Abs. 2 BSIG, der Branchenverbänden erlaubt, eigene Sicherheitsstandards zu entwickeln, wenn das BSI diese als geeignet anerkennt.

### Geltungsbereich

Der B3S gilt für Krankenhäuser, die den KRITIS-Schwellenwert überschreiten: **30.000 vollstationäre Fälle pro Jahr**. Das entspricht laut Schätzungen etwa 80 bis 100 Krankenhäusern in Deutschland, hauptsächlich Häuser der Maximalversorgung, Universitätskliniken und große Klinikketten.

Mit der Einführung der [[NIS2UmsuCG|NIS-2-Richtlinie (NIS2UmsuCG, in Kraft seit 6. Dezember 2025)]] erweitert sich der Kreis verpflichteter Einrichtungen erheblich. Auch Krankenhäuser unterhalb der KRITIS-Schwelle können als "wesentliche Einrichtungen" nach NIS-2 eingestuft sein und müssen dann vergleichbare Sicherheitsmaßnahmen nachweisen, auch wenn der B3S formal nur für KRITIS-Betreiber gilt.

> [!interesse-compliance]
> KRITIS-Krankenhäuser müssen alle **zwei Jahre** einen Nachweis der umgesetzten Maßnahmen beim [[BSI]] einreichen. Der Nachweis kann durch einen anerkannten Prüfer (B3S-Auditor) oder eine Zertifizierungsstelle erbracht werden. Die Fristen sind im BSIG geregelt. Krankenhäuser, die noch keine KRITIS-Einstufung haben, aber die NIS-2-Schwelle (ab 50 Mitarbeiter oder 10 Mio. Euro Umsatz) überschreiten, sollten prüfen, ob der B3S als freiwilliger Rahmen geeignet ist.

## Technische Details

### Struktur des B3S

Der B3S Medizinische Versorgung (aktuelle Version: 1.3.1, Stand Januar 2026) ist in Anforderungsklassen gegliedert, die den klinischen Betrieb widerspiegeln:

| Anforderungsklasse | Themen |
|---|---|
| Informationssicherheits-Management (ISMS) | Leitlinie, Rollen, Verantwortlichkeiten, Audits |
| Asset-Management | Inventarisierung kritischer IT-Systeme und Medizingeräte |
| Zugriffsschutz | Benutzerkonten, Berechtigungskonzept, Privileged Access Management |
| Netzwerksegmentierung | Trennung klinischer Netze (OT/Medizintechnik) von IT-Netzen |
| Patch-Management | Schwachstellenmanagement für [[KIS]], Medizingeräte-Software, Netzwerkkomponenten |
| Backup und Recovery | Recovery Time Objective (RTO), Recovery Point Objective (RPO) für kritische Systeme |
| Incident Response | Meldeprozesse für Sicherheitsvorfälle, Eskalation zum [[BSI]] |
| Lieferanten-Management | Sicherheitsanforderungen an IT-Dienstleister und externe Zugänge |
| Physische Sicherheit | Zutrittskontrollen zu Rechenzentren, Serverräumen |
| Betrieb und Monitoring | Logging, SIEM, Anomalieerkennung |

### Medizintechnik als Besonderheit

Ein wesentlicher Unterschied des B3S gegenüber allgemeinen IT-Sicherheitsstandards ist die explizite Berücksichtigung von **Medizingeräten und OT-Systemen (Operational Technology)**. Klinische Geräte wie Beatmungsgeräte, Infusionspumpen, bildgebende Systeme ([[PACS]]) und [[KIS]]-angebundene Monitorsysteme laufen häufig auf veralteten Betriebssystemen und können nicht ohne Weiteres gepatcht werden.

Der B3S fordert für solche Geräte:
- Netzwerksegmentierung: Medizingeräte in isolierten VLANs, kein direkter Internetzugang
- Kompensationsmaßnahmen bei nichtpatchbaren Systemen (z.B. Anwendungs-Whitelisting, IDS/IPS)
- Dokumentation aller nichtpatchbaren Systeme mit begründeter Risikoakzeptanz

> [!klinik-integration] Klinik-Integration: B3S-ISMS und KIS als kritisches Asset
> Das [[KIS]] ist im B3S-Scope das wichtigste kritische IT-System. Es muss im ISMS-Asset-Register vollständig erfasst sein, inklusive aller Subsysteme (LIS, RIS, PACS, Medikationssystem) und ihrer HL7-Schnittstellen.
>
> **ISMS-Tooling:** Systeme wie HiScout, Verinice oder fuentis Suite unterstützen das B3S-Anforderungs-Mapping. Der B3S v1.3.1 definiert 37 ISMS-Managementanforderungen, die im Tool hinterlegt werden können. Klären Sie mit Ihrem ISMS-Tool-Anbieter, ob ein B3S-spezifisches Anforderungsprofil verfügbar ist.
> **KIS-Patch-Management:** Der B3S fordert ein dokumentiertes Patch-Management-Verfahren für alle kritischen Systeme. Für das KIS bedeutet das: Patches müssen zeitnah eingespielt werden, jedoch erst nach Test in einer Nicht-Produktivumgebung. Planen Sie quartalsweise Wartungsfenster ein und klären Sie mit Ihrem KIS-Hersteller die Patch-Frequenz vertraglich.
> **Auditnachweis:** KRITIS-Krankenhäuser müssen alle zwei Jahre einen B3S-Nachweis beim BSI einreichen. Die IT-Abteilung sollte kontinuierlich auditrelevante Nachweise (Patch-Logs, Zugriffsreviews, Netzwerk-Segmentierungsdokumentation) im ISMS-System sammeln, nicht erst kurz vor dem Audit.

> [!interesse-technik]
> Der B3S ist keine öffentlich frei zugängliche Spezifikation mit maschinenlesbaren Anforderungen. Die DKG stellt ihn Mitgliedshäusern zur Verfügung. Für die technische Umsetzung relevant: BSI IT-Grundschutz Bausteine SYS.3.2 (Medizingeräte), NET.3.2 (Netzwerksegmentierung), OPS.1.1.2 (Ordnungsgemäße IT-Administration). Tooling: ISMS-Systeme wie HiScout, Verinice oder fuentis Suite unterstützen B3S-Mapping. Das BSI veröffentlicht die Liste der anerkannten B3S-Standards unter bsi.bund.de.

> [!dev-quickstart] Dev Quickstart: B3S-Logging und SIEM-Anforderungen
> B3S-Anforderungsklasse "Betrieb und Monitoring" basiert auf BSI IT-Grundschutz OPS.1.1.5 (Protokollierung).
> Pflicht-Protokollquellen (Minimalset nach OPS.1.1.5.A6):
> - Betriebssysteme: syslog (RFC 5424) oder Windows Event Log (via WEF)
> - Netzwerkgeräte: Firewall-Logs, NetFlow/IPFIX für Anomalieerkennung
> - KIS/Anwendungsapplikationen: Login-Events, Zugriffsversuche auf Patientendaten
> - Active Directory / LDAP: Privilege Escalation, Account-Lockouts
>
> Aufbewahrung: mindestens 12 Monate (OPS.1.1.5.A7 Basis-Anforderung), empfohlen 18 Monate für KRITIS.
>
> Beispiel: rsyslog-Weiterleitung an SIEM per TLS:
> ```bash
> # /etc/rsyslog.d/90-siem.conf
> # Auth-Events verschlüsselt an zentrales SIEM
> *.auth;*.authpriv  @@siem.krankenhaus.intern:6514
> $DefaultNetstreamDriverCAFile /etc/ssl/certs/siem-ca.pem
> $ActionSendStreamDriverMode 1
> $ActionSendStreamDriverAuthMode x509/name
> ```
> - BSI OPS.1.1.5 (2023): [bsi.bund.de OPS.1.1.5](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/04_OPS_Betrieb/OPS_1_1_5_Protokollierung_Edition_2023.html)
> - BSI-Mindeststandard Protokollierung und Detektion: [bsi.bund.de/Mindeststandards](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/Mindeststandards/PDCA/PDCA_node.html)
> - BSI-Handlungsempfehlungen für Kliniken (TLP:WHITE): [bsi.bund.de KRITIS Gesundheit](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KRITIS/Themen-Downloads/Gesundheit/handlungsempfehlungen-informationssicherheit-kliniken.pdf)

### Verhältnis zu [[KRITIS-Dachgesetz]] und [[NIS2UmsuCG]]

Mit dem **[[KRITIS-Dachgesetz]]** (in Kraft seit März 2026) kommen physische Resilienzanforderungen hinzu, die über den B3S hinausgehen. Der B3S deckt IT-Sicherheit ab, das KRITIS-DachG ergänzt physischen Schutz (Zutrittskontrollen, Redundanzen, Continuity Management).

Das **[[NIS2UmsuCG]]** (in Kraft seit 6. Dezember 2025) weitet Sicherheitspflichten auf Krankenhäuser aus, die bisher nicht als KRITIS galten. Für diese Häuser ist der B3S kein formaler Nachweis, aber ein bewährtes Referenzrahmenwerk.

### Prüf- und Nachweisverfahren

Der Nachweis der B3S-Umsetzung gegenüber dem [[BSI]] erfolgt durch:
1. **Selbstauskunft plus Audit**: Ein unabhängiger Prüfer, der von der DKG oder dem BSI anerkannt ist, auditiert die Umsetzung.
2. **Zertifizierung**: Alternativ kann eine [[ISO-27001]]-Zertifizierung auf Basis des B3S erfolgen.

Das Prüfergebnis wird dem BSI alle zwei Jahre über das Meldeportal übermittelt. Krankenhäuser müssen außerdem Sicherheitsvorfälle von erheblicher Bedeutung unverzüglich melden.

> [!frist-warnung] Frist-Warnung: B3S-Nachweispflicht und BSI-Meldepflicht für KRITIS-Krankenhäuser
> **Rechtsgrundlage:** § 8a Abs. 3 BSIG (neues BSIG, in Kraft seit 6. Dezember 2025, BGBl. 2025 I Nr. 289) i.V.m. § 8b BSIG (Meldepflicht).
> **Nachweiszyklus:** Unter dem neuen BSIG wurde der Nachweiszyklus auf **drei Jahre** verlängert (bisher zwei Jahre). KRITIS-Krankenhäuser müssen das Ergebnis der B3S-Auditierung alle drei Jahre beim BSI einreichen. Das BSI informiert registrierte Kontaktpersonen individuell über den nächsten Einreichungstermin.
> **Handlungsbedarf:** Stellen Sie sicher, dass Ihr Krankenhaus beim BSI als KRITIS-Betreiber registriert ist und eine 24/7-erreichbare Kontaktstelle hinterlegt hat. Beauftragen Sie rechtzeitig einen anerkannten B3S-Auditor, da die Auditkapazitäten begrenzt sind. Die aktuelle B3S-Version 1.3.1 (Eignungsfeststellung durch BSI: November 2025) ist die Prüfgrundlage; ältere Versionen werden vom BSI nicht mehr anerkannt.
> **Meldepflicht:** Erhebliche Sicherheitsvorfälle sind dem BSI unverzüglich zu melden (§ 8b Abs. 4 BSIG). Bewahren Sie Incident-Response-Protokolle so auf, dass eine BSI-Meldung innerhalb von 24 Stunden möglich ist.

> [!klinik-integration] Klinik-Integration: B3S-Auditnachweis und Incident-Response im Klinikbetrieb
> Der B3S verlangt einen dokumentierten Incident-Response-Prozess. Im Krankenhaus muss dieser Prozess den 24/7-Betrieb abbilden: Eskalationspfade müssen auch nachts, an Wochenenden und während Schichtwechseln funktionieren.
>
> **Incident-Response-Anforderungen:** Der Meldeprozess für Sicherheitsvorfälle an das BSI ist zweistufig: Erstmeldung unverzüglich, Detailmeldung mit Analyse. Das KIS-Team muss klären, wie ein Ransomware-Vorfall oder Netzwerkausfall erkannt und intern eskaliert wird, bevor die BSI-Meldung erfolgt.
> **Betrieb ohne KIS:** Ein Ausfall des KIS ist kein seltenes Szenario. Der B3S fordert Business-Continuity-Pläne (BCP). Für Krankenhäuser bedeutet das: Manuelle Prozesse für Aufnahme, Medikation und Befundübertragung müssen dokumentiert und geübt sein. RTO und RPO für das KIS müssen im BCP festgelegt und mit dem KIS-Hersteller vertraglich abgesichert sein.
> **Logischerweise gehört das SIEM dazu:** Anomalieerkennung im Netzwerk (z.B. ungewöhnliche HL7-Verbindungen aus dem OT-Netz) ist eine B3S-Anforderung. Stellen Sie sicher, dass KIS-Kommunikationsports im SIEM überwacht werden.

## Verknüpfungen

- [[KRITIS]] (rechtlicher Rahmen für kritische Infrastrukturen: Grundlage für B3S-Pflicht)
- [[KRITIS-Dachgesetz]] (physische Resilienzpflichten, ergänzen den B3S)
- [[NIS2UmsuCG]] (erweitert B3S-ähnliche Pflichten auf mehr Krankenhäuser)
- [[BSI]] (erkennt den B3S an und nimmt Nachweise entgegen)
- [[ISMS]] (Informationssicherheits-Managementsystem: Kernanforderung des B3S)
- [[ISO-27001]] (allgemeiner Sicherheitsstandard, Alternativweg zum B3S)
- [[BSI-IT-Grundschutz]] (BSI-Standard, weiterer Alternativweg)
- [[KIS]] (wichtigstes kritisches IT-System im Krankenhaus-B3S-Scope)
- [[PACS]] (bildgebende Systeme: Medizingeräte-IT im B3S-Scope)
- [[KHZG]] (förderte IT-Sicherheitsinvestitionen, die teils B3S-Anforderungen adressieren)

## Quellen

- [Deutsche Krankenhausgesellschaft (DKG): Informationssicherheit im Krankenhaus und B3S](https://www.dkgev.de/themen/digitalisierung-daten/informationssicherheit-und-technischer-datenschutz/informationssicherheit-im-krankenhaus/)
- [BSI: KRITIS und regulierte Unternehmen](https://www.bsi.bund.de)
- [BSI: KRITIS-Regulierung](https://www.bsi.bund.de/DE/Themen/KRITIS-und-regulierte-Unternehmen/Kritische-Infrastrukturen/kritis_node.html)
- [Wikipedia: Branchenspezifischer Sicherheitsstandard](https://de.wikipedia.org/wiki/Branchenspezifischer_Sicherheitsstandard)
