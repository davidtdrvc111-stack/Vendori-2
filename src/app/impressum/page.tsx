import type { Metadata } from 'next';
import { ImpressumContent } from './ImpressumContent';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Impressum — Rechtliche Angaben',
    description: 'Impressum der VENDORi GmbH — Angaben gemäß § 5 TMG.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://vendori.eu/impressum' },
};

export default async function ImpressumPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Impressum', url: 'https://vendori.eu/impressum' }]} />
            <ImpressumContent />
        </>
    );
}
