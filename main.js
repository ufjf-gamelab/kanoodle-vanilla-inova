import { imprimePecas, selecionaPeca } from "./Peca.js";
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

document.body.appendChild(imprimeTabuleiro(tabuleiro, onCelulaClicada));
document.body.appendChild(imprimePecas(pecas, onPecaClicada));

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

  document.body.removeChild(document.querySelector(".pecas"));
  document.body.appendChild(imprimePecas(pecas, onPecaClicada));
}
