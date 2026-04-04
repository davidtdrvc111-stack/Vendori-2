import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden | VENDORi GmbH',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary-600/20 blur-3xl" />
            <h1 className="relative text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-600 to-primary-800 font-heading tracking-tighter">
              404
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-black text-white font-heading mb-6 tracking-tight">
          Seite nicht gefunden
        </h2>

        <p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed max-w-xl mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück oder nutzen Sie die Navigation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl shadow-primary-600/20 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 border border-neutral-700 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-12 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 mb-4 uppercase tracking-wider font-medium">
            Oder besuchen Sie
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/ueber-uns"
              className="text-neutral-400 hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              Über uns
            </Link>
            <Link
              href="/faq"
              className="text-neutral-400 hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/impressum"
              className="text-neutral-400 hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-neutral-400 hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
