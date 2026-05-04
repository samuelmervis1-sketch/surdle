function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function startCountdown(targetEl) {
  const tick = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = Math.max(0, Math.floor((midnight - now) / 1000));
    const h = String(Math.floor(diff / 3600)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const s = String(diff % 60).padStart(2, '0');
    targetEl.textContent = `${h}:${m}:${s}`;
    setTimeout(tick, 1000);
  };
  tick();
}

// --- Difficulty helpers (shared with archive.js) ---
function computeDifficulty(seed) {
  const r = seed % 5;
  if (r < 2) return 'easy';
  if (r < 4) return 'medium';
  return 'hard';
}

function difficultyBadgeHTML(difficulty, extraClass) {
  const cls = extraClass ? ` ${extraClass}` : '';
  return `<span class="difficulty-badge difficulty-badge--${difficulty}${cls}">${difficulty}</span>`;
}

function getQuestionForSeed(questions, seed, difficulty) {
  const diff = difficulty || computeDifficulty(seed);
  const pool = questions.filter(q => q.difficulty === diff);
  return pool.length > 0 ? pool[seed % pool.length] : questions[seed % questions.length];
}

function getPlayState(subject, dateStr) {
  const raw = localStorage.getItem(`surdle_${subject}_${dateStr}`);
  if (!raw) return null;
  if (raw === 'solved') return { difficulty: null, solved: true };
  try { return JSON.parse(raw); } catch { return null; }
}

function setPlayState(subject, dateStr, difficulty, solved, timeSecs) {
  const data = { difficulty, solved };
  if (timeSecs !== undefined) data.timeSecs = Math.round(timeSecs * 10) / 10;
  localStorage.setItem(`surdle_${subject}_${dateStr}`, JSON.stringify(data));
}

// ---- Leaderboard helpers ----
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

function getDailyLb(subject, dateStr) {
  try {
    return JSON.parse(localStorage.getItem(`surdle_lb_${subject}_${dateStr}`)) || [];
  } catch { return []; }
}

function addToDailyLb(subject, dateStr, name, secs, difficulty) {
  const entries = getDailyLb(subject, dateStr);
  const _id = Date.now();
  const entry = {
    name: (name || 'Anonymous').trim().slice(0, 20) || 'Anonymous',
    time: Math.round(secs * 10) / 10,
    difficulty, _id
  };
  entries.push(entry);
  entries.sort((a, b) => a.time - b.time);
  const top = entries.slice(0, 10);
  const rank = top.findIndex(e => e._id === _id) + 1;
  top.forEach(e => delete e._id);
  localStorage.setItem(`surdle_lb_${subject}_${dateStr}`, JSON.stringify(top));
  return rank || null; // null = outside top 10
}

function getAllTimeLb() {
  const def = { beginner: [], easy: [], medium: [], hard: [] };
  try {
    const raw = localStorage.getItem('surdle_lb_alltime');
    return raw ? { ...def, ...JSON.parse(raw) } : def;
  } catch { return def; }
}

function addToAllTimeLb(name, secs, subject, difficulty, date) {
  const lb = getAllTimeLb();
  if (!lb[difficulty]) lb[difficulty] = [];
  lb[difficulty].push({
    name: (name || 'Anonymous').trim().slice(0, 20) || 'Anonymous',
    time: Math.round(secs * 10) / 10,
    subject, date
  });
  lb[difficulty].sort((a, b) => a.time - b.time);
  lb[difficulty] = lb[difficulty].slice(0, 20);
  localStorage.setItem('surdle_lb_alltime', JSON.stringify(lb));
}

// ---- Stats ----
// getStats / saveStats / getPrevDay are defined in stats.js
// (stats.js is loaded on stats.html; for game/home pages we define
//  minimal inline versions here so recordSolve always works)
if (typeof getStats === 'undefined') {
  window.getStats = function () {
    const raw = localStorage.getItem('surdle_stats');
    const def = {
      totalSolved:0, currentStreak:0, bestStreak:0, lastSolvedDate:null,
      bySubject:{physics:0,chemistry:0,biology:0},
      byDifficulty:{beginner:0,easy:0,medium:0,hard:0},
      firstTryWins:0
    };
    if (!raw) return def;
    try {
      const p = JSON.parse(raw);
      return { ...def, ...p,
        bySubject:   { ...def.bySubject,   ...(p.bySubject   || {}) },
        byDifficulty:{ ...def.byDifficulty,...(p.byDifficulty|| {}) }
      };
    } catch { return def; }
  };
}
if (typeof saveStats === 'undefined') {
  window.saveStats = function (s) {
    localStorage.setItem('surdle_stats', JSON.stringify(s));
  };
}
if (typeof getPrevDay === 'undefined') {
  window.getPrevDay = function (dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  };
}
if (typeof getActiveStreak === 'undefined') {
  window.getActiveStreak = function (stats) {
    if (!stats.lastSolvedDate || !stats.currentStreak) return 0;
    const today = getTodayStr();
    const yesterday = getPrevDay(today);
    return (stats.lastSolvedDate === today || stats.lastSolvedDate === yesterday)
      ? stats.currentStreak : 0;
  };
}

