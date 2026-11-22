// Automatisch erzeugt aus dem freigegebenen Prototyp "index (1) 1.html" (Stand 22.11.2026).
// Texte und Markup 1:1 übernommen. Änderungen am Inhalt bitte direkt hier vornehmen.
import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateCSRFToken } from '@/lib/csrf/token';
import { Showcase } from '@/components/site/Showcase';
import { CasesCarousel } from '@/components/site/CasesCarousel';
import { ContactForm } from '@/components/site/ContactForm';

const TITLE = 'VENDORi GmbH | E-Commerce-Partner für Hersteller und Marken';
const DESCRIPTION =
  'VENDORi betreibt eigene Onlineshops, entwickelt Eigenmarken und unterstützt Hersteller und Marken beim digitalen Vertrieb.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://vendori.eu' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://vendori.eu', type: 'website' },
};

// FAQPage-Schema der Startseite: wortgleich mit dem Prototyp
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was macht VENDORi anders als andere E-Commerce-Agenturen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi verbindet operative E-Commerce-Erfahrung mit Dienstleistungen für Hersteller und Marken. Wir betreiben mit myToolStore einen internationalen Onlineshop, entwickeln mit ShowerNIZR® eine eigene Produktmarke und führen mit yourNOVA einen spezialisierten Shop für den Küchenkomposter Nova. Diese praktische Erfahrung nutzen wir für die Entwicklung, Umsetzung und Optimierung von E-Commerce-Strategien, von Shop-Technologie und Produktdaten bis zum internationalen Vertrieb und Kundenservice."
      }
    },
    {
      "@type": "Question",
      "name": "Welche E-Commerce-Leistungen bietet VENDORi an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir übernehmen den Online-Vertrieb für Hersteller und Marken in drei Bereichen: • Shops & Technologie: Shop-Technologie, Produktdaten und Produktpräsentation • Marktplätze & Internationalisierung: Amazon und weitere Marktplätze, Übersetzungen und lokalisierte Inhalte • Laufender E-Commerce-Betrieb: Kundenservice, Selling-Bilder und Prozessoptimierung"
      }
    },
    {
      "@type": "Question",
      "name": "Für welche Unternehmen ist VENDORi der richtige Partner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi ist spezialisiert auf Hersteller und Marken, die ihren E-Commerce-Umsatz entwickeln oder skalieren möchten, ohne selbst als Verkäufer auftreten zu müssen. Wir arbeiten über drei Kanäle: unsere eigenen Shops, Ihre D2C-Plattformen oder internationale Marktplätze wie Amazon. Besonders geeignet für Mittelstand und wachsende Marken im DIY-, Werkzeug- und Gartensektor."
      }
    },
    {
      "@type": "Question",
      "name": "Auf welchen Marktplätzen ist VENDORi aktiv?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi vertreibt auf 10+ führenden EU-Marktplätzen: • Amazon, eBay, Kaufland, Otto, ManoMano • XXXLutz, Cdiscount, Leroy Merlin, Rue de Commerce • Praxis, Brico und weitere regionale Plattformen Zusätzlich betreiben wir eigene D2C-Shops, die direkt in 20+ europäische Länder liefern."
      }
    },
    {
      "@type": "Question",
      "name": "In welchen Märkten ist VENDORi tätig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi ist in 20+ europäischen Ländern aktiv: Deutschland, Frankreich, Niederlande, Österreich, Spanien, Italien, Belgien und weitere EU-Märkte. Unsere eigenen Shops beliefern Kunden europaweit über D2C-Kanäle und internationale Marktplätze mit vollständiger Steuer-Compliance (OSS-Verfahren)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie schnell kann ich mit VENDORi starten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Start erfolgt innerhalb von 2–3 Wochen nach dem Erstgespräch, ohne monatelange Strategiephasen. • Erste Tests starten in Woche 1–2 nach Beauftragung • Erste Daten und Kennzahlen nach 4–8 Wochen verfügbar • Wir arbeiten agil mit schnellen Iterationen"
      }
    }
  ]
};

