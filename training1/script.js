var d = prompt('Введіть кількість днів', '');
// Не зрозуміла назва змінної
// я б написав 
var days = prompt('Введіть кількість днів', '');

var sum;
if (d >= 7) {
  sum = d * 40 - 50;
} else if (d >= 3) {
  sum = d * 40 - 20;
} else {
  sum = d * 40;
}
console.log(sum);

// Конструкція 'else if' - погана практика.
// Можна заюзати конструкцію switch
// або виходити з if виразу, якщо умова проходить
if (d >= 7) {
  return console.log(d * 40 - 50);
};

if (d >= 3) {
  return console.log(d * 40 - 20);
} 

console.log(d * 40);