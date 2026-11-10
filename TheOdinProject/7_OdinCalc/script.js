
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

const valor1 = 10;
let operador;
const valor2 = 5;

function operar(n1, operador, n2) {
  const operadores = {
    "+": soma(n1, n2),
    "-": subtrai(n1, n2),
    "*": multiplica(n1, n2),
    "/": divide(n1, n2)
  }
  if (!operadores[operador]) {
    return `Operador inválido: ${operador}.`;
  }
  return `${valor1} ${operador} ${valor2} = ${operadores[operador]}`;
}

const conteinerNumeros = document.querySelector(".conteinerNum");

const display = document.querySelector(".displayCalc")

conteinerNumeros.addEventListener("click", (evento) => {
  // testes:
  //console.log(evento.target.classList);
  //console.log("tecla" in evento.target.classList);
  //console.log(evento.target.classList[1]);
  if (evento.target.classList[1] == "tecla") {
    const numero = document.createElement("div");
    numero.innerText = evento.target.innerText
    display.appendChild(numero);
  }
});

console.log("Soma:");
operador = "+";
console.log(operar(valor1, operador, valor2));

console.log("Subtração:");
operador = "-";
console.log(operar(valor1, operador, valor2));

console.log("Multiplicação:");
operador = "*";
console.log(operar(valor1, operador, valor2));

console.log("Divisão:");
operador = "/";
console.log(operar(valor1, operador, valor2));

console.log("Erros:");
operador = "$"
console.log(operar(valor1, operador, valor2));

operador = "@"
console.log(operar(valor1, operador, valor2));

