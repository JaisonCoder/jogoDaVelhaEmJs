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
        if(mudarCor){
            alternarCor();
            
            mudarCor = false;
        }else{
            mudarCor = true;
        }
    }
}
function alternarCor(){
    var texto = document.getElementById("teste")
   
    if(texto, texto1){
        texto.style.color = "red";
        
    }else{
        console.error("Elemento com id 'teste' não encontrado.");
    }
}
