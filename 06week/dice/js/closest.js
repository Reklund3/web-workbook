"use strict"
var numOne = prompt("enter the first number");
var numTwo = prompt("enter the second number");

//Use of absolute to get to the smaller number
if (Math.abs(numOne-100) > Math.abs(numTwo-100)){
  document.write("The second number, " + numTwo + ", is closer to 100");
}
else if (Math.abs(numOne-100) < Math.abs(numTwo-100)){
  document.write("The first number, " + numOne + ", is closer to 100");
}
else if (Math.abs(numOne-100) === Math.abs(numTwo-100)){
  document.write("they are the same distance from 100");
}
