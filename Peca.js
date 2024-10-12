export function selecionaPeca(pecaSelecionada, peca) {
  if (!peca.disponivel) {
    return;
  }

  if (pecaSelecionada === peca) {
    pecaSelecionada = null;
  }

  pecaSelecionada = peca;
}

function giraHorario(peca) {
  for (let i = 0; i < peca.formato.length; i++) {
    const pedaco = peca.formato[i];
    const aux = pedaco[0];
    pedaco[0] = pedaco[1];
    pedaco[1] = -aux;
  }
}

function giraAntiHorario(peca) {
  for (let i = 0; i < peca.formato.length; i++) {
    const pedaco = peca.formato[i];
    const aux = pedaco[0];
    pedaco[0] = -pedaco[1];
    pedaco[1] = aux;
  }
}

function espelha(peca) {
  for (let i = 0; i < peca.formato.length; i++) {
    const pedaco = peca.formato[i];
    pedaco[1] = -pedaco[1];
  }
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

export function imprimePecas(listaPecas, onPecaClick) {
  const pecas = document.createElement("ol");
  pecas.classList.add("pecas");
  for (let chave in listaPecas) {
    const ePeca = imprimePeca(listaPecas[chave]);
    pecas.appendChild(ePeca);
    ePeca.addEventListener("click", () => {onPecaClick(listaPecas[chave])})
  }
  return pecas;
}