// 17.desarrollar el algoritmo que lea tres números y diga si uno es divisible del
// otro.

let num1 = Number(prompt("Digite el primer numero 1 : "))

let num2 = Number(prompt("Digite el primer numero 2 : "))

let num3 = Number(prompt("Digite el primer numero 3 : "))

if (num1 % num2==0 && num1 % num3 == 0 && num2 % num2==0 ){
    console.log("Hay uno de los numeros que es divisible")
}else{
    console.log("No se pueden dividir")
}