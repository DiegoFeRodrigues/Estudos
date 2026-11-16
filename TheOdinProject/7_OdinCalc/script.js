
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
  const operadores = {
    "+": soma(n1, n2),
    "-": subtrai(n1, n2),
    "*": multiplica(n1, n2),
    "/": divide(n1, n2)
  }
  if (!operadores[operador]) {
    return `Operador inválido: ${operador}.`;
  }
  return operadores[operador];
}

const display = document.querySelector(".displayCalc")

const conteinerNumeros = document.querySelector(".conteinerNum");

conteinerNumeros.addEventListener("click", (evento) => {
  const conteudoValorClicado = evento.target.innerText;

  const valorClicado = document.createElement("div");
  valorClicado.classList = "valor";

  if (evento.target.classList[1] == "tecla") {
    valorClicado.innerText = conteudoValorClicado;

    display.appendChild(valorClicado);

    const listaValores = display
      .textContent
      .split(/[+=\-]/)
      .map(item => Number(item))
    ;

    if (conteudoValorClicado == "=") {
      const resultado = document.createElement("div");
      const valores = document.querySelectorAll(".valor");
      resultado.classList = "resultado";
      valores.forEach(item => display.removeChild(item));
      resultado.innerText = operar(listaValores[0], listaOperadores[0], listaValores[1]);
      display.appendChild(resultado);

      listaValores.forEach(function(item) {
        if (item == "") { listaValores.pop(item); }
      });

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

      expressao.forEach(function(item) {
        if (item == undefined) { expressao.pop(item); }
      });

      if (expressao.length < 3) { console.log("Erro"); }

      valor1 = expressao[0]
      let acumulador = valor1;

      for (let indice = 1; indice < expressao.length; indice += 2) {
        operador = expressao[indice];
        valor2 = expressao[indice + 1];

        acumulador = operar(acumulador, operador, valor2);
      }

      console.log(acumulador);

      console.log(expressao);
    }

    //console.log("dentro do evento");
    //console.log(`lista valores: ${listaValores}`);
    //console.log(`lista operadores: ${listaOperadores}`);
  }
});

const listaOperadores = [];

const conteinerOperadores = document.querySelector(".conteinerOperadores");

conteinerOperadores.addEventListener("click", (evento) => {
  const conteudoOperadorClicado = evento.target.innerText;

  const operadorClicado = document.createElement("div");
  operadorClicado.classList = "operador";

  if (evento.target.classList[1] == "tecla") {
    operadorClicado.innerText = conteudoOperadorClicado;

    display.appendChild(operadorClicado);
    listaOperadores.push(conteudoOperadorClicado);
  }

  console.log(listaOperadores);
})
