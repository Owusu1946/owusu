'use client';

import { useRouter } from 'next/navigation';
import { type CSSProperties, useEffect, useState } from 'react';

function LocalIcon({ src }: { src: string }) {
  return (
    <span
      className="local-icon"
      style={{ '--local-icon': `url("${src}")` } as CSSProperties}
      aria-hidden="true"
    />
  );
}

export function PortfolioControls() {
  const router = useRouter();
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('portfolio-dark') || document.documentElement.classList.contains('dark'));
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    document.documentElement.classList.toggle('portfolio-dark', nextDark);
    document.documentElement.style.colorScheme = nextDark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);

    const metaColor = nextDark ? '#090909' : '#ffffff';
    let meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', metaColor);
    }
  };

  const enterAiMode = () => {
    if (transitioning) return;
    setTransitioning(true);
    window.requestAnimationFrame(() => router.push('/chat'));
  };

  const prepareAiMode = () => router.prefetch('/chat');

  return (
    <>
      <div className="portfolio-controls" aria-label="Portfolio controls">
        <button
          type="button"
          onClick={enterAiMode}
          onPointerEnter={prepareAiMode}
          onFocus={prepareAiMode}
          onTouchStart={prepareAiMode}
          className="mode-switch"
          aria-label="Switch to AI portfolio"
        >
          <LocalIcon src="/icons/bot.svg" />
          <span>AI mode</span>
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          className="icon-control"
          aria-label={dark ? 'Use light theme' : 'Use dark theme'}
          title={dark ? 'Use light theme' : 'Use dark theme'}
        >
          <LocalIcon src={dark ? '/icons/sun.svg' : '/icons/moon.svg'} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-control ${scrolled ? 'is-visible' : ''}`}
        aria-label="Scroll to top"
        aria-hidden={!scrolled}
        tabIndex={scrolled ? 0 : -1}
      >
        <LocalIcon src="/icons/arrow-top.svg" />
      </button>

      <div
        className={`ai-transition ${transitioning ? 'is-active' : ''}`}
        aria-hidden="true"
      >
        <LocalIcon src="/icons/bot.svg" />
      </div>
    </>
  );
}
