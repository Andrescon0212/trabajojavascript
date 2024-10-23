// 13.desarrollar un algoritmo que halle la nota total de una materia en el SENA, y
// determine si la gano o la reprobó

let nota1 = Number(prompt("Digite la nota numero 1 : "))

let nota2 = Number(prompt("Digite la nota numero 2 : "))

let nota3= Number(prompt("Digite la nota numero 3 : "))

let nota4= Number(prompt("Digite la nota numero 4 : "))

let nota5= Number(prompt("Digite la nota numero 5 : "))

let promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/ 5

if (promedio > 3.5){
    console.log("El estudiante aprobo")
}else{
    console.log("El estudiante no aprobo")
}