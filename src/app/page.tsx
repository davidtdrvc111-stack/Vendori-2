import { StickyHeader } from '@/sections/sticky_header';
import { HeroSection } from '@/sections/hero_section';
import { ServicesSection } from '@/sections/services_section';
import { ShopShowcaseSection } from '@/sections/shop_showcase_section';
import { AboutSection } from '@/sections/about_section';
import { ContactSection } from '@/sections/contact_section';
import { FooterSection } from '@/sections/footer_section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />

      <ServicesSection />
      <ShopShowcaseSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
