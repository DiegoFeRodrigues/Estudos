
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
  return operadores[operador];
}

const conteinerNumeros = document.querySelector(".conteinerNum");

const display = document.querySelector(".displayCalc")

const listaOperadores = [];

conteinerNumeros.addEventListener("click", (evento) => {
  const botaoClicado = document.createElement("div");
  botaoClicado.classList = "valor";

  const conteudoBotaoClicado = evento.target.innerText;

  if (evento.target.classList[1] == "tecla") {
    botaoClicado.innerText = conteudoBotaoClicado;

    display.appendChild(botaoClicado);

    if (conteudoBotaoClicado == "+") {
      listaOperadores.push(conteudoBotaoClicado)
    }

    const listaValores = display.textContent.split(/[+=]/)
      .map(item => Number(item))
    ;

    if (conteudoBotaoClicado == "=") {
      const resultado = document.createElement("div");
      const valores = document.querySelectorAll(".valor");
      resultado.classList = "resultado";
      valores.forEach(item => display.removeChild(item));
      resultado.innerText = operar(listaValores[0], listaOperadores[0], listaValores[1]);
      display.appendChild(resultado);

      console.log("Lista com zero:");
      console.log(listaValores);

      listaValores.forEach(function(item) {
        if (item == "") { listaValores.pop(item); }
     });

      console.log("Lista sem zero:");
      console.log(listaValores);
    }

    console.log("dentro do evento");
    console.log(`lista valores: ${listaValores}`);
    console.log(`lista operadores: ${listaOperadores}`);
  }
});

