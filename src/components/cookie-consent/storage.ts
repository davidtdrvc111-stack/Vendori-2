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
 * Default Consent State (Privacy-First)
 * Nur notwendige Cookies sind standardmäßig aktiviert
 */
export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: 1,
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
      console.warn('[Cookie Consent] Invalid consent structure in localStorage');
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('[Cookie Consent] Error reading consent from localStorage:', error);
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
    console.error('[Cookie Consent] Error saving consent to localStorage:', error);
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
    console.error('[Cookie Consent] Error clearing consent from localStorage:', error);
  }
}
