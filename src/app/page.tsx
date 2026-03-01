import { StickyHeader } from '@/sections/sticky_header';
import { HeroSection } from '@/sections/hero_section';
import { ServicesSection } from '@/sections/services_section';
import { ShopShowcaseSection } from '@/sections/shop_showcase_section';
import { FooterSection } from '@/sections/footer_section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />

      <ServicesSection />
      <ShopShowcaseSection />

      {/* Platzhalter: Über uns Section (wird später implementiert) */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Über uns
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Dieser Bereich wird in Kürze verfügbar sein.
          </p>
        </div>
      </section>

      {/* Platzhalter: Kontakt Section (wird später implementiert) */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Dieser Bereich wird in Kürze verfügbar sein.
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
