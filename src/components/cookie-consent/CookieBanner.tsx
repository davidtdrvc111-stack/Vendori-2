/**
 * Cookie Banner Component
 * Erscheint beim ersten Besuch, versteckt sich nach Consent.
 * Texte und Logik unverändert; Gestaltung im Designsystem des Redesigns (Klassen in src/styles/site.css).
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CookieBannerProps } from './types';
import { useCookieConsent } from './useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';

export function CookieBanner({ className = '' }: CookieBannerProps) {
  const { isInitialized, isFirstVisit, acceptAll, acceptNecessary } = useCookieConsent();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (!isInitialized) return null;
  const showBanner = isFirstVisit();

  return (
    <>
      {showBanner && (
        <div className={`cookie-banner ${className}`}>
          <div className="cookie-banner__box" role="region" aria-label="Cookie-Einwilligung" aria-live="polite">
            <h2 className="cookie-banner__title">Diese Website nutzt Cookies</h2>
            <p className="cookie-banner__text">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Notwendige Cookies sind immer
              aktiv. Mit Ihrer Zustimmung können wir auch Analyse-Cookies verwenden, um unsere Website zu optimieren.{' '}
              <Link href="/datenschutz">Mehr erfahren in unserer Datenschutzerklärung</Link>.
            </p>
            <div className="cookie-banner__actions">
              {/* Zustimmen und Ablehnen gleichwertig gestaltet (keine Hervorhebung einer Option) */}
              <button type="button" className="btn btn--secondary btn--sm" onClick={acceptAll}>
                Alle akzeptieren
              </button>
              <button type="button" className="btn btn--secondary btn--sm" onClick={acceptNecessary}>
                Nur Notwendige
              </button>
              <button type="button" className="btn btn--secondary btn--sm" onClick={() => setIsSettingsOpen(true)}>
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      )}
      <CookieSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
