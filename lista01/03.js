const prompt = require('prompt-sync')();

let parcela = parseFloat(prompt("Digite o valor da parcela do financiamento do carro: "));
let salario = parseFloat(prompt("Digite o salário do cliente que deseja comprar o carro: "));

if (parcela > (salario * 0.30)) {
	console.log("financiamento não aprovado, o valor da parcela compromete mais de 30% do salário do cliente.");
}else{
	console.log("financiamento aprovado.");
}