const prompt = require('prompt-sync')();

let dolar = parseFloat(prompt("Digite o valor do produto em dólares:"));
const real = dolar * 5.50;

console.log("valor em reais: " + real);