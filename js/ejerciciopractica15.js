// desarrollar el algoritmo que evalué la formula cuadrática o general.
let a = Number(prompt("Digite el numero a : "))

let b = Number(prompt("Digite el numero b : "))

let c = Number(prompt("Digite el numero c : "))

if (a!=0 && b!=0 && c!=0){

let formula = Math.sqrt(b**2 - 4 * a * c);

let solucionsuma = (-b + formula) / (2 * a)
let solucionresta = (-b - formula) / (2 * a)

console.log("Las soluciones son:", solucionsuma, "y", solucionresta)
}else{
    console.log("Debes de digitar un numero mayor que cero")
}


