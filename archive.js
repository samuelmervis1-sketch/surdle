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

const SUBJECT_DATA = {
  physics:   { questions: PHYSICS_QUESTIONS,   label: 'Daily Physics'   },
  chemistry: { questions: CHEMISTRY_QUESTIONS, label: 'Daily Chemistry' },
  biology:   { questions: BIOLOGY_QUESTIONS,   label: 'Daily Biology'   },
};

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

function getPlayState(subject, dateStr) {
  const raw = localStorage.getItem(`surdle_${subject}_${dateStr}`);
  if (!raw) return null;
  if (raw === 'solved') return { difficulty: null, solved: true };
  try { return JSON.parse(raw); } catch { return null; }
}

function setPlayState(subject, dateStr, difficulty, solved) {
  localStorage.setItem(`surdle_${subject}_${dateStr}`, JSON.stringify({ difficulty, solved }));
}

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return `${MONTH_NAMES[m - 1]} ${d}, ${y}`;
}

function getLast30Days() {
  const days = [];
  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - i);
    days.push(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    );
  }
  return days;
}

function seedForDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return y * 10000 + m * 100 + d;
}

function getQuestion(subject, dateStr) {
  const qs    = SUBJECT_DATA[subject].questions;
  const seed  = seedForDate(dateStr);
  const state = getPlayState(subject, dateStr);
  const diff  = (state && state.difficulty) ? state.difficulty : computeDifficulty(seed);
  const pool  = qs.filter(q => q.difficulty === diff);
  return pool.length > 0 ? pool[seed % pool.length] : qs[seed % qs.length];
}

function isSolved(subject, dateStr) {
  const state = getPlayState(subject, dateStr);
  return state ? state.solved === true : false;
}

// --- Archive list ---
let activeSubject = 'physics';

function renderList(subject) {
  const list = document.getElementById('archive-list');
  list.innerHTML = '';

  getLast30Days().forEach((dateStr, index) => {
    const state   = getPlayState(subject, dateStr);
    const solved  = state ? state.solved === true : false;
    const played  = state && state.difficulty;
    const isToday = index === 0;

    const q = getQuestion(subject, dateStr);

    const li = document.createElement('li');
    li.className = 'archive-item' + (solved ? ' archive-item--solved' : '');

    const preview = q.text.length > 65 ? q.text.slice(0, 65) + '…' : q.text;
    const seed    = seedForDate(dateStr);
    const diff    = (state && state.difficulty) ? state.difficulty : computeDifficulty(seed);

    let statusClass, statusText;
    if (solved) {
      statusClass = 'archive-status--solved';
      statusText  = '✓ Solved';
    } else if (played) {
      statusClass = 'archive-status--inprogress';
      statusText  = '◑ In progress';
    } else {
      statusClass = 'archive-status--unsolved';
      statusText  = '○ Not played';
    }

    li.innerHTML = `
      <div class="archive-item-meta">
        <span class="archive-date">${formatDate(dateStr)}${isToday ? ' <span class="archive-today">Today</span>' : ''}${difficultyBadgeHTML(diff, 'archive-difficulty')}</span>
        <span class="archive-status ${statusClass}">${statusText}</span>
      </div>
      <p class="archive-preview">${preview}</p>
    `;

    li.addEventListener('click', () => openModal(subject, dateStr));
    list.appendChild(li);
  });
}

// --- Tabs ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeSubject = tab.dataset.subject;
    renderList(activeSubject);
  });
});

renderList('physics');

// --- Modal ---
const modalEl        = document.getElementById('puzzle-modal');
const questionEl     = document.getElementById('question');
const optionsEl      = document.getElementById('options');
const submitBtn      = document.getElementById('submit-btn');
const resultEl       = document.getElementById('result');
const hintBtn        = document.getElementById('hint-btn');
const hintBox        = document.getElementById('hint-box');
const diagramArea    = document.getElementById('diagram-area');
const diagramLabels  = document.getElementById('diagram-labels');
const simulationArea = document.getElementById('simulation-area');

let currentSubject, currentDateStr, currentDifficulty;
let hintsShown = 0;
let _modalSimRunning = false;

