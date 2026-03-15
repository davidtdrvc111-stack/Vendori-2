const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VENDORi GmbH',
  url: 'https://vendori.eu',
  logo: 'https://vendori.eu/Logo_Vendori_rgb_anthrazit.svg',
  email: 'info@vendori.eu',
  sameAs: [
    'https://www.linkedin.com/company/vendori',
  ],
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
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Internationale Marktplatz-Expansion',
          description: 'Skalierung auf Amazon und weitere Marktplätze in 20+ europäischen Ländern.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Partnerschaft',
          description: 'Operative Begleitung auf Augenhöhe — kein Agentur-Experiment, sondern echte Partnerschaft.',
        },
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

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}

// Wiederverwendbare BreadcrumbList-Komponente für Unterseiten
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
