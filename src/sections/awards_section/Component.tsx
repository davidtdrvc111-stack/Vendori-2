'use client';

import { cn } from '@/lib/utils';
import { AwardsSectionProps, Award } from './types';
import { Trophy, Star, Medal, Award as AwardIcon } from 'lucide-react';

// Noise Overlay Component (wiederverwendet von Services Section)
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

// Award Data (Platzhalter - später mit echten Daten ersetzen)
const AWARDS: Award[] = [
  {
    id: 'shop-usability-award-2025',
    name: 'Shop Usability Award 2025',
    category: 'Beste Benutzerfreundlichkeit',
    year: '2025',
    context: 'Ausgezeichnet für herausragende Conversion-Optimierung – Prinzipien, die wir auf alle Kundenprojekte anwenden.',
    icon: 'trophy',
  },
  {
    id: 'ecommerce-germany-award-2024',
    name: 'E-Commerce Germany Award 2024',
    category: 'Innovativste Logistik-Lösung',
    year: '2024',
    context: 'Prämiert für Komplexität, die wir im Hintergrund lautlos lösen.',
    icon: 'award',
  },
  {
    id: 'best-d2c-brand-2024',
    name: 'Best D2C Brand Award 2024',
    category: 'Herausragende D2C-Strategie',
    year: '2024',
    context: 'Beweis für praxiserprobte Strategien, die echte Umsätze skalieren.',
    icon: 'star',
  },
  {
    id: 'digital-champions-2025',
    name: 'Digital Champions Award 2025',
    category: 'Beste Multi-Channel-Integration',
    year: '2025',
    context: 'Ausgezeichnet für nahtlose Expansion in neue Märkte.',
    icon: 'medal',
  },
];

// Icon Mapping
const ICON_MAP = {
  trophy: Trophy,
  star: Star,
  medal: Medal,
  award: AwardIcon,
};

// Award Card Component
function AwardCard({ award }: { award: Award }) {
  const Icon = ICON_MAP[award.icon];

  return (
    <div
      className={cn(
        'relative',
        'bg-stone-800',
        'md:shadow-inner-glow', // Glow nur auf Tablet/Desktop
        'rounded-3xl',
        'p-6 md:p-8',
        'min-h-[280px] md:min-h-[320px]',
        'w-[85vw] sm:w-[420px] md:w-[480px] lg:w-[520px]', // Responsive Breite - nimmt mehr Viewport ein
        'flex-shrink-0', // Verhindert Schrumpfen im Flex-Container
        'transition-shadow duration-300',
        'md:hover:shadow-inner-glow-hover', // Hover-Glow nur auf Tablet/Desktop
        'overflow-hidden',
        'flex flex-col'
      )}
    >
      <NoiseOverlay />

      {/* Icon Container */}
      <div className="mb-6">
        <div
          className={cn(
            'w-12 h-12 md:w-14 md:h-14',
            'rounded-xl',
            'bg-primary-600/10',
            'flex items-center justify-center',
            'ring-1 ring-primary-600/20'
          )}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-600" strokeWidth={1.5} />
        </div>
      </div>

      {/* Award Name */}
      <h3
        className={cn(
          'text-xl md:text-2xl font-bold',
          'text-white',
          'mb-2',
          'font-[family-name:var(--font-space-grotesk)]'
        )}
      >
        {award.name}
      </h3>

      {/* Category */}
      <p className="text-sm md:text-base text-primary-400 font-medium mb-4">
        {award.category}
      </p>

      {/* Context */}
      <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
        {award.context}
      </p>
    </div>
  );
}

// Main Awards Section Component
export function AwardsSection({ className = '' }: AwardsSectionProps) {
  return (
    <section
      id="awards"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-white dark:bg-neutral-900',
        className
      )}
    >
      {/* Section Heading - mit Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold',
              'text-neutral-900 dark:text-white',
              'mb-4',
              'font-[family-name:var(--font-space-grotesk)]'
            )}
          >
            Zahlen. Daten. Auszeichnungen.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-200">
            Während andere Agenturen von Erfolgen erzählen, lassen wir unsere Ergebnisse für
            sich sprechen. Hier ist eine Auswahl der offiziellen Anerkennungen für unsere Arbeit
            und die von uns betriebenen Shops.
          </p>
        </div>
      </div>

      {/* Marquee Container - Volle Breite Edge-to-Edge */}
      <div className="relative overflow-hidden w-full">
        {/* Gradient Fade-Out Effekte an den Rändern - nur auf Tablet/Desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-neutral-900 dark:via-neutral-900/80 dark:to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-neutral-900 dark:via-neutral-900/80 dark:to-transparent z-10 pointer-events-none" />

        {/* Marquee Track - Startet am linken Rand, Animation pausiert beim Hover */}
        <div className="flex animate-marquee-fast md:animate-marquee hover:[animation-play-state:paused]">
          {/* Wiederhole die Awards zweimal für nahtlose Schleife */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-8 md:gap-12 flex-shrink-0">
              {AWARDS.map((award, awardIndex) => (
                <AwardCard
                  key={`set-${setIndex}-${award.id}`}
                  award={award}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
