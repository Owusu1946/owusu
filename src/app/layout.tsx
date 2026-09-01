import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://owusu-sigma.vercel.app'),
  title: {
    default: 'Owusu Kenneth - Full-Stack Engineer',
    template: '%s - Owusu Kenneth',
  },
  description:
    'Owusu Kenneth is a Full-Stack Engineer and AI/LLM Application Engineer building dependable web, mobile, and AI products from Accra, Ghana.',
  keywords: [
    'Owusu Kenneth',
    'Full-Stack Engineer',
    'AI Engineer',
    'LLM Applications',
    'Next.js',
    'React',
    'TypeScript',
    'Accra',
    'Ghana',
  ],
  authors: [{ name: 'Owusu Kenneth' }],
  creator: 'Owusu Kenneth',
  openGraph: {
    type: 'website',
    url: 'https://owusu-sigma.vercel.app',
    locale: 'en_GH',
    title: 'Owusu Kenneth - Full-Stack Engineer',
    description:
      'Full-Stack Engineer and AI/LLM Application Engineer building dependable digital products.',
    siteName: 'Owusu Kenneth Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Owusu Kenneth - Full-Stack Engineer',
    description:
      'Full-Stack Engineer and AI/LLM Application Engineer building dependable digital products.',
    creator: '@Owusu1946',
  },
  alternates: {
    canonical: 'https://owusu-sigma.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090909' },
  ],
};

const themeScript = `
try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const isDark = savedTheme ? savedTheme === 'dark' : true;
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.classList.toggle('portfolio-dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  
  const metaColor = isDark ? '#090909' : '#ffffff';
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', metaColor);
} catch (_) {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.add('portfolio-dark');
  document.documentElement.style.colorScheme = 'dark';
}
`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Owusu Kenneth',
  alternateName: 'Kenneth Owusu',
  url: 'https://owusu-sigma.vercel.app',
  jobTitle: 'Full-Stack & AI Application Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Accra',
    addressCountry: 'GH',
  },
  sameAs: [
    'https://github.com/Owusu1946',
    'https://linkedin.com/in/okenneth',
    'https://x.com/okenneth2255',
    'https://instagram.com/okenneth2266',
  ],
  knowsAbout: [
    'TypeScript',
    'React',
    'Next.js',
    'Artificial Intelligence',
    'Large Language Models',
    'Full-Stack Web Development',
    'React Native',
    'FastAPI',
    'Node.js',
    'PostgreSQL',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
