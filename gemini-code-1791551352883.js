// State Management
let appState = {
  gotItWords: [],
  againWords: [],
  starredWords: [],
  drillSize: 25,
  voiceSpeed: 1.0,
  streakDays: 1,
  lastStudyDate: null,
  theme: 'light'
};

let currentDrillWords = [];
let currentCardIndex = 0;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizMissed = [];

// DOM Elements
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  initTheme();
  initNavigation();
  renderDrawers();
  renderBrowseWords('card');
  setupEventListeners();
  setupKeyboardShortcuts();
});

// LocalStorage Handlers
function loadProgress() {
  const saved = localStorage.getItem('gre333_state');
  if (saved) {
    appState = { ...appState, ...JSON.parse(saved) };
  }
  updateStreak();
}

function saveProgress() {
  localStorage.setItem('gre333_state', JSON.stringify(appState));
  updateProgressUI();
}

// Navigation
function initNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetView = item.dataset.target;
      switchView(targetView);
    });
  });
}

function switchView(viewId) {
  views.forEach(v => v.classList.remove('active'));
  navItems.forEach(n => n.classList.remove('active'));

  const activeView = document.getElementById(viewId);
  if (activeView) activeView.classList.add('active');

  const activeNav = document.querySelector(`[data-target="${viewId}"]`);
  if (activeNav) activeNav.classList.add('active');

  if (viewId === 'view-bookmarks') renderBookmarks();
  if (viewId === 'view-review') renderReviewQueue();
  if (viewId === 'view-progress') updateProgressUI();
}

// Theme Toggle
function initTheme() {
  document.documentElement.setAttribute('data-theme', appState.theme);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', appState.theme);
    saveProgress();
  });
}

// 1. Drawers Feature
function renderDrawers() {
  const container = document.getElementById('drawers-container');
  container.innerHTML = '';
  const drillSize = parseInt(appState.drillSize, 10);
  const totalDrills = Math.ceil(WORD_LIST.length / drillSize);

  for (let i = 0; i < totalDrills; i++) {
    const startIdx = i * drillSize;
    const endIdx = Math.min(startIdx + drillSize, WORD_LIST.length);
    const drillWords = WORD_LIST.slice(startIdx, endIdx);

    const firstWord = drillWords[0].word;
    const lastWord = drillWords[drillWords.length - 1].word;

    const masteredInDrill = drillWords.filter(w => appState.gotItWords.includes(w.word)).length;
    const progressPct = Math.round((masteredInDrill / drillWords.length) * 100);

    const card = document.createElement('div');
    card.className = 'drill-card';
    card.innerHTML = `
      <h3>Drill ${String(i + 1).padStart(2, '0')} · ${firstWord} → ${lastWord}</h3>
      <p>${drillWords.length} words · ${progressPct}% Mastered</p>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
      </div>
    `;
    card.onclick = () => startFlashcardDrill(drillWords);
    container.appendChild(card);
  }
}

// 2. Flashcards Feature
function startFlashcardDrill(words) {
  currentDrillWords = [...words];
  currentCardIndex = 0;
  switchView('view-flashcard');
  displayCard();
}

function displayCard() {
  const cardElement = document.getElementById('flashcard');
  cardElement.classList.remove('flipped');

  if (currentCardIndex >= currentDrillWords.length) {
    alert("🎉 Drill Completed!");
    switchView('view-drawers');
    renderDrawers();
    return;
  }

  const wordObj = currentDrillWords[currentCardIndex];
  document.getElementById('card-counter').textContent = `${currentCardIndex + 1} / ${currentDrillWords.length}`;
  document.getElementById('front-word').textContent = wordObj.word;
  document.getElementById('back-pos').textContent = wordObj.partOfSpeech;
  document.getElementById('back-meaning-eng').textContent = wordObj.englishMeaning;
  document.getElementById('back-meaning-bng').textContent = wordObj.banglaMeaning;
  document.getElementById('back-synonyms').textContent = wordObj.synonyms.join(', ');
  document.getElementById('back-antonyms').textContent = wordObj.antonyms.join(', ');
  document.getElementById('back-example').textContent = `"${wordObj.exampleSentence}"`;
  document.getElementById('back-etymology').textContent = wordObj.etymology;

  const starBtn = document.getElementById('star-btn');
  starBtn.classList.toggle('active', appState.starredWords.includes(wordObj.word));
}

