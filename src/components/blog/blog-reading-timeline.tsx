'use client';

import { useEffect } from 'react';

type TimelineSection = {
  id: string;
  title: string;
};

export function BlogReadingTimeline({ sections }: { sections: TimelineSection[] }) {
  useEffect(() => {
    if (!sections.length) return;

    const markers = Array.from(document.querySelectorAll<HTMLElement>('[data-reading-marker]'));
    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => Boolean(heading));

    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.22;
      let activeIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      headings.forEach((heading, index) => {
        const distance = Math.abs(heading.getBoundingClientRect().top - anchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }
      });

      markers.forEach((marker, index) => {
        marker.dataset.distance = String(Math.abs(index - activeIndex));
        if (index === activeIndex) marker.setAttribute('aria-current', 'true');
        else marker.removeAttribute('aria-current');
      });
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  if (!sections.length) return null;

  return (
    <aside className="reading-progress" aria-label="Article sections">
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          data-reading-marker
          data-title={section.title}
          aria-label={`Jump to ${section.title}`}
          style={{ top: `${(index / Math.max(1, sections.length - 1)) * 100}%` }}
          onClick={() => {
            document.getElementById(section.id)?.scrollIntoView({
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
              block: 'start',
            });
          }}
        />
      ))}
    </aside>
  );
}
