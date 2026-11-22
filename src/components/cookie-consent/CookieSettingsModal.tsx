/**
 * Cookie Settings Modal Component
 * Dialog für detaillierte Cookie-Einstellungen. Texte und Logik unverändert,
 * Gestaltung im Designsystem des Redesigns (src/styles/site.css).
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CookieSettingsModalProps, CookieCategoryInfo } from './types';
import { CookieToggle } from './CookieToggle';
import { useCookieConsent } from './useCookieConsent';

const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
  {
    id: 'necessary',
    label: 'Notwendige Cookies',
    description: 'Erforderlich für die wesentlichen Website-Funktionen.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Analytische Cookies',
    description:
      'Diese Cookies helfen uns, die Website zu verbessern. Hierfür verwenden wir Dienste von Drittanbietern.',
    required: false,
  },
  {
    id: 'marketing',
    label: 'Marketing Cookies',
    description: 'Marketing-Cookies werden nicht verwendet.',
    required: false,
  },
];

export function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const { consent, savePreferences, acceptAll } = useCookieConsent();
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lokalen Zustand beim Öffnen mit gespeicherter Einwilligung abgleichen
  useEffect(() => {
    if (isOpen && consent) {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
  }, [isOpen, consent]);

  // Fokus: beim Öffnen auf Schließen-Button, beim Schließen zurück
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  // Escape + Fokusfalle + Seite nicht scrollen
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const f = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cookie-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={modalRef} className="cookie-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
        <div className="cookie-modal__head">
          <div>
            <h2 id="cookie-settings-title" className="cookie-modal__title">
              Cookie-Einstellungen
            </h2>
            <p className="small">
              Wir respektieren Ihre Privatsphäre. Sie können selbst entscheiden, welche Cookies Sie zulassen möchten.{' '}
              <Link href="/datenschutz" onClick={onClose}>
                Weitere Informationen
              </Link>
              .
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="drawer__close"
            onClick={onClose}
            aria-label="Cookie-Einstellungen schließen"
          >
            <svg className="icon" aria-hidden="true">
              <use href="#i-close" />
            </svg>
          </button>
        </div>
        <div className="cookie-modal__body">
          {COOKIE_CATEGORIES.map((category) => (
            <CookieToggle
              key={category.id}
              category={category.id}
              label={category.label}
              description={category.description}
              enabled={category.id === 'necessary' ? true : category.id === 'analytics' ? analytics : marketing}
              disabled={category.required}
              onChange={(enabled) => {
                if (category.id === 'analytics') setAnalytics(enabled);
                else if (category.id === 'marketing') setMarketing(enabled);
              }}
            />
          ))}
        </div>
        <div className="cookie-modal__foot">
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => {
              savePreferences({ analytics, marketing });
              onClose();
            }}
          >
            Einstellungen speichern
          </button>
          <button
            type="button"
            className="btn btn--secondary btn--sm"
            onClick={() => {
              acceptAll();
              onClose();
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
