(function () {
  'use strict';

  // ---- Build question pool from all subjects ----
  const ALL_QUESTIONS = [];

  function ingestSubject(questions, subject) {
    if (!Array.isArray(questions)) return;
    questions.forEach(q => {
      if (q.type === 'simulation' || q.type === 'diagram') return; // skip non-MCQ
      if (!Array.isArray(q.options) || q.options.length < 2) return;
      if (typeof q.correct !== 'number') return;
      ALL_QUESTIONS.push({
        text:    q.text,
        options: q.options,
        correct: q.correct,
        difficulty: q.difficulty || 'easy',
        subject
      });
    });
  }

  if (typeof PHYSICS_QUESTIONS   !== 'undefined') ingestSubject(PHYSICS_QUESTIONS,   'physics');
  if (typeof CHEMISTRY_QUESTIONS !== 'undefined') ingestSubject(CHEMISTRY_QUESTIONS, 'chemistry');
  if (typeof BIOLOGY_QUESTIONS   !== 'undefined') ingestSubject(BIOLOGY_QUESTIONS,   'biology');

  // ---- Shuffle (Fisher-Yates) ----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- localStorage personal best ----
  function getBest() {
    return parseInt(localStorage.getItem('surdle_challenge_best') || '0', 10);
  }
  function updateBest(score) {
    if (score > getBest()) { localStorage.setItem('surdle_challenge_best', String(score)); return true; }
    return false;
  }

  // ---- State ----
  const DURATION = 300; // 5 minutes
  let timeLeft, timerInterval, pool, poolIdx;
  let score, total, gameActive, answerLocked;
  let subjectStats;

  function resetState() {
    timeLeft     = DURATION;
    score        = 0;
    total        = 0;
    gameActive   = false;
    answerLocked = false;
    pool         = shuffle(ALL_QUESTIONS);
    poolIdx      = 0;
    subjectStats = {
      physics:   { correct: 0, total: 0 },
      chemistry: { correct: 0, total: 0 },
      biology:   { correct: 0, total: 0 }
    };
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // ---- DOM refs ----
  const startScreen   = document.getElementById('challenge-start');
  const gameScreen    = document.getElementById('challenge-game');
  const resultsScreen = document.getElementById('challenge-results');
  const liveStats     = document.getElementById('challenge-live-stats');
  const timerEl       = document.getElementById('challenge-timer');
  const scoreEl       = document.getElementById('challenge-score');
  const subjectBadge  = document.getElementById('challenge-subject-badge');
  const questionEl    = document.getElementById('challenge-question');
  const optionsEl     = document.getElementById('challenge-options');
  const qWrap         = document.getElementById('challenge-question-wrap');

  const startBtn      = document.getElementById('challenge-start-btn');
  const playAgainBtn  = document.getElementById('challenge-play-again-btn');

  const resFinal      = document.getElementById('res-final');
  const resAcc        = document.getElementById('res-accuracy');
  const resBestEl     = document.getElementById('res-best');
  const resBestWrap   = document.getElementById('res-best-wrap');
  const resBreak      = document.getElementById('res-breakdown');
  const resIcon       = document.getElementById('challenge-results-icon');

  // ---- Helpers ----
  function fmtTimer(s) {
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    if (!timerEl) return;
    timerEl.textContent = fmtTimer(timeLeft) + ' ⏱️';
    timerEl.className = 'challenge-timer';
    if (timeLeft <= 30)      timerEl.classList.add('challenge-timer--danger');
    else if (timeLeft <= 60) timerEl.classList.add('challenge-timer--warning');
  }

  function updateScoreDisplay() {
    if (scoreEl) scoreEl.textContent = `Score: ${score} ✓`;
  }

  // ---- Question rendering ----
  const SUBJECT_ICONS = { physics: '⚡', chemistry: '⚗️', biology: '🧬' };
  const DIFF_COLORS   = { beginner: '#2196f3', easy: '#6aaa64', medium: '#c9a227', hard: '#d95f5f' };

  function nextQuestion() {
    if (!gameActive) return;
    answerLocked = false;

    if (poolIdx >= pool.length) {
      pool    = shuffle(ALL_QUESTIONS);
      poolIdx = 0;
    }
    const q = pool[poolIdx++];

    // Subject badge
    if (subjectBadge) {
      const icon = SUBJECT_ICONS[q.subject] || '';
      const cap  = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
      subjectBadge.textContent  = `${icon} ${cap}`;
      subjectBadge.className    = `challenge-subject-badge challenge-subject-badge--${q.subject}`;
    }

    // Difficulty pip
    const diffColor = DIFF_COLORS[q.difficulty] || '#888';

    // Question text
    if (questionEl) questionEl.textContent = q.text;

    // Options
    if (optionsEl) {
      optionsEl.innerHTML = '';
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'challenge-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleAnswer(btn, q, i));
        optionsEl.appendChild(btn);
      });
    }

    // Animate question in
    if (qWrap) {
      qWrap.classList.remove('challenge-q-enter');
      void qWrap.offsetWidth;
      qWrap.classList.add('challenge-q-enter');
    }
  }

  function handleAnswer(btn, q, idx) {
    if (!gameActive || answerLocked) return;
    answerLocked = true;

    total++;
    subjectStats[q.subject].total++;

    const correct = (idx === q.correct);
    if (correct) {
      score++;
      subjectStats[q.subject].correct++;
      btn.classList.add('challenge-option--correct');
    } else {
      btn.classList.add('challenge-option--wrong');
      // Show correct answer
      const allBtns = optionsEl.querySelectorAll('.challenge-option');
      if (allBtns[q.correct]) allBtns[q.correct].classList.add('challenge-option--correct');
    }

    updateScoreDisplay();
    setTimeout(nextQuestion, 380);
  }

  // ---- Game flow ----
  function showScreen(which) {
    [startScreen, gameScreen, resultsScreen].forEach(s => { if (s) s.hidden = true; });
    if (which) which.hidden = false;
    if (liveStats) liveStats.hidden = (which !== gameScreen);
  }

  function startGame() {
    if (!ALL_QUESTIONS.length) {
      alert('No questions loaded — make sure the data files are included.');
      return;
    }
    resetState();
    gameActive = true;

    showScreen(gameScreen);
    updateTimerDisplay();
    updateScoreDisplay();
    nextQuestion();

    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) endGame();
    }, 1000);
  }

  function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    timerInterval = null;

    const isNewBest = updateBest(score);
    const best      = getBest();
    const accuracy  = total > 0 ? Math.round((score / total) * 100) : 0;

    showScreen(resultsScreen);

    // Results icon — trophy if new best
    if (resIcon) resIcon.textContent = isNewBest ? '🏆' : '⏱️';

    if (resFinal) resFinal.textContent   = `You scored ${score}/${total}`;
    if (resAcc)   resAcc.textContent     = `${accuracy}% correct`;

    if (resBestEl && resBestWrap) {
      if (isNewBest) {
        resBestEl.textContent = `New personal best: ${best} 🎉`;
        resBestWrap.classList.add('res-best--new');
      } else {
        resBestEl.textContent = `Personal best: ${best}`;
        resBestWrap.classList.remove('res-best--new');
      }
    }

    // Breakdown
    if (resBreak) {
      resBreak.innerHTML = '';
      [
        { key: 'physics',   label: '⚡ Physics' },
        { key: 'chemistry', label: '⚗️ Chemistry' },
        { key: 'biology',   label: '🧬 Biology' },
      ].forEach(({ key, label }) => {
        const s = subjectStats[key];
        if (!s.total) return;
        const pct = Math.round((s.correct / s.total) * 100);
        const row = document.createElement('div');
        row.className = 'res-breakdown-row';
        row.innerHTML =
          `<span class="res-breakdown-label">${label}</span>` +
          `<span class="res-breakdown-score">${s.correct}/${s.total}</span>` +
          `<div class="res-breakdown-bar-track"><div class="res-breakdown-bar-fill" style="width:${pct}%"></div></div>` +
          `<span class="res-breakdown-pct">${pct}%</span>`;
        resBreak.appendChild(row);
      });
    }
  }

  // ---- Initialise start screen ----
  const best = getBest();
  const bestPreview    = document.getElementById('challenge-best-preview');
  const bestPreviewNum = document.getElementById('challenge-best-preview-num');
  if (bestPreview && bestPreviewNum && best > 0) {
    bestPreviewNum.textContent = best;
    bestPreview.hidden = false;
  }

  // ---- Bind buttons ----
  if (startBtn)     startBtn.addEventListener('click', startGame);
  if (playAgainBtn) playAgainBtn.addEventListener('click', startGame);

})();
