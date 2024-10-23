// Prepare un algoritmo que identifique e imprima el número medio de un
// conjunto de tres números únicos. El número medio es aquel que no es el
// menor ni el mayor.

let num1 = Number(prompt("Digite el primer numero 1 : "))

let num2 = Number(prompt("Digite el primer numero 2 : "))

let num3 = Number(prompt("Digite el primer numero 3 : "))

if (num1 > num2 && num1 > num3 && num2 < num3 && num3 > num1) {
    console.log("El número", num2, "esta en la mitad")
} else if (num2 > num1 && num3 > num1 && num3 < num2 && num1 > num2) {
    console.log("El número", num1, "esta en la mitad")
} else if (num3 > num1 && num3 > num2 && num2 < num3 && num1 > num3) {
    console.log("El número", num3, "esta en la mitad")
}
