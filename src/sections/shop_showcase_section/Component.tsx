'use client';

import { cn } from '@/lib/utils';
import { ShopShowcaseSectionProps, Shop } from './types';
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
    logo: '/mytoolstore.svg',
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
      {
        domain: 'mytoolstore.at',
        domainExtension: '.at',
        url: 'https://www.mytoolstore.at',
        flag: '🇦🇹',
      },
      {
        domain: 'mytoolstore.be',
        domainExtension: '.be',
        url: 'https://www.mytoolstore.be',
        flag: '🇧🇪',
      },
    ],
    metrics: ['1,5 Mio.+', 'Erfolgreiche Bestellungen'],
    isOwnBrand: false,
    spanColumns: 2, // Nimmt 2 Spalten auf Desktop ein
  },
  {
    id: 'showernizr',
    name: 'ShowerNIZR',
    logo: '/showernizr.svg',
    logoAlt: 'ShowerNIZR Eigenmarke',
    markets: [
      {
        domain: 'showernizr.com',
        domainExtension: '.com',
        url: 'https://www.showernizr.com',
      },
    ],
    metrics: ['Eigenmarke'],
    isOwnBrand: true,
    spanColumns: 2, // Nimmt 2 Spalten auf Desktop ein
  },
];

// Shop Card Component - Überarbeitetes Layout mit klarer Struktur
function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div
      className={cn(
        'group',
        'relative',
        // Bento Grid Style - Stone-800 (braun-gräulich wie Services Section)
        'bg-stone-800',
        'rounded-3xl',
        'p-4 md:p-5 lg:p-6',
        // Flexbox für Layout-Struktur
        'flex flex-col items-center',
        // Feste Höhe für beide Karten (20% kleiner als Original)
        'h-[324px] md:h-[365px] lg:h-[405px]',
        'transition-all duration-500 ease-out',
        'hover:shadow-2xl hover:shadow-primary-600/20',
        'overflow-hidden',
        // Subtiler Border für beide Karten, Orange nur auf Hover
        'border-2 border-white/10',
        'hover:border-primary-500',
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

      {/* Logo - Oben mit Trennlinie */}
      <div className="relative z-10 flex-shrink-0 flex flex-col items-center gap-4 md:gap-5 lg:gap-6 w-full -mt-4 md:-mt-5 lg:-mt-6">
        <div
          className={cn(
            'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40',
            'rounded-2xl',
            'bg-transparent',
            'p-1 md:p-1 lg:p-2',
            'flex items-center justify-center',
            'transition-all duration-500',
            'group-hover:scale-105'
          )}
        >
          <Image
            src={shop.logo}
            alt={shop.logoAlt}
            width={160}
            height={160}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        {/* Horizontale Trennlinie */}
        <div className="w-full h-0.5 bg-primary-500 -mt-9" />
      </div>

      {/* Hauptmetrik - Mitte (nimmt den meisten Platz ein) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-2">
        {/* Highlight-Text */}
        <h3
          className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-bold text-center',
            'text-white',
            'font-sans',
            'transition-all duration-300',
            'group-hover:text-primary-400',
            'leading-tight'
          )}
        >
          {shop.metrics[0]}
        </h3>
        {/* Beschreibung (falls vorhanden) */}
        {shop.metrics[1] && (
          <p
            className={cn(
              'text-base md:text-lg lg:text-xl font-normal text-center',
              'text-neutral-300',
              'font-sans',
              'transition-all duration-300',
              'group-hover:text-neutral-200'
            )}
          >
            {shop.metrics[1]}
          </p>
        )}
      </div>

      {/* Länder-Badges - Unten */}
      <div className="relative z-10 flex-shrink-0 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {shop.markets.map((market) => (
            <a
              key={market.domain}
              href={market.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5',
                'px-4 py-2',
                'bg-white/10 hover:bg-primary-500',
                'border border-white/20 hover:border-primary-500',
                'rounded-full',
                'text-sm font-semibold',
                'text-neutral-200 hover:text-white',
                'transition-all duration-300',
                'hover:scale-110',
                'cursor-pointer',
                'hover:shadow-lg hover:shadow-primary-500/30'
              )}
            >
              {market.flag && <span className="text-sm">{market.flag}</span>}
              <span>{market.domainExtension}</span>
            </a>
          ))}
        </div>
      </div>
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
              'font-display',
              'leading-tight tracking-tight'
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
