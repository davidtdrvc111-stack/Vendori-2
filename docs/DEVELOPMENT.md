# Entwicklungs-Guide - VENDORi Website

## Schnellstart

```bash
# Installation
npm install

# Development Server
npm run dev

# Production Build
npm run build

# Production Server
npm start
```

## Projekt-Struktur

```
Vendori-2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root Layout (Metadata, Fonts)
│   │   ├── page.tsx            # Homepage
│   │   ├── datenschutz/        # Datenschutzseite
│   │   ├── impressum/          # Impressumsseite
│   │   └── ...
│   ├── components/             # Wiederverwendbare Komponenten
│   │   ├── ui/                 # UI-Komponenten (Buttons, etc.)
│   │   ├── cookie-consent/     # Cookie-Banner System
│   │   └── seo/                # SEO-Komponenten (JsonLd, etc.)
│   ├── sections/               # Page Sections
│   │   ├── hero_section/
│   │   ├── services_section/
│   │   ├── about_section/
│   │   └── ...
│   ├── lib/                    # Utilities & Helper
│   │   ├── utils.ts            # Tailwind cn() Helper
│   │   └── seo-utils.ts        # SEO Helper-Funktionen
│   ├── config/                 # Konfigurationsdateien
│   └── styles/                 # Globale Styles
├── public/                     # Statische Assets
│   ├── Logo_Vendori_rgb_anthrazit.svg
│   ├── teamfoto.webp
│   └── ...
└── docs/                       # Dokumentation
    ├── SEO-BEST-PRACTICES.md
    └── DEVELOPMENT.md
```

## Standards & Konventionen

### 1. Komponenten-Struktur

Jede Section hat folgende Struktur:

```
sections/section_name/
├── Component.tsx       # Haupt-Komponente
├── types.ts           # TypeScript Interfaces
└── index.ts           # Export Barrel
```

### 2. TypeScript

- Strikte Type-Safety aktiviert
- Alle Props mit Interfaces definieren
- `type` für Unions/Primitives, `interface` für Objekte

### 3. Styling

- **Tailwind CSS** für alle Styles
- **cn()** Utility aus `src/lib/utils.ts` für bedingte Klassen
- Keine Inline-Styles außer für dynamische Werte

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)} />
```

### 4. Images

**IMMER next/image verwenden:**

```tsx
import Image from 'next/image';

<Image
  src="/bild.webp"
  alt="Beschreibender Alt-Text"  // PFLICHT!
  width={800}
  height={600}
  loading="lazy"  // oder priority für LCP
/>
```

**Oder SEOImage für automatische Validierung:**

```tsx
import { SEOImage } from '@/components/ui/SEOImage';

<SEOImage
  src="/bild.webp"
  alt="Beschreibender Text"
  width={800}
  height={600}
/>
```

### 5. Icons

**Lucide React für alle Icons:**

```tsx
import { Check, ArrowRight } from 'lucide-react';

// Dekorativ → aria-hidden
<Check className="w-5 h-5" aria-hidden="true" />

// In Icon-Button → aria-label am Button
<button aria-label="Menü öffnen">
  <Menu className="w-6 h-6" aria-hidden="true" />
</button>
```

### 6. Accessibility

```tsx
// Skip Link (bereits in layout.tsx)
<a href="#main-content" className="sr-only focus:not-sr-only">
  Zum Hauptinhalt springen
</a>

// Main Content Wrapper
<main id="main-content">
  {/* Content */}
</main>

// Semantisches HTML
<nav aria-label="Hauptnavigation">
  <ul>
    <li><Link href="/">Home</Link></li>
  </ul>
</nav>
```

## SEO-Checkliste

Für neue Seiten/Komponenten:

- [ ] **Page Metadata** definiert (title, description)
- [ ] **Alle Bilder** haben alt-Texte
- [ ] **Dekorative Icons** haben aria-hidden
- [ ] **Icon-Buttons** haben aria-label
- [ ] **Semantisches HTML** verwendet (nav, main, section, etc.)
- [ ] **Heading-Hierarchie** korrekt (h1 → h2 → h3)

### Beispiel: Neue Seite mit Metadata

```tsx
// src/app/neue-seite/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seitentitel',
  description: 'Seitenbeschreibung (max 160 Zeichen)',
  openGraph: {
    title: 'Seitentitel',
    description: 'Seitenbeschreibung',
    url: 'https://vendori.eu/neue-seite',
  },
};

export default function NeueSeite() {
  return (
    <main id="main-content">
      <h1>Seitentitel</h1>
      {/* Content */}
    </main>
  );
}
```

## Performance-Optimierungen

### 1. Code Splitting

```tsx
import dynamic from 'next/dynamic';

// Lazy Load nicht-kritische Komponenten
const CookieBanner = dynamic(
  () => import('@/components/cookie-consent'),
  { loading: () => null }
);
```

### 2. Fonts

Fonts sind bereits lokal gehostet (DSGVO-konform):

```tsx
// src/app/layout.tsx
import localFont from 'next/font/local';

const plusJakartaSans = localFont({
  src: './fonts/PlusJakartaSans-Variable.woff2',
  variable: '--font-plus-jakarta',
  display: 'swap',
});
```

### 3. Bilder

- **Format**: WebP für moderne Browser
- **Größe**: Optimiert (z.B. teamfoto.webp: 140KB statt 2.6MB)
- **Priority**: Nur für LCP-Bilder (z.B. Hero-Bild)

## Testing

```bash
# Lighthouse Audit
npm run lighthouse

# Build Check
npm run build

# Type Check
npm run type-check  # oder: npx tsc --noEmit
```

## Deployment

Die Website ist für **Vercel** optimiert:

1. Push zu main-Branch
2. Vercel deployt automatisch
3. Preview-Deployments für Pull Requests

## Hilfreiche Ressourcen

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [SEO Best Practices](./SEO-BEST-PRACTICES.md)
