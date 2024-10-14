import { imprimePecas, selecionaPeca, imprimePeca, giraHorario, giraAntiHorario, espelha } from "./Peca.js";
import { imprimeTabuleiro } from "./Tabuleiro.js";

//Cria estado do tabuleiro
const tabuleiro = [];
let pecaSelecionada = null;

for (let linha = 0; linha < 5; linha++) {
  tabuleiro[linha] = [];
  for (let coluna = 0; coluna < 11; coluna++) {
    tabuleiro[linha][coluna] = " ";
  }
}

// Cria lista de peças
const pecas = {
  a: {
    disponivel: true,
    tipo: "a",
    formato: [
      [0, 0],
      [0, 1],
      [0, -1],
      [0, -2],
    ],
  },
  b: {
    disponivel: true,
    tipo: "b",
    formato: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  },
  c: {
    disponivel: true,
    tipo: "c",
    formato: [
      [0, 0],
      [0, 1],
      [0, -1],
      [1, 1],
    ],
  },
};
const eTabuleiro = document.querySelector("#tabuleiro");
const ePecaSelecionada = document.querySelector("#pecaSelecionada");
const ePecasDisponiveis = document.querySelector("#pecasDisponiveis");

const eGiraH = document.querySelector("#giraHorario");
eGiraH.addEventListener("click", giraPecaHorarioClick);

const eGiraAH = document.querySelector("#giraAntiHorario");
eGiraAH.addEventListener("click", giraPecaAntiHorarioClick);

const eEspelha = document.querySelector("#espelhaPeca");
eEspelha.addEventListener("click", espelhaPecaClick);


eTabuleiro.innerHTML = "";
eTabuleiro.appendChild(imprimeTabuleiro(tabuleiro, onCelulaClicada));
ePecasDisponiveis.innerHTML = "";
ePecasDisponiveis.appendChild(imprimePecas(pecas, onPecaClicada));
ePecaSelecionada.innerHTML = "";
ePecaSelecionada.append(imprimePeca(pecaSelecionada));

function onCelulaClicada(linha, coluna) {
  console.log(`Célula clicada: linha ${linha}, coluna ${coluna}`);
}

function onPecaClicada(peca) {
  console.log(peca);

  if (pecaSelecionada) {
    pecaSelecionada.disponivel = true;
  }

  selecionaPeca(pecaSelecionada, peca);

  pecaSelecionada = peca;
  peca.disponivel = false;

  ePecasDisponiveis.innerHTML = "";
  ePecasDisponiveis.appendChild(imprimePecas(pecas, onPecaClicada));
  ePecaSelecionada.innerHTML = "";
  ePecaSelecionada.append(imprimePeca(pecaSelecionada));
}

function giraPecaHorarioClick(){
  if (pecaSelecionada !== null) {
    giraHorario(pecaSelecionada);
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}

function giraPecaAntiHorarioClick(){
  if (pecaSelecionada !== null) {
    giraAntiHorario(pecaSelecionada);
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}
function espelhaPecaClick(){
  if (pecaSelecionada !== null) {
    espelha(pecaSelecionada);
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}