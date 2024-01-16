var highScores = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")
var userData = []

displayHighscores();
//when clear highscores button clicked data disappears
clearButton.addEventListener("click", clearScores)

//function to clear data in the local storage
function clearScores (){
localStorage.clear("finalScore")
localStorage.clear("initials")
highScores.innerHTML = ""
highScores.textContent = userData.length

}

//function to show highscores from the local storage
function displayHighscores(){
   var lastScore = localStorage.getItem("finalScore")
   var lastInitial = localStorage.getItem("initials")

   if(!lastScore || !lastInitial){
    return;
   }
// create array to store both sets of data
userData = [lastInitial + lastScore ]

//loop through userData array
for (var j=0; j<userData.length; j++)
var data = userData[j]

//create a list to display highscores
var li = document.createElement("li")
li.textContent = data
highScores.appendChild(li)

userData.push()
}


displayHighscores();
