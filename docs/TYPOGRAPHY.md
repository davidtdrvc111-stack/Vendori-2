# Typografie-Hierarchie - VENDORi GmbH

## 🎨 Font-Stack

VENDORi verwendet eine **distinctive Two-Font-System** für maximale visuelle Impact und Lesbarkeit:

### Display Font (Headlines)
**Plus Jakarta Sans** - Humanist Sans-Serif, Professional
- **Verwendung**: Große Headlines (h1, h2), Hero-Text, Hauptüberschriften
- **Tailwind Class**: `font-display`
- **Charakter**: Professional, clean, readable, seriös
- **CSS Variable**: `--font-plus-jakarta`

### Heading Font (Sub-Headers)
**Geist Mono** - Monospace, Tech-forward, Distinctive
- **Verwendung**: Sub-Headers (h3, h4, h5, h6), Section-Titel, Card-Titles
- **Tailwind Class**: `font-heading`
- **Charakter**: Tech-forward, modern, distinctive, charaktervoll
- **CSS Variable**: `--font-geist-mono`

### Body Font
**Plus Jakarta Sans** - Default für Text
- **Verwendung**: Paragraphs, UI-Elemente, Body-Text
- **Tailwind Class**: `font-sans` (default)
- **CSS Variable**: `--font-plus-jakarta`

---

## 📐 Usage Guidelines

### Headlines (h1, h2)

**Plus Jakarta Sans** für professionelle, seriöse Hauptüberschriften.

```tsx
// Hero Headlines
<h1 className="
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
  font-display font-bold
  text-white
  leading-[1.1] tracking-tight
">
  Wir skalieren echte Umsätze.
</h1>

// Section Headlines
<h2 className="
  text-3xl md:text-4xl lg:text-5xl
  font-display font-bold
  text-neutral-900 dark:text-white
  leading-tight tracking-tight
">
  Unsere Shops. Unser Beweis.
</h2>
```

**Best Practices:**
- ✅ Verwende `font-bold` (700) oder `font-extrabold` (800) für Impact
- ✅ Verwende `tracking-tight` für kompakte Headlines
- ✅ Verwende `leading-[1.1]` oder `leading-tight` für enge Zeilenabstände
- ✅ Plus Jakarta Sans funktioniert auch bei längeren Headlines perfekt

---

### Sub-Headers (h3, h4, h5, h6)

**Geist Mono** für charaktervolle, distinctive Sub-Headlines.

```tsx
// Card Headlines
<h3 className="
  text-2xl md:text-3xl lg:text-4xl
  font-heading font-bold
  text-white
  mb-7
">
  Umsatz statt grauer Theorie
</h3>

// Small Headers
<h4 className="
  text-xl md:text-2xl
  font-heading font-bold
  text-white
  mb-3
">
  Mehr als nur Berater
</h4>

// Legal Pages / Smaller Headers
<h5 className="
  text-lg md:text-xl
  font-heading font-semibold
  text-neutral-900 dark:text-white
">
  Section Title
</h5>
```

**Best Practices:**
- ✅ Verwende `font-bold` (700) für Geist Mono (nicht extrabold!)
- ✅ Verwende `tracking-tight` für bessere Lesbarkeit bei Monospace
- ✅ Halte Sub-Headers kurz und prägnant (max. 2-3 Zeilen)
- ❌ Vermeide zu lange Texte mit Monospace

---

### Body Text

**Plus Jakarta Sans** (Default) für maximale Lesbarkeit.

```tsx
// Paragraphs
<p className="
  text-base sm:text-lg md:text-xl
  text-neutral-200
  font-sans font-normal
  leading-relaxed
">
  Täglich beweisen wir in unseren eigenen Shops, was funktioniert.
</p>

// Small Text
<p className="
  text-sm md:text-base
  text-neutral-300
  leading-relaxed
">
  Supporting text or descriptions.
</p>
```

---

## 🎯 Font-Hierarchie auf einen Blick

| Element | Font | Tailwind Class | Weight | Use Case |
|---------|------|----------------|--------|----------|
| **h1** | Plus Jakarta Sans | `font-display` | `font-bold` / `font-extrabold` | Hero Headlines |
| **h2** | Plus Jakarta Sans | `font-display` | `font-bold` / `font-extrabold` | Section Headlines |
| **h3** | Geist Mono | `font-heading` | `font-bold` | Card Titles, Sub-Sections |
| **h4** | Geist Mono | `font-heading` | `font-bold` | Smaller Headers |
| **h5** | Geist Mono | `font-heading` | `font-semibold` | Legal Pages, Small Titles |
| **h6** | Geist Mono | `font-heading` | `font-semibold` | Minor Headlines |
| **p** | Plus Jakarta Sans | `font-sans` | `font-normal` | Body Text |
| **small** | Plus Jakarta Sans | `font-sans` | `font-normal` | Supporting Text |

