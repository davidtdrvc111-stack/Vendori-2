/**
 * Cookie Toggle Component
 * Wiederverwendbare Toggle Switch für Cookie-Kategorien
 */

'use client';

import { CookieToggleProps } from './types';

export function CookieToggle({
  category: _category,
  label,
  description,
  mobileDescription,
  enabled,
  disabled = false,
  onChange,
}: CookieToggleProps) {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!enabled);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="py-3 md:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0">
      <div className="flex items-start justify-between gap-3 md:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-0.5 md:mb-1">
            {label}
          </h3>
          {/* Mobile: Kurzbeschreibung */}
          {mobileDescription && (
            <p className="md:hidden text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
              {mobileDescription}
            </p>
          )}
          {/* Desktop: Vollständige Beschreibung */}
          <p className={`text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-snug md:leading-normal ${mobileDescription ? 'hidden md:block' : ''}`}>
            {description}
          </p>
          {disabled && (
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5 md:mt-1 italic">Immer aktiv</p>
          )}
        </div>

        {/* Toggle Switch */}
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label={`${label} ${enabled ? 'aktiviert' : 'deaktiviert'}`}
          disabled={disabled}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={`
            relative inline-flex h-6 w-12 flex-shrink-0 rounded-full
            transition-colors duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            ${enabled ? 'bg-primary-600 dark:bg-primary-500' : 'bg-neutral-300 dark:bg-neutral-600'}
          `}
        >
          {/* Toggle Thumb */}
          <span
            className={`
              inline-block h-5 w-5 rounded-full bg-white dark:bg-neutral-100 shadow-lg
              transition-transform duration-200 ease-in-out
              transform
              ${enabled ? 'translate-x-6' : 'translate-x-0.5'}
            `}
            style={{ marginTop: '2px' }}
          />
        </button>
      </div>
    </div>
  );
}
