'use client';

import React, { useEffect } from 'react';
import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { getFAQsByCategory, getAllFAQs } from '@/data/faq-unified';
import { motion } from 'framer-motion';

export default function FAQPage() {
  // Get FAQ data from unified source
  const faqDetailedData = getFAQsByCategory();
  const allFAQs = getAllFAQs();

  // Scroll progress with CSS
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      document.documentElement.style.setProperty('--scroll-progress', String(progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate JSON-LD for FAQ Schema from all categories
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-700 font-[family-name:var(--font-inter)] relative scroll-smooth selection:bg-primary-500/30">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Reading Progress Indicator */}
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
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-500/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full"
        />
      </div>

      <StickyHeader />

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
              Häufig gestellte Fragen
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white font-heading font-bold leading-[0.95] tracking-tighter"
            >
              Fragen &<br />
              <span className="text-primary-600">Antworten.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Alle wichtigen Informationen zu VENDORi, unseren Services und der Zusammenarbeit
            </motion.p>
          </header>

          {/* FAQ Sections by Category */}
          <div className="space-y-16 mb-20">
            {faqDetailedData.map((category, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white font-heading leading-tight tracking-tighter">
                    {category.category}
                  </h2>
                </div>

                {/* FAQs for this category */}
                <FAQAccordion items={category.faqs} />
              </motion.section>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-neutral-900 dark:bg-zinc-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-bold font-heading font-bold text-white">
                Noch weitere Fragen?
              </h2>
              <p className="text-neutral-400 text-sm">
                Kontaktieren Sie uns für ein kostenloses Erstgespräch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-2xl font-black text-sm transition-all hover:scale-105 shadow-xl shadow-primary-700/20 active:scale-95 whitespace-nowrap"
              >
                Jetzt Kontaktieren
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
