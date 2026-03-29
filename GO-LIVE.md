# GO-LIVE Prüfplan: VENDORi GmbH Website

> **Ziel:** Vollständige rechtliche und technische Absicherung vor dem Go-Live.
> Jeder Prüfpunkt enthält einen **Subagent-Prompt** der direkt den Codebase analysiert.
>
> **Reihenfolge:** Rechtliche Grundlagen → Technische Sicherheit → Infrastruktur → Performance → SEO/Content → Finale Verifikation

---

## Aktueller Stand (Vorab-Analyse)

| Bereich | Status | Hinweis |
|---|---|---|
| Impressum + Datenschutz | ✅ Vorhanden | Vollständigkeit noch prüfen |
| Cookie-Consent System | ✅ Implementiert | TTDSG-Compliance prüfen |
| Security Headers (CSP, HSTS) | ✅ Implementiert | Vollständigkeit prüfen |
| Rate-Limiting + Input-Validierung | ✅ Implementiert | Multi-Instance-Problem prüfen |
| AVV mit Dienstleistern | ⚠️ Unklar | Vercel, n8n, CloudFront, SMTP |
| Barrierefreiheitserklärung (BFSG) | ❌ Fehlt | Pflicht ab 28.06.2025 |
| SPF / DKIM / DMARC | ⚠️ Unklar | DNS-Records zu prüfen |
| AGB / Widerruf | ⚠️ Fehlt | Prüfen ob nötig |

---

## PHASE 1: RECHTLICHE GRUNDLAGEN

### ✅ 1.1 — Impressum-Vollständigkeit (DDG §5)

**Gesetzliche Grundlage:** § 5 Digitale-Dienste-Gesetz (DDG), ehem. § 5 TMG
**Risiko bei Verstoß:** Abmahnung, Bußgeld bis 50.000 €, Unterlassungsklage

**Subagent-Prompt:**
```
Prüfe das Impressum der Website gründlich auf rechtliche Vollständigkeit nach deutschem Recht (§5 DDG / ehemals §5 TMG).

Lies die Dateien:
- src/app/impressum/ImpressumContent.tsx
- src/app/impressum/page.tsx
- src/app/layout.tsx (Footer-Links prüfen)
- src/sections/footer_section/ (alle Dateien)

Prüfe ob folgende Pflichtangaben vorhanden und korrekt sind:
1. Vollständiger Name + Rechtsform (GmbH) der Gesellschaft
2. Ladungsfähige Anschrift (Straße, Hausnr., PLZ, Ort, Land)
3. Vertretungsberechtigte Person(en) (Geschäftsführer)
4. Schnelle Kontaktoption: E-Mail-Adresse (Kontaktformular allein reicht NICHT)
5. Telefonnummer (Pflicht seit DDG 2023 für geschäftliche Anbieter)
6. Handelsregistereintrag: Registergericht + HRB-Nummer
7. USt-Identifikationsnummer (§ 27a UStG) oder Hinweis auf Befreiung
8. Aufsichtsbehörde, Berufsrecht, Kammerzugehörigkeit (falls vorhanden)
9. Ist das Impressum von jeder Seite in maximal 2 Klicks erreichbar?
10. Ist die Impressum-URL /impressum oder per Footer-Link zugänglich?

Berichte: Welche Angaben sind vorhanden, welche fehlen oder sind unvollständig?
Gib für jeden fehlenden Punkt die exakte gesetzliche Grundlage an.
```

---

### ✅ 1.2 — Datenschutzerklärung-Vollständigkeit (DSGVO Art. 13/14)

**Gesetzliche Grundlage:** DSGVO Art. 13 (Direkterhebung), Art. 14 (indirekte Erhebung)
**Risiko bei Verstoß:** Bußgeld bis 20 Mio. € oder 4% des weltweiten Jahresumsatzes

**Subagent-Prompt:**
```
Prüfe die Datenschutzerklärung der Website auf Vollständigkeit nach DSGVO Art. 13 und Art. 14 (Informationspflichten).

Lies die Dateien:
- src/app/datenschutz/DatenschutzContent.tsx
- src/app/datenschutz/page.tsx
- src/sections/contact_section/Component.tsx
- src/components/cookie-consent/ (alle Dateien)
- src/app/api/contact/route.ts
- .env.example

Prüfe ob folgende Pflichtangaben nach Art. 13 DSGVO vorhanden sind:
1. IDENTITÄT DES VERANTWORTLICHEN: Name, Anschrift, Kontaktdaten
2. DATENSCHUTZBEAUFTRAGTER: Kontaktdaten (falls vorhanden/Pflicht — bei GmbH mit >20 MA relevant)
3. VERARBEITUNGSZWECKE: Für jede Verarbeitung separat aufgeführt
4. RECHTSGRUNDLAGEN (Art. 6 DSGVO): Für jede Verarbeitung konkret genannt
   - Kontaktformular → Art. 6 Abs. 1 lit. b oder f?
   - Server-Logs → Art. 6 Abs. 1 lit. f?
   - Cookies → Art. 6 Abs. 1 lit. a (Consent)?
5. EMPFÄNGER: n8n-Webhook, Amazon CloudFront, Vercel Hosting — alle genannt?
6. DRITTLANDTRANSFERS: Falls AWS/Vercel US-basiert, Art. 46 DSGVO-Grundlage angegeben?
7. SPEICHERDAUERN: Für jede Verarbeitungskategorie konkret (nicht nur "so lange nötig")
8. BETROFFENENRECHTE: Art. 15–21 DSGVO alle aufgeführt?
   - Auskunftsrecht (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17)
   - Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21)
9. BESCHWERDERECHT bei Aufsichtsbehörde (Art. 77) — mit Behördenname und Kontakt?
10. COOKIE-INFORMATIONEN: Alle Cookie-Kategorien und -Zwecke beschrieben?
11. Widerrufshinweis für erteilte Einwilligungen?

Berichte jeden fehlenden oder unklaren Punkt mit Gesetzesreferenz.
```

---

### 1.3 — Rechtsgrundlagen für alle Datenverarbeitungen (Art. 6 DSGVO)

**Gesetzliche Grundlage:** DSGVO Art. 5 (Grundsätze), Art. 6 (Rechtsgrundlagen)
**Risiko bei Verstoß:** Jede Verarbeitung ohne Rechtsgrundlage ist illegal

