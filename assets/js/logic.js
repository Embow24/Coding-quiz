var timer = document.querySelector(".timer");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choice = document.querySelector("#choices");
var starterScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("#submit");
var endScreen = document.querySelector("#end-screen");

var secondsLeft = 60;
//function for timer countdown to start when start button clicked
function startTimer() {
  var timeInterval = setInterval(function () {
    if (secondsLeft > 0) {
      timer.textContent = secondsLeft;
      secondsLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      //displayMessage()
    }
  }, 1000);
}

//function to show hidden questions
function unhideQuestions() {
    starterScreen.classList.add("hide");
    questions.classList.remove("hide");
}

startButton.addEventListener("click", unhideQuestions);
startButton.addEventListener("click", startTimer);

//loop through questions
var score = 0;
var currentQuestion = 0;

function showQuestions() {
  questionTitle.textContent = quizQuestions[currentQuestion].question;

  //quizQuestions.choices.forEach()
  var choose = quizQuestions[currentQuestion].choices;
  for (let i = 0; i < choose.length; i++) {
    var optionButton = document.createElement("button");
    optionButton.textContent = choose[i];
    choice.appendChild(optionButton);
    optionButton.addEventListener("click", correctAnswer);
  }
}
//if statement for when an option button is clicked

function correctAnswer(event) {
  if (quizQuestions[currentQuestion].answer === event.target.textContent) {
    score += 5;
    choice.textContent = "Correct!";
  } else {
    secondsLeft -= 10;
    choice.textContent = "Incorrect!";
  }
  currentQuestion++;
  if (currentQuestion < 5) {
    showQuestions();
  } else {
    gameOver();
  }
}

showQuestions();

function gameOver() {
    questions.classList.add("hide");
    endScreen.classList.remove("hide");
  }



