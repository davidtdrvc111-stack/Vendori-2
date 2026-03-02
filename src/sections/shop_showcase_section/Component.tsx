'use client';

import { cn } from '@/lib/utils';
import { ShopShowcaseSectionProps, Shop } from './types';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Noise Overlay Component für subtile Textur
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none rounded-3xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// Shop Data - Konsolidiert und optimiert
const SHOPS: Shop[] = [
  {
    id: 'mytoolstore',
    name: 'myToolStore',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore Multi-Market E-Commerce',
    markets: [
      {
        domain: 'mytoolstore.de',
        domainExtension: '.de',
        url: 'https://www.mytoolstore.de',
        flag: '🇩🇪',
      },
      {
        domain: 'mytoolstore.fr',
        domainExtension: '.fr',
        url: 'https://www.mytoolstore.fr',
        flag: '🇫🇷',
      },
      {
        domain: 'mytoolstore.nl',
        domainExtension: '.nl',
        url: 'https://www.mytoolstore.nl',
        flag: '🇳🇱',
      },
    ],
    metrics: ['1.000.000+ Bestellungen', '3 Märkte aktiv'],
    isOwnBrand: false,
    spanColumns: 2, // Nimmt 2 Spalten auf Desktop ein
  },
  {
    id: 'showernizr',
    name: 'ShowerNIZR',
    logo: '/images/shops/showernizr-logo.png',
    logoAlt: 'ShowerNIZR Eigenmarke',
    markets: [
      {
        domain: 'showernizr.com',
        domainExtension: '.com',
        url: 'https://www.showernizr.com',
      },
    ],
    metrics: ['Eigenmarke', 'Neu auf dem Markt'],
    isOwnBrand: true,
    spanColumns: 2, // Nimmt 2 Spalten auf Desktop ein
  },
];

