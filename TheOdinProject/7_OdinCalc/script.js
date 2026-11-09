
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

let valor1 = 10;
let operador;
let valor2 = 5;

function operacao(n1, op, n2) {
  switch (op) {
    case "+":
      return soma(n1, n2);
    case "-":
      return subtrai(n1, n2);
    case "*":
      return multiplica(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      "Operação inválida.";
      break;
  }
}

console.log("Soma:");
operador = "+";
console.log(`${valor1} ${operador} ${valor2} = ${operacao(valor1, operador, valor2)}`);

console.log("Subtração:");
operador = "-";
console.log(`${valor1} ${operador} ${valor2} = ${operacao(valor1, operador, valor2)}`);

console.log("Multiplicação:");
operador = "*";
console.log(`${valor1} ${operador} ${valor2} = ${operacao(valor1, operador, valor2)}`);

console.log("Divisão:");
operador = "/";
console.log(`${valor1} ${operador} ${valor2} = ${operacao(valor1, operador, valor2)}`);

