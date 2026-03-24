---
title: Zugriffsrecht
audience: [technical, non-technical]
tags: [konzept, sicherheit, epa, datenschutz, autorisierung]
aliases: [Zugriffsrechte, Berechtigung, Berechtigungskonzept ePA, Zugriffssteuerung]
relevance:
  sectors: [patient, arztpraxis, krankenhaus, apotheke, hersteller, it-dienstleister]
  interests: [compliance, technik, patient]
maturity: wachsend
---

# Zugriffsrecht

Ein **Zugriffsrecht** in der [[ePA]] ist die Erlaubnis, die ein Versicherter einer Einrichtung oder einem Leistungserbringer erteilt, bestimmte Daten aus seiner elektronischen Patientenakte zu lesen oder zu schreiben.

## Erklärt für Einsteiger

Deine Patientenakte in der ePA ist wie ein persönliches Tagebuch, das du mit bestimmten Ärzten teilst. Du kannst selbst festlegen, wer reinschauen darf: Deinem Hausarzt gibst du vollen Einblick, dem Augenarzt vielleicht nur bestimmte Teile. Du kannst den Zugriff auch zeitlich begrenzen, zum Beispiel nur während eines Krankenhausaufenthalts. Und du kannst ihn jederzeit wieder entziehen. Das Zugriffsrecht ist dein Schlüssel dafür.

## Überblick

Das Berechtigungskonzept der ePA regelt, wer unter welchen Bedingungen auf die Gesundheitsdaten eines Versicherten zugreifen darf. Es basiert auf dem Prinzip der **informationellen Selbstbestimmung**: Ohne ausdrückliche Erlaubnis des Patienten hat kein Leistungserbringer Zugriff auf die ePA.

> [!klinik-integration] Klinik-Integration: ePA-Zugriffsrechte im Krankenhausbetrieb
> Ab 1. Oktober 2025 sind Krankenhäuser verpflichtet, die ePA zu nutzen und zu befüllen. Das Zugriffsmodell unterscheidet sich vom Praxis-Betrieb in mehreren wesentlichen Punkten.
>
> **Zugriffserteilung bei Aufnahme:** Patienten können das Zugriffsrecht bei der stationären Aufnahme erteilen: über die ePA-App auf dem eigenen Smartphone, über ein Kartenlesegerät am Empfang (eGK-Steckung) oder über das Patientenportal des Krankenhauses. Die Berechtigung gilt für das gesamte Krankenhaus als Einrichtung, nicht für einzelne Abteilungen oder Ärzte.
> **Multi-User im KIS:** Im stationären Betrieb greifen viele Personen (Oberarzt, Assistenzarzt, Pflegepersonal, Stationsapotheker) auf dasselbe Patientendokument zu. Technisch authentifiziert sich jede Person mit dem eigenen [[HBA]] oder einer abteilungsbezogenen [[SMC-B]]. Das [[KIS]] muss pro Nutzer den Token-Flow gegen den [[IDP]] implementieren. Prüfen Sie, ob Ihr KIS parallele Sessions und Rollen-basierte Berechtigungskonzepte unterstützt.
> **Frist:** Krankenhäuser, die die ePA bis zum 1. April 2026 nicht aktiv befüllen, riskieren eine Kürzung des TI-Zuschlags. Die technische Umsetzung im [[KIS]] (ePA-Modul, HBA-Kartenmanagement, Token-Verwaltung) muss vor diesem Datum abgeschlossen sein.

### Zugriffsmodell ab ePA für alle (2025)

Mit der Einführung der **ePA für alle** (ePA 3.0, Pilotstart Januar 2025, bundesweiter Rollout ab 29. April 2025) hat sich das Zugriffsmodell grundlegend geändert:

**Vorher (ePA 1.x und 2.x):** Aktives Opt-in. Versicherte mussten jedem einzelnen Leistungserbringer explizit einen Zugriffstoken in der Praxis übergeben. Ohne diesen Schritt war kein Zugriff möglich.

**Ab ePA 3.0:** Vereinfachter Zugriff durch behandelnde Leistungserbringer. Ein Arzt, der aktuell einen Patienten behandelt und über eine gültige VSDM-Versichertenprüfung verfügt, erhält automatisch Lesezugriff auf die ePA, sofern der Patient keine Einschränkungen gesetzt hat.

Der Versicherte behält die volle Kontrolle: Er kann über die [[ePA-App]] oder bei seiner Krankenkasse jederzeit:

