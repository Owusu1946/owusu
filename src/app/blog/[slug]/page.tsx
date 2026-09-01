import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ComponentPropsWithoutRef } from 'react';
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
} from '@/lib/posts';
import { ShareButtons } from '@/components/blog/share-buttons';

export const dynamic = 'force-static';
export const dynamicParams = false;

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const mdxComponents = {
  a: ({ href, ...props }: ComponentPropsWithoutRef<'a'>) => {
    const isExternal = href?.startsWith('http');

    return (
      <a
        {...props}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      />
    );
  },
};

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const url = `https://owusu-sigma.vercel.app/blog/${slug}`;

  return {
    title: `${post.title} — Owusu Kenneth`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Owusu Kenneth'],
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
      title: post.title,
      description: post.description,
      creator: '@okenneth2255',
      images: ['/og-image.jpg'],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://owusu-sigma.vercel.app/blog/${slug}`,
    },
    author: {
      '@type': 'Person',
      name: 'Owusu Kenneth',
      url: 'https://owusu-sigma.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Owusu Kenneth',
      url: 'https://owusu-sigma.vercel.app',
    },
  };

  const readCountScript = `
(() => {
  const counter = document.querySelector('[data-blog-read-count]');
  if (!counter) return;

  const loadReads = () => {
    fetch('/api/blog-reads/${encodeURIComponent(slug)}', {
      method: 'POST',
      credentials: 'same-origin',
      keepalive: true
    })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (!data || typeof data.reads !== 'number') return;
        counter.textContent = data.reads.toLocaleString() + (data.reads === 1 ? ' read' : ' reads');
      })
      .catch(() => {});
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadReads, { timeout: 4000 });
  } else {
    window.setTimeout(loadReads, 1500);
  }
})();
`;

  return (
    <div className="portfolio-shell">
      <div className="reading-progress" aria-hidden="true" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="blog-main post-main" id="blog-top">
        <Link className="blog-back-link" href="/blog">
          <span aria-hidden="true">&larr;</span> all posts
        </Link>

        <article>
          <header className="post-header">
            <h1>{post.title}</h1>
            <div>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">/</span>
              <span
                className="post-read-count"
                data-blog-read-count
                aria-live="polite"
              >
                &mdash; reads
              </span>
            </div>
          </header>

          <div className="post-content">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <ShareButtons
            title={post.title}
            slug={post.slug}
            description={post.description}
          />
        </article>
        <script dangerouslySetInnerHTML={{ __html: readCountScript }} />
      </main>
    </div>
  );
}
