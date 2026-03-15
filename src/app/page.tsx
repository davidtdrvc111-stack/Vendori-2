import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { StickyHeader } from '@/sections/sticky_header';
import { HeroSection } from '@/sections/hero_section';
import { ServicesSection } from '@/sections/services_section';
import { ShopShowcaseSection } from '@/sections/shop_showcase_section';
import { AboutSection } from '@/sections/about_section';
import { ContactSection } from '@/sections/contact_section';
import { FooterSection } from '@/sections/footer_section';

export const metadata: Metadata = {
  title: 'E-Commerce Wachstum aus der Praxis',
  description: 'Wir skalieren Ihren Umsatz mit D2C-Strategien, Marketplace-Know-how und 22+ Jahren Erfahrung. Kein Agentur-Experiment — echte Ergebnisse.',
  alternates: {
    canonical: 'https://vendori.eu',
  },
  openGraph: {
    title: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis',
    description: 'Wir skalieren Ihren Umsatz mit D2C-Strategien, Marketplace-Know-how und 22+ Jahren Erfahrung. Kein Agentur-Experiment — echte Ergebnisse.',
    url: 'https://vendori.eu',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was macht VENDORi anders als andere E-Commerce-Agenturen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VENDORi ist kein Agentur-Konstrukt. Wir started als E-Commerce-Seller und betreiben bis heute eigene D2C-Shops mit über 1.500.000 Kunden. Jede Strategie, die wir empfehlen, haben wir bereits in unseren eigenen Shops validiert — kein Experiment auf Ihre Kosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für welche Unternehmen ist VENDORi der richtige Partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VENDORi arbeitet mit B2B-Unternehmen und Marken zusammen, die ihren E-Commerce-Umsatz skalieren möchten — ob über eigene Online-Shops (D2C) oder internationale Marktplätze wie Amazon. Besonders geeignet für Mittelstand und wachsende Marken.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welchen Märkten ist VENDORi tätig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VENDORi ist in 20+ europäischen Ländern aktiv, unter anderem in Deutschland, Frankreich, den Niederlanden, Österreich und Belgien. Unsere eigenen Shops beliefern Kunden in ganz Europa über Online-Shops und internationale Marktplätze.',
      },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd />
      <script
        type="application/ld+json"
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
      <FooterSection />
    </main>
  );
}
