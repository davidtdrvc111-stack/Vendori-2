'use client';

import { cn } from '@/lib/utils';
import { AboutSectionProps } from './types';
import {
  TrendingUp,
  Globe,
  Users,
  Zap,
  Target,
  Rocket,
  Award,
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

// Main About Section Component (Homepage Teaser)
export function AboutSection({ className = '' }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-gradient-to-b from-white to-slate-200 dark:from-neutral-900 dark:to-neutral-800',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
              'text-neutral-900 dark:text-white',
              'mb-4 md:mb-6',
              'font-[family-name:var(--font-space-grotesk)]',
              'leading-tight'
            )}
          >
            Keine Theorie-Agentur.{' '}
            <span className="text-primary-600">Praktiker mit eigenen Marken.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Wir haben selbst als E-Commerce-Seller angefangen und wissen, welche Hebel wirklich
            funktionieren. Diese Hands-on-Erfahrung macht den Unterschied.
          </p>
        </div>

        {/* Stats Grid - Social Proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-[family-name:var(--font-space-grotesk)]'
              )}
            >
              50.000<span className="text-primary-600">+</span>
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
              Orders verarbeitet
            </p>
          </div>

          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-[family-name:var(--font-space-grotesk)]'
              )}
            >
              10<span className="text-primary-600">+</span>
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
              Länder erschlossen
            </p>
          </div>

          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-[family-name:var(--font-space-grotesk)]'
              )}
            >
              15<span className="text-primary-600">+</span>
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
              Jahre E-Commerce
            </p>
          </div>

          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-[family-name:var(--font-space-grotesk)]'
              )}
            >
              4
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
              Eigene D2C-Marken
            </p>
          </div>
        </div>

        {/* CTA - Link to Dedicated Page */}
        <div className="text-center">
          <a
            href="/ueber-uns"
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
            <span>Unsere ganze Geschichte</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
