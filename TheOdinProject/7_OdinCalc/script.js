
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

conteinerNumeros.addEventListener("click", (evento) => {
  const conteudoClicado = evento.target.innerText;

  const listaOperacao = [];

  const conteinerValores1 = document.createElement("div");
  conteinerValores1.classList = "conteinerValores1";
  conteinerValores1.style.display = "flex";

  const conteinerOperador = document.createElement("div");
  conteinerOperador.classList = "conteinerOperador";
  conteinerOperador.style.display = "flex";


  if (evento.target.classList[1] == "tecla") {
    const valores1 = document.createElement("div");
    const valores1Definitivos = document.createElement("div");
    valores1.innerText = parseInt(conteudoClicado);
    if (!isNaN(valores1.innerText)) {
      conteinerValores1.appendChild(valores1);
    }
    display.appendChild(conteinerValores1);
    valor1 = parseInt(conteinerValores1.textContent);

    if (conteudoClicado == "+") {

      listaOperacao.push(valor1);
      display.removeChild(conteinerValores1);

      valores1Definitivos.innerText = valor1;

     if (!isNaN(valores1.innerText)) {
      display.appendChild(valores1Definitivos);
    }

      const operadorOp = document.createElement("div");
      operadorOp.innerText = conteudoClicado;
      conteinerOperador.appendChild(operadorOp);
      display.appendChild(conteinerOperador);
      operador = conteinerOperador.textContent;
      listaOperacao.push(operador);
    }
  }
  console.log("dentro do evento");
  console.log(display.textContent);
  console.log(display.textContent.split("+"));
  console.log(operador);
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

