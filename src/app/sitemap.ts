import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vendori.eu',
      lastModified: '2026-03-15',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://vendori.eu/ueber-uns',
      lastModified: '2026-03-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vendori.eu/impressum',
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://vendori.eu/datenschutz',
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
