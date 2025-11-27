"use strict";

function calc(operation) {
  const input1 = Number(document.querySelector(".input__1").value);
  const input2 = Number(document.querySelector(".input__2").value);
  if (isNaN(input1) || isNaN(input2)) {
    return;
  }
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  document.querySelector(".result").innerText = ops[operation]?.(
    input1,
    input2
  );
}
