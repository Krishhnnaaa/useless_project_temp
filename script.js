// -------------------------------------------------------------------
//  QUESTIONS
// -------------------------------------------------------------------
const QUESTIONS = [
  "Hey! What do people call you? ??",
  "How old are you? (No judgment, promise!) ??",
  "Where are you from? City, country � go! ??",
  "What do you do for a living? Or wish you did? ??",
  "What's your go-to comfort food? ??",
  "Pick one superpower: fly, invisible, or time travel? ?",
  "One word that describes you best � GO! ??"
];

// -------------------------------------------------------------------
//  5�7 PIXEL FONT
// -------------------------------------------------------------------
const FONT_W = 4, FONT_H = 7;
const _ = 0, X = 1;
const BASE_GLYPHS = {
  ' ': [[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_]],
  'A': [[_,X,X,_],[X,_,_,X],[X,_,_,X],[X,X,X,X],[X,_,_,X],[X,_,_,X],[X,_,_,X]],
  'B': [[X,X,X,_],[X,_,_,X],[X,_,_,X],[X,X,X,_],[X,_,_,X],[X,_,_,X],[X,X,X,_]],
  'C': [[_,X,X,X],[X,_,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[_,X,X,X]],
  'D': [[X,X,X,_],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,X,X,_]],
  'E': [[X,X,X,X],[X,_,_,_],[X,_,_,_],[X,X,X,_],[X,_,_,_],[X,_,_,_],[X,X,X,X]],
  'F': [[X,X,X,X],[X,_,_,_],[X,_,_,_],[X,X,X,_],[X,_,_,_],[X,_,_,_],[X,_,_,_]],
  'G': [[_,X,X,X],[X,_,_,_],[X,_,_,_],[X,_,X,X],[X,_,_,X],[X,_,_,X],[_,X,X,X]],
  'H': [[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,X,X,X],[X,_,_,X],[X,_,_,X],[X,_,_,X]],
  'I': [[X,X,X,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[X,X,X,_]],
  'J': [[_,_,X,X],[_,_,_,X],[_,_,_,X],[_,_,_,X],[_,_,_,X],[X,_,_,X],[_,X,X,_]],
  'K': [[X,_,_,X],[X,_,X,_],[X,X,_,_],[X,X,_,_],[X,_,X,_],[X,_,X,_],[X,_,_,X]],
  'L': [[X,_,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[X,X,X,X]],
  'M': [[X,_,_,X],[X,X,X,X],[X,X,X,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X]],
  'N': [[X,_,_,X],[X,X,_,X],[X,X,_,X],[X,_,X,X],[X,_,_,X],[X,_,_,X],[X,_,_,X]],
  'O': [[_,X,X,_],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[_,X,X,_]],
  'P': [[X,X,X,_],[X,_,_,X],[X,_,_,X],[X,X,X,_],[X,_,_,_],[X,_,_,_],[X,_,_,_]],
  'Q': [[_,X,X,_],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,X,X],[X,_,_,X],[_,X,X,X]],
  'R': [[X,X,X,_],[X,_,_,X],[X,_,_,X],[X,X,X,_],[X,_,X,_],[X,_,_,X],[X,_,_,X]],
  'S': [[_,X,X,X],[X,_,_,_],[X,_,_,_],[_,X,X,_],[_,_,_,X],[_,_,_,X],[X,X,X,_]],
  'T': [[X,X,X,X],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_]],
  'U': [[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[_,X,X,_]],
  'V': [[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[_,X,X,_],[_,_,X,_]],
  'W': [[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,_,_,X],[X,X,X,X],[X,X,X,X],[X,_,_,X]],
  'X': [[X,_,_,X],[X,_,_,X],[_,X,X,_],[_,X,X,_],[_,X,X,_],[X,_,_,X],[X,_,_,X]],
  'Y': [[X,_,_,X],[X,_,_,X],[_,X,X,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_]],
  'Z': [[X,X,X,X],[_,_,_,X],[_,_,X,_],[_,X,_,_],[X,_,_,_],[X,_,_,_],[X,X,X,X]],
  '0': [[_,X,X,_],[X,_,_,X],[X,_,X,X],[X,X,_,X],[X,_,_,X],[X,_,_,X],[_,X,X,_]],
  '1': [[_,_,X,_],[_,X,X,_],[_,_,X,_],[_,_,X,_],[_,_,X,_],[_,_,X,_],[_,X,X,X]],
  '2': [[_,X,X,_],[X,_,_,X],[_,_,_,X],[_,_,X,_],[_,X,_,_],[X,_,_,_],[X,X,X,X]],
  '3': [[X,X,X,_],[_,_,_,X],[_,_,_,X],[_,X,X,_],[_,_,_,X],[_,_,_,X],[X,X,X,_]],
  '4': [[_,_,X,_],[_,X,X,_],[X,_,X,_],[X,X,X,X],[_,_,X,_],[_,_,X,_],[_,_,X,_]],
  '5': [[X,X,X,X],[X,_,_,_],[X,X,X,_],[_,_,_,X],[_,_,_,X],[_,_,_,X],[X,X,X,_]],
  '6': [[_,X,X,_],[X,_,_,_],[X,_,_,_],[X,X,X,_],[X,_,_,X],[X,_,_,X],[_,X,X,_]],
  '7': [[X,X,X,X],[_,_,_,X],[_,_,X,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_]],
  '8': [[_,X,X,_],[X,_,_,X],[X,_,_,X],[_,X,X,_],[X,_,_,X],[X,_,_,X],[_,X,X,_]],
  '9': [[_,X,X,_],[X,_,_,X],[X,_,_,X],[_,X,X,X],[_,_,_,X],[_,_,_,X],[_,X,X,_]],
  '!': [[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,X,_,_],[_,_,_,_],[_,X,_,_]],
  '?': [[_,X,X,_],[X,_,_,X],[_,_,_,X],[_,_,X,_],[_,X,_,_],[_,_,_,_],[_,X,_,_]],
  '.': [[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,X,_,_]],
  ',': [[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,X,_,_],[X,_,_,_]],
  "'": [[_,X,_,_],[_,X,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_]],
  '-': [[_,_,_,_],[_,_,_,_],[_,_,_,_],[X,X,X,X],[_,_,_,_],[_,_,_,_],[_,_,_,_]],
  '_': [[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[X,X,X,X]],
  ':': [[_,_,_,_],[_,X,_,_],[_,_,_,_],[_,_,_,_],[_,X,_,_],[_,_,_,_],[_,_,_,_]],
  '@': [[_,X,X,_],[X,_,_,X],[X,_,X,X],[X,X,X,X],[X,X,_,_],[X,_,_,_],[_,X,X,_]],
  '#': [[_,X,_,X],[_,X,_,X],[X,X,X,X],[_,X,_,X],[X,X,X,X],[_,X,_,X],[_,X,_,X]],
  '+': [[_,_,_,_],[_,X,_,_],[_,X,_,_],[X,X,X,X],[_,X,_,_],[_,X,_,_],[_,_,_,_]],
  '=': [[_,_,_,_],[_,_,_,_],[X,X,X,X],[_,_,_,_],[X,X,X,X],[_,_,_,_],[_,_,_,_]],
  '/': [[_,_,_,X],[_,_,X,_],[_,_,X,_],[_,X,_,_],[_,X,_,_],[X,_,_,_],[X,_,_,_]],
  '(': [[_,_,X,_],[_,X,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[_,X,_,_],[_,_,X,_]],
  ')': [[_,X,_,_],[_,_,X,_],[_,_,_,X],[_,_,_,X],[_,_,_,X],[_,_,X,_],[_,X,_,_]],
  '*': [[_,_,_,_],[X,_,X,_],[_,X,_,_],[X,X,X,X],[_,X,_,_],[X,_,X,_],[_,_,_,_]],
  '&': [[_,X,X,_],[X,_,_,X],[X,_,X,_],[_,X,_,_],[X,_,X,_],[X,_,_,X],[_,X,X,X]],
  '%': [[X,_,_,X],[X,_,X,_],[_,_,X,_],[_,X,_,_],[_,X,_,_],[X,_,X,_],[_,X,_,X]],
  '<': [[_,_,X,_],[_,X,_,_],[X,_,_,_],[X,_,_,_],[X,_,_,_],[_,X,_,_],[_,_,X,_]],
  '>': [[_,X,_,_],[_,_,X,_],[_,_,_,X],[_,_,_,X],[_,_,_,X],[_,_,X,_],[_,X,_,_]],
  '"': [[X,_,X,_],[X,_,X,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_],[_,_,_,_]],
};
// lowercase ? uppercase fallback
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  BASE_GLYPHS[c] = BASE_GLYPHS[c.toUpperCase()];
});
function getGlyph(ch) { return BASE_GLYPHS[ch] || BASE_GLYPHS['?'] || BASE_GLYPHS[' ']; }

// -------------------------------------------------------------------
//  GITHUB COLORS
// -------------------------------------------------------------------
const GH = {
  bg:    '#0d1117',
  empty: '#161b22',
  l1:    '#0e4429',
  l2:    '#006d32',
  l3:    '#26a641',
  l4:    '#39d353',
};
function rndGhColor() {
  const r = Math.random();
  if (r < 0.25) return GH.l1;
  if (r < 0.55) return GH.l2;
  if (r < 0.80) return GH.l3;
  return GH.l4;
}

// -------------------------------------------------------------------
//  KEYBOARD
// -------------------------------------------------------------------
const KB_LAYOUT = [
  ['`','1','2','3','4','5','6','7','8','9','0','-','=','Bksp'],
  ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'],
  ['Caps','a','s','d','f','g','h','j','k','l',';',"'",'Enter'],
  ['Shift','z','x','c','v','b','n','m',',','.','/','Shift'],
  ['Space'],
];
const WIDE = { Bksp:'w17', Tab:'w15', Caps:'w20', Enter:'w22', Shift:'w20', Space:'wsp' };
const keyEls = {};

function buildKeyboard() {
  const kb = document.getElementById('keyboard');
  KB_LAYOUT.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    row.forEach(k => {
      const el = document.createElement('div');
      el.className = 'key' + (WIDE[k] ? ' '+WIDE[k] : '');
      el.textContent = k;
      rowEl.appendChild(el);
      if (k === 'Space') { keyEls[' '] = el; }
      else if (!WIDE[k]) {
        keyEls[k] = el;
        keyEls[k.toLowerCase()] = el;
        keyEls[k.toUpperCase()] = el;
      }
    });
    kb.appendChild(rowEl);
  });
}

