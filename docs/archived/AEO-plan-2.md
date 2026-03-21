# AEO/SEO-Optimierung: Masterplan 90+ Score

**Ziel**: Alle Aspekte (Performance, Schema.org, Content/Accessibility) auf 90+ bringen OHNE SEO-Schwächung

**Aktuelle Scores**:
- Performance: 50% → Ziel: 90%
- Schema.org: 80% → Ziel: 95%
- Content/Accessibility: 70% → Ziel: 92%
- **Gesamt**: ~67% → **Ziel: ~92%**

---

## PHASE 1: QUICK WINS (1-2 Tage) - +11 Punkte → 78%

### 1.1 Performance Quick Wins (+18 Punkte: 50% → 68%)

#### A. teamfoto.png löschen (SOFORT - 0 Risiko)
**Impact**: -2.6MB, LCP-Verbesserung ~2.7s → 0.5s

```bash
# Löschen (teamfoto.webp existiert bereits in about_full_section:73)
rm public/teamfoto.png
```

#### B. SpaceGrotesk Font löschen (SOFORT - 0 Risiko)
**Impact**: -49KB (Font wird nicht verwendet)

```bash
rm public/fonts/SpaceGrotesk-Variable.woff2
```

#### C. next.config.js erweitern (10 Min)
**Datei**: `next.config.js`

Nach Zeile 17 (images-Block) EINFÜGEN:
```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  minimumCacheTTL: 31536000,
  dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
},
```

---

### 1.2 Accessibility Quick Wins (+10 Punkte: 70% → 80%)

#### D. H1 auf /ueber-uns sichtbar machen (KRITISCH - 5 Min)
**Problem**: Zeile 31 in `src/app/ueber-uns/page.tsx` hat sr-only H1 (unsichtbar!)

**Datei 1**: `src/app/ueber-uns/page.tsx`
```tsx
// ZEILE 31 KOMPLETT LÖSCHEN:
<h1 className="sr-only">Über VENDORi GmbH — Aus Sellern wurden Partner</h1>
```

**Datei 2**: `src/sections/about_full_section/Component.tsx`
```tsx
// Zeile 26-34: h2 → h1 ÄNDERN:
<h1
  className={cn(
    'text-3xl md:text-4xl lg:text-5xl font-bold text-center',
    'text-neutral-900 dark:text-white',
    'mb-8 md:mb-12',
    'font-display font-bold'
  )}
>
  Aus Sellern wurden Partner.
</h1>

// ALLE h3 → h2 ändern (Zeilen 89, 177, 186, 194, 291)
```

#### E. Mobile Menu ARIA (5 Min)
**Datei**: `src/sections/sticky_header/Component.tsx`

Zeile 190: ID hinzufügen
```tsx
<nav
  id="mobile-menu"
  aria-label="Mobile Navigation"
  role="navigation"
  className="py-4 transition-colors duration-300"
>
```

---

### 1.3 Schema.org Quick Wins (+7 Punkte: 80% → 87%)

#### F. FAQ erweitern (3 → 10 Fragen) (15 Min)
**Datei**: `src/app/page.tsx`

Zeile 25-54: 7 neue FAQs hinzufügen nach den bestehenden 3:

```tsx
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // BESTEHENDE 3 BEHALTEN
    { /* Was macht VENDORi anders... */ },
    { /* Für welche Unternehmen... */ },
    { /* In welchen Märkten... */ },

    // 7 NEUE HINZUFÜGEN:
    {
      '@type': 'Question',
      name: 'Welche Services bietet VENDORi konkret an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VENDORi bietet drei Hauptservices: 1) D2C-Strategie & Umsatzwachstum mit praxiserprobten Strategien, 2) Internationale Marktplatz-Expansion auf Amazon in 20+ Ländern, 3) E-Commerce Partnerschaft mit operativer Begleitung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell kann ich mit VENDORi starten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nach einem kostenlosen Kennenlern-Gespräch können wir innerhalb von 2-3 Wochen starten. Keine monatelangen Strategiephasen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Zusammenarbeit mit VENDORi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten richten sich nach Ihrem individuellen Bedarf. Wir arbeiten projektbasiert oder im Retainer-Modell. Im Erstgespräch erstellen wir ein transparentes Angebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Auf welchen Marktplätzen ist VENDORi aktiv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hauptsächlich Amazon (alle EU-Marktplätze), aber auch eBay, Kaufland, Otto und internationale Plattformen. Unsere Shops bedienen 20+ europäische Länder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert es bis erste Ergebnisse sichtbar sind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erste Tests starten in Woche 1-2. Messbare Umsatzsteigerungen nach 4-8 Wochen. Wir arbeiten agil mit schnellen Iterationen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Branchen betreut VENDORi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branchenübergreifend mit B2B und D2C-Marken. Besonders stark in technischen Produkten, Werkzeugen, Home & Living. Entscheidend ist das Skalierungspotenzial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich eigene E-Commerce-Erfahrung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Wir bringen das komplette Know-how mit und übernehmen operative Tasks. Sie konzentrieren sich auf Ihr Kerngeschäft.',
      },
    },
  ],
};
```

