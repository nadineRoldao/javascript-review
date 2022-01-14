const prompt = require('prompt-sync')();

let saldo = parseFloat(prompt("Digite o valor do saldo médio:"));
let perCredito = 0;

if (saldo <= 2000) {
    console.log("Saldo médio: " + saldo + " - nenhum crédito");
}
if ((saldo > 2000) && (saldo <= 10000)) {
    perCredito = saldo * 0.20;
    console.log("Saldo médio: " + saldo + " - 20% do valor do saldo médio - " + "crédito especial: " + perCredito);

}
if ((saldo > 10000) && (saldo <= 20000)) {
    perCredito = saldo * 0.30;
    console.log("Saldo médio: " + saldo + " - 30% do valor do saldo médio - " + "crédito especial: " + perCredito);
}
if (saldo > 20000) {
    perCredito = saldo * 0.40;
    console.log("Saldo médio: " + saldo + " - 40% do valor do saldo médio - " + "crédito especial: " + perCredito);
}