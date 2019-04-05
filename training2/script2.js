function basicOp(operation, value1, value2)
{ 
  return eval(value1+operation+value2);
}

// Краще не використовувати eval()
// * Дозвіл на eval, робить твій код незахищеним
// * Код важче дебажити
// * Код виконується довше
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