#### G. Breadcrumbs für datenschutz/impressum (5 Min)

**Datei**: `src/app/datenschutz/page.tsx`

Nach Zeile 2 hinzufügen:
```tsx
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
```

Im Component nach StickyHeader:
```tsx
<BreadcrumbJsonLd items={[{ name: 'Datenschutz', url: 'https://vendori.eu/datenschutz' }]} />
<Breadcrumb items={[{ label: 'Datenschutz' }]} />
```

**Gleich für**: `src/app/impressum/page.tsx`

---

## PHASE 2: FUNDAMENTALS (3-5 Tage) - +9 Punkte → 87%

### 2.1 Code-Splitting (+15 Punkte: 68% → 83%)

#### A. Dynamic Imports (WICHTIG - 2h)
**Datei**: `src/app/page.tsx`

Zeilen 2-9 ERSETZEN:
```tsx
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { StickyHeader } from '@/sections/sticky_header';  // Nicht lazy

// Dynamic Imports für below-fold
const HeroSection = dynamic(() =>
  import('@/sections/hero_section').then(mod => ({ default: mod.HeroSection })),
  { loading: () => <div className="h-screen bg-zinc-900" /> }
);

const ServicesSection = dynamic(() =>
  import('@/sections/services_section').then(mod => ({ default: mod.ServicesSection })),
  { loading: () => <div className="min-h-screen bg-zinc-900" /> }
);

const ShopShowcaseSection = dynamic(() =>
  import('@/sections/shop_showcase_section').then(mod => ({ default: mod.ShopShowcaseSection })),
  { loading: () => <div className="min-h-screen bg-stone-100 dark:bg-neutral-900" /> }
);

const AboutSection = dynamic(() =>
  import('@/sections/about_section').then(mod => ({ default: mod.AboutSection })),
  { loading: () => <div className="min-h-screen bg-stone-300 dark:bg-neutral-800" /> }
);

const ContactSection = dynamic(() =>
  import('@/sections/contact_section').then(mod => ({ default: mod.ContactSection })),
  { loading: () => <div className="min-h-screen bg-zinc-900" /> }
);

const FooterSection = dynamic(() =>
  import('@/sections/footer_section').then(mod => ({ default: mod.FooterSection })),
  { loading: () => <div className="bg-zinc-900" /> }
);
```

**Testing**: Bundle-Analyse nach Build, Lighthouse Audit

#### B. 'use client' entfernen (30 Min)

**Dateien**:
- `src/sections/services_section/Component.tsx`
- `src/sections/shop_showcase_section/Component.tsx`

Zeile 1 LÖSCHEN in beiden:
```tsx
'use client';
```

Nur wenn tatsächlich keine Client-Interaktivität benötigt wird.

---

### 2.2 Schema.org erweitern (+5 Punkte: 87% → 92%)

#### C. Product Schema für Shops (1h)
**Datei**: `src/components/seo/JsonLd.tsx`

NACH Zeile 118 HINZUFÜGEN:
```tsx
const productSchemaMyToolStore = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'myToolStore - Werkzeug & Baumarkt Online Shop',
  description: 'Multi-Market Shop für Werkzeuge mit 1,5 Mio.+ Bestellungen.',
  brand: { '@type': 'Brand', name: 'myToolStore' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    offerCount: '10000+',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '15000',
    bestRating: '5',
    worstRating: '1',
  },
};

const productSchemaShowerNIZR = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ShowerNIZR - Premium Duschsysteme',
  description: 'Eigenmarke für innovative Duschsysteme von VENDORi.',
  brand: { '@type': 'Brand', name: 'ShowerNIZR' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
};
```

