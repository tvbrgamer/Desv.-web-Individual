const img = document.getElementById("labirinto");

rodando = false;

console.log(rodando);

function iniciar(){
    rodando = true;
    img.src = "labirinto.png";

    console.log(rodando);
}

function loss(){
    if(rodando==true){
    rodando = false;
    img.src = "perdeu.png";
    }
    console.log("loss " + rodando);
}

function win(){
    if(rodando==true){
    rodando = false;
    img.src = "ganhou.png";
    }
    console.log("win " + rodando);
}