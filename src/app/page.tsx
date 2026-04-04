import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { StickyHeader } from '@/sections/sticky_header';
import { HeroSection } from '@/sections/hero_section'; // Above-the-fold - sofort laden!
import { getFeaturedFAQs } from '@/data/faq-unified';

const faqData = getFeaturedFAQs();

// Dynamic Imports NUR für below-fold

const ServicesSection = dynamic(() =>
  import('@/sections/services_section').then(mod => ({ default: mod.ServicesSection })),
  { loading: () => <div className="min-h-screen bg-zinc-900" /> }
);

const ShopShowcaseSection = dynamic(() =>
  import('@/sections/shop_showcase_section').then(mod => ({ default: mod.ShopShowcaseSection })),
  { loading: () => <div className="min-h-screen bg-stone-100 dark:bg-neutral-900" /> }
);

const AboutSection = dynamic(() =>
  import('@/sections/about_section').then(mod => ({ default: mod.AboutSection })),
  { loading: () => <div className="min-h-screen bg-stone-300 dark:bg-neutral-800" /> }
);

const ContactSection = dynamic(() =>
  import('@/sections/contact_section').then(mod => ({ default: mod.ContactSection })),
  { loading: () => <div className="min-h-screen bg-zinc-900" /> }
);

const FAQAccordion = dynamic(() =>
  import('@/components/ui/FAQAccordion').then(mod => ({ default: mod.FAQAccordion })),
  { loading: () => <div className="min-h-screen bg-zinc-900" /> }
);

const FooterSection = dynamic(() =>
  import('@/sections/footer_section').then(mod => ({ default: mod.FooterSection })),
  { loading: () => <div className="bg-zinc-900" /> }
);

export const metadata: Metadata = {
  title: 'E-Commerce Wachstum aus der Praxis | VENDORi GmbH',
  description: 'E-Commerce-Skalierung aus der Praxis: D2C-Strategien, Marketplace-Know-how und 22+ Jahre Erfahrung. Erprobte Methoden statt Theorie.',
  alternates: {
    canonical: 'https://vendori.eu',
  },
  openGraph: {
    title: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis',
    description: 'E-Commerce-Skalierung aus der Praxis: D2C-Strategien, Marketplace-Know-how und 22+ Jahre Erfahrung. Erprobte Methoden statt Theorie.',
    url: 'https://vendori.eu',
    type: 'website',
  },
};

// Dynamisch generiertes Schema.org FAQPage-Markup aus faq.ts
// Vorteil: Single Source of Truth, automatische Synchronisation bei Änderungen
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default async function Home() {
  // Get nonce from headers for CSP compliance
  const { headers } = await import('next/headers');
  const nonce = (await headers()).get('x-nonce') || '';

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <StickyHeader />
      <section id="hero">
        <HeroSection />
      </section>

      <ServicesSection />
      <ShopShowcaseSection />
      <AboutSection />
      <ContactSection />

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading leading-tight tracking-tighter mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Antworten auf die wichtigsten Fragen zu VENDORi und unseren Services
            </p>
          </div>

          <FAQAccordion items={faqData} />

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl shadow-primary-600/20 active:scale-95"
            >
              Alle FAQs anzeigen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
