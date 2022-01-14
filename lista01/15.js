const prompt = require('prompt-sync')();

let litro = parseInt(prompt("Digite a quantidade em litros"));
let tipo = prompt("Digite A para álcool ou  digite G para gasolina");
const litroG = 3.30;
const litroA = 2.90;
let valorPagar = 0;

if (tipo == "A") {
	if (litro <= 20) {
		valorPagar = (litro * litroA) - (litro * 0.3);
		console.log("valor a ser pago: " + valorPagar);
	}else{
		valorPagar = (litro * litroA) - (litro * 0.5);
		console.log("valor a ser pago: " + valorPagar);
	}
}

if (tipo == "G") {
	if (litro <= 20) {
		valorPagar = (litro * litroG) - (litro * 0.4);
		console.log("valor a ser pago: " + valorPagar);
	}else{
		valorPagar = (litro * litroG) - (litro * 0.6);
		console.log("valor a ser pago: " + valorPagar);
	}

}