function IMC(peso, altura) {
    return peso/(altura*altura);
}

let peso = 70
let altura = 1.56

console.log("IMC: " + IMC(peso, altura));

// let resultadoIMC = IMC(peso, altura)

// if (resultadoIMC < 18,5){
// console.log("Magreza")
// }
// else if (resultadoIMC >= 18,5 && IMC < 24,9){
// console.log("Peso normal")
// }
// else if (resultadoIMC >= 25 && IMC < 29,9){
// console.log("Sobrepeso")
// }
// else if (resultadoIMC >= 30 && IMC < 39,9){
// console.log("Obesidade")
// }
// else if (resultadoIMC >= 40){
// console.log("Obesidade grave")
// }
