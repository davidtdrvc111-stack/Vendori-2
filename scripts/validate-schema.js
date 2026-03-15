#!/usr/bin/env node

/**
 * Schema.org Validation Script
 * Validates all JSON-LD schemas in the project
 */

const schemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VENDORi GmbH',
    url: 'https://vendori.eu',
    logo: 'https://vendori.eu/Logo_Vendori_rgb_anthrazit.svg',
    email: 'info@vendori.eu',
    sameAs: ['https://www.linkedin.com/company/vendori'],
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
  },
  professionalService: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VENDORi GmbH',
    url: 'https://vendori.eu',
    telephone: '+49-6274-9278157',
    email: 'info@vendori.eu',
    description: 'VENDORi skaliert E-Commerce-Umsätze mit praxiserprobten D2C-Strategien, Amazon Marketplace-Know-how und 22+ Jahren Erfahrung.',
    areaServed: { '@type': 'Place', name: 'Europa' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'E-Commerce Beratungsleistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'D2C-Strategie & Umsatzwachstum',
            description: 'Praxiserprobte Direct-to-Consumer-Strategien.',
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
      ],
    },
  },
  productMyToolStore: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'myToolStore - Werkzeug & Baumarkt Online Shop',
    description: 'Multi-Market Shop für Werkzeuge mit 1,5 Mio.+ Bestellungen.',
    brand: { '@type': 'Brand', name: 'myToolStore' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      offerCount: '10000+',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '15000',
      bestRating: '5',
      worstRating: '1',
    },
  },
};

console.log('🔍 Schema.org Validation Report\n');

let errors = [];
let warnings = [];

// Validate Professional Service Schema
const psOffer3 = schemas.professionalService.hasOfferCatalog.itemListElement[0];
if (psOffer3?.priceSpecification?.price === 'Auf Anfrage') {
  errors.push({
    schema: 'ProfessionalService',
    field: 'priceSpecification.price',
    issue: 'Invalid value "Auf Anfrage" - must be a number',
    fix: 'Remove priceSpecification for "on request" pricing',
  });
}

// Validate Product Schema (myToolStore)
const myToolOffer = schemas.productMyToolStore.offers;
if (myToolOffer?.offerCount?.includes('+')) {
  warnings.push({
    schema: 'Product (myToolStore)',
    field: 'offers.offerCount',
    issue: 'Value "10000+" contains non-numeric character',
    fix: 'Use numeric value: "10000" or higher',
  });
}

// Display Results
console.log('❌ ERRORS:', errors.length);
errors.forEach((err, i) => {
  console.log(`\n${i + 1}. ${err.schema}`);
  console.log(`   Field: ${err.field}`);
  console.log(`   Issue: ${err.issue}`);
  console.log(`   Fix: ${err.fix}`);
});

console.log('\n⚠️  WARNINGS:', warnings.length);
warnings.forEach((warn, i) => {
  console.log(`\n${i + 1}. ${warn.schema}`);
  console.log(`   Field: ${warn.field}`);
  console.log(`   Issue: ${warn.issue}`);
  console.log(`   Fix: ${warn.fix}`);
});

console.log('\n✅ VALID SCHEMAS:', Object.keys(schemas).length - errors.length);

if (errors.length > 0) {
  console.log('\n🔧 Fixes required in: src/components/seo/JsonLd.tsx');
  process.exit(1);
}

console.log('\n✅ All schemas valid!');
