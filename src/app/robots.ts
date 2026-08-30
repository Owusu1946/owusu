import type { MetadataRoute } from 'next';

const BASE_URL = 'https://owusu-sigma.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'CCBot',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: ['/', '/blog', '/blog/*', '/llms.txt'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
