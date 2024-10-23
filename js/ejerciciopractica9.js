// Dados tres números enteros únicos, a, b y c. Elabore un algoritmo que los
// ordene de mayor a menor e imprímalos.

let a = parseInt(prompt("Ingrese el primer numero: "));
let b = parseInt(prompt("Ingrese el segundo numero: "));
let c = parseInt(prompt("Ingrese el tercer numero: "));

if (a > b && a > c) {
    if (b > c) {
        console.log("El numero mayor es: ",a,"El numero medio es: ", b,"El numero menor es: ", c);
    } else {
        console.log("El numero mayor es: ",a,"El numero medio es: ", c,"El numero menor es: ", b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log("El numero mayor es: ",b,"El numero medio es: ", a,"El numero menor es: ", c);
    } else {
        console.log("El numero mayor es: ",b,"El numero medio es: ", c,"El numero menor es: ", a);
    }
} else {
    if (a > b) {
        console.log("El numero mayor es: ",c,"El numero medio es: ", a,"El numero menor es: ", b);
    } else {
        console.log("El numero mayor es: ",c,"El numero medio es: ", b,"El numero menor es: ", a);
    }
}
