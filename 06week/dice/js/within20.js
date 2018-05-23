"use strict"
var num = prompt("Enter a number to see if its within 20 of 100 and 400");

if(num <=120 || num >=80){
  document.write(num + " is within 20 of 100");
}
else if(num <=420 || num >=380){
  document.write(num + " is within 20 of 400");
}
else {
  document.write(num + " is not within 20 of 100 or 400");
}
