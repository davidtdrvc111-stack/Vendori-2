'use client';

import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { HeroSectionProps } from './types';

export function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <AuroraBackground className={className}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-950 dark:text-white leading-tight font-[family-name:var(--font-space-grotesk)]">
              Wir skalieren keine Theorie, sondern{' '}
              <span className="text-primary-500 dark:text-primary-400">
                echte Umsätze
              </span>
              .
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto">
              Täglich beweisen wir in unseren{' '}
              <span className="text-primary-500 dark:text-primary-400">
                eigenen Shops
              </span>
              , was funktioniert. Profitieren Sie von echter E-Commerce-Expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 border-2 border-transparent"
              >
                Beratung anfragen
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-transparent text-primary-600 dark:text-primary-400 font-semibold rounded-lg transition-colors border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/20"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </AuroraBackground>
  );
}
