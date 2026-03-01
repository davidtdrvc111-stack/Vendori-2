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

// Shop Data - Die 4 Shops von VENDORi
const SHOPS: Shop[] = [
  {
    id: 'mytoolstore-de',
    name: 'myToolStore',
    domain: 'mytoolstore.de',
    domainExtension: '.de',
    url: 'https://www.mytoolstore.de',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore Deutschland Logo',
    metric: '50.000+ Orders',
    isOwnBrand: false,
  },
  {
    id: 'mytoolstore-fr',
    name: 'myToolStore',
    domain: 'mytoolstore.fr',
    domainExtension: '.fr',
    url: 'https://www.mytoolstore.fr',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore France Logo',
    metric: '3 Länder aktiv',
    isOwnBrand: false,
  },
  {
    id: 'mytoolstore-nl',
    name: 'myToolStore',
    domain: 'mytoolstore.nl',
    domainExtension: '.nl',
    url: 'https://www.mytoolstore.nl',
    logo: '/images/shops/mytoolstore-logo.png',
    logoAlt: 'myToolStore Nederland Logo',
    metric: 'Premium Sortiment',
    isOwnBrand: false,
  },
  {
    id: 'showernizr-com',
    name: 'ShowerNIZR',
    domain: 'showernizr.com',
    domainExtension: '.com',
    url: 'https://www.showernizr.com',
    logo: '/images/shops/showernizr-logo.png',
    logoAlt: 'ShowerNIZR Eigenmarke Logo',
    metric: 'Eigenmarke seit 2020',
    isOwnBrand: true,
  },
];

// Shop Card Component - Minimalistisch und selbstbewusst
function ShopCard({ shop }: { shop: Shop }) {
  return (
    <a
      href={shop.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group',
        'relative',
        'bg-stone-800',
        'rounded-3xl',
        'p-8 md:p-10 lg:p-12',
        'flex flex-col items-center justify-center',
        'min-h-[320px] md:min-h-[380px]',
        'transition-all duration-500 ease-out',
        'hover:scale-[1.02]',
        'hover:shadow-2xl hover:shadow-primary-600/10',
        'overflow-hidden',
        // Subtiler Ring-Effekt
        'ring-1 ring-white/5',
        'hover:ring-white/10'
      )}
    >
      <NoiseOverlay />

      {/* Logo Container */}
      <div className="relative z-10 mb-6 md:mb-8">
        <div
          className={cn(
            'w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36',
            'rounded-2xl',
            'bg-white',
            'p-4 md:p-5',
            'flex items-center justify-center',
            'transition-all duration-500',
            'group-hover:scale-105',
            // Subtiler Shadow für Depth
            'shadow-lg shadow-black/5'
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
      </div>

      {/* Domain Extension */}
      <div className="relative z-10 mb-3 md:mb-4">
        <p
          className={cn(
            'text-base md:text-lg font-medium',
            'text-neutral-400',
            'transition-colors duration-300',
            'group-hover:text-neutral-300'
          )}
        >
          {shop.domainExtension}
        </p>
      </div>

      {/* Key Metric - Hauptfokus */}
      <div className="relative z-10 mb-6">
        <h3
          className={cn(
            'text-2xl md:text-3xl lg:text-4xl font-bold text-center',
            'text-white',
            'font-[family-name:var(--font-space-grotesk)]',
            'transition-all duration-300',
            'group-hover:text-primary-400'
          )}
        >
          {shop.metric}
        </h3>
      </div>

      {/* Hover: External Link Icon */}
      <div
        className={cn(
          'relative z-10',
          'inline-flex items-center gap-2',
          'text-sm font-medium',
          'text-primary-400',
          'opacity-0 translate-y-2',
          'group-hover:opacity-100 group-hover:translate-y-0',
          'transition-all duration-300'
        )}
      >
        <span>Zum Shop</span>
        <ExternalLink className="w-4 h-4" strokeWidth={2} />
      </div>

      {/* Optional: Eigenmarke Badge */}
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
            'opacity-0',
            'group-hover:opacity-100',
            'transition-opacity duration-300'
          )}
        >
          Eigenmarke
        </div>
      )}
    </a>
  );
}

// Main Shop Showcase Section Component
export function ShopShowcaseSection({ className = '' }: ShopShowcaseSectionProps) {
  return (
    <section
      id="shops"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-white dark:bg-neutral-900',
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
