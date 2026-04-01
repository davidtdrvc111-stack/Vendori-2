/**
 * Cookie Consent Storage
 * localStorage utilities für Cookie Consent Persistierung
 * SSR-safe mit Try-Catch Error Handling
 */

import { CookieConsent } from './types';

/**
 * localStorage Key für Cookie Consent
 */
const STORAGE_KEY = 'vendori_cookie_consent';

/**
 * Aktuelle Consent-Version
 * Erhöhen wenn sich Cookie-Richtlinien ändern um Re-Consent zu erzwingen
 */
export const CURRENT_CONSENT_VERSION = 1;

/**
 * Consent-Ablaufdauer in Millisekunden (12 Monate)
 * Nach DSGVO sollte Consent regelmäßig erneuert werden
 */
export const CONSENT_EXPIRY_MS = 12 * 30 * 24 * 60 * 60 * 1000; // 12 Monate

/**
 * Default Consent State (Privacy-First)
 * Nur notwendige Cookies sind standardmäßig aktiviert
 */
export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: CURRENT_CONSENT_VERSION,
};

/**
 * Liest Consent aus localStorage
 *
 * @returns CookieConsent oder null wenn nicht vorhanden/invalid
 */
export function getConsent(): CookieConsent | null {
  // SSR-Safety: Check if window exists
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as CookieConsent;

    // Validate structure
    if (
      typeof parsed.necessary !== 'boolean' ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.marketing !== 'boolean' ||
      typeof parsed.timestamp !== 'number' ||
      typeof parsed.version !== 'number'
    ) {
      // Only log in development to prevent information disclosure
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Cookie Consent] Invalid consent structure in localStorage');
      }
      return null;
    }

    return parsed;
  } catch (error) {
    // Only log in development to prevent information disclosure
    if (process.env.NODE_ENV === 'development') {
      console.error('[Cookie Consent] Error reading consent from localStorage:', error);
    }
    return null;
  }
}

/**
 * Speichert Consent in localStorage
 *
 * @param consent - Cookie Consent State
 */
export function setConsent(consent: CookieConsent): void {
  // SSR-Safety: Check if window exists
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const serialized = JSON.stringify(consent);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    // Only log in development to prevent information disclosure
    if (process.env.NODE_ENV === 'development') {
      console.error('[Cookie Consent] Error saving consent to localStorage:', error);
    }
  }
}

/**
 * Prüft ob Consent bereits gespeichert ist
 *
 * @returns true wenn Consent vorhanden, false sonst
 */
export function hasConsentRecord(): boolean {
  return getConsent() !== null;
}

/**
 * Löscht Consent aus localStorage
 * Nützlich für Testing oder Reset
 */
export function clearConsent(): void {
  // SSR-Safety: Check if window exists
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Only log in development to prevent information disclosure
    if (process.env.NODE_ENV === 'development') {
      console.error('[Cookie Consent] Error clearing consent from localStorage:', error);
    }
  }
}

/**
 * Prüft ob der Consent älter als 12 Monate ist
 * Nach DSGVO Art. 7 Abs. 3 sollte Consent regelmäßig erneuert werden
 *
 * @param consent - Cookie Consent State
 * @returns true wenn Consent abgelaufen, false sonst
 */
export function isConsentExpired(consent: CookieConsent): boolean {
  const now = Date.now();
  const age = now - consent.timestamp;
  return age > CONSENT_EXPIRY_MS;
}

/**
 * Prüft ob der Consent eine veraltete Version hat
 * Wird benötigt wenn sich Cookie-Richtlinien ändern
 *
 * @param consent - Cookie Consent State
 * @returns true wenn Version veraltet, false sonst
 */
export function isConsentVersionOutdated(consent: CookieConsent): boolean {
  return consent.version < CURRENT_CONSENT_VERSION;
}

/**
 * Prüft ob ein Re-Consent erforderlich ist
 * (wegen Ablauf ODER veralteter Version)
 *
 * @param consent - Cookie Consent State oder null
 * @returns true wenn Re-Consent erforderlich, false sonst
 */
export function needsReconsent(consent: CookieConsent | null): boolean {
  if (!consent) {
    return true; // Kein Consent vorhanden
  }

  return isConsentExpired(consent) || isConsentVersionOutdated(consent);
}
