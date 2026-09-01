export type GithubContributionDay = {
  date: string;
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
};

export type GithubActivity = {
  username: string;
  total: number;
  year: string;
  days: GithubContributionDay[];
};

const USERNAME = 'Owusu1946';

export async function getGithubActivity(): Promise<GithubActivity> {
  const now = new Date();
  const end = now.toISOString().slice(0, 10);
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - 364);
  const start = startDate.toISOString().slice(0, 10);

  try {
    const response = await fetch(
      `https://github.com/users/${USERNAME}/contributions?from=${start}&to=${end}`,
      {
        headers: {
          Accept: 'text/html',
          'User-Agent': 'Owusu-Kenneth-Portfolio/1.0',
        },
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);

    const html = await response.text();
    const days: GithubContributionDay[] = [];
    const cellPattern = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"[^>]*>|<td[^>]*data-level="(\d)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g;
    let match: RegExpExecArray | null;
    while ((match = cellPattern.exec(html))) {
      const date = match[1] ?? match[4];
      const level = Math.min(4, Number(match[2] ?? match[3])) as GithubContributionDay['level'];
      days.push({ date, level, count: 0 });
    }

    const totalMatch = html.match(/(\d[\d,]*)\s+contributions?/i);
    const total = totalMatch ? Number(totalMatch[1].replace(/,/g, '')) : 0;
    return { username: USERNAME, total, year: `${start.slice(0, 4)}-${end.slice(0, 4).slice(2)}`, days };
  } catch {
    return { username: USERNAME, total: 0, year: `${start.slice(0, 4)}-${end.slice(0, 4).slice(2)}`, days: [] };
  }
}