- Einzelne Leistungserbringer oder Einrichtungen vom Zugriff ausschließen ([[Opt-Out-ePA|Opt-out]])
- Den Zugriff zeitlich begrenzen
- Einzelne Dokumente oder Dokumentenklassen sperren
- Einen vollständigen Überblick über alle Zugriffsberechtigungen einsehen

> [!praxis-tipp] Praxis-Tipp: ePA-Zugriff im Praxisalltag
> Ab 1. Oktober 2025 müssen Sie Daten aus der aktuellen Behandlung in die ePA einstellen.
>
> **So funktioniert der Zugriff:**
> 1. eGK des Patienten einstecken: Damit weisen Sie den Behandlungskontext nach.
> 2. Ihr PVS erhält automatisch Lesezugriff für 90 Tage.
> 3. Befunde, Diagnosen und Arztbriefe aus der aktuellen Behandlung einstellen.
>
> **Wenn ein Patient widerspricht:**
> Keinen Zugriff erzwingen. Widerspruch in der Behandlungsdokumentation vermerken. Der Patient kann den Widerspruch jederzeit zurückziehen.
>
> **Genetische Befunde:** Nur mit ausdrücklicher schriftlicher Einwilligung des Patienten in die ePA einstellen.
>
> Tipp für den Empfang: eGK bei jedem Termin einstecken lassen, auch bei Folgeterminen. Nur so bleibt der Behandlungskontext aktiv.

> [!interesse-patient]
> Du musst nichts aktiv tun, damit dein Arzt deine ePA lesen kann. Wenn du aber bestimmten Ärzten oder Einrichtungen den Zugriff verweigern willst, kannst du das in der ePA-App einstellen. Du kannst auch einzelne Dokumente in einen persönlichen "Tresor"-Bereich verschieben, auf den nur du Zugriff hast. Dein Arzt sieht dann, dass ein gesperrter Bereich existiert, aber nicht dessen Inhalt.

### Berechtigungsstufen

| Berechtigung | Inhalt |
|---|---|
| Lesezugriff (Standard) | Zugriff auf alle freigegebenen Dokumente in der ePA |
| Schreibzugriff | Einstellen von Dokumenten in die ePA (z.B. Arztbriefe, Befunde) |
| Kein Zugriff | Explizit ausgeschlossene Einrichtung oder Leistungserbringer |
| Persönlicher Bereich | Nur vom Versicherten selbst zugänglich |

> [!patientenrecht] Patientenrecht: Bestimmte Dokumente geheim halten
> Nicht jeder Arzt muss alles sehen. Sie können einzelne Dokumente in einen persönlichen Bereich verschieben.
>
> **Was kann ich verstecken?**
> - Zum Beispiel: psychotherapeutische Berichte, Diagnosen, die Sie nicht teilen möchten
> - Der Arzt sieht dann nur, dass ein gesperrter Bereich existiert, aber nicht den Inhalt
>
> **So geht es:**
> 1. Öffnen Sie die ePA-App Ihrer Krankenkasse
> 2. Wählen Sie das Dokument aus, das Sie schützen möchten
> 3. Verschieben Sie es in den "Persönlichen Bereich"
>
> Sie können diesen Schritt jederzeit rückgängig machen.

### Zugriffsprotokollierung

Jeder Zugriff auf die ePA wird protokolliert. Versicherte können im Zugriffsprotokoll nachvollziehen, wer wann auf welche Dokumente zugegriffen hat. Das Protokoll ist in der ePA-App einsehbar. Diese Transparenz ist eine gesetzliche Anforderung aus dem [[DSGVO|Datenschutzrecht]].

> [!frist-warnung] Frist-Warnung: Zugriffsprotokoll und DSGVO-Auskunftspflicht
> **Rechtsgrundlage:** § 352 SGB V (Protokollierungspflicht ePA-Fachdienst); Art. 15 Abs. 1 DSGVO (Auskunftsrecht der betroffenen Person); Art. 12 Abs. 3 DSGVO (Antwortfrist)
> **Frist:** Das Zugriffsprotokoll ist dauerhaft und vollständig zu führen. Bei einer Auskunftsanfrage eines Versicherten nach Art. 15 DSGVO muss die Auskunft unverzüglich, spätestens innerhalb von **einem Monat** nach Eingang der Anfrage erteilt werden. Die Frist kann einmalig um bis zu zwei weitere Monate verlängert werden, wenn der Betroffene vorab informiert wird (Art. 12 Abs. 3 Satz 2 DSGVO).
> **Handlungsbedarf:** Krankenkassen als datenschutzrechtlich Verantwortliche (§ 307 Abs. 4 SGB V) müssen Prozesse einrichten, die DSGVO-Auskunftsanfragen einschließlich der ePA-Zugriffsprotokolldaten fristgerecht bearbeiten. Primärsysteme (PVS, KIS, AVS) dürfen ePA-Zugriffsdaten nicht ohne eigene Rechtsgrundlage lokal speichern oder weitergeben.
> **Bei Nichtbeachtung:** Unberechtigte Zugriffe auf die ePA sind nach § 307 SGB V strafbar. Verstöße gegen die DSGVO-Auskunftspflicht können Bußgelder nach Art. 83 Abs. 4 DSGVO nach sich ziehen.

