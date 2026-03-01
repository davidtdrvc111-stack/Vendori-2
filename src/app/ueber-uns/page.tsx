import { StickyHeader } from '@/sections/sticky_header';
import { AboutFullSection } from '@/sections/about_full_section';
import { ContactSection } from '@/sections/contact_section';
import { FooterSection } from '@/sections/footer_section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - VENDORi GmbH',
  description:
    'Vom Seller zum Partner: Erfahren Sie, wie VENDORi aus der Praxis entstand und warum unsere Hands-on-Erfahrung den Unterschied macht.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <AboutFullSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
