'use client';

import { cn } from '@/lib/utils';
import { ServicesSectionProps } from './types';
import { Store, Check, ArrowRight, Users, Compass } from 'lucide-react';

// Noise Overlay Component
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none rounded-3xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// Main Services Section Component
export function ServicesSection({ className = '' }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-gradient-to-b from-zinc-900 to-white dark:from-zinc-900 dark:to-neutral-900',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold',
            'text-white dark:text-white', // Top of section is dark, use white
            'mb-4',
            'font-[family-name:var(--font-space-grotesk)]'
          )}>
            E-Commerce-Wachstum ohne Agentur-Experimente.
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 dark:text-neutral-200">
            Statt auf Annahmen setzen wir auf Fakten: die praxiserprobten Hebel aus unseren eigenen, erfolgreichen E-Commerce-Marken.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className={cn(
          'grid gap-4 md:gap-6',
          // Mobile: Stack vertically
          'grid-cols-1',
          // Tablet/Desktop: 2 columns with asymmetric layout
          'md:grid-cols-2 md:grid-rows-2',
          'max-w-7xl mx-auto'
        )}>
          {/* Card 1 - Akzent-Karte (Large, left, spans 2 rows) */}
          <div className={cn(
            'relative',
            'md:row-span-2',
            'bg-stone-800',
            'shadow-inner-glow-primary',
            'rounded-3xl',
            'p-8',
            'min-h-[300px] md:min-h-[600px]',
            'transition-shadow duration-300',
            'hover:shadow-inner-glow-primary-hover',
            'overflow-hidden',
            'flex flex-col'
          )}>
            <NoiseOverlay />

            {/* Icon */}
            <div className="mb-6 md:mb-8">
              <div className={cn(
                'w-12 h-12 md:w-16 md:h-16',
                'rounded-2xl',
                'bg-primary-600/10',
                'flex items-center justify-center',
                'ring-1 ring-primary-600/20'
              )}>
                <Store className="w-6 h-6 md:w-8 md:h-8 text-primary-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Überschrift */}
            <h3 className={cn(
              'text-2xl md:text-3xl lg:text-4xl font-bold',
              'text-white',
              'mb-7 md:mb-10',
              'font-[family-name:var(--font-space-grotesk)]'
            )}>
              Umsatz statt grauer Theorie
            </h3>

            {/* Beschreibungstext */}
            <p className={cn(
              'text-base md:text-lg',
              'text-neutral-300',
              'mb-8 md:mb-12',
              'leading-relaxed'
            )}>
              Keine Experimente mit Ihrem Budget. Sie profitieren von den Hebeln, die sich in unseren eigenen D2C-Marken bereits bewährt haben.
            </p>

            {/* Key Features / Bullet Points */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-primary-400" strokeWidth={2.5} />
                </div>
                <span className="text-base md:text-lg text-white font-medium">
                  Praxiserprobte D2C-Strategien
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-primary-400" strokeWidth={2.5} />
                </div>
                <span className="text-base md:text-lg text-white font-medium">
                  Marktplatz-Know-how (Amazon & Co.)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-primary-400" strokeWidth={2.5} />
                </div>
                <span className="text-base md:text-lg text-white font-medium">
                  Live-optimierte Prozesse
                </span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-auto">
              <a
                href="#contact"
                className={cn(
                  'flex items-center justify-center gap-2',
                  'w-full px-6 py-3 md:py-4',
                  'ring-1 ring-primary-400/50',
                  'hover:ring-primary-400 hover:bg-primary-600/10',
                  'text-primary-400 hover:text-primary-300',
                  'font-medium',
                  'rounded-xl',
                  'transition-all duration-200',
                  'text-base md:text-lg',
                  'group'
                )}
              >
                <span>Unsere Methode entdecken</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2 - Standard-Karte (Small, right top) */}
          <div className={cn(
            'relative',
            'bg-stone-800',
            'shadow-inner-glow',
            'rounded-3xl',
            'p-6',
            'min-h-[250px] md:min-h-[290px]',
            'transition-shadow duration-300',
            'hover:shadow-inner-glow-hover',
            'overflow-hidden',
            'flex flex-col'
          )}>
            <NoiseOverlay />

            {/* Icon */}
            <div className="mb-4 md:mb-6">
              <div className={cn(
                'w-10 h-10 md:w-12 md:h-12',
                'rounded-xl',
                'bg-primary-600/10',
                'flex items-center justify-center',
                'ring-1 ring-primary-600/20'
              )}>
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Überschrift */}
            <h3 className={cn(
              'text-xl md:text-2xl font-bold',
              'text-white',
              'mb-3 md:mb-4',
              'font-[family-name:var(--font-space-grotesk)]'
            )}>
              Mehr als nur Berater
            </h3>

            {/* Beschreibungstext */}
            <p className={cn(
              'text-sm md:text-base',
              'text-neutral-300',
              'leading-relaxed',
              'mb-6 md:mb-8'
            )}>
              Sie haben das Produkt, wir das praxiserprobte E-Com-Team. So überholen Sie die Konkurrenz, ohne Zeit für Recruiting oder Theorie-Agenturen zu verschwenden.
            </p>

            {/* CTA Link */}
            <div className="mt-auto">
              <a
                href="#contact"
                className={cn(
                  'inline-flex items-center gap-2',
                  'text-primary-400 hover:text-primary-300',
                  'font-medium',
                  'transition-colors duration-200',
                  'text-sm md:text-base',
                  'group'
                )}
              >
                <span>So funktioniert's</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 3 - Standard-Karte (Small, right bottom) */}
          <div className={cn(
            'relative',
            'bg-stone-800',
            'shadow-inner-glow',
            'rounded-3xl',
            'p-6',
            'min-h-[250px] md:min-h-[290px]',
            'transition-shadow duration-300',
            'hover:shadow-inner-glow-hover',
            'overflow-hidden',
            'flex flex-col'
          )}>
            <NoiseOverlay />

            {/* Icon */}
            <div className="mb-4 md:mb-6">
              <div className={cn(
                'w-10 h-10 md:w-12 md:h-12',
                'rounded-xl',
                'bg-primary-600/10',
                'flex items-center justify-center',
                'ring-1 ring-primary-600/20'
              )}>
                <Compass className="w-5 h-5 md:w-6 md:h-6 text-primary-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Überschrift */}
            <h3 className={cn(
              'text-xl md:text-2xl font-bold',
              'text-white',
              'mb-3 md:mb-4',
              'font-[family-name:var(--font-space-grotesk)]'
            )}>
              Neue Märkte ohne Kopfschmerz.
            </h3>

            {/* Beschreibungstext */}
            <p className={cn(
              'text-sm md:text-base',
              'text-neutral-300',
              'leading-relaxed',
              'mb-6 md:mb-8'
            )}>
              Wir kennen die Abkürzungen durch den Logistik- und Rechts-Dschungel. Rollen Sie Ihre Marke international aus, während wir die Komplexität im Hintergrund lautlos lösen.
            </p>

            {/* CTA Link */}
            <div className="mt-auto">
              <a
                href="#contact"
                className={cn(
                  'inline-flex items-center gap-2',
                  'text-primary-400 hover:text-primary-300',
                  'font-medium',
                  'transition-colors duration-200',
                  'text-sm md:text-base',
                  'group'
                )}
              >
                <span>Expansions-Check starten</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
