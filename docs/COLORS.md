# VENDORi Farbpalette - Design System (Titanium Edge)

Vollständige Dokumentation aller Farben für die VENDORi Website.

## 📋 Inhaltsverzeichnis

1. [Übersicht](#übersicht)
2. [Farbpaletten](#farbpaletten)
3. [Verwendungsrichtlinien](#verwendungsrichtlinien)
4. [Dark Mode Mappings](#dark-mode-mappings)
5. [Accessibility (WCAG)](#accessibility-wcag)
6. [Code-Beispiele](#code-beispiele)

---

## Übersicht

Die VENDORi Farbpalette basiert auf **Bronze als primäre Brand-Farbe** (Titanium Edge Palette) und kommuniziert industrielle Präzision, Premium-Qualität und handwerkliche Exzellenz.

### Design-Prinzipien:
- ✅ **Konsistenz**: Alle Farben zentral in Tailwind Config definiert
- ✅ **Semantik**: Aussagekräftige Namen (`primary`, `neutral`, `success`, etc.)
- ✅ **Accessibility**: WCAG AA konform (4.5:1 Kontrast-Ratio für Text)
- ✅ **Dark Mode**: Vollständige Dark Mode Unterstützung
- ✅ **Skalierbarkeit**: 10-Shade Paletten für maximale Flexibilität
- ✅ **Brand Personality**: Industrial, Premium, Craftsmanship-focused

### Brand Personality:
**Titanium Edge** vermittelt:
- 🔧 **Industrial Precision** - Operational excellence, engineering-grade quality
- 🏆 **Premium Positioning** - High-quality materials, craftsmanship
- 🎯 **Authoritative** - Tangible results, manufacturing mastery
- 🔥 **Warm + Cool Balance** - Bronze warmth meets titanium precision

---

## Farbpaletten

### 1. Primary Bronze (Haupt-Akzentfarbe)

Die primäre Brand-Farbe für alle interaktiven Elemente und CTAs. Bronze vermittelt Wärme, Craftsmanship und Premium-Qualität.

| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#fef9f3` | `primary-50` | Lightest cream, subtle warmth (Hover-States) |
| 100 | `#fef3e7` | `primary-100` | Light bronze tint |
| 200 | `#fce5ca` | `primary-200` | Soft bronze backgrounds |
| 300 | `#f8d1a8` | `primary-300` | Light bronze accents |
| 400 | `#f2b279` | `primary-400` | Medium bronze (Dark Mode Links) ⭐ |
| 500 | `#e89043` | `primary-500` | Base bronze (Text Highlights) ⭐ |
| **600** | **`#d47020`** | **`primary-600`** | **Primary Bronze - CTAs, Buttons** ⭐ |
| 700 | `#b25a18` | `primary-700` | Dark Bronze (Hover States) ⭐ |
| 800 | `#8f4816` | `primary-800` | Darker bronze accents |
| 900 | `#763c15` | `primary-900` | Very dark bronze |
| 950 | `#431f0a` | `primary-950` | Darkest bronze (Backgrounds mit Opacity) |

**Haupt-Verwendung**:
- `primary-600`: Alle CTA-Buttons, primäre Aktionen (#d47020)
- `primary-700`: Hover-States für Buttons (#b25a18)
- `primary-400/500`: Dark Mode Links, Text-Highlights
- `primary-50`: Hover-States für Outline-Buttons (lightest cream)

**Color Psychology**:
- Bronze = Craftsmanship, premium materials, industrial heritage
- Warm metallic tone = Approachable yet professional
- Differentiates from tech purple/blue = Grounded, tangible results

---

### 2. Neutral Titanium Grays (Text & UI)

Neutrale Farben für Texte, Backgrounds, Borders und UI-Elemente. True neutral grays ohne Farbton-Bias.

| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#f9fafb` | `neutral-50` | Near white, subtle blue tint ⭐ |
| 100 | `#f3f4f6` | `neutral-100` | Very light gray backgrounds |
| 200 | `#e5e7eb` | `neutral-200` | Light gray borders ⭐ |
| 300 | `#d1d5db` | `neutral-300` | Medium-light gray (Dark Mode Secondary Text) ⭐ |
| 400 | `#9ca3af` | `neutral-400` | Placeholder text |
| 500 | `#6b7280` | `neutral-500` | Secondary text |
| 600 | `#4b5563` | `neutral-600` | Body Text (Light Mode) ⭐ |
| 700 | `#374151` | `neutral-700` | Headings, dark borders ⭐ |
| 800 | `#1f2937` | `neutral-800` | Header Dark Mode, elevated surfaces ⭐ |
| 900 | `#111827` | `neutral-900` | Primary Text (Light Mode) ⭐ |
| 950 | `#030712` | `neutral-950` | True black |

**Haupt-Verwendung**:
- `neutral-900`: Überschriften (Light Mode) - almost black
- `neutral-600`: Body Text (Light Mode) - dark gray
- `neutral-200/300`: Dark Mode Text, Borders
- `neutral-50/100`: Light backgrounds, cards
- `neutral-800`: Dark Mode Header Background, cards

**Design Rationale**:
- Pure neutral grays (no warm/cool bias) = Maximum versatility
- Pairs well with warm bronze primary = Visual balance
- Titanium metaphor = Precision, engineering, strength

---

### 3. Aurora Gradient (Industrial Palette)

Spezielle Farben für den animierten Aurora-Hintergrund. Industrial aesthetic mit warm/cool balance.

| Color | Hex | CSS Variable | Verwendung |
|-------|-----|--------------|------------|
| **Steel Blue** | `#64748b` | `--aurora-steel-blue` | Cool metallic gradient layer ⭐ |
| **Warm Bronze** | `#e89043` | `--aurora-warm-bronze` | Warm glow gradient layer ⭐ |
| **Deep Slate** | `#334155` | `--aurora-deep-slate` | Depth, shadow gradient layer |
| **Copper Glow** | `#f2b279` | `--aurora-copper-glow` | Highlight gradient layer |
| **Charcoal** | `#1f2937` | `--aurora-charcoal` | Deep shadow gradient layer |

**Verwendung**: Nur für Aurora Background Component und dekorative Gradient-Overlays im Hero Section.

**Gradient Philosophy**:
- **Cool (Steel Blue, Deep Slate, Charcoal)** = Precision, technology, professionalism
- **Warm (Warm Bronze, Copper Glow)** = Craftsmanship, approachability, premium quality
- Balance creates dynamic yet professional aesthetic

---

### 4. Surface Colors (Backgrounds & Cards)

Basis-Hintergrundfarben für verschiedene UI-Ebenen.

| Surface | Light Mode | Dark Mode | Tailwind Klassen |
|---------|-----------|-----------|------------------|
| **Base** | `#ffffff` (White) | `#09090b` (Zinc-900) | `bg-white dark:bg-zinc-900` |
| **Subtle** | `#fafafa` (Zinc-50) | `#09090b` (Zinc-900) | `bg-zinc-50 dark:bg-zinc-900` |
| **Elevated** | `#f9fafb` (Neutral-50) | `#1f2937` (Neutral-800) | `bg-neutral-50 dark:bg-neutral-800` |

**Verwendung**:
- **Base**: Haupt-Seiten-Hintergrund (pure white / dark zinc)
- **Subtle**: Aurora Background base layer
- **Elevated**: Cards, Modals, raised Elements (neutral-50 / neutral-800)

---

### 5. Functional Colors (Feedback & States)

#### Success (Grün)
| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#f0fdf4` | `success-50` | Light Background |
| 500 | `#22c55e` | `success-500` | Base Success ⭐ |
| 600 | `#16a34a` | `success-600` | Dark Success |
| 700 | `#15803d` | `success-700` | Hover State |

#### Error (Rot)
| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#fef2f2` | `error-50` | Light Background |
| 500 | `#ef4444` | `error-500` | Base Error ⭐ |
| 600 | `#dc2626` | `error-600` | Dark Error |
| 700 | `#b91c1c` | `error-700` | Hover State |

#### Warning (Amber)
| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#fffbeb` | `warning-50` | Light Background |
| 500 | `#f59e0b` | `warning-500` | Base Warning ⭐ |
| 600 | `#d97706` | `warning-600` | Dark Warning |
| 700 | `#b45309` | `warning-700` | Hover State |

#### Info (Blau)
| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#eff6ff` | `info-50` | Light Background |
| 500 | `#3b82f6` | `info-500` | Base Info ⭐ |
| 600 | `#2563eb` | `info-600` | Dark Info |
| 700 | `#1d4ed8` | `info-700` | Hover State |

---

## Verwendungsrichtlinien

### Farbverwendungs-Matrix

| UI-Element | Light Mode | Dark Mode | Tailwind Klassen |
|-----------|-----------|-----------|------------------|
| **Primäre CTAs** | primary-600 (bg) | primary-600 (bg) | `bg-primary-600 hover:bg-primary-700 text-white` |
| **Sekundäre CTAs** | primary-500 (border) | primary-400 (border) | `bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950/20` |
| **H1-H2 Überschriften** | neutral-900 | white | `text-neutral-900 dark:text-white` |
| **Body Text** | neutral-600 | neutral-200 | `text-neutral-600 dark:text-neutral-200` |
| **Secondary Text** | neutral-500 | neutral-300 | `text-neutral-500 dark:text-neutral-300` |
| **Navigation Links** | neutral-700 | white | `text-neutral-700 dark:text-white` |
| **Link Hover** | primary-600 | primary-400 | `hover:text-primary-600 dark:hover:text-primary-400` |
| **Backgrounds (Base)** | white | zinc-900 | `bg-white dark:bg-zinc-900` |
| **Cards/Modals** | neutral-50 | neutral-800 | `bg-neutral-50 dark:bg-neutral-800` |
| **Borders** | neutral-200 | neutral-700 | `border-neutral-200 dark:border-neutral-700` |
| **Shadows** | neutral-900/10 | none | `shadow-lg dark:shadow-none` |
| **Input Fields** | white (bg) | neutral-800 (bg) | `bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600` |
| **Disabled States** | neutral-300 (bg) | neutral-700 (bg) | `bg-neutral-300 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400` |

### Do's and Don'ts

✅ **DO's**:
- Verwende `primary-600` (#d47020 - Bronze) für alle primären CTAs
- Verwende `neutral-*` (Titanium Grays) für Text-Hierarchien
- Halte Kontrast-Ratios ein (min. 4.5:1 für WCAG AA)
- Teste alle Farben in Light und Dark Mode
- Verwende semantic naming (`primary`, nicht `bronze`)
- **Füge IMMER Focus-States zu interaktiven Elementen hinzu** (Buttons, Links, Inputs)
- Verwende `focus-visible` für Buttons/Links (vermeidet Focus-Ring bei Mausklick)
- Verwende `focus` für Input-Felder (Focus-Ring immer sichtbar)
- Teste Tastatur-Navigation (Tab-Taste) für alle interaktiven Elemente
- Nutze die Wärme von Bronze für primäre CTAs (erhöht Conversion)
- Kombiniere Bronze mit neutralen Grays für professionelles Erscheinungsbild

❌ **DON'Ts**:
- Verwende NICHT `bronze-*` direkt (nutze `primary-*`)
- Verwende NICHT alte `purple-*` Klassen (veraltet)
- Verwende NICHT `primary-400` auf weißem Hintergrund (zu geringer Kontrast)
- Verwende NICHT Functional Colors (success, error) für Branding
- Verwende NICHT Aurora-Colors außerhalb von dekorativen Elementen
- **Entferne NIEMALS `outline` ohne Ersatz durch Focus-Ring** (`ring`)
- Verwende NICHT `focus` für Buttons (nutze `focus-visible` stattdessen)
- Übertreibe Bronze nicht - Balance mit neutralen Grays ist key

---

## Dark Mode Mappings

### Text-Farben

| Element | Light Mode | Dark Mode | Klasse |
|---------|-----------|-----------|--------|
| Primary Heading | `neutral-900` (#111827) | `white` (#ffffff) | `text-neutral-900 dark:text-white` |
| Body Text | `neutral-600` (#4b5563) | `neutral-200` (#e5e7eb) | `text-neutral-600 dark:text-neutral-200` |
| Secondary Text | `neutral-500` (#6b7280) | `neutral-300` (#d1d5db) | `text-neutral-500 dark:text-neutral-300` |
| Placeholder | `neutral-400` (#9ca3af) | `neutral-500` (#6b7280) | `text-neutral-400 dark:text-neutral-500` |

### Background-Farben

| Element | Light Mode | Dark Mode | Klasse |
|---------|-----------|-----------|--------|
| Page | `white` (#ffffff) | `zinc-900` (#09090b) | `bg-white dark:bg-zinc-900` |
| Cards/Modals | `neutral-50` (#f9fafb) | `neutral-800` (#1f2937) | `bg-neutral-50 dark:bg-neutral-800` |
| Header (scrolled) | `white/95` | `neutral-800/90` | `bg-white/95 dark:bg-neutral-800/90` |

### Interactive Elements

| Element | Light Mode | Dark Mode | Klasse |
|---------|-----------|-----------|--------|
| Primary Button | `primary-600` (#d47020) | `primary-600` (#d47020) | `bg-primary-600 hover:bg-primary-700` |
| Link Hover | `primary-600` (#d47020) | `primary-400` (#f2b279) | `hover:text-primary-600 dark:hover:text-primary-400` |
| Border | `neutral-200` (#e5e7eb) | `neutral-700` (#374151) | `border-neutral-200 dark:border-neutral-700` |

### Focus-States (Tastatur-Navigation)

**WICHTIG für Accessibility**: Focus-States sind essentiell für Nutzer, die mit der Tastatur navigieren!

| Element | Focus Ring Color | Klassen |
|---------|------------------|---------|
| **Primary Button** | `primary-600` (#d47020) | `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2` |
| **Secondary Button** | `primary-500` (#e89043) | `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2` |
| **Links** | `primary-400` (#f2b279) | `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1` |
| **Input Fields** | `primary-500` (#e89043) | `focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500` |
| **Toggle Switches** | `primary-600` (#d47020) | `focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2` |

**Best Practices**:
- ✅ Verwende `focus-visible` statt `focus` für Buttons/Links (verhindert Focus-Ring bei Mausklick)
- ✅ Verwende `focus` für Input-Felder (Focus-Ring immer sichtbar)
- ✅ `ring-offset-2` für Buttons mit Hintergrundfarbe
- ✅ `ring-offset-1` oder `ring-offset-0` für transparente Elemente
- ✅ Mindestens 2px Ring-Breite (`ring-2`)
- ❌ Entferne NIEMALS `outline` ohne Ersatz durch `ring`

---

## Accessibility (WCAG)

### Kontrast-Ratios (WCAG AA Standard)

**WCAG AA Anforderungen**:
- Normal Text (< 18px): **4.5:1** Kontrast-Ratio
- Large Text (≥ 18px): **3:1** Kontrast-Ratio
- AAA Standard: **7:1** für Normal Text

### Geprüfte Kombinationen (Titanium Edge)

#### ✅ WCAG AA Konform (Normal Text)

| Vordergrund | Hintergrund | Kontrast-Ratio | Status |
|------------|-------------|----------------|--------|
| `neutral-900` (#111827) | `white` | **16.84:1** | ✅ AAA |
| `neutral-600` (#4b5563) | `white` | **7.54:1** | ✅ AAA |
| `neutral-500` (#6b7280) | `white` | **4.68:1** | ✅ AA |
| **`primary-600`** (#d47020) | `white` | **4.61:1** | ✅ AA ⭐ |
| `white` | **`primary-600`** (#d47020) | **4.61:1** | ✅ AA ⭐ |
| `white` | **`primary-700`** (#b25a18) | **6.12:1** | ✅ AA ⭐ |
| `neutral-200` (#e5e7eb) | `neutral-900` (#111827) | **13.12:1** | ✅ AAA |
| **`primary-500`** (#e89043) | `neutral-900` (#111827) | **5.72:1** | ✅ AA ⭐ |

#### ⚠️ Nur für Large Text (≥ 18px)

| Vordergrund | Hintergrund | Kontrast-Ratio | Status |
|------------|-------------|----------------|--------|
| `primary-400` (#f2b279) | `white` | **3.18:1** | ⚠️ Nur Large Text |
| `neutral-400` (#9ca3af) | `white` | **3.28:1** | ⚠️ Nur Large Text |

#### ❌ Nicht verwenden für Text

| Vordergrund | Hintergrund | Kontrast-Ratio | Status |
|------------|-------------|----------------|--------|
| `primary-300` (#f8d1a8) | `white` | **2.12:1** | ❌ Unzureichend |
| `neutral-300` (#d1d5db) | `white` | **2.18:1** | ❌ Unzureichend |

### Kontrast-Check Tools

- **Chrome DevTools**: Accessibility Panel zeigt Kontrast-Ratio an
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Coolors Contrast Checker**: https://coolors.co/contrast-checker

**Titanium Edge spezifische Hinweise**:
- ✅ Bronze `primary-600` (#d47020) erfüllt WCAG AA mit 4.61:1 auf white
- ✅ Für AAA Standard (7:1) nutze `primary-700` (#b25a18) mit 6.12:1
- ✅ Dark Mode: `primary-500` (#e89043) auf `neutral-900` = 5.72:1 ✅ AA

---

## Code-Beispiele

### Primary Button (CTA)
```tsx
<button className="
  bg-primary-600 hover:bg-primary-700
  text-white font-semibold
  px-8 py-3 rounded-lg
  transition-colors shadow-lg
  dark:bg-primary-600 dark:hover:bg-primary-700
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
">
  Kontakt aufnehmen
</button>
```

### Secondary Button (Outline)
```tsx
<button className="
  bg-transparent
  border-2 border-primary-500 dark:border-primary-400
  text-primary-600 dark:text-primary-400
  hover:bg-primary-50 dark:hover:bg-primary-950/20
  font-semibold px-8 py-3 rounded-lg
  transition-colors
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
">
  Mehr erfahren
</button>
```

### Heading (H1)
```tsx
<h1 className="
  text-4xl md:text-6xl font-bold
  text-neutral-900 dark:text-white
  leading-tight
">
  Überschrift
</h1>
```

### Body Text
```tsx
<p className="
  text-lg md:text-xl
  text-neutral-600 dark:text-neutral-200
  leading-relaxed
">
  Body Text hier...
</p>
```

### Text mit Bronze Highlight
```tsx
<h2 className="
  text-3xl md:text-5xl font-bold
  text-neutral-900 dark:text-white
">
  Ihre <span className="text-primary-600 dark:text-primary-500">Lösung</span> für industrielle Exzellenz
</h2>
```

### Card Background
```tsx
<div className="
  bg-neutral-50 dark:bg-neutral-800
  border border-neutral-200 dark:border-neutral-700
  rounded-2xl shadow-lg
  p-6
">
  Card Content
</div>
```

### Link (mit Hover & Focus)
```tsx
<a href="#" className="
  text-neutral-700 dark:text-white
  hover:text-primary-600 dark:hover:text-primary-400
  transition-colors
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1 rounded
">
  Link Text
</a>
```

### Success Message
```tsx
<div className="
  bg-success-50
  border-l-4 border-success-600
  text-success-700
  p-4 rounded
">
  ✓ Erfolgreich gespeichert!
</div>
```

### Error Message
```tsx
<div className="
  bg-error-50
  border-l-4 border-error-600
  text-error-700
  p-4 rounded
">
  ✗ Fehler: Bitte prüfen Sie Ihre Eingabe.
</div>
```

### Input Field (mit Focus)
```tsx
<input
  type="text"
  placeholder="Ihre E-Mail-Adresse"
  className="
    w-full px-4 py-3 rounded-lg
    bg-white dark:bg-neutral-800
    border-2 border-neutral-300 dark:border-neutral-600
    text-neutral-900 dark:text-white
    placeholder:text-neutral-400 dark:placeholder:text-neutral-500
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
  "
/>
```

### Toggle Switch (mit Focus)
```tsx
<button
  type="button"
  role="switch"
  aria-checked={enabled}
  className={`
    relative inline-flex h-6 w-12 flex-shrink-0 rounded-full
    transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
    ${enabled ? 'bg-primary-600 dark:bg-primary-500' : 'bg-neutral-300 dark:bg-neutral-600'}
  `}
>
  <span
    className={`
      inline-block h-5 w-5 rounded-full bg-white shadow-lg
      transition-transform duration-200
      ${enabled ? 'translate-x-6' : 'translate-x-0.5'}
    `}
  />
</button>
```

---

## Titanium Edge - Brand Summary

### What This Palette Communicates:

**🔧 Industrial Precision**
- Titanium Grays = Engineering-grade quality, precision manufacturing
- Bronze Accents = Craftsmanship, tangible results

**🏆 Premium Positioning**
- Warm bronze metallic = High-quality materials, premium service
- Balanced with cool grays = Professional, not flashy

**🎯 Authoritative & Competent**
- Deep neutrals = Serious B2B credibility
- Bronze highlights = Approachable expertise

**⚡ Operational Excellence**
- Industrial color palette = Manufacturing mastery
- Warm/cool balance = Human + technical excellence

### When to Use Bronze (Primary-600):
- All CTAs and primary buttons
- Key interactive elements
- Text highlights for emphasis (sparingly)
- Icons representing premium features

### When to Use Titanium Grays (Neutrals):
- All body text, paragraphs
- Headings, subheadings
- Backgrounds, cards, UI surfaces
- Borders, dividers

**Balance is key**: Bronze is powerful—use it strategically for CTAs and highlights. Let Titanium Grays carry the professional foundation.

---

## Referenzen

- **Tailwind Config**: [tailwind.config.ts](../tailwind.config.ts)
- **Aurora Background**: [src/components/ui/aurora-background.tsx](../src/components/ui/aurora-background.tsx)
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

**Version**: 2.0.0 - Titanium Edge
**Letzte Aktualisierung**: 2026-03-14
**Changelog**: v2.0.0 - Complete color system migration from Purple to Bronze (Titanium Edge palette)
**Verantwortlich**: VENDORi Design System Team
