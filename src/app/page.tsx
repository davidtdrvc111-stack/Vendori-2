import { StickyHeader } from '@/sections/sticky_header';
import { HeroSection } from '@/sections/hero_section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />

      {/* Demo Sections zum Testen des Sticky Headers */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Über uns</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Unsere Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Service {i}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg text-gray-700 mb-8">
              Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Nachricht!
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-center text-gray-600">
                Kontaktformular wird hier implementiert
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
