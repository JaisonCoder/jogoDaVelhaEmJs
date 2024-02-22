var jogador = "x";
var mudarCor = false;
function jogar(celula){

    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador = "o";
          
        }else{
            jogador = "x"
        }
     
    }
}

function restartPage(){
   location.reload();
}
