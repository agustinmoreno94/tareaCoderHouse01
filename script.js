let nombre = prompt("ingrese su nombre")
let salario =  parseInt(prompt("cuanto es tu salario mensual?"))
let sube = parseInt(prompt("cuanto gastas en sube por semana?"))
let comida = parseInt(prompt("cuanto gastas en comida por semana?"))

let respuesta = salario-sube-comida;
let gastoMensual = (sube+comida)*4

alert(nombre+" despues de todos los gastos escritos tu salario queda en: "+respuesta+" con un gasto mensual de "+gastoMensual)




