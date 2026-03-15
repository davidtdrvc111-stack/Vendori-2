import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { StickyHeader } from '@/sections/sticky_header';  // Nicht lazy

// Dynamic Imports für below-fold
const HeroSection = dynamic(() =>
  import('@/sections/hero_section').then(mod => ({ default: mod.HeroSection })),
  { loading: () => <div className="h-screen bg-zinc-900" /> }
);

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

const FooterSection = dynamic(() =>
  import('@/sections/footer_section').then(mod => ({ default: mod.FooterSection })),
  { loading: () => <div className="bg-zinc-900" /> }
);

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
    {
      '@type': 'Question',
      name: 'Welche Services bietet VENDORi konkret an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VENDORi bietet drei Hauptservices: 1) D2C-Strategie & Umsatzwachstum mit praxiserprobten Strategien, 2) Internationale Marktplatz-Expansion auf Amazon in 20+ Ländern, 3) E-Commerce Partnerschaft mit operativer Begleitung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell kann ich mit VENDORi starten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nach einem kostenlosen Kennenlern-Gespräch können wir innerhalb von 2-3 Wochen starten. Keine monatelangen Strategiephasen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Zusammenarbeit mit VENDORi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten richten sich nach Ihrem individuellen Bedarf. Wir arbeiten projektbasiert oder im Retainer-Modell. Im Erstgespräch erstellen wir ein transparentes Angebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Auf welchen Marktplätzen ist VENDORi aktiv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hauptsächlich Amazon (alle EU-Marktplätze), aber auch eBay, Kaufland, Otto und internationale Plattformen. Unsere Shops bedienen 20+ europäische Länder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert es bis erste Ergebnisse sichtbar sind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erste Tests starten in Woche 1-2. Messbare Umsatzsteigerungen nach 4-8 Wochen. Wir arbeiten agil mit schnellen Iterationen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Branchen betreut VENDORi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branchenübergreifend mit B2B und D2C-Marken. Besonders stark in technischen Produkten, Werkzeugen, Home & Living. Entscheidend ist das Skalierungspotenzial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich eigene E-Commerce-Erfahrung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Wir bringen das komplette Know-how mit und übernehmen operative Tasks. Sie konzentrieren sich auf Ihr Kerngeschäft.',
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
