"use strict";
window.onload = function () {
  var board = document.getElementById("board").getElementsByTagName("div");

  for (var i = 0; i < board.length; i++) {
    board[i].classList.add("square");
  }
  console.log(board);
};
