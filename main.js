// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const downloadBtn = document.getElementById('download-btn');
const retryBtn = document.getElementById('retry-btn');

// State Variables
let currentQuestionIndex = 0;
let answers = []; // Stores the selected type (A, B, C, D, E) for each question

// Events
startBtn.addEventListener('click', startTest);
retryBtn.addEventListener('click', restartTest);
downloadBtn.addEventListener('click', downloadResult);

function startTest() {
  currentQuestionIndex = 0;
  answers = [];
  showScreen(questionScreen);
  renderQuestion();
}

function showScreen(screenElement) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screenElement.classList.add('active');
}

function renderQuestion() {
  const currentQ = questions[currentQuestionIndex];
  
  // Update UI
  questionNumber.innerText = `Q${currentQ.id}.`;
  questionText.innerText = currentQ.text;
  
  // Update Progress Bar (currentQ.id ranges from 1 to 10)
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  // Render Options
  optionsContainer.innerHTML = '';
  currentQ.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = option.text;
    btn.onclick = () => handleOptionSelect(option.type);
    optionsContainer.appendChild(btn);
  });
}

function handleOptionSelect(selectedType) {
  answers.push(selectedType);

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    // Add a slight fade effect by removing and adding content quickly
    optionsContainer.style.opacity = 0;
    questionText.style.opacity = 0;
    setTimeout(() => {
      renderQuestion();
      optionsContainer.style.opacity = 1;
      questionText.style.opacity = 1;
    }, 200);
  } else {
    // Finish Test
    calculateResult();
  }
}

function calculateResult() {
  showScreen(loadingScreen);

  // Count frequencies
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  answers.forEach(type => counts[type]++);

  // Find max count
  let maxCount = 0;
  let candidates = [];
  for (const [type, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      candidates = [type];
    } else if (count === maxCount) {
      candidates.push(type);
    }
  }

  let finalType = candidates[0];

  // Tie-breaker logic
  if (candidates.length > 1) {
    const q1Type = answers[0];
    const q2Type = answers[1];

    if (candidates.includes(q1Type)) {
      finalType = q1Type;
    } else if (candidates.includes(q2Type)) {
      finalType = q2Type;
    } else {
      // If neither Q1 nor Q2 type is in candidates (rare, but just in case)
      finalType = candidates[0];
    }
  }

  // Delay for dramatic effect
  setTimeout(() => {
    renderResult(finalType);
  }, 1500);
}

function renderResult(type) {
  const data = resultsData[type];

  document.getElementById('result-icon').innerText = data.icon;
  document.getElementById('result-title').innerText = data.typeTitle;
  document.getElementById('result-catchphrase').innerText = data.catchphrase;
  document.getElementById('result-empathy').innerText = data.empathyText;
  document.getElementById('result-intro').innerText = data.intro;
  
  // Render features
  const featuresList = document.getElementById('result-features');
  featuresList.innerHTML = '';
  data.features.forEach(f => {
    const li = document.createElement('li');
    li.innerText = f;
    featuresList.appendChild(li);
  });

  // Recommend reason
  document.getElementById('result-recommend-reason').innerText = data.recommendReason;

  // Starter Book
  document.getElementById('starter-book-title').innerHTML = `<a href="${data.starterBook.link}" target="_blank" rel="noopener noreferrer">${data.starterBook.title}</a>`;
  document.getElementById('starter-book-reason').innerText = data.starterReason;

  // Other Books (filter out starter book by comparing titles)
  const otherBooksList = document.getElementById('result-books');
  otherBooksList.innerHTML = '';
  data.books.forEach(book => {
    if (book.title !== data.starterBook.title) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${book.link}" target="_blank" rel="noopener noreferrer">${book.title}</a>`;
      otherBooksList.appendChild(li);
    }
  });

  showScreen(resultScreen);
}

function restartTest() {
  answers = [];
  currentQuestionIndex = 0;
  showScreen(startScreen);
}

function downloadResult() {
  // Hide buttons visually if they are inside capture area, but here they are outside!
  const captureArea = document.getElementById('capture-area');
  const oldTransform = captureArea.style.transform;
  
  // Prevent clipping by temporarily removing some styles if needed
  window.scrollTo(0, 0);

  html2canvas(captureArea, {
    scale: 2, // higher resolution
    backgroundColor: null, // Keep gradient
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = '나의_북BTI_결과.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    console.error("캡처 실패:", err);
    alert("이미지 다운로드에 실패했습니다.");
  });
}

// Initial setup
optionsContainer.style.transition = "opacity 0.2s ease";
questionText.style.transition = "opacity 0.2s ease";
