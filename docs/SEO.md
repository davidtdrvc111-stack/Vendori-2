# SEO-Optimierung - Standardanforderungen

## Next.js Metadata

### Seiten-Metadata
Jede Seite MUSS folgende Metadata exportieren:

```typescript
// src/app/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VENDORi GmbH - [Seitentitel]',
  description: '[150-160 Zeichen Beschreibung mit Keywords]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'VENDORi GmbH - [Seitentitel]',
    description: '[Beschreibung]',
    url: 'https://vendori.de/[pfad]',
    siteName: 'VENDORi GmbH',
    images: [
      {
        url: 'https://vendori.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '[Bildbeschreibung]',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VENDORi GmbH - [Seitentitel]',
    description: '[Beschreibung]',
    images: ['https://vendori.de/og-image.jpg'],
  },
}
```

### Root Layout Metadata
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://vendori.de'),
  title: {
    default: 'VENDORi GmbH',
    template: '%s | VENDORi GmbH',
  },
  description: '[Haupt-Beschreibung der Website]',
  keywords: ['VENDORi', 'GmbH', '[Hauptkeywords]'],
  authors: [{ name: 'VENDORi GmbH' }],
  creator: 'VENDORi GmbH',
  publisher: 'VENDORi GmbH',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}
```

## Structured Data (JSON-LD)

### Organization Schema
```typescript
// src/app/layout.tsx oder page.tsx
export default function Layout() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VENDORi GmbH',
    url: 'https://vendori.de',
    logo: 'https://vendori.de/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-XXX-XXXXXXX',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: 'German',
    },
    sameAs: [
      'https://www.linkedin.com/company/vendori',
      // Weitere Social Media Links
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {/* Rest des Layouts */}
    </>
  )
}
```

### Website Schema
```typescript
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VENDORi GmbH',
  url: 'https://vendori.de',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://vendori.de/suche?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}
```

### Breadcrumb Schema
```typescript
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://vendori.de',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://vendori.de/services',
    },
  ],
}
```

## Sitemap

### Dynamische Sitemap
```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vendori.de',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://vendori.de/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vendori.de/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vendori.de/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://vendori.de/datenschutz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://vendori.de/impressum',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
```

## robots.txt

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://vendori.de/sitemap.xml',
  }
}
```

Oder statisch in `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://vendori.de/sitemap.xml
```

## Semantic HTML

### Wichtige Regeln:
- ✅ **Überschriften-Hierarchie**: Nur ein `<h1>` pro Seite, dann `<h2>`, `<h3>`, etc.
- ✅ **Semantic Tags**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- ✅ **Listen**: `<ul>`, `<ol>`, `<li>` für Listen verwenden
- ✅ **Links**: Beschreibende Link-Texte (nicht "hier klicken")

```tsx
// ✅ Gut
<main>
  <h1>Hauptüberschrift</h1>
  <section>
    <h2>Untersektion</h2>
    <article>
      <h3>Artikel-Titel</h3>
      <p>Content...</p>
    </article>
  </section>
</main>

// ❌ Schlecht
<div>
  <div>Hauptüberschrift</div>
  <div>
    <div>Untersektion</div>
  </div>
</div>
```

## Bilder-Optimierung

### Next.js Image Component
```tsx
import Image from 'next/image'

// ✅ Immer verwenden
<Image
  src="/images/hero.jpg"
  alt="Beschreibender Alt-Text mit Keywords"
  width={1920}
  height={1080}
  priority // Nur für Above-the-Fold Bilder
  placeholder="blur" // Optional: Blur-Effekt beim Laden
/>
```

### Alt-Text Best Practices:
- ✅ Beschreibend und spezifisch
- ✅ Keywords natürlich einbauen
- ✅ 125 Zeichen oder weniger
- ❌ Nicht "Bild von..." oder "Foto von..."
- ❌ Nicht keyword-stuffing

## Performance-Optimierung

### Core Web Vitals Ziele:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimierungen:
```typescript
// 1. Font Optimization
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

// 2. Image Optimization
// Immer next/image verwenden

// 3. Code Splitting
// Automatisch durch Next.js App Router

// 4. Lazy Loading
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

## Mobile-First

### Responsive Design:
```tsx
// Tailwind Mobile-First Breakpoints
<div className="
  text-sm        // Mobile (default)
  md:text-base   // Tablet
  lg:text-lg     // Desktop
">
  Responsive Text
</div>
```

### Viewport Meta Tag:
```tsx
// Automatisch in Next.js, aber zur Referenz:
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## URL-Struktur

### Best Practices:
- ✅ Kurz und beschreibend
- ✅ Kleinbuchstaben
- ✅ Bindestriche statt Unterstriche
- ✅ Keywords im URL
- ❌ Keine Sonderzeichen
- ❌ Keine Session-IDs
- ❌ Keine Parameter wenn möglich

