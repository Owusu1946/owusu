import type { Metadata } from 'next';
import { Suspense } from 'react';
import Chat from '@/components/chat/chat';
import { ChatRouteLoading } from '@/components/chat/chat-route-loading';

export const metadata: Metadata = {
  title: 'AI Conversational Studio & Interactive Resume',
  description:
    'Chat with Owusu Kenneth’s streaming AI agent to explore project architectures, review skills, analyze job fit, and evaluate technical experience in real time.',
  alternates: {
    canonical: 'https://owusu-sigma.vercel.app/chat',
  },
  openGraph: {
    type: 'website',
    url: 'https://owusu-sigma.vercel.app/chat',
    title: 'AI Conversational Studio — Owusu Kenneth',
    description:
      'Chat with Owusu Kenneth’s streaming AI agent to explore project architectures, review skills, and evaluate technical experience in real time.',
    siteName: 'Owusu Kenneth Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Owusu Kenneth, Full-Stack Engineer and AI application engineer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Conversational Studio — Owusu Kenneth',
    description:
      'Chat with Owusu Kenneth’s streaming AI agent to explore project architectures, review skills, and evaluate technical experience in real time.',
    creator: '@okenneth2255',
    images: ['/og-image.jpg'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<ChatRouteLoading />}>
      <Chat />
    </Suspense>
  );
}
