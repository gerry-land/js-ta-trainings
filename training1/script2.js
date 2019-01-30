"use strict";

function rentalCarCost(d) {
  if (d < 3) return d * 40;
  if (7 > d && d >= 3) return d * 40 - 20;
  if (d >= 7) return d * 40 - 50;
}
console.log(rentalCarCost(2)); //80
console.log(rentalCarCost(3)); //100
console.log(rentalCarCost(5)); //180
console.log(rentalCarCost(6)); //230
console.log(rentalCarCost(7)); //230
console.log(rentalCarCost(8)); //230
console.log(rentalCarCost(10));//350
