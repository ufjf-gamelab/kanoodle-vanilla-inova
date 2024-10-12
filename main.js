//Cria estado do tabuleiro

const tabuleiro = [];

for (let linha = 0; linha < 5; linha++) {
  tabuleiro[linha] = [];
  for (let coluna = 0; coluna < 11; coluna++) {
    tabuleiro[linha][coluna] = " ";
  }
}

document.body.appendChild(imprimeTabuleiro(tabuleiro));

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

document.body.appendChild(imprimePecas(pecas));

function imprimePecas(listaPecas) {
  const pecas = document.createElement("ol");
  pecas.classList.add("pecas");
  for (let chave in listaPecas) {
    pecas.appendChild(imprimePeca(listaPecas[chave]));
  }
  return pecas;
}

function imprimePeca(peca) {
  const item = document.createElement("li");
  item.classList.add("peca");

  for (let celula = 0; celula < peca.formato.length; celula++) {
    const div = document.createElement("div");
    div.classList.add("celula");
    div.classList.add(peca.tipo);
    item.appendChild(div);
    div.style.gridColumn = 3 + peca.formato[celula][1];
    div.style.gridRow = 3 + peca.formato[celula][0];
  }

  return item;
}

function imprimeTabuleiro(tabuleiro) {
  const item = document.createElement("div");
  item.classList.add("tabuleiro");

  for (let linha = 0; linha < 5; linha++) {
    for (let coluna = 0; coluna < 11; coluna++) {
      const div = document.createElement("div");
      div.classList.add("celula");
      div.textContent = tabuleiro[linha][coluna];
      item.appendChild(div);
    }
  }

  return item;
}

function giraHorario(peca){
  for(let i = 0; i < peca.formato.length; i++){
    const pedaco = peca.formato[i];
    const aux = pedaco[0];
    pedaco[0] = pedaco[1];
    pedaco[1] = -aux;
  }
}

function giraAntiHorario(peca){
  for(let i = 0; i < peca.formato.length; i++){
    const pedaco = peca.formato[i];
    const aux = pedaco[0];
    pedaco[0] = -pedaco[1];
    pedaco[1] = aux;
  }
}

function espelha(peca){
  for(let i = 0; i < peca.formato.length; i++){
    const pedaco = peca.formato[i];
    pedaco[1] = -pedaco[1];
  }
}