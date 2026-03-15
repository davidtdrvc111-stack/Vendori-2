'use client';

import { cn } from '@/lib/utils';
import { AboutSectionProps } from './types';

// Main About Section Component (Homepage Teaser)
export function AboutSection({ className = '' }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-gradient-to-b from-stone-300 via-stone-200 to-stone-300 dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-800',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={cn(
              'font-bold',
              'text-neutral-900 dark:text-white',
              'mb-4 md:mb-6',
              'font-display font-extrabold',
              'leading-tight',
              'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
            )}
          >
            <span className="block">Wir reden nicht.</span>
            <span className="block">Wir <span className="text-primary-600">verkaufen.</span></span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Unsere Shops laufen. Unsere Zahlen stimmen. Und genau diese Erfahrung bringen wir in Ihr Business.
          </p>
        </div>

        {/* Stats Grid - Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-16 max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-heading font-bold'
              )}
            >
              1.500.000<span className="text-primary-600">+</span>
            </div>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Kunden in unseren Shops
            </p>
          </div>

          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-heading font-bold'
              )}
            >
              20<span className="text-primary-600">+</span>
            </div>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Länder beliefert
            </p>
          </div>

          <div className="text-center">
            <div
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold',
                'text-neutral-900 dark:text-white',
                'mb-2',
                'font-heading font-bold'
              )}
            >
              22<span className="text-primary-600">+</span>
            </div>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Jahre im E-Commerce
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
              'shadow-lg shadow-primary-600/20',
              'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2'
            )}
          >
            <span>Unsere ganze Geschichte</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
