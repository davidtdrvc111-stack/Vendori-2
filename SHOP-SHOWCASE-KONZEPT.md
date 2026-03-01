# Shop Showcase Sektion - "Logo Wall mit Kennzahlen"

## Konzept

**Minimalistisch. Selbstbewusst. Schnell erfassbar.**

Die Shop Showcase-Sektion ersetzt die Awards-Sektion und präsentiert VENDORis eigene betriebene E-Commerce Shops als greifbaren Beweis für Expertise und Erfolg.

### Design-Philosophie
- **"Wir reden nicht über Erfolg, wir zeigen ihn."**
- Fokus auf Marken-Wiedererkennung (Logos)
- Eine starke Kennzahl pro Shop (kein Overkill)
- Clean, professional, auf den Punkt

---

## Die 4 Shops

### 1. myToolStore.de
- **Logo:** myToolStore Logo
- **Domain:** .de
- **Kennzahl:** "50.000+ Orders"
- **URL:** https://www.mytoolstore.de

### 2. myToolStore.fr
- **Logo:** myToolStore Logo (gleich wie .de)
- **Domain:** .fr
- **Kennzahl:** "3 Länder aktiv" oder "Premium Sortiment"
- **URL:** https://www.mytoolstore.fr

### 3. myToolStore.nl
- **Logo:** myToolStore Logo (gleich wie .de)
- **Domain:** .nl
- **Kennzahl:** "Premium Sortiment" oder andere Kennzahl
- **URL:** https://www.mytoolstore.nl

### 4. ShowerNIZR.com
- **Logo:** ShowerNIZR Logo (Eigenmarke)
- **Domain:** .com
- **Kennzahl:** "Eigenmarke seit 20XX" oder "Innovative Duschlösungen"
- **URL:** https://www.showernizr.com

---

## Layout-Struktur

### Desktop (≥1024px) - 4 Spalten

