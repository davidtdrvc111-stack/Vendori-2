# VENDORi GmbH Website - Entwicklungs-Dokumentation

## Tech Stack

- **Next.js 14+** mit App Router, SSR/SSG
- **React 18** mit Server Components
- **TypeScript 5** (strict mode)
- **Tailwind CSS 3** (Utility-first)
- **ESLint + Prettier** (Code Quality)

## Projektstruktur

Modulare, sektionsbasierte Architektur:

```
src/
├── app/              # Next.js Pages & Layouts
├── sections/         # Modulare Seitensektionen
│   ├── sticky_header/
│   ├── hero_section/
│   ├── about_section/
│   ├── services_section/
│   ├── contact_section/
│   └── footer_section/
├── components/       # Shared Components
│   ├── cookie-consent/
│   ├── ui/
│   └── layout/
├── lib/              # Utilities
├── config/           # Configuration
├── types/            # TypeScript Types
└── hooks/            # Custom Hooks
```

**Sektion Pattern**: Jede Sektion in eigenem Ordner mit `Component.tsx`, `types.ts`, `index.ts`

## Path Aliases

```typescript
@/*            → src/*
@/sections/*   → src/sections/*
@/components/* → src/components/*
@/lib/*        → src/lib/*
@/config/*     → src/config/*
@/types/*      → src/types/*
@/hooks/*      → src/hooks/*
```

## Mobile-First Design

**WICHTIG**: Die gesamte Website MUSS für Mobile-First ausgelegt werden!

### Prinzipien:
- ✅ Design startet bei kleinsten Breakpoint (Mobile)
- ✅ Tailwind Mobile-First Breakpoints verwenden
- ✅ Content-Hierarchie für kleine Screens optimieren
- ✅ Touch-freundliche Elemente (min. 44x44px)
- ✅ Responsive Images (next/image)
- ✅ Performance-optimiert für mobile Geräte

### Tailwind Breakpoints (Mobile-First):
```tsx
<div className="
  text-sm        // Mobile (default, < 640px)
  sm:text-base   // Small (≥ 640px)
  md:text-lg     // Medium (≥ 768px)
  lg:text-xl     // Large (≥ 1024px)
  xl:text-2xl    // Extra Large (≥ 1280px)
">
  Content
</div>
```

### Testing:
- Chrome DevTools (Mobile Emulation)
- Responsive Design Mode testen
- Touch-Interaktionen prüfen

**Ausführliche Mobile-First Dokumentation**: [docs/MOBILE-FIRST.md](./docs/MOBILE-FIRST.md)

## SEO-Optimierung (Phase 2)

**⏰ SPÄTER**: SEO wird implementiert NACH der Haupt-Website (Phase 2)

### Quick Reference:
- Metadata (Title, Description) für jede Seite
- Semantic HTML (h1-h6 Hierarchie)
- Schema.org Markup + Sitemap
- Core Web Vitals (LCP < 2.5s)
- Alt-Tags für alle Bilder

**Dokumentation**: [docs/SEO.md](./docs/SEO.md)

## AEO-Optimierung (Phase 2)

**⏰ SPÄTER**: AEO wird implementiert NACH der Haupt-Website (Phase 2)

### Quick Reference:
- Direkte Antworten auf häufige Fragen
- FAQ-Strukturen mit Schema Markup
- Natürliche, konversationelle Sprache
- Kontext-reiche, vollständige Inhalte
- JSON-LD für alle Entitäten

**Dokumentation**: [docs/AEO.md](./docs/AEO.md)

## Copywriting Guidelines

**Wichtig**: Konsistente, professionelle B2B-Kommunikation!

### Quick Reference:
- **Tone of Voice**: Professional-Modern, Siezen (B2B)
- **Prinzipien**: Klarheit vor Kreativität, Nutzen statt Features
- **CTAs**: Aktionsverben, max. 3 Wörter (z.B. "Kontakt aufnehmen")
- **Headlines**: Nutzen kommunizieren, max. 60 Zeichen
- **Zielgruppe**: B2B-Entscheider, Mittelstand, IT-Leiter

**Ausführliche Copywriting-Dokumentation**: [docs/COPYWRITING.md](./docs/COPYWRITING.md)

## DSGVO Compliance

**Wichtig**: Custom Cookie Consent System implementiert!

### Quick Reference:
- ✅ Cookie Consent VOR nicht-essentiellen Cookies
- ✅ 3 Optionen: Alle / Nur Notwendige / Einstellungen
- ✅ Kategorien: Notwendig (immer), Analytik, Marketing
- ✅ Lokale Fonts, keine externen Tracker ohne Consent
- ✅ Seiten erforderlich: `/datenschutz`, `/impressum`

**Ausführliche DSGVO-Dokumentation**: [docs/DSGVO.md](./docs/DSGVO.md)

