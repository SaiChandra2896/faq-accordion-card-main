"use strict";

function accordion(S, Q, A) {
  let arrow = document.getElementById(S);
  let question = document.getElementById(Q);
  let answer = document.getElementById(A);
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    question.classList.remove("light");
    arrow.classList.remove("rotate");
  } else {
    answer.classList.add("hidden");
    question.classList.add("light");
    arrow.classList.add("rotate");
  }
}
