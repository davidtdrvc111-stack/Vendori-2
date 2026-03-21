import type { Metadata } from 'next';
import { DatenschutzContent } from './DatenschutzContent';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | VENDORi GmbH — Datenschutz',
    description: 'Datenschutzerklärung der VENDORi GmbH — Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://vendori.eu/datenschutz' },
};

export default async function DatenschutzPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Datenschutz', url: 'https://vendori.eu/datenschutz' }]} />
            <DatenschutzContent />
        </>
    );
}
