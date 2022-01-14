const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite outro número"));
let num3 = parseInt(prompt("Digite outro número"));

let aux = num1;

if(num2 > num1){
	aux = num2;
	num2 = num1;
	num1 = aux;
}

if(num3 > num1){
	aux = num3;
	num3 = num1;
	num1 = aux;
}

if(num3 > num2){
	aux = num3;
	num3 = num2;
	num2 = aux;
	console.log("Primeiro número digitado: " + num1);
	console.log("Segundo número digitado: " + num2);
	console.log("Terceiro número digitado: " + num3);
}
	

console.log("Ordem crescente: " + num3 + " - " + num2 + " - " + num1);