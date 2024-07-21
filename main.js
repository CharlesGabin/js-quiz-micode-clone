import "./style.css";
import { Questions } from "./questions.js";

const app = document.querySelector("#app");
const startBtn = document.querySelector("#start");
const TIMEOUT = 4000;

startBtn?.addEventListener("click", startQuiz);

function startQuiz(event) {
  console.log(event);
  let currentQuestion = 0;
  let score = 0;

  displayQuestion(currentQuestion);

  function clean() {
    while (app?.firstElementChild) {
      app.firstElementChild.remove();
    }
    const progress = getProgressBar(Questions.length, currentQuestion);
    app?.appendChild(progress);
  }

  function displayQuestion(index) {
    clean();
    const question = Questions[index];

    if (!question) {
      // Finish the quiz
      displayFinishMessage();
      return;
    }

    const title = getTitleElement(question.question);
    app?.appendChild(title);
    const answerDiv = createAnswer(question.answers);
    app?.appendChild(answerDiv);
    const submitBtn = getSubmitBtn();
    submitBtn.addEventListener("click", submitAnswer);
    app?.appendChild(submitBtn);
  }

  function submitAnswer(event) {
    const selectedAnswer = app?.querySelector("input[name='answer']:checked");

    disableAllAnswers();
    const value = selectedAnswer?.value;
    const question = Questions[currentQuestion];
    const isCorrect = question.correct === value;
    // alert(`You selected: ${isCorrect ? "Correct" : "Incorrect"}`);

    if (isCorrect) {
      score++;
    }

    showFeedback(isCorrect, question.correct, value);
    const feedback = getFeedbackMessage(isCorrect, question.correct);
    app?.appendChild(feedback);

    displayNextQuestionButton(() => {
      currentQuestion++;
      displayQuestion(currentQuestion);
    });
  }

  function createAnswer(answers) {
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answes");

    for (const answer of answers) {
      const label = getAnswerElement(answer);
      answerDiv.appendChild(label);
    }

    return answerDiv;
  }

  function displayFinishMessage() {
    const h1 = document.createElement("h1");
    h1.innerText = "Bravo ! You finsihed the quiz";
    const p = document.createElement("p");
    p.innerText = `You scored ${score} / ${Questions.length} points`;

    app?.appendChild(h1);
    app?.appendChild(p);
  }
}

function displayNextQuestionButton(callback) {
  let remainingTimeOut = TIMEOUT;
  app?.querySelector("button")?.remove();

  const getButtonText = () => `Next (${remainingTimeOut / 1000}s)`;

  const nextButton = document.createElement("button");
  nextButton.innerText = getButtonText();

  app?.appendChild(nextButton);

  const interval = setInterval(() => {
    remainingTimeOut -= 1000;
    nextButton.innerText = `Next (${remainingTimeOut / 1000}s)`;
  }, 1000);

  const handleNextQuestion = () => {
    clearInterval(interval);
    clearTimeout(timeout);
    callback?.();
  };

  const timeout = setTimeout(() => {
    handleNextQuestion();
  }, remainingTimeOut);

  nextButton.addEventListener("click", handleNextQuestion);
}

function disableAllAnswers() {
  const radioInputs = document?.querySelectorAll("input[type='radio']");
  for (const radioInput of radioInputs) {
    radioInput.disabled = true;
  }
  // for (const answer of answers) {
  //   answer?.disabled = true;
  // }
}

function showFeedback(isCorrect, correct, answer) {
  const correctAnswerId = formatId(correct);
  const correctElement = document.querySelector(
    `label[for='${correctAnswerId}']`
  );

  const selectedAnswerId = formatId(answer);
  const selectedAnswer = document.querySelector(
    `label[for='${selectedAnswerId}']`
  );
  correctElement?.classList.add("correct");
  selectedAnswer?.classList.add(isCorrect ? "correct" : "incorrect");

  getFeedbackMessage(isCorrect, correct);
}

function getFeedbackMessage(isCorrect, correct) {
  const paragraph = document.createElement("p");
  paragraph.innerText = isCorrect
    ? "Bravo !"
    : `Sorry, but the right answer is ${correct}`;

  return paragraph;
}

function getTitleElement(text) {
  const title = document.createElement("h3");
  title.innerText = text;
  return title;
}

function formatId(text) {
  return text.replaceAll(" ", "-").replaceAll('"', "'").toLowerCase();
}

function getAnswerElement(text) {
  const label = document.createElement("label");
  label.innerText = text;
  const input = document.createElement("input");
  const id = formatId(text);
  input.id = id;
  label.htmlFor = id;
  input.type = "radio";
  input.name = "answer";
  input.value = text;
  label.appendChild(input);
  return label;
}

function getSubmitBtn() {
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Submit";
  submitBtn.type = "submit";
  return submitBtn;
}

function getProgressBar(max, value) {
  const progressBar = document.createElement("progress");
  progressBar.setAttribute("max", max);
  progressBar.setAttribute("value", value);
  return progressBar;
}