function recordSolve(subject, difficulty, isFirstTry) {
  const stats = getStats();
  const today = getTodayStr();

  // Update counts
  stats.totalSolved = (stats.totalSolved || 0) + 1;
  stats.bySubject[subject]      = (stats.bySubject[subject]      || 0) + 1;
  stats.byDifficulty[difficulty]= (stats.byDifficulty[difficulty]|| 0) + 1;
  if (isFirstTry) stats.firstTryWins = (stats.firstTryWins || 0) + 1;

  // Update streak (only once per day, regardless of how many puzzles solved)
  if (stats.lastSolvedDate !== today) {
    const yesterday = getPrevDay(today);
    if (stats.lastSolvedDate === yesterday) {
      stats.currentStreak = (stats.currentStreak || 0) + 1;
    } else {
      stats.currentStreak = 1;
    }
    stats.lastSolvedDate = today;
    if (stats.currentStreak > (stats.bestStreak || 0)) {
      stats.bestStreak = stats.currentStreak;
    }
  }

  saveStats(stats);
}

// --- How to Play modal ---
(function () {
  const btn   = document.getElementById('htp-btn');
  const modal = document.getElementById('htp-modal');
  const close = document.getElementById('htp-close');
  if (!btn || !modal) return;
  btn.addEventListener('click', () => modal.classList.add('is-open'));
  close.addEventListener('click', () => modal.classList.remove('is-open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('is-open'); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) modal.classList.remove('is-open');
  });
})();

// --- Landing page ---
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
  startCountdown(countdownEl);

  // ---- Streak banner ----
  (function () {
    const streakBanner = document.getElementById('streak-banner');
    if (!streakBanner) return;
    const stats        = getStats();
    const active       = getActiveStreak(stats);
    const countEl      = document.getElementById('streak-count');
    const bestCountEl  = document.getElementById('streak-best-count');
    const flameEl      = document.getElementById('streak-flame');

    if (countEl)     countEl.textContent     = active;
    if (bestCountEl) bestCountEl.textContent = stats.bestStreak || 0;

    if (active > 0) {
      streakBanner.classList.add('has-streak');
      if (flameEl) flameEl.classList.add('is-burning');
    }

    // "at risk" if last solve was yesterday (haven't solved today yet)
    const today     = getTodayStr();
    const yesterday = getPrevDay(today);
    if (active > 0 && stats.lastSolvedDate === yesterday) {
      streakBanner.classList.add('at-risk');
    }

    streakBanner.hidden = false;
  })();

  // Show today's difficulty badge on each game tile
  const d = new Date();
  const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();

  const tileData = [
    { subject: 'physics',   questions: typeof PHYSICS_QUESTIONS   !== 'undefined' ? PHYSICS_QUESTIONS   : null },
    { subject: 'chemistry', questions: typeof CHEMISTRY_QUESTIONS !== 'undefined' ? CHEMISTRY_QUESTIONS : null },
    { subject: 'biology',   questions: typeof BIOLOGY_QUESTIONS   !== 'undefined' ? BIOLOGY_QUESTIONS   : null },
  ];

  const todayStr = getTodayStr();
  document.querySelectorAll('[data-subject]').forEach(tile => {
    const entry = tileData.find(t => t.subject === tile.dataset.subject);
    if (!entry) return;
    const state = getPlayState(entry.subject, todayStr);
    const badgeWrap = document.createElement('div');
    badgeWrap.className = 'game-tile-difficulty';
    if (state && state.difficulty) {
      badgeWrap.innerHTML = difficultyBadgeHTML(state.difficulty, '') +
        (state.solved ? ' <span class="tile-solved-check">✓</span>' : '');
    } else {
      badgeWrap.innerHTML = '<span class="tile-choose-level">Choose your level</span>';
    }
    const info = tile.querySelector('.game-tile-info');
    if (info) info.appendChild(badgeWrap);
  });

  // --- Intercept Play buttons to show difficulty selector on home page ---
  const homeDiffSelector = document.getElementById('diff-selector');
  if (homeDiffSelector) {
    const subjectUrls = { physics: 'physics.html', chemistry: 'chemistry.html', biology: 'biology.html' };
    let pendingSubject = null;

    function openHomeSelector(subject) {
      pendingSubject = subject;
      homeDiffSelector.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeHomeSelector() {
      homeDiffSelector.classList.remove('is-open');
      document.body.style.overflow = '';
      pendingSubject = null;
    }

    document.querySelectorAll('[data-subject] .play-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const tile = btn.closest('[data-subject]');
        openHomeSelector(tile.dataset.subject);
      });
    });

    homeDiffSelector.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!pendingSubject) return;
        const diff = btn.dataset.diff;
        const existing = getPlayState(pendingSubject, todayStr);
        // Only update state if not already solved (don't overwrite a completed puzzle)
        if (!existing || !existing.solved) {
          setPlayState(pendingSubject, todayStr, diff, false);
        }
        window.location.href = subjectUrls[pendingSubject];
      });
    });

    document.getElementById('diff-selector-close').addEventListener('click', closeHomeSelector);
    homeDiffSelector.addEventListener('click', e => { if (e.target === homeDiffSelector) closeHomeSelector(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && homeDiffSelector.classList.contains('is-open')) closeHomeSelector();
    });
  }
}

