import type { Metadata } from 'next';
import Link from 'next/link';
import { formatPostDate, getAllPosts } from '@/lib/posts';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes from Owusu Kenneth on software engineering, product development, and applied AI.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="portfolio-shell">
      <main className="blog-main">
        <Link className="blog-back-link" href="/">
          <span aria-hidden="true">&larr;</span> home
        </Link>

        <header className="blog-header">
          <h1>blog</h1>
          <p>
            Notes on building dependable software, thoughtful products, and
            practical AI systems.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="blog-list">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                  </div>
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">No published notes yet.</p>
        )}
      </main>
    </div>
  );
}
