
var timer = document.querySelector(".timer")
var questions = document.querySelector("#question-title")
var choice = document.querySelector("#choices")
var starterScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")

var score = 0
//function for timer countdown to start when start button clicked
function startTimer() {
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
function showQuestions () {
    for (let i = 0; i< quizQuestions.length; i++)
questions.textContent = quizQuestions[i].question;

// loop through options
var options = quizQuestions[i].choices
for(let j=0; j<options.length; j++) {
var optionButton = document.createElement("button")
var optionValue = options[j]
optionButton.textContent = optionValue
choice.appendChild(optionButton)
}

//if statement for when an option button is clicked
optionButton.addEventListener("click", function(){
if ( optionValue=quizQuestions[i].answer){
    score +=5 
    alert("That's correct")
    }
else{
    secondsLeft -=10
    alert ("Wrong answer")
    }
})
}

showQuestions()