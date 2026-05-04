// ---- Stats helpers (shared between stats.html and script.js) ----
function getStats() {
  const raw = localStorage.getItem('surdle_stats');
  const defaults = {
    totalSolved: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastSolvedDate: null,
    bySubject: { physics: 0, chemistry: 0, biology: 0 },
    byDifficulty: { beginner: 0, easy: 0, medium: 0, hard: 0 },
    firstTryWins: 0,
    quizzesTaken: 0, quizBestPct: 0, quizTotalCorrect: 0, quizTotalAnswered: 0
  };
  if (!raw) return defaults;
  try {
    const p = JSON.parse(raw);
    return {
      ...defaults, ...p,
      bySubject:   { ...defaults.bySubject,   ...(p.bySubject   || {}) },
      byDifficulty:{ ...defaults.byDifficulty,...(p.byDifficulty|| {}) }
    };
  } catch { return defaults; }
}

function saveStats(s) {
  localStorage.setItem('surdle_stats', JSON.stringify(s));
}

// Returns the active streak: currentStreak if last solve was today or yesterday, else 0
function getActiveStreak(stats) {
  if (!stats.lastSolvedDate || !stats.currentStreak) return 0;
  const today = typeof getTodayStr === 'function' ? getTodayStr() : (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  })();
  const yesterday = getPrevDay(today);
  return (stats.lastSolvedDate === today || stats.lastSolvedDate === yesterday)
    ? stats.currentStreak : 0;
}

function getPrevDay(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ---- Stats page rendering ----
(function () {
  const statsPage = document.getElementById('stats-page-root');
  if (!statsPage) return; // not on stats page

  const stats = getStats();
  const activeStreak = getActiveStreak(stats);

  // ---- Streak cards ----
  const streakEl = document.getElementById('stat-streak');
  const bestEl   = document.getElementById('stat-best');
  const flameEl  = document.getElementById('stat-flame');

  if (streakEl) streakEl.textContent = activeStreak;
  if (bestEl)   bestEl.textContent   = stats.bestStreak;

  // Animate flame if streak > 0
  if (flameEl && activeStreak > 0) flameEl.classList.add('is-active');

  // Streak at-risk indicator
  const today = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  })();
  const atRisk = activeStreak > 0 && stats.lastSolvedDate !== today;
  const streakCard = document.querySelector('.stats-streak-card--current');
  if (streakCard && atRisk) {
    const tip = document.createElement('div');
    tip.className = 'streak-at-risk';
    tip.textContent = 'Solve today to keep it!';
    streakCard.appendChild(tip);
  }

  // ---- Big stats ----
  const totalEl   = document.getElementById('stat-total');
  const winRateEl = document.getElementById('stat-winrate');
  const favEl     = document.getElementById('stat-fav');

  if (totalEl) totalEl.textContent = stats.totalSolved;

  const winRate = stats.totalSolved > 0
    ? Math.round((stats.firstTryWins / stats.totalSolved) * 100) : 0;
  if (winRateEl) winRateEl.textContent = winRate + '%';

  // Favourite subject
  const sub = stats.bySubject;
  const maxSub = Math.max(sub.physics || 0, sub.chemistry || 0, sub.biology || 0);
  let fav = '—';
  if (maxSub > 0) {
    if ((sub.physics || 0) === maxSub)      fav = '⚡ Physics';
    else if ((sub.chemistry || 0) === maxSub) fav = '⚗️ Chemistry';
    else                                      fav = '🧬 Biology';
  }
  if (favEl) favEl.textContent = fav;

  // ---- Subject bars ----
  renderBars('subject-bars', [
    { label: '⚡ Physics',    value: sub.physics    || 0, max: maxSub || 1, color: '#6aaa64' },
    { label: '⚗️ Chemistry',  value: sub.chemistry  || 0, max: maxSub || 1, color: '#c9a227' },
    { label: '🧬 Biology',    value: sub.biology    || 0, max: maxSub || 1, color: '#5b8dc8' },
  ]);

  // ---- Difficulty bars ----
  const diff = stats.byDifficulty;
  const maxDiff = Math.max(diff.beginner||0, diff.easy||0, diff.medium||0, diff.hard||0);
  renderBars('diff-bars', [
    { label: 'Beginner', value: diff.beginner || 0, max: maxDiff || 1, color: '#2196f3' },
    { label: 'Easy',     value: diff.easy     || 0, max: maxDiff || 1, color: '#6aaa64' },
    { label: 'Medium',   value: diff.medium   || 0, max: maxDiff || 1, color: '#c9a227' },
    { label: 'Hard',     value: diff.hard     || 0, max: maxDiff || 1, color: '#d95f5f' },
  ]);

  // ---- Quiz stats ----
  const quizTotalEl = document.getElementById('stat-quiz-total');
  const quizBestEl  = document.getElementById('stat-quiz-best');
  const quizAvgEl   = document.getElementById('stat-quiz-avg');

  if (quizTotalEl) quizTotalEl.textContent = stats.quizzesTaken || 0;
  if (quizBestEl)  quizBestEl.textContent  = stats.quizzesTaken ? (stats.quizBestPct || 0) + '%' : '—';
  if (quizAvgEl) {
    const avg = stats.quizTotalAnswered > 0
      ? Math.round((stats.quizTotalCorrect / stats.quizTotalAnswered) * 100) : null;
    quizAvgEl.textContent = avg !== null ? avg + '%' : '—';
  }

  // ---- Reset button ----
  const resetBtn        = document.getElementById('reset-btn');
  const resetConfirm    = document.getElementById('reset-confirm');
  const resetCancel     = document.getElementById('reset-cancel');
  const resetConfirmBtn = document.getElementById('reset-confirm-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetConfirm.hidden = false;
      resetBtn.hidden = true;
    });
  }
  if (resetCancel) {
    resetCancel.addEventListener('click', () => {
      resetConfirm.hidden = true;
      resetBtn.hidden = false;
    });
  }
  if (resetConfirmBtn) {
    resetConfirmBtn.addEventListener('click', () => {
      saveStats({
        totalSolved: 0, currentStreak: 0, bestStreak: 0, lastSolvedDate: null,
        bySubject:    { physics: 0, chemistry: 0, biology: 0 },
        byDifficulty: { beginner: 0, easy: 0, medium: 0, hard: 0 },
        firstTryWins: 0,
        quizzesTaken: 0, quizBestPct: 0, quizTotalCorrect: 0, quizTotalAnswered: 0
      });
      window.location.reload();
    });
  }
})();