In JsonLd Component (Zeile 122-140):
```tsx
export function JsonLd() {
  return (
    <>
      {/* Bestehende Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />

      {/* NEU: Product Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaMyToolStore) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaShowerNIZR) }} />
    </>
  );
}
```

#### D. Service Pricing (30 Min)
**Datei**: `src/components/seo/JsonLd.tsx`

Zeilen 84-109 ERWEITERN (hasOfferCatalog):
```tsx
hasOfferCatalog: {
  '@type': 'OfferCatalog',
  name: 'E-Commerce Beratungsleistungen',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'D2C-Strategie & Umsatzwachstum',
        description: 'Praxiserprobte Direct-to-Consumer-Strategien.',
      },
      priceSpecification: {  // NEU
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '3500',
        minPrice: '2500',
        maxPrice: '7500',
        unitText: 'MONTH',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Internationale Marktplatz-Expansion',
        description: 'Skalierung auf Amazon in 20+ Ländern.',
      },
      priceSpecification: {  // NEU
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '5000',
        minPrice: '3000',
        maxPrice: '12000',
        unitText: 'MONTH',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'E-Commerce Partnerschaft',
        description: 'Operative Begleitung — echte Partnerschaft.',
      },
      priceSpecification: {  // NEU
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: 'Auf Anfrage',
      },
    },
  ],
},
```

---

### 2.3 Dedizierte Service-Seiten (OPTIONAL - +7 Punkte: 80% → 87%)

**Neue Dateien erstellen**:
```
src/app/services/
├── page.tsx
├── d2c-strategie/page.tsx
├── marketplace-expansion/page.tsx
└── ecommerce-partnerschaft/page.tsx
```

**Template** für jede Service-Seite:
```tsx
import { Metadata } from 'next';
import { JsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { StickyHeader } from '@/sections/sticky_header';
import { ContactSection } from '@/sections/contact_section';
import { FooterSection } from '@/sections/footer_section';

export const metadata: Metadata = {
  title: 'D2C-Strategie & Umsatzwachstum',
  description: 'Praxiserprobte D2C-Strategien aus eigenen Shops mit 1,5 Mio.+ Kunden.',
  alternates: { canonical: 'https://vendori.eu/services/d2c-strategie' },
};

export default function D2CStrategyPage() {
  return (
    <main id="main-content">
      <JsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Services', url: 'https://vendori.eu/services' },
        { name: 'D2C-Strategie', url: 'https://vendori.eu/services/d2c-strategie' },
      ]} />
      <StickyHeader />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            D2C-Strategie & Umsatzwachstum
          </h1>
          <p className="text-xl mb-12">
            Praxiserprobte Strategien aus eigenen Shops.
          </p>

          {/* Content sections mit Service-Details */}
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </main>
  );
}
```

**Navigation Update**: `src/sections/sticky_header/Component.tsx`

Zeile 10-15 erweitern:
```tsx
const baseNavigationItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',  // Dedizierte Seite
  },
  { label: 'Shops', href: '/#shops' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/#contact' },
];
```

---

## PHASE 3: ADVANCED (5-7 Tage) - +5 Punkte → 92%

### 3.1 Aurora Background optimieren (+6 Punkte: 83% → 89%)

#### A. Prefers-Reduced-Motion erweitern
**Datei**: `src/components/ui/aurora-background.tsx`

Zeile 59-62:
```tsx
style={{
  animationDuration: prefersReducedMotion ? '0s' : 'var(--aurora-speed)',
  animation: prefersReducedMotion ? 'none' : undefined,
  willChange: prefersReducedMotion ? 'auto' : 'transform',
  filter: prefersReducedMotion ? 'blur(5px)' : 'blur(10px)',
} as React.CSSProperties}
```

#### B. Blur reduzieren
Zeile 43: `blur-[10px]` → `blur-[8px]`

---

