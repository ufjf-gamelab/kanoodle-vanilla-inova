function liberaPeca(tabuleiro, linha, coluna, pecas) {
  const tipo = retirarPeca(tabuleiro, linha, coluna);
  if (tipo !== undefined) {
    pecas[tipo].disponivel = true;
  }
}

function retirarPeca(tabuleiro, linha, coluna) {
  if (linha < 0 || linha >= 5 || coluna < 0 || coluna >= 11) {
    return;
  }

  if (tabuleiro[linha][coluna] === " ") {
    return;
  }
  const tipo = tabuleiro[linha][coluna];
  for (let l = 0; l < 5; l++) {
    for (let c = 0; c < 11; c++) {
      if (tabuleiro[l][c] === tipo) {
        tabuleiro[l][c] = " ";
      }
    }
  }

  return tipo;
}

function colocarPeca(tabuleiro, peca, linha, coluna) {
  if (!peca.disponivel) {
    return;
  }

  if (!podePosicionar(tabuleiro, peca, linha, coluna)) {
    return;
  }

  for (let i = 0; i < peca.formato.length; i++) {
    const pedaco = peca.formato[i];
    const AL = linha + pedaco[0];
    const AC = coluna + pedaco[1];
    tabuleiro[AL][AC] = peca.tipo;
  }

  peca.disponivel = false;
}

function podePosicionar(tabuleiro, peca, linha, coluna) {
  for (let i = 0; i < peca.formato.length; i++) {
    const pedaco = peca.formato[i];
    const AL = linha + pedaco[0];
    const AC = coluna + pedaco[1];
    if (AL < 0 || AL >= 5 || AC < 0 || AC >= 11) {
      return false;
    }
    if (tabuleiro[AL][AC] !== " ") {
      return false;
    }
  }

  return true;
}

export function imprimeTabuleiro(tabuleiro, onCelulaClicada) {
  const item = document.createElement("div");
  item.classList.add("tabuleiro");

  for (let linha = 0; linha < 5; linha++) {
    for (let coluna = 0; coluna < 11; coluna++) {
      const div = document.createElement("div");
      div.classList.add("celula");
      div.textContent = tabuleiro[linha][coluna];
      item.appendChild(div);

      div.addEventListener("click", () => {
        onCelulaClicada(linha, coluna);
      });
    }
  }

  return item;
}
