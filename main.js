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

colocarPeca(tabuleiro, pecas.c, 3, 5);
liberaPeca(tabuleiro, 3, 5, pecas);
colocarPeca(tabuleiro, pecas.c, 1, 5);

document.body.appendChild(imprimeTabuleiro(tabuleiro));
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

function podePosicionar(tabuleiro, peca, linha, coluna){
  for(let i = 0; i < peca.formato.length; i++){
    const pedaco = peca.formato[i];
    const AL = linha + pedaco[0];
    const AC = coluna + pedaco[1];
    if(AL < 0 || AL >= 5 || AC < 0 || AC >= 11){
      return false;
    }
    if(tabuleiro[AL][AC] !== " "){
      return false;
    }
  }

  return true;
}

function colocarPeca(tabuleiro, peca, linha, coluna){
  if(!peca.disponivel){
    return;
  }

  if(!podePosicionar(tabuleiro, peca, linha, coluna)){
    return;
  }

  for(let i = 0; i < peca.formato.length; i++){
    const pedaco = peca.formato[i];
    const AL = linha + pedaco[0];
    const AC = coluna + pedaco[1];
    tabuleiro[AL][AC] = peca.tipo;
  }

  peca.disponivel = false;
}

function retirarPeca(tabuleiro, linha, coluna){
  if(linha < 0 || linha >= 5 || coluna < 0 || coluna >= 11){
    return;
  }

  if(tabuleiro[linha][coluna] === " "){
    return;
  }
  const tipo = tabuleiro[linha][coluna];
  for(let l = 0; l < 5; l++){
    for(let c = 0; c < 11; c++){
      if(tabuleiro[l][c] === tipo){
        tabuleiro[l][c] = " ";
      }
    }
  }

  return tipo;
}

function selecionaPeca(pecaSelecionada, peca){
  if(!peca.disponivel){
    return;
  }

  if(pecaSelecionada === peca){
    pecaSelecionada = null;
  }

  pecaSelecionada = peca;
}


function liberaPeca(tabuleiro, linha, coluna, pecas){
  const tipo = retirarPeca(tabuleiro, linha, coluna);
  if(tipo !== undefined){
    pecas[tipo].disponivel = true;
  }
}