import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { CookieBanner } from '@/components/cookie-consent';
import { ThemeProvider } from '@/components/theme-provider';

// Geist Mono - Headlines (h1, h2) - DSGVO-konform (lokal gehostet)
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
});

// Plus Jakarta Sans - Body & Sub-Headers - DSGVO-konform (lokal gehostet)
const plusJakartaSans = localFont({
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vendori.eu'),
  title: {
    default: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis',
    template: '%s | VENDORi GmbH',
  },
  description: 'VENDORi skaliert Ihren E-Commerce mit D2C-Strategien, Marketplace-Know-how und 22+ Jahren Erfahrung — kein Experiment, sondern echte Ergebnisse.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'VENDORi GmbH',
    url: '/',
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
        {/* Preload kritische Font-Dateien für bessere Performance */}
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${plusJakartaSans.className} ${plusJakartaSans.variable} ${geistMono.variable}`}>
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
