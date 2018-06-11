"use strict"

let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

roll();








function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();   // execute report function on the results in the div with the ID 'report'.
}


//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  let nums = [0,0,0,0,0,0]; // to store the dice numbers from the roll
  let pair = 0;
  let threeOf = 0;
  let fourOf = 0;
  let five = 0;
  let straightNum = 0;
  for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
    if (Number(diceHtml[i].getAttribute('data-roll') == 1)) {  // we check if the rolled die is equal to the one's we're counting
      nums[0] += 1; // if so, we add one to the count
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 2)) {  // we check if the rolled die is equal to the one's we're counting
      nums[1] += 1; // if so, we add one to the count
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 3)) {  // we check if the rolled die is equal to the one's we're counting
      nums[2] += 1; // if so, we add one to the count
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 4)) {  // we check if the rolled die is equal to the one's we're counting
      nums[3] += 1; // if so, we add one to the count
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 5)) {  // we check if the rolled die is equal to the one's we're counting
      nums[4] += 1; // if so, we add one to the count
    }
    else {  // we check if the rolled die is equal to the one's we're counting
      nums[5] += 1; // if so, we add one to the count
    }
  }
  // For loop to look
  for (let i = 0; i < 6; i++) {
    if (nums[i] === 5) {
      five = 1;
    }
    else if (nums[i] === 4) {
      fourOf = 1;
    }
    else if (nums[i] === 3) {
      threeOf = 1;
    }
    else if (nums[i] === 2) {
      pair += 1;
    }
  }
  // Check to see if the dice roll is a big straight
  if (nums[0] === 0 && nums[1] === 1 && nums[2] === 1 && nums[3] === 1 && nums[4] === 1 && nums[5] === 1) {
    document.querySelector("#report").innerHTML += `Congratulations on a Big-Straight`;
  }
  // Check to see if the dice roll is a small straight
  else if (nums[0] === 1 && nums[1] === 1 && nums[2] === 1 && nums[3] === 1 && nums[4] === 1 && nums[5] === 0) {
    document.querySelector("#report").innerHTML += `Congratulations on a Small-Straight`;
  }
  // Check for a pair and three of a kind for a full house
  else if (pair === 1 && threeOf === 1) {
    document.querySelector("#report").innerHTML += `Congratulations on a Full House`;
  }
  // Checks for five of a kind
  else if (five === 1) {
    document.querySelector("#report").innerHTML += `Congratulations on five of a kind`;
  }
  // Checks for four of a kind
  else if (fourOf === 1) {
    document.querySelector("#report").innerHTML += `Congratulations on four of a kind`;
  }
  // Checks to see if there are two pair
  else if (pair === 2) {
    document.querySelector("#report").innerHTML += `Congratulations on two pairs`;
  }
  //Checks to see if there is three of a kind
  else if (threeOf === 1) {
    document.querySelector("#report").innerHTML += `Congratulations on three of a kind`;
  }
  // Checks for a pair
  else if (pair === 1) {
    document.querySelector("#report").innerHTML += `Congratulations on a pair`;
  }
}

//