**Subagent-Prompt:**
```
Analysiere alle Datenverarbeitungsvorgänge der Website und prüfe ob valide Rechtsgrundlagen nach Art. 6 DSGVO vorliegen und dokumentiert sind.

Lies die Dateien:
- src/app/api/contact/route.ts
- src/lib/email/ (alle Dateien)
- src/components/cookie-consent/ (alle Dateien)
- src/app/datenschutz/DatenschutzContent.tsx
- middleware.ts
- next.config.js

Identifiziere ALLE Datenverarbeitungsvorgänge und prüfe:
1. Kontaktformular-Daten (Name, E-Mail, Nachricht) → Welche Rechtsgrundlage? Dokumentiert?
2. Server-Logs / IP-Adressen im Rate-Limiter → Rechtsgrundlage? Speicherdauer?
3. Honeypot-Feld → Werden diese Daten gespeichert? Falls ja: Rechtsgrundlage?
4. Cookie-Consent in localStorage → Ist das ein personenbezogenes Datum?
5. Übermittlung an n8n-Webhook → Wo wird n8n gehostet? AVV vorhanden?
6. Amazon CloudFront CDN → Welche Daten werden übertragen? EU-Server verfügbar?
7. Vercel Hosting → Wo werden Server-Logs gespeichert? AVV vorhanden?
8. IP-Adressen im In-Memory Rate-Limiter → Wie lange gespeichert? Cleanup-Intervall?

Für jeden Vorgang: Ist Rechtsgrundlage in der Datenschutzerklärung korrekt angegeben?
Gibt es Verarbeitungen ohne erkennbare Rechtsgrundlage?
```

---

### 1.4 — Auftragsverarbeitungsverträge / AVV (Art. 28 DSGVO)

**Gesetzliche Grundlage:** DSGVO Art. 28 — Pflicht für jeden Auftragsverarbeiter
**Risiko bei Verstoß:** Bußgeld bis 10 Mio. € oder 2% des Jahresumsatzes

> ⚠️ **Achtung:** Kein AVV = jede Datenübermittlung an den Dienstleister ist rechtswidrig.

**Subagent-Prompt:**
```
Identifiziere alle Auftragsverarbeiter (Art. 28 DSGVO) der Website, für die ein Auftragsverarbeitungsvertrag (AVV) erforderlich ist.

Lies die Dateien:
- .env.example
- src/app/api/contact/route.ts
- src/lib/email/mailer.ts
- next.config.js
- src/app/datenschutz/DatenschutzContent.tsx
- package.json

Erstelle eine vollständige Liste aller Drittdienstleister die personenbezogene Daten verarbeiten könnten:
1. VERCEL (Hosting): Verarbeitet Server-Logs inkl. IP-Adressen
2. N8N (Webhook/Automation): Empfängt Kontaktformular-Daten — self-hosted oder Cloud?
3. AMAZON CLOUDFRONT (CDN): Verarbeitet IP-Adressen der Nutzer
4. SMTP-ANBIETER: Welcher Anbieter? Verarbeitet E-Mail-Inhalte
5. Weitere Dienste in Dependencies die Daten senden?

Für jeden Dienst:
- In der Datenschutzerklärung erwähnt?
- Firmensitz? (EU / Drittland)
- Standard-AVV beim Anbieter verfügbar?
- Welche konkreten Daten werden übermittelt?
- AVV bereits abgeschlossen?

Hinweis: Fehlender AVV = Ordnungswidrigkeit, Bußgeld bis 10 Mio. € oder 2% Jahresumsatz.
```

---

### 1.5 — Cookie-Consent und TTDSG §25 Compliance

**Gesetzliche Grundlage:** § 25 TTDSG (seit 01.12.2021), DSGVO Art. 6 Abs. 1 lit. a
**Risiko bei Verstoß:** Abmahnungen (Verbraucherzentrale, Wettbewerber), Bußgeld bis 300.000 €

**Subagent-Prompt:**
```
Prüfe die Cookie-Consent-Implementierung auf vollständige TTDSG §25 und DSGVO-Compliance.

Lies die Dateien:
- src/components/cookie-consent/CookieBanner.tsx
- src/components/cookie-consent/CookieSettingsModal.tsx
- src/components/cookie-consent/storage.ts
- src/components/cookie-consent/types.ts
- src/components/cookie-consent/useCookieConsent.ts
- src/app/layout.tsx
- src/app/datenschutz/DatenschutzContent.tsx

Prüfe folgende TTDSG/DSGVO-Anforderungen:
1. OPT-IN: Sind Analytics und Marketing-Cookies STANDARDMÄSSIG DEAKTIVIERT?
2. KEIN PRE-CHECKED: Keine vorausgewählten Checkboxen für nicht-notwendige Cookies?
3. CONSENT VOR SETZUNG: Cookies erst NACH Einwilligung gesetzt? (Kein Cookie vor Consent außer technisch notwendige)
4. GRANULARITÄT: Können Nutzer einzelne Kategorien akzeptieren/ablehnen?
5. WIDERRUF: Einfach zugänglicher Widerrufsmechanismus vorhanden? (Footer-Link?)
6. DOKUMENTATION: Zeitstempel + Version der Einwilligung gespeichert? (Nachweispflicht Art. 7 Abs. 1)
7. INFORMIERT: Zeigt der Banner Cookies nach Zweck und Anbieter?
8. GLEICHWERTIGKEIT: "Ablehnen" genauso einfach wie "Akzeptieren"? (Dark Patterns verboten)
9. NOTWENDIGE COOKIES: Klar als solche deklariert, nicht abwählbar?
10. SSR-SICHERHEIT: Race-Conditions bei Consent-Prüfung zwischen Server und Client?
11. KEIN VORAB-LADEN: Keine externen Ressourcen (Analytics, Fonts von Google etc.) vor Consent?

Berichte jeden Verstoß mit konkreter Codezeile und Norm.
```

---

### 1.6 — Impressum/Datenschutz Verlinkung & 2-Klick-Regel

**Gesetzliche Grundlage:** § 5 DDG — leicht erkennbar, unmittelbar erreichbar, ständig verfügbar
**Risiko bei Verstoß:** Abmahnung wegen unzureichender Erreichbarkeit

