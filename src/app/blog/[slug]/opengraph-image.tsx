import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';

export const runtime = 'nodejs';
export const alt = 'Article Preview Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? 'Engineering Journal';
  const date = post?.date ?? '2026';
  const readingTime = post?.readingTime ?? '5 min read';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#090909',
          padding: '70px 80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              backgroundColor: '#171717',
              border: '1px solid #2e2e2e',
              color: '#60a5fa',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            OK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
              Owusu Kenneth
            </span>
            <span style={{ fontSize: '13px', color: '#888888', letterSpacing: '0.04em' }}>
              Full-Stack &amp; AI Applications Engineer
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '30px 0' }}>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#f9fafb',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #222222',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '16px', color: '#9ca3af', fontFamily: 'monospace' }}>
              {date}
            </span>
            <span style={{ color: '#4b5563' }}>/</span>
            <span style={{ fontSize: '16px', color: '#9ca3af', fontFamily: 'monospace' }}>
              {readingTime}
            </span>
          </div>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#60a5fa',
              fontFamily: 'monospace',
            }}
          >
            owusu-sigma.vercel.app/blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
