var timer = document.querySelector(".timer");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choice = document.querySelector("#choices");
var starterScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("#submit");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score")
var initials = document.querySelector("#initials")


var secondsLeft = 60;
//function for timer countdown to start when start button clicked
function startTimer() {
  var timeInterval = setInterval(function () {
    if (secondsLeft > 0) {
      timer.textContent = secondsLeft;
      secondsLeft--;
    } else {
      timer.textContent = "Times up!";
      gameOver(timeInterval);
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

var score = 0;
var currentQuestion = 0;

//function to show question and options
function showQuestions() {
  questionTitle.textContent = quizQuestions[currentQuestion].question;

  var choose = quizQuestions[currentQuestion].choices;
  for (let i = 0; i < choose.length; i++) {
    var optionButton = document.createElement("button");
    optionButton.textContent = choose[i];
    choice.appendChild(optionButton);
    optionButton.addEventListener("click", correctAnswer);
  }
}

//function with if statment to show what happens when an answer is clicked
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

//function to show the score page and hide the questions
function gameOver() {
    questions.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = score
  }

  submitButton.addEventListener("click", submit)

  //function to show highscores screen with users scores
  function submit(event) {
    event.preventDefault()
    endScreen.classList.add("hide")
     location.assign("./highscores.html")
    var userData = []
   var storage = JSON.parse(localStorage.getItem("scores"))
   if (storage ){
    userData = storage
   }
    userData.push({initials: initials.value, finalScore: score})
    localStorage.setItem("scores", JSON.stringify(userData))
}