**Subagent-Prompt:**
```
Prüfe die Verlinkung und Erreichbarkeit von Impressum und Datenschutzerklärung auf jeder Seite.

Lies die Dateien:
- src/sections/footer_section/ (alle Dateien)
- src/sections/contact_section/Component.tsx
- src/app/layout.tsx
- src/components/cookie-consent/CookieBanner.tsx
- src/app/page.tsx

Prüfe:
1. FOOTER: Sind Impressum UND Datenschutz im Footer auf JEDER Seite verlinkt?
2. 2-KLICK-REGEL: Impressum von jeder Seite in maximal 2 Klicks erreichbar?
3. KONTAKTFORMULAR: Direkter Link zur Datenschutzerklärung bei der Datenschutz-Checkbox?
4. COOKIE-BANNER: Verlinkt der Banner auf die Datenschutzerklärung?
5. MOBILANSICHT: Sind die Links auf kleinen Bildschirmen sichtbar und touch-friendly (min. 44px)?
6. LINK-TEXTE: Klar als "Impressum" und "Datenschutz" beschriftet — keine versteckten Links?
7. NOINDEX: Sind Impressum/Datenschutz korrekt als robots: noindex markiert?

Berichte jeden nicht erfüllten Punkt.
```

---

## PHASE 2: TECHNISCHE SICHERHEIT (OWASP TOP 10)

### 2.1 — Injection Attacks (OWASP A03:2021)

**Risiko:** E-Mail Header Injection kann zum Spam-Versand über den Server führen; XSS in E-Mails kann Empfänger kompromittieren

**Subagent-Prompt:**
```
Prüfe den gesamten Datenpfad des Kontaktformulars auf Injection-Schwachstellen (OWASP A03:2021).

Lies die Dateien:
- src/sections/contact_section/validation.ts
- src/sections/contact_section/Component.tsx
- src/app/api/contact/route.ts
- src/lib/email/mailer.ts

Prüfe auf folgende Injection-Typen:

1. E-MAIL HEADER INJECTION (CRLF):
   - Werden \r\n Zeichen aus ALLEN Feldern entfernt bevor sie in E-Mail-Header einfließen?
   - Werden "From:", "Reply-To:", "Subject:" aus User-Eingaben gebaut? Sanitization vorhanden?
   - Nutzt nodemailer sichere Header-Setzung (kein manuelle Header-Konkatenation)?

2. XSS IN E-MAIL-TEMPLATES:
   - Werden HTML-Tags in Nutzereingaben escaped bevor sie in HTML-E-Mails eingebettet werden?
   - Gibt es innerHTML-Nutzung mit Nutzerdaten?

3. TEMPLATE INJECTION:
   - Werden Nutzerdaten in Template-Strings (`${userInput}`) eingebettet ohne Escaping?

4. WEBHOOK INJECTION:
   - Könnten JSON-spezifische Zeichen die n8n-Webhook-Verarbeitung manipulieren?
   - Sind Nutzerdaten vor dem Webhook-Send vollständig sanitiert?

5. SANITIZE-FUNKTIONEN (VOLLSTÄNDIGKEIT):
   - sanitizeInput() in validation.ts: Ist die Zeichenliste vollständig?
     Fehlt: Null-Bytes (\0), Unicode-Overrides, homoglyph attacks?
   - sanitizeEmailHeader() in route.ts: Reicht das Entfernen von \r\n?
     Tab-Zeichen (\t) auch entfernt?

Bewerte Kritikalität jedes Befundes: Critical / High / Medium / Low
```

---

### 2.2 — Security Headers (OWASP A05:2021)

**Risiko:** Fehlende Security-Headers ermöglichen Clickjacking, XSS, MIME-Sniffing, Protocol-Downgrade-Attacks

**Subagent-Prompt:**
```
Prüfe die vollständige HTTP-Security-Header-Konfiguration auf Lücken und Schwachstellen.

Lies die Dateien:
- middleware.ts
- next.config.js
- src/app/layout.tsx

Analysiere jeden Security-Header:

1. CONTENT SECURITY POLICY (CSP):
   - 'unsafe-inline' für script-src? → Kritisches Sicherheitsrisiko
   - 'unsafe-eval' vorhanden? → Kritisches Sicherheitsrisiko
   - 'unsafe-inline' für style-src? → Tailwind-Notwendigkeit, aber dokumentieren
   - Nonce-Implementierung korrekt? Wird Nonce im Layout korrekt übergeben?
   - Fehlen Direktiven: worker-src, manifest-src, media-src, child-src?
   - upgrade-insecure-requests gesetzt?
   - Sind alle erlaubten Domains minimal (Whitelist-Prinzip)?

2. HSTS (Strict-Transport-Security):
   - max-age mindestens 31536000 (1 Jahr)?
   - includeSubDomains gesetzt?
   - preload gesetzt? (für HSTS-Preload-Liste)

3. VOLLSTÄNDIGKEIT aller empfohlenen Header:
   - X-Frame-Options: DENY oder SAMEORIGIN?
   - X-Content-Type-Options: nosniff?
   - Referrer-Policy: Datenschutzfreundlicher Wert?
   - Permissions-Policy: Welche APIs eingeschränkt?
   - Cross-Origin-Embedder-Policy?
   - Cross-Origin-Opener-Policy?
   - Cross-Origin-Resource-Policy?

4. HEADER-LEAKS:
   - X-Powered-By entfernt? (poweredByHeader: false in next.config.js?)
   - Server-Header minimiert?

5. VERCEL-KONFLIKTE:
   - Gibt es vercel.json? Könnten Vercel-Default-Headers Middleware-Headers überschreiben?

Referenz: https://securityheaders.com — Ziel ist A+ Rating.
Berichte jeden Header mit aktuellem Wert und Verbesserungsempfehlung.
```

---

### 2.3 — API-Sicherheit & Rate-Limiting (OWASP A01/A04)

**Risiko:** Missbrauch des Kontaktformulars für Spam, DoS-Angriffe, Informationsexfiltration

