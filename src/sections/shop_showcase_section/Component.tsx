'use client';

import { cn } from '@/lib/utils';
import { ShopShowcaseSectionProps, Shop } from './types';
import Image from 'next/image';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';

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

// Shop Card Component - Split Header Layout
function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div
      className={cn(
        'group',
        'relative',
        'bg-stone-800',
        'rounded-3xl',
        'overflow-hidden',
        'flex flex-col',
        'h-[320px] md:h-[360px] lg:h-[400px]',
        'transition-all duration-500 ease-out',
        'hover:shadow-2xl hover:shadow-primary-600/20',
        'border-2 border-white/10',
        'hover:border-primary-500',
        'hover:-translate-y-2',
        shop.spanColumns === 2 && 'lg:col-span-2',
        shop.spanColumns === 3 && 'lg:col-span-3'
      )}
    >
      <NoiseOverlay opacity="opacity-[0.02]" />

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

      {/* Logo-Header Bereich */}
      <div
        className={cn(
          'relative z-10',
          'bg-stone-700',
          'h-[35%]',
          'flex items-center justify-center',
          'px-6'
        )}
      >
        <div
          className={cn(
            'w-36 h-24 md:w-40 md:h-28 lg:w-48 lg:h-32',
            'flex items-center justify-center',
            'transition-all duration-500',
            'group-hover:scale-105'
          )}
        >
          <Image
            src={shop.logo}
            alt={shop.logoAlt}
            width={192}
            height={128}
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Trennlinie */}
      <div className="relative z-10 h-0.5 bg-primary-500 w-full flex-shrink-0" />

      {/* Content-Bereich */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between p-6 md:p-7 lg:p-8 gap-4">
        {/* Hauptmetrik */}
        <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
          <h3
            className={cn(
              'text-2xl md:text-3xl lg:text-4xl font-bold text-center',
              'text-white',
              'font-sans',
              'transition-all duration-300',
              'group-hover:text-primary-400',
              'leading-tight'
            )}
          >
            {shop.metrics[0]}
          </h3>
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

        {/* Länder-Badges */}
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
