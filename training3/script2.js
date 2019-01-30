var n = 10;

function proste(n) {
  var prosti = '';

  for (var i = 2; i <= n; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (i == j) {
      prosti += ' ' + i;
    }
  }
  return prosti;
}

console.log(proste(n));
