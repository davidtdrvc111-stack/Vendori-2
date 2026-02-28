/**
 * Cookie Banner Component
 * Hauptkomponente für Cookie Consent Banner
 * Erscheint beim ersten Besuch, versteckt sich nach Consent
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CookieBannerProps } from './types';
import { useCookieConsent } from './useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';

export function CookieBanner({ className = '' }: CookieBannerProps) {
  const { isInitialized, isFirstVisit, acceptAll, acceptNecessary } = useCookieConsent();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Don't render until initialized (avoid flash)
  if (!isInitialized) {
    return null;
  }

  // Don't show banner if user has already given consent
  const showBanner = isFirstVisit();

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`
              fixed bottom-0 left-0 right-0 z-40
              ${className}
            `}
          >
            {/* Banner Container - Zentral und breiter */}
            <div className="container mx-auto px-4 pb-6 md:pb-8 flex justify-center">
              <div
                className="
                  bg-white/95 dark:bg-neutral-800/90 backdrop-blur-2xl shadow-2xl rounded-2xl
                  border border-neutral-200/50 dark:border-neutral-700/50
                  p-6 md:p-8
                  w-full max-w-3xl
                "
              >
                {/* Content */}
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                    Diese Website nutzt Cookies
                  </h2>
                  <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                    Notwendige Cookies sind immer aktiv. Mit Ihrer Zustimmung können wir auch
                    Analyse-Cookies verwenden, um unsere Website zu optimieren.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Primary: Accept All */}
                  <button
                    onClick={acceptAll}
                    className="
                      flex-1 px-8 py-3 min-h-[44px]
                      bg-primary-600 text-white font-semibold rounded-lg
                      transition-colors shadow-lg
                      hover:bg-primary-700
                      dark:bg-primary-600 dark:hover:bg-primary-700
                      border-2 border-transparent
                      focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
                    "
                  >
                    Alle akzeptieren
                  </button>

                  {/* Secondary: Settings */}
                  <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="
                      flex-1 px-8 py-3 min-h-[44px]
                      bg-transparent text-primary-600 dark:text-primary-400 font-semibold rounded-lg
                      transition-colors
                      border-2 border-primary-500 dark:border-primary-400
                      hover:bg-primary-50 dark:hover:bg-primary-950/20
                      focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
                    "
                  >
                    Einstellungen
                  </button>

                  {/* Tertiary: Only Necessary */}
                  <button
                    onClick={acceptNecessary}
                    className="
                      flex-1 px-8 py-3 min-h-[44px]
                      bg-transparent text-primary-600 dark:text-primary-400 font-semibold rounded-lg
                      transition-colors
                      hover:bg-primary-50 dark:hover:bg-primary-950/20
                      focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
                    "
                  >
                    Nur Notwendige
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <CookieSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