**Subagent-Prompt:**
```
Führe eine gründliche Sicherheitsanalyse der Contact-API-Route durch.

Lies die Dateien:
- src/app/api/contact/route.ts
- src/lib/email/rate-limiter.ts
- src/sections/contact_section/validation.ts
- .env.example
- next.config.js

Prüfe:

1. RATE-LIMITING:
   - In-Memory Rate-Limiting: Funktioniert bei mehreren Vercel-Instanzen (Skalierung)?
   - IP-Extraktion aus x-forwarded-for: Sicher gegen IP-Spoofing?
   - Kann Rate-Limit durch verschiedene IPs umgangen werden?
   - Cleanup-Intervall des Rate-Limiters: Kein Memory-Leak?

2. SERVER-SEITIGE INPUT-VALIDIERUNG:
   - Werden ALLE Felder server-seitig validiert (unabhängig von Client-Validierung)?
   - Stimmen Validierungsregeln zwischen Client und Server überein?
   - Max-Length-Checks auf dem Server vorhanden?

3. HONEYPOT-EFFEKTIVITÄT:
   - Ist das Honeypot-Feld ausreichend verborgen? (CSS-Klassen im DOM sichtbar?)
   - Könnte ein automatisiertes Tool das Feld erkennen und leer lassen?

4. ERROR-HANDLING:
   - Werden interne Fehlermeldungen/Stack-Traces NICHT an den Client zurückgegeben?
   - console.log() mit sensiblen Daten in Production-Code?

5. WEBHOOK-SICHERHEIT:
   - Ist N8N_WEBHOOK_SECRET Pflicht oder optional? Was bei fehlendem Secret?
   - Was passiert wenn N8N_WEBHOOK_URL nicht gesetzt ist? Graceful fail?
   - Ist die Webhook-URL aus dem Client-Bundle erreichbar?

6. METHODEN-BESCHRÄNKUNG:
   - Werden nur POST-Requests akzeptiert?
   - Was passiert bei GET, PUT, DELETE auf /api/contact?

7. CORS:
   - Kann die API von fremden Domains aufgerufen werden?
   - CORS-Konfiguration vorhanden oder nötig?

Bewerte nach CVSS-Schweregrad.
```

---

### 2.4 — Dependency-Sicherheit (OWASP A06:2021)

**Risiko:** Kompromittierte npm-Pakete (Supply-Chain-Angriff), bekannte CVEs in verwendeten Versionen

**Subagent-Prompt:**
```
Prüfe alle npm-Dependencies auf bekannte Sicherheitslücken und veraltete Versionen.

Lies die Dateien:
- package.json
- package-lock.json (erste 50 Zeilen)

Analysiere:

1. SICHERHEITSKRITISCHE PAKETE:
   - next@^15.x: Bekannte CVEs in dieser Version?
   - nodemailer@^8.x: Bekannte Sicherheitsprobleme? (Header-Injection, SMTP-Smuggling)
   - framer-motion, lucide-react: Client-Bundle, sicherheitsrelevant?

2. DEVDEPENDENCIES vs DEPENDENCIES:
   - Ist @playwright/test korrekt als devDependency markiert?
   - Sind alle Build-Tools als devDependencies korrekt eingestuft?

3. SUPPLY-CHAIN:
   - Gibt es postinstall-Scripts in direkten Dependencies?
   - Gibt es unbekannte Pakete mit breitem fs/network Zugriff?

4. LOCK-FILE:
   - Ist package-lock.json vorhanden? (Verhindert dependency confusion attacks)
   - Wird npm ci statt npm install im Build-Prozess genutzt?

5. VERSION-MANAGEMENT:
   - Gibt es Pakete mit > 1 Jahr ohne Update?
   - Nutzen Pakete ^ oder ~ — Risiko unerwarteter Updates?

Empfehle konkrete Updates und alternative Pakete für kritische Komponenten.
```

---

### 2.5 — Secrets & Sensitive Data Exposure (OWASP A02:2021)

**Risiko:** Exponierte API-Keys, Passwörter im Source-Code oder Client-Bundle

**Subagent-Prompt:**
```
Suche systematisch nach versehentlich exponierten Secrets und sensiblen Daten.

Durchsuche ALLE Dateien in src/, scripts/, public/, und Konfigurationsdateien.

Prüfe:

1. HARDCODED SECRETS:
   - Passwörter, API-Keys, Tokens, Auth-Strings direkt im Code
   - Muster: password=, api_key=, secret=, token=, webhook, auth (außerhalb von .env-Dateien)
   - Webhook-URLs mit eingebetteten API-Tokens
   - Base64-Strings die Credentials sein könnten

2. NEXT_PUBLIC_ VARIABLEN:
   - Welche Variablen haben NEXT_PUBLIC_ Prefix? (Alle sind im Client-Bundle sichtbar)
   - Sind NEXT_PUBLIC_CONTACT_EMAIL und NEXT_PUBLIC_CONTACT_PHONE bewusst öffentlich?
   - Sind Webhook-Secrets oder interne URLs fälschlicherweise NEXT_PUBLIC_?

3. SERVER-CODE IM CLIENT:
   - Gibt es nodemailer, fs, path, crypto Imports in Client-Komponenten (ohne 'use server')?
   - Könnten env-Variablen durch window-Checks versehentlich auf dem Client landen?

4. LOGGING:
   - console.log() mit User-Daten, E-Mail-Inhalten, IP-Adressen in Production-Code?
   - Sensible Felder in Fehlerausgaben?

5. PUBLIC-VERZEICHNIS:
   - Was liegt in /public? Liegt dort etwas Sensibles (Backup-Dateien, .env etc.)?
   - llms.txt: Enthält interne Metriken, Mitarbeiterdaten oder sensible Geschäftsdaten?

6. SOURCE-MAPS:
   - productionBrowserSourceMaps: false in next.config.js gesetzt?

7. GIT:
   - Gibt es versehentlich committete .env-Dateien im aktuellen Zustand?
   - .gitignore korrekt konfiguriert?

Berichte jeden Fund mit Datei, Zeile und Schweregrad (Critical/High/Medium/Low).
```

---

### 2.6 — SSL/TLS & HTTPS-Konfiguration

**Risiko:** Mixed Content, fehlende HSTS-Registrierung, unsichere SMTP-Verbindung

**Subagent-Prompt:**
```
Prüfe die HTTPS/TLS-Konfiguration der Website auf Schwachstellen.

Lies die Dateien:
- middleware.ts
- next.config.js
- src/app/layout.tsx
- src/lib/email/mailer.ts
- public/ (auf HTTP-Links prüfen)

Prüfe:

1. HTTP-ZU-HTTPS-REDIRECT:
   - Gibt es explizite HTTP→HTTPS Umleitung? (Vercel macht das automatisch, aber explizit prüfen)
   - Sind alle internen Links relativ oder mit https://?

2. HSTS-PRELOAD:
   - HSTS-Header mit max-age ≥ 31536000?
   - includeSubDomains + preload für HSTS-Preload-Liste?
   - Domain bei hstspreload.org registriert?

3. MIXED CONTENT:
   - HTTP-Ressourcen (Bilder, Fonts, Scripts) die über HTTP geladen werden?
   - Alle Remote-Image-Domains in next.config.js mit https://?
   - Externe Links auf HTTP-URLs im Content?

4. SMTP/E-MAIL TLS:
   - Nutzt nodemailer STARTTLS (Port 587) oder SSL (Port 465)?
   - Wird SMTP_SECURE korrekt für den Port gesetzt?
   - Wird das SMTP-Serverzertifikat validiert? (rejectUnauthorized nicht auf false?)

5. CSP: upgrade-insecure-requests gesetzt?

Berichte jeden Befund mit Handlungsempfehlung.
```

