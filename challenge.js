(function () {
  'use strict';

  // ---- Build full question pool ----
  const ALL_QUESTIONS = [];

  function ingest(questions, subject) {
    if (!Array.isArray(questions)) return;
    questions.forEach(q => {
      if (q.type === 'simulation' || q.type === 'diagram') return;
      if (!Array.isArray(q.options) || q.options.length < 2) return;
      if (typeof q.correct !== 'number') return;
      ALL_QUESTIONS.push({ text: q.text, options: q.options, correct: q.correct,
        difficulty: q.difficulty || 'easy', subject });
    });
  }

  if (typeof PHYSICS_QUESTIONS   !== 'undefined') ingest(PHYSICS_QUESTIONS,   'physics');
  if (typeof CHEMISTRY_QUESTIONS !== 'undefined') ingest(CHEMISTRY_QUESTIONS, 'chemistry');
  if (typeof BIOLOGY_QUESTIONS   !== 'undefined') ingest(BIOLOGY_QUESTIONS,   'biology');

  // ---- Helpers ----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Normalise for typed answer comparison:
  // strip unicode super/subscripts, lower-case, remove all non-alphanumeric
  function normalise(s) {
    const sup = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
    const sub = { '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9' };
    return s
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, c => sup[c] || c)
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, c => sub[c] || c)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }

  // ---- Personal best (keyed by subject+mode combo) ----
  function bestKey(subject, mode) { return `surdle_challenge_best_${subject}_${mode}`; }
  function getBest(subject, mode) { return parseInt(localStorage.getItem(bestKey(subject, mode)) || '0', 10); }
  function updateBest(subject, mode, score) {
    if (score > getBest(subject, mode)) { localStorage.setItem(bestKey(subject, mode), String(score)); return true; }
    return false;
  }

  // ---- State ----
  const DURATION = 60;
  let timeLeft, timerInterval, pool, poolIdx;
  let score, total, gameActive, answerLocked;
  let subjectStats;
  let selectedSubject = 'mix';
  let selectedMode    = 'normal';

  function resetState() {
    timeLeft     = DURATION;
    score        = 0;
    total        = 0;
    gameActive   = false;
    answerLocked = false;
    poolIdx      = 0;
    subjectStats = {
      physics:   { correct: 0, total: 0 },
      chemistry: { correct: 0, total: 0 },
      biology:   { correct: 0, total: 0 }
    };
    clearInterval(timerInterval);
    timerInterval = null;
    const filtered = selectedSubject === 'mix'
      ? ALL_QUESTIONS
      : ALL_QUESTIONS.filter(q => q.subject === selectedSubject);
    pool = shuffle(filtered.length ? filtered : ALL_QUESTIONS);
  }

  // ---- DOM ----
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

  // ---- Picker buttons ----
  document.getElementById('subject-picker').querySelectorAll('.challenge-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('subject-picker').querySelectorAll('.challenge-pick-btn')
        .forEach(b => b.classList.remove('challenge-pick-btn--active'));
      btn.classList.add('challenge-pick-btn--active');
      selectedSubject = btn.dataset.subject;
      refreshBestPreview();
    });
  });

  document.getElementById('mode-picker').querySelectorAll('.challenge-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('mode-picker').querySelectorAll('.challenge-pick-btn')
        .forEach(b => b.classList.remove('challenge-pick-btn--active'));
      btn.classList.add('challenge-pick-btn--active');
      selectedMode = btn.dataset.mode;
      refreshBestPreview();
    });
  });

  // ---- Best preview on start screen ----
  const bestPreview    = document.getElementById('challenge-best-preview');
  const bestPreviewNum = document.getElementById('challenge-best-preview-num');

  function refreshBestPreview() {
    const best = getBest(selectedSubject, selectedMode);
    if (best > 0) {
      bestPreviewNum.textContent = best;
      bestPreview.hidden = false;
    } else {
      bestPreview.hidden = true;
    }
  }
  refreshBestPreview();

  // ---- Display helpers ----
  function fmtTimer(s) {
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    if (!timerEl) return;
    timerEl.textContent = fmtTimer(timeLeft) + ' ⏱️';
    timerEl.className = 'challenge-timer';
    if (timeLeft <= 10)      timerEl.classList.add('challenge-timer--danger');
    else if (timeLeft <= 20) timerEl.classList.add('challenge-timer--warning');
  }

  function updateScoreDisplay() {
    if (scoreEl) scoreEl.textContent = `Score: ${score} ✓`;
  }

  function showScreen(which) {
    [startScreen, gameScreen, resultsScreen].forEach(s => { if (s) s.hidden = true; });
    if (which) which.hidden = false;
    if (liveStats) liveStats.hidden = (which !== gameScreen);
  }

  // ---- Subject badge ----
  const SUBJECT_ICONS = { physics: '⚡', chemistry: '⚗️', biology: '🧬' };

  function setBadge(q) {
    if (!subjectBadge) return;
    const icon = SUBJECT_ICONS[q.subject] || '';
    const cap  = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
    subjectBadge.textContent = `${icon} ${cap}`;
    subjectBadge.className   = `challenge-subject-badge challenge-subject-badge--${q.subject}`;
  }

  // ---- MCQ rendering ----
  function renderMCQ(q) {
    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className   = 'challenge-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (!gameActive || answerLocked) return;
        answerLocked = true;
        total++;
        subjectStats[q.subject].total++;
        if (i === q.correct) {
          score++;
          subjectStats[q.subject].correct++;
          btn.classList.add('challenge-option--correct');
        } else {
          btn.classList.add('challenge-option--wrong');
          optionsEl.querySelectorAll('.challenge-option')[q.correct]
            ?.classList.add('challenge-option--correct');
        }
        updateScoreDisplay();
        setTimeout(nextQuestion, 380);
      });
      optionsEl.appendChild(btn);
    });
  }

  // ---- Hard (type-it) rendering ----
  function renderTypeInput(q) {
    optionsEl.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'challenge-type-wrap';

    const input = document.createElement('input');
    input.type          = 'text';
    input.className     = 'challenge-type-input';
    input.placeholder   = 'Type your answer…';
    input.autocomplete  = 'off';
    input.autocorrect   = 'off';
    input.spellcheck    = false;

    const submitBtn = document.createElement('button');
    submitBtn.className   = 'challenge-type-submit';
    submitBtn.textContent = 'Submit ↵';

    const hint = document.createElement('div');
    hint.className = 'challenge-type-hint';
    hint.textContent = 'Press Enter to submit';

    function checkAnswer() {
      if (!gameActive || answerLocked) return;
      const userRaw = input.value.trim();
      if (!userRaw) { input.focus(); return; }
      answerLocked = true;

      const correct   = normalise(q.options[q.correct]);
      const user      = normalise(userRaw);
      const isCorrect = (user === correct);

      total++;
      subjectStats[q.subject].total++;

      if (isCorrect) {
        score++;
        subjectStats[q.subject].correct++;
        wrap.classList.add('challenge-type-wrap--correct');
        hint.textContent = '✓ Correct!';
      } else {
        wrap.classList.add('challenge-type-wrap--wrong');
        // Show the correct answer
        const reveal = document.createElement('div');
        reveal.className = 'challenge-type-reveal';
        reveal.textContent = `Answer: ${q.options[q.correct]}`;
        wrap.appendChild(reveal);
        hint.textContent = '✗ Wrong';
      }

      input.disabled    = true;
      submitBtn.disabled = true;
      updateScoreDisplay();
      setTimeout(nextQuestion, isCorrect ? 400 : 900);
    }

    input.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
    submitBtn.addEventListener('click', checkAnswer);

    wrap.appendChild(input);
    wrap.appendChild(submitBtn);
    wrap.appendChild(hint);
    optionsEl.appendChild(wrap);

    // Auto-focus after animation settles
    setTimeout(() => input.focus(), 260);
  }

  // ---- Next question ----
  function nextQuestion() {
    if (!gameActive) return;
    answerLocked = false;

    if (poolIdx >= pool.length) {
      pool    = shuffle(pool); // reshuffle same filtered pool
      poolIdx = 0;
    }
    const q = pool[poolIdx++];

    setBadge(q);
    if (questionEl) questionEl.textContent = q.text;

    if (selectedMode === 'hard') renderTypeInput(q);
    else renderMCQ(q);

    // Slide-in animation
    if (qWrap) {
      qWrap.classList.remove('challenge-q-enter');
      void qWrap.offsetWidth;
      qWrap.classList.add('challenge-q-enter');
    }
  }

  // ---- Start / End ----
  function startGame() {
    if (!ALL_QUESTIONS.length) { alert('Question data not loaded.'); return; }
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

    const isNew  = updateBest(selectedSubject, selectedMode, score);
    const best   = getBest(selectedSubject, selectedMode);
    const acc    = total > 0 ? Math.round((score / total) * 100) : 0;

    showScreen(resultsScreen);

    if (resIcon)  resIcon.textContent  = isNew ? '🏆' : '⏱️';
    if (resFinal) resFinal.textContent = `You scored ${score}/${total}`;
    if (resAcc)   resAcc.textContent   = `${acc}% correct`;

    if (resBestEl && resBestWrap) {
      resBestEl.textContent = isNew ? `New personal best: ${best} 🎉` : `Personal best: ${best}`;
      resBestWrap.classList.toggle('res-best--new', isNew);
    }

    // Breakdown
    if (resBreak) {
      resBreak.innerHTML = '';
      [
        { key: 'physics',   label: '⚡ Physics'   },
        { key: 'chemistry', label: '⚗️ Chemistry' },
        { key: 'biology',   label: '🧬 Biology'   },
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

  // ---- Buttons ----
  if (startBtn)     startBtn.addEventListener('click', startGame);
  if (playAgainBtn) playAgainBtn.addEventListener('click', () => { showScreen(startScreen); refreshBestPreview(); });

})();
