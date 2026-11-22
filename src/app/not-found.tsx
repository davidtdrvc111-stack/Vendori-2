import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
  robots: { index: false, follow: false },
};

// 404-Seite im Stil der Unterseiten (Seitenkopf aus dem Prototyp)
export default function NotFound() {
  return (
    <section className="page-hero" aria-labelledby="notfound-title">
      <div className="container">
        <div className="page-hero__inner">
          <p className="eyebrow">Fehler 404</p>
          <h1 id="notfound-title" className="h1">
            Seite nicht gefunden
          </h1>
          <p className="lead">
            Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück oder nutzen
            Sie die Navigation.
          </p>
          <div className="error-page__actions">
            <Link className="btn btn--primary" href="/">
              Zur Startseite
            </Link>
            <Link className="btn btn--secondary" href="/#contact">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
