/**
 * Cookie Consent Hook
 * Custom React Hook für Cookie Consent State Management
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { CookieConsent, CookieCategory, ConsentChangedEventDetail } from './types';
import { getConsent, setConsent, hasConsentRecord, DEFAULT_CONSENT } from './storage';

/**
 * Custom Hook für Cookie Consent Management
 *
 * @returns Object mit Consent State und Helper Functions
 */
export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsent | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize consent from localStorage on mount
  useEffect(() => {
    const stored = getConsent();
    if (stored) {
      setConsentState(stored);
    }
    setIsInitialized(true);
  }, []);

  /**
   * Emit custom event when consent changes
   * Allows external scripts to react to consent changes
   */
  const emitConsentChangedEvent = useCallback((newConsent: CookieConsent) => {
    if (typeof window === 'undefined') return;

    const detail: ConsentChangedEventDetail = { consent: newConsent };
    const event = new CustomEvent('consentChanged', { detail });
    window.dispatchEvent(event);
  }, []);

  /**
   * Update consent and save to localStorage
   */
  const updateConsent = useCallback(
    (newConsent: CookieConsent) => {
      setConsentState(newConsent);
      setConsent(newConsent);
      emitConsentChangedEvent(newConsent);
    },
    [emitConsentChangedEvent]
  );

  /**
   * Accept all cookies
   */
  const acceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
      version: 1,
    };
    updateConsent(newConsent);
  }, [updateConsent]);

  /**
   * Accept only necessary cookies
   */
  const acceptNecessary = useCallback(() => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
      version: 1,
    };
    updateConsent(newConsent);
  }, [updateConsent]);

  /**
   * Update specific cookie category
   */
  const updateCategory = useCallback(
    (category: CookieCategory, enabled: boolean) => {
      if (!consent) return;

      const newConsent: CookieConsent = {
        ...consent,
        [category]: enabled,
        timestamp: Date.now(),
      };
      updateConsent(newConsent);
    },
    [consent, updateConsent]
  );

  /**
   * Save custom consent preferences
   */
  const savePreferences = useCallback(
    (preferences: Partial<Pick<CookieConsent, 'analytics' | 'marketing'>>) => {
      const newConsent: CookieConsent = {
        necessary: true, // Always true
        analytics: preferences.analytics ?? false,
        marketing: preferences.marketing ?? false,
        timestamp: Date.now(),
        version: 1,
      };
      updateConsent(newConsent);
    },
    [updateConsent]
  );

  /**
   * Check if user has given consent (any consent record exists)
   */
  const hasConsent = useCallback(() => {
    return hasConsentRecord();
  }, []);

  /**
   * Check if analytics consent is given
   */
  const hasAnalyticsConsent = useCallback(() => {
    return consent?.analytics ?? false;
  }, [consent]);

  /**
   * Check if marketing consent is given
   */
  const hasMarketingConsent = useCallback(() => {
    return consent?.marketing ?? false;
  }, [consent]);

  /**
   * Check if this is the first visit (no consent record)
   */
  const isFirstVisit = useCallback(() => {
    return !hasConsentRecord();
  }, []);

  return {
    consent,
    isInitialized,
    acceptAll,
    acceptNecessary,
    updateCategory,
    savePreferences,
    hasConsent,
    hasAnalyticsConsent,
    hasMarketingConsent,
    isFirstVisit,
  };
}
