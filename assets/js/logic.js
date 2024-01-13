
var timer = document.querySelector(".timer")
var questions = document.querySelector("#question-title")
var choice = document.querySelector("#choices")
var starterScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")

var score = 0
//function for timer countdown to start when start button clicked
function startQuiz() {
var secondsLeft = 60;
var timeInterval = setInterval(function() {

    if(secondsLeft > 0) {
    timer.textContent = secondsLeft
    secondsLeft--;
    
}
else {
    timer.textContent = ""
    clearInterval(timeInterval);
    displayMessage()
}   
}, 1000);

} 


startButton.addEventListener("click", startQuiz, unhideQuestions)


//loop through questions
function showQuestions () {
    for (let i = 0; i< quizQuestions.length; i++)
questions.textContent = quizQuestions[i].question1;

// loop through options
var options = quizQuestions[i].choices
for(let j=0; j<options.length; j++) {
var optionButton = document.createElement("button")
var optionValue = options[j]
optionButton.textContent = optionValue
choice.appendChild(optionButton)
}
}