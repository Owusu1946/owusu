import 'server-only';

const keyForSlug = (slug: string) => `portfolio:blog:${slug}:reads`;

async function runRedis(command: 'get' | 'incr', slug: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  try {
    const response = await fetch(
      `${url}/${command}/${encodeURIComponent(keyForSlug(slug))}`,
      { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' }
    );
    if (!response.ok) return null;

    const body = (await response.json()) as { result?: number | string | null };
    const reads = Number(body.result ?? 0);
    return Number.isFinite(reads) ? reads : null;
  } catch {
    return null;
  }
}

export const getBlogReadCount = (slug: string) => runRedis('get', slug);
export const incrementBlogReadCount = (slug: string) => runRedis('incr', slug);
