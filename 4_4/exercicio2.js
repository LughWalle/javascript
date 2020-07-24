console.log("exercicio1");
function verificaPalindromo(palavra) {
  let letras = palavra.split("");
  let ePalidromo = true;
  for (const i in letras) {
    if (letras[i] != palavra[palavra.length - 1 - i]) {
      ePalidromo = false;
    }
  }
  return ePalidromo;
}
console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("desenvolvimento"));

console.log("exercicio2");
function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (const indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

console.log("exercicio3");
function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (const indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

console.log("exercicio4");
function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (const indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}
console.log(maiorPalavra(["jose", "lucas", "nadia", "fernanda"]));

console.log("exercicio5");

let arr = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
  let contrep = 0;
  let contNum = 0;
  let iNumeroRepetido = 0;
  for (let i in numeros) {
    let verificaNumero = numeros[i];
    for (let i2 in numeros) {
      if (verificaNumero === numeros[i2]) {
        contNum++;
      }
    }
    if (contNum > contrep) {
      contrep = contNum;
      iNumeroRepetido = i;
    }
    contNum = 0;
  }
  return numeros[iNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index++) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5));

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");
  controle = true;
  for (let i = 0; i < fimPalavra.length; i++) {
    if (palavra[palavra.length - fimPalavra.length + i] != fimPalavra[i]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false
