// desarrollar un programa que, dado una calificación de un alumno en un
// parcial, escribe aprobado si la calificación es superior a 3.

let nota1 = parseInt(prompt("Digite la nota 1 : "))

let nota2 = parseInt(prompt("Digite la nota 2 : "))

let nota3 = parseInt(prompt("Digite la nota 3 : "))

let promedio = (nota1 + nota2 + nota3)/3

if (promedio >3){
    console.log("El estudiante aprobo")
}
else{
    console.log("El estudiante desaprobo")
}