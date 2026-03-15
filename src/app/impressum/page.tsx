import type { Metadata } from 'next';
import { ImpressumContent } from './ImpressumContent';

export const metadata: Metadata = {
    title: 'Impressum — Rechtliche Angaben',
    description: 'Impressum der VENDORi GmbH — Angaben gemäß § 5 TMG.',
    robots: { index: false, follow: false },
    alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
    return <ImpressumContent />;
}
