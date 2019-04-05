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
// Не потрібно писати break, якщо виходиш з switch через 'return'
// Не має 'default' case, це не критична помилка, але це погана практика

console.log(basicOp('*', 3, 5))
console.log(basicOp('/', 3, 5))
console.log(basicOp('-', 3, 5))
console.log(basicOp('+', 3, 5))
