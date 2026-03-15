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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Wir skalieren keine Theorie, sondern{' '}
              <span className="text-primary-400">
                echte Umsätze
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
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 border-2 border-transparent"
              >
                Beratung anfragen
              </a>
              <a
                href="#services"
                className="px-8 py-3 bg-transparent text-primary-400 font-semibold rounded-lg transition-colors border-2 border-primary-400 hover:bg-primary-950/20"
              >
                Unsere Services
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </AuroraBackground>
  );
}
