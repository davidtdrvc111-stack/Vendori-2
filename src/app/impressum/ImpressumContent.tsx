'use client';

import React from 'react';
import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ImpressumContent() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-700 font-[family-name:var(--font-inter)] relative scroll-smooth selection:bg-primary-500/30">
            {/* Reading Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[100] origin-left"
                style={{ scaleX }}
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
            <Breadcrumb items={[{ label: 'Impressum' }]} />

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
                            Rechtliche Bestimmungen
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white font-heading font-bold leading-[0.95] tracking-tighter"
                        >
                            Impressum<br />
                            <span className="text-primary-600">VENDORi GmbH.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Angaben gemäß § 5 TMG und rechtliche Informationen zur VENDORi GmbH
                        </motion.p>
                    </header>

                    {/* Main Content Card */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-3xl border border-neutral-200 dark:border-white/5 rounded-[48px] shadow-2xl shadow-neutral-200/50 dark:shadow-none overflow-hidden"
                    >
                        {/* Glass grain overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url('/noise.png')` }} />

                        <div className="p-8 md:p-12 lg:p-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base md:text-lg text-neutral-700 dark:text-neutral-400 leading-[1.8] font-light tracking-wide">
                                <section className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Angaben gemäß § 5 TMG</h2>
                                        <p className="font-medium">
                                            VENDORi GmbH<br />
                                            Hahnenfeldstr. 25<br />
                                            69429 Waldbrunn
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Kontakt</h2>
                                        <p>Telefon: + 49 (0) 6274 9278157</p>
                                        <p>E-Mail: <a href="mailto:info@vendori.eu" className="text-primary-600 dark:text-primary-400 hover:underline transition-all duration-300 decoration-primary-600/30 underline-offset-4">info@vendori.eu</a></p>
                                        <p>Internet: <a href="https://vendori.eu" className="text-primary-600 dark:text-primary-400 hover:underline transition-all duration-300 decoration-primary-600/30 underline-offset-4">vendori.eu</a></p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Öffnungszeiten</h2>
                                        <p>Mo-Fr. 8:00 - 17:00 Uhr</p>
                                    </div>
                                </section>

                                <section className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Retouren-Adresse</h2>
                                        <p>
                                            VENDORi GmbH<br />
                                            Hahnenfeldstr. 25<br />
                                            69429 Waldbrunn
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Vertreten durch</h2>
                                        <p>Dejan Todorovic (Geschäftsführer)</p>
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Registereintrag</h2>
                                        <p>Eintragung im Handelsregister.</p>
                                        <p>Registergericht: Amtsgericht Mannheim</p>
                                        <p>Registernummer: HRB 749014</p>
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 font-heading font-bold">Umsatzsteuer-ID</h2>
                                        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                                        <p>DE364269226</p>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <p>Steuer-Nr: 40099/57152</p>
                                    </div>
                                </section>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-16" />

                            <div className="space-y-12 text-neutral-700 dark:text-neutral-400 leading-[1.8] text-base md:text-lg font-light tracking-wide">
                                <section className="space-y-5">
                                    <h2 className="text-3xl font-black text-neutral-900 dark:text-white font-heading font-bold break-words hyphens-auto">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                                </section>
                            </div>
                        </div>
                    </motion.section>

                    {/* Footer Help */}
                    <div className="mt-20 p-12 rounded-[40px] bg-neutral-900 dark:bg-zinc-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold font-heading font-bold text-white">
                                Noch Fragen zum Impressum?
                            </h2>
                            <p className="text-neutral-400 text-sm">
                                Kontaktieren Sie uns jederzeit für weitere Informationen.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:info@vendori.eu"
                                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black text-sm transition-all hover:scale-105 shadow-xl shadow-primary-600/20 active:scale-95 whitespace-nowrap"
                            >
                                Jetzt Kontaktieren
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