// ---- Leaderboard helpers (stats page standalone copies) ----
function getAllTimeLb() {
  const def = { beginner: [], easy: [], medium: [], hard: [] };
  try {
    const raw = localStorage.getItem('surdle_lb_alltime');
    return raw ? { ...def, ...JSON.parse(raw) } : def;
  } catch { return def; }
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function getRankIcon(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return `#${rank}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function subjectIcon(s) {
  return s === 'physics' ? '⚡' : s === 'chemistry' ? '⚗️' : '🧬';
}

// ---- All-time leaderboard rendering ----
(function () {
  const tabsEl  = document.getElementById('alltime-tabs');
  const tbody   = document.getElementById('alltime-lb-tbody');
  if (!tabsEl || !tbody) return;

  function renderAlltimeLb(diff) {
    const lb      = getAllTimeLb();
    const entries = lb[diff] || [];
    tbody.innerHTML = '';
    if (!entries.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="lb-empty">No records yet — start solving!</td></tr>';
      return;
    }
    entries.forEach((e, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML =
        `<td class="lb-rank-cell">${getRankIcon(i + 1)}</td>` +
        `<td class="lb-name-cell">${escapeHtml(e.name)}</td>` +
        `<td class="lb-time-cell">${formatTime(e.time)}</td>` +
        `<td class="lb-name-cell">${subjectIcon(e.subject)} ${e.subject || '—'}</td>` +
        `<td class="lb-time-cell">${e.date || '—'}</td>`;
      tbody.appendChild(tr);
    });
  }

  tabsEl.querySelectorAll('.lb-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsEl.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('lb-tab--active'));
      tab.classList.add('lb-tab--active');
      renderAlltimeLb(tab.dataset.diff);
    });
  });

  renderAlltimeLb('beginner'); // default tab
})();

function renderBars(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const maxVal = Math.max(...items.map(i => i.value));
  items.forEach(item => {
    const pct = maxVal > 0 ? Math.round((item.value / maxVal) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'stat-bar-row';
    row.innerHTML = `
      <span class="stat-bar-label">${item.label}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill" style="width:${pct}%;background:${item.color};" data-pct="${pct}"></div>
      </div>
      <span class="stat-bar-value">${item.value}</span>`;
    container.appendChild(row);
  });

  // Animate bars in
  requestAnimationFrame(() => {
    container.querySelectorAll('.stat-bar-fill').forEach((el, i) => {
      const target = el.dataset.pct + '%';
      el.style.width = '0';
      setTimeout(() => { el.style.width = target; }, i * 80 + 100);
    });
  });
}
