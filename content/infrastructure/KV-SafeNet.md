---
title: KV-SafeNet
audience: [technical]
tags: [infrastruktur, netzwerk, kv, vpn, abrechnung]
aliases: [KV SafeNet, KVSafeNet, KV-SafeNet VPN]
maturity: immergruen
---

# KV-SafeNet

**KV-SafeNet** ist ein von den Kassenärztlichen Vereinigungen (KVen) betriebenes VPN-Netzwerk für die gesicherte Abrechnungskommunikation zwischen Arztpraxen und ihren Kassenärztlichen Vereinigungen.

## Erklärt für Einsteiger

Bevor es die Telematikinfrastruktur gab, brauchten Arztpraxen trotzdem schon ein sicheres Netz: für die Quartalsabrechnung, für Stammdatenabfragen und für den Datenaustausch mit der Kassenärztlichen Vereinigung. Dafür bauten die KVen ihr eigenes verschlüsseltes Netzwerk auf: KV-SafeNet. Es ist wie ein privater, gesicherter Tunnel durch das Internet, der nur für Arztpraxen und die KV offen ist. Mit der neuen Telematikinfrastruktur wird dieser Tunnel schrittweise überflüssig.

## Überblick

KV-SafeNet wurde von der **Kassenärztlichen Bundesvereinigung ([[KBV]])** und den 17 regionalen [[Kassenaerztliche-Vereinigung|Kassenärztlichen Vereinigungen]] entwickelt und betrieben. Es entstand in den 2000er Jahren als gesichertes Netzwerk für den elektronischen Datenaustausch im ambulanten Bereich, lange bevor die [[Telematikinfrastruktur]] produktiv wurde.

Die Hauptanwendungsfälle von KV-SafeNet sind:

- **Quartalsabrechnung**: Übermittlung der KVDT-Abrechnungsdaten (→ [[xDT]]) vom [[PVS]] an die Kassenärztliche Vereinigung
- **Stammdatenabfragen**: Prüfung von Versichertendaten
- **Kommunikation**: Übertragung von Informationen zwischen Praxen und KV
- **Dokumentenaustausch**: z.B. Qualitätssicherungs-Unterlagen

### Verhältnis zur Telematikinfrastruktur

KV-SafeNet und die [[Telematikinfrastruktur]] sind zwei parallele, getrennte Netzwerkinfrastrukturen:

| Merkmal | KV-SafeNet | Telematikinfrastruktur |
|---|---|---|
| Betreiber | Kassenärztliche Vereinigungen | gematik-regulierte Netzbetreiber |
| Hauptzweck | KV-Abrechnung, Stammdaten | ePA, E-Rezept, KIM, VSDM, etc. |
| Zugangstechnologie | VPN über Internet | Konnektor oder TI-Gateway |
| Authentifizierung | Username/Passwort, Zertifikat | SMC-B, HBA, eGK |
| Status | Wird schrittweise abgelöst | Aktiv und wachsend |

Arztpraxen, die an der TI teilnehmen, betreiben oft beide Netzwerke parallel: KV-SafeNet für die Abrechnung mit der KV, TI für ePA, E-Rezept und KIM.

### Migration zu TI 2.0

Im Rahmen der TI 2.0 ist geplant, KV-SafeNet vollständig durch die TI-Infrastruktur abzulösen. Die [[KBV]] und die Kassenärztlichen Vereinigungen arbeiten daran, die Abrechnungskommunikation auf TI-Dienste (insbesondere [[KIM]] für den sicheren Nachrichtenversand) zu migrieren. Ein verbindlicher Abschalttermin für KV-SafeNet war zum Stand 2026 noch nicht festgelegt.

## Technische Details

### Netzwerkarchitektur

KV-SafeNet ist ein **IPsec-VPN** (Internet Protocol Security), das über das öffentliche Internet aufgebaut wird. Die technischen Grundlagen:

- **VPN-Protokoll**: IPsec mit IKEv2 (in neueren Versionen)
- **Authentifizierung**: X.509-Zertifikate (Client-Zertifikate für die Praxis)
- **Verschlüsselung**: AES (256 Bit in aktuellen Versionen)
- **Zugangspunkt**: VPN-Client auf dem Praxiscomputer oder im Router

Jede Praxis erhält ein eigenes Zertifikat für die Authentifizierung am KV-SafeNet-Gateway. Die Zertifikate werden von der jeweiligen KV oder einem beauftragten Trust Service Provider ausgestellt.

### Zertifikatsverwaltung

Die Zertifikate für KV-SafeNet werden unabhängig von der TI-[[PKI]] ausgestellt. Die [[KBV]] definiert die technischen Anforderungen an die KV-SafeNet-PKI. Jede KV verwaltet die Zertifikate für ihre Mitgliedspraxen.

Im Gegensatz zur TI, die Hardware-basierte Karten ([[SMC-B]], [[HBA]]) für die Authentifizierung verwendet, arbeitet KV-SafeNet mit Software-Zertifikaten. Das macht die Einrichtung einfacher, bietet aber ein niedrigeres Sicherheitsniveau als die TI-Hardware-PKI.

### Zugangsprovider

Die technische Anbindung ans KV-SafeNet erfolgt über zertifizierte **KV-SafeNet-Zugangsprovider**. Diese Provider stellen den VPN-Client und die Verbindung zum KV-Netz bereit. Die Praxis bezahlt eine monatliche Pauschale an den Provider.

Zugelassene Zugangsprovider werden von der KBV zugelassen und müssen die technischen Anforderungen der KBV erfüllen. Marktführer sind Telekommunikationsunternehmen wie Telekom, Vodafone und regionale Anbieter.

### Abgrenzung zum VPN-Zugangsdienst der TI

Der [[VPN-Zugangsdienst]] der Telematikinfrastruktur ist ein eigener, separater VPN-Dienst, der Praxen mit dem TI-Netz verbindet. Er wird über den [[Konnektoren|Konnektor]] aufgebaut und ist von KV-SafeNet technisch vollständig getrennt. Beide VPN-Verbindungen können auf dem gleichen Internetzugang der Praxis betrieben werden.

## Verknüpfungen

- [[Kassenaerztliche-Vereinigung]] (betreibt KV-SafeNet; nimmt Abrechnungsdaten entgegen)
- [[KBV]] (definiert technische Standards für KV-SafeNet)
- [[PVS]] (Praxisverwaltungssystem; nutzt KV-SafeNet für Quartalsabrechnung)
- [[xDT]] (KVDT-Format für die Abrechnungsdaten, die über KV-SafeNet übermittelt werden)
- [[Telematikinfrastruktur]] (parallele Infrastruktur; soll KV-SafeNet langfristig ablösen)
- [[VPN-Zugangsdienst]] (VPN-Dienst der TI; technisch getrennt von KV-SafeNet)
- [[KIM]] (TI-Dienst, der für die Abrechnungskommunikation langfristig KV-SafeNet ersetzen soll)

## Quellen

- [KBV: KV-SafeNet – Informationen für Praxen](https://www.kbv.de/html/kv-safenet.php)
- [KV Nordrhein: KV-SafeNet Anbieter und Zugangsbedingungen](https://www.kvno.de/versorgung/telematikinfrastruktur/kvsafenet/)
- [Wikipedia: KV-SafeNet](https://de.wikipedia.org/wiki/KV-SafeNet)
- [gematik: VPN-Zugangsdienst der TI](https://fachportal.gematik.de/anwendungen/vpn-zugangsdienst)
