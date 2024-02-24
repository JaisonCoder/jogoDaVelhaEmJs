var jogador = "x";
var coresJogadas = Array.from({ length: 9 }, () => "");
var corJogadorX = "red";
var corJogadorO = "blue";
var vitoriasX = 0;
var vitoriasO = 0;
var elementoVitoriasX = document.getElementById("jogador-x")
var elementoVitoriasO = document.getElementById("jogador-o")

function alternarCor() {
    var quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach(function (celula, index) {
        celula.style.color = coresJogadas[index];

    });

}

function restartPage() {
    location.reload();
}
function verificarGanhador() {
    var quadrados = document.querySelectorAll(".quadrado");
    var valores = [];
    quadrados.forEach(function (celula, index) {
        valores.push(celula.innerHTML);
        if (celula.innerHTML !== "") {
            coresJogadas[index] = celula.innerHTML === "x" ? corJogadorX : corJogadorO;
        }

       
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
            if (valores[a] === "x"){
                vitoriasX++;
                elementoVitoriasX.textContent = vitoriasX;
                localStorage.setItem("vitoriasX", vitoriasX);
            }else{
                vitoriasO++;
                elementoVitoriasO.textContent = vitoriasO;
                localStorage.setItem("vitoriasO", vitoriasO);
            }
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
    if (localStorage.getItem("vitoriasX") !== null) {
        vitoriasX = parseInt(localStorage.getItem("vitoriasX"));
        elementoVitoriasX.textContent = vitoriasX;
      }
      if (localStorage.getItem("vitoriasO") !== null) {
        vitoriasO = parseInt(localStorage.getItem("vitoriasO"));
        elementoVitoriasO.textContent = vitoriasO;
      }
    if (todosPreenchidos) {
        alert("Empatou!")
    }
}
function jogar(celula) {
    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;
        verificarGanhador();
        jogador = jogador === "x" ? "o" : "x";
        alternarCor();
    }
}