---

## PHASE 3: INFRASTRUKTUR & E-MAIL-SICHERHEIT

### 3.1 — E-Mail-Sicherheit: SPF, DKIM, DMARC

**Risiko:** Domain kann für Phishing missbraucht werden, E-Mails landen im Spam, Reputationsverlust

**Subagent-Prompt:**
```
Prüfe die E-Mail-Sicherheitskonfiguration der sendenden Domain.

Lies die Dateien:
- .env.example (EMAIL_FROM, EMAIL_TO, SMTP_HOST)
- src/lib/email/mailer.ts
- src/app/api/contact/route.ts

Analysiere:

1. SENDENDE DOMAIN:
   - Welche Domain wird als EMAIL_FROM genutzt? (vendori.eu oder vendori.de?)
   - Stimmt EMAIL_FROM mit SMTP_USER überein? (Pflicht bei vielen Providern)
   - Diskrepanz zwischen NEXT_PUBLIC_CONTACT_EMAIL und EMAIL_FROM?

2. SPF-RECORD (DNS TXT):
   - Welcher SMTP-Anbieter wird genutzt? → SPF-Include-Mechanismus des Anbieters?
   - Format: "v=spf1 include:[smtp-provider] ~all"
   - Empfehlung: -all statt ~all für maximale Sicherheit

3. DKIM (DomainKeys Identified Mail):
   - DKIM-Schlüssel vom SMTP-Anbieter generiert und als DNS CNAME/TXT eingetragen?
   - Mindestens 2048-bit Schlüssellänge empfohlen

4. DMARC (Domain-based Message Authentication):
   - DNS TXT-Record: "_dmarc.[domain]" vorhanden?
   - Policy: mindestens "p=quarantine" (besser: "p=reject")
   - rua-Adresse für DMARC-Reports konfiguriert?
   - Alignment: adkim=r/s, aspf=r/s?

5. NODEMAILER-KONFIGURATION:
   - Wird Reply-To korrekt auf die Absender-E-Mail aus dem Formular gesetzt?
   - Werden alle Anti-Spam-Header (Message-ID, Date) korrekt gesetzt?

6. BOUNCE-HANDLING:
   - Was passiert bei ungültiger Empfänger-E-Mail im Formular?

Erstelle konkrete DNS-Record-Vorlagen für SPF, DKIM, DMARC.
```

---

### 3.2 — Vercel-Deployment-Sicherheit

**Risiko:** Exponierte Preview-Deployments mit Produktionsdaten, Build-Log-Leaks

**Subagent-Prompt:**
```
Prüfe alle Vercel-spezifischen Sicherheitsaspekte des Deployments.

Lies die Dateien:
- next.config.js
- vercel.json (prüfe ob Datei existiert — falls nicht: Hinweis)
- middleware.ts
- .env.example
- package.json

Prüfe:

1. ENVIRONMENT VARIABLES:
   - Alle Server-Only-Variablen OHNE NEXT_PUBLIC_ Prefix?
   - Werden Produktions-Secrets auch in Preview-Deployments genutzt? (Risiko)
   - Getrennte Secrets für Production / Preview / Development?

2. PREVIEW-DEPLOYMENTS:
   - Sind Vercel Preview-URLs öffentlich zugänglich?
   - Können Preview-Deployments auf Produktionsdaten (n8n Webhook, SMTP) zugreifen?
   - Empfehlung: Passwortschutz für Preview-Deployments aktivieren?

3. BUILD-SICHERHEIT:
   - prebuild-Script (security:check) konfiguriert?
   - npm ci statt npm install im Build-Prozess?
   - output: 'standalone' für minimale Attack Surface?

4. HEADER-KONFLIKTE:
   - Werden Security-Headers ausschließlich in middleware.ts gesetzt?
   - Können Vercel-Default-Headers die Middleware-Headers überschreiben?
   - poweredByHeader: false konfiguriert?

5. EDGE-MIDDLEWARE:
   - Middleware auf Edge-Runtime? Gibt es Node.js API-Einschränkungen?
   - Matcher-Pattern korrekt? Statische Assets korrekt ausgenommen?

6. LOGGING-SICHERHEIT:
   - console.log() mit User-Daten die in Vercel-Logs landen?
   - Vercel-Logs: Wer im Team hat Zugriff?

7. SOURCE-MAPS:
   - productionBrowserSourceMaps: false aktiv?

Berichte jeden Punkt mit Handlungsempfehlung.
```

---

### 3.3 — Datenspeicherung & Löschfristen (DSGVO Art. 5)

**Gesetzliche Grundlage:** DSGVO Art. 5 Abs. 1 lit. c (Datensparsamkeit), lit. e (Speicherbegrenzung)
**Risiko bei Verstoß:** Bußgeld, Löschungsansprüche von Nutzern können nicht erfüllt werden

