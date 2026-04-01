import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen',
  description: 'Alle wichtigen Informationen zu VENDORi, unseren E-Commerce Services und der Zusammenarbeit — kompakt beantwortet.',
  alternates: {
    canonical: 'https://vendori.eu/faq',
  },
  openGraph: {
    title: 'FAQs | VENDORi GmbH',
    description: 'Häufig gestellte Fragen zu VENDORi und unseren E-Commerce Services',
    url: 'https://vendori.eu/faq',
    type: 'website',
    images: [{
      url: '/og-image.webp',
      width: 1200,
      height: 630,
      alt: 'VENDORi GmbH — FAQs',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | VENDORi GmbH',
    description: 'Häufig gestellte Fragen zu VENDORi und unseren E-Commerce Services',
    images: ['/og-image.webp'],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
