const modal = document.getElementById("modal");
const answerBtn = document.getElementById("answerBtn");
const answer = document.getElementById("answer");

const phrases = [
  "Let me think for a moment...",
  "Hum... interesting...",
  "Great question! Let me see...",
];

const answerArr = [
  "Hum... I don't think so!",
  "YEAH! Definitely",
  "Definitely not!",
  "Don't count on it",
];

function showAnswer() {
  const randomIndex = Math.floor(Math.random() * answerArr.length) + 1;
  answer.textContent = answerArr[randomIndex];
}

let counter = 0;
function thinking() {
  const randomPhrase = Math.floor(Math.random() * phrases.length) + 1;

  answer.textContent += phrases[randomPhrase].charAt(counter);

  counter += 1;

  if (counter < phrases.length) {
    window.setTimeout(thinking, 100);
  } else {
    counter = 0;
    showAnswer();
  }
}

function startThinker() {
  modal.style.display = "block";
  thinking();
}

answerBtn.addEventListener("click", () => {
  startThinker();
});
