"use strict"
var userChoice = prompt("Do you choose rock, paper, or scissors?");
var rand = Math.random();
var computerChoice = '';
if(rand < 0.33){
  computerChoice = "Rock"
}
else if(rand > 0.66){
  computerChoice = "Scissors";
}
else {
  computerChoice = "Paper";
}

var compare = function(x, y){
  if(x === y){
    return "Tie";
  }
  else if(x === "Rock"){
    if(y === "Scissors"){
      return "Computer Wins";
    }
    else{
      return "You WIN!!";
    }
  }
  else if(x === "Paper"){
    if(y === "Rock"){
      return "Computer Wins";
    }
    else{
      return "You WIN!!";
    }
  }
  else if(x === "Scissors"){
    if(y === "Paper"){
      return "Computer Wins";
    }
    else{
      return "You WIN!!";
    }
  }
}
document.write("Computer Chose: " + computerChoice + "</br>");
document.write(compare(computerChoice, userChoice));
