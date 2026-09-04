export type PortfolioTheme = 'light' | 'dark';

let themeTimer: number | undefined;

export function applyPortfolioTheme(
  theme: PortfolioTheme,
  origin?: { x: number; y: number }
) {
  const isDark = theme === 'dark';
  const root = document.documentElement;

  if (themeTimer) window.clearTimeout(themeTimer);

  const color = isDark ? '#090909' : '#ffffff';
  if (origin && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.style.setProperty('--theme-reveal-x', `${origin.x}px`);
    root.style.setProperty('--theme-reveal-y', `${origin.y}px`);
    root.style.setProperty('--theme-reveal-color', color);
    root.classList.add('theme-reveal');
  }

  root.classList.toggle('dark', isDark);
  root.classList.toggle('portfolio-dark', isDark);
  root.style.colorScheme = theme;
  root.dataset.themeTransition = 'true';

  if (origin && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    themeTimer = window.setTimeout(() => {
      root.classList.remove('theme-reveal');
      root.style.removeProperty('--theme-reveal-color');
    }, 420);
  } else {
    root.classList.remove('theme-reveal');
    root.style.removeProperty('--theme-reveal-color');
  }

  window.setTimeout(() => {
    delete root.dataset.themeTransition;
  }, 220);

  const themeMetas = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]'
  );

  if (themeMetas.length) {
    themeMetas.forEach((meta) => meta.setAttribute('content', color));
  } else {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = color;
    document.head.appendChild(meta);
  }

  let statusMeta = document.querySelector<HTMLMetaElement>(
    'meta[name="apple-mobile-web-app-status-bar-style"]'
  );
  if (!statusMeta) {
    statusMeta = document.createElement('meta');
    statusMeta.name = 'apple-mobile-web-app-status-bar-style';
    document.head.appendChild(statusMeta);
  }
  statusMeta.content = isDark ? 'black-translucent' : 'default';
}
