import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getBlogReadCount, incrementBlogReadCount } from '@/lib/blog-reads';

type RouteContext = {
  params: Promise<{ slug: string }>;
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function POST(_: Request, { params }: RouteContext) {
  const { slug } = await params;

  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json({ reads: null }, { status: 400 });
  }

  const cookieStore = await cookies();
  const cookieName = `read_${slug}`;
  const alreadyCounted = cookieStore.has(cookieName);
  const reads = await (alreadyCounted
    ? getBlogReadCount(slug)
    : incrementBlogReadCount(slug));

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
