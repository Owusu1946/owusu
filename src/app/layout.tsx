import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="prefetch" href="/final_memojis_ios.mp4" as="video" type="video/mp4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