function lightKey(ch) {
  const el = keyEls[ch] || keyEls[ch.toLowerCase()] || keyEls[ch.toUpperCase()];
  if (!el) return;
  el.classList.add('lit');
  setTimeout(() => el.classList.remove('lit'), 220);
}

// -------------------------------------------------------------------
//  GRID RENDERER
// -------------------------------------------------------------------
const CELL = 11, GAP = 2, STEP = 11;
const ROWS = 7, PAD = 1;
const CHAR_COLS = FONT_W + 1; // 5 columns per char
const CANVAS_H = (ROWS + PAD*2) * STEP;

// Color cache: charColorMap[charIndex][pixelKey] = color string
let charColorMap = [];

function setupCanvas(canvas) {
  const W = canvas.parentElement.clientWidth - 40;
  canvas.width  = W;
  canvas.height = CANVAS_H;
}

function drawGrid(canvas, text, scroll) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = GH.bg;
  ctx.fillRect(0, 0, W, H);

  const visibleCharCols = Math.ceil(W / STEP);

  // Draw empty cell grid as base
  for (let col = 0; col * STEP < W; col++) {
    for (let row = 0; row < ROWS + PAD*2; row++) {
      ctx.fillStyle = GH.empty;
      ctx.fillRect(col * STEP, row * STEP, CELL - GAP, CELL - GAP);
    }
  }

  // Draw characters
  const maxChars = Math.ceil(visibleCharCols / CHAR_COLS) + 2;
  for (let ci = scroll; ci < Math.min(scroll + maxChars, text.length); ci++) {
    const ch = text[ci];
    const glyph = getGlyph(ch.toUpperCase ? ch.toUpperCase() : ch);
    if (!glyph) continue;
    const charX = (ci - scroll) * CHAR_COLS * STEP;
    if (charX > W) break;

    if (!charColorMap[ci]) charColorMap[ci] = {};

    for (let row = 0; row < FONT_H; row++) {
      for (let col = 0; col < FONT_W; col++) {
        const on = glyph[row][col];
        const key = row * FONT_W + col;
        if (!charColorMap[ci][key]) {
          charColorMap[ci][key] = on ? rndGhColor() : GH.empty;
        }
        const px = charX + col * STEP;
        const py = (PAD + row) * STEP;
        if (px + STEP > W) continue;
        ctx.fillStyle = charColorMap[ci][key];
        ctx.fillRect(px, py, CELL - GAP, CELL - GAP);
      }
    }
  }
}

