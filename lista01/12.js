const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite um número qualquer"));
let num2 = parseFloat(prompt("Digite um outro número"));
let num3 = parseFloat(prompt("Digite um outro número")); 

if (num1 > num2 && num1 > num3) {
	console.log("maior número digitado: " + num1);
}
if (num2 > num1 && num2 > num3) {
	console.log("maior número digitado: " + num2);
}
if (num3 > num2 && num3 > num1) {
	console.log("maior número digitado: " + num3);
}