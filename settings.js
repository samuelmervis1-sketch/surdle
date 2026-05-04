/* ============================================================
   DailySurdle — Settings page logic
   Requires preferences.js (getPrefs, savePrefs, applyPrefs)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const prefs = getPrefs();

  // ── Dark mode toggle (big button on settings page) ──────────
  const darkBtn  = document.getElementById('settings-dark-toggle');
  const darkIcon = document.getElementById('settings-dark-icon');
  const darkText = document.getElementById('settings-dark-text');

  function updateDarkBtn() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (darkIcon) darkIcon.textContent = isDark ? '☀️' : '🌙';
    if (darkText) darkText.textContent  = isDark ? 'On'  : 'Off';
    if (darkBtn)  {
      darkBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      darkBtn.classList.toggle('is-on', isDark);
    }
  }

  updateDarkBtn();

  if (darkBtn) {
    darkBtn.addEventListener('click', function () {
      const p = getPrefs();
      const newTheme = p.theme === 'dark' ? 'light' : 'dark';
      applyPrefs(savePrefs({ theme: newTheme }));
      updateDarkBtn();
      // also update the header toggle if it exists
      const headerToggle = document.getElementById('theme-toggle');
      if (headerToggle) {
        const nowDark = document.documentElement.getAttribute('data-theme') === 'dark';
        headerToggle.textContent = nowDark ? '☀️' : '🌙';
      }
    });
  }

  // ── Color theme grid ─────────────────────────────────────────
  const themeGrid = document.getElementById('theme-grid');

  function updateThemeCards() {
    const current = getPrefs().colorTheme || 'default';
    themeGrid.querySelectorAll('.theme-card').forEach(function (card) {
      card.classList.toggle('theme-card--active', card.dataset.colorTheme === current);
    });
  }

  updateThemeCards();

  if (themeGrid) {
    themeGrid.addEventListener('click', function (e) {
      const card = e.target.closest('.theme-card');
      if (!card) return;
      const chosen = card.dataset.colorTheme;
      applyPrefs(savePrefs({ colorTheme: chosen }));
      updateThemeCards();
    });
  }

  // ── Font size buttons ────────────────────────────────────────
  const fontRow = document.getElementById('font-size-row');

  function updateFontBtns() {
    const current = getPrefs().fontSize || 'medium';
    if (!fontRow) return;
    fontRow.querySelectorAll('.font-size-btn').forEach(function (btn) {
      btn.classList.toggle('font-size-btn--active', btn.dataset.fontSize === current);
    });
  }

  updateFontBtns();

  if (fontRow) {
    fontRow.addEventListener('click', function (e) {
      const btn = e.target.closest('.font-size-btn');
      if (!btn) return;
      applyPrefs(savePrefs({ fontSize: btn.dataset.fontSize }));
      updateFontBtns();
    });
  }
});