export default async function Home() {
  const nonce = (await headers()).get('x-nonce') || '';
  const csrfToken = generateCSRFToken();

  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <h1 id="hero-title" className="display">
            Ihr Produkt.
            <br />
            {' '}Unser{' '}
            <span className="nowrap">
              E-Commerce
            </span>
            .
          </h1>
          <Showcase />
          <p className="lead">
            Was in unseren eigenen Shops funktioniert, setzen wir für Ihre Marke um. Von der{' '}
            <span className="nowrap">
              Shop-Technologie
            </span>
            {' '}bis zum internationalen Vertrieb.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/#contact">
              Erstgespräch vereinbaren{' '}
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
            <Link className="btn btn--secondary" href="/#services">
              Unsere Services
            </Link>
          </div>
          <div className="hero__facts">
            <p className="hero__facts-label">
              Auch auf führenden Marktplätzen aktiv
              <span className="only-mobile">
                , u.&nbsp;a.
              </span>
              :
            </p>
            <ul className="platforms" aria-label="Marktplätze, über die wir verkaufen">
              <li>
                <picture>
                  <source type="image/avif" srcSet="/images/marketplace-amazon.avif" />
                  <img className="platform platform--amazon" src="/images/marketplace-amazon.svg" alt="Amazon" />
                </picture>
              </li>
              <li>
                <picture>
                  <source type="image/avif" srcSet="/images/marketplace-ebay.avif" />
                  <img className="platform platform--ebay" src="/images/marketplace-ebay.svg" alt="eBay" />
                </picture>
              </li>
              <li>
                <picture>
                  <source type="image/avif" srcSet="/images/marketplace-kaufland.avif" />
                  <img className="platform platform--kaufland" src="/images/marketplace-kaufland.svg" alt="Kaufland" />
                </picture>
              </li>
              <li className="platforms__more">
                und viele weitere
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="proof" aria-label="Kennzahlen">
        <div className="container">
          <dl className="proof__list">
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
        </div>
      </section>

      <section className="section section--surface" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              Services
            </p>
            <h2 id="services-title" className="h2">
              Sie haben das Produkt. Wir kümmern uns um den Online-Vertrieb.
            </h2>
            <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
              Von der technischen Umsetzung bis zum täglichen Geschäft.
            </p>
          </div>
          <ul className="offers">
            <li className="offer ">
              <div className="offer__head">
                <span className="offer__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-monitor" />
                  </svg>
                </span>
                <h3 className="offer__title">
                  Shops &amp; Technologie
                </h3>
              </div>
              <p className="offer__desc">
                Wir schaffen die technische Grundlage für einen professionellen Online-Auftritt, der mit Ihrem Unternehmen wachsen kann.
              </p>
              <ul className="checklist offer__list">
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span className="nowrap">
                    Shop-Technologie
                  </span>
                </li>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Produktdaten
                </li>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Produktpräsentation
                </li>
              </ul>
            </li>
            <li className="offer ">
              <div className="offer__head">
                <span className="offer__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-globe" />
                  </svg>
                </span>
                <h3 className="offer__title">
                  Marktplätze &amp; Internationalisierung
                </h3>
              </div>
              <p className="offer__desc">
                Wir bringen Ihre Produkte dorthin, wo Ihre Kunden kaufen. Auch über Ländergrenzen hinweg.
              </p>
              <ul className="checklist offer__list">
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Amazon &amp; weitere Marktplätze
                </li>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Übersetzungen
                </li>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Lokalisierte Inhalte
                </li>
              </ul>
            </li>
            <li className="offer offer--wide">
              <div className="offer__head">
                <span className="offer__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-cycle" />
                  </svg>
                </span>
                <h3 className="offer__title">
                  Laufender{' '}
                  <span className="nowrap">
                    E-Commerce
                  </span>
                  -Betrieb
                </h3>
              </div>
              <p className="offer__desc">
                Wir übernehmen das Tagesgeschäft, damit Sie sich auf Ihre Produkte und Ihr Kerngeschäft konzentrieren können.
              </p>
              <ul className="checklist offer__list">
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Kundenservice
                </li>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Selling-Bilder
                </li>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Prozessoptimierung
                </li>
              </ul>
            </li>
          </ul>
          <div className="services__cta">
            <Link className="btn btn--primary" href="/#contact">
              Erstgespräch vereinbaren{' '}
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="shops" aria-labelledby="shops-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              Unsere Shops &amp; Marken
            </p>
            <h2 id="shops-title" className="h2">
              <span className="nowrap">
                E-Commerce
              </span>
              , den wir selbst umsetzen.
            </h2>
            <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
              Wir betreiben eigene Onlineshops, entwickeln Eigenmarken und führen spezialisierte Produktshops. Unsere Projekte zeigen, wie wir{' '}
              <span className="nowrap">
                E-Commerce
              </span>
              {' '}im Alltag umsetzen: von der Produktpräsentation über die technische Infrastruktur bis zum internationalen{' '}
              <span className="nowrap">
                Online-Vertrieb
              </span>
              .
            </p>
          </div>
          <CasesCarousel>
            <article className="case">
              <figure className="case__media">
                <div className="browser">
                  <div className="browser__bar" aria-hidden="true">
                    <span className="browser__dots">
                    </span>
                    <span className="browser__url">
                      mytoolstore.de
                    </span>
                  </div>
                  <picture>
                    <source type="image/avif" srcSet="/images/shop-mytoolstore-720.avif 720w, /images/shop-mytoolstore-1440.avif 1440w" sizes="(min-width: 960px) 600px, calc(100vw - 40px)" />
                    <img src="/images/shop-mytoolstore.jpg" width="1440" height="900" alt="Startseite von myToolStore" loading="lazy" />
                  </picture>
                </div>
              </figure>
              <div className="case__body">
                <p className="case__type">
                  Internationaler Onlinehandel
                </p>
                <h3 className="case__title">
                  <picture>
                    <source type="image/avif" srcSet="/images/logo-mytoolstore.avif" />
                    <img className="case__logo case__logo--mts" src="/images/logo-mytoolstore.png" width="923" height="308" alt="myToolStore" />
                  </picture>
                </h3>
                <p className="case__text">
                  Mit myToolStore betreiben wir eigene Onlineshops in fünf europäischen Märkten. Von der technischen Infrastruktur bis zum internationalen Online-Vertrieb.
                </p>
                <ul className="case__facts" aria-label="Kennzahlen">
                  <li className="tag">
                    2,5 Mio.+ Bestellungen
                  </li>
                  <li className="tag">
                    5 Ländershops
                  </li>
                </ul>
                <a className="link" href="https://www.mytoolstore.de/" target="_blank" rel="noopener">
                  mytoolstore.de{' '}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-external" />
                  </svg>
                  <span className="sr-only">
                    (öffnet in neuem Tab)
                  </span>
                </a>
              </div>
            </article>
            <article className="case">
              <figure className="case__media">
                <div className="browser">
                  <div className="browser__bar" aria-hidden="true">
                    <span className="browser__dots">
                    </span>
                    <span className="browser__url">
                      showernizr.com
                    </span>
                  </div>
                  <picture>
                    <source type="image/avif" srcSet="/images/shop-showernizr-720.avif 720w, /images/shop-showernizr-1440.avif 1440w" sizes="(min-width: 960px) 600px, calc(100vw - 40px)" />
                    <img src="/images/shop-showernizr.jpg" width="1440" height="900" alt="Startseite von ShowerNIZR®" loading="lazy" />
                  </picture>
                </div>
              </figure>
              <div className="case__body">
                <p className="case__type">
                  Eigene Produktmarke
                </p>
                <h3 className="case__title">
                  <img className="case__logo case__logo--snz" src="/images/logo-showernizr.svg" width="683" height="293" alt="ShowerNIZR®" />
                </h3>
                <p className="case__text">
                  Mit ShowerNIZR® entwickeln und vermarkten wir eine eigene Produktmarke. Vom Markenaufbau über den mehrsprachigen Onlineshop bis zum direkten Verkauf an Endkunden.
                </p>
                <ul className="case__facts" aria-label="Schwerpunkte">
                  <li className="tag">
                    Markenaufbau
                  </li>
                  <li className="tag">
                    Direct-to-Consumer
                  </li>
                </ul>
                <a className="link" href="https://www.showernizr.com/" target="_blank" rel="noopener">
                  showernizr.com{' '}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-external" />
                  </svg>
                  <span className="sr-only">
                    (öffnet in neuem Tab)
                  </span>
                </a>
              </div>
            </article>
            <article className="case">
              <figure className="case__media">
                <div className="browser">
                  <div className="browser__bar" aria-hidden="true">
                    <span className="browser__dots">
                    </span>
                    <span className="browser__url">
                      yournova.eu
                    </span>
                  </div>
                  <picture>
                    <source type="image/avif" srcSet="/images/shop-yournova-720.avif 720w, /images/shop-yournova-1440.avif 1440w" sizes="(min-width: 960px) 600px, calc(100vw - 40px)" />
                    <img src="/images/shop-yournova.jpg" width="1440" height="900" alt="Startseite von yourNOVA" loading="lazy" />
                  </picture>
                </div>
              </figure>
              <div className="case__body">
                <p className="case__type">
                  Spezialisierter Produktshop
                </p>
                <h3 className="case__title">
                  <picture>
                    <source type="image/avif" srcSet="/images/logo-yournova.avif" />
                    <img className="case__logo case__logo--nova" src="/images/logo-yournova.png" width="261" height="61" alt="yourNOVA" />
                  </picture>
                </h3>
                <p className="case__text">
                  Mit yourNOVA.eu betreiben wir den mehrsprachigen Onlineshop für den Küchenkomposter Nova. Von der Produktpräsentation bis zum direkten Online-Vertrieb.
                </p>
                <ul className="case__facts" aria-label="Schwerpunkte">
                  <li className="tag">
                    Herstellerprodukt
                  </li>
                  <li className="tag">
                    Shopbetrieb
                  </li>
                </ul>
                <a className="link" href="https://www.yournova.eu/" target="_blank" rel="noopener">
                  yournova.eu{' '}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-external" />
                  </svg>
                  <span className="sr-only">
                    (öffnet in neuem Tab)
                  </span>
                </a>
              </div>
            </article>
          </CasesCarousel>
        </div>
      </section>

      <section className="section section--band" id="contact" aria-labelledby="contact-title">
        <div className="container contact">
          <div className="contact__intro">
            <p className="eyebrow">
              Kontakt
            </p>
            <h2 id="contact-title" className="h2">
              Lassen Sie uns sprechen
            </h2>
            <ol className="steps" aria-label="So läuft es ab">
              <li className="step">
                <span className="step__num" aria-hidden="true">
                  1
                </span>
                <span>
                  Sie schildern uns kurz Ihr Produkt und Ihr Ziel.
                </span>
              </li>
              <li className="step">
                <span className="step__num" aria-hidden="true">
                  2
                </span>
                <span>
                  Wir melden uns innerhalb von 24&nbsp;Stunden.
                </span>
              </li>
              <li className="step">
                <span className="step__num" aria-hidden="true">
                  3
                </span>
                <span>
                  Im Erstgespräch klären wir gemeinsam, ob eine Zusammenarbeit für beide Seiten passt.
                </span>
              </li>
            </ol>
          </div>
          <div className="contact__aside">
            <ul className="contact__lines" aria-label="Direkter Kontakt">
              <li>
                <a className="contact__line" href="tel:+4962749278157">
                  <span className="contact__icon" aria-hidden="true">
                    <svg className="icon">
                      <use href="#i-phone" />
                    </svg>
                  </span>
                  <span>
                    <span className="contact__k">
                      Telefon
                    </span>
                    +49 (0) 6274 9278157
                  </span>
                </a>
              </li>
              <li>
                <a className="contact__line" href="mailto:info@vendori.eu">
                  <span className="contact__icon" aria-hidden="true">
                    <svg className="icon">
                      <use href="#i-mail" />
                    </svg>
                  </span>
                  <span>
                    <span className="contact__k">
                      E-Mail
                    </span>
                    info@vendori.eu
                  </span>
                </a>
              </li>
              <li>
                <span className="contact__line">
                  <span className="contact__icon" aria-hidden="true">
                    <svg className="icon">
                      <use href="#i-clock" />
                    </svg>
                  </span>
                  <span>
                    <span className="contact__k">
                      Erreichbar
                    </span>
                    Mo–Fr 8:00–17:00 Uhr
                  </span>
                </span>
              </li>
            </ul>
            <p className="contact__more">
              <Link className="link" href="/ueber-uns">
                Mehr über uns{' '}
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </p>
          </div>
          <ContactForm csrfToken={csrfToken} />
        </div>
      </section>

      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container faq">
          <div className="faq__intro">
            <p className="eyebrow">
              FAQ
            </p>
            <h2 id="faq-title" className="h2">
              Häufig gestellte Fragen
            </h2>
            <p className="lead">
              Antworten zu E-Commerce-Betreuung, Marktplätzen und internationalem Online-Vertrieb für Hersteller und Marken.
            </p>
            <p className="faq__all">
              <Link className="link" href="/faq">
                Alle FAQs anzeigen{' '}
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </p>
          </div>
          <div className="faq__list">
            <details className="faq__item">
              <summary>
                <h3 className="faq__q">
                  Was macht VENDORi anders als andere E-Commerce-Agenturen?
                </h3>
                <span className="faq__toggle" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p>
                  VENDORi verbindet operative E-Commerce-Erfahrung mit Dienstleistungen für Hersteller und Marken. Wir betreiben mit{' '}
                  <strong>
                    myToolStore
                  </strong>
                  {' '}einen internationalen Onlineshop, entwickeln mit{' '}
                  <strong>
                    ShowerNIZR®
                  </strong>
                  {' '}eine eigene Produktmarke und führen mit{' '}
                  <strong>
                    yourNOVA
                  </strong>
                  {' '}einen spezialisierten Shop für den Küchenkomposter Nova.
                </p>
                <p>
                  Diese praktische Erfahrung nutzen wir für die Entwicklung, Umsetzung und Optimierung von E-Commerce-Strategien, von Shop-Technologie und Produktdaten bis zum internationalen Vertrieb und Kundenservice.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary>
                <h3 className="faq__q">
                  Welche E-Commerce-Leistungen bietet VENDORi an?
                </h3>
                <span className="faq__toggle" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p>
                  Wir übernehmen den Online-Vertrieb für Hersteller und Marken in drei Bereichen:
                </p>
                <ul className="checklist">
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      <strong>
                        Shops &amp; Technologie:
                      </strong>
                      {' '}Shop-Technologie, Produktdaten und Produktpräsentation
                    </span>
                  </li>
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      <strong>
                        Marktplätze &amp; Internationalisierung:
                      </strong>
                      {' '}Amazon und weitere Marktplätze, Übersetzungen und lokalisierte Inhalte
                    </span>
                  </li>
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      <strong>
                        Laufender E-Commerce-Betrieb:
                      </strong>
                      {' '}Kundenservice, Selling-Bilder und Prozessoptimierung
                    </span>
                  </li>
                </ul>
              </div>
            </details>
            <details className="faq__item">
              <summary>
                <h3 className="faq__q">
                  Für welche Unternehmen ist VENDORi der richtige Partner?
                </h3>
                <span className="faq__toggle" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p>
                  VENDORi ist spezialisiert auf{' '}
                  <strong>
                    Hersteller und Marken
                  </strong>
                  , die ihren E-Commerce-Umsatz entwickeln oder skalieren möchten, ohne selbst als Verkäufer auftreten zu müssen.
                </p>
                <p>
                  Wir arbeiten über drei Kanäle: unsere eigenen Shops, Ihre D2C-Plattformen oder internationale Marktplätze wie Amazon. Besonders geeignet für{' '}
                  <strong>
                    Mittelstand und wachsende Marken
                  </strong>
                  {' '}im DIY-, Werkzeug- und Gartensektor.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary>
                <h3 className="faq__q">
                  Auf welchen Marktplätzen ist VENDORi aktiv?
                </h3>
                <span className="faq__toggle" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p>
                  VENDORi vertreibt auf{' '}
                  <strong>
                    10+ führenden EU-Marktplätzen
                  </strong>
                  :
                </p>
                <ul className="checklist">
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      Amazon, eBay, Kaufland, Otto, ManoMano
                    </span>
                  </li>
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      XXXLutz, Cdiscount, Leroy Merlin, Rue de Commerce
                    </span>
                  </li>
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      Praxis, Brico und weitere regionale Plattformen
                    </span>
                  </li>
                </ul>
                <p>
                  Zusätzlich betreiben wir eigene D2C-Shops, die direkt in{' '}
                  <strong>
                    20+ europäische Länder
                  </strong>
                  {' '}liefern.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary>
                <h3 className="faq__q">
                  In welchen Märkten ist VENDORi tätig?
                </h3>
                <span className="faq__toggle" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p>
                  VENDORi ist in{' '}
                  <strong>
                    20+ europäischen Ländern
                  </strong>
                  {' '}aktiv: Deutschland, Frankreich, Niederlande, Österreich, Spanien, Italien, Belgien und weitere EU-Märkte.
                </p>
                <p>
                  Unsere eigenen Shops beliefern Kunden europaweit über D2C-Kanäle und internationale Marktplätze mit vollständiger Steuer-Compliance (OSS-Verfahren).
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary>
                <h3 className="faq__q">
                  Wie schnell kann ich mit VENDORi starten?
                </h3>
                <span className="faq__toggle" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p>
                  Der Start erfolgt innerhalb von{' '}
                  <strong>
                    2–3 Wochen
                  </strong>
                  {' '}nach dem Erstgespräch, ohne monatelange Strategiephasen.
                </p>
                <ul className="checklist">
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      Erste Tests starten in{' '}
                      <strong>
                        Woche 1–2
                      </strong>
                      {' '}nach Beauftragung
                    </span>
                  </li>
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      Erste Daten und Kennzahlen nach{' '}
                      <strong>
                        4–8 Wochen
                      </strong>
                      {' '}verfügbar
                    </span>
                  </li>
                  <li>
                    <svg className="icon" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>
                      Wir arbeiten agil mit{' '}
                      <strong>
                        schnellen Iterationen
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
            </details>
          </div>
          <div className="faq__ask">
            <h3 id="faq-ask-title" className="faq__ask-title">
              Ihre Frage ist nicht dabei?
            </h3>
            <p>
              Wir beantworten sie gern persönlich.
            </p>
            <div className="faq__ask-actions">
              <Link className="btn btn--primary btn--sm" href="/#contact">
                Erstgespräch vereinbaren
              </Link>
              <a className="link" href="tel:+4962749278157">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-phone" />
                </svg>
                +49 (0) 6274 9278157
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
