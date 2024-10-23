let num1 = parseInt(prompt("Escriba un numero Negativo: "))

if (num1 > 0 ){
    console.log("Tienes que digitar un numero negativo")

}

if (num1 < 0) {
    let numPos = num1 * -1
    console.log("El numero que digitaste es: ", num1 , "Y este numero en positivo es: ", numPos)
}