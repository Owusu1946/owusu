export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    let res = await fetch('https://api.github.com/repos/Owusu1946/owusu', {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      res = await fetch('https://api.github.com/repos/Owusu1946/portfolio', {
        headers,
        next: { revalidate: 3600 },
      });
    }

    if (!res.ok) {
      return Response.json({ stars: 0 });
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count ?? 0 });
  } catch (error) {
    return Response.json({ stars: 0 });
  }
}