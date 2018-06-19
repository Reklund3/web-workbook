'use strict';

$(document).ready(function() {
  let moveCount = 0;
  // Put app logic here
  $('[data-block]').draggable({
    revert: 'invalid'
  });
  $('[data-stack]').droppable({
    drop: function(event, ui){
      moveCount++;
      if (($(this).children().last()).data('block') <=
      $(ui.draggable).data('block')) {
        $(ui.draggable).draggable('option', 'revert', true);
      }
      else {
        $(ui.draggable).appendTo($(this)).attr('style', 'position: "relative"');
        checkWin();
      }
      $('#moveCount').text(moveCount);
    }
  });
});

function checkWin() {
  if (Number($('[data-stack="3"]').children().length) === 4) {
    $('#announce-game-won').text('You Win');
  }
}
