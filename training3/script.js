'use strict';

function simpleNumbers(n) {
  numbers: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue numbers;
    }
    console.log(i);
  }
}

// https://learn.javascript.ru/task/list-primes
// Коли рев`ювиш код з learn js

simpleNumbers(100);
