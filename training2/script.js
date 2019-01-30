"use strict";

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}

console.log(basicOp('*', 3, 5))
console.log(basicOp('/', 3, 5))
console.log(basicOp('-', 3, 5))
console.log(basicOp('+', 3, 5))
