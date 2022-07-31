const modal = document.getElementById("modal");
const answerBtn = document.getElementById("answerBtn");
const answer = document.getElementById("answer");
const askAgainBtn = document.getElementById("askAgainBtn");

const phrases = [
  "Let me think for a moment...",
  "Hum... interesting...",
  "Great question! Let me see...",
];

let phrase;

const answers = [
  "It is decidedly so.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Reply hazy, try again.",
  "Yes definitely.",
  "Ask again later.",
  "Better not tell you now.",
  "Yes.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "It is certain.",
  "Don't count on it.",
  "My reply is no.",
  "Signs point to yes.",
  "My sources say no.",
  "Outlook not so good.",
  "You may rely on it.",
  "Very doubtful.",
  "Without a doubt.",
];

function setPhrase() {
  const randomPhrase = Math.floor(Math.random() * phrases.length) + 1;

  phrase = phrases[randomPhrase];
}

function showAnswer() {
  const randomAnswer = Math.floor(Math.random() * answers.length) + 1;

  answer.textContent = answers[randomAnswer];
}

let position = 0;
function thinking() {
  answer.textContent += phrase.charAt(position);

  position += 1;

  if (position < phrase.length) {
    window.setTimeout(thinking, 130);
  } else {
    position = 0;
    showAnswer();
  }
}

function startThinker() {
  modal.style.display = "block";
  setPhrase()
  thinking();
}

answerBtn.addEventListener("click", () => {
  startThinker();
});

askAgainBtn.addEventListener("click", () => {
  modal.style.display = "none";
  answer.textContent = "";
})
