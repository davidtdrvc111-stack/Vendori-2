'use client';

import { AuroraBackground } from '@/components/ui/aurora-background';
import { HeroSectionProps } from './types';

export function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <AuroraBackground className={className}>
      <div className="hero-content relative flex flex-col gap-4 items-center justify-center px-4">
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              E-Commerce-Wachstum direkt aus der Praxis{' '}
              <span className="text-primary-400">
                – für messbare Umsätze
              </span>
              <span className="text-primary-400">.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
              Täglich beweisen wir in unseren{' '}
              <span className="text-primary-400 font-medium">
                eigenen Shops
              </span>
              , was funktioniert. Profitieren Sie von echter E-Commerce-Expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Beratung anfragen
              </a>
              <a
                href="#services"
                className="px-8 py-3 bg-transparent text-primary-400 font-semibold rounded-lg transition-colors border-2 border-primary-400 hover:bg-primary-950/20 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Unsere Services
              </a>
            </div>
          </div>
        </div>

      </div>
    </AuroraBackground>
  );
}
