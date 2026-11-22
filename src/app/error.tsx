'use client';

import Link from 'next/link';
import { useEffect } from 'react';

// Fehlerseite im Stil der Unterseiten (Seitenkopf aus dem Prototyp)
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error);
    }
  }, [error]);

  return (
    <section className="page-hero" aria-labelledby="error-title">
      <div className="container">
        <div className="page-hero__inner">
          <p className="eyebrow">Fehler</p>
          <h1 id="error-title" className="h1">
            Ein Fehler ist aufgetreten
          </h1>
          <p className="lead">
            Entschuldigung, beim Laden der Seite ist etwas schiefgelaufen. Versuchen Sie es erneut oder kehren Sie zur
            Startseite zurück.
          </p>
          <div className="error-page__actions">
            <button type="button" className="btn btn--primary" onClick={reset}>
              Erneut versuchen
            </button>
            <Link className="btn btn--secondary" href="/">
              Zur Startseite
            </Link>
          </div>
          {error.digest && <p className="page-hero__meta">Fehler-ID: {error.digest}</p>}
        </div>
      </div>
    </section>
  );
}
