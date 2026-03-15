import type { Metadata } from 'next';
import { DatenschutzContent } from './DatenschutzContent';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung der VENDORi GmbH — Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://vendori.eu/datenschutz' },
};

export default function DatenschutzPage() {
    return <DatenschutzContent />;
}
