const modal = document.getElementById("modal");
const answerBtn = document.getElementById("answerBtn");
const answer = document.getElementById("answer");

const answerArr = [
  "Hum... I don't think so!",
  "YEAH! Definitely",
  "Definitely not!",
  "Don't count on it",
];

function thinking() {
  const phrase = "Let me think for a moment...";

  let letter;
  for (let i = 0; i < phrase.length; i++) {
    letter = phrase.slice(i, i + 1);
    answer.textContent = letter;
    setInterval(500);
  }


}

function showAnswer() {
  modal.style.display = "block";
  thinking();
}

answerBtn.addEventListener("click", () => {
  showAnswer();
});