**Subagent-Prompt:**
```
Prüfe alle Datenspeicherungsvorgänge auf DSGVO-konforme Löschfristen und Datensparsamkeit.

Lies die Dateien:
- src/lib/email/rate-limiter.ts
- src/app/api/contact/route.ts
- src/components/cookie-consent/storage.ts
- src/app/datenschutz/DatenschutzContent.tsx

Analysiere jeden Speichervorgang:

1. IN-MEMORY RATE-LIMITER:
   - Cleanup-Intervall: Wie lange werden IP-Adressen gespeichert?
   - IP-Adressen sind personenbezogene Daten (EuGH C-582/14) — Rechtsgrundlage?
   - In der Datenschutzerklärung dokumentiert?
   - Empfehlung: Maximale Speicherdauer von 15-60 Minuten für Rate-Limiting-Zwecke

2. COOKIE-CONSENT (localStorage):
   - Was genau wird gespeichert: necessary, analytics, marketing, timestamp, version?
   - Wird eine nutzerbezogene ID gespeichert? (Problem: Identifizierung ohne Consent)
   - Consent-Zeitstempel: Notwendig für Nachweispflicht (Art. 7 Abs. 1 DSGVO) — korrekt
   - Ablaufdauer des Consents? (Empfehlung: 12 Monate max)

3. KONTAKTFORMULAR-DATEN:
   - Wo landen die Daten nach dem Absenden? (n8n → E-Mail-Postfach)
   - Werden Daten in n8n-Datenbank/Logs gespeichert?
   - Konkrete Löschfrist für Kontaktanfragen in der Datenschutzerklärung?

4. SERVER-LOGS (VERCEL):
   - Standard-Aufbewahrung: 30 Tage (prüfen)
   - In der Datenschutzerklärung erwähnt?
   - Vercel-DPA (Data Processing Agreement) abgeschlossen?

5. E-MAIL-ARCHIVIERUNG:
   - Werden Kontaktanfragen-E-Mails archiviert?
   - HGB §257: Geschäftsbriefe 6 Jahre, steuerrelevante Dokumente 10 Jahre
   - Konflikt mit DSGVO-Löschpflicht lösbar durch: "Archivierung in Steuer-Kontext mit Zugangsbeschränkung"

Berichte für jeden Vorgang: Dokumentiert? Löschfrist angegeben? Rechtsgrundlage klar?
```

---

## PHASE 4: BARRIEREFREIHEIT & PERFORMANCE

### 4.1 — Barrierefreiheit (BFSG / WCAG 2.1 AA)

**Gesetzliche Grundlage:** Barrierefreiheitsstärkungsgesetz (BFSG) — **Pflicht ab 28.06.2025** für gewerbliche Websites
**Risiko bei Verstoß:** Abmahnungen, Bußgeld bis 100.000 €, Marktüberwachungsbehörden

**Subagent-Prompt:**
```
Prüfe die Website auf Barrierefreiheit nach WCAG 2.1 AA und BFSG (gilt ab 28.06.2025).

Lies die Dateien:
- src/app/layout.tsx
- src/sections/ (alle Sektionen)
- src/sections/contact_section/Component.tsx
- src/components/cookie-consent/CookieBanner.tsx
- src/sections/sticky_header/ (Navigation)

Prüfe WCAG 2.1 AA Kriterien:

PERCEIVABLE:
- Alt-Texte für alle Bilder (dekorative: alt="")? (SC 1.1.1)
- Kontrastverhältnis Text/Hintergrund ≥ 4.5:1? (SC 1.4.3) — prüfe primäre Farben
- Informationen nicht nur durch Farbe vermittelt? (SC 1.4.1)
- Text auf 200% skalierbar ohne horizontales Scrollen? (SC 1.4.4)

OPERABLE:
- Gesamte Website mit Tab/Enter/Pfeilstasten bedienbar? (SC 2.1.1)
- Sichtbarer Fokus-Indikator auf allen interaktiven Elementen? (SC 2.4.7)
- Skip-to-content Link vorhanden? (SC 2.4.1)
- Touch-Targets ≥ 44×44px? (SC 2.5.5)

UNDERSTANDABLE:
- lang="de" auf <html> Element? (SC 3.1.1)
- Alle Formularfelder mit <label> oder aria-label? (SC 1.3.1, 3.3.2)
- Fehler klar beschrieben und lokalisiert? (SC 3.3.1, 3.3.3)
- Keine automatische Formular-Submission? (SC 3.2.2)

ROBUST:
- ARIA-Attribute korrekt und valide? (SC 4.1.2)
- role="alert" + aria-live für Fehlermeldungen? (SC 4.1.3)
- Semantisches HTML (header, main, nav, footer)? (SC 1.3.1)

COOKIE-CONSENT:
- Cookie-Banner mit Tastatur vollständig bedienbar?
- aria-label auf allen Buttons?
- Fokus-Management beim Öffnen/Schließen des Modals?

BFSG-SPEZIFISCH:
- Barrierefreiheitserklärung vorhanden? (§ 12 BFSG — PFLICHT)
- Feedback-Mechanismus für Barrierefreiheitsprobleme?

Berichte jeden Verstoß mit WCAG-Kriteriums-Nummer und Priorität.
```

---

### 4.2 — Core Web Vitals & Performance

**Relevanz:** Google-Ranking, Nutzererfahrung, indirekt auch DoS-Resilienz

**Subagent-Prompt:**
```
Prüfe die Website auf Core Web Vitals Optimierungen (LCP, CLS, INP).

Lies die Dateien:
- src/app/layout.tsx
- next.config.js
- src/sections/hero_section/ (LCP-kritisch)
- src/sections/ (alle weiteren Sektionen)
- public/ (Bilder und Assets)

Analysiere:

LCP — Largest Contentful Paint (Ziel: < 2.5s):
- Wahrscheinliches LCP-Element: Hero-H1 oder Hero-Bild?
- Ist das LCP-Element mit next/image und priority={true} geladen?
- Kritische Fonts vorgeladen? (next/font mit display: 'swap')
- Gibt es große, unkomprimierte Bilder (> 200KB)?

CLS — Cumulative Layout Shift (Ziel: < 0.1):
- Alle Bilder mit expliziten width/height Dimensionen?
- Font-Loading ohne Layout-Shift? (FOUT durch swap-Strategie?)
- Dynamisch geladene Elemente ohne reservierten Platz?
- Cookie-Banner: overlay (kein CLS) oder push (CLS-Risiko)?

INP — Interaction to Next Paint (Ziel: < 200ms):
- Schwere JavaScript-Bundles die den Main-Thread blockieren?
- Komponenten mit dynamic import() lazy-geladen?
- Framer-Motion tree-shaken? (nur genutzte Exports importiert?)

BILDOPTIMIERUNG:
- next/image überall verwendet (keine <img>-Tags)?
- AVIF + WebP in next.config.js konfiguriert?
- sizes-Attribut für responsive Bilder gesetzt?

BUNDLE-ANALYSE:
- Client-Komponenten minimiert? (Server-Components wo möglich?)
- Unnötige Client-seitige Imports?

Berichte Performance-Probleme mit geschätztem Einfluss auf die jeweiligen Metriken.
```

---

## PHASE 5: SEO, ROBOTS & CONTENT

### 5.1 — SEO-Technische Grundlagen & Robots

**Risiko:** Falsche robots.txt = gesamte Website nicht indexiert; fehlende Sitemap = schlechtes Crawling

