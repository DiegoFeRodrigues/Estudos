
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
let valor2;

function operar(n1, operador, n2) {
  switch (operador) {
    case "+": return soma(n1, n2);
    case "-": return subtrai(n1, n2);
    case "*": return multiplica(n1, n2);
    case "/": return divide(n1, n2);
    default: return "Erro";
  }
}

const display = document.querySelector(".displayCalc")

const conteinerResultado = document.createElement("div");
conteinerResultado.classList = "resultado";

function limpaResultado() {
  if (display.contains(conteinerResultado)) {
    const resultados = document.querySelectorAll(".resultado");
    resultados.forEach(item => display.removeChild(item));
  }
}

function limpaDisplay() {

  limpaResultado();

  const valores = document.querySelectorAll(".valor");
  valores.forEach(item => display.removeChild(item));
  listaValores = [];

  const operadores = document.querySelectorAll(".operador");
  operadores.forEach(item => display.removeChild(item));
  listaOperadores = [];
}

const botaoLimpar = document.querySelector(".clear");

botaoLimpar.addEventListener("click", () => {
  limpaDisplay();
});

const conteinerNumeros = document.querySelector(".conteinerNum");

let listaValores = [];

conteinerNumeros.addEventListener("click", (evento) => {

  limpaResultado();

  const conteudoValorClicado = evento.target.innerText;

  const valorClicado = document.createElement("div");
  valorClicado.classList = "valor";

  if (evento.target.tagName == "BUTTON"
    && conteudoValorClicado != "Limpar") {
    valorClicado.innerText = conteudoValorClicado;

    display.appendChild(valorClicado);

    listaValores = display
      .textContent
      .split(/[+=\-]/)
      .map(item => Number(item))
      ;
  }
});

let listaOperadores = [];

const conteinerOperadores = document.querySelector(".operadores");

conteinerOperadores.addEventListener("click", (evento) => {
  const conteudoOperadorClicado = evento.target.innerText;

  const operadorClicado = document.createElement("div");
  operadorClicado.classList = "operador";

  if (evento.target.tagName == "BUTTON") {
    operadorClicado.innerText = conteudoOperadorClicado;

    display.appendChild(operadorClicado);
    listaOperadores.push(conteudoOperadorClicado);
  }

  //console.log(listaOperadores);
});

const botaoIgual = document.querySelector(".igual");

botaoIgual.addEventListener("click", () => {

  const expressao = []
  const maiorLista = Math.max(listaValores.length, listaOperadores.length);

  for (let i = 0; i < maiorLista; i++) {
    if (i < listaValores.length) {
      expressao.push(listaValores[i]);
    }
    if (i < listaOperadores.length) {
      expressao.push(listaOperadores[i]);
    }
  }

  if (expressao.length < 3) { console.log("Erro"); }

  function funcaoResultado() {
    valor1 = expressao[0]
    let acumulador = valor1;

    for (let indice = 1; indice < expressao.length; indice += 2) {
      operador = expressao[indice];
      valor2 = expressao[indice + 1];

      acumulador = operar(acumulador, operador, valor2);
    }

    return acumulador;
  }

  limpaDisplay();

  conteinerResultado.innerText = funcaoResultado();
  display.appendChild(conteinerResultado);

  //console.log(acumulador);
  //console.log(funcaoResultado());

  //console.log(expressao);

  //console.log("dentro do evento");
  //console.log(`lista valores: ${listaValores}`);
  //console.log(`lista operadores: ${listaOperadores}`);
});

