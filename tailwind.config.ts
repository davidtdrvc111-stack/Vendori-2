import type { Config } from 'tailwindcss'

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VENDORi brand colors - Purple as primary accent color
        primary: {
          50: '#faf5ff',   // Sehr helles Purple (Backgrounds, Hover)
          100: '#f3e8ff',  // Helles Purple
          200: '#e9d5ff',  // Light Purple
          300: '#d8b4fe',  // Medium-Light Purple
          400: '#c084fc',  // Medium Purple (Dark Mode Links, Hovers)
          500: '#a855f7',  // Base Purple (Text Accents)
          600: '#9333ea',  // Primary Purple (CTAs, Buttons) - HAUPTFARBE
          700: '#7e22ce',  // Dark Purple (Hover States)
          800: '#6b21a8',  // Darker Purple
          900: '#581c87',  // Very Dark Purple
          950: '#3b0764',  // Darkest Purple (Backgrounds mit Opacity)
        },
        // Neutral grays for text, backgrounds, borders
        neutral: {
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
        },
        // Aurora gradient colors for animated backgrounds
        aurora: {
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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
        aurora: "aurora 90s linear infinite",
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
        'inner-glow-primary': 'inset 0 0 0 2px rgba(147, 51, 234, 0.6)',
        'inner-glow-primary-hover': 'inset 0 0 0 2px rgba(168, 85, 247, 0.8)',
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
