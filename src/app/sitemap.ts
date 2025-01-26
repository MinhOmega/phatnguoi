import { MetadataRoute } from 'next'
import { domains } from './constants/common';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemapEntries = domains.flatMap(domain =>
    routes.map(route => ({
      url: `https://${domain}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );

  return sitemapEntries;
} 