---

## 🔧 Technical Implementation

### CSS Variables

```css
/* Geist Mono - Headlines */
--font-geist-mono: 'Geist Mono', ui-monospace, monospace;

/* Plus Jakarta Sans - Sub-Headers & Body */
--font-plus-jakarta: 'Plus Jakarta Sans', system-ui, sans-serif;
```

### Tailwind Config

```ts
fontFamily: {
  // Body text, paragraphs, UI elements
  sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],

  // Main headlines (h1, h2) - Professional, clean
  display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],

  // Sub-headers (h3, h4, h5, h6) - Tech-forward, distinctive
  heading: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],

  // Monospace utility (code, technical content)
  mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
}
```

### Next.js Setup (layout.tsx)

```tsx
import localFont from 'next/font/local';

// Geist Mono - Headlines
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
});

// Plus Jakarta Sans - Body & Sub-Headers
const plusJakartaSans = localFont({
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

// Apply to body
<body className={`${plusJakartaSans.className} ${plusJakartaSans.variable} ${geistMono.variable}`}>
```

---

## 🎨 Design Rationale

### Warum Plus Jakarta Sans für Headlines?

1. **Professional**: Seriös und vertrauenswürdig für B2B-Kommunikation
2. **Readable**: Auch bei großen Größen perfekt lesbar
3. **Versatile**: Funktioniert auf allen Breakpoints (Mobile-First)
4. **Clean**: Moderne, saubere Typografie ohne Ablenkung
5. **Proven**: Etablierte, zeitlose Sans-Serif für Corporate Design

### Warum Geist Mono für Sub-Headers?

1. **Distinctive**: Setzt Akzente und Differenzierungspunkte
2. **Tech-Forward**: Passt perfekt zur digitalen Purple-Brand (#9333ea)
3. **Memorable**: Monospace-Details fallen auf und bleiben im Gedächtnis
4. **Character**: Gibt Sub-Sections mehr Persönlichkeit
5. **Balance**: Perfekter Kontrast zu Plus Jakarta Sans (Humanist vs. Monospace)

---

## ✅ Migration Checklist

- [x] `globals.css` - @font-face für Geist Mono hinzugefügt
- [x] `tailwind.config.ts` - fontFamily erweitert (display, heading, mono)
- [x] `layout.tsx` - localFont für Geist Mono konfiguriert
- [x] `hero_section` - h1 auf `font-display` aktualisiert
- [x] `about_section` - h2 auf `font-heading` aktualisiert (Stats bleiben `font-display`)
- [x] `services_section` - h2, h3 auf richtige Fonts aktualisiert
- [x] `contact_section` - h2 auf `font-display` aktualisiert
- [x] `shop_showcase_section` - h2 auf `font-display` aktualisiert
- [x] `about_full_section` - h2 auf `font-display` aktualisiert
- [x] Legal Pages (`impressum.tsx`, `datenschutz.tsx`) - h2+ auf `font-heading`

---

## 📝 Examples aus dem Projekt

### Hero Section
```tsx
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
  Wir skalieren keine Theorie, sondern echte Umsätze.
</h1>
```

### About Section (Stats)
```tsx
<div className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-2 font-display font-extrabold">
  1.000.000<span className="text-primary-600">+</span>
</div>
```

### Services Section (Card Title)
```tsx
<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-7 font-heading font-bold">
  Umsatz statt grauer Theorie
</h3>
```

### Contact Section (Main Heading)
```tsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-display font-bold">
  Lassen Sie uns sprechen
</h2>
```

---

## 🚀 Weitere Nutzung

### Code-Snippets (Monospace Utility)
```tsx
<code className="font-mono text-sm bg-neutral-800 px-2 py-1 rounded">
  npm install
</code>
```

### Stats / Numbers (Display Font für Impact)
```tsx
<div className="text-6xl font-display font-bold text-primary-600">
  22<span className="text-primary-400">+</span>
</div>
```

---

**Last Updated**: 2026-03-14
**Font Files Location**: `/public/fonts/`
- `GeistMonoVF.woff2`
- `PlusJakartaSans-Variable.woff2`
- `PlusJakartaSans-VariableItalic.woff2`