**Subagent-Prompt:**
```
Prüfe alle SEO-technischen Grundlagen, robots.txt und Sitemap.

Lies die Dateien:
- src/app/robots.ts
- src/app/sitemap.ts
- src/app/layout.tsx (Metadata)
- src/app/page.tsx
- src/app/impressum/page.tsx
- src/app/datenschutz/page.tsx

Prüfe:

ROBOTS.TXT:
- Hauptseite (/) korrekt für alle Crawlers freigegeben?
- /api/ für Crawler gesperrt? (Sicherheitsempfehlung: Disallow: /api/)
- Sitemap-URL korrekt referenziert?
- AI-Bots (GPTBot, ClaudeBot, PerplexityBot) bewusst erlaubt oder geblockt?
- Stimmt die Sitemap-URL mit der tatsächlichen URL überein?

SITEMAP:
- Alle wichtigen Seiten enthalten? (Gibt es /faq oder andere Routen?)
- noindex-Seiten (/impressum, /datenschutz) NICHT in der Sitemap?
- Prioritäten realistisch? (homepage 1.0, andere 0.6-0.8)
- changefreq korrekt? (homepage: monthly, services: monthly)
- Absolute URLs mit https://vendori.eu?

CANONICAL & META:
- metadataBase: https://vendori.eu korrekt gesetzt?
- Canonical-URL auf jeder Seite?
- Keine doppelten Title-Tags?
- OG-Tags (og:title, og:description, og:image) für Social Media?

STRUCTURED DATA:
- Organization Schema.org Markup?
- LocalBusiness mit Adresse für deutschen Standort?
- JSON-LD valid? (kein Syntax-Fehler)

Berichte Critical-Fehler (Indexierungsverlust) und High-Fehler (Ranking-Impact) getrennt.
```

---

### 5.2 — Content-Prüfung auf Rechtliche Risiken (UWG/Markenrecht)

**Gesetzliche Grundlage:** UWG §5 (Irreführung), §6 (Vergleichende Werbung), MarkenG
**Risiko:** Abmahnungen durch Wettbewerber oder Verbraucherschutzverbände

**Subagent-Prompt:**
```
Prüfe alle Website-Texte auf rechtliche Risiken nach deutschem Wettbewerbs- und Markenrecht.

Lies die Dateien:
- src/sections/ (alle Sektionen mit Texten)
- src/app/page.tsx
- src/app/datenschutz/DatenschutzContent.tsx
- src/app/impressum/ImpressumContent.tsx
- public/llms.txt

Prüfe auf:

1. IRREFÜHRENDE WERBUNG (§5 UWG):
   - Superlative ("bestes", "günstigstes", "führend", "Nummer 1") — müssen belegbar sein
   - Garantieversprechen die nicht eingehalten werden können?
   - Aussagen über Ergebnisse oder Erfolge ohne Belege?
   - Testimonials/Bewertungen: als solche erkennbar und authentisch?

2. VERGLEICHENDE WERBUNG (§6 UWG):
   - Werden Mitbewerber direkt oder indirekt verglichen?
   - Solche Vergleiche objektiv und nicht herabsetzend?

3. MARKENRECHT:
   - Drittmarken (Amazon, eBay, Kaufland, Otto, Galaxus) korrekt als Plattformen genannt?
   - Kein Eindruck erweckt dass eine Partnerschaft/Lizenz besteht?
   - Logos von Plattformen verwendet? → Lizenz oder Entfernen nötig

4. PREISANGABEN (§1 PAngV):
   - Werden Preise genannt? → Immer Bruttopreise inkl. MwSt. und ggf. Versand

5. LLMS.TXT INHALT:
   - Interne Finanzkennzahlen, Umsatzzahlen, Mitarbeiterdaten enthalten?
   - Informationen die Wettbewerber für Competitive Intelligence nutzen können?
   - Personenbezogene Daten von Mitarbeitern? (DSGVO!)

6. KONSISTENZ:
   - Unternehmensname, Adresse, Kontaktdaten überall identisch?
   - Widersprüche zwischen Impressum und sonstigem Content?

Berichte Risiken mit Norm, Schweregrad und konkretem Text-Zitat.
```

---

## PHASE 6: FINALE VERIFIKATION

### 6.1 — End-to-End Funktionstest

**Subagent-Prompt:**
```
Erstelle eine vollständige End-to-End-Testcheckliste für alle kritischen Funktionen.

Lies die Dateien:
- src/app/page.tsx
- src/sections/ (alle Sektionen)
- src/app/api/contact/route.ts
- src/components/cookie-consent/
- src/sections/sticky_header/

Erstelle Test-Cases als Markdown-Checkliste [ ] für:

KONTAKTFORMULAR:
- [ ] Valides Formular absenden → Erfolgsmeldung erscheint
- [ ] E-Mail ohne @ → Fehlermeldung, kein Absenden
- [ ] Leeres Pflichtfeld → Fehlermeldung, kein Absenden
- [ ] Datenschutz-Checkbox nicht angehakt → Absenden blockiert
- [ ] Nachricht > 2000 Zeichen → Fehlermeldung
- [ ] Zweimal in < 5 Sekunden absenden → Client Rate-Limit greift
- [ ] Honeypot ausgefüllt → Anscheinend erfolgreich (silent fail)
- [ ] XSS-Versuch im Nachrichten-Feld (<script>alert(1)</script>) → Harmlos

COOKIE-CONSENT:
- [ ] Erster Besuch → Banner erscheint ohne Analytics-Cookies zu setzen
- [ ] "Alle akzeptieren" → Banner verschwindet, localStorage enthält alle true
- [ ] "Nur Notwendige" → Nur necessary=true, analytics=false, marketing=false
- [ ] "Einstellungen" → Modal öffnet sich, granulare Auswahl möglich
- [ ] Seite neu laden nach Consent → Banner erscheint NICHT
- [ ] Cookie-Einstellungen widerrufen → Mechanismus vorhanden und funktioniert

NAVIGATION & SEITEN:
- [ ] Alle Footer-Links funktionieren (Impressum, Datenschutz)
- [ ] /impressum erreichbar, vollständiger Inhalt
- [ ] /datenschutz erreichbar, vollständiger Inhalt
- [ ] 404-Seite vorhanden und sinnvoll gestaltet
- [ ] Alle Anchor-Links (#section) springen korrekt

RESPONSIVE & PERFORMANCE:
- [ ] Mobile 375px: Layout korrekt, keine überstehenden Elemente
- [ ] Tablet 768px: Layout korrekt
- [ ] Desktop 1280px: Layout korrekt
- [ ] Keine JavaScript-Fehler in Browser-Console
- [ ] Keine fehlgeschlagenen Netzwerkanfragen (404s auf Assets)

SICHERHEIT:
- [ ] http://vendori.eu → Redirect zu https://vendori.eu
- [ ] Security-Headers in DevTools → Network → Response Headers sichtbar
- [ ] Keine .map Source-Map-Dateien in Production-Bundle
- [ ] /api/contact GET-Anfrage → 405 Method Not Allowed
```

