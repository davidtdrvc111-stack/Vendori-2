import { JsonLd } from '@/components/seo/JsonLd';
import { StickyHeader } from '@/sections/sticky_header';
import { AboutFullSection } from '@/sections/about_full_section';
import { ContactSection } from '@/sections/contact_section';
import { FooterSection } from '@/sections/footer_section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über VENDORi GmbH | 22+ Jahre E-Commerce Erfahrung',
  description:
    'Vom Seller zum Partner: Erfahren Sie, wie VENDORi aus der Praxis entstand und warum unsere Hands-on-Erfahrung den Unterschied macht.',
  alternates: {
    canonical: 'https://vendori.eu/ueber-uns',
  },
  openGraph: {
    title: 'Über VENDORi GmbH — Aus Sellern wurden Partner',
    description: 'Vom Seller zum Partner: Erfahren Sie, wie VENDORi aus der Praxis entstand und warum unsere Hands-on-Erfahrung den Unterschied macht.',
    url: 'https://vendori.eu/ueber-uns',
  },
};

export default async function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd />
      <BreadcrumbJsonLd items={[{ name: 'Über uns', url: 'https://vendori.eu/ueber-uns' }]} />
      <StickyHeader />
      <div className="hidden">
        <Breadcrumb items={[{ label: 'Über uns' }]} />
      </div>
      <AboutFullSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
