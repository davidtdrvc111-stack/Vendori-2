/**
 * Cookie Toggle Component
 * Schalter für eine Cookie-Kategorie (Gestaltung: src/styles/site.css)
 */

'use client';

import { CookieToggleProps } from './types';

export function CookieToggle({ category, label, description, enabled, disabled = false, onChange }: CookieToggleProps) {
  return (
    <div className="cookie-toggle">
      <div className="cookie-toggle__text">
        <h3 id={`cookie-toggle-label-${category}`} className="cookie-toggle__label">
          {label}
        </h3>
        <p className="small">{description}</p>
        {disabled && <p className="small cookie-toggle__always">Immer aktiv</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-labelledby={`cookie-toggle-label-${category}`}
        disabled={disabled}
        onClick={() => !disabled && onChange(!enabled)}
        className="switch"
      >
        <span className="switch__thumb" />
      </button>
    </div>
  );
}
