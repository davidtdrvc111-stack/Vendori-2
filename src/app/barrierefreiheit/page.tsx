import type { Metadata } from 'next';
import { BarrierefreiheitContent } from './BarrierefreiheitContent';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Erklärung zur Barrierefreiheit | VENDORi GmbH',
    description: 'Informationen zur Barrierefreiheit der VENDORi Website gemäß BFSG (Barrierefreiheitsstärkungsgesetz) und WCAG 2.1 Level AA.',
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://vendori.eu/barrierefreiheit' },
};

export default async function BarrierefreiheitPage() {
    return (
        <>
            {await BreadcrumbJsonLd({ items: [{ name: 'Barrierefreiheit', url: 'https://vendori.eu/barrierefreiheit' }] })}
            <BarrierefreiheitContent />
        </>
    );
}
