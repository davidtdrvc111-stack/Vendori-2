/**
 * Cookie Settings Link Component
 * Client-Komponente für Footer-Link zu Cookie-Einstellungen
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CookieSettingsModal } from './CookieSettingsModal';

interface CookieSettingsLinkProps {
  className?: string;
}

export function CookieSettingsLink({ className = '' }: CookieSettingsLinkProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsSettingsOpen(true)}
        className={cn(
          'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
          'rounded px-1 -mx-1',
          'transition-colors',
          className
        )}
        type="button"
      >
        Cookie-Einstellungen
      </button>
      <CookieSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