function computeScroll(text, canvas) {
  const W = canvas.width;
  const visibleChars = Math.floor(W / (CHAR_COLS * STEP));
  if (text.length <= visibleChars) return 0;
  return text.length - visibleChars + 1;
}

function renderMonthLabels(containerId, canvasId) {
  const container = document.getElementById(containerId);
  const canvas = document.getElementById(canvasId);
  container.innerHTML = '';
  const W = canvas ? canvas.width : 700;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const spacing = Math.floor(W / months.length);
  months.forEach((m, i) => {
    const lbl = document.createElement('span');
    lbl.className = 'month-label';
    lbl.textContent = m;
    lbl.style.left = (i * spacing) + 'px';
    container.appendChild(lbl);
  });
}

// -------------------------------------------------------------------
//  Q&A STATE
// -------------------------------------------------------------------
let currentQ = 0;
const answers = [];
let currentText = '';
let scrollOffset = 0;
let typeTimer = null;

function showQuestion(index) {
  const sec = document.getElementById('qa-section');
  sec.classList.remove('fade-out');
  sec.style.opacity = '1';
  sec.style.transform = '';

  document.getElementById('question-counter').textContent =
    `Question ${index + 1} of ${QUESTIONS.length}`;

  typeWriteQuestion(QUESTIONS[index]);

  const input = document.getElementById('answer-input');
  input.value = '';
  resetWpm();
  currentText = '';
  scrollOffset = 0;
  charColorMap = [];

  const canvas = document.getElementById('grid-canvas');
  setupCanvas(canvas);
  drawGrid(canvas, '', 0);
  renderMonthLabels('month-labels', 'grid-canvas');
  updateProgress(currentQ, QUESTIONS.length);
  setTimeout(() => input.focus(), 600);
}

