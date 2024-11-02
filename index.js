const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const timeCount = document.querySelector("#timer #time_sec");

// if start button is clicked
startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

// if the exit button is clicked
exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

// if the continue button is clicked
continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  showQuestions(0);
  questionCounter(1);
  headerScore();
  startTimer(30);
};

tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);

  headerScore();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);

  headerScore();
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let counter;
let timeValue = 30;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < flexbox.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);
    clearInterval(counter);
    startTimer(timeValue);

    nextBtn.classList.remove("active");
  } else {
    showResultBox();
  }
};

const optionList = document.querySelector(".option-list");

// getting flexbox and options from array
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = ` ${flexbox[index].question}`;

  let optionTag = `<div class="option"><span>${flexbox[index].options[0]}</span></div>
                     <div class="option"><span>${flexbox[index].options[1]}</span></div>
                     <div class="option"><span>${flexbox[index].options[2]}</span></div>
                     <div class="option"><span>${flexbox[index].options[3]}</span></div>
                     `;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  clearInterval(counter);
  let userAnswer = answer.textContent;
  let correctAnswer = flexbox[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");

    // if answer incorrect, auto select correct answer
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // if user has selected, disabled all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    if (time >= 0) {
      timeCount.textContent = time;
      time--;
    }
    if (time === 0) {
      //   console.log("end");
      clearInterval(timer);
      nextBtn.classList.add("active");
      nextBtn.click();
    }
  }
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${flexbox.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${flexbox.length}`;
}

function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${flexbox.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (userScore / flexbox.length) * 100;
  let speed = 20;

  // Ensure the progressEndValue doesn't exceed 100%
  progressEndValue = Math.min(progressEndValue, 100);

  let progress = setInterval(() => {
    progressStartValue++;

    // Cap progressStartValue at progressEndValue
    progressStartValue = Math.min(progressStartValue, progressEndValue);

    progressValue.textContent = `${progressStartValue.toFixed(2)}%`;
    circularProgress.style.background = `conic-gradient(aqua ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
