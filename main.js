import {
  imprimePecas,
  selecionaPeca,
  imprimePeca,
  giraHorario,
  giraAntiHorario,
  espelha,
} from "./Peca.js";
import { colocarPeca, imprimeTabuleiro, liberaPeca } from "./Tabuleiro.js";

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
  d: {
    disponivel: true,
    tipo: "d",
    formato: [
      [0, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ],
  },
  e: {
    disponivel: true,
    tipo: "e",
    formato: [
      [0, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
    ],
  },
  f: {
    disponivel: true,
    tipo: "f",
    formato: [
      [0, 0],
      [0, -2],
      [0, -1],
      [1, 0],
      [0, 1],
    ],
  },
  g: {
    disponivel: true,
    tipo: "g",
    formato: [
      [0, 0],
      [0, -2],
      [0, -1],
      [-1, 0],
      [-2, 0],
    ],
  },
  h: {
    disponivel: true,
    tipo: "h",
    formato: [
      [0, 0],
      [-1, -2],
      [0, -1],
      [-1, -1],
      [0, 1],
    ],
  },
  i: {
    disponivel: true,
    tipo: "i",
    formato: [
      [0, 0],
      [-1, 0],
      [0, -1],
      [-1, -1],
      [0, 1],
    ],
  },
  j: {
    disponivel: true,
    tipo: "j",
    formato: [
      [0, 0],
      [-1, 0],
      [0, 1],
    ],
  },
  k: {
    disponivel: true,
    tipo: "k",
    formato: [
      [0, 0],
      [-1, -2],
      [0, -1],
      [0, -2],
      [0, 1],
    ],
  },
  l: {
    disponivel: true,
    tipo: "l",
    formato: [
      [0, 0],
      [-1, 0],
      [0, 1],
      [1, 1],
      [-1, -1],
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
ePecasDisponiveis.appendChild(
  imprimePecas(pecas, pecaSelecionada, onPecaClicada)
);
ePecaSelecionada.innerHTML = "";
ePecaSelecionada.append(imprimePeca(pecaSelecionada));

function onCelulaClicada(linha, coluna) {
  console.log(`Célula clicada: linha ${linha}, coluna ${coluna}`);
  if (tabuleiro[linha][coluna] !== " ") {
    liberaPeca(tabuleiro, linha, coluna, pecas);
    eTabuleiro.innerHTML = "";
    eTabuleiro.appendChild(imprimeTabuleiro(tabuleiro, onCelulaClicada));
    ePecasDisponiveis.innerHTML = "";
    ePecasDisponiveis.appendChild(
      imprimePecas(pecas, pecaSelecionada, onPecaClicada)
    );
    return;
  }

  if (colocarPeca(tabuleiro, pecaSelecionada, linha, coluna)) {
    pecaSelecionada = null;
    eTabuleiro.innerHTML = "";
    eTabuleiro.appendChild(imprimeTabuleiro(tabuleiro, onCelulaClicada));
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}

function onPecaClicada(peca) {
  console.log(peca);

  selecionaPeca(pecaSelecionada, peca);

  pecaSelecionada = peca;

  ePecasDisponiveis.innerHTML = "";
  ePecasDisponiveis.appendChild(
    imprimePecas(pecas, pecaSelecionada, onPecaClicada)
  );
  ePecaSelecionada.innerHTML = "";
  ePecaSelecionada.append(imprimePeca(pecaSelecionada));
}

function giraPecaHorarioClick() {
  if (pecaSelecionada !== null) {
    giraHorario(pecaSelecionada);
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}

function giraPecaAntiHorarioClick() {
  if (pecaSelecionada !== null) {
    giraAntiHorario(pecaSelecionada);
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}
function espelhaPecaClick() {
  if (pecaSelecionada !== null) {
    espelha(pecaSelecionada);
    ePecaSelecionada.innerHTML = "";
    ePecaSelecionada.append(imprimePeca(pecaSelecionada));
  }
}