## Entwicklungs-Guidelines

### Code Style
- TypeScript für alle Dateien
- Named Exports bevorzugen
- Funktionale Komponenten mit Hooks

### Namenskonventionen
- Komponenten: `PascalCase`
- Funktionen: `camelCase`
- Konstanten: `UPPER_SNAKE_CASE`
- Ordner (Sektionen): `snake_case`

**Ausführliche Guidelines**: [docs/GUIDELINES.md](./docs/GUIDELINES.md)

## Quick Start

```bash
npm install        # Dependencies installieren
npm run dev        # Development Server (localhost:3000)
npm run build      # Production Build
npm run lint       # Linting
npm run type-check # TypeScript Check
npm run screenshots # Screenshots erstellen (siehe unten)
```

## Screenshot-System (Automatische Visuelle Dokumentation)

**WICHTIG**: Nach jeder Änderung an der Website MÜSSEN Screenshots erstellt werden!

### Wie es funktioniert:
Das automatische Screenshot-System erstellt visuelle Snapshots der Website für alle Breakpoints und speichert diese temporär zur Analyse.

### Verwendung:

```bash
# Standard: Nur Fullpage Screenshots (alle 3 Breakpoints)
npm run screenshots

# Mit Section: Fullpage + spezifische Section Screenshots
npm run screenshots hero        # Fullpage + Hero Section (alle Breakpoints)
npm run screenshots header      # Fullpage + Header + Scrolled State (alle Breakpoints)
npm run screenshots services    # Fullpage + Services Section (alle Breakpoints)

# Mit Breakpoint-Filter: Nur spezifischer Breakpoint
npm run screenshots -- mobile   # Nur Mobile Fullpage
npm run screenshots -- tablet   # Nur Tablet Fullpage
npm run screenshots -- desktop  # Nur Desktop Fullpage

# Kombiniert: Section + Breakpoint (optimal für gezielte Änderungen!)
npm run screenshots hero mobile        # Hero Section nur auf Mobile
npm run screenshots header desktop     # Header nur auf Desktop
npm run screenshots services tablet    # Services Section nur auf Tablet
```

### Was wird erfasst:

1. **Fullpage Screenshots** (IMMER)
   - Mobile: 375x812px
   - Tablet: 768x1024px
   - Desktop: 1920x1080px
   - **Breakpoint-Filter**: Mit `-- mobile`, `-- tablet`, `-- desktop` nur einen Breakpoint

2. **Section Screenshots** (NUR wenn Section angegeben)
   - Verfügbare Sections: `header`, `hero`, `about`, `services`, `contact`
   - Wird nur erstellt wenn Section als Argument übergeben wird
   - Beispiel: `npm run screenshots hero` → Fullpage + Hero Section
   - **Mit Breakpoint**: `npm run screenshots hero mobile` → Nur Mobile

3. **Scrolled State** (NUR bei Header-Änderungen)
   - Nur wenn `npm run screenshots header` aufgerufen wird
   - Zeigt Ghost-Header Verhalten nach dem Scrollen
   - **Mit Breakpoint**: `npm run screenshots header desktop` → Nur Desktop

### Speicherort:
- Ordner: `screenshots/[UTC-TIMESTAMP]/`
- Format: PNG, Fullpage
- **Temporär**: Alte Screenshots werden bei neuen Runs überschrieben

### Beispiel-Output:
```
# Alle Breakpoints (Standard)
screenshots/
└── 2024-02-27T20-45-30/
    ├── fullpage-mobile.png
    ├── fullpage-tablet.png
    ├── fullpage-desktop.png
    ├── hero-section-mobile.png
    ├── hero-section-tablet.png
    ├── hero-section-desktop.png
    └── header-scrolled-mobile.png

# Nur Mobile (npm run screenshots hero mobile)
screenshots/
└── 2024-02-27T20-50-15/
    ├── fullpage-mobile.png
    └── hero-section-mobile.png
```

### Workflow-Integration:
- ✅ **Generelle Änderung** → `npm run screenshots` (alle Breakpoints)
- ✅ **Section geändert** → `npm run screenshots <section-name>` (alle Breakpoints + Section)
- ✅ **Nur Mobile geändert** → `npm run screenshots -- mobile` (nur Mobile)
- ✅ **Section auf einem Breakpoint** → `npm run screenshots <section> <breakpoint>` (optimal!)
- ✅ Screenshots werden automatisch mit UTC-Timestamp gespeichert
- ✅ Alte Screenshots werden gelöscht (keine Historie)
- ✅ Für visuelle Analyse und Bug-Checks

