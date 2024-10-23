// desarrollar el algoritmo dado como dato el sueldo de un trabajador, le aplica
// un aumento del 15% si su sueldo es inferior a $300.000.

let sueldo = parseInt(prompt("Digite su sueldo: "))

if (sueldo<300000){
    let aumento =(sueldo * 0.15) + sueldo
    console.log("Su salario tiene un aumento del 15% y es : ",aumento)
}
else{
    console.log("Su salario es : ",sueldo)
}