// Event Listeners for Cards
function setupEventListeners() {
  const flashcard = document.getElementById('flashcard');
  flashcard.addEventListener('click', (e) => {
    if (!e.target.closest('.audio-btn') && !e.target.closest('.star-btn')) {
      flashcard.classList.toggle('flipped');
    }
  });

  document.getElementById('speak-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const word = currentDrillWords[currentCardIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = parseFloat(appState.voiceSpeed);
    window.speechSynthesis.speak(utterance);
  });

  document.getElementById('star-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const word = currentDrillWords[currentCardIndex].word;
    const idx = appState.starredWords.indexOf(word);
    if (idx > -1) appState.starredWords.splice(idx, 1);
    else appState.starredWords.push(word);
    document.getElementById('star-btn').classList.toggle('active', idx === -1);
    saveProgress();
  });

  document.getElementById('btn-gotit').addEventListener('click', () => rateCard(true));
  document.getElementById('btn-again').addEventListener('click', () => rateCard(false));
  document.getElementById('btn-back-drawers').addEventListener('click', () => switchView('view-drawers'));
  
  document.getElementById('btn-shuffle').addEventListener('click', () => {
    currentDrillWords.sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    displayCard();
  });

  // Settings
  document.getElementById('btn-reset-data').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all learning progress?")) {
      localStorage.removeItem('gre333_state');
      location.reload();
    }
  });

  document.getElementById('btn-export').addEventListener('click', exportJSON);
  document.getElementById('import-file').addEventListener('change', importJSON);
  document.getElementById('btn-start-quiz').addEventListener('click', generateQuiz);
}

function rateCard(isGotIt) {
  const word = currentDrillWords[currentCardIndex].word;
  if (isGotIt) {
    if (!appState.gotItWords.includes(word)) appState.gotItWords.push(word);
    appState.againWords = appState.againWords.filter(w => w !== word);
  } else {
    if (!appState.againWords.includes(word)) appState.againWords.push(word);
    appState.gotItWords = appState.gotItWords.filter(w => w !== word);
  }
  saveProgress();
  currentCardIndex++;
  displayCard();
}

// 3. Review Queue
function renderReviewQueue() {
  const container = document.getElementById('review-words-list');
  const emptyBox = document.getElementById('review-empty');
  const contentBox = document.getElementById('review-content');

  if (appState.againWords.length === 0) {
    emptyBox.classList.remove('hidden');
    contentBox.classList.add('hidden');
    return;
  }

  emptyBox.classList.add('hidden');
  contentBox.classList.remove('hidden');
  container.innerHTML = appState.againWords.map(w => `<div class="word-card-item">${w}</div>`).join('');

  document.getElementById('start-review-btn').onclick = () => {
    const reviewList = WORD_LIST.filter(w => appState.againWords.includes(w.word));
    startFlashcardDrill(reviewList);
  };
}

// 4. Bookmarks
function renderBookmarks() {
  const container = document.getElementById('bookmarks-list');
  const emptyBox = document.getElementById('bookmarks-empty');

  if (appState.starredWords.length === 0) {
    emptyBox.classList.remove('hidden');
    container.innerHTML = '';
    return;
  }

  emptyBox.classList.add('hidden');
  const starredObjects = WORD_LIST.filter(w => appState.starredWords.includes(w.word));
  container.innerHTML = starredObjects.map(w => `
    <div class="word-card-item">
      <h3>${w.word}</h3>
      <p><strong>Meaning:</strong> ${w.englishMeaning}</p>
      <p><em>${w.banglaMeaning}</em></p>
    </div>
  `).join('');
}

