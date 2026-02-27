# Mobile-First Design - Vollständige Dokumentation

## Grundprinzip

**Mobile-First bedeutet**: Design und Entwicklung beginnen beim kleinsten Viewport (Smartphone) und werden dann für größere Bildschirme erweitert, nicht umgekehrt.

---

## Warum Mobile-First?

### 1. **Nutzerverhalten**
- Über 60% der Web-Traffic kommt von mobilen Geräten
- Mobile-Nutzer haben oft andere Bedürfnisse und Kontexte
- Schnellere Ladezeiten sind auf mobilen Geräten kritisch

### 2. **Design-Vorteile**
- Fokus auf essentiellen Content (keine unnötigen Elemente)
- Bessere Content-Hierarchie
- Einfacheres, klareres Interface

### 3. **Performance**
- Kleinere Bundles für mobile Geräte
- Optimierte Assets (Bilder, Fonts)
- Schnellere Time-to-Interactive

### 4. **SEO**
- Google verwendet Mobile-First Indexing
- Core Web Vitals werden primär auf Mobile gemessen
- Bessere Rankings durch mobile Optimierung

---

## Design-Prinzipien

### ✅ Content-Hierarchie
- Wichtigster Content zuerst
- Klare visuelle Hierarchie
- Reduzierte Komplexität

### ✅ Touch-freundlich
- Mindestgröße für Touch-Targets: **44x44 Pixel** (iOS) / **48x48 Pixel** (Android)
- Ausreichend Abstand zwischen klickbaren Elementen (min. 8px)
- Große, gut erreichbare Buttons
- Swipe-Gesten wo sinnvoll

### ✅ Lesbarkeit
- Minimale Schriftgröße: **16px** für Body-Text (verhindert Auto-Zoom auf iOS)
- Ausreichende Zeilenhöhe: min. 1.5
- Kontrastverhältnis WCAG AA: min. 4.5:1 für normalen Text
- Kurze Zeilen (45-75 Zeichen optimal)

### ✅ Navigation
- Einfache, klare Navigation
- Hamburger-Menü oder Bottom-Navigation
- Thumb-freundliche Platzierung
- Sticky Header optional (Platz sparen)

### ✅ Formulare
- Ein Feld pro Zeile
- Große Input-Felder (min. 44px Höhe)
- Native Input-Types nutzen (email, tel, number)
- Klare Labels und Fehlermeldungen
- Auto-Complete aktivieren

### ✅ Bilder & Media
- Responsive Images (`next/image`)
- Lazy Loading aktivieren
- WebP Format nutzen
- Alt-Tags für Accessibility

---

## Tailwind CSS - Mobile-First Breakpoints

Tailwind verwendet standardmäßig Mobile-First Breakpoints:

### Breakpoint-System

```typescript
// Standard ohne Breakpoint = Mobile (< 640px)
// sm: ≥ 640px   (Small Tablets)
// md: ≥ 768px   (Tablets)
// lg: ≥ 1024px  (Laptops)
// xl: ≥ 1280px  (Desktops)
// 2xl: ≥ 1536px (Large Desktops)
```

### Beispiel: Responsive Text

```tsx
<h1 className="
  text-2xl      // Mobile: 24px (< 640px)
  sm:text-3xl   // Small: 30px (≥ 640px)
  md:text-4xl   // Medium: 36px (≥ 768px)
  lg:text-5xl   // Large: 48px (≥ 1024px)
  xl:text-6xl   // XL: 60px (≥ 1280px)
">
  VENDORi GmbH
</h1>
```

### Beispiel: Responsive Layout

```tsx
<div className="
  flex flex-col        // Mobile: Vertikales Layout
  md:flex-row          // Ab Tablet: Horizontales Layout
  gap-4                // Mobile: 16px Abstand
  md:gap-8             // Ab Tablet: 32px Abstand
  p-4                  // Mobile: 16px Padding
  md:p-8               // Ab Tablet: 32px Padding
  lg:p-12              // Ab Laptop: 48px Padding
">
  <div className="
    w-full             // Mobile: Volle Breite
    md:w-1/2           // Ab Tablet: 50%
  ">
    Content A
  </div>
  <div className="
    w-full
    md:w-1/2
  ">
    Content B
  </div>
</div>
```

### Beispiel: Responsive Grid

```tsx
<div className="
  grid
  grid-cols-1          // Mobile: 1 Spalte
  sm:grid-cols-2       // Small: 2 Spalten
  lg:grid-cols-3       // Large: 3 Spalten
  xl:grid-cols-4       // XL: 4 Spalten
  gap-4                // 16px Abstand
  md:gap-6             // 24px auf größeren Screens
">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

### Beispiel: Responsive Visibility

```tsx
{/* Nur auf Mobile sichtbar */}
<div className="block md:hidden">
  Mobile Navigation
</div>

{/* Ab Tablet sichtbar */}
<div className="hidden md:block">
  Desktop Navigation
</div>
```

---

## Next.js Optimierungen

### 1. **next/image für Responsive Bilder**

```tsx
import Image from 'next/image'

