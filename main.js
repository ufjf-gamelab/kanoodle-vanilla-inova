//Cria estado do tabuleiro

const tabuleiro = [];

for (let linha = 0; linha < 5; linha++) {
  tabuleiro[linha] = [];
  for (let coluna = 0; coluna < 11; coluna++) {
    tabuleiro[linha][coluna] = " ";
  }
}

tabuleiro[1][3] = "a";
console.log(tabuleiro);
document.body.appendChild(imprimeTabuleiro(tabuleiro));

// Cria lista de peças
const pecas = {
  a: {
    disponivel: true,
    tipo: "a",
    formato: [[0, 0]],
  },
  b: {
    disponivel: true,
    tipo: "b",
    formato: [[0, 0],[0, 1]],
  },
};

document.body.appendChild(imprimePecas(pecas));

function imprimePecas(listaPecas) {
  const pecas = document.createElement("ol");
  pecas.classList.add("pecas")
  for(let chave in listaPecas){
    console.log(chave);
    const peca = document.createElement("li");
    peca.classList.add("peca");
    peca.textContent = listaPecas[chave].tipo;
    pecas.appendChild(peca);
  }
  

  return pecas;
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
