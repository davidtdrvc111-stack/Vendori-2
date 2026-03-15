'use client';

import { cn } from '@/lib/utils';
import { FooterSectionProps } from './types';
import Image from 'next/image';
import Link from 'next/link';

export function FooterSection({ className = '' }: FooterSectionProps) {
    return (
        <footer
            id="impressum"
            className={cn(
                'py-16 md:py-20 bg-zinc-950 text-white border-t border-white/5',
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 mb-16 px-4 sm:px-0">
                    {/* Column 1: Brand & Description */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/VENDORi-Logo.png"
                                alt="VENDORi Logo"
                                width={140}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                                loading="lazy"
                                sizes="140px"
                            />
                        </Link>
                        <p className="text-neutral-400 leading-relaxed max-w-sm">
                            Ihr Partner für innovative digitale Lösungen. Wir skalieren E-Commerce Marken mit praxiserprobten Strategien.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-bold font-display font-bold">Navigation</h2>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/ueber-uns" className="text-neutral-400 hover:text-primary-400 transition-colors">Über uns</Link>
                            <Link href="/#services" className="text-neutral-400 hover:text-primary-400 transition-colors">Services</Link>
                            <Link href="/#shops" className="text-neutral-400 hover:text-primary-400 transition-colors">Unsere Shops</Link>
                            <Link href="/#contact" className="text-neutral-400 hover:text-primary-400 transition-colors">Kontakt</Link>
                            <Link href="/impressum" className="text-neutral-400 hover:text-primary-400 transition-colors">Impressum</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact & Hours */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-bold font-display font-bold">Unsere Adresse</h2>
                        <div className="space-y-4 text-neutral-400">
                            <div className="space-y-1">
                                <p className="text-white font-medium">VENDORi GmbH</p>
                                <p>Hahnenfeldstr. 25</p>
                                <p>69429 Waldbrunn</p>
                                <p>Deutschland</p>
                            </div>
                            <div className="space-y-1 pt-2">
                                <p className="text-white font-medium">Öffnungszeiten:</p>
                                <p>Mo-Fr. 8:00 - 17:00 Uhr</p>
                            </div>
                            <div className="space-y-1 pt-2">
                                <p>Tel: + 49 (0) 6274 9278157</p>
                                <p>Mail: <a href="mailto:info@vendori.eu" className="text-primary-400 hover:text-primary-300 transition-colors">info@vendori.eu</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal Links */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                    <p>© {new Date().getFullYear()} VENDORi GmbH. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-8">
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
