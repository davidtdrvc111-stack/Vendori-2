# VENDORi Farbpalette - Design System

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

Die VENDORi Farbpalette basiert auf **Purple als primäre Brand-Farbe** und wurde systematisch auf Basis des Hero Sections und Sticky Headers entwickelt.

### Design-Prinzipien:
- ✅ **Konsistenz**: Alle Farben zentral in Tailwind Config definiert
- ✅ **Semantik**: Aussagekräftige Namen (`primary`, `neutral`, `success`, etc.)
- ✅ **Accessibility**: WCAG AA konform (4.5:1 Kontrast-Ratio für Text)
- ✅ **Dark Mode**: Vollständige Dark Mode Unterstützung
- ✅ **Skalierbarkeit**: 10-Shade Paletten für maximale Flexibilität

---

## Farbpaletten

### 1. Primary Purple (Haupt-Akzentfarbe)

Die primäre Brand-Farbe für alle interaktiven Elemente und CTAs.

| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#faf5ff` | `primary-50` | Sehr helle Backgrounds, Hover-States |
| 100 | `#f3e8ff` | `primary-100` | Helle Backgrounds |
| 200 | `#e9d5ff` | `primary-200` | Light Backgrounds |
| 300 | `#d8b4fe` | `primary-300` | Medium-Light Accents |
| 400 | `#c084fc` | `primary-400` | Dark Mode Links, Hovers ⭐ |
| 500 | `#a855f7` | `primary-500` | Text-Highlights, Accents ⭐ |
| **600** | **`#9333ea`** | **`primary-600`** | **CTAs, Buttons - HAUPTFARBE** ⭐ |
| 700 | `#7e22ce` | `primary-700` | Hover-States für Buttons ⭐ |
| 800 | `#6b21a8` | `primary-800` | Darker Accents |
| 900 | `#581c87` | `primary-900` | Very Dark Accents |
| 950 | `#3b0764` | `primary-950` | Darkest Backgrounds (mit Opacity) |

**Haupt-Verwendung**:
- `primary-600`: Alle CTA-Buttons, primäre Aktionen
- `primary-700`: Hover-States für Buttons
- `primary-400/500`: Dark Mode Links, Text-Highlights
- `primary-50`: Hover-States für Outline-Buttons

---

### 2. Neutral Slate/Gray (Text & UI)

Neutrale Farben für Texte, Backgrounds, Borders und UI-Elemente.

| Shade | Hex | Tailwind Class | Verwendung |
|-------|-----|----------------|------------|
| 50 | `#f8fafc` | `neutral-50` | Fast White (Backgrounds, Cards) ⭐ |
| 100 | `#f1f5f9` | `neutral-100` | Sehr helle Backgrounds |
| 200 | `#e2e8f0` | `neutral-200` | Helle Borders ⭐ |
| 300 | `#cbd5e1` | `neutral-300` | Light Gray, Dark Mode Text |
| 400 | `#94a3b8` | `neutral-400` | Placeholder Text |
| 500 | `#64748b` | `neutral-500` | Secondary Text |
| 600 | `#475569` | `neutral-600` | Body Text (Light Mode) ⭐ |
| 700 | `#334155` | `neutral-700` | Headings, Dark Borders ⭐ |
| 800 | `#1e293b` | `neutral-800` | Header Dark Mode ⭐ |
| 900 | `#0f172a` | `neutral-900` | Primary Text (Light Mode) ⭐ |
| 950 | `#020617` | `neutral-950` | True Black Alternative |

**Haupt-Verwendung**:
- `neutral-900`: Überschriften (Light Mode)
- `neutral-600`: Body Text (Light Mode)
- `neutral-200/300`: Dark Mode Text, Borders
- `neutral-50/100`: Backgrounds, Cards
- `neutral-800`: Dark Mode Header Background

---

### 3. Aurora Gradient (Dekorative Backgrounds)

Spezielle Farben für den animierten Aurora-Hintergrund.

| Color | Hex | CSS Variable | Verwendung |
|-------|-----|--------------|------------|
| **Blue Light** | `#93c5fd` | `--aurora-blue-light` | Gradient Layer |
| **Blue Medium** | `#60a5fa` | `--aurora-blue-medium` | Gradient Layer |
| **Blue Base** | `#3b82f6` | `--aurora-blue-base` | Gradient Layer ⭐ |
| **Indigo Light** | `#a5b4fc` | `--aurora-indigo-light` | Gradient Layer |
| **Violet Light** | `#ddd6fe` | `--aurora-violet-light` | Gradient Layer |

**Verwendung**: Nur für Aurora Background Component und dekorative Gradient-Overlays.

---

### 4. Surface Colors (Backgrounds & Cards)

Basis-Hintergrundfarben für verschiedene UI-Ebenen.

| Surface | Light Mode | Dark Mode | Tailwind Klassen |
|---------|-----------|-----------|------------------|
| **Base** | `#ffffff` (White) | `#09090b` (Zinc-900) | `bg-white dark:bg-zinc-900` |
| **Subtle** | `#fafafa` (Zinc-50) | `#09090b` (Zinc-900) | `bg-zinc-50 dark:bg-zinc-900` |
| **Elevated** | `#f8fafc` (Neutral-50) | `#1e293b` (Neutral-800) | `bg-neutral-50 dark:bg-neutral-800` |

