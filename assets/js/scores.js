var highScores = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")

//when clear highscores button clicked data disappears
clearButton.addEventListener("click", clearScores)

//function to clear data in the local storage
function clearScores (){
localStorage.clear("scores")
highScores.innerHTML = ""

}

//function to show highscores from the local storage
function displayHighscores(){
   var scores = JSON.parse(localStorage.getItem("scores"))

   if(!scores){
    return;
   }

//loop through scores 
for (var i=0; i<scores.length; i++) {
var data = scores[i] 

//create a list to display highscores
var li = document.createElement("li")
li.textContent = data.initials + " - " + data.finalScore
highScores.appendChild(li)
}
}


displayHighscores();
