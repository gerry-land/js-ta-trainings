'use strict';

function rentalCarCost(d) {
  let carRent = 40;

  if (d >= 7) {
    return d * carRent - 50;
  } else if (d >= 3) {
    return d * carRent - 20;
  } else if (d <= 0) {
    return 0;
  } else {
    return d * carRent;
  }
}

console.log(rentalCarCost(-8));
console.log(rentalCarCost(2));
console.log(rentalCarCost(5));
console.log(rentalCarCost(10));