```
┌──────────────────────────────────────────────────────────────────┐
│                   Unsere Shops. Unser Beweis.                    │
│    Wir reden nicht über Erfolg, wir zeigen ihn. Diese Marken    │
│         betreiben und skalieren wir täglich selbst.              │
└──────────────────────────────────────────────────────────────────┘

┌─────────────┬─────────────┬─────────────┬─────────────┐
│             │             │             │             │
│ [myToolSt.] │ [myToolSt.] │ [myToolSt.] │ [ShowerNIZR]│
│    Logo     │    Logo     │    Logo     │    Logo     │
│             │             │             │             │
│     .de     │     .fr     │     .nl     │    .com     │
│             │             │             │             │
│ 50.000+     │  3 Länder   │  Premium    │ Eigenmarke  │
│  Orders     │   aktiv     │  Sortiment  │ seit 2020   │
│             │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### Tablet (≥768px) - 2 Spalten, 2 Reihen

```
┌────────────────────┬────────────────────┐
│                    │                    │
│   [myToolStore]    │   [myToolStore]    │
│       Logo         │       Logo         │
│                    │                    │
│        .de         │        .fr         │
│                    │                    │
│   50.000+ Orders   │   3 Länder aktiv   │
│                    │                    │
├────────────────────┼────────────────────┤
│                    │                    │
│   [myToolStore]    │   [ShowerNIZR]     │
│       Logo         │      Logo          │
│                    │                    │
│        .nl         │       .com         │
│                    │                    │
│ Premium Sortiment  │ Eigenmarke 2020    │
│                    │                    │
└────────────────────┴────────────────────┘
```

### Mobile (<768px) - 1 Spalte

```
┌────────────────────┐
│                    │
│   [myToolStore]    │
│       Logo         │
│                    │
│        .de         │
│                    │
│   50.000+ Orders   │
│                    │
├────────────────────┤
│                    │
│   [myToolStore]    │
│       Logo         │
│                    │
│        .fr         │
│                    │
│   3 Länder aktiv   │
│                    │
├────────────────────┤
│                    │
│   [myToolStore]    │
│       Logo         │
│                    │
│        .nl         │
│                    │
│ Premium Sortiment  │
│                    │
├────────────────────┤
│                    │
│   [ShowerNIZR]     │
│      Logo          │
│                    │
│       .com         │
│                    │
│ Eigenmarke 2020    │
│                    │
└────────────────────┘
```

---

## Design-Spezifikationen

### Shop Card (einzelner Container)

```
┌─────────────────────┐
│                     │
│   [Shop-Logo]       │  ← 120x120px (Desktop), 96x96px (Mobile)
│                     │     Zentriert, object-contain
│                     │
│      .domain        │  ← Domain-Extension (.de, .fr, .nl, .com)
│                     │     text-sm, text-neutral-400
│                     │
│   Kennzahl Text     │  ← Bold, groß (text-xl/2xl)
│                     │     text-white (auf dark bg)
│                     │
│   [Hover: Link →]   │  ← Optional, erscheint beim Hover
│                     │
└─────────────────────┘
```

### Elemente-Hierarchie

1. **Logo** (Höchste Priorität)
   - Size: 120x120px (Desktop), 96x96px (Mobile)
   - Container: Rund oder quadratisch mit Padding
   - Background: `bg-white/5` oder transparent
   - Border: `ring-1 ring-white/10` (optional)

2. **Domain-Extension** (Sekundär)
   - Font: Inter Regular
   - Size: `text-sm md:text-base`
   - Color: `text-neutral-400 dark:text-neutral-400`
   - Position: Zentriert unter Logo

3. **Kennzahl** (Primärer Content)
   - Font: Space Grotesk Bold
   - Size: `text-xl md:text-2xl`
   - Color: `text-white dark:text-white` oder `text-primary-400`
   - Position: Zentriert unter Domain

4. **Hover-State: Link** (Optional)
   - Icon: ExternalLink (lucide-react)
   - Color: `text-primary-400 hover:text-primary-300`
   - Transition: smooth
   - Position: Erscheint beim Hover unter Kennzahl

---

## Responsive Grid-System

### Tailwind CSS Classes

```tsx
<div className={cn(
  'grid gap-6 md:gap-8 lg:gap-12',
  'grid-cols-1',           // Mobile: 1 Spalte
  'md:grid-cols-2',        // Tablet: 2 Spalten
  'lg:grid-cols-4',        // Desktop: 4 Spalten
  'max-w-7xl mx-auto'
)}>
  {/* Shop Cards */}
</div>
```

### Breakpoints
- **Mobile:** < 768px → 1 Spalte
- **Tablet:** ≥ 768px → 2 Spalten
- **Desktop:** ≥ 1024px → 4 Spalten

---

## Card-Komponente Beispiel

### Struktur

```tsx
<div className={cn(
  'flex flex-col items-center',
  'p-6 md:p-8',
  'bg-stone-800',           // Dunkler Hintergrund
  'rounded-3xl',            // Abgerundete Ecken
  'hover:shadow-lg',        // Hover-Effekt
  'transition-all duration-300',
  'group'                   // Für Hover-States
)}>
  {/* Logo Container */}
  <div className="mb-4 md:mb-6">
    <div className={cn(
      'w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32',
      'rounded-xl',
      'bg-white/5',
      'ring-1 ring-white/10',
      'p-4',
      'flex items-center justify-center'
    )}>
      <Image
        src="/images/shops/mytoolstore-logo.png"
        alt="myToolStore Logo"
        width={120}
        height={120}
        className="object-contain w-full h-full"
      />
    </div>
  </div>

  {/* Domain Extension */}
  <div className="mb-3 md:mb-4">
    <p className="text-sm md:text-base text-neutral-400 text-center">
      .de
    </p>
  </div>

  {/* Key Metric */}
  <div className="mb-4">
    <h3 className={cn(
      'text-xl md:text-2xl font-bold text-center',
      'text-white',
      'font-[family-name:var(--font-space-grotesk)]'
    )}>
      50.000+ Orders
    </h3>
  </div>

  {/* Optional: Hover Link */}
  <a
    href="https://www.mytoolstore.de"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      'inline-flex items-center gap-2',
      'text-sm text-primary-400 hover:text-primary-300',
      'transition-colors duration-200',
      'opacity-0 group-hover:opacity-100'  // Nur sichtbar beim Hover
    )}
  >
    <span>Zum Shop</span>
    <ExternalLink className="w-4 h-4" />
  </a>
