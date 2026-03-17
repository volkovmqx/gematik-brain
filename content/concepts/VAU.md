---
title: VAU - Vertrauenswürdige Ausführungsumgebung
audience: [technical]
tags: [konzept, sicherheit, kryptografie, epa, tee]
aliases: [VAU, Vertrauenswürdige Ausführungsumgebung, Trusted Execution Environment, TEE]
---

# VAU - Vertrauenswürdige Ausführungsumgebung

Die **VAU (Vertrauenswürdige Ausführungsumgebung)** ist eine abgeschirmte Laufzeitumgebung in der [[ePA]], die medizinische Daten verarbeitet, ohne dass der Betreiber des Systems Zugriff auf die unverschlüsselten Inhalte erhält.

## Erklärt für Einsteiger

Stell dir vor, du gibst einem Bankschließfach-Betreiber einen verschlossenen Koffer. Er kann den Koffer tragen und lagern, aber er kann ihn nie öffnen und nie hineinschauen. Die VAU funktioniert ähnlich: Der Betreiber des Rechenzentrums, das die [[ePA]] hostet, betreibt die Server, aber kann die Patientendaten trotzdem nie lesen. Die Daten werden in einer versiegelten "Box" innerhalb des Servers verarbeitet, auf die nur du und dein Arzt Zugriff haben, nicht der Rechenzentrumsbetreiber.

## Überblick

Die VAU ist ein zentrales Sicherheitsprinzip der [[ePA]]. Sie löst ein grundlegendes Problem: Patientendaten müssen auf Servern gespeichert und verarbeitet werden, die von Dritten (Krankenkassen oder deren IT-Dienstleistern) betrieben werden. Ohne eine VAU hätten diese Betreiber theoretisch Zugriff auf sensible Gesundheitsdaten.

Die VAU stellt sicher, dass:
- Medizinische Daten nur innerhalb der VAU entschlüsselt werden.
- Selbst der Systembetreiber keinen Zugriff auf unverschlüsselte Daten hat.
- Jede Verarbeitung in einer kryptografisch gesicherten, attestierten Umgebung stattfindet.

Die VAU ist laut gematik-Spezifikation für das ePA-Aktensystem Pflicht. Sie ist eine Grundvoraussetzung dafür, dass die [[ePA]] das Datenschutzniveau erfüllt, das das Sozialgesetzbuch (SGB V) vorschreibt.

Über die [[ePA]] hinaus gibt es das VAU-Konzept auch beim [[E-Rezept]]-Fachdienst, der ebenfalls eine VAU nutzt, um Rezeptdaten vor dem Betreiber zu schützen.

## Technische Details

### Grundprinzip: VAU-Kanal

Der Schlüssel des VAU-Konzepts ist der **VAU-Kanal**: ein verschlüsselter Tunnel, der direkt zwischen dem Client (z.B. dem Primärsystem des Arztes oder der ePA-App) und der VAU aufgebaut wird, nicht nur bis zum Server-Betreiber.

Der Aufbau des VAU-Kanals läuft in mehreren Schritten:

1. **Attestierung**: Der Client überprüft, dass die VAU tatsächlich in einer vertrauenswürdigen, unmanipulierten Umgebung läuft. Die VAU legt dazu einen kryptografisch signierten Nachweis vor. Dieser Nachweis stammt aus einem Hardware-Sicherheitsmodul oder einer Trusted Execution Environment.
2. **Schlüsselaustausch (ECDH)**: Client und VAU führen einen Elliptic-Curve-Diffie-Hellman-Schlüsselaustausch durch. Dabei wird ein gemeinsamer Sitzungsschlüssel erzeugt, den nur der Client und die VAU kennen, nicht der Betreiber.
3. **Inner-HTTP**: Alle eigentlichen Anfragen an das ePA-System werden als verschlüsselte HTTP-Anfragen ("Inner-HTTP") durch den VAU-Kanal getunnelt. Der Betreiber sieht nur den äußeren, verschlüsselten TLS-Transport, aber nicht den Inhalt.

### Technische Spezifika

- Schlüsselaustausch: ECDH mit brainpoolP256r1 oder P-256
- Symmetrische Verschlüsselung des VAU-Kanals: AES-GCM
- Signatur des VAU-Attestierungszertifikats: ECDSA
- Der öffentliche Schlüssel der VAU ist in einem vom [[BSI]] geprüften Verfahren verankert.

### Softwarebasierte und Hardware-VAU

Es gibt zwei Realisierungsformen:

- **Hardware-TEE**: Nutzung von Prozessor-Technologien wie Intel SGX oder AMD SEV, die kryptografisch attestierbare Enklaven bereitstellen.
- **Softwarebasierte VAU**: Eine softwareseitig abgeschirmte Ausführungsumgebung, die durch organisatorische und kryptografische Maßnahmen abgesichert wird.

Laut gematik-Spezifikation muss die gewählte VAU-Variante nachweisbar sicherstellen, dass der Betreiber keinen Klartext-Zugriff auf die verarbeiteten Daten erhält.

### VAU beim E-Rezept

Auch der [[E-Rezept]]-Fachdienst nutzt eine VAU. Der Ablauf ist analog: Der Konnektor oder der E-Rezept-Client baut einen VAU-Kanal auf, bevor Rezeptdaten übertragen werden. So kann der Betreiber des E-Rezept-Fachdienstes Rezepte weder lesen noch manipulieren.

### Verhältnis zu TLS

TLS schützt den Transport zwischen Client und Server (Ende-zu-Transport). Die VAU ergänzt dies durch Ende-zu-Ende-Schutz bis in die verarbeitende Enklave hinein (Ende-zu-VAU). Selbst wenn jemand den TLS-Verkehr am Server entschlüsseln könnte (z.B. durch Zugriff auf Server-Schlüssel), würde er nur den verschlüsselten VAU-Kanal sehen.

## Verknüpfungen

- Pflichtkomponente des [[ePA]]-Aktensystems
- Auch genutzt im [[E-Rezept]]-Fachdienst
- Kryptografische Grundlagen in der [[PKI]] der [[Telematikinfrastruktur]]
- Schutzkonzept ergänzt [[QES]] und [[eGK]]-Authentisierung
- Prüfung durch [[BSI]] im Rahmen des Zulassungsverfahrens

## Quellen

- [gemSpec_VAU_ePA - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_VAU_ePA/latest/)
- [ePA für alle - Fachportal](https://fachportal.gematik.de/anwendungen/epa-fuer-alle)
- [epa-poc-collection - GitHub](https://github.com/gematik/epa-poc-collection)
- [gemSpec_Krypt v2.46.0 - gematik Fachportal](https://gemspec.gematik.de/docs/gemSpec/gemSpec_Krypt/latest/)
