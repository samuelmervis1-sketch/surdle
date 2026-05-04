/* ================================================================
   DailySurdle — User Preferences
   Loaded at end of <body> on every page.
   The anti-FOUC part is a tiny inline <script> in each <head>
   that applies data-attributes before the page renders.
   This file wires up the toggle button and exposes helpers.
   ================================================================ */

const PREFS_KEY = 'surdle_prefs';

function getPrefs() {
  try { return JSON.parse(localStorage.getItem(PREFS_KEY) || '{}'); }
  catch { return {}; }
}

function savePrefs(patch) {
  const p = Object.assign({}, getPrefs(), patch);
  localStorage.setItem(PREFS_KEY, JSON.stringify(p));
  return p;
}

function applyPrefs(p) {
  const html = document.documentElement;
  // Dark mode
  if (p.theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
  // Color theme
  if (p.colorTheme && p.colorTheme !== 'default') {
    html.setAttribute('data-color', p.colorTheme);
  } else {
    html.removeAttribute('data-color');
  }
  // Font size
  if (p.fontSize && p.fontSize !== 'medium') {
    html.setAttribute('data-font', p.fontSize);
  } else {
    html.removeAttribute('data-font');
  }
}

// Wire up the dark-mode toggle button in the header
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function updateToggleBtn() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  updateToggleBtn();

  btn.addEventListener('click', function () {
    const prefs = getPrefs();
    const newTheme = prefs.theme === 'dark' ? 'light' : 'dark';
    applyPrefs(savePrefs({ theme: newTheme }));
    updateToggleBtn();
  });
});
