/**
 * Cookie Consent Module
 * Barrel exports for clean imports
 */

// Main Components
export { CookieBanner } from './CookieBanner';
export { CookieSettingsModal } from './CookieSettingsModal';
export { CookieToggle } from './CookieToggle';

// Hooks
export { useCookieConsent } from './useCookieConsent';

// Utilities
export { getConsent, setConsent, hasConsentRecord, clearConsent, DEFAULT_CONSENT } from './storage';

// Types
export type {
  CookieCategory,
  CookieConsent,
  CookieBannerProps,
  CookieSettingsModalProps,
  CookieToggleProps,
  CookieCategoryInfo,
  ConsentChangedEventDetail,
  ConsentChangedEvent,
} from './types';
