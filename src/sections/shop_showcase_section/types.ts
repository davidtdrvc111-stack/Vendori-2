// Shop Showcase Section - TypeScript Types

export interface Market {
  domain: string;           // e.g., 'mytoolstore.de'
  domainExtension: string;  // e.g., '.de'
  url: string;              // e.g., 'https://www.mytoolstore.de'
  flag?: string;            // Optional: Country flag emoji
  country?: string;         // Optional: Country name in German (e.g., 'Deutschland')
}

export interface Shop {
  id: string;               // e.g., 'mytoolstore'
  name: string;             // e.g., 'myToolStore'
  logo: string;             // e.g., '/images/shops/mytoolstore-logo.svg'
  logoAlt: string;          // e.g., 'myToolStore Logo'
  markets: Market[];        // Array of markets (can be 1 or multiple)
  metrics: string[];        // Array of key metrics (e.g., ['50.000+ Bestellungen', '3 Märkte'])
  isOwnBrand?: boolean;     // true für ShowerNIZR
  spanColumns?: number;     // Optional: How many grid columns to span (1-4)
}

export interface ShopShowcaseSectionProps {
  className?: string;
}