export function ResponsiveImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="VENDORi Hero"
      width={1200}
      height={800}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority // Für Above-the-fold Bilder
      quality={85}
    />
  )
}
```

### 2. **Responsive Container**

```tsx
<div className="
  container           // Zentriert & max-width
  mx-auto            // Horizontal centered
  px-4               // Mobile: 16px padding
  sm:px-6            // Small: 24px
  lg:px-8            // Large: 32px
">
  Content
</div>
```

### 3. **Dynamic Imports für Mobile**

```tsx
import dynamic from 'next/dynamic'

// Heavy Component nur auf Desktop laden
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    ssr: false,
    loading: () => <Skeleton />
  }
)

export function Page() {
  return (
    <>
      <MobileComponent className="md:hidden" />
      <div className="hidden md:block">
        <HeavyComponent />
      </div>
    </>
  )
}
```

---

## Testing & Debugging

### Chrome DevTools

1. **Device Emulation aktivieren** (Cmd/Ctrl + Shift + M)
2. **Wichtige Test-Geräte**:
   - iPhone SE (375px) - Kleinster gängiger Viewport
   - iPhone 14 Pro (393px)
   - iPad (768px)
   - Desktop (1920px)

3. **Performance Profiling**:
   - Lighthouse Mobile Audit
   - Network Throttling (Fast 3G)
   - CPU Throttling (4x slowdown)

### Responsive Design Checklist

- [ ] **Viewports testen**: 375px, 768px, 1024px, 1920px
- [ ] **Touch-Targets**: Min. 44x44px
- [ ] **Schriftgröße**: Min. 16px für Body
- [ ] **Bilder**: Responsive mit next/image
- [ ] **Navigation**: Touch-freundlich
- [ ] **Formulare**: Ein Feld pro Zeile
- [ ] **Horizontal Scroll**: Vermeiden
- [ ] **Performance**: Lighthouse Mobile Score > 90
- [ ] **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Best Practices

### ✅ DO's

```tsx
// ✅ Mobile-First: Standard ohne Breakpoint
<div className="text-sm md:text-base lg:text-lg">
  Content
</div>

// ✅ Touch-freundliche Buttons
<button className="
  min-h-[44px] min-w-[44px]
  px-6 py-3
  text-base
  md:text-lg
">
  Click me
</button>

// ✅ Responsive Images
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### ❌ DON'Ts

```tsx
// ❌ Desktop-First (falsche Reihenfolge)
<div className="text-lg md:text-base">
  Content
</div>

// ❌ Zu kleine Touch-Targets
<button className="p-1 text-xs">
  Too small
</button>

// ❌ Fixed Widths ohne Responsive
<div className="w-[1200px]">
  Will overflow on mobile!
</div>

// ❌ Viele unnötige Breakpoints
<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
  Too complex
</div>
```

---

## Performance-Optimierung für Mobile

### 1. **Bundle Size**
- Code Splitting nutzen
- Tree Shaking aktivieren
- Unused Code entfernen
- Dynamic Imports für große Komponenten

### 2. **Images**
- WebP Format nutzen
- Lazy Loading aktivieren
- Responsive Images mit `sizes`
- Blur Placeholder für UX

### 3. **Fonts**
- Lokale Fonts (keine CDN)
- Font Subsetting
- `font-display: swap`
- Preload kritische Fonts

### 4. **CSS**
- Tailwind purging aktiviert
- Kritisches CSS inline
- Unused Styles entfernen

### 5. **JavaScript**
- Server Components nutzen (Next.js)
- Client-seitiges JS minimieren
- Third-party Scripts optimieren

---

## Accessibility (WCAG AA)

### Touch & Mobile Specific

- ✅ Touch-Target-Größe: Min. 44x44px
- ✅ Touch-Target-Spacing: Min. 8px
- ✅ Kontrast: Min. 4.5:1
- ✅ Schriftgröße: Min. 16px
- ✅ Zoom erlauben (kein `maximum-scale=1`)
- ✅ Orientierung: Portrait & Landscape
- ✅ Screen Reader Support
- ✅ Keyboard Navigation

### Meta Tag

```html
<!-- ✅ Erlaubt Zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- ❌ Verhindert Zoom (Accessibility Problem!) -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

---

## Quick Reference: Typische Mobile-First Patterns

### Container

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>
```

### Section Spacing

```tsx
<section className="py-12 md:py-16 lg:py-24">
  Content
</section>
```

### Typography Scale

```tsx
<h1 className="text-2xl md:text-4xl lg:text-5xl">Hero</h1>
<h2 className="text-xl md:text-2xl lg:text-3xl">Section</h2>
<p className="text-base md:text-lg">Body Text</p>
```

### Flex Layout

```tsx
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div>A</div>
  <div>B</div>
</div>
```

### Grid Layout

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>
```

---

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Google Mobile-First Indexing](https://developers.google.com/search/mobile-sites/mobile-first-indexing)
- [WCAG Touch Target Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Core Web Vitals](https://web.dev/vitals/)
