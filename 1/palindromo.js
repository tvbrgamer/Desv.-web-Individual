function checar() {
    let campo = document.getElementById("texto");
    let texto = campo.value;
    let invertido = "";
  
    let separado = texto.split("");
  
    for (let i = separado.length - 1; i >= 0; i--) {
      invertido += separado[i];
      console.log(invertido);
    }
  
    if (invertido === texto) {
      window.alert("Sua palavra é um palíndromo");
    } else {
      window.alert("Sua palavra não é um palíndromo");
    }
  }