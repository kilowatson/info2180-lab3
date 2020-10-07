"use strict";

window.onload = function () {
  var board = document.getElementById("board").getElementsByTagName("div");
  var dict = {};
  var boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var turn = 1;

  function Process(square) {
    for (var key in dict) {
      if (square == dict[key]) {
        boardState[key] = turn;

        if (turn == 1) {
          square.classList.add("X");
          square.innerHTML = "X";
        } else {
          square.classList.add("O");
          square.innerHTML = "O";
        }
        // prettier-ignore
        if (
          boardState[0] == turn && boardState[1] == turn && boardState[2] == turn ||
          boardState[3] == turn && boardState[4] == turn && boardState[5] == turn ||
          boardState[6] == turn && boardState[7] == turn && boardState[8] == turn ||
          boardState[0] == turn && boardState[3] == turn && boardState[6] == turn ||
          boardState[1] == turn && boardState[4] == turn && boardState[7] == turn ||
          boardState[2] == turn && boardState[5] == turn && boardState[8] == turn ||
          boardState[0] == turn && boardState[4] == turn && boardState[8] == turn ||
          boardState[2] == turn && boardState[4] == turn && boardState[6] == turn
      ) {
          
          document.getElementById("status").classList.add("you-won");

          if (turn == 1) {
              document
                  .getElementById("status")
                  .innerHTML = "Congratulations! X is the Winner!";

          } else {
              document
                  .getElementById("status")
                  .innerHTML = "Congratulations! O is the Winner!";

          }
        
      }
        if (turn == 1) {
          turn = 2;
        } else {
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
    board[i].onmouseover = function () {
      this.classList.add("hover");
    };
    board[i].onmouseout = function () {
      this.classList.remove("hover");
    };
    dict[i] = board[i];
  }
};
