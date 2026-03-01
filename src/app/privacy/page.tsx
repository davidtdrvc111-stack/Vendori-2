import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';

export default function Privacy() {
    return (
        <main className="min-h-screen pt-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
            <StickyHeader />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 font-[family-name:var(--font-space-grotesk)] text-neutral-900 dark:text-white">
                    Datenschutz
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400">
                    <p>
                        Diese Seite wird in Kürze mit den vollständigen Datenschutzbestimmungen der VENDORi GmbH aktualisiert.
                    </p>
                    <p>
                        Bei Fragen zum Datenschutz wenden Sie sich bitte an: <a href="mailto:info@vendori.eu" className="text-primary-600 dark:text-primary-400 hover:underline">info@vendori.eu</a>
                    </p>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