// --- SVG definitions for diagram questions ---
const DIAGRAM_SVGS = {
  'animal-cell': `<svg viewBox="0 0 580 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;">
  <ellipse cx="280" cy="190" rx="220" ry="148" fill="#eef4fd" stroke="#5b8dc8" stroke-width="3.5"/>
  <ellipse cx="198" cy="190" rx="78" ry="68" fill="#dce8f7" stroke="#3c6dbf" stroke-width="2.5"/>
  <ellipse cx="198" cy="183" rx="26" ry="22" fill="#b2c8e8" stroke="#3c6dbf" stroke-width="1.5"/>
  <ellipse cx="355" cy="140" rx="47" ry="21" fill="#fde8d0" stroke="#c96820" stroke-width="2.5"/>
  <path d="M316,140 C330,128 345,152 360,140 C374,128 389,152 402,140" stroke="#c96820" stroke-width="1.5" fill="none"/>
  <ellipse cx="378" cy="244" rx="40" ry="18" fill="#fde8d0" stroke="#c96820" stroke-width="2"/>
  <path d="M345,244 C357,235 368,253 380,244 C392,235 403,253 415,244" stroke="#c96820" stroke-width="1.2" fill="none"/>
  <circle cx="295" cy="240" r="5.5" fill="#7a3b0e"/>
  <circle cx="308" cy="255" r="5.5" fill="#7a3b0e"/>
  <circle cx="280" cy="254" r="5.5" fill="#7a3b0e"/>
  <circle cx="320" cy="248" r="5.5" fill="#7a3b0e"/>
  <circle cx="300" cy="230" r="4" fill="#7a3b0e"/>
  <line x1="498" y1="190" x2="540" y2="190" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="554" cy="190" r="15" fill="#6aaa64"/>
  <text x="554" y="190" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">1</text>
  <line x1="155" y1="132" x2="105" y2="75" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="92" cy="62" r="15" fill="#6aaa64"/>
  <text x="92" y="62" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">2</text>
  <line x1="397" y1="122" x2="440" y2="68" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="453" cy="55" r="15" fill="#6aaa64"/>
  <text x="453" y="55" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">3</text>
  <line x1="298" y1="257" x2="298" y2="330" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="298" cy="344" r="15" fill="#6aaa64"/>
  <text x="298" y="344" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">4</text>
  <line x1="432" y1="254" x2="495" y2="318" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="508" cy="330" r="15" fill="#6aaa64"/>
  <text x="508" y="330" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">5</text>
</svg>`,

  'plant-cell': `<svg viewBox="0 0 580 440" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;">
  <rect x="45" y="75" width="490" height="290" rx="10" fill="#f5ede0" stroke="#7d5a2e" stroke-width="7"/>
  <rect x="57" y="87" width="466" height="266" rx="7" fill="#eef6ee" stroke="#5a9a5a" stroke-width="2"/>
  <rect x="188" y="115" width="238" height="218" rx="6" fill="#e0f0fa" stroke="#7ab8d8" stroke-width="2"/>
  <ellipse cx="110" cy="220" rx="52" ry="48" fill="#dce8f7" stroke="#3c6dbf" stroke-width="2.5"/>
  <ellipse cx="110" cy="214" rx="18" ry="16" fill="#b2c8e8" stroke="#3c6dbf" stroke-width="1.5"/>
  <ellipse cx="470" cy="145" rx="43" ry="20" fill="#c5e8a0" stroke="#4a8a20" stroke-width="2"/>
  <line x1="430" y1="145" x2="510" y2="145" stroke="#4a8a20" stroke-width="1.5"/>
  <ellipse cx="470" cy="220" rx="43" ry="20" fill="#c5e8a0" stroke="#4a8a20" stroke-width="2"/>
  <line x1="430" y1="220" x2="510" y2="220" stroke="#4a8a20" stroke-width="1.5"/>
  <ellipse cx="470" cy="295" rx="43" ry="20" fill="#c5e8a0" stroke="#4a8a20" stroke-width="2"/>
  <line x1="430" y1="295" x2="510" y2="295" stroke="#4a8a20" stroke-width="1.5"/>
  <line x1="285" y1="75" x2="285" y2="38" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="285" cy="24" r="15" fill="#6aaa64"/>
  <text x="285" y="24" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">1</text>
  <line x1="420" y1="87" x2="468" y2="48" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="481" cy="35" r="15" fill="#6aaa64"/>
  <text x="481" y="35" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">2</text>
  <line x1="426" y1="224" x2="542" y2="224" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="555" cy="224" r="15" fill="#6aaa64"/>
  <text x="555" y="224" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">3</text>
  <line x1="88" y1="265" x2="50" y2="375" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="50" cy="390" r="15" fill="#6aaa64"/>
  <text x="50" y="390" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">4</text>
  <line x1="508" y1="130" x2="547" y2="80" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="560" cy="67" r="15" fill="#6aaa64"/>
  <text x="560" y="67" text-anchor="middle" dominant-baseline="central" fill="white" font-size="14" font-weight="bold" font-family="Arial,sans-serif">5</text>
</svg>`,
};