> [!patientenrecht] Patientenrecht: Wer hat meine Akte gelesen?
> Jeder Zugriff auf Ihre ePA wird gespeichert. Sie haben das Recht, das jederzeit einzusehen.
>
> **So sehen Sie, wer Ihre Akte gelesen hat:**
> 1. Öffnen Sie die ePA-App Ihrer Krankenkasse
> 2. Gehen Sie zum Bereich "Zugriffsprotokoll" oder "Protokoll"
> 3. Sie sehen dort: Welche Praxis wann zugegriffen hat
>
> **Was kann ich tun, wenn ich einen Zugriff nicht erkenne?**
> - Melden Sie ihn der Ombudsstelle Ihrer Krankenkasse
> - Ein unberechtigter Zugriff auf die ePA ist nach § 307 SGB V strafbar
>
> Sie können einzelne Arztpraxen oder Krankenhäuser auch gezielt sperren. Das geht über die App oder telefonisch bei Ihrer Krankenkasse.

> [!interesse-compliance]
> Leistungserbringer dürfen nur auf ePA-Daten zugreifen, die für die aktuelle Behandlung relevant sind (Prinzip der Datensparsamkeit, [[DSGVO]] Art. 5). Ein Arzt, dem der Patient den Zugriff entzogen hat, darf nicht versuchen, auf anderem Weg an die Daten zu gelangen. Unberechtigte Zugriffe auf die ePA sind strafbar (§ 307 SGB V). Primärsysteme ([[PVS]], [[KIS]], [[AVS]]) müssen die Zugriffsrechte technisch korrekt umsetzen und dürfen keine Daten lokal speichern, die über das medizinisch Notwendige hinausgehen.

## Technische Details

### Autorisierungsarchitektur

Die technische Umsetzung der Zugriffsrechte in der ePA basiert auf mehreren Schichten:

1. **Authentifizierung**: Der Leistungserbringer weist seine Identität nach, entweder mit [[HBA]] (persönlicher Ausweis) oder [[SMC-B]] (Institutionskarte). Der Versicherte authentifiziert sich über die [[eGK]] oder die [[Gesundheits-ID]].

2. **Autorisierung**: Der [[IDP|Identity Provider (IDP)]] stellt nach erfolgreicher Authentifizierung ein signiertes Token ([[JWT|JSON Web Token, JWT]]) aus. Das Token enthält die [[Telematik-ID]] oder [[KVNR]] des Nutzers und seine Rolle (Arzt, Apotheker, Versicherter).

3. **Berechtigungsprüfung am Fachdienst**: Der ePA-Fachdienst prüft bei jeder Anfrage das Token und die gespeicherten Zugriffsrechte des Versicherten. Ist der anfragende Leistungserbringer nicht in der Sperrliste des Versicherten, wird der Zugriff gewährt.

4. **Zugriff auf [[VAU]] (Vertrauenswürdige Ausführungsumgebung)**: Alle ePA-Dokumentenzugriffe laufen durch die VAU, die sicherstellt, dass Daten nur entschlüsselt werden, wenn ein gültiges Zugriffsrecht vorliegt.

### Dokumentenzugriffskontrolle

Innerhalb der ePA können Zugriffsrechte auf zwei Ebenen gesetzt werden:

- **Einrichtungsebene**: Der Versicherte schließt eine gesamte Einrichtung (z.B. ein bestimmtes Krankenhaus) vom Zugriff aus.
- **Dokumentenebene**: Einzelne Dokumente oder Dokumentenklassen (z.B. psychotherapeutische Berichte) können in den persönlichen Bereich verschoben werden.

Die Zugriffsrechte werden als [[FHIR]]-Ressourcen im ePA-Fachdienst gespeichert. Die gematik-Spezifikation gemSpec_ePA definiert das Datenmodell.

