
var timer = document.querySelector(".timer")
var questions = document.querySelector("#question-title")
var choice = document.querySelector("#choices")
var starterScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")
var submitButton = document.querySelector("#submit")

var secondsLeft = 60;
//function for timer countdown to start when start button clicked
function startTimer() {
var timeInterval = setInterval(function() {

    if(secondsLeft > 0) {
    timer.textContent = secondsLeft
    secondsLeft--;
    
}
else {
    timer.textContent = ""
    clearInterval(timeInterval);
    //displayMessage()
}   
}, 1000);
} 

//function to show hidden questions

function unhideQuestions () {
    var hidden = document.querySelector(".hide")
    if (hidden.style.display === "none") {
        starterScreen.remove();
        hidden.style.display = "block"
    }
    else {
        hidden.style.display = "none"
    }
    }

startButton.addEventListener("click", unhideQuestions)
startButton.addEventListener("click", startTimer)


//loop through questions
var score = 0

function showQuestions () {
questions.textContent = quizQuestions[0].question;

//quizQuestions.choices.forEach()
var choose = quizQuestions[0].choices
for (let i = 0; i< choose.length; i++) {
var optionButton = document.createElement("button")
optionButton.textContent = choose[i]
choice.appendChild(optionButton)
}

//if statement for when an option button is clicked
optionButton.addEventListener("click", correctAnswer)

function correctAnswer(){
if (quizQuestions[0].answer === quizQuestions[0].choices){
    score +=5 
    choice.textContent="Correct!"
}
else{
    secondsLeft -=10
    choice.textContent="Incorrect!"
}
}
} 

showQuestions()

function gameOver() {
    //if get to end of questions length show score page using the unhideScore function
    //else time runs out show score page using the unhideScore function
}

function unhideScore(){

}

    //submitButton.addEventListener("click", submit)
function submit(){
    //when button is clicked score and initials are logged to the local storage and appear in the highscore page
}
