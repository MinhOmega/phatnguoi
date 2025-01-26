import { MetadataRoute } from 'next'
import { domains } from './constants/common'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: domains.map(domain => `https://${domain}/sitemap.xml`),
    host: 'phatnguoivn.vercel.app',
  }
} 