function lockModal() {
  optionsEl.querySelectorAll('.option-label').forEach(el => el.classList.add('disabled'));
  optionsEl.querySelectorAll('input').forEach(el => { el.disabled = true; });
  optionsEl.querySelectorAll('.diagram-select').forEach(el => { el.disabled = true; });
  if (diagramLabels) diagramLabels.querySelectorAll('.diagram-select').forEach(el => { el.disabled = true; });
  if (simulationArea) {
    const p = simulationArea.querySelector('#sim-prediction');
    const m = simulationArea.querySelector('#sim-mass');
    if (p) p.disabled = true;
    if (m) m.disabled = true;
  }
  submitBtn.hidden = true;
  hintBtn.hidden = true;
}

function renderModalDiagram(q) {
  if (!diagramArea) return;
  diagramArea.innerHTML = DIAGRAM_SVGS[q.svgId] || '';
  diagramArea.hidden = false;

  diagramLabels.innerHTML = '';
  q.correctLabels.forEach((_, i) => {
    const row = document.createElement('div');
    row.className = 'diagram-label-row';

    const num = document.createElement('span');
    num.className = 'diagram-label-num';
    num.textContent = String(i + 1);

    const select = document.createElement('select');
    select.name = `label-${i}`;
    select.className = 'diagram-select';

    const blank = document.createElement('option');
    blank.value = '';
    blank.textContent = '— select —';
    blank.disabled = true;
    blank.selected = true;
    select.appendChild(blank);

    q.parts.forEach(part => {
      const opt = document.createElement('option');
      opt.value = part;
      opt.textContent = part;
      select.appendChild(opt);
    });

    row.appendChild(num);
    row.appendChild(select);
    diagramLabels.appendChild(row);
  });

  diagramLabels.hidden = false;
  optionsEl.hidden = true;
  submitBtn.textContent = 'Check Labels';
}

function renderModalSimulation(q) {
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
    const canvas = simulationArea.querySelector('#sim-canvas');
    if (canvas) drawSimCanvas(canvas, q.height, 0, false);
  });
}

