'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StickyHeaderProps, NavItem } from './types';

const navigationItems: NavItem[] = [
  { label: 'Über uns', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Kontakt', href: '#contact' },
];

export function StickyHeader({ className = '' }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blur-Effekt wenn gescrollt ODER Menu offen
  const showBlurredHeader = isScrolled || isMobileMenuOpen;
  // Dunkle Schrift nur wenn gescrollt (über weißem Hintergrund)
  const isDarkText = isScrolled;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${showBlurredHeader
          ? 'bg-white/95 dark:bg-neutral-800/90 backdrop-blur-2xl shadow-2xl'
          : 'bg-transparent'
        }
        ${className}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/VENDORi-Logo.png"
              alt="VENDORi Logo"
              width={120}
              height={40}
              className={`
                h-8 md:h-10 w-auto transition-all duration-500
                ${isDarkText
                  ? 'brightness-0 dark:brightness-100 dark:invert'
                  : 'brightness-0 invert'
                }
              `}
              priority
            />
          </Link>

          {/* Desktop Navigation - Center (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  font-medium transition-colors duration-300
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

          {/* Right Side: Menu Button (Mobile Only) + CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                md:hidden p-2 rounded-lg transition-all duration-300
                ${isDarkText
                  ? 'text-neutral-700 dark:text-white'
                  : 'text-white'
                }
              `}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* CTA Button - Hidden on Mobile, Visible on Desktop/Tablet */}
            <Link
              href="#contact"
              className={`
                hidden md:flex px-6 py-2.5 rounded-lg font-medium transition-all duration-300
                bg-primary-600 text-white hover:bg-primary-700
                ${isDarkText ? 'shadow-md' : ''}
              `}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="py-4 transition-colors duration-300">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  block py-3 font-medium transition-colors duration-300 text-center
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
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                block mt-4 py-3 px-4 text-center rounded-lg font-medium transition-all duration-300 md:hidden
                bg-primary-600 text-white hover:bg-primary-700
              "
            >
              Kontakt aufnehmen
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
