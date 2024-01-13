
var questions = document.querySelector("#questions")
var choice = document.querySelector("#choices")
var timer = document.querySelector(".timer")
var startButton = document.querySelector("#start")

//function for timer countdown to start when start button clicked
function startQuiz() {
var secondsLeft = 60;
var timeInterval = setInterval(function() {

    if(secondsLeft > 0) {
    timer.textContent = secondsLeft
    secondsLeft--
}
else {
    timer.textContent = ""
    clearInterval(timeInterval);
    displayMessage()
}   
}, 1000);

} 

startButton.addEventListener("click", startQuiz)