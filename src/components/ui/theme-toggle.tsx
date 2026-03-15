'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  darkText?: boolean;
}

export function ThemeToggle({ darkText = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11" aria-hidden="true" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative inline-flex h-11 w-11 items-center justify-center
        rounded-lg
        ${darkText
          ? 'text-neutral-700 hover:bg-neutral-100 dark:text-white dark:hover:bg-white/10'
          : 'text-white hover:bg-white/10'
        }
        transition-colors
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
      `}
      aria-label={isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
    </button>
  );
}
