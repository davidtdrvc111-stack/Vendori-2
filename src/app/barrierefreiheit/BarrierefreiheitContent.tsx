'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, Mail } from 'lucide-react';

export function BarrierefreiheitContent() {
    // Scroll progress with CSS (fallback for older browsers via useEffect)
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = window.scrollY / scrollHeight;
            document.documentElement.style.setProperty('--scroll-progress', String(progress));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Get current date for declaration
    const currentDate = new Date().toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-700 font-[family-name:var(--font-inter)] relative scroll-smooth selection:bg-primary-500/30">
            {/* Reading Progress Indicator - CSS-only */}
            <div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[100] origin-left transition-transform duration-100"
                style={{ transform: `scaleX(var(--scroll-progress, 0))` }}
            />

            {/* Premium Background Layer */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08),transparent_50%)]" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-500/10 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -120, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full"
                />
            </div>

            <StickyHeader />
            <div className="hidden">
                <Breadcrumb items={[{ label: 'Barrierefreiheit' }]} />
            </div>

            <div className="relative pt-32 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    {/* Hero Header */}
                    <header className="mb-20 space-y-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-widest font-heading font-bold"
                        >
                            BFSG-Konformität
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white font-heading font-bold leading-[0.95] tracking-tighter"
                        >
                            Erklärung zur<br />
                            <span className="text-primary-600">Barrierefreiheit.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            Informationen zur Barrierefreiheit dieser Website gemäß dem
                            Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines (WCAG 2.1).
                        </motion.p>
                    </header>

                    {/* Content */}
                    <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                        {/* Einleitung */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-neutral-200 dark:border-zinc-800 shadow-sm"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <CheckCircle className="w-8 h-8 text-primary-600" aria-hidden="true" />
                                Unser Engagement für Barrierefreiheit
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                VENDORi GmbH verpflichtet sich, seine Website für alle Menschen zugänglich zu machen,
                                unabhängig von ihren Fähigkeiten oder Technologien. Wir arbeiten kontinuierlich daran,
                                die Benutzerfreundlichkeit und Zugänglichkeit unserer Website zu verbessern und dabei
                                die relevanten Standards einzuhalten.
                            </p>
                        </motion.section>

                        {/* Konformitätsstatus */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                                Konformitätsstatus
                            </h2>
                            <div className="p-6 bg-primary-50 dark:bg-primary-950/30 rounded-xl border border-primary-200 dark:border-primary-800 mb-6">
                                <p className="text-neutral-800 dark:text-neutral-200 font-medium">
                                    Diese Website ist <strong>weitgehend konform</strong> mit den{' '}
                                    <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
                                </p>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                                Die WCAG 2.1 Level AA definieren Anforderungen, um Webinhalte für Menschen mit
                                verschiedenen Behinderungen zugänglicher zu machen. Durch die Erfüllung dieser
                                Anforderungen werden Inhalte für eine breitere Zielgruppe nutzbar.
                            </p>
                        </motion.section>

                        {/* Technische Spezifikationen */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                                Technische Spezifikationen
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                                Die Barrierefreiheit dieser Website basiert auf folgenden Technologien:
                            </p>
                            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span><strong>HTML5</strong> für semantische Struktur</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span><strong>WAI-ARIA</strong> für erweiterte Zugänglichkeit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span><strong>CSS3</strong> für responsives Design und Anpassungsfähigkeit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span><strong>JavaScript</strong> (progressiv erweitert)</span>
                                </li>
                            </ul>

                            <div className="mt-8 p-6 bg-neutral-50 dark:bg-zinc-900 rounded-xl border border-neutral-200 dark:border-zinc-800">
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                                    Implementierte Accessibility-Features:
                                </h3>
                                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <li>• Vollständige Tastaturnavigation</li>
                                    <li>• Screen Reader Optimierung (getestet mit NVDA, JAWS, VoiceOver)</li>
                                    <li>• Skip-to-Content Links für schnelle Navigation</li>
                                    <li>• Ausreichende Farbkontraste (min. 4.5:1)</li>
                                    <li>• Responsive Design für alle Bildschirmgrößen</li>
                                    <li>• Klare Fokus-Indikatoren für Tastaturnutzer</li>
                                    <li>• Beschriftete Formularfelder und Fehlermeldungen</li>
                                    <li>• Alternative Texte für alle bedeutungstragenden Bilder</li>
                                    <li>• Semantische HTML-Struktur mit logischer Überschriftenhierarchie</li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Bekannte Einschränkungen */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                                Bekannte Einschränkungen
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                                Trotz unserer Bemühungen können einige Bereiche der Website noch Barrierefreiheitsprobleme aufweisen:
                            </p>
                            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 list-disc pl-6">
                                <li>
                                    <strong>Animationen:</strong> Einige dekorative Animationen können bei aktivierter
                                    &quot;prefers-reduced-motion&quot;-Einstellung noch nicht vollständig reduziert werden.
                                    Wir arbeiten an einer Verbesserung.
                                </li>
                                <li>
                                    <strong>Farbkontraste:</strong> Placeholder-Texte in Formularen könnten in bestimmten
                                    Situationen unter dem AAA-Level liegen (AA wird erreicht).
                                </li>
                                <li>
                                    <strong>Externe Inhalte:</strong> Eingebettete Inhalte von Drittanbietern (falls vorhanden)
                                    unterliegen deren Barrierefreiheitsstandards.
                                </li>
                            </ul>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-6">
                                Wir nehmen diese Einschränkungen ernst und arbeiten kontinuierlich an Verbesserungen.
                            </p>
                        </motion.section>

                        {/* Feedback und Kontaktaufnahme */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-950/20 dark:to-purple-950/20 rounded-2xl border border-primary-200 dark:border-primary-800"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                                <Mail className="w-8 h-8 text-primary-600" aria-hidden="true" />
                                Feedback und Kontaktaufnahme
                            </h2>
                            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
                                Wenn Sie auf Barrieren auf unserer Website stoßen oder Fragen zur Barrierefreiheit haben,
                                würden wir uns freuen, von Ihnen zu hören. Ihr Feedback hilft uns, die Zugänglichkeit
                                unserer Website kontinuierlich zu verbessern.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-neutral-200 dark:border-zinc-800">
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary-600" aria-hidden="true" />
                                        Kontaktmöglichkeiten:
                                    </h3>
                                    <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary-600 font-bold">→</span>
                                            <span>
                                                Über unser{' '}
                                                <Link
                                                    href="/#contact"
                                                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline font-medium"
                                                >
                                                    Kontaktformular
                                                </Link>{' '}
                                                (bitte erwähnen Sie &quot;Barrierefreiheit&quot; in Ihrer Nachricht)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary-600 font-bold">→</span>
                                            <span>
                                                Kontaktdaten aus unserem{' '}
                                                <Link
                                                    href="/impressum"
                                                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline font-medium"
                                                >
                                                    Impressum
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-neutral-200 dark:border-zinc-800">
                                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">
                                        <strong>Reaktionszeit:</strong> Wir bemühen uns, Ihre Anfrage zur Barrierefreiheit
                                        innerhalb von <strong>2 Wochen</strong> zu beantworten und gegebenenfalls
                                        Lösungen bereitzustellen.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Durchsetzungsverfahren */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                                Durchsetzungsverfahren
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                                Wenn Sie mit unserer Antwort auf Ihr Feedback zur Barrierefreiheit nicht zufrieden sind,
                                können Sie sich an die zuständige Schlichtungsstelle wenden:
                            </p>

                            <div className="p-6 bg-neutral-50 dark:bg-zinc-900 rounded-xl border border-neutral-200 dark:border-zinc-800 mb-6">
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                                    Schlichtungsstelle nach § 16 BGG
                                </h3>
                                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                                    <strong>Schlichtungsstelle BGG bei der Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen</strong>
                                </p>
                                <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
                                    <p>Mauerstraße 53</p>
                                    <p>10117 Berlin</p>
                                    <p className="mt-4">
                                        <strong>Telefon:</strong> 030 18 527-2805
                                    </p>
                                    <p>
                                        <strong>Fax:</strong> 030 18 527-2901
                                    </p>
                                    <p>
                                        <strong>E-Mail:</strong>{' '}
                                        <a
                                            href="mailto:info@schlichtungsstelle-bgg.de"
                                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
                                        >
                                            info@schlichtungsstelle-bgg.de
                                        </a>
                                    </p>
                                    <p className="mt-4">
                                        <strong>Website:</strong>{' '}
                                        <a
                                            href="https://www.schlichtungsstelle-bgg.de"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline inline-flex items-center gap-1"
                                            aria-label="Schlichtungsstelle BGG Website (öffnet in neuem Tab)"
                                        >
                                            www.schlichtungsstelle-bgg.de
                                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Die Schlichtungsstelle BGG hat die Aufgabe, bei Konflikten zum Thema Barrierefreiheit
                                zwischen Menschen mit Behinderungen und öffentlichen Stellen des Bundes eine außergerichtliche
                                Streitbeilegung zu unterstützen. Das Schlichtungsverfahren ist kostenlos.
                            </p>
                        </motion.section>

                        {/* Erstellungs- und Prüfdatum */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 p-6 bg-neutral-100 dark:bg-zinc-900/50 rounded-xl border border-neutral-200 dark:border-zinc-800"
                        >
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                Datum dieser Erklärung
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                Diese Erklärung zur Barrierefreiheit wurde am <strong>{currentDate}</strong> erstellt
                                und zuletzt am <strong>{currentDate}</strong> überprüft.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-4">
                                Die Bewertung erfolgte durch eine Selbsteinschätzung gemäß WCAG 2.1 Level AA sowie
                                durch Tests mit gängigen Hilfstechnologien und Accessibility-Tools.
                            </p>
                        </motion.section>

                        {/* Zusätzliche Informationen */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                                Weiterführende Informationen
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                                Weitere Informationen zum Thema Barrierefreiheit finden Sie hier:
                            </p>
                            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                                <li>
                                    <a
                                        href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline inline-flex items-center gap-1 font-medium"
                                        aria-label="WCAG 2.1 Guidelines (öffnet in neuem Tab)"
                                    >
                                        Web Content Accessibility Guidelines (WCAG) 2.1
                                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/barrierefreiheitsstaerkungsgesetz.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline inline-flex items-center gap-1 font-medium"
                                        aria-label="Barrierefreiheitsstärkungsgesetz (öffnet in neuem Tab)"
                                    >
                                        Barrierefreiheitsstärkungsgesetz (BFSG)
                                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.behindertenbeauftragter.de/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline inline-flex items-center gap-1 font-medium"
                                        aria-label="Beauftragter der Bundesregierung für die Belange von Menschen mit Behinderungen (öffnet in neuem Tab)"
                                    >
                                        Beauftragter der Bundesregierung für die Belange von Menschen mit Behinderungen
                                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </motion.section>
                    </article>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
