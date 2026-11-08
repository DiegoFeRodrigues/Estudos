
function soma(n1, n2) {
  return n1 + n2;
}

function subtrai(n1, n2) {
  return n1 - n2;
}

function multiplica(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

let primeiroNumero;
let operador;
let segundoNumero;

function operacao(n1, op, n2) {
  switch (op) {
    case "+":
      return soma(n1, n2);
      break;

    default:
      "Operação inválida.";
      break;
  }
}

console.log(operacao(1, "+", 1));
console.log(operacao(10, "+", 15));
