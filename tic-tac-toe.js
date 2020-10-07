"use strict";
window.onload = function () {
  var board = document.getElementById("board").getElementsByTagName("div");
  var dict = {};
  var boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var turn = 1;

  function Process(square) {
    for (var key in dict) {
      if (square == dict[key]) {
        if (turn == 1) {
          square.classList.add("X");
          square.innerHTML = "X";
          turn = 2;
        } else {
          square.classList.add("O");
          square.innerHTML = "O";
          turn = 1;
        }
      }
    }
  }

  for (var i = 0; i < board.length; i++) {
    board[i].classList.add("square");

    board[i].onclick = function () {
      Process(this);
    };
    dict[i] = board[i];
  }
};
