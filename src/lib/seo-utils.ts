/**
 * SEO Utilities für die VENDORi Website
 *
 * Hilfs-Funktionen zur Sicherstellung von SEO-Best-Practices
 */

/**
 * Validiert alt-Texte für Bilder
 *
 * @param alt - Der alt-Text des Bildes
 * @param imagePath - Optional: Pfad zum Bild für bessere Fehlermeldungen
 * @returns true wenn valide, false wenn nicht
 */
export function validateImageAlt(alt: string, imagePath?: string): boolean {
  const location = imagePath ? ` (${imagePath})` : '';

  // Leerer alt-Text
  if (!alt || alt.trim().length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`⚠️ SEO: Leerer alt-Text gefunden${location}. Content-Bilder benötigen beschreibende alt-Texte.`);
    }
    return false;
  }

  // Zu generische alt-Texte
  const genericTexts = ['bild', 'image', 'foto', 'photo', 'icon'];
  const lowerAlt = alt.toLowerCase();

  if (genericTexts.some(generic => lowerAlt === generic)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`⚠️ SEO: Generischer alt-Text "${alt}"${location}. Verwende beschreibende alt-Texte.`);
    }
    return false;
  }

  // Alt-Text zu lang (> 125 Zeichen empfohlen)
  if (alt.length > 125) {
    if (process.env.NODE_ENV === 'development') {
      console.info(`ℹ️ SEO: Langer alt-Text (${alt.length} Zeichen)${location}. Empfohlen: < 125 Zeichen.`);
    }
  }

  return true;
}

/**
 * Generiert strukturierte Daten (JSON-LD) für Organisationen
 *
 * @returns JSON-LD Objekt für die Organisation
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VENDORi GmbH',
    url: 'https://vendori.eu',
    logo: 'https://vendori.eu/Logo_Vendori_rgb_anthrazit.svg',
    description: 'VENDORi skaliert E-Commerce mit D2C-Strategien, Marketplace-Know-how und 22+ Jahren Praxiserfahrung.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hahnenfeldstr. 25',
      addressLocality: 'Waldbrunn',
      postalCode: '69429',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-6274-9278157',
      contactType: 'customer service',
      email: 'info@vendori.eu',
      availableLanguage: ['de'],
    },
    sameAs: [
      // Social Media URLs können hier hinzugefügt werden
    ],
  };
}

/**
 * Generiert Breadcrumb Schema für Seiten
 *
 * @param items - Array von Breadcrumb-Items
 * @returns JSON-LD Objekt für Breadcrumbs
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Erstellt optimierte Open Graph Metadaten
 *
 * @param params - Parameter für OG Tags
 * @returns Objekt mit OG Metadaten
 */
export function generateOpenGraphMetadata(params: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const baseUrl = 'https://vendori.eu';
  const url = params.path ? `${baseUrl}${params.path}` : baseUrl;
  const image = params.image || '/og-image.webp';

  return {
    title: params.title,
    description: params.description,
    url,
    siteName: 'VENDORi GmbH',
    locale: 'de_DE',
    type: 'website' as const,
    images: [
      {
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
        width: 1200,
        height: 630,
        alt: params.title,
        type: 'image/webp',
      },
    ],
  };
}

/**
 * Hilfsfunktion für Canonical URLs
 *
 * @param path - Pfad der Seite (z.B. '/ueber-uns')
 * @returns Vollständige Canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://vendori.eu';
  // Entferne führenden Slash wenn vorhanden, um doppelte Slashes zu vermeiden
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}
