document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message!");
      form.reset();
    });

    form.addEventListener("reset", () => {
      alert("Form cleared.");
    });
  }

  const trivia = document.getElementById("trivia-container");
  if (trivia) {
    startTrivia();
  }
});

const quiz = [
  { country: "Japan", capital: "Tokyo" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Australia", capital: "Canberra" },
  { country: "Canada", capital: "Ottawa" },
  { country: "France", capital: "Paris" },
  { country: "Germany", capital: "Berlin" },
  { country: "Spain", capital: "Madrid" },
  { country: "Italy", capital: "Rome" },
  { country: "China", capital: "Beijing" },
  { country: "Russia", capital: "Moscow" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States", capital: "Washington, D.C." },
  { country: "India", capital: "New Delhi" },
  { country: "South Korea", capital: "Seoul" },
  { country: "Thailand", capital: "Bangkok" },
  { country: "Egypt", capital: "Cairo" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Mexico", capital: "Mexico City" },
  { country: "Colombia", capital: "Bogotá" },
  { country: "Kenya", capital: "Nairobi" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Pakistan", capital: "Islamabad" },
  { country: "Nigeria", capital: "Abuja" }
];

let currentQuestion = 0;
let score = 0;

function startTrivia() {
  showQuestion();
}

function showQuestion() {
  const questionText = document.getElementById("question-text");
  const answerBox = document.getElementById("answer");
  const feedback = document.getElementById("feedback");

  if (currentQuestion < quiz.length) {
    questionText.textContent = `What is the capital of ${quiz[currentQuestion].country}?`;
    answerBox.value = "";
    feedback.textContent = "";
  } else {
    questionText.textContent = `Quiz complete! Your score: ${score} out of ${quiz.length}`;
    answerBox.style.display = "none";
    document.querySelector("button").style.display = "none";
    feedback.textContent = "";
  }
}

function submitAnswer() {
  const answerBox = document.getElementById("answer");
  const feedback = document.getElementById("feedback");
  const userAnswer = answerBox.value.trim().toLowerCase();
  const correctAnswer = quiz[currentQuestion].capital.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++;
    currentQuestion++;
    setTimeout(showQuestion, 1000);
  } else {
    feedback.textContent = "❌ Incorrect. Try again!";
    feedback.style.color = "red";
  }
}
