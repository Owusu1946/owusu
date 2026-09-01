import { getGithubActivity } from '@/lib/github';

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

export async function GithubActivity() {
  const activity = await getGithubActivity();
  const cells = activity.days.length ? activity.days : Array.from({ length: 364 }, (_, index) => ({ date: String(index), level: 0 as const, count: 0 }));
  const visibleMonths = activity.days.length
    ? [...new Set(activity.days.map((day) => months[Number(day.date.slice(5, 7)) - 1]))]
    : [];

  return (
    <section className="github-activity" aria-labelledby="github-activity-heading">
      <div className="section-heading">
        <span>04</span>
        <h2 id="github-activity-heading">github activity</h2>
        <i aria-hidden="true" />
      </div>
      <div className="github-activity-frame">
        <div className="github-months" aria-hidden="true">
          {visibleMonths.map((month) => <span key={month}>{month}</span>)}
        </div>
        <div className="github-grid" role="img" aria-label={`${activity.total} GitHub contributions by ${activity.username} in the last year`}>
          {cells.map((day) => <span key={day.date} className={`github-cell level-${day.level}`} title={day.date} />)}
        </div>
        <div className="github-activity-meta">
          <a href={`https://github.com/${activity.username}`} target="_blank" rel="noopener noreferrer">{activity.total.toLocaleString()} contributions · {activity.year}</a>
          <span className="github-legend" aria-hidden="true"><span>less</span>{[0, 1, 2, 3, 4].map((level) => <i key={level} className={`github-cell level-${level}`} />)}<span>more</span></span>
        </div>
      </div>
    </section>
  );
}