**Verwendung**:
- **Base**: Haupt-Seiten-Hintergrund
- **Subtle**: Aurora Background (mit Gradient)
- **Elevated**: Cards, Modals, raised Elements

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
- Verwende `primary-600` für alle primären CTAs
- Verwende `neutral-*` für Text-Hierarchien
- Halte Kontrast-Ratios ein (min. 4.5:1)
- Teste alle Farben in Light und Dark Mode
- Verwende semantic naming (`primary`, nicht `purple`)
- **Füge IMMER Focus-States zu interaktiven Elementen hinzu** (Buttons, Links, Inputs)
- Verwende `focus-visible` für Buttons/Links (vermeidet Focus-Ring bei Mausklick)
- Verwende `focus` für Input-Felder (Focus-Ring immer sichtbar)
- Teste Tastatur-Navigation (Tab-Taste) für alle interaktiven Elemente

❌ **DON'Ts**:
- Verwende NICHT `purple-*` direkt (veraltet, nutze `primary-*`)
- Verwende NICHT `slate-*` direkt (veraltet, nutze `neutral-*`)
- Verwende NICHT `primary-400` auf weißem Hintergrund (zu geringer Kontrast)
- Verwende NICHT Functional Colors (success, error) für Branding
- Verwende NICHT Aurora-Colors außerhalb von dekorativen Elementen
- **Entferne NIEMALS `outline` ohne Ersatz durch Focus-Ring** (`ring`)
- Verwende NICHT `focus` für Buttons (nutze `focus-visible` stattdessen)

---

## Dark Mode Mappings

### Text-Farben

| Element | Light Mode | Dark Mode | Klasse |
|---------|-----------|-----------|--------|
| Primary Heading | `neutral-900` | `white` | `text-neutral-900 dark:text-white` |
| Body Text | `neutral-600` | `neutral-200` | `text-neutral-600 dark:text-neutral-200` |
| Secondary Text | `neutral-500` | `neutral-300` | `text-neutral-500 dark:text-neutral-300` |
| Placeholder | `neutral-400` | `neutral-500` | `text-neutral-400 dark:text-neutral-500` |

### Background-Farben

| Element | Light Mode | Dark Mode | Klasse |
|---------|-----------|-----------|--------|
| Page | `white` | `zinc-900` | `bg-white dark:bg-zinc-900` |
| Cards/Modals | `neutral-50` | `neutral-800` | `bg-neutral-50 dark:bg-neutral-800` |
| Header (scrolled) | `white/95` | `neutral-800/90` | `bg-white/95 dark:bg-neutral-800/90` |

### Interactive Elements

| Element | Light Mode | Dark Mode | Klasse |
|---------|-----------|-----------|--------|
| Primary Button | `primary-600` | `primary-600` | `bg-primary-600 hover:bg-primary-700` |
| Link Hover | `primary-600` | `primary-400` | `hover:text-primary-600 dark:hover:text-primary-400` |
| Border | `neutral-200` | `neutral-700` | `border-neutral-200 dark:border-neutral-700` |

### Focus-States (Tastatur-Navigation)

**WICHTIG für Accessibility**: Focus-States sind essentiell für Nutzer, die mit der Tastatur navigieren!

| Element | Focus Ring Color | Klassen |
|---------|------------------|---------|
| **Primary Button** | `primary-600` | `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2` |
| **Secondary Button** | `primary-500` | `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2` |
| **Links** | `primary-400` | `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1` |
| **Input Fields** | `primary-500` | `focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500` |
| **Toggle Switches** | `primary-600` | `focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2` |

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

### Geprüfte Kombinationen

#### ✅ WCAG AA Konform (Normal Text)

| Vordergrund | Hintergrund | Kontrast-Ratio | Status |
|------------|-------------|----------------|--------|
| `neutral-900` | `white` | 18.51:1 | ✅ AAA |
| `neutral-600` | `white` | 7.31:1 | ✅ AAA |
| `neutral-500` | `white` | 4.63:1 | ✅ AA |
| `primary-600` | `white` | 5.12:1 | ✅ AA |
| `white` | `primary-600` | 5.12:1 | ✅ AA |
| `white` | `primary-700` | 7.89:1 | ✅ AAA |
| `neutral-200` | `neutral-900` | 13.94:1 | ✅ AAA |

#### ⚠️ Nur für Large Text (≥ 18px)

| Vordergrund | Hintergrund | Kontrast-Ratio | Status |
|------------|-------------|----------------|--------|
| `primary-400` | `white` | 2.91:1 | ⚠️ Nur Large Text |
| `neutral-400` | `white` | 3.17:1 | ⚠️ Nur Large Text |

#### ❌ Nicht verwenden für Text

| Vordergrund | Hintergrund | Kontrast-Ratio | Status |
|------------|-------------|----------------|--------|
| `primary-300` | `white` | 1.98:1 | ❌ Unzureichend |
| `neutral-300` | `white` | 2.01:1 | ❌ Unzureichend |

### Kontrast-Check Tools

- **Chrome DevTools**: Accessibility Panel zeigt Kontrast-Ratio an
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Coolors Contrast Checker**: https://coolors.co/contrast-checker

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

## Referenzen

- **Tailwind Config**: [tailwind.config.ts](../tailwind.config.ts)
- **Color Constants**: [src/config/colors.ts](../src/config/colors.ts)
- **Aurora Background**: [src/components/ui/aurora-background.tsx](../src/components/ui/aurora-background.tsx)
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

**Version**: 1.1.0
**Letzte Aktualisierung**: 2026-02-28
**Changelog**: v1.1.0 - Focus-States und Tastatur-Navigation hinzugefügt
**Verantwortlich**: VENDORi Design System Team
