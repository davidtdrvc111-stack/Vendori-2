'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-600/20 blur-2xl rounded-full" />
            <div className="relative w-24 h-24 rounded-full bg-neutral-800/50 border-2 border-primary-600/40 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-black text-white font-heading mb-6 tracking-tight">
          Ein Fehler ist aufgetreten
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed max-w-xl mx-auto">
          Entschuldigung, beim Laden der Seite ist etwas schiefgelaufen. Versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl shadow-primary-600/20 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Erneut versuchen
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 border border-neutral-700 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Zur Startseite
          </Link>
        </div>

        {/* Optional: Error ID for debugging */}
        {error.digest && (
          <p className="mt-12 text-sm text-neutral-600">
            Fehler-ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}