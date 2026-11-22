import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';
import '@/styles/prototype.css';
import '@/styles/site.css';
import { IconSprite } from '@/components/site/IconSprite';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

// Cookie-Banner und Analytics erst im Browser laden (Analytics nur nach Einwilligung)
const CookieBanner = dynamic(() => import('@/components/cookie-consent').then((m) => ({ default: m.CookieBanner })), {
  loading: () => null,
});
const AnalyticsScripts = dynamic(
  () => import('@/components/analytics').then((m) => ({ default: m.AnalyticsScripts })),
  { loading: () => null }
);

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAFAF7',
};

const TITLE = 'VENDORi GmbH | E-Commerce-Partner für Hersteller und Marken';
const DESCRIPTION =
  'VENDORi betreibt eigene Onlineshops, entwickelt Eigenmarken und unterstützt Hersteller und Marken beim digitalen Vertrieb.';

export const metadata: Metadata = {
  metadataBase: new URL('https://vendori.eu'),
  title: { default: TITLE, template: '%s | VENDORi GmbH' },
  description: DESCRIPTION,
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'VENDORi GmbH',
    url: 'https://vendori.eu',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: TITLE, type: 'image/webp' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.webp'] },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Dynamisches Rendering erzwingen: nur dann kann Next.js die CSP-Nonce aus src/middleware.ts
  // an seine Skripte hängen (statisch vorgerenderte Seiten hätten keine Nonce und würden blockiert).
  await headers();
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <head>
        {/* Inter (selbst gehostet, OFL): lateinischer Grundzeichensatz sofort laden */}
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <IconSprite />
        <a className="skip-link" href="#main-content">
          Zum Hauptinhalt springen
        </a>
        <AnalyticsScripts />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
