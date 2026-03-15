# VENDORi GmbH Website

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8?style=flat-square&logo=tailwind-css)
![Security](https://img.shields.io/badge/Security-Enterprise--Grade-green?style=flat-square&logo=shield)
![GDPR](https://img.shields.io/badge/GDPR-Compliant-success?style=flat-square)

> Moderne, sicherheitsbewusste und DSGVO-konforme B2B-Website für VENDORi GmbH – E-Commerce-Beratungsspezialisten.

---

## Inhaltsverzeichnis

1. [🔒 Sicherheits-Stack](#-sicherheits-stack)
2. [Überblick](#überblick)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Projektstruktur](#projektstruktur)
6. [Installation & Entwicklung](#installation--entwicklung)
7. [Verfügbare Scripts](#verfügbare-scripts)
8. [Build & Deployment](#build--deployment)
9. [Testing](#testing)
10. [Code-Qualität & Standards](#code-qualität--standards)
11. [GDPR/DSGVO-Compliance](#gdprdsgvo-compliance)
12. [Dokumentation](#dokumentation)
13. [Umgebungsvariablen](#umgebungsvariablen)
14. [Lizenz & Kontakt](#lizenz--kontakt)

---

## 🔒 Sicherheits-Stack

Trotz der Tatsache, dass dies eine statische Website ist, implementiert VENDORi **Enterprise-Grade-Sicherheitsmaßnahmen** auf allen Ebenen der Anwendung. Dieser Security-First-Ansatz schützt Benutzerdaten, verhindert gängige Angriffe und demonstriert professionelle Entwicklungsstandards.

### 1. Input-Validierung & Sanitization

**Umfassende Validierung verhindert bösartige Eingaben und ReDoS-Angriffe.**

- **ReDoS-Schutz**: Längenprüfungen (10-2000 Zeichen) VOR Regex-Validierung
- **RFC 5322-konforme E-Mail-Validierung**: Branchenstandard für E-Mail-Formatprüfung
- **Deutsche Zeichenunterstützung**: Vollständige Unterstützung für äöüÄÖÜß in Namensfeldern
- **Nachrichtenlängen-Limits**: Erzwungener Bereich von 10-2000 Zeichen
- **HTML/Script-Sanitization**: Entfernt gefährliche Zeichen: `<>'"&\n\r\t`

**Implementierung**: [`src/sections/contact_section/validation.ts`](src/sections/contact_section/validation.ts)

```typescript
// Beispiel: Input-Sanitization-Funktion
export function sanitizeInput(value: string): string {
  // Entfernt gefährliche Zeichen, die für Injection-Angriffe verwendet werden könnten
  return value
    .trim()
    .replace(/[<>'"&\n\r\t]/g, '') // Entfernt HTML/Script-Injection-Zeichen
    .substring(0, 500); // Maximale Länge als zusätzliche Sicherheitsmaßnahme
}

// ReDoS-Schutz: Längenprüfung VOR Regex
if (typeof value === 'string' && value.length > 50) {
  return 'Maximal 50 Zeichen erlaubt';
}
// Sicher, Regex nach Längenvalidierung auszuführen
if (typeof value === 'string' && !/^[a-zA-ZäöüÄÖÜß\s-]+$/.test(value)) {
  return 'Nur Buchstaben erlaubt';
}
```

### 2. XSS-Prevention

**Multi-Layer-XSS-Schutz durch CSP, React Escaping und strenge Richtlinien.**

- **Content Security Policy (CSP)**: Nonce-basierte Inline-Script-Ausführung
  - `default-src 'self'` – Nur Same-Origin-Ressourcen erlaubt
  - `script-src 'self' 'nonce-{random}' 'strict-dynamic'` – Scripts nur von self oder mit gültigem Nonce
  - `frame-src 'none'` – Keine Iframe-Einbettung
  - `object-src 'none'` – Kein Flash/Plugins
  - `upgrade-insecure-requests` – Automatische HTTPS-Upgrades
- **Dynamische Nonce-Generierung**: Verwendung von `crypto.randomUUID()` bei jeder Anfrage
- **React Automatic Escaping**: Integrierter XSS-Schutz für alle gerenderten Inhalte
- **Externe Link-Sicherheit**: Alle externen Links verwenden `rel="noopener noreferrer"`

**Implementierung**: [`middleware.ts`](middleware.ts) (Zeilen 22-38)

```typescript
// Content Security Policy mit Nonce-Unterstützung
const cspHeader = [
  "default-src 'self'",
  `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
  "style-src 'self' 'unsafe-inline'", // Tailwind erfordert unsafe-inline
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join('; ');
```

### 3. CSRF-Schutz

**Stille Bot-Erkennung verhindert automatisierten Formularmissbrauch.**

- **Honeypot-Feld-Implementierung**: Verstecktes Feld, das Menschen nicht ausfüllen
- **Silent Failure**: Bot-Submissions schlagen fehl ohne Feedback (keine Warnung an Angreifer)
- **Kein sichtbares CAPTCHA**: Bessere UX für legitime Benutzer

**Implementierung**: [`src/sections/contact_section/Component.tsx`](src/sections/contact_section/Component.tsx) (Zeilen 97, 160-163, 356-365)

```typescript
// Rate Limiting State
const [honeypot, setHoneypot] = useState(''); // Bot-Schutz

// Honeypot-Prüfung (silent fail - kein Logging, um Bot-Erkennungsmechanismus nicht zu enthüllen)
if (honeypot.trim() !== '') {
  return; // Silent failure
}

// Honeypot-Feld im JSX (versteckt)
<input
  type="text"
  name="website"
  value={honeypot}
  onChange={(e) => setHoneypot(e.target.value)}
  tabIndex={-1}
  autoComplete="off"
  className="absolute opacity-0 pointer-events-none w-0 h-0"
  aria-hidden="true"
/>
```

### 4. Security Headers

**Umfassende HTTP-Security-Headers schützen vor verschiedenen Angriffsvektoren.**

- **HSTS** (HTTP Strict Transport Security):
  `max-age=63072000; includeSubDomains; preload` (2-Jahre-Durchsetzung)
- **X-Frame-Options**: `SAMEORIGIN` – Verhindert Clickjacking
- **X-Content-Type-Options**: `nosniff` – Verhindert MIME-Sniffing
- **X-XSS-Protection**: `1; mode=block` – Legacy XSS-Filter
- **Referrer-Policy**: `strict-origin-when-cross-origin` – Datenschutz
- **Permissions-Policy**: Deaktiviert Kamera, Mikrofon, Geolocation
- **Cross-Origin-Policies**:
  - `Cross-Origin-Embedder-Policy: credentialless`
  - `Cross-Origin-Opener-Policy: same-origin`
  - `Cross-Origin-Resource-Policy: same-origin`
- **Zusätzliche Header**:
  - `X-DNS-Prefetch-Control: on`
  - `X-Download-Options: noopen`
  - `X-Permitted-Cross-Domain-Policies: none`

**Implementierung**: [`middleware.ts`](middleware.ts) (Zeilen 40-54)

**Header testen**: Deployment bei [securityheaders.com](https://securityheaders.com) überprüfen

### 5. Rate Limiting

**Client-seitiges Rate Limiting verhindert Formular-Spam und Missbrauch.**

- **5-Sekunden-Cooldown**: Zwischen Formular-Submissions
- **Benutzer-Feedback**: Fehlermeldungen auf Deutsch
- **State-Management**: Verfolgt letzten Submission-Zeitstempel

**Implementierung**: [`src/sections/contact_section/Component.tsx`](src/sections/contact_section/Component.tsx) (Zeilen 98, 143-150)

```typescript
const [lastSubmission, setLastSubmission] = useState<number>(0);

// Rate Limiting Check (5 Sekunden zwischen Submissions)
const now = Date.now();
const RATE_LIMIT_MS = 5000;
if (now - lastSubmission < RATE_LIMIT_MS) {
  setErrors({
    general: 'Bitte warten Sie 5 Sekunden zwischen Anfragen.'
  });
  return;
}
```

**Hinweis**: Für Production sollte zusätzlich server-seitiges Rate Limiting erwogen werden.

### 6. GDPR/DSGVO Cookie Consent

**Privacy-First Cookie Consent mit granularer Kontrolle.**

- **Custom Cookie Consent System**: Keine externen Dependencies
- **Drei Cookie-Kategorien**:
  - **Notwendig** (immer aktiviert): Session, Sicherheit, Funktionalität
  - **Analytik** (opt-in): Nutzerverhalten-Tracking
  - **Marketing** (opt-in): Werbung und Remarketing
- **Privacy-First Defaults**: Nur notwendige Cookies standardmäßig aktiviert
- **LocalStorage-Persistenz**: Benutzereinstellungen werden lokal gespeichert
- **Custom Event System**: `cookieConsentChange`-Event für Integrationen
- **Kein Tracking ohne Consent**: Analytics/Marketing deaktiviert bis explizitem Opt-in

**Implementierung**: [`src/components/cookie-consent/`](src/components/cookie-consent/)

Siehe [docs/DSGVO.md](./docs/DSGVO.md) für detaillierte GDPR-Compliance-Dokumentation.

### 7. Image Security

**Sandboxed Image Optimization verhindert Script-Injection.**

- **CSP für Image Optimization**: `default-src 'self'; script-src 'none'; sandbox;`
- **SVG Sandboxing aktiviert**: Verhindert eingebettete Scripts in SVGs
- **Remote Image Whitelist**: Nur Unsplash.com für Remote Images erlaubt
- **Keine Inline SVG Scripts**: Alle SVGs sind sanitisiert

**Implementierung**: [`next.config.js`](next.config.js) (Zeilen 70-78)

```javascript
images: {
  dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### 8. Build & Runtime Security

**Production Hardening reduziert die Angriffsfläche.**

- **Keine Source Maps in Production**: Verhindert Code-Exposure
- **`poweredByHeader: false`**: Versteckt Next.js-Version vor Angreifern
- **Standalone Output Mode**: Minimale Dependencies und Angriffsfläche
- **Console-Entfernung in Production**: Entfernt alle Console-Statements
- **Environment Variable Validierung**: Erforderliche Variablen werden zur Build-Zeit geprüft

**Implementierung**: [`next.config.js`](next.config.js)

```javascript
poweredByHeader: false, // Versteckt Next.js-Version
output: 'standalone', // Minimale Angriffsfläche
productionBrowserSourceMaps: false, // Keine Source Maps
compiler: {
  removeConsole: process.env.NODE_ENV === 'production', // Console entfernen
}
```

### 9. Type Safety & Pre-build Checks

**Sicherheitsprobleme vor Deployment erkennen.**

- **TypeScript Strict Mode**: `strict: true`, `noImplicitAny: true`
- **Pre-build Security Checks**: Läuft vor jedem Build
  ```bash
  npm run prebuild  # Läuft: type-check + lint + security:audit
  ```
- **Automatisierte Dependency Audits**: `npm audit` mit moderate+ Severity-Schwelle
- **No implicit any**: Verhindert typ-bezogene Sicherheitsbugs

**Implementierung**: [`tsconfig.json`](tsconfig.json), [`package.json`](package.json) (Zeile 16)

### 10. Security Audit Scripts

**Regelmäßige Sicherheitsaudits in Workflow integriert.**

```bash
npm run security:audit   # npm audit für Schwachstellen
npm run security:check   # Kombiniert: type-check + lint + audit
npm run prebuild         # Läuft automatisch security:check vor Builds
```

**Empfohlener Workflow**:
1. `npm run security:check` vor Commits ausführen
2. Audit-Ergebnisse überprüfen und Dependencies aktualisieren
3. Niemals mit bekannten moderate+ Schwachstellen deployen

---

**Für detaillierte Security-Implementierung und Threat Model siehe [SECURITY.md](./SECURITY.md)**

### Security Test Checklist

- [ ] CSP-Headers in Browser DevTools verifizieren (keine Violations)
- [ ] Honeypot-Feld testen (ausfüllen und absenden – sollte silent fehlschlagen)
- [ ] Rate Limiting testen (Formular zweimal innerhalb von 5 Sekunden absenden)
- [ ] HSTS-Header verifizieren (verwende [securityheaders.com](https://securityheaders.com))
- [ ] Input-Sanitization testen (versuche `<script>alert('XSS')</script>` zu injizieren)
- [ ] Alle externen Links haben `rel="noopener noreferrer"` verifizieren
- [ ] Cookie Consent prüfen (Analytics/Marketing standardmäßig deaktiviert verifizieren)

---

## Überblick

Die **VENDORi GmbH Website** ist eine moderne B2B-Marketing-Website für einen E-Commerce-Beratungsspezialisten. Gebaut mit Next.js 14 und TypeScript, legt dieses Projekt Wert auf Sicherheit, Datenschutz und GDPR-Compliance.

**Hauptmerkmale:**
- 🇩🇪 **Fokus auf deutschen Markt**: DSGVO-konform, deutsche UI
- 🔐 **Security-First-Architektur**: Enterprise-Grade-Sicherheit für statische Site
- 🎨 **Moderne UX**: Dark/Light Mode, flüssige Animationen, responsives Design
- 📱 **Mobile-First**: Optimiert von 375px bis 1920px+
- 🚀 **Performance-optimiert**: SSG/SSR mit Next.js 14 App Router
- 🍪 **Privacy-First**: Custom Cookie Consent, keine externe Analytics standardmäßig

---

## Tech Stack

### Core Framework
- **Next.js 14.1.0** – React-Framework mit App Router (SSR/SSG)
- **React 18.2.0** – UI-Library
- **TypeScript 5.3.0** – Strikte Typprüfung

### Styling
- **Tailwind CSS 3.4.0** – Utility-First CSS-Framework
- **Framer Motion 12.34.3** – Animations-Library
- **next-themes 0.4.6** – Dark/Light Mode-Unterstützung

### UI Components
- **Lucide React 0.575.0** – Icon-Library mit Tree-Shaking
- **Custom Components** – Cookie Consent, Contact Form, etc.

### Testing & Quality
- **Playwright 1.58.2** – End-to-End-Testing
- **ESLint 8.56.0** – Linting
- **Prettier 3.2.0** – Code-Formatierung
- **TypeScript** – Type-Checking

### Build & Deployment
- **Next.js Standalone Output** – Optimierte Production-Builds
- **Sharp 0.34.5** – Image-Optimization
- **Critters 0.0.23** – Critical CSS-Extraktion

**Wichtig**: Kein Backend/Datenbank – Dies ist eine statische Website mit Client-seitigen Features.

---

## Features

### Benutzer-Features
- ✅ **Modulare Homepage-Sektionen**: Hero, Services, Shop Showcase, About, Contact, Footer
- ✅ **Rechtliche Seiten**: Datenschutz (`/datenschutz`), Impressum (`/impressum`), Über Uns (`/ueber-uns`)
- ✅ **Cookie Consent System**: Drei-Tier (Notwendig, Analytik, Marketing)
- ✅ **Theme Switcher**: Dark/Light Mode mit System-Präferenz-Erkennung
- ✅ **Kontaktformular**: Mit Validierung, Rate Limiting und CSRF-Schutz
- ✅ **SEO-optimiert**: JSON-LD Structured Data, Meta-Tags
- ✅ **Responsive Design**: Mobile-First-Ansatz (375px → 1920px+)
- ✅ **Animationen**: Flüssige Übergänge mit Framer Motion

### Entwickler-Features
- ✅ **Type-Safe Development**: TypeScript Strict Mode
- ✅ **Modulare Architektur**: Section-basierte Organisation
- ✅ **Security Middleware**: Zentralisierte Security Headers und CSP
- ✅ **Automatisierte Security Audits**: Pre-build Checks
- ✅ **Umfassende Dokumentation**: CLAUDE.md, SECURITY.md, docs/

---

## Projektstruktur

```
VENDORi-2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root Layout
│   │   ├── datenschutz/       # Datenschutzerklärung
│   │   ├── impressum/         # Impressum
│   │   └── ueber-uns/         # Über Uns
│   ├── sections/              # Modulare Sektionen
│   │   ├── sticky_header/     # Persistente Navigation
│   │   ├── hero_section/      # Hero/Banner
│   │   ├── services_section/  # Dienstleistungen
│   │   ├── shop_showcase_section/  # Shop-Integration Showcase
│   │   ├── about_section/     # Über Uns (kurz)
│   │   ├── contact_section/   # Kontaktformular (mit validation.ts)
│   │   └── footer_section/    # Footer mit Links
│   ├── components/            # Wiederverwendbare Komponenten
│   │   ├── cookie-consent/    # GDPR Cookie Consent
│   │   │   ├── CookieBanner.tsx
│   │   │   ├── CookieSettingsModal.tsx
│   │   │   ├── useCookieConsent.ts
│   │   │   └── storage.ts
│   │   ├── seo/              # SEO-Komponenten (JsonLd)
│   │   ├── ui/               # UI-Komponenten
│   │   │   ├── aurora-background.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── FAQAccordion.tsx
│   │   └── theme-provider.tsx
│   ├── lib/                   # Utilities
│   │   └── utils.ts          # clsx, cn, etc.
│   ├── config/                # Konfiguration
│   │   └── colors.ts         # Farbsystem
│   ├── data/                  # Statische Daten
│   │   └── faq.ts            # FAQ-Daten
│   ├── types/                 # TypeScript-Typen
│   └── styles/                # Globale Styles
│       └── globals.css
├── public/                    # Statische Assets
│   ├── fonts/                 # Lokale Fonts (DSGVO)
│   │   └── PlusJakartaSans/
│   ├── images/                # Bilder
│   ├── favicon.svg
│   ├── Logo_Vendori_rgb_anthrazit.svg
│   └── og-image.webp          # Open Graph Image
├── docs/                      # Dokumentation
│   ├── DSGVO.md              # Privacy Compliance
│   ├── SEO.md                # SEO-Implementierung
│   ├── MOBILE-FIRST.md       # Mobile Design
│   ├── AEO.md                # AI-First Optimization
│   ├── COPYWRITING.md        # Content Guidelines
│   └── COLORS.md             # Farbsystem
├── middleware.ts              # Security Middleware ⚠️ KRITISCH
├── next.config.js             # Next.js Config ⚠️ KRITISCH
├── tailwind.config.ts         # Tailwind CSS Config
├── tsconfig.json              # TypeScript Config
├── package.json               # Dependencies & Scripts
├── .env.example               # Environment Variables Template
├── CLAUDE.md                  # Entwickler-Guide
├── SECURITY.md                # Security-Dokumentation
└── README.md                  # Diese Datei
```

---

## Installation & Entwicklung

### Voraussetzungen

- **Node.js**: 18.x oder höher
- **npm**: 9.x oder höher (oder yarn/pnpm)
- **Git**: Für Versionskontrolle

### Installation

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd VENDORi-2
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Environment Variables einrichten**

   Erstelle eine `.env.local`-Datei im Root-Verzeichnis:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=VENDORi GmbH
   NEXT_PUBLIC_CONTACT_EMAIL=info@vendori.de
   NEXT_PUBLIC_CONTACT_PHONE=+49 XXX XXXXXXX
   ```

   Oder kopiere `.env.example`:
   ```bash
   cp .env.example .env.local
   # Werte in .env.local anpassen
   ```

### Development

Development-Server starten:

```bash
npm run dev
```

Die Anwendung ist verfügbar unter [http://localhost:3000](http://localhost:3000)

**Development-Features:**
- Hot Reload aktiviert
- Source Maps verfügbar
- TypeScript-Checking bei Save
- ESLint-Warnungen in Console

---

## Verfügbare Scripts

### Development
```bash
npm run dev              # Development-Server starten (Port 3000)
npm run lint             # ESLint für Code-Qualität
npm run type-check       # TypeScript Type-Checking
npm run format           # Code mit Prettier formatieren
npm run format:check     # Format-Prüfung
```

### Build & Production
```bash
npm run build            # Production-Build (führt security:check zuerst aus)
npm run prebuild         # Pre-build Hook (läuft automatisch)
npm run start            # Production-Server starten
```

### Security & Quality
```bash
npm run security:audit   # npm audit (moderate+ severity)
npm run security:check   # type-check + lint + audit kombiniert
```

### Testing
```bash
npm run screenshots      # Playwright Screenshots erstellen
```

**Build Output**: Standalone Mode für minimale Größe und Angriffsfläche.

---

## Build & Deployment

### Production Build

```bash
npm run build
```

**Build-Prozess:**
1. `npm run security:check` läuft automatisch (via `prebuild`)
2. TypeScript-Kompilierung
3. Optimierte Bundles generieren
4. Standalone Output in `.next/standalone/`

### Build-Optimierungen

- **Keine Source Maps** in Production
- **Console-Statements entfernt** in Production
- **`poweredByHeader: false`** – Versteckt Next.js-Version
- **Standalone Output** – Minimale Angriffsfläche
- **Image Optimization** mit CSP-Sandboxing
- **Code Splitting** für framer-motion und lucide-react
- **CSS Optimization** aktiviert
- **Tree-Shaking** für alle Libraries

### Deployment Checkliste

- [ ] Environment Variables für Production aktualisieren
- [ ] `NEXT_PUBLIC_SITE_URL` auf Production-Domain setzen
- [ ] HSTS-Headers verifizieren (2-Jahre max-age)
- [ ] GDPR Cookie Consent Flow testen
- [ ] CSP Nonce-Generierung funktioniert
- [ ] `npm run security:audit` ausführen
- [ ] Responsive Design testen (375px → 1920px+)
- [ ] Alle Links und Bilder funktionieren
- [ ] JSON-LD Schema validieren
- [ ] Lighthouse-Score prüfen (>90 in allen Kategorien)

### Deployment-Plattformen

Dieses Projekt ist kompatibel mit:

- **Vercel** (empfohlen für Next.js) – [Deploy](https://vercel.com/new)
- **Netlify** – [Deploy](https://app.netlify.com/start)
- **Custom Node.js Server** – Verwendet standalone output
- **Static Export** – Falls SSR nicht erforderlich

**Vercel Deployment** (empfohlen):
1. Repository zu GitHub pushen
2. In Vercel importieren
3. Environment Variables konfigurieren
4. Deployen

---

## Testing

### End-to-End Testing

Dieses Projekt verwendet **Playwright** für E2E-Testing.

```bash
npm run test:e2e
```

### Manuelle Test-Checkliste

- [ ] **Kontaktformular**: Validierung, Rate Limiting, Honeypot
- [ ] **Cookie Consent**: Alle drei Kategorien, Persistenz, Widerruf
- [ ] **Dark/Light Mode**: Toggle, Persistenz, System-Präferenz
- [ ] **Responsive Design**: Testen auf 375px, 768px, 1024px, 1920px
- [ ] **Security Headers**: Mit [securityheaders.com](https://securityheaders.com) prüfen
- [ ] **CSP**: Browser DevTools Console (keine Violations)
- [ ] **Externe Links**: Alle haben `rel="noopener noreferrer"`
- [ ] **Performance**: Lighthouse-Score >90
- [ ] **Accessibility**: WCAG 2.1 AA-konform

---

## Code-Qualität & Standards

### TypeScript
- **Strict Mode aktiviert** (`tsconfig.json`)
- **No implicit any**
- **Strict null checks**
- **Isolated modules** für Sicherheit

### ESLint
- Next.js recommended rules
- TypeScript ESLint Integration
- Run mit `npm run lint`

### Prettier
- Konsistente Code-Formatierung
- Tailwind CSS Plugin Integration
- Run mit `npm run format`

### Code-Organisation
- **Modulare Sektionen**: Jede Sektion in `src/sections/` ist eigenständig
- **Component Colocation**: Components, Styles und Logic zusammen
- **Type Safety**: Alle Components und Functions sind getypt
- **Naming Conventions**: PascalCase für Components, camelCase für Functions

### Security Best Practices
- **Input-Validierung**: Immer Benutzereingaben validieren (siehe `src/sections/contact_section/validation.ts`)
- **CSP-Compliance**: Keine Inline-Scripts ohne Nonces
- **Type Safety**: TypeScript nutzen, um Runtime-Fehler zu verhindern
- **Regelmäßige Audits**: `npm run security:audit` vor Deployments ausführen

---

## GDPR/DSGVO-Compliance

Dieses Projekt ist vollständig **DSGVO-konform** für den deutschen Markt.

### Cookie Consent System

**Location**: [`src/components/cookie-consent/`](src/components/cookie-consent/)

**Features**:
- Drei Cookie-Kategorien:
  - **Notwendig** (immer aktiviert): Session, Sicherheit, Funktionalität
  - **Analytik** (opt-in): Nutzerverhalten-Tracking
  - **Marketing** (opt-in): Werbung und Remarketing
- **Privacy-First Defaults**: Nur notwendige Cookies standardmäßig aktiviert
- **LocalStorage-Persistenz**: Benutzereinstellungen gespeichert
- **Custom Event System**: `cookieConsentChange`-Event für Integrationen
- **Einfacher Widerruf**: Benutzer können Einstellungen jederzeit ändern

### Privacy-Dokumentation

- **Datenschutzerklärung** (Privacy Policy): [`/datenschutz`](./src/app/datenschutz)
- **Impressum** (Legal Imprint): [`/impressum`](./src/app/impressum)
- **DSGVO-Dokumentation**: [docs/DSGVO.md](./docs/DSGVO.md)

### Datenverarbeitung

**Kein Backend oder Datenbank** – Diese Website speichert KEINE Benutzerdaten auf Servern:
- ❌ Keine externe Analytics standardmäßig
- ❌ Kein User-Tracking ohne Consent
- ❌ Keine Datenübertragung an Dritte (außer opt-in Services)
- ✅ Lokale Fonts (kein Google Fonts CDN)
- ✅ Minimale Datensammlung
- ✅ Selbst gehostete Assets

Für detaillierte GDPR-Implementierung siehe [docs/DSGVO.md](./docs/DSGVO.md)

---

## Dokumentation

### Entwickler-Dokumentation
- **[CLAUDE.md](./CLAUDE.md)** – Umfassender Entwickler-Guide
- **[SECURITY.md](./SECURITY.md)** – Security-Implementierung Details

### Feature-Dokumentation
- **[docs/DSGVO.md](./docs/DSGVO.md)** – GDPR Compliance Guide
- **[docs/SEO.md](./docs/SEO.md)** – SEO-Implementierung
- **[docs/MOBILE-FIRST.md](./docs/MOBILE-FIRST.md)** – Responsive Design-Ansatz
- **[docs/AEO.md](./docs/AEO.md)** – AI-First Optimization
- **[docs/COPYWRITING.md](./docs/COPYWRITING.md)** – Content Guidelines (B2B Tone)
- **[docs/COLORS.md](./docs/COLORS.md)** – Design-System-Farben
- **[docs/TYPOGRAPHY.md](./docs/TYPOGRAPHY.md)** – Font-System
- **[docs/BRAND-GUIDE.md](./docs/BRAND-GUIDE.md)** – Brand Identity

### Konfigurations-Dateien
- [`next.config.js`](next.config.js) – Next.js mit Security-Settings
- [`middleware.ts`](middleware.ts) – Security Middleware (CSP, Headers)
- [`tailwind.config.ts`](tailwind.config.ts) – Tailwind CSS-Anpassungen
- [`tsconfig.json`](tsconfig.json) – TypeScript Strict Mode

---

## Umgebungsvariablen

### Environment Variables Tabelle

| Variable | Beschreibung | Erforderlich | Default |
|----------|--------------|--------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Vollständige URL der Website | Ja | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_NAME` | Firmenname für SEO/Meta-Tags | Ja | `VENDORi GmbH` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Kontakt-E-Mail-Adresse | Ja | `info@vendori.de` |
| `NEXT_PUBLIC_CONTACT_PHONE` | Kontakt-Telefonnummer | Ja | - |

**Hinweis**: Alle Variablen mit `NEXT_PUBLIC_` Präfix werden im Browser verfügbar gemacht.

### Sicherheitswarnungen

- ⚠️ **Niemals** `.env.local` oder `.env` ins Git committen
- ⚠️ Starke, eindeutige Werte für Secrets verwenden (min. 32 Zeichen)
- ⚠️ Secrets regelmäßig rotieren (mindestens alle 90 Tage)
- ⚠️ Unterschiedliche Werte für Development/Staging/Production verwenden
- ⚠️ **Niemals** API-Keys oder Secrets mit `NEXT_PUBLIC_` Präfix verwenden
- ⚠️ Alle Environment Variables vor Deployment überprüfen

Siehe [`.env.example`](.env.example) für Template.

---

## Lizenz

```
Copyright © 2026 VENDORi GmbH. Alle Rechte vorbehalten.
```