---

### 6.2 — Finaler Pre-Launch Security Scan

**Subagent-Prompt:**
```
Führe einen finalen Pre-Launch-Security-Scan der gesamten Codebase durch.

Durchsuche ALLE Dateien in src/, public/, scripts/, und Konfigurationsdateien.

Prüfe:

DEBUG & TEST-DATEN:
- console.log() in Production-Code (außer bewusste Fehler-Logs)?
- debugger-Statements?
- TODO/FIXME Kommentare mit Sicherheitsrelevanz?
- Test-E-Mails, Dummy-Passwörter, Platzhalter-Daten im Code?
- Werden ALLE Platzhalter in Impressum/Datenschutz durch echte Daten ersetzt?

DEVELOPMENT-ONLY CODE:
- if (process.env.NODE_ENV === 'development') Blöcke die sensible Infos zeigen?
- Mock-Funktionen statt echter Implementierungen aktiv?

PRODUCTION-KONFIGURATION:
- removeConsole in next.config.js für Production aktiv?
- Alle Environment-Variablen für Production gesetzt?
- output: 'standalone' konfiguriert?

PUBLIC-VERZEICHNIS:
- Sensible Dateien in /public/ (Backups, .env, temporäre Dateien)?
- Alte Screenshots oder Test-Assets?
- llms.txt finalisiert und datenschutzrechtlich geprüft?

GIT:
- .gitignore: .env.local, /screenshots, /node_modules, *.key, *.pem enthalten?
- Keine .env-Dateien im Repository?

ERROR-PAGES:
- /app/not-found.tsx vorhanden? (Custom 404)
- /app/error.tsx vorhanden? (Custom Error)
- Keine Stack-Traces oder internen Fehlermeldungen auf Error-Seiten?

FINALE npm-PRÜFUNGEN:
- npm audit: 0 Critical, 0 High Vulnerabilities?
- Alle direkten Dependencies auf aktuelle stabile Versionen?

Berichte alle Funde als priorisierte Checkliste.
```

---

## Finale Verifikations-Checkliste

Nach vollständiger Abarbeitung aller Prüfpunkte:

### Rechtlich
- [x] Impressum vollständig nach DDG §5
- [x] Datenschutzerklärung vollständig nach DSGVO Art. 13
- [ ] AVV mit Vercel, n8n, AWS/CloudFront, SMTP-Anbieter abgeschlossen
- [ ] Verzeichnis von Verarbeitungstätigkeiten (VVT) erstellt
- [ ] Cookie-Consent TTDSG §25 konform (Opt-in, keine Dark Patterns)
- [ ] Keine irreführenden Werbeaussagen (UWG §5)
- [ ] Barrierefreiheitserklärung vorhanden (BFSG §12, Pflicht ab 28.06.2025)

### Technisch
- [ ] A+ Rating: securityheaders.com
- [ ] A+ Rating: ssllabs.com/ssltest
- [ ] npm audit: 0 Critical, 0 High
- [ ] Keine hardcoded Secrets im Repository
- [ ] CSP ohne `unsafe-eval`
- [ ] HSTS max-age ≥ 31536000 mit includeSubDomains + preload
- [ ] Source-Maps in Production deaktiviert

### Infrastruktur
- [ ] SPF-Record für sendende Domain gesetzt
- [ ] DKIM-Schlüssel eingetragen
- [ ] DMARC-Policy mindestens `p=quarantine`
- [ ] AVV mit Vercel abgeschlossen (DPA)
- [ ] Preview-Deployments gesichert (kein Zugriff auf Produktionsdaten)

### Barrierefreiheit
- [ ] WCAG 2.1 Level AA — Basis-Compliance
- [ ] Barrierefreiheitserklärung unter /barrierefreiheit erreichbar
- [ ] Axe/WAVE-Tool: 0 Critical Violations

### Performance
- [ ] LCP < 2.5s (Lighthouse)
- [ ] CLS < 0.1 (Lighthouse)
- [ ] INP < 200ms (Lighthouse)
- [ ] PageSpeed Insights Score ≥ 90 (Mobile)

### SEO
- [ ] Sitemap vollständig und korrekt
- [ ] robots.txt korrekt konfiguriert
- [ ] Alle wichtigen Seiten indexierbar
- [ ] Structured Data valide (schema.org Validator)

---

## Kritische Dateien für die Prüfung

| Datei | Prüfbereich |
|---|---|
| [middleware.ts](middleware.ts) | Security Headers (Phase 2.2) |
| [src/app/api/contact/route.ts](src/app/api/contact/route.ts) | API-Sicherheit (Phase 2.3) |
| [src/lib/email/rate-limiter.ts](src/lib/email/rate-limiter.ts) | Rate-Limiting, Datenspeicherung |
| [src/sections/contact_section/validation.ts](src/sections/contact_section/validation.ts) | Injection-Schutz (Phase 2.1) |
| [src/components/cookie-consent/](src/components/cookie-consent/) | TTDSG-Compliance (Phase 1.5) |
| [src/app/datenschutz/DatenschutzContent.tsx](src/app/datenschutz/DatenschutzContent.tsx) | Datenschutzerklärung (Phase 1.2) |
| [src/app/impressum/ImpressumContent.tsx](src/app/impressum/ImpressumContent.tsx) | Impressum (Phase 1.1) |
| [next.config.js](next.config.js) | Production-Konfiguration |
| [.env.example](.env.example) | Secrets-Management (Phase 2.5) |
| [src/app/robots.ts](src/app/robots.ts) | SEO/Robots (Phase 5.1) |
| [src/app/sitemap.ts](src/app/sitemap.ts) | SEO/Sitemap (Phase 5.1) |

---

*Erstellt: 2026-03-29 | VENDORi GmbH Website Go-Live Vorbereitung*