</div>
```

---

## Datenstruktur (TypeScript)

### Types Definition

```typescript
// types.ts
export interface Shop {
  id: string;               // e.g., 'mytoolstore-de'
  name: string;             // e.g., 'myToolStore'
  domain: string;           // e.g., 'mytoolstore.de'
  domainExtension: string;  // e.g., '.de'
  url: string;              // e.g., 'https://www.mytoolstore.de'
  logo: string;             // e.g., '/images/shops/mytoolstore-logo.png'
  logoAlt: string;          // e.g., 'myToolStore Logo'
  metric: string;           // e.g., '50.000+ Orders'
  isOwnBrand?: boolean;     // true für ShowerNIZR
}

export interface ShopShowcaseSectionProps {
  className?: string;
}
```

### Shop Data

```typescript
// Component.tsx
const SHOPS: Shop[] = [
  {
    id: 'mytoolstore-de',
    name: 'myToolStore',
    domain: 'mytoolstore.de',
    domainExtension: '.de',
    url: 'https://www.mytoolstore.de',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore Deutschland Logo',
    metric: '50.000+ Orders',
    isOwnBrand: false,
  },
  {
    id: 'mytoolstore-fr',
    name: 'myToolStore',
    domain: 'mytoolstore.fr',
    domainExtension: '.fr',
    url: 'https://www.mytoolstore.fr',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore France Logo',
    metric: '3 Länder aktiv',
    isOwnBrand: false,
  },
  {
    id: 'mytoolstore-nl',
    name: 'myToolStore',
    domain: 'mytoolstore.nl',
    domainExtension: '.nl',
    url: 'https://www.mytoolstore.nl',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore Nederland Logo',
    metric: 'Premium Sortiment',
    isOwnBrand: false,
  },
  {
    id: 'showernizr-com',
    name: 'ShowerNIZR',
    domain: 'showernizr.com',
    domainExtension: '.com',
    url: 'https://www.showernizr.com',
    logo: '/images/shops/showernizr-logo.png',
    logoAlt: 'ShowerNIZR Eigenmarke Logo',
    metric: 'Eigenmarke seit 2020',
    isOwnBrand: true,
  },
];
```

---

## Section Heading

### Text Content

**Headline:** "Unsere Shops. Unser Beweis."
**Subline:** "Wir reden nicht über Erfolg, wir zeigen ihn. Diese Marken betreiben und skalieren wir täglich selbst."

### Styling

```tsx
<div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
  <h2 className={cn(
    'text-3xl md:text-4xl lg:text-5xl font-bold',
    'text-neutral-900 dark:text-white',
    'mb-4',
    'font-[family-name:var(--font-space-grotesk)]'
  )}>
    Unsere Shops. Unser Beweis.
  </h2>
  <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-200">
    Wir reden nicht über Erfolg, wir zeigen ihn. Diese Marken betreiben und skalieren wir täglich selbst.
  </p>
</div>
```

---

## Assets Benötigt

### Logo-Dateien

1. **myToolStore Logo**
   - Path: `/public/images/shops/mytoolstore-logo.png` (oder .svg)
   - Size: Mindestens 240x240px (für Retina)
   - Format: PNG mit Transparenz oder SVG
   - Hintergrund: Transparent
   - Farbe: Sollte auf dunklem Hintergrund gut sichtbar sein

2. **ShowerNIZR Logo**
   - Path: `/public/images/shops/showernizr-logo.png` (oder .svg)
   - Size: Mindestens 240x240px (für Retina)
   - Format: PNG mit Transparenz oder SVG
   - Hintergrund: Transparent
   - Farbe: Sollte auf dunklem Hintergrund gut sichtbar sein

### Ordnerstruktur

```
public/
└── images/
    └── shops/
        ├── mytoolstore-logo.png   (oder .svg)
        └── showernizr-logo.png    (oder .svg)
