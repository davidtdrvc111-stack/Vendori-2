/**
 * Cookie Toggle Component
 * Wiederverwendbare Toggle Switch für Cookie-Kategorien
 */

'use client';

import { CookieToggleProps } from './types';

export function CookieToggle({
  category,
  label,
  description,
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
    <div className="py-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
            {label}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{description}</p>
          {disabled && (
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 italic">Immer aktiv</p>
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
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            ${enabled ? 'bg-purple-600 dark:bg-purple-500' : 'bg-slate-300 dark:bg-slate-600'}
          `}
        >
          {/* Toggle Thumb */}
          <span
            className={`
              inline-block h-5 w-5 rounded-full bg-white dark:bg-slate-100 shadow-lg
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
