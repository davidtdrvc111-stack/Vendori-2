import type { Config } from 'tailwindcss'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VENDORi brand colors - Bronze as primary accent color (Titanium Edge)
        primary: {
          50: '#fef9f3',   // Lightest cream, subtle warmth
          100: '#fef3e7',  // Light bronze tint
          200: '#fce5ca',  // Soft bronze
          300: '#f8d1a8',  // Light bronze
          400: '#f2b279',  // Medium bronze (Dark Mode Links, Hovers)
          500: '#e89043',  // Base bronze (Text Accents, Highlights)
          600: '#d47020',  // Primary Bronze (CTAs, Buttons) - HAUPTFARBE
          700: '#b25a18',  // Dark Bronze (Hover States)
          800: '#8f4816',  // Darker bronze
          900: '#763c15',  // Very dark bronze
          950: '#431f0a',  // Darkest bronze (Backgrounds mit Opacity)
        },
        // Neutral grays for text, backgrounds, borders (Titanium Grays)
        neutral: {
          50: '#f9fafb',   // Near white, subtle blue tint
          100: '#f3f4f6',  // Very light gray
          200: '#e5e7eb',  // Light gray (Borders)
          300: '#d1d5db',  // Medium-light gray (Secondary Text Dark Mode)
          400: '#9ca3af',  // Placeholder text
          500: '#6b7280',  // Secondary text
          600: '#4b5563',  // Body text (Light Mode)
          700: '#374151',  // Headings, dark borders
          800: '#1f2937',  // Header dark mode
          900: '#111827',  // Primary text (Light Mode)
          950: '#030712',  // True black
        },
        // Aurora gradient colors for animated backgrounds (Industrial palette)
        aurora: {
          'steel-blue': '#64748b',   // Cool metallic
          'warm-bronze': '#e89043',  // Warm glow
          'deep-slate': '#334155',   // Depth
          'copper-glow': '#f2b279',  // Highlight
          'charcoal': '#1f2937',     // Shadow
        },
        // Surface colors for backgrounds and cards
        surface: {
          light: {
            base: '#ffffff',     // Pure white
            subtle: '#fafafa',   // zinc-50
            elevated: '#f8fafc', // neutral-50
          },
          dark: {
            base: '#09090b',     // zinc-900
            elevated: '#1e293b', // neutral-800
          },
        },
        // Functional colors for feedback and states
        success: {
          50: '#f0fdf4',
          500: '#22c55e',  // Base Green
          600: '#16a34a',  // Dark Green
          700: '#15803d',  // Darker Green (Hover)
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',  // Base Red
          600: '#dc2626',  // Dark Red
          700: '#b91c1c',  // Darker Red (Hover)
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',  // Base Amber
          600: '#d97706',  // Dark Amber
          700: '#b45309',  // Darker Amber (Hover)
        },
        info: {
          50: '#eff6ff',
          500: '#3b82f6',  // Base Blue
          600: '#2563eb',  // Dark Blue
          700: '#1d4ed8',  // Darker Blue (Hover)
        },
      },
      fontFamily: {
        // All text uses Plus Jakarta Sans for consistency and performance
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        // Monospace utility (code, technical content) - System fallback
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        aurora: "aurora 80s linear infinite",
        marquee: "marquee 40s linear infinite",
        'marquee-fast': "marquee 20s linear infinite", // 50% schneller für Mobile
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // -50%, weil wir 2 identische Sets haben
        },
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'inner-glow-hover': 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)',
        'inner-glow-primary': 'inset 0 0 0 2px rgba(212, 112, 32, 0.6)',        // Bronze #d47020
        'inner-glow-primary-hover': 'inset 0 0 0 2px rgba(232, 144, 67, 0.8)', // Bronze #e89043
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config