```

---

## Color Palette (aus COLORS.md)

### Background
- Section: `bg-white dark:bg-neutral-900`
- Cards: `bg-stone-800`

### Text
- Headline: `text-neutral-900 dark:text-white`
- Subline: `text-neutral-600 dark:text-neutral-200`
- Domain: `text-neutral-400`
- Metric: `text-white` oder `text-primary-400`

### Accents
- Links: `text-primary-400 hover:text-primary-300`
- Borders: `ring-white/10`

---

## Implementierungs-Schritte

### 1. Ordner umbenennen
```
awards_section/ → shop_showcase_section/
```

### 2. Dateien anpassen
- `Component.tsx` - Haupt-Komponente
- `types.ts` - TypeScript Interfaces
- `index.ts` - Barrel Exports

### 3. Assets hinzufügen
- Logos in `/public/images/shops/` ablegen
- Next.js Image-Optimierung nutzen

### 4. Integration in Main Page
```tsx
// src/app/page.tsx
import { ShopShowcaseSection } from '@/sections/shop_showcase_section';

// Ersetze AwardsSection mit:
<ShopShowcaseSection />
```

### 5. Testing
- [ ] Mobile (375px): Cards gestackt, Logos sichtbar
- [ ] Tablet (768px): 2x2 Grid funktioniert
- [ ] Desktop (1280px+): Alle 4 Shops in einer Reihe
- [ ] Dark Mode: Logos und Text gut lesbar
- [ ] Hover States: Links erscheinen smooth
- [ ] Logos laden: Next.js Image-Optimierung funktioniert

---

## Accessibility

- **Alt Text:** Alle Logos haben beschreibende Alt-Tags
- **Semantic HTML:** `<h2>` für Section-Headline, `<h3>` für Metrics
- **Keyboard Navigation:** Links sind mit Tab erreichbar
- **Contrast:** Text meets WCAG AA (min. 4.5:1)
- **Focus States:** Sichtbare Focus-Rings bei Keyboard-Navigation

---

## Performance

- **Next.js Image:** Automatische Optimierung
- **Lazy Loading:** Bilder laden when needed
- **Responsive Images:** `sizes` Attribut für optimal loading
- **No JavaScript Required:** Rein HTML/CSS Layout (Progressive Enhancement)

---

## Alternativen & Erweiterungen (Phase 2)

### Minimale Erweiterungen
- **Tooltip beim Hover:** Zeigt zusätzliche Info (z.B. "Gegründet 2018")
- **Badge für Eigenmarke:** Kleines "Eigenmarke" Badge bei ShowerNIZR
- **Animation beim Scroll:** Fade-in Effekt beim Einblenden

### Weitere Ideen
- **Click → Modal:** Detaillierte Shop-Info in Overlay
- **Live-Stats:** Echte Echtzeit-Kennzahlen via API
- **Case Study Links:** "Mehr erfahren →" zu ausführlichen Success Stories

---

## Notizen

- **Minimalismus ist Key:** Weniger ist mehr - Fokus auf Logos + eine Kennzahl
- **Selbstbewusstsein:** "Wir zeigen, nicht erzählen"
- **Schnelle Erfassung:** User soll in 3 Sekunden verstehen: "Diese Leute betreiben erfolgreiche Shops"
- **Marken-Wiedererkennung:** Logos sind das wichtigste visuelle Element

---

## Beispiel-Kennzahlen (zur Auswahl)

### myToolStore.de
- "50.000+ Orders" ✅ (aktuell)
- "Marktführer D-A-CH"
- "Top 10 in der Branche"

### myToolStore.fr
- "3 Länder aktiv" ✅ (aktuell)
- "Expansion 2022"
- "Französischer Markt"

### myToolStore.nl
- "Premium Sortiment" ✅ (aktuell)
- "10.000+ Produkte"
- "Niederländischer Markt"

### ShowerNIZR.com
- "Eigenmarke seit 2020" ✅ (aktuell)
- "Innovative Duschlösungen"
- "International verfügbar"
- "D2C Erfolgsgeschichte"

---

**Erstellt:** 2026-03-01
**Für:** VENDORi GmbH Website
**Section:** Shop Showcase (ersetzt Awards)
**Status:** Konzept-Phase → Ready for Implementation
