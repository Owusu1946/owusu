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
import { getBlogReadCount } from '@/lib/blog-reads';
import { projects } from '@/data/portfolio';
import { PostNeighborNav } from '@/components/blog/post-neighbor-nav';
import { BlogReadingTimeline } from '@/components/blog/blog-reading-timeline';

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
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => {
    const title = typeof children === 'string' ? children : '';
    return <h2 {...props} id={headingId(title)}>{children}</h2>;
  },
};

const projectLinks: Record<string, string> = {
  orin: 'Orin',
  docsage: 'DocSage v2',
  voltbase: 'Voltbase SDK',
};

function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/[`*_]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

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

  const initialReadCount = await getBlogReadCount(slug);
  const posts = getAllPosts();
  const postIndex = posts.findIndex((item) => item.slug === slug);
  const previousPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : undefined;
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : undefined;
  const relatedTitle = post.relatedProject ? projectLinks[post.relatedProject] : undefined;
  const relatedProject = relatedTitle ? projects.find((project) => project.title === relatedTitle) : undefined;
  const sections = Array.from(post.content.matchAll(/^##\s+(.+)$/gm)).map((match) => ({
    title: match[1].trim(),
    id: headingId(match[1].trim()),
  }));

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

  loadReads();
})();
`;

  return (
    <div className="portfolio-shell">
      <BlogReadingTimeline sections={sections} />
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
              <span>{post.category}</span>
              <span aria-hidden="true">/</span>
              <span>{post.status}</span>
              {post.updated && <><span aria-hidden="true">/</span><span>updated {formatPostDate(post.updated)}</span></>}
              <span aria-hidden="true">/</span>
              <span
                className="post-read-count"
                data-blog-read-count
                aria-live="polite"
              >
                {typeof initialReadCount === 'number'
                  ? `${initialReadCount.toLocaleString()} ${initialReadCount === 1 ? 'read' : 'reads'}`
                  : '— reads'}
              </span>
            </div>
          </header>

          <aside className="post-key-idea">
            <span>key idea</span>
            <p>{post.keyIdea}</p>
          </aside>

          <div className="post-content">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {relatedProject && (
            <details className="post-architecture-callout">
              <summary>view {relatedProject.title} architecture</summary>
              <div>
                <p><strong>{relatedProject.architecture.entry.title}</strong> &rarr; <strong>{relatedProject.architecture.core.title}</strong></p>
                <p>{relatedProject.architecture.core.detail}</p>
                <ul>
                  {relatedProject.architecture.services.map((service) => (
                    <li key={service.title}><strong>{service.title}</strong> &mdash; {service.detail}</li>
                  ))}
                </ul>
                <p><strong>{relatedProject.architecture.output.title}</strong> &mdash; {relatedProject.architecture.output.detail}</p>
              </div>
            </details>
          )}

          <ShareButtons
            title={post.title}
            slug={post.slug}
            description={post.description}
          />

          {relatedProject && (
            <aside className="post-related-project">
              <span>related work</span>
              <strong>{relatedProject.title}</strong>
              <p>{relatedProject.description}</p>
            </aside>
          )}

          <PostNeighborNav
            previous={previousPost ? { href: `/blog/${previousPost.slug}`, label: 'previous', title: previousPost.title } : undefined}
            next={nextPost ? { href: `/blog/${nextPost.slug}`, label: 'next', title: nextPost.title } : undefined}
          />
        </article>
        <script dangerouslySetInnerHTML={{ __html: readCountScript }} />
      </main>
    </div>
  );
}
