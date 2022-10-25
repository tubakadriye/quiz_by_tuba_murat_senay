let correctAnswer = 0;
let point = 0;
let form = document.querySelector("#form");
let messageParagraph = document.querySelector("#message");

let questions = [
  {
    question: "Who is making the Web standards?",
    options: ["Google", "Microsoft", "Mozilla", "The World Wide Consortium"],
    answer: "The World Wide Consortium",
  },

  {
    question: "Choose the correct HTML element for the largest heading?",
    options: ["<head>", "<h6>", "<h1>", "<heading>"],
    answer: "<h1>",
  },
  {
    question: "How can you make a numbered list?",
    options: ["<list>", "<dl>", "<ul>", "<ol>"],
    answer: "<ol>",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["<alt>", "<longdesc>", "<src>", "<title>"],
    answer: "<alt>",
  },
  {
    question:
      "In HTML, which attribute is used to specify that an input field must be filled out?",
    options: ["placeholder", "formvalidate", "required", "validate"],
    answer: "required",
  },
];

let currentQuestion = Math.floor(Math.random() * questions.length);

let questionParagraph = document.querySelector("#question");
questionParagraph.innerText = questions[currentQuestion].question;
questions[currentQuestion].options.forEach((option, index) => {
  let input = document.querySelector(`#input-${index}`);
  input.value = option;
});

function getNextQuestion(e) {
  let message = "";
  if (questions.length == 0) {
    if (point == 100) {
      message =
        "Congratulations. You got 100 points. Would you like to work with us?";
    } else if (point == 80) {
      message = "Good job. You got 80 points. Bravo";
    } else if (point == 60) {
      message = "Not bad. You got 60 points. Keep studying";
    } else if (point == 40) {
      message = "You got 40 points. You need to study more";
    } else if (point == 20) {
      message = "You got 20 points. Sorry you should write more code";
    } else {
      message = "Too bad. You got 0 points. Try to start from beginning again";
    }
    messageParagraph.innerText = message;
  } else {
    if (questions.length == 1) {
      document.querySelector("button").innerText = "Display Result";
    }
    document.getElementById("input-0").disabled = false;
    document.getElementById("input-1").disabled = false;
    document.getElementById("input-2").disabled = false;
    document.getElementById("input-3").disabled = false;
    currentQuestion = Math.floor(Math.random() * questions.length);

    let questionParagraph = document.querySelector("#question");
    questionParagraph.innerText = questions[currentQuestion].question;
    questions[currentQuestion].options.forEach((option, index) => {
      let input = document.querySelector(`#input-${index}`);
      input.value = option;
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#input-0").className = "";
  document.querySelector("#input-1").className = "";
  document.querySelector("#input-2").className = "";
  document.querySelector("#input-3").className = "";
  questions.splice(currentQuestion, 1);
  getNextQuestion(e);
});

form.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    let userAnswer = e.target.value;
    if (userAnswer == questions[currentQuestion]?.answer) {
      e.target.classList.add("correct");
      point += 20;
    } else {
      e.target.classList.add("wrong");
    }

    document.getElementById("input-0").disabled = true;
    document.getElementById("input-1").disabled = true;
    document.getElementById("input-2").disabled = true;
    document.getElementById("input-3").disabled = true;
  }
});







