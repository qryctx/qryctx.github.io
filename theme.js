(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'phantom-theme';
  const choices = ['system', 'light', 'dark'];
  let preference = 'system';

  try {
    const saved = localStorage.getItem(storageKey);
    if (choices.includes(saved)) preference = saved;
  } catch {
    // Storage may be blocked; theme selection still works for this page.
  }

  function applyTheme() {
    const theme = preference === 'system'
      ? (systemTheme.matches ? 'dark' : 'light')
      : preference;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'dark' ? '#20211f' : '#f7f5ef';
  }

  // Run before the stylesheet and first paint to avoid a flash of the wrong theme.
  applyTheme();

  systemTheme.addEventListener('change', () => {
    if (preference === 'system') applyTheme();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.querySelector('#appearance');
    selector.value = preference;
    selector.addEventListener('change', () => {
      preference = selector.value;
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Preserve the selection in memory when storage is unavailable.
      }
    });
    selector.parentElement.hidden = false;
  });
})();
