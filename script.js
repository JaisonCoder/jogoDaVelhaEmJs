var jogador = "x";
var coresJogadas = Array.from({length:9}, () => "");
function alternarCor() {
    var quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach(function (celula, index) {
        if (jogador === "x") {
            celula.style.color = "blue";
        } else if (jogador === "o") {
            celula.style.color = "green";
        }
    });

}

function restartPage() {
    location.reload();
}
function verificarGanhador() {
    var quadrados = document.querySelectorAll(".quadrado");
    var valores = [];
    quadrados.forEach(function (celula) {
        valores.push(celula.innerHTML);
    });

    var combinacoesVencedoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (var i = 0; i < combinacoesVencedoras.length; i++) {
        var [a, b, c] = combinacoesVencedoras[i];
        if (valores[a] !== "" && valores[a] === valores[b] && valores[a] === valores[c]) {
            alert("O Jogador " + valores[a] + " ganhou!");
            return;
        }
    }
    var todosPreenchidos = true;
    for (var i = 0; i < valores.length; i++) {
        if (valores[i] === "") {
            todosPreenchidos = false;
            break;
        }
    }
    if (todosPreenchidos) {
        alert("Empatou!")
    }
}
function jogar(celula) {
    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;
        verificarGanhador();
        if (jogador == "x") {
            jogador = "o";
        } else {
            jogador = "x"
        }
        alternarCor();
    }
}