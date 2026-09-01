'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';

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
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mascotActive, setMascotActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setDark(
      document.documentElement.classList.contains('portfolio-dark') ||
        document.documentElement.classList.contains('dark')
    );
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    document.documentElement.classList.toggle('portfolio-dark', nextDark);
    document.documentElement.style.colorScheme = nextDark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);

    const metaColor = nextDark ? '#090909' : '#ffffff';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', metaColor);
    }
  };

  const toggleMascot = async () => {
    if (mascotActive) {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
      setMascotActive(false);
      return;
    }

    const audio = audioRef.current ?? new Audio('/mascot-music.mp3');
    audio.loop = true;
    audio.preload = 'none';
    audio.volume = 0.5;
    audioRef.current = audio;
    setMascotActive(true);

    try {
      await audio.play();
    } catch {
      // Keep the mascot available until a music file is added.
    }
  };

  return (
    <>
      <div className="portfolio-controls" aria-label="Portfolio controls">
        <button
          type="button"
          onClick={toggleMascot}
          className="icon-control mascot-toggle"
          aria-label={mascotActive ? 'Pause mascot and music' : 'Play mascot and music'}
          aria-pressed={mascotActive}
          title={mascotActive ? 'Pause mascot and music' : 'Play mascot and music'}
        >
          {mascotActive ? (
            <span className="music-wave" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          ) : (
            <LocalIcon src="/icons/play.svg" />
          )}
        </button>
        <a
          href="/chat"
          className="mode-switch active:scale-95 transition-transform"
          aria-label="Switch to AI portfolio"
        >
          <LocalIcon src="/icons/bot.svg" />
          <span>AI mode</span>
        </a>
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

      {mascotActive && (
        <div className="dancing-mascot is-playing" aria-hidden="true">
          <svg viewBox="0 0 160 190">
            <ellipse className="mascot-shadow" cx="80" cy="178" rx="43" ry="7" />
            <g className="mascot-body">
              <g className="mascot-leg mascot-leg-left">
                <path className="mascot-trousers" d="M57 126h22l-8 35-20-2Z" />
                <path className="mascot-shoe" d="M50 155c7 1 14 2 21 6l-3 9H40c-4 0-5-5-1-7Z" />
                <path className="mascot-sole" d="M40 170h29" />
              </g>
              <g className="mascot-leg mascot-leg-right">
                <path className="mascot-trousers" d="M79 126h23l9 31-19 6Z" />
                <path className="mascot-shoe" d="M91 159c8 0 15-1 21-4l11 7c4 3 2 8-3 8H94Z" />
                <path className="mascot-sole" d="M94 170h27" />
              </g>
              <g className="mascot-arm mascot-arm-left">
                <path className="mascot-sleeve" d="M53 87c-7-4-14-1-19 6l-15 20 11 11 19-17c7-6 10-14 4-20Z" />
                <path className="mascot-cuff" d="m18 112 13 12-6 7-13-11Z" />
                <path className="mascot-hand" d="M29 113c-8-4-19-2-23 5-3 6 1 13 8 14l7 1 3 5c2 3 7 2 8-2l1-6c5-4 3-13-4-17Z" />
                <path className="mascot-knuckles" d="M10 120c6-2 12-1 18 2m-7 10 7-3" />
              </g>
              <g className="mascot-arm mascot-arm-right">
                <path className="mascot-sleeve" d="M106 87c7-4 14-1 19 6l15 20-11 11-19-17c-7-6-10-14-4-20Z" />
                <path className="mascot-cuff" d="m141 112-13 12 6 7 13-11Z" />
                <path className="mascot-hand" d="M130 113c8-4 19-2 23 5 3 6-1 13-8 14l-7 1-3 5c-2 3-7 2-8-2l-1-6c-5-4-3-13 4-17Z" />
                <path className="mascot-knuckles" d="M149 120c-6-2-12-1-18 2m7 10-7-3" />
              </g>
              <path className="mascot-neck" d="M69 74v13c5 6 17 6 22 0V74Z" />
              <path className="mascot-hoodie" d="M53 86c14-8 39-8 54 1 4 16 5 31 3 48H49c-2-17-1-33 4-49Z" />
              <path className="mascot-hood" d="M64 84c5 8 27 9 34 0" />
              <path className="mascot-pocket" d="M65 119c8 5 21 5 29 0l3 12H62Z" />
              <path className="mascot-code" d="m73 101-7 6 7 6m14-12 7 6-7 6m-9 3 5-19" />
              <path className="mascot-string" d="M69 91v9m22-9v9" />
              <g className="mascot-head">
                <circle className="mascot-ear mascot-ear-left" cx="47" cy="48" r="9" />
                <circle className="mascot-ear mascot-ear-right" cx="111" cy="48" r="9" />
                <path className="mascot-headband" d="M45 49C44 18 58 3 80 3c23 0 37 15 36 46" />
                <path className="mascot-face" d="M49 31c6-17 55-18 62 2v26c-2 17-14 27-31 27S50 76 48 59Z" />
                <path className="mascot-hair" d="M48 39c0-22 15-32 34-32 20 0 31 10 31 30-7-1-12-7-14-13-8 7-19 10-31 8-5 5-11 8-20 7Z" />
                <path className="mascot-hair-detail" d="M59 24c8-7 18-10 29-8m-20 15c10-1 20-5 28-12" />
                <g className="mascot-headphones">
                  <rect x="39" y="41" width="14" height="28" rx="6" />
                  <rect x="107" y="41" width="14" height="28" rx="6" />
                  <path className="mascot-headphone-arm" d="M47 41v-7m66 7v-7" />
                </g>
                <path className="mascot-brow" d="M61 47c4-2 8-2 12 0m14 0c4-2 8-2 12 0" />
                <ellipse className="mascot-eye" cx="68" cy="53" rx="2.7" ry="3.5" />
                <ellipse className="mascot-eye" cx="93" cy="53" rx="2.7" ry="3.5" />
                <path className="mascot-nose" d="m81 54-2 8 5 1" />
                <path className="mascot-smile" d="M70 69c7 6 16 6 23 0" />
                <circle className="mascot-highlight" cx="58" cy="61" r="3" />
                <circle className="mascot-highlight" cx="102" cy="61" r="3" />
              </g>
            </g>
          </svg>
        </div>
      )}

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
    </>
  );
}
