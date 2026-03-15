/**
 * Cookie Settings Modal Component
 * Modal Dialog für detaillierte Cookie-Einstellungen
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CookieSettingsModalProps, CookieCategoryInfo } from './types';
import { CookieToggle } from './CookieToggle';
import { useCookieConsent } from './useCookieConsent';

/**
 * Cookie-Kategorien Metadaten
 */
const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
  {
    id: 'necessary',
    label: 'Notwendige Cookies',
    description:
      'Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine persönlichen Daten.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Analytische Cookies',
    description:
      'Diese Cookies helfen uns zu verstehen, wie Sie unsere Website nutzen, damit wir sie weiter verbessern können.',
    required: false,
  },
  {
    id: 'marketing',
    label: 'Marketing Cookies',
    description:
      'Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen. Sie werden nur mit Ihrer Zustimmung gesetzt.',
    required: false,
  },
];

export function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const { consent, savePreferences, acceptAll } = useCookieConsent();

  // Local state for toggles (independent until save)
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync local state with consent when modal opens
  useEffect(() => {
    if (isOpen && consent) {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
  }, [isOpen, consent]);

  // Fokus-Management: beim Öffnen Fokus auf Close-Button setzen, beim Schließen zurücksetzen
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  // Handle ESC key + Focus-Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
        return;
      }

      if (e.key === 'Tab' && isOpen && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSavePreferences = () => {
    savePreferences({ analytics, marketing });
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAll();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-settings-title"
              className="
                bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl
                border border-neutral-200/50 dark:border-neutral-700/50
                w-full max-w-2xl max-h-[90vh]
                overflow-hidden
                flex flex-col
              "
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      id="cookie-settings-title"
                      className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white font-display font-bold"
                    >
                      Cookie-Einstellungen
                    </h2>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-2">
                      Wir respektieren Ihre Privatsphäre. Sie können selbst entscheiden, welche
                      Cookies Sie zulassen möchten.
                    </p>
                  </div>
                  <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    aria-label="Cookie-Einstellungen schließen"
                    className="
                      p-2 rounded-lg transition-colors
                      text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300
                      hover:bg-neutral-100 dark:hover:bg-neutral-800
                      focus:outline-none focus:ring-2 focus:ring-primary-600
                    "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="space-y-2">
                  {COOKIE_CATEGORIES.map((category) => (
                    <CookieToggle
                      key={category.id}
                      category={category.id}
                      label={category.label}
                      description={category.description}
                      enabled={
                        category.id === 'necessary'
                          ? true
                          : category.id === 'analytics'
                            ? analytics
                            : marketing
                      }
                      disabled={category.required}
                      onChange={(enabled) => {
                        if (category.id === 'analytics') {
                          setAnalytics(enabled);
                        } else if (category.id === 'marketing') {
                          setMarketing(enabled);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Footer - Buttons */}
              <div className="p-6 md:p-8 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-700/50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="
                      flex-1 px-8 py-3 min-h-[44px]
                      bg-purple-600 text-white font-semibold rounded-lg
                      transition-colors shadow-lg
                      hover:bg-purple-700
                      dark:bg-purple-600 dark:hover:bg-purple-700
                      border-2 border-transparent
                      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
                    "
                  >
                    Einstellungen speichern
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="
                      flex-1 px-8 py-3 min-h-[44px]
                      bg-transparent text-purple-600 dark:text-purple-400 font-semibold rounded-lg
                      transition-colors
                      border-2 border-purple-500 dark:border-purple-400
                      hover:bg-purple-50 dark:hover:bg-purple-950/20
                      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
                    "
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