// Shop Card Component - Optimiert mit subtilen Akzenten
function ShopCard({ shop }: { shop: Shop }) {
  // Primary market für den Haupt-Link (erster Markt im Array)
  const primaryMarket = shop.markets[0];

  return (
    <div
      className={cn(
        'group',
        'relative',
        // Bento Grid Style - Stone-800 (braun-gräulich wie Services Section)
        'bg-stone-800',
        'rounded-3xl',
        'p-6 md:p-8 lg:p-10',
        'flex flex-col items-center justify-center',
        // Reduzierte Höhe für kompaktere Proportionen
        'min-h-[280px] md:min-h-[320px]',
        'transition-all duration-500 ease-out',
        'hover:shadow-2xl hover:shadow-primary-600/20',
        'overflow-hidden',
        // Primary Purple Border für myToolStore (Haupt-Shop)
        !shop.isOwnBrand && 'border-2 border-primary-500',
        !shop.isOwnBrand && 'hover:border-primary-400',
        // Subtiler Border für ShowerNIZR (Eigenmarke)
        shop.isOwnBrand && 'border border-white/10',
        shop.isOwnBrand && 'hover:border-primary-500/50',
        // Hover Lift
        'hover:-translate-y-2',
        // Grid-Span Support (statische Klassen für Tailwind)
        shop.spanColumns === 2 && 'lg:col-span-2',
        shop.spanColumns === 3 && 'lg:col-span-3'
      )}
    >
      <NoiseOverlay />

      {/* Gradient-Lichteffekt beim Hover */}
      <div
        className={cn(
          'absolute inset-0 z-0',
          'bg-gradient-to-br from-primary-600/0 via-primary-500/5 to-primary-600/0',
          'opacity-0',
          'group-hover:opacity-100',
          'transition-opacity duration-700',
          'pointer-events-none'
        )}
      />

      {/* Logo Container - MIT subtiler Hintergrund für Sichtbarkeit */}
      <div className="relative z-10 mb-5 md:mb-6">
        <div
          className={cn(
            'w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44',
            'rounded-2xl',
            // Subtiler weißer Hintergrund für Logo-Kontrast
            'bg-white/95',
            'p-4 md:p-5',
            'flex items-center justify-center',
            'transition-all duration-500',
            'group-hover:scale-105',
            'group-hover:bg-white',
            // Subtiler Shadow für Depth
            'shadow-lg shadow-black/10'
          )}
        >
          <Image
            src={shop.logo}
            alt={shop.logoAlt}
            width={176}
            height={176}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Markets - Zeigt alle Domains */}
      <div className="relative z-10 mb-4 md:mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {shop.markets.map((market) => (
            <a
              key={market.domain}
              href={market.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5',
                'px-3 py-1.5 md:px-4 md:py-2',
                'bg-white/5 hover:bg-white/10',
                'border border-white/10 hover:border-primary-400/50',
                'rounded-full',
                'text-sm md:text-base font-medium',
                'text-neutral-300 hover:text-primary-400',
                'transition-all duration-300',
                'hover:scale-105'
              )}
            >
              {market.flag && <span className="text-base md:text-lg">{market.flag}</span>}
              <span>{market.domainExtension}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Key Metrics - Zeigt alle Metriken */}
      <div className="relative z-10 mb-4 flex flex-col gap-2 md:gap-3">
        {shop.metrics.map((metric, index) => (
          <h3
            key={index}
            className={cn(
              'text-xl md:text-2xl lg:text-3xl font-bold text-center',
              'text-white',
              'font-[family-name:var(--font-space-grotesk)]',
              'transition-all duration-300',
              'group-hover:text-primary-400',
              // Erster Metric ist größer
              index === 0 && 'text-2xl md:text-3xl lg:text-4xl'
            )}
          >
            {metric}
          </h3>
        ))}
      </div>

      {/* Shop besuchen - Immer sichtbar */}
      <a
        href={primaryMarket.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'relative z-10',
          'inline-flex items-center gap-2',
          'px-4 py-2',
          'text-sm font-medium',
          'text-primary-400 hover:text-primary-300',
          'transition-all duration-300',
          'hover:scale-105'
        )}
      >
        <span>Shop besuchen</span>
        <ExternalLink className="w-4 h-4" strokeWidth={2} />
      </a>

      {/* Eigenmarke Badge - Immer sichtbar */}
      {shop.isOwnBrand && (
        <div
          className={cn(
            'absolute top-4 right-4 z-20',
            'px-3 py-1.5',
            'bg-primary-600/20 backdrop-blur-sm',
            'border border-primary-600/30',
            'rounded-full',
            'text-xs font-semibold',
            'text-primary-400',
            'transition-all duration-300',
            'group-hover:bg-primary-600/30',
            'group-hover:border-primary-500/50'
          )}
        >
          Eigenmarke
        </div>
      )}
    </div>
  );
}

// Main Shop Showcase Section Component
export function ShopShowcaseSection({ className = '' }: ShopShowcaseSectionProps) {
  return (
    <section
      id="shops"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-gradient-to-b from-stone-100 to-stone-300 dark:from-neutral-900 dark:to-neutral-800',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
              'text-neutral-900 dark:text-white',
              'mb-4 md:mb-6',
              'font-[family-name:var(--font-space-grotesk)]',
              'leading-tight'
            )}
          >
            Unsere Shops. Unser Beweis.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-200 leading-relaxed">
            Wir reden nicht über Erfolg, wir zeigen ihn. Diese Marken betreiben und skalieren wir
            täglich selbst.
          </p>
        </div>

        {/* Shop Cards Grid - Responsive */}
        <div
          className={cn(
            'grid gap-6 md:gap-8 lg:gap-10',
            'grid-cols-1',          // Mobile: 1 Spalte
            'md:grid-cols-2',       // Tablet: 2 Spalten
            'lg:grid-cols-4',       // Desktop: 4 Spalten
            'max-w-7xl mx-auto'
          )}
        >
          {SHOPS.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </section>
  );
}
