const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite um número qualquer"));
let num2 = parseFloat(prompt("Digite um outro número"));
let num3 = parseFloat(prompt("Digite um outro número")); 

let somaMaiores = 0;

if ((num1 > num2 && num1 > num3) && (num2 > num3)) {
	somaMaiores = num1 + num2;
	console.log("soma dos maiores: " + somaMaiores);
}
if ((num1 > num2 && num1 > num3) && (num3 > num2)) {
	somaMaiores = num1 + num3;
	console.log("soma dos maiores: " + somaMaiores);
}
if ((num2 > num1 && num2 > num3) && (num1 > num3)) {
	somaMaiores = num2 + num1;
	console.log("soma dos maiores: " + somaMaiores);
}
if ((num2 > num1 && num2 > num3) && (num3 > num1)) {
	somaMaiores = num2 + num3;
	console.log("soma dos maiores: " + somaMaiores);
}
if ((num3 > num2 && num3 > num1) && (num1 > num2)) {
	somaMaiores = num1 + num3;
	console.log("soma dos maiores: " + somaMaiores);
}
if ((num3 > num2 && num3 > num1) && (num2 > num1)) {
	somaMaiores = num2 + num3;
	console.log("soma dos maiores: " + somaMaiores);
}