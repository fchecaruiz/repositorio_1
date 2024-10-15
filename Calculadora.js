// FUNCIONES CALCULADORA POR SEPARADO

const { cuadrado_num } = require("./cuadrado_num");

// function suma(numero1, numero2){

// 	return numero1 + numero2;
// }git add .

// function resta(numero1, numero2){
// 	return numero1 - numero2;
// }

// function multiplicacion(numero1, numero2){
// 	return numero1 * numero2;
// }

// function division(numero1, numero2){
// 	return numero1 / numero2;
//}

// module.exports = {suma,resta,multiplicacion,division};


	const resta = (numero1,numero2) => {
		return numero1 - numero2;
	}

	const multiplicacion = (numero1,numero2) => {
		return numero1 * numero2;
	}

	const division = (numero1,numero2) =>{
		return numero1 / numero2;
	}
	resultado = division()
	console.log(resultado)

	const cuadrado_num = (a) => {
		return a * a
	}
	console.log (cuadrado_num());

	module.exports = {suma,resta,multiplicacion,division};



