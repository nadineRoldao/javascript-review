const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite seu peso"));
let numero = parseInt(prompt("Digite um número de 1 á 6"));
let gravidade = 0;

if (numero == 1) {
	gravidade = 0.37;
}
if (numero == 2) {
    gravidade = 0.88;
}
if (numero == 3) {
	gravidade = 0.38;
}
if (numero == 4) {
    gravidade = 2.64;
}
if (numero == 5) {
	gravidade = 1.15;
}
if (numero == 6) {
	gravidade = 1.17;
}

const pPlaneta = (peso/100)*gravidade;
console.log("Seu peso é: " + pPlaneta);


