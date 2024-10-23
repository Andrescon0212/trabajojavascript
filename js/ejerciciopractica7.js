// Desarrolle un algoritmo que lea de un registro: el nombre, la edad, el sexo,
// el estado civil de cualquier persona e imprima el nombre de la persona, si
// corresponde a un hombre casado mayor de 40 años o a una mujer soltera
// menor de 50 años.

let nombre =prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"))
let sexo = prompt("Ingrese su sexo (h o m)")
let estado = prompt("Ingrese su estado civil")

if (sexo == ("h") && estado == ("casado") && edad > 40){
    console.log("Su nombre es: ",nombre)
}else if (sexo ==("m") && estado == ("soltera") && edad < 50 ){
    console.log("Su nombre es: ", nombre)
}
