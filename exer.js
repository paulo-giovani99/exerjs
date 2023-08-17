let numerosPositivos = 0;
let numerosNegativos = 0;
let numerosPares = 0;
let numerosImpares = 0;

while (true) {
  const numero = parseInt(prompt("Digite um número (ou zero para encerrar):"));

  if (numero === 0) {
    break;
  } else if (numero > 0) {
    numerosPositivos++;
  } else {
    numerosNegativos++;
  }

  if (numero % 2 === 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
}

console.log("Quantidade de números positivos:", numerosPositivos);
console.log("Quantidade de números negativos:", numerosNegativos);
console.log("Quantidade de números pares:", numerosPares);
console.log("Quantidade de números ímpares:", numerosImpares);
