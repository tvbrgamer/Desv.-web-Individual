const textoElementos = document.getElementsByClassName("texto");
const body = document.getElementById("body");

let escuro = false;

console.log(escuro);

function alternarModo(){

    if(escuro == false){
        escuro = true;
    } else{
        escuro = false;
    }

  for (let i = 0; i < textoElementos.length; i++) {
    textoElementos[i].style.color = escuro ? "white" : "black";
  }

  body.style.backgroundColor = escuro ? "black" : "white";
}
