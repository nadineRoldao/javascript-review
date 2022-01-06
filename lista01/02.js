
const prompt = require('prompt-sync')();
let num = parseInt(prompt("Digite um número inteiro: "));

let isPrimo = true;
let contadorDivisao = 0;

for(i = 1; i <= num; i++) {
    if (num <= 1) {
        isPrimo = false;
        break;
    }
        
    if (num % i == 0) {
        contadorDivisao++
    }

    if (contadorDivisao > 2) {
        isPrimo = false;
        break;
    }
}


if (isPrimo) {
    console.log(num + ' é primo');
} else {
    console.log(num + ' não é primo');
}