function typeWriteQuestion(text) {
  const el = document.getElementById('question-text');
  el.textContent = '';
  let i = 0;
  clearInterval(typeTimer);
  typeTimer = setInterval(() => {
    if (i < text.length) { el.textContent += text[i++]; }
    else { clearInterval(typeTimer); }
  }, 40);
}

function goNext() {
  const input = document.getElementById('answer-input');
  const answer = input.value.trim();
  answers.push({ q: QUESTIONS[currentQ], a: answer || '(no answer)' });

  const sec = document.getElementById('qa-section');
  sec.classList.add('fade-out');
  resetWpm();

  setTimeout(() => {
    currentQ++;
    if (currentQ < QUESTIONS.length) {
      showQuestion(currentQ);
    } else {
      showWrap();
    }
  }, 550);
}

function showWrap() {
  document.getElementById('qa-section').style.display = 'none';
  document.getElementById('keyboard-section').style.display = 'none';
  document.getElementById('grid-section').style.display = 'none';
  document.getElementById('wrap-section').classList.add('visible');
  setTimeout(launchConfetti, 400);

  const combined = answers.map(a => a.a).join('   ');
  charColorMap = [];

  const wCanvas = document.getElementById('wrap-canvas');
  const section = document.getElementById('wrap-grid-section');
  const minimumWidth = section.clientWidth - 40;
  const contentWidth = Math.max(minimumWidth, combined.length * CHAR_COLS * STEP + STEP);
  wCanvas.width  = contentWidth;
  wCanvas.height = CANVAS_H;
  wCanvas.style.width = contentWidth + 'px';
  document.getElementById('wrap-month-labels').style.width = contentWidth + 'px';
  drawGrid(wCanvas, combined, 0);
  renderMonthLabels('wrap-month-labels', 'wrap-canvas');

  const container = document.getElementById('wrap-answers');
  container.innerHTML = '';
  answers.forEach((qa, i) => {
    const div = document.createElement('div');
    div.className = 'wrap-qa';
    div.style.animationDelay = `${i * 0.12}s`;
    div.innerHTML = `<div class="wrap-qa-q">${qa.q}</div><div class="wrap-qa-a">${qa.a}</div>`;
    container.appendChild(div);
  });
}

function restart() {
  currentQ = 0;
  answers.length = 0;
  charColorMap = [];
  currentText = '';
  scrollOffset = 0;

  document.getElementById('qa-section').style.display = '';
  document.getElementById('keyboard-section').style.display = '';
  document.getElementById('grid-section').style.display = '';
  document.getElementById('wrap-section').classList.remove('visible');
  showQuestion(0);
}

