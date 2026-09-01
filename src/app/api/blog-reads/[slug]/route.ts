import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

type RouteContext = {
  params: Promise<{ slug: string }>;
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function runRedisCommand(command: 'get' | 'incr', key: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  const response = await fetch(
    `${url}/${command}/${encodeURIComponent(key)}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    }
  );

  if (!response.ok) return null;

  const data = (await response.json()) as { result?: number | string | null };
  const reads = Number(data.result ?? 0);
  return Number.isFinite(reads) ? reads : null;
}

export async function POST(_: Request, { params }: RouteContext) {
  const { slug } = await params;

  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json({ reads: null }, { status: 400 });
  }

  const cookieStore = await cookies();
  const cookieName = `read_${slug}`;
  const alreadyCounted = cookieStore.has(cookieName);
  const key = `portfolio:blog:${slug}:reads`;
  const reads = await runRedisCommand(alreadyCounted ? 'get' : 'incr', key);

  if (reads === null) {
    return NextResponse.json({ reads: null }, { status: 503 });
  }

  const response = NextResponse.json({ reads });

  if (!alreadyCounted) {
    response.cookies.set(cookieName, '1', {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: `/api/blog-reads/${slug}`,
    });
  }

  return response;
}
