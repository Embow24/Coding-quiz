var highScores = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")


displayHighscores();

clearButton.addEventListener("click", clearScores)

function clearScores (){
localStorage.clear("finalScore")
localStorage.clear("initials")
highScores.textContent = ""
}

function displayHighscores(){
   var lastScore = localStorage.getItem("finalScore")
   var lastInitial = localStorage.getItem("initials")

   if(!lastScore){
    return;
   }

highScores.textContent = lastInitial + lastScore
}

