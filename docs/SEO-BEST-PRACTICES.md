# SEO Best Practices - VENDORi Website

Dieses Dokument beschreibt die SEO-Standards für die VENDORi-Website.

## Bilder-SEO

### 1. Alt-Texte für Content-Bilder (PFLICHT)

Alle Content-Bilder **müssen** beschreibende alt-Texte haben:

```tsx
// ✅ RICHTIG
<Image
  src="/teamfoto.webp"
  alt="VENDORi GmbH Team — E-Commerce Experten mit 22+ Jahren Erfahrung"
  width={1200}
  height={900}
/>

// ❌ FALSCH
<Image
  src="/teamfoto.webp"
  alt=""  // Leerer alt-Text bei Content-Bildern
  width={1200}
  height={900}
/>
```

### 2. Dekorative Icons/SVGs (aria-hidden)

Dekorative Icons (z.B. von lucide-react) sollten `aria-hidden="true"` haben:

```tsx
// ✅ RICHTIG - Dekoratives Icon
<Check className="w-5 h-5 text-primary-400" aria-hidden="true" />

// ✅ RICHTIG - Icon mit semantischer Bedeutung
<button aria-label="Menü öffnen">
  <Menu className="w-6 h-6" aria-hidden="true" />
</button>
```

### 3. Logo-Bilder

Logos sollten prägnante, aber beschreibende alt-Texte haben:

```tsx
// ✅ RICHTIG
<Image
  src="/Logo_Vendori_rgb_anthrazit.svg"
  alt="VENDORi Logo"
  width={364}
  height={121}
/>

// ❌ ZU LANG
<Image
  src="/Logo_Vendori_rgb_anthrazit.svg"
  alt="VENDORi GmbH Unternehmenslogo in anthrazitgrau mit moderner Typografie"
  width={364}
  height={121}
/>
```

### 4. Shop/Marken-Logos

Shop-Logos sollten die Marke und ggf. den Kontext beschreiben:

```tsx
// ✅ RICHTIG
<Image
  src="/mytoolstore.svg"
  alt="myToolStore Multi-Market E-Commerce"
  width={192}
  height={128}
/>
```

## Metadata-SEO

### Aktuelle Konfiguration (layout.tsx)

Die Website ist aktuell auf **Deutsch (de-DE)** ausgerichtet:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://vendori.eu'),
  title: {
    default: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis',
    template: '%s | VENDORi GmbH',
  },
  description: '...',
  openGraph: {
    type: 'website',
    locale: 'de_DE',  // Deutsch
    siteName: 'VENDORi GmbH',
  },
};
```

### Zukünftige Internationalisierung

**Status**: Keine hreflang-Tags implementiert (Website bleibt auf DE)

Falls die Website mehrsprachig wird, müssen folgende Tags hinzugefügt werden:

```typescript
// ZUKÜNFTIG: Wenn mehrsprachig
export const metadata: Metadata = {
  // ... bestehende Konfiguration
  alternates: {
    canonical: 'https://vendori.eu',
    languages: {
      'de-DE': 'https://vendori.eu',
      'en-GB': 'https://vendori.eu/en',
      'fr-FR': 'https://vendori.eu/fr',
      // ... weitere Sprachen
    },
  },
};
```

## Checkliste für neue Seiten/Komponenten

### Bevor eine neue Komponente committed wird:

- [ ] Alle `<Image>` Komponenten haben `alt`-Attribute
- [ ] Alt-Texte sind beschreibend (nicht leer, nicht generisch)
- [ ] Dekorative Icons haben `aria-hidden="true"`
- [ ] Buttons mit nur Icons haben `aria-label`
- [ ] Seitenspezifische Metadata definiert (title, description)

### Beispiel-Komponente:

```tsx
// ✅ VOLLSTÄNDIG BARRIEREFREI & SEO-OPTIMIERT
export function FeatureCard() {
  return (
    <div>
      {/* Content-Bild: Beschreibender alt-Text */}
      <Image
        src="/feature-screenshot.webp"
        alt="Dashboard-Ansicht mit Umsatzstatistiken und Verkaufstrends"
        width={800}
        height={600}
      />

      {/* Dekoratives Icon: aria-hidden */}
      <Check className="w-5 h-5" aria-hidden="true" />

      {/* Icon-Button: aria-label */}
      <button aria-label="Einstellungen öffnen">
        <Settings className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}
```

## Tools & Validierung

Nutze die bereitgestellten Utilities:

```typescript
// src/lib/seo-utils.ts
import { validateImageAlt } from '@/lib/seo-utils';

// Validiert alt-Texte zur Entwicklungszeit
validateImageAlt('VENDORi Logo'); // ✅ OK
validateImageAlt(''); // ⚠️ Warnung in Console
```

## Ressourcen

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebAIM Alt Text Guide](https://webaim.org/techniques/alttext/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
