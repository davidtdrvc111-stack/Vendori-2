import type { Metadata } from 'next';
import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

// Lazy load CookieBanner (includes framer-motion) - not critical for initial render
const CookieBanner = dynamic(
  () => import('@/components/cookie-consent').then(mod => ({ default: mod.CookieBanner })),
  { loading: () => null }
);

// Plus Jakarta Sans - All text (Body, Headers, Display) - DSGVO-konform (lokal gehostet)
const plusJakartaSans = localFont({
  src: [
    {
      path: './fonts/PlusJakartaSans-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true, // Critical font - sofort laden
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vendori.eu'),
  title: {
    default: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis',
    template: '%s | VENDORi GmbH',
  },
  description: 'VENDORi skaliert Ihren E-Commerce mit D2C-Strategien, Marketplace-Know-how und 22+ Jahren Praxiserfahrung — erprobte Methoden aus eigenen Shops.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'VENDORi GmbH',
    url: 'https://vendori.eu',
    images: [{
      url: '/og-image.webp',
      width: 1200,
      height: 630,
      alt: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis',
      type: 'image/webp'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Critical above-the-fold assets - Logo SVG */}
        <link
          rel="preload"
          href="/Logo_Vendori_rgb_anthrazit.svg"
          as="image"
          type="image/svg+xml"
        />
        {/* Fonts werden via next/font/local optimiert geladen */}
      </head>
      <body className={`${plusJakartaSans.className} ${plusJakartaSans.variable}`}>
        {/* Skip Link für Tastaturnavigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-neutral-900 focus:rounded-lg focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        {/* JsonLd per-Seite eingebunden (nicht global, da noindex-Seiten kein Schema haben sollen) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
