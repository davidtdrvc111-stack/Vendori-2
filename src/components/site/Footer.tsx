'use client';

// Footer 1:1 aus dem Prototyp. Aktive Seite wird in der Navigation markiert (aria-current="page"),
// „Cookie-Einstellungen“ öffnet den bestehenden Einstellungsdialog.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CookieSettingsModal } from '@/components/cookie-consent/CookieSettingsModal';
import { LogoSvg } from './Logo';

const NAV = [
  { href: '/#services', label: 'Services' },
  { href: '/#shops', label: 'Shops & Marken' },
  { href: '/ueber-uns', label: 'Über uns', page: '/ueber-uns' },
  { href: '/#faq', label: 'FAQ', page: '/faq' },
  { href: '/#contact', label: 'Kontakt' },
];
const SHOPS = [
  { href: 'https://www.mytoolstore.de/', label: 'myToolStore' },
  { href: 'https://www.showernizr.com/', label: 'ShowerNIZR®' },
  { href: 'https://www.yournova.eu/', label: 'yourNOVA' },
];

function ExternalIcon() {
  return (
    <>
      {' '}
      <svg className="icon" aria-hidden="true">
        <use href="#i-external" />
      </svg>
      <span className="sr-only">(öffnet in neuem Tab)</span>
    </>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__cta">
          <p className="site-footer__cta-title">
            Ihr Produkt.
            <br className="only-mobile-br" /> Unser <span className="nowrap">E-Commerce</span>.
          </p>
          <div className="site-footer__cta-actions">
            <Link className="btn btn--primary" href="/#contact">
              Erstgespräch vereinbaren{' '}
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
            <a className="site-footer__phone" href="tel:+4962749278157">
              <svg className="icon" aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              +49 (0) 6274 9278157
            </a>
          </div>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link className="logo" href="/" aria-label="VENDORi, zum Seitenanfang">
              <LogoSvg />
            </Link>
            <p className="site-footer__claim">Was in unseren eigenen Shops funktioniert, setzen wir für Ihre Marke um.</p>
          </div>
          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav">Navigation</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={n.page && n.page === pathname ? 'page' : undefined}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-shops">
            <h2 id="footer-shops">Unsere Shops</h2>
            <ul>
              {SHOPS.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener">
                    {s.label}
                    <ExternalIcon />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Kontakt</h2>
            <address>
              <span className="site-footer__strong">VENDORi GmbH</span>
              <span>Hahnenfeldstr. 25</span>
              <span>69429 Waldbrunn, Deutschland</span>
              <a className="site-footer__gap" href="mailto:info@vendori.eu">
                info@vendori.eu
              </a>
              <a href="tel:+4962749278157">+49 (0) 6274 9278157</a>
              <span>Mo–Fr 8:00–17:00 Uhr</span>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 VENDORi GmbH. Alle Rechte vorbehalten.</p>
          <ul>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutzerklärung</Link>
            </li>
            <li>
              <Link href="/barrierefreiheit">Barrierefreiheit</Link>
            </li>
            <li>
              <button className="linklike" type="button" onClick={() => setCookieOpen(true)}>
                Cookie-Einstellungen
              </button>
            </li>
          </ul>
        </div>
      </div>
      <CookieSettingsModal isOpen={cookieOpen} onClose={() => setCookieOpen(false)} />
    </footer>
  );
}
