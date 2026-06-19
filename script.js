let currentQuestion = 0;

const questions = [
  {
    q: "What is my favorite color?",
    answers: ["pink"]
  },
  {
    q: "Where did we first meet?",
    answers: ["school", "church", "work"]
  },
  {
    q: "What do I call you?",
    answers: ["baby", "babe", "love"]
  },
  {
    q: "What is my birthday?",
    answers: ["12 feb", "feb 12", "12/02"]
  }
];

function nextQuestion() {
  let input = document.getElementById("answer").value.toLowerCase().trim();

  if (!questions[currentQuestion].answers.includes(input)) {
    alert("Oops 🥺 Try again my love ❤️");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById("question").innerText = questions[currentQuestion].q;
    document.getElementById("answer").value = "";
  } else {
    showPage(2);
  }
}

function showPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
}

function openCard() {
  showPage(3);
  document.getElementById("bgMusic").play();
}

function goToVoice() {
  showPage(4);

  const voice = document.getElementById("voiceNote");
  const music = document.getElementById("bgMusic");

  music.volume = 0.2;
  voice.play();

  voice.onended = () => {
    document.getElementById("continueBtn").classList.remove("hidden");
  };
}

function goToLetter() {
  showPage(5);

  const text = `My love,
Every moment with you has been a blessing...
I love you endlessly ❤️`;

  let i = 0;
  const letter = document.getElementById("letter");

  const typing = setInterval(() => {
    letter.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 50);
}
