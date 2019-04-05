function basic_op(operator, value1, value2) {
  if (operator == '+') {
    return value1 + value2;
  } else if (operator == '-') {
    return value1 - value2;
  } else if (operator == '*') {
    return value1 * value2;
  } else if (operator == '/') {
    return value1 / value2;
  }
}

// '==' - порівняння без перевірки типів, використовуй '===' замість
// Не читабельний код, потрібно уникати конструкцій if else


function basic_op(operator, value1, value2) {
  if (operator === '+') {
    return value1 + value2;
  } 
  
  if (operator === '-') {
    return value1 - value2;
  } 
  
  if (operator === '*') {
    return value1 * value2;
  } 
  
  if (operator === '/') {
    return value1 / value2;
  }
}