```
✅ https://vendori.de/web-development
✅ https://vendori.de/services/consulting
❌ https://vendori.de/service.php?id=123
❌ https://vendori.de/Service_Consulting
```

## Internal Linking

```tsx
import Link from 'next/link'

// ✅ Next.js Link für interne Links
<Link href="/services" className="...">
  Unsere Services
</Link>

// ✅ Beschreibende Anchor-Texte
<Link href="/contact">
  Kontaktieren Sie uns für ein Beratungsgespräch
</Link>

// ❌ Vermeiden
<Link href="/contact">hier klicken</Link>
```

## Canonical URLs

```typescript
// src/app/page.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://vendori.de',
  },
}
```

## Language Tags

```tsx
// src/app/layout.tsx
<html lang="de">
  {/* ... */}
</html>
```

Für mehrsprachige Sites:
```typescript
export const metadata: Metadata = {
  alternates: {
    languages: {
      'de-DE': 'https://vendori.de',
      'en-US': 'https://vendori.de/en',
    },
  },
}
```

## SEO-Checkliste

### Technisches SEO:
- [ ] Sitemap.xml erstellt und bei Google eingereicht
- [ ] robots.txt konfiguriert
- [ ] HTTPS erzwungen (SSL-Zertifikat)
- [ ] Canonical URLs gesetzt
- [ ] 404-Seite customized
- [ ] Redirect für www → non-www (oder umgekehrt)
- [ ] Mobile-Friendly (Google Mobile-Friendly Test)
- [ ] Page Speed > 90 (Google PageSpeed Insights)

### On-Page SEO:
- [ ] Unique Title pro Seite (50-60 Zeichen)
- [ ] Unique Meta Description pro Seite (150-160 Zeichen)
- [ ] H1-H6 Hierarchie korrekt
- [ ] Alt-Tags für alle Bilder
- [ ] Interne Links mit beschreibenden Anchor-Texten
- [ ] Semantic HTML verwendet
- [ ] Schema.org Markup implementiert
- [ ] Open Graph Tags für Social Media

### Content SEO:
- [ ] Keyword-Recherche durchgeführt
- [ ] Keywords natürlich im Content
- [ ] Content > 300 Wörter pro Seite
- [ ] Unique Content (kein Duplicate Content)
- [ ] Regelmäßige Content-Updates

### Performance:
- [ ] Core Web Vitals optimiert
- [ ] Bilder optimiert (WebP/AVIF)
- [ ] Lazy Loading implementiert
- [ ] CSS/JS minimiert
- [ ] Caching konfiguriert
- [ ] CDN verwendet (optional)

### Local SEO (falls zutreffend):
- [ ] Google My Business eingerichtet
- [ ] NAP (Name, Address, Phone) konsistent
- [ ] Local Business Schema Markup
- [ ] Lokale Keywords verwendet

## Testing Tools

### Must-Use:
- **Google Search Console**: Indexierung und Probleme überwachen
- **Google PageSpeed Insights**: Performance und Core Web Vitals
- **Google Mobile-Friendly Test**: Mobile Optimierung
- **Lighthouse (Chrome DevTools)**: Umfassendes Audit
- **Schema.org Validator**: Structured Data testen

### Empfohlen:
- **Screaming Frog**: SEO Spider für technisches Audit
- **Ahrefs/SEMrush**: Keyword-Recherche und Backlinks
- **Google Analytics**: Traffic-Analyse
- **Hotjar**: User-Verhalten analysieren

## Monitoring

### Regelmäßig prüfen:
- **Wöchentlich**: Google Search Console für Errors/Warnings
- **Monatlich**: Rankings für Target-Keywords
- **Monatlich**: Core Web Vitals
- **Monatlich**: Broken Links Check
- **Quartalsweise**: Umfassendes SEO-Audit

## Quick Wins

1. **Title + Description optimieren** (höchste Priorität)
2. **Alt-Tags für Bilder hinzufügen**
3. **Schema.org Markup implementieren**
4. **Interne Links verbessern**
5. **Page Speed optimieren**
6. **Mobile-Friendly sicherstellen**
7. **HTTPS aktivieren**
8. **Sitemap einreichen**

## Häufige Fehler vermeiden

❌ **Duplicate Content**: Jede Seite unique halten
❌ **Thin Content**: Mindestens 300 Wörter pro Seite
❌ **Keyword Stuffing**: Keywords natürlich verwenden
❌ **Zu viele H1s**: Nur ein H1 pro Seite
❌ **Fehlende Alt-Tags**: Alle Bilder beschreiben
❌ **Langsame Ladezeit**: Performance optimieren
❌ **Nicht mobile-friendly**: Responsive Design
❌ **Broken Links**: Regelmäßig prüfen