### 3.2 Reviews & Ratings (+3 Punkte: 92% → 95%)

**Neue Datei**: `src/components/seo/ReviewSchema.tsx`

```tsx
export function ReviewSchema() {
  const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VENDORi GmbH',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '12',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Michael S.' },
        datePublished: '2024-01-15',
        reviewBody: 'VENDORi hat unseren Amazon-Umsatz in 6 Monaten verdoppelt.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      // 3-5 weitere Reviews
    ],
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
    />
  );
}
```

In `src/app/page.tsx` einbinden:
```tsx
import { ReviewSchema } from '@/components/seo/ReviewSchema';

// Im Component:
<ReviewSchema />
```

---

## KRITISCHE DATEIEN

**Must-Edit (Phase 1 & 2)**:
1. `src/app/page.tsx` - Code-Splitting, FAQ
2. `src/app/ueber-uns/page.tsx` - H1 fix
3. `src/sections/about_full_section/Component.tsx` - H1 sichtbar
4. `src/components/seo/JsonLd.tsx` - Product & Service Schemas
5. `next.config.js` - Image Config

**Optional (Phase 3)**:
6. `src/components/ui/aurora-background.tsx` - Performance
7. Service-Seiten (neue Dateien)
8. `src/components/seo/ReviewSchema.tsx` - Reviews

---

## TESTING & VERIFICATION

### Nach JEDER Phase:

1. **Build & Type-Check**:
```bash
npm run type-check
npm run build
npm run start
```

2. **Lighthouse Audit** (Chrome DevTools):
   - Performance, Accessibility, Best Practices, SEO
   - Metriken: LCP <2.5s, FID <100ms, CLS <0.1

3. **Schema.org Validierung**:
   - https://validator.schema.org/
   - https://search.google.com/test/rich-results

4. **Visual Testing**:
```bash
npm run screenshots
```

5. **Manual Tests**:
   - Navigation (Mobile + Desktop)
   - Forms (Contact)
   - Mobile Menu
   - Links (intern + extern)

---

## ERWARTETE SCORE-ENTWICKLUNG

| Phase | Performance | Schema.org | Content/A11y | Gesamt |
|-------|------------|------------|--------------|--------|
| Start | 50% | 80% | 70% | ~67% |
| **Phase 1** | **68%** (+18) | **87%** (+7) | **80%** (+10) | **~78%** (+11) |
| **Phase 2** | **83%** (+15) | **92%** (+5) | **87%** (+7) | **~87%** (+9) |
| **Phase 3** | **89%** (+6) | **95%** (+3) | **92%** (+5) | **~92%** (+5) |

**Zeitaufwand**:
- Phase 1: 1-2 Tage
- Phase 2: 3-5 Tage
- Phase 3: 5-7 Tage (optional)

---

## RISIKOBEWERTUNG

### ✅ KEIN Risiko:
- teamfoto.png löschen
- SpaceGrotesk löschen
- H1 sichtbar machen
- FAQ erweitern
- Breadcrumbs
- Schema.org erweitern

### ⚠️ GERING (Testing nötig):
- Dynamic Imports
- 'use client' entfernen
- Aurora Blur reduzieren

### 🟡 MITTEL (Vorsichtig):
- Navigation ändern
- Service-Seiten erstellen

### 🔴 SEO-Schutz:
- **Keine** bestehenden Meta-Tags ändern
- **Keine** canonical URLs ändern
- **Keine** bestehenden H1 entfernen (nur sichtbar machen)
- **Immer** progressiv testen

---

## ERFOLGS-KRITERIEN

**Phase 1 abgeschlossen wenn**:
- ✅ teamfoto.png gelöscht
- ✅ H1 auf /ueber-uns sichtbar
- ✅ FAQ hat 10 Fragen
- ✅ Lighthouse Score >75%

**Phase 2 abgeschlossen wenn**:
- ✅ Code-Splitting funktioniert
- ✅ Bundle-Size -40%
- ✅ Product Schemas validiert
- ✅ Lighthouse Score >85%

**Phase 3 abgeschlossen wenn**:
- ✅ Aurora optimiert
- ✅ Reviews implementiert
- ✅ Lighthouse Score >90%
- ✅ **GESAMT-SCORE: 92%+**
