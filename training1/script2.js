"use strict";

function rentalCarCost(d) {
  if (d < 3) return d * 40;
  if (7 > d && d >= 3) return d * 40 - 20;
  if (d >= 7) return d * 40 - 50;
}
// В 2 рядку можна не перевіряти, чи днів => 3
// В 3 рядку не обовз'язковий 'if', якщо перші дві умови не пройдуть, то днів буде => 7
// можна повертати суму з скидкою 50$
function rentalCarCost(d) {
  if (d < 3) return d * 40;
  if (d < 7) return d * 40 - 20;
  return d * 40 - 50;
}


console.log(rentalCarCost(2)); //80
console.log(rentalCarCost(3)); //100
console.log(rentalCarCost(5)); //180
console.log(rentalCarCost(6)); //230
console.log(rentalCarCost(7)); //230
console.log(rentalCarCost(8)); //230
console.log(rentalCarCost(10));//350