// 5. Quiz Generator
function generateQuiz() {
  const poolType = document.getElementById('quiz-pool').value;
  const length = parseInt(document.getElementById('quiz-length').value, 10);

  let pool = WORD_LIST;
  if (poolType === 'bookmarks') pool = WORD_LIST.filter(w => appState.starredWords.includes(w.word));
  if (poolType === 'mistakes') pool = WORD_LIST.filter(w => appState.againWords.includes(w.word));

  if (pool.length < 4) {
    alert("You need at least 4 words in the selected pool to generate a quiz!");
    return;
  }

  quizQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, length);
  quizIndex = 0;
  quizScore = 0;
  quizMissed = [];

  document.getElementById('quiz-setup-card').classList.add('hidden');
  document.getElementById('quiz-active-box').classList.remove('hidden');
  document.getElementById('quiz-results-box').classList.add('hidden');

  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (quizIndex >= quizQuestions.length) {
    showQuizResults();
    return;
  }

  const q = quizQuestions[quizIndex];
  document.getElementById('quiz-progress-text').textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('quiz-score-live').textContent = `Score: ${quizScore}`;
  document.getElementById('quiz-question-text').textContent = `What is the meaning of "${q.word}"?`;

  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = '';

  const wrongDistractors = WORD_LIST.filter(w => w.word !== q.word).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [q, ...wrongDistractors].sort(() => Math.random() - 0.5);

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt.englishMeaning;
    btn.onclick = () => handleQuizAnswer(opt.word === q.word, btn, q.word);
    optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(isCorrect, btnElement, targetWord) {
  if (isCorrect) {
    btnElement.classList.add('correct');
    quizScore++;
  } else {
    btnElement.classList.add('wrong');
    if (!appState.againWords.includes(targetWord)) appState.againWords.push(targetWord);
    quizMissed.push(targetWord);
  }
  saveProgress();

  setTimeout(() => {
    quizIndex++;
    renderQuizQuestion();
  }, 800);
}

function showQuizResults() {
  document.getElementById('quiz-active-box').classList.add('hidden');
  document.getElementById('quiz-results-box').classList.remove('hidden');
  document.getElementById('quiz-final-score').textContent = `${quizScore} / ${quizQuestions.length}`;
}

// 6. Browse All Words
function renderBrowseWords(layout = 'card') {
  const container = document.getElementById('browse-container');
  container.className = `browse-container layout-${layout}`;
  container.innerHTML = WORD_LIST.map(w => `
    <div class="word-card-item">
      <h3>${w.word} <span style="font-size: 0.75rem; color: var(--text-muted);">(${w.partOfSpeech})</span></h3>
      <p>${w.englishMeaning}</p>
      <p style="color: var(--accent);">${w.banglaMeaning}</p>
    </div>
  `).join('');

  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBrowseWords(btn.dataset.layout);
    };
  });
}

// 7. Progress & Streak
function updateProgressUI() {
  const total = WORD_LIST.length;
  const gotIt = appState.gotItWords.length;
  const again = appState.againWords.length;
  const unseen = total - (gotIt + again);

  document.getElementById('stat-gotit').textContent = gotIt;
  document.getElementById('stat-again').textContent = again;
  document.getElementById('stat-unseen').textContent = unseen;

  document.getElementById('bar-gotit').style.width = `${(gotIt / total) * 100}%`;
  document.getElementById('bar-again').style.width = `${(again / total) * 100}%`;
  document.getElementById('bar-unseen').style.width = `${(unseen / total) * 100}%`;

  document.getElementById('streak-count').textContent = appState.streakDays;
}

function updateStreak() {
  const today = new Date().toDateString();
  if (appState.lastStudyDate !== today) {
    appState.streakDays = appState.lastStudyDate ? appState.streakDays + 1 : 1;
    appState.lastStudyDate = today;
    saveProgress();
  }
}

// Desktop Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const flashcardView = document.getElementById('view-flashcard');
    if (flashcardView.classList.contains('active')) {
      if (e.code === 'Space') {
        e.preventDefault();
        document.getElementById('flashcard').classList.toggle('flipped');
      } else if (e.code === 'Digit1') {
        rateCard(false);
      } else if (e.code === 'Digit2') {
        rateCard(true);
      }
    }
  });
}

// JSON Backup
function exportJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", "gre333_backup.json");
  dlAnchor.click();
}

function importJSON(e) {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    appState = JSON.parse(event.target.result);
    saveProgress();
    alert("Backup restored successfully!");
    location.reload();
  };
  fileReader.readAsText(e.target.files[0]);
}