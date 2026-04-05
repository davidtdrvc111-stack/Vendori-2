/**
 * Cookie Consent Types
 * Definiert alle TypeScript-Interfaces und Typen für das Cookie Consent System
 */

/**
 * Cookie-Kategorien
 * - necessary: Immer aktiv, keine Deaktivierung möglich
 * - analytics: Optional, für Website-Optimierung
 * - marketing: Optional, für Werbung
 */
export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

/**
 * Cookie Consent State
 * Speichert die Zustimmung des Benutzers für jede Cookie-Kategorie
 */
export interface CookieConsent {
  necessary: boolean;    // Immer true (technisch erforderlich)
  analytics: boolean;    // Default: false (Privacy-First)
  marketing: boolean;    // Default: false (Privacy-First)
  timestamp: number;     // Unix timestamp (ms) wann Consent gegeben wurde
  version: number;       // Consent-Schema Version (für zukünftige Re-Prompts)
}

/**
 * Props für CookieBanner Component
 */
export interface CookieBannerProps {
  className?: string;
}

/**
 * Props für CookieSettingsModal Component
 */
export interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Props für CookieToggle Component
 */
export interface CookieToggleProps {
  category: CookieCategory;
  label: string;
  description: string;
  mobileDescription?: string;
  enabled: boolean;
  disabled?: boolean;
  onChange: (enabled: boolean) => void;
}

/**
 * Cookie-Kategorie Metadaten
 * Für UI-Darstellung der Kategorien
 */
export interface CookieCategoryInfo {
  id: CookieCategory;
  label: string;
  description: string;
  mobileDescription?: string;
  required: boolean;
}

/**
 * Custom Event Detail für consentChanged Event
 */
export interface ConsentChangedEventDetail {
  consent: CookieConsent;
}

/**
 * Custom Event für Consent-Änderungen
 * Erlaubt externen Scripts auf Consent-Änderungen zu reagieren
 */
export type ConsentChangedEvent = CustomEvent<ConsentChangedEventDetail>;
