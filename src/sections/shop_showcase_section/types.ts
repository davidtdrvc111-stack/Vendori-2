// Shop Showcase Section - TypeScript Types

export interface Shop {
  id: string;               // e.g., 'mytoolstore-de'
  name: string;             // e.g., 'myToolStore'
  domain: string;           // e.g., 'mytoolstore.de'
  domainExtension: string;  // e.g., '.de'
  url: string;              // e.g., 'https://www.mytoolstore.de'
  logo: string;             // e.g., '/images/shops/mytoolstore-logo.svg'
  logoAlt: string;          // e.g., 'myToolStore Logo'
  metric: string;           // e.g., '50.000+ Orders'
  isOwnBrand?: boolean;     // true für ShowerNIZR
}

export interface ShopShowcaseSectionProps {
  className?: string;
}
