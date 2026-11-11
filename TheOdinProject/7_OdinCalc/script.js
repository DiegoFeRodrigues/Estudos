
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

let valor1;
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

const conteinerValores1 = document.createElement("div");
conteinerValores1.classList = "conteinerValores1";
conteinerValores1.style.display = "flex";

conteinerNumeros.addEventListener("click", (evento) => {
  const conteudoClicado = evento.target.innerText;
  if (evento.target.classList[1] == "tecla") {
    const valores1 = document.createElement("div");
    valores1.innerText = conteudoClicado;
    conteinerValores1.appendChild(valores1);
    display.appendChild(conteinerValores1);
    valor1 = conteinerValores1.textContent;
  }
  console.log("dentro do evento");
  console.log(parseInt(valor1));
});

console.log("fora do evento");
console.log(parseInt(valor1));

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

