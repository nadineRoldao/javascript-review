const prompt = require('prompt-sync')();

let celsius = parseInt(prompt("Digite a temperatura em celsius: "));
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("temperatura em fahrenheit: " + fahrenheit);