### Beispiele:
```bash
# Nur Layout/Styling geändert (alle Breakpoints)
npm run screenshots

# Hero Section bearbeitet (alle Breakpoints)
npm run screenshots hero

# Header angepasst (inkl. Scroll-State, alle Breakpoints)
npm run screenshots header

# Nur Mobile-Ansicht angepasst
npm run screenshots -- mobile

# Hero Section nur auf Mobile getestet
npm run screenshots hero mobile

# Header nur auf Desktop überprüft
npm run screenshots header desktop
```

### 🔄 Screenshot-Loop Workflow (WICHTIG für Claude!)

**Nach JEDER Website-Änderung MUSS dieser Workflow befolgt werden:**

1. **Änderung durchführen**
   - Code bearbeiten (Component, Styling, etc.)
   - Änderungen speichern

2. **Screenshots erstellen**
   ```bash
   # Bei generellen Änderungen (alle Breakpoints)
   npm run screenshots

   # Bei Section-spezifischen Änderungen (alle Breakpoints)
   npm run screenshots <section-name>

   # Nur ein Breakpoint geändert (z.B. Mobile-Fixes)
   npm run screenshots -- mobile

   # Section auf einem Breakpoint (optimal!)
   npm run screenshots <section-name> <breakpoint>
   ```

3. **Screenshots analysieren**
   - Screenshots im Ordner `screenshots/[UTC-TIMESTAMP]/` öffnen
   - Breakpoints überprüfen (alle 3 oder nur den gefilterten)
   - Auf folgendes achten:
     - ✅ Layout funktioniert auf allen Breakpoints
     - ✅ Text ist lesbar (Kontrast, Größe)
     - ✅ Buttons/Links sind sichtbar und touch-friendly
     - ✅ Bilder laden korrekt
     - ✅ Header-Verhalten (Ghost-Header, Scroll-State)
     - ✅ Responsive Spacing und Alignment

4. **Analyse-Bericht erstellen**
   - Was funktioniert gut (✅)
   - Was muss gefixt werden (❌)
   - Probleme identifizieren und priorisieren

5. **Fixes durchführen**
   - Probleme beheben basierend auf Screenshot-Analyse
   - Zurück zu Schritt 1 (Loop)

**Dieser Loop MUSS nach jeder Änderung wiederholt werden, bis alle Screenshots perfekt sind!**

### 📋 Claude's Screenshot-Analyse Checkliste

**Als Claude MUSST du nach jedem Screenshot folgende Punkte überprüfen:**

#### Layout & Responsive Design:
- [ ] Funktioniert das Layout auf Mobile, Tablet, Desktop?
- [ ] Sind Abstände (padding/margin) konsistent?
- [ ] Brechen Texte/Elemente an den richtigen Stellen um?
- [ ] Sind Touch-Targets groß genug (min. 44x44px)?

#### Typografie & Lesbarkeit:
- [ ] Ist Text auf allen Hintergründen lesbar?
- [ ] Sind Font-Größen angemessen für jeden Breakpoint?
- [ ] Ist die Text-Hierarchie (h1-h6) korrekt?

#### Farben & Kontrast:
- [ ] Ist der Kontrast ausreichend (WCAG AA)?
- [ ] Funktioniert der Ghost-Header (transparent → solid)?
- [ ] Sind Buttons/CTAs gut sichtbar?

#### Funktionalität:
- [ ] Laden alle Bilder korrekt?
- [ ] Ist die Navigation auf allen Breakpoints zugänglich?
- [ ] Funktionieren Scroll-Zustände (z.B. Header)?

#### Performance-Indikatoren:
- [ ] Gibt es Layout-Shifts?
- [ ] Sind Bilder optimiert (Next.js Image)?

**Format für Analyse-Bericht:**
```
## 📊 Screenshot-Analyse

### ✅ Was GUT funktioniert:
- [Liste der funktionierenden Features]

### ❌ Was PROBLEME hat:
- [Liste der Probleme mit Priorität]

### 🔧 Empfohlene Fixes:
1. [Aktion 1]
2. [Aktion 2]
```

**Script-Location**: `scripts/take-screenshots.js`

## Umgebungsvariablen

Siehe `.env.example` - Kopiere zu `.env.local` für lokale Entwicklung.

## Wichtige Links

- 📱 [Mobile-First Design](./docs/MOBILE-FIRST.md)
- 🎨 [Farbpalette & Design System](./docs/COLORS.md)
- 🎯 [Brand Guide](./docs/BRAND-GUIDE.md)
- ✍️ [Copywriting Guidelines](./docs/COPYWRITING.md)
- 🔍 [SEO-Optimierung](./docs/SEO.md)
- 🤖 [AEO-Optimierung (KI)](./docs/AEO.md)
- 📋 [DSGVO-Dokumentation](./docs/DSGVO.md)
- 📖 [Entwicklungs-Guidelines](./docs/GUIDELINES.md)
- 📄 [README](./README.md)
