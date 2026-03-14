'use client';

import { cn } from '@/lib/utils';
import { AboutFullSectionProps } from './types';
import {
  Zap,
  Target,
  Rocket,
  Users,
} from 'lucide-react';

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

// Main About Full Section Component
export function AboutFullSection({ className = '' }: AboutFullSectionProps) {
  return (
    <section
      className={cn(
        'relative py-16 md:py-20 lg:py-24 overflow-hidden',
        'bg-gradient-to-b from-white to-slate-200 dark:from-neutral-900 dark:to-neutral-800',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Two Column Layout */}
        <div className="max-w-6xl mx-auto mb-24 md:mb-28 lg:mb-32">
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-center',
              'text-neutral-900 dark:text-white',
              'mb-8 md:mb-12',
              'font-display font-bold'
            )}
          >
            Aus Sellern wurden Partner.
          </h2>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content (60% / 3 cols) */}
            <div className="md:col-span-3">
              <div className="space-y-4 md:space-y-5 text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>
                  VENDORi ist <span className="text-primary-600 dark:text-primary-400 font-medium">kein Agentur-Konstrukt</span>. Wir starteten als E-Commerce-Seller, bauten eigene D2C-Marken auf und expandierten über Amazon, Shopify und internationale Marktplätze.
                </p>
                <p>
                  Dabei merkten wir: Die meisten Agenturen reden viel, verstehen aber das echte Tagesgeschäft nicht. Sie verkaufen Strategien, die <span className="text-primary-600 dark:text-primary-400 font-medium">in der Praxis scheitern</span>.
                </p>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  Wir machen es anders. Jede Strategie, die wir empfehlen, haben wir bereits in unseren eigenen Shops validiert. Kein Experiment auf Ihre Kosten.
                </p>
                <p>
                  Das ist VENDORi. Kein Beratungsprodukt. Ein Team, das täglich selbst im E-Commerce operiert – und genau deshalb die Hebel kennt, die Ihren Umsatz tatsächlich skalieren. <span className="text-primary-600 dark:text-primary-400 font-medium">Ohne Umwege. Ohne Theorie.</span>
                </p>
              </div>
            </div>

            {/* Right Column - Visual (40% / 2 cols) - Team Photo */}
            <div className="md:col-span-2 flex items-center">
              <div
                className={cn(
                  'relative w-full',
                  'aspect-square md:aspect-[4/5]',
                  'rounded-3xl',
                  'bg-gradient-to-br from-neutral-800 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950',
                  'overflow-hidden',
                  'ring-1 ring-white/5',
                  'flex items-center justify-center'
                )}
              >
                <NoiseOverlay />
                {/* Placeholder for Team Photo */}
                <div className="relative z-10 text-center p-8">
                  <div
                    className={cn(
                      'w-20 h-20 md:w-24 md:h-24 mx-auto mb-4',
                      'rounded-2xl',
                      'bg-primary-600/10',
                      'flex items-center justify-center',
                      'ring-1 ring-primary-600/20'
                    )}
                  >
                    <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm md:text-base text-neutral-400">
                    Platzhalter für Team-Foto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 md:mb-20">
          <h3
            className={cn(
              'text-2xl md:text-3xl lg:text-4xl font-bold text-center',
              'text-neutral-900 dark:text-white',
              'mb-8 md:mb-12',
              'font-display font-bold'
            )}
          >
            Was uns antreibt
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div
              className={cn(
                'group relative',
                'bg-stone-800 dark:bg-stone-800',
                'backdrop-blur-md',
                'rounded-3xl',
                'p-6 md:p-8',
                'min-h-[280px]',
                'overflow-hidden',
                'flex flex-col',
                'border border-white/10',
                'hover:border-primary-500/50',
                'shadow-xl shadow-black/20',
                'transition-all duration-500 ease-out',
                'hover:-translate-y-2'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <NoiseOverlay />

              <div className="mb-4">
                <div
                  className={cn(
                    'w-12 h-12',
                    'rounded-xl',
                    'bg-primary-600/10',
                    'flex items-center justify-center',
                    'ring-1 ring-primary-600/20'
                  )}
                >
                  <Zap className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
                </div>
              </div>

              <h4
                className={cn(
                  'text-xl md:text-2xl font-bold',
                  'text-white',
                  'mb-3',
                  'font-display font-bold'
                )}
              >
                Geschwindigkeit
              </h4>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                Während andere noch im Meeting sitzen, haben wir bereits getestet, optimiert und skaliert. Im E-Commerce entscheiden Wochen – nicht Quartale.
              </p>
            </div>

            {/* Value 2 */}
            <div
              className={cn(
                'group relative',
                'bg-stone-800 dark:bg-stone-800',
                'backdrop-blur-md',
                'rounded-3xl',
                'p-6 md:p-8',
                'min-h-[280px]',
                'overflow-hidden',
                'flex flex-col',
                'border border-white/10',
                'hover:border-primary-500/50',
                'shadow-xl shadow-black/20',
                'transition-all duration-500 ease-out',
                'hover:-translate-y-2'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <NoiseOverlay />

              <div className="mb-4">
                <div
                  className={cn(
                    'w-12 h-12',
                    'rounded-xl',
                    'bg-primary-600/10',
                    'flex items-center justify-center',
                    'ring-1 ring-primary-600/20'
                  )}
                >
                  <Target className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
                </div>
              </div>

              <h4
                className={cn(
                  'text-xl md:text-2xl font-bold',
                  'text-white',
                  'mb-3',
                  'font-display font-bold'
                )}
              >
                Fokus
              </h4>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                Unser einziger KPI ist Ihr Umsatz. Keine schönen Reports, keine Aktivitäts-Metriken. Wenn Ihre Zahlen nicht wachsen, haben wir versagt.
              </p>
            </div>

            {/* Value 3 */}
            <div
              className={cn(
                'group relative',
                'bg-stone-800 dark:bg-stone-800',
                'backdrop-blur-md',
                'rounded-3xl',
                'p-6 md:p-8',
                'min-h-[280px]',
                'overflow-hidden',
                'flex flex-col',
                'border border-white/10',
                'hover:border-primary-500/50',
                'shadow-xl shadow-black/20',
                'transition-all duration-500 ease-out',
                'hover:-translate-y-2'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <NoiseOverlay />

              <div className="mb-4">
                <div
                  className={cn(
                    'w-12 h-12',
                    'rounded-xl',
                    'bg-primary-600/10',
                    'flex items-center justify-center',
                    'ring-1 ring-primary-600/20'
                  )}
                >
                  <Users className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
                </div>
              </div>

              <h4
                className={cn(
                  'text-xl md:text-2xl font-bold',
                  'text-white',
                  'mb-3',
                  'font-display font-bold'
                )}
              >
                Partnerschaft
              </h4>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                Wir denken in Ihrem Business, nicht in Stundensätzen. Was gut für Ihren Umsatz ist, ist gut für uns – das ist die einzige Partnerschaft, die zählt.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'px-8 py-4',
              'bg-primary-600 text-white',
              'font-semibold rounded-xl',
              'transition-all duration-200',
              'hover:bg-primary-700 hover:scale-105',
              'shadow-lg shadow-primary-600/20'
            )}
          >
            <span>Kennenlern-Gespräch vereinbaren</span>
          </a>
        </div>
      </div>
    </section>
  );
}
