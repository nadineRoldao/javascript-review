const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do produto:");
let qA = parseInt(prompt("Digite a quantidade adiquirida:"));
let pU = parseFloat(prompt("Digite o preço unitário"));

const total = qA * pU;
let desconto = 0;
const tP = total - desconto;

if (qA <= 5) {
  desconto = total * 0.02;

}else if (qA > 5 && qA <= 10) {

  desconto = total * 0.03;
}else if (qA > 10) {

  desconto = total * 0.05;
}

console.log("Nome Produto: " + nome);
console.log("Quantidade Adquirida: " + qA);
console.log("Preço Unitário: " + pU);
console.log("Total a Pagar: " + tP);