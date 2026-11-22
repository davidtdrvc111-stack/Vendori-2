// Automatisch erzeugt aus dem freigegebenen Prototyp "index (1) 1.html" (Stand 22.11.2026).
// Texte und Markup 1:1 übernommen. Änderungen am Inhalt bitte direkt hier vornehmen.
import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

const DESCRIPTION =
  'Wir verkaufen selbst online: in eigenen Shops, mit einer eigenen Produktmarke und auf internationalen Marktplätzen. Was dort funktioniert, setzen wir für Hersteller und Marken um.';

export const metadata: Metadata = {
  title: 'Über uns',
  description: DESCRIPTION,
  alternates: { canonical: 'https://vendori.eu/ueber-uns' },
  openGraph: { title: 'Über uns | VENDORi GmbH', description: DESCRIPTION, url: 'https://vendori.eu/ueber-uns' },
};

export default async function AboutPage() {
  return (
    <>
      {await BreadcrumbJsonLd({ items: [{ name: 'Über uns', url: 'https://vendori.eu/ueber-uns' }] })}
      <section className="page-hero page-hero--about" aria-labelledby="ueber-uns-title">
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
                  Über uns
                </span>
              </li>
            </ol>
          </nav>
          <div className="page-hero__inner">
            <p className="eyebrow">
              Über uns
            </p>
            <h1 id="ueber-uns-title" className="h1">
              Aus Sellern wurden Partner.
            </h1>
            <p className="lead">
              Wir verkaufen selbst online: in eigenen Shops, mit einer eigenen Produktmarke und auf internationalen Marktplätzen. Was dort funktioniert, setzen wir für Hersteller und Marken um.
            </p>
          </div>
          <div className="story">
            <dl className="proof__list story__facts" aria-label="Kennzahlen">
              <div className="proof__item">
                <span className="proof__icon" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-users" />
                  </svg>
                </span>
                <dt className="proof__label">
                  Kunden
                  <span className="proof__more">
                    {' '}in eigenen Onlineshops
                  </span>
                </dt>
                <dd className="proof__value">
                  1,5 Mio.
                  <span>
                    +
                  </span>
                </dd>
              </div>
              <div className="proof__item">
                <span className="proof__icon" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-globe" />
                  </svg>
                </span>
                <dt className="proof__label">
                  Länder beliefert
                </dt>
                <dd className="proof__value">
                  20
                  <span>
                    +
                  </span>
                </dd>
              </div>
              <div className="proof__item">
                <span className="proof__icon" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-calendar" />
                  </svg>
                </span>
                <dt className="proof__label">
                  Jahre{' '}
                  <span className="proof__more">
                    E-Commerce-
                  </span>
                  Erfahrung
                </dt>
                <dd className="proof__value">
                  22
                  <span>
                    +
                  </span>
                </dd>
              </div>
            </dl>
            <div className="story__text">
              <p>
                Wir sind kein Berater von außen: Shop-Technologie, Produktdaten, Marktplätze und Kundenservice gehören bei uns zum eigenen Tagesgeschäft. Deshalb wissen wir, woran Online-Vertrieb im Alltag hängt und was ihn voranbringt.
              </p>
              <p>
                Dieses Wissen bringen wir in jede Zusammenarbeit ein.{' '}
                <strong>
                  Was wir empfehlen, kennen wir aus dem eigenen Betrieb.
                </strong>
              </p>
              <p>
                Hinter VENDORi steht Geschäftsführer Dejan Todorovic, seit 2002 im{' '}
                <span className="nowrap">
                  E-Commerce
                </span>
                {' '}tätig. 2023 wurde die VENDORi GmbH in Waldbrunn gegründet, um diese Erfahrung Herstellern und Marken zugänglich zu machen.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Praxis */}
      <section className="section section--surface" aria-labelledby="practice-title">
        <div className="container practice">
          <p className="eyebrow practice__eyebrow">
            Unsere Shops &amp; Marken
          </p>
          <div>
            <h2 id="practice-title" className="h2">
              Hier verkaufen wir selbst.
            </h2>
            <p className="lead">
              Mit diesen Shops sind wir täglich selbst im Markt: als internationaler Onlinehändler, als Markeninhaber und als Shopbetreiber für ein Herstellerprodukt.
            </p>
          </div>
          <ul className="practice__shops">
            <li>
              <a className="shopline" href="https://www.mytoolstore.de/" target="_blank" rel="noopener">
                <span className="shopline__logo shopline__logo--mts">
                  <img src="/images/logo-mytoolstore.png" width="923" height="308" alt="myToolStore" />
                </span>
                <span>
                  <span className="shopline__type">
                    Internationaler Onlinehandel
                  </span>
                  <span className="shopline__text">
                    Eigene Onlineshops in fünf europäischen Märkten.
                  </span>
                </span>
                <svg className="icon shopline__go" aria-hidden="true">
                  <use href="#i-external" />
                </svg>
                <span className="sr-only">
                  (öffnet in neuem Tab)
                </span>
              </a>
            </li>
            <li>
              <a className="shopline" href="https://www.showernizr.com/" target="_blank" rel="noopener">
                <span className="shopline__logo shopline__logo--snz">
                  <img src="/images/logo-showernizr.svg" width="683" height="293" alt="ShowerNIZR®" />
                </span>
                <span>
                  <span className="shopline__type">
                    Eigene Produktmarke
                  </span>
                  <span className="shopline__text">
                    Duschregale für Glasduschwände, ohne Bohren oder Kleben.
                  </span>
                </span>
                <svg className="icon shopline__go" aria-hidden="true">
                  <use href="#i-external" />
                </svg>
                <span className="sr-only">
                  (öffnet in neuem Tab)
                </span>
              </a>
            </li>
            <li>
              <a className="shopline" href="https://www.yournova.eu/" target="_blank" rel="noopener">
                <span className="shopline__logo shopline__logo--nova">
                  <img src="/images/logo-yournova.png" width="261" height="61" alt="yourNOVA" />
                </span>
                <span>
                  <span className="shopline__type">
                    Spezialisierter Produktshop
                  </span>
                  <span className="shopline__text">
                    Onlineshop für den Küchenkomposter Nova.
                  </span>
                </span>
                <svg className="icon shopline__go" aria-hidden="true">
                  <use href="#i-external" />
                </svg>
                <span className="sr-only">
                  (öffnet in neuem Tab)
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Werte */}
      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              Arbeitsweise
            </p>
            <h2 id="values-title" className="h2">
              Wie wir arbeiten
            </h2>
          </div>
          <ul className="values">
            <li className="value">
              <span className="value__num" aria-hidden="true">
                01
              </span>
              <h3 className="value__title">
                Tempo
              </h3>
              <p>
                Wir starten zügig, testen früh und verbessern laufend. Im{' '}
                <span className="nowrap">
                  E-Commerce
                </span>
                {' '}entscheiden Wochen, nicht Quartale.
              </p>
            </li>
            <li className="value">
              <span className="value__num" aria-hidden="true">
                02
              </span>
              <h3 className="value__title">
                Messbare Ergebnisse
              </h3>
              <p>
                Wir richten uns nach Kennzahlen wie Umsatz, Deckungsbeitrag und Conversion. Was nicht wirkt, ändern wir.
              </p>
            </li>
            <li className="value">
              <span className="value__num" aria-hidden="true">
                03
              </span>
              <h3 className="value__title">
                Offene Partnerschaft
              </h3>
              <p>
                Wir denken in Ihrem Geschäft mit und sagen klar, was funktioniert und was nicht. Ihr Erfolg ist die Grundlage unserer Zusammenarbeit.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
