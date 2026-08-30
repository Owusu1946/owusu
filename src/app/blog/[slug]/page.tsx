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

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="portfolio-shell">
      <main className="blog-main post-main">
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
            </div>
          </header>

          <div className="post-content">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>
      </main>
    </div>
  );
}
