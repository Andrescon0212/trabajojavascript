let num1 = parseInt(prompt("Digite el primer numero: "))
let num2 = parseInt(prompt("Digite el segundo numero: "))
let num3 = parseInt(prompt("Digite el tercer numero: "))

if (num1 > num2 && num1 > num3){
    console.log(num1 + "  Es mayor que  " + num2 + " Y que  " + num3)
}
else{
    if (num2 > num1 && num2 > num3){
        console.log(num2 + " Es mayor que  " + num1 + " Y que  " + num3)
    }else{
        console.log(num3 + " Es mayor que  " + num1 + " Y que  " + num2)
    }
}