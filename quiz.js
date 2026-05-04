(function () {
  'use strict';

  // ---- Build pools ----
  const POOL = { physics: [], chemistry: [], biology: [] };

  function ingest(questions, subject) {
    if (!Array.isArray(questions)) return;
    questions.forEach(q => {
      if (q.type === 'simulation' || q.type === 'diagram') return;
      if (!Array.isArray(q.options) || q.options.length < 2) return;
      if (typeof q.correct !== 'number') return;
      POOL[subject].push({
        text:        q.text,
        options:     q.options,
        correct:     q.correct,
        hints:       Array.isArray(q.hints) ? q.hints : [],
        difficulty:  q.difficulty || 'easy',
        subject
      });
    });
  }

  if (typeof PHYSICS_QUESTIONS   !== 'undefined') ingest(PHYSICS_QUESTIONS,   'physics');
  if (typeof CHEMISTRY_QUESTIONS !== 'undefined') ingest(CHEMISTRY_QUESTIONS, 'chemistry');
  if (typeof BIOLOGY_QUESTIONS   !== 'undefined') ingest(BIOLOGY_QUESTIONS,   'biology');

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- Minimal stats helpers ----
  function getStats() {
    const raw = localStorage.getItem('surdle_stats');
    const def = {
      totalSolved: 0, currentStreak: 0, bestStreak: 0, lastSolvedDate: null,
      bySubject: { physics: 0, chemistry: 0, biology: 0 },
      byDifficulty: { beginner: 0, easy: 0, medium: 0, hard: 0 },
      firstTryWins: 0,
      quizzesTaken: 0, quizBestPct: 0, quizTotalCorrect: 0, quizTotalAnswered: 0
    };
    if (!raw) return def;
    try { return { ...def, ...JSON.parse(raw) }; } catch { return def; }
  }
  function saveStats(s) { localStorage.setItem('surdle_stats', JSON.stringify(s)); }

  // ---- State ----
  const QUIZ_SIZE = 10;
  let selectedSubject = 'mixed';
  let selectedDiff    = 'easy';
  let questions       = [];
  let currentIdx      = 0;
  let answers         = []; // { correct, hintsUsed, questionText, options, correctIdx, chosenIdx }
  let hintsShown      = 0;
  let answered        = false;

  // ---- DOM ----
  const setupScreen   = document.getElementById('quiz-setup');
  const gameScreen    = document.getElementById('quiz-game');
  const resultsScreen = document.getElementById('quiz-results');
  const startBtn      = document.getElementById('quiz-start-btn');
  const nextBtn       = document.getElementById('quiz-next-btn');
  const retakeBtn     = document.getElementById('quiz-retake-btn');
  const hintBtn       = document.getElementById('quiz-hint-btn');
  const hintsShownEl  = document.getElementById('quiz-hints-shown');
  const progressFill  = document.getElementById('quiz-progress-fill');
  const qCounter      = document.getElementById('quiz-q-counter');
  const scoreLive     = document.getElementById('quiz-score-live');
  const questionEl    = document.getElementById('quiz-question-text');
  const optionsEl     = document.getElementById('quiz-options');
  const feedbackEl    = document.getElementById('quiz-feedback');
  const gradeCircle   = document.getElementById('quiz-grade-circle');
  const resultsScore  = document.getElementById('quiz-results-score');
  const resultsLabel  = document.getElementById('quiz-results-label');
  const resRaw        = document.getElementById('res-raw');
  const resHints      = document.getElementById('res-hints');
  const resAdjusted   = document.getElementById('res-adjusted');
  const breakdownEl   = document.getElementById('quiz-breakdown');
  const headerTitle   = document.getElementById('quiz-header-title');

  // ---- Screens ----
  function showScreen(which) {
    [setupScreen, gameScreen, resultsScreen].forEach(s => { if (s) s.hidden = true; });
    if (which) which.hidden = false;
  }

  // ---- Pickers ----
  function initPicker(id, attr, onSelect) {
    const el = document.getElementById(id);
    if (!el) return;
    el.querySelectorAll(`[data-${attr}]`).forEach(btn => {
      btn.addEventListener('click', () => {
        el.querySelectorAll(`[data-${attr}]`).forEach(b => b.classList.remove('quiz-pick-btn--active', 'quiz-diff-btn--active'));
        btn.classList.add(attr === 'subject' ? 'quiz-pick-btn--active' : 'quiz-diff-btn--active');
        onSelect(btn.dataset[attr]);
      });
    });
  }

  initPicker('subject-picker', 'subject', v => { selectedSubject = v; });
  initPicker('diff-picker',    'diff',    v => { selectedDiff    = v; });

  // ---- Build question set ----
  function buildQuiz() {
    const subjects = selectedSubject === 'mixed'
      ? ['physics', 'chemistry', 'biology']
      : [selectedSubject];

    let pool = [];
    subjects.forEach(s => {
      pool = pool.concat(POOL[s].filter(q => q.difficulty === selectedDiff));
    });

    pool = shuffle(pool);

    // If not enough questions in this difficulty, pad with other difficulties
    if (pool.length < QUIZ_SIZE) {
      const used = new Set(pool.map(q => q.text));
      let extra = [];
      subjects.forEach(s => extra = extra.concat(POOL[s].filter(q => !used.has(q.text))));
      extra = shuffle(extra);
      pool = pool.concat(extra).slice(0, QUIZ_SIZE);
    }

    return pool.slice(0, QUIZ_SIZE);
  }

  // ---- Start quiz ----
  function startQuiz() {
    questions = buildQuiz();
    if (!questions.length) {
      alert('No questions available for this selection. Try a different subject or difficulty.');
      return;
    }
    currentIdx = 0;
    answers    = [];
    showScreen(gameScreen);
    if (headerTitle) {
      const subLabel = selectedSubject === 'mixed' ? 'Mixed' :
        selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1);
      const diffLabel = selectedDiff.charAt(0).toUpperCase() + selectedDiff.slice(1);
      headerTitle.textContent = `${subLabel} · ${diffLabel}`;
    }
    renderQuestion();
  }

  // ---- Render question ----
  function renderQuestion() {
    const q     = questions[currentIdx];
    const total = questions.length;
    hintsShown  = 0;
    answered    = false;

    // Progress bar
    const pct = (currentIdx / total) * 100;
    if (progressFill) progressFill.style.width = pct + '%';
    if (qCounter)     qCounter.textContent = `Question ${currentIdx + 1} of ${total}`;

    // Live score
    if (scoreLive) {
      const correct = answers.filter(a => a.correct).length;
      scoreLive.textContent = currentIdx === 0 ? '' : `${correct}/${currentIdx} correct`;
    }

    // Question text
    if (questionEl) questionEl.textContent = q.text;

    // Options
    if (optionsEl) {
      optionsEl.innerHTML = '';
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className   = 'quiz-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleAnswer(btn, i));
        optionsEl.appendChild(btn);
      });
    }

    // Feedback (hidden until answered)
    if (feedbackEl) { feedbackEl.hidden = true; feedbackEl.className = 'quiz-feedback'; feedbackEl.textContent = ''; }

    // Hint button
    if (hintBtn) {
      hintBtn.disabled  = (q.hints.length === 0);
      hintBtn.className = 'quiz-hint-btn';
      hintBtn.innerHTML = q.hints.length
        ? `💡 Hint <span class="quiz-hint-cost">(−1 pt)</span>`
        : 'No hints available';
    }
    if (hintsShownEl) hintsShownEl.innerHTML = '';

    // Hide next button
    if (nextBtn) nextBtn.hidden = true;

    // Animate card
    const card = document.getElementById('quiz-question-card');
    if (card) {
      card.classList.remove('quiz-q-enter');
      void card.offsetWidth;
      card.classList.add('quiz-q-enter');
    }
  }

  // ---- Handle answer ----
  function handleAnswer(btn, idx) {
    if (answered) return;
    answered = true;
    const q = questions[currentIdx];
    const isCorrect = (idx === q.correct);

    // Disable all options
    optionsEl.querySelectorAll('.quiz-option').forEach(b => { b.disabled = true; });

    // Style chosen + correct
    btn.classList.add(isCorrect ? 'quiz-option--correct' : 'quiz-option--wrong');
    if (!isCorrect) {
      optionsEl.querySelectorAll('.quiz-option')[q.correct]?.classList.add('quiz-option--correct');
    }

    // Record
    answers.push({ questionText: q.text, correct: isCorrect, hintsUsed: hintsShown,
      options: q.options, correctIdx: q.correct, chosenIdx: idx });

    // Feedback
    if (feedbackEl) {
      feedbackEl.hidden = false;
      if (isCorrect) {
        feedbackEl.className = 'quiz-feedback quiz-feedback--correct';
        feedbackEl.textContent = '✓ Correct!';
      } else {
        feedbackEl.className = 'quiz-feedback quiz-feedback--wrong';
        feedbackEl.textContent = `✗ Correct answer: ${q.options[q.correct]}`;
      }
    }

    // Update score
    if (scoreLive) {
      const correct = answers.filter(a => a.correct).length;
      scoreLive.textContent = `${correct}/${answers.length} correct`;
    }

    // Disable hint button
    if (hintBtn) hintBtn.disabled = true;

    // Show next button
    if (nextBtn) {
      nextBtn.hidden      = false;
      const isLast        = (currentIdx + 1 >= questions.length);
      nextBtn.textContent = isLast ? 'See Results →' : 'Next Question →';
    }
  }

  // ---- Hints ----
  function showHint() {
    if (answered) return;
    const q = questions[currentIdx];
    if (hintsShown >= q.hints.length) return;
    hintsShown++;

    const item = document.createElement('div');
    item.className   = 'quiz-hint-item';
    item.textContent = `Hint ${hintsShown}: ${q.hints[hintsShown - 1]}`;
    if (hintsShownEl) hintsShownEl.appendChild(item);

    if (hintBtn) {
      if (hintsShown >= q.hints.length) {
        hintBtn.innerHTML = 'No more hints';
        hintBtn.disabled  = true;
      } else {
        hintBtn.innerHTML = `💡 Another Hint <span class="quiz-hint-cost">(−1 pt)</span>`;
      }
    }
  }

  // ---- Next question ----
  function nextQuestion() {
    if (currentIdx + 1 >= questions.length) {
      showResults();
    } else {
      currentIdx++;
      renderQuestion();
    }
  }

  // ---- Grade ----
  function getGrade(pct) {
    if (pct >= 90) return { letter: 'A', color: '#538d4e', label: 'Excellent! 🎉'        };
    if (pct >= 80) return { letter: 'B', color: '#6aaa64', label: 'Great work! 👏'        };
    if (pct >= 70) return { letter: 'C', color: '#c9a227', label: 'Good effort! 👍'        };
    if (pct >= 60) return { letter: 'D', color: '#e08c2a', label: 'Keep practicing!'      };
    return             { letter: 'F', color: '#d95f5f', label: 'Need more practice 📚'   };
  }

  // ---- Show results ----
  function showResults() {
    const rawCorrect = answers.filter(a => a.correct).length;
    const totalHints = answers.reduce((s, a) => s + a.hintsUsed, 0);
    const adjusted   = Math.max(0, rawCorrect - totalHints);
    const total      = questions.length;
    const pct        = Math.round((adjusted / total) * 100);
    const grade      = getGrade(pct);

    // Save to stats
    const stats = getStats();
    stats.quizzesTaken      = (stats.quizzesTaken      || 0) + 1;
    stats.quizBestPct       = Math.max(stats.quizBestPct  || 0, pct);
    stats.quizTotalCorrect  = (stats.quizTotalCorrect  || 0) + adjusted;
    stats.quizTotalAnswered = (stats.quizTotalAnswered || 0) + total;
    saveStats(stats);

    showScreen(resultsScreen);

    // Grade circle
    if (gradeCircle) { gradeCircle.textContent = grade.letter; gradeCircle.style.background = grade.color; }

    // Score + label
    if (resultsScore) resultsScore.textContent = `${adjusted}/${total} — ${pct}%`;
    if (resultsLabel) resultsLabel.textContent = grade.label;

    // Summary
    if (resRaw)      resRaw.textContent      = `${rawCorrect}/${total}`;
    if (resHints)    resHints.textContent    = totalHints > 0
      ? `${totalHints} hint${totalHints !== 1 ? 's' : ''} (−${totalHints} pts)` : 'None used ✓';
    if (resAdjusted) resAdjusted.textContent = `${adjusted}/${total} (${pct}%)`;

    // Breakdown
    if (breakdownEl) {
      breakdownEl.innerHTML = '';
      answers.forEach((a, i) => {
        const row = document.createElement('div');
        row.className = 'quiz-breakdown-row' + (a.correct ? ' quiz-breakdown-row--correct' : ' quiz-breakdown-row--wrong');
        const hintTag = a.hintsUsed > 0
          ? `<span class="quiz-breakdown-hint">${a.hintsUsed} hint${a.hintsUsed > 1 ? 's' : ''}</span>` : '';
        const wrongAns = !a.correct
          ? `<div class="quiz-breakdown-answer">Answer: ${a.options[a.correctIdx]}</div>` : '';
        row.innerHTML =
          `<div class="quiz-breakdown-header">` +
          `<span class="quiz-bd-num">${i + 1}.</span>` +
          `<span class="quiz-bd-icon">${a.correct ? '✓' : '✗'}</span>` +
          `<span class="quiz-bd-text">${a.questionText}</span>` +
          hintTag +
          `</div>${wrongAns}`;
        breakdownEl.appendChild(row);
      });
    }

    // Progress fill to 100%
    if (progressFill) progressFill.style.width = '100%';
  }

  // ---- Events ----
  if (startBtn)  startBtn.addEventListener('click', startQuiz);
  if (nextBtn)   nextBtn.addEventListener('click', nextQuestion);
  if (retakeBtn) retakeBtn.addEventListener('click', () => { showScreen(setupScreen); if (headerTitle) headerTitle.textContent = ''; });
  if (hintBtn)   hintBtn.addEventListener('click', showHint);

})();
