// desarrollar un programa que capture tres números e imprima por pantalla
// cual es el número mayor, el menor, cuales son iguales, si los tres
// diferentes.

let num1 = Number(prompt("Digite el primer numero 1 : "))

let num2 = Number(prompt("Digite el primer numero 2 : "))

let num3 = Number(prompt("Digite el primer numero 3 : "))

if (num1 > num2 && num1 > num3) {
    console.log("El número", num1, "es el mayor")
} else if (num2 > num1 && num2 > num3) {
    console.log("El número", num2, "es el mayor")
} else {
    console.log("El número", num3, "es el mayor")
}

if (num1 < num2 && num1 < num3) {
    console.log("El número", num1, "es el menor")
} else if (num2 < num1 && num2 < num3) {
    console.log("El número", num2, "es el menor")
} else {
    console.log("El número", num3, "es el menor")
}

if (num1 == num2 && num1 == num3) {
    console.log("Los tres números son iguales")
} else if (num2 == num1 && num2 == num3) {
    console.log("Hay dos números iguales")
} else {
    console.log("Los tres números son diferentes")
}