// --- Simulation canvas drawing ---
function drawSimCanvas(canvas, height, elapsed, landed) {
  const W = 420, H = 270;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  const cliffW   = 80;
  const groundY  = 238;
  const dropTopY = 36;
  const ballR    = 13;
  const ballX    = 148;
  const dropRange = groundY - ballR - dropTopY; // pixels ball travels

  const g = 9.8;
  const actualTime = Math.sqrt(2 * height / g);
  const t    = Math.min(elapsed, actualTime);
  const frac = Math.min((0.5 * g * t * t) / height, 1.0);
  const ballY = dropTopY + frac * dropRange;
  const isLanded = landed || frac >= 1.0;

  // Sky
  const skyGrad = ctx.createLinearGradient(0, 0, 0, groundY);
  skyGrad.addColorStop(0, '#cce0f5');
  skyGrad.addColorStop(1, '#e8f4fb');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(cliffW, 0, W - cliffW, groundY);

  // Cliff body
  ctx.fillStyle = '#7a6a5a';
  ctx.fillRect(0, dropTopY, cliffW, H - dropTopY);
  // Cliff cap
  ctx.fillStyle = '#5c4e3f';
  ctx.fillRect(0, dropTopY - 5, cliffW, 7);
  // Cliff texture lines
  ctx.strokeStyle = 'rgba(0,0,0,0.07)';
  ctx.lineWidth = 1;
  for (let y = dropTopY + 18; y < H; y += 18) {
    ctx.beginPath(); ctx.moveTo(2, y); ctx.lineTo(cliffW - 2, y); ctx.stroke();
  }

  // Ground
  const groundGrad = ctx.createLinearGradient(0, groundY, 0, H);
  groundGrad.addColorStop(0, '#5a8040');
  groundGrad.addColorStop(1, '#3a5828');
  ctx.fillStyle = groundGrad;
  ctx.fillRect(cliffW, groundY, W - cliffW, H - groundY);
  ctx.fillStyle = '#4a7030';
  ctx.fillRect(cliffW, groundY, W - cliffW, 4);

  // Dashed drop guide line
  ctx.setLineDash([5, 5]);
  ctx.strokeStyle = 'rgba(80,120,180,0.22)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(ballX, dropTopY);
  ctx.lineTo(ballX, groundY);
  ctx.stroke();
  ctx.setLineDash([]);

  // Height measurement bracket
  const mX = W - 44;
  ctx.strokeStyle = '#7a8a9a';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(mX, dropTopY); ctx.lineTo(mX, groundY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mX - 5, dropTopY); ctx.lineTo(mX + 5, dropTopY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mX - 5, groundY); ctx.lineTo(mX + 5, groundY); ctx.stroke();
  // Label
  const mid = dropTopY + (groundY - dropTopY) / 2;
  ctx.fillStyle = '#555';
  ctx.font = 'bold 13px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${height} m`, mX, mid + 5);

  // Impact shadow when landed
  if (isLanded) {
    ctx.fillStyle = 'rgba(160,50,30,0.22)';
    ctx.beginPath();
    ctx.ellipse(ballX, groundY, ballR + 8, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ball gradient
  const grad = ctx.createRadialGradient(ballX - 4, ballY - 4, 2, ballX, ballY, ballR);
  grad.addColorStop(0, '#ff7070');
  grad.addColorStop(1, '#bf2c2c');
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#8a1f1f';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Timer overlay (top-left of sky area)
  const timeStr = t.toFixed(2) + ' s';
  ctx.font = 'bold 15px Arial, sans-serif';
  ctx.textAlign = 'left';
  const tw = ctx.measureText(timeStr).width;
  ctx.fillStyle = 'rgba(255,255,255,0.82)';
  ctx.beginPath();
  ctx.roundRect(cliffW + 8, 7, tw + 16, 24, 4);
  ctx.fill();
  ctx.fillStyle = '#1a1a1b';
  ctx.fillText(timeStr, cliffW + 16, 24);
}

// --- Game pages ---
const submitBtn = document.getElementById('submit-btn');
if (submitBtn) { try {
  const QUESTIONS =
    typeof PHYSICS_QUESTIONS   !== 'undefined' ? PHYSICS_QUESTIONS   :
    typeof CHEMISTRY_QUESTIONS !== 'undefined' ? CHEMISTRY_QUESTIONS :
    BIOLOGY_QUESTIONS;

  const subject =
    typeof PHYSICS_QUESTIONS   !== 'undefined' ? 'physics'   :
    typeof CHEMISTRY_QUESTIONS !== 'undefined' ? 'chemistry' :
    'biology';

  const questionEl     = document.getElementById('question');
  const optionsEl      = document.getElementById('options');
  const resultEl       = document.getElementById('result');
  const hintBtn        = document.getElementById('hint-btn');
  const hintBox        = document.getElementById('hint-box');
  const diagramArea    = document.getElementById('diagram-area');
  const diagramLabels  = document.getElementById('diagram-labels');
  const simulationArea = document.getElementById('simulation-area');
  const diffSelectorEl = document.getElementById('diff-selector');

  const todayStr   = getTodayStr();
  const storageKey = `surdle_${subject}_${todayStr}`;
  const d          = new Date();
  const seed       = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  const testIdx    = new URLSearchParams(window.location.search).get('q');

  let q                = null;
  let chosenDifficulty = null;
  let hintsShown       = 0;
  let _simRunning      = false;
  let _simAnimFrame    = null;
  let attemptCount     = 0;   // tracks submit clicks this session

  // ---- Solve timer ----
  let _timerStart    = null;
  let _timerInterval = null;

  function startSolveTimer() {
    if (_timerStart !== null) return; // already running
    _timerStart = Date.now();
    const wrap    = document.getElementById('solve-timer-wrap');
    const display = document.getElementById('solve-timer');
    if (wrap) wrap.hidden = false;
    _timerInterval = setInterval(() => {
      if (!display) return;
      const elapsed = Math.floor((Date.now() - _timerStart) / 1000);
      const m = Math.floor(elapsed / 60);
      const s = elapsed % 60;
      display.textContent =
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 500);
  }

  function stopSolveTimer() {
    clearInterval(_timerInterval);
    _timerInterval = null;
    const elapsed = _timerStart ? (Date.now() - _timerStart) / 1000 : 0;
    const wrap = document.getElementById('solve-timer-wrap');
    if (wrap) wrap.classList.add('timer-done');
    return elapsed;
  }

  // ---- Daily leaderboard UI ----
  function renderLbTable(entries, myRank) {
    const tbody = document.getElementById('lb-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (!entries.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="lb-empty">No entries yet today</td></tr>';
      return;
    }
    entries.forEach((e, i) => {
      const tr = document.createElement('tr');
      if (myRank && i + 1 === myRank) tr.className = 'lb-row--me';
      tr.innerHTML =
        `<td class="lb-rank-cell">${getRankIcon(i + 1)}</td>` +
        `<td class="lb-name-cell">${escapeHtml(e.name)}</td>` +
        `<td class="lb-time-cell">${formatTime(e.time)}</td>` +
        `<td class="lb-diff-cell"><span class="difficulty-badge difficulty-badge--${e.difficulty}">${e.difficulty}</span></td>`;
      tbody.appendChild(tr);
    });
  }

  function showDailyLeaderboard(myRank) {
    const lbEl = document.getElementById('daily-leaderboard');
    if (!lbEl) return;
    lbEl.hidden = false;
    const entries = getDailyLb(subject, todayStr);
    const nameEntry = document.getElementById('lb-name-entry');
    if (nameEntry) nameEntry.hidden = true;
    const rankBadge = document.getElementById('lb-rank-badge');
    if (rankBadge && myRank) {
      rankBadge.hidden = false;
      rankBadge.innerHTML = myRank === 1
        ? '🥇 You set the fastest time today!'
        : `You ranked <strong>#${myRank}</strong> today! ⚡`;
    }
    renderLbTable(entries, myRank);
  }

  function showLeaderboardEntry(secs) {
    const lbEl = document.getElementById('daily-leaderboard');
    if (!lbEl || testIdx !== null) return; // skip in test/archive mode
    lbEl.hidden = false;

    const yourTimeEl = document.getElementById('lb-your-time');
    if (yourTimeEl) yourTimeEl.textContent = formatTime(secs);

    // Pre-fill name from last session
    const nameInput = document.getElementById('lb-name-input');
    const lastName  = localStorage.getItem('surdle_last_name') || '';
    if (nameInput && lastName) nameInput.value = lastName;

    function submitEntry(rawName) {
      const name = (rawName || '').trim();
      if (name) localStorage.setItem('surdle_last_name', name);
      const rank = addToDailyLb(subject, todayStr, name, secs, chosenDifficulty);
      addToAllTimeLb(name, secs, subject, chosenDifficulty, todayStr);
      showDailyLeaderboard(rank);
    }

    document.getElementById('lb-name-submit')
      ?.addEventListener('click', () => submitEntry(nameInput?.value || ''));
    nameInput
      ?.addEventListener('keydown', e => { if (e.key === 'Enter') submitEntry(nameInput.value); });
    document.getElementById('lb-name-skip')
      ?.addEventListener('click', () => {
        const nameEntry = document.getElementById('lb-name-entry');
        if (nameEntry) nameEntry.hidden = true;
        renderLbTable(getDailyLb(subject, todayStr), null);
      });
  }

  // ---- MCQ ----
  function renderMCQ(question) {
    const LABELS = ['A', 'B', 'C', 'D'];
    question.options.forEach((optText, i) => {
      const wrapper = document.createElement('label');
      wrapper.className = 'option-label';
      const radio = document.createElement('input');
      radio.type = 'radio'; radio.name = 'answer'; radio.value = String(i);
      radio.addEventListener('change', () => {
        document.querySelectorAll('.option-label').forEach(el => el.classList.remove('selected'));
        wrapper.classList.add('selected');
      });
      wrapper.appendChild(radio);
      wrapper.appendChild(document.createTextNode(`${LABELS[i]})  ${optText}`));
      optionsEl.appendChild(wrapper);
    });
  }

  // ---- Diagram ----
  function renderDiagram(question) {
    if (!diagramArea) return;
    diagramArea.innerHTML = DIAGRAM_SVGS[question.svgId] || '';
    diagramArea.hidden = false;

    diagramLabels.innerHTML = '';
    question.correctLabels.forEach((_, i) => {
      const row = document.createElement('div');
      row.className = 'diagram-label-row';
      const num = document.createElement('span');
      num.className = 'diagram-label-num';
      num.textContent = String(i + 1);
      const select = document.createElement('select');
      select.name = `label-${i}`; select.className = 'diagram-select';
      const blank = document.createElement('option');
      blank.value = ''; blank.textContent = '— select —';
      blank.disabled = true; blank.selected = true;
      select.appendChild(blank);
      question.parts.forEach(part => {
        const opt = document.createElement('option');
        opt.value = part; opt.textContent = part;
        select.appendChild(opt);
      });
      row.appendChild(num); row.appendChild(select);
      diagramLabels.appendChild(row);
    });

    diagramLabels.hidden = false;
    optionsEl.hidden = true;
    submitBtn.textContent = 'Check Labels';
  }

  // ---- Simulation ----
  function renderSimulation(question) {
    if (!simulationArea) return;
    simulationArea.innerHTML = `
      <div class="sim-controls">
        <span class="sim-ctrl-label">Ball mass</span>
        <select id="sim-mass" class="sim-select">
          <option value="1">1 kg</option>
          <option value="5">5 kg</option>
          <option value="10" selected>10 kg</option>
          <option value="20">20 kg</option>
        </select>
      </div>
      <canvas id="sim-canvas"></canvas>
      <div class="sim-predict-row">
        <label class="sim-ctrl-label" for="sim-prediction">Your prediction</label>
        <div class="sim-input-wrap">
          <input type="number" id="sim-prediction" class="sim-input"
                 step="0.01" min="0.1" max="99" placeholder="0.00">
          <span class="sim-unit">seconds</span>
        </div>
      </div>
    `;
    simulationArea.hidden = false;
    optionsEl.hidden = true;
    submitBtn.textContent = 'Run Simulation';

    requestAnimationFrame(() => {
      const canvas = document.getElementById('sim-canvas');
      if (canvas) drawSimCanvas(canvas, question.height, 0, false);
    });
  }

  // --- Hints ---
  hintBtn.addEventListener('click', () => {
    if (!q || hintsShown >= q.hints.length) return;
    hintsShown++;
    hintBox.hidden = false;
    hintBox.innerHTML = q.hints
      .slice(0, hintsShown)
      .map((h, i) => `<p><strong>Hint ${i + 1}:</strong> ${h}</p>`)
      .join('');
    if (hintsShown < q.hints.length) {
      hintBtn.textContent = `Show Hint (${hintsShown + 1}/3)`;
    } else {
      hintBtn.textContent = 'No more hints';
      hintBtn.disabled = true;
    }
  });

  // --- Lock / Solved ---
  function lockPuzzle() {
    document.querySelectorAll('.option-label').forEach(el => el.classList.add('disabled'));
    document.querySelectorAll('input[name="answer"]').forEach(el => { el.disabled = true; });
    document.querySelectorAll('.diagram-select').forEach(el => { el.disabled = true; });
    const simPred = document.getElementById('sim-prediction');
    if (simPred) simPred.disabled = true;
    const simMass = document.getElementById('sim-mass');
    if (simMass) simMass.disabled = true;
    submitBtn.hidden = true;
    hintBtn.hidden = true;
  }

  function showSolvedState() {
    resultEl.hidden = false;
    resultEl.className = 'solved';
    resultEl.innerHTML =
      'Solved! \u2713' +
      '<span class="solved-sub">Come back tomorrow for the next puzzle</span>' +
      '<span class="solved-countdown">Next puzzle in: <strong id="solved-timer">--:--:--</strong></span>';
    startCountdown(document.getElementById('solved-timer'));

    if (q.explanation) {
      const expandedKey = storageKey + '_expanded';

      const learnBtn = document.createElement('button');
      learnBtn.className = 'learn-more-btn';

      const learnPanel = document.createElement('div');
      learnPanel.className = 'learn-more-panel';
      learnPanel.hidden = true;

      let panelHTML = `<p>${q.explanation}</p>`;
      if (q.learnMoreLink) {
        panelHTML += `<a href="${q.learnMoreLink.url}" target="_blank" rel="noopener" class="learn-more-link">${q.learnMoreLink.text} \u2192</a>`;
      }
      learnPanel.innerHTML = panelHTML;

      const setExpanded = (expanded) => {
        learnPanel.hidden = !expanded;
        learnBtn.textContent = expanded ? 'Learn More \u25b2' : 'Learn More \u25bc';
        if (expanded) localStorage.setItem(expandedKey, 'true');
        else localStorage.removeItem(expandedKey);
      };

      learnBtn.addEventListener('click', () => setExpanded(learnPanel.hidden));

      if (localStorage.getItem(expandedKey) === 'true') setExpanded(true);
      else learnBtn.textContent = 'Learn More \u25bc';

      resultEl.appendChild(learnBtn);
      resultEl.appendChild(learnPanel);
    }
  }

  // --- Submit ---
  submitBtn.addEventListener('click', () => {
    if (!q) return;
    if (q.type === 'diagram') {
      attemptCount++;
      const selects = document.querySelectorAll('.diagram-select');
      let correct = 0;
      selects.forEach((sel, i) => {
        const row = sel.closest('.diagram-label-row');
        row.classList.remove('correct', 'wrong');
        if (sel.value === q.correctLabels[i]) { correct++; row.classList.add('correct'); }
        else row.classList.add('wrong');
      });
      if (correct === q.correctLabels.length) {
        const t = stopSolveTimer();
        recordSolve(subject, chosenDifficulty, attemptCount === 1);
        setPlayState(subject, todayStr, chosenDifficulty, true, t);
        lockPuzzle(); showSolvedState(); showLeaderboardEntry(t);
      } else {
        resultEl.hidden = false; resultEl.className = 'wrong';
        resultEl.textContent = `${correct}/${q.correctLabels.length} correct \u2014 Try again!`;
      }

    } else if (q.type === 'simulation') {
      if (_simRunning) return;
      const predInput = document.getElementById('sim-prediction');
      const prediction = parseFloat(predInput.value);
      if (isNaN(prediction) || prediction <= 0) {
        predInput.style.outline = '2px solid #e07b7b';
        predInput.focus();
        return;
      }
      predInput.style.outline = '';
      attemptCount++;

      _simRunning = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Running\u2026';
      resultEl.hidden = true;

      const g = 9.8;
      const actualTime = Math.sqrt(2 * q.height / g);
      const startMs = performance.now();
      const canvas = document.getElementById('sim-canvas');

      function simFrame(now) {
        const elapsed = (now - startMs) / 1000;
        if (elapsed >= actualTime) {
          drawSimCanvas(canvas, q.height, actualTime, true);
          _simRunning = false;
          const margin = Math.abs(prediction - actualTime) / actualTime;
          if (margin <= 0.10) {
            const t = stopSolveTimer();
            recordSolve(subject, chosenDifficulty, attemptCount === 1);
            setPlayState(subject, todayStr, chosenDifficulty, true, t);
            lockPuzzle(); showSolvedState(); showLeaderboardEntry(t);
          } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Run Again';
            resultEl.hidden = false; resultEl.className = 'wrong';
            const dir = prediction > actualTime ? 'too high' : 'too low';
            resultEl.textContent =
              `Ball landed in ${actualTime.toFixed(2)} s — your guess of ${prediction.toFixed(2)} s was ${dir}. Try again!`;
          }
          return;
        }
        drawSimCanvas(canvas, q.height, elapsed, false);
        _simAnimFrame = requestAnimationFrame(simFrame);
      }
      _simAnimFrame = requestAnimationFrame(simFrame);

    } else {
      attemptCount++;
      const selected = document.querySelector('input[name="answer"]:checked');
      if (!selected) { attemptCount--; return; }
      if (Number(selected.value) === q.correct) {
        const t = stopSolveTimer();
        recordSolve(subject, chosenDifficulty, attemptCount === 1);
        setPlayState(subject, todayStr, chosenDifficulty, true, t);
        lockPuzzle(); showSolvedState(); showLeaderboardEntry(t);
      } else {
        resultEl.hidden = false; resultEl.className = 'wrong';
        resultEl.textContent = 'Wrong \u2717 \u2014 Try again!';
      }
    }
  });

  // --- Start game with a chosen difficulty ---
  function initGame(difficulty) {
    chosenDifficulty = difficulty;

    q = testIdx !== null
      ? QUESTIONS[Number(testIdx) % QUESTIONS.length]
      : getQuestionForSeed(QUESTIONS, seed, difficulty);

    if (diffSelectorEl) {
      diffSelectorEl.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    const loadingEl = document.getElementById('game-loading');
    if (loadingEl) loadingEl.style.display = 'none';
    questionEl.hidden = false;
    hintBtn.hidden = false;
    submitBtn.hidden = false;

    questionEl.textContent = q.text;
    if (q.difficulty) {
      const badge = document.createElement('div');
      badge.style.marginTop = '6px';
      badge.innerHTML = difficultyBadgeHTML(q.difficulty, '');
      questionEl.insertAdjacentElement('afterend', badge);
    }

    if (q.type === 'diagram') renderDiagram(q);
    else if (q.type === 'simulation') renderSimulation(q);
    else renderMCQ(q);

    // Restore solved state if already completed
    const state = getPlayState(subject, todayStr);
    if (state && state.solved) {
      if (q.type === 'diagram') {
        document.querySelectorAll('.diagram-select').forEach((sel, i) => {
          sel.value = q.correctLabels[i];
          sel.closest('.diagram-label-row').classList.add('correct');
        });
      } else if (q.type === 'simulation') {
        const actualTime = Math.sqrt(2 * q.height / 9.8);
        requestAnimationFrame(() => {
          const canvas = document.getElementById('sim-canvas');
          if (canvas) drawSimCanvas(canvas, q.height, actualTime, true);
        });
      }
      lockPuzzle();
      showSolvedState();
      // Show existing leaderboard without name entry (already submitted earlier)
      if (testIdx === null) showDailyLeaderboard(null);
    } else if (testIdx === null) {
      // Fresh puzzle — start timer
      startSolveTimer();
    }
  }

  // --- Entry point ---
  const existingState = getPlayState(subject, todayStr);

  if (testIdx !== null) {
    // Test mode bypasses selector
    initGame('medium');
  } else if (existingState && existingState.difficulty) {
    // Already chose difficulty today — go straight to puzzle
    initGame(existingState.difficulty);
  } else {
    // Show difficulty selector
    const loadingEl = document.getElementById('game-loading');
    if (loadingEl) loadingEl.style.display = 'none';
    if (diffSelectorEl) {
      diffSelectorEl.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const diff = btn.dataset.diff;
        setPlayState(subject, todayStr, diff, false);
        initGame(diff);
      });
    });
  }

} catch (err) {
  const container = document.querySelector('.game-container');
  if (container) {
    container.innerHTML = '<div class="error-message"><strong>Puzzle failed to load</strong>Refresh the page to try again. If the problem persists, the daily puzzle may be temporarily unavailable.</div>';
  }
}}
