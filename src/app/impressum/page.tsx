// Automatisch erzeugt aus dem freigegebenen Prototyp "index (1) 1.html" (Stand 22.11.2026).
// Texte und Markup 1:1 übernommen. Änderungen am Inhalt bitte direkt hier vornehmen.
import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ScrollSpy } from '@/components/site/ScrollSpy';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Angaben gemäß § 5 DDG und rechtliche Informationen zur VENDORi GmbH.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vendori.eu/impressum' },
};

export default async function Page() {
  return (
    <>
      {await BreadcrumbJsonLd({ items: [{ name: 'Impressum', url: 'https://vendori.eu/impressum' }] })}
      <ScrollSpy />
      <section className="page-hero" aria-labelledby="impressum-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Brotkrümelnavigation">
            <ol>
              <li>
                <Link href="/">
                  Start
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Impressum
                </span>
              </li>
            </ol>
          </nav>
          <div className="page-hero__inner">
            <p className="eyebrow">
              Rechtliches
            </p>
            <h1 id="impressum-title" className="h1">
              Impressum
            </h1>
            <p className="lead">
              Angaben gemäß § 5 DDG und rechtliche Informationen zur VENDORi GmbH.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-label="Angaben zum Anbieter">
        <div className="container">
          <div className="facts">
            <section className="fact" aria-labelledby="f-anbieter">
              <h2 id="f-anbieter" className="fact__k">
                Angaben gemäß § 5 DDG
              </h2>
              <address>
                <strong>
                  VENDORi GmbH
                </strong>
                <span>
                  Hahnenfeldstr. 25
                </span>
                <span>
                  69429 Waldbrunn
                </span>
                <span>
                  Deutschland
                </span>
              </address>
            </section>
            <section className="fact" aria-labelledby="f-kontakt">
              <h2 id="f-kontakt" className="fact__k">
                Kontakt
              </h2>
              <dl className="kv">
                <dt>
                  Telefon
                </dt>
                <dd>
                  <a href="tel:+4962749278157">
                    +49 (0) 6274 9278157
                  </a>
                </dd>
                <dt>
                  E-Mail
                </dt>
                <dd>
                  <a href="mailto:info@vendori.eu">
                    info@vendori.eu
                  </a>
                </dd>
                <dt>
                  Internet
                </dt>
                <dd>
                  <Link href="/">
                    vendori.eu
                  </Link>
                </dd>
                <dt>
                  Öffnungszeiten
                </dt>
                <dd>
                  Montag bis Freitag, 8:00 bis 17:00 Uhr
                </dd>
              </dl>
            </section>
            <section className="fact" aria-labelledby="f-vertreten">
              <h2 id="f-vertreten" className="fact__k">
                Vertreten durch
              </h2>
              <p>
                Dejan Todorovic (Geschäftsführer)
              </p>
            </section>
            <section className="fact" aria-labelledby="f-register">
              <h2 id="f-register" className="fact__k">
                Registereintrag
              </h2>
              <dl className="kv">
                <dt>
                  Eintragung
                </dt>
                <dd>
                  Handelsregister
                </dd>
                <dt>
                  Registergericht
                </dt>
                <dd>
                  Amtsgericht Mannheim
                </dd>
                <dt>
                  Registernummer
                </dt>
                <dd>
                  HRB 749014
                </dd>
              </dl>
            </section>
            <section className="fact" aria-labelledby="f-steuer">
              <h2 id="f-steuer" className="fact__k">
                Umsatzsteuer
              </h2>
              <dl className="kv">
                <dt>
                  USt-IdNr. gemäß § 27 a UStG
                </dt>
                <dd>
                  DE364269226
                </dd>
                <dt>
                  Steuernummer
                </dt>
                <dd>
                  40099/57152
                </dd>
              </dl>
            </section>
            <section className="fact" aria-labelledby="f-retoure">
              <h2 id="f-retoure" className="fact__k">
                Retouren-Adresse
              </h2>
              <address>
                <strong>
                  VENDORi GmbH
                </strong>
                <span>
                  Hahnenfeldstr. 25
                </span>
                <span>
                  69429 Waldbrunn
                </span>
              </address>
            </section>
            <section className="fact fact--wide" aria-labelledby="f-streit">
              <h2 id="f-streit" className="fact__k">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
          <div className="closing" style={{ marginTop: 'var(--space-12)' }}>
            <div className="closing__text">
              <h2 className="closing__title">
                Noch Fragen zum Impressum?
              </h2>
              <p>
                Kontaktieren Sie uns jederzeit für weitere Informationen.
              </p>
            </div>
            <div className="closing__actions">
              <Link className="btn btn--primary btn--sm" href="/#contact">
                Kontakt aufnehmen
              </Link>
              <a className="link" href="mailto:info@vendori.eu">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-mail" />
                </svg>
                info@vendori.eu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
