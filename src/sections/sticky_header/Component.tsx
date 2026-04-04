'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { StickyHeaderProps, NavItem } from './types';

const baseNavigationItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Shops', href: '/#shops' },
  { label: 'Über uns', href: '/#about' },
  { label: 'Kontakt', href: '/#contact' },
  { label: 'FAQ', href: '/#faq' },
];

export function StickyHeader({ className = '' }: StickyHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInLightSection, setIsInLightSection] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const tickingRef = useRef(false);

  // Dynamische Navigation-Items basierend auf aktuellem Pfad
  // Auf Homepage: verwende #hash, auf anderen Seiten: verwende /#hash
  const navigationItems = baseNavigationItems.map(item => ({
    ...item,
    href: pathname === '/' ? item.href.replace('/', '') : item.href
  }));

  // useCallback für handleScroll um Re-Renders zu vermeiden
  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        tickingRef.current = false;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Escape-Taste schließt Mobile Menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Fokus auf erstes Link setzen wenn Menu öffnet
  useEffect(() => {
    if (isMobileMenuOpen) {
      firstMenuLinkRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  // Intersection Observer für About-Section (heller Hintergrund)
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Header ausfahren, wenn About-Section im oberen Bereich des Viewports ist
        setIsInLightSection(entry.isIntersecting && entry.boundingClientRect.top < 100);
      },
      { threshold: 0.1, rootMargin: '-80px 0px 0px 0px' }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  // Blur-Effekt wenn gescrollt ODER Menu offen ODER in About-Section (heller Hintergrund)
  const showBlurredHeader = isScrolled || isMobileMenuOpen || isInLightSection || pathname === '/faq';
  // Dunkle Schrift auf Seiten mit hellem Hintergrund im Ghost-Zustand
  const isDarkText = (pathname === '/impressum' || pathname === '/datenschutz' || pathname === '/ueber-uns') && !isScrolled;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${showBlurredHeader
          ? 'bg-neutral-800/90 backdrop-blur-2xl shadow-2xl'
          : 'bg-transparent'
        }
        ${className}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0" aria-label="VENDORi – Zur Startseite">
            <Image
              src="/Logo_Vendori_rgb_anthrazit.svg"
              alt="VENDORi Logo"
              width={364}
              height={121}
              className={`h-[98px] md:h-[121px] w-auto ${isDarkText ? 'dark:invert' : 'invert'}`}
              style={{
                filter: isDarkText ? undefined : 'invert(1)',
                willChange: 'auto'
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation - Center (Hidden on Mobile) */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  font-medium transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1 rounded
                  ${isDarkText
                    ? 'text-neutral-700 hover:text-primary-600 dark:text-white dark:hover:text-primary-400'
                    : 'text-white hover:text-primary-400'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side: Theme Toggle + Menu Button (Mobile Only) + CTA (prominenteste Position) */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Theme Toggle - Weniger wichtig, daher weiter links */}
            <ThemeToggle darkText={isDarkText} />

            {/* Menu Button - Mobile Only */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                md:hidden p-2 rounded-lg transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1
                ${isDarkText
                  ? 'text-neutral-700 dark:text-white'
                  : 'text-white'
                }
              `}
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* CTA Button - Ganz rechts (prominenteste Position), Hidden on Mobile */}
            <Link
              href="/#contact"
              className={`
                hidden md:flex px-6 py-2.5 rounded-lg font-medium transition-all duration-300
                bg-primary-700 text-white hover:bg-primary-800
                focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
                ${isDarkText ? 'shadow-md' : ''}
              `}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu - Fixed Overlay (kein CLS) */}
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          role="navigation"
          aria-hidden={!isMobileMenuOpen}
          className={`
            fixed left-0 right-0 top-16 md:top-20 bottom-0 z-40
            bg-neutral-800/95 backdrop-blur-2xl
            overflow-y-auto
            transition-all duration-300 md:hidden
            ${isMobileMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
            }
          `}
        >
          <div className="py-4 px-4">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                className={`
                  block py-3 font-medium transition-colors duration-300 text-center
                  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-inset
                  ${isDarkText
                    ? 'text-neutral-700 hover:text-primary-600 dark:text-white dark:hover:text-primary-400'
                    : 'text-white hover:text-primary-400'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="
                block mt-4 py-3 px-4 text-center rounded-lg font-medium transition-all duration-300
                bg-primary-700 text-white hover:bg-primary-800
              "
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
