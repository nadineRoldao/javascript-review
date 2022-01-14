const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));
const media = (nota1 + nota2) / 2;

console.log("média: " + media + "<br>");

if (media >= 6) {
	console.log("aluno aprovado");
}else{
	console.log("aluno reprovado");
}
	