const prompt = require('prompt-sync')();

let idadeNadador = parseInt(prompt("Informe a idade do nadador"));
console.log("Idade do nadador: " + idadeNadador + "<br>");

if (idadeNadador >= 5 && idadeNadador <= 7) {
	console.log("Nadador é Infantil A");

}else if (idadeNadador >= 8 && idadeNadador <= 11) {
	console.log("Nadador é Infantil B");

}else if (idadeNadador >= 12 && idadeNadador <= 13) {
	console.log("Nadador é Juvenil A");

}else if (idadeNadador >= 14 && idadeNadador <= 17) {
	console.log("Nadador é Juvenil B");

}else if (idadeNadador >= 18) {
	console.log("Nadador é Adulto");
}
