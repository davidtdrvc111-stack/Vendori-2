import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';

export default function Impressum() {
    return (
        <main className="min-h-screen pt-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
            <StickyHeader />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 font-[family-name:var(--font-space-grotesk)] text-neutral-900 dark:text-white">
                    Impressum
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-neutral-600 dark:text-neutral-400">
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Angaben gemäß § 5 TMG</h2>
                            <p className="font-medium">
                                VENDORi GmbH<br />
                                Hahnenfeldstr. 25<br />
                                69429 Waldbrunn
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Kontakt</h2>
                            <p>Telefon: + 49 (0) 6274 9278157</p>
                            <p>E-Mail: <a href="mailto:info@vendori.eu" className="text-primary-600 dark:text-primary-400 hover:underline">info@vendori.eu</a></p>
                            <p>Internet: <a href="https://vendori.eu" className="text-primary-600 dark:text-primary-400 hover:underline">vendori.eu</a></p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Öffnungszeiten</h2>
                            <p>Mo-Fr. 8:00 - 17:00 Uhr</p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Retouren-Adresse</h2>
                            <p>
                                VENDORi GmbH<br />
                                Hahnenfeldstr. 25<br />
                                69429 Waldbrunn
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Vertreten durch</h2>
                            <p>Dejan Todorovic (Geschäftsführer)</p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Registereintrag</h2>
                            <p>Eintragung im Handelsregister.</p>
                            <p>Registergericht: Amtsgericht Mannheim</p>
                            <p>Registernummer: HRB 749014</p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Umsatzsteuer-ID</h2>
                            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                            <p>DE364269226</p>
                        </div>

                        <div className="space-y-2 text-sm text-neutral-500">
                            <p>Steuer-Nr: 40099/57152</p>
                        </div>
                    </section>
                </div>

                <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                <section className="space-y-6 text-neutral-600 dark:text-neutral-400">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">EU-Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a
                            href="https://ec.europa.eu/consumers/odr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline ml-1"
                        >
                            https://ec.europa.eu/consumers/odr
                        </a>.
                    </p>
                    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </section>

                <section className="space-y-6 text-neutral-600 dark:text-neutral-400 mt-12">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </section>
            </div>

            <FooterSection />
        </main>
    );
}