> [!interesse-technik]
> Die ePA-Zugriffsrechte sind technisch als FHIR Consent-Ressourcen (HL7 FHIR R4) modelliert. Der ePA-Fachdienst implementiert Policy Enforcement gemäß der gematik-Spezifikation. Autorisierungsanfragen laufen über den IDP (OAuth 2.0 Authorization Code Flow mit PKCE). Die VAU entschlüsselt Daten nur nach Prüfung des Zugriffstokens. Technische Spezifikationen: gemSpec_ePA_Backend, gemSpec_IDP_Dienst auf dem gematik Fachportal.

> [!dev-quickstart] Dev Quickstart: ePA-Berechtigung setzen (Entitlement API)
> Berechtigung für einen Leistungserbringer via ePA-Aktensystem-Schnittstelle anlegen:
> ```bash
> POST https://epa-as.example.ti-dienste.de/api/v1/fhir/Consent
> Authorization: Bearer <IDP-Access-Token>
> x-insurantid: Z123456789
> Content-Type: application/fhir+json
>
> {
>   "resourceType": "Consent",
>   "status": "active",
>   "scope": { "coding": [{ "system": "http://terminology.hl7.org/CodeSystem/consentscope", "code": "patient-privacy" }] },
>   "category": [{ "coding": [{ "system": "http://loinc.org", "code": "59284-0" }] }],
>   "patient": { "identifier": { "system": "http://fhir.de/sid/gkv/kvid-10", "value": "Z123456789" } },
>   "performer": [{ "identifier": { "system": "https://gematik.de/fhir/sid/telematik-id", "value": "1-2-ARZTPRAXIS" } }],
>   "provision": { "type": "permit" }
> }
> ```
> - VAU-Protokoll: Requests werden in einen verschlüsselten VAU-Kanal eingebettet (gemSpec_Crypto Kapitel 7)
> - VAU-Implementierung (Java): [gematik/lib-vau](https://github.com/gematik/lib-vau)
> - ePA-Deployment mit VAU (Docker): [gematik/epa-deployment](https://github.com/gematik/epa-deployment)
> - OpenAPI Consent Decision Management: [ePA-Basic I_Consent_Decision_Management.yaml](https://github.com/gematik/ePA-Basic/blob/ePA-3.0.5/src/openapi/I_Consent_Decision_Management.yaml)
> - Spec: [gemILF_PS_ePA V3.0.0](https://gemspec.gematik.de/docs/gemILF/gemILF_PS_ePA/gemILF_PS_ePA_V3.0.0/)

### Verhältnis zu Zero-Trust

Das ePA-Zugriffsrechtekonzept folgt den Prinzipien der [[Zero-Trust]]-Architektur: Kein Leistungserbringer gilt als implizit vertrauenswürdig. Jeder Zugriff wird geprüft, auch innerhalb des TI-Netzwerks. Der Wechsel vom statischen Token-Austausch (ePA 1.x/2.x) zum dynamischen Autorisierungsmodell (ePA 3.0) ist ein Schritt in Richtung Zero Trust.

## Verknüpfungen

- [[ePA]] (elektronische Patientenakte: das System, für das Zugriffsrechte gelten)
- [[ePA-App]] (Werkzeug des Versicherten zur Verwaltung von Zugriffsrechten)
- [[Opt-Out-ePA]] (Recht des Versicherten, den Zugriff zu verweigern)
- [[IDP]] (stellt Tokens aus, die Zugriffsrechte transportieren)
- [[VAU]] (Vertrauenswürdige Ausführungsumgebung: prüft Zugriffsrechte technisch)
- [[Zero-Trust]] (Sicherheitsarchitektur, die das Zugriffsrechtekonzept prägt)
- [[HBA]] (Leistungserbringer authentifizieren sich für ePA-Zugriff mit dem HBA)
- [[DSGVO]] (rechtliche Grundlage für das Datenschutzprinzip der Zugriffsrechte)
- [[FHIR]] (Datenformat der Consent-Ressourcen für Zugriffsrechte)
- [[SGB-V]] (§ 341 ff. SGB V: gesetzliche Grundlage des ePA-Berechtigungskonzepts)

## Quellen

- [BMG: Elektronische Patientenakte (ePA)](https://www.bundesgesundheitsministerium.de/elektronische-patientenakte.html)
- [gematik: ePA – Technische Grundlagen (gemSpec_ePA)](https://fachportal.gematik.de/telematikinfrastruktur/anwendungen/elektronische-patientenakte)
- [KBV: Elektronische Patientenakte – Informationen für Arztpraxen](https://www.kbv.de/html/epa.php)
- [gematik: Zugriffsrechte in der ePA (Übersicht)](https://www.gematik.de/anwendungen/e-patientenakte/zugriffsrechte)
