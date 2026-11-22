'use client';

// Header aus dem Prototyp (1:1): mobiles Menü als Panel von links, Schatten beim Scrollen,
// aktiver Abschnitt auf der Startseite (aria-current="location"), aktive Seite auf Unterseiten (aria-current="page").
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LogoSvg } from './Logo';

const NAV = [
  { href: '/#services', id: 'services', label: 'Services' },
  { href: '/#shops', id: 'shops', label: 'Shops & Marken' },
  { href: '/#contact', id: 'contact', label: 'Kontakt' }, // ergänzt 22.11.2026 (David): Markierung lief sonst bei Kontakt ins Leere
  { href: '/#faq', id: 'faq', label: 'FAQ' },
];
const SPY_IDS = ['services', 'shops', 'contact', 'faq'];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mounted, setMounted] = useState(false); // Drawer im DOM (hidden-Attribut)
  const [open, setOpen] = useState(false); // Drawer eingeblendet (Klasse menu-open)
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const setMenu = useCallback((next: boolean, returnFocus = false) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (next) {
      setMounted(true);
    } else {
      setOpen(false);
      document.documentElement.classList.remove('no-scroll');
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      closeTimer.current = setTimeout(() => setMounted(false), reduce ? 0 : 300);
      if (returnFocus) toggleRef.current?.focus();
    }
  }, []);

  // Öffnen: erst sichtbar machen (hidden entfernen), Startzustand rendern, dann hereingleiten lassen
  useEffect(() => {
    if (!mounted || open) return;
    if (!drawerRef.current || drawerRef.current.hidden) return;
    void drawerRef.current.offsetWidth;
    setOpen(true);
    document.documentElement.classList.add('no-scroll');
    closeRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // Tastatur: Escape schließt, Tab bleibt im Panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(false, true);
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const f = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a[href], button'));
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, setMenu]);

  // Ab Desktop-Breite Menü schließen
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const onChange = (m: MediaQueryListEvent) => {
      if (m.matches) setMenu(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [setMenu]);

  // Schatten beim Scrollen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Seitenwechsel: Menü zu, Abschnitts-Markierung zurücksetzen
  useEffect(() => {
    setActiveId(null);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
    setMounted(false);
    document.documentElement.classList.remove('no-scroll');
  }, [pathname]);

  // Scrollspy auf der Startseite
  useEffect(() => {
    if (!isHome || !('IntersectionObserver' in window)) return;
    const opts = { rootMargin: '-45% 0px -50% 0px' };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) setActiveId(en.target.id);
      });
    }, opts);
    SPY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    // Oberhalb der ersten Sektion (Hero) nichts markieren
    const hero = document.querySelector('.hero');
    const ioHero = new IntersectionObserver((en) => {
      if (en[0].isIntersecting) setActiveId(null);
    }, opts);
    if (hero) ioHero.observe(hero);
    return () => {
      io.disconnect();
      ioHero.disconnect();
    };
  }, [isHome]);

  const current = (id: string): 'location' | 'page' | undefined => {
    if (isHome) return activeId === id ? 'location' : undefined;
    if (pathname === '/faq' && id === 'faq') return 'page';
    return undefined;
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}
      data-header
    >
      <div className="container site-header__inner">
        <Link className="logo" href="/" aria-label="Zur VENDORi-Startseite">
          <LogoSvg />
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <Link href={n.href} aria-current={current(n.id)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+4962749278157" aria-label="Anrufen: +49 6274 9278157">
            <svg className="icon" aria-hidden="true">
              <use href="#i-phone" />
            </svg>
            <span className="header-phone__number" aria-hidden="true">
              +49 6274 9278157
            </span>
          </a>
          <Link className="btn btn--primary btn--sm header-cta" href="/#contact">
            <span className="header-cta__long">Erstgespräch vereinbaren</span>
            <span className="header-cta__short">Erstgespräch</span>
          </Link>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setMenu(true)}
          >
            <svg className="icon" aria-hidden="true">
              <use href="#i-menu" />
            </svg>
            <span className="menu-toggle__label">Menü</span>
          </button>
        </div>
      </div>
      <div className="drawer-backdrop" data-drawer-close hidden={!mounted} onClick={() => setMenu(false, true)} />
      <div
        ref={drawerRef}
        id="mobile-nav"
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!mounted}
      >
        <div className="drawer__head">
          <Link className="logo" href="/" aria-label="Zur VENDORi-Startseite" data-drawer-link onClick={() => setMenu(false)}>
            <LogoSvg />
          </Link>
          <button ref={closeRef} className="drawer__close" type="button" data-drawer-close onClick={() => setMenu(false, true)}>
            <svg className="icon" aria-hidden="true">
              <use href="#i-close" />
            </svg>
            <span className="sr-only">Menü schließen</span>
          </button>
        </div>
        <nav className="drawer__body" aria-label="Mobile Navigation">
          <ul className="mobile-nav__links">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link href={n.href} aria-current={current(n.id)} onClick={() => setMenu(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav__contact">
            <Link className="btn btn--primary" href="/#contact" onClick={() => setMenu(false)}>
              Erstgespräch vereinbaren{' '}
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
            <a className="mobile-nav__line" href="tel:+4962749278157" onClick={() => setMenu(false)}>
              <svg className="icon" aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              +49 6274 9278157
            </a>
            <a className="mobile-nav__line" href="mailto:info@vendori.eu" onClick={() => setMenu(false)}>
              <svg className="icon" aria-hidden="true">
                <use href="#i-mail" />
              </svg>
              info@vendori.eu
            </a>
            <p className="small">Mo–Fr 8:00–17:00 Uhr · Antwort innerhalb von 24 Stunden</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
