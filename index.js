const quantidade = parseInt(prompt("Quantas vezes você deseja rolar o dado?"));

for (let i = 0; i < quantidade; i++) {
  const valor = Math.floor(Math.random() * 6) + 1;
  console.log("Valor do dado:", valor);
}