highScores = document.querySelector("#highscores")
clearButton = document.querySelector("#clear")

displayHighscores();

function displayHighscores(){
   var lastScore = localStorage.getItem("finalScore")
   var lastInitial = localStorage.getItem("initials")

   if(!lastScore){
    return;
   }

highScores.textContent = lastInitial + lastScore
}

