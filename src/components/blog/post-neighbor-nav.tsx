'use client';

import { useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';

type Neighbor = { href: string; label: string; title: string };

export function PostNeighborNav({
  previous,
  next,
}: {
  previous?: Neighbor;
  next?: Neighbor;
}) {
  const router = useRouter();

  const prefetch = (target?: Neighbor) => {
    if (target) router.prefetch(target.href);
  };

  const navigate = (event: MouseEvent<HTMLAnchorElement>, target?: Neighbor) => {
    if (!target) return;
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;
    event.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => router.push(target.href));
    } else {
      router.push(target.href);
    }
  };

  return (
    <nav className="post-neighbor-nav" aria-label="Article navigation">
      {previous ? (
        <a
          href={previous.href}
          onMouseEnter={() => prefetch(previous)}
          onFocus={() => prefetch(previous)}
          onClick={(event) => navigate(event, previous)}
        >
          <span>{previous.label}</span>{previous.title}
        </a>
      ) : <span />}
      {next ? (
        <a
          href={next.href}
          onMouseEnter={() => prefetch(next)}
          onFocus={() => prefetch(next)}
          onClick={(event) => navigate(event, next)}
        >
          <span>{next.label}</span>{next.title}
        </a>
      ) : <span />}
    </nav>
  );
}
