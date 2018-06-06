'use strict';

let val = 'X';
let winner = false;
let moveCount = 0;
// let array = ['','','','','','','',''];

$(document).ready(function() {
  // Put app logic in here

  $('[data-cell]').on('click', function (){
    if (winner == false) {
      if(!$(this).text()) {
        $(this).text(setValue());
        moveCount++;
      }
    }
  winCon();
  console.log(moveCount);
  })
  $('#clear').on('click', function (){
    $('[data-cell]').empty();
    $('#announce-winner').text('');
    winner = false;
    moveCount = 0;
  })
});

function setValue() {
  if (val === 'X') {
    val = 'O';
  }
  else {
    val = 'X';
  }
  return val;
}

// Row win condition checks
function winCon() {
  if ($("[data-cell='0']").text() || $("[data-cell='1']").text() ||
  $("[data-cell='2']").text()) {
    if ($("[data-cell='0']").text() === $("[data-cell='1']").text() &&
    $("[data-cell='1']").text() === $("[data-cell='2']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  if ($("[data-cell='3']").text() || $("[data-cell='4']").text() ||
  $("[data-cell='5']").text()) {
    if ($("[data-cell='3']").text() === $("[data-cell='4']").text() &&
    $("[data-cell='4']").text() === $("[data-cell='5']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  if ($("[data-cell='6']").text() || $("[data-cell='7']").text() || $("[data-cell='8']").text()) {
    if ($("[data-cell='6']").text() === $("[data-cell='7']").text() &&
    $("[data-cell='7']").text() === $("[data-cell='8']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  // Column win condition checks
  if ($("[data-cell='0']").text() || $("[data-cell='3']").text() ||
  $("[data-cell='6']").text()) {
    if ($("[data-cell='0']").text() === $("[data-cell='3']").text() &&
    $("[data-cell='3']").text() === $("[data-cell='6']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  if ($("[data-cell='1']").text() || $("[data-cell='4']").text() ||
  $("[data-cell='7']").text()) {
    if ($("[data-cell='1']").text() === $("[data-cell='4']").text() &&
    $("[data-cell='4']").text() === $("[data-cell='7']").text())
    {
      $('#announce-winner').text(val + ' wins the game')
      winner = true;
    }
  }
  if ($("[data-cell='2']").text() || $("[data-cell='5']").text() ||
  $("[data-cell='8']").text()) {
    if ($("[data-cell='2']").text() === $("[data-cell='5']").text() &&
    $("[data-cell='5']").text() === $("[data-cell='8']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  // Diagonal win conditions checks
  if ($("[data-cell='0']").text() || $("[data-cell='4']").text() ||
  $("[data-cell='8']").text()) {
    if ($("[data-cell='0']").text() === $("[data-cell='4']").text() &&
    $("[data-cell='4']").text() === $("[data-cell='8']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  if ($("[data-cell='2']").text() || $("[data-cell='4']").text() ||
  $("[data-cell='6']").text()) {
    if ($("[data-cell='2']").text() === $("[data-cell='4']").text() &&
    $("[data-cell='4']").text() === $("[data-cell='6']").text())
    {
      $('#announce-winner').text(val + ' wins the game');
      winner = true;
    }
  }
  if (Number(moveCount) === 9) {
    $('#announce-winner').text('It is a scrath!!!!');
  }
}
