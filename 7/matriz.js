// Sinceramente professor, acho que dava pra fazer mais bonito, mais simples, só que foi a forma que pensei na hora

const geraLinha = document.getElementById("geraLinha");
const geraColuna = document.getElementById("geraColuna");

const pMatriz = document.getElementById("pMatriz");

const zeraValor = document.getElementById("zeraValor");

let linha, coluna;

let valor;

let matrizSalva;

function geraMatriz() {
  linha = geraLinha.value;
  coluna = geraColuna.value;

  var matriz = new Array(linha);
  for (var x = 0; x < linha; x++) {
    matriz[x] = new Array(coluna);
  }

  for (i = 0; i < linha; i++) {
    for (j = 0; j < coluna; j++) {
      matriz[i][j] = num();
    }
    console.log(matriz[i][j]);
  }

  matrizSalva = matriz;

  mostraMatriz(matriz);
}

function mostraMatriz(matriz) {
  let texto = "";
  for (let i = 0; i < matriz.length; i++) {
    texto += matriz[i].join(" ");
    texto += "<br><br>";
  }
  pMatriz.innerHTML = texto;
}

function zeraLinha() {
  valor = zeraValor.value;

  for (j = 0; j < coluna; j++) {
    if (matrizSalva[valor - 1][j] != null) {
      matrizSalva[valor - 1][j] = "0";
    }
  }

  mostraMatriz(matrizSalva);
}

function zeraColuna() {
  valor = zeraValor.value;

  for (i = 0; i < linha; i++) {
    if (matrizSalva[i][valor - 1] != null) {
      matrizSalva[i][valor - 1] = "0";
    }
  }

  mostraMatriz(matrizSalva);
}

function num() {
  let num = Math.floor(Math.random() * 10);
  return num;
}
