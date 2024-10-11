const tabuleiro = [];

for(let linha = 0; linha < 5; linha++){
    tabuleiro[linha] = [];
    for(let coluna = 0; coluna < 11; coluna++){
        tabuleiro[linha][coluna] = " ";
    }
}

tabuleiro[1][3] = "a";
console.log(tabuleiro);
document.body.appendChild(imprimeTabuleiro(tabuleiro));

function imprimeTabuleiro(tabuleiro){
    const item = document.createElement("div");
    item.classList.add("tabuleiro");

    for(let linha = 0; linha < 5; linha++){
        for(let coluna = 0; coluna < 11; coluna++){
            const div = document.createElement("div");
            div.classList.add("celula");
            div.textContent = tabuleiro[linha][coluna];
            item.appendChild(div);
        }
    }

    return item;
}