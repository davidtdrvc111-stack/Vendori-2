/**
 * VENDORi Color Palette
 *
 * Zentrale Farbdefinition für die gesamte Website.
 * Diese Farben sind synchron mit der Tailwind Config (tailwind.config.ts).
 *
 * @see tailwind.config.ts - Tailwind color definitions
 * @see docs/COLORS.md - Farbpaletten-Dokumentation mit Verwendungsrichtlinien
 */

/**
 * Primary Purple - Haupt-Akzentfarbe
 * Verwendung: CTAs, Buttons, Links, interaktive Elemente
 */
export const primary = {
  50: '#faf5ff',   // Sehr helles Purple (Backgrounds, Hover)
  100: '#f3e8ff',  // Helles Purple
  200: '#e9d5ff',  // Light Purple
  300: '#d8b4fe',  // Medium-Light Purple
  400: '#c084fc',  // Medium Purple (Dark Mode Links, Hovers)
  500: '#a855f7',  // Base Purple (Text Accents)
  600: '#9333ea',  // Primary Purple (CTAs, Buttons) ⭐ HAUPTFARBE
  700: '#7e22ce',  // Dark Purple (Hover States)
  800: '#6b21a8',  // Darker Purple
  900: '#581c87',  // Very Dark Purple
  950: '#3b0764',  // Darkest Purple (Backgrounds mit Opacity)
} as const;

/**
 * Neutral Slate/Gray - Text & Backgrounds
 * Verwendung: Texte, Borders, Hintergründe, neutrale UI-Elemente
 */
export const neutral = {
  50: '#f8fafc',   // Fast White (Backgrounds)
  100: '#f1f5f9',  // Sehr helles Gray
  200: '#e2e8f0',  // Helles Gray (Borders)
  300: '#cbd5e1',  // Light Gray
  400: '#94a3b8',  // Medium-Light Gray (Placeholder Text)
  500: '#64748b',  // Medium Gray (Secondary Text)
  600: '#475569',  // Dark Gray (Body Text)
  700: '#334155',  // Darker Gray (Headings)
  800: '#1e293b',  // Very Dark Gray (Header Dark Mode)
  900: '#0f172a',  // Almost Black (Primary Text)
  950: '#020617',  // True Black Alternative
} as const;

/**
 * Aurora Gradient Colors - Dekorative Hintergründe
 * Verwendung: Aurora-Background Animation, Gradient-Overlays, dekorative Elemente
 */
export const aurora = {
  blue: {
    light: '#93c5fd',   // blue-300
    medium: '#60a5fa',  // blue-400
    base: '#3b82f6',    // blue-500
  },
  indigo: {
    light: '#a5b4fc',   // indigo-300
  },
  violet: {
    light: '#ddd6fe',   // violet-200
  },
} as const;

/**
 * Surface Colors - Backgrounds & Cards
 * Verwendung: Seiten-Hintergründe, Cards, Modals, Header
 */
export const surface = {
  light: {
    base: '#ffffff',     // Pure white
    subtle: '#fafafa',   // zinc-50 (Aurora Background)
    elevated: '#f8fafc', // neutral-50 (Cards, Modals)
  },
  dark: {
    base: '#09090b',     // zinc-900 (Aurora Background Dark)
    elevated: '#1e293b', // neutral-800 (Cards, Modals Dark)
  },
} as const;

/**
 * Success Colors - Erfolgs-Feedback
 * Verwendung: Success-Meldungen, positive Aktionen, Bestätigungen
 */
export const success = {
  50: '#f0fdf4',
  500: '#22c55e',  // Base Green
  600: '#16a34a',  // Dark Green
  700: '#15803d',  // Darker Green (Hover)
} as const;

/**
 * Error Colors - Fehler-Feedback
 * Verwendung: Error-Meldungen, Fehlervalidierung, kritische Aktionen
 */
export const error = {
  50: '#fef2f2',
  500: '#ef4444',  // Base Red
  600: '#dc2626',  // Dark Red
  700: '#b91c1c',  // Darker Red (Hover)
} as const;

/**
 * Warning Colors - Warn-Feedback
 * Verwendung: Warning-Meldungen, Hinweise, Vorsichtsmaßnahmen
 */
export const warning = {
  50: '#fffbeb',
  500: '#f59e0b',  // Base Amber
  600: '#d97706',  // Dark Amber
  700: '#b45309',  // Darker Amber (Hover)
} as const;

/**
 * Info Colors - Info-Feedback
 * Verwendung: Info-Meldungen, Tooltips, Hilfetexte
 */
export const info = {
  50: '#eff6ff',
  500: '#3b82f6',  // Base Blue
  600: '#2563eb',  // Dark Blue
  700: '#1d4ed8',  // Darker Blue (Hover)
} as const;

/**
 * Vollständige Color Palette
 * Export aller Farben als einzelnes Objekt
 */
export const colors = {
  primary,
  neutral,
  aurora,
  surface,
  success,
  error,
  warning,
  info,
} as const;

/**
 * Type-Safe Color Access
 * Beispiel: colors.primary[600] → '#9333ea'
 */
export type ColorPalette = typeof colors;
export type PrimaryShade = keyof typeof primary;
export type NeutralShade = keyof typeof neutral;

/**
 * Häufig verwendete Farbkombinationen
 */
export const colorUsage = {
  cta: {
    primary: {
      bg: primary[600],
      hover: primary[700],
      text: '#ffffff',
    },
    secondary: {
      bg: 'transparent',
      border: primary[500],
      text: primary[600],
      hover: primary[50],
    },
  },
  text: {
    heading: {
      light: neutral[900],
      dark: '#ffffff',
    },
    body: {
      light: neutral[600],
      dark: neutral[200],
    },
    secondary: {
      light: neutral[500],
      dark: neutral[300],
    },
  },
  background: {
    page: {
      light: surface.light.base,
      dark: surface.dark.base,
    },
    card: {
      light: surface.light.elevated,
      dark: surface.dark.elevated,
    },
  },
} as const;

export default colors;