// -------------------------------------------------------------------
//  INIT
// -------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  buildKeyboard();

  const canvas = document.getElementById('grid-canvas');
  setupCanvas(canvas);
  drawGrid(canvas, '', 0);
  renderMonthLabels('month-labels', 'grid-canvas');
  showQuestion(0);

  const input = document.getElementById('answer-input');

  // Key lighting on keydown
  document.addEventListener('keydown', e => {
    const k = e.key;
    if (k.length === 1) { lightKey(k); }
    else if (k === 'Backspace') { lightKey('Bksp'); }
    else if (k === 'Tab')       { lightKey('Tab'); }
    else if (k === 'CapsLock')  { lightKey('Caps'); }
    else if (k === 'Shift')     { lightKey('Shift'); }
    else if (k === 'Enter')     { lightKey('Enter'); }
  });

  // Enter ? next question
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') goNext();
  });

  // Grid updates on input
  input.addEventListener('input', () => {
    currentText = input.value;
    if (charColorMap.length > currentText.length) {
      charColorMap.splice(currentText.length);
    }
    scrollOffset = computeScroll(currentText, canvas);
    updateWpm(currentText);
    drawGrid(canvas, currentText, scrollOffset);
  });

  document.getElementById('next-btn').addEventListener('click', goNext);
  document.getElementById('restart-btn').addEventListener('click', restart);
  document.getElementById('copy-btn').addEventListener('click', copyAnswers);

  window.addEventListener('resize', () => {
    setupCanvas(canvas);
    scrollOffset = computeScroll(currentText, canvas);
    updateWpm(currentText);
    drawGrid(canvas, currentText, scrollOffset);
    renderMonthLabels('month-labels', 'grid-canvas');
  });
});

// =================================================================
//  PROGRESS BAR
// =================================================================
function updateProgress(answeredCount, total) {
  const pct = (answeredCount / total) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent =
    answeredCount + ' / ' + total + ' answered';
}

// =================================================================
//  WPM TRACKER
// =================================================================
let wpmStart = null;
let wpmWordCount = 0;
let wpmTimer = null;
const wpmBadge = document.getElementById ? null : null; // resolved below

function startWpm() {
  wpmStart = Date.now();
}

function updateWpm(text) {
  const badge = document.getElementById('wpm-badge');
  if (!text.trim()) {
    badge.classList.remove('show');
    wpmStart = null;
    return;
  }
  if (!wpmStart) wpmStart = Date.now();
  const elapsed = (Date.now() - wpmStart) / 1000 / 60; // minutes
  const words = text.trim().split(/\s+/).length;
  const wpm = elapsed > 0 ? Math.round(words / elapsed) : 0;
  badge.textContent = wpm + ' WPM';
  badge.classList.add('show');
}

function resetWpm() {
  wpmStart = null;
  const badge = document.getElementById('wpm-badge');
  badge.classList.remove('show');
}

// =================================================================
//  CONFETTI
// =================================================================
function launchConfetti() {
  const colors = ['#39d353','#26a641','#006d32','#fff','#f0f0f0','#ffd700'];
  const count = 120;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const size = Math.random() * 9 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    const angle = Math.random() * 360;
    const duration = 1.2 + Math.random() * 1.6;
    const delay = Math.random() * 0.7;
    Object.assign(el.style, {
      position: 'fixed',
      top: '-20px',
      left: startX + 'px',
      width: size + 'px',
      height: size * (Math.random() > 0.5 ? 1 : 2.5) + 'px',
      background: color,
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      opacity: '1',
      zIndex: '9999',
      pointerEvents: 'none',
      transform: 'rotate(' + angle + 'deg)',
      animation: `confettiFall ${duration}s ${delay}s ease-in forwards`,
    });
    document.body.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000 + 200);
  }
}

// Inject confetti keyframe once
(function injectConfettiCSS() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes confettiFall {
      0%   { transform: translateY(0) rotate(0deg);   opacity: 1; }
      80%  { opacity: 1; }
      100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();

// =================================================================
//  COPY ANSWERS
// =================================================================
function copyAnswers() {
  const text = answers.map((qa, i) =>
    `Q${i+1}: ${qa.q}\nA: ${qa.a}`
  ).join('\n\n');
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.textContent = '? Copied!';
    setTimeout(() => { btn.textContent = '?? Copy Answers'; }, 2000);
  });
}