/*
Questão 9: Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript?
*/

let lado1 = 2
let lado2 = 7
let lado3 = 2
  if (lado1 === lado2 && lado2=== lado3 ) {
    console.log("equilatero")
} else if (lado3 === lado1 ) {
    console.log("esse triangulo é isosceles")
} else {
    console.log("escaleno")
}