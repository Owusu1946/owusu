import 'server-only';

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

type PostFrontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  published?: unknown;
};

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export type Post = PostSummary & {
  content: string;
};

let postCache: Post[] | undefined;

function parsePost(fileName: string): Post | null {
  const source = fs.readFileSync(path.join(POSTS_DIRECTORY, fileName), 'utf8');
  const { data, content } = matter(source);
  const frontmatter = data as PostFrontmatter;

  if (
    frontmatter.published !== true ||
    typeof frontmatter.title !== 'string' ||
    typeof frontmatter.description !== 'string' ||
    typeof frontmatter.date !== 'string'
  ) {
    return null;
  }

  const timestamp = Date.parse(frontmatter.date);
  if (Number.isNaN(timestamp)) {
    return null;
  }

  return {
    slug: fileName.replace(/\.mdx$/, ''),
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    readingTime: readingTime(content).text,
    content,
  };
}

function readPosts(): Post[] {
  if (process.env.NODE_ENV === 'production' && postCache) return postCache;
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];

  const posts = fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map(parsePost)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  if (process.env.NODE_ENV === 'production') postCache = posts;

  return posts;
}

export function getAllPosts(): PostSummary[] {
  return readPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    readingTime: post.readingTime,
  }));
}

export function getPostBySlug(slug: string): Post | undefined {
  return readPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}
