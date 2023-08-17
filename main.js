var notas = ["5", "4", "7", "8" ,"10"];
console.log(`as notas dos alunos são ${notas}`)

var nota = ["10"];
console.log(`a maior nota é ${nota}`)

var nota = ["4"];
console.log(`a nota mais baixa é ${nota}`)

var notas = [
    5,
    4,
    7,
    8,
    10,
];

var soma = 0;

for(var i = 0; i < notas.length; i++)
{
    var numero = notas[i];
    soma = soma + numero;
}
var media = soma / notas.length;
console.log( `a media das notas é ${media}`);

