const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VENDORi GmbH',
  url: 'https://vendori.eu',
  logo: 'https://vendori.eu/Logo_Vendori_rgb_anthrazit.svg',
  email: 'info@vendori.eu',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-6274-9278157',
    contactType: 'customer service',
    availableLanguage: ['German'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hahnenfeldstr. 25',
    addressLocality: 'Waldbrunn',
    postalCode: '69429',
    addressCountry: 'DE',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VENDORi GmbH',
  url: 'https://vendori.eu',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VENDORi GmbH',
  url: 'https://vendori.eu',
  image: 'https://vendori.eu/VENDORi-Logo.png',
  telephone: '+49-6274-9278157',
  email: 'info@vendori.eu',
  openingHours: 'Mo-Fr 08:00-17:00',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.387,
    longitude: 8.825,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hahnenfeldstr. 25',
    addressLocality: 'Waldbrunn',
    postalCode: '69429',
    addressCountry: 'DE',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  priceRange: '€€',
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VENDORi GmbH',
  url: 'https://vendori.eu',
  telephone: '+49-6274-9278157',
  email: 'info@vendori.eu',
  description: 'VENDORi skaliert E-Commerce-Umsätze mit praxiserprobten D2C-Strategien, Amazon Marketplace-Know-how und 22+ Jahren Erfahrung.',
  areaServed: {
    '@type': 'Place',
    name: 'Europa',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'E-Commerce Beratungsleistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'D2C-Strategie & Umsatzwachstum',
          description: 'Praxiserprobte Direct-to-Consumer-Strategien, validiert in eigenen Shops.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EUR',
          price: '3500',
          minPrice: '2500',
          maxPrice: '7500',
          unitText: 'MONTH',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Internationale Marktplatz-Expansion',
          description: 'Skalierung auf Amazon und weitere Marktplätze in 20+ europäischen Ländern.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EUR',
          price: '5000',
          minPrice: '3000',
          maxPrice: '12000',
          unitText: 'MONTH',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Partnerschaft',
          description: 'Operative Begleitung auf Augenhöhe — kein Agentur-Experiment, sondern echte Partnerschaft.',
        },
        // Note: No priceSpecification for "on request" pricing (per Schema.org spec)
        availability: 'https://schema.org/InStock',
      },
    ],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hahnenfeldstr. 25',
    addressLocality: 'Waldbrunn',
    postalCode: '69429',
    addressCountry: 'DE',
  },
};

const productSchemaMyToolStore = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'myToolStore - Werkzeug & Baumarkt Online Shop',
  description: 'Multi-Market Shop für Werkzeuge und Regenwassermanagementlösungen mit über 1,5 Mio. Bestellungen.',
  brand: { '@type': 'Brand', name: 'myToolStore' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    offerCount: 10000,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '15000',
    bestRating: '5',
    worstRating: '1',
  },
};

const productSchemaShowerNIZR = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ShowerNIZR - Premium Duschsysteme',
  description: 'Eigenmarke für innovative Duschsysteme von VENDORi.',
  brand: { '@type': 'Brand', name: 'ShowerNIZR' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
};

export async function JsonLd() {
  // Get nonce from headers for CSP compliance
  const { headers } = await import('next/headers');
  const nonce = (await headers()).get('x-nonce') || '';

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaMyToolStore) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaShowerNIZR) }}
      />
    </>
  );
}

// Wiederverwendbare BreadcrumbList-Komponente für Unterseiten
export async function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  // Get nonce from headers for CSP compliance
  const { headers } = await import('next/headers');
  const nonce = (await headers()).get('x-nonce') || '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Start',
        item: 'https://vendori.eu',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