function showModalResult(correct) {
  resultEl.hidden = false;
  if (correct) {
    resultEl.className = 'solved';
    resultEl.innerHTML =
      'Solved! \u2713' +
      '<span class="solved-sub">Archived puzzle complete</span>';

    const q = getQuestion(currentSubject, currentDateStr);
    if (q.explanation) {
      const expandedKey = `surdle_${currentSubject}_${currentDateStr}_expanded`;

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
  } else {
    resultEl.className = 'wrong';
    resultEl.textContent = 'Wrong \u2717 \u2014 Try again!';
  }
}

hintBtn.addEventListener('click', () => {
  const q = getQuestion(currentSubject, currentDateStr);
  if (hintsShown >= q.hints.length) return;
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

function openModal(subject, dateStr) {
  currentSubject = subject;
  currentDateStr = dateStr;

  const state = getPlayState(subject, dateStr);
  const seed  = seedForDate(dateStr);
  currentDifficulty = (state && state.difficulty) ? state.difficulty : computeDifficulty(seed);

  const q      = getQuestion(subject, dateStr);
  const solved = isSolved(subject, dateStr);

  const diff = currentDifficulty;
  document.getElementById('modal-date').innerHTML =
    formatDate(dateStr) + difficultyBadgeHTML(diff, 'modal-difficulty');
  questionEl.textContent = q.text;

  // Reset state
  _modalSimRunning = false;
  optionsEl.innerHTML = '';
  optionsEl.hidden = false;
  resultEl.hidden = true;
  resultEl.className = '';
  submitBtn.hidden = false;
  submitBtn.disabled = false;
  submitBtn.textContent = 'Submit Answer';
  if (diagramArea)    { diagramArea.hidden = true;    diagramArea.innerHTML = ''; }
  if (diagramLabels)  { diagramLabels.hidden = true;  diagramLabels.innerHTML = ''; }
  if (simulationArea) { simulationArea.hidden = true; simulationArea.innerHTML = ''; }

  // Reset hints
  hintsShown = 0;
  hintBtn.hidden = false;
  hintBtn.disabled = false;
  hintBtn.textContent = 'Show Hint (1/3)';
  hintBox.hidden = true;
  hintBox.innerHTML = '';

  if (q.type === 'diagram') {
    renderModalDiagram(q);
    if (solved) {
      diagramLabels.querySelectorAll('.diagram-select').forEach((sel, i) => {
        sel.value = q.correctLabels[i];
        sel.closest('.diagram-label-row').classList.add('correct');
      });
      lockModal();
      showModalResult(true);
    }
  } else if (q.type === 'simulation') {
    renderModalSimulation(q);
    if (solved) {
      const actualTime = Math.sqrt(2 * q.height / 9.8);
      requestAnimationFrame(() => {
        const canvas = simulationArea.querySelector('#sim-canvas');
        if (canvas) drawSimCanvas(canvas, q.height, actualTime, true);
      });
      lockModal();
      showModalResult(true);
    }
  } else {
    const LABELS = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, i) => {
      const wrapper = document.createElement('label');
      wrapper.className = 'option-label' + (solved ? ' disabled' : '');

      const radio = document.createElement('input');
      radio.type     = 'radio';
      radio.name     = 'answer';
      radio.value    = String(i);
      radio.disabled = solved;

      if (!solved) {
        radio.addEventListener('change', () => {
          optionsEl.querySelectorAll('.option-label').forEach(el => el.classList.remove('selected'));
          wrapper.classList.add('selected');
        });
      }

      wrapper.appendChild(radio);
      wrapper.appendChild(document.createTextNode(`${LABELS[i]})  ${optText}`));
      optionsEl.appendChild(wrapper);
    });

    if (solved) {
      lockModal();
      showModalResult(true);
    }
  }

  modalEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

submitBtn.addEventListener('click', () => {
  const q = getQuestion(currentSubject, currentDateStr);

  if (q.type === 'diagram') {
    const selects = diagramLabels ? diagramLabels.querySelectorAll('.diagram-select') : [];
    let correct = 0;
    selects.forEach((sel, i) => {
      const row = sel.closest('.diagram-label-row');
      row.classList.remove('correct', 'wrong');
      if (sel.value === q.correctLabels[i]) {
        correct++;
        row.classList.add('correct');
      } else {
        row.classList.add('wrong');
      }
    });

    if (correct === q.correctLabels.length) {
      setPlayState(currentSubject, currentDateStr, currentDifficulty, true);
      lockModal();
      showModalResult(true);
      renderList(activeSubject);
    } else {
      resultEl.hidden = false;
      resultEl.className = 'wrong';
      resultEl.textContent = `${correct}/${q.correctLabels.length} correct \u2014 Try again!`;
    }

  } else if (q.type === 'simulation') {
    if (_modalSimRunning) return;
    const predInput = simulationArea.querySelector('#sim-prediction');
    const prediction = parseFloat(predInput.value);
    if (isNaN(prediction) || prediction <= 0) {
      predInput.style.outline = '2px solid #e07b7b';
      predInput.focus();
      return;
    }
    predInput.style.outline = '';

    _modalSimRunning = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Running\u2026';
    resultEl.hidden = true;

    const g = 9.8;
    const actualTime = Math.sqrt(2 * q.height / g);
    const startMs = performance.now();
    const canvas = simulationArea.querySelector('#sim-canvas');

    function modalSimFrame(now) {
      const elapsed = (now - startMs) / 1000;
      if (elapsed >= actualTime) {
        drawSimCanvas(canvas, q.height, actualTime, true);
        _modalSimRunning = false;
        const margin = Math.abs(prediction - actualTime) / actualTime;
        if (margin <= 0.10) {
          setPlayState(currentSubject, currentDateStr, currentDifficulty, true);
          lockModal();
          showModalResult(true);
          renderList(activeSubject);
        } else {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Run Again';
          resultEl.hidden = false;
          resultEl.className = 'wrong';
          const dir = prediction > actualTime ? 'too high' : 'too low';
          resultEl.textContent =
            `Ball landed in ${actualTime.toFixed(2)} s — your guess of ${prediction.toFixed(2)} s was ${dir}. Try again!`;
        }
        return;
      }
      drawSimCanvas(canvas, q.height, elapsed, false);
      requestAnimationFrame(modalSimFrame);
    }
    requestAnimationFrame(modalSimFrame);

  } else {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return;

    if (Number(selected.value) === q.correct) {
      setPlayState(currentSubject, currentDateStr, currentDifficulty, true);
      lockModal();
      showModalResult(true);
      renderList(activeSubject);
    } else {
      showModalResult(false);
    